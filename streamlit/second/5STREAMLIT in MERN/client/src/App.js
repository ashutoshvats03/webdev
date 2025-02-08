import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Streamlit in MERN</h1>
      <iframe
        src="http://localhost:8501"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Streamlit Dashboard"
      ></iframe>
    </div>
  );
}

export default App;
