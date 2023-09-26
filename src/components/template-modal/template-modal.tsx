import React from 'react';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import UploadJsonInput from '../upload-json-input/upload-json-input';
import { LetterData } from '../../types/data';

type TemplateModalProps = {
  modal: boolean;
  modalHandler: () => void;
  letterData: LetterData;
  setLetterData: (jsonData: LetterData) => void;
  resetData: () => void;
}

const TemplateModal = ({ modal, modalHandler, letterData, setLetterData, resetData }: TemplateModalProps):JSX.Element => {
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

  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={modalHandler}>Изменить настройки шаблона</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="mb-4">
            <Label className="w-100">Сброс настроек</Label>
            <Button onClick={resetData} color="primary" outline>Сбросить</Button>
          </FormGroup>
          <FormGroup className="mb-4">
            <Label className="w-100">Сохранить настройки</Label>
            <Button color="primary" outline onClick={() => exportJSON()}>Скачать</Button>
          </FormGroup>
          <UploadJsonInput onFileRead={(jsonData) => setLetterData(jsonData ? jsonData : letterData)} letterData={letterData} setLetterData={(jsonData) => setLetterData} />
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default TemplateModal;
