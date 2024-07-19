import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import Checkout from './pages/Checkout';
function App() {

  return (
    <>
      <Header/>
      <div className="site_container">
        <Checkout/>
      </div>
    </>
  )
}

export default App
