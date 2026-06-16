# 📒 Notebook App

A simple and modern notebook application built with Node.js that allows users to create, edit, delete, and organize notes efficiently.

## ✨ Features

- Create new notes
- Edit existing notes
- Delete notes
- Save notes securely
- Responsive and user-friendly interface
- Environment-based configuration using `.env`

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS/JavaScript

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/notebook-app.git
cd notebook-app
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the development server

```bash
npm run dev
```

Or run normally:

```bash
npm start
```

## 📁 Project Structure

```text
notebook-app/
├── node_modules/
├── routes/
├── models/
├── controllers/
├── middleware/
├── public/
├── .env
├── .gitignore
├── package.json
└── server.js
```

## 🔒 Environment Variables

The following environment variables are required:

| Variable | Description |
|-----------|------------|
| PORT | Server port |
| MONGODB_URI | MongoDB connection string |
| JWT_SECRET | Secret key for authentication |

## 📝 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /notes | Get all notes |
| POST | /notes | Create a note |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Abhinay Bari

GitHub: https://github.com/Abhinay-Bari
