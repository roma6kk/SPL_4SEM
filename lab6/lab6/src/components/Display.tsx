import React from 'react';

interface DisplayProps {
  value: string;
  expression: string;
}

const Display: React.FC<DisplayProps> = ({ value, expression }) => {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default Display;