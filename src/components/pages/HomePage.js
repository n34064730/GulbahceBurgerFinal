import NameBox from "../NameBox";
import MenuList from "../MenuList";

const menuList = [
  {
    address: require("../pictures/menu_pictures/cheeseburger.jpg"),
    name: "Cheeseburger",
    price: "70 TL",
    types: {
      sizes: ["No extra cheese (+0 TL)", "Add Extra Cheese (+20 TL)"],
      prices: [0, 20],
    },
  },
  {
    address: require("../pictures/menu_pictures/onion_rings.jpg"),
    name: "Onion Rings",
    price: "30 TL",
    types: {
      sizes: ["Single Portion (+0 TL)", "Double Portion (+15 TL)"],
      prices: [0, 15],
    },
  },
  {
    address: require("../pictures/menu_pictures/fries.jpg"),
    name: "French Fries",
    price: "25 TL",
    types: {
      sizes:["Small Size (+0 TL)", "Medium Size (+10 TL)", "Large Size (+20 TL)"],
      prices:[0,10,20]
    },
  },
  {
    address: require("../pictures//menu_pictures/chicken_burger.jpg"),
    name: "Chicken Burger",
    price: "60 TL",
    types: {},
  },
  {
    address: require("../pictures/menu_pictures/fizzy_drink.jpg"),
    name: "Fizzy Drink",
    price: "20 TL",
    types: {
      sizes:["Cola (+0 TL)", "Fanta (+0 TL)", "Sprite (+0 TL)"],
      prices:[0,0,0]
    },
  },
  {
    address: require("../pictures/menu_pictures/water.jpg"),
    name: "Water",
    price: "10 TL",
    types: {},
  },
  {
    address: require("../pictures/menu_pictures/beef_burger.jpg"),
    name: "Beef Burger",
    price: "90 TL",
    types: {},
  },
  {
    address: require("../pictures/menu_pictures/chicken_legs.jpg"),
    name: "Chicken Legs",
    price: "45 TL",
    types: {},
  },
  {
    address: require("../pictures/menu_pictures/ice_cream.jpg"),
    name: "Soft Serve Ice Cream",
    price: "15 TL",
    types: {
      sizes:[" Vanilla (+0 TL)", "Chocolate (+0 TL)", "Strawberry (+5 TL)", "Mint (+10 TL)"],
      prices:[0,0,5,10]
    },
  },
  {
    address: require("../pictures/menu_pictures/lemonade.jpg"),
    name: "Lemonade",
    price: "13 TL",
    types: {},
  },
  {
    address: require("../pictures/menu_pictures/pizza_slice.jpg"),
    name: "Pizza Slice",
    price: "50 TL",
    types: {},
  },
];

function HomePage() {
  return (
    <div>
      <NameBox />
      <MenuList menu_list={menuList} />
    </div>
  );
}

export default HomePage;
