/* eslint-disable react/prop-types */
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Dropbox = (props) => {
    const [open , setOpen] = useState(false);

    const navigate = useNavigate();

    const { data, name ,icon } = props;
    const navigationfunction = (path) =>{
         console.log(JSON.stringify(path))
         redirect(path);
         navigate(path);
    }
    // console.log(data.name)
  return (
    <Box
    
    key={name}
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open) }
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                      {icon}
                    </ListItemIcon>
                <ListItemText
                  primary={ name }
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
                    color: 'black',
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
                    key={item.name}
                    sx={{ py: 0, minHeight: 32,  }}
                    onClick={()=>navigationfunction(item.to)}
                  >
                    
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
  )
}

export default Dropbox
