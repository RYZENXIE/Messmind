# MessMind — Full-Stack Smart Mess Intelligence

MessMind combines a student attendance + feedback experience with a real FastAPI/SQLAlchemy data layer and a cautious ML prediction engine.

## Included
- Student registration/login
- Meal attendance windows
- Today's menu and feedback
- Admin command center
- Real kitchen records with demo/real separation
- SQLite locally; PostgreSQL via `DATABASE_URL`
- Ridge regression with chronological holdout validation
- Historical same-meal fallback when ML is not ready
- Measured food-waste prediction when enough real data exists
- Model readiness dashboard
- CSV export of real aggregate records
- 7-day demo simulation and prediction lab
- Animated responsive React/Vite UI

## Run
### Frontend demo
```powershell
npm install
npm run dev
```

### Full-stack local server
```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r backend\requirements.txt
Copy-Item backend\.env.example backend\.env
# set MESSMIND_ADMIN_PASSWORD in backend/.env
npm install
npm run build
py -m uvicorn main:app --app-dir backend --reload
```

Open `http://127.0.0.1:8000/`.

Default demo admin credentials in the React UI are `admin@messmind.com` / `admin123`; for real backend records, set `MESSMIND_ADMIN_USERNAME` and `MESSMIND_ADMIN_PASSWORD` in `backend/.env`.

> Demo/synthetic results are not college measurements. Real records should be aggregate totals only; do not store student names, IDs, room numbers, or other personal data in kitchen records.
