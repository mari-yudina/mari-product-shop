import { activFirstBtn } from './helpers';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';

export async function getCategories() {
  try {
    const data = await fetchCategories();
    renderCategories(['All', ...data]);
    activFirstBtn();
  } catch (error) {
    console.log(error);
  }
}
