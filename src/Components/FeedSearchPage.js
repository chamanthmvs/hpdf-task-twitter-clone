import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const styleCard = {
  marginLeft:'10px',
  marginTop: '55px',
  top: '116px',
  width: '588px',
  height: '680px',
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

const FeedSearchPage = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Aadhar"
        subtitle="Aadhar India"
        avatar="./aadhar1.jpg"
      />
      <CardText style={styleCardText}>
      Please ensure that you delete the local copy of Aadhaar downloaded in any cyber cafe or on any other public machine as it may lead to misuse. #AadhaarEssentials
      </CardText>
      <CardMedia style={styleCardMedia}>
        <img src="./Aadhar.jpg" alt="" />
      </CardMedia>

    <CardActions>
    <FlatButton
    label="777"
    primary={true}
    icon={<i class="fa fa-reply" aria-hidden="true"></i>}
    style={styleIconReply}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="33"
    primary={true}
    icon={<i class="fa fa-retweet" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="4k"
    primary={true}
    icon={<i class="fa fa-heart" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
  <FlatButton
    label="5"
    primary={true}
    icon={<i class="fa fa-envelope" aria-hidden="true"></i>}
    style={styleIcon}
    labelStyle={labelStyle}
  />
    </CardActions>
    </Card>
  );

  export default FeedSearchPage;
