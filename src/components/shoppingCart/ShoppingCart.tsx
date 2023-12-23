import { useDispatch, useSelector } from "react-redux";
import "./shoppingCart.scss";
import { IState } from "../../interfaces/IState";
import { increaseCart, decreaseCart, removeFromCart } from "../../reducers/shoppingCart/shoppingCart";

function ShoppingCart() {
    const dispatch = useDispatch()
    const cartModal = useSelector((state:IState)=>state.cartModal.isOpen)
    const shoppingCart = useSelector((state:IState)=>state.shoppingCart)
    
    return (
        <>
            <section className={cartModal ? "shopping-cart" : "shopping-cart hidde"}>
                <h2 className="shopping-cart__title">Carrito de compras</h2>
                <div className="shopping-cart__container">
                    {shoppingCart.length > 0 ? 
                        shoppingCart.map((p)=>{
                            return <div className="shopping-cart__product" key={p.id}>
                            <img src={p.img.url} alt="" className="shopping-cart__product--img" />
                            <div className="shopping-cart__text">
                                <div className="shopping-cart__product--section">
                                    <p>Producto</p>
                                    <p className="">{p.name}</p>
                                </div>
                                <div className="shopping-cart__product--section">
                                    <p>Precio</p>
                                        <p className="">{p.currentPrice}</p>

                                </div>
                                <div className="shopping-cart__product--section">
                                    <p>Cantidad</p>
                                    <div className="shopping-cart__quantity">
                                        <button onClick={()=>dispatch(increaseCart(p))} className="button">+</button>
                                        <p>{p.quantity}</p>
                                        <button onClick={()=>dispatch(decreaseCart(p))} className="button">-</button>
                                    </div>
                                </div>
                                <div className="shopping-cart__product--section">
                                    <p>SubTotal</p>
                                    <p className="">{p.currentPrice * p.quantity}</p>
                                </div>
                                <div className="shopping-cart__product--section">
                                    <button onClick={()=>dispatch(removeFromCart(p))} className="button">X</button>
                                </div>
                            </div>
                        </div>
                        })
                    : <span>El carrito esta vacio</span>}
                </div>
                <div className="shopping-cart__total">
                    <p className="">Total:</p>
                    <p className="">{shoppingCart.reduce((prev, curr)=> {return prev + (curr.currentPrice * curr.quantity)}, 0)}</p>
                </div>
                <button className="shopping-cart__buy">Comprar</button>
            </section>
        </>
    )
}

export default ShoppingCart