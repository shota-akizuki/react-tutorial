import React from "react";
import { getLanguages } from "./const/languages";
import Form from "./Form";
import List from "./List";
import styled from "styled-components";

const Header = styled.header`
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

class App extends React.Component {
  //クラスコンポーネントでstateを扱う場合はthis.stateに初期値を代入する

  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: [] };
  }

  componentDidMount() {
    console.log("App.js:componentDidMount");
    this.fetchLanguages();
  }
  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({ langs });
  }

  //Form.jsに渡す関数
  //タブの切り替えとlangsの追加
  //クラスコンポーネントでsetStateで複数のstateを変更可能
  addLang(lang) {
    this.setState({
      tab: "list",
      langs: [...this.state.langs, lang],
    });
  }
  //stateを変更するための関数を定義
  //setStateはオブジェクトを受け取り、変更後の値を受け取る（setdescriptionみたいな関数はない）
  render() {
    //stateをtabから取り出して表示する
    const { tab, langs } = this.state;
    return (
      <div>
        <Header>
          <HeaderUl>
            <HeaderLi
              focused={tab === "list"}
              onClick={() => this.setState({ tab: "list" })}
            >
              List
            </HeaderLi>
            <HeaderLi
              focused={tab === "form"}
              onClick={() => this.setState({ tab: "form" })}
            >
              Form
            </HeaderLi>
          </HeaderUl>
        </Header>

        <div>
          {tab === "list" ? (
            <List langs={langs} />
          ) : (
            <Form onAddLang={(lang) => this.addLang(lang)} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
