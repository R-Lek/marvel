import axios from 'axios';

export default class Search {
	constructor(name) {
		this.name = name;
	}

	async getResults() {
		try {
			const key = '04ae1ba7cca2a71f08386ca1c7c1f70f';
			const call = await axios(`https://gateway.marvel.com:443/v1/public/characters?name=${this.name}&apikey=${key}`);
			const results = call.data.data.results.shift();
			this.result = results;
		} catch(err) {
			console.log(err);
		}
	}
}