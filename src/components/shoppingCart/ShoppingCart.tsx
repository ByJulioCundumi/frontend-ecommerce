import "./shoppingCart.scss";

function ShoppingCart() {
    return (
        <>
            <section className="shopping-cart">
                <h2 className="shopping-cart__title">Carrito de compras</h2>
                <div className="shopping-cart__container">
                    <div className="shopping-cart__product">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAObuuW-T03Sy2slsF2diNyJmnBxdL8fMbEA&usqp=CAU" alt="" className="shopping-cart__product--img" />
                        <div className="shopping-cart__text">
                            <div className="shopping-cart__product--section">
                                <p>Producto</p>
                                <p className="">Ensayo</p>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>Precio</p>
                                <div>
                                    <p>8000</p>
                                    <p className="">5000</p>
                                </div>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>Cantidad</p>
                                <div className="shopping-cart__quantity">
                                    <button className="button">+</button>
                                    <p>0</p>
                                    <button className="button">-</button>
                                </div>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>SubTotal</p>
                                <p className="">10000</p>
                            </div>
                            <div className="shopping-cart__product--section">
                                <button className="button">X</button>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-cart__product">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAObuuW-T03Sy2slsF2diNyJmnBxdL8fMbEA&usqp=CAU" alt="" className="shopping-cart__product--img" />
                        <div className="shopping-cart__text">
                            <div className="shopping-cart__product--section">
                                <p>Producto</p>
                                <p className="">Ensayo</p>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>Precio</p>
                                <div>
                                    <p>8000</p>
                                    <p className="">5000</p>
                                </div>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>Cantidad</p>
                                <div className="shopping-cart__quantity">
                                    <button className="button">+</button>
                                    <p>0</p>
                                    <button className="button">-</button>
                                </div>
                            </div>
                            <div className="shopping-cart__product--section">
                                <p>SubTotal</p>
                                <p className="">10000</p>
                            </div>
                            <div className="shopping-cart__product--section">
                                <button className="button">X</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopping-cart__total">
                    <p className="">Total:</p>
                    <p className="">15000</p>
                </div>
                <button className="shopping-cart__buy">Comprar</button>
            </section>
        </>
    )
}

export default ShoppingCart