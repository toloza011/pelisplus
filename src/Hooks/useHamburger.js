import React,{useState} from 'react';

export const useHamburger = (estado) => {
     const [hamburger, sethamburger] = useState(estado);
    
     
     const openMenu  = () => {
        if(!hamburger){
            console.log("El menu esta cerrado");
            sethamburger(true)
        }else{
           console.log("El menu esta abierto");
            sethamburger(false)
        }
     }

     return [
         hamburger,
         openMenu
    ]

}
 
