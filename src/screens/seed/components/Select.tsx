import { SelectTemplate, Option } from ".";
import React from "react";

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
        <Option value={placeholder}>{placeholder}</Option>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </SelectTemplate>
    );
  }
);
Select.displayName = "Select";

export default Select;
