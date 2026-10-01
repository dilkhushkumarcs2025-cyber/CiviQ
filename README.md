
<div align="center">
           
# CiviQ

### Report. Track. Verify.

**AI-Powered Civic Issue Intelligence & Resolution Tracking Platform**

CiviQ transforms scattered citizen reports into structured **Public Issues**,
helping communities and authorities report, understand, track, resolve,
and verify civic problems through one transparent platform.

<br>

**Report a Problem → Unify Related Reports → Track Resolution → Verify the Outcome**

</div>

## Table of Contents

1. [About CiviQ](#-about-civiq)
2. [Problem Statement](#-problem-statement)
3. [Our Solution](#-our-solution)
4. [Complete Workflow](#-complete-workflow)
5. [Core Features](#-core-features)
6. [AI-Powered Intelligence](#-ai-powered-intelligence)
7. [Public Issue System](#-public-issue-system)
8. [Civic Map](#-civic-map)
9. [Authority Dashboard](#-authority-dashboard)
10. [Community Verification](#-community-verification)
11. [System Architecture](#-system-architecture)
12. [Technology Stack](#-technology-stack)
13. [Project Structure](#-project-structure)
14. [Roadmap & Future Scope](#-roadmap--future-scope)
15. [Team, Impact & Project Information](#-team-impact--project-information)

## What is CiviQ?

**CiviQ** is an AI-powered platform that helps citizens **report, track, and verify civic problems** such as potholes, garbage, broken streetlights, waterlogging, and damaged roads.

Citizens submit a **photo, description, and location** of a problem. CiviQ identifies related reports and groups them into one **Public Issue**, which can then be tracked until resolution.

> **Multiple Reports → One Public Issue → Transparent Resolution → Community Verification**s


## Problem Statement

Citizens face everyday civic problems such as **potholes, garbage, broken streetlights, waterlogging, and damaged roads**, but reporting these problems does not always provide a clear, transparent, and trackable path to resolution.

Multiple citizens may report the **same problem separately**, creating scattered and duplicate reports. Citizens may also have limited visibility into **who is handling the issue, what progress has been made, and whether the problem has actually been resolved**.

### Key Challenges

- Multiple reports for the same civic problem
- Scattered information and duplicate complaints
- Limited visibility into issue progress
- Unclear responsibility and status
- Lack of resolution evidence
- Limited verification after an issue is marked resolved

> **Civic problems are being reported, but they are not always properly connected, tracked, and verified.**

## Our Solution

**CiviQ** transforms scattered citizen reports into a single, structured **Public Issue** and tracks it from reporting to verified resolution.

The platform follows a simple 7-step process:

**Report → Understand → Unify → Track → Act → Resolve → Verify**

- **Report** — Citizens submit a problem with photo, description, and location.
- **Understand** — AI analyzes the report and identifies the type of civic issue.
- **Unify** — Related or duplicate reports are grouped into one Public Issue.
- **Track** — Citizens can follow the issue and its current status.
- **Act** — The responsible authority reviews and works on the issue.
- **Resolve** — Resolution progress and supporting evidence are added.
- **Verify** — Citizens/community can verify whether the issue has actually been resolved.

> **CiviQ turns individual complaints into one transparent resolution journey.**

## Complete Workflow

CiviQ follows a complete civic issue lifecycle — from the moment a citizen reports a problem to the final community verification.

### End-to-End Flow

```text
┌──────────────────────┐
│    CITIZEN REPORT    │
│                      │
│  • Photo             │
│  • Description       │
│  • GPS Location      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    AI ANALYSIS       │
│                      │
│  Image + Text + GPS  │
│  • Issue Category     │
│  • Similar Reports    │
│  • Location Matching  │
└──────────┬───────────┘
           │
           ▼
      ┌─────────────┐
      │ Related     │
      │ Report?     │
      └──────┬──────┘
             │
       ┌─────┴─────┐
      YES          NO
       │            │
       ▼            ▼
┌──────────────┐  ┌────────────────┐
│ JOIN EXISTING│  │ CREATE NEW     │
│ PUBLIC ISSUE │  │ PUBLIC ISSUE   │
└──────┬───────┘  └───────┬────────┘
       │                   │
       └─────────┬─────────┘
                 ▼
       ┌────────────────────┐
       │    PUBLIC ISSUE    │
       │                    │
       │ • Issue ID         │
       │ • Location         │
       │ • Reports          │
       │ • Evidence         │
       │ • Status           │
       └──────────┬─────────┘
                  │
                  ▼
       ┌────────────────────┐
       │ AUTHORITY DASHBOARD│
       │                    │
       │ • Review Issue     │
       │ • Assign Department│
       │ • Assign Officer   │
       └──────────┬─────────┘
                  │
                  ▼
       ┌────────────────────┐
       │    WORK STARTED    │
       │                    │
       │ • Status Update    │
       │ • Progress         │
       │ • Work Evidence    │
       └──────────┬─────────┘
                  │
                  ▼
       ┌────────────────────┐
       │      RESOLVED      │
       │                    │
       │ Resolution Evidence│
       │ Before / After     │
       └──────────┬─────────┘
                  │
                  ▼
       ┌────────────────────┐
       │ COMMUNITY          │
       │ VERIFICATION       │
       │                    │
       │ Is the problem     │
       │ actually fixed?    │
       └──────────┬─────────┘
                  │
             ┌────┴────┐
             │         │
           YES         NO
             │         │
             ▼         ▼
      ┌───────────┐  ┌────────────┐
      │ VERIFIED  │  │ REOPEN /   │
      │           │  │ REVIEW     │
      └───────────┘  └────────────┘
```
## Core Features

1. **Citizen Reporting** — Report civic problems with photo, description, and GPS location.

2. **AI-Powered Intelligence** — Analyze images, text, and location to understand reported issues.

3. **Issue Clustering** — Detect duplicate or related reports and group them into one Public Issue.

4. **Public Issue System** — Maintain one central record for each real-world civic problem.

5. **Civic Map** — Visualize reported and active civic issues based on their locations.

6. **Live Issue Tracking** — Track issues through Reported → Assigned → In Progress → Resolved.

7. **Authority Dashboard** — Review issues, assign departments, manage status, and monitor progress.

8. **Evidence-Based Resolution** — Store photos, progress updates, and resolution evidence.

9. **Community Verification** — Allow citizens to verify whether a resolved issue has actually been fixed.

10. **Transparency & Accountability** — Maintain a visible issue timeline from the initial report to final verification.
    

## AI-Powered Intelligence

CiviQ uses AI to analyze **images, text, and location data** from citizen reports to better understand civic problems.

- **Image Analysis** — Identifies the type of civic problem from uploaded photos.
- **Text Analysis** — Understands the problem description provided by citizens.
- **Duplicate Detection** — Identifies potentially duplicate reports.
- **Related Issue Detection** — Finds reports that may refer to the same real-world problem.
- **Report Clustering** — Groups related reports into a single **Public Issue**.
- **Location Matching** — Uses location information to help identify geographically related reports.

```text
Citizen Report
      │
      ├── Photo
      ├── Description
      └── Location
             │
             ▼
       ┌─────────────┐
       │ AI ANALYSIS │
       └──────┬──────┘
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
    Image    Text    Location
   Analysis Analysis  Matching
      │       │        │
      └───────┼────────┘
              ▼
    Related / Duplicate Reports
              │
              ▼
       Public Issue
```
## Public Issue System

CiviQ converts multiple citizen reports about the same real-world civic problem into a single **Public Issue**.

Instead of treating every complaint as a separate case, related reports are connected to one issue, creating a clear and transparent record from reporting to verification.

### How It Works

```text
Citizen Reports
      ↓
AI Analysis
      ↓
Related / Duplicate Detection
      ↓
┌─────────────────────────────┐
│     Existing Public Issue?  │
└──────────────┬──────────────┘
          Yes  │  No
               │
       ┌───────┴────────┐
       ▼                ▼
 Join Existing     Create New
 Public Issue      Public Issue
       │                │
       └───────┬────────┘
               ▼
        Public Issue
               ↓
      Authority Assignment
               ↓
          Work Started
               ↓
       Progress Updates
               ↓
      Resolution Evidence
               ↓
     Community Verification
               ↓
      Verified / Reopened
```

### Public Issue Contains

- **Issue ID** — Unique identifier for the issue.
- **Issue Category** — Pothole, garbage, streetlight, waterlogging, damaged road, etc.
- **Location** — Geographic location of the problem.
- **Citizen Reports** — Multiple related reports connected to the issue.
- **Evidence** — Photos and supporting information.
- **Status** — Current stage of the issue.
- **Authority Assignment** — Responsible department or authority.
- **Timeline** — Complete history of issue updates.
- **Resolution Evidence** — Proof submitted after the issue is addressed.
- **Verification Status** — Community verification of the resolution.

## Civic Map

CiviQ provides an interactive **Civic Map** that visualizes reported and active civic issues based on their geographic locations.

- **Issue Locations** — View civic problems directly on the map.
- **Issue Categories** — Identify different types of civic problems.
- **Issue Status** — See whether an issue is reported, assigned, in progress, or resolved.
- **Issue Density** — Identify areas with a higher concentration of civic problems.
- **Public Issue Details** — Open an issue from the map to view its details, reports, evidence, and status.
- **Location-Based Intelligence** — Use geographic information to help identify related reports and understand local civic problem patterns.

> **One Map → Every Public Issue → Clear Civic Visibility**

## Authority Dashboard

CiviQ provides an **Authority Dashboard** for reviewing, managing, assigning, and tracking civic issues from a centralized interface.

### Key Functions

- **Issue Overview** — View reported, assigned, in-progress, and resolved issues.
- **Issue Management** — Review issue details, evidence, reports, and location.
- **Department Assignment** — Assign issues to the responsible department or authority.
- **Officer Assignment** — Assign issues to responsible personnel for action.
- **Status Management** — Update the issue lifecycle as work progresses.
- **Progress Updates** — Add updates so citizens can track the progress.
- **Resolution Evidence** — Upload evidence after the issue has been addressed.
- **Analytics** — Monitor issue trends, categories, locations, and resolution activity.

> **One Dashboard → All Public Issues → Clear Action → Transparent Resolution**

## Community Verification

CiviQ allows citizens to verify whether a civic issue marked as **Resolved** has actually been fixed.

- **Resolution Evidence** — Authorities provide photos or supporting evidence of the completed work.
- **Citizen Review** — Citizens can review the resolution and submitted evidence.
- **Verify Resolution** — Citizens can confirm that the issue has been resolved.
- **Reopen Issue** — If the problem still exists, citizens can flag it for review or reopening.
- **Transparent Status** — The verification result becomes part of the Public Issue timeline.

> **Resolved by Authority → Reviewed by Community → Verified or Reopened**

## System Architecture

CiviQ follows a modular architecture where citizen reports flow through the **AI Intelligence Layer** before reaching the Public Issue and Authority layers.

```text
                         ┌──────────────────────────┐
                         │      CITIZEN LAYER       │
                         │                          │
                         │  Web / Mobile Interface  │
                         │  • Report Issue          │
                         │  • Civic Map             │
                         │  • Track Issues          │
                         │  • Verify Resolution     │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │      API / BACKEND       │
                         │        FastAPI           │
                         │                          │
                         │  • Authentication        │
                         │  • Reports               │
                         │  • Public Issues         │
                         │  • Evidence              │
                         │  • Verification          │
                         │  • Authority APIs        │
                         └────────────┬─────────────┘
                                      │
                     ┌────────────────┼────────────────┐
                     │                │                │
                     ▼                ▼                ▼
          ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
          │  AI INTELLIGENCE│ │   GEO ENGINE   │ │   MEDIA /     │
          │     LAYER      │ │                │ │   EVIDENCE     │
          │                │ │ • GPS Matching │ │                │
          │ • Image AI     │ │ • Geo Clustering│ │ • Photos      │
          │ • NLP          │ │ • Issue Density│ │ • Resolution   │
          │ • Embeddings   │ │                │ │   Evidence     │
          │ • Similarity   │ │                │ │                │
          └───────┬────────┘ └───────┬────────┘ └───────┬────────┘
                  │                  │                  │
                  └──────────────────┼──────────────────┘
                                     ▼
                         ┌──────────────────────────┐
                         │     CIVIQ CORE ENGINE    │
                         │                          │
                         │     PUBLIC ISSUE         │
                         │                          │
                         │ Reports → Cluster →      │
                         │ Track → Resolve → Verify │
                         └────────────┬─────────────┘
                                      │
                         ┌────────────┴────────────┐
                         │                         │
                         ▼                         ▼
              ┌──────────────────┐       ┌──────────────────┐
              │    DATABASE      │       │ AUTHORITY LAYER  │
              │                  │       │                  │
              │ PostgreSQL       │       │ • Dashboard      │
              │ + PostGIS        │       │ • Assignment     │
              │                  │       │ • Status Updates │
              │ • Users          │       │ • Analytics      │
              │ • Reports       │       │ • Resolution     │
              │ • Issues        │       │   Evidence       │
              │ • Locations     │       └─────────┬────────┘
              │ • Timeline      │                 │
              └──────────────────┘                 ▼
                                      ┌──────────────────────┐
                                      │ COMMUNITY VERIFICATION│
                                      │                      │
                                      │ Verified / Reopened  │
                                      └──────────────────────┘
```
## Technology Stack

CiviQ uses a modern and scalable technology stack designed for **AI-powered civic intelligence, geospatial analysis, issue tracking, and transparent resolution workflows**.

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js + TypeScript | Build the citizen and authority interfaces |
| **UI & Styling** | Tailwind CSS | Responsive and modern user interface |
| **Backend** | Python + FastAPI | REST APIs, authentication, issue processing |
| **Database** | PostgreSQL | Store users, reports, issues, status, and verification data |
| **Geospatial Database** | PostGIS | Store and analyze geographic locations |
| **AI / ML** | Computer Vision | Analyze civic issue images |
| **NLP** | Natural Language Processing | Analyze citizen descriptions |
| **AI Similarity** | Image Embeddings | Detect visually similar reports |
| **Issue Intelligence** | Similarity + Geospatial Matching | Detect duplicate and related reports |
| **Maps** | OpenStreetMap + MapLibre | Display civic issues and locations |
| **Charts** | Recharts | Analytics and dashboard visualizations |
| **Development** | VS Code | Development environment |
| **Version Control** | Git + GitHub | Source code management and collaboration |
| **Deployment** | Docker + Cloud Infrastructure | Containerized and scalable deployment |

### Technology Flow

```text
React + TypeScript + Tailwind
              ↓
          FastAPI
              ↓
     ┌────────┴────────┐
     ↓                 ↓
 AI Intelligence   PostgreSQL
     │              + PostGIS
     ↓                 │
Image + Text +        │
Location Analysis     │
     └────────┬────────┘
              ↓
       Public Issue Engine
              ↓
     Authority Dashboard
              ↓
    Community Verification
```

## Project Structure

```text
CiviQ/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── IssueCard/
│   │   │   ├── IssueTimeline/
│   │   │   ├── IssueStatus/
│   │   │   ├── MapView/
│   │   │   ├── ReportForm/
│   │   │   ├── EvidenceGallery/
│   │   │   ├── VerificationCard/
│   │   │   └── StatCard/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── ReportIssue/
│   │   │   ├── CivicMap/
│   │   │   ├── PublicIssues/
│   │   │   ├── IssueDetails/
│   │   │   ├── Dashboard/
│   │   │   ├── Notifications/
│   │   │   └── Profile/
│   │   │
│   │   ├── admin/
│   │   │   ├── Dashboard/
│   │   │   ├── Issues/
│   │   │   ├── Departments/
│   │   │   ├── Users/
│   │   │   └── Analytics/
│   │   │
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── reports/
│   │   │   ├── issues/
│   │   │   ├── evidence/
│   │   │   ├── verification/
│   │   │   ├── authority/
│   │   │   └── analytics/
│   │   │
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── ai/
│   │   ├── database/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── ai/
│   ├── computer_vision/
│   ├── nlp/
│   ├── embeddings/
│   ├── similarity/
│   └── geospatial/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── docs/
│   ├── architecture/
│   └── api/
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── README.md
└── LICENSE
```

## Roadmap & Future Scope

CiviQ is designed to grow from a **pilot-level civic issue platform** into a scalable civic intelligence system.

### Development Roadmap

```text
Phase 1
MVP
  ↓
Citizen Reporting
Public Issues
Civic Map
Issue Tracking
Community Verification
  ↓
Phase 2
AI Intelligence
  ↓
Image Classification
Duplicate Detection
Related Issue Clustering
Geospatial Intelligence
  ↓
Phase 3
Authority Platform
  ↓
Department Assignment
Officer Workflow
Resolution Evidence
Analytics & SLA Tracking
  ↓
Phase 4
Pilot Deployment
  ↓
Campus / Local Community
  ↓
City-Level Deployment
  ↓
Phase 5
Multi-City Platform
  ↓
Scalable Civic Intelligence
```

## Team, Impact & Project Information

### Team

**Team Name:** DEBUG OR DIE

**Team Members:**
- Dilkhush Kumar
- Uditya Raj
- Prince Kumar
- Aman Kumar
- Saurabh Kumar

**Institution:** Meerut Institute of Technology

### Project

**Project Name:** CiviQ

**Tagline:** Report. Track. Verify.

**Problem Statement:** AI-Powered Civic Issue Intelligence & Resolution Tracking Platform

### Expected Impact

CiviQ aims to make civic problem reporting more **structured, transparent, trackable, and verifiable** by connecting citizen reports into Public Issues and providing a clear resolution journey.

```text
Citizen
   ↓
Report
   ↓
AI Intelligence
   ↓
Public Issue
   ↓
Authority Action
   ↓
Resolution Evidence
   ↓
Community Verification


```
### Project Vision

> **One Problem. One Public Issue. One Transparent Resolution Journey.**

CiviQ is designed with a scalable vision:

**Campus → City → Multi-City Civic Intelligence**

### Project Information

- **Category:** AI + Civic Technology
- **Platform:** Web-based Civic Intelligence Platform
- **Primary Users:** Citizens and Authorities
- **Core Focus:** Issue Intelligence, Tracking, Evidence, and Verification
- **Repository:** CiviQ
- **Development Approach:** Modular, scalable, and deployment-ready architecture



~Thank You
