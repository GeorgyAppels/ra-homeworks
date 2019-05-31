'use strict';

const HexInput = props => {
  function onChange() {
    console.log(props.onChange());
    //props.onChange(props.style.backgroundColor);
  }

  return (
    <input
      value={props.value}
      onChange={onChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
