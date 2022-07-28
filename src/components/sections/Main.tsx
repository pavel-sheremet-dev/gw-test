interface IProps {
  children: React.ReactNode;
  classname?: string;
}

const Main = ({ children, classname }: IProps) => {
  return <main className={classname}>{children}</main>;
};

export default Main;
