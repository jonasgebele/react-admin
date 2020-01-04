import React from 'react';
import { List, SimpleForm, BooleanInput, Create, Datagrid, AutocompleteInput, TextField, BooleanField, ChipField, EditButton, Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <AutocompleteInput source="role" choices={[
                { role: "Nurlse"},
                { role: "Doctor"},
            ]}/>
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Create>
);

export const UserTable = props => (
    <List filters={<UserFilter />} title="User Management" {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ChipField source="role" />
            <BooleanField source="isAdmin" />
            <EditButton />
        </Datagrid>
    </List>
);