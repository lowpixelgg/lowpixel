import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom"

import App from "../App"
import { Document } from "../pages/Document"

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/document" element={ <Document /> }></Route>
      </Routes>
    </HashRouter>
  )
}