class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return ((nextProps.items.length !== this.props.items.length) && (this.props.isOpen)) || (nextProps.isOpen !== this.props.isOpen)
  }
  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
