import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography
} from '@mui/material';


type AppTableProps = {
  header:Array<string>,
  notDisplayZero?:boolean
  rows:Array<{
    name:string,
    w:number,
    h:number
  }>,
  inputs?:{
    onChangeWidth: (w:number) => void,
    onChangeHeight: (h:number) => void
    w:number,
    h:number
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
                value={inputs.h}
                inputProps={{
                  step: "0.1",
                  style: {
                    textAlign: 'center'
                  }
                }}
                onChange={e => inputs.onChangeHeight(Number(e.target.value))}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                type='number'
                size='small'
                value={inputs.w}
                inputProps={{
                  step: "0.1",
                  style: {
                    textAlign: 'center',
                    fontSize:16
                  }
                }}
                onChange={e => inputs.onChangeWidth(Number(e.target.value))}
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
                    {row.h.toFixed(row.h % 1 === 0 ? 0 : 2)}
                  </Typography>
                </TableCell>
              )}
              {notDisplayZero && row.w == 0 ? null : (
                <TableCell align={notDisplayZero ? 'right' : "center"} >
                  <Typography variant='body2' color='text.secondary' >
                    {row.w.toFixed(row.w % 1 === 0 ? 0 : 2)}
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