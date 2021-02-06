import React, { useRef, useState } from "react";
import './loginPatient.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Alert from '@material-ui/lab/Alert';
import logo from "../../../images/logo.png"
import containerImage from "../../../images/7882.png"
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function LoginPatient() {
    const phoneRef = useRef()
    const otpRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(phoneRef.current.value, otpRef.current.value)
            history.push("/patientLogin")
        } catch {
            setError("Failed to log in")
        }
    
        setLoading(false)
    }

    function handleResetOTP() {

    }

    return (
        <div className="container-patient">
            <div className="navbar">
                <AccountCircleIcon/>
                <Typography id="account-link">
                    Doctor's Name
                </Typography>
                <Typography>
                    Logout
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
                <form className="form-container-patient" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address or Phone Number"
                                name="email"
                                autoComplete="email"
                                color="primary"
                                inputRef={phoneRef}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Enter OTP"
                                type="number"
                                id="password"
                                color="primary"
                                inputRef={otpRef}
                            />
                        </Grid>
                        <Grid container xs={9}>
                            <Typography id="reset-OTP-link">
                                <Link href="#" onClick={handleResetOTP}>
                                    Resend OTP?
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            type="submit"
                            fullWidth="false"
                            variant="contained"
                            color="primary"
                            size="medium"
                            id="submit-form"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            Login
                        </Button>
                    </Grid>
                </form>
                <img src={containerImage} alt="loginPage" className="container-image-patient" />
            </div>
        </div>
    )
}