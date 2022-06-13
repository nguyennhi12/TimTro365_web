import React, { useState, useEffect, useCallback } from "react";
import AdminAPISetting from "../config/AdminConfig";
import NewsAPISetting from "../config/NewsConfig";
export const HookGetAdminAllInnkeeper = () => {
  const [news, setnews] = useState([]);
  const [check, setcheck] = useState(false);
  const token = localStorage.getItem("accessToken");
  const fetchNews = useCallback(async () => {
    try {
      const detail = await AdminAPISetting.getAdminAllInnkeeper(token);
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
