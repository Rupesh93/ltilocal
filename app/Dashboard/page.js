'use client'
import react from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

const Dashboard = () => {
    const router = useRouter()

    return (
        <>
            <h1>Student Dashboard</h1>
            <Button color="primary" onClick={() => { router.push('/') }}>
                Logout
            </Button>
        </>
    )
}
export default Dashboard;