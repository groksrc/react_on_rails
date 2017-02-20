import TweetBox from './components/tweetbox';
import TweetsList from './components/tweetslist';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm">
            <TweetBox />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TweetsList />
          </div>
        </div>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);