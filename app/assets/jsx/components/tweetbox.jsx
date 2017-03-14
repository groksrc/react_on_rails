export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = "";
  }
  render() {
    return (
      <form onSubmit={this.sendTweet.bind(this)}>
        <div className="form-group">
          <label htmlFor="tweetbox">What's happening?</label>
          <textarea ref="tweetTextArea" className="form-control" id="tweetbox" rows="3" />
        </div>
        <button type="submit" className="btn btn-primary">Tweet</button>
      </form>
    );
  }
}