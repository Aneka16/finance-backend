Finance Data Processing & Access Control Backend
 Overview

This project is a backend system designed for a finance dashboard, where users can manage financial records and access data based on their roles.

The focus of this project is not just CRUD operations, but also:

implementing role-based access
applying business rules
structuring a clean backend architecture
and working with a real database

Features
🔹 User & Role Management

Users can be created with different roles:

Admin
Analyst
Viewer

Each role has specific permissions, ensuring controlled access to the system.

🔹 Role-Based Access Control

Access is handled using middleware:

Admin → Full access (create, update, delete)
Analyst → Can view records and summaries
Viewer → Limited access

This ensures proper restriction of sensitive operations.

🔹 Financial Records Management

Users can create and manage financial records with:

amount
type (income / expense)
category
date

Filtering is supported based on:

type
category
minimum amount
maximum amount
🔹 Dashboard Summary API

Provides aggregated financial data:

total income
total expenses
net balance

This simulates how real financial dashboards work.

🔹 Insights API

Additional analytics include:

highest expense
top spending category

This adds a layer of meaningful insights beyond basic data storage.

🔹 Business Logic Validation

The system enforces:

amount must be positive
valid type (income / expense)
expense limit (maximum ₹10,000)

These rules reflect real-world constraints.

🔹 Logging Middleware

Each request is logged with a timestamp, which helps in debugging and tracking API usage.
 Design Approach
Followed a modular structure (controllers, routes, middleware)
Separated concerns for better readability and maintenance
Used middleware for authentication and authorization
Focused on writing clean and understandable code
🛠 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
📂 Project Structure
finance-backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── server.js
├── package.json
└── README.md

🔐 Authentication

This project uses mock authentication via request headers for simplicity.

Example:

role: admin

This approach allows testing role-based access without implementing full authentication.

Note: JWT authentication is not implemented but can be added in future enhancements.

📡 API Endpoints
👤 Users
POST /api/users → Create user
GET /api/users → Get active users
PATCH /api/users/:id/deactivate → Deactivate user
💰 Records
POST /api/records → Create record (Admin only)
GET /api/records → Get records (Admin, Analyst)
GET /api/records/summary → Financial summary
💡 Insights
GET /api/insights → Analytics (highest expense, top category)
🧪 Sample Request
Create Record
POST /api/records
Headers:
  role: admin

Body:
{
  "amount": 1000,
  "type": "income",
  "category": "salary"
}
⚠️ Edge Cases Covered
Missing or invalid inputs
Unauthorized access
Invalid roles
Expense limit validation
Incorrect data types

#Highlights
Includes role-based access control
Uses MongoDB for data persistence
Implements real-world business logic
Provides summary and insights APIs
Maintains a clean and scalable structure

#Future Improvements
Add JWT-based authentication
Implement pagination and search
Deploy the backend (Render / Railway)
Enhance analytics features

#Author
Aneka Srivastava

