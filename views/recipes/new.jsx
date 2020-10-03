const React = require("react");
const Layout = require("../layout.jsx");

class New extends React.Component {
  render() {
    // const {recipes} = this.props
    return (
      <Layout title="Add New Recipe">
        <form action="/recipe/" method="post">
          
          <label for="category">Choose a Category</label>
          <select id="category" name="category">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Snacks">Snacks</option>
          </select>
          Recipe<input type="text" placeholder="Name of your recipe" name="recipe"/>
          Image<input type="text" placeholder="Copy and paste url here" name="img"/>
          Directions<input type="text" name="description"/>
          Time<input type="text" name="time"/>
          Servings<input type="text" name="servings"/>
          <input type="submit" value="Add Recipe"/>
        </form>
      </Layout>
    );
  }
}

module.exports = New;
