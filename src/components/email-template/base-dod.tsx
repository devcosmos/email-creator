import { MAI_LOGO } from '../../images-base64/logo-mai';
import { LetterData } from '../../types/data';
import BaseLayout from './base-layout';

type BaseDodProps = {
  letterData: LetterData;
};

function BaseDod({ letterData }: BaseDodProps): JSX.Element {
  const { title, body, mainButtonTitle, mainButtonUrl, addButton, image } = letterData;

  return (
    <BaseLayout>
      <>
        <tr>
          <td
            align="center"
            style={{
              paddingBottom: '40px',
              paddingTop: '40px',
            }}
          >
            <img
              src={MAI_LOGO}
              width="247"
              alt="Московский авиационный институт"
              style={{
                width: '100%',
                maxWidth: '275px',
                height: 'auto',
              }}
            />
          </td>
        </tr>
        {image && (
          <tr>
            <td align="center">
              <img
                src={image}
                width="760"
                alt={title}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </td>
          </tr>
        )}
        <tr>
          <td>
            <table
              align="center"
              width="100%"
              cellSpacing="0"
              cellPadding="0"
              border={0}
              style={{
                maxWidth: '570px',
                paddingTop: '40px',
                paddingBottom: '40px',
                paddingRight: '20px',
                paddingLeft: '20px',
                display: 'block',
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: 'center',
                      paddingTop: '10px',
                      paddingBottom: '40px',
                      paddingRight: '0px',
                      paddingLeft: '0px',
                      width: '100%',
                      WebkitTextSizeAdjust: 'none',
                      textDecoration: 'none',
                      fontFamily: 'Arial,Helvetica,sans-serif',
                      lineHeight: '28px',
                      fontWeight: 'normal',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        paddingBottom: '10px',
                        fontSize: '24px',
                        fontWeight: 'normal',
                      }}
                    >
                      {title}
                    </span>
                    {body && (
                      <div
                        style={{
                          textAlign: 'left',
                          WebkitTextSizeAdjust: 'none',
                          textDecoration: 'none',
                          color: '#000000',
                          fontFamily:
                            'Arial,Helvetica,sans-serif',
                          fontSize: '15px',
                          lineHeight: '24px',
                          fontWeight: 'normal',
                          display: 'block',
                          paddingBottom: '40px',
                        }}
                        dangerouslySetInnerHTML={{__html: body}}
                      />
                    )}
                    <span
                      style={{
                        textAlign: 'left',
                        WebkitTextSizeAdjust: 'none',
                        textDecoration: 'none',
                        color: '#000000',
                        fontFamily:
                          'Arial,Helvetica,sans-serif',
                        fontSize: '15px',
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        display: 'block',
                        paddingBottom: '40px',
                      }}
                    >
                      Не&nbsp;забудь подписаться на&nbsp;
                      <a href="https://t.me/postupi_v_mai">
                        telegram-канал &laquo;Поступи
                        в&nbsp;МАИ&raquo;,
                      </a>{' '}
                      чтобы не&nbsp;пропустить новости
                      о&nbsp;поступлении и&nbsp;мероприятиях.
                    </span>
                    {addButton && mainButtonUrl && mainButtonTitle && (
                      <table
                        align="center"
                        cellSpacing="0"
                        cellPadding="0"
                        style={{
                          padding: '0px',
                          width: '100%',
                          background: '#6e44fe',
                          maxWidth: '240px',
                          border: '0',
                          borderSpacing: '0',
                        }}
                      >
                        <tbody>
                          <tr
                            style={{
                              margin: '0px',
                              padding: '0px',
                            }}
                          >
                            <td
                              width="100%"
                              align="center"
                              style={{
                                paddingTop: '12px',
                                paddingBottom: '12px',
                              }}
                            >
                              <a
                                href={mainButtonUrl}
                                style={{
                                  WebkitTextSizeAdjust: 'none',
                                  textDecoration: 'none',
                                  color: '#ffffff',
                                  fontFamily:
                                    'Arial,Helvetica,sans-serif',
                                  fontSize: '14px',
                                  lineHeight: '18px',
                                  fontWeight: 'normal',
                                  display: 'block',
                                  textAlign: 'center',
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {mainButtonTitle.toUpperCase()}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingTop: '0px',
                      paddingBottom: '27px',
                      paddingRight: '0',
                      paddingLeft: '0',
                      fontSize: '0px',
                      lineHeight: '0px'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '406px',
                        display: 'inline-block',
                        verticalAlign: 'top'
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderSpacing: 0 }}>
                        <tbody>
                          <tr>
                            <td
                              align="left"
                              style={{
                                paddingTop: '4px',
                                paddingBottom: '0px',
                                paddingRight: '0px',
                                paddingLeft: '0px'
                              }}
                            >
                              <span
                                style={{
                                  WebkitTextSizeAdjust: 'none',
                                  textDecoration: 'none',
                                  color: '#000000',
                                  fontFamily: 'Arial,Helvetica,sans-serif',
                                  fontSize: '15px',
                                  lineHeight: '28px',
                                  fontWeight: 'normal',
                                  display: 'block',
                                  paddingBottom: '0px'
                                }}
                              >
                                С любовью&nbsp;❤️
                              </span>
                              <a
                                href="https://mai.ru/"
                                style={{
                                  textDecoration: 'none',
                                  fontFamily: 'Arial,Helvetica,sans-serif',
                                  fontSize: '15px',
                                  lineHeight: '28px',
                                  color: '#2900da',
                                  WebkitTextSizeAdjust: 'none',
                                  paddingBottom: '17px'
                                }}
                              >
                                <span style={{ color: '#000000' }}>Ваш&nbsp;</span>Московский&nbsp;авиационный&nbsp;институт&nbsp;✈️
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'top'
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderSpacing: 0 }}>
                        <tbody>
                          <tr>
                            <td
                              align="left"
                              style={{
                                paddingTop: '4px',
                                paddingBottom: '0px',
                                paddingRight: '0px',
                                paddingLeft: '0px'
                              }}
                            >
                              <a
                                style={{
                                  textDecoration: 'none',
                                  color: '#2900da',
                                  WebkitTextSizeAdjust: 'none',
                                  display: 'block',
                                  padding: '0',
                                  margin: '0',
                                  whiteSpace: 'nowrap',
                                  fontFamily: 'Arial,Helvetica,sans-serif',
                                  fontSize: '15px',
                                  lineHeight: '28px',
                                  textAlign: 'right'
                                }}
                                href="http://priem.mai.ru"
                              >🌐&nbsp;priem.mai.ru
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </>
    </BaseLayout>
  );
}

export default BaseDod;
