import React from 'react';
import { Edit, SimpleForm, TextInput,RadioButtonGroupInput } from 'react-admin'


function UserEdit(props) {
    
    return (
        <Edit title=" Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
                <RadioButtonGroupInput source="Gender" choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' }
                ]} />
            </SimpleForm>
        </Edit>
    );
}

export default UserEdit;