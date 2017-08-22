import AppDispatcher from '../dispatcher/AppDispatcher';
import CoreService from '../utils/Core.service';

import {
    LOGIN_SUCCESS
} from '../constants/AppConstants';

export default {
    doLogin(userName, password) {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let params = {
            'userName': userName,
            'password': password
        };
        CoreService.post(url, params)
            .subscribe((res) => {
                AppDispatcher.dispatch({
                    actionType: LOGIN_SUCCESS,
                    loginData: res
                });
                console.log('res', res);
            }, (err) => {
                console.log('res err', err);
            });
    }
};
