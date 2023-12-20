import { FormGroup, Input, Label } from 'reactstrap';

type AccentStyleCheckboxProps = {
  accentStyle: boolean;
  handleCheckboxChange: (accentStyle: boolean) => void;
}

function AccentStyleCheckbox({ accentStyle, handleCheckboxChange }: AccentStyleCheckboxProps): JSX.Element {
  return (
    <div className="d-flex align-items-center h-100">
      <FormGroup switch className="mb-3 mb-xl-0 mt-xl-3">
        <Input
          type="switch"
          checked={accentStyle}
          name="accentStyle"
          id="accentStyleCheckbox"
          onChange={() => handleCheckboxChange(!accentStyle)}
        />
        <Label check for="accentStyleCheckbox">Альтернативная цветовая схема</Label>
      </FormGroup>
    </div>
  );
}

export default AccentStyleCheckbox;
