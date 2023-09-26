import { useContext } from 'react';
import  '../Css/header.css';
import { ProductData } from '../contex';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const{search,setSearch,basket,setShowModal,showModal} = useContext(ProductData)

    function ChangeSearch(x){
        setSearch(x)
    }
  return (
    <>
    <header>
    <div className="topHead nomobile">
            <div className="p-2">
                <div className=" topHeader mx-auto text-white ">
                    <span className="leftheader">
                        <span className="rotate" tabIndex="0"  >Şirkət kataloqu <i className="fa-solid fa-angle-down"></i>
                        </span>
                        <span>Umico Bonus loyallıq proqramı</span>
                        <span>Çatdırılma və ödəmə</span>
                        <span>Qaytarılma</span>
                        <span>Zəmanət</span>
                        <span className="special whitespace-nowrap">Umico Market-də satın</span>
                    </span>
                    <span className="rightheader">
                        <span className="rotate whitespace-nowrap" tabIndex="0" ><i className="fa-solid fa-phone"></i> 915
                            <i className="fa-solid fa-angle-down"></i> 
                        </span>
                        <span className="rotate flag whitespace-nowrap" tabIndex="0">
                                <img className='inline-block'  src="/assets/img/AzeFlag.png" alt="AzeFlag" /> AZ <i className="fa-solid fa-angle-down"></i>
                        </span>
                        <span className="rotate whitespace-nowrap" tabIndex="0" ><i className="fa-regular fa-user"></i> Qeydiyyat | Giriş</span>
                    </span>
                </div>
            </div>
        </div>

        <div className="bottomHeader">
            <div className="p-2">
                <div className="bottomInner mx-auto text-white ">
                    <span> 
                    <Link to={"/"}><img className="logo" src="/assets/img/Logo.png" alt="Logo" /></Link>
                    </span>
                    
                    <span className='catalog'>
                        <button className="rotate py-2 px-2 flex justify-between items-center whitespace-nowrap" onClick={()=>setShowModal(!showModal)} >Məhsul kataloqu <i className="fa-solid fa-angle-down"></i></button>
                    </span>

                    <span className="search">
                        <input className='px-3 text-black' onInput={(e) => ChangeSearch(e.target.value)} onKeyDown={(event)=>event.keyCode === 13 ? navigate("/search/" + search) :null} placeholder="Mən axtarıram..." type="text" />
                        <select className='text-black'>
                            <option>Məhsullar</option>
                            <option>Şirkət</option>
                        </select>
                        <Link to={"/search/" + search}><button className='searchButton ' ><i className="fa-solid fa-magnifying-glass "></i></button></Link>
                    </span>

                    <span className='buttons' >
                        <span className="regulars text-white whitespace-nowrap"> <i className="fa-solid fa-scale-balanced"></i> <span className='noxs'>Müqayisə</span> </span>
                        <span className="regulars text-white whitespace-nowrap"> <i className="fa-regular fa-heart"></i> <span className='noxs'>Seçilmişlər</span> </span>
                        <span>                            
                            <Link to="/basket">
                                <span className="regulars text-white whitespace-nowrap"> <i className="fa-solid fa-cart-shopping relative">  { basket.length>0? <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#7C62E3] border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{basket.length}</div>:null}</i> <span className='noxs'> Səbət </span> </span>
                            </Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
