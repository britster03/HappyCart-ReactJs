export const initialState ={
    basket:[],
    user:null,
};

//Selector
export const getBasketTotal = (basket) =>basket?.reduce((amount,item)=>item.price+amount,0);

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        case 'REMOVE_FROM_BASKET':
          const index=state.basket.findIndex((basketItem)=> basketItem.title === action.title
          );
        let newBasket=[...state.basket];
        if(index>=0){
            newBasket.splice(index, 1);
        }else{
          console.warn(`can't remove product of title ${action.title} as it is not in basket`)
        }
        return{
          ...state,
          basket:newBasket
        }
        case "SET_USER":
          return {
            ...state,
            user: action.user
          }


        }
  };
  
  export default reducer;