import { BrowserRouter as Router, Routes, Route, Link } from "react-router"
import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"
import { FriendsPage } from "./pages/FriendsPage"
import { FriendsRequestsPage } from "./pages/FriendsRequestsPage"
import { PostPage } from "./pages/PostPage"
import { CreatePostPage } from "./pages/CreatePostPage"
import { NotFound } from "./pages/NotFound"

import './css/colors.css'
import './css/fonts.css'
import './css/buttons.css'
import './css/containers.css'

import './css/App.css'


import IconImage from './img/icon.svg'
import { ContextHeaderButton } from "./components/ContextHeaderButton"
import { NavigationalLayout } from "./layouts/NavigationalLayout"
import { UserContextProvider } from "./api/UserContext"

export default function App() {
  

  return (
    <UserContextProvider>
      <div className={"App vertical-list align-center"}>

        <Router>
          <header className="horizontal-list stretch align-center">
            <Link to="/" id="logo" >
              <img src={IconImage}/>
            </Link>
            <ContextHeaderButton/>
          </header>

          <Routes>
            <Route path="/" element={<NavigationalLayout children={<MainPage/>}/>}/>
            <Route path="/auth/login" element={<LoginPage/>}/>
            <Route path="/users/:id" element={<NavigationalLayout children={<ProfilePage/>}/>}/>
            <Route path="/users/:id/friends" element={<NavigationalLayout children={<FriendsPage/>}/>}/>
            <Route path="/friend-requests" element={<NavigationalLayout children={<FriendsRequestsPage/>}/>}/>
            <Route path="/posts/new" element={<NavigationalLayout children={<CreatePostPage/>}/>}/>
            <Route path="/posts/:id" element={<NavigationalLayout children={<PostPage/>}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
    </UserContextProvider>
  )
}
