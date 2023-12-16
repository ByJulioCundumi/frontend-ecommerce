export interface IUser {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string
}

export interface IUserPayload {
    payload: {
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        createdAt: string,
        updatedAt: string
    }
}

export interface IUserLogin extends Pick<IUser, "email" | "password"> { }
export interface IUserRegister extends Omit<IUser, "id" | "createdAt" | "updatedAt"> { }
export interface IUserDTO extends Omit<IUser, "id" | "createdAt" | "updatedAt" | "password"> { }