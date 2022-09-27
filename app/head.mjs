export default function Head(req={}) {
    const { path } = req
    const title = `My app — ${path}`
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="/_static/styles.css">
        <link rel="icon" href="/_static/favicon.ico">
      </head>
    `
  }