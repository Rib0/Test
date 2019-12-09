export const request = ({ url, options = {} }) => {
    return fetch(url, options)
        .then(resp => resp.json())
        .catch(console.log);
};
