const Html = ({ body, initialState }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Portfolio</title>
      <meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="/bundle.css">
    </head>
    <script src="/bundle.js" defer></script>
    <script>window.__INITIAL_STATE=${initialState}</script>
    <body style="margin:0;background:#f5f7fa">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;