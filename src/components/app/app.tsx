import { ChangeEvent, useRef, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import EditorInput from '../editor-input/editor-input';
import BaseDod from '../email-template/base-dod';
import ImageInput from '../image-input/image-input';
import TitleInput from '../title-input/title-input';
import SaveButtons from '../save-buttons/save-buttons';
import { LetterData } from '../../types/data';
import MainButton from '../main-button/main-button';

function App(): JSX.Element {
  const letter = useRef<null | HTMLDivElement>(null);

  const [letterData, setLetterData] = useState<LetterData>({
    title: 'Привет!',
    image: '/images/example.webp',
    body: 'Здесь могла бы быть ваша реклама...',
    addButton: false,
    mainButtonTitle: 'Подробнее',
    mainButtonUrl: 'https://mai.ru/',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setLetterData({...letterData, [name]: value});
  };

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
              <ImageInput
                image={letterData.image}
                handleInputChange={handleInputChange}
              />
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
