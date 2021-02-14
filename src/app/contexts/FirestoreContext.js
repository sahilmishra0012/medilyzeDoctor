import React, { useContext, useState, useEffect } from "react"
import { db } from "../components/firebase"


export const fetchDoctorName = async (value) => {
    const uidRef = db.collection('doctors').doc(value);
    const doc = await uidRef.get()
    if (doc.exists) {
        let data = doc.data()['name'];
        return data;
    }
    else {
        console.log("No such document!");
        return -999;
    }
}

export const fetchPatientData = async (value) => {
    const uidRef = db.collection('patientIDUID').doc(value.trim());
    uidRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            const patientRef = db.collection('patients').doc(data['uid'])
            patientRef.get().then((doc) => {
                if (doc.exists) {
                    let data = doc.data();
                    console.log(data);
                    return data;
                }
                else {
                    console.log("No such document!");
                    return -999;
                }

            }).catch(function (error) {
                console.log("Error getting document:", error);
                return -999;
            });

        } else {
            console.log("No such document!");
            return -999;
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
        return -999;
    });
}