import { FormGroup, Input, Label } from 'reactstrap';

type AccentStyleCheckboxProps = {
  accentStyle: boolean;
  handleCheckboxChange: (accentStyle: boolean) => void;
}

function AccentStyleCheckbox({ accentStyle, handleCheckboxChange }: AccentStyleCheckboxProps): JSX.Element {
  return (
    <FormGroup switch className="mt-3">
      <Input
        type="switch"
        checked={accentStyle}
        name="addButton"
        onChange={() => handleCheckboxChange(!accentStyle)}
      />
      <Label check>Альтернативная цветовая схема</Label>
    </FormGroup>
  );
}

export default AccentStyleCheckbox;
