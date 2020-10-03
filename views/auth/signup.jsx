const React = require("react");
const Layout = require("../layout.jsx");

class Signup extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="signupField">
          <form action="/auth/signup" method="post">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="signup" />
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Signup;
