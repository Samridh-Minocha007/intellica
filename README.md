# 🎓 Intellica: AI-Powered Personalized Course Recommender

<p align="center">
  <strong>An AI-driven EdTech platform that personalizes learning pathways based on a user's educational background, interests, skill level, and budget.</strong><br />
  Intellica makes quality education accessible, inclusive, and future-ready by integrating aptitude-based evaluation, real-time course scraping, and multilingual delivery.
</p>

---

## 🚀 Key Features

- 🧠 **AI-Powered Course Recommendations**  
  Delivers personalized course suggestions based on user qualifications, career goals, and quiz performance using Groq LLaMA 3.5 and contextual embeddings.

- 📝 **Aptitude-Based Skill Assessment**  
  Automatically generates quizzes to categorize users into Beginner, Intermediate, or Advanced tiers for tailored content.

- 🌐 **Real-Time Course Fetching**  
  Live scrapes and integrates with APIs from leading platforms like Coursera, Udemy, edX, and YouTube to provide the most current courses.

- 🌍 **Multilingual Support**  
  Provides accurate translations and summaries in various regional languages using an advanced translation pipeline (Groq API + Deep Translate + Embedding Consistency).

- ✉️ **Email Notifications & Summaries**  
  Sends curated course summaries and direct links to users via an automated and personalized email delivery system.

- 🛠️ **Project-Based Recommendations**  
  Suggests relevant courses by analyzing user-submitted project descriptions, encouraging practical, hands-on learning.

---

## 🛠️ Tech Stack

| Category     | Technology                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **Frontend** | Next.js, React.js, Tailwind CSS, HTML5                                      |
| **Backend**  | FastAPI, MongoDB, SMTP                                                      |
| **Deployment** | Vercel, AWS                                                               |
| **AI & NLP** | Groq API (LLaMA 3.5), SentenceTransformers, FAISS, BeautifulSoup, Deep Translator |

> This project uses `next/font` to automatically optimize and load **Geist**, a new font family from Vercel.

---

## 🧪 System Architecture

1. **User Input & Quiz Evaluation**  
   Users provide learning goals, budget, and preferred language, then take a short aptitude quiz.

2. **AI-NLP Processing**  
   The backend analyzes responses using embeddings to infer intent and learning level.

3. **Course Engine**  
   Scrapes or fetches courses in real time from Coursera, Udemy, edX, YouTube, and more.

4. **Translation Pipeline**  
   Translates content with semantic accuracy using Groq + Deep Translator.

5. **Email Service**  
   Sends customized, ranked course lists to the user's inbox.

---


---

## 🎯 Our Vision

To evolve **Intellica** into a fully autonomous, AI-powered learning ecosystem that recommends not just **courses**, but also **career paths**, **internship opportunities**, and **custom learning plans** — all aligned with real-time job market data and multimodal content analysis.

---

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

### Run Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
