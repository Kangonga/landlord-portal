import axios from "axios";

export default async function useVerifyOtp(otp: string, userId: string) {
  const url = "https://ss.m-paya.net/api.php?src=user";
  const params = {
    api: {
      request: "otp",
      user: userId,
    },
    input: {
      otp,
    },
  };
  const response = await axios.post(url, params);
  return response.data;
}
