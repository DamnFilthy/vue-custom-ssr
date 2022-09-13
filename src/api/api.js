import fetch from 'node-fetch';

export const fetchItem = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);

    return await response.json();
}