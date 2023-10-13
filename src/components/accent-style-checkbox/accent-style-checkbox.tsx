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
        name="accentStyle"
        id="accentStyleCheckbox"
        onChange={() => handleCheckboxChange(!accentStyle)}
      />
      <Label check for="accentStyleCheckbox">Альтернативная цветовая схема</Label>
    </FormGroup>
  );
}

export default AccentStyleCheckbox;
