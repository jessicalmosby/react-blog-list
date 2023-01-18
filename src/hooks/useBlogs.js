import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/getBlogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}
