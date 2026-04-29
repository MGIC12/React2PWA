import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import BarraBusqueda from "../Components/BarraBusqueda/BarraBusqueda";
import { getAllItems } from "../services/getAllItems";
import TarjetaComponente from "../Components/tarjetaComponente/TarjetaComponente";
import { Link } from "react-router-dom";


export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  return <div className="text-3xl font-bold">
    <Header />
    <div class="flex mt-10 w-full items-center justify-center bg-zinc-900">
      <div >
        <h1 className="flex justify-center text-8xl font-extrabold tracking-[0.15em] text-white no-underline">NEX<span className="text-[#00e5ff]">US</span> </h1>
        <p class="flex justify-center text-big text-white uppe">Jugá sin limites</p>
        <p class="flex justify-center text-big text-white">Sentí cada frame</p>
      </div>
    </div>
    <div class="flex h-screen w-full items-center justify-center bg-zinc-900">
      <div class="
        p-8 
        w-3/4 h-1/1
        mt-30
        ">
        <BarraBusqueda></BarraBusqueda>
        <div class="grid grid-cols-4 gap-4 mt-10">
          {items.map((item) => (
            <Link to={`/items/${item.id}`}>
              <TarjetaComponente
                item={item}
                key={item.id}
              />
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  </div>;



}
