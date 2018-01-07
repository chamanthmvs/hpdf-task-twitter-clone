import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const titleStyle = {
    color: '#fff',
    fontSize: '27px',
    Wight: 'bold',
    overflow: 'hidden',
    paddingLeft: '70px',
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

const style = {
  backgroundColor: '#00aced',
  paddingTop: '46px',
  position: 'inherit'
};

const TitleBar = () => (
  <AppBar
    title="AADHAR"
    style={style}
    titleStyle={titleStyle}
    showMenuIconButton = {false}
  />
);

export default TitleBar;
