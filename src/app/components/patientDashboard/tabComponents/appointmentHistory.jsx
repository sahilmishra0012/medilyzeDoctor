import React, { useState, useEffect } from 'react';
import './tabComponents.css';
import Prescription from './prescription';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { PDFViewer } from '@react-pdf/renderer';
import { getAppointments } from "../../../contexts/FirebaseDatabaseContext";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AppointmentRow(props) {
    const [open, setOpen] = useState(false);
    const appointment = props.appointmentData;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="appointment-list-content">
            <Grid container spacing={0}>
                <Grid container item xs={2} alignContent="center">
                    <Grid container item>
                        <Typography variant="h6">
                            Doctor's ID
                        </Typography>
                    </Grid>
                    <Grid container item>
                        <Typography variant="h6" style={{ color: "#1991EB" }}>
                            {appointment[Object.keys(appointment)][0]['doctorID']}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={8}>
                    <Paper elevation={2} className="appointment-doctor-details">
                        <Grid container spacing={1}>

                            <Grid item xs={10}>
                                <Typography variant="h6">
                                    {appointment[Object.keys(appointment)][0]['doctor']}
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: "#333333", marginBottom: "0.3rem" }}>
                                    Hospital: {appointment[Object.keys(appointment)][0]['hospital']}
                                </Typography>
                                <Typography variant="subtitle2" style={{ color: "#555555", marginBottom: "0.3rem" }}>
                                    Complaints: {appointment[Object.keys(appointment)][0]['complaints']}
                                </Typography>
                                <Typography variant="subtitle2" style={{ color: "#555555", marginBottom: "0.3rem" }}>
                                    Pre-diagnosis: {appointment[Object.keys(appointment)][0]['diagnosis']}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container item xs={2} spacing={3}>
                    <Grid container item xs={12}>
                        <Paper style={{ width: "20rem", padding: "0.5rem" }}>
                            <DateRangeIcon />
                            <Typography variant="h6">{Object.keys(appointment)}</Typography>
                        </Paper>
                    </Grid>
                    <Grid container item xs={12}>
                        <Button
                            type="button"
                            fullWidth="false"
                            variant="contained"
                            color="secondary"
                            size="medium"
                            className="view-prescription"
                            onClick={handleClickOpen}
                        >View</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="contact" maxWidth="lg" TransitionComponent={Transition} keepMounted>
                            <DialogTitle id="prescription-box-title">Prescription</DialogTitle>
                            <DialogContent>
                                <Prescription data={appointment[Object.keys(appointment)][0]} patientData={props.data} dob={props.dob} date={Object.keys(appointment)} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default function AppointmentHistory(props) {
    const [appointmentHistory, setAppointmentHistory] = useState("")

    useEffect(() => {
        async function fetchData() {
            const data = await getAppointments(props.pid);
            setAppointmentHistory(data)
        }
        fetchData();
    }, [appointmentHistory])

    if (appointmentHistory) {
        return (
            <div className="appointment-history-content">
                <Typography variant="h4" style={{ color: "#1991EB" }}>
                    Appointment History
                </Typography>
                <Typography variant="subtitle2">
                    Dashboard/Appointment History/Prescription
                </Typography>
                <div>
                    {appointmentHistory.map((appointment) => (
                        <AppointmentRow appointmentData={appointment}/>
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }

}