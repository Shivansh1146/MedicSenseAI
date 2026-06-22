# 🏥 MedicSense AI — AI-Enabled Healthcare Assistant

> **Hackathon Project · June 2026**
>
> An intelligent, real-time health companion powered by **Google Gemini 2.0 Flash**. Built for speed, accessibility, and clinical accuracy — it triages symptoms, detects emergencies, books appointments, and guides users toward the right level of care.

It is built as a modern **split-stack application** utilizing a Flask backend and a static HTML/JS frontend designed with a premium, glassmorphic UI.

* **Live Frontend:** [https://medicsenseai.netlify.app](https://medicsenseai.netlify.app)
* **Live Backend API:** [https://medicsense-ai.onrender.com](https://medicsense-ai.onrender.com)
* **GitHub Branch (Latest Fixes):** [`main`](https://github.com/Shivansh1146/MedicSenseAI/tree/main)

---

## 🚀 Key Features

### 🧠 Core Medical AI & Triage
* **AI Medical Chatbot** — Conversational symptom analysis powered by Google Gemini (`gemini-2.0-flash`). Context-aware, multi-turn health conversations with triage-level recommendations.
* **AI Symptom Checker** — Dedicated form with severity slider (0–10), duration selector, and structured analysis.  
  - Severity starts at **0** — users must actively select a rating before submitting.
  - Submit is disabled until all fields (symptoms, duration, severity ≥ 1) are filled.
* **Emergency Protocol** — Real-time emergency keyword detection with instant first-aid directions and local emergency contacts.
* **4-Level Severity Classification** — Auto-classifies responses from Mild (self-care) → Moderate → Serious → Critical (call emergency services).
* **Injury Image Analysis** — Camera scanner integrated with Gemini Vision to analyze uploaded photos of injuries or rashes.

### 📅 Booking & Health History
* **Interactive Appointments** — Book slots with local specialists matched to symptom type; SQLite double-booking prevention is enforced at database level.
* **Family Doctor System** — Save a designated family doctor and start quick consultations.
* **Health Timeline** — Unified history view showing all symptom checks, AI chats, scanner uploads, and booking activity.
* **Empty State Handling** — Graceful "No data" UI states for new users in the Health Timeline, mirroring the Notifications design.
* **Notifications System** — Appointment reminders and health alert notifications via the notification page.

### 🔐 Auth & Security
* **Firebase Authentication** — Google Sign-In and Email/Password authentication flows.
* **Backend User Sync** — User records synced to SQLite on first sign-in.
* **OTP Verification** — OTP email service for secure account actions.
* **Security Headers & CORS** — `X-Frame-Options`, Content Security Policy, and CORS pre-configured for production.
* **PWA Support** — Service Worker with offline caching (`sw.js`); `manifest.json` for installability.

### 🎨 UI & Design
* **Premium Glassmorphic Design** — Dark mode by default; smooth light/dark toggle that adapts every element.
* **Fully Responsive** — Mobile-first layout; Emergency button collapses to icon-only on phones (< 480px).
* **Live Ticking Clock** — Real-time `Sun 08:07 pm` clock in the navbar across all pages.
* **Micro-Animations** — AOS scroll animations, hover transitions, pulsing heartbeat logo icon.

---

## 📁 Project Structure

```text
medisence-ai/
├── backend/                        # Python Flask Web Service
│   ├── app.py                      # Core application entry point & API routes
│   ├── gemini_service.py           # Google Gemini AI integration (chat, triage, vision)
│   ├── auth_routes.py              # Firebase-backed authentication routes
│   ├── unified_auth.py             # Unified auth manager (Google + email/password)
│   ├── chat_service.py             # Chatbot session and context manager
│   ├── emergency_detector.py       # Emergency keyword detection engine
│   ├── emergency_guard.py          # Guard layer for emergency escalation
│   ├── emergency_service.py        # Emergency response service
│   ├── severity_classifier.py      # 4-level clinical severity classifier
│   ├── symptom_analyzer.py         # Symptom pre-processing utilities
│   ├── camera_analyzer.py          # Gemini Vision image analysis handler
│   ├── injury_tracker.py           # Injury progress tracking
│   ├── notifications_service.py    # Notification trigger and delivery service
│   ├── otp_service.py              # Email OTP generation & verification
│   ├── database.py                 # SQLite connection manager
│   ├── init_db.py                  # Database schema initializer & migrator
│   ├── requirements.txt            # Production pinned Python dependencies
│   ├── static/                     # Fallback static assets for backend serving
│   └── templates/                  # Fallback HTML templates
│
├── frontend/                       # Client-Side Static Files (Netlify)
│   ├── index.html                  # Main app — chatbot, symptom checker, appointments
│   ├── script_ultra.js             # Core frontend logic & Gemini API calls (~140KB)
│   ├── style_ultra.css             # Primary design system with dark/light theme (~117KB)
│   ├── premium_enhancements.css    # Additional UI polish, dark mode fixes, placeholder contrast
│   ├── ai_chat_refined.css         # Chat interface specific styles
│   ├── layout_rebalance.css        # Navbar and layout balance corrections
│   ├── micro_interactions.css      # Hover animations and micro-interactions
│   ├── flow_optimization.css       # Form and flow UX optimizations
│   ├── visual_confidence.css       # Visual hierarchy and typography confidence fixes
│   ├── vertical_compaction.css     # Vertical space compaction utilities
│   ├── ultra_compact.css           # Ultra-compact layout mode
│   ├── inline_slots.css            # Inline component slot styles
│   ├── camera_styles.css           # Camera scanner styles
│   ├── advanced_features.js        # Advanced UI features (scanner, notifications)
│   ├── camera_scanner.js           # Camera capture and Gemini Vision uploader
│   ├── auth_firebase.js            # Firebase authentication client logic
│   ├── firebase.js                 # Firebase SDK initialization
│   ├── profile_menu.js             # Profile dropdown menu logic
│   ├── premium_ui_enhancements.js  # Premium UI enhancement effects
│   ├── whatsapp_service.js         # WhatsApp sharing integration
│   ├── live-clock.js               # Live ticking clock injected into all pages
│   ├── config.js                   # Environment-agnostic endpoint configuration
│   ├── env-loader.js               # Auto-detects local vs production API URL
│   ├── load-env.js                 # Environment variable loader
│   ├── sw.js                       # Service Worker (PWA offline caching, cache v29)
│   ├── manifest.json               # PWA manifest for installability
│   ├── history.html                # Health timeline page
│   ├── appointments.html           # Appointments management page
│   ├── notifications.html          # Notifications centre
│   ├── profile.html                # User profile page
│   ├── auth.html                   # Firebase authentication UI
│   ├── about.html                  # About page
│   ├── faq.html                    # FAQ page
│   ├── how-it-works.html           # How It Works explainer
│   ├── privacy.html                # Privacy policy
│   └── terms.html                  # Terms of service
│
├── netlify.toml                    # SPA routing redirects & security headers
├── render.yaml                     # Backend IaC deployment config for Render
└── README.md                       # This documentation
```

---

## 🛠 Recent Fixes & UI Improvements (June 2026)

| Fix | Description |
| :--- | :--- |
| **Soft Gate Authentication** | Implemented a 'Soft Gate' strategy: users can browse the landing page, but trying to chat, analyze symptoms, book appointments, or view private pages automatically pops the Firebase Auth modal. |
| **Image Upload Auth Guard** | Added an explicit authentication intercept to the AI Chat image uploader to ensure file uploads are strictly protected. |
| **Appointment Type Badges** | Added high-contrast, premium styling badges for 'In-Person' (Vibrant Cyan) and 'Video Call' (Indigo) across all appointment cards and health timeline events |
| **Status Badge Contrast** | Fixed critical light mode contrast issues by mapping badge colors to dynamic CSS variables instead of hardcoded overrides |
| **Dashboard Layout Cleanup** | Removed the redundant 'Recent Appointments' sidebar from the main dashboard and dynamically centered the booking form with a clean max-width |
| **Health Timeline lag fix** | Rewrote timeline loading to render local events instantly (0ms delay), syncing backend data seamlessly in the background |
| **Cancel Button fix** | Fixed un-clickable Cancel buttons on Recent Appointments by replacing event delegation with guaranteed inline `onclick` handlers |
| **Dummy data seeding removed** | Removed the hardcoded `demo_seed_001` dummy appointment that auto-populated into local storage when the dashboard was empty |
| **Backend DB wiped & reset** | Cleaned and reset all SQLite and JSON backend databases to provide a 100% fresh state for production |
| **Severity slider starts at 0** | Slider now defaults to `0/10` — users must actively drag to select 1–10 before submission |
| **Dark mode icon-btn squares** | Removed visible white/light-grey square box from navbar buttons in dark mode; buttons now transparent with subtle purple glow on hover |
| **Dark mode logo purple** | `AI` portion of the MedicSense **AI** logo now correctly shows purple (`--primary-400`) in dark mode |
| **Chat footer contrast** | `Powered by Google Gemini` footer text was invisible in light mode (white-on-white) — fixed to use `var(--text-muted)` |
| **Placeholder contrast** | Chat input and symptom textarea placeholders were near-invisible in light mode — fixed with high-contrast dark charcoal (`#111827`) and vendor prefixes |
| **Dark mode severity slider** | Slider two-tone fill (`--range-fill`) via CSS custom property now works in both WebKit and Firefox, light and dark |
| **Square container artifacts** | Removed border/background boxes from AI avatar, chat bubble, and logo icon that appeared as dark mode artifacts |
| **Emergency button clip** | Fixed double padding on `.nav-content` that was clipping the Emergency button at the navbar edge |
| **Live clock format** | Compact `Sun 08:07 pm` format; clock integrated into the user-controls pill, not floating separately |
| **Mobile Emergency button** | Emergency button text hides on `< 480px` — icon only for compact mobile nav |
| **Render API fallback** | All `localhost` fallbacks replaced with production Render URL in `script_ultra.js` |
| **Service Worker cache** | Bumped to `v36` to force browsers to load the latest JS & DOM fixes |

---

## 💻 Local Development & Setup

### Prerequisites
* Python 3.11 (Recommended)
* A Google Gemini API Key — get a free one from [Google AI Studio](https://aistudio.google.com/)
* A Firebase project for authentication (free tier)

### 1. Clone the Repository
```bash
git clone https://github.com/Shivansh1146/MedicSenseAI.git
cd MedicSenseAI
```

### 2. Configure & Run the Backend
```bash
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Create your environment file
# (copy .env.example and fill in your keys)
cp .env.example .env
```

Edit `backend/.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the server:
```bash
python app.py
```
> The server initialises the SQLite database automatically and starts at **`http://localhost:5000`**.

### 3. Open the Frontend
Open `frontend/index.html` in your browser (or use VS Code Live Server).

The `env-loader.js` auto-detects you're on `localhost` and routes all API calls to `http://localhost:5000/api` automatically — no configuration needed.

---

## ☁️ Production Deployment

### Backend (Render)
1. Import your repository into **[Render Dashboard](https://dashboard.render.com)**.
2. Render auto-detects `render.yaml`:
   - **Runtime:** Python 3.11
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120`
3. Add your secret key in **Environment Settings**:
   - `GEMINI_API_KEY` = `your_gemini_key`
4. Your API base will be: `https://medicsense-ai.onrender.com/api`

### Frontend (Netlify)
1. Connect your GitHub repo at **[Netlify](https://app.netlify.com)** (or drag-drop the `frontend/` folder).
2. `netlify.toml` handles SPA routing (all paths → `index.html`) and security headers.
3. Your live URL: `https://medicsenseai.netlify.app`

### Firebase Console Setup
1. Go to your **[Firebase Console](https://console.firebase.google.com)**.
2. **Authentication** → **Settings** → **Authorized domains**.
3. Add: `medicsenseai.netlify.app`

---

## 🎯 Triage Urgency Guide

| Level | Priority | Description | Recommended Action |
| :---: | :--- | :--- | :--- |
| **1** | 🟢 Mild | Everyday symptoms (slight cough, minor cold) | Self-care, monitor at home |
| **2** | 🟡 Moderate | Mild discomfort (low fever, light allergy) | Consult your family doctor |
| **3** | 🟠 Serious | Distressing pain (sharp abdominal pain, high fever) | Book a specialist consultation |
| **4** | 🔴 Critical | Severe distress (chest pain, choking, loss of consciousness) | Call emergency services immediately |

---

## 🧩 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **AI / LLM** | Google Gemini 2.0 Flash (`gemini-2.0-flash`) |
| **Backend** | Python 3.11, Flask, Gunicorn |
| **Database** | SQLite (via `database.py` + `init_db.py`) |
| **Auth** | Firebase Authentication (Google OAuth + Email/Password) |
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Design** | Glassmorphic UI, CSS Variables (light/dark theme), AOS, Animate.css |
| **PWA** | Service Worker (`sw.js`), Web App Manifest |
| **Frontend Host** | Netlify (static, CDN-distributed) |
| **Backend Host** | Render (Python web service) |
| **Notifications** | Custom notification service + email OTP |

---

## ⚠️ Disclaimer

**MedicSense AI is an educational demonstration project and must not be used as a substitute for professional clinical advice.**

Always seek guidance from qualified healthcare practitioners for any health concerns. In life-threatening emergencies, immediately contact your local emergency service (e.g., **112** / **102** / **911**).

---

Made with ❤️ by [Shivansh](https://github.com/Shivansh1146)
