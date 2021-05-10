import React, { useState } from 'react';
import { withStyles, Hidden, Icon, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import ForcastDetail from './Detail';
import menu from "./square.png";
import './List.css'
import TextField from '@material-ui/core/TextField';

const ForcastList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchText, setSearchText] = useState('');
    const forcasts = [{
        id: 1,
        title: 'US GDP',
        content: 'What will US GDP growth be in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 2,

        title: 'Australia',
        content: 'What will Australian core inflation be for Q1 2022?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 3,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 4,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 5,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 6,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 7,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },

    {
        id: 8,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },

    {
        id: 9,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    {
        id: 10,
        title: 'NSW Business Confidence',
        content: 'Will New South Wales business confidence improve or fall in 2021?',
        forcastsMade: '100',
        currentForcast: '80%',
        probability: 'yes',
        dueDate: new Date(),
        imageSrc: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80'
    },
    ]

    const search = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <div className="headerMain"><h2>Forcast</h2>
                <img src={menu} />
            </div>
            <div className='wrapper'>
                <div className='listrow'>
                <div class="searchBox">
                        <TextField className="filedWrap" id="outlined-basic" label="Enter text for search" variant="outlined" onChange={search}/>
                    </div>
                    <div id="scroolUi" className="sidebar">
                    
                    <div className="lisWrap">
                        {forcasts.filter(forcast=> forcast.title.toLowerCase().includes(searchText.toLowerCase())).map((val) => {
                            return (
                                <div
                                    key={val.id}
                                    hover
                                    onClick={event => setSelectedItem(val)}
                                    className={selectedItem && val.id === selectedItem.id ? "cursor-pointer listItem selected" : "cursor-pointer listItem"}
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
                </div>
                <div className=' detailWrap'>
                    {selectedItem && <div className='detailcontainer '>
                        <ForcastDetail selectedForcast={selectedItem}></ForcastDetail>
                    </div>}
                </div>
            </div>

        </>
    );
};

export default ForcastList;
