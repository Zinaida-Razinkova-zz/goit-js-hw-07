const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
//     узлов используй document.createElement().

const items = [...document.querySelectorAll("li.item")];
// console.log(items);
console.log(`В списке ${items.length} категории.`);

items
  .map((item) => {
    const title = item.querySelector("h2");
    const list = item.querySelectorAll("ul li");
    return {
      title: title.textContent,
      count: list.length,
    };
  })
  .forEach((entry) => {
    console.log(
      "Категория: ",
      entry.title,
      "\r\nКоличество Элементов:",
      entry.count
    );
  });
