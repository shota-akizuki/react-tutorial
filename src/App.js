import React, { useState } from "react";
import LANGUAGES from "./const/languages";
import { Form } from "./Form";
import List from "./List";

//属性＝{}でJavaScriptの要素を代入
//通常のhtmlとJSXの違いは...
//class => className
//onclick => onClick
export const App = () => {
  //状態を変更するための関数をここに定義
  const [tab, setTab] = useState("list");
  const [langs, setlangs] = useState(LANGUAGES);
  const addLang = (lang) => {
    //スプレッド構文によって、一番後ろにlangを追加した配列をsetlangsで定義
    setlangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("Form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {tab === "list" ? (
        <List langs={langs} />
      ) : (
        <Form
          //子コンポーネントから親コンポーネントのaddLang関数を呼ぶために、
          //onAddLangというpropsを作る
          onAddLang={addLang}
        />
      )}
    </div>
  );
};

export default App;
