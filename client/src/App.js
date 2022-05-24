import 'bootstrap/dist/css/bootstrap.css';
import {Route,Routes} from 'react-router-dom'
import TopBar from './components/navbar/Navbar';
import SignUp from './pages/register/SignUp';
import SignIn from './pages/login/SignIn';
import Dashboard from './pages/main/dashboard';
import HomePage from './components/HomePage/Homepage';
import Book from './components/Items/book';
import UserDashboard from './pages/User/userDashboard'
import AdminDashboard from './pages/Admin/adminDashboard'
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import Profile from  './pages/User/profile'
import Items from  './pages/User/item'
import AddCollection from  './pages/User/Form/addCollection'
import AddTopics from  './pages/User/Form/addTopics';

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
      <Route path="/admin/dashboard" exact element = {<AdminRoute><AdminDashboard/></AdminRoute>}/>
      <Route path="/user/dashboard"  exact element = {<UserRoute><UserDashboard/></UserRoute>}/>
      <Route path="/user/items"  exact element = {<UserRoute><Items/></UserRoute>}/>
      <Route path="/user/profile"  exact element = {<UserRoute><Profile/></UserRoute>}/>
      <Route path="/user/addCollection"  exact element = {<UserRoute><AddCollection/></UserRoute>}/>
      <Route path="/user/addTopics"  exact element = {<UserRoute><AddTopics/></UserRoute>}/>

    </Routes>
   </div>
  );
}

export default App;
