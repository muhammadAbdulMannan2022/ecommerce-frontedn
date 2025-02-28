const AccountSettings = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Account Settings</h3>
      <div className="mt-3 space-y-2 flex justify-between">
        <button className="text-blue-600 underline">Change Password</button>
        <button className="bg-red-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
