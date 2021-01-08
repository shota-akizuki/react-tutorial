import styled from "styled-components";
import React from "react";
const Container = styled.div`
  padding: 14px 64px;
`;

export class TabBodyContainer extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <Container>
        <h4>{title}</h4>
        {children}
      </Container>
    );
  }
}
