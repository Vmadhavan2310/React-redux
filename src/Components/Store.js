import { configureStore } from '@reduxjs/toolkit';
import CakeReducer from './Cake/CakeReducer';
import IceCreamReducer from './IceCream.js/IceCreamReducer';
export const Store=configureStore({
    reducer:{
        Cake:CakeReducer,
        Ice:IceCreamReducer
    }
})