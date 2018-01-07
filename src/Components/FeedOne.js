import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const styleCard = {
  marginLeft:'10px',
  marginTop: '55px',
  top: '116px',
  width: '588px',
  height: '550px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
};

const styleCardHeader = {
  fontWeight: 'bold',
  paddingBottom: '0px'
};

const styleCardText = {
  paddingTop: '0px',
  marginLeft: '50px'
};

const styleCardMedia = {
  width: '510px',
  marginLeft: '66px',
};

const styleIconReply = {
  marginLeft: '44px',
  marginRight: '0px',
  color: '#66757f',
};

const styleIcon = {
  padding: '0px',
  marginRight: '0px',
  color: '#66757f',
};

const labelStyle = {
  textTransform: 'capitalize',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '13px',
  height: '46px',
  padding: '0 14px 0 4px',
};

const FeedOne = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="GoalCast"
        subtitle="Motivation,Inspiration to reach your goals"
        avatar="./GoalCast.jpg"
      />
      <CardText style={styleCardText}>
      Goalcast is an inspiring community for achievers dedicated to helping you improve all aspects of your life. We provide you with practical advice, resources and the motivation to help you realize your full potential.
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src="./FeedTwo1.jpeg" alt="" />
      </CardMedia>

    <CardActions>
    <FlatButton
    label="333"
    primary={true}
    icon={<i class="fa fa-reply" aria-hidden="true"></i>}
    style={styleIconReply}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="22"
    primary={true}
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="5k"
    primary={true}
    icon={<i class="fa fa-heart" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="7"
    primary={true}
    icon={<i class="fa fa-envelope" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
    </CardActions>
    </Card>
  );

  export default FeedOne;
