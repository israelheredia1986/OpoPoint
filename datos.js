/* =========================================================
   OPOPOINT
   Base de datos principal de procesos de Policía Local
   Andalucía

   REGLAS:
   - CONVOCATORIA = proceso selectivo publicado
   - OEP = oferta oficial sin convocatoria todavía
   - FINALIZADA = proceso histórico terminado
   - PENDIENTE = detectado pero no suficientemente contrastado
   - Nunca usar OpoBusca como fuente de destino
   - Cada proceso tiene un ID único
========================================================= */

const convocatoriasOpoPoint = [

  /* =======================================================
     001 · AZNALCÓLLAR · OEP 2026
  ======================================================= */

  {
    id:"opopoint-aznalcollar-oep-2026",
    procesoKey:"aznalcollar-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Aznalcóllar",
    municipio:"Aznalcóllar",
    provincia:"Sevilla",

    plazas:3,
    grupo:"C2",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOJA nº 163 · 24/08/2026",
    fuenteUrl:"https://www.juntadeandalucia.es/boja/2026/163/16",

    convocatoriaUrl:null,

    seguimiento:{
      faseActual:"OEP_PUBLICADA",
      ultimaActualizacion:"24/08/2026",
      ultimaActuacion:"Publicación oficial de la OEP 2026.",
      proximaActuacion:"Publicación de la convocatoria y bases del proceso selectivo.",
      proximaFecha:null,

      fases:[
        {
          id:"OEP_PUBLICADA",
          nombre:"Oferta de Empleo Público",
          icono:"📢",
          estado:"actual"
        },
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"pendiente"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADO",
          nombre:"Resultado final",
          icono:"🏆",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     002 · VILLAFRANCA DE CÓRDOBA · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-villafranca-convocatoria-2026",
    procesoKey:"villafranca-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Villafranca de Córdoba",
    municipio:"Villafranca de Córdoba",
    provincia:"Córdoba",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Presentación de solicitudes",

    verificada:true,

    fechaPublicacion:"20/08/2026",
    fechaInicio:"21/08/2026",
    fechaFin:"17/09/2026",

    fuente:"BOE-A-2026-17980",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17980",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17980",

    seguimiento:{
      faseActual:"SOLICITUDES",
      ultimaActualizacion:"20/08/2026",
      ultimaActuacion:"Publicación del extracto de la convocatoria en el BOE.",
      proximaActuacion:"Finalización del plazo de presentación de solicitudes.",
      proximaFecha:"17/09/2026",

      fases:[
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases publicadas",
          icono:"📄",
          estado:"completada"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"actual"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"PROPUESTA",
          nombre:"Propuesta de nombramiento",
          icono:"📑",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     003 · ALCALÁ DEL RÍO · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-alcala-rio-convocatoria-2026",
    procesoKey:"alcala-rio-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Alcalá del Río",
    municipio:"Alcalá del Río",
    provincia:"Sevilla",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Presentación de solicitudes",

    verificada:true,

    fechaPublicacion:"15/08/2026",
    fechaInicio:"17/08/2026",
    fechaFin:"11/09/2026",

    fuente:"BOE-A-2026-17786",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17786",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17786",

    seguimiento:{
      faseActual:"SOLICITUDES",
      ultimaActualizacion:"15/08/2026",
      ultimaActuacion:"Publicación del extracto de la convocatoria en el BOE.",
      proximaActuacion:"Finalización del plazo de presentación de solicitudes.",
      proximaFecha:"11/09/2026",

      fases:[
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases publicadas",
          icono:"📄",
          estado:"completada"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"actual"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"PROPUESTA",
          nombre:"Propuesta de nombramiento",
          icono:"📑",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     004 · ESTEPA · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-estepa-convocatoria-2026",
    procesoKey:"estepa-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Estepa",
    municipio:"Estepa",
    provincia:"Sevilla",

    plazas:8,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Presentación de solicitudes",

    verificada:true,

    fechaPublicacion:"17/08/2026",
    fechaInicio:"18/08/2026",
    fechaFin:"14/09/2026",

    fuente:"BOE-A-2026-17861",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17861",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17861",

    seguimiento:{
      faseActual:"SOLICITUDES",
      ultimaActualizacion:"17/08/2026",
      ultimaActuacion:"Publicación de la convocatoria en el BOE.",
      proximaActuacion:"Finalización del plazo de presentación de solicitudes.",
      proximaFecha:"14/09/2026",

      fases:[
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases publicadas",
          icono:"📄",
          estado:"completada"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"actual"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"PROPUESTA",
          nombre:"Propuesta de nombramiento",
          icono:"📑",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     005 · DOS TORRES · PROCESO HISTÓRICO
  ======================================================= */

  {
    id:"opopoint-dos-torres-historico-2025",
    procesoKey:"dos-torres-historico-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Dos Torres",
    municipio:"Dos Torres",
    provincia:"Córdoba",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2022",

    tipo:"FINALIZADA",
    nivel:"HISTORICO",

    estado:"Proceso anterior",
    estadoActual:"Proceso histórico",

    verificada:true,

    fuente:"BOE-A-2025-22643",
    fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22643",

    convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22643",

    seguimiento:{
      faseActual:"FINALIZADO",
      ultimaActualizacion:"14/10/2025",
      ultimaActuacion:"Proceso selectivo correspondiente a convocatoria anterior.",
      proximaActuacion:null,
      proximaFecha:null,

      fases:[
        {
          id:"FINALIZADO",
          nombre:"Proceso finalizado",
          icono:"✅",
          estado:"actual"
        }
      ]
    }
  },


  /* =======================================================
     006 · LA PUEBLA DEL RÍO · OEP 2025
  ======================================================= */

  {
    id:"opopoint-puebla-rio-oep-2025",
    procesoKey:"puebla-rio-oep-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de La Puebla del Río",
    municipio:"La Puebla del Río",
    provincia:"Sevilla",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"Ayuntamiento de La Puebla del Río · OEP 2025",
    fuenteUrl:"https://www.lapuebladelrio.es/es/actualidad/noticias/Oferta-de-Empleo-Publico-2025/",

    convocatoriaUrl:null,

    seguimiento:{
      faseActual:"OEP_PUBLICADA",
      ultimaActualizacion:"2025",
      ultimaActuacion:"Oferta de Empleo Público publicada.",
      proximaActuacion:"Convocatoria del proceso selectivo.",
      proximaFecha:null,

      fases:[
        {
          id:"OEP_PUBLICADA",
          nombre:"Oferta de Empleo Público",
          icono:"📢",
          estado:"actual"
        },
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"pendiente"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADO",
          nombre:"Resultado",
          icono:"🏆",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     007 · LANJARÓN · PENDIENTE
  ======================================================= */

  {
    id:"opopoint-lanjaron-pendiente",
    procesoKey:"lanjaron-pendiente",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Lanjarón",
    municipio:"Lanjarón",
    provincia:"Granada",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:null,

    tipo:"PENDIENTE",
    nivel:"PENDIENTE",

    estado:"Pendiente de comprobar",
    estadoActual:"Fuente oficial específica pendiente",

    verificada:false,

    fuente:"Ayuntamiento de Lanjarón",
    fuenteUrl:"https://www.lanjaron.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     008 · ALBOX · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-albox-convocatoria-2026",
    procesoKey:"albox-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Albox",
    municipio:"Albox",
    provincia:"Almería",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Presentación de solicitudes",

    verificada:true,

    fechaPublicacion:"11/08/2026",
    fechaInicio:"12/08/2026",
    fechaFin:"08/09/2026",

    fuente:"BOE-A-2026-17540",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540",

    seguimiento:{
      faseActual:"SOLICITUDES",
      ultimaActualizacion:"11/08/2026",
      ultimaActuacion:"Publicación del extracto de convocatoria en el BOE.",
      proximaActuacion:"Finalización del plazo de presentación de solicitudes.",
      proximaFecha:"08/09/2026",

      fases:[
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"completada"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"actual"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     009 · MARBELLA · OEP 2026
  ======================================================= */

  {
    id:"opopoint-marbella-oep-2026",
    procesoKey:"marbella-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Marbella",
    municipio:"Marbella",
    provincia:"Málaga",

    plazas:11,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"Ayuntamiento de Marbella · OEP 2026",
    fuenteUrl:"https://www.marbella.es/",

    convocatoriaUrl:null,

    seguimiento:{
      faseActual:"OEP_PUBLICADA",
      ultimaActualizacion:"2026",
      ultimaActuacion:"Oferta de empleo público 2026.",
      proximaActuacion:"Convocatoria y bases del proceso selectivo.",
      proximaFecha:null,

      fases:[
        {
          id:"OEP_PUBLICADA",
          nombre:"Oferta de Empleo Público",
          icono:"📢",
          estado:"actual"
        },
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"pendiente"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADO",
          nombre:"Resultado",
          icono:"🏆",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     010 · OSUNA · OEP 2026
  ======================================================= */

  {
    id:"opopoint-osuna-oep-2026",
    procesoKey:"osuna-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Osuna",
    municipio:"Osuna",
    provincia:"Sevilla",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"Ayuntamiento de Osuna · OEP 2026",
    fuenteUrl:"https://www.osuna.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     011 · MOJÁCAR · OEP 2026
  ======================================================= */

  {
    id:"opopoint-mojacar-oep-2026",
    procesoKey:"mojacar-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Mojácar",
    municipio:"Mojácar",
    provincia:"Almería",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Almería nº 148 · 04/08/2026",
    fuenteUrl:"https://www.mojacar.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     012 · PALOMARES DEL RÍO · CONVOCATORIA
  ======================================================= */

  {
    id:"opopoint-palomares-convocatoria-2025",
    procesoKey:"palomares-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Palomares del Río",
    municipio:"Palomares del Río",
    provincia:"Sevilla",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOP Sevilla · convocatoria OEP 2025",
    fuenteUrl:"https://www.palomaresdelrio.es/",

    convocatoriaUrl:"https://www.palomaresdelrio.es/",

    seguimiento:{
      faseActual:"CONVOCATORIA_PUBLICADA",
      ultimaActualizacion:"2026",
      ultimaActuacion:"Publicación de las bases y convocatoria.",
      proximaActuacion:"Comprobar la siguiente actuación oficial del proceso.",
      proximaFecha:null,

      fases:[
        {
          id:"CONVOCATORIA_PUBLICADA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"actual"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     013 · CUEVAS DEL ALMANZORA · 3 PLAZAS
  ======================================================= */

  {
    id:"opopoint-cuevas-almanzora-convocatoria-2025",
    procesoKey:"cuevas-almanzora-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Cuevas del Almanzora",
    municipio:"Cuevas del Almanzora",
    provincia:"Almería",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOP Almería · bases de Policía Local",
    fuenteUrl:"https://www.cuevasdelalmanzora.es/",

    convocatoriaUrl:"https://www.cuevasdelalmanzora.es/"
  },


  /* =======================================================
     014 · OLULA DEL RÍO · 1 PLAZA
  ======================================================= */

  {
    id:"opopoint-olula-convocatoria-2025",
    procesoKey:"olula-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Olula del Río",
    municipio:"Olula del Río",
    provincia:"Almería",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fechaPublicacion:"05/09/2025",

    fuente:"BOE-A-2025-17684",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17684",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17684"
  },


  /* =======================================================
     015 · MOTRIL · HISTÓRICO
  ======================================================= */

  {
    id:"opopoint-motril-historico-2025",
    procesoKey:"motril-historico-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Motril",
    municipio:"Motril",
    provincia:"Granada",

    plazas:5,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"FINALIZADA",
    nivel:"HISTORICO",

    estado:"Proceso anterior",
    estadoActual:"Proceso histórico",

    verificada:true,

    fuente:"Ayuntamiento de Motril",
    fuenteUrl:"https://motril.es/recursos-humanos/oferta-empleo-publico/ofertas-empleo/",

    convocatoriaUrl:"https://motril.es/recursos-humanos/oferta-empleo-publico/ofertas-empleo/"
  },


  /* =======================================================
     016 · LA MOJONERA · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-la-mojonera-convocatoria-2026",
    procesoKey:"la-mojonera-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de La Mojonera",
    municipio:"La Mojonera",
    provincia:"Almería",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOP Almería · convocatoria 2026",
    fuenteUrl:"https://www.lamojonera.es/",

    convocatoriaUrl:"https://www.lamojonera.es/"
  },


  /* =======================================================
     017 · BERJA · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-berja-convocatoria-2026",
    procesoKey:"berja-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Berja",
    municipio:"Berja",
    provincia:"Almería",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Cerrado",
    estadoActual:"Plazo finalizado",

    verificada:true,

    fechaPublicacion:"27/07/2026",
    fechaInicio:"28/07/2026",
    fechaFin:"24/08/2026",

    fuente:"BOE-A-2026-16297",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16297",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16297",

    seguimiento:{
      faseActual:"PLAZO_FINALIZADO",
      ultimaActualizacion:"24/08/2026",
      ultimaActuacion:"Finalización del plazo de presentación de solicitudes.",
      proximaActuacion:"Siguiente publicación oficial del proceso.",
      proximaFecha:null,

      fases:[
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"completada"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"completada"
        },
        {
          id:"PLAZO_FINALIZADO",
          nombre:"Plazo finalizado",
          icono:"⏳",
          estado:"actual"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     018 · MARCHENA · CONVOCATORIA
  ======================================================= */

  {
    id:"opopoint-marchena-convocatoria-2026",
    procesoKey:"marchena-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Marchena",
    municipio:"Marchena",
    provincia:"Sevilla",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOP Sevilla nº28 · 11/02/2026",
    fuenteUrl:"https://bopsevilla.dipusevilla.es/publica/consulta-de-bops/buscador/BOP-11-02-2026/",

    convocatoriaUrl:"https://bopsevilla.dipusevilla.es/publica/consulta-de-bops/buscador/BOP-11-02-2026/"
  },


  /* =======================================================
     019 · CARTAYA · CONVOCATORIA
  ======================================================= */

  {
    id:"opopoint-cartaya-convocatoria-2025",
    procesoKey:"cartaya-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Cartaya",
    municipio:"Cartaya",
    provincia:"Huelva",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOE-A-2026-7583",
    fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-7583",

    convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-7583"
  },


  /* =======================================================
     020 · HINOJOS · OEP 2026
  ======================================================= */

  {
    id:"opopoint-hinojos-oep-2026",
    procesoKey:"hinojos-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Hinojos",
    municipio:"Hinojos",
    provincia:"Huelva",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOJA nº140 · 22/07/2026",
    fuenteUrl:"https://www.juntadeandalucia.es/boja/",

    convocatoriaUrl:null
  },


  /* =======================================================
     021 · ALMUÑÉCAR · 4 PLAZAS
  ======================================================= */

  {
    id:"opopoint-almunecar-convocatoria-2025",
    procesoKey:"almunecar-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Almuñécar",
    municipio:"Almuñécar",
    provincia:"Granada",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Proceso publicado",

    verificada:true,

    fuente:"Ayuntamiento de Almuñécar · convocatoria OEP 2025",
    fuenteUrl:"https://portaltransparencia.almunecar.es/edicto-bases-4-plazas-policia-local-oep-2025/",

    convocatoriaUrl:"https://portaltransparencia.almunecar.es/edicto-bases-4-plazas-policia-local-oep-2025/"
  },


  /* =======================================================
     022 · ALGECIRAS · OEP 2026
  ======================================================= */

  {
    id:"opopoint-algeciras-oep-2026",
    procesoKey:"algeciras-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Algeciras",
    municipio:"Algeciras",
    provincia:"Cádiz",

    plazas:14,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Cádiz nº136 · 17/07/2026",
    fuenteUrl:"https://www.algeciras.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     023 · ESPARTINAS · UNA SOLA ENTRADA
  ======================================================= */

  {
    id:"opopoint-espartinas-oep-2026",
    procesoKey:"espartinas-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Espartinas",
    municipio:"Espartinas",
    provincia:"Sevilla",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"Ayuntamiento de Espartinas · OEP 2026",
    fuenteUrl:"https://www.espartinas.net/",

    convocatoriaUrl:null
  },


  /* =======================================================
     024 · MONTORO · PENDIENTE
  ======================================================= */

  {
    id:"opopoint-montoro-pendiente",
    procesoKey:"montoro-pendiente",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Montoro",
    municipio:"Montoro",
    provincia:"Córdoba",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:null,

    tipo:"PENDIENTE",
    nivel:"PENDIENTE",

    estado:"Pendiente de comprobar",
    estadoActual:"No localizada OEP/convocatoria actual",

    verificada:false,

    fuente:"Ayuntamiento de Montoro",
    fuenteUrl:"https://www.montoro.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     025 · BAEZA · CONVOCATORIA 2025
  ======================================================= */

  {
    id:"opopoint-baeza-convocatoria-2025",
    procesoKey:"baeza-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Baeza",
    municipio:"Baeza",
    provincia:"Jaén",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOE-A-2025-16972",
    fuenteUrl:"https://www.boe.es/boe/dias/2025/08/18/pdfs/BOE-A-2025-16972.pdf",

    convocatoriaUrl:"https://www.boe.es/boe/dias/2025/08/18/pdfs/BOE-A-2025-16972.pdf"
  },


  /* =======================================================
     026 · UBRIQUE · 2 PLAZAS
  ======================================================= */

  {
    id:"opopoint-ubrique-convocatoria-2025",
    procesoKey:"ubrique-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Ubrique",
    municipio:"Ubrique",
    provincia:"Cádiz",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOE-A-2025-23868",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23868",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23868"
  },


  /* =======================================================
     027 · LOJA · OEP 2026
  ======================================================= */

  {
    id:"opopoint-loja-oep-2026",
    procesoKey:"loja-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Loja",
    municipio:"Loja",
    provincia:"Granada",

    plazas:5,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Granada · 22/06/2026",
    fuenteUrl:"https://bop.dipgra.es/publica/consulta-de-bops/buscador/BOP-22-06-2026/",

    convocatoriaUrl:null
  },


  /* =======================================================
     028 · TREBUJENA · HISTÓRICO
  ======================================================= */

  {
    id:"opopoint-trebujena-historico-2025",
    procesoKey:"trebujena-historico-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Trebujena",
    municipio:"Trebujena",
    provincia:"Cádiz",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"FINALIZADA",
    nivel:"HISTORICO",

    estado:"Proceso anterior",
    estadoActual:"Proceso histórico",

    verificada:true,

    fuente:"BOP Cádiz · convocatoria 2025",
    fuenteUrl:"https://www.bopcadiz.es/",

    convocatoriaUrl:"https://www.bopcadiz.es/"
  },


  /* =======================================================
     029 · JABUGO · CONVOCATORIA 2025
  ======================================================= */

  {
    id:"opopoint-jabugo-convocatoria-2025",
    procesoKey:"jabugo-convocatoria-2025",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Jabugo",
    municipio:"Jabugo",
    provincia:"Huelva",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2025",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOE-A-2025-20312",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20312",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20312"
  },


  /* =======================================================
     030 · CÁDIZ · OEP 2026
  ======================================================= */

  {
    id:"opopoint-cadiz-oep-2026",
    procesoKey:"cadiz-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Cádiz",
    municipio:"Cádiz",
    provincia:"Cádiz",

    plazas:11,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"Ayuntamiento de Cádiz · OEP 2026",
    fuenteUrl:"https://transparencia.cadiz.es/el-ayuntamiento-de-cadiz-aprueba-la-oferta-de-empleo-publico-de-2026-con-65-nuevas-plazas/",

    convocatoriaUrl:null
  },


  /* =======================================================
     031 · MOGUER · OEP 2026
  ======================================================= */

  {
    id:"opopoint-moguer-oep-2026",
    procesoKey:"moguer-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Moguer",
    municipio:"Moguer",
    provincia:"Huelva",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"OEP 2026 · Ayuntamiento de Moguer",
    fuenteUrl:"https://www.aytomoguer.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     032 · MARACENA · PENDIENTE
  ======================================================= */

  {
    id:"opopoint-maracena-pendiente",
    procesoKey:"maracena-pendiente",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Maracena",
    municipio:"Maracena",
    provincia:"Granada",

    plazas:2,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"PENDIENTE",
    nivel:"PENDIENTE",

    estado:"Pendiente de comprobar",
    estadoActual:"OEP localizada pero desglose de Policía Local pendiente de contraste",

    verificada:false,

    fuente:"Ayuntamiento de Maracena · Empleo Público",
    fuenteUrl:"https://maracena.es/empleo-publico/",

    convocatoriaUrl:null
  },


  /* =======================================================
     033 · PEDRO ABAD · OEP 2026
  ======================================================= */

  {
    id:"opopoint-pedro-abad-oep-2026",
    procesoKey:"pedro-abad-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Pedro Abad",
    municipio:"Pedro Abad",
    provincia:"Córdoba",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Córdoba · OEP 2026",
    fuenteUrl:"https://bop.dipucordoba.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     034 · ROQUETAS DE MAR · CONVOCATORIA 2026
  ======================================================= */

  {
    id:"opopoint-roquetas-convocatoria-2026",
    procesoKey:"roquetas-convocatoria-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Roquetas de Mar",
    municipio:"Roquetas de Mar",
    provincia:"Almería",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Cerrado",
    estadoActual:"Plazo finalizado",

    verificada:true,

    fechaPublicacion:"06/07/2026",
    fechaInicio:"07/07/2026",
    fechaFin:"04/08/2026",

    fuente:"BOE-A-2026-14612",
    fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14612",

    convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14612"
  },


  /* =======================================================
     035 · ISTÁN · OEP 2026
  ======================================================= */

  {
    id:"opopoint-istan-oep-2026",
    procesoKey:"istan-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Istán",
    municipio:"Istán",
    provincia:"Málaga",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOJA · OEP 2026 · Ayuntamiento de Istán",
    fuenteUrl:"https://www.juntadeandalucia.es/boja/2026/77/46",

    convocatoriaUrl:null
  },


  /* =======================================================
     036 · BENAMEJÍ · OEP 2026
  ======================================================= */

  {
    id:"opopoint-benameji-oep-2026",
    procesoKey:"benameji-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de Benamejí",
    municipio:"Benamejí",
    provincia:"Córdoba",

    plazas:3,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Córdoba · OEP 2026",
    fuenteUrl:"https://bop.dipucordoba.es/",

    convocatoriaUrl:null
  },


  /* =======================================================
     037 · VILLARRASA · 1 OFICIAL
  ======================================================= */

  {
    id:"opopoint-villarrasa-convocatoria-2026",
    procesoKey:"villarrasa-convocatoria-2026",

    puesto:"Oficial de Policía Local",
    organismo:"Ayuntamiento de Villarrasa",
    municipio:"Villarrasa",
    provincia:"Huelva",

    plazas:1,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fuente:"BOE-A-2026-4856",
    fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-4856",

    convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-4856"
  },


  /* =======================================================
     SAN ROQUE · OEP 2023 · FINALIZADA
  ======================================================= */

  {
    id:"opopoint-sanroque-oep-2023",
    procesoKey:"sanroque-oep-2023",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de San Roque",
    municipio:"San Roque",
    provincia:"Cádiz",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2023",

    tipo:"FINALIZADA",
    nivel:"HISTORICO",

    estado:"Proceso finalizado",
    estadoActual:"Finalizado",

    verificada:true,

    fuente:"Portal de Transparencia del Ayuntamiento de San Roque",
    fuenteUrl:"https://transparencia.sanroque.es/",

    convocatoriaUrl:"https://transparencia.sanroque.es/"
  },


  /* =======================================================
     SAN ROQUE · OEP 2024 · CONVOCATORIA PUBLICADA
  ======================================================= */

  {
    id:"opopoint-sanroque-oep-2024",
    procesoKey:"sanroque-oep-2024",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de San Roque",
    municipio:"San Roque",
    provincia:"Cádiz",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2024",

    tipo:"CONVOCATORIA",
    nivel:"OFICIAL",

    estado:"Publicada",
    estadoActual:"Convocatoria publicada",

    verificada:true,

    fechaPublicacion:"18/02/2026",

    fuente:"BOP Cádiz nº32 · 18/02/2026",
    fuenteUrl:"https://www.bopcadiz.es/.boletines_pdf/2026/02_febrero/BOP032_18-02-26.pdf",

    convocatoriaUrl:"https://www.bopcadiz.es/.boletines_pdf/2026/02_febrero/BOP032_18-02-26.pdf",

    seguimiento:{
      faseActual:"CONVOCATORIA_PUBLICADA",
      ultimaActualizacion:"18/02/2026",
      ultimaActuacion:"Publicación de las bases del proceso selectivo correspondiente a la OEP 2024.",
      proximaActuacion:"Comprobar la siguiente publicación oficial del proceso.",
      proximaFecha:null,

      fases:[
        {
          id:"CONVOCATORIA_PUBLICADA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"actual"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"ADMITIDOS",
          nombre:"Admitidos y excluidos",
          icono:"👥",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADOS",
          nombre:"Resultados",
          icono:"📊",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  },


  /* =======================================================
     SAN ROQUE · OEP 2026 · FUTURA
  ======================================================= */

  {
    id:"opopoint-sanroque-oep-2026",
    procesoKey:"sanroque-oep-2026",

    puesto:"Policía Local",
    organismo:"Ayuntamiento de San Roque",
    municipio:"San Roque",
    provincia:"Cádiz",

    plazas:4,
    grupo:"C1",
    turno:"Libre",

    oep:"2026",

    tipo:"OEP",
    nivel:"OFICIAL",

    estado:"Oferta publicada",
    estadoActual:"Pendiente de convocatoria",

    verificada:true,

    fuente:"BOP Cádiz nº30 · 13/02/2026",
    fuenteUrl:"https://www.bopcadiz.es/export/sites/default/.boletines_pdf/2026/02_febrero/BOP030_13-02-26.pdf",

    convocatoriaUrl:null,

    seguimiento:{
      faseActual:"OEP_PUBLICADA",
      ultimaActualizacion:"13/02/2026",
      ultimaActuacion:"Publicación de la OEP 2026 con 4 plazas de Policía Local.",
      proximaActuacion:"Publicación de bases y convocatoria.",
      proximaFecha:null,

      fases:[
        {
          id:"OEP_PUBLICADA",
          nombre:"Oferta de Empleo Público",
          icono:"📢",
          estado:"actual"
        },
        {
          id:"CONVOCATORIA",
          nombre:"Convocatoria y bases",
          icono:"📄",
          estado:"pendiente"
        },
        {
          id:"SOLICITUDES",
          nombre:"Presentación de solicitudes",
          icono:"📋",
          estado:"pendiente"
        },
        {
          id:"PRUEBAS",
          nombre:"Pruebas selectivas",
          icono:"📝",
          estado:"pendiente"
        },
        {
          id:"RESULTADO",
          nombre:"Resultado",
          icono:"🏆",
          estado:"pendiente"
        },
        {
          id:"NOMBRAMIENTO",
          nombre:"Nombramiento",
          icono:"🏛️",
          estado:"pendiente"
        }
      ]
    }
  }

];


/* =========================================================
   VALIDACIÓN AUTOMÁTICA
   ========================================================= */

/*
   Estas comprobaciones se ejecutan al cargar la web.
   Si algún día metemos una duplicidad accidental,
   la consola nos avisará.
*/

(function validarBaseDatos(){

  const ids = new Set();
  const procesos = new Set();

  const errores = [];

  convocatoriasOpoPoint.forEach((item,index)=>{

    if(!item.id){
      errores.push(
        `Registro ${index+1}: falta id`
      );
    }

    if(ids.has(item.id)){
      errores.push(
        `ID DUPLICADO: ${item.id}`
      );
    }

    ids.add(item.id);


    if(!item.procesoKey){
      errores.push(
        `${item.id}: falta procesoKey`
      );
    }

    if(procesos.has(item.procesoKey)){
      errores.push(
        `PROCESO DUPLICADO: ${item.procesoKey}`
      );
    }

    procesos.add(item.procesoKey);


    if(
      !item.organismo ||
      !item.municipio ||
      !item.provincia
    ){
      errores.push(
        `${item.id}: faltan datos de identificación`
      );
    }


    if(
      typeof item.plazas !== "number" ||
      item.plazas < 0
    ){
      errores.push(
        `${item.id}: número de plazas incorrecto`
      );
    }


    if(
      item.tipo === "CONVOCATORIA" &&
      !item.fuenteUrl &&
      !item.convocatoriaUrl
    ){
      errores.push(
        `${item.id}: convocatoria sin fuente`
      );
    }


    const fuentes = [
      item.fuenteUrl,
      item.convocatoriaUrl
    ]
    .filter(Boolean)
    .map(
      url =>
        String(url).toLowerCase()
    );


    if(
      fuentes.some(
        url =>
          url.includes("opobusca.com")
      )
    ){
      errores.push(
        `${item.id}: OpoBusca detectado como fuente`
      );
    }

  });


  if(errores.length){

    console.error(
      "ERRORES EN BASE DE DATOS OPOPOINT:",
      errores
    );

  }else{

    console.info(
      `OpoPoint OK · ${convocatoriasOpoPoint.length} procesos sin duplicidades de ID/procesoKey.`
    );

  }

})();


/* =========================================================
   EXPORTACIÓN
========================================================= */

window.convocatoriasOpoPoint =
  convocatoriasOpoPoint;

window.datos =
  convocatoriasOpoPoint;

window.convocatorias =
  convocatoriasOpoPoint;
