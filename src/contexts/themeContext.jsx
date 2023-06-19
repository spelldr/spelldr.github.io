// https://dev.to/imshines/how-to-create-a-theme-toggle-in-react-using-context-api-3a5i
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

import  React  from  "react";
const  ThemeContext  =  React.createContext(false);
const  ThemeProvider  =  ({ children })  =>  {
    const  [toggleTheme, setToggleTheme]  =  React.useState(false);
    const ToggleThemeFunction =  ()  =>  {
    setToggleTheme(!toggleTheme);
};
return  (
    <ThemeContext.Provider value={{ toggleTheme, ToggleThemeFunction }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };