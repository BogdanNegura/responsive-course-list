import {
  INIT_FILTER,
  INIT_COURSE,
  INIT_LINK,
  SET_SELECTED_FILTER,
  LOAD_MORE
} from "./home.const";

export const initFilterAction = data => ({
  type: INIT_FILTER,
  data
});

export const initCourseAction = data => ({
  type: INIT_COURSE,
  data
});

export const loadMoreAction = () => ({
  type: LOAD_MORE
});

export const initLinkAction = data => ({
  type: INIT_LINK,
  data
});

export const setSelectedAction = selected => ({
  type: SET_SELECTED_FILTER,
  selected
});
