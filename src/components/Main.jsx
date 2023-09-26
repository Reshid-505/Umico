import React, { useContext, useEffect } from 'react'
import Slider from "react-slick";
import  '../Css/main.css';
import Card from "./Card";
import { ProductData } from '../contex';


function Main() {
  const {allProducts}=useContext(ProductData)
    const brand=[
        {name:"Apple",img:"assets/img/brands/Apple.png"},
        {name:"Xiaomi",img:"assets/img/brands/xiaomi.png"},
        {name:"Trendyol",img:"assets/img/brands/Trendyol.png"},
        {name:"Samsung",img:"assets/img/brands/Samsung.png"},
        {name:"JYSK",img:"assets/img/brands/JYSK.png"},
        
        {name:"Trendyol MAN",img:"assets/img/brands/Trendyolman.png"},
        {name:"Casio",img:"assets/img/brands/Casio.png"},
        {name:"Ariel",img:"assets/img/brands/Ariel.png"},
        {name:"Bioderma",img:"assets/img/brands/Bioderma.png"},
        {name:"Bosch",img:"assets/img/brands/Bosch.png"},
        
        {name:"Baseus",img:"assets/img/brands/Baseus.png"},
        {name:"Poco",img:"assets/img/brands/Poco.png"},
        {name:"Intex",img:"assets/img/brands/Intex.png"},
        {name:"HP",img:"assets/img/brands/HP.png"},
        {name:"Honor",img:"assets/img/brands/Honor.png"},
        
        {name:"Lenovo",img:"assets/img/brands/Lenovo.png"},
        {name:"LG",img:"assets/img/brands/LG.png"},
        {name:"Sony",img:"assets/img/brands/Sony.png"},
        {name:"MiniSo",img:"assets/img/brands/Miniso.png"},
        {name:"Puma",img:"assets/img/brands/Puma.png"},
        
        {name:"Dessen",img:"assets/img/brands/Dessen.png"},
        {name:"Oral-B",img:"assets/img/brands/Oral-B.png"},
        {name:"Curren",img:"assets/img/brands/Curren.png"},
        {name:"Hoco",img:"assets/img/brands/Hoco.png"},
        {name:"Adidas",img:"assets/img/brands/Adidas.png"},
        
        {name:"Raf",img:"assets/img/brands/Raf.png"},
        {name:"Chicco",img:"assets/img/brands/Chicco.png"},
        {name:"Tommy Hilfiger",img:"assets/img/brands/Tommyhilfiger.png"},
        {name:"Philips",img:"assets/img/brands/Philips.png"},
        {name:"Gree",img:"assets/img/brands/Gree.png"},
    ]
    useEffect(()=>{
      window.scrollTo(0, 0)
    },[])

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
      ]

    };
    return (
      <main>
        <div className='bggrey'>
          <div className='center'>
            <div className='watchStory'>
              <h2>Əvvəl baxdıqlarınız</h2>
              <div className='watchedCards'>
              {allProducts.slice(0,5).map((item,index)=> <Card key={index} id={item.id} img={item.img_url_standard} price={item.retail_price} oldPrice={item.old_price} discount={item.discount} title={item.name} seller={item.manufacturer} /> )}

              </div>
            </div>
          </div>

        </div>

          <div className='center py-5'>
        <div className='grids'>
            
            <h2>Yay təklifləri!<img src="assets/img/umicoMarket.svg" alt="umicoMarket" /> </h2>
            <div className='topGrid'>
              <div className='grid2x2'>
                <img src="assets/img/grid2x2.jpg" alt="grid2x2" />
              </div>
              <div className='grids1'>
                <img src="assets/img/grids1.jpg" alt="grids1" />
              </div>
              <div className='grids2'>
                <img src="assets/img/grids2.jpg" alt="grids2" />
              </div>
              <div className='grids3'>
                <img src="assets/img/grids3.jpg" alt="grids3" />
              </div>
              <div className='grids4'>
                <img src="assets/img/grids4.jpg" alt="grids4" />
              </div>
              <div className='grids5'>
                <img src="assets/img/grids5.jpg" alt="grids5" />
              </div>
              <div className='grid1x3'>
                <img src="assets/img/grid1x3.jpg" alt="grids1x3" />
              </div>
            </div>
          <div className='bottomGrid'>
          <div className='gridm1'>
              <img src="assets/img/gridm1.jpg" alt="gridm1" />
            </div>
            <div className='gridm2'>
              <img src="assets/img/gridm2.jpg" alt="gridm2" />
            </div>
            <div className='gridm3'>
              <img src="assets/img/gridm3.jpg" alt="gridm3" />
            </div>
            <div className='gridm4'>
              <img src="assets/img/gridm4.jpg" alt="gridm4" />
            </div>
            <div className='gridm5 nomobile'>
              <img src="assets/img/gridm5.jpg" alt="gridm5" />
            </div>
          </div>
          </div>
          
        </div>

        <div className='bggrey brandSlider nomobile'>
          
          <div className='sliders'>          
            <h2> Populyar brendlər </h2>
            <Slider {...settings}>
            { brand.map((prod,i) => ( <div key={i} className="brandsCard"> <img src={prod.img} alt={prod.name} /> </div> ))
            }
            </Slider>
          </div>
          <div className='sliders'>          
            <h2> Populyar satıcilar </h2>
            <Slider {...settings}>
            { brand.reverse().map((prod,i) => ( <div key={i} className="brandsCard"> <img src={prod.img} alt={prod.name} /> </div> ))
            }

            </Slider>
          </div>
      </div>
      </main>
    );

}

export default Main
