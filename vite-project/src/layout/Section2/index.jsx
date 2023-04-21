export const Section2 =()=>{
    return  <div className='bg-gray-200 w-96 self-start rounded-xl p-5 flex flex-col gap-5' dir="rtl">
        <div className="flex w-full justify-between">
            <p>جمع کل سفارشات :</p>
            <p>30000 تومان</p>
        </div>


        <div className="flex w-full justify-between">
            <p>حق سرویس و کارمزد:</p>
            <p>1500 تومان</p>
        </div>


        <div className="flex w-full justify-between">
            <p>تخفیف:</p>
            <p>0 درصد</p>
        </div>


        <div className="flex w-full">
            <input className="w-full outline-none px-2" placeholder="کد تخفیف" type="text" />
            <button className="bg-[#9e1010] px-2 py-1 text-white font-bold"><ion-icon name="checkmark-outline"></ion-icon></button>
            
        </div>


        <div className="flex w-full justify-between bg-[#ffc72c] p-2 font-bold rounded-md mt-5">
            <p>مبلغ قابل پرداخت:</p>
            <p>31200 تومان</p>
        </div>

        <button className="text-white bg-[#9e1010] w-full py-2 rounded-md ">ثبت سفارش</button>

    </div>
           
   }