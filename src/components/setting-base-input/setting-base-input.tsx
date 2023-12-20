import { ChangeEvent } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

type SettingBaseInputProps = {
  label: string;
  value: string;
  name: string;
  isHalf?: boolean;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function SettingBaseInput({ label, value, name, isHalf, handleInputChange }: SettingBaseInputProps): JSX.Element {
  return (
    <Col xs="12" md={isHalf ? '6' : '12'}>
      <FormGroup>
        <Label for={`${name}Input`}>
          {label}
        </Label>
        <Input
          onChange={handleInputChange}
          value={value}
          type="text"
          name={name}
          id={`${name}Input`}
          required
        />
      </FormGroup>
    </Col>
  );
}

export default SettingBaseInput;
