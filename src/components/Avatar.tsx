interface Props {
  className: string;
}

export const Avatar: React.FC<Props> = ({ className }) => {
  return (
    <img
      className={className}
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHcXrHcpdTdkg/profile-displayphoto-shrink_200_200/0/1650512380083?e=1666224000&v=beta&t=f2fu-5LUmyFal1kIyC37uIrzpha4hRLyAycT72OeV8g"
      alt="logo"
    />
  );
};
