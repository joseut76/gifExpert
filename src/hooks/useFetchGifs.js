import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //  //useEffect takes a function and a list or array of dependencies.
//  //if we pass an empty array only fires one time, else every time there is a change,
//  // producing and infinite loop =tocomponentDidMount when working in React with classes
    useEffect( () => {
         getGifs( category )
             .then( imgs => { 

                setState({
                 data: imgs,
                 loading: false
                });                
                // },3000)
            })
    }, [ category ])

    
    return state;
}
