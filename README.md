# 🚀 OpsDesk – Operations Dashboard for Service-Based Businesses

**Live Site:** [https://ops-ryp3.vercel.app/](https://ops-ryp3.vercel.app/)  
**Built by:** [Raj](https://github.com/ayooshraj) – Servicepreneur, Video Editing & SEO Agency Owner

---

## 🧠 Overview

**OpsDesk** is a full-stack operations management tool designed for freelancers, agency owners, and servicepreneurs to manage clients, feedback, invoices, and projects all in one place.

Built with a modern tech stack and designed to solve real-world agency operations problems, this project mimics the architecture and logic of a traditional **MERN stack** using faster, modern tools like **Supabase** and **Vite**.

---

## 📸 Demo Screenshot

<img width="1830" height="909" alt="image" src="https://github.com/user-attachments/assets/48616e59-60fa-4698-bdba-75ca369c53ab" />
<img width="1670" height="867" alt="image" src="https://github.com/user-attachments/assets/c2348def-c028-4c22-9f2f-dc96b29b7659" />
<img width="1723" height="899" alt="image" src="https://github.com/user-attachments/assets/495d9018-f99e-4e80-8b44-6083a3fa7078" />
<img width="1886" height="909" alt="image" src="https://github.com/user-attachments/assets/582df52f-1228-4a54-aa2c-582276a38efd" />


---

## 🛠️ Tech Stack

| Layer      | Technology                                      |
|------------|--------------------------------------------------|
| Frontend   | React + Vite + TypeScript + Tailwind CSS         |
| Backend    | Supabase (Auth, Realtime DB, REST API)           |
| Database   | PostgreSQL (via Supabase)                        |
| Auth       | Supabase Auth (JWT-based)                        |
| Hosting    | Vercel (Frontend)                                |
| Repo Mgmt  | GitHub                                           |

---

## 🎯 Features

- ✅ **JWT-based User Authentication**
- 🧑‍💼 **Client Management (Add, View, Delete)**
- 📁 **Project Tracking linked to Clients**
- 💬 **Structured Feedback Logging**
- 💰 **Invoice Creation & Payment Status**
- 🧠 **Dashboard Summary View**
- ⚡ **Supabase-powered REST API Integration**
- 🎨 **Modern UI using Tailwind CSS**

---

## 🔄 Folder Structure

```

/ops
├── /public
├── /src
│   ├── /components        → Reusable UI components
│   ├── /pages             → Page-level components (Client, Invoice, etc.)
│   ├── /services          → Supabase interaction logic
│   ├── /types             → TypeScript interfaces
│   └── App.tsx            → Root app structure
├── index.html
└── vite.config.ts

````

---

## 💡 What Makes This a Full-Stack (MERN-alternative) App?

While this project uses Supabase instead of traditional Express + MongoDB, it follows the same MERN principles:

- **React** as frontend view layer
- **Supabase** handles backend logic & API (like Express)
- **PostgreSQL** replaces MongoDB with structured schema
- **JWT Auth** via Supabase Auth (just like custom-auth in MERN)
- **Full CRUD flow** from frontend → API → DB → UI update

> ✅ This project demonstrates real-world backend/frontend logic integration, perfect for resume, exams, and client work.

---

## 🧪 How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/ayooshraj/ops.git
cd ops
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_public_anon_key
```

### 4. Run the App

```bash
npm run dev
```

---

## 📦 Deployment

* **Frontend** deployed via [Vercel](https://vercel.com/)
* Backend/API and database powered by [Supabase](https://supabase.io/)

Live URL: 👉 [https://ops-ryp3.vercel.app/](https://ops-ryp3.vercel.app/)

---

## 📘 Learning Outcomes

* Building production-grade UI using **Tailwind CSS + TypeScript**
* Using **Supabase** as a scalable backend-as-a-service (BaaS)
* Understanding full CRUD workflows with auth protection
* Mimicking MERN-stack logic using a modern JAMstack approach

---

## 📇 Contact

👤 **Ayoosh Raj**
📫 [GitHub](https://github.com/ayooshraj) | [LinkedIn](https://linkedin.com/in/rajayoosh)

---

## ⭐️ If you found this project useful or inspiring...

Please consider starring ⭐ the repo on [GitHub](https://github.com/ayooshraj/ops) — it helps more people discover it!
