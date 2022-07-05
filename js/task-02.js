// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const ingredientsContainerEl = document.querySelector('#ingredients');

  const makeIngredientsOptions = options => {
    return options.map(option => {
      const ItemEl = document.createElement('li');
      ItemEl.classList.add('item');
      ItemEl.textContent = option;
  
      return ItemEl;
    });
  };

  const elements = makeIngredientsOptions(ingredients);
  ingredientsContainerEl.append(...elements);