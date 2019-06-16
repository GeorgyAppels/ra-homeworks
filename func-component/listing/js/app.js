'use strict';
const url = 'https://neto-api.herokuapp.com/etsy';
let items=[];
function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
items = httpGet(url);

function Listing(props) {
  let priceOutput = function(cur, price) {
    if (cur === 'USD') {
      return `$ ${price}`;
    }
    if (cur === 'EUR') {
      return `€ ${price}`;
    }
    return `${price} ${cur}`;
  }
  let offers = props.items.map(function(item) {
    return (
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{(item.currency_code === 'USD') ? "$" + item.price :
                                       (item.currency_code === 'EUR') ? "€" + item.price :
                                       item.price + " " + item.currency_code}</p>
            <p className={(item.quantity <= 10) ? "item-quantity level-low" :
                          (item.quantity <= 20) ? "item-quantity level-medium" :
                          "item-quantity level-high"}>{item.quantity} left</p>
          </div>
        </div>
    )
  })
  return (
    <div className="item-list">
      {offers.map((offer) => offer)}
    </div>
  )
}

ReactDOM.render(
  <Listing items={items} />,
  document.getElementById('root')
);
