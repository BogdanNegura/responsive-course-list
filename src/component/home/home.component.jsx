import React, { useEffect, useReducer } from "react";
import { Hero } from "../hero";
import axios from "axios";
import { homeReducer, initialState } from "./home.reducer";
import { LinkList } from "../link-list";
import {
  initLinkAction,
  initFilterAction,
  initCourseAction,
  loadMoreAction
} from "./home.action";
import { CourseList } from "../course-list";

const Home = () => {
  const [home, updateHome] = useReducer(homeReducer, initialState);

  useEffect(() => {
    (async () => {
      const { data: courseList } = await axios.get(
        "http://localhost:4455/courseList"
      );
      const { data: linkList } = await axios.get(
        "http://localhost:4455/linkList"
      );
      const typeList = [
        "All Courses",
        ...new Set(courseList.map(({ type }) => type))
      ];
      console.log(courseList, typeList, linkList);
      updateHome(initLinkAction(linkList));
      updateHome(initCourseAction(courseList));
      updateHome(initFilterAction(typeList));
    })();
  }, []);

  const handleOnClick = () =>
    console.log("adadawdawdaw") || updateHome(loadMoreAction());

  console.log(home, "aaaaaaaaaaaaaaaaaaa");
  return (
    <div>
      <Hero />
      <CourseList
        handleOnClick={handleOnClick}
        filter={home.filter}
        course={home.course}
      />
      <LinkList linkData={home.link.data} />
    </div>
  );
};

export { Home };
