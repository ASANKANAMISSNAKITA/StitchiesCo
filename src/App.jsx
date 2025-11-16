import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import shopeeIcon from './assets/shoppee.png'
import fbIcon from './assets/facebook.png'
import instagramIcon from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import ribbon from './assets/ribbon.png'
import logo from './assets/logo.png'
import logo2 from './assets/logo2.png'
import ashley from './assets/ashley.png'
import curlene from './assets/curlene.png'
import isha from './assets/isha.png'
import izah from './assets/izah.png'
import lester from './assets/lester.png'
import shem from './assets/shem.png'
import yesha from './assets/yesha.png'
import roadmap from './assets/roadmap.png'
import fbsocial from './assets/fbsocial.png'
import tiktoksocial from './assets/tiktoksocial.png'
import igsocial from './assets/igsocial.png'
import shopeesocial from './assets/shopeesocial.png'

function App() {
  const [count, setCount] = useState(0)
   const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['SOCIALS','ABOUT','PRODUCTS','TEAM','STORE'];
  
  return (
    <div style={{width: '1728px', height: '6321px', background: '#FAF8F8'}}>
         <div style={{position:'sticky',top:0,zIndex:1000,width:'100%'}}>
            <div style={{width:'100%',height:'auto',background:'#82001A',boxShadow:'0px 4px 15px rgba(0,0,0,0.25)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 5%',boxSizing:'border-box'}}>
              <img src={logo} alt="Logo" style={{width:'auto',maxHeight:'4rem',objectFit:'contain'}}/>
              <div className="desktop-menu" style={{display:'flex',gap:'1.5rem',alignItems:'center'}}>
                {menuItems.map(item => <div key={item} style={{color:'#FAF8F8',fontSize:'1rem',fontFamily:'Halant',fontWeight:'700',cursor:'pointer'}}>{item}</div>)}
              </div>
              <button className="mobile-menu-button" onClick={()=>setMenuOpen(!menuOpen)} style={{display:'none',background:'none',border:'none',color:'#FAF8F8',fontSize:'1.5rem',cursor:'pointer'}}>☰</button>
            </div>
            {menuOpen && (
              <div className="mobile-menu" style={{display:'flex',flexDirection:'column',background:'#82001A',padding:'1rem 5%',gap:'1rem'}}>
                {menuItems.map(item => <div key={item} style={{color:'#FAF8F8',fontSize:'1rem',fontFamily:'Halant',fontWeight:'700',cursor:'pointer'}}>{item}</div>)}
              </div>
            )}
          </div>

          <div className="social-section">
            {[
              { title: "FACEBOOK", link: "https://www.facebook.com/people/Stitchies-Co/61582689445991/", img: fbsocial},
              { title: "TIKTOK", link: "https://www.tiktok.com/@stichiesco", img: tiktoksocial },
              { title: "SHOPEE", link: " #", img: shopeesocial },
              { title: "INSTAGRAM", link: "https://www.instagram.com/stitchies_co/#", img: igsocial }
            ].map((item, index) => (
              <a key={index} href={item.link} className="social-card">
                <img src={item.img} alt={item.title} />
                <div className="overlay"></div>
                <h2>{item.title}</h2>
              </a>
            ))}
          </div>


        
        <img style={{width: 523, height: 523, left: 1038, top: 1029, position: 'absolute'}} src="https://placehold.co/523x523" />
        <div style={{width: 1760, height: 2107, left: -24, top: 799, position: 'absolute', background: '#82001A'}} />
        <div style={{left: 780, top: 1028, position: 'absolute', color: 'white', fontSize: 50, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>ABOUT</div>
        <img style={{width: 1373, height: 579, left: 177, top: 5331, position: 'absolute'}} src="https://placehold.co/1373x579" />
        <img style={{width: 257, height: 257, left: 119.11, top: 659, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 257, height: 257, left: 781.47, top: 710, position: 'absolute', transform: 'rotate(3deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 257, height: 257, left: 1527.91, top: 898.88, position: 'absolute', transform: 'rotate(157deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 195.90, height: 195.90, left: 356, top: 790.17, position: 'absolute', transform: 'rotate(-31deg)', transformOrigin: 'top left'}} src={ribbon} />
            <img style={{width: 195.90, height: 195.90, left: 1573, top: 763.16, position: 'absolute', transform: 'rotate(-6deg)', transformOrigin: 'top left'}} src={ribbon} />
            <img style={{width: 257, height: 257, left: 1602.02, top: 3049.45, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 257, height: 257, left: 949.65, top: 3002.45, position: 'absolute', transform: 'rotate(-177deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 257, height: 257, left: 203.22, top: 2813.57, position: 'absolute', transform: 'rotate(-23deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <img style={{width: 195.90, height: 195.90, left: 1375.13, top: 2922.28, position: 'absolute', transform: 'rotate(149deg)', transformOrigin: 'top left'}} src={ribbon} />
            <img style={{width: 195.90, height: 195.90, left: 158.13, top: 2949.29, position: 'absolute', transform: 'rotate(174deg)', transformOrigin: 'top left'}} src={ribbon}/>
            <div style={{width: 319, height: 66, left: 192, top: 1162, position: 'absolute', color: '#FAF8F8', fontSize: 42, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>STITCHIES CO.</div>
            <div style={{width: 319, height: 66, left: 264, top: 2278, position: 'absolute', textAlign: 'center', color: '#FAF8F8', fontSize: 42, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>MISSION</div>
            <div style={{width: 319, height: 66, left: 1089, top: 2278, position: 'absolute', textAlign: 'center', color: '#FAF8F8', fontSize: 42, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>VISION</div>
            <div style={{width: 690, height: 215, left: 192, top: 1228, position: 'absolute', color: '#FAF8F8', fontSize: 32, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Stitchies Co. was founded on the belief that great style and sustainable practices should go hand in hand. Our name embodies this dual philosophy: craftsmanship and captivation.</div>
            <div style={{width: 650, height: 264, left: 115, top: 2352, position: 'absolute', textAlign: 'justify', color: '#FAF8F8', fontSize: 30, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Our mission at Stitchies Co. is to achieve the creation of compact essentials that lessen everyday hassle, can be carried anywhere, and reflect both function and style. Through this, we aim to provide practical solutions that highlight our commitment to creativity and innovation in the present market.</div>
            <div style={{width: 696, height: 299, left: 901, top: 2352, position: 'absolute', textAlign: 'justify', color: '#FAF8F8', fontSize: 30, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Our vision is to make Stitchies Co. a recognized brand in sustainable and stylish compact products by turning fabric scraps into creative, fashionable, and functional essentials. We encourage people to embrace eco-friendly lifestyles and promote environmental stewardship that leads to lasting social change.</div>
            <img style={{width: 1588, height: 590, left: 70, top: 1566, position: 'absolute'}} src={roadmap} />
        
        
        
        <div style={{left: 673, top: 3027, position: 'absolute', color: '#82001A', fontSize: 50, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>OUR PRODUCTS</div>
        <div style={{left: 285, top: 3586, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>TOTIE BAG </div>
            <div style={{width: 429, height: 429, left: 145, top: 3145, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 145, top: 3145, position: 'absolute'}} src="https://placehold.co/429x429" />
            <div style={{left: 1293, top: 3586, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>POUCHIES</div>
            <div style={{width: 429, height: 429, left: 1153, top: 3145, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 1153, top: 3145, position: 'absolute'}} src="https://placehold.co/429x429" />
            <div style={{left: 769, top: 3586, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>LAPSTITCHIE</div>
            <div style={{width: 429, height: 429, left: 649, top: 3145, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 649, top: 3145, position: 'absolute'}} src="https://placehold.co/429x429" />
            <div style={{left: 226, top: 4150, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>STITCHIE SLEEVES</div>
            <div style={{width: 429, height: 429, left: 145, top: 3709, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 145, top: 3709, position: 'absolute'}} src="https://placehold.co/429x429" />
            <div style={{left: 1293, top: 4150, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>SILKANIK</div>
            <div style={{width: 429, height: 429, left: 1153, top: 3709, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 1153, top: 3709, position: 'absolute'}} src="https://placehold.co/429x429" />
            <div style={{left: 771, top: 4150, position: 'absolute', color: '#82001A', fontSize: 30, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>STITCHBUDS</div>
            <div style={{width: 429, height: 429, left: 649, top: 3709, position: 'absolute', background: '#FAF8F8', boxShadow: '0px 6px 8px 2px rgba(0, 0, 0, 0.25)'}} />
            <img style={{width: 429, height: 429, left: 649, top: 3709, position: 'absolute'}} src="https://placehold.co/429x429" />

        <div style={{left: 665, top: 4391, position: 'absolute', color: '#82001A', fontSize: 50, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>MEET THE TEAM</div>
        <div style={{width: 1460, height: 484, left: 122, top: 4512, position: 'absolute'}}>
              <div style={{width: 397, height: 477, left: 894, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 31, left: 923, top: 390, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>MARKETING STAFF</div>
              <div style={{width: 334, height: 31, left: 923, top: 421, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Shemaiah Vidal</div>
              <div style={{width: 397, height: 477, left: 447, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 31, left: 476, top: 390, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>FINANCE MANAGER</div>
              <div style={{width: 334, height: 31, left: 476, top: 421, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Izah Timkang</div>
              <img style={{width: 350, height: 350, left: 470, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <div style={{width: 397, height: 477, left: 2235, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 28.71, left: 2264, top: 396.42, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>LOGISTICS COORDINATOR</div>
              <div style={{width: 334, height: 28.71, left: 2264, top: 425.13, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Curlenne Carlos</div>                <img style={{width: 350, height: 350, left: 2259, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <div style={{width: 397, height: 477, left: 2682, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 28.71, left: 2711, top: 396.42, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>CASHIER STAFF</div>
              <div style={{width: 334, height: 28.71, left: 2711, top: 425.13, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Yesha Fausto</div>
              <img style={{width: 350, height: 350, left: 2711, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <div style={{width: 397, height: 477, left: 1788, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 28.71, left: 1817, top: 396.42, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>SALES CONSULTANT</div>
              <div style={{width: 334, height: 28.71, left: 1817, top: 425.13, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Lester Arellano</div>
              <img style={{width: 350, height: 350, left: 1812, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <div style={{width: 397, height: 477, left: 1341, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 31, left: 1370, top: 390, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>OPERATIONS MANAGER</div>
              <div style={{width: 334, height: 31, left: 1370, top: 421, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Crisha Cubos</div>
              <img style={{width: 350, height: 350, left: 1365, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <div style={{width: 397, height: 484, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.25)', borderRadius: 24}} />
              <div style={{width: 334, height: 31, left: 29, top: 390, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>GENERAL MANAGER</div>
              <div style={{width: 334, height: 31, left: 29, top: 421, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Halant', fontWeight: '400', wordWrap: 'break-word'}}>Ashley Atencia</div>
              <img style={{width: 350, height: 350, left: 24, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
              <img style={{width: 350, height: 350, left: 918, top: 23, position: 'absolute', boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)'}} src="https://placehold.co/350x350" />
        </div>
          
        
        <img style={{width: 1483, height: 625, left: 122, top: 5322, position: 'absolute'}} src="https://placehold.co/1483x625" />
        <div style={{left: 653, top: 5220, position: 'absolute', color: '#82001A', fontSize: 50, fontFamily: 'Halant', fontWeight: '700', wordWrap: 'break-word'}}>STORE LOCATION</div>
        

        <footer style={{top: '6070px', width:'100%',background:'#82001A',color:'white',padding:'2rem 5%',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'flex-start',position:'relative',boxSizing:'border-box',minHeight:'10rem'}}>
          <img style={{ width: '16%', height: 'auto', right: '2%', top: 18.58, position: 'absolute', transform: 'rotate(-20deg)', transformOrigin: 'top left', borderRadius: 50 }} src={ribbon}/>
          <div style={{ width: '25%', left: '-1%', top: 81, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '400' }}>COPYRIGHT © 2025 STITCHIES CO.</div>
          <div style={{ left: '61%', top: 41, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700' }}>Follow Us</div>
          <img style={{ width: 35, height: 35, left: '70%', top: 78, position: 'absolute' }} src={shopeeIcon} />
          <img style={{ width: 35, height: 35, left: '64%', top: 78, position: 'absolute' }} src={instagramIcon} />
          <img style={{ width: 35, height: 35, left: '61%', top: 78, position: 'absolute' }} src={fbIcon} />
          <img style={{ width: 35, height: 35, left: '67%', top: 78, position: 'absolute' }} src={tiktok}/>
          <div style={{ left: '43%', top: 41, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700' }}>Contact Us</div>
          <div style={{ left: '43%', top: 80, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>Email: stitchiescoquette@gmail.com</div>
          <div style={{ left: '43%', top: 106, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>Phone: (+63) 995-464-6403</div>
          <div style={{ left: '26%', top: 41, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Roboto', fontWeight: '700' }}>Stitchies Co.</div>
          <div style={{ left: '26%', top: 80, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>About Us</div>
          <div style={{ left: '26%', top: 106, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>Products</div>
          <div style={{ left: '32%', top: 80, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>Team</div>
          <div style={{ left: '32%', top: 106, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400' }}>Store</div>
          <div style={{ width: 1, height: 105, left: '23%', top: 31, position: 'absolute', background: '#6E0016' }} />
        </footer>

        



        





        
    </div>
  )
}

export default App
