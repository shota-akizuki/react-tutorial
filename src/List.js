import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`;

const ListItem = styled.div`
  padding: 8px 16px;
  &:nth-child(n + 2) {
    border-top: 1px solid #d9dbde;
  }
`;

class List extends React.Component {
  componentWillMount() {
    console.log("List.js:componentWillMount");
  }
  //propsはrenderメソッドの中に書く
  render() {
    //langsは親から受け取る
    const { langs } = this.props;
    return (
      <Container>
        {langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>;
        })}
      </Container>
    );
  }
}
export default List;
