export default function createInt8TypedArray(length, position, value) {
  // Crétion d'un ArrayBuffer avec la longueur spécifiée
  const buffer = new ArrayBuffer(length);

  // Crétion d'un  DataView pour le buffer
  const view = new DataView(buffer);

  // Vérifie si la position est dans les limites
  if (position < 0 || position >= length) {
    throw new Error('Position outside range'); // Position hors des limites
  }

  // Définition de la valeur Int8 à la position spécifiée
  view.setInt8(position, value);

  return view;
}
