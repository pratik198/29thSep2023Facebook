// let bearerToken = "Bearer ";
// let tokenset = false;

// export function getBearerToken() {
//   return bearerToken;
// }

// export function setBearerToken(newToken) {
//   if (tokenset == false) {
//     tokenset = true;
//     bearerToken = bearerToken + newToken;
//   }
// }

// export const UserMap = new Map();

// UserMap.set("65392efd65bb52b90c8fac67", {
//   name: "partik1",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("65032b7628babc1110191f62", {
//   name: "rahul",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("650e894081acb6d2f0d1a6c7", {
//   name: "manik",
//   img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg",
// });
// UserMap.set("6509655898e8a1dfeaf886d2", {
//   name: "nil",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("650e894081acb6d2f0d1a6c7", {
//   name: "thomas",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("6512bba4c3d7db3677f597c2", {
//   name: "suyash",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("65296bb6a1ea4d2294755723", {
//   name: "Nayar",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("65296bb6a1ea4d2294755723", {
//   name: "Arun",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("65392efd65bb52b90c8fac67", {
//   name: "Sejal",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });
// UserMap.set("65392efd65bb52b90c8fac67", {
//   name: "Ankita",
//   img: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
// });

// console.log(UserMap.get("65392efd65bb52b90c8fac67"));

// console.log(UserMap.get("65392efd65bb52b90c8fac67").img)

// console.log(UserMap.get("65392efd65bb52b90c8fac67").name)




export const userMap = new Map();
const userIdforCheck = localStorage.getItem("userId");
console.log(userMap);
userMap.set("65032b7628babc1110191f62",{"name":"Smith","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg"});
userMap.set("650ae52798e8a1dfeaf8e444",{"name":"David","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"});
userMap.set("650e894081acb6d2f0d1a6c7",{"name":"Ken","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg"});
userMap.set("65114162fc56d3d1ff9909c9",{"name":"Stark","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1121.jpg"});
userMap.set("6509655898e8a1dfeaf886d2",{"name":"Jems","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1131.jpg"});
userMap.set("650293b042fb9997dea65827",{"name":"Robin","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1108.jpg"});
userMap.set("65310c7fc14d0da6d7d2a98a",{"name":"Alex","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg"});
userMap.set("6512bba4c3d7db3677f597c2",{"name":"Leo","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/220.jpg"});
userMap.set("6509404fab4180c9abec2b94",{"name":"Bella","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/357.jpg"});
userMap.set("65296bb6a1ea4d2294755723",{"name":"Suyash","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/540.jpg"});
userMap.set("653cdd6e8e9b5f7b80e10263",{"name":"herry","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg"});
userMap.set("652e8f8c64d7830e72354ff6",{"name":"Arun","photo":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg"});
// ... add more data as needed

// Accessing data from userMap
const userId = "65032b7628babc1110191f62";
const user = userMap.get(userId);
if (user) {
  console.log("User Name:", user.name);
  console.log("User Photo:", user.photo);
} else {
  console.log("User not found.");
}
