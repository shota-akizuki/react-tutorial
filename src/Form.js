import React from "react";

export class Form extends React.Component {
  //stateを定義し、空の文字列で初期化している
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  //Formがsubmitされた時に呼ばれる関数
  submitForm(event) {
    event.preventDefault();
    //親から受け取ったpropsにonAddLangを追加する
    //Form.jsを呼ぶ時に、親コンポーネントからonAddLangという関数への参照を渡している
    //中身はtextというstate。これによって親コンポーネントにtextというstateを渡せる
    this.props.onAddLang(this.state.text);
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <h4>新しい言語を追加</h4>
        <form
          //eventを関数にちゃんと渡してあげる
          onSubmit={(e) => this.submitForm(e)}
        >
          <div>
            <input
              type="text"
              value={text}
              //textをeventのtargetのvalueで更新する
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <div>
              <button
              //ボタンを押すか、EnterでonSubmitが発火する
              >
                追加
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
