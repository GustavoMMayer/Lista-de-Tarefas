import styled from "styled-components";
type ConteinerProps={
    done:boolean
}

export const Conatiner = styled.div(({done}:ConteinerProps)=>(
`
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
     width:25px;
     height: 25px;
     margin-right: 10px;
    
    }


    label{
        color:#ccc;
        text-decoration: ${done ? 'line-through':'initial'};
        font-size:17px;
    }
    
`
));

export const RightSide =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button{
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: transparent;
        border: 2px solid #aaa;
        padding: 2px;
        
    }
`