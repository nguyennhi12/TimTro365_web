import React, { useState, useEffect, useCallback } from "react";
import AdminAPISetting from "../config/AdminConfig";
import NewsAPISetting from "../config/NewsConfig";
export const HookGetAdminAllInnkeeper = () => {
  const [account, setAccount] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getAdminAllInnkeeper(token);
      if (detail.statusCode == 200) {
        setAccount(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, account, fetchNews]);
  return { account, check };
};
export const HookGetAdminRattingNews = () => {
  const [news, setnews] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getAdminRattingNews(token);
      if (detail.statusCode == 200) {
        setnews(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, news, fetchNews]);
  return { news, check };
};
export const HookAdminNewsByInnkeeper = (iduser) => {
  const [news, setnews] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getAdminNewsByInnkeeper(iduser);
      if (detail.statusCode == 200) {
        setnews(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, news, fetchNews]);
  return { news, check };
};
export const HookGetNewsHideByAdmin = (id_user) => {
  const [news, setNews] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getNewsHideByAdmin(id_user);
      console.log(detail);
      if (detail.statusCode == 200) {
        setNews(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id_user]);
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, news, fetchNews]);
  return { news, check };
};
export const HookGetNewsHideByUser = (id_user) => {
  const [news, setNews] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getNewsHideByUser(id_user);
      console.log(detail);
      if (detail.statusCode == 200) {
        setNews(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id_user]);
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, news, fetchNews]);
  return { news, check };
};

export const HookGetRating = () => {
  const [rating, setRating] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getRatting();
      console.log(detail);
      if (detail.statusCode == 200) {
        setRating(detail.data);
      }
      setcheck(true);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    try {
      if (check == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [check, rating, fetchNews]);
  return { rating, check };
};
