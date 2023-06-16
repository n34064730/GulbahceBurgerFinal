import MenuItem from "./details/MenuItem";
import "./MenuList.css";
const MenuList = (props) => {
  return (
    <div className={"menu"}>
      {props.menu_list.map((menu) => (
        <MenuItem key={Math.random()} li={menu} />
      ))}
    </div>
  );
};

export default MenuList;
