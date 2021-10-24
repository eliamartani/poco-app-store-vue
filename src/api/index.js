import axios from "axios";

export function fetchApps() {
  return axios.get("./apps.json");
}
