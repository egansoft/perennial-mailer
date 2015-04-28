# Perennial Mailer
If you've ever used POP3 in Gmail to fetch mail from your other accounts, you'll notice
that the frequency by which Gmail checks for new messages is incredibly low. From what
I've read, the check frequency is automatically set by the frequency in which you receive
emails and can't be set by yourself. So I figured that the best way to get Gmail to fetch
my emails more often is to automatically send myself emails.

Perennial Mailer does just that by automatically sending emails after a set delay
through a simple Node.js script. All I did was call nodemailer through an interval and
run it on my server. If you want to do the same, clone the project and a file called
settings.js with the following contents:

```javascript
module.exports = {
    toEmail: ['youremail@example.com'], // Email to send to
    fromEmails: [ // Emails to send from
        {email: 'firstemail@gmail.com', password: '*****', service: 'Gmail'},
        {email: 'secondemail@gmail.com', password: '****', service: 'Gmail'}
    ],
    interval: 180 * 1000 // time interval in milliseconds
}
```

Keep in mind that it might not work reliably yet, as gmail is pretty tricky. I'm still
working on it.
