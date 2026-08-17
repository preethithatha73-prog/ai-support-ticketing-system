# AI-Based Customer Support Ticketing System

Full-stack support platform with AI ticket classification/routing, SLA tracking, agent dashboards, and customer satisfaction analytics.

## Stack
- Frontend: Next.js + TypeScript + Tailwind CSS + Recharts
- Backend: Node.js + Express + MongoDB/Mongoose + JWT
- ML: Python + FastAPI + scikit-learn

## Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB (local or MongoDB Atlas)

## Run

### Backend
```bash
cd backend
npm install
copy .env.example .env
npm run seed
npm run dev
```

### ML service
```bash
cd ml-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python train_model.py
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
copy .env.example .env.local
npm run dev
```

Open http://localhost:3000

Demo passwords: `Password123!`
- admin@example.com
- agent1@example.com
- customer1@example.com

If ML is unavailable, the backend uses a deterministic fallback classification.
