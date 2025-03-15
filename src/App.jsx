import { BrowserRouter as Router, Routes, Route } from "react-router"
import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"
import { FriendsPage } from "./pages/FriendsPage"
import { FriendsRequestsPage } from "./pages/FriendsRequestsPage"
import { PostPage } from "./pages/PostPage"
import { CreatePostPage } from "./pages/CreatePostPage"
import { NotFound } from "./pages/NotFound"


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth/login" element={<LoginPage/>}/>
        <Route path="/users/:id" element={<ProfilePage/>}/>
        <Route path="/users/:id/friends" element={<FriendsPage/>}/>
        <Route path="/friend-requests" element={<FriendsRequestsPage/>}/>
        <Route path="/posts/new" element={<CreatePostPage/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
