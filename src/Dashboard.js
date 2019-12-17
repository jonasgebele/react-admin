import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Title } from 'react-admin';

const Dashboard = () => {
    return (
        <Card>
            <Title title="Dashboard" />
            <CardHeader title="Bilder Dashboard" />
            <CardContent>Here will be the Dashboard.</CardContent>
        </Card>
    );
};

export default Dashboard;