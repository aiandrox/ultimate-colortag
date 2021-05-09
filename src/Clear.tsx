import { useState, useEffect } from "react";
import queryString from "query-string";

import { Box, Grid } from "@material-ui/core";
import ColorBox from "./components/ColorBox";
import Button from "./components/Button";

type ClearData = {
  questionColor: string;
  clearColor: string;
  count: number;
};

const Clear = () => {
  // const [clearData, setClearData] = useState<ClearData>();
  const [clearColor, setClearColor] = useState<string>();

  // const history = useHistory();

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    const data: ClearData = {
      questionColor: params.question as string,
      clearColor: params.clear as string,
      count: Number(params.count),
    };
    setClearColor(params.clear as string);
  }, []);

  const clickTwitterShare = () => {
    const params = queryString.parse(window.location.search);
    console.log(params);
    const message = "hoge";
    // const message = `${escape(questionColor)} に${
    //   clearData.per
    // }%25一致した${escape(clearData.color)}を見つけたよ！`;
    const url = `https://twitter.com/intent/tweet?text=%0A%0A${message}%0A&url=https://hoge.com&hashtags=アルティメットいろおに`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h1 style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>
        みぃつけた！
      </h1>
      {/* {clearData.count}回でClear!!
      <Box>
        一致度は<b>{clearData.per}%</b>
      </Box>
      <Box m="1rem">
        <Grid container justify="center">
          <Box>
            <p>問題</p>
            <ColorBox color={questionColor}></ColorBox>
          </Box>
          <Box width="1rem"></Box>
          <Box>
            <p>あなた</p>
            <ColorBox color={clearData.color}></ColorBox>
          </Box>
        </Grid>
      </Box> */}
      <Box padding={1}>
        {/* <Button onClick={firstLoad}>トップに戻る</Button> */}
        <Button onClick={clickTwitterShare}>Twitterでシェア</Button>
      </Box>
    </div>
  );
};

export default Clear;
