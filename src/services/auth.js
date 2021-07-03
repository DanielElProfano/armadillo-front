import { REGISTER_URL, LOGIN_URL, CHECK_SESSION } from "../config/calls/userCalls";

export const register = async (userData) => {
  try{
    const request = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    })
    const response = await request.json();
    if(!request.ok) {
      return new Error(response.message);
    }
    return response;
  }catch(error){
    return error.message;
  }
}
export const login = async userData => {
  try{
    const request = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    })
    const response = await request.json();
    if(!request.ok) {
      throw Error(response.message);
    }
    return response;
  }catch(error){
    return error.message;
  }
}
export const checkSession = async () => {
  try{
    const request = await fetch(CHECK_SESSION, {
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
