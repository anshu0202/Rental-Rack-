import react from 'react';
import img1 from '../../Images/img1.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive={
 
    desktop:{
        breakpoint:{max:3000, min:1024},
        items:1
    },
    tablet:{
        breakpoint:{max:1024, min: 464},
        items:1
    },
    mobile:{
        breakpoint:{max:464, min:0},
        items:1
    }
};

function Home(){
    
    return (
        <>
        <div  className='text-light border border-danger'  style={{backgroundImage:`url(${img1})`,backgroundSize:"cover,contain",backgroundRepeat:"no-repeat",height:"80vh",paddingTop:"11vh"}}>


        <Carousel responsive={responsive} 
        swipeable={false}
        draggable={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
    dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" containerClass='carousel-container'  >
           {
            bannerData.map(data=>(
                <Image src={data.url} alt="banner" />
            ))
           }
        </Carousel>
        
         <h1>This is home  laxmikant is here page</h1>
         <h2>changes from seea's side</h2>
         {/* <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ratione repudiandae ex! Voluptatibus nobis, qui molestias excepturi perspiciatis consequatur, quasi animi nisi reprehenderit modi optio sed, consectetur quod error dolore. Architecto ex cupiditate quae officiis debitis dicta exercitationem. Ipsum asperiores temporibus fugit alias hic delectus amet beatae dignissimos praesentium necessitatibus!</h1> */}
          
        </div> 
        </>  
    )
}

export default Home;
