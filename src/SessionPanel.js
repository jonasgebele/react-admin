import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { List, Datagrid, TextField, DateField, Filter, TextInput, EditButton  } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const SessionTable = (props) => (
    <List {...props} title="Sessions" filters={<UserFilter />} >
        <Datagrid rowClick="edit">
            <TextField source="sessionId" />
            <DateField source="timestamp" showTime />
            <TextField source="patientData.name" />
            <DateField source="patientData.plannedSurgeryDate" showTime options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
            <TextField source="patientData.diagnosis" />
            <TextField source="patientData.procedure" />
        </Datagrid>
    </List>
);
