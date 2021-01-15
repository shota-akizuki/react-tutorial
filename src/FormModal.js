import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Modal from "./components/modal";
import Button from "./components/Button";
import { ThemeContext, THEMES } from "./contexts/ThemeContext";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) =>
    theme === THEMES.dark ? "2px solid white " : "solid"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export default class FormModal extends Component {
  render() {
    const { cancel, confirm } = this.props;
    return (
      <div>
        <Modal>
          <ThemeContext.Consumer>
            {([theme]) => (
              <Container theme={theme}>
                <div>本当に作成しますか？</div>
                <ButtonWrapper>
                  <Button onClick={cancel}>Cancel</Button>
                  <Button onClick={confirm}>Ok</Button>
                </ButtonWrapper>
              </Container>
            )}
          </ThemeContext.Consumer>
        </Modal>
      </div>
    );
  }
}
