import React from "react";
import styled from "styled-components";

const SelectTemplate = styled.select`
  width: 40%;
  text-align: center;
  font-size: 20px;
  padding: 5px;
`;

const Option = styled.option`
  font-size: 20px;
`;

interface SelectProps {
  id: string;
  placeholder: string;
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, placeholder, options, onChange }, ref) => {
    return (
      <SelectTemplate id={id} onChange={onChange} ref={ref}>
        <Option value={""}>{placeholder}</Option>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.name}
          </Option>
        ))}
      </SelectTemplate>
    );
  }
);
Select.displayName = "Select";

export default Select;
