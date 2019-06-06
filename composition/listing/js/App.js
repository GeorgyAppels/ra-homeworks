'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => {
      return <Item color={typeColor(item.type)} item={item} />
    })}
  </main>
);

function typeColor(type) {
  switch(type) {
    case 'unisex':
      return "black";
    case 'male':
      return "blue";
    case 'female':
      return "orange";
  }
}
