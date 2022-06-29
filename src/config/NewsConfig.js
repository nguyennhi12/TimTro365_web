import { API_URL, NEWS, ACCOUNT } from "./config";
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
  getInformationById: async (id_user) => {
    const endpoint = `${API_URL}${ACCOUNT}/get_infomation_byid`;

    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ id_user }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  getRatingNewByIdNew: async (id_news) => {
    const endpoint = `${API_URL}${NEWS}/get_rattingnews_byidnewsAdmin`;
    const token = localStorage.getItem("token");
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ id_news }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
    console.log(result);
    return result;
  },
  getGoiYNews: async (id_user, id_news) => {
    const endpoint = `${API_URL}${NEWS}/get_goiy_news`;
    const result = await (
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ id_user, id_news }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).json();
    return result;
  },
  hideNews: async (props) => {
    const endpoint = `${API_URL}${NEWS}/hideNews`;
    const token = localStorage.getItem("token");
    const result = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ id_news: props?.idNews }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${props?.token}`,
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
    return result;
  },
};
export default NewsAPISetting;
