// Zona de trabajo de Arévalo Construcciones.
// Códigos postales aceptados: provincia de Tarragona (43xxx) y de Barcelona (08xxx).
// Para ampliar/reducir la zona, cambia esta lista.
export const ALLOWED_CP_PREFIXES = ['43', '08'];

// Códigos de región que devuelve Vercel (ISO 3166-2) que consideramos Cataluña.
// Puede venir la comunidad (CT) o la provincia (B, T, L, GI).
export const CATALONIA_REGIONS = ['CT', 'B', 'T', 'L', 'GI'];

const CP_KEY = 'arevalo_cp';

export function isValidCp(cp) {
  return /^\d{5}$/.test(cp);
}

export function isCpInZone(cp) {
  return isValidCp(cp) && ALLOWED_CP_PREFIXES.includes(cp.slice(0, 2));
}

export function getSavedCp() {
  try {
    const cp = localStorage.getItem(CP_KEY);
    return cp && isCpInZone(cp) ? cp : null;
  } catch {
    return null;
  }
}

export function saveCp(cp) {
  try {
    localStorage.setItem(CP_KEY, cp);
  } catch {
    // sin almacenamiento: se volverá a preguntar
  }
}

export function clearSavedCp() {
  try {
    localStorage.removeItem(CP_KEY);
  } catch {
    // nada
  }
}
