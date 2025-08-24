import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [fileId, setFileId] = useState(null);
const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [loadingAnswer, setLoadingAnswer] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

const handleClauseByClauseExplanation=()=>{
  console.log("navigating to clause by clause explanation");
navigate(`/ClauseByClauseExplanation/${fileId}`);
console.log("navigated to clause by clause explanation");
}

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // key must match multer.single("file")

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Upload successful:", data);
        setFileId(data.fileId);
        alert("File uploaded successfully!");
      } else {
        console.error("Upload failed");
        alert("Upload failed");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };




  const handleProcess = async () => {
    if (!fileId) {
      alert("No file uploaded yet!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/process/${fileId}`);
      if (res.ok) {
        const data = await res.json();
        console.log("Processing successful:", data);
        setSummary(data.summary);
      } else {
        console.error("Processing failed");
        alert("Processing failed");
      }
    } catch (err) {
      console.error("Error processing file:", err);
    }
  };





const handleAskQuestion = async () => {
  if (!question.trim()) {
    alert("Please type a question!");
    return;
  }

  if (!fileId) {
    alert("Upload a file first!");
    return;
  }

  try {
    setLoadingAnswer(true);

    const res = await fetch("http://localhost:5000/qna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileId,      // pass the uploaded file ID
        question,    // user question
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setAnswer(data.answer);
    } else {
      alert("Failed to get answer");
    }
  } catch (err) {
    console.error("Error asking question:", err);
    alert("Error occurred while asking question");
  } finally {
    setLoadingAnswer(false);
  }
};





  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Upload Your Document</h1>
      <input type="file" onChange={handleFileChange} className="mb-4 bg-amber-200" />
      <div className="flex gap-2">
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload
        </button>
        <button
          onClick={handleProcess}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Process & Summarize
        </button>
      </div>

      {summary && (
        <div className="flex flex-row items-center gap-10 justify-between mt-6 w-full p-10">

        <div className="mt-6 p-10 bg-white border rounded shadow text-justify w-3/4 ">
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>



      <div className="mt-6 p-4 bg-white border rounded shadow w-3/4">
    <h2 className="text-xl font-semibold mb-2">Ask About Your Document:</h2>
    <input
      type="text"
      placeholder="Type your question here..."
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      className="w-full p-2 border rounded mb-2"
    />
    <button
      onClick={handleAskQuestion}
      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Ask
    </button>

    {loadingAnswer && <p className="mt-2 text-gray-600">AI is typing...</p>}

    {answer && (
      <div className="mt-4 p-10 bg-gray-100 text-justify border rounded">
        <strong>Answer:</strong> {answer}
      </div>
    )}
  </div>

<div>
  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={handleClauseByClauseExplanation}>Get Clause by Clause explanation</button>
</div>

  </div>

      )}

      
     
    </div>
  );
};

export default Upload;
