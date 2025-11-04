# 🎬 Netflix GPT

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=000000)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

A fully functional **Netflix Clone** powered by **GPT** for smart movie recommendations — built with **React**, **TailwindCSS**, **Firebase**, **Redux Toolkit**, **TMDB API**, and **OpenAI API**.

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

### 🤖 Netflix GPT (AI Search)

- GPT-powered search bar for movie recommendations
- Integrates **OpenAI API** for AI movie suggestions
- Fetches GPT-recommended movies from **TMDB API**
- Reuses movie list components
- Supports multi-language (BONUS Feature)

---

### 🧠 State Management

- `userSlice` → Authentication state
- `movieSlice` → TMDB movie data
- `gptSlice` → GPT recommendations

---

### 🧩 Custom Hooks

- `useNowPlayingMovies()` → Fetches “Now Playing” movies
- `usePopularMovies()` → Fetches “Popular” movies
- `useTrailerVideo()` → Fetches and embeds YouTube trailers

---

### 🌐 APIs & Integrations

| Service           | Purpose                   |
| ----------------- | ------------------------- |
| **Firebase**      | Authentication & hosting  |
| **TMDB API**      | Movie data                |
| **OpenAI API**    | GPT-based recommendations |
| **YouTube Embed** | Trailer videos            |

---

## ⚙️ Tech Stack

| Technology        | Description               |
| ----------------- | ------------------------- |
| **React**         | Front-end framework       |
| **TailwindCSS**   | Styling & responsiveness  |
| **Firebase**      | Auth & hosting            |
| **Redux Toolkit** | State management          |
| **TMDB API**      | Movie data                |
| **OpenAI API**    | GPT movie recommendations |
| **React Router**  | Navigation                |

---

## 🧰 Setup

### 1️⃣ Clone

```bash
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
```
