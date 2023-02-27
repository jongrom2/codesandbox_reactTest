export const ColoredMessage = ({ color, children }) => {
  //Props 분할 대입
  const contentStyle = {
    color, //props. 불필요, 생략 표기법 사용가능
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
