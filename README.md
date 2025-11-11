# EasyJuris

An AI powered legal assisstant for demistifying legal documents, simplifying legal document procedures.

## 🎯 The Problem

> Complex legal documents cause confusion and high costs; users need clear, easier and actionable guidance.

Traditional legal solutions are often costly, overly complex, and lack clear explanations. EasyJuris bridges this gap by providing a simple, affordable, and intelligent platform for document analysis.

## ✨Solution: EasyJuris

EasyJuris empowers SMEs, startups, and individuals to make safer, faster, and more informed decisions. It acts as a **virtual legal assistant**, available 24/7 to scan, analyze, and explain legal contracts in plain English.

### 🚀 Key Features

  * **Upload & Summarize:** Instantly get plain-English summaries of your legal documents.
  * **AI Clause Analysis:** Get clause-by-clause explanations with risk levels (using Gemini) and clear, actionable next steps.
  * **Document Verification:** Check document authenticity, type (contract, deed, affidavit), and the parties involved.
  * **Procedure Guidance:** Provides step-by-step processes for official applications, including required docs, fees, timelines, and where to apply.
  * **Interactive Q\&A:** Ask specific questions about your document to get detailed insights.
  * **Smart Document Management:** Easily categorize, search, and manage your uploaded documents.
  * **Privacy & Security:** Features secure uploads and end-to-end encryption to ensure your data is safe.

### 📊 Prototype Performance

  * **Summaries:** \~10% size of the original document.
  * **Clause Coverage:** 90% (tested on sample contracts).
  * **Categorization Accuracy:** 90% (tested on employment, service, and NDA docs).

-----

## 🛠️ Tech Stack & Architecture

EasyJuris is built on a modern, scalable MERN + GenAI stack.

### Implemented Technologies

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, GridFS |
| **AI/ML** | Gemini API, Tesseract (OCR), PDFParser |

### Planned Technologies

  * **Security:** JWT, Google Auth, HTTPS
  * **Deployment:** Docker, Load Balancer, Google Cloud Hosting

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v18 or later)
  * npm
  * MongoDB (local or Atlas)
  * A Google Gemini API Key

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
    ```
2.  **Install Backend Dependencies**
    ```sh
    cd Backend
    npm install
    ```
3.  **Install Frontend Dependencies**
    ```sh
    cd ../Frontend
    npm install
    ```
4.  **Set up Environment Variables**
    Create a `.env` file in the `Backend` directory and add your keys:
    ```env
    MONGO_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_gemini_api_key
    ```

### Running the Application

1.  **Start the Backend Server**
    ```sh
    cd Backend
    npm start
    ```
2.  **Start the Frontend App**
    ```sh
    cd Frontend
    npm start
    ```
    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in your browser.
