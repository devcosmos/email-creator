import { FormGroup, Input, Label } from 'reactstrap';

type SocialCheckboxProps = {
  addSocial: boolean;
  handleCheckboxChange: (addSocial: boolean) => void;
}

function SocialCheckbox({ addSocial, handleCheckboxChange }: SocialCheckboxProps): JSX.Element {
  return (
    <FormGroup switch className="mt-3">
      <Input
        type="switch"
        checked={addSocial}
        name="social"
        id="socialCheckbox"
        onChange={() => handleCheckboxChange(!addSocial)}
      />
      <Label check for="socialCheckbox">Добавить блок с соцсетями</Label>
    </FormGroup>
  );
}

export default SocialCheckbox;
