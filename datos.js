/* =========================================================
   OPOPOINT · RADAR DE CONVOCATORIAS
   Actualización: 04/09/2026

   Criterio de la base:
   - Solo procesos de Policía Local con publicación oficial localizada.
   - Las instancias abiertas llevan fecha de fin comprobada/calculada.
   - "Próximamente" significa que existe convocatoria oficial pero el
     plazo todavía no ha comenzado.
   - No se mezclan OEP con convocatorias.
   - No se duplican procesos equivalentes.
   - No se usan enlaces OpoBusca.

   Fuentes principales: BOE, BOJA, BOP y sedes electrónicas oficiales.
========================================================= */

const OPOPOINT_ACTUALIZADO = "04/09/2026";

const convocatoriasOpoPoint = [

  /* =====================================================
     ABIERTAS · TURNO LIBRE
  ====================================================== */

  {
    id: "opopoint-cartaya-2026-libre",
    processKey: "cartaya-2026-libre",
    municipio: "Cartaya",
    organismo: "Ayuntamiento de Cartaya",
    provincia: "Huelva",
    puesto: "Policía Local",
    plazas: 8,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2026",
    estado: "Abierta",
    categoria: "Libre",
    fechaPublicacion: "03/09/2026",
    fechaInicio: "04/09/2026",
    fechaFin: "01/10/2026",
    diasRestantes: 20,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-18539 · BOP Huelva 154/159",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-18539",
    sedeUrl: "https://cartaya.sedelectronica.es/",
    nota: "8 plazas por oposición y turno libre. Bases rectificadas en el BOP antes de la publicación en BOE."
  },

  {
    id: "opopoint-albox-2026-libre",
    processKey: "albox-2026-libre",
    municipio: "Albox",
    organismo: "Ayuntamiento de Albox",
    provincia: "Almería",
    puesto: "Agente de Policía Local",
    plazas: 2,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2025",
    estado: "Abierta",
    categoria: "Libre",
    fechaPublicacion: "11/08/2026",
    fechaInicio: "12/08/2026",
    fechaFin: "08/09/2026",
    diasRestantes: 4,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17540 · BOP Almería 130/2026",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540",
    sedeUrl: "https://albox.sedelectronica.es/",
    nota: "2 plazas de Agente de Policía Local por oposición libre."
  },

  {
    id: "opopoint-alcala-rio-2026-libre",
    processKey: "alcala-rio-2026-libre",
    municipio: "Alcalá del Río",
    organismo: "Ayuntamiento de Alcalá del Río",
    provincia: "Sevilla",
    puesto: "Policía Local",
    plazas: 4,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2026",
    estado: "Abierta",
    categoria: "Libre",
    fechaPublicacion: "15/08/2026",
    fechaInicio: "17/08/2026",
    fechaFin: "11/09/2026",
    diasRestantes: 7,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17786 · BOP Sevilla 143/2026",
    fuenteUrl: "https://boe.es/diario_boe/txt.php?id=BOE-A-2026-17786",
    sedeUrl: "https://alcaladelrio.sedelectronica.es/info.0",
    nota: "4 plazas de Policía Local por oposición en turno libre."
  },

  {
    id: "opopoint-estepa-2026-libre",
    processKey: "estepa-2026-libre",
    municipio: "Estepa",
    organismo: "Ayuntamiento de Estepa",
    provincia: "Sevilla",
    puesto: "Policía Local",
    plazas: 8,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2023-2024-2026",
    estado: "Abierta",
    categoria: "Libre",
    fechaPublicacion: "17/08/2026",
    fechaInicio: "18/08/2026",
    fechaFin: "14/09/2026",
    diasRestantes: 10,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17861 · BOJA 154/2026",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17861",
    sedeUrl: "https://estepa.sedelectronica.es/info.0",
    nota: "8 plazas de Policía Local por oposición libre correspondientes a OEP 2023, 2024 y 2026."
  },

  /* =====================================================
     ABIERTA · OTROS TURNOS
  ====================================================== */

  {
    id: "opopoint-sevilla-inspector-2026-pi",
    processKey: "sevilla-inspector-2026-pi",
    municipio: "Sevilla",
    organismo: "Ayuntamiento de Sevilla",
    provincia: "Sevilla",
    puesto: "Inspector/a de Policía Local",
    plazas: 5,
    grupo: "A2",
    turno: "Promoción interna",
    sistema: "Concurso-oposición",
    oep: "2025",
    estado: "Abierta",
    categoria: "Mandos",
    fechaPublicacion: "14/08/2026",
    fechaInicio: "17/08/2026",
    fechaFin: "11/09/2026",
    diasRestantes: 7,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17738",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17738",
    sedeUrl: "https://www.sevilla.org/sede-electronica",
    nota: "Proceso de promoción interna. No es turno libre."
  },

  {
    id: "opopoint-sevilla-subinspector-2026-pi",
    processKey: "sevilla-subinspector-2026-pi",
    municipio: "Sevilla",
    organismo: "Ayuntamiento de Sevilla",
    provincia: "Sevilla",
    puesto: "Subinspector/a de Policía Local",
    plazas: 5,
    grupo: "A2",
    turno: "Promoción interna",
    sistema: "Concurso-oposición",
    oep: "2025",
    estado: "Abierta",
    categoria: "Mandos",
    fechaPublicacion: "14/08/2026",
    fechaInicio: "17/08/2026",
    fechaFin: "11/09/2026",
    diasRestantes: 7,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17739",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
    sedeUrl: "https://www.sevilla.org/sede-electronica",
    nota: "Proceso de promoción interna."
  },

  {
    id: "opopoint-sevilla-subinspector-2026-movilidad-co",
    processKey: "sevilla-subinspector-2026-movilidad-co",
    municipio: "Sevilla",
    organismo: "Ayuntamiento de Sevilla",
    provincia: "Sevilla",
    puesto: "Subinspector/a de Policía Local",
    plazas: 1,
    grupo: "A2",
    turno: "Movilidad",
    sistema: "Concurso-oposición",
    oep: "2025",
    estado: "Abierta",
    categoria: "Mandos",
    fechaPublicacion: "14/08/2026",
    fechaInicio: "17/08/2026",
    fechaFin: "11/09/2026",
    diasRestantes: 7,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17739",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
    sedeUrl: "https://www.sevilla.org/sede-electronica",
    nota: "Turno de movilidad."
  },

  {
    id: "opopoint-sevilla-subinspector-2026-movilidad-c",
    processKey: "sevilla-subinspector-2026-movilidad-c",
    municipio: "Sevilla",
    organismo: "Ayuntamiento de Sevilla",
    provincia: "Sevilla",
    puesto: "Subinspector/a de Policía Local",
    plazas: 1,
    grupo: "A2",
    turno: "Movilidad",
    sistema: "Concurso",
    oep: "2025",
    estado: "Abierta",
    categoria: "Mandos",
    fechaPublicacion: "14/08/2026",
    fechaInicio: "17/08/2026",
    fechaFin: "11/09/2026",
    diasRestantes: 7,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-17739",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
    sedeUrl: "https://www.sevilla.org/sede-electronica",
    nota: "Turno de movilidad mediante concurso."
  },

  {
    id: "opopoint-puerto-oficiales-2026-pi",
    processKey: "puerto-oficiales-2026-pi",
    municipio: "El Puerto de Santa María",
    organismo: "Ayuntamiento de El Puerto de Santa María",
    provincia: "Cádiz",
    puesto: "Oficial de Policía Local",
    plazas: 8,
    grupo: "C1",
    turno: "Promoción interna",
    sistema: "Concurso-oposición",
    oep: "2025-2026",
    estado: "Abierta",
    categoria: "Mandos",
    fechaPublicacion: "24/08/2026",
    fechaInicio: "25/08/2026",
    fechaFin: "22/09/2026",
    diasRestantes: 13,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-18092 · BOP Cádiz 135/2026",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-18092",
    sedeUrl: "https://www.elpuertodesantamaria.es/",
    nota: "Promoción interna. No es turno libre."
  },

  {
    id: "opopoint-huelva-2026-movilidad",
    processKey: "huelva-2026-movilidad",
    municipio: "Huelva",
    organismo: "Ayuntamiento de Huelva",
    provincia: "Huelva",
    puesto: "Policía Local",
    plazas: 1,
    grupo: "C1",
    turno: "Movilidad",
    sistema: "Concurso",
    oep: "2026",
    estado: "Abierta",
    categoria: "Movilidad",
    fechaPublicacion: "03/09/2026",
    fechaInicio: "04/09/2026",
    fechaFin: "01/10/2026",
    diasRestantes: 20,
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-18541 · BOP Huelva 154/159",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-18541",
    sedeUrl: "https://www.huelva.es/",
    nota: "Turno de movilidad."
  },

  /* =====================================================
     PRÓXIMAMENTE
  ====================================================== */

  {
    id: "opopoint-fuengirola-2026-libre",
    processKey: "fuengirola-2026-libre",
    municipio: "Fuengirola",
    organismo: "Ayuntamiento de Fuengirola",
    provincia: "Málaga",
    puesto: "Policía Local",
    plazas: 12,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2026",
    estado: "Próximamente",
    categoria: "Libre",
    fechaPublicacion: "04/09/2026",
    fechaInicio: "07/09/2026",
    fechaFin: "02/10/2026",
    verificada: true,
    fuenteTipo: "BOE",
    fuente: "BOE-A-2026-18615 · BOP Málaga 164/2026",
    fuenteUrl: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-18615",
    sedeUrl: "https://sede.fuengirola.es/",
    nota: "12 plazas de turno libre. El plazo comienza el 7 de septiembre de 2026."
  },

  {
    id: "opopoint-sanroque-2026-libre",
    processKey: "sanroque-2026-libre",
    municipio: "San Roque",
    organismo: "Ayuntamiento de San Roque",
    provincia: "Cádiz",
    puesto: "Policía Local",
    plazas: 4,
    grupo: "C1",
    turno: "Libre",
    sistema: "Oposición",
    oep: "2026",
    estado: "Próximamente",
    categoria: "Libre",
    fechaPublicacion: "01/09/2026",
    fechaInicio: null,
    fechaFin: null,
    verificada: true,
    fuenteTipo: "BOJA",
    fuente: "BOJA nº 169 · anuncio de convocatoria de 4 plazas",
    fuenteUrl: "https://www.juntadeandalucia.es/boja/2026/169/23",
    sedeUrl: "https://www.sanroque.es/",
    nota: "Las bases están publicadas; el plazo se abrirá 20 días hábiles tras el anuncio en BOE."
  }
];


