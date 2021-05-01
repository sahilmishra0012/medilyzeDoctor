import React, { useEffect, useMemo, useState } from 'react';
import './tabComponents.css';
import LogoImg from '../../../../images/logo.png';
import Rx from '../../../../images/rx.png';
import MailImg from '../../../../images/mail.png';
import { Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

const Reports = () => {
    const location = useLocation();
    const [error, setError] = useState("");
    const history = useHistory()

    const [prescriptionData, setPrescriptionData] = useState();
    async function handleExit() {
        setError("")

        try {
            const pid = await prescriptionData?.pid
            history.push({ pathname: "/patientProfile", state: { pid: pid} })
        } catch {
            setError("Failed to exit")
        }
    }

    useMemo(() => {
        setPrescriptionData(location.state);
    }, []);

    try {
        return (
            <div>
                <div className="navbar-right1">
                <Typography >
                    <Link style={{color:"black"}} onClick={handleExit}>Exit</Link>
                </Typography>
            </div>
                <div style={{ padding: "5%",marginTop:"5%", marginBottom: "3%", backgroundColor: "#4dabf6", color: "white" }}>

                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <div style={{ paddingTop: "2%", float: "left" }}>
                            <Typography variant="h3">{prescriptionData?.data?.hospital}</Typography>
                        </div>
                        <div style={{ width: "20%", float: "right" }}>
                            <img src={LogoImg} style={{ width: "70%" }} />
                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ backgroundColor: "", float: "left" }}>
                            <h4>Doctor: {prescriptionData?.data?.doctor}</h4>
                        </div>
                        <div style={{ backgroundColor: "", float: "right" }}>
                            <h4>Prescription ID: {prescriptionData?.data?.prescription_id}</h4>
                        </div>

                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5%", paddingRight: "5%" }}>
                    <div style={{ backgroundColor: "", float: "left" }}>
                        <p><b>Patient Information</b></p>
                    </div>
                    <div style={{ backgroundColor: "", float: "right" }}>
                        <p>Date: {prescriptionData?.date}</p>
                    </div>
                </div>
                <hr style={{ width: "90%", height: "2px", color: "gray", backgroundColor: "gray" }} />
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5%", paddingRight: "5%" }}>
                    <div style={{ backgroundColor: "", float: "left" }}>
                        <p>Name: {prescriptionData?.patientData?.firstName + " " + prescriptionData?.patientData?.middleName + " " + prescriptionData?.patientData?.lastName}</p>
                    </div>
                    <div style={{ backgroundColor: "", float: "right" }}>
                        <p>Date of Birth: {prescriptionData?.dob}</p>
                        <p style={{ textAlign: "right" }}>Blood Group: {prescriptionData?.patientData?.blood_group}</p>
                    </div>
                </div>
                <hr style={{ width: "90%", height: "2px", color: "gray", backgroundColor: "gray" }} />
                <div style={{ paddingLeft: "5%", textAlign: "left" }}>
                    <h2>Reports:</h2>
                </div>
                <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th style={{ textAlign: "left" }}>S.No.</th>
                            <th style={{ textAlign: "left" }}>Report</th>
                            <th style={{ textAlign: "left" }}>Scan</th>
                        </tr>
                        {prescriptionData?.data.Tests.map((test, index) => (
                            <tr>
                                <td style={{ padding: "2% 0%" }}>{index + 1}</td>
                                <td style={{ wordBreak:"break-all", padding: "2% 1%", width:"30rem" }}>{prescriptionData?.data.Reports[index].report}</td>
                                <td style={{ padding: "2% 0%" }}><img width="50%" src={prescriptionData?.data.Reports[index].url}></img></td>
                            </tr>

                        ))}
                    </table>
                </div>
                <div style={{ marginTop: "5%", padding: "0.5%", width: "150", marginBottom: "3%", backgroundColor: "#4dabf6", color: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ paddingLeft: "2%", backgroundColor: "", float: "left" }}>
                            <h4>7007059528</h4>
                        </div>
                        <div style={{ paddingRight: "2%", backgroundColor: "", float: "right" }}>
                            <h4>medilyze.sup@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    catch (e) {
        return (
            <div>
            <div className="navbar-right1">
                <Typography >
                    <Link style={{color:"black"}} onClick={handleExit}>Exit</Link>
                </Typography>
            </div>
            <div className="center">
                <p>No Report Exists</p>
                </div>
                </div>
        )
    }


}

export default Reports;