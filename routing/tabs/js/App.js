const App = function() {
  return (
    <div className="tabs">
      <nav className="tabs__items">
        <a className="tabs__item" href="#/">Рефераты</a>
        <a className="tabs__item" href="#/creator">Криэйтор</a>
        <a className="tabs__item" href="#/fortune">Гадалка</a>
      </nav>
      <Router>
        <div className="tabs__content">
          <Route path="#/" exact component={Essay} />
          <Route path="#/creator" component={Creator} />
          <Route path="#/fortune" component={Fortune} />
        </div>
      </Router>
    </div>
  )
}
