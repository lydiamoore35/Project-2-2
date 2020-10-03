/////////////////////////////////
// DB CONNECTION
/////////////////////////////////
const mongoose = require("./dbconn");
const Recipe = require("../models/recipe");

/////////////////////////////////
// IMPORT MODELS
/////////////////////////////////

//////////////////////////////////
// DATA TO SEED
//////////////////////////////////
const recipeArr = [
    {
        recipe: "oatmeal cookies",
        category: "dessert",
        img: "https://www.veganricha.com/wp-content/uploads/2019/09/Tahini-Oatmeal-Cookies-veganricha-7313.jpg",
        description: "Before you begin - Preheat the oven to 350 degrees. Grease Two large cookie sheets. Sift into a bowl: 1 1/4 cups flour, 1/2 teaspoon baking soda, 1/4 teaspoon nutmeg, 1 teaspoon cinnamon, 3/4 teaspoon salt. Add to flour mixture and mix well: 3 cups rolled oats. Beat together in another bowl: 1/4 cup of butter, 1 cup of firmly packed brown sugar, 1 egg, 1/4 cup milk, 1 1/2 teaspoon vanilla extract. Add the sugar mixture to the flour and oatmeal mixture. Mix until all ingredients are moist. Fold into well-mixed batter: 3/4 cup walnuts, 1/2 cup chocolate chips. Drop mixture by tablespoons onto greased cookie sheets. Bake until golden brown and enjoy!", 
        time: "8 to 12 minutes",
        servings: "40 cookies"   
    },
    {
        recipe: "carrot-cake thumbprint cookies",
        category: "dessert",
        img: "https://assets.marthastewart.com/styles/wmax-750/d26/carrot-cookie-0014-d112652/carrot-cookie-0014-d112652_horiz.jpg?itok=eIxRN8vA",
        description: "1 stick unsalted melted butter, 1/2 stick room temp butter, 1/3 cup packed light-brown sugar, 1/3 cup granulated sugar, 1 large egg yolk at room temp, 1 cup of all-purpose flour, 1/2 teaspoon ground ginger, 1/2 teaspoon of ground cinnamon, 3/4 teaspoon coarse salt, 3/4 cup old-fashioned rolled oats, 3/4 cup packed finely grated carrots or about 3 large carrots, 1/4 cup golden raisins chopped, 3/4 cup pecans finely chopped, 1/4 cup confectioners' sugar, 2 ounces fresh goat cheese or cream cheese at room temp, 1 1/2 teaspoons apricot jam. Preheat oven to 350 degrees. In a large bowl, whisk together melted butter, brown and granulated sugars, and yolk. In another bowl, whisk together flour, ginger, cinnamon, and salt. Stir flour mixture into butter mixutre to combine. Mix in oats, carrots, and raisins. Cover and refrigerate for 30 minutes. Roll dough into 1 1/2 inch balls and roll the balls in pecans to coat. Space 2 inches apart on parchment-lined baking sheets. Bake for 10 minutes. Remove from the oven and press and indentation into the center of each cookie with the end of a wooden spoon. Bake until golden brown on bottoms, 10 to 12 minutes more. Transfer cookies to a wire rack and let cool. In a bowl, beat the remaining 1/2 stick of butter and confectioners' sugar on medium until smooth. Beat in goat cheese until just combined. Swirl in jam. Fill cneter of each cookie with goat-cheese mixture and serve!",
        time: "1 hour and 45 minutes",
        servings: "40 cookies"   
    },
    {
        recipe: "bacon and tomato cups",
        category: "snacks",
        img: "https://busy-mommy.com/wp-content/uploads/2009/10/1.jpg",
        description: "8 slices of cooked, drained, and crumbled bacon, 1 medium tomato seeded and shopped, 1/2 small onion finely chopped, 3 ounces shredded swiss cheese, 1/2 cup mayo, 1 teaspoon dried basil, 1 16oz. refrigerated buttermilk biscuit dough. Preheat oven to 375 degrees. Lightly grease a mini muffin pan. In a medium bowl, mix the bacon, tomatoe, onion, cheese, basil and mayo together thoroughly. There are 10 biscuits in the container. Pull each one apart into halves horizontally. Press each half into the prepared muffin pan. Fill each with the bacon mixture. Bake for 10 to 12 minutes and enjoy!", 
        time: "40 minutes",
        servings: "20 cups"   
    },
    {
        recipe: "three cheese chicken bake",
        category: "dinner",
        img: "https://diethood.com/wp-content/uploads/2019/02/Cauliflower-Chicken-Casserole-3.jpg",
        description: "8 ounces wide or lasagna noodles, 1 can of mushroom sauce, 1 1/2 cups cream style cottage cheese, 2 cups shredded American cheese, 3 cups diced cooked chicken, 1/2 cup grated parmesan cheese, 3 tablespoons of butter, 1 chopped onion, 1 copped red pepper, 1 can cream of chicken soup, 1/3 cup milk, 6 ounces of sliced mushrooms, 1/2 teaspoon basil. Cook noodles until tender in large amount of boiling salt water. Drain, rinse in cold water.", 
        time: "8 to 12 minutes",
        servings: "40 cookies"   
    },
]

Recipe.create(recipeArr, (err, data) => {
    // console.log(data);
})
//////////////////////////////////
// SEED THE DATA
//////////////////////////////////