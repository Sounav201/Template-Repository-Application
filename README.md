The goal of this software is to make drafting out applications/letters a seamless task with the help of pre-defined templates and a user-friendly interface.

There can be 2 sets of users:

1.  Executors, who can choose from a number of templates made available to them upon logging in and fill in additional details as required. Once done, they can send the final draft for approval.

2.  Approvers, who approve applications

After an application is fully approved, it is ready to be sent out to the customer. The executor can carry out this task from within the software. Upon execution, the customer will receive a copy of the application in pdf format.

# SETUP INSTRUCTIONS

-   Navigate into directory of choice

-   Open Terminal

-   Type in: 

-   git clone <https://github.com/Sounav201/Template-Repository-Application.git>

-   cd Template-Repository-Application  

-   npm i  

-   Start the local development server with npm run dev

-   Open up a browser and navigate to localhost:3000/login

### ENVIRONMENT VARIABLES

Create .env.local file in root directory with following values:

POSTGRES_URL = {PostgreSQL database}

SECRET = {database secret}

SENDGRID_KEY = {API key from sendgrid for sending automated, templatized emails}

SENDER_EMAIL = {email of organisation}

### ADDITIONAL INFORMATION

-   PostgreSQL has been used as the database for this project

-   Sendgrid integration automates the process of sending emails
