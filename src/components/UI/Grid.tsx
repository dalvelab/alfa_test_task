import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
  colWidth?: string;
  rowWidth?: string;
}

export const Grid: React.FC<IProps> = (props) => {
  const { children, margin, padding, colWidth, rowWidth } = props;
  return (
    <div
      style={{
        display: "grid",
        margin,
        padding,
        gridTemplateColumns: colWidth,
        gridTemplateRows: rowWidth,
      }}
    >
      {children}
    </div>
  );
};
