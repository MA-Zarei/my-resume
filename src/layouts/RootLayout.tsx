import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout