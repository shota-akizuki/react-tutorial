import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { TabBodyContainer } from "./components/tab-body-container";

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`;

//()で既存のコンポーネントを拡張する
const FormButton = styled(Button)`
  width: 120px;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

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
      <TabBodyContainer title="新しい言語を追加">
        <form
          //eventを関数にちゃんと渡してあげる
          onSubmit={(e) => this.submitForm(e)}
        >
          <div>
            <Label>言語</Label>
            <Input
              type="text"
              value={text}
              //textをeventのtargetのvalueで更新する
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <ButtonContainer>
              <FormButton
              //ボタンを押すか、EnterでonSubmitが発火する
              >
                追加
              </FormButton>
            </ButtonContainer>
          </div>
        </form>
      </TabBodyContainer>
    );
  }
}

export default Form;
