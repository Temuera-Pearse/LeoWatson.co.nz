import { Outlet } from 'react-router-dom'
import Topbar from '../Sidebar/Topbar'

function App() {
  return (
    <div>
      <Topbar />

      <div className="d-flex">
        <div className="flex-grow-1">
          <main className="flex-grow-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
