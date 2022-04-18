import { React, useState } from 'react'
import DatasetData from '../assets/datasets.json'


function SearchCatalog() {
const [searchTerm, setSearchTerm] = useState("");
    return (
       
        <div className="SearchCatalog">
            <input 
                type="text" 
                placeholder ="Search ..."
                onChange={(event)=>{
                    setSearchTerm(event.target.value)}}
            />

            {DatasetData
                .filter((val) => {
                   if(searchTerm === ""){
                       return val
                   }else {
                    if(val.id.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.icd.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.flight_number.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.tail_number.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
                        
                        return val
                   }

                }) 
                .map((val, key)=>{
                // {id, icd, flight_number, tail_number }=val;
            return <div className="data" key={key}><p>{val.id}, {val.icd}, {val.flight_number}, {val.tail_number}</p></div>

            })}
        </div>          
    )
}

export default SearchCatalog
