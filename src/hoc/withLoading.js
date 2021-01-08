import styled from "styled-components";
import React, { useEffect, useState } from "react";

const LoadDiv = styled.div`
  padding: 36px;
`;

//dataに値があるならWrappedComponentを返す
//そうでないなら、Loading中という画面を出す
export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setdata] = useState(null);

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

    const Loading = <LoadDiv>ロード中...</LoadDiv>;
    return data ? <WrappedComponent data={data} /> : Loading;
  };
};
