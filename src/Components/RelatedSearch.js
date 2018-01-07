
import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '0px',
    height: '300px',
    width: '290px',
    marginTop: '55px',
    marginLeft: '100px',
    position: 'inherit',
};

const styleH3 = {
    margin: '20px',

    paddingTop: '5px',
    fontSize: '18px',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    fontWeight: '700',
    color: '#14171a',
};

const styleH2 = {
    marginTop: '5px',
    marginLeft:'20px',
    padding: '0',
    fontSize: '12px',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    fontWeight: '200',
    color: '#14171a',
};


const styleDiv = {
    marginTop: '10px'
};

const Header = {
    fontWeight: '700',
    color: '#1b95e0',
    fontFamily: 'Segoe UI,Arial,sans-serif',
    fontSize: '14px',
    cursor: 'pointer',
    margin: '20px',
};


const RelatedSearch = () => (
    <Paper style={paperStyle}>
      <div><h3 style={styleH3}>Related Searches</h3></div>
      <div><h2 style={styleH2}>Results based on your browsing</h2></div>
      <div style={styleDiv}><a style={Header} href="#">#virar</a></div>
      <div style={styleDiv}><a style={Header} href="#">#loksabha</a></div>
      <div style={styleDiv}><a style={Header} href="#">#ponzi</a></div>
      <div style={styleDiv}><a style={Header} href="#">#vikramsarabhai</a></div>
      <div style={styleDiv}><a style={Header} href="#">#mumbai fire</a></div>
      <div style={styleDiv}><a style={Header} href="#">#Pan India</a></div>
      <div style={styleDiv}><a style={Header} href="#">#Identification</a></div>
    </Paper>
);

export default RelatedSearch;
