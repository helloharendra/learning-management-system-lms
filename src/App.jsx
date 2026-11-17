import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Player from './pages/Player'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="learn" element={<Player />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
