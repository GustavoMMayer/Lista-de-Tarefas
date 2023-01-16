import { useState } from 'react';
import * as C from './styles'
import {Item} from '../../types/Item'
import { ActionType } from '../../types/ActiontType';


type Props={
    item: Item,
    onChange: (id:number, done?:boolean, del?:boolean) => void;
    
}

export const ListItem =({item, onChange}:Props)=>{
      
    return(
        <C.Conatiner done={item.done}>
            <input 
            type='checkbox'
            checked={item.done} 
            onChange={e=> onChange(item.id, e.target.checked)}
            /> 

                     
            
            <C.RightSide>
            <label>{item.name} </label>
            <button onClick={e=> onChange(item.id, undefined ,true)}>🗑️</button>
            </C.RightSide>
        </C.Conatiner>
    )
};