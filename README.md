# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system designed for a **finance dashboard**, where users can manage financial records and access data based on their roles.

The focus of this project goes beyond basic CRUD operations. It demonstrates:

* Role-based access control
* Business logic implementation
* Clean backend architecture
* Integration with a real database (MongoDB)

---

## 🚀 Features

### 🔹 User & Role Management

* Create users with roles:

  * **Admin**
  * **Analyst**
  * **Viewer**
* Each role has controlled permissions

---

### 🔹 Role-Based Access Control

Implemented using middleware:

* **Admin** → Full access (create, update, delete)
* **Analyst** → Can view records and summaries
* **Viewer** → Limited access

---

### 🔹 Financial Records Management

Manage financial data with:

* Amount
* Type (income / expense)
* Category
* Date

Supports filtering by:

* Type
* Category
* Minimum amount
* Maximum amount

---

### 🔹 Dashboard Summary API

Provides aggregated data:

* Total income
* Total expenses
* Net balance

---

### 🔹 Insights API

Additional analytics:

* Highest expense
* Top spending category

---

### 🔹 Business Logic Validation

Enforced rules:

* Amount must be positive
* Valid type (income / expense)
* Expense limit ≤ ₹10,000

---

### 🔹 Logging Middleware

* Logs each request with timestamp
* Helps in debugging and monitoring

---

## 🧠 Design Approach

* Modular structure (**controllers, routes, middleware**)
* Clear separation of concerns
* Middleware-based authentication & authorization
* Focus on readability and maintainability

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
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
```

---

## 🔐 Authentication

This project uses **mock authentication via request headers**:

```
role: admin
```

This allows testing role-based access without full authentication.

> ⚠️ JWT authentication is not implemented but can be added in future.

---

## 📡 API Endpoints

### 👤 Users

* `POST /api/users` → Create user
* `GET /api/users` → Get active users
* `PATCH /api/users/:id/deactivate` → Deactivate user

---

### 💰 Records

* `POST /api/records` → Create record (**Admin only**)
* `GET /api/records` → Get records (**Admin, Analyst**)
* `GET /api/records/summary` → Financial summary

---

### 💡 Insights

* `GET /api/insights` → Analytics (highest expense, top category)

---

## 🧪 Sample Request

### Create Record

```
POST /api/records
```

**Headers:**

```
role: admin
```

**Body:**

```json
{
  "amount": 1000,
  "type": "income",
  "category": "salary"
}
```

---

## ⚠️ Edge Cases Covered

* Missing or invalid inputs
* Unauthorized access
* Invalid roles
* Expense limit validation
* Incorrect data types

---

## 🌟 Highlights

* Role-based access control
* MongoDB data persistence
* Real-world business logic
* Summary & insights APIs
* Clean and scalable structure

---

## 🔮 Future Improvements

* Add JWT authentication
* Implement pagination & search
* Deploy backend (Render / Railway)
* Enhance analytics features

---

## 👩‍💻 Author

**Aneka Srivastava**

---

## 📌 Note

This project was developed as part of a backend assignment to demonstrate practical backend development skills, structured thinking, and real-world API design.

