// components/Profile/AddressInfo.jsx
const AddressInfo = ({ address }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Shipping Address</h3>
      <p className="text-gray-600 mt-2">
        {address?.street}, {address?.city}, {address?.zip}, {address?.country}
      </p>
      <button className="mt-2 text-blue-600 underline">Edit Address</button>
    </div>
  );
};

export default AddressInfo;
