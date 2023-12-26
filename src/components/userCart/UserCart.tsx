import { checkoutRequest } from "../../api/paymentRequest";
import { IState } from "../../interfaces/IState";
import { decreaseCart, increaseCart, removeFromCart } from "../../reducers/shoppingCart/shoppingCart";
import "./userCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../reducers/loading/loadingSlice";

function UserCart() {
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state: IState) => state.shoppingCart)
  const isLoading = useSelector((state: IState) => state.loading.isLoading)

  const handleBuy = async () => {
    try {
      dispatch(setLoading({ isLoading: true }))
      const result = await checkoutRequest(shoppingCart)
      dispatch(setLoading({ isLoading: false }))

      window.location.href = result.url;
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <span>Cargando...</span>
  }

  return (
    <>
      <section className="userCart">
          <div className="userCart__container">
            {shoppingCart.length > 0 ?
              shoppingCart.map((p) => {
                return <div className="userCart__product" key={p.id}>
                  <img src={p.img.url} alt="" className="userCart__product--img" />
                  <div className="userCart__text">
                    <div className="userCart__product--section">
                      <p>Producto</p>
                      <p className="">{p.name}</p>
                    </div>
                    <div className="userCart__product--section">
                      <p>Precio</p>
                      <p className="">{p.currentPrice}</p>

                    </div>
                    <div className="userCart__product--section">
                      <p>Cantidad</p>
                      <div className="userCart__quantity">
                        <button onClick={() => dispatch(increaseCart(p))} className="button">+</button>
                        <p>{p.quantity}</p>
                        <button onClick={() => dispatch(decreaseCart(p))} className="button">-</button>
                      </div>
                    </div>
                    <div className="userCart__product--section">
                      <p>SubTotal</p>
                      <p className="">{p.currentPrice * p.quantity}</p>
                    </div>
                    <div className="userCart__product--section">
                      <button onClick={() => dispatch(removeFromCart(p))} className="button">X</button>
                    </div>
                  </div>
                </div>
              })
              : <span>El carrito esta vacio</span>}
          </div>
          <div className="userCart__total">
            <button onClick={handleBuy} className="userCart__buy">Comprar</button>
            <div className="userCart__total--text">
              <p className="">Total:</p>
              <p className="">{shoppingCart.reduce((prev, curr) => { return prev + (curr.currentPrice * curr.quantity) }, 0)}</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default UserCart