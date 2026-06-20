# MedicSense AI - Complete Healthcare Assistant 🏥

MedicSense AI is a comprehensive, production-ready AI-powered medical platform featuring natural language symptom analysis, emergency detection, severity triage, appointment scheduling, and health record management. 

It is built as a modern **split-stack application** utilizing a Flask backend and a static HTML/JS frontend designed with a premium, glassmorphic UI.

* **Live Frontend:** [https://medicsenseai.netlify.app](https://medicsenseai.netlify.app)
* **Live Backend API:** [https://medicsense-ai.onrender.com](https://medicsense-ai.onrender.com)

---

## 🚀 Key Features

### 🧠 Core Medical AI & Triage
* **AI Medical Chatbot:** Conversational symptom analysis integrated with Google Gemini (`gemini-2.0-flash`).
* **Emergency Protocol:** Real-time emergency keyword detection offering instant first-aid directions and immediate emergency contacts.
* **4-Level Severity Classification:** Automated classification from Mild (self-care) to Critical (call emergency number).
* **Injury Image Analysis:** Camera scanner integration utilizing Gemini's vision capability to analyze uploaded images of injuries or rashes.

### 📅 Booking & History
* **Interactive Appointments:** Book slots with local specialists based on symptom matching (fully backed by SQLite constraints to prevent double-booking).
* **Family Doctor System:** Save details and quickly chat/consult with a designated family physician.
* **Health Timeline:** A unified timeline showing historical symptoms, chatbot consults, scanner uploads, and booking history.

### 🔒 Enterprise Auth & Security
* **Firebase Authentication:** Seamless integration supporting **Google Sign-In** and **Email/Password** logins.
* **Backend Syncing:** Secure registration and tracking of users within a local SQLite database on successful sign-in.
* **Security Headers & CORS:** Pre-configured secure headers (X-Frame-Options, CSP) and CORS configuration.

---

## 📁 Project Structure

```text
medisence-ai/
├── backend/                    # Python Flask Web Service
│   ├── blueprints/            # Blueprint-based route splitting
│   ├── services/              # Core business and email/sms services
│   ├── static/                # Fallback static assets
│   ├── templates/             # Fallback HTML render files
│   ├── app.py                 # Core application entry point
│   ├── init_db.py             # SQLite database initializer and migration schema
│   ├── gemini_service.py      # Google Gemini integration handler
│   ├── requirements.txt       # Production pinned Python dependencies
│   └── database.py            # SQLite database connector manager
│
├── frontend/                   # Client-Side Static Files (Netlify)
│   ├── config.js              # Environment-agnostic endpoint config
│   ├── env-loader.js          # Auto-detects local vs production API URL
│   ├── live-clock.js          # Live ticking clock injected into navbar on all pages
│   ├── index.html             # Premium glassmorphic home interface
│   ├── script_ultra.js        # Core frontend logic & API fetching (Render backend)
│   ├── auth.html              # Firebase authentication layout
│   ├── auth_firebase.js       # Firebase authentication client logic
│   ├── sw.js                  # Service Worker (PWA, cache v21)
│   └── style_ultra.css        # Premium dark-themed visual style sheet
│
├── netlify.toml                # Frontend static SPA routing and CSP rules
├── render.yaml                 # Backend Infrastructure-as-Code service deployment
└── README.md                   # This documentation
```

---

## 🔧 Recent Fixes & Polish (June 2026)

| Fix | Description |
| :--- | :--- |
| **Navbar overflow** | Removed double padding from `.nav-content` — EMERGENCY button now always fully visible |
| **Live clock** | Compact `Sat 12:05 PM` format — no longer takes too much navbar space |
| **Clock position** | Clock is injected inside the `user-controls` pill (not floating separately) |
| **Mobile Emergency** | Emergency button text hidden on `< 480px` phones — icon-only for compact mobile nav |
| **API URL hardening** | All `localhost:5000` fallbacks replaced with production Render backend URL |
| **Service Worker** | Cache bumped to v21 to force browsers to load the latest UI changes |

---

## 🛠️ Local Development & Setup

### Prerequisites
* Python 3.11 (Recommended)
* Node / npm (Optional, for running local static servers)
* A Google Gemini API Key (Get a free one from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository
```bash
git clone https://github.com/Shivansh1146/MedicSense-AI.git
cd MedicSense-AI
```

### 2. Configure the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install Python requirements:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Start the server:
   ```bash
   python app.py
   ```
   *The server will initialize the SQLite database automatically and start listening at `http://localhost:5000`.*

### 3. Open the Frontend
Since the frontend uses environment-agnostic configuration:
* Simply open `frontend/index.html` in your browser (or use VS Code's Live Server extension).
* It will automatically detect it is running on `localhost` and direct all API queries to your local server at `http://localhost:5000/api`.

---

## 🚀 Production Deployment

This project is set up for continuous integration using Git.

### 1. Backend (Render)
1. Import the repository into your **[Render Dashboard](https://dashboard.render.com)**.
2. Render will automatically detect the **`render.yaml`** configuration:
   * **Runtime:** Python 3.11
   * **Build Command:** `pip install -r requirements.txt`
   * **Start Command:** `gunicorn app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120`
3. Under your service **Environment Settings**, add your secret:
   * Key: `GEMINI_API_KEY`
   * Value: `your_gemini_key`
4. Deploy. Your API base path will be: `https://medicsense-ai.onrender.com/api`.

### 2. Frontend (Netlify)
1. Go to **[Netlify](https://app.netlify.com)** and connect your GitHub repository or drag-and-drop the `frontend/` folder.
2. **Netlify Config:** The `netlify.toml` in the project root handles all Single Page Application (SPA) routing redirects to `index.html` and sets security policy headers.
3. Deploy. Your website URL will be: `https://medicsenseai.netlify.app`.

### 3. Firebase Console Whitelisting
To allow Google Sign-In and user authentication from your deployed website:
1. Go to your **[Firebase Console](https://console.firebase.google.com)**.
2. Navigate to **Authentication** ➔ **Settings** ➔ **Authorized domains**.
3. Add your production domain: `medicsenseai.netlify.app`.

---

## 🏥 Triage Urgency Guide

| Level | Priority | Description | Action Recommendation |
| :--- | :--- | :--- | :--- |
| **1** | Mild | Everyday symptoms (e.g. slight cough, cold) | Self-care, monitor symptoms. |
| **2** | Moderate | Mild discomfort (e.g. low fever, light allergy) | Consult your local family doctor. |
| **3** | Serious | Distressing pain (e.g. sharp abdominal pain, high fever) | Book specialist consultation. |
| **4** | Critical | Severe distress (e.g. chest tightness, choking) | Call local emergency service immediately. |

---

## ⚠️ Disclaimer
**MedicSense AI is an educational demonstration tool and should not be used as a replacement for professional clinical advice.**
Always seek prompt guidance from qualified healthcare practitioners for clinical concerns. In life-threatening emergencies, immediately contact your local emergency service (e.g., 911 / 102).

---
Made with ❤️ by [Shivansh](https://github.com/Shivansh1146)
