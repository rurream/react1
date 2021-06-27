import React, { Fragment, useState } from 'react'
import { productos, modificarProductos } from '../store/store';

function AjustarPrecios() {

    let stockCorte = 0;
    let valorIncremento = 0;
    const [data, setData] = useState({
        stockCorte: 0,
        valorIncremento: 0
    });

    const inputOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const AjustarPrecios = (e) => {
        e.preventDefault();
        console.log("AjustarPrecios");
        console.log(data.stockCorte);
        console.log(data.valorIncremento);
        const newListaProd = productos.map(prod => {
            return prod.stock <= data.stockCorte ? { ...prod, price: (parseInt(prod.price, 10) + parseInt(data.valorIncremento, 10)) } : prod;
        });
        console.log(newListaProd);
        modificarProductos(newListaProd);
    }
    
    return (
        <Fragment>
            <div className="container mt-5">
                <h3>Ajustar Precio a productos con bajo stock</h3>
                <div className="container">
                    <form className="mt-5">
                        <div className="my-3">
                            <input type="number" className="w-50" placeholder="Valor de corte de stock ..." name="stockCorte" onChange={inputOnChange} />
                        </div>
                        <div className="my-3">
                            <input type="number" className="w-50" placeholder="Valor de incremento en el precio ..." name="valorIncremento" onChange={inputOnChange} />
                        </div>
                        <div className="mt-5 w-50 text-end">
                            <button className="btn btn-success" onClick={AjustarPrecios}>Ajustar Precios</button>
                        </div>
                    </form>

                </div>

            </div>


        </Fragment>
    )
}

export default AjustarPrecios
