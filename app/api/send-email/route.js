// // app/api/send-email/route.js
// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export async function POST(req, res) {
//     console.log("end point hit")
//   const data = await req.json();
//   console.log('Received data:', data); // Log the data for debugging

//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.EMAIL_USER,  // Your email address from the .env.local file
//       pass: process.env.EMAIL_PASS,  // Your app password from the .env.local file
//     },
//   });
  

//   const mailOptions = {
//     from: data.email, // sender's email
//     to: process.env.EMAIL_USER, // your email address
//     subject: data.subject,
//     text: `Name: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
//   }
// }



// for .env.local
// EMAIL_USER=dr.muhammadahmed05@gmail.com
// EMAIL_PASS=zlgdijhbndxnmdib
