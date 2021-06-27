import React, { Fragment, useState } from 'react';
import { listaVenta, modifListaVenta } from '../store/store';
import './carro.css'

function Carro() {

    const [listaVentaLocal, setListaVentaLocal] = useState([]);
    const [sumatoria, setSumatoria] = useState(0);
    const buttonComprar = <button className="btn btn-success">Realizar Compra</button>;
    const encabezado = (
        <div className="row mt-5 mb-0">
            <div className="col-1">Cant</div>
            <div className="col-5">Producto</div>
            <div className="col-1">Precio</div>
            <div className="col-2">Total</div>
            <div className="col-3">Modificar</div>
        </div>
    );
    const columnaVacia = React.createElement(
            'div',
            {className: 'col-1'}
          );
   
    const modifListaVentaLocal = (idProd, operacion)=>{
        console.log(idProd +" / " + operacion);
        modifListaVenta(idProd, operacion);
        actualizarLista();
    }

    const actualizarLista = ()=>{
        setListaVentaLocal([...listaVenta]);
        const suma = listaVenta.reduce((a, b)=>{
            const x = a + (parseInt(b.cant) * parseInt(b.price));
                return x;
        }, 0);
        setSumatoria(suma);
    }

    React.useEffect(() => {
        actualizarLista();
    }, []);

    return (
        <Fragment>
            <div className="container carrito">
                <div >
                {encabezado}
                    <hr />
                    {
                        listaVentaLocal.map((item) =>
                            <div className="row my-1" key={item.id}>
                                <div className="col-1">{item.cant}</div>
                                <div className="col-5">{item.name}</div>
                                <div className="col-1">{item.price}</div>
                                <div className="col-2">{item.price * item.cant}</div>
                                <div className="col-3">
                                    <button className="btn btn-warning mx-1" onClick={()=>{modifListaVentaLocal(item.id, "restar")}}>-</button>
                                    <button className="btn btn-success mx-1" onClick={()=>{modifListaVentaLocal(item.id, "agregar")}}>+</button>
                                    <button className="btn btn-danger mx-1" onClick={()=>{modifListaVentaLocal(item.id, "eliminar")}}>X</button>
                                </div>
                            </div>
                        )
                    }
                    <hr />
                    <div className="row mt-1 mb-0">
                        {columnaVacia}
                        <div className="col-5"></div>
                        <div className="col-1">Total</div>
                        <div className="col-2">{sumatoria}</div>
                        <div className="col-3"></div>
                    </div>
                    <div className="mt-5 pe-5 text-end container"  >
                        {
                            listaVentaLocal.length > 0 ? buttonComprar : ''
                        }
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Carro
