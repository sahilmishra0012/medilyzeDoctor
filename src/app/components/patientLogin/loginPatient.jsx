import React, { useRef, useState, useEffect } from "react";
import './loginPatient.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Alert from '@material-ui/lab/Alert';
import logo from "../../../images/logo.png"
import containerImage from "../../../images/7882.png"
import { useAuth } from "../../contexts/AuthContext";
import { fetchPatientData, fetchDoctorName } from "../../contexts/FirestoreContext";
import { generateOTP } from "../../contexts/FirebaseDatabaseContext";


import { useHistory } from "react-router-dom";


export default function LoginPatient() {
    const uidRef = useRef()
    const { login, logout, getUID } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [doctorName, setDoctorName] = useState("")
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            const UID = getUID();
            const name = await fetchDoctorName(UID);
            setDoctorName(name)
        }
        fetchData();
    }, [doctorName])

    async function handleSubmit1(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            // await fetchPatientData(uidRef.current.value)
            history.push({ pathname: "/patientProfile", state: { pid: uidRef.current.value } })
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }


    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <div className="container-patient">
            <div className="navbar">
                <AccountCircleIcon />
                <Typography id="account-link">
                    {doctorName}
                </Typography>
                <Typography>
                    <Link onClick={handleLogout}>
                        Logout
                    </Link>
                </Typography>
            </div>
            <div className="content-patient">
                <img src={logo} alt="logo" className="logo-image-patient" />
                <div className="headings-patient">
                    <Typography className="heading" component="h2" variant="h3">
                        Welcome!
                    </Typography>
                    <Typography className="head-desc" component="h1" variant="h6">
                        Enter patient's information below
                    </Typography>
                </div>
                {error && <Alert severity="error">{error}</Alert>}
                <form className="form-container-patient" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="uid"
                                label="UID Number"
                                name="phoneNumber"
                                color="primary"
                                inputRef={uidRef}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            type="submit"
                            fullWidth="false"
                            variant="contained"
                            color="primary"
                            size="medium"
                            id="submit-form"
                            disabled={loading}
                        >
                            Access Profile
                        </Button>
                    </Grid>
                </form>
                <img src={containerImage} alt="loginPage" className="container-image-patient" />
            </div>
        </div>
    )
}