import axios from "axios";

// export const getDashboardData = async (token: string, user: string) => {
//   // const url = "https://ss.m-paya.net/api.php?src=dashboard";
//   const url = "http://localhost:3000/data";
//   const params = {
//     api: {
//       request: "viewAccount",
//       user,
//       token,
//     },
//   };
//   // const response = await axios.post(url, params);
//   // return response.data;
//   const jsonData = await axios.get(url);
//   return jsonData.data;
// };
export const getDashboardData = async () => {
  const url = "http://localhost:3000/data";
  const jsonData = await axios.get(url);
  return jsonData.data;
};
