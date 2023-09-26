import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import { useState } from "react";
import { useEffect } from "react";
import { ProductData } from "./contex";
import Search from "./components/Search";
import Category from "./components/Category";
import Basket from "./components/Basket";
import MenuModal from "./components/MenuModal";

function App() {
  const [mainData, setMainData] = useState([])
  const [menuData,setMenuData] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [likedProduct, setLikedProduct] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    fetch('/assets/datas/umicoCatalog.json')
      .then(response => response.json())
      .then(json => { setMainData(json) });
  },[])

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])
  useEffect(() => {
    if(showModal){
      document.body.style.overflowY = "hidden"  
    }else{
      document.body.style.overflowY = "visible"  
    }  
  })
  useEffect(() => {
    fetch('/assets/datas/menu.json')
        .then(response => response.json())
        .then(json => { setMenuData(json.data); })   

  },[])

  useEffect(() => {
    mainData.map(i => i.products.map(item => setAllProducts(allProducts => [...allProducts, item])))
  }, [mainData])


  function buy(id){
    let x = basket.find(item=>item.id===id);
    if (x === undefined) {
      setBasket([...basket,{id:id,piece:1}])
    }else{
      x.piece+=1
    }
  }
  const data = {
    mainData,
    allProducts,
    basket,
    setBasket,
    likedProduct,
    setLikedProduct,
    search,
    setSearch,
    showModal,
    setShowModal,
    buy,
    menuData,
    screenSize
  }
  
  return (
    <>
      <ProductData.Provider value={data}>
        <Header />
        <div className="relative">
          <MenuModal />
          <Routes>
            <Route index element={<><Menu /> <Main /></>} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/search/:name/*" element={<Search />} />
            <Route path="/category/:cat/*" element={<Category />} />
            <Route path="/*" element={<h1 style={{ fontSize: "5em", fontWeight: "bold", textAlign: "center", margin: "100px 0", color: "#7C62E2" }}> Error 404!</h1>} />
          </Routes>
        < Footer />  
        </div>
      </ProductData.Provider>
    </>
  );
}

export default App;
