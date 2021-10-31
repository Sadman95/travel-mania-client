import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className='text-light bg-dark p-4 d-flex flex-wrap justify-content-between align-items-center'>
            <h3>Travel Mania</h3>
            <div>
                <span>All Rights Reserved || 2021</span>
            </div>
            <div>
                <span>Follow Us On:</span>&nbsp;
                <FacebookIcon/>
                <TwitterIcon/>
                <PinterestIcon/>
            </div>            
        </div>
    );
};

export default Footer;