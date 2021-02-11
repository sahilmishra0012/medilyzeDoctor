import React, { useContext, useState, useEffect } from "react"
import { db } from "../components/firebase"



export const fetchPatientData = async (value) => {
    const uidRef = db.collection('patientIDUID').doc(value.trim());
    uidRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            const patientRef = db.collection('patients').doc(data['uid'])
            patientRef.get().then((doc) => {
                if (doc.exists) {
                    let data = doc.data();
                    console.log(data['name']);
                    console.log(data['dob'])
                }
                else {
                    console.log("No such document!");
                }

            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}