/* eslint-disable react/prop-types */
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import {
  Box, ListItemButton, ListItemIcon, ListItemText,

} from "@mui/material"
import Dropbox from "./Dropbox";
import {  useNavigate } from "react-router-dom";
// import { useState } from "react"

const Dropdown = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Box style={{backgroundColor:"#F7f7f7"}}
      key={data.name}
      >

        

        {data.map((item) =>( 
         <>
         {item.component === "NavItem" ? 
            <ListItemButton
            key={item.name}
            sx={{ py: 0, minHeight: 32 }}
            className="dash"
            onClick={()=>
              navigate(item.to)
              // console.log(item.to)
            }
          >
            <ListItemIcon >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name }
              primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
            />
            {/* <Link to={item.to}>{item.name}</Link> */}
          </ListItemButton>
          :
          <Dropbox 
            name={item.name}
            data={item.items}
            icon={item.icon}  
          />
         }
            
         </>
        ))}




      </Box>
    </>
  )
}

export default Dropdown