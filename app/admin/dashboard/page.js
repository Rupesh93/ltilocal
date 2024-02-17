'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
    const router = useRouter()
    return (
        <Box sx={{ height: '100vh', padding: "20px" }}>
            <h1>Admin Dashboard</h1>
            <Button size="small" color="primary" onClick={() => { router.push('/') }}>
                Logout
            </Button>
            <Box sx={{ height: '80vh', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Connect LTI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Register the project with New LTI Tool
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => { router.push('/admin/registerlti') }}>
                            Connect
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                View
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View all the LTI tool which is connected
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            view
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}

export default AdminDashboard;