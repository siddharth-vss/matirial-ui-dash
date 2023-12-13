
import Cards from './Cards'
import Cards2 from './Cards2'
import Cards3 from './Cards3'
import Tickets from './Tickets'
import SearchIcon from '@mui/icons-material/Search';

import { styled } from 'styled-components'


const Container = () => {
    const Box = styled.div`
    // color: #fff;
    width: 100%;
    margin-top: 15px;
    background-color: #c5dd7d;
    border: 0.2px solid black;
    border-radius: 10px;
    height: 70px;
    display: flex;
    justify-content: space-around;

    .input {
      border-radius: 10px;
      height: 40px;
      width: 325px;
      margin-top: 15px;
      padding-left: 15px;
    }

    .flex {
      display: flex;
      align-items: center;
    }
    .flex svg {
      height: 30px;
      color: #fff !important;
      margin-left: -45px;
    }

    #box {
      font-size: 18px;
      border-radius: 10px;
      height: 40px;
      background-color: #072466;
      color: #fff;
    }
  `
  return (
    <>
    <Box>
      {/* <h1>Base</h1> */}
      <input type="text" className="input" placeholder="Start Date" id="1" />
      <input type="text" className="input" placeholder="End Date" id="2" />
      <div className="flex">
        <input type="text" name="search" id="box" placeholder="Search" />
        <SearchIcon className="search" />
      </div>
    </Box>
    <Cards />
    <Tickets />
    <Cards2 />
    <Cards3 />
  </>
  )
}

export default Container