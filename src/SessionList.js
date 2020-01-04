import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const SessionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="sessionId" />
            <TextField source="user.name" />
            <TextField source="user.procedure" />
            <TextField source="user.diagnosis" />
            <ReferenceField source="user.id" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);