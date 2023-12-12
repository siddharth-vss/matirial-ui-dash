import { styled } from 'styled-components'
import Poly1 from '../../../../assets/img/Vector.svg'
import Poly2 from '../../../../assets/img/Vector1.svg'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import InboxIcon from '@mui/icons-material/MoveToInbox';
const Cards = () => {
  const Box = styled.div`
    display: flex;
    width: 96%;
    justify-content: space-between;
  `
  const Card = styled.div`
    height: 185px;
    width: 350px;
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
      position:relative;
      color: #fff;
      font-size: 94px;
      margin-left: -119px;
      margin-top: 12px;
      top:-24px;
    }
    .svg1 {
      color: #288b23;
      font-size: 115px;
      margin-top: -5px;
      margin-left: -19px;
    }
    h4 {
      color: #fff;
      margin-left: -5px;
    }
  `
  const Box1 = styled.div`
    margin-top: -125px;
    margin-left: 250px;

    h3 {
      margin-left: -57px;
    }
  `
  const Box2 = styled.div`
    margin-top: -116px;
    margin-left: 250px;
    h3 {
      margin-left: -110px;
    }
  `
  const Box3 = styled.div`
    margin-top: -125px;
    margin-left: 250px;
    h3 {
      margin-left: -57px;
    }
  `
  return (
    <>
      <Box>
        <Card className="jpeg">
          <img src={Poly1} alt="polygon" className="poly1" />
          <ContentPasteIcon className="svg" />
          <Box1>
            <h1>144</h1>
            <h3>Open Tickets</h3>
            <h4>view list</h4>
          </Box1>
        </Card>
        <Card className="jpeg">
        <BookOutlinedIcon className="svg1" />
          <Box2>
            <h1>144</h1>
            <h3>In Progress Tickets</h3>
            <h4>view list</h4>
          </Box2>
        </Card>
        <Card className="jpeg">
          <img src={Poly2} alt="polygon" className="poly2" />
          <InboxIcon  className="svg"/>
          <Box3>
            <h1>144</h1>
            <h3>Close Tickets</h3>
            <h4>view list</h4>
          </Box3>
        </Card>
      </Box>
    </>
  )
}

export default Cards