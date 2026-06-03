import { useState } from 'react'

import './App.css'
import { useEffect } from "react";
import jasus from './assets/jesus-bailando.gif';
function App() {

  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    fetch("/templates/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load HTML file");
        }
        return response.text();
      })
      .then((data) => {
        const updatedData = data.replace('{{JASUS_IMAGE}}', jasus);
        setHtmlContent(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Hello...", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading content...</p>;

  // Render the plain text string as actual DOM elements
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
export default App
