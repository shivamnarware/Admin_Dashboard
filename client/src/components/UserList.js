import React from 'react';
import { List, Datagrid, TextField, EditButton, EmailField, DeleteButton } from 'react-admin';

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <EmailField source='email' />
                <TextField source='Gender' />
                <EditButton basePath="/users" />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    );
};


export default UserList;