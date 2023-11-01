type TemplateHeroProps = {
  title: string;
  image: string;
}

function TemplateHero({ title, image }: TemplateHeroProps): JSX.Element {
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
            minWidth: '200px',
            marginTop: '3%',
            marginLeft: '3%',
            marginRight: '3%',
          }}
        >
          <tbody>
            <tr style={{ margin: 0, padding: 0 }}>
              <td align="center" style={{ margin: 0, padding: 0 }}>
                <img
                  src={image}
                  alt={title}
                  style={{ borderRadius: '22.5px', width: '100%' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default TemplateHero;
