//import logo from './logo.svg';
import './App.css';
import LeftPanel from './LeftPanel'
import ReviewsPanel from './ReviewsPanel'
import AverageRating from './AverageRating'
import SentimentAnalysis from './SentimentAnalysis'
import WebsiteVisitors from './WebsiteVisitors'

function App() {
  return (
    <div className="App">
      <div className ="LeftPanel">
        <LeftPanel/>
      </div>
      <div className = "ReviewsPanel">
        <ReviewsPanel reviews='1281'/>
      </div>
      <div className = "AverageRating">
        <AverageRating rating ="4.6" />
      </div>
      <div className = "SentimentAnalysis">
        <SentimentAnalysis Sentiment='960' Sentiment2="122" Sentiment3="321"/>
      </div>
      <div className = "WebsiteVisitors">
        <WebsiteVisitors visitors="821"/>
      </div>
      {/* <div>
        <ReviewsPanel reviews='4'/>
      </div> */}
    </div>
  );
}

export default App;
