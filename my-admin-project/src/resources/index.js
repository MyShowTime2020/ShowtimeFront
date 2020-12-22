export default [
  {
    name: "users",
    icon: "mdi-account",
    routes: ["list"],
    permissions: ["admin"]
  },
  {
    name: "archived_users",
    api: "users",
    icon: "mdi-account",
    label: "name",
    routes: ["list"],
    permissions: ["admin"],
  },
  {
    name: "products",
    icon: "mdi-product",
    translatable: true,
    routes: ["list"],
    permissions: ["admin", "editor", "author"]
  }
];
