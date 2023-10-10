import axios from "axios";
// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0df8efb41504ee7b4cad96fc58d0970",
  },
});
