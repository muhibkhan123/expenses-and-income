# Offline Income & Expense Manager

A powerful, single-file, offline-first web application for managing your personal finances. Track your income and expenses with ease, visualize your spending habits, and keep your data private and secure on your own device.

## ✨ Features

*  **100% Offline:** Works entirely in your browser without needing an internet connection.
*  **Data Privacy:** All data is stored locally in your browser's IndexedDB. Nothing is ever sent to a server.
*  **Income & Expense Tracking:** Easily add, edit, and delete both income and expense transactions.
*  **Multi-User Support:** Simple user registration and login system to keep finances separate for different users.
*  **Interactive Dashboard:**
    *  At-a-glance summary cards for the current month's total income, total expenses, and net balance.
    *  A pie chart that visualizes the breakdown of your expenses by category.
*  **Currency Conversion:**
    *  Select your preferred currency (PKR, USD, INR, EUR, GBP).
    *  All financial data automatically converts and displays in the selected currency.
    *  *Note:** All data is stored in PKR as the base currency.
*  **Powerful Data Tools:**
    *  **Filter:** Filter transactions by month, year, or category.
    *  **Find & Replace:** Quickly update categories or notes across multiple transactions.
    *  **Clear Monthly Data:** A tool to clear all of the current month's transactions after backing them up.
*  **Data Portability:**
    *  **Export to PDF:** Generate a clean, printable PDF report of your filtered transactions.
    *  **Export/Import JSON:** Create backups of your data or move it between devices using JSON files.

## 🚀 How to Use

1.  **Save the File:** Download the `income-expense-manager.html` file to your computer.
2.  **Open in Browser:** Open the file in a modern web browser (like Chrome, Firefox, or Edge).
3.  **Register a User:** The first time you use the app, you will need to register a new username and password.
4.  **Log In:** Use your credentials to log in. The app will remember you in the current session.
5.  **Start Tracking:** Use the form to add your income and expenses. Your dashboard will update in real-time.

## 🛠️ Technical Details

*  **Frontend:** Plain HTML, CSS, and JavaScript. No frameworks needed.
*  **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for modern and responsive styling.
*  **Database:** [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is used for robust, structured offline storage.
*  **Charts:** [Chart.js](https://www.chartjs.org/) is used for creating the interactive pie chart.
*  **PDF Export:** [jsPDF](https://github.com/parallax/jsPDF) and `jsPDF-AutoTable` are used to generate PDF reports.

## 🤝 Contributing

This is a self-contained, single-file project. To contribute, simply edit the `income-expense-manager.html` file and open it in your browser to see the changes.

---
*This README was generated on July 22, 2025.*
