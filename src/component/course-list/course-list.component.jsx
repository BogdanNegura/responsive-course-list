import React from "react";
import { SmartButton } from "../smart-button";

const CourseList = ({ filter, course, handleOnClick }) => {
  return (
    <nav>
      <div>
        {course.data.slice(0, course.limit).map((a, key) => {
          return (
            <div key={key}>
              ({a.type}) {a.title}
            </div>
          );
        })}
        {course.limit < course.data.length && (
          <SmartButton handleOnClick={handleOnClick} type="button">
            Load More
          </SmartButton>
        )}
      </div>
    </nav>
  );
};

export { CourseList };
