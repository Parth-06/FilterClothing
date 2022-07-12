export const cartReducer = (state, action)=>{
   
    switch(action.type){
       case "ADD_TO_CART":
        const one = {...state, cart: [...state.cart, {...action.payload, qty: 1}]};
        const cartvalue = { cart: [ {...action.payload, qty: 1}]};
        const prod_id = action.payload.id;
             const cartdataa =async ()=>{
              await fetch('/cartdata',{
                method: "POST",
                headers:{
                  "Content-Type" : "application/json"
                },
            
                body:JSON.stringify({
                  cartvalue, prod_id
                })
              });
              
            }
            cartdataa()
       return one 
  
       case "REMOVE_FROM_CART": 
       return{...state, cart: state.cart.filter((c)=> c.id !== action.payload.id),};
       case 'CHANGE_CART_QTY': 
       return{...state, cart:state.cart.filter((c)=>c.id===action.payload.id?(c.qty= action.payload.qty): c.qty )}
       case "ADD_TO_PDETAILS": 
       return{...state, details: [{...action.payload}]}
       default:
        return state
    }
}

export const productReducer = (state, action)=>{
    switch (action.type){
        case "SORT_BY_PRICE": 
        return{...state, sort: action.payload}
        case "FILTER_BY_STOCK":
        return{...state, byStock: !state.byStock};
        case "FILTER_BY_DELIVERY":
        return{...state, byFastDelivery: !state.byFastDelivery};
        case "FILTER_BY_RATING":
        return{...state, byRating: action.payload}; 
        case "FILTER_BY_SEARCH":
        return{...state, searchQuery : action.payload}
        case "CLEAR_FILTERS":
        return{  byStock: false,
            byFastDelivery: false,
            byRating: 0,
            searchQuery: ""}
    
        default:
             return state;
     }
}

export const initialstate = null;

 export const reducer = (state,action) => {
  if(action.type === "USER"){
    return action.payload;
  }
 return state;
}

