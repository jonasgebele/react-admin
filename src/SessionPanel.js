import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import SimpleImageSlider from "react-simple-image-slider";
import { List, TextField, DateField,Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { CardActionArea } from '@material-ui/core';

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const SessionGrid = ({ ids, data, basePath }) => { 
    const images = [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ocOs7hvJoVc6XqvZ7glT8HhQ1tbaQCoc-nP4_ZkkO0ukCs7M&s" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ocOs7hvJoVc6XqvZ7glT8HhQ1tbaQCoc-nP4_ZkkO0ukCs7M&s" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ocOs7hvJoVc6XqvZ7glT8HhQ1tbaQCoc-nP4_ZkkO0ukCs7M&s" },
    ];
   
    return (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>
            <CardActionArea>
            <CardHeader
                title={<TextField record={data[id]} source="patientData.name" />}
                subheader={<DateField record={data[id]} source="timestamp" />}
            />
            </CardActionArea>
                <div>
                    <SimpleImageSlider
                        width={300}
                        height={150}
                        images={images}
                    />
                </div>
            <CardContent>
                <TextField record={data[data.sessionId]} source="patientData.diagnosis" />
                <TextField record={data[data.sessionId]} source="patientData.procedure" />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Show
                </Button>
            </CardActions>
        </Card>
    )}
    </div>
);};

SessionGrid.defaultProps = {
    data: {},
    ids: [],
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Patient Name" source="patientData.name" reference="sessions" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Date" source="timestamp" reference="sessions" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const SessionTable = (props) => (
    <List title="All sessions" filters={<PostFilter />} {...props}>
        <SessionGrid />
    </List>
);