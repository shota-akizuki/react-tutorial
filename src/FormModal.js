import React from "react";
import { Modal } from "./components/modal";
import styled from "styled-components";
import { Button } from "./components/Button";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 64px;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const FormModal = ({ confirm, cancel }) => {
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>Ok</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};
