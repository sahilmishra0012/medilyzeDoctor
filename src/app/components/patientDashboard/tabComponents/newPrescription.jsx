import React, { useRef, useState } from 'react';
import './tabComponents.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function NewPrescription() {
    const diagnosisRef = useRef()
    const complaintsRef = useRef()
    const clinicalFeaturesRef = useRef()
    const examinationRef = useRef()
    const investigationRef = useRef()
    const adviceRef = useRef()
    const notesRef = useRef()

    const medicineObject = {
        medication: "",
        dose: "",
        usage: "",
        days: ""
    }

    const [medicineList, setMedicineList] = useState([
        {
            medication: "",
            dose: "",
            usage: "",
            days: ""
        }
    ]);

    const testObject = {
        test: "",
        date: "",
        reason: ""
    }

    const [testList, setTestList] = useState([
        {
            test: "",
            date: "",
            reason: ""
        }
    ]);

    function addMedication() {
        let newMedicineList = medicineList;
        newMedicineList.push(medicineObject);
        setMedicineList(newMedicineList);
    }

    function removeMedicine(index) {
        delete medicineList[index];
        setMedicineList(medicineList);
    }

    function addTest() {
        let newTestList = testList;
        newTestList.push(testObject);
        setTestList(newTestList);
    }

    function removeTest(index) {
        delete testList[index];
        setTestList(testList);
    }

    return (
        <div className="add-prescription-container">
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Diagnosis"
                            color="primary"
                            inputRef={diagnosisRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Chief Complaints"
                            color="primary"
                            inputRef={complaintsRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Clinical Features"
                            color="primary"
                            inputRef={clinicalFeaturesRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Examination"
                            color="primary"
                            inputRef={examinationRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Investigation"
                            color="primary"
                            inputRef={investigationRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Advice/Referrals"
                            color="primary"
                            inputRef={adviceRef}
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Notes"
                            color="primary"
                            inputRef={notesRef}
                        />
                    </Grid>
                    <Grid container spacing={2} item xs={12}>
                        <Grid container item xs={2}>
                            <Typography variant="h4">
                                Medicines
                            </Typography>
                        </Grid>
                        <Grid container item xs={1}>
                            <Button onClick={addMedication} color="secondary">
                                <AddCircleIcon />
                            </Button>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid container item xs={4} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Medication
                                </Typography>
                            </Grid>
                            <Grid container item xs={1} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Dose
                                </Typography>
                            </Grid>
                            <Grid container item xs={5} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Usage
                                </Typography>
                            </Grid>
                            <Grid container item xs={1} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Days
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            {medicineList.map((medicine, index) => 
                                <Grid container>
                                    <Grid container item xs={4} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="name"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.medication = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={1} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="no."
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.dose = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={5} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="describe"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.usage = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={1} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="no."
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.days = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={1} className="medicine-table">
                                        <Button onClick={() => removeMedicine(index)}>
                                            <RemoveCircleIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} item xs={12}>
                        <Grid container item xs={2}>
                            <Typography variant="h4">
                                Tests
                            </Typography>
                        </Grid>
                        <Grid container item xs={1}>
                            <Button onClick={addTest} color="secondary">
                                <AddCircleIcon />
                            </Button>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid container item xs={4} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Medical Test
                                </Typography>
                            </Grid>
                            <Grid container item xs={2} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Due Date
                                </Typography>
                            </Grid>
                            <Grid container item xs={5} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Reason for seeing
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            {testList.map((medicalTest, index) => 
                                <Grid container>
                                    <Grid container item xs={4} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="name"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicalTest.test = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={2} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="date"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicalTest.date = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={5} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="describe"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicalTest.reason = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={1} className="medicine-table">
                                        <Button onClick={() => removeTest(index)}>
                                            <RemoveCircleIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" style={{marginTop: "4rem", paddingRight: "2rem", paddingLeft: "2rem"}} size="large">
                    Submit
                </Button>
            </form>
        </div>
    )
}