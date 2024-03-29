'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import axios from 'axios'

const RegisterLti = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        let DataJosn = {
            "iss": "https://ltilocal.vercel.app/",
            "login_hint": "klkq-kjsjdlwque-ewj363",
            "target_link_uri": "https://ltilocal.h5p.com/lti/launch"
        }
        const sentRequest = await axios.post('https://ltilocal.h5p.com/lti/login', DataJosn).then(res => res.data).catch(err => console.log(err))
        console.log(sentRequest)
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

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
        </>
    )
}

export default RegisterLti