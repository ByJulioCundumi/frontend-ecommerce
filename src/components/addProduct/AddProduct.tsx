import { postProductRequest } from "../../api/productRequest.js"
import { IProduct } from "../../interfaces/IProduct"
import { useNavigate } from "react-router-dom"
import "./addProduct.scss"
import { useForm } from "react-hook-form"
import { addProduct } from "../../reducers/products/productsSlice.js"
import { useDispatch } from "react-redux"

function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = handleSubmit(async (data) => {

    const productoData = new FormData()
    productoData.append("img", data.img[0])
    productoData.append("name", data.name)
    productoData.append("stars", data.stars)
    productoData.append("prevPrice", data.prevprice)
    productoData.append("currentPrice", data.currentprice)
    productoData.append("category", data.category)
    productoData.append("stock", data.stock)
    
    const result:IProduct = await postProductRequest(productoData)
    if(result.id){
      dispatch(addProduct(result))
      navigate("/auth/dashboard/admin/products")
    }

  })

  return (
    <>
      <section className="addproduct">
        <p>Nuevo Producto</p>
        <form className="addproduct__form" onSubmit={onSubmit}>
          <div className="addproduct__container">
            <div className="addproduct__form--container">
              <label htmlFor="imagen">Imagen</label>
              <input className="input" type="file" id="imagen" {...register("img",{
                required: {
                  value: true,
                  message: "La imagen del producto es requerida"
                }
              })} />
              {errors.img && typeof errors.img?.message === "string" && <span className="addproduct__error">{errors.img.message}</span>}
            </div>
            <div className="addproduct__form--container">
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
              {errors.name && typeof errors.name?.message === "string" && <span className="addproduct__error">{errors.name.message}</span>}
            </div>
            <div className="addproduct__form--container">
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
              {errors.stars && typeof errors.stars?.message === "string" && <span className="addproduct__error">{errors.stars.message}</span>}
            </div>
            <div className="addproduct__form--container">
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
              {errors.prevprice && typeof errors.prevprice?.message === "string" && <span className="addproduct__error">{errors.prevprice.message}</span>}
            </div>
            <div className="addproduct__form--container">
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
              {errors.currentprice && typeof errors.currentprice?.message === "string" && <span className="addproduct__error">{errors.currentprice.message}</span>}
            </div>
            <div className="addproduct__form--container">
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria" className="addproduct__select--category select" {...register("category", {
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
              {errors.category && typeof errors.category?.message === "string" && <span className="addproduct__error">{errors.category.message}</span>}
            </div>
            <div className="addproduct__form--container">
              <label htmlFor="estado">Estado del producto</label>
              <select id="estado" className="addproduct__select--status select" {...register("stock", {
                required: {
                  value: true,
                  message: "Seleccione el estado del producto"
                }
              })}>
                <option value="available">Disponible</option>
                <option value="unavailable">No Disponible</option>
              </select>
              {errors.stock && typeof errors.stock?.message === "string" && <span className="addproduct__error">{errors.stock.message}</span>}
            </div>
          </div>
          <button type="submit" className="addproduct__btn">Guardar Producto</button>
        </form>
      </section>
    </>
  )
}

export default AddProduct