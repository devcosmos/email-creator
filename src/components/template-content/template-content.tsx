import { LetterData } from '../../types/data';
import TemplateButton from '../template-button/template-button';
import TemplateHero from '../template-hero/template-hero';

type TemplateContentProps = {
  letterData: LetterData;
}

function TemplateContent({ letterData }: TemplateContentProps): JSX.Element {
  const { image, title, body, mainButtonTitle, mainButtonUrl, addButton, signatureType, accentStyle } = letterData;

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
            borderRadius: '40px',
            backgroundColor: '#FFFFFF',
            marginBottom: '2.25%',
          }}
        >
          <tbody>

            {image && <TemplateHero title={title} image={image} />}

            {(title || body) && (
              <tr style={{ margin: 0, padding: 0 }}>
                <td style={{ margin: 0, padding: 0 }}>
                  <table
                    align="center"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    role="presentation"
                    style={{
                      marginTop: '30px',
                      marginLeft: '5%',
                      marginRight: '5%',
                      minWidth: '120px'
                    }}
                  >
                    <tbody>

                      {title && (
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
                              {title}
                            </p>
                          </td>
                        </tr>
                      )}

                      {body && (
                        <tr style={{ margin: 0, padding: 0 }}>
                          <td style={{ margin: 0, padding: 0 }}>
                            <div
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
                              dangerouslySetInnerHTML={{__html: body}}
                            />
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </td>
              </tr>
            )}

            {addButton && mainButtonUrl && mainButtonTitle && <TemplateButton url={mainButtonUrl} title={mainButtonTitle} type={signatureType} accentStyle={accentStyle} />}

          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TemplateContent;
