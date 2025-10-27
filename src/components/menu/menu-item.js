import React from "react";
import './menu-item.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl = '' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to either linkUrl or fallback to /shop/title
        navigate(linkUrl || `/shop/${(title || '').toLowerCase()}`);
    };

    return (
        <div
            className={`menu-item ${size || ''}`}
            onClick={handleClick}
        >
            <div
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='content'>
                <h1 className='title'>{title && title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
