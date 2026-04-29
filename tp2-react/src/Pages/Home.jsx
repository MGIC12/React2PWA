import React from "react";
import Header from "../Components/Header/Header";
import BarraBusqueda from "../Components/BarraBusqueda/BarraBusqueda";


export default function Home() {
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
        bg-zinc-700 
        rounded-xl 
        border border-gray-500 
        p-8 
        shadow-[0px_0px_40px_-12px_rgba(255,255,255,0.25)] 
        w-3/4 h-1/1
        mt-30
        ">
        <BarraBusqueda></BarraBusqueda>
        <div class="grid grid-cols-4 gap-4 mt-10">
          
        </div>
      </div>

    </div>
  </div>;

}
