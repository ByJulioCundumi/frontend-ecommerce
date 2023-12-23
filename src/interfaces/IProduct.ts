export interface IProduct {
    id?: number,
    img: {
        public_id: number,
        url: string,
        path: string
    },
    name: string,
    stars: number,
    quantity:number,
    prevPrice: number,
    currentPrice: number,
    category: string,
    stock: string
}

export interface IProductPayload {
    payload: IProduct
}

export interface IProductsPayload {
    payload: IProduct[]
}

export interface IProductDTO extends Omit<IProduct, "img"> {
    img: string
}