import Tweet from './tweet';

export default class TweetsList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet}/>);
    return (
      <ul className="list-group">
        {tweets}
      </ul>
    );
  }
}