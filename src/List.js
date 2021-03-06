import React, { useEffect } from "react";
import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n + 2) {
    border-top: 1px solid #d9dbde;
  }
`;

//propsとしてApp（親）から{langs}プロパティを受け取る
export const List = ({ langs }) => {
  //didUpdateで呼ばれる
  //unmountはuseEffectの第一引数の返り値になる
  useEffect(() => {
    console.log("List.js:useEffect");
    return () => {
      console.log("List.js:useEffect unmount");
    };
  });

  //繰り返しのリスト表示はmap関数を利用する
  //map関数は配列を別の配列にする関数
  //ここでは各言語の文字列のリストをJSXのHTMLリスト（divタグ）に変更
  //JSXで繰り返しをするときはkey（ユニークである必要あり）を設定する必要がある（ここでは配列のindex）
  return (
    <TabBodyContainer title="取り扱い言語リスト">
      <div>
        {" "}
        {langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>;
        })}
      </div>
    </TabBodyContainer>
  );
};

export default List;
