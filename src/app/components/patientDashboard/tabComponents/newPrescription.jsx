import React, { useRef, useState } from 'react';
import './tabComponents.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useAuth } from "../../../contexts/AuthContext";
import { setPrescription } from "../../../contexts/FirebaseDatabaseContext";

export default function NewPrescription(props) {
    const diagnosisRef = useRef()
    const complaintsRef = useRef()
    const nextRef = useRef()
    const { logout, getUID } = useAuth();


    const medicineObject = {
        medication: "",
        dose: "",
        days: ""
    }

    const [medicineList, setMedicineList] = useState([
        {
            medication: "",
            dose: "",
            days: ""
        }
    ]);

    const testObject = {
        test: ""
    }

    const [testList, setTestList] = useState([
        {
            test: ""
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

    const handleSubmit = async () => {
        const UID = getUID();
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var rString = randomString(15, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
        var medList = []        
        for (var i = 0; i < medicineList.length; i++)
        {
            medList.push(medicineList[i].medication+" "+medicineList[i].dose+" "+medicineList[i].days)
        }

        var tList = []        
        for (var i = 0; i < testList.length; i++)
        {
            tList.push(testList[i].test)
        }

            const data = {
                "prescription_id": rString,
                "complaints": complaintsRef.current.value,
                "diagnosis": diagnosisRef.current.value,
                "Medicines": medList,
                "Tests": tList,
                "next_visit": nextRef.current.value
            }
        setPrescription(props.pid,data, UID)
    }


    return (
        <div className="add-prescription-container">
            <form>
                <Grid container spacing={3}>
                <Grid container item xs={12}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            label="Complaints"
                            color="primary"
                            inputRef={complaintsRef}
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Diagnosis"
                            color="primary"
                            inputRef={diagnosisRef}
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
                            <Grid container item xs={4} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Dosage
                                </Typography>
                            </Grid>
                            <Grid container item xs={4} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Duration
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
                                            placeholder="Name"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.medication = e.target.value}}
                                        />
                                    </Grid>
                                    <Grid container item xs={4} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="Morning-Afternoon-Night"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicine.dose = e.target.value}}
                                        />
                                    </Grid>

                                    <Grid container item xs={2} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="Days"
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
                            <Grid container item xs={12} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Medical Test
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid container item xs={12}>
                            {testList.map((medicalTest, index) => 
                                <Grid container>
                                    <Grid container item xs={10} className="medicine-table">
                                        <TextField
                                            variant="outlined"
                                            required
                                            placeholder="Test Name"
                                            fullWidth
                                            multiline
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {medicalTest.test = e.target.value}}
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
                    <Grid container item xs={12}>
                            <Grid container item xs={12} className="medicine-table-headings">
                                <Typography variant="h5">
                                    Next Visit
                                </Typography>
                            </Grid>

                        </Grid>
                    <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        label="Next Visit"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        size="small"
                                        inputRef={nextRef}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                </Grid>
                <Button onClick={handleSubmit} variant="contained" color="secondary" style={{marginTop: "4rem", paddingRight: "2rem", paddingLeft: "2rem"}} size="large">
                    Submit
                </Button>
            </form>
        </div>
    )
}