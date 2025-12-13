# PersonalSite
Overview

This project is a fully personalized personal portfolio website designed to go beyond a traditional static resume. In addition to showcasing my education, experience, projects, and skills, the site features an interactive basketball mini-game with a cloud-backed leaderboard.

The goal of this project is to demonstrate end-to-end ownership across frontend development, game logic, authentication, and cloud infrastructure, while also reflecting my personal interests.

Tech Stack
Frontend

React + TypeScript

Component-based architecture for homepage, game, resume, and leaderboard

Strong typing for maintainability and scalability

HTML5 Canvas

Renders the interactive basketball mini-game

Handles ball animation, trajectory physics, and collision detection

CSS / Modern Styling

Responsive, card-based layout

Clean UI for resume sections and dashboards

User Input & Score Submission

No authentication required

Any visitor can play the game immediately

Players input a display name when submitting a score

Simplifies the user experience while still demonstrating backend and database integration

Backend & Cloud Infrastructure

AWS Lambda (Node.js)

Serverless functions for submitting and retrieving leaderboard scores

Amazon DynamoDB

Stores player names, scores, and timestamps

Low-latency, scalable leaderboard storage

Amazon API Gateway

REST API connecting the frontend to Lambda functions

Amazon S3 + CloudFront

Static hosting for the React application

CDN-backed delivery with HTTPS support

Features
Personalized Homepage

Authenticated landing page displaying:

Profile image

Short personal introduction

Dashboard-style navigation

Quick access to game, resume, and extracurricular sections

Interactive Basketball Mini-Game

Click-based shooting mechanic

Physics-based ball movement using velocity and gravity

Collision detection to determine successful shots

Real-time score tracking

Lightweight gameplay designed for quick interaction

Cloud-Backed Leaderboard

Automatically updates when a basket is scored

Displays ranked players and scores

Persists data across sessions using DynamoDB

Demonstrates full frontend → backend → database integration

Resume & Projects Section

Education, experience, and projects presented as concise cards

Skills section highlighting technical strengths

External links to LinkedIn, GitHub, and other profiles

Extracurriculars & Hobbies

Dedicated section for non-academic experiences

Highlights leadership, teamwork, and personal interests such as sports and dance

Architecture Overview

User accesses the site hosted on S3 + CloudFront

Basketball game runs locally in the browser using HTML5 Canvas

Player enters a display name when submitting a score

Scores are sent via API Gateway to AWS Lambda

Leaderboard data is stored and retrieved from DynamoDB

Future Improvements

Mobile-optimized gameplay controls

Daily or weekly leaderboard resets

Difficulty modes based on shot distance

Enhanced animations and sound effects

Basic analytics for page views and game interactions

Why This Project

This project was built to:

Showcase full-stack development skills

Demonstrate cloud-native, serverless architecture

Highlight individual ownership beyond group or coursework projects

Create a memorable and interactive personal brand

Live Demo

(Coming soon)

Author

Haley Bae
Computer Science, University of Central Florida
LinkedIn: https://linkedin.com/in/haleybae
GitHub: https://github.com/your-github-username
