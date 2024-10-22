import { createContext } from "react";
import { doctors } from "../assets/assets";
import Appointments from "../pages/Appointments";
export const AppContext = createContext()

const AppContextProvider = (props)=> {
 

  const currencySymbol = 'ETB '

    const value ={
      doctors,
      currencySymbol
    }
    return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}

export default AppContextProvider