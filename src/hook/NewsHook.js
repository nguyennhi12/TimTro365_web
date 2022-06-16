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
        localStorage.setItem("iduser", JSON.stringify(detail?.data[0].id_user));
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
export const HookGetInformationById = (id_user) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getInformationById(id_user);
      if (detail.statusCode == 200) {
        console.log(detail);

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
export const HookRatingNewByIdNew = (id_news) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const [avgRating, setAvgRating] = useState();
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getRatingNewByIdNew(id_news);
      if (detail.statusCode == 200) {
        setNews(detail.data);
        setAvgRating(detail?.avgRattingNews);
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
  return { news, isLoadingGetNews, avgRating };
};
export const useHookGetGoiYNews = (id_user, id_news) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.getGoiYNews(id_user, id_news);
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
export const HookHideNew = (id_news) => {
  const [news, setNews] = useState([]);
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(false);
  const fetchNews = useCallback(async () => {
    try {
      const detail = await NewsAPISetting.hideNews(id_news);
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
