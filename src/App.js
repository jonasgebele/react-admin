import React, { Component } from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import { UserTable } from './users';
import Dashboard from './dashboard';
import UserIcon from '@material-ui/icons/Group';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = fakeDataProvider({
  users: 
  [
    {
      id: 1,
      name: 'Jonas Gebele',
      role: 'Doctor',
      email: 'abc@def.com',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'Max Mustermann',
      role: 'Nurse',
      email: 'abc@def.com',
      isAdmin: false,
    },
    {
      id: 3,
      name: 'Jack Sparrow',
      role: 'Nurse',
      email: 'abc@def.com',
      isAdmin: false,
    },
    {
      id: 4,
      name: 'Donald Trump',
      role: 'Doctor',
      email: 'abc@def.com',
      isAdmin: true,
    },
    {
      id: 5,
      name: 'Angela Merkel',
      role: 'Nurse',
      email: 'abc@def.com',
      isAdmin: false,
    },
    {
      id: 6,
      name: 'Steven Gerrard',
      role: 'Doctor',
      email: 'abc@def.com',
      isAdmin: false,
    }
  ]
});

class App extends Component {
  render() {
    return (
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" list={UserTable} edit={EditGuesser} icon={UserIcon}/>
      </Admin>
    );
  }
}

export default App;