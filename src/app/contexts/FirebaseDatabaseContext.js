import { rdbms, db } from "../components/firebase"
import { fetchDoctorData } from "./FirestoreContext"

export const generateOTP = async (value, rand) => {
    const pidRef = db.collection('patientIDUID').doc(value.trim());
    const uidDoc = await pidRef.get()
    if (uidDoc.exists) {
        let data = uidDoc.data()['uid'];
        rdbms.ref('otp/' + data).set({
            otp: rand,
        });
    }
    else {
        console.log("No such patient!");
        return -999;
    }
}

export const setPrescription = async (value, prescription, doctor_uid) => {
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    const doctor_data = await fetchDoctorData(doctor_uid);
    prescription['doctor'] = doctor_data['name']
    prescription['doctorID'] = doctor_data['doctorID']
    prescription['hospital'] = doctor_data['hospital']
    prescription['consultancy_charges'] = doctor_data['consultancy_charges']

    const pidRef = db.collection('patientIDUID').doc(value.trim());
    const uidDoc = await pidRef.get()


    if (uidDoc.exists) {
        let data = uidDoc.data()['uid'];
        let name = await rdbms.ref('prescription/' + data).once("value", snapshot => {
        }
        );
        var len = name.val().length;
        await rdbms.ref('prescription/' + data + "/" + (len) + "/" + date).update({
            0: prescription,
        });
    }
    else {
        console.log("No such patient!");
        return -999;
    }
}

export const getAppointments = async (value) => {
    const pidRef = db.collection('patientIDUID').doc(value.trim());
    const uidDoc = await pidRef.get()
    if (uidDoc.exists) {
        let data = uidDoc.data()['uid'];
        let name = await rdbms.ref('prescription/' + data).once("value", snapshot => {
        }
        );
        return name.val().reverse();

    }
    else {
        console.log("No such patient!");
        return -999;
    }
}

export const deleteOtp = async (value) => {
    const pidRef = db.collection('patientIDUID').doc(value.trim());
    const uidDoc = await pidRef.get()
    if (uidDoc.exists) {
        let data = uidDoc.data()['uid'];
        rdbms.ref('otp/' + data).remove();
    }
    else {
        console.log("No such patient!");
        return -999;
    }
}