// Setters de estado para cambiar el estado de la interfaz
// Comunicacion solucion -> UI
import { setValue } from "./UI/state";

import System from "./solucion";

// Hanlders de eventos de la interfaz
// Comunicacion UI -> solucion
export function onClick() {
  System.inc();
  setValue(System.get());
}
