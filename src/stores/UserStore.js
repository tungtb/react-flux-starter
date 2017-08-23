import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LocalStorage from '../utils/LocalStorage';

import {
    LOGIN_SUCCESS,
    LOGGED_IN,
    LOGOUT
} from '../constants/AppConstants';

class UserStore extends BaseStore {

    constructor(...args) {
        super(...args);
        this.sessionData = LocalStorage.getObject('loginSession') ? LocalStorage.getObject('loginSession') : null;
    }

    emitChange(action) {
        this.emit(action);
    }

    addActionListener(action, callback) {
        this.on(action, callback);
    }

    removeActionListener(action, callback) {
        this.removeListener(action, callback);
    }

    isLoggedIn() {
        return !!this.sessionData ? true : false;
    }

    getSession() {
        return this.sessionData;
    }

    loginSuccess(loginData) {
        console.log('loginData', loginData);
        this.sessionData = loginData;
        LocalStorage.setObject('loginSession', loginData);
        this.emitChange(LOGGED_IN);
    }

    logout() {
        this.sessionData = null;
        LocalStorage.removeItem('loginSession');
        this.emitChange(LOGOUT);
    }
}

let userStore = new UserStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case LOGIN_SUCCESS:
            userStore.loginSuccess(action.loginData);
            break;
        case LOGOUT:
            userStore.logout();
            break;
        default:
    }
});

export default userStore;