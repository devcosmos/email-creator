import { ChangeEvent, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import UploadImageInput from '../upload-image-input/upload-image-input';
import EditorInput from '../editor-input/editor-input';
import BaseDod from '../email-template/base-dod';
import TitleInput from '../title-input/title-input';
import SaveButtons from '../save-buttons/save-buttons';

/*
Идеи/Баги:
1. Валидация загрузки изображения
2. Сохранить последний шаблон в local storage
3. Вариации логотипов и цветов
4. Вариации блоков после основного тела
5. Импорт/Экспорт настроек
*/

function App(): JSX.Element {
  const [letterTitle, setLetterTitle] = useState<string>('Привет!');
  const [letterBody, setLetterBody] = useState<string>('Здесь могла бы быть ваша реклама...');
  const [letterImage, setLetterImage] = useState<null | string>(null);
  const letter = useRef<null | HTMLDivElement>(null);

  const [addButton, setAddButton] = useState(false);
  const [letterMainButtonTitle, setMainButtonTitle] = useState<string>('Подробнее');
  const [letterMainButtonUrl, setMainButtonUrl] = useState<string>('https://mai.ru/');

  return (
    <Container
      className="bg-white border vh-100"
      fluid
    >
      <Row className="py-5 my-5">
        <Col xs="6">
          <Card>
            <CardHeader className="fw-bold h5 py-3">
              Настройки шаблона
            </CardHeader>
            <CardBody>
              <UploadImageInput setImage={setLetterImage} />
              <TitleInput title={letterTitle} setTitle={setLetterTitle} />
              <EditorInput body={letterBody} setBody={setLetterBody} />
              <FormGroup switch>
                <Input
                  type="switch"
                  checked={addButton}
                  onChange={() => {
                    setAddButton(!addButton);
                  }}
                />
                <Label check>Добавить кнопку?</Label>
              </FormGroup>
              {addButton && (
                <Row className="mt-4">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="mainButtonTitle">
                        Текст кнопки
                      </Label>
                      <Input
                        id="mainButtonTitle"
                        name="mainButtonTitle"
                        type="text"
                        onChange={(evt: ChangeEvent<HTMLInputElement>) => setMainButtonTitle(evt.target.value)}
                        value={letterMainButtonTitle}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="mainButtonUrl">
                        Ссылка
                      </Label>
                      <Input
                        id="mainButtonUrl"
                        name="mainButtonUrl"
                        type="url"
                        onChange={(evt: ChangeEvent<HTMLInputElement>) => setMainButtonUrl(evt.target.value)}
                        value={letterMainButtonUrl}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              )}
              {letter.current && <SaveButtons letter={letter.current} />}
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <div ref={letter}>
            <BaseDod title={letterTitle} image={letterImage} body={letterBody} addButton={addButton} buttonTitle={letterMainButtonTitle} buttonUrl={letterMainButtonUrl}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
