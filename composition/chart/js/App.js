function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    const params = [
      {
        chartsClass: 'Charts'
      },
      {
        chartsClass: 'Charts',
        serieClass: 'stacked'
      },
      {
        chartsClass: 'Charts',
        serieClass: 'layered'
      },
      {
        chartsClass: 'Charts horizontal'
      }
    ];

		return (
			<section>
        {params.map(param => Chart(data, labels, colors, max, param))}
			</section>
		);
	}
}

const Chart = function(data, labels, colors, max, param) {
  return (
    <div className={param.chartsClass}>
      { data.map((serie, serieIndex) => {
        var sortedSerie = serie.slice(0),
          sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <div className={'Charts--serie ' + param.serieClass}
            key={ serieIndex }
            style={{height: (param.chartsClass === 'Charts horizontal') ? 'auto' : 250}}
          >
          <label>{ labels[serieIndex] }</label>
          { serie.map((item, itemIndex) => {
            var color = colors[itemIndex], style,
              size = item / ((param.serieClass === 'stacked') ? sum : max) * 100;

            style = {
              backgroundColor: color,
              opacity: (param.serieClass === 'stacked') ? 1 : item/max + .05,
              zIndex: item,
              right: (param.serieClass === 'layered') ? ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%' : 0,
              height: (param.chartsClass !== 'Charts horizontal') ? size + '%' : undefined,
              width: (param.chartsClass === 'Charts horizontal') ? size + '%' : undefined
            };

          return (
            <div
              className={'Charts--item ' + param.serieClass}
              style={ style }
              key={ itemIndex }
            >
              <b style={{ color: color }}>{ item }</b>
             </div>
          );
          }) }
          </div>
        );
      }) }
    </div>
  )
}
