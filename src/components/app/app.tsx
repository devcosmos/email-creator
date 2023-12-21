import { useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { LetterData } from '../../types/data';
import { DevicesView, SignatureType } from '../../const';
import Template from '../template/template';
import Settings from '../settings/settings';
import Header from '../header/header';

function App(): JSX.Element {
  const letter = useRef<null | HTMLDivElement>(null);

  const [devicesView, setDevicesView] = useState(DevicesView.Browser);

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
            <Settings
              letter={letter}
              letterData={letterData}
              setLetterData={setLetterData}
              devicesView={devicesView}
              setDevicesView={setDevicesView}
            />
          </Col>
          <Col sm="6">
            {devicesView === DevicesView.Mobile && (
              <div className="d-flex justify-content-center">
                <figure className="device-mobile">
                  <div className="device-mobile-frame">
                    <div className="device-mobile-content">
                      <div ref={letter}>
                        <Template letterData={letterData} />
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            )}
            {devicesView === DevicesView.Browser && (
              <figure className="device-browser">
                <div className="device-browser-header">
                  <div className="device-browser-header-btn-list">
                    <span className="device-browser-header-btn-list-btn"></span>
                    <span className="device-browser-header-btn-list-btn"></span>
                    <span className="device-browser-header-btn-list-btn"></span>
                  </div>
                  <div className="device-browser-header-browser-bar">mail.mai.ru</div>
                </div>

                <div className="device-browser-frame">
                  <div ref={letter}>
                    <Template letterData={letterData} />
                  </div>
                </div>
              </figure>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
