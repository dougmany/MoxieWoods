export default function MyHeader({ html }) {
    return html`
      <header>
        <h1>Moxie Woods</h1>
        <nav>
          <a href=/>Home</a> |
          <a href=/about>About</a>
        </nav>
        <img src="/_static/logo.jpg" width=100px;>
      </header>
    `
  }