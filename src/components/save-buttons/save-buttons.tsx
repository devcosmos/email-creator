import { Button } from 'reactstrap';
import { copyToClipboard, downloadFile } from '../../helpers/helpers';

type SaveButtonsProps = {
  letter: HTMLDivElement;
}

function SaveButtons({letter}: SaveButtonsProps): JSX.Element {
  return (
    <div className="mt-5">
      <Button
        color="primary"
        size="lg"
        className="me-3"
        onClick={() => copyToClipboard(letter)}
      >
        Скопировать
      </Button>
      <Button
        color="primary"
        outline
        size="lg"
        onClick={() => downloadFile(letter)}
      >
        Сохранить файл
      </Button>
    </div>
  );
}

export default SaveButtons;
