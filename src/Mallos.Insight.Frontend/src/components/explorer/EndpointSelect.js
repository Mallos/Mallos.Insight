import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { CreatableSelect } from '@atlaskit/select';

import '../../stylesheets/helper.css'; 

const defaultOptions = [
  { label: '/version', value: 'version', description: 'Information about the current instance of Mallos.' },
];

const createOption = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const formatOptionLabel = (option, { context }) => {
  if (context === 'menu') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>{option.label}</div>
        {option.description ? (
          <div
            style={{
              fontSize: 12,
              fontStyle: 'italic',
            }}
          >
            {option.description}
          </div>
        ) : null}
      </div>
    );
  }
  return option.value;
};

export default class EndpointSelect extends Component<
{
  onChanged: PropTypes.func
},
{
  isLoading: boolean,
  options: Array<{ label: string, value: string }>,
  value?: {},
}> {
  state = {
    isLoading: false,
    options: defaultOptions,
    value: undefined,
  };

  handleChange = (newValue: any, actionMeta: any) => {
    this.setState({ value: newValue });
    this.triggerOnChanged(newValue);
  };

  handleCreate = (inputValue: any) => {
    this.setState({ isLoading: true });
    const { options } = this.state;
    const newOption = createOption(inputValue);
    this.setState({
      isLoading: false,
      options: [...options, newOption],
      value: newOption,
    });
    this.triggerOnChanged(newOption);
  };

  triggerOnChanged = (value: string | null) => {
    this.props.onChanged((value !== null) ? value.value : null);
  }

  render() {
    const { isLoading, options, value } = this.state;
    return (
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        formatOptionLabel={formatOptionLabel}
        options={options}
        value={value}
        placeholder="Endpoint"
        className="zIndex-5"
      />
    );
  }
}