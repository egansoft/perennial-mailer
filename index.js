var settings = require('./settings')
var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: settings.fromService,
    auth: {
        user: settings.fromEmail,
        pass: settings.fromPassword
    }
})

var mailOptions = {
    from: settings.fromEmail,
    to: settings.toEmail.join(', '),
}

setInterval(function() {
    mailOptions.subject = '[perennial] ' + Date.now()
    mailOptions.text = 'This is just another email from perennial mailer, sent at ' + Date.now()

    transporter.sendMail(mailOptions, function(error, info) {
        if(error)
            console.log(error)
        else
            console.log('Message sent: ' + info.response)
    })
}, settings.interval)

console.log('Started up perennial')
