# URL Shortener Application

## Description

A full-stack URL Shortener application that converts long URLs into short and unique links. The application allows users to generate shortened URLs and redirect users back to the original URLs efficiently.

---

## Features

* Generate short and unique URLs for long links
* Redirect users to the original website using shortened URLs
* Store URL data using MongoDB
* Prevent duplicate URL entries
* Persistent storage using local storage/database
* Basic validation and error handling for invalid URLs

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* JavaScript
* HTML/CSS

---

## Installation

1. Clone the repository

```bash
git clone <repository-link>
```

2. Navigate to the project folder

```bash
cd url-shortener-app
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
npm start
```

---

## Usage

* Enter a long URL in the input field
* Click the shorten button to generate a short URL
* Copy and use the generated short URL
* Opening the short URL redirects the user to the original website

---

## Project Structure

* `server.js` – Contains backend logic and API handling
* `models/` – MongoDB schema and database models
* `public/` – Frontend files (HTML, CSS, JavaScript)

---

## Future Improvements

* Add user authentication
* Add click analytics
* Add custom short URLs
* Improve UI/UX design
* Add URL expiration feature

---

## Author
Dipanshu Soni