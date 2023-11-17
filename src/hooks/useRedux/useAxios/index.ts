import axios from "axios";

interface AxiosProps {
  url: string;
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
  headers?: object;
}

export const useAxios = () => {
  const request = async (props: AxiosProps) => {
    const { url, method = "GET", body, headers } = props;
    return await axios({
      url: `https://greenshop.abduvoitov.com/api${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        ...headers,
      },
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
    });
  };
  return request;
};
