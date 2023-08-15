import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Prince",
        email:"prince@example"
    },

});

export default UserContext