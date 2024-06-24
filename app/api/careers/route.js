import { NextResponse } from 'next/server';
import { google } from 'googleapis';


export async function POST(req){
    try{
        const {name,email,phone,address,position,coverLetter} = await req.json();
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n')
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append( {
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:F1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [name,email,phone,address,position,coverLetter]
                ]
            }
        });
        return NextResponse.json({message: 'Successfull to send form data'});
    } catch (error){
        return NextResponse.json({message: 'Unable to send form data'});
    }
}