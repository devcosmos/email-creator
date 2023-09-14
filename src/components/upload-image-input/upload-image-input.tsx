import { FormGroup, FormText, Input, Label } from 'reactstrap';

type UploadImageInputProps = {
  setImage: (image: string | null) => void;
}

const UploadImageInput = ({setImage}: UploadImageInputProps) => {
  const encodeImageFileAsURL = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = function() {
      if (reader.result && typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <FormGroup className="mb-sm-4">
      <Label for="mainImageInput">
        Загрузить изображение
      </Label>
      <Input
        id="mainImageInput"
        type="file"
        name="mainImage"
        onChange={(event) => {
          if (event.target.files) {
            encodeImageFileAsURL(event.target.files[0]);
          }
        }}
      />
      <FormText>
        <ul className="small my-3">
          <li>Загрузка только JPG & PNG.</li>
          <li>Размер файла не должен превышать 1 МБ.</li>
          <li>Разрешение изрображение не больше 1920x1080.</li>
        </ul>
      </FormText>
    </FormGroup>
  );
};

export default UploadImageInput;
