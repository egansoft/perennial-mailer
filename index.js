var settings = require('./settings')
var nodemailer = require('nodemailer')

var fromIndex = 0

var transporter = nodemailer.createTransport({
    service: settings.fromEmails[fromIndex].service,
    auth: {
        user: settings.fromEmails[fromIndex].email,
        pass: settings.fromEmails[fromIndex].password
    }
})

var mailOptions = {
    from: settings.fromEmails[fromIndex].email,
    to: settings.toEmail.join(', ')
}

var send = function() {
    mailOptions.subject = '[perennial] ' + Date.now()
    mailOptions.text = 'This is just another email from perennial mailer, sent at ' + Date.now()

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error)

            // Send from the next email this time
            fromIndex++
            fromIndex %= settings.fromEmails.length
            console.log('Now sending from ' + settings.fromEmails[fromIndex].email)

            transporter = nodemailer.createTransport({
                service: settings.fromEmails[fromIndex].service,
                auth: {
                    user: settings.fromEmails[fromIndex].email,
                    pass: settings.fromEmails[fromIndex].password
                }
            })

            mailOptions.from = settings.fromEmails[fromIndex].email

        } else
            console.log('Message sent: ' + info.response)
    })
}

send()
setInterval(send, settings.interval)

console.log('Started up perennial')
