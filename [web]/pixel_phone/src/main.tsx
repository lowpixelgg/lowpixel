import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Viewport } from './Viewport'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Viewport />
  </HashRouter>
)
