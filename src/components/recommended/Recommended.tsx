import "./recommended.scss"

function Recommended() {
  return (
    <>
        <section className="recommended">
            <h2 className="recommended__title">Productos Recomendados</h2>
            <div className="recommended__products">
                <button className="recommended__btn">Todos Los Productos</button>
                <button className="recommended__btn">Aceite</button>
                <button className="recommended__btn">Azucar</button>
                <button className="recommended__btn">Galletas</button>
                <button className="recommended__btn">Bebidas</button>
            </div>
        </section>
    </>
  )
}

export default Recommended