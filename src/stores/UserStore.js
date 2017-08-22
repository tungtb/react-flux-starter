import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LocalStorage from '../utils/LocalStorage';

import {
    LOGIN_SUCCESS,
    LOGGED_IN
} from '../constants/AppConstants';

class UserStore extends BaseStore {

    constructor(...args) {
        super(...args);
        this.sessionData = LocalStorage.getObject('loginSession') ? LocalStorage.getObject('loginSession') : null;
    }

    emitChange() {
        this.emit(LOGGED_IN);
    }

    addLoggedInListener(callback) {
        this.on(LOGGED_IN, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(LOGGED_IN, callback);
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
        this.emitChange();
    }
}

let userStore = new UserStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case LOGIN_SUCCESS:
            userStore.loginSuccess(action.loginData);
            break;
        default:
    }
});

export default userStore;