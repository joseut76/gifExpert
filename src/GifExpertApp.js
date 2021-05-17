import {React,  Fragment, useState}  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['batman']);
      
    return (
        <Fragment>
            <div>
                <h2>GifExpertApp</h2>
               
                {/* insert a component to display */}
                <AddCategory setCategories = { setCategories } />
                <hr />

                <ol>
                    { categories.map( category => (
                        <GifGrid 
                            key = { category } 
                            category = { category }
                        />
                    ))}
                </ol>
            </div>
        </Fragment>
    )
}
export default GifExpertApp