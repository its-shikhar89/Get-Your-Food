import { useReducer } from "react";
import { createContext } from "react"

//Context Created
export const DishList = createContext({
  noOfItems: 0,
  dishList: {},
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
});

const DEFAULT_DISH_LIST = {
  SOUP: [
    {
      id: "101",
      name: "Tomato Dhaniya Shorba",
      content: "A tangy and flavorful tomato soup infused with the freshness of coriander leaves, perfect for a light and refreshing start to your meal.",
      price: "125",
    },
    {
      id: "102",
      name: "Veg Hot & Sour",
      content: "A spicy and tangy soup made with mixed vegetables, vinegar, soy sauce, and a hint of chili for a bold flavor kick.",
      price: "140",
    },
    {
      id: "103",
      name: "Veg Sweet Corn",
      content: "A comforting and mildly sweet soup made with fresh corn kernels and vegetables, ideal for a soothing experience.",
      price: "140",
    },
    {
      id: "104",
      name: "Spinach Soup",
      content: "A creamy and nutritious soup made with fresh spinach, providing a mild and smooth texture with earthy flavors.",
      price: "140",
    },
    {
      id: "105",
      name: "Carrot Ginger Soup",
      content: "A flavorful, slightly spicy soup made with carrots and fresh ginger, creating a perfect balance of sweetness and warmth.",
      price: "140",
    },
    {
      id: "106",
      name: "Lentil Soup",
      content: "A protein-packed, heartwarming soup made with lentils and spices, offering a satisfying and healthy option.",
      price: "125",
    },
  ],

  MAIN_COURSE: [
    {
      id: "201",
      name: "Dal Makhani",
      content: "A rich and creamy dish made with whole black lentils, slow-cooked to perfection and finished with butter and cream for a smooth texture.",
      price: "309",
    },
    {
      id: "202",
      name: "Aloo Jeera",
      content: "A simple yet flavorful dish made with potatoes cooked with cumin seeds, giving it a light and aromatic flavor.",
      price: "260",
    },
    {
      id: "203",
      name: "Aloo Gobhi",
      content: "A comforting dish made with potatoes and cauliflower, cooked in a mild, spiced curry that is both wholesome and satisfying.",
      price: "260",
    },
    {
      id: "204",
      name: "Kadhai Paneer",
      content: "Paneer cooked in a thick, flavorful gravy with bell peppers, onions, and traditional spices, served in a wok (kadhai) for an authentic taste.",
      price: "299",
    },
    {
      id: "205",
      name: "Hyderabadi Paneer",
      content: "Soft paneer cubes cooked in a flavorful, spiced gravy inspired by the rich flavors of Hyderabad.",
      price: "299",
    },
    {
      id: "206",
      name: "Gobhi Masala",
      content: "Cauliflower cooked in a spiced, tangy gravy, offering a deliciously aromatic dish that pairs well with rice or bread.",
      price: "270",
    },
    {
      id: "207",
      name: "Extra Veg Gravy",
      content: "An additional serving of vegetable-based gravy, perfect for enhancing the richness of any dish.",
      price: "130",
    },
    {
      id: "208",
      name: "Matar Mushroom",
      content: "A flavorful curry made with tender mushrooms and peas cooked in a mildly spiced, rich gravy",
      price: "299",
    },
    {
      id: "209",
      name: "Mushroom Do Pyaza",
      content: "Mushrooms cooked in a spicy, tangy gravy with double the amount of onions, giving it a deliciously robust flavor.",
      price: "289",
    },
    {
      id: "210",
      name: "Mix Vegetable",
      content: "A medley of fresh seasonal vegetables cooked in a flavorful, mildly spiced gravy, offering a healthy and hearty dish.",
      price: "280",
    },
  ],

  ASSORTED_BREADS: [
    {
      id: "301",
      name: "Tandoori Atta Butter Roti",
      content: "Soft and warm whole wheat roti, baked in a traditional tandoor and brushed with butter for a rich and flavorful taste.",
      price: "25",
    },
    {
      id: "302",
      name: "Tandoori Atta Roti",
      content: "Whole wheat roti made in the tandoor, offering a smoky flavor and a slightly crispy texture.",
      price: "20",
    },
    {
      id: "303",
      name: "Aloo Paratha",
      content: "A stuffed flatbread filled with spiced mashed potatoes, rolled and cooked on a griddle, served with curd or pickle for a traditional taste.",
      price: "70",
    },
    {
      id: "304",
      name: "Garlic Naan",
      content: "Soft and fluffy naan bread infused with garlic, baked in the tandoor, offering a flavorful accompaniment to curries and gravies.",
      price: "65",
    },
    {
      id: "305",
      name: "Plain Naan",
      content: "Soft, fluffy naan made from refined flour, baked in the tandoor, perfect for pairing with a variety of dishes.",
      price: "40",
    }, {
      id: "306",
      name: "Butter Naan",
      content: "A soft, pillowy naan brushed with butter, making it the perfect accompaniment to gravies and curries.",
      price: "60",
    },
  ],

  SPECIAL_OFFERS: [

    {
      id: "401",
      name: "Da Crust Combo",
      content: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "499",
    },
    {
      id: "402",
      name: "Family Meal",
      content: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "399",
    },
  ],
};

//Initial State
const INITIAL_STATE = {
  dishList: DEFAULT_DISH_LIST,
  cart: [],
  noOfItems: 0,
};

//Reducer Function
const dishListReducer = (state, action) => {
  const { cart } = state;
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemExists = cart.find(cartItem => cartItem.id === action.payload.id);
      if (itemExists) {
        //Increaing quantity of the existing item
        const updatedCart = cart.map(cartItem =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        return {
          ...state,
          cart: updatedCart,
          noOfItems: state.noOfItems + 1,
        };
      }

      console.log("Adding to cart: ", cart);
      //Adding new item to the cart if doesn't exist
      return {
        ...state,
        cart: [...cart, { ...action.payload, quantity: 1 }],
        noOfItems: state.noOfItems + 1,
      };
    }

    case "REMOVE_FROM_CART": {
      const itemToRemove = cart.find((cartItem) => cartItem.id === action.payload);
      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          //Decrease quantity of the item
          const updatedCart = cart.map((cartItem) =>
            cartItem.id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
          return {
            ...state,
            cart: updatedCart,
            noOfItems: state.noOfItems - 1,
          };
        }
        // Remove item completely if quantity is 1
        const updatedCart = cart.filter((cartItem) => cartItem.id !== action.payload);
        return {
          ...state,
          cart: updatedCart,
          noOfItems: state.noOfItems - 1,
        };
      }
      return state;
    }
    default:
      return state;
  }
};


//Provider Component
const DishListProvider = ({ children }) => {
  const [state, dispatchDishList] = useReducer(dishListReducer, INITIAL_STATE);

  const addToCart = (dish) => {
    dispatchDishList({
      type: "ADD_TO_CART",
      payload: dish,
    });
  };

  const removeFromCart = (dishId) => {
    dispatchDishList({
      type: "REMOVE_FROM_CART",
      payload: dishId,
    })
  };

  const { noOfItems, cart, dishList } = state;

  return <DishList.Provider value={{
    noOfItems,
    cart,
    dishList,
    addToCart,
    removeFromCart,
  }}>
    {children}
  </DishList.Provider>
}
export default DishListProvider;



