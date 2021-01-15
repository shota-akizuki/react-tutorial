import React, { useState, useContext } from "react";
import { Form } from "./Form";
import List from "./List";
import { Header } from "./Header";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

//属性＝{}でJavaScriptの要素を代入
//通常のhtmlとJSXの違いは...
//class => className
//onclick => onClick
export const App = ({ data }) => {
  //状態を変更するための関数をここに定義
  const [tab, setTab] = useState("list");
  const [langs, setlangs] = useState(data);
  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    //スプレッド構文によって、一番後ろにlangを追加した配列をsetlangsで定義
    setlangs([...langs, lang]);
    setTab("list");
  };

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {tab === "list" ? (
        <List langs={langs} />
      ) : (
        <Form
          //子コンポーネントから親コンポーネントのaddLang関数を呼ぶために、
          //onAddLangというpropsを作る
          onAddLang={addLang}
        />
      )}
    </Container>
  );
};

export default App;
