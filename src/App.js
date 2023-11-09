import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import useStore from "./store";

function App() {
  const isDark = useStore((state) => state.isDark);
  const setIsDark = useStore((state) => state.setIsDark);
  return <Page isDark={isDark} toggleThema={setIsDark} />;
}

export default App;
