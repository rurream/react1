import React, { Fragment, useState } from 'react';
import './cards.css';
import 'animate.css/animate.min.css';
import './card.css';
import { venta } from '../store/store';

function Card({ id, name, stock, price, img, actualizarProductos }) {

    const [cant, setCant] = useState(0);

    const cantOnChange = (e) => {
        setCant([e.target.name] = e.target.value);
    }

    const alCarrito = () => {
        try {
            if (stock < cant) {
                throw new Error('No hay stock suficiente.');
            }else if (cant == 0 || isNaN(cant)){
                throw new Error('Se debe indicar la cantidad a comprar.')
            } else {
                venta({
                    id: id,
                    cant: parseInt(cant),
                    price: price,
                    img:img,
                    name:name
                });
            }
            actualizarStateInFather();
            setCant(0);
        } catch (error) {
            console.log(error);
        }
        
    }

    function temporizador(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const actualizarStateInFather = async () => {
        await temporizador(500);
        actualizarProductos();
    }

    return (
        <Fragment  >
            <div className="card mt-4 animate__animated animate__fadeInUp">
                <img src={img} alt=""></img>
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    <p className="card-text text-secondary">Stock:  {stock}</p>
                    <p className="card-text text-secondary">$ {price} /Kg.</p>
                    <div className="row align-content-center align-items-center">
                        <div className="col-6 ">
                            {/* <input type="number" placeholder="cantidad" className="mx-1 w-50" name="cantidad" onChange={cantOnChange} />Kg. */}
                            <input type="number" placeholder="cantidad" className="mx-1 w-50" value={cant} onChange={cantOnChange} />Kg.
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success mx-1 text-align-end" onClick={alCarrito}>Comprar</button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Card
