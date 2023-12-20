import { Button } from 'reactstrap';
import { copyToClipboard, downloadFile } from '../../helpers/helpers';

type SaveButtonsProps = {
  letter: HTMLDivElement;
}

function SaveButtons({ letter }: SaveButtonsProps): JSX.Element {
  return (
    <>
      <Button
        color="primary"
        size="lg"
        className="me-3 mt-3"
        onClick={() => copyToClipboard(letter)}
      >
        Скопировать
      </Button>
      <Button
        color="primary"
        outline
        size="lg"
        className="mt-3"
        onClick={() => downloadFile(letter)}
      >
        Сохранить файл
      </Button>
    </>
  );
}

export default SaveButtons;
