'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Typography from '@mui/material/Typography';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import axios from 'axios'

const RegisterLti = () => {
    const [open, setOpen] = React.useState(false);
    const [responseData, setResponseData] = React.useState({
        toolName: '',
        toolLoginURl: '',
        toolRedirectURl: '',
        publickKeysetURl: '',
        client_id: '',
        deployment_id: '',
        iss: ''
    })


    const handleClose = () => {
        setOpen(false);
    };
    const copyContent = async (fieldsId) => {
        let text = document.getElementById(fieldsId).innerHTML;
      try {
        await navigator.clipboard.writeText(text);
        alert('Content copied to clipboard');
      } catch (err) {
        alert('Failed to copy: ', err);
      }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let toolName = data.get('toolName');
        let toolLoginURl = data.get('toolLoginURl');
        let toolRedirectURl = data.get('toolRedirectURl');
        let publickKeysetURl = data.get('publickKeysetURl');
        let DataJosn = { toolName, toolLoginURl, toolRedirectURl, publickKeysetURl }
        console.log(DataJosn, 'wbefuweiufhiuwe')

        await axios.post('http://localhost:2008/api/registerTool', DataJosn).
            then(res => {
                if (res.data.message === 'save') {
                    alert('Tool Registered Successfully')
                    setOpen(true);
                    setResponseData()
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <SwapCallsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register LTI Tool
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Tool Name"
                        name="toolName"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="toolLoginURl"
                        label="Tool Login URl"
                        type="url"
                        id="toolLoginUrl"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="toolRedirectURl"
                        label="Tool Redirect URl"
                        type="url"
                        id="toolLoginUrl"
                        autoComplete="current-password"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="publickKeysetURl"
                        label="Publick keyset URl"
                        type="url"
                        id="toolLoginUrl"
                        autoComplete="current-password"
                    />
                    {/* <label> Logo</label>
                    <input type="file" id="id"/> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>

                </Box>

            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    LTI Tool Registered Successfully
                    <br />
                    <small style={{ fontSize: '12px' }}>Please save the below date for the future</small>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div><span>ISS: </span><span id="responseISS">{responseData.iss}</span><Button size="small" onClick={()=>{copyContent('responseISS')}}>Copy</Button></div>
                        <div><span>Client id: </span><span id="responseClientId">{responseData.client_id}</span><Button size="small" onClick={()=>{copyContent('responseClientId')}}>Copy</Button></div>
                        <div><span>Deployment id: </span><span id="responseDeploymentId">{responseData.deployment_id}</span><Button size="small" onClick={()=>{copyContent('responseDeploymentId')}}>Copy</Button></div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegisterLti