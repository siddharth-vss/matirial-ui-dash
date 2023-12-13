
import { styled } from 'styled-components'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const button = () => {
  const Box = styled.div`
    // background-color: red;
    width: 1360px;
    margin-top: 45px;
  `
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const Button = styled.button`
    background-color: #a0c037;
    color: #fff;
    border-radius: 10px;
    width: 80px;
    margin-left: 12px;
    font-size: 20px;
    border: transparent;
  `
  const Button2 = styled.button`
    background-color: #052666;
    color: #fff;
    border-radius: 10px;
    width: 320px;
    margin-left: 12px;
    font-size: 20px;
    border: transparent;

    svg {
      font-size: 30px;
      height: 27px;
      color: #fff !important;
      position: relative;
      top: 6px;
  
    }
  `

  return (
    <Box>
      <FlexBox>
        <Flex>
          <Button>CSV</Button>
          <Button>Excel</Button>
          <Button>PDF</Button>
          <Button>Print</Button>
        </Flex>
        <Flex>
          <Button2>
            <UploadFileIcon />
            Import Manage Profile
          </Button2>
          <Button2>
            <CloudDownloadIcon />
            Sample Download Manage Profile
          </Button2>
        </Flex>
      </FlexBox>
    </Box>
  )
}

export default button