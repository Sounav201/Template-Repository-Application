const nodemailer = require('nodemailer');

// transporter connects to host domain
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mail@gmail.com', //  your gmail account
        pass: 'appPassword' //  APP PASSWORD, only works when 2FA on your account is enabled.
    }
});

export default transporter;