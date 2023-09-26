import React, { useEffect, useState, useContext  } from 'react'
import "../Css/product.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { ProductData} from "../contex";

function Product() {
  const { allProducts,buy,screenSize } = useContext(ProductData)
  let { id } = useParams()
  let [mainProduct, setProduct] = useState({})
  let [imgArr, setImgArr] = useState([])
  useEffect(() => {
    setProduct(allProducts.find(item => item.id.toString() === id));
  }, [allProducts,id])

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])


  useEffect(() => {
    if (mainProduct?.img_urls_secondary !== undefined) {
      setImgArr(mainProduct?.img_urls_secondary);
    }
  }, [mainProduct])

  let [sliderImg, setSliderImg] = useState(imgArr[0])
  useEffect(() => {
    setSliderImg(imgArr[0])
  }, [imgArr])
  const [liked, SetLike] = useState(false)


  function ChangeLike() {
    SetLike(!liked)
  }

  function channgeSliderImg(img) {
    setSliderImg(img.item)
  }
  return (
    <>
      <div className='productTop'>
        <div className='productSlider'>
          <ul>
            {imgArr.map((item, index) => <li key={index} onClick={() => channgeSliderImg({ item })}  ><img  src={item} alt="..." /></li>)}
          </ul>
          <div className='sliderDisplay'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: '...',
                isFluidWidth: true,
                enlargedImageClassName: "smallImage",
                src: sliderImg,

              },
              largeImage: {
                src: sliderImg,
                width: 1500,
                height: 1500,
                transform: 'translateX(100%)',
              },
              enlargedImageContainerDimensions: {
                width: '100%',
                height: '100%',
              },
              enlargedImageContainerStyle: {
                backgroundColor: '#fff',

              },
              enlargedImageStyle: {
                objectFit: 'cover',
                minWidth: "1500px",
              },
              enlargedImagePosition:screenSize.width<=1000 ? "over" : "beside",

            }} />
          </div>
        </div>

        <div className='productInfo'>
          <div className='badge'>
            <ul>
              {mainProduct?.discount > 0 ? <li className='bg-[#FF4B81] text-[#FFFFFF]'>{mainProduct?.discount.toFixed(0)}% endirim</li> : ""}


              <li className='bg-[#1768C9] text-[#FFFFFF]'>
                <svg viewBox="0 0 10 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.57751 0.337805C8.80274 1.30296 8.01216 2.26812 7.2374 3.23328C7.12672 3.37805 7.06347 3.49065 7.03185 3.60326C7.03185 3.63543 7.01604 3.68369 7.03185 3.71586C7.04766 3.82846 7.11091 3.95715 7.2374 4.10192C7.2374 4.10192 5.43488 2.46115 6.19383 1.43165C6.49425 1.06167 6.79467 0.691696 7.07928 0.321719C7.2374 0.112602 7.45876 0.016086 7.72756 0C8.29677 0 8.86599 0 9.4352 0C9.53007 0 9.62494 0 9.65657 0.0965158C9.68819 0.193032 9.64075 0.257375 9.57751 0.337805Z" fill="currentColor"></path><path d="M9.5459 7.33714H7.6327C7.12673 7.22454 6.90537 6.77413 6.60495 6.42024C5.9883 5.6642 5.37165 4.89208 4.73918 4.13604C4.6285 4.00735 4.51782 3.87866 4.51782 3.68563C4.51782 3.55694 4.54945 3.44434 4.6285 3.34782C5.07123 2.8009 5.51395 2.23789 5.95667 1.69097C5.95667 1.69097 5.95667 1.67488 5.97249 1.67488C6.03573 1.59445 6.09898 1.51402 6.17804 1.43359C5.41908 2.4631 7.2216 4.10386 7.2216 4.10386C7.99636 5.06902 8.77113 6.01809 9.5459 6.98325C9.6882 7.1602 9.6882 7.20845 9.5459 7.33714Z" fill="currentColor"></path><path d="M3.81632 10.5684C3.81632 10.5844 3.81632 10.5844 3.81632 10.5684C3.51504 10.9383 3.21375 11.3083 2.92832 11.6783C2.76975 11.8874 2.54775 11.9839 2.27817 12C1.70731 12 1.13645 12 0.565592 12C0.470449 12 0.375305 12 0.343591 11.9035C0.311876 11.807 0.359448 11.7426 0.422877 11.6783C1.19988 10.7131 1.99274 9.74798 2.76975 8.78282C2.88075 8.63805 2.94418 8.52545 2.97589 8.41284C2.97589 8.38067 2.99175 8.33242 2.97589 8.30024C2.96003 8.18764 2.8966 8.05895 2.76975 7.91418C2.76975 7.89809 4.59333 9.53886 3.81632 10.5684Z" fill="currentColor"></path><path d="M5.48106 8.31558C5.48106 8.44426 5.44935 8.55687 5.37006 8.65338C4.92606 9.2003 4.48206 9.76331 4.03805 10.3102C4.03805 10.3102 4.03805 10.3263 4.0222 10.3263C3.95877 10.4068 3.89534 10.4872 3.81605 10.5676C4.5772 9.53811 2.76948 7.89734 2.76948 7.89734C1.99247 6.93218 1.21547 5.98311 0.438464 5.01795C0.311606 4.84101 0.311606 4.79275 0.454321 4.66406H2.37305C2.88048 4.77666 3.10248 5.22707 3.40377 5.58096C4.03805 6.337 4.65649 7.10913 5.27492 7.88126C5.37006 8.00994 5.49692 8.12254 5.48106 8.31558Z" fill="currentColor"></path></svg>
                <span>ƏDV</span></li>
              <li className='border border-[#16C67A] text-[#16C67A]'><i className="fas fa-truck"></i>Pulsuz çatdırılma</li>
              <li className='border border-[#FFAB40] text-[#FFAB40]'><i className="fas fa-shipping-fast"></i>Ekspress</li>
              <li className='bg-[#FFAB40]'>2 ilədək kredit</li>
            </ul>
            <h2 className='fullName'>{mainProduct?.name}</h2>
          </div>
          <div className='reyting'>
            <ul >
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p>reyting yoxdur</p>
          </div>
          <div className='productCode'>
            <ul>
              <li >Məhsulun kodu: {id}</li>
              <li><button onClick={ChangeLike} type="like">{liked ? <i className="fas fa-heart" style={{ color: "#FF4B81" }}></i> : <i className="far fa-heart" style={{ color: "#FF4B81" }}></i>}</button>Seçilmişlərə əlavə et</li>
              <li><i className="fa-solid fa-scale-balanced" style={{ color: "#FF4B81" }}></i>Müqayisəyə əlavə et</li>
            </ul>
          </div>
          <div className='productDelivery nomobile'>
            <img className='productDelivery' src="/assets/img/productDelivery.jpg" alt="..." />
          </div>
          <div className='priceTag'>

            <h2>  {mainProduct?.discount > 0 ? <><span className="discount">{mainProduct?.retail_price} ₼</span> <span className='line-through'>{mainProduct?.old_price} ₼</span> </> : `${mainProduct?.retail_price}₼`}</h2>

            <div className='aboutCredit'>
              <img src="/assets/img/icon-credit-card.jpg" alt="..." />
              <span className='bg-[#FFD740] rounded-sm font-bold'>Taksitli ödəniş</span>
              <p>{(mainProduct?.retail_price / 18).toFixed(2)} ₼ x 18 ay</p>
            </div>
          </div>
          <div className='buttons'>
            <button className='addCart' onClick={()=>{buy(Number(id))}}>Səbətə əlavə etmək</button>
            <button className="buyCredit">Kreditlə almaq</button>
          </div>
          <div className='aboutProduct'>
            <h3>Məhsul haqqında məlumat:</h3>
            <ul>
              <li><span>Brend:</span>{mainProduct?.manufacturer}</li>
              <li><span>Brendin ölkəsi:</span>{mainProduct?.custom_field_values_az?.split(",")[2]}</li>
            </ul>
            <h4>Texniki göstəricilərə və təsvirə baxmaq</h4>
          </div>
        </div>
      </div>

    </>
  )
}

export default Product
