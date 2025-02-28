// components/Profile/OrderHistory.jsx
const OrderHistory = ({ orders }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Order History</h3>
      <div className="mt-4 space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded border"
          >
            <div>
              <p className="text-gray-700 font-medium">Order #{order.id}</p>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <p
              className={`text-sm font-semibold ${
                order.status === "Delivered"
                  ? "text-green-600"
                  : "text-orange-600"
              }`}
            >
              {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
