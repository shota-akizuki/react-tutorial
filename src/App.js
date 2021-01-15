import React from "react";
import Form from "./Form";
import List from "./List";
import styled from "styled-components";
import Header from "./Header";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

class App extends React.Component {
  //クラスコンポーネントでContextを利用するにはcontextTypeというstaticを利用する
  //これによってthis.contextのなかにthemeが入った
  static contextType = ThemeContext;

  //クラスコンポーネントでstateを扱う場合はthis.stateに初期値を代入する
  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: props.data };
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
    const [theme] = this.context;
    return (
      <Container theme={theme}>
        <Header tab={"tab"} setTab={(t) => this.setState({ tab: t })} />
        {tab === "list" ? (
          <List langs={langs} />
        ) : (
          <Form onAddLang={(lang) => this.addLang(lang)} />
        )}
      </Container>
    );
  }
}

export default App;
