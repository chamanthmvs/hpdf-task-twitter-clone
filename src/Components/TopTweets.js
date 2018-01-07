
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


const TopTweets = () => (
    <Paper style={paperStyle}>
      <div><h3 style={styleH3}>Most Followers</h3></div>
      <div><h2 style={styleH2}>Twitter accounts who have highest number of followers</h2></div>
      <div style={styleDiv}><a style={Header} href="#">Virender Sehwag</a></div>
      <div style={styleDiv}><a style={Header} href="#">Jay Shetty</a></div>
      <div style={styleDiv}><a style={Header} href="#">Udemy</a></div>
      <div style={styleDiv}><a style={Header} href="#">Hasura Education</a></div>
      <div style={styleDiv}><a style={Header} href="#">Coursera</a></div>
      <div style={styleDiv}><a style={Header} href="#">EdX</a></div>
      <div style={styleDiv}><a style={Header} href="#">Angel list</a></div>
    </Paper>
);

export default TopTweets;
