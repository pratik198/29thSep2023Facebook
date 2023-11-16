import Loginpage from "./Loginpage";
import "../Styles/App.css";
import Updatepassword from "./Updatepassword";
import CreatePage from "./CreatePage";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pratik from "./Route/Pratik";
import Main from "./Main/Main";
import SearchComponent from "./searchComponent";
import UserProfile from "./../Components/UserProfile/UserProfile";
import MyProfile from "./MyProfile/MyProfile";
import Commingsoon from './../Components/CommingSoon/Commingsoon'


function App() {
  return (
 
     <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/update" element={<Updatepassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Pratik />}>
          <Route path="/createpage" element={<CreatePage />} />
          <Route path="/profile" element={<MyProfile/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/main" element={<Main />} />
          <Route path="/search" element={<SearchComponent/>}/>
          <Route path="/commingsoon" element={<Commingsoon />}/>
          <Route path="/search" element={<SearchComponent />}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  
  );
}
export default App;
