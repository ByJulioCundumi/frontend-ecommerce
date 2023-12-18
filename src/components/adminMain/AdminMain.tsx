import "./adminMain.scss";

function AdminMain() {
    return (
        <>
            <section className="main">
                <div className="main__summary">
                    <div className="main__summary--orders main__summary--box">
                        Pedidos <br /> 25
                    </div>
                    <div className="main__summary--returns main__summary--box">
                        Devoluciones <br /> 5
                    </div>
                    <div className="main__summary--products main__summary--box">
                        Productos <br /> 146
                    </div>
                    <div className="main__summary--users main__summary--box">
                        Usuarios <br /> 30
                    </div>
                </div>

                <div className="main__orders">
                    <h3 className="main__orders--title">Pedidos</h3>
                    <div className="main__orders--container">
                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>

                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>

                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>
                    </div>
                </div>

                <div className="main__orders">
                    <h3 className="main__orders--title">Devoluciones</h3>
                    <div className="main__orders--container">
                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>

                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>

                            <div className="main__order">
                                <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="main__order--img" />
                                <h4 className="main__order--title">Producto x</h4>
                                <p className="main__order--price">200 180</p>
                                <p className="main__order--quantity">5</p>
                                <p className="main__order--status">Aprobado</p>
                            </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AdminMain