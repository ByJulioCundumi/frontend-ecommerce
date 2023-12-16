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
        createdAt: string,
        updatedAt: string
    }
}