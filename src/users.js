import React from 'react';
import { List, Datagrid, TextField, BooleanField, ChipField, EditButton, EmailField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>User Management {record ? `"${record.title}"` : ''}</span>;
};

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserTable = props => (
    <List filters={<UserFilter />} title={<UserTitle />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ChipField source="role" />
            <EmailField source="email" />
            <BooleanField source="isAdmin" />
            <EditButton />
        </Datagrid>
    </List>
);