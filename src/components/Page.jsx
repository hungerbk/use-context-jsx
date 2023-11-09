import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { atom, useRecoilState } from "recoil";
export default function Page() {
  const boolState = atom({
    key: "boolState",
    default: false,
  });

  const [isDark, setIsDark] = useRecoilState(boolState);
  const toggleThema = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} toggleThema={toggleThema}></Footer>
    </div>
  );
}
