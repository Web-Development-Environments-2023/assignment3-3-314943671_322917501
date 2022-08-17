import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/myrecipes",
    name: "myrecipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/myrecipes/:name",
    name: "myrecipe",
    component: () => import("./pages/MyRecipeViewPage"),
  },
  {
    path: "/myfavorites",
    name: "myfavorites",
    component: () => import("./pages/MyFavorites"),
  },
  {
    path: "/myfamily",
    name: "myfamily",
    component: () => import("./pages/MyFamily"),
  },
  {
    path: "/myfamily/:name",
    name: "myfamily",
    component: () => import("./pages/MyRecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
