
import styled from 'styled-components'
import ticket from '../../../../assets/img/dashicons_tickets-alt.svg'

const Tickets = () => {
  const Box = styled.div`
    width: 100%;
    height: 120px;
    background-color: #ffc86c;
    margin-top: 70px;
    display: flex;
    align-items: center;

    h1 {
      margin-left: 88px;
    }
    .ticsvg {
      margin-left: 67%;
      margin-top: -30px;
    }
  `

  return (
    <>
      <Box>
        <h1>Total Tickets &nbsp;&nbsp;- &nbsp;&nbsp; 888721 </h1>
        <img src={ticket} alt="ticket" className="ticsvg" />
      </Box>
    </>
  )
}

export default Tickets