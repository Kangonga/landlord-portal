import axios from "axios";

export const getDashboardData = async (token: string, user: string) => {
  const url = "https://ss.m-paya.net/api.php?src=dashboard";
  const params = {
    api: {
      request: "viewAccount",
      user,
      token,
    },
  };

  const jsonData = await axios.post(url, params);
  return jsonData.data;
};
