
import { styled } from 'styled-components'
import Poly1 from '../../../../assets/img/Vector.svg'

import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Cards3 = () => {
  const Box = styled.div`
    display: flex;
    justify-content: space-around;
    color: #000;
    margin-top: 50px;
  `
  const Card = styled.div`
    height: 210px;
    width: 42%;
    position: relative;
    left: 60px;
    top: 40px;
    border-radius: 5px;

    .poly1 {
      margin-left: -70px;
      margin-top: -35px;
   
    }
    .poly2 {
      margin-left: -70px;
      margin-top: -35px;
    }
    .svg {
      overflow: hidden;
      color: #fff;
      font-size: 108px;
      margin-left: -128px;
      position: relative;
      margin-top: 14px;
      top: -21px;
    }
    .svg1 {
      color: #288b23;
      font-size: 180px;
      margin-top: 15px;
      margin-left: 15px;
    }
    h4 {
      color: #000;
    }
  `
  const Box1 = styled.div`
    margin-top: -125px;
    margin-left: 515px;

    h2 {
      margin-left: -78px;
    }
  `

  return (
    <>
      <Box>
        <Card className="jpeg3">
          <img src={Poly1} alt="polygon" className="poly1" />
          <ContentPasteIcon className="svg" />
          <Box1>
            <h1>144</h1>
            <h2>Open Tickets</h2>
            <h4>view list</h4>
          </Box1>
        </Card>
        <Card className="jpeg3">
          <img src={Poly1} alt="polygon" className="poly1" />
          <ContentPasteIcon className="svg" />
          <Box1>
            <h1>144</h1>
            <h2>Open Tickets</h2>
            <h4>view list</h4>
          </Box1>
        </Card>
      </Box>
    </>
  )
}

export default Cards3