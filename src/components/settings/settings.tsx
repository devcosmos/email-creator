import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import EditorInput from '../editor-input/editor-input';
import ImageInput from '../image-input/image-input';
import TitleInput from '../title-input/title-input';
import SaveButtons from '../save-buttons/save-buttons';
import MainButton from '../main-button/main-button';
import SignatureTypeSelect from '../signature-type-select/signature-type-select';
import AccentStyleCheckbox from '../accent-style-checkbox/accent-style-checkbox';
import { LetterData } from '../../types/data';
import { ChangeEvent, MutableRefObject } from 'react';
import SocialCheckbox from '../social-checkbox/social-checkbox';

type SettingsProps = {
  letter: MutableRefObject<HTMLDivElement | null>;
  letterData: LetterData;
  setLetterData: (letterData: LetterData) => void;
}

function Settings({letter, letterData, setLetterData}: SettingsProps) {
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setLetterData({...letterData, [name]: value});
  };

  return (
    <Card className="sticky-top">
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
        <Row>
          <Col lg="6">
            <SignatureTypeSelect
              signatureType={letterData.signatureType}
              handleInputChange={handleInputChange}
            />
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <AccentStyleCheckbox
              accentStyle={letterData.accentStyle}
              handleCheckboxChange={(accentStyle) => setLetterData({...letterData, 'accentStyle': accentStyle})}
            />
          </Col>
        </Row>
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
        <SocialCheckbox
          addSocial={letterData.addSocial}
          handleCheckboxChange={(addSocial) => setLetterData({...letterData, 'addSocial': addSocial})}
        />
        {letter.current && <SaveButtons letter={letter.current} />}
      </CardBody>
    </Card>
  );
}

export default Settings;
