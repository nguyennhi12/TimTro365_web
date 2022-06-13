import { API_URL, NEWS } from "./config";
const NewsAPISetting = {
  getNewsofType: async (type) => {
    const endpoint = `${API_URL}${NEWS}/get_new_by_type?page=1&value=8`;
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ type }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  getNewsOfNew: async (id_news) => {
    const endpoint = `${API_URL}${NEWS}/get_newsbyid`;
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ id_news }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  getNewsOfNewImage: async (id_news) => {
    const endpoint = `${API_URL}${NEWS}/get_imagenewsbyidnews`;
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ id_news }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  getNewsOfHot: async (date) => {
    const endpoint = `${API_URL}${NEWS}/new_News?page=1&value=8`;
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ date }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  getSearch: async (search_key) => {
    const endpoint = `${API_URL}${NEWS}/search_News?page=1&value=8`;
    console.log(endpoint);
    const result = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ search_key }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((e) => {
        return e.text();
      })
      .then((text) => {
        console.log(text);
        return JSON.parse(text);
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(result)

    return result;
  },
  searchtype: async (search) => {
    // const account = JSON.parse(await AsyncStorage.getItem("account"))
    const endpoint = `${API_URL}${NEWS}/search_News_Types?page=1&value=8`;
    console.log(endpoint);
    const result = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(search),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((e) => {
        return e.text();
      })
      .then((text) => {
        return JSON.parse(text);
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(result)

    return result;
  },
  getAdminRattingNews: async () => {
    const endpoint = `${API_URL}${NEWS}/getAllRattingNews`;
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
};
export default NewsAPISetting;
