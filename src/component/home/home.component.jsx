import React, { useEffect, useReducer } from "react";
import { Hero } from "../hero";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:4455/courseList");
      const { data: linkList } = await axios.get(
        "http://localhost:4455/linkList"
      );
      const typeList = [
        "All Courses",
        ...new Set(data.map(({ type }) => type))
      ];
      console.log(data, typeList, linkList);
    })();
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export { Home };
