import manzana1 from '../assets/imgs/manzana1.png';
import pera1 from '../assets/imgs/pera1.png';
import naranja1 from '../assets/imgs/naranja1.png';
import palta1 from '../assets/imgs/palta1.png';
import tomate1 from '../assets/imgs/tomate1.png';
import pomelo1 from '../assets/imgs/pomelo1.png';

let productos = [
    {
        id:1,
        name: "Manzana",
        stock: 200,
        price: 1300,
        img:manzana1
    },
    {
        id:2,
        name: "Pera",
        stock: 180,
        price: 1200,
        img:pera1
    },
    {
        id:3,
        name: "Naranja",
        stock: 130,
        price: 1000,
        img:naranja1
    },
    {
        id:4,
        name: "Palta",
        stock: 80,
        price: 5500,
        img:palta1
    },
    {
        id:5,
        name: "Tomate",
        stock: 70,
        price: 1800,
        img:tomate1
    },
    {
        id:6,
        name: "Pomelo",
        stock: 2,
        price: 2200,
        img:pomelo1
    }
]
let listaVenta = [];

const modificarProductos = (newProd)=>{
    productos = [...newProd];
}
const modifListaVenta = (idProd, operacion)=>{
    console.log(idProd +" / " + operacion)
    const indexListaVenta = listaVenta.findIndex(item =>{return item.id == idProd});
    const indexProductos = productos.findIndex(item =>{return item.id == idProd});
    if(operacion == "restar"){
        listaVenta[indexListaVenta] = {
            ...listaVenta[indexListaVenta],
            cant: (parseInt(listaVenta[indexListaVenta].cant) - 1)
        }
        productos[indexProductos] = {
            ...productos[indexProductos],
            stock: (parseInt(productos[indexProductos].stock) + 1)
        }
        if(listaVenta[indexListaVenta].cant == 0){
            listaVenta.splice(indexListaVenta, 1);
        }
    }else if(operacion == "agregar"){
        if(productos[indexProductos].stock == 0){
            console.log("No tenemos stock sufuciente.")
        }else{
            listaVenta[indexListaVenta] = {
                ...listaVenta[indexListaVenta],
                cant: (parseInt(listaVenta[indexListaVenta].cant) + 1)
            }
            productos[indexProductos] = {
                ...productos[indexProductos],
                stock: (parseInt(productos[indexProductos].stock) - 1)
            }
        }
        
    }else if(operacion == "eliminar"){
        productos[indexProductos] = {
            ...productos[indexProductos],
            stock: (parseInt(productos[indexProductos].stock) + parseInt(listaVenta[indexListaVenta].cant ))
        }
        listaVenta.splice(indexListaVenta, 1);
    }





}
const venta = (data)=>{
    // console.log(data);
    // check if id ya existe en venta
    if(listaVenta.some(prod =>{return prod.id === data.id})){
        const indexProdVenta = listaVenta.findIndex(prod=>{
            return prod.id === data.id;
        })
        listaVenta[indexProdVenta] = {
            ...listaVenta[indexProdVenta],
            cant: (parseInt(listaVenta[indexProdVenta].cant) + parseInt(data.cant))
        }
    }else{
        listaVenta.push(data);
    }
   
    const indexProd = productos.findIndex(prod=>{
        return prod.id === data.id;
    });
    productos[indexProd] = {
        ...productos[indexProd],
        stock: (parseInt(productos[indexProd].stock) - parseInt(data.cant))
    }
}


export {productos, modificarProductos, listaVenta, venta, modifListaVenta};