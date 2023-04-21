import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ox1sdtuauB9QLkjmfgWCyRZBga91LphGPEi50v_eEgU',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;
