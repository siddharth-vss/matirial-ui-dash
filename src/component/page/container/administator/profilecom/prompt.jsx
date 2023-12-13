/* eslint-disable react/prop-types */
import { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { addData } from '../../../../../slices/adminProfile'
// import { CFormInput, CFormLabel, CFormText } from '@coreui/react'
const Prompt = (...props) => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)

    const [input, setInput] = useState({
        roll: '',
        status: 'Deactive',
        createdby: 'Admin',
        date: '09/06/2023',
    })
    let { block, setBlock, title } = props[0]
    const Box = styled.div`
    .header {
      background-color: #4e9535;
      width: 700px;
      color: #fff;
      padding: 47px 0px 0px 47px;
    }
    .body {
      background-color: #fff;
      height: 348px;
      width: 746px;
      margin-top: -23px;
    }
    .flex {
      display: flex;
      justify-content: space-around;
    }
    .show {
      height: 500px;
      width: 700px;
    }
    .hide {
      height: 0px;
      width: 0px;
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
    .font {
      font-weight: 700;
    }
    #roleName {
      width: 300px;
    }
    .check {
      height: 33px;
      width: 33px;
      margin-top: 73px;
      margin-left: -91px;
    }
    .up {
      margin-top: -33px;
      margin-left: -45px;
    }
    .controll {
      margin-top: 67px;
      margin-left: -75px;
    }
    .denie {
      color: #000 !important;
      background-color: #fff;
      border: 2px solid;
    }
  `
    const onchange = (e) => {
        // setForm({ ...form, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const onsubmit = () => {
        console.log('hello', input)
        dispatch(addData({ ...input }))
        console.log('hello')
        setBlock(!block)
    }

    return (
        <Box
        style={{
          marginBottom : "50px",
          marginTop : "50px"
        }}
        >
            <Box className="header">
                <h1>{title} Role</h1>
            </Box>
            <Box className="body">
                <Box className="flex">
                    <Box>
                        <label
                            htmlFor="roleName"
                            className="font"
                            style={{ fontSize: '17px', marginTop: '50px' }}
                        >
                            Role Name
                        </label>
                        <br />
                        <input type="text" name="roll" value={input.roll} onChange={onchange} id="roleName" />
                    </Box>
                    <Box>
                        <input
                            type="checkbox"
                            onChange={() => {
                                if (check === true) {
                                    setInput({ ...input, status: 'Deactive' })
                                }
                                if (check === false) {
                                    setInput({ ...input, status: 'Active' })
                                }
                                setCheck(!check)
                                // console.log(check)
                            }}
                            // value={input.status}
                            name="status"
                            className="check"
                            checked={check}
                        />
                        <div className="font up">isActive</div>
                    </Box>
                </Box>
                <Box className="flex controll">
                    <button onClick={onsubmit}> Submit </button>
                    <button
                        className="denie"
                        onClick={() => {
                            setBlock(!block)
                        }}
                    >
                        Cancel
                    </button>
                </Box>
            </Box>
        </Box>
    )
}

export default Prompt