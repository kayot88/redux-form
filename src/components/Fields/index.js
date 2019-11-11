import React from 'react';
import ReactJson from 'react-json-view';
import cx from 'classnames';
import '../../RegisterForm.css';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating'
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const { meta, type } = props;

  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input {...props.input} type={props.type} />
      <label>{props.label}</label>
      {meta.error && meta.touched && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
      {/* <ReactJson src={meta} /> */}
    </div>
  );
};
export const customSelect = props => {
  console.log({ ...props.input });
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tab</option>
        <option value="spaces">Spaces</option>
      </select>
      {/* <ReactJson src={props.meta.error} /> */}
    </div>
  );
};
