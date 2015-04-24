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
    toEmail: ['myfirstemail@example.com', 'mysecondemail@example.org'], // emails to send to
    fromEmail: 'myotheremail@gmail.com', // email to send from
    fromService: 'Gmail', // service to send through
    fromPassword: 'SecretPassword123', // password
    interval: 1 * 60 * 1000 // interval in milliseconds
}
```
