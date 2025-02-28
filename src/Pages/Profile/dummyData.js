// dummyData.js
const dummyUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://i.pravatar.cc/150?img=3", // Placeholder avatar
  address: {
    street: "123 Green Valley",
    city: "Dhaka",
    zip: "1207",
    country: "Bangladesh",
  },
};

const dummyOrders = [
  {
    id: "ORD001",
    date: "2025-02-15",
    status: "Delivered",
  },
  {
    id: "ORD002",
    date: "2025-02-20",
    status: "Pending",
  },
  {
    id: "ORD003",
    date: "2025-02-25",
    status: "Cancelled",
  },
];

const dummyWishlist = [
  {
    id: "P001",
    name: "Organic Honey - 500g",
  },
  {
    id: "P002",
    name: "Fresh Farm Eggs - 12pcs",
  },
  {
    id: "P003",
    name: "Natural Almond Butter - 300g",
  },
];

const dummyPreferences = {
  emailUpdates: true,
  whatsappUpdates: false,
};

export { dummyUser, dummyOrders, dummyWishlist, dummyPreferences };
