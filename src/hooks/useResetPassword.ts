import axios from "axios";

export default async function useResetPassword(phone: string) {
  const url = "https://ss.m-paya.net/api.php?src=user";
  const params = {
    api: {
      request: "resetPassword",
    },
    input: {
      phone,
    },
  };
  const response = await axios.post(url, params);
  return response.data;
}
