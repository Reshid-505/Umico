import Slider from "react-slick";
import  '../Css/menu.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ProductData } from "../contex";
function Menu() {

    const{menuData} = useContext(ProductData)
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows:false,
  
      };
      return (
        <menu>
            <div className='center'>              
                <div className='menuMain'>              
                    <div className='nestedMenu nomobile'>
                        <ul>
                            {menuData?.map((item,index) => <Link to={"category/"+ item.name} key={index}> <li className='menuElem'> <img src={item.icons.menu_icon} alt="..."/>{item.name}</li></Link>)}
                            
                        </ul>
                    </div>
                    <div className='slider'> 
                        <Slider {...settings}>
                        <img src="assets/img/slider1.jpg"alt="..." />
                        <img src="assets/img/slider2.jpg"alt="..." />
                        <img src="assets/img/slider3.jpg"alt="..." />
                        <img src="assets/img/slider4.jpg"alt="..." />
                        <img src="assets/img/slider5.jpg"alt="..." />
                        <img src="assets/img/slider6.jpg"alt="..." />
                        <img src="assets/img/slider7.jpg"alt="..." />
                        <img src="assets/img/slider8.jpg"alt="..." />
                        <img src="assets/img/slider9.jpg"alt="..." />
                        </Slider>
                    </div>
                    <ul className='boxList nomobile'>
                        <li>
                            <div className='boxes'>
                                <img src="assets/img/slider4.jpg" alt="..." />
                            </div>
                        </li>
                        <li>
                            <div className='boxes'>
                            <img src="assets/img/slider6.jpg" alt="..." />
                            </div>
                        </li>
                        <li>
                            <div className='boxes'>
                            <img src="assets/img/slider9.jpg" alt="..." />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </menu>
      );
}

export default Menu