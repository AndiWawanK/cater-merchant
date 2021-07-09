import React from "react";
import Regular from "./Regular";

const InputText = (props) => {
    switch(props.mode){
        case 'regular': 
            return <Regular {...props}/>
    }
}

export default InputText;