class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: Math.round(this.props.completed / this.props.total * 100)
    }
  }
  componentDidMount() {
    console.log(this.state.progress)
  }
  componentWillReceiveProps() {
    this.setState({
      progress: Math.round(this.props.completed / this.props.total * 100)
    });
  }
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
}
