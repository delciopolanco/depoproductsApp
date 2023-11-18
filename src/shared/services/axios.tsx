import axios from 'axios';

const instance = axios.create({
	headers: {
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json'
	}
});

export const Api = instance;
