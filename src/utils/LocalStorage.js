export default {
    setItem(key, stringData) {
        localStorage.setItem(key, stringData);
    },
    getItem(key) {
        return localStorage.getItem(key);
    },
    setObject(key, objectData) {
        localStorage.setItem(key, JSON.stringify(objectData));
    },
    getObject(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};