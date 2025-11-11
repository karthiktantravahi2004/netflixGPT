# 🎬 Netflix Gemini

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=000000)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)

A fully functional **Netflix Clone** powered by **Gemini AI** for smart movie recommendations — built with **React**, **TailwindCSS**, **Firebase**, **Redux Toolkit**, **TMDB API**, and **Gemini API**.

---

## 🚀 Features

### 🔐 Authentication

- Login / Sign Up with Firebase Authentication
- Form Validation using `useRef`
- Redirect users based on authentication state
- Profile Update (Display Name & Profile Picture)
- Sign Out functionality

---

### 🎥 Browse Page (Protected)

- Header with navigation and sign-out
- Main movie trailer background (autoplay + mute)
- Movie title & description overlay
- Movie lists (Now Playing, Popular, Top Rated)
- Fully responsive with TailwindCSS

---

### 🤖 Netflix Gemini (AI Search)

- **Gemini AI–powered search bar** for movie recommendations
- Integrates **Google Gemini API** for intelligent movie suggestions
- Fetches Gemini-recommended movies from **TMDB API**
- Reuses movie list components
- Supports multi-language (BONUS Feature)

---

### 🧠 State Management

- `userSlice` → Authentication state
- `movieSlice` → TMDB movie data
- `geminiSlice` → Gemini AI recommendations

---

### 🧩 Custom Hooks

- `useNowPlayingMovies()` → Fetches “Now Playing” movies
- `usePopularMovies()` → Fetches “Popular” movies
- `useTrailerVideo()` → Fetches and embeds YouTube trailers

---

### 🌐 APIs & Integrations

| Service           | Purpose                        |
| ----------------- | ------------------------------ |
| **Firebase**      | Authentication & hosting       |
| **TMDB API**      | Movie data                     |
| **Gemini API**    | AI-based movie recommendations |
| **YouTube Embed** | Trailer videos                 |

---

## ⚙️ Tech Stack

| Technology        | Description                  |
| ----------------- | ---------------------------- |
| **React**         | Front-end framework          |
| **TailwindCSS**   | Styling & responsiveness     |
| **Firebase**      | Auth & hosting               |
| **Redux Toolkit** | State management             |
| **TMDB API**      | Movie data                   |
| **Gemini API**    | AI-powered movie suggestions |
| **React Router**  | Navigation                   |

---

## 🧰 Setup

### 1️⃣ Clone

```bash
git clone https://github.com/your-username/netflix-gemini.git
cd netflix-gemini
```
