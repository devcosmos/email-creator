import { useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { LetterData } from '../../types/data';
import { SignatureType } from '../../const';
import Template from '../template/template';
import Settings from '../settings/settings';
import Header from '../header/header';

function App(): JSX.Element {
  const letter = useRef<null | HTMLDivElement>(null);

  const [letterData, setLetterData] = useState<LetterData>({
    title: 'Привет ✨',
    image: 'images/example.webp',
    body: 'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».',
    signatureType: SignatureType.Mai,
    accentStyle: false,
    addButton: false,
    addSocial: false,
    mainButtonTitle: 'Подробнее',
    mainButtonUrl: 'https://mai.ru/',
  });

  return (
    <>
      <Header />
      <Container className="h-100 px-sm-5" fluid>
        <Row className="py-5 gy-5">
          <Col sm="6">
            <Settings letter={letter} letterData={letterData} setLetterData={setLetterData} />
          </Col>
          <Col sm="6">
            <div ref={letter} className="rounded overflow-hidden">
              <Template letterData={letterData} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
