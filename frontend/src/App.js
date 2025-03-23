import './App.css'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
const App =()=>{
  return (
  <div>
   <Router>
   <Route path='/' exact >
 <Users/>
   </Route>
   <Route path='/new/place' exact >
 <NewPlace/>
   </Route>

   </Router>
  </div>
);
};

export default App;
