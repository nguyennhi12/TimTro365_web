import React, { useState, useEffect, useCallback } from "react";
import NewsAPISetting from "../config/NewsConfig";
export const HookGetNewsOfType = (type) => {
  const [news, setnews] = useState([]);
  const [check, setcheck] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getNewsofType(type);
      if (detail.statusCode == 200) {
        setnews(detail.data);
        setcheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [type]);
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
export const useGetDetailNews = (idNews) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getNewsOfNew(idNews);
      if (detail.statusCode == 200) {
        setNews(detail.data);
      }
      setIsLoadingGetNews(!isLoadingGetNews);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (isLoadingGetNews == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [isLoadingGetNews, news, fetchNews]);
  return { news, isLoadingGetNews };
};
export const useGetDetailNewsImage = (idNews) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getNewsOfNewImage(idNews);
      if (detail.statusCode == 200) {
        setNews(detail.data);
      }
      setIsLoadingGetNews(!isLoadingGetNews);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (isLoadingGetNews == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [isLoadingGetNews, news, fetchNews]);
  return { news, isLoadingGetNews };
};
export const useGetHotNews = () => {
  var date =
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear();
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getNewsOfHot(date);
      if (detail.statusCode == 200) {
        setNews(detail.data);
      }
      setIsLoadingGetNews(!isLoadingGetNews);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (isLoadingGetNews == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [isLoadingGetNews, news, fetchNews]);
  return { news, isLoadingGetNews };
};
export const SearchAll = (searchkey) => {
  console.log(searchkey)
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getSearch(searchkey);
      if (detail.statusCode == 200) {
        setNews(detail.data);
      }
      setIsLoadingGetNews(!isLoadingGetNews);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    try {
      if (isLoadingGetNews == false) {
        fetchNews();
      }
    } catch (error) {
      console.warn(error);
    }
  }, [isLoadingGetNews, news, fetchNews]);
  return { news, isLoadingGetNews };
};
