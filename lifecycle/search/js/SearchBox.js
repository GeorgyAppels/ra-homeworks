class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition.bind(this));
  }

  isFixed() {
    console.log(this.state.fixed);
    return false;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed.bind(this)
    });
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }
}
