import Footer from "@/app/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default async function RecipeDetail({ params }) {
    // Fetch recipes from an API or use a static list
    const recipes = [
        {
            id: 1,
            title: "Healthy Smoothie",
            description:
                "A delicious and nutritious smoothie with fresh fruits, greens, and a boost of protein.",
            image: "/smoothie.jpg",
            ingredients: [
                "1 banana",
                "1 cup spinach",
                "1/2 cup frozen berries",
                "1 cup almond milk",
                "1 tablespoon peanut butter",
                "1 scoop protein powder",
            ],
            instructions: [
                "Add all ingredients to a blender.",
                "Blend until smooth and creamy.",
                "Pour into a glass and enjoy!",
            ],
            prepTime: "5 minutes",
        },
        {
            id: 2,
            title: "Quinoa Salad",
            description:
                "A healthy, protein-packed salad with quinoa, vegetables, and a tangy dressing.",
            image: "/salad.jpg",
            ingredients: [
                "1 cup quinoa",
                "2 cups water",
                "1 cucumber, diced",
                "1 red bell pepper, diced",
                "1/4 cup feta cheese",
                "2 tablespoons olive oil",
                "1 lemon, juiced",
                "Salt and pepper to taste",
            ],
            instructions: [
                "Rinse quinoa under cold water.",
                "Cook quinoa in 2 cups of water for 15 minutes or until fluffy.",
                "In a large bowl, combine cooked quinoa, cucumber, bell pepper, and feta cheese.",
                "Whisk together olive oil, lemon juice, salt, and pepper for the dressing.",
                "Pour dressing over the salad and toss to combine.",
            ],
            prepTime: "20 minutes",
        },
        {
            id: 3,
            title: "Avocado Toast",
            description:
                "A simple yet healthy meal with mashed avocado on whole-grain toast.",
            image: "/toast.jpg",
            ingredients: [
                "1 ripe avocado",
                "2 slices whole-grain bread",
                "1 teaspoon lemon juice",
                "Salt and pepper to taste",
                "Optional toppings: chili flakes, sesame seeds, or a poached egg",
            ],
            instructions: [
                "Toast the bread until golden brown.",
                "Mash the avocado in a bowl and mix in lemon juice, salt, and pepper.",
                "Spread the mashed avocado evenly on the toast.",
                "Add optional toppings if desired.",
            ],
            prepTime: "10 minutes",
        },
        {
            id: 4,
            title: "Grilled Chicken Salad",
            description:
                "A protein-packed salad with grilled chicken, greens, and a light dressing.",
            image: "/chicken.jpg",
            ingredients: [
                "2 boneless, skinless chicken breasts",
                "4 cups mixed greens (spinach, arugula, lettuce)",
                "1 cup cherry tomatoes, halved",
                "1 cucumber, sliced",
                "1/4 cup red onion, thinly sliced",
                "2 tablespoons olive oil",
                "1 lemon, juiced",
                "Salt and pepper to taste",
                "Optional: crumbled feta cheese or avocado slices",
            ],
            instructions: [
                "Season the chicken breasts with salt and pepper.",
                "Heat a grill or grill pan over medium-high heat. Brush the chicken with olive oil and grill for 6-7 minutes per side, or until fully cooked.",
                "Let the chicken rest for 5 minutes, then slice it into strips.",
                "In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, and red onion.",
                "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.",
                "Add the grilled chicken to the salad and drizzle with the dressing. Toss to combine.",
                "Top with optional feta cheese or avocado slices if desired.",
            ],
            prepTime: "20 minutes",
        },
        {
            id: 5,
            title: "Vegan Buddha Bowl",
            description:
                "A nourishing bowl with quinoa, roasted veggies, hummus, and avocado.",
            image: "/budha.jpg",
            ingredients: [
                "1 cup quinoa",
                "2 cups water",
                "1 cup broccoli florets",
                "1 cup sweet potato, cubed",
                "1 cup chickpeas, drained and rinsed",
                "1 avocado, sliced",
                "2 tablespoons olive oil",
                "1 teaspoon paprika",
                "1 teaspoon garlic powder",
                "Salt and pepper to taste",
                "1/4 cup hummus",
                "Optional: sesame seeds or tahini dressing",
            ],
            instructions: [
                "Preheat the oven to 400°F (200°C).",
                "In a medium pot, combine quinoa and water. Bring to a boil, then reduce heat and simmer for 15 minutes, or until quinoa is cooked.",
                "Toss broccoli, sweet potato, and chickpeas with olive oil, paprika, garlic powder, salt, and pepper. Spread on a baking sheet and roast for 20-25 minutes, or until tender.",
                "Assemble the bowl: Divide the cooked quinoa into bowls. Top with roasted veggies, avocado slices, and a dollop of hummus.",
                "Sprinkle with sesame seeds or drizzle with tahini dressing if desired.",
            ],
            prepTime: "30 minutes",
        },
        {
            id: 6,
            title: "Greek Yogurt Parfait",
            description:
                "A refreshing parfait made with Greek yogurt, granola, and fresh berries.",
            image: "/greek.jpg",
            ingredients: [
                "1 cup Greek yogurt",
                "1/2 cup granola",
                "1/2 cup mixed fresh berries (strawberries, blueberries, raspberries)",
                "1 tablespoon honey or maple syrup",
                "Optional: chia seeds or nuts for topping",
            ],
            instructions: [
                "In a glass or bowl, layer half of the Greek yogurt.",
                "Add a layer of granola, followed by a layer of fresh berries.",
                "Repeat the layers with the remaining yogurt, granola, and berries.",
                "Drizzle with honey or maple syrup.",
                "Top with optional chia seeds or nuts if desired.",
            ],
            prepTime: "5 minutes",
        },
        {
            id: 7,
            title: "Chia Pudding",
            description:
                "A creamy and healthy chia pudding made with coconut milk and topped with berries.",
            image: "/chia.jpg",
            ingredients: [
                "1/4 cup chia seeds",
                "1 cup coconut milk (or any milk of choice)",
                "1 tablespoon honey or maple syrup",
                "1/2 teaspoon vanilla extract",
                "1/2 cup mixed fresh berries (strawberries, blueberries, raspberries)",
                "Optional: shredded coconut or nuts for topping",
            ],
            instructions: [
                "In a bowl or jar, combine chia seeds, coconut milk, honey, and vanilla extract. Stir well to avoid clumping.",
                "Cover and refrigerate for at least 4 hours or overnight, stirring once after 30 minutes.",
                "Once the chia pudding has thickened, give it a good stir.",
                "Serve in bowls or jars, topped with fresh berries.",
                "Add optional shredded coconut or nuts if desired.",
            ],
            prepTime: "5 minutes (plus 4 hours to set)",
        },
    ];

    // Find the recipe based on the `id` from the URL
    const recipe = recipes.find((recipe) => recipe.id.toString() === params.id);

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-screen-xl flex justify-center items-center flex-col mx-auto ">
                <div className="flex justify-center items-center gap-4 border  py-16">
                    <div className="flex flex-col items-center justify-end bg-blue-100 w-1/3 p-4 rounded-2xl">
                        <h1 className="text-3xl text-blue-700 font-bold mb-4">
                            {recipe.title}
                        </h1>

                        <p className="text-gray-700 text-center mb-6">
                            {recipe.description}
                        </p>
                        <p className="text-gray-700 text-center mb-6">
                            <span className="font-bold">
                                Preparation time :{" "}
                            </span>
                            {recipe.prepTime}
                        </p>
                    </div>

                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-96 h-96 object-cover mb-4 rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex gap-4 p-4">
                    {/* Ingredients Section */}
                    <div className="flex flex-col gap-4 w-full max-w-2xl mb-6 bg-blue-100 p-4 rounded-2xl">
                        <h2 className="text-2xl text-blue-700 font-semibold mb-4">
                            Ingredients
                        </h2>
                        <ul className="list-disc list-inside flex flex-col gap-4 ">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700 mb-2">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions Section */}
                    <div className="w-full max-w-2xl mb-6 bg-blue-100 flex flex-col gap-4 p-4 rounded-2xl">
                        <h2 className="text-2xl text-blue-700 font-semibold mb-4">
                            Instructions
                        </h2>
                        <ol className="list-decimal list-inside flex flex-col gap-4 ">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="text-gray-700 mb-2">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* Back to Recipes Button */}
                <Link
                    href="/alimentation-program"
                    className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold mt-4 inline-block"
                >
                    Back to Recipes
                </Link>
            </div>
            <Footer />
        </>
    );
}
