const nodemailer = require('nodemailer');

// transporter connects to host domain
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nabarunkar01@gmail.com', //  your gmail account
        pass: 'abetqasaszauvfww' //  APP PASSWORD, only works when 2FA on your account is enabled.
    }
});

export default transporter;