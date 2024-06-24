import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req){
    try{
        const {firstName,lastName,email,phone,message} = await req.json();

        const sender = {
            name: 'Mukesh Kumar',
            address: 'tech@hakxcore.com'
        }

        // const recipients = ['support@hakxcore.com','help@hakxcore.com','mukeshkumarcharak@gmail.com','hakxcore@gmail.com']
        const recipients = ['adityasharma.officially01@gmail.com']

        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: sender,
            to: recipients,
            subject: 'Test subject',
            html: `<p>FirstName: ${firstName}</p>
                   <p>LastName: ${lastName}</p>
                   <p>Email: ${email}</p>
                   <p>Phone: ${phone}</p>
                   <p>Message: ${message}</p>`,
        }

        await transport.sendMail(mailOptions)
        return NextResponse.json({message: 'Successfull to send mail'});
    } catch (error){
        return NextResponse.json({message: 'Unable to send mail'});
    }
}