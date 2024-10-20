import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import downloadImage from '../Helpers/downloadImage.helper';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(   {url}   ) { 
  const URL ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  url
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
            <img src={URL}   className='w-4 h-4'  alt="QR" />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogContent sx={{display:"flex"  , justifyContent:"center" , alignItems:"center"}} >
            <img src={URL} className='w-28 h-28'  alt="" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=> downloadImage(URL ,url) }>Download</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
