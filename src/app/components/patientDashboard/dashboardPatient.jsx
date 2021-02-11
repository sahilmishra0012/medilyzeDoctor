import React, { useState } from "react";
import './dashboardPatient.css';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Box, Button, Grid, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WcIcon from '@material-ui/icons/Wc';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import NavbarImage from '../../../images/navbarImage.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function DashboardPatient() {
    const [error, setError] = useState("");
    const [value, setValue] = useState(0);
    const { logout } = useAuth();
    const history = useHistory();

    async function handleExit() {
        setError("")

        try {
            await logout()
            history.push("/patientSearch")
        } catch {
            setError("Failed to exit")
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const WhiteTextTypography = withStyles({
        root: {
            color: "#474949"
        }
    })(Typography);

    return (
        <div className="container-dashboard">
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
                <Typography id="account-link-dashboard">
                    Doctor's Name
                </Typography>
                <Typography>
                    <Link to="/patientSearch" onClick={handleExit}>Exit</Link>
                </Typography>
            </div>
            <div className="content-dashboard">
                <div className="personal-details">
                    {/* patient's image  */}
                    <Typography variant="h3" component="h2" className="greeting">
                        Hello, Neha !!!
                    </Typography>
                    <Button id="contact-button">GET IN TOUCH</Button>
                </div>
                <div>
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="patient-medical-details" style={{backgroundColor: "#1990EA"}}>
                        <Tab label="Personal Details" {...a11yProps(0)} />
                        <Tab label="Prescription" {...a11yProps(1)} />
                        <Tab label="Billing" {...a11yProps(2)} />
                        <Tab label="Appointment History" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div className="tab-content">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <AccountCircleIcon />
                                    <Typography>
                                        Neha Sharma
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <WcIcon />
                                    <Typography>
                                        Female, 25
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <CallIcon />
                                    <Typography>
                                        +(91) 7859683541
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <MailIcon />
                                </Grid>
                                <Grid item xs={6}>
                                    <LocationOnIcon />
                                    <Typography>
                                        House No. - 3121, phase 7, Mohali
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button style={{backgroundColor: "#1990ea", color: "white"}}>Some Text</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}