import Tweet from './tweet';

export default class TweetsList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <Tweet />
      </ul>
    );
  }
}