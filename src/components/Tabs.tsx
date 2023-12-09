import { useState } from 'react';
import { Box, Stack, Tabs, Tab, Fade } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CalculateIcon from '@mui/icons-material/Calculate';

import { Home, Setting } from '../pages';


 function TabPanel(props: {
  children?: React.ReactNode,
  index: number,
  value: number
}) {
  const { children, value, index, ...other } = props;
  
  return (
    <Fade 
      in={value === index}   
      timeout={300}
      easing={
        value === index ? 'ease-in' : 'ease-out'
      }
    >
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
        style={{
          display: value === index ? 'flex' : 'none',
          flexDirection:'column', 
          flexGrow:value === index ? 1 : 0, 
          overflow:'hidden',
        }}
    
      >
        { value === index ? <>{children}</> : null  }
      </div>
    </Fade >
  );
}

function AppTab() {
  const [ tab, setTab ] = useState(0);

  return (
    <Stack 
      position='relative'
      overflow='auto'
      height='100vh'
      py={2}
      sx={{
        overflowX:'hidden',
        background:theme=>theme.palette.background.default,
      }}
    >
      <TabPanel index={0} value={tab}>
        <Home />
      </TabPanel>
      <TabPanel index={1} value={tab}>
        <Setting />
      </TabPanel>
      <Box 
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          borderTop:theme=>`1px solid ${theme.palette.divider}`,
        }}
      >
        <Tabs
          value={tab}
          onChange={ 
            (event: React.SyntheticEvent, newValue: number)=> setTab(newValue) 
          }
        >
          <Tab icon={<CalculateIcon />} label="מחשבון" />
          <Tab icon={<SettingsIcon />} label="הגדרות" />
        </Tabs>
      </Box>
    </Stack>
  );
}


export default AppTab;
