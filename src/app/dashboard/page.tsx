import Navbar from "../components/navbar/page"
import PostForm from "../components/postForm/page"
import PostList from "../components/postlist/page"


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <PostForm />
      <PostList />
    </>
  )
}

export default Dashboard