import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBarTop from './Components/ToolBarTop';
import Trending from './Components/Trending';
import TopTweets from './Components/TopTweets';
import FeedOne from './Components/FeedOne';
import FeedTwo from './Components/FeedTwo';
import FeedThree from './Components/FeedThree';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Profile from './Components/Profile'


const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '30% 46% 33%',
}

const HomePage = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <div className="HomePage">
    <div style={gridContainer}>
      <div class="class-items">
        <Profile/>
        <Trending/>
      </div>
      <div class="class-items">
        <FeedOne/>
        <FeedTwo/>
        <FeedThree/>
      </div>
      <div class="class-items">
        <TopTweets/>
        <PrivacyPolicy/>
      </div>
    </div>
    </div>
  </MuiThemeProvider>
);

export default HomePage;
