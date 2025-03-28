import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Upload.scss";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [summary, setSummary] = useState(""); // ✅ Added summary state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load saved transcription & summary from localStorage on page load
  useEffect(() => {
    const savedTranscription = localStorage.getItem("transcription");
    const savedSummary = localStorage.getItem("summary");

    if (savedTranscription) setTranscription(savedTranscription);
    if (savedSummary) setSummary(savedSummary);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setTranscription(""); // Reset transcription when a new file is selected
    setSummary(""); // Reset summary as well
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an audio file.");
      return;
    }

    const formData = new FormData();
    formData.append("audio", file);

    setLoading(true);
    setError("");
    setTranscription("");
    setSummary(""); // Reset summary

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/transcribe`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("📩 Transcription Response:", response.data); // ✅ Debugging log

      if (response.data.transcription) {
        setTranscription(response.data.transcription);
        localStorage.setItem("transcription", response.data.transcription); // ✅ Save transcription
      } else {
        setError("No transcription received from the server.");
      }

      if (response.data.summary) {
        setSummary(response.data.summary); // ✅ Capture summary
        localStorage.setItem("summary", response.data.summary); // ✅ Save summary
      } else {
        console.warn("⚠️ No summary received from the server.");
      }

    } catch (err) {
      console.error("🚨 Upload Error:", err.response ? err.response.data : err.message);
      setError("Error uploading file or processing transcription.");
    } finally {
      setLoading(false);
    }
  };

  // Function to download transcription as a text file
  const handleDownload = () => {
    if (!transcription) return;

    const blob = new Blob([transcription], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcription.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to download summary as a text file
  const handleDownloadSummary = () => {
    if (!summary) return;

    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to clear transcription & summary from UI and localStorage
  const handleClear = () => {
    setTranscription("");
    setSummary(""); // ✅ Clear summary
    localStorage.removeItem("transcription");
    localStorage.removeItem("summary");
  };

  return (
    <div className="upload-container">
      <h2>Upload Audio for Transcription</h2>

      <input type="file" accept="audio/*" onChange={handleFileChange} disabled={loading} />

      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? "Processing..." : "Upload & Transcribe"}
      </button>

      {error && <p className="error">{error}</p>}

      {transcription && (
        <div className="transcription-box">
          <h3>Transcription:</h3>
          <p>{transcription}</p>

          <div className="button-group">
            <button onClick={handleDownload}>Download Transcription</button>
          </div>
        </div>
      )}

      {summary && (
        <div className="summary-box">
          <h3>Summary:</h3>
          <p>{summary}</p>

          <div className="button-group">
            <button onClick={handleDownloadSummary}>Download Summary</button>
          </div>
        </div>
      )}

      {(transcription || summary) && (
        <button className="clear-btn" onClick={handleClear}>Clear All</button>
      )}
    </div>
  );
};

export default Upload;
