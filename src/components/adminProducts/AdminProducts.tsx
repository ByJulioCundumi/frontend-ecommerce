import { Link } from "react-router-dom";
import "./adminProducts.scss";

function AdminProducts() {
    return (
        <>
            <section className="admin-products">
                <nav className="admin-products__nav">
                    <input type="text" name="" id="" className="admin-products__input" placeholder="Buscar producto" />
                    <Link to={"/auth/dashboard/admin/add-product"} className="admin-products__btn">Agregar Producto</Link>
                </nav>
                <div className="admin-products__container">
                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>

                    <div className="admin-products__product">
                        <img src="https://broxtechnology.com/images/iconos/box.png" alt="" className="admin-products__img" />
                        <h4 className="">Producto x</h4>
                        <p className="">200 180</p>
                        <p className="">5</p>
                        <p className="">Aprobado</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminProducts