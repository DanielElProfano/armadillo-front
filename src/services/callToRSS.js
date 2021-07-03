import { RSS_API, RSS_API_REFRESH, RSS_DETAILS} from '../config/calls/rssCalls'

export const getRSS = async() => {
    try{
    const request = await fetch(RSS_API, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        },
        credentials: 'include',
    });
    const response = await request.json();
    if(!request.ok) {
        throw new Error(response.message);
    }
    return response;
    }catch(error){
        return error.message;
    }
}

export const refresh = async() => {
    try{
        const request = await fetch(RSS_API_REFRESH, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            },
            credentials: 'include',
        });
        const response = await request.json();
        if(!request.ok) {
            throw new Error(response.message);
        }
        return response;
    }catch(error){
        return error.message;
    }
}

export const getItemDetails = async(id) => {
    try{
        const request = await fetch(`${RSS_DETAILS}/${id}`, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            },
            credentials: 'include',
        });
        const response = await request.json();
        if(!request.ok) {
            throw new Error(response.message);
        }
        return response;
    }catch(error){
        return error.message
        }
};
