import React, {useState} from 'react';

export default function BarraBusqueda( {onSearch} ){
    const [query, setQuery] = useState("");
    
    const manejoSubmit= (e) => {
        e.preventDefault();
        onSearch(query);
    };
    
    return(
        
            <input className=" 
            flex
            border-2 border-gray-500 
            bg-zinc-800/50
            rounded-xl
            w-3/4
            p-4
            text-white/80
            h-12 " type="text" placeholder= "Buscar" value= {query} onChange= { (e) => setQuery(e.target.value) }/>
    )
}