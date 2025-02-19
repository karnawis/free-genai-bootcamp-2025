# Frontend Implementation Plan

## Project Setup

- [x] Create a new Angular project using Angular CLI
- [x] Add necessary dependencies (e.g., Angular Material, HttpClientModule)
- [x] Set up project structure (Components, Services, Models, etc.)

## Pages

### Dashboard `/dashboard`

- [x] Create the Dashboard component
- [x] Implement the Last Study Session component
- [x] Implement the Study Progress component
- [x] Implement the Quick Stats component
- [x] Implement the Start Studying Button
- [x] Integrate with the backend API endpoints
  - [x] GET /api/dashboard/last_study_session
  - [x] GET /api/dashboard/study_progress
  - [x] GET /api/dashboard/quick_stats

### Study Activities Index `/study_activities`

- [x] Create the Study Activities Index component
- [x] Implement the Study Activity Card component
- [x] Integrate with the backend API endpoint
  - [x] GET /api/study_activities

### Study Activity Show `/study_activities/:id`

- [x] Create the Study Activity Show component
- [x] Implement the Study Activities Paginated List component
- [x] Integrate with the backend API endpoints
  - [x] GET /api/study_activities/:id
  - [x] GET /api/study_activities/:id/study_sessions

### Study Activities Launch `/study_activities/:id/launch`

- [x] Create the Study Activities Launch component
- [x] Implement the Launch form
- [x] Integrate with the backend API endpoint
  - [x] POST /api/study_activities

### Words Index `/words`

- [x] Create the Words Index component
- [x] Implement the Paginated Word List component
- [x] Integrate with the backend API endpoint
  - [x] GET /api/words

### Word Show `/words/:id`

- [x] Create the Word Show component
- [x] Implement the Study Statistics component
- [x] Implement the Word Groups component
- [x] Integrate with the backend API endpoint
  - [x] GET /api/words/:id

### Word Groups Index `/groups`

- [x] Create the Word Groups Index component
- [x] Implement the Paginated Group List component
- [x] Integrate with the backend API endpoint
  - [x] GET /api/groups

### Group Show `/groups/:id`

- [x] Create the Group Show component
- [x] Implement the Group Statistics component
- [x] Implement the Words in Group component
- [x] Implement the Study Sessions component
- [x] Integrate with the backend API endpoints
  - [x] GET /api/groups/:id
  - [x] GET /api/groups/:id/words
  - [x] GET /api/groups/:id/study_sessions

### Study Sessions Index `/study_sessions`

- [x] Create the Study Sessions Index component
- [x] Implement the Paginated Study Session List component
- [x] Integrate with the backend API endpoint
  - [x] GET /api/study_sessions

### Study Session Show `/study_sessions/:id`

- [x] Create the Study Session Show component
- [x] Implement the Study Session Details component
- [x] Implement the Words Review Items component
- [x] Integrate with the backend API endpoints
  - [x] GET /api/study_sessions/:id
  - [x] GET /api/study_sessions/:id/words

### Settings Page `/settings`

- [x] Create the Settings component
- [x] Implement the Theme Selection component
- [x] Implement the Reset History Button
- [x] Implement the Full Reset Button
- [x] Integrate with the backend API endpoints
  - [] POST /api/reset_history
  - [] POST /api/full_reset

### Menu

- [] Create the Menu option
- [] Add Proper Routing

## Final Steps

- [ ] Review and refactor code
- [ ] Perform thorough testing
- [ ] Deploy the frontend application
