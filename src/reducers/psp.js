import { POST_LIST, POST_PAGINATION, INITIAL_CONFIG, SORT_TYPE, LANG_TYPE, POST_ERROR, IS_NO_ITEMS, IS_LOADING } from '../actions/types.js';
import config from '../app-config.js'

// initial post state
export const initialState = {
  repos: [],
  paginator: 0,
  initialConfig: {
    langTypes: {
      javaScript: 'JavaScript',
      java: 'Java',
      python: 'Python',
      php: 'PHP',
      go: 'Go',
    },
    orders: {
      'asc': 'Ascending',
      'desc': 'Descending'
    },
    pagination: {
      perPage: config.pagination.recordsPerPage,
      from: 0,
      to: 10
    }
  },
  selectedOrder: 'asc',
  selectedLangType: 'javascript',
  isNoResult: false,
  errMsg: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST:
      return {
        ...state,
        repos: action.payload
      };

    case POST_PAGINATION:
      return {
        ...state,
        paginator: action.payload
      };

    case INITIAL_CONFIG:
      return {
        ...state,
        initialConfig: action.payload
      };

    case SORT_TYPE:
      return {
        ...state,
        selectedOrder: action.payload
      };

    case LANG_TYPE:
      return {
        ...state,
        selectedLangType: action.payload
      };

    case POST_ERROR:
      return {
        ...state,
        errMsg: action.payload
      };

    case IS_NO_ITEMS:
      return {
        ...state,
        isNoResult: action.payload
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
}
