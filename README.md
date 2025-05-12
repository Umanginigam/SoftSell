# 💻 SoftSell — Software License Resale Platform \

SoftSell is a fictional web platform that allows users to **resell unused software licenses** securely. This project includes a **responsive 1-page frontend** and a **Flask backend chatbot** powered by OpenAI GPT to answer user queries.

---

## 🚀 Features Implemented

### ✅ Frontend (Responsive Landing Page)
Built with **HTML + Tailwind CSS**, this 1-page website includes:

1. **Hero Section**
   - **Headline**: "Turn Unused Software Into Instant Cash"
   - **Subheading**: "Sell or Buy software licenses easily and legally with SoftSell."
   - **CTA Button**: “Sell My Licenses”

2. **How It Works**
   - Step 1: 📤 **Upload License**
   - Step 2: 📊 **Get Valuation**
   - Step 3: 💸 **Get Paid**

3. **Why Choose Us**
   - ✅ 100% Legal and Secure Resales
   - 🔍 Verified Licenses Only
   - ⚡ Fast Payouts (within 3–5 business days)
   - 💬 AI Assistant Support (OpenAI GPT integration)

4. **Customer Testimonials**
   - **Anna Gupta**, IT Admin at CloudByte: *“SoftSell helped us recover thousands in unused licenses!”*
   - **Michael Ray**, CFO at BrightApps: *“Fast, simple, and secure resale process. Highly recommend.”*

5. **Contact / Lead Form**
   - Fields: Name, Email, Company, License Type (dropdown), Message
   - **Frontend validation only**

---

### ✅ Backend (Flask + OpenAI Chatbot)

- **Flask API** (`/chat`) handles incoming user queries
- First checks for **hardcoded FAQ-style responses**
- If not found, falls back to **OpenAI GPT-3.5** for intelligent replies
- CORS enabled for frontend on `http://localhost:5173`

---
### Live Preview

https://github.com/user-attachments/assets/73f98cc7-7789-445b-acbd-13f0f8502abd


## 🎨 Design Choices

- **Framework**: Tailwind CSS for fast styling and responsiveness
- **Color Palette**: Soft blue + neutral grays for professional and calming feel
- **Font**: Modern sans-serif (e.g., Inter, Roboto)
- **Layout**: Clean sections with strong spacing and hierarchy
- Icons sourced via [Heroicons](https://heroicons.com/) / Tailwind UI

---

## 🕒 Time Spent

| Task | Time |
|------|------|
| Frontend layout & styling | 4.5 hours |
| Backend API & OpenAI integration | 2 hours |
| Testing & tweaks (mobile) | 1 hour |
| Total | **~7.5 hours** |

---

## 🛠️ How to Run
###  Frontend
Run react:
```bash
npm run dev
```
### 🔧 Backend

1. Clone the repo and install dependencies:
   ```bash
   pip install flask flask-cors openai python-dotenv
2.Set your OpenAI API key:
```bash
   export OPENAI_API_KEY="your-api-key-here"
```
3.Run Flask app:
```bash
python app.py
