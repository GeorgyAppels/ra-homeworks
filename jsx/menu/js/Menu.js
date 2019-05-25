function getMenuItem(item) {
  return (
    <li><a href={item.href}>{item.title}</a></li>
  )
}

const Menu = function(props) {
  if (!(props.opened) || (props.opened === undefined)) {
    return (
      <div class="menu">
      <div class="menu-toggle"><span></span></div>
      </div>
    )
  }
  return (
    <div class="menu menu-open">
      <div class="menu-toggle"><span></span></div>
      <nav>
        <ul>
          {props.items.map(getMenuItem)}
        </ul>
      </nav>
    </div>
  )
}
