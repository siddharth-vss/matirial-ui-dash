/* eslint-disable react/prop-types */
import { styled } from 'styled-components'
import Prompt from './prompt'
import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
const Tabs = () => {
  const Box = styled.div`
    margin-top: 50px;
    background-color: #f5f9ea;
    display: flex;
    justify-content: space-around;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 5px solid #ebefe0;
    width: 1360px;

    h4 {
      margin-top: 10px;
    }
    .active {
      color: #000 !important;
      background-color: transparent !important;
      padding-bottom: 35px;
      border-bottom: 3px solid #082464;
    }
  `
  const Tab = styled.div`
    background-color: #f5f9ea;
    display: flex;
    justify-content: space-around;
    height: 110px !important;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 1360px;

    .show {
      display: block;
    }
    .hide {
      display: none;
    }

    div {
      width: 1360px;
    }
    button {
      color: #fff;
      background-color: #0a2562;
      font-size: 17px;
      border: transparent;
      height: 55px;
      width: 125px;
      border-radius: 10px;
      margin-top: 27.5px;
      margin-left: 77.5px;
    }
    span {
      font-size: 26px;
    }
    .txt input {
      height: 40px;
      width: 250px;
      border: transparent;
      background-color: #fff;
      border-radius: 10px;
      margin-left: 300px;
      margin-top: 27.5px;
      padding-left: 10px;
    }
    .txt svg {
      height: 25px;
      margin-left: -35px;
    }
  `

  const [value, setValue] = useState('1')
  const [block, setBlock] = useState(false)
  console.log(block)
  return (
    <>
      <Box>
        <h4
          className={`${value === '1' ? 'active' : ' '}`}
          onClick={() => {
            setValue('1')
          }}
        >
          Role
        </h4>
        <h4
          className={`${value === '2' ? 'active' : ' '}`}
          onClick={() => {
            setValue('2')
          }}
        >
          Reporting Hierarchy
        </h4>
        <h4
          className={`${value === '3' ? 'active' : ' '}`}
          onClick={() => {
            setValue('3')
          }}
        >
          Employee
        </h4>
      </Box>
      <Tab>
        <div className={`${value === '1' ? 'show' : 'hide'}`}>
          <button
            onClick={() => {
              setBlock(!block)
            }}
          >
            <span>+</span> Add
          </button>
        </div>
        <div className={`${value === '1' ? 'show' : 'hide'} txt `}>
          <input type="text" name="search" id="txtbox" placeholder="Search" />
          <SearchIcon className="search" />
        </div>
      </Tab>
      {block === true ? <Prompt block={block} setBlock={setBlock} title={'Add'} /> : ''}
      {/* <Prompt block={block} setBlock={setBlock} title={'Add'} /> */}
    </>
  )
}

export default Tabs