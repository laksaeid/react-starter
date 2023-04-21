import { Card } from './../../Components/Card/index';
const food = [
    {
        name:"همبرگر معمولی",
        price:"8000",
        img:'./img/hamburger.png',
        id:1
    },
    {
        name:"همبرگر مخصوص",
        price:"9000",
        img:'./img/hamburger.png',
        id:2
    },
    {
        name:" همبرگر معمولی با قارچ و پنیر",
        price:"10000",
        img:'./img/hamburger.png',
        id:3
    },
    {
        name:"سیب زمینی سرخ کرده ویژه",
        price:"25000",
        img:'./img/download.png',
        id:4
    },
    
    {
        name:"سیب زمینی سرخ کرده ",
        price:"10000",
        img:'./img/download.png',
        id:5
    },
    
    {
        name:"نوشابه رژیمی",
        price:"6000",
        img:'./img/soda.png',
        id:6
    },
    
    {
        name:"نوشابه ",
        price:"5000",
        img:'./img/soda.png',
        id:7
    },
    
    {
        name:" سالاد فصل",
        price:"8000",
        img:'./img/ceasar.png',
        id:8
    },
    
    {
        name:" سالاد سزار",
        price:"25000",
        img:'./img/ceasar.png',
        id:9
    }
    ,
    
    {
        name:" سالاد سزار",
        price:"25000",
        img:'./img/ceasar.png',
        id:10
    }
    

]
// *************************************************
export const Section1 =()=>{
    return  <div className='bg-gray-200 w-[44rem] py-3 rounded-xl '>
        <h1 className="font-bold text-lg pb-5 text-center border-b border-black/10 shadow">رستوران مک دونالد شعبه تهران</h1>
        <div className="flex gap-5 flex-wrap justify-center pt-5 h-[500px] overflow-y-scroll ">
        {
            food.map(item=>{
                return <Card name={item.name} img={item.img} price={item.price} id={item.id}/>
            })
        }
        </div>
    </div>  
           
   }