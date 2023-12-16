import { IUserRegister, IUserLogin } from "../interfaces/IUser";

export const registerRequest = async (data:IUserRegister)=>{
    try {
        const result = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
            credentials: "include"
        })
        return await result.json();
    } catch (error) {
        console.log(error)
    }
}

export const loginRequest = async (data:IUserLogin)=>{
    try {
        const result = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
            credentials: "include"
        })
        return await result.json();
    } catch (error) {
        console.log(error)
    }
}

export const logoutRequest = async ()=>{
    try {
        await fetch("http://localhost:3000/api/logout", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            credentials: "include"
        })
        return;
    } catch (error) {
        console.log(error)
    }
}

export const verifyTokenRequest = async ()=>{
    try {
        const result = await fetch("http://localhost:3000/api/verify", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            credentials: "include"
        })
        return await result.json();
    } catch (error) {
        console.log(error)
    }
}