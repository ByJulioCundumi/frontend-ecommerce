import "./recommended.scss"

function Recommended() {
  return (
    <>
        <section className="recommended">
            <h2 className="recommended__title">Productos Recomendados</h2>
            <div className="recommended__products">
                <button className="recommended__btn">Todos Los Productos</button>
                <button className="recommended__btn">Granos</button>
                <button className="recommended__btn">Aceites</button>
                <button className="recommended__btn">Carnes</button>
                <button className="recommended__btn">Aseo</button>
            </div>
        </section>
        
    </>
  )
}

export default Recommended