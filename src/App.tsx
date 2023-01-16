import React, {useEffect, useState, SetStateAction} from "react";
import * as C from './App.styles'
import { AddArea } from "./Components/AddArea";
import { ListItem } from "./Components/ListItem";
import {Item} from './types/Item';
import {ActionType} from './types/ActiontType';

const App = () =>{
 

  const [list, setList] = useState<Item[]>([
    {id: 123, name: 'comprar Pão', done: false},
    {id: 12, name: 'comprar Leite', done: true}
  ]);

 
  

  const handleAddTask = (taskName:string)=>{
    let newList = [...list];
    newList.push({
      id:list.length+1,
      name:taskName,
      done:false
    })
    setList(newList);
  }

  const handleTaskChange =(id:number, done?: boolean, del?:boolean)=>{
    let newList =[...list];
    console.log(id, done, del)
    for(let i in newList){
      if(del){
        if(newList[i].id===id){
          newList.splice(parseInt(i),1);
        }

      }else
      if(newList[i].id === id && done!== undefined){
        newList[i].done=done;
      }
    }
    setList(newList);
  }

  return(
    <C.Conatiner>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter ={handleAddTask} />
        
        {list.map((item, key)=>(
          <ListItem 
          key={key} 
          item={item}
          onChange={handleTaskChange}
          />
          
        ))}
        
      </C.Area>
    </C.Conatiner>
  )
}


export default App;