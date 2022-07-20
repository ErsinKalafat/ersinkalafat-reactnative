interface ICategories {
  id: number
  name: string
  createdAt: string
}

let saveCategories = (category: ICategories) => ({
  type: "SAVE_CATEGORIES",
  category
});



export { saveCategories };
