import { useState, useMemo }  from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useSetting } from '../context/setting';
import AppTable from '../components/Table';



export default function Home() {
  const { setting } = useSetting();
  const [ width, setWidth ] = useState<number>(1);
  const [ height, setHeight ] = useState<number>(1);

  const rows1=useMemo<Array<{name:string, w:number, h:number}>>(()=>{
    return [
      {
        name:'תוספת קבועה', 
        w: setting.fixed_addition.width, 
        h: setting.fixed_addition.height
      },
      {
        name:'מידות סופיות', 
        w: width + setting.fixed_addition.width, 
        h: height + setting.fixed_addition.height
      },
      {
        name:'מידות לחישוב תריס ', 
        w: width-0.1, 
        h: height-0.15
      },
    ]
  },[ width, height, setting ]);

  const rows2=useMemo<Array<{name:string, w:number, h:number}>>(()=>{
    return [{
      name:'מידת אורך ל U', 
      h: height-0.2,
      w: 0, 
    }]
  },[height]);

  const rows3=useMemo<Array<{name:string, w:number, h:number}>>(()=>{
    return [
      {
        name:'ארגז', 
        h: setting.box,
        w: setting.box * (width + setting.fixed_addition.width), 
      },
      {
        name:'בקים', 
        h: setting.bekim,
        w: setting.bekim * 1, 
      },
      {
        name:'Ux2', 
        h: setting.ux2,
        w: (setting.ux2 * (height-0.2)) * 2
      },
      {
        name:'וול', 
        h: setting.vol,
        w: setting.vol * (width + setting.fixed_addition.width)
      },
      {
        name:'מנוע', 
        h: setting.engine,
        w: setting.engine * 1
      },
      {
        name:'תריס אור', 
        h: setting.trisor,
        w: setting.trisor * (width - 0.1) * (height-0.15)
      },
    ]
  },[ width, height, setting ])
  return (
    <Stack flexGrow={1} overflow='hidden' >
      <Box
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          boxShadow:theme=>theme.shadows[1],
          py:2,
        }}
      >
        <Typography variant='h4' color='text.primary' textAlign='center'>
          מחשבון
        </Typography>
      </Box>
      <Stack flexGrow={1} overflow='auto' mt={2}>
        <AppTable
          header={['','גובה', 'רוחב']}
          rows={rows1}
          inputs={{
            onChangeWidth: e => setWidth(e),
            onChangeHeight: e => setHeight(e),
            w: width,
            h: height,
          }}
        />
        <Stack sx={{background:'#f0f0f0'}}>
          <AppTable
            header={[]}
            rows={rows2}
            notDisplayZero
          />
          <AppTable
            header={['הרכב מכלול', '', '']}
            rows={rows3}
            notDisplayZero
          />
        </Stack>
        <Box 
          display='flex' 
          alignItems='center' 
          columnGap={3} 
          p={1} 
          sx={{background:theme=>theme.palette.success.light}}
        >
          <Typography variant='body1' color='text.primary'>
            סה"כ:
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {rows3.reduce((acc, x)=>acc+x.w, 0).toFixed(2)}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}