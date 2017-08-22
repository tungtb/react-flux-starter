import AppDispatcher from '../dispatcher/AppDispatcher';

import {
    ITEMS_GET_SUCCESS,
    ITEMS_GET_ERROR
} from '../constants/AppConstants';

export default {
    getItems() {
        //Call API ...
        AppDispatcher.dispatch({
            actionType: ITEMS_GET_SUCCESS,
            items: [{ id: 1, name: "test1" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }, { id: 4, name: "test4" }]
        });
    }
};
