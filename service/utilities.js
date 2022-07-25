import axios from "axios";
import { AuthEmail } from "../utilities";
import { api } from "./api";
export const axiosInstance = axios.create({
  headers: {},
});

export const logout = () => {
  axiosInstance.defaults.headers.common["Authorization"] = "";

  let user = api({
    method: "POST",
    api: "logout",
    body: { email: AuthEmail },
  });
  user
    .then((data) => {
      if (data.success) {
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 100);
      } else {
        console.log("Something went wrong");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
