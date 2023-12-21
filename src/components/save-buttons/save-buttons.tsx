import { Button } from 'reactstrap';
import { copyToClipboard, downloadFile } from '../../helpers/helpers';
import { DevicesView } from '../../const';
import { BrowserSvg, MobileSvg, ClipboadrSvg, CheckSvg, SaveSvg} from './icons/index';
import { useState } from 'react';

type SaveButtonsProps = {
  letter: HTMLDivElement;
  devicesView: DevicesView;
  setDevicesView: (devicesView: DevicesView) => void;
}

function SaveButtons({ letter, devicesView, setDevicesView }: SaveButtonsProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="d-flex justify-content-between">
      <div>
        <Button
          color="primary"
          size="lg"
          style={{ minWidth: '190px' }}
          className="me-3 mt-3 d-inline-flex align-items-center justify-content-center"
          onClick={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000);
            copyToClipboard(letter);
          }}
        >
          {isCopied ? (
            <><CheckSvg className="me-2"/>Скопировано</>
          ) : (
            <><ClipboadrSvg className="me-2"/>Скопировать</>
          )}
        </Button>
        <Button
          color="secondary"
          size="lg"
          className="mt-3"
          onClick={() => downloadFile(letter)}
        >
          <SaveSvg />
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
