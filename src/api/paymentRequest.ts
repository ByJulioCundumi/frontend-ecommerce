import { IProduct } from "../interfaces/IProduct"

export const checkoutRequest = async (products:IProduct[])=>{
    try {
        const result = await fetch("http://localhost:3000/api/payment-checkout", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(products),
            credentials:"include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}