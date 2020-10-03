const React = require("react");
const Layout = require("../layout.jsx");

class Edit extends React.Component {
  render() {
    const {recipe} = this.props
    return (
      <Layout title="Add New Recipe">
        <form action={`/recipe/edit/${recipe._id}?_method=PUT`} method="post">
          
          <label for="category">Choose a Category</label>
          <select id="category" name="category">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Snacks">Snacks</option>
          </select>
          Recipe<input type="text" placeholder="name of your recipe" name="recipe"/>
          Image<input type="text" name="img"/>
          Directions<input type="text" name="description"/>
          Time<input type="text" name="time"/>
          Servings<input type="text" name="servings"/>
          <input type="submit" value="Edit Recipe"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
