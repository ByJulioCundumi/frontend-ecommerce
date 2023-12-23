import { Link } from "react-router-dom";
import "./adminProducts.scss";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces/IState";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../reducers/products/productsSlice";
import { deleteProductRequest } from "../../api/productRequest";
import { IProduct } from "../../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../reducers/loading/loadingSlice";

function AdminProducts() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector((state: IState) => { return state.products })
    const isLoading = useSelector((state: IState) => { return state.loading.isLoading})
    
    if (isLoading) {
        return <span>Cargando...</span>;
    }
    
    const deleteProductById = async (p:IProduct)=>{
        try {
            if(p.id){
                dispatch(deleteProduct(p))
                //
                dispatch(setLoading({isLoading: true}))
                await deleteProductRequest(p.id)
                dispatch(setLoading({isLoading: false}))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const goToEdit = (p:IProduct)=>{
        navigate(`/auth/dashboard/admin/edit-product/${p.id}`)
    }

    return (
        <>
            <section className="admin-products">
                <nav className="admin-products__nav">
                    <input type="text" name="" id="" className="admin-products__input" placeholder="Buscar producto" />
                    <Link to={"/auth/dashboard/admin/add-product"} className="admin-products__btn">Agregar Producto</Link>
                </nav>
                <div className="admin-products__container">
                    {products.length > 0 ? products.map((p) => {
                        return (<div className="admin-products__product" key={p.id}>
                            <img src={p.img.url} alt="" className="admin-products__img" />
                            <div className="">
                                <p>Producto</p>
                                <p className="">{p.name}</p>
                            </div>
                            <div className="">
                                <p>Estrellas</p>
                                <p className="">{p.stars}</p>
                            </div>
                            <div className="">
                                <p>Precio</p>
                                <div>
                                    <p>{p.prevPrice}</p>
                                    <p className="">{p.currentPrice}</p>
                                </div>
                            </div>
                            <div className="">
                                <p>Categoria</p>
                                <p className="">{p.category}</p>
                            </div>
                            <div className="">
                                <p>Estado</p>
                                <p className="">{p.stock}</p>
                            </div>
                            <div className="">
                                <button onClick={()=>{goToEdit(p)}} className="admin-products__btn--edit">Editar</button>
                                <button onClick={()=>{deleteProductById(p)}} className="admin-products__btn--delete">Eliminar</button>
                            </div>
                        </div>)
                    }) : <span>No se han registrado productos</span>}
                </div>
            </section>
        </>
    )
}

export default AdminProducts