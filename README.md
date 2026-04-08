# 101503901-lab-test2-comp3133

## COMP 3133 - Lab Test 2 - SpaceX Mission Theme

### Student ID: 101503901

## Description
An Angular 17 application that displays SpaceX mission launches using the SpaceX REST API.

## Features
- **Mission List**: Displays all SpaceX launches with mission details
- **Mission Filter**: Filter missions by launch year
- **Mission Details**: Detailed view of a selected mission
- **Angular Material**: UI components for a polished design

## Tech Stack
- Angular 17 (Standalone Components)
- Angular Material
- TypeScript
- SpaceX REST API v3

## SpaceX API Endpoints Used
- All Launches: `https://api.spacexdata.com/v3/launches`
- Filter by Year: `https://api.spacexdata.com/v3/launches?launch_year={year}`
- Mission Details: `https://api.spacexdata.com/v3/launches/{flight_number}`

## Setup & Run

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Open browser at http://localhost:4200
```

## Build

```bash
ng build
```

## Project Structure

```
src/
├── app/
│   ├── missionlist/          # Mission list component
│   ├── missionfilter/        # Mission filter component  
│   ├── missiondetails/       # Mission details component
│   ├── models/
│   │   └── mission.ts        # Mission interface/model
│   ├── network/
│   │   └── spacexapi.service.ts  # SpaceX API service
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── environments/
├── index.html
├── main.ts
└── styles.css
```

## Deployment
Deployed on: [Your hosting URL here]

## GitHub Repository
[Your GitHub URL here]
