const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')

require('dotenv').config()

const app = express()
const PORT = 8000

app.use(bodyParser)
app.use(cookieParser)

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_ACCT,
		pass: process.env.GMAIL_PW,
	},
})

app.get('/', (req, res) => {
	res.status(200).send('Almega Digital server')
})

app.post('/contact', (req, res) => {
	const mailOptions = {
		from: req.body.email,
		to: process.env.CONTACT_EMAIL,
		subject: `NEW ${req.body.servicePackage} Inquiry`,
		text: `
			${req.body.name.length ? 'Name: ' + req.body.name + '\n' : ''}
			Email: ${req.body.email} \
			${req.body.website.length ? 'Website: ' + req.body.website + '\n' : ''}
			${req.body.servicePackage.length ? 'Package: ' + req.body.servicePackage + '\n' : ''}
			${req.body.message.length ? 'Message: ' + req.body.message : 'No message delivered.'}
		`,
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(400).send('Error sending email: ', error)
		} else {
			res.status(200).send('Email sent successfully: ', info)
		}
	})
})

app.listen(PORT, (req, res) => {
	console.log(`Server is listening on PORT ${PORT}`)
})