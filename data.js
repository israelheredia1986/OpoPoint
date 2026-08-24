// OpoPoint - Radar de oposiciones de Policía Local de Andalucía
// Base inicial de convocatorias
// Última revisión: 24/08/2026

const convocatoriasOpoPoint = [
  {
    id: "villafranca-cordoba-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de Villafranca de Córdoba",
    municipio: "Villafranca de Córdoba",
    provincia: "Córdoba",
    grupo: "C1",
    plazas: 1,
    turno: "Libre",
    sistema: "Oposición",
    estado: "En plazo",
    boe: "BOE-A-2026-17980",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17980",
    bojaUrl: "https://www.juntadeandalucia.es/boja/2026/152/39",
    bop: "BOP Córdoba nº 138, 20/07/2026"
  },

  {
    id: "alcala-rio-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de Alcalá del Río",
    municipio: "Alcalá del Río",
    provincia: "Sevilla",
    grupo: "C1",
    plazas: 4,
    turno: "Libre",
    sistema: "Oposición",
    estado: "En plazo",
    boe: "BOE-A-2026-17786",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17786",
    bojaUrl: "https://www.juntadeandalucia.es/eboja/2026/151/s57",
    bop: "BOP Sevilla nº 143, 27/07/2026"
  },

  {
    id: "estepa-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de Estepa",
    municipio: "Estepa",
    provincia: "Sevilla",
    grupo: "C1",
    plazas: 8,
    turno: "Libre",
    sistema: "Oposición",
    estado: "En plazo",
    boe: "BOE-A-2026-17861",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17861",
    bojaUrl: "https://www.juntadeandalucia.es/boja/2026/154/35",
    bop: "BOP Sevilla nº 140, 22/07/2026"
  },

  {
    id: "albox-pl-2026",
    puesto: "Agente de Policía Local",
    organismo: "Ayuntamiento de Albox",
    municipio: "Albox",
    provincia: "Almería",
    grupo: "C1",
    plazas: 2,
    turno: "Libre",
    sistema: "Oposición",
    estado: "En plazo",
    boe: "BOE-A-2026-17540",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540",
    bop: "BOP Almería nº 130, 09/07/2026"
  },

  {
    id: "palomares-rio-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de Palomares del Río",
    municipio: "Palomares del Río",
    provincia: "Sevilla",
    grupo: "C1",
    plazas: 3,
    turno: "Libre",
    sistema: "Oposición",
    estado: "Plazo probablemente cerrado",
    boe: "BOE-A-2026-16793",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16793",
    bop: "BOP Sevilla nº 103, 01/06/2026; rectificación nº 126, 02/07/2026"
  },

  {
    id: "mojonera-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de La Mojonera",
    municipio: "La Mojonera",
    provincia: "Almería",
    grupo: "C1",
    plazas: 3,
    turno: "Libre",
    sistema: "Oposición",
    estado: "Plazo cerrado",
    boe: "BOE-A-2026-16405",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16405",
    bop: "BOP Almería nº 127, 06/07/2026"
  },

  {
    id: "berja-pl-2026",
    puesto: "Policía Local",
    organismo: "Ayuntamiento de Berja",
    municipio: "Berja",
    provincia: "Almería",
    grupo: "C1",
    plazas: 4,
    turno: "Libre",
    sistema: "Oposición",
    estado: "Plazo cerrado",
    boe: "BOE-A-2026-16297",
    boeUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16297",
    bop: "BOP Almería nº 119, 23/06/2026"
  }
];

// Compatibilidad con OpoPoint
const datos = convocatoriasOpoPoint;
const convocatorias = convocatoriasOpoPoint;

if (typeof window !== "undefined") {
  window.convocatoriasOpoPoint = convocatoriasOpoPoint;
  window.datos = convocatoriasOpoPoint;
  window.convocatorias = convocatoriasOpoPoint;
}
