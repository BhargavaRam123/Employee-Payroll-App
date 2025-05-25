# Employee Payroll Management App

A responsive web application for managing employee payroll data with modern web technologies. Features a clean, mobile-first UI design with full CRUD operations and data validation.


## ✨ Features

### Core Functionality
- **Employee Management**: Add, edit, delete, and view employee records
- **Payroll Data**: Manage salary, department, and employee details
- **Search & Filter**: Real-time search functionality across employee data
- **Sort Operations**: Sort employees by name, salary, department, or join date
- **Data Persistence**: JSON Server for backend data storage

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling, animations, and responsive design
- **JavaScript (ES9+)** - Core application logic with modern syntax

### Backend & Data
- **JSON Server** - Mock REST API for data operations

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system
- JSON Server package

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-payroll-app
   ```

2. **Install JSON Server**
   ```bash
   npm install -g json-server
   ```

3. **Start JSON Server**
   ```bash
   json-server --watch data/db.json --port 3000
   ```

4. **Open the application**
   - Open `index.html` in your browser
   - Or serve through a local server for best results



## ✅ Validation Rules

### Employee Data Validation
- **Name**: Required, alphabetic characters only
- **Email**: Valid email format using RegEx
- **Phone**: 10-digit number format
- **Salary**: Numeric values with proper range
- **Department**: Required selection from predefined list
- **Join Date**: Valid date format, not future date



## 🔍 Key Features

### Search Functionality
- Real-time search across all employee fields


### Sort Operations
- Sort by Salary (Low to High, High to Low)


## 📊 API Endpoints

JSON Server provides the following endpoints:

```
GET    /employees      # Get all employees
GET    /employees/:id  # Get employee by ID
POST   /employees      # Create new employee
PUT    /employees/:id  # Update employee
DELETE /employees/:id  # Delete employee
```

