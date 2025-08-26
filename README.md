# Bincom Test Application (Express.js)

This project implements the Bincom Online Interview Test using **Express.js** and **MySQL**.

---

## 🚀 Features
- View results for an individual polling unit.
- View summed totals of all polling units in a selected LGA (via dropdown).
- Add new results for a polling unit (auto-lists all parties).

---

## 📂 Project Structure
```
bincom-test/
│── src/
│   ├── routes/
│   │   ├── pollingUnit.js
│   │   ├── lga.js
│   │   └── results.js
│   ├── views/
│   │   ├── index.ejs
│   │   ├── pollingUnit.ejs
│   │   ├── lga.ejs
│   │   └── addResult.ejs
│   ├── db.js
│   ├── app.js
│── package.json
│── README.md
│── bincom_test.sql
```

---

## 🛠 Setup Instructions

### 1. Import Database
Run in your terminal:
```bash
mysql -u root -p bincom_test < bincom_test.sql
```
*(make sure you create the database `bincom_test` before importing)*

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Server
```bash
npm start
```

### 4. Open in Browser
- Home: [http://localhost:3000](http://localhost:3000)
- Polling Unit Results: [http://localhost:3000/polling-unit](http://localhost:3000/polling-unit)
- LGA Results: [http://localhost:3000/lga](http://localhost:3000/lga)
- Add Results: [http://localhost:3000/results/add](http://localhost:3000/results/add)

---

## ✨ Notes
- Update MySQL credentials in `src/db.js` if needed.
- Works with the provided `bincom_test.sql` schema.
- Built with ❤️ using Express.js, EJS, and MySQL.

