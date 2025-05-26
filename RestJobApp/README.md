# Job Portal 🏗️🌐

A **Full-Stack Job Application Platform**, combining:
- 🛠️ **Spring Boot REST API (Backend)** – Handles job listings & user management.
- 🎨 **React UI (Frontend)** – Provides a seamless job search & application experience.
- 🛢️ **PostgreSQL Database** – Stores job and user details efficiently.

## 📌 Features
- 📝 **Create, Read, Update, Delete (CRUD)** operations on job applications.
- 🔍 **Search & filter** jobs dynamically.
- 🌍 **Modern UI with React** for a smooth user experience.
- 🚀 **RESTful API integration** with React frontend.
- 📝 **Spring AOP concepts implemented**


## ⚙️ Technologies Used
**Backend**:  
🔹 Spring Boot 3.4.5  
🔹 Spring JPA & Hibernate  
🔹 Spring AOP  
🔹 PostgreSQL

**Frontend**:  
🎨 React  
🎭 Redux (if applicable)  
📦 Axios for API calls

## 🚀 Getting Started

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/GVHemanth1/Projects.git

cd Projects
```
### 2️⃣ Backend Setup (Spring Boot)
#### Update ``application.properties:``

```
spring.datasource.url=jdbc:postgresql://localhost:5432/DemoDB
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

#### Run the application:

### 3️⃣ Frontend Setup (React)

```
cd React UI/JOBPORTAL-1
npm install
npm start
```

## 📡 API Endpoints

| Method | Endpoint       | Description           |
|--------|--------------|-----------------------|
| `GET`  | `/jobs`       | Fetch all job listings |
| `POST` | `/jobs`       | Add a new job listing |
| `PUT`  | `/jobs/{id}`  | Update a job listing  |
| `DELETE` | `/jobs/{id}` | Remove a job          |



## 🎯 Connecting Frontend & Backend

🔹 Ensure the backend is running (http://localhost:8081).

🔹 Update the frontend API URL in JOBPORTAL-1/src/config.js:
```
export const API_URL = "http://localhost:8081";
```
🔹 Run both backend (Spring Boot) and frontend (React) simultaneously.

## 🛠️ Contributing

#### Want to contribute? Feel free to open an issue or submit a pull request.

## 📜 License
#### This project is licensed under MIT License.

## 🚀 Happy Coding! 💻🎉


#### This should now reflect your full-stack setup! Let me know if you want any tweaks. 🚀