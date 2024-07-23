import axios from 'axios';

// Service to fetch data from TMDB API
export const fetchFromTMDB = async (url) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + process.env.TMDB_API_KEY
        }
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
        throw new Error(`Failed to fetch data from TMDB API. Status: ${response.status}`);
    }

    return response.data;
};
