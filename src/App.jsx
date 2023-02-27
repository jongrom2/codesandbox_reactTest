import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  console.log("렌더링");
  //State 정의
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };
  return (
    <>
      {console.log("TEST")}
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘지내시죠?</ColoredMessage>
      <ColoredMessage color="grey">잘지냅</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <CssModules></CssModules>
      <StyledJsx></StyledJsx>
    </>
  );
};
