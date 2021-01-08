import React, { useState } from "react";
import { Button } from "./components/Button";
import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";

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

export const Form = ({ onAddLang }) => {
  const [text, settext] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitForm = (event) => {
    //eventを受け取った時に、ページ遷移が走ってしまわないように
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <TabBodyContainer title="新しい言語の追加">
      <form
        //基本的にformの中ではonSubmitを使う（buttonに処理しない）
        onSubmit={submitForm}
      >
        <div>
          <Label>言語</Label>
          <Input
            //Reactでinputで反映する時の処理
            //buttonにonClick処理にしてしまうと、Enterに反応しない
            //onChange={(e) => settext(e.target.value)でeventを受け取れる
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
      {
        //showModalがtrueならFormModalを表示
        showModal && (
          <FormModal
            confirm={() => onAddLang(text)}
            cancel={() => setShowModal(false)}
          />
        )
      }
    </TabBodyContainer>
  );
};

export default Form;
