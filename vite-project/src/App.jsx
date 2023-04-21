import './App.css'
import { Container } from './layout/Container/index';
import { Section1 } from './layout/Section1/index';
import { Section2 } from './layout/Section2/index';
export const App =()=>{
 return <div className='bg-red-600 h-screen w-screen flex justify-center items-center'>

<Container>

    <Section2 />
    <Section1 />
 </Container>
 </div>
}

