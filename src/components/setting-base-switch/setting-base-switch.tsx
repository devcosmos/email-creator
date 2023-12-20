import { Col, FormGroup, Input, Label } from 'reactstrap';

type SettingBaseSwitchProps = {
  label: string;
  value: boolean;
  name: string;
  handleCheckboxChange: (value: boolean) => void;
}

function SettingBaseSwitch({ label, value, name, handleCheckboxChange }: SettingBaseSwitchProps): JSX.Element {
  return (
    <Col xs="12">
      <FormGroup switch className="mb-3">
        <Input
          type="switch"
          checked={value}
          name={name}
          id={`${name}Switch`}
          onChange={() => handleCheckboxChange(!value)}
        />
        <Label check for={`${name}Switch`}>
          {label}
        </Label>
      </FormGroup>
    </Col>
  );
}

export default SettingBaseSwitch;
