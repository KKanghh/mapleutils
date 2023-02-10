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
        <Option>{placeholder}</Option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectTemplate>
    );
  }
);
Select.displayName = "Select";

export default Select;
