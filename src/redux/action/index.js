import { INCREAMENT, DECREAMENT } from "./actionName";

export const countIn = (data)=>{
    return{
        type:INCREAMENT ,
        payload: data
    }
}

export const countDe = (data)=>{
    return{
        type:DECREAMENT ,
        payload: data
    }
}