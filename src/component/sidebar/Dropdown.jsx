/* eslint-disable react/prop-types */
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import {
  Box, ListItemButton, ListItemIcon, ListItemText,
  //  ListItemButton,
  // ListItemIcon,
} from "@mui/material"
import Dropbox from "./Dropbox";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react"

const Dropdown = (props) => {
  const { data } = props;
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Box style={{backgroundColor:"#F7f7f7"}}>



        {data.map((item) =>( 
         <>
         {item.component === "NavItem" ? 
            <ListItemButton
            key={item.name}
            sx={{ py: 0, minHeight: 32 }}
            className="dash"
            // onClick={()=>navigate(item.to)}
          >
            <ListItemIcon >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name }
              primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
            />
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


/*

<ListItemButton
          alignItems="flex-start"
          onClick={() => setOpen(!open)}
          sx={{
            px: 3,
            pt: 2.5,
            pb: open ? 0 : 2.5,
            '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
          }}
        >

        //////map line
        <ListItemText
                  primary="Build"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
               ))} 
        </ListItemButton>

*/