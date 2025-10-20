import react from "react";
import './homepage.scss';

const HomePage = () =>(
    <div className = 'homepage'>
        <diV className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> HATS</h1>
                    <span className= 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className= 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className= 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMEN</h1>
                    <span className= 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MEN</h1>
                    <span className= 'subtitle'>SHOP NOW</span>
                </div>
            </div>
        </diV>
        
    </div>
)

export default HomePage;