import styled, { ThemeContext } from "styled-components";
import React, { useEffect, useState, useContext } from "react";

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

//dataに値があるならWrappedComponentを返す
//そうでないなら、Loading中という画面を出す
export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setdata] = useState(null);
    const [theme] = useContext(ThemeContext);

    //Mountingされた時にデータをfetchする

    //useEffectはMountingとUpdating時に発火する関数
    //第二引数に空の配列を渡すとMountingの時だけ発火する
    //つまり、配列に入ってる変数のいずれかが変更されたら発火する
    useEffect(() => {
      fetch();
    }, []);

    //dataをsetdataする
    const fetch = async () => {
      const data = await fetchData();
      setdata(data);
    };

    const Loading = <LoadDiv theme={theme}>ロード中...</LoadDiv>;
    return data ? <WrappedComponent data={data} /> : Loading;
  };
};
