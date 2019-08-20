export default (req, res) => {
  const date = new Date().toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '') 

  res.json({ date })
}

// import React from 'react'
// const fake = () => {
//   return <div/>
// }
// export default fake

// const nodemailer = require('nodemailer')
// const sgTransport = require('nodemailer-sendgrid-transport')

// const transporter = nodemailer.createTransport(sgTransport({
//   auth: {
//     api_key: process.env.SENDGRID_API
//   }
// }))

// export default (req, res) => {
  // res.status(200).json({text:'text'})
  // const { name, email, text } =req.body
  // const from = name && email ? `${name} <${email}>` : `${name || email}`
  // const message = {
  //   from,
  //   to: 'matthewwbuckley@gmail.com',
  //   subject: `New message from ${from}`,
  //   text,
  //   replyTo: from
  // }

  // return new Promise((resolve, reject) => {
  //   transporter.sendMail(message, (error, info) =>
  //     error ? reject(error) : resolve(info)
  //   )
  // })
// }

// exports.handler = function(event, context, callback) {
//   const { name, email, text } = event.body
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: 'matthewwbuckley@gmail.com',
//     subject: `New message from ${from}`,
//     text,
//     replyTo: from
//   }

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }
