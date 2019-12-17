import { MenuActionTypes } from './menuInterfaces';
import {
  SHOW_MENU,
  CREATE_NOTIFICATION,
  CLEAR_NOTIFICATION
} from './menuTypes';

export interface MenuState {
  isMenuVisible: boolean;
  notification: string;
}

const initialState: MenuState = {
  isMenuVisible: false,
  notification: ''
};

export default (state = initialState, action: MenuActionTypes): MenuState => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        isMenuVisible: action.payload
      };
    case CREATE_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: ''
      };
    default:
      return { ...state };
  }
};
