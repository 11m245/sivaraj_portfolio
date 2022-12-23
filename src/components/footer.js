import WidgetsIcon from '@mui/icons-material/Widgets';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useContext, useState } from 'react';
import { refContext } from "../App";




function Footer() {

    const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } = useContext(refContext);


    const mobileMenuList = [{ name: "Home", icon: <HomeIcon />, ref: homeRef },
    { name: "About", icon: <AccountCircleIcon />, ref: aboutRef },
    { name: "Skills", icon: <WorkspacePremiumIcon />, ref: skillsRef },
    { name: "Projects", icon: <AssignmentTurnedInIcon />, ref: projectsRef },
    { name: "Contact", icon: <AlternateEmailIcon />, ref: contactRef },
    ];

    const [toggleMenu, setToggleMenu] = useState(false);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });

    }


    // onBlur={() => setToggleMenu(!toggleMenu)}
    return (<>

        <div className="footer-container container"  >
            {toggleMenu ? <div className="mobile-menus">
                {mobileMenuList.map((menu, i) =>
                    <Button onClick={() => scrollToSection(menu.ref)} key={i} variant="text" sx={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center", "&:hover": { color: "green", fontWeight: "bold" }
                    }}
                        startIcon={menu.icon}

                    >
                        {menu.name}
                    </Button>)}
            </div> : null}
            <div className="foot">
                <Button onClick={() => scrollToSection(contactRef)} variant="text" sx={{ color: "#1976d2", textTransform: "capitalize", fontWeight: 600, fontSize: "1rem ", "&:hover": { color: "green", fontWeight: "bold" } }}>Sivaraj</Button>
                <IconButton onClick={() => setToggleMenu(!toggleMenu)} aria-label="fingerprint" sx={{ color: "#1976d2", "&:hover": { color: "green", fontWeight: "bold" } }}>
                    <WidgetsIcon />
                </IconButton>
            </div>


        </div>
    </>)
}

export { Footer }