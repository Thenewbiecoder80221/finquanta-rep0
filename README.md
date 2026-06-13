# FinQuanta Risk Intelligence Engine

## Overview

FinQuanta is a real-time behavioral trust and transaction risk engine designed to evaluate user telemetry during active financial sessions.

The platform ingests behavioral events, maintains evolving behavioral profiles, continuously calculates trust and risk scores, generates explainable risk decisions, and persists telemetry data using PostgreSQL and Prisma ORM.

Unlike traditional fraud detection systems that rely on static rules or post-transaction analysis, FinQuanta continuously evaluates behavioral trust throughout an active user session.

---

# Key Features

## Real-Time Telemetry Ingestion

The system processes high-frequency telemetry signals including:

* Keystroke activity
* Typing velocity
* Clipboard activity
* Session events
* User interaction metrics

Features:

* Event normalization
* Timestamp handling
* Session correlation
* Continuous processing

---

## Behavioral Profile Engine

The Behavioral Profile Engine maintains evolving user baselines and tracks behavioral drift over time.

Capabilities:

* User profile evolution
* Behavioral deviation calculation
* Historical baseline comparison
* Trust score generation

Examples:

* Fatigue-induced slowdown
* Abnormal interaction acceleration
* Sudden behavioral fragmentation

---

## Continuous Risk Scoring

The system continuously evaluates risk throughout the session.

Risk signals include:

* Behavioral deviation
* Clipboard activity
* Trust degradation
* Session inconsistency
* Contextual anomalies

Outputs:

* Risk Score
* Risk Level
* Recommended Action

---

## Explainable Decision Engine

Every risk decision includes explanations describing why risk increased.

Example:

```json
{
  "riskScore": 40,
  "riskLevel": "MEDIUM",
  "reasons": [
    "High clipboard activity detected"
  ],
  "recommendedAction": "MANUAL_REVIEW"
}
```

---

## PostgreSQL Persistence

Telemetry events are stored in PostgreSQL using Prisma ORM.

Benefits:

* Historical analysis
* Session auditing
* Future model training
* Event replay capability

---

## Historical Monitoring Dashboard

The React dashboard provides:

* Telemetry submission interface
* Trust score visualization
* Risk score visualization
* Risk level display
* Historical event table

---

# System Architecture

