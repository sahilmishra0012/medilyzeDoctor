import React from 'react';
import './tabComponents.css';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Prescription() {
    return (
        <Document>
            <Page size="A4" style={{flexDirection: 'row'}}>
                <View style={{margin: '10', padding: '10', flexGrow: '1'}}>
                    <Text>Section</Text>
                </View>
                <View style={{margin: '10', padding: '10', flexGrow: '1'}}>
                    <Text>Section</Text>
                </View>
            </Page>
        </Document>
    )
}