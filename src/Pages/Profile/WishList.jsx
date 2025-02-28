// components/Profile/Wishlist.jsx
const WishList = ({ wishlist }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Wishlist</h3>
      <ul className="mt-3 space-y-2">
        {wishlist.map((item) => (
          <li key={item.id} className="border-b py-2 flex justify-between">
            <span>{item.name}</span>
            <button className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
