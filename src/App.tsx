import React, {useCallback} from 'react';
import './App.css';

const Heading = ({title} : {title: string}) => <h2>{title}</h2>


/** MOE: 
 * Type '({ children }: { children?: ReactNode; }) => void' is not assignable to type 'FunctionComponent<{}>'.
   Type 'void' is not assignable to type 'ReactElement<any, any> | null
 const Box: React.FunctionComponent = ({children}) => {
  <div
  style={{
    padding: "1rem",
  }}>
    {children}
  </div>
}
 */

const Box: React.FunctionComponent = ({children}) => (
  <div
  style={{
    padding: "1rem",
    fontWeight: "bold",
    color: "#4287f5"

  }}>
    {children}
  </div>
)


// onClick? : Optional
// onClick?. : Optional chain
const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item:string) => void; // onClick is Optional
}> = ({items, onClick}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>  
        {item}
      </li>
    ))}
  </ul>
)


function App() {

  const onListClick = useCallback(
    (item: string) => {
      alert(item)
    },
    [], // dependency array
  )
  return (
    <div className="App">
      <Heading title="Introduction"/>
      <Box>Hello There</Box>
      <List items={["ayman", "sam", "altman"]} onClick={onListClick}/>
    </div>
  );
}

export default App;
