import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const styleCard = {
  marginLeft:'10px',
  marginTop: '20px',
  top: '116px',
  width: '588px',
  height: '580px',
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

const FeedThree = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Hasura Education"
        subtitle="India's Fastest growing Tech company"
        avatar="./hasura.jpg"
      />
      <CardText style={styleCardText}>
      Always wanted to build an app? What would your dream app be about? Share your ideas, tell your friends and tag us with #MyDreamApp.
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src="./FeedThree.png" alt="" />
      </CardMedia>

    <CardActions>
    <FlatButton
    label="666"
    primary={true}
    icon={<i class="fa fa-reply" aria-hidden="true"></i>}
    style={styleIconReply}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="44"
    primary={true}
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="7k"
    primary={true}
    icon={<i class="fa fa-heart" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="2"
    primary={true}
    icon={<i class="fa fa-envelope" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
    </CardActions>
    </Card>
  );

  export default FeedThree;
