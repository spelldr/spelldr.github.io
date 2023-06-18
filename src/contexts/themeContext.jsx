// https://dev.to/imshines/how-to-create-a-theme-toggle-in-react-using-context-api-3a5i
import  React  from  "react";
// Context has been created
const  ThemeContext  =  React.createContext(false);
// Provider
const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
};
return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };