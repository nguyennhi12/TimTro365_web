import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/Home/Admin/HomeAdmin";
import HomeUser from "./components/Home/User/HomeUser";
import Login from "./components/Login/Login";
import LoginAdmin from "./components/Login/LoginAdmin";
import ViewRoom from "./components/ViewRoom/ViewRoom";
import DanhMucNew from "./components/DanhMucNew/DanhMucNew";
import Chatbox from "./components/Chatbox/Chatbox";
import Register from "./components/Register/Register";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import { SetSchedule } from "./components/SetSchedule/SetSchedule";
import Post from "./components/Post/Post";
import NewIDUser from "./components/Home/Admin/News/NewIDUser";
import SearchAll from "./components/Search/Search";
function App() {
  return (
    <Router>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/newiduser" element={<NewIDUser />} />
        {/* User */}
        {/* <Route path="/" element={<HomeUser />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/viewroom" element={<ViewRoom />} />
        <Route path="/category" element={<DanhMucNew />} />
        <Route path="/setschedule" element={<SetSchedule />} />
        <Route path="/chatbox" element={<Chatbox />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/post" element={<Post />} />
        <Route path="/searchall" element={<SearchAll />} />
      </Routes>
    </Router>
  );
}

export default App;
