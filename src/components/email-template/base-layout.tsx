type BaseLayoutProps = {
  children: JSX.Element;
}

function BaseLayout({ children }: BaseLayoutProps): JSX.Element {
  return (
    <table
      align="center"
      width="100%"
      cellSpacing="0"
      cellPadding="0"
      border={0}
    >
      <tbody>
        <tr>
          <td align="center">
            <table
              align="center"
              width="100%"
              cellSpacing="0"
              cellPadding="0"
              border={0}
              style={{
                maxWidth: '760px'
              }}
            >
              <tbody>
                <tr>
                  <td align="center">
                    <table
                      align="center"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={{
                        borderSpacing: 0,
                        margin: 0,
                        padding: 0,
                        backgroundColor: '#F7FAFF',
                        fontSize: '0px',
                      }}
                    >
                      <tbody>
                        {children}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BaseLayout;
