import { Button } from 'reactstrap';
import { copyToClipboard, downloadFile } from '../../helpers/helpers';
import { DevicesView } from '../../const';
import { ReactComponent as BrowserSvg } from './browser.svg';
import { ReactComponent as MobileSvg } from './mobile.svg';

type SaveButtonsProps = {
  letter: HTMLDivElement;
  devicesView: DevicesView;
  setDevicesView: (devicesView: DevicesView) => void;
}

function SaveButtons({ letter, devicesView, setDevicesView }: SaveButtonsProps): JSX.Element {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <Button
          color="primary"
          size="lg"
          className="me-3 mt-3"
          onClick={() => copyToClipboard(letter)}
        >
          Скопировать
        </Button>
        <Button
          color="primary"
          outline
          size="lg"
          className="mt-3"
          onClick={() => downloadFile(letter)}
        >
          Сохранить файл
        </Button>
      </div>
      <div className="btn-group mt-3 d-none d-xl-flex" role="group">
        <input type="radio" className="btn-check" name="devices" value={DevicesView.Browser} id="devicesBrowser" autoComplete="off" defaultChecked={devicesView === DevicesView.Browser} onClick={() => setDevicesView(DevicesView.Browser)} />
        <label className="btn btn-lg btn-outline-primary py-1" htmlFor="devicesBrowser">
          <BrowserSvg />
        </label>
        <input type="radio" className="btn-check" name="devices" value={DevicesView.Mobile} id="devicesMobile" autoComplete="off" defaultChecked={devicesView === DevicesView.Mobile} onClick={() => setDevicesView(DevicesView.Mobile)} />
        <label className="btn btn-lg btn-outline-primary py-1" htmlFor="devicesMobile">
          <MobileSvg />
        </label>
      </div>
    </div>
  );
}

export default SaveButtons;
