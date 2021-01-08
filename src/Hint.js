import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const HintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const PopUpContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 140px;
`;

export const Hint = () => {
  const [showPopUp, setshowPopUp] = useState(false);
  const ref = useRef(null);

  //ref.currentが存在いていればfocusする
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  return (
    <HintContainer>
      <HintInner onClick={() => setshowPopUp(true)}>?</HintInner>
      {showPopUp && (
        <PopUpContainer
          ref={ref}
          onBlur={() => setshowPopUp(false)}
          //tabIndexを0にするとfocusできるようになる
          tabIndex={0}
        >
          言語の名前です
        </PopUpContainer>
      )}
    </HintContainer>
  );
};

export default Hint;