```text
React Dashboard
       |
       v
Express API
       |
       v
Telemetry Controller
       |
       v
Telemetry Service
       |
       +-----------------------+
       |                       |
       v                       v
Behavior Profile Engine   Risk Engine
       |                       |
       +-----------+-----------+
                   |
                   v
            Trust Engine
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

# Technology Stack

## Frontend

* React
* TypeScript
* Vite

## Backend

* Node.js
* Express
* TypeScript

## Database

* PostgreSQL

## ORM

* Prisma ORM

## Version Control

* Git
* GitHub

---

# Project Structure

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
│   ├── behaviorProfileEngine.ts
│   ├── trustEngine.ts
│   ├── riskEngine.ts
│   ├── decisionEngine.ts
│   ├── explanationEngine.ts
│   └── sessionEngine.ts
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

# Telemetry Schema

```json
{
  "sessionId": "session_001",
  "userId": "user_001",
  "eventType": "CLIPBOARD",
  "value": 120,
  "timestamp": 1717459200
}
```

Fields:

| Field     | Description        |
| --------- | ------------------ |
| sessionId | Session identifier |
| userId    | User identifier    |
| eventType | Event category     |
| value     | Event metric value |
| timestamp | Event timestamp    |

---

# Transaction Intent Correlation

A key objective of FinQuanta is evaluating whether a user's behavioral state matches transaction intent.

### Transaction Signals

* Transaction amount
* Beneficiary account
* Transfer frequency
* Transaction type
* Historical transaction behavior

### Behavioral Signals

* Typing velocity
* Clipboard activity
* Session consistency
* Behavioral deviation
* Trust score

### Example

A user historically performs small transfers slowly.

Suddenly:

* High-value transfer initiated
* Clipboard activity spikes
* Behavioral deviation increases
* Trust score drops

The engine interprets this mismatch as elevated risk and increases the risk score.

### Future Enhancement

Future versions will introduce a dedicated Transaction Intent Engine capable of correlating transaction metadata with real-time behavioral telemetry.

---

# Adversarial Attack Simulations

## Scenario 1: Remote Access Scam

### Attack Behavior

An attacker gains remote access to a victim's device and initiates a transaction.

Observed Indicators:

* High clipboard activity
* Rapid transaction execution
* Sudden behavioral deviation
* Reduced trust score

### Detection Logic

The Behavioral Profile Engine identifies significant deviation from the user's baseline.

The Risk Engine increases risk due to:

* Clipboard-assisted behavior
* Elevated deviation score
* Session inconsistency

### Result

Recommended Action:

* MANUAL_REVIEW
* ESCROW

---

## Scenario 2: Scripted Interaction Replay

### Attack Behavior

An attacker attempts to automate or replay user interactions.

Observed Indicators:

* Repetitive interaction timing
* Predictable event intervals
* Low behavioral entropy
* Consistent interaction patterns

### Detection Logic

The engine identifies:

* Unnaturally uniform behavior
* Reduced randomness
* Behavioral fragmentation

### Result

Risk increases significantly and the transaction is flagged for review.

---

# Anti-Evasion Considerations

## Behavior Replay

Attackers may replay previously recorded interactions.

Mitigations:

* Session-level trust tracking
* Behavioral drift analysis
* Historical baseline comparison

---

## AI-Assisted Humanization

Attackers may use AI-generated interactions to mimic legitimate users.

Mitigations:

* Multi-signal correlation
* Longitudinal trust evaluation
* Continuous risk recalculation

---

## Telemetry Poisoning

Attackers may intentionally generate misleading telemetry.

Mitigations:

* Weighted trust calculations
* Historical comparison
* Session consistency checks

---

## Randomized Automation

Attackers may introduce randomness to bypass rule-based detection.

Mitigations:

* Entropy analysis
* Multi-factor scoring
* Continuous behavioral evaluation

---

# Scalability & Reliability Notes

## Horizontal Scaling

The API layer can be scaled horizontally using multiple stateless instances behind a load balancer.

## Session State Distribution

Future versions can use Redis for distributed session-state management.

## Event Processing

Future versions may introduce Kafka or streaming architectures for high-frequency telemetry ingestion.

## Storage Strategy

PostgreSQL provides durable persistence for telemetry events and risk decisions.

## Fault Tolerance

* Stateless API design
* Persistent database storage
* Recoverable telemetry history
* Modular service architecture

---

# Database Schema

## TelemetryEvent

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

# API Documentation

## Process Telemetry

### Endpoint

```http
POST /telemetry
```

### Request

```json
{
  "sessionId": "session_001",
  "userId": "user_001",
  "eventType": "CLIPBOARD",
  "value": 120,
  "timestamp": 1717459200
}
```

### Response

```json
{
  "processed": true,
  "trustScore": 80,
  "riskScore": 40,
  "riskLevel": "MEDIUM",
  "recommendedAction": "MANUAL_REVIEW"
}
```

---

## Get Events

### Endpoint

```http
GET /events
```

Returns the most recent telemetry events stored in PostgreSQL.

---

# Running the Project

## Backend

```bash
npm install
npm run dev
```

Runs on:

```text
http://localhost:5000
```

---

## Frontend

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

# Known Limitations

* Transaction intent correlation is currently architectural rather than fully implemented.
* Limited telemetry dimensions compared to production systems.
* Behavioral profiles are maintained in-memory.
* Advanced AI-assisted mimicry detection would require machine learning models.
* Distributed session-state management is not yet implemented.

---

# Future Enhancements

* Redis-based session storage
* Kafka event streaming
* JWT authentication
* Machine learning anomaly detection
* WebSocket-based real-time monitoring
* Transaction Intent Engine
* Distributed risk evaluation

---

# Repository

GitHub Repository:

https://github.com/Thenewbiecoder80221/finquanta-rep0

---

# Author

Subhajit Bhattacharjee


National Institute of Technology Agartala
