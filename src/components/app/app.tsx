import { ChangeEvent, useRef, useState} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import UploadImageInput from '../upload-image-input/upload-image-input';
import UploadJsonInput from '../upload-json-input/upload-json-input';
import EditorInput from '../editor-input/editor-input';
import BaseDod from '../email-template/base-dod';
import TitleInput from '../title-input/title-input';
import SaveButtons from '../save-buttons/save-buttons';
import { LetterData } from '../../types/data';
import MainButton from '../main-button/main-button';
import {letterValues} from '../../helpers/objects';

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

  const downloadFile = (data: string, fileName: string, fileType: string):void => {
    const blob = new Blob([JSON.stringify(letterData)], { type: fileType });
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportJSON = ():void => {
    const data: string = JSON.stringify(letterData);
    downloadFile(
      data,
      'letter.json',
      'text/json',
    );
  };

  const resetData = ():void => {
    console.log('Сбросилось');
    setLetterData(letterValues);
  };

  return (
    <Container
      className="bg-white border vh-100"
      fluid
    >
      <Modal isOpen={modal}>
        <ModalHeader toggle={modalHandler}>Изменить настройки шаблона</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-4">
              <Label className="w-100">Сброс настроек</Label>
              <Button onClick={() => resetData()} color="primary" outline>Сбросить</Button>
            </FormGroup>
            <FormGroup className="mb-4">
              <Label className="w-100">Сохранить настройки</Label>
              <Button color="primary" outline onClick={() => exportJSON()}>Скачать</Button>
            </FormGroup>
            <UploadJsonInput onFileRead={(jsonData) => setLetterData(jsonData ? jsonData : letterData)} letterData={letterData} />
          </Form>
        </ModalBody>
      </Modal>
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
