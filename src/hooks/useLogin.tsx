import axios from "axios";

interface loginProps {
  phone: string;
  password: string;
}
export default async function useLogin(props: loginProps) {
  const url = "https://ss.m-paya.net/api.php?src=login";
  const params = {
    api: {
      request: "login",
    },
    input: {
      phone: props.phone,
      password: props.password,
    },
  };
  const result = await axios.post(url, params);
  console.log(result.data);
  return result.data;
}
