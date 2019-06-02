'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : "All"
    }
  }
  filterSelect(filter) {
    console.log(filter);
    this.state.selected = filter;
  }
  projectFilter(projects) {
    return (this.state.selected === 'All')
      ? projects
      : projects.filter(project => project.category === this.state.selected);
  }
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.filterSelect(filter)} />
        <Portfolio projects={this.projectFilter(this.props.projects)} />
      </div>
    );
  }
}
