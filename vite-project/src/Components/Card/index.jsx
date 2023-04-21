export const Card =({img , name , price , id})=>{
    return <div id={id} className='w-80 p-2 flex bg-white rounded-lg' dir="rtl">
                <img className="w-20 h-20 object-contain" src={img} alt="" />

                <div className="w-full space-y-2" >
                    <p className="font-bold text-sm"> {name}</p>
                    <p className="text-sm">{price}</p>

                    <div className="flex w-full justify-between items-center">
                        <div className="flex bg-gray-100 rounded-md overflow-hidden">
                            <button className="bg-[#9e1010] px-2.5 text-lg text-white"> - </button>
                            <span className="px-3">0</span>
                            <button className="bg-[#9e1010] px-2 text-white">+</button>
                        </div>
                        
                        <p className="flex-1 text-left">0 تومان</p>

                    </div>

                </div>
           </div>
   }