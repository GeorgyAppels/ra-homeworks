'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};

TextInput.propTypes = {
  label: PropTypes.oneOf(['Email', 'Имя', 'Фамилия', 'Пароль']),
  type: PropTypes.oneOf(['email', 'text', 'password']),
  name: PropTypes.oneOf(['email', 'first_name', 'last_name', 'password']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool
};
