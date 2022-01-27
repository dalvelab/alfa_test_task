import { ReactNode } from "react";

import "./Container.scss";

interface IProps {
  children: ReactNode;
}

export const Container: React.FC<IProps> = (props) => {
  const { children } = props;
  return <div className="container__flex">{children}</div>;
};
