import { Comic } from './components/home/home'
import { Router } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='Comic-home'>
          <Comic />
        </div>
      </Router>
    </>
  )
}