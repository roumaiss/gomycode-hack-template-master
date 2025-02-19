import React from "react";
import Link from "next/link";

export default function RecipeCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const newRecipe = {
        mainPicture,
        otherPictures,
        title,
        description,
        type,
        ingredients,
        instructions,
        prepTime,
        coockingTime,
    };
    return (
        <div className="h-[400px] w-1/4">
            <img src="recipe-img-1.jpg" alt="" />
            <div className="flex flex-col justify-center items-center bg-orange-300 p-4">
                <Link className="text-xl" href="">
                    Fruit Salade
                </Link>
                <Link className="text-lg" href="">
                    Nature
                </Link>
            </div>
        </div>
    );
}
