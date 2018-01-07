import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import './Profile.css';


const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '350px',
  width: '290px',
  marginTop: '55px',
    position: 'relative',
  marginLeft: '100px'
};

const styleCardMedia = {
  height: '160px',
};

const styleCardHeaderText = {
  backgroundColor: 'white',
  marginTop: '30px',
  paddingRight: '0px',
};

const styleCardHeaderTitle ={
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '25px',
};

const styleAvatar = {
  border : '5px solid white'
};

const styleLabel = {
    color: '#657786',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '.02em',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '16px',
    textTransform: 'capitalize',

};

const styleCardActions = {
  marginLeft:'155px',
  padding: '1px'
};


const Profile = () => (
  <Card style ={paperStyle}>
    <CardMedia style ={styleCardMedia}>
      <img src="./my.jpg" alt="Fault in display" />
    </CardMedia>
    <CardHeader textStyle={styleCardHeaderText} titleStyle={styleCardHeaderTitle}
      title="M.V.Sai.Chamanth"
      subtitle="@chamanthmvs"
      avatar = {<Avatar src="./my1.jpg" size={50} style={styleAvatar}/>}
    />
    <CardActions style={styleCardActions}>

          <div id="parentstats">
             <div className="stats" id="tweetinfo">Tweets</div>
             <div className="stats" id="followinginfo">Following</div>
             <div className="stats" id="followerinfo">Followers</div>
             <div className="numbers" id="tweets">7</div>
             <div className="numbers" id="following">45</div>
             <div className="numbers" id="followers">17</div>
         </div>
    </CardActions>
  </Card>

);

export default Profile;
