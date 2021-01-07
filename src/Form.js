import React, { useState } from "react";

export const Form = () => {
  const [text, settext] = useState("");
  const submitForm = (event) => {
    //eventを受け取った時に、ページ遷移が走ってしまわないように
    event.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form
        //基本的にformの中ではonSubmitを使う（buttonに処理しない）
        onSubmit={submitForm}
      >
        <div>
          <input
            //Reactでinputで反映する時の処理
            //buttonにonClick処理にしてしまうと、Enterに反応しない
            //onChange={(e) => settext(e.target.value)でeventを受け取れる
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
