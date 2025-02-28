import BasicInfo from "../Pages/Profile/BasicInfo";
import AddressInfo from "../Pages/Profile/AddressInfo";
import OrderHistory from "../Pages/Profile/OrderHistory";
import WishList from "../Pages/Profile/WishList";
import CommunicationPreferences from "../Pages/Profile/CommunicationPreferences";
import AccountSettings from "../Pages/Profile/AccountSettings";
const ProfileLayout = ({
  user,
  orders,
  wishlist,
  preferences,
  setPreferences,
}) => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <BasicInfo user={user} />
      <AddressInfo address={user.address} />
      <OrderHistory orders={orders} />
      <WishList wishlist={wishlist} />
      <CommunicationPreferences
        preferences={preferences}
        setPreferences={setPreferences}
      />
      <AccountSettings />
    </div>
  );
};

export default ProfileLayout;
