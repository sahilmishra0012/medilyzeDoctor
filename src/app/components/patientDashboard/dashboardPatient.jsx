import React, { useState, useEffect } from "react";
import './dashboardPatient.css';
import { loadCSS } from 'fg-loadcss';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Box, Button, Grid, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import NavbarImage from '../../../images/navbarImage.png';
import { fetchPatientData, fetchDoctorName, getDob } from "../../contexts/FirestoreContext";
import { Icon, InlineIcon } from '@iconify/react';
import genderMaleFemale from '@iconify-icons/mdi/gender-male-female';
import AppointmentHistory from './tabComponents/appointmentHistory';
import NewPrescription from './tabComponents/newPrescription';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DashboardPatient() {
    const [error, setError] = useState("");
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const { logout, getUID } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [doctorName, setDoctorName] = useState("")
    const [patientData, setPatientData] = useState({})
    const [dob, setDob] = useState("")

    useEffect(() => {
        async function fetchData() {
            const name = await getDob(location.state.pid);
            setDob(name)
        }
        fetchData();
    }, [dob])


    useEffect(() => {
        async function fetchData() {
            const UID = getUID();
            const name = await fetchDoctorName(UID);
            setDoctorName(name)
        }
        fetchData();
    }, [doctorName])

    useEffect(() => {
        async function fetchData() {
            const UID = getUID();
            const name = await fetchPatientData(location.state.pid);
            setPatientData(name)
        }
        fetchData();
    }, [patientData])

    async function handleExit() {
        setError("")

        try {
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

    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container-dashboard">
            <div className="navbar-left">
                <img src={NavbarImage} alt="navbar" className="navbar-image" />
                <div className="navbar-headings">
                    <WhiteTextTypography variant="h2" style={{ fontWeight: "900", fontSize: "4rem", marginBottom: "-0.5rem" }}>
                        Dashboard
                    </WhiteTextTypography>
                    <Typography variant="h6" style={{ color: "#626B74", marginLeft: "0.1rem" }}>
                        Profile/Prescription/Billing
                    </Typography>
                </div>
            </div>
            <div className="navbar-right">
                <AccountCircleIcon />
                <Typography id="account-link-dashboard">
                    {doctorName}
                </Typography>
                <Typography>
                    <Link to="/patientSearch" onClick={handleExit}>Exit</Link>
                </Typography>
            </div>
            <div className="content-dashboard">
                <div className="personal-details">
                    <div className="patient-image">
                        <img alt=""
                            src={patientData.imageUrl} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                    </div>
                    <Grid container spacing={1} style={{ width: "40rem", margin: "1.5rem", display: "inline-flex" }}>
                        <Grid container item xs={6}>
                            <AccountCircleIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.name}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6}>
                            <CallIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.phone}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6}>
                            <Icon icon={genderMaleFemale} style={{ fontSize: 25 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.gender}
                            </Typography>
                        </Grid>

                        <Grid container item xs={6}>
                            <MailIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.email}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6}>
                            <PermContactCalendarIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {dob}
                            </Typography>
                        </Grid>
                        <Grid container item xs={6}>
                            <InvertColorsIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.blood_group}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12}>
                            <LocationOnIcon style={{ fontSize: 27 }} />
                            <Typography variant="subtitle2" align="left" style={{ margin: "0.25rem" }}>
                                {patientData.address}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button id="contact-button" onClick={handleClickOpen}>GET IN TOUCH</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="contact" TransitionComponent={Transition} keepMounted>
                        <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To send us a message, type in the below form and we will reach out to you soon.
                        </DialogContentText>
                            <TextField
                                variant="outlined"
                                required
                                autoFocus
                                margin="dense"
                                id="subject"
                                label="Subject"
                                type="text"
                                color="secondary"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                required
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Message"
                                multiline="true"
                                type="text"
                                color="secondary"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="secondary">
                                Send
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div>
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="patient-medical-details" style={{ backgroundColor: "#1990EA" }}>
                            <Tab label="Appointment History and Prescription" {...a11yProps(0)} />
                            <Tab label="Write Prescription" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <AppointmentHistory pid={location.state.pid} data={patientData} dob={dob} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <NewPrescription pid={location.state.pid}/>
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}