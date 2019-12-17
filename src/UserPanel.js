import React from 'react';
import { List, Datagrid, TextField, BooleanField, ChipField, EditButton, EmailField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserTable = props => (
    <List filters={<UserFilter />} title="Users" {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ChipField source="role" />
            <BooleanField source="isAdmin" />
            <EditButton />
        </Datagrid>
    </List>
);