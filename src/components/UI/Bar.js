import "./Bar.css";
const Bar = (props) => {
  const classes = "bar " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Bar;
