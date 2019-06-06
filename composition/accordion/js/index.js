'use strict';

const blocks = [
  {
    id: 0,
    header: 'Компоненты',
    opened : true,
    description: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
  },
  {
    id: 1,
    header: 'Выучил раз, используй везде!',
    opened : false,
    description: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
  },
  {
    id: 2,
    header: 'Использование JSX',
    opened : false,
    description: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
  }
];


class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened : blocks.map(block => block.opened)
    }
  }
  articleWrap (id) {
    const newState = this.state.opened;
    newState[id] = !newState[id];
    this.setState({
      opened: newState
    });
  }
  render() {
    return (
      <main className="main">
      <h2 className="title">React</h2>
        {blocks.map(block => {
          return <section className={this.state.opened[block.id] ? "section open" : "section"}>
            <button>toggle</button>
            <h3 className="sectionhead"  onClick={() => this.articleWrap(block.id)}>{block.header}</h3>
            <div className="articlewrap">
              <div className="article">
                {block.description}
              </div>
            </div>
          </section>
        }) }
      </main>
    )
  }
}

ReactDOM.render(
  <Accordion blocks={blocks} />,
  document.getElementById('root')
);
