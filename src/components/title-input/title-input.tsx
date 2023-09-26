import { FormGroup, Input, Label } from 'reactstrap';
import { ChangeEvent } from 'react';

type TitleInputProps = {
  title: string;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function TitleInput({ title, handleInputChange }: TitleInputProps): JSX.Element {
  return (
    <FormGroup className="mb-sm-4">
      <Label for="titleInput">
        Основной заголовок
      </Label>
      <Input
        onChange={handleInputChange}
        value={title}
        type="text"
        name="title"
        id="titleInput"
        required
      />
    </FormGroup>
  );
}

export default TitleInput;
