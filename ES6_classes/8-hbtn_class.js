export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() { return this._size; }

  toString() { return this._location; }
}
// Lorsque vous appelez la fonction Number() sur un objet, JavaScript recherche une méthode valueOf() dans cet objet pour obtenir sa représentation numérique. Si la méthode valueOf() est présente dans l'objet, elle est utilisée pour effectuer la conversion en nombre. Si la méthode valueOf() n'est pas définie ou si elle ne renvoie pas un nombre, JavaScript utilise ensuite la méthode toString() pour obtenir une représentation sous forme de chaîne de caractères, puis tente de la convertir en nombre.
