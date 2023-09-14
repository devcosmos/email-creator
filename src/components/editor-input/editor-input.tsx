import ReactQuill from 'react-quill';
import { FormGroup, Label } from 'reactstrap';

type EditorInputProps = {
  body: string;
  setBody: (body: string) => void;
}

function EditorInput({body, setBody}: EditorInputProps) {
  return (
    <FormGroup className="mb-sm-4">
      <Label for="mainImageInput">
        Тело письма
      </Label>
      <ReactQuill
        className="border rounded-3"
        theme="snow"
        value={body}
        onChange={setBody}
      />
    </FormGroup>
  );
}

export default EditorInput;
