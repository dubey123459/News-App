
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  
 
  Route,
  Routes
} from "react-router-dom";


// import Drawer from './component/Drawer';
// import Drawer from './component/Drawer';

function App() {
  
  const pageSize = 5;
  return (
    <div className='container2'>
      
      <Navbar  />
      {/* <Drawer/> */}
      
        <Routes>  
        <Route path='/'   element={<News key="general" pageSize="5" country="in" category="general"/>} />
           <Route path='/general'   element={<News key="general" pageSize="5" country="in" category="general"/>} />
          <Route path='/business'  element= {<News key="business" pageSize="5" country="in" category="business"/>}/>
          <Route path='/entertainment'  element={<News key="entertainment" pageSize="5" country="in" category="entertainment"/>}/>
          <Route path='/health'  element={<News key="health" pageSize="5" country="in" category="health"/>}/>
          <Route path='/science'  element={<News key="science" pageSize="5" country="in" category="science"/>}/>
          <Route path='/sports'  element={<News key="sports" pageSize="5" country="in" category="sports"/>}/>
          <Route path='/technology'   element={<News key="technology" pageSize="5" country="in" category="technology"/>}/>
          </Routes>
       

          
          
   {/* <Drawer/> */}
      
    </div>
  );
}

export default App;
