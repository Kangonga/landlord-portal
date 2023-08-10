import axios from "axios";

interface loginProps {
  phone: string;
  password: string;
}
export default async function handleLogin(props: loginProps) {
  const url = "https://ss.m-paya.net/api.php?src=user";
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
  return result.data;
}
