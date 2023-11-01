import { SignatureScheme } from '../../const';
import { LetterData } from '../../types/data';
import TemplateButton from '../template-button/template-button';

type TemplateSocialContentProps = {
  letterData: LetterData;
}

function TemplateSocialContent({ letterData }: TemplateSocialContentProps): JSX.Element {
  const { signatureType, accentStyle } = letterData;

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
            maxWidth:' 600px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            marginBottom: '30px',
          }}
        >
          <tbody>

            <tr style={{ margin: 0, padding: 0 }}>
              <td style={{ margin: 0, padding: 0 }}>
                <table
                  align="center"
                  border={0}
                  cellSpacing={0}
                  cellPadding={0}
                  role="presentation"
                  style={{
                    marginTop: '4%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    minWidth: '120px'
                  }}
                >
                  <tbody>

                    <tr style={{ margin: 0, padding: 0 }}>
                      <td style={{ margin: 0, padding: 0 }}>
                        <p
                          style={{
                            padding: 0,
                            margin: 0,
                            color: '#000000',
                            fontSize: '24px',
                            fontWeight: 600,
                            fontStretch: 'expanded',
                            marginBottom: '15px',
                          }}
                        >
                          Будь в курсе всех мероприятий ✨
                        </p>
                      </td>
                    </tr>

                    <tr style={{ margin: 0, padding: 0 }}>
                      <td style={{ margin: 0, padding: 0 }}>
                        <p
                          style={{
                            display: 'block',
                            color: '#000000',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                            fontSize: '17px',
                            fontWeight: 'normal',
                            lineHeight: '24px',
                            textAlign: 'left',
                            textDecoration: 'none',
                            WebkitTextSizeAdjust: 'none',
                            marginBottom: '30px',
                          }}
                        >
                          {SignatureScheme[signatureType].socialText}
                        </p>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </td>
            </tr>

            <TemplateButton
              url={SignatureScheme[signatureType].socialUrlTelegram}
              title="Подписаться"
              type={signatureType}
              accentStyle={accentStyle}
              socialUrlVK={SignatureScheme[signatureType].socialUrlVK}
              socialUrlTelegram={SignatureScheme[signatureType].socialUrlTelegram}
            />

          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TemplateSocialContent;
