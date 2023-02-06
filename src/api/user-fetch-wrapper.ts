import { AuthCredentials } from "../../typings";
import { UserApiErrors } from "../constants/enums";
import http from "./api-handler";

//calling api endpoint to authenticate user
export async function authenticateUserApi(credentials: AuthCredentials) {
    const response = await http()
      .post(`api/user/authenticate`, credentials)
      .then(function (response) {
        return response?.data;
      })
      .catch(function (error) {
        throw new Error(UserApiErrors.AUTHENTICATING_USER_UNSUCCESSFUL);
      });
    return response;
  }