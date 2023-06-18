import { useState, createContext, useContext } from 'react'

export const UserContext = createContext()

function Component1() {
  const [user, setUser] = useState("buttfart mcjames")
  return (
    <UserContext.Provider value={user}>
      <h1>{`uh, ${user}?`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}

function Component2() {return (<><h2>Component2</h2><Component3 /></>)}
function Component3() {return (<><h3>Component3</h3><Component4 /></>)}
function Component4() {return (<><h4>Component4</h4><Component5 /></>)}
function Component5() {  const user = useContext(UserContext);
  return (<><h5>Component5</h5>
      <h2>{`Hello ${user} again!`}</h2>
</>)}

export default Component1