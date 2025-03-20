import { BrowserRouter as Router, Routes, Route } from "react-router"
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

export default function App() {

  return (
      <div className={"App vertical-list align-center"}>
        <header className="horizontal-list stretch align-center">
          <img id="logo" src={IconImage}/>
          <ContextHeaderButton/>
        </header>
        <Router>
              <Routes>
                <Route path="/" element={<NavigationalLayout><MainPage/></NavigationalLayout>}/>
                <Route path="/auth/login" element={<LoginPage/>}/>
                <Route path="/users/:id" element={<ProfilePage/>}/>
                <Route path="/users/:id/friends" element={<FriendsPage/>}/>
                <Route path="/friend-requests" element={<FriendsRequestsPage/>}/>
                <Route path="/posts/new" element={<CreatePostPage/>}/>
                <Route path="/posts/:id" element={<PostPage/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Router>
      </div>
  )
}
