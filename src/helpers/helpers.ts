const nodeToString = (node: HTMLDivElement): string => {
  const tmpNode = document.createElement( 'div' );
  tmpNode.appendChild( node.cloneNode( true ) );

  return tmpNode.innerHTML.replaceAll('<p>', '<p style="margin-top: 0; margin-bottom: 15px;">');
};

export const copyToClipboard = (html: HTMLDivElement): void => {
  navigator.clipboard.writeText(nodeToString(html));
};

export const downloadFile = (html: HTMLDivElement): void => {
  const file = new Blob(
    [new Uint8Array([0xEF, 0xBB, 0xBF]), nodeToString(html)],
    {type: 'text/html;charset=utf-8'}
  );
  const element = document.createElement('a');
  element.href = URL.createObjectURL(file);
  element.download = `${new Date().getTime().toString()}.html`;
  document.body.appendChild(element);
  element.click();
  element.remove();
};
