import { rdbms, db } from "../components/firebase"

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

export const deleteOtp = async (value, rand) => {
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