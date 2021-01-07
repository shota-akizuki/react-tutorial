import React from "react";

const LANGUAGES = ["JavaScript", "Dart", "TypeScript", "Kotlin", "Swift"];

export const List = () => {
  //繰り返しのリスト表示はmap関数を利用する
  //map関数は配列を別の配列にする関数
  //ここでは各言語の文字列のリストをJSXのHTMLリスト（divタグ）に変更
  //JSXで繰り返しをするときはkey（ユニークである必要あり）を設定する必要がある（ここでは配列のindex）
  return (
    <div>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

export default List;
