import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import EditorInput from '../editor-input/editor-input';
import SaveButtons from '../save-buttons/save-buttons';
import SignatureTypeSelect from '../signature-type-select/signature-type-select';
import AccentStyleCheckbox from '../accent-style-checkbox/accent-style-checkbox';
import { LetterData } from '../../types/data';
import { ChangeEvent, MutableRefObject } from 'react';
import SettingBaseInput from '../setting-base-input/setting-base-input';
import SettingBaseSwitch from '../setting-base-switch/setting-base-switch';
import { DevicesView } from '../../const';

type SettingsProps = {
  letter: MutableRefObject<HTMLDivElement | null>;
  letterData: LetterData;
  setLetterData: (letterData: LetterData) => void;
  devicesView: DevicesView;
  setDevicesView: (devicesView: DevicesView) => void;
}

function Settings({ letter, letterData, setLetterData, devicesView, setDevicesView }: SettingsProps) {
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
        <Row className="gy-1 gy-sm-2">
          <SettingBaseInput
            label="Основное изображние"
            value={letterData.image}
            name="image"
            handleInputChange={handleInputChange}
          />
          <SettingBaseInput
            label="Основное заголовок"
            value={letterData.title}
            name="title"
            handleInputChange={handleInputChange}
          />
          <Col xl="6">
            <SignatureTypeSelect
              signatureType={letterData.signatureType}
              handleInputChange={handleInputChange}
            />
          </Col>
          <Col xl="6">
            <AccentStyleCheckbox
              accentStyle={letterData.accentStyle}
              handleCheckboxChange={(accentStyle) => setLetterData({...letterData, 'accentStyle': accentStyle})}
            />
          </Col>
          <Col xs="12">
            <EditorInput
              body={letterData.body}
              handleReactQuillChange={(body) => setLetterData({...letterData, 'body': body})}
            />
          </Col>
          <SettingBaseSwitch
            label="Добавить большую кнопку"
            value={letterData.addButton}
            name="addButton"
            handleCheckboxChange={(addButton) => setLetterData({...letterData, 'addButton': addButton})}
          />
          {letterData.addButton && (
            <>
              <SettingBaseInput
                label="Текст кнопки"
                value={letterData.mainButtonTitle}
                name="mainButtonTitle"
                isHalf
                handleInputChange={handleInputChange}
              />
              <SettingBaseInput
                label="Ссылка"
                value={letterData.mainButtonUrl}
                name="mainButtonUrl"
                isHalf
                handleInputChange={handleInputChange}
              />
            </>
          )}
          <SettingBaseSwitch
            label="Добавить блок с соцсетями"
            value={letterData.addSocial}
            name="social"
            handleCheckboxChange={(addSocial) => setLetterData({...letterData, 'addSocial': addSocial})}
          />
          <Col xs="12">
            {letter.current && (
              <SaveButtons
                letter={letter.current}
                devicesView={devicesView}
                setDevicesView={setDevicesView}
              />
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Settings;
