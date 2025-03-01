import { useState, useContext, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Loading from "../../../utils/Loading";

// Update Profile Component
const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext); // Current user from context
  const navigate = useNavigate();

  // Form State (use existing Firebase user info where available)
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        street: formData.street, // Preserve existing fields if they were already filled
        city: formData.city,
        zip: formData.zip,
        country: formData.country,
      });
    }
  }, [user]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile image upload to ImgBB
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      // console.log(import.meta.env.VITE_IMGBB_API_KEY);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        const downloadURL = data.data.url; // Get file URL from ImgBB response
        setFormData((prev) => ({ ...prev, photoURL: downloadURL })); // Update form data with URL
        alert("image uploaded successfully");
      } else {
        throw new Error("Image upload failed.");
      }
    } catch (error) {
      console.error("Image upload failed:", error.message);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update Firebase Auth profile (displayName and photoURL only for now)
    await updateUserProfile(formData.name, formData.photoURL);

    alert("Profile updated successfully!");

    // In future, you can send `street`, `city`, `zip`, `country` to your backend when ready.

    navigate("/profile"); // Redirect to profile page
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center space-y-2">
              <img
                src={formData.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
              />
              <label className="flex items-center cursor-pointer text-blue-600 hover:underline">
                <FaCloudUploadAlt className="mr-2 text-xl" />
                {uploading ? "Uploading..." : "Upload New Image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </label>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Email (read-only) */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Address Fields - Stored locally (backend in future) */}
            <div>
              <label className="block text-gray-700 font-medium">Street</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
                disabled={uploading}
              >
                {uploading ? "Please wait..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default UpdateProfile;
