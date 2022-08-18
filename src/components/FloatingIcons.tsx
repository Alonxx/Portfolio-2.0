import React from "react";

interface Props {
  children: React.ReactNode;
}

export const FloatingIcons: React.FC<Props> = ({ children }) => {
  const [pageMovement, setPageMovement] = React.useState<{
    pageX: number;
    pageY: number;
  }>({ pageX: 0, pageY: 0 });

  onmousemove = (event) => {
    setPageMovement({ pageX: event.pageX, pageY: event.pageY });
  };

  return (
    <div className="relative">
      <img
        src={"images/react.png"}
        alt="react"
        style={{
          marginBottom: pageMovement.pageY * 0.01,
          marginLeft: pageMovement.pageX * 0.01,
          marginTop: -pageMovement.pageY * 0.01,
        }}
        className={
          "animate-floatLeft rotate-[-20deg] absolute h-24 bottom-[80%] md:h-40 left-[1rem] md:left-[13%] md:bottom-[70%] "
        }
      />
      <img
        src={"images/javascript.png"}
        alt="javascript"
        style={{
          marginBottom: pageMovement.pageY * 0.01,
          marginRight: -pageMovement.pageX * 0.01,
          marginTop: -pageMovement.pageY * 0.01,
        }}
        className="rotate-[20deg] absolute h-24 md:h-40 bottom-[80%] md:bottom-[70%] right-[1rem]  md:right-[14%] animate-floatRight  animation-delay-200"
      />
      <div>{children}</div>
      <img
        src={"images/html.png"}
        alt="html"
        style={{
          marginBottom: pageMovement.pageY * 0.01,
          marginLeft: pageMovement.pageX * 0.01,
          marginTop: -pageMovement.pageY * 0.01,
        }}
        className={
          "absolute h-20 md:h-32 animate-floatLeft rotate-[-20deg] opacity-90 animation-delay-300 left-[13%] bottom-[-4.5rem] md:bottom-[-70%]"
        }
      />
      <img
        src={"images/css3.png"}
        alt="css3"
        style={{
          marginBottom: pageMovement.pageY * 0.01,
          marginRight: -pageMovement.pageX * 0.01,
          marginTop: -pageMovement.pageY * 0.01,
        }}
        className="rotate-[20deg] absolute h-20 md:h-32 animate-floatRight opacity-90 animation-delay-600 bottom-[-4.5rem] md:bottom-[-70%] right-[8%] md:right-[16%]"
      />
    </div>
  );
};
