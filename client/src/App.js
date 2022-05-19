import 'bootstrap/dist/css/bootstrap.css';
import {Route,Routes} from 'react-router-dom'
import TopBar from './components/navbar/Navbar';
import SignUp from './pages/register/SignUp';
import SignIn from './pages/login/SignIn';
import Dashboard from './pages/main/dashboard';
import HomePage from './components/HomePage/Homepage';
import Book from './components/Items/book';
function App() {
  return (
   <div>
     <TopBar/>
     <Routes>
     <Route path="/"exact element = {<HomePage/>} />
     <Route path="/book"exact element = {<Book/>} />
      <Route path="/Register" exact element = {<SignUp/>}/>
      <Route path="/Login" exact element = {<SignIn/>}/>
      <Route path="/dashboard" exact element = {<Dashboard/>}/>
    </Routes>
   </div>
  );
}

export default App;
