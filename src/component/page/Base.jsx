import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Home from '../page/contain/dashboard/Home'

const main = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default main
