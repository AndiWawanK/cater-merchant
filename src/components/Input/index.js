import React from "react";
import Regular from "./Regular";

const Input = (props) => {
    switch(props.mode){
        case 'regular': 
            return <Regular {...props}/>
    }
}

export default Input;