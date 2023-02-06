enum AppRoutes {
    ALL = "/:catchAll(.*)",
    SIGN_IN = "/signIn",
    SIGN_UP = "/signUp",
    PRODUCTS = '/products',
    RECIPES = "/recipes",
    RECIPES_SINGLE = '/recipes/:id',
}

export {AppRoutes}