import React, { useState } from "react";
import './dashboardPatient.css';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import NavbarImage from '../../../images/navbarImage.png';

export default function DashboardPatient() {
    const [item, setItem] = useState("1");
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/patientLogin")
        } catch {
            setError("Failed to log out")
        }
    }

    function togglePills(tabItem) {
        setItem(tabItem)
    };

    const WhiteTextTypography = withStyles({
        root: {
            color: "#474949"
        }
    })(Typography);

    return (
        <div className="container">
            <div className="navbar-left">
                {/* <NavbarImage /> */}
                <WhiteTextTypography variant="h2" style={{ fontWeight: "bold" }}>
                    Dashboard
                </WhiteTextTypography>
                <WhiteTextTypography variant="h6">
                    Profile/Prescription/Billing
                </WhiteTextTypography>
            </div>
            <div className="navbar-right">
                <AccountCircleIcon />
                <Typography id="account-link">
                    Doctor's Name
                </Typography>
                <Typography>
                    <Link to="/logout">Logout</Link>
                </Typography>
            </div>
            <div className="content">
                <div className="personal-details">
                    {/* image  */}
                    <AccountCircleIcon />
                    <Typography>
                        Neha Sharma
                    </Typography>
                    <i className="fas fa-venus-mars"></i>
                    <Typography>
                        Female, 25
                    </Typography>
                    <MailIcon />
                    <CallIcon />
                    <Typography>
                        +(91) 7859683541
                    </Typography>
                    <LocationOnIcon />
                    <Typography>
                        House No. - 3121, phase 7, Mohali
                    </Typography>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}