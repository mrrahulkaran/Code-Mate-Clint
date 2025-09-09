import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Connections from "./components/Connections";
import Requests from "./components/Request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div data-theme='light'>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/connections' element={<Connections />} />
              <Route path='/requests' element={<Requests />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/signup' element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
