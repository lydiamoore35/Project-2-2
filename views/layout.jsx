const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="https://fonts.googleapis.com/css2?family=Rancho&family=Spectral+SC:wght@500&display=swap" rel="stylesheet">
          </link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Create Your Cookbook</h1>
              <nav>
                <span><a href="/"> | Home | </a></span>
                <span><a href="/auth/signup"> | Sign Up | </a></span>
                <span><a href="/auth/login"> | Log In |</a></span>
                <span><a href="/auth/logout"> | Log Out | </a></span>
                <span><a href="/"> | Recipes | </a></span>
              </nav>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h5>created by Lydia Moore</h5>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;