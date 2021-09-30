import nodemailer from "nodemailer"


var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-tef-gavk.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"49939RgHCo9yP0T6SBXf2Jk9dsjDURBr","client_secret":"lmGNEzjom97675rQiLqzFHtHGs41G15AVCuelba94WlU4L381W91mxQ3Dq6Mq8zt","audience":"https://dev-tef-gavk.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

const emailPass = "yourPassword"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
})
//[1]

export default async (req, res) => {
    const { senderMail, name, tel, content, recipientMail } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || tel === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ senderMail, name, text: content + " ( phone )" + tel, recipientMail })
    res.send(mailerRes)
//[4]
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}