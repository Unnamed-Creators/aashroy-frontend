import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import styledc from 'styled-components'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Btn  onClick={handleClickOpen}>
       See Details
      </Btn>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Heading>Location Details</Heading>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Content>
            <Detail>
            Neighbourhood Name :<input type="text" value="Princhi Pawan" />
            </Detail>
            <Detail>
            Landmark :<input type="text" value="Landmark" />
            </Detail>
            <Detail>
            City/Town :<input type="text" value="Narayanpur" />
            </Detail>
            <Detail>
            District/P.O. :<input type="text" value="Lakhimpur" />
            </Detail>
            <Detail>
            State :<input type="text" value="Assam" />
            </Detail>
        </Content>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

const Btn=styledc.button ` 
outline: none;
border: none;
padding: 5px 10px;
border-radius: 4px;
font-size: 0.9rem;
font-weight: 500;
`
const Heading=styledc.h3 ` 
color: #8676FF;
`
const Content=styledc.div ` 

`
const Detail=styledc.div `
display:flex;
justify-content:space-between; 
margin:20px 0;
color: #383874;
font-weight:500;
input{
    padding:0 5px;
    margin-left:5px;
    border: 1px solid #383874;
}
`