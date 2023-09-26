import ReactQuill from 'react-quill';
import { FormGroup, Label } from 'reactstrap';

type EditorInputProps = {
  body: string;
  handleReactQuillChange: (body: string) => void;
}

function EditorInput({ body, handleReactQuillChange }: EditorInputProps): JSX.Element {
  return (
    <FormGroup className="mb-sm-4">
      <Label for="reactQuill">
        Тело письма
      </Label>
      <ReactQuill
        className="border rounded-3"
        theme="snow"
        value={body}
        id="reactQuill"
        onChange={handleReactQuillChange}
      />
    </FormGroup>
  );
}

export default EditorInput;
