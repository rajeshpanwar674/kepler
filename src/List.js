import React, { useState } from 'react';
import { withStyles, Hidden, Icon, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import ForcastDetail from './Detail';
import './List.css'

const ForcastList = () => {
    const [selectedItem, setSelectedItem] = useState(-1);
    const forcasts = [{
        title: 'US GDP',
        content: 'What will US GDP growth be in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        title: 'Australia',
        content: 'What will Australian core inflation be for Q1 2022?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    ]
    const selectedForcast = forcasts[selectedItem];

    return (
        <div className='wrapper'>
            <div className='listrow'>
               
                    <div className="lisWrap">
                        {forcasts.map((val, i) => {
                            return (
                                <div
                                    key={i}
                                    hover
                                    onClick={event => setSelectedItem(i)}
                                    selected={i === selectedItem}
                                    className="cursor-pointer listItem"
                                >
                                    <div className="max-w-64 w-64 p-0 text-center listText">
                                        <b>{val.title}</b>
                                        <p>{val.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                  
                </div>
            </div>
            <div className=' detailWrap'>
            {selectedItem >= 0 && <div className='detailcontainer '>
                <ForcastDetail selectedForcast={selectedForcast}></ForcastDetail>
            </div>}
            </div>
        </div>
    );
};

export default ForcastList;
