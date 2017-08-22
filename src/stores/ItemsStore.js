import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
    ITEMS_UPDATED,
    ITEMS_GET_SUCCESS,
    ITEMS_ADDED
} from '../constants/AppConstants';

class ItemsStore extends BaseStore {

    emitChange() {
        this.emit(ITEMS_UPDATED);
    }

    addChangeListener(callback) {
        this.on(ITEMS_UPDATED, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(ITEMS_UPDATED, callback);
    }

    addItem() {
        let items = Array.from(this.data);
        let nextIndex = items.length + 1;
        let obj = {
            id: nextIndex,
            name: "test" + nextIndex
        };
        this.set(obj);
    }
}

let store = new ItemsStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case ITEMS_GET_SUCCESS:
            store.setAll(action.items);
            break;
        case ITEMS_ADDED:
            store.addItem();
            break;
        default:
    }
});

export default store;
