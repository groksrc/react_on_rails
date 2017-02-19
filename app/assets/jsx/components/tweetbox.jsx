export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label for="tweetbox">What's happening?</label>
              <textarea className="form-control" id="tweetbox" rows="3" />
            </div>
            <button type="submit" className="btn btn-primary">Tweet</button>
          </form>
        </div>
      </div>
    );
  }
}