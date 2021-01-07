import React from "react";
import LANGUAGES from "./const/languages";
import Form from "./Form";
import List from "./List";
class App extends React.Component {
  //クラスコンポーネントでstateを扱う場合はthis.stateに初期値を代入する

  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: LANGUAGES };
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
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: "list" })}>List</li>
            <li onClick={() => this.setState({ tab: "form" })}>Form</li>
          </ul>
        </header>
        <hr></hr>
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
