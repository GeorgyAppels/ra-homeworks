
const ShopItem = function(props) {
  return (
   <div class="main-content">
      <h2>{props.item.brand}</h2>
      <h1>{props.item.title}</h1>
      <h3>{props.item.description}</h3>
      <div class="description">{props.item.descriptionFull}</div>
      <div class="highlight-window  mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{props.item.currency}{props.item.price.toFixed(2)}</div>
      <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
