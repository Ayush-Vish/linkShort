import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUrl, getAllUrls } from '../Redux/Slices/url.slice';
import { AiFillDelete} from "react-icons/ai"
import AlertDialogSlide from './AlertDialogSlide';
function createData(originalUrl, linkShortUrl, clicks, status, action) {
  return { originalUrl, linkShortUrl, clicks, status, action};
} 




export default function BasicTable() { 
    const data= useSelector(state => state.url) 
    const dispatch = useDispatch() 
    const [prevPage , setPrevPage]= React.useState(0);
    const [nextPage , setNextPage]= React.useState(5);

    
    
    async function getData  () { 
        const response =await dispatch(getAllUrls()) 
    } 
    async function handleDeleteUrl( e ,url)  { 
      await dispatch(deleteUrl(url)) 
      await dispatch(getAllUrls()) ;
    }
    React.useEffect(()=>{
        getData();
    },[]) 

  return (
    <TableContainer className='  backdrop-blur-sm ' component={Paper} sx={{background:"transparent"}} >
      <Table sx={{ minWidth: 650   }} aria-label="simple table">
        <TableHead> 
          <TableRow  >
            <TableCell sx={{color:"white" , fontWeight:"900"}} >Original URL</TableCell>
            <TableCell sx={{color:"white" , fontWeight:"900"}} align="right">LinkShort URL </TableCell>
            <TableCell sx={{color:"white" , fontWeight:"900"}} align="right">Clicks</TableCell>
            <TableCell  sx={{color:"white" , fontWeight:"900"}} align="right">Status</TableCell>
            <TableCell sx={{color:"white" , fontWeight:"900"}} align="right">Action</TableCell>
            <TableCell sx={{color:"white" , fontWeight:"900"}} align="right">QR Code</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data?.allUrls?.map((row , index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{color:"white" , fontWeight:"900"}} component="th" scope="row"><div className='w-[300px] line-clamp-1' >  <a href={row.longUrl}>{row.longUrl}</a> </div> </TableCell>
              <TableCell  sx={{color:"#EB568E" , fontWeight:"900"}} align="right">  <a href={row.linkShortUrl}> { row.linkShortUrl} </a>  {" "}  </TableCell>
              <TableCell  sx={{color:"white" , fontWeight:"900"}} align="right">{row.clicks}</TableCell>
              <TableCell  sx={{color:"white" , fontWeight:"900"}} align="right">{row.status=="ACTIVE" ? (<p className='text-green-500 font-extrabold'  >{row.status}</p>) : (<p>{row.status}</p>)}</TableCell>
              <TableCell  sx={{color:"white" , fontWeight:"900"}} align="right"><button className='text-red-500 text-lg' onClick={(e)=> handleDeleteUrl  (e ,row.linkShortUrl)} >  <AiFillDelete   /> </button></TableCell>
              <TableCell  sx={{color:"white" , fontWeight:"900"}} align="right">  <AlertDialogSlide    url={row.linkShortUrl}  />    </TableCell>
            </TableRow>
          )).slice(prevPage,nextPage)}
        </TableBody>
      </Table>
    <div className='text-white flex justify-center items-center gap-3'>
            <button className='px-2 py-1 rounded-md bg-primary-blue  border mb-2 '  disabled={prevPage===0}  onClick={() => {
                setPrevPage(prevPage - 5 );
                setNextPage(nextPage -5 ); 
                
            }}  >
                Prev
            </button> 
            <button className='px-2 py-1 rounded-md bg-primary-blue  border mb-2 ' disabled={(data?.allUrls?.length ) -nextPage <=0 } onClick={() =>{ 
                setPrevPage(prevPage + 5 );
                setNextPage(nextPage +5 ); 


            }}>
                Next
            </button>
    </div>
    </TableContainer> 
  );
}