/* =========================================================
   DEDUPLICACIÓN Y VALIDACIÓN
========================================================= */

const mapaOpoPoint = new Map();

for (const item of convocatoriasOpoPoint) {
  const key = item.processKey || item.id;
  if (!mapaOpoPoint.has(key)) {
    mapaOpoPoint.set(key, item);
  } else {
    console.warn("Proceso duplicado ignorado:", key);
  }
}

const baseMaestraOpoPoint = Array.from(mapaOpoPoint.values());

(function validarBase(){
  const ids = new Set();
  const keys = new Set();
  const errores = [];

  for (const item of baseMaestraOpoPoint) {
    if (!item.id) errores.push("Registro sin id");
    if (ids.has(item.id)) errores.push(`ID duplicado: ${item.id}`);
    ids.add(item.id);

    if (!item.processKey) errores.push(`${item.id}: falta processKey`);
    if (keys.has(item.processKey)) errores.push(`processKey duplicado: ${item.processKey}`);
    keys.add(item.processKey);

    if (!item.municipio || !item.provincia || !item.puesto) {
      errores.push(`${item.id}: faltan datos básicos`);
    }

    if (typeof item.plazas !== "number" || item.plazas <= 0) {
      errores.push(`${item.id}: plazas incorrectas`);
    }

    const urls = [item.fuenteUrl, item.sedeUrl].filter(Boolean).map(String).join(" ").toLowerCase();
    if (urls.includes("opobusca")) errores.push(`${item.id}: enlace OpoBusca detectado`);
  }

  if (errores.length) {
    console.error("OpoPoint · errores de validación", errores);
  } else {
    console.info(`OpoPoint · base validada: ${baseMaestraOpoPoint.length} procesos únicos`);
  }
})();


/* =========================================================
   EXPORTACIÓN GLOBAL
========================================================= */

window.OPOPOINT_ACTUALIZADO = OPOPOINT_ACTUALIZADO;
window.convocatoriasOpoPoint = baseMaestraOpoPoint;
window.datos = baseMaestraOpoPoint;
window.convocatorias = baseMaestraOpoPoint;
