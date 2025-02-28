// ProfilePage.jsx
import { useState } from "react";
import {
  dummyUser,
  dummyOrders,
  dummyWishlist,
  dummyPreferences,
} from "./dummyData";
import ProfileLayout from "../../Layouts/ProfileLayout";

const ProfilePage = () => {
  const [user] = useState(dummyUser);
  const [orders] = useState(dummyOrders);
  const [wishlist] = useState(dummyWishlist);
  const [preferences, setPreferences] = useState(dummyPreferences);

  return (
    <ProfileLayout
      user={user}
      orders={orders}
      wishlist={wishlist}
      preferences={preferences}
      setPreferences={setPreferences}
    />
  );
};

export default ProfilePage;
