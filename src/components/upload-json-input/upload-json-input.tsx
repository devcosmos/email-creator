import React, { ChangeEvent, useState } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import { LetterData } from '../../types/data';

interface UploadJsonInputProps {
  onFileRead: (data: LetterData | null) => void;
  letterData: LetterData;
  setLetterData: (data: LetterData | null) => void;
}

const UploadJsonInput: React.FC<UploadJsonInputProps> = ({ onFileRead, letterData, setLetterData}) => {
  const [fileData, setFileData] = useState<string | null>(JSON.stringify(letterData));
  const [uploadedData, setUploadedData] = useState<LetterData | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = e.target?.result as string;
        setFileData(jsonData); // Обновляем состояние с содержимым JSON файла
      };
      reader.readAsText(file);
    }
  };

  const applyChanges = () => {
    console.log('applyChanges');
    try {
      if (fileData) {
        const jsonData = JSON.parse(fileData) as LetterData;
        setUploadedData(jsonData);
        setLetterData(jsonData);
        onFileRead(jsonData);
      }
    } catch (error) {
      console.error('Ошибка при чтении JSON файла:', error);
    }
  };

  return (
    <FormGroup>
      <Label htmlFor="">Перенос настроек</Label>
      <Input type="file" name="file" id="exampleFile" accept=".json" onChange={handleFileChange} />
      <Input
        className="mt-3 mb-3"
        type="textarea"
        name="text"
        id="exampleText"
        value={fileData || JSON.stringify(uploadedData, null, 2)}
        rows="8"
        readOnly
      />
      <Button color="primary" onClick={applyChanges}>Применить</Button>
    </FormGroup>
  );
};

export default UploadJsonInput;
