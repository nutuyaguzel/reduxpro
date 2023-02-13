import { bindActionCreators } from "@reduxjs/toolkit";
import { EKLE, TEMİZLE } from "../actions";
import { ISARETLE } from "../actions";

const INITIAL_STATE ={
    liste: [
        { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
        { id: 2, baslik: "Fatura ode", tamamlandi: true },
        {id: 3, baslik:"Çalış",tamamlandı:false}
      ]
    
    
}

export const reducer=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case EKLE:
            return {
                ...state,
                liste :[
                    ...state.liste,
                    {
                        id:state.liste.length + 1,
                        baslik:action.payload,
                        tamamlandı:false

                    }
                ]
            };

   case ISARETLE :
return{
                    ...state,
                    liste:state.liste.map(item=> item.id ===
                        action.payload ? {...item, tamamlandi:!item.tamamlandi}
                        
                        :item 
                        )
                  


                };

                case TEMİZLE:
                    return{
                        ...state,
                        liste:state.liste.filter(item=> item.tamamlandi === false)
                    }

            default:
                return state;
          
}}