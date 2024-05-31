import { Outlet } from "react-router-dom"
import Nav from './componets/NavTabs'
import Footer from "./componets/Footer";
import './css/App.css'

function App() {
return (
  <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
  );
}

export default App
