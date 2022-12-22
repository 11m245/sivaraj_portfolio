import ContactMailIcon from '@mui/icons-material/ContactMail';
import Button from "@mui/material/Button";
import PhonelinkRingRoundedIcon from '@mui/icons-material/PhonelinkRingRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

import { refContext } from "../App";
import { useContext } from "react";

function Contact() {

    const { contactRef } = useContext(refContext);

    return (<>

        <div ref={contactRef} className="contacts-container section">
            <h2 className="text-center title">Contact</h2>

            <div className="contacts-wrapper">
                <div className="contacts-set1-wrapper">
                    <div className="contact-option">
                        <a href="mailto:sivaraj2siva@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Button size="large" variant="text" startIcon={<ContactMailIcon sx={{ fontSize: "40px" }} />}>
                                <span className="contact-text">sivaraj2siva@gmail.com</span>
                            </Button>
                        </a>
                    </div>

                    <div className="contact-option">
                        <a href="callto:+919489310240" target="_blank" rel="noopener noreferrer">
                            <Button size="large" variant="text" startIcon={<PhonelinkRingRoundedIcon />}>
                                <span className="contact-text">9489310240</span>
                            </Button>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href="https://www.google.com/maps/place/Dharmapuri,+Tamil+Nadu/@12.126953,78.1514842,14z/data=!3m1!4b1!4m5!3m4!1s0x3bac16f95a63ed01:0x3f2cb64e61c93aef!8m2!3d12.1210997!4d78.1582143" target="_blank" rel="noopener noreferrer">
                            <Button size="large" color="secondary" variant="text" startIcon={<LocationOnRoundedIcon />}>
                                <span className="contact-text">Dharmapuri, Tamil Nadu</span>
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="contacts-set2-wrapper">

                    <div className="contact-option">
                        <a href="./assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button size="large" variant="text" startIcon={<GetAppRoundedIcon />}>
                                <span className="contact-text">Download Resume PDF</span>
                            </Button>
                        </a>
                    </div>

                    <div className="social-links-container d-flex justify-content-center gap-2 mt-2">
                        <a href="https://github.com/11m245/" target="_blank" rel="noopener noreferrer">
                            <IconButton sx={{ "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" }, fontSize: "large" }} aria-label="delete"><GitHubIcon sx={{ fontSize: { md: "36px" } }} /></IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/sivaraj-m-32a62172/" target="_blank" rel="noopener noreferrer">
                            <IconButton sx={{ "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" } }} color="primary" aria-label="add to shopping cart"><LinkedInIcon sx={{ fontSize: { md: "36px" } }} /> </IconButton>
                        </a>
                        <a href="mailto:sivaraj2siva@gmail.com" target="_blank" rel="noopener noreferrer">
                            <IconButton sx={{ "&:hover": { backgroundColor: "bisque" } }} color="secondary" aria-label="add an alarm"> <ForwardToInboxIcon sx={{ fontSize: { md: "36px" } }} /></IconButton>
                        </a>
                    </div>
                </div>

            </div>




        </div>
    </>)
}

export { Contact }