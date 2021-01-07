import React, { useState } from "react";
import List from "./List";

//属性＝{}でJavaScriptの要素を代入
//通常のhtmlとJSXの違いは...
//class => className
//onclick => onClick
export const App = () => {
  const [description, setDescription] = useState("クリック前の表示");
  //状態を変更するための関数を定義
  //関数内でsetDescriptionを使用する
  const changeDescription = () => {
    setDescription("クリック後の表示です");
  };
  return (
    <div>
      {description}
      <List title="取り扱い言語一覧" />
      <button onClick={changeDescription}>ボタン</button>
    </div>
  );
};

export default App;
