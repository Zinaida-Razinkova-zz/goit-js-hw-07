// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
//     узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listProduct = (ingredients) => {
  const listIngredients = document.createElement("li");
  listIngredients.textContent = ingredients;
  return listIngredients;
};
const newArrayIng = ingredients.map((ingredients) => listProduct(ingredients));
console.log(newArrayIng);

const idIngrRef = document.querySelector("#ingredients");
idIngrRef.append(...newArrayIng);
