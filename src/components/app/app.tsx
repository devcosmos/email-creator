import { ChangeEvent, useRef, useState} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
} from 'reactstrap';
import UploadImageInput from '../upload-image-input/upload-image-input';
import EditorInput from '../editor-input/editor-input';
import BaseDod from '../email-template/base-dod';
import TitleInput from '../title-input/title-input';
import SaveButtons from '../save-buttons/save-buttons';
import { LetterData } from '../../types/data';
import MainButton from '../main-button/main-button';
import {letterValues} from '../../helpers/objects';
import TemplateModal from '../template-modal/template-modal';

/*
Идеи/Баги:
1. Валидация загрузки изображения
2. Сохранить последний шаблон в local storage
3. Вариации логотипов и цветов
4. Вариации блоков после основного тела
5. Импорт/Экспорт настроек
*/

function App(): JSX.Element {

  const letter = useRef<null | HTMLDivElement>(null);

  const [letterData, setLetterData] = useState<LetterData>(letterValues);

  const [modal, setModal] = useState(false);

  const handleInputChange = (evt: ChangeEvent<null | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setLetterData({...letterData, [name]: value});
  };

  const modalHandler = ():void => {
    setModal(!modal);
  };

  const resetData = ():void => {
    setLetterData(letterValues);
  };

  return (
    <Container
      className="bg-white border vh-100"
      fluid
    >
      <TemplateModal
        modal={modal}
        modalHandler={modalHandler}
        letterData={letterData}
        setLetterData={setLetterData}
        resetData={resetData}
      />
      <Row className="py-5 my-5">
        <Col xs="6">
          <Card>
            <CardHeader className="fw-bold h5 py-3">
              Настройки шаблона
              <Button color="primary" className="ms-3" onClick={() => modalHandler()}>
                Изменить
              </Button>
            </CardHeader>
            <CardBody>
              <UploadImageInput setImage={(image) => setLetterData({...letterData, 'image': image})} />
              <TitleInput
                title={letterData.title}
                handleInputChange={handleInputChange}
              />
              <EditorInput
                body={letterData.body}
                handleReactQuillChange={(body) => setLetterData({...letterData, 'body': body})}
              />
              <MainButton
                title={letterData.mainButtonTitle}
                url={letterData.mainButtonUrl}
                addButton={letterData.addButton}
                handleCheckboxChange={(addButton) => setLetterData({...letterData, 'addButton': addButton})}
                handleInputChange={handleInputChange}
              />
              {letter.current && <SaveButtons letter={letter.current} />}
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <div ref={letter}>
            <BaseDod letterData={letterData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
