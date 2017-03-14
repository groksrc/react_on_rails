import TweetBox from './components/tweetbox';
import TweetsList from './components/tweetslist';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }
  addTweet(newTweet) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: newTweet});
    this.setState({ tweetsList: newTweetsList });
  }
  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm">
            <TweetBox sendTweet={this.addTweet.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TweetsList tweets={this.state.tweetsList}/>
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