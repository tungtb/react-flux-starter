import { Observable } from 'rxjs';

export default {

	post(url, params) {
		return this._request('POST', url, createPostParams(params));
	},

	_request(method, url, params) {
		var request = new Request(url, {
			method: 'POST',
			body: params,
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		});
		return Observable.create((observer) => {
			fetch(request)
				.then(response => {
					return processResponseData(response);
				})
				.then(responseJson => {
					observer.next(responseJson);
					observer.complete();
				})
				.catch((error) => {
					console.error(error);
					observer.error(error);
				});
		});
	}
	
};

function createPostParams(params) {
	let listParams = [];
	for (var itemParam in params) {
		listParams.push(itemParam + '=' + params[itemParam]);
	}
	return listParams.join('&');
}

function processResponseData(response) {
	return response.json();
}
