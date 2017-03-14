export default class Tweet extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="card mb-3">
          <div className="card-block">
            <h4 className="card-title"><i className="large material-icons">thumb_up</i> {this.props.name}</h4>
            <p className="card-text">{this.props.body}</p>
          </div>
        </div>
      </li>
    );
  }
}