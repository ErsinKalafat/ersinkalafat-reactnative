import { ICategories} from "../Interfaces"

const initialState: ICategories[] = [];

const saveCategories = (state = initialState, action: any) => {  
  switch (action.type) {
    case "SAVE_CATEGORIES":
      return (
        [...state, action.category]
      );
    default:
      return state;
  }
};

export { saveCategories };
