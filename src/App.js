import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function App() {
  // const [isDark, setIsDark] = useState(false);

  return (
    <RecoilRoot>
      <Page />;
    </RecoilRoot>
  );
}

export default App;
