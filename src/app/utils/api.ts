const API_KEY = 'your_api_key';
const BASE_API_URL = 'https://api.themoviedb.org/3';

interface QueryMap {
    [key: string]: any;
}

export function get(url: string, query: QueryMap = {}) {
    return window.fetch(`${BASE_API_URL}${url}?api_key=${API_KEY}${mapQueryToString(query)}`);
}

function mapQueryToString(query: QueryMap) {
    return Object.keys(query)
        .reduce((queryString, paramName) => `${queryString}&${paramName}=${query[paramName]}`, '');
}
