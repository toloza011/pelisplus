import React, { useState } from 'react';

const useUser = (user) => {
    const [authUser,setAuth] = useState(user);

    console.log("El usuario recibido en el customHooks es: ");
    console.log(authUser);
     return[
        authUser
     ]
    
}
 
export default useUser;