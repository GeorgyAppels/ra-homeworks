'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  label : PropTypes.oneOf(['День Рождения']),
  name : PropTypes.oneOf(['birthday']),
  onChange : PropTypes.func,
  value: PropTypes.string
}
