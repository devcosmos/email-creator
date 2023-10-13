import { SignatureScheme, SignatureType } from '../../const';

type TemplateLogoProps = {
  accentStyle: boolean;
  type: SignatureType;
}

function TemplateLogo({ accentStyle, type }: TemplateLogoProps): JSX.Element {
  const logo = accentStyle
    ? SignatureScheme[type].imageAccent
    : SignatureScheme[type].image;

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
            marginTop: '15px',
            marginBottom: '15px',
            width: '80%',
            minWidth: '200px',
            maxWidth: '280px',
          }}
        >
          <tbody>
            <tr style={{ margin: 0, padding: 0 }}>
              <td align="center" style={{ margin: 0, padding: 0 }}>
                <a href="https://mai.ru" target="_blank" rel="noreferrer">
                  <img
                    src={`https://dev.mai.ru/services/email-creator/images/${logo}`}
                    alt="MAI Logo"
                    style={{ width: '100%' }}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TemplateLogo;
