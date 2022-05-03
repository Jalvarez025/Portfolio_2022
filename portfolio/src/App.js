import React from "react";
import Header from "../src/components/Header";
import Page from "../src/components/Page"
import currentPage from "../src/components/Nav"

function App() {
  return (
  <div>
    <Header/>
    <main>
    <Page currentPage={currentPage}></Page>
    </main>
    
  </div>
  );
}

export default App;