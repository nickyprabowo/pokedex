const handleResponse = async (response: Response) => {
    if (response.ok) {
        const json = await response.json();
        return json;
    }
    return Promise.reject(new Error(response.statusText));
}

export default handleResponse;