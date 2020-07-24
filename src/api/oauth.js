import { post } from "axios";

const clientId = "edc01de1c278431499fc0a794308d950";
const clientSecret = "E0L00h9SMm7gIMa55bEjUnPntPc0VRc3";

const region = "us";
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();

  body.append("grant_type", "client_credentials");
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    auth: { username: clientId, password: clientSecret }
  };

  return post(API_URL, body, config);
}

export { getToken };
