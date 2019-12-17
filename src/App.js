import React, { Component } from "react";
import { Admin, Resource, EditGuesser, ShowGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import { UserTable } from './UserPanel';
import { SessionTable } from './SessionPanel';
import Dashboard from './Dashboard';
import UserIcon from '@material-ui/icons/Group';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';


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
  ],
  sessions: [
    {
      sessionId: 1,
      patientData: {
        name: "Jonas Gebele",
        plannedSurgeryDate: new Date('2019-12-17T03:24:00'),
        diagnosis: "Hand-Problem",
        procedure: "Hand surgery",
      },
      timestamp: new Date('2019-12-17T03:24:00'),
    },
    {
      sessionId: 2,
      patientData: {
        name: "Jürgen Klopp",
        plannedSurgeryDate: new Date('2019-04-03T03:24:00'),
        diagnosis: "Finger-Problem",
        procedure: "Finger surgery",
      },
      timestamp: new Date('2019-04-03T03:24:00'),
    },
    {
      sessionId: 3,
      patientData: {
        name: "Sadio Mane",
        plannedSurgeryDate: new Date('2019-11-11T03:24:00'),
        diagnosis: "Thumb-Problem",
        procedure: "Thumb surgery",
      },
      timestamp: new Date('2019-11-11T03:24:00'),
    },
  ]
});

class App extends Component {
  render() {
    return (
      <Admin title="CaMRI Web App" dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" list={UserTable} edit={EditGuesser} icon={UserIcon}/>
        <Resource name="sessions" list={SessionTable} edit={EditGuesser} show={ShowGuesser} icon={CollectionsBookmarkIcon}/>
      </Admin>
    );
  }
}

export default App;