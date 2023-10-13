import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ChangeEvent } from 'react';

type MainButtonProps = {
  title: string;
  url: string;
  addButton: boolean;
  handleCheckboxChange: (addButton: boolean) => void;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function MainButton({ title, url, addButton, handleCheckboxChange, handleInputChange }: MainButtonProps): JSX.Element {
  return (
    <>
      <FormGroup switch>
        <Input
          type="switch"
          checked={addButton}
          name="addButton"
          id="addButtonCheckbox"
          onChange={() => handleCheckboxChange(!addButton)}
        />
        <Label check for="addButtonCheckbox">Добавить кнопку?</Label>
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
                onChange={handleInputChange}
                value={title}
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
                onChange={handleInputChange}
                value={url}
                required
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </>
  );
}

export default MainButton;
