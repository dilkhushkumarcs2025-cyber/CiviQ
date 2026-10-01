# CiviQ

### Report. Track. Verify.

**AI-Powered Civic Issue Intelligence & Resolution Tracking Platform**

CiviQ transforms scattered citizen reports into structured **Public Issues**,
helping communities and authorities report, understand, track, resolve,
and verify civic problems through one transparent platform.

<br>

**Report a Problem → Unify Related Reports → Track Resolution → Verify the Outcome**


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
