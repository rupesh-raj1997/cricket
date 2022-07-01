export async function callAPI(method = '', body) {

    return await fetch('https://api.devcdc.com/cricket', {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => res.json());
}
