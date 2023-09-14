import { ChangeEvent } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

type TitleInputProps = {
  title: string;
  setTitle: (title: string) => void;
}

function TitleInput({title, setTitle}: TitleInputProps): JSX.Element {
  return (
    <FormGroup className="mb-sm-4">
      <Label for="titleInput">
        Основной заголовок
      </Label>
      <Input
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setTitle(evt.target.value)}
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
