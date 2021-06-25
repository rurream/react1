//imr
import { div } from 'prelude-ls';
import React from 'react';
import { useState, Fragment } from 'react';
import './contador.css';
//sfc
const Contador = () => {

    const [numero, setNumero]=useState(0);
    const [arrayNum, setArrayNum] =useState([]);

    const aumentar = ()=>{
        let nuevoNum = numero + 1;
        setNumero(nuevoNum);
        setArrayNum([
            ...arrayNum,
            nuevoNum
        ])
    }
    const disminuir = ()=>{
        if(arrayNum.length>0){
            let nuevoNum = numero - 1;
            setNumero(nuevoNum);
            let newArray = [...arrayNum];
            newArray.pop();
            setArrayNum([
                ...newArray
            ])
        }
    }
    const resetera = ()=>{
        // let nuevoNum = numero + 1;
        setNumero(0);
        setArrayNum([])
    }
    return ( 
        <Fragment>
            <div className="container contadorComp">
            <h3>Contador: {numero}</h3>
            <button onClick={aumentar} className="btn btn-dark mr-2"> Aumentar</button>
            <button onClick={disminuir} className="btn btn-dark mx-2" > Disminuir</button>
            <button onClick={resetera} className="btn btn-dark ml-2"> Borrar</button>
            {/* <button onClick={aumentar} className="btn btn-dark"> Aumentar</button> */}
            {
                arrayNum.map((item, i) =>
                        <div key={i}>
                            <p className="listaContador mt-3">{item}.-</p>
                        </div>
                )
            }
            </div>


            
        </Fragment>
        
     );
}
 
export default Contador;