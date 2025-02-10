# Backend Server Technical Requirements

## Business Requirements (Goal)

A language learning school wants to build a prototype of a learning portal that will serve three primary functions:

- **Vocabulary Inventory**: Maintain an inventory of possible vocabulary that can be learned.
- **Learning Record Store (LRS)**: Track and provide scores for correct and incorrect practice vocabulary.
- **Unified Launchpad**: Launch different learning applications from a single platform.

## Technical Requirements

- **Backend Language**: Python
- **Database**: SQLite3
- **API Framework**: Flask
- **Response Format**: JSON
- **Authentication/Authorization**: None (single user system)

## Database Schema

The database will consist of the following tables:

- **words**: Stores vocabulary words

  - `id` (integer): Unique identifier
  - `french` (string): French word
  - `pronunciation` (string): Pronunciation of the word
  - `english` (string): English translation
  - `parts` (json): Additional parts of the word

- **words_groups**: Join table for many-to-many relationship between words and groups

  - `id` (integer): Unique identifier
  - `word_id` (integer): Foreign key to `words` table
  - `group_id` (integer): Foreign key to `groups` table

- **groups**: Thematic groups of words

  - `id` (integer): Unique identifier
  - `name` (string): Name of the group

- **study_sessions**: Records of study sessions grouping word review items

  - `id` (integer): Unique identifier
  - `group_id` (integer): Foreign key to `groups` table
  - `created_at` (datetime): Timestamp of session creation
  - `study_activity_id` (integer): Foreign key to `study_activities` table

- **study_activities**: Specific study activities linking a study session to a group

  - `id` (integer): Unique identifier
  - `study_session_id` (integer): Foreign key to `study_sessions` table
  - `group_id` (integer): Foreign key to `groups` table
  - `created_at` (datetime): Timestamp of activity creation

- **word_review_items**: Records of word practice, indicating correctness
  - `word_id` (integer): Foreign key to `words` table
  - `study_session_id` (integer): Foreign key to `study_sessions` table
  - `correct` (boolean): Indicates if the word was correctly practiced
  - `created_at` (datetime): Timestamp of review item creation

## API Endpoints

The following API endpoints will be required:

- **Dashboard Endpoints**

  - `GET /api/dashboard/last_study_session`: Retrieve the last study session
  - `GET /api/dashboard/study_progress`: Retrieve study progress
  - `GET /api/dashboard/quick_stats`: Retrieve quick statistics

- **Study Activities Endpoints**

  - `GET /api/study_activities/:id`: Retrieve a specific study activity
  - `GET /api/study_activities/:id/study_sessions`: Retrieve study sessions for a specific activity
  - `POST /api/study_activities`: Create a new study activity
    - Required params: `group_id`, `study_activity_id`

- **Words Endpoints**

  - `GET /api/words`: Retrieve all words (pagination with 100 items per page)
  - `GET /api/words/:id`: Retrieve a specific word

- **Groups Endpoints**

  - `GET /api/groups`: Retrieve all groups (pagination with 100 items per page)
  - `GET /api/groups/:id`: Retrieve a specific group
  - `GET /api/groups/:id/words`: Retrieve words in a specific group
  - `GET /api/groups/:id/study_sessions`: Retrieve study sessions for a specific group

- **Study Sessions Endpoints**

  - `GET /api/study_sessions`: Retrieve all study sessions (pagination with 100 items per page)
  - `GET /api/study_sessions/:id`: Retrieve a specific study session
  - `GET /api/study_sessions/:id/words`: Retrieve words reviewed in a specific study session

- **Reset Endpoints**

  - `POST /api/reset_history`: Reset study history
  - `POST /api/full_reset`: Perform a full reset of the database

- **Word Review Endpoint**
  - `POST /api/study_sessions/:id/words/:word_id/review`: Review a word in a study session
    - Required params: `correct`
