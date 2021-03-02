import React from 'react';
import { Create, SimpleForm, TextInput, RadioButtonGroupInput } from 'react-admin'


function UserCreate(props) {
    return (
        <Create title="create a User" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="email" />
                <RadioButtonGroupInput source="Gender" choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' }
                ]} />
            </SimpleForm>
        </Create>
    );
}

export default UserCreate;