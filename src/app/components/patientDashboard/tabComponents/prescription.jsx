import React from 'react';
import './tabComponents.css';
import LogoImg from '../../../../images/logo.png';
import CallImg from '../../../../images/call.png';
import MailImg from '../../../../images/mail.png';
import { Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

export default function Prescription() {
    return (
        <PDFViewer style={{width: "50rem", height: "25rem"}}>
            <Document>
                <Page size="A4" style={{flexDirection: 'column', padding: '50 0'}}>
                    <View style={{padding: "30 60", backgroundColor: "#4dabf6", color: "white", flexDirection: "row"}}>
                        <View style={{marginRight: "180"}}>
                            <Text style={{fontSize: "20"}}>HEALTH CHOICE CLINIC</Text>
                            <Text style={{fontSize: "12", margin: "8 0 1 0"}}>[Parathe wali gali, Delhi 6, India]</Text>
                            <Text style={{fontSize: "12", margin: "1"}}>[phalanadhimkana@medilyze.com]</Text>
                        </View>
                        <Image source={LogoImg} style={{width: "60", height: "60"}} />
                    </View>
                    <View style={{padding: '60', fontSize: "12"}}>
                        <View style={{border: "1 solid #b6b6b6", width: "100%"}} />
                        <View style={{padding: "7", flexDirection: "row"}}>
                            <View style={{marginRight: "70"}}>
                                <Text style={{color: "#4dabf6"}}>Dr. Tohmmat Muradabadi, Hakeem</Text>
                                <Text style={{margin: "10 0"}}>[Medical Physician]</Text>
                                <Text>[(+91)9876543210]</Text>
                            </View>
                            <View style={{marginLeft: "70"}}>
                                <Text>Prescription no: [1234567]</Text>
                                <Text style={{margin: "10 0 10 50"}}>Date: 30/02/2300</Text>
                            </View>
                        </View>
                        <View style={{border: "1 solid #b6b6b6", width: "100%"}} />
                        <View style={{margin: "60 0 15 0"}}>
                            <Text>[Paracetamol, 500mg, once a day]</Text>
                            <Text style={{margin: "12 0 0 0"}}>Sher churan, 1 packet, khane ke baad</Text>
                        </View>
                        <View style={{margin: "15 0 60 0"}}>
                            <Text>Blood Test</Text>
                            <Text style={{margin: "12 0 0 0"}}>ECG</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={{color: "#4dabf6", marginRight: "25"}}>
                                <Text>Mr./Ms./Mrs.</Text>
                                <Text style={{margin: "12 0 6 0"}}>Age</Text>
                                <Text style={{margin: "6 0 12 0"}}>Address</Text>
                                <Text>Contact Num.</Text>
                            </View>
                            <View>
                            <View>
                                <Text>Maamu Jalela</Text>
                                <Text style={{margin: "12 0 6 0"}}>34</Text>
                                <Text style={{margin: "6 0 12 0"}}>Footpath</Text>
                                <Text>100</Text>
                            </View>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: "10 60", marginTop: "70", backgroundColor: "#4dabf6", color: "white", flexDirection: "row", fontSize: "10"}}>
                        <Image source={CallImg} style={{width: "12", height: "12", marginRight: "6"}} />
                        <Text>(+91)7895647224</Text>
                        <Image source={MailImg} style={{width: "12", height: "12", margin: "0 6 0 250"}} />
                        <Text>Kuchbhi@medilyze.com</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}