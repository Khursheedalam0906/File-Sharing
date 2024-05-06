import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const image =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const uploadFile = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/upload", data);
      setResult(response.data.path);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        //
        await uploadFile(data);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="container">
      <img src={image} alt="Banner" />
      <div className="wrapper">
        <h1>Simple file sharing</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
