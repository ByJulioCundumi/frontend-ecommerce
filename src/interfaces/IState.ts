import { IProduct } from "./IProduct"

export interface IState{
    modal:{
        isOpen: boolean
    },  
    user:{
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        role: string,
        createdAt: string,
        updatedAt: string
    },
    loading: {
        isLoading: boolean
    },
    products: IProduct[]
}