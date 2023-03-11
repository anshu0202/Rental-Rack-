import react from 'react';
import img1 from '../../Images/img1.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Header from '../Header';

function Home(){
    
    return (
        <>
        <Header/>
        <div  className='text-light border border-danger'  style={{backgroundImage:`url(${img1})`,backgroundSize:"cover,contain",backgroundRepeat:"no-repeat",height:"80vh",paddingTop:"11vh"}}>
        
         <h1>This is home  laxmikant is here page</h1>
         <h2>changes from seea's side</h2>
         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ratione repudiandae ex! Voluptatibus nobis, qui molestias excepturi perspiciatis consequatur, quasi animi nisi reprehenderit modi optio sed, consectetur quod error dolore. Architecto ex cupiditate quae officiis debitis dicta exercitationem. Ipsum asperiores temporibus fugit alias hic delectus amet beatae dignissimos praesentium necessitatibus!</h1>
          
        </div> 
        </>  
    )
}

export default Home;
