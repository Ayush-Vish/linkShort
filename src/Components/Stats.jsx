import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUrls } from '../Redux/Slices/url.slice';

function createData(originalUrl, linkShortUrl, clicks, status, action) {
  return { originalUrl, linkShortUrl, clicks, status, action};
}



export default function BasicTable() { 
    const data= useSelector(state => state.url) 
    const dispatch = useDispatch() 
    const [prevPage , setPrevPage]= React.useState(0);
    const [nextPage , setNextPage]= React.useState(5);

   
    console.log(data) 
    async function getData  () { 
        const response =await dispatch(getAllUrls()) 
    }
    React.useEffect(()=>{
        getData()
    },[])

  return (
    <TableContainer component={Paper} sx={{background:"#353C4A"}} >
      <Table sx={{ minWidth: 650  , background:"#353C4A" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell align="right">LinkShort URL </TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">QR Code</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data?.allUrls?.map((row , index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.longUrl}</TableCell>
              <TableCell align="right">{row.linkShortUrl}</TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          )).slice(prevPage,nextPage)}
        </TableBody>
      </Table>
    <div className='text-primary-pink flex justify-center gap-3'>
            <button   >
                Prev
            </button> 
            <button>
                Next
            </button>
    </div>
    </TableContainer> 
  );
}
