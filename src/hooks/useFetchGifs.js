
//ESTO ES UN HOOK
//Se suele indicar en el nombre del fichero con la palabra:
//      "use"NombreHook.js

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//Los custom hooks son functional components que pueden tener efectos, pueden usar reducers,
//  pueden usar contextos... y más
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    });


    //Con esto el componente solo se renderiza y ejecuta la primera vez,
    //pero si cambia la categoria se vuelve a renderizar
    useEffect( () => {

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            });
            
    }, [ category ]);

    return state; // { data:[], loading:true }
}