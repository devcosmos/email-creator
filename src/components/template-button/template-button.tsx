import { SignatureScheme, SignatureType } from '../../const';

type TemplateButtonProps = {
  url: string;
  title: string;
  type: SignatureType;
  accentStyle: boolean;
  socialUrlVK?: string;
  socialUrlTelegram?: string;
}

function TemplateButton({ url, title, type, accentStyle, socialUrlVK, socialUrlTelegram }: TemplateButtonProps): JSX.Element {
  return (
    <tr style={{ margin: 0, padding: 0, display: 'block', marginLeft: '5%', marginBottom: '30px', }}>
      <td style={{ margin: 0, padding: 0 }}>
        <table
          border={0}
          cellSpacing={0}
          cellPadding={0}
          role="presentation"
          style={{ width: '200px' }}
        >
          <tbody>
            <tr style={{ margin: 0, padding: 0 }}>
              <td
                style={{
                  margin: 0,
                  padding: 0,
                  borderRadius: '8px',
                  width: '100%',
                  backgroundColor: accentStyle
                    ? SignatureScheme[type].buttonColorAccent
                    : SignatureScheme[type].buttonColor,
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  rel="noreferrer"
                >
                  <p
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      marginTop: '10px',
                      marginBottom: '10px',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '28px'
                    }}
                  >
                    {title}
                  </p>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>

      {socialUrlVK && (
        <td style={{ margin: 0, padding: 0 }}>
          <a href={socialUrlVK} target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>
            <img src={`https://dev.mai.ru/services/email-creator/images/${accentStyle ? 'vk-color-v2' : 'vk-black-v2'}.png`} alt="ВКонтакте" style={{ width: '33px', height: '33px' }} />
          </a>
        </td>
      )}

      {socialUrlTelegram && (
        <td style={{ margin: 0, padding: 0 }}>
          <a href={socialUrlTelegram} target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>
            <img src={`https://dev.mai.ru/services/email-creator/images/${accentStyle ? 'telegram-color-v2' : 'telegram-black-v2'}.png`} alt="Телеграм" style={{ width: '33px', height: '33px' }} />
          </a>
        </td>
      )}
    </tr>
  );
}

export default TemplateButton;
