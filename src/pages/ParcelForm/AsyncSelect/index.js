import React, { useRef, useEffect } from 'react';
import Select from 'react-select/async';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

const customStyles = {
  menu: provided => ({
    ...provided,
    color: '#999',
  }),

  control: provided => ({
    ...provided,
    height: 45,
    border: '1px solid #DDD',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#DDD',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    border: '0.5px solid #DDD',
  }),

  placeholder: provided => ({
    ...provided,
    color: '#999',
  }),

  singleValue: provided => ({
    ...provided,
    color: '#999',
  }),
};

const AsyncSelect = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(option => option.value);
        }
        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Select
      styles={customStyles}
      placeholder="Selecione..."
      cacheOptions
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AsyncSelect;
