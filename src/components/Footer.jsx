import React from 'react'
import  '../Css/footer.css';

function Footer() {
  return (
<footer>
        <div className='topFooter text-white nomobile'>
            <div className='container mx-auto topMain'>
                <div className='left'>
                    <h1 className='font-bold text-4xl' >Alış-veriş edin, keşbek qazanın və maliyyənizi idarə edin</h1>
                    <h5>Hamısı bir tətbiqdə!</h5>
                    <div className='appLogo my-5'>
                        <div>
                            <img src="/assets/img/google-play.png" alt="..." />
                        </div>
                        <div>
                            <img src="/assets/img/app-store.png" alt="..." />
                        </div>
                        <div>
                            <img src="/assets/img/appgallery.png" alt="..." />
                        </div>
                    </div>
                    
                </div>
                <div className='right'>
                    <img src="/assets/img/application-screens-az.png" alt=""/>
                </div>
            </div>
        </div>
        <span className='bottomFooter container mx-auto' >
        <div className="text-slate-500">
            <ul>
                <li className="font-bold text-slate-600">Çağrı mərkəzi</li>
                <li>Qaynar xətt</li>
                <li className="font-bold text-xl text-slate-600">915</li>
                <li className="link"><i className="fa-solid fa-thumbs-down fa-flip-horizontal"></i><span> Malı qaytarmaq</span></li>
                <li className="link"><i className="fa-solid fa-gavel fa-flip-horizontal"></i> <span>Müştəri Vəkilinə onlayn müraciət</span></li>
                <li className="small-text">Müştəri Vəkili ilə ofisdə görüş təyin etmək üçün 915 nömrəsi ilə əlaqə saxlayın</li>
                <li>Digər ölkələrdən gələn zənglər üçün <br /> +994 12 210 00 21</li>
                <li>Çağrı mərkəzinin iş saatları <br />B.e. - C.9:00 – 00:00<br />Ş - B.10:00 – 00:00</li>
            </ul>
            <ul className="linkHover links">
                <li className="font-bold text-slate-600">Bizi izləyin</li>
                <li>Umico Live jurnalı</li>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
        </div>
        <div className="text-slate-500 linkHover">
            <ul>
                <li className="font-bold text-slate-600">Umico Market</li>
                <li>Umico Market-də necə sifariş etmək olar</li>
                <li>Çatdırılma və ödəmə</li>
                <li>Azərpoçt şöbələrinə çatdırılma</li>
                <li>Kredit</li>
                <li>Taksitli ödəniş</li>
                <li>Promokodlar və endirimlər</li>
                <li>Sifarişin ləğv edilməsi və qaytarılması</li>
                <li>Azərpoçt şöbələrində geri qaytarma prosesi</li>
                <li>Umico Market təhvil məntəqələrinin siyahısı</li>
                <li>Azərpoçt şöbələrinin siyahısı</li>
                <li>Servis mərkəzləri</li>
                <li>Ən çox verilən suallar</li>
            </ul>
            <ul>
                <li className="font-bold text-slate-600">Umico Bonus</li>
                <li>Umico Bonus ilə necə alış-veriş etmək olar</li>
                <li>Umico Bonus kartını haradan əldə etmək olar</li>
                <li>Umico Bonus tərəfdaşlarının siyahısı</li>
            </ul>
        </div>
        <div className="text-slate-500 linkHover">
            <ul>
                <li className="font-bold text-slate-600">Tərəfdaşlar üçün Umico</li>
                <li>Umico Market-də satışa necə başlamaq olar</li>
                <li>Umico-nun tərəfdaşı olmaq</li>
                <li>Texniki reqlament</li>
            </ul>
            <ul>
                <li className="font-bold text-slate-600">Şirkət</li>
                <li>İstifadə şərtləri (ictimai oferta) Umico Bonus</li>
                <li>İstifadə şərtləri (ictimai oferta) Umico Market</li>
            </ul>
        </div>
        </span>
    </footer>
  )
}

export default Footer
