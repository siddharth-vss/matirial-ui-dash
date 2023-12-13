import Sidebar from './sidebar/sidebar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from "./component/page/container/dashboard/Home"
import Profile from "./component/page/container/administator/Profile"
const App = () => {
  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Sidebar/>
          }>
             <Route path="" element={<Home />}/>
             < Route path='administator/profile' element={<Profile />}/>
             < Route path='administator/admin' element={<h1>admin</h1>}/>
             < Route path='administator/contractcycle' element={<h1>contractcycle</h1>}/>
             < Route path='administator/contracttype' element={<h1>contracttype</h1>}/>
             < Route path='administator/mail' element={<h1>mail</h1>}/>
             < Route path='administator/expense' element={<h1>expense</h1>}/>
             < Route path='administator/pmcycle' element={<h1>pmcycle</h1>}/>
             < Route path='administator/product' element={<h1>product</h1>}/>
             < Route path='administator/feedback' element={<h1>feedback</h1>}/>
             < Route path='administator/ticket' element={<h1>ticket</h1>}/>
             < Route path='administator/customertype' element={<h1>customertype</h1>}/>
             <Route path='customers' element={} />
           
           
           
           
           </Route>
        </Routes>
      </BrowserRouter>
  
      
    </>
  )
}

export default App
