/* eslint-disable react/prop-types */
import { useState } from 'react'
// import { cilSettings, cilPenAlt } from '@coreui/icons'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from 'styled-components'
import Prompt from './prompt'

// eslint-disable-next-line react/prop-types
const Table = (props) => {
  const [block, setBlock] = useState(false)

  const Table = styled.table`
    margin-top: 50px;
    border: #ebedef !important;
    border-radius: 10px;
    background-color: #fff;

    .regular {
      border-bottom: 2px black solid;
      border-left: 2px black solid;
      border-right: 2px black solid;
    }
    .end {
      border-right: 2px black solid;
    }
    .bottom {
      border-bottom: 2px black solid;
    }
    svg {
      height: 35px;
      margin-left: 62px;
    }
  `
  const { Data } = props;
  return (
    <>
      {block === true ? <Prompt block={block} setBlock={setBlock} title={'Edit'} /> : ''}
      <Table>
        <thead>
          <tr>
            <th style={{ width: '200px', borderBottom: ' 2px black solid' }} scope="col">
              S No
            </th>
            <th style={{ width: '200px' }} className="regular" scope="col">
              Role
            </th>
            <th style={{ width: '200px' }} className="regular" scope="col">
              Status
            </th>
            <th style={{ width: '200px' }} className="regular" scope="col">
              Created by
            </th>
            <th style={{ width: '200px' }} className="regular" scope="col">
              Created Date
            </th>
            <th style={{ width: '200px' }} className="regular" scope="col">
              Action
            </th>
            <th style={{ width: '200px', borderBottom: ' 2px black solid' }} scope="col">
              Manage access
            </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <th scope="row" className={`${Data.length - 1 > index ? 'bottom' : 'end'}`}>
                {index + 1}
              </th>
              <td className={`${Data.length - 1 > index ? 'regular' : 'end'}`}>{item.roll}</td>
              <td className={`${Data.length - 1 > index ? 'regular' : 'end'}`}>{item.status}</td>
              <td className={`${Data.length - 1 > index ? 'regular' : 'end'}`}>{item.createdby}</td>
              <td className={`${Data.length - 1 > index ? 'regular' : 'end'}`}>{item.date}</td>
              <td className={`${Data.length - 1 > index ? 'regular' : 'end'}`}>
                <ModeEditOutlineRoundedIcon
                  className="search"
                  onClick={() => {
                    setBlock(!block)
                  }}
                />
              </td>
              <td className={`${Data.length - 1 > index ? 'bottom' : ''}`}>
                <SettingsIcon className="search" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Table