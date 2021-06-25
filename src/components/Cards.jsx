import React, {Fragment,useState} from 'react'
import Card from './Card';
import {productos, listaVenta} from '../store/store';
import Venta from './Venta';

function Cards() {

    const [productosLocal, setProductosLocal] = useState(productos);
    const [montoTotal, setMontototal] = useState(0);

    const actualizarProductos = ()=>{
        setProductosLocal([...productos]);

        if (listaVenta.length > 0) {
            const sumatoria = listaVenta.reduce((acum, prod) => {
                const x = acum + (parseInt(prod.cant) * parseInt(prod.price));
                return x;
            }, 0);
            setMontototal(sumatoria);
        } else {
            setMontototal(0);
        }
    }
    
    React.useEffect(()=>{
        const prodConStock = productosLocal.filter(prod => {return prod.stock > 0});
        // console.log(prodConStock);
    }, []);

    return (
        <Fragment>
            <Venta montoTotal = {montoTotal}/>
            <div className="container d-flex justify-content-center align-items-center ">
                <div className="row">
                    {
                        productosLocal.map((prod, index)=>
                        <div key={index} className="col-md-4 p-3">
                            <Card name={prod.name} stock={prod.stock} price={prod.price} img={prod.img} id={prod.id} actualizarProductos = {actualizarProductos}/>
                        </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Cards
