import io from "socket.io-client";
import { BASE_URL } from "../utils/constants";

const socket =
  location.hostname === "localhost"
    ? io(BASE_URL)
    : io("/", { path: "/api/socket.io" });

export default socket;
