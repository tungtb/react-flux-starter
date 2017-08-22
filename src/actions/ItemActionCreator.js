import AppDispatcher from '../dispatcher/AppDispatcher';
import CoreService from '../utils/Core.service';

import {
    ITEMS_GET_SUCCESS,
    ITEMS_GET_ERROR,
    ITEMS_ADDED
} from '../constants/AppConstants';

export default {
    getItems() {
        //Call API ...
        AppDispatcher.dispatch({
            actionType: ITEMS_GET_SUCCESS,
            items: [{ id: 1, name: "test1" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }, { id: 4, name: "test4" }]
        });
    },
    addItem() {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let params = {
            'accesskey': 'tP19TxwKji6JsNTFYDoqSR1QJo7wtO_oL9cgS6rHzPBPcmdsVWZjZHRDb0h0WDRLQmtJNEJzdXVVVWVuTU1JYXBUaG9BWDJrYmVR'
        };
        CoreService.post(url, params)
            .subscribe((res) => {
                AppDispatcher.dispatch({
                    actionType: ITEMS_ADDED
                });
                console.log('res', res);
            }, (err) => {
                console.log('res err', err);
            });
    }
};
