const React = require("react");
const Layout = require("../layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <h3 className="failedLogin">Failed To Log In</h3>
      </Layout>
    );
  }
}

module.exports = Fail;
