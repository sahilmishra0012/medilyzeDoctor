import React, { useRef, useState } from "react";
import './loginDoctor.css';
import { useAuth } from "../../contexts/AuthContext"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Alert from '@material-ui/lab/Alert';
import logo from "../../../images/logo.png";
import containerImage from "../../../images/Group 1.png";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

export default function LoginDoctor() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/patientSearch")
        } catch {
            setError("Failed to log in")
        }
    
        setLoading(false)
    }

    function handleUserGroupChange() {

    }

    function handleForgotPassword() {

    }

    return (
        <div className="container-doctor">
            <div className="content-doctor">
                <img src={logo} alt="logo" className="logo-image-doctor" />
                <div className="headings-doctor">
                    <Typography className="heading" component="h2" variant="h3">
                        Welcome!
                    </Typography>
                    <Typography className="head-desc" component="h1" variant="h6">
                        Sign in by entering the information below
                    </Typography>
                </div>
                {error && <Alert severity="error">{error}</Alert>}
                <form className="form-container-doctor" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                color="secondary"
                                inputRef={emailRef}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color="secondary"
                                inputRef={passwordRef}
                            />
                        </Grid>
                        <Grid container xs={9}>
                            <FormControlLabel 
                                className="remember-checkbox"
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Remember me"
                            />
                            <Typography id="forgot-password-link">
                                <Link to="/" onClick={handleForgotPassword}>
                                    Forgot Password?
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={9}>
                        <Button
                            type="submit"
                            fullWidth="false"
                            variant="contained"
                            color="secondary"
                            size="large"
                            className="submit-form"
                            disabled={loading}
                        >
                            Sign In
                        </Button>
                    </Grid>
                </form>
                <img src={containerImage} alt="loginPage" className="container-image-doctor" />
            </div>
        </div>
    )
}