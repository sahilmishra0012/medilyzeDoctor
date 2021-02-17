import React, {useState} from 'react';
import './tabComponents.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AppointmentHistory(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const appointmentList = [{
        doctorId: "FG123456",
        doctorName: "Dr. Sumanpreet Kaur",
        imageUrl: "https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170524444/78443570-a-female-doctor-avatar-character-vector-illustration-design.jpg",
        preDiagnostics: "Corona positive, mild cough symptoms",
        doctorSpecialization: "Cardiologist",
        status: "Admitted for 5 days"
    }]; //assign list from backend here
    return (
        <div className="appointment-history-content">
            <Typography variant="h4" style={{color: "#1991EB"}}>
                Appointment History
            </Typography>
            <Typography variant="subtitle2">
                Dashboard/Appointment History/Prescription
            </Typography>
            <div>
                {appointmentList.map((appointment) => (
                    <div className="appointment-list-content">
                        <Grid container spacing={0}>
                            <Grid container item xs={2} alignContent="center">
                                <Grid container item>
                                    <Typography variant="h6">
                                        Doctor's ID
                                    </Typography>
                                </Grid>
                                <Grid container item>
                                    <Typography variant="h5" style={{color: "#1991EB"}}>
                                        {appointment.doctorId}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={8}>
                                <Paper elevation={2} className="appointment-doctor-details">
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <img src={appointment.imageUrl} style={{height: "80%", width: "100%"}} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {props.pid}
                                            </Typography>
                                            <Typography variant="subtitle1" style={{color: "#333333", marginBottom: "0.3rem"}}>
                                                {appointment.doctorSpecialization}
                                            </Typography>
                                            <Typography variant="subtitle2" style={{color: "#555555"}}>
                                                {appointment.preDiagnostics}
                                            </Typography>
                                            <Typography variant="subtitle2" style={{color: "#555555"}}>
                                                {appointment.status}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid container item xs={2} spacing={3}>
                                <Grid container item xs={12}>
                                    <Paper style={{width: "20rem", padding: "0.5rem"}}>
                                        <DateRangeIcon />
                                        <Typography variant="h6">22/12/2018</Typography>
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
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="contact" TransitionComponent={Transition} keepMounted>
                                        <DialogTitle id="prescription-box-title">Prescription</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                
                                            </DialogContentText>
                                            
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="secondary">
                                                Close
                                            </Button>
                                            <Button onClick={handleClose} color="secondary">
                                                Download
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                                <Grid item xs={12}></Grid>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </div>
        </div>
    )
}