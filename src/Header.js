import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "./components/Button";

//headerタグを元にしたコンポーネント
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  //JavaScriptの関数を$の中に入れられる
  //選択された時だけの処理
  border-bottom: ${(props) => (props.focused ? "2px solid #F44366" : "none")};
`;

//共通で作っていたボタンをインポート
const HeaderButton = styled(Button)`
  padding: 0;
  margin-bottom: 4px;
`;

//tabとsetTabは親からもらう
export const Header = ({ tab, setTab }) => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <Container>
      <HeaderUl>
        <HeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
          リスト
        </HeaderLi>
        <HeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
          フォーム
        </HeaderLi>
      </HeaderUl>
      <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
    </Container>
  );
};
