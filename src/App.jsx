import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './styles/Header.scss'
import './styles/colors.scss'
import './styles/home.scss'
import './styles/App.css'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/service.scss'

import Contact from './components/Contact'
import Service from './components/Service'

import './styles/mediaquery.scss'

function App(){

  return(
<>
    
<Router>
<Header />

<Routes>
 <Route exact path="/" element={<Home />} />
 <Route exact path="/contact" element={<Contact />} />
 <Route exact path="/service" element={<Service />} />
</Routes>
<Footer />
      </Router>
</>
  )
}

export default App;