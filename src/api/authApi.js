import axios from "axios";
const cancelTokenSource = axios.CancelToken.source();


export const authApi = axios.create({
  baseURL: ``,
  cancelToken: cancelTokenSource.token,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 1|hdtB8TrFhRtdXOchbpH7LrUxufh8r6HHZbhvVuSh`,
  },
});
