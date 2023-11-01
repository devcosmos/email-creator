import { SignatureScheme } from '../../const';
import { LetterData } from '../../types/data';
import TemplateContact from '../template-contact/template-contact';
import TemplateContent from '../template-content/template-content';
import TemplateLogo from '../template-logo/template-logo';
import TemplateSocialContent from '../template-social-content/template-social-content';

type TemplateProps = {
  letterData: LetterData;
}

function Template({ letterData }: TemplateProps): JSX.Element {
  const { accentStyle, signatureType, addSocial } = letterData;

  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        background: accentStyle
          ? SignatureScheme[signatureType].backgroundColorAccent
          : SignatureScheme[signatureType].backgroundColor,
      }}
    >
      <table
        align="center"
        border={0}
        cellSpacing={0}
        cellPadding={0}
        role="presentation"
        style={{
          color: '#1C1E23',
          fontFamily: 'Helvetica, sans-serif, Arial',
          margin: 'auto',
          padding: 0,
          width: '94%',
          minWidth: '200px',
          maxWidth: '600px',
        }}
      >
        <tbody>

          <TemplateLogo accentStyle={accentStyle} type={signatureType} />

          <TemplateContent letterData={letterData} />

          {addSocial && <TemplateSocialContent letterData={letterData} />}

          <TemplateContact accentStyle={accentStyle} type={signatureType} />

        </tbody>
      </table>
    </div>
  );
}

export default Template;
