import { createAction, props } from "@ngrx/store";
import { NumbersInterface } from "../interfaces/numbers.interface";

export const setData  = createAction('[EvenOrOdd Component] Set Data', props<{ payload: NumbersInterface }>());

export const showEven = createAction('[EvenOrOdd Component] Show Even');
export const showOdd = createAction('[EvenOrOdd Component] Show Odd');
