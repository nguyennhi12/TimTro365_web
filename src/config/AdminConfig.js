import { API_URL, ADMIN , ACCOUNT} from "./config";
const AdminAPISetting = {
  getAdminAllInnkeeper: async () => {
    const endpoint = `${API_URL}${ADMIN}/getAllInnkeeper`;
    const token = localStorage.getItem("token");
    const result = await (
      await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
    return result;
  },
  getLoginAdmin: async (admin) => {
    const endpoint = `${API_URL}${ADMIN}/loginAccountAdmin`;
    const token = localStorage.getItem("accessToken");
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(admin),
      })
    ).json();
    return result;
  },
  getAdminNewsByInnkeeper: async (iduser) => {
    const endpoint = `${API_URL}${ADMIN}/getNewsByInnkeeper`;
    const token = localStorage.getItem("token");
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ iduser }),
      })
    ).json();
    return result;
  },
  
};
export default AdminAPISetting;
