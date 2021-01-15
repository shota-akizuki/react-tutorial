import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const LoadingDiv = styled.div`
  height: 100%;
  padding: 36px;
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const withLoading = (WrappedComponent, fetchData) => {
  class HOC extends React.Component {
    static contextType = ThemeContext;
    constructor(props) {
      super(props);
      this.state = { data: null };
    }

    componentDidMount() {
      this.fetch();
    }
    async fetch() {
      const data = await fetchData();
      this.setState({ data });
    }

    render() {
      const { data } = this.state;
      const [theme] = this.context;
      const Loading = <LoadingDiv theme={theme}>ロード中...</LoadingDiv>;
      return data ? <WrappedComponent data={data} /> : Loading;
    }
  }
  return HOC;
};
