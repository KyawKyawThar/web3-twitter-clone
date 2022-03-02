import { Feed } from '../components/home/Feed'
import { SideBar } from '../components/Sidebar'

//
const Home = () => {
  return (
    <div className="flex h-screen w-screen select-none justify-center bg-[#15202b] text-white">
      <div className="flex w-2/3 max-w-[1400px] justify-between ">
        <SideBar />
        <Feed />
        <h1>RightBar</h1>
      </div>
    </div>
  )
}

export default Home
