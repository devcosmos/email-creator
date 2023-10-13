import { FormGroup, Input, Label } from 'reactstrap';
import { SignatureType } from '../../const';
import { ChangeEvent } from 'react';

type SignatureTypeProps = {
  signatureType: SignatureType;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function SignatureTypeSelect({ signatureType, handleInputChange }: SignatureTypeProps): JSX.Element {
  return (
    <FormGroup>
      <Label for="signatureTypeSelect">
        Выберите стиль письма и подписи
      </Label>
      <Input
        onChange={handleInputChange}
        value={signatureType}
        type="select"
        name="signatureType"
        id="signatureTypeSelect"
      >
        {Object.values(SignatureType).map((type) => (
          <option
            key={type}
            value={type}
          >
            {type}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
}

export default SignatureTypeSelect;
