#🤖 Introduction


Build a production-ready Subscription Management System API that handles real users, real money, and real business logic.

Authenticate users using JWTs, connect a database, create models and schemas, and integrate it with ORMs. Structure the architecture of your API to ensure scalability and seamless communication with the frontend.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 50k+ members. It's a place where people help each other out.



#⚙️ Tech Stack


Node.js
Express.js
MongoDB



#🔋 Features


👉 Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.

👉 Database Modeling: Models and relationships using MongoDB & Mongoose.

👉 JWT Authentication: User CRUD operations and subscription management.

👉 Global Error Handling: Input validation and middleware integration.

👉 Logging Mechanisms: For better debugging and monitoring.

👉 Email Reminders: Automating smart email reminders with workflows using Upstash.

and many more, including code architecture and reusability



#Prerequisites


Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)



Cloning the Repository

```
git clone https://github.com/vanshsuri07/subscription-tracker.git
cd subscription-tracker
```

Installation

Install the project dependencies using npm:

```
npm install
```

Set Up Environment Variables


Create a new file named .env.local in the root of your project and add the following content:

```
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

Running the Project

```
npm run dev
````

Open http://localhost:5500 in your browser or any HTTP client to test the project.
