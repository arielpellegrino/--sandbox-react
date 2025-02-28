import React from "react";
import {useState} from "react";

export default function UseState() {

    const [contador, setContador] = useState(0)
    console.log(contador)
    return (
        <>

            <p>Altera o estado atual do componente</p>
            <div>
                <button onClick={() => setContador(contador + 1)}>Mudar valor
                </button>
                {contador}
            </div>
        </>
    )
}