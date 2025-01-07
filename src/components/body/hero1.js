import React from "react";

export default function Hero1() {
    const data = [
        {
          ImageUrl: 'https://preview.colorlib.com/theme/egames/img/bg-img/game1.jpg',
          id: 1,
        },
        {
          ImageUrl: 'https://preview.colorlib.com/theme/egames/img/bg-img/game2.jpg',
          id: 2,
        },
        {
          ImageUrl: 'https://preview.colorlib.com/theme/egames/img/bg-img/game3.jpg',
          id: 3,
        }
      ];
    return(
     
      
<div className="flex  justify-center block  " style={{ gap: '200px', paddingBottom:"80px"}}>
    {data.map(item =>(
      <div key={item.id} style={{ paddingTop: '100px' }} className="border-r border-gray-500  mt-10">
        <img src={item.ImageUrl} alt={`Game ${item.id}`} className="w-40 h-50 pr-10"/>
       {/* <p> <button className="mt-4 text-white bg-logincolor px-6 py-2 hover:bg-black transition-colors duration-300">
 View Games
 </button></p>
   */}
      </div>
    ))}
 
 
</div>
    )
}