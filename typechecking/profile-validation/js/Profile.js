'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  img : PropTypes.string.isRequired,
  url: (props, propName, componentName) => {
    if (!/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}.`);
    };
  },
  birthday: (props, propName, componentName) => {
    if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}.`);
    };
  },
}
