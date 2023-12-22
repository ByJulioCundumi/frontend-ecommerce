export const getProductRequest = async (id:number)=>{
    try {
        const result = await fetch(`http://localhost:3000/api/product/${id}`, {
            method: "GET",
            credentials: "include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}

export const getProductsRequest = async ()=>{
    try {
        const result = await fetch(`http://localhost:3000/api/product`, {
            method: "GET",
            credentials: "include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}

export const postProductRequest = async (productData:FormData)=>{
    try {
        const result = await fetch(`http://localhost:3000/api/product`, {
            method: "POST",
            body: productData,
            credentials: "include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}

export const putProductRequest = async (productData:FormData, id:number)=>{
    try {
        const result = await fetch(`http://localhost:3000/api/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-type":"multipart/form-data"
            },
            body: productData,
            credentials: "include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductRequest = async (id:number)=>{
    try {
        const result = await fetch(`http://localhost:3000/api/product/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
        return await result.json()
    } catch (error) {
        console.log(error)
    }
}