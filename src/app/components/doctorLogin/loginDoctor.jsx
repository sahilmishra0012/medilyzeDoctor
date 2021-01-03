import React from "react";
import './loginDoctor.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import logo from "../../../images/logo.png"
import containerImage from "../../../images/Group 1.png"

export default function LoginDoctor() {
    function handleUserGroupChange() {

    }

    function handleForgotPassword() {

    }

    return (
        <div className="container">
            <div className="content">
                <img src={logo} alt="logo" className="logo-image" />
                <div className="headings">
                    <Typography className="heading" component="h2" variant="h3">
                        Welcome!
                    </Typography>
                    <Typography className="head-desc" component="h1" variant="h6">
                        Sign in by entering the information below
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
                                color="secondary"
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
                            />
                        </Grid>
                        <Grid item xs={9}>
                        <FormControl required variant="outlined" className="dropdown">
                            <InputLabel id="demo-simple-select-outlined-label">User Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value=""
                                onChange={handleUserGroupChange}
                                label="User Group"
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value={"doctor"}>Doctor</MenuItem>
                                <MenuItem value={"patient"}>Patient</MenuItem>
                                <MenuItem value={"pharmacy"}>Pharmacy</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid container xs={9}>
                            <FormControlLabel 
                                className="remember-checkbox"
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Remember me"
                            />
                            <Typography id="forgot-password-link">
                                <Link href="#" onClick={handleForgotPassword}>
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
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={9} className="link-to-signup">
                        <Typography>
                            Don't have an account?
                            <Link href="#">
                                Create one here
                            </Link>
                        </Typography>
                    </Grid>
                </form>
                <img src={containerImage} alt="loginPage" className="container-image" />
            </div>
        </div>
    )
}