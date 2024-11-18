import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <div className='footer_outer_container'>
            <div className='footer_inner_container'>
                <div className='footer_icon'>
                   <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>

                <div className='footer_data'>
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li>Investor Relations</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>

                    <div className='footer_call'>
                        <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preference</li>
                        </ul>
                        </div>
                        
                    </div>
                    <div className='footer_gift'>
                        <div>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>
                        </ul>
                        </div>
                    </div>
                    <div className='footer_media'>
                        <div>
                        <ul>
                            <li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                        </ul>
                        </div>
                    </div>
                

            </div>
            <div className='footer_code'>
                Service code
            </div>
            <div className='copyWrite'>
                <p>&copy; 1997-2024 netflix,inc</p>
            </div>
            </div>

        </div>
    )
}

export default Footer
