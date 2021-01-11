import React from "react";
import './loginPatient.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from "../../../images/logo.png"
import containerImage from "../../../images/7882.png"

export default function LoginDoctor() {
    function handleResetOTP() {

    }

    return (
        <div className="container">
            <div className="navbar">
                <AccountCircleIcon/>
                <Typography id="account-link">
                    Doctor's Name
                </Typography>
                <Typography>
                    Logout
                </Typography>
            </div>
            <div className="content">
                <img src={logo} alt="logo" className="logo-image" />
                <div className="headings">
                    <Typography className="heading" component="h2" variant="h3">
                        Welcome!
                    </Typography>
                    <Typography className="head-desc" component="h1" variant="h6">
                        Enter patient's information below
                    </Typography>
                </div>
                <form className="form-container" noValidate>
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
                        >
                            Login
                        </Button>
                    </Grid>
                </form>
                <img src={containerImage} alt="loginPage" className="container-image" />
            </div>
        </div>
    )
}