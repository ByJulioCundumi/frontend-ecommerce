import { useNavigate } from "react-router-dom"
import { putProductRequest } from "../../api/productRequest"
import { IProduct } from "../../interfaces/IProduct"
import { updateProduct } from "../../reducers/products/productsSlice"
import "./editProduct.scss"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { IState } from "../../interfaces/IState"
import { setLoading } from "../../reducers/loading/loadingSlice"

function EditProduct() {
    const {id} = useParams()
    const products = useSelector((state:IState)=>state.products)
    //
    const p = products.find((p)=>{
        if(id){
            return p.id === parseInt(id)
        }
    })
    //
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            img: p?.img,
            name: p?.name,
            stars: p?.stars,
            prevprice: p?.prevPrice,
            currentprice: p?.currentPrice,
            category: p?.category,
            stock: p?.stock
        }
    })
    //
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = handleSubmit(async (data:any) => {
        const productoData = new FormData()
        productoData.append("img", data.img[0])
        productoData.append("name", data.name)
        productoData.append("stars", data.stars)
        productoData.append("prevPrice", data.prevprice)
        productoData.append("currentPrice", data.currentprice)
        productoData.append("category", data.category)
        productoData.append("stock", data.stock)

        if(id){
            dispatch(setLoading({isLoading:true}))
            const result:IProduct = await putProductRequest(productoData, parseInt(id))
            dispatch(setLoading({isLoading:false}))
            //
            dispatch(updateProduct(result))
            navigate("/auth/dashboard/admin/products")
        }
    })

    return (
        <>
            <section className="editproduct">
                <p>Editar Producto</p>
                <form className="editproduct__form" onSubmit={onSubmit}>
                    <div className="editproduct__container">
                        <div className="editproduct__form--container">
                            <label htmlFor="imagen">Imagen</label>
                            <input className="input" type="file" id="imagen" {...register("img", {
                            })} />
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="nombre">Nombre</label>
                            <input className="input" type="string" id="nombre" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Ingrese un nombre"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Ingrese un nombre valido, minimo 3 caracteres"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "El nombre ingresado es muy largo"
                                }
                            })} />
                            {errors.name && typeof errors.name?.message === "string" && <span className="editproduct__error">{errors.name.message}</span>}
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="estrellas">Estrellas</label>
                            <input className="input" type="number" id="estrellas" {...register("stars", {
                                required: {
                                    value: true,
                                    message: "Ingrese las estrellas del producto"
                                },
                                min: {
                                    value: 1,
                                    message: "Valores permitidos: de 1 a 5"
                                },
                                max: {
                                    value: 5,
                                    message: "Valores permitidos: de 1 a 5"
                                }
                            })} />
                            {errors.stars && typeof errors.stars?.message === "string" && <span className="editproduct__error">{errors.stars.message}</span>}
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="precioAnterior">Precio Anterior</label>
                            <input className="input" type="number" id="precioAnterior" {...register("prevprice", {
                                required: {
                                    value: true,
                                    message: "Ingrese el precio anterior del producto"
                                },
                                min: {
                                    value: 0,
                                    message: "Ingrese un precio mayor o igual a cero"
                                }
                            })} />
                            {errors.prevprice && typeof errors.prevprice?.message === "string" && <span className="editproduct__error">{errors.prevprice.message}</span>}
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="precioActual">Precio Actual</label>
                            <input className="input" type="number" id="precioActual" {...register("currentprice", {
                                required: {
                                    value: true,
                                    message: "Ingrese el precio actual del producto"
                                },
                                min: {
                                    value: 0,
                                    message: "Ingrese un precio mayor o igual a cero"
                                }
                            })} />
                            {errors.currentprice && typeof errors.currentprice?.message === "string" && <span className="editproduct__error">{errors.currentprice.message}</span>}
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="categoria">Categoria</label>
                            <select id="categoria" className="editproduct__select--category select" {...register("category", {
                                required: {
                                    value: true,
                                    message: "Seleccione una categoria para el producto"
                                }
                            })}>
                                <option value="grains">Granos</option>
                                <option value="dairy">Lacteos</option>
                                <option value="meats">Carnes</option>
                                <option value="oils">Aceites</option>
                                <option value="hygiene">Higiene</option>
                                <option value="drinks">Bebidas</option>
                                <option value="alcohol">Alcohol</option>
                                <option value="cigarettes">Cigarros</option>
                                <option value="candies">Dulceria</option>
                                <option value="cookies">Galletas</option>
                                <option value="canned">Enlatados</option>
                                <option value="condiments">Condimentos</option>
                            </select>
                            {errors.category && typeof errors.category?.message === "string" && <span className="editproduct__error">{errors.category.message}</span>}
                        </div>
                        <div className="editproduct__form--container">
                            <label htmlFor="estado">Estado del producto</label>
                            <select id="estado" className="editproduct__select--status select" {...register("stock", {
                                required: {
                                    value: true,
                                    message: "Seleccione el estado del producto"
                                }
                            })}>
                                <option value="available">Disponible</option>
                                <option value="unavailable">No Disponible</option>
                            </select>
                            {errors.stock && typeof errors.stock?.message === "string" && <span className="editproduct__error">{errors.stock.message}</span>}
                        </div>
                    </div>
                    <button type="submit" className="editproduct__btn">Guardar Producto</button>
                </form>
            </section>
        </>
    )
}

export default EditProduct