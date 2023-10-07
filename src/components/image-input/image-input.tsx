import { FormGroup, Input, Label } from 'reactstrap';
import { ChangeEvent } from 'react';

type UploadImageInputProps = {
  image: string;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function ImageInput({ image, handleInputChange }: UploadImageInputProps): JSX.Element {

  return (
    <FormGroup className="mb-sm-4">
      <Label for="imageInput">
        Основное изображние
      </Label>
      <Input
        onChange={handleInputChange}
        value={image}
        type="text"
        name="image"
        id="imageInput"
        required
      />
    </FormGroup>
  );
}

export default ImageInput;
