import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';


type AppTableProps = {
  header:Array<string>,
  notDisplayZero?:boolean
  rows:Array<{
    name:string,
    w:number | undefined,
    h:number | undefined
  }>,
  inputs?:{
    onChangeWidth: (w:string | undefined) => void,
    onChangeHeight: (h:string | undefined ) => void
    w:string,
    h:string
  }
}

export default function AppTable({rows, header, inputs, notDisplayZero }: AppTableProps) {
  return (
    <TableContainer>
      <Table size="small" >
        <TableHead>
          <TableRow>
            {header.map((x,i)=>(
              <TableCell key={i} align={i!==0 ? "center" : "right"}>
                {x ? (
                  <Typography variant='body1' color='text.primary' fontSize={16} fontWeight={600}>
                    {x}
                  </Typography> 
                ) : null }
              </TableCell> 
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {inputs ? (
            <TableRow>
            <TableCell component="th" scope="row"  align="right" >
              <Typography variant='body1' color='text.primary'>
                {'מידות הפתח'}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <TextField
                type='number'
                size='small'
                value={inputs.h ?? ''}
                onChange={e => inputs.onChangeHeight(e.target.value)}
                onClick={()=>inputs.onChangeHeight('')}
                sx={{direction:'ltr'}}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    direction:'ltr'
                  }
                }}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                type='number'
                size='small'
                value={inputs.w ?? ''}
                onClick={()=>inputs.onChangeWidth('')}
                onChange={e => inputs.onChangeWidth(e.target.value)}
                sx={{direction:'ltr'}}
                inputProps={{
                  style: {
                    textAlign: 'center',
                    direction:'ltr'
                  }
                }}
              />
            </TableCell>
          </TableRow>
          ) : null }
          {rows.map((row, i) => (
            <TableRow key={`${row.name}-${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"  align="right" >
                <Typography variant='body1' color='text.primary' >
                  {row.name}
                </Typography>
              </TableCell>
              {notDisplayZero && row.h == 0 ? null : (
                <TableCell align={notDisplayZero ? 'right' : "center"} >
                  <Typography variant='body2' color='text.secondary' >
                    {(row.h ?? 0).toFixed((row.h ?? 0) % 1 === 0 ? 0 : 2)}
                  </Typography>
                </TableCell>
              )}
              {notDisplayZero && row.w == 0 ? null : (
                <TableCell align={notDisplayZero ? 'right' : "center"} >
                  <Typography variant='body2' color='text.secondary' >
                    {(row.w ?? 0).toFixed((row.w ?? 0) % 1 === 0 ? 0 : 2)}
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}