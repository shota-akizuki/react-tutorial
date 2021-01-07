import React, { useState } from "react";
import List from "./List";
class App extends React.Component {
  //クラスコンポーネントでstateを扱う場合はthis.stateに初期値を代入する
  constructor(props) {
    super(props);
    this.state = { description: "クリック前の表示" };
  }
  //stateを変更するための関数を定義
  //setStateはオブジェクトを受け取り、変更後の値を受け取る（setdescriptionみたいな関数はない）
  changeDescription() {
    this.setState({
      description: "クリック後の表示",
    });
  }
  render() {
    //stateをdescriptionから取り出して表示する
    const { description } = this.state;
    //クラスのメソッドを呼ぶために、アロー関数でthisを引き継ぐようにしている
    //関数コンポーネントの場合は関数の参照だけ渡している
    //this.changeDescription()だけだと動かない
    //this.changeDescription().bind(this)でも動く
    return (
      <div>
        {description}
        <List title="取り扱い言語一覧" />
        <button onClick={() => this.changeDescription()}>ボタン</button>
      </div>
    );
  }
}

export default App;
