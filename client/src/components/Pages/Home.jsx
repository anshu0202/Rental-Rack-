import react from "react";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"
import img4 from "../../Images/img4.jpg"
import img5 from "../../Images/img5.jpg"
// import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer";

const slides = [
  
    { src: img1,
      alt:"abcdefghijklmnop" },
    { src:img2,
    alt:"abcdefgh"
   },
    {src:img3},
    {src:img4},
    {src:img5},
 
  
    
];
function Home() {
  return (
    <>
      <Header className="z-150"/>
      <div
        className="text-light border border-danger"
        // style={{
        //   backgroundImage: `url(${img1})`,
        //   backgroundSize: "cover,contain",
        //   backgroundRepeat: "no-repeat",
        //   height: "80vh",
        //   paddingTop: "11vh",
        // }}
      >
        <Carousel fade  >
          {slides.map((slide) => (
            <Carousel.Item interval={1000} >
              <img
                className="d-block w-100 z-0 "
                style={{height:"75vh"}}
                src={slide.src}
                alt={slide.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <h1>This is home laxmikant is here page</h1>
        <h2>changes from seea's side</h2>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          ratione repudiandae ex! Voluptatibus nobis, qui molestias excepturi
          perspiciatis consequatur, quasi animi nisi reprehenderit modi optio
          sed, consectetur quod error dolore. Architecto ex cupiditate quae
          officiis debitis dicta exercitationem. Ipsum asperiores temporibus
          fugit alias hic delectus amet beatae dignissimos praesentium
          necessitatibus!
        </h1> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
