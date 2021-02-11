import React, { useContext, useState, useEffect } from "react"
import { db } from "../components/firebase"



export const fetchPatientData = async (value) => {
    const docRef = db.collection('patientIDUID').doc(value.trim());
    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            console.log("Document data:", data);
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}