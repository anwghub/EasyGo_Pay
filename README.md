# EasyGo_Pay
A digital payment wallet web app using mern stack .
A secure and feature-rich **Digital Wallet Web Application** built using the **MERN Stack** that allows users to store funds, make electronic transactions, pay bills, manage wallets, and view dashboards with analytics.

---
### Project Overview

In today’s digital economy, there’s a growing demand for secure, user-friendly, and scalable payment solutions. Many existing platforms fail to deliver a seamless experience with intuitive fund management, real-time transaction tracking, and robust security.

This project aims to address these challenges by developing a comprehensive digital payment wallet using the MERN stack. By integrating a Payment Gateway API (Razorpay), the solution will provide secure and efficient financial transactions. The platform will be adaptable, scalable, and user-centric, ensuring a smooth experience similar to leading wallets like Paytm, with a focus on trust, accessibility, and innovation.


###  Features

####  User Authentication
- Sign Up, Login (JWT based)
- Role-Based Access Control (Admin/User)
- Two-Factor Authentication (Email OTP)
- Password Reset via Email
- Email Verification

#### Wallet Management
- Create/Manage Wallets
- View Wallet Balance
- Transaction History

####  Fund Management
- Add Money (UPI, Bank Transfer, Cards, PayPal)
- Transfer to Others (Phone/Email/Wallet ID)

####  Secure Transactions
- QR Code Payments
- Merchant Payments
- End-to-End Encryption

####  Dashboard & Analytics
- User Dashboard
- Admin Dashboard
- Graphical Reports

####  Bill Payments & Recharge
- Mobile Recharge
- Utility Bills
- Subscriptions

---
### TechStack

#### Frontend
- **ReactJS with Vite**:  
  Vite provides fast bundling and hot module reloading for efficient development, while React's component-based architecture is ideal for building dynamic UIs.
  
- **Tailwind CSS**:  
  A utility-first CSS framework for building clean, responsive, and modern layouts quickly and efficiently. You can integrate Tailwind with React via `postcss` configuration in Vite.

#### Backend
- **Node.js with ExpressJS**:  
  Node.js offers a non-blocking I/O and event-driven architecture, perfect for backend development. ExpressJS simplifies routing and API development for RESTful services.
  
  - Consider using **async/await** for handling asynchronous operations (e.g., database calls, payment processing) to keep your code clean and readable.

#### Database
- **MongoDB**:  
  A NoSQL database for flexible and scalable storage of user and transaction data. Use **Mongoose** for easier querying and validation.
  
  - Ensure proper **indexing** for performance, especially on frequently queried fields like user IDs and transaction IDs.

#### Payment Gateway
- **Razorpay API**:  
  Razorpay enables secure payment processing. Ensure proper handling of **webhooks** for transaction updates and integrate them into both frontend and backend for real-time user feedback.

  - Use **Razorpay's SDK** for seamless integration of payment capture and verification.

#### Authentication and Security
- **JWT (JSON Web Tokens)**:  
  Use JWT for stateless authentication. Store JWT securely in **HTTP-only cookies** to prevent XSS attacks.

  - Consider using **Passport.js** for a more robust authentication strategy.

- **bcrypt**:  
  Hash user passwords securely with bcrypt. Always salt passwords before storing them and compare the hashed value during login.

#### Notifications
- **Push Notifications**:  
  Use services like **Firebase Cloud Messaging (FCM)** or others for real-time notifications about actions like payments or updates.

- **Email Notifications**:  
  **Nodemailer** is ideal for sending transactional emails, such as payment updates or alerts.

#### Testing Tools
- **Postman**:  
  Use Postman for manual API testing and debugging. Ensure your API endpoints are functioning correctly before frontend integration.

#### Version Control
- **Git/GitHub**:  
  Manage your codebase, collaborate with teammates, and maintain code versions on GitHub. It also enables CI/CD for automated testing and deployment.

#### IDE
- **Visual Studio Code**:  
  A great platform for writing code. Enhance your workflow with useful extensions for React, Tailwind, ESLint, Prettier, and more.
---
**Backend/**  
- controllers/  
- db/  
- middleware/  
  - authMiddleware.js  
  - roleMiddleware.js  
- models/  
  - Admin.model.js  
  - Payment.model.js  
  - Transaction.model.js  
  - User.model.js  
  - Wallet.model.js  
- node_modules/  
- routes/  
  - adminRoutes.js  
  - authRoutes.js  
  - paymentRoutes.js  
  - transactionRoutes.js  
  - walletRoutes.js  
- services/  
  - emailServices.js  
  - paymentService.js  
- .env  
- .gitignore  
- package-lock.json  
- package.json  
- server.js  

**Frontend/easygo_pay/**  
- node_modules/  
- public/  
- src/  
- .gitignore  
- eslint.config.js  
- index.html  
- package-lock.json  
- package.json  
- README.md  
- vite.config.js  

**README.md**

---

### 🛠️ Installation & Setup

#### Prerequisites

- Node.js (v16 or above)
- npm or yarn
- MongoDB (local or Atlas)

---

  ```bash
git clone https://github.com/your-username/easygo-pay.git
cd easygo-pay

###  Backend Setup

# Navigate to backend folder
cd Backend

# Install backend dependencies
npm install

Create a .env file inside the Backend/ folder with the following contents:
# Create a .env file and add the following:
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# Start the backend server
node server.js

###  frontend Setup

cd ../Frontend/easygo_pay
npm install

npm run dev

