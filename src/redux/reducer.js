import { DECREAMENT,INCREAMENT } from "./action/actionName";

const initial = [] 

const reducer = (state = initial , action)=>{
    switch (action.type){
        case DECREAMENT :
           if(state.length === 0){
               return[{
                count : 0
               }]
           }else{
               return [{
               count : state[0].count - 1
           }]}
        case INCREAMENT :
            if(state.length === 0){
                return[{
                 count : 0
                }]
            }else{
                return [{
                count : state[0].count + 1
            }]
        }
        default : return state
    }
}
export default reducer;