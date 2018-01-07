import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './Components/TitleBar';
import ToolBarTop from './Components/ToolBarTop';
import ToolBarSearch from './Components/ToolBarSearchPage';
import Trending from './Components/Trending';
import RelatedSearch from './Components/RelatedSearch';
import FeedOne from './Components/FeedOne';
import FeedTwo from './Components/FeedTwo';
import FeedSearchPage from './Components/FeedSearchPage';
import FeedThree from './Components/FeedThree';
import PrivacyPolicy from './Components/PrivacyPolicy'

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '30% 46% 33%',
}

const Search = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <TitleBar/>
    <ToolBarSearch />
    <div style={gridContainer}>
      <div class="class-items">
        <RelatedSearch/>
        <Trending/>
      </div>
      <div class="class-items">
        <FeedSearchPage/>
        <FeedTwo/>
        <FeedOne/>
      </div>
      <div class="class-items">
      </div>
    </div>
  </MuiThemeProvider>
);

export default Search;
