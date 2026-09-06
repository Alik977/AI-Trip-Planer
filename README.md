# AI Trip Planner

## Ինչպես գործարկել (Backend + Frontend)

Այս պրոյեկտն ունի երկու մաս.
- **Frontend** (React + Vite) — `src/` և `pages/` պանակներում
- **Backend** (Express սերվեր, որը կանչում է Claude API-ն) — `server/index.js`

### 1. Տեղադրիր կախվածությունները

```bash
npm install
```

### 2. Ստեղծիր `.env` ֆայլ

Պատճենիր `.env.example`-ը որպես `.env` և մեջը գրիր քո Anthropic API բանալին
(ստացիր այն այստեղից՝ https://console.anthropic.com/settings/keys):

```bash
cp .env.example .env
```

```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxx...
```

### 3. Գործարկիր և´ frontend-ը, և´ backend-ը մեկ հրամանով

```bash
npm run dev:all
```

Սա կբացի.
- Frontend՝ http://localhost:5173
- Backend՝ http://localhost:3001

(Կարող ես նաև առանձին-առանձին գործարկել՝ `npm run dev` և `npm run server`, երկու տարբեր terminal-ում)

### 4. Փորձարկիր

Բացիր http://localhost:5173/Trip էջը, լրացրու ուղղությունը, օրերի քանակը, բյուջեն, նախասիրությունները, ու սեղմիր **«Generate My Trip ✨»** կոճակը։ Frontend-ը կուղարկի հարցումը backend-ին (`POST /api/plan-trip`), backend-ը կկանչի Claude-ին, և արդյունքում կստանաս օր-առ-օր ճամփորդական պլան։

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
