export default function Head(req={}) {
    const { path } = req
    const title = 'Moxie Woods'
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="/public/styles.css">
        <link rel="icon" href="/public/favicon.ico">
      </head>
    `
  }