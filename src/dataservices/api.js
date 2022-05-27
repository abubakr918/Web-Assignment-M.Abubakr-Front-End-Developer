import axios from "axios"

const endpoints = {
    BASE_URL : 'https://rest.bandsintown.com',
    ARTIST_INFO: name => `/artists/${name}?app_id=abc`,
    ARTIST_EVENTS: name => `/artists/${name}/events?app_id=abc`
}

axios.defaults.baseURL = endpoints.BASE_URL;






export const getArtist = async name => {
    try {
        let {data} = await axios.get(endpoints.ARTIST_INFO(name));
        return data;

    } catch(e) {
        throw "An Error Occurred When Calling API";
    }
}
export const getArtistEvents = async name => {
    try {
        let {data} = await axios.get(endpoints.ARTIST_EVENTS(name));
        return data;

    } catch(e) {
        throw "An Error Occurred When Calling API";
    }
}
