import { SignatureScheme, SignatureType } from '../../const';

type TemplateButtonProps = {
  url: string;
  title: string;
  type: SignatureType;
  accentStyle: boolean;
}

function TemplateButton({ url, title, type, accentStyle }: TemplateButtonProps): JSX.Element {
  return (
    <tr style={{ margin: 0, padding: 0 }}>
      <td style={{ margin: 0, padding: 0 }}>
        <table
          border={0}
          cellSpacing={0}
          cellPadding={0}
          role="presentation"
          style={{
            marginLeft: '5%',
            marginBottom: '30px',
            width: '50%',
          }}
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
    </tr>
  );
}

export default TemplateButton;
