import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '510px',
  width: '290px',
  marginTop: '20px',
  position: 'absolute',
  marginLeft: '100px'
};

const styleH3 = {
  margin: '20px',
  padding: '0',
  fontSize: '18px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontWeight: '700',
  color: '#14171a',
};
const styleChange = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '400',
  color: '#1b95e0',
  cursor: 'pointer'

};

const Header = {
  fontWeight: '700',
  color: '#1b95e0',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '14px',
  cursor: 'pointer',
  margin: '20px',
};

const Subheader = {
  fontSize: '12px',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  color: '#657786',
  margin: '20px',
  marginTop: '0px'
};

const styleDiv = {
  marginTop: '10px'
};

const Trending = () => (
  <Paper style={paperStyle}>
    <div><h3 style={styleH3}>Trends For You <span><a style={styleChange} href="#">change</a></span></h3></div>
    <div style={styleDiv}><a style={Header} href="#">#HappyNewYear2018</a><p style={Subheader}>20.1k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#SA vs IND</a><p style={Subheader}>51.7k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#Bus Strikes</a><p style={Subheader}>5659 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#kesari</a><p style={Subheader}>India Today is trending about this</p></div>
    <div style={styleDiv}><a style={Header} href="#">#IPLRetention</a><p style={Subheader}>10.9k Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">Rs 10</a><p style={Subheader}>8850 Tweets</p></div>
    <div style={styleDiv}><a style={Header} href="#">#Winter Shower</a><p style={Subheader}>7825 Tweets</p></div>
  </Paper>
);

export default Trending;
