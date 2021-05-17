import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
// way to rename variables
const {data : images, loading}  = useFetchGifs( category );

    return (
        <>
            <h3 className ="animate__animated animate__fadeIn"> { category } </h3>
            {/* if condition is true then display <p> else do nothing */}
            {loading && <p className ="animate__animated animate__flash">Loading...</p>}
           <div className="card-grid">
               {
                   images.map ( img => (
                       <GifGridItem
                       key={ img.id }
                       { ...img }
                       />
                   ))
               }
           </div>
            
        </>
    )
}
