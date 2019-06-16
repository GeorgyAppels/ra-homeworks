'use strict';

function Stars(props) {

  if ((props.count >= 1) && (props.count <= 5)) {
    let stars = [];
    for (let i = 1; i <= props.count; i++) {
      stars.push(Star())
    }
    console.log(stars[0]);
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
          {stars.map((el) => el)}
        </li>
      </ul>
    )
  }
}
