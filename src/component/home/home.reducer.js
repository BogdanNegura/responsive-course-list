import {
  INIT_FILTER,
  INIT_COURSE,
  INIT_LINK,
  LOAD_MORE,
  SET_SELECTED_FILTER
} from "./home.const";

export const initialState = {
  filter: {
    data: [],
    selected: 0
  },
  course: {
    data: [],
    limit: 10
  },
  link: {
    data: []
  }
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FILTER:
      return {
        ...state, // filter, course, link
        filter: {
          ...state.filter,
          data: action.data
        }
      };

    case SET_SELECTED_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          selected: action.selected
        }
      };
    case INIT_COURSE:
      return {
        ...state, // filter, course, link
        course: {
          ...state.course,
          data: action.data
        }
      };
    case LOAD_MORE:
      return {
        ...state,
        course: {
          ...state.course,
          limit: state.course.limit + 10
        }
      };

    case INIT_LINK:
      return {
        ...state,
        link: {
          data: action.data
        }
      };

    default:
      return state;
  }
};
