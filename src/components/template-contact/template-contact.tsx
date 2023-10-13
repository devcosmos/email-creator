import { SignatureScheme, SignatureType } from '../../const';

type TemplateContactProps = {
  accentStyle: boolean;
  type: SignatureType;
}

function TemplateContact({ accentStyle, type }: TemplateContactProps): JSX.Element {
  const { url, title, signatureWidth } = SignatureScheme[type];
  return (
    <tr style={{ margin: 0, padding: 0 }}>
      <td style={{ margin: 0, padding: 0 }}>
        <table
          align="center"
          border={0}
          cellSpacing={0}
          cellPadding={0}
          role="presentation"
          style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '5px',
            marginBottom: '30px',
          }}
        >
          <tbody>
            <tr style={{ margin: 0, padding: 0 }}>
              <td style={{ margin: 0, padding: 0 }}>
                <div style={{ width: '100%', display: 'inline-block' }}>
                  <span
                    style={{
                      display: 'block',
                      color: accentStyle ? '#FFFFFF' : '#000000',
                      fontSize: '15px',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                      textDecoration: 'none',
                      paddingBottom: '0px',
                      WebkitTextSizeAdjust: 'none',
                    }}
                  >
                    С любовью&nbsp;❤️
                  </span>
                </div>
              </td>
            </tr>
            <tr style={{ margin: 0, padding: 0 }}>
              <td style={{ margin: 0, padding: 0 }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: `${signatureWidth}px`,
                    display: 'inline-block',
                    verticalAlign: 'top'
                  }}
                >
                  <a
                    href={type === SignatureType.Priem ? 'https://mai.ru/' : url}
                    style={{
                      display: 'block',
                      color: accentStyle ? '#FFFFFF' : '#000000',
                      fontSize: '15px',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                      textDecoration: 'none',
                      paddingBottom: '0px',
                      WebkitTextSizeAdjust: 'none',
                    }}
                  >
                    Ваш {title} ✈️
                  </a>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'top'
                  }}
                >
                  <a
                    style={{
                      display: 'block',
                      color: accentStyle ? '#FFFFFF' : '#000000',
                      fontSize: '15px',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                      textAlign: 'right',
                      textDecoration: 'none',
                      paddingBottom: '0px',
                      WebkitTextSizeAdjust: 'none',
                    }}
                    href={url}
                  >
                    🌐&nbsp;{type}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TemplateContact;
