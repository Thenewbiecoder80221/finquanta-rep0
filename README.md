# FinQuanta Risk Intelligence Engine

## Overview

FinQuanta is a real-time behavioral risk intelligence platform designed to analyze user telemetry events, generate trust and risk scores, and recommend actions based on behavioral patterns.

The system processes telemetry data such as keystroke activity and clipboard usage, evaluates user behavior against historical patterns, calculates risk levels, and stores all events in a PostgreSQL database for future analysis.

---

## Features

### Real-Time Telemetry Processing

* Ingests user telemetry events through REST APIs.
* Supports multiple event types such as:

  * KEYSTROKE
  * CLIPBOARD

### Behavioral Profiling

* Maintains user behavioral profiles.
* Tracks average user activity values.
* Calculates deviations from normal behavior.

### Trust Engine

* Generates trust scores based on behavioral consistency.
* Detects suspicious deviations from historical patterns.

### Risk Engine

* Calculates risk scores based on event characteristics.
* Identifies potentially risky user actions.

### Decision Engine

Provides automated recommendations:

* ALLOW
* MANUAL_REVIEW
* ESCROW

### Session Analytics

* Tracks session-level risk metrics.
* Maintains average trust scores per session.

### Explanation Engine

Generates human-readable explanations for elevated risk scores.

### PostgreSQL Persistence

* Stores telemetry events permanently.
* Enables historical analysis and auditing.

### React Dashboard

* Interactive telemetry testing interface.
* Displays risk and trust metrics.
* Shows historical telemetry events.
* Real-time event updates.

---

## System Architecture

```text
React Dashboard
       |
       v
Express API
       |
       v
Telemetry Service
       |
       +-------------------+
       |                   |
       v                   v
Risk Engine         Trust Engine
       |                   |
       +---------+---------+
                 |
                 v
        Decision Engine
                 |
                 v
          Prisma ORM
                 |
                 v
           PostgreSQL
```

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* PostgreSQL

### ORM

* Prisma

### Development Tools

* Git
* GitHub

---

## Project Structure

```text
src
├── controllers
│   ├── telemetryController.ts
│   └── eventController.ts
│
├── routes
│   ├── telemetryRoutes.ts
│   └── eventRoutes.ts
│
├── services
│   ├── telemetryService.ts
│   ├── riskEngine.ts
│   ├── trustEngine.ts
│   ├── decisionEngine.ts
│   ├── behaviorProfileEngine.ts
│   ├── sessionEngine.ts
│   └── explanationEngine.ts
│
├── lib
│   └── prisma.ts
│
├── types
│   ├── Telemetry.ts
│   └── TelemetryEvent.ts
│
├── app.ts
└── server.ts
```

---

## Database Schema

### TelemetryEvent

| Field      | Type     |
| ---------- | -------- |
| id         | Int      |
| sessionId  | String   |
| userId     | String   |
| eventType  | String   |
| value      | Float    |
| trustScore | Int      |
| riskScore  | Int      |
| riskLevel  | String   |
| createdAt  | DateTime |

---

## API Endpoints

### Process Telemetry

```http
POST /telemetry
```

Sample Request:

```json
{
  "sessionId": "session_1",
  "userId": "user_1",
  "eventType": "CLIPBOARD",
  "value": 120,
  "timestamp": 1717459200
}
```

---

### Get Recent Events

```http
GET /events
```

Returns the latest telemetry events stored in PostgreSQL.

---

## Running the Project

### Backend

```bash
npm install
npm run dev
```

Runs on:

```text
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Screenshots

### Dashboard

* Risk Analysis Dashboard
* Trust Score Display
* Risk Score Display
* Historical Event Table

### Database

* Prisma Studio Event Records

---

## Future Enhancements

* JWT Authentication
* Redis Caching Layer
* Docker Deployment
* Role-Based Access Control
* Advanced Behavioral Analytics
* Real-Time Monitoring Dashboard
* Alerting and Notification System
* Fraud Detection Models

---

## Author

Subhajit Bhattacharjee

NIT Agartala

Electronics and Instrumentation Engineering
