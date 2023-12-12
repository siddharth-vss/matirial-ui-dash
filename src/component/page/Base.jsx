import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Home from '../page/contain/dashboard/Home'

const main = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
           <Route path="/administator">
             <Route path='/' element={<h1>Not Found</h1>}/>
             < Route path='/profile' element={<h1>Not Found</h1>}/>
             < Route path='/admin' element={<h1>Not Found</h1>}/>
             < Route path='/contractcycle' element={<h1>Not Found</h1>}/>
             < Route path='/contracttype' element={<h1>Not Found</h1>}/>
             < Route path='/mail' element={<h1>Not Found</h1>}/>
             < Route path='/expense' element={<h1>Not Found</h1>}/>
             < Route path='/pmcycle' element={<h1>Not Found</h1>}/>
             < Route path='/product' element={<h1>Not Found</h1>}/>
             < Route path='/feedback' element={<h1>Not Found</h1>}/>
             < Route path='/ticket' element={<h1>Not Found</h1>}/>
             < Route path='/customertype' element={<h1>Not Found</h1>}/>
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default main
