/* =========================================================
   OPOPOINT · BASE MAESTRA ANDALUCÍA
   Policía Local · 8 provincias

   ALMERÍA
   CÁDIZ
   CÓRDOBA
   GRANADA
   HUELVA
   JAÉN
   MÁLAGA
   SEVILLA

   REGLAS:
   - OEP != convocatoria
   - Libre != movilidad != promoción interna
   - Cada proceso tiene processKey único
   - ANULADAS se conservan como histórico
   - Comisiones de servicios NO son oposiciones
   - Libre designación NO es oposición
   - Nunca OpoBusca
========================================================= */

const convocatoriasOpoPoint = [

/* =========================================================
   ======================= ALMERÍA ==========================
========================================================= */

{
 id:"opopoint-albox-2026",
 procesoKey:"albox-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Albox",
 municipio:"Albox",
 provincia:"Almería",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"11/08/2026",
 fechaInicio:"12/08/2026",
 fechaFin:"08/09/2026",
 tasa:{importe:80,texto:"80,00 €"},
 fuente:"BOE-A-2026-17540",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17540"
},

{
 id:"opopoint-la-mojonera-2026",
 procesoKey:"la-mojonera-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de La Mojonera",
 municipio:"La Mojonera",
 provincia:"Almería",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"28/07/2026",
 fechaInicio:"29/07/2026",
 fechaFin:"25/08/2026",
 tasa:{importe:25,texto:"25,00 €"},
 fuente:"BOE-A-2026-16405",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16405",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16405"
},

{
 id:"opopoint-berja-2026",
 procesoKey:"berja-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Berja",
 municipio:"Berja",
 provincia:"Almería",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Plazo finalizado",
 verificada:true,
 fechaPublicacion:"27/07/2026",
 fechaInicio:"28/07/2026",
 fechaFin:"24/08/2026",
 tasa:{importe:20,texto:"20,00 €"},
 fuente:"BOE-A-2026-16297",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16297",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16297"
},

{
 id:"opopoint-roquetas-2026",
 procesoKey:"roquetas-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Roquetas de Mar",
 municipio:"Roquetas de Mar",
 provincia:"Almería",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Plazo finalizado",
 verificada:true,
 fechaPublicacion:"06/07/2026",
 fechaInicio:"07/07/2026",
 fechaFin:"04/08/2026",
 tasa:null,
 fuente:"BOE-A-2026-14612",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14612",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14612"
},

{
 id:"opopoint-cuevas-almanzora-2026",
 procesoKey:"cuevas-almanzora-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Cuevas del Almanzora",
 municipio:"Cuevas del Almanzora",
 provincia:"Almería",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Plazo finalizado",
 verificada:true,
 fechaPublicacion:"15/07/2026",
 fechaInicio:"16/07/2026",
 fechaFin:"12/08/2026",
 tasa:null,
 fuente:"BOE-A-2026-15425",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15425",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15425"
},

{
 id:"opopoint-olula-2025",
 procesoKey:"olula-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Olula del Río",
 municipio:"Olula del Río",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-17684",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17684",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17684"
},

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"BOP Almería · OEP 2026",
 fuenteUrl:"https://www.mojacar.es/",
 convocatoriaUrl:null
},

{
 id:"opopoint-almeria-oficial-2026",
 procesoKey:"almeria-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Almería",
 municipio:"Almería",
 provincia:"Almería",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-961",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-961",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-961"
},

{
 id:"opopoint-benahadux-2026",
 procesoKey:"benahadux-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Benahadux",
 municipio:"Benahadux",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3155",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3155",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3155"
},

{
 id:"opopoint-macael-2026",
 procesoKey:"macael-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Macael",
 municipio:"Macael",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE · convocatoria Macael",
 fuenteUrl:"https://www.boe.es/",
 convocatoriaUrl:"https://www.boe.es/"
},

{
 id:"opopoint-tabernas-2026",
 procesoKey:"tabernas-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Tabernas",
 municipio:"Tabernas",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fechaPublicacion:"28/02/2026",
 fechaInicio:"02/03/2026",
 fechaFin:"20/03/2026",
 tasa:null,
 fuente:"BOE-A-2026-4701",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4701",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4701"
},

{
 id:"opopoint-zurgena-2026",
 procesoKey:"zurgena-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Zurgena",
 municipio:"Zurgena",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4330",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4330",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4330"
},

{
 id:"opopoint-huercal-almeria-oficial-2026",
 procesoKey:"huercal-almeria-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Huércal de Almería",
 municipio:"Huércal de Almería",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4428",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4428",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4428"
},

{
 id:"opopoint-alhama-almeria-2026",
 procesoKey:"alhama-almeria-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Alhama de Almería",
 municipio:"Alhama de Almería",
 provincia:"Almería",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8831",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8831",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8831"
},

{
 id:"opopoint-vicar-2026",
 procesoKey:"vicar-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Vícar",
 municipio:"Vícar",
 provincia:"Almería",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-11894",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11894",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11894"
},

{
 id:"opopoint-nijar-libre-2026",
 procesoKey:"nijar-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Níjar",
 municipio:"Níjar",
 provincia:"Almería",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-12761",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12761",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12761"
},

{
 id:"opopoint-nijar-oficial-2026",
 procesoKey:"nijar-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Níjar",
 municipio:"Níjar",
 provincia:"Almería",
 plazas:2,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-12760",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12760",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12760"
},

{
 id:"opopoint-vera-2026",
 procesoKey:"vera-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Vera",
 municipio:"Vera",
 provincia:"Almería",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-11224",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11224",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11224"
},

{
 id:"opopoint-ejido-libre-2026",
 procesoKey:"ejido-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de El Ejido",
 municipio:"El Ejido",
 provincia:"Almería",
 plazas:7,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14067",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067"
},

{
 id:"opopoint-ejido-oficial-2026",
 procesoKey:"ejido-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de El Ejido",
 municipio:"El Ejido",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14067",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067"
},

{
 id:"opopoint-ejido-movilidad-2026",
 procesoKey:"ejido-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de El Ejido",
 municipio:"El Ejido",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14067",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14067"
},

{
 id:"opopoint-gador-2026",
 procesoKey:"gador-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Gádor",
 municipio:"Gádor",
 provincia:"Almería",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-15710",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15710",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15710"
},

/* =========================================================
   ======================== CÁDIZ ===========================
========================================================= */

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"Ayuntamiento de Algeciras",
 fuenteUrl:"https://www.algeciras.es/",
 convocatoriaUrl:null
},

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"Ayuntamiento de Cádiz",
 fuenteUrl:"https://transparencia.cadiz.es/",
 convocatoriaUrl:null
},

{
 id:"opopoint-sanroque-2023",
 procesoKey:"sanroque-2023",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San Roque",
 municipio:"San Roque",
 provincia:"Cádiz",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2023",
 tipo:"FINALIZADA",
 estado:"Proceso finalizado",
 estadoActual:"Histórico",
 verificada:true,
 fechaPublicacion:"24/07/2024",
 fuente:"BOP Cádiz · bases de 4 plazas",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-sanroque-2024",
 procesoKey:"sanroque-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San Roque",
 municipio:"San Roque",
 provincia:"Cádiz",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Publicada",
 estadoActual:"Convocatoria publicada",
 verificada:true,
 fechaPublicacion:"18/02/2026",
 fuente:"BOP Cádiz nº32 · 18/02/2026",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-sanroque-2026",
 procesoKey:"sanroque-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San Roque",
 municipio:"San Roque",
 provincia:"Cádiz",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"OEP",
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fechaPublicacion:"13/02/2026",
 fuente:"BOP Cádiz nº30 · OEP 2026",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:null
},

{
 id:"opopoint-sanroque-oficial-2026",
 procesoKey:"sanroque-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de San Roque",
 municipio:"San Roque",
 provincia:"Cádiz",
 plazas:3,
 grupo:"C1",
 turno:"Promoción interna",
 oep:null,
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9664",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9664",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9664"
},

{
 id:"opopoint-arcos-libre-2026",
 procesoKey:"arcos-libre-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Arcos de la Frontera",
 municipio:"Arcos de la Frontera",
 provincia:"Cádiz",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2023-2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8739",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8739",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8739"
},

{
 id:"opopoint-arcos-movilidad-2026",
 procesoKey:"arcos-movilidad-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Arcos de la Frontera",
 municipio:"Arcos de la Frontera",
 provincia:"Cádiz",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2023-2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8739",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8739",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8739"
},

{
 id:"opopoint-algodonales-2026",
 procesoKey:"algodonales-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Algodonales",
 municipio:"Algodonales",
 provincia:"Cádiz",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10769",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10769",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10769"
},

{
 id:"opopoint-conil-2026",
 procesoKey:"conil-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Conil de la Frontera",
 municipio:"Conil de la Frontera",
 provincia:"Cádiz",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-12234",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12234",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12234"
},

{
 id:"opopoint-puerto-santa-maria-libre-2026",
 procesoKey:"puerto-santa-maria-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de El Puerto de Santa María",
 municipio:"El Puerto de Santa María",
 provincia:"Cádiz",
 plazas:12,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3331",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3331",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3331"
},

{
 id:"opopoint-puerto-santa-maria-movilidad-2026",
 procesoKey:"puerto-santa-maria-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de El Puerto de Santa María",
 municipio:"El Puerto de Santa María",
 provincia:"Cádiz",
 plazas:3,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3331",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3331",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3331"
},

{
 id:"opopoint-puerto-santa-maria-oficiales-2026",
 procesoKey:"puerto-santa-maria-oficiales-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de El Puerto de Santa María",
 municipio:"El Puerto de Santa María",
 provincia:"Cádiz",
 plazas:8,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"24/08/2026",
 fechaInicio:"25/08/2026",
 fechaFin:null,
 tasa:null,
 fuente:"BOE",
 fuenteUrl:"https://www.boe.es/",
 convocatoriaUrl:"https://www.boe.es/"
},

{
 id:"opopoint-san-jose-valle-2026",
 procesoKey:"san-jose-valle-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San José del Valle",
 municipio:"San José del Valle",
 provincia:"Cádiz",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8665",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8665",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8665"
},

{
 id:"opopoint-tarifa-libre-2026",
 procesoKey:"tarifa-libre-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Tarifa",
 municipio:"Tarifa",
 provincia:"Cádiz",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7920",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7920",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7920"
},

{
 id:"opopoint-tarifa-movilidad-2026",
 procesoKey:"tarifa-movilidad-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Tarifa",
 municipio:"Tarifa",
 provincia:"Cádiz",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7920",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7920",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7920"
},

{
 id:"opopoint-la-linea-2026",
 procesoKey:"la-linea-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de La Línea de la Concepción",
 municipio:"La Línea de la Concepción",
 provincia:"Cádiz",
 plazas:8,
 grupo:"C1",
 turno:"Según bases",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Bases publicadas",
 estadoActual:"Pendiente de extracto BOE",
 verificada:true,
 fuente:"BOP Cádiz nº138",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-barbate-libre-2025",
 procesoKey:"barbate-libre-2025",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Barbate",
 municipio:"Barbate",
 provincia:"Cádiz",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-17620",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17620",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17620"
},

{
 id:"opopoint-barbate-movilidad-2025",
 procesoKey:"barbate-movilidad-2025",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Barbate",
 municipio:"Barbate",
 provincia:"Cádiz",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-17620",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17620",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17620"
},

{
 id:"opopoint-los-barrios-libre-2025",
 procesoKey:"los-barrios-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Los Barrios",
 municipio:"Los Barrios",
 provincia:"Cádiz",
 plazas:6,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOP Cádiz",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-los-barrios-movilidad-2025",
 procesoKey:"los-barrios-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Los Barrios",
 municipio:"Los Barrios",
 provincia:"Cádiz",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOP Cádiz",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-villamartin-2025",
 procesoKey:"villamartin-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villamartín",
 municipio:"Villamartín",
 provincia:"Cádiz",
 plazas:5,
 grupo:"C1",
 turno:"Libre / movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Lista definitiva publicada",
 verificada:true,
 fuente:"BOP Cádiz nº138",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-bornos-anulada-2026",
 procesoKey:"bornos-anulada-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Bornos",
 municipio:"Bornos",
 provincia:"Cádiz",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2024-2025",
 tipo:"ANULADA",
 estado:"Convocatoria anulada",
 estadoActual:"Anulada",
 verificada:true,
 fuente:"BOP Cádiz nº84",
 fuenteUrl:"https://www.bopcadiz.es/",
 convocatoriaUrl:"https://www.bopcadiz.es/"
},

{
 id:"opopoint-ubrique-2025",
 procesoKey:"ubrique-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Ubrique",
 municipio:"Ubrique",
 provincia:"Cádiz",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-23868",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23868",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23868"
},

/* =========================================================
   ======================= CÓRDOBA ==========================
========================================================= */

{
 id:"opopoint-cordoba-libre-2026",
 procesoKey:"cordoba-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Córdoba",
 municipio:"Córdoba",
 provincia:"Córdoba",
 plazas:39,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7933",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7933",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7933"
},

{
 id:"opopoint-cordoba-movilidad-2026",
 procesoKey:"cordoba-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Córdoba",
 municipio:"Córdoba",
 provincia:"Córdoba",
 plazas:8,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7933",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7933",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7933"
},

{
 id:"opopoint-cordoba-inspector-pi-2026",
 procesoKey:"cordoba-inspector-pi-2026",
 puesto:"Inspector de Policía Local",
 organismo:"Ayuntamiento de Córdoba",
 municipio:"Córdoba",
 provincia:"Córdoba",
 plazas:4,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2663",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2663",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2663"
},

{
 id:"opopoint-baena-libre-2026",
 procesoKey:"baena-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Baena",
 municipio:"Baena",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2026-8662",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662"
},

{
 id:"opopoint-baena-subinspector-pi-2026",
 procesoKey:"baena-subinspector-pi-2026",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Baena",
 municipio:"Baena",
 provincia:"Córdoba",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8662",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662"
},

{
 id:"opopoint-baena-oficial-pi-2026",
 procesoKey:"baena-oficial-pi-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Baena",
 municipio:"Baena",
 provincia:"Córdoba",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8662",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8662"
},

{
 id:"opopoint-montilla-libre-2026",
 procesoKey:"montilla-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Montilla",
 municipio:"Montilla",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2026-5033",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5033",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5033"
},

{
 id:"opopoint-montilla-movilidad-2026",
 procesoKey:"montilla-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Montilla",
 municipio:"Montilla",
 provincia:"Córdoba",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-5033",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5033",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5033"
},

{
 id:"opopoint-almodovar-rio-2026",
 procesoKey:"almodovar-rio-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Almodóvar del Río",
 municipio:"Almodóvar del Río",
 provincia:"Córdoba",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-11018",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11018",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11018"
},

{
 id:"opopoint-posadas-2026",
 procesoKey:"posadas-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Posadas",
 municipio:"Posadas",
 provincia:"Córdoba",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8156",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8156",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8156"
},

{
 id:"opopoint-penarroya-2026",
 procesoKey:"penarroya-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Peñarroya-Pueblonuevo",
 municipio:"Peñarroya-Pueblonuevo",
 provincia:"Córdoba",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14525",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14525",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14525"
},

{
 id:"opopoint-dona-mencia-2026",
 procesoKey:"dona-mencia-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Doña Mencía",
 municipio:"Doña Mencía",
 provincia:"Córdoba",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fechaPublicacion:"13/07/2026",
 fuente:"BOE-A-2026-15268",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15268",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15268"
},

{
 id:"opopoint-la-rambla-oficial-2026",
 procesoKey:"la-rambla-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de La Rambla",
 municipio:"La Rambla",
 provincia:"Córdoba",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4423",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4423",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4423"
},

{
 id:"opopoint-villa-del-rio-2026",
 procesoKey:"villa-del-rio-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villa del Río",
 municipio:"Villa del Río",
 provincia:"Córdoba",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2026-3696",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3696",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3696"
},

{
 id:"opopoint-villanueva-cordoba-2026",
 procesoKey:"villanueva-cordoba-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villanueva de Córdoba",
 municipio:"Villanueva de Córdoba",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7754",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7754",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7754"
},

{
 id:"opopoint-castro-del-rio-2025",
 procesoKey:"castro-del-rio-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Castro del Río",
 municipio:"Castro del Río",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2025-23576",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23576",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23576"
},

{
 id:"opopoint-puente-genil-2025",
 procesoKey:"puente-genil-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Puente Genil",
 municipio:"Puente Genil",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-25187",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25187",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25187"
},

{
 id:"opopoint-priego-libre-2025",
 procesoKey:"priego-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Priego de Córdoba",
 municipio:"Priego de Córdoba",
 provincia:"Córdoba",
 plazas:6,
 grupo:"C1",
 turno:"Libre",
 oep:"2022-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-20527",
 fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-20527",
 convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-20527"
},

{
 id:"opopoint-priego-movilidad-2025",
 procesoKey:"priego-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Priego de Córdoba",
 municipio:"Priego de Córdoba",
 provincia:"Córdoba",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2022-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-20527",
 fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-20527",
 convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2025-20527"
},

{
 id:"opopoint-priego-oficial-pi-2025",
 procesoKey:"priego-oficial-pi-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Priego de Córdoba",
 municipio:"Priego de Córdoba",
 provincia:"Córdoba",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-19387",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-19387",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-19387"
},

/* =========================================================
   ======================= GRANADA ==========================
========================================================= */

{
 id:"opopoint-granada-libre-2024",
 procesoKey:"granada-libre-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Granada",
 municipio:"Granada",
 provincia:"Granada",
 plazas:28,
 grupo:"C1",
 turno:"Libre",
 oep:"2022-2023-2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Nombramiento en prácticas",
 verificada:true,
 fechaPublicacion:"23/12/2024",
 fechaInicio:"24/12/2024",
 fechaFin:"24/01/2025",
 tasa:null,
 fuente:"BOE-A-2024-26812",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-26812",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-26812"
},

{
 id:"opopoint-granada-movilidad-2024",
 procesoKey:"granada-movilidad-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Granada",
 municipio:"Granada",
 provincia:"Granada",
 plazas:7,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2022-2023-2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso finalizado / nombramiento",
 verificada:true,
 fechaPublicacion:"23/12/2024",
 fechaInicio:"24/12/2024",
 fechaFin:"24/01/2025",
 tasa:null,
 fuente:"BOE-A-2024-26812",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-26812",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-26812"
},

{
 id:"opopoint-armilla-2026",
 procesoKey:"armilla-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Armilla",
 municipio:"Armilla",
 provincia:"Granada",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2769",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2769",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2769"
},

{
 id:"opopoint-albolote-libre-2026",
 procesoKey:"albolote-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Albolote",
 municipio:"Albolote",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3997",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3997",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3997"
},

{
 id:"opopoint-albolote-oficial-pi-2026",
 procesoKey:"albolote-oficial-pi-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Albolote",
 municipio:"Albolote",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3997",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3997",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3997"
},

{
 id:"opopoint-alhendin-2026",
 procesoKey:"alhendin-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Alhendín",
 municipio:"Alhendín",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-5028",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5028",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5028"
},

{
 id:"opopoint-ogijares-2026",
 procesoKey:"ogijares-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Ogíjares",
 municipio:"Ogíjares",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fechaPublicacion:"13/04/2026",
 fechaInicio:null,
 fechaFin:"12/05/2026",
 tasa:null,
 fuente:"BOE-A-2026-8159",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8159",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8159"
},

{
 id:"opopoint-atarfe-movilidad-2026",
 procesoKey:"atarfe-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Atarfe",
 municipio:"Atarfe",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso de movilidad",
 verificada:true,
 fuente:"BOE-A-2026-7390",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7390",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7390"
},

{
 id:"opopoint-vegas-genil-2-2026",
 procesoKey:"vegas-genil-2-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Vegas del Genil",
 municipio:"Vegas del Genil",
 provincia:"Granada",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-5782",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5782",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5782"
},

{
 id:"opopoint-vegas-genil-1-2026",
 procesoKey:"vegas-genil-1-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Vegas del Genil",
 municipio:"Vegas del Genil",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4018",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4018",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4018"
},

{
 id:"opopoint-chauchina-libre-2026",
 procesoKey:"chauchina-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Chauchina",
 municipio:"Chauchina",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2175",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2175",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2175"
},

{
 id:"opopoint-chauchina-oficial-pi-2026",
 procesoKey:"chauchina-oficial-pi-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Chauchina",
 municipio:"Chauchina",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10466",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10466",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10466"
},

{
 id:"opopoint-illora-2026",
 procesoKey:"illora-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Íllora",
 municipio:"Íllora",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2366",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2366",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2366"
},

{
 id:"opopoint-caniles-2026",
 procesoKey:"caniles-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Caniles",
 municipio:"Caniles",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9490",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9490",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9490"
},

{
 id:"opopoint-baza-2026",
 procesoKey:"baza-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Baza",
 municipio:"Baza",
 provincia:"Granada",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-13525",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13525",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13525"
},

{
 id:"opopoint-monachil-2026",
 procesoKey:"monachil-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Monachil",
 municipio:"Monachil",
 provincia:"Granada",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-1623",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1623",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1623"
},

{
 id:"opopoint-huetor-tajar-2025",
 procesoKey:"huetor-tajar-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Huétor Tájar",
 municipio:"Huétor Tájar",
 provincia:"Granada",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-23497",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23497",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23497"
},

{
 id:"opopoint-guadix-subinspector-pi-2026",
 procesoKey:"guadix-subinspector-pi-2026",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Guadix",
 municipio:"Guadix",
 provincia:"Granada",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOP Granada",
 fuenteUrl:"https://bop.dipgra.es/",
 convocatoriaUrl:"https://bop.dipgra.es/"
},

{
 id:"opopoint-cajar-2025",
 procesoKey:"cajar-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cájar",
 municipio:"Cájar",
 provincia:"Granada",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso selectivo en fase avanzada",
 verificada:true,
 fuente:"BOP Granada",
 fuenteUrl:"https://bop.dipgra.es/",
 convocatoriaUrl:"https://bop.dipgra.es/"
},

{
 id:"opopoint-motril-libre-2025",
 procesoKey:"motril-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Motril",
 municipio:"Motril",
 provincia:"Granada",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOP Granada",
 fuenteUrl:"https://bop.dipgra.es/",
 convocatoriaUrl:"https://bop.dipgra.es/"
},

{
 id:"opopoint-motril-movilidad-2025",
 procesoKey:"motril-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Motril",
 municipio:"Motril",
 provincia:"Granada",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOP Granada",
 fuenteUrl:"https://bop.dipgra.es/",
 convocatoriaUrl:"https://bop.dipgra.es/"
},

/* =========================================================
   ======================== HUELVA ==========================
========================================================= */

{
 id:"opopoint-el-campillo-2026",
 procesoKey:"el-campillo-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de El Campillo",
 municipio:"El Campillo",
 provincia:"Huelva",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fechaPublicacion:"15/06/2026",
 fuente:"BOE-A-2026-12955",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12955",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12955"
},

{
 id:"opopoint-san-juan-puerto-2026",
 procesoKey:"san-juan-puerto-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San Juan del Puerto",
 municipio:"San Juan del Puerto",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-6365",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6365",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6365"
},

{
 id:"opopoint-aljaraque-2026",
 procesoKey:"aljaraque-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Aljaraque",
 municipio:"Aljaraque",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-5279",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5279",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5279"
},

{
 id:"opopoint-isla-cristina-subinspector-2026",
 procesoKey:"isla-cristina-subinspector-2026",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Isla Cristina",
 municipio:"Isla Cristina",
 provincia:"Huelva",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10167",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10167",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10167"
},

{
 id:"opopoint-isla-cristina-oficiales-2026",
 procesoKey:"isla-cristina-oficiales-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Isla Cristina",
 municipio:"Isla Cristina",
 provincia:"Huelva",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10167",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10167",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10167"
},

{
 id:"opopoint-bollullos-oficial-pi-2026",
 procesoKey:"bollullos-oficial-pi-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Bollullos Par del Condado",
 municipio:"Bollullos Par del Condado",
 provincia:"Huelva",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-1971",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1971",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1971"
},

{
 id:"opopoint-cartaya-2026",
 procesoKey:"cartaya-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cartaya",
 municipio:"Cartaya",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-7583",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7583",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7583"
},

{
 id:"opopoint-almonte-libre-2025",
 procesoKey:"almonte-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Almonte",
 municipio:"Almonte",
 provincia:"Huelva",
 plazas:20,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-18150",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18150",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18150"
},

{
 id:"opopoint-almonte-oficiales-2025",
 procesoKey:"almonte-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Almonte",
 municipio:"Almonte",
 provincia:"Huelva",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-18166",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18166",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18166"
},

{
 id:"opopoint-punta-umbria-libre-2025",
 procesoKey:"punta-umbria-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Punta Umbría",
 municipio:"Punta Umbría",
 provincia:"Huelva",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-9019",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9019",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9019"
},

{
 id:"opopoint-punta-umbria-oficiales-2025",
 procesoKey:"punta-umbria-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Punta Umbría",
 municipio:"Punta Umbría",
 provincia:"Huelva",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-12921",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12921",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12921"
},

{
 id:"opopoint-ayamonte-jefe-2025",
 procesoKey:"ayamonte-jefe-2025",
 puesto:"Jefe de Policía Local",
 organismo:"Ayuntamiento de Ayamonte",
 municipio:"Ayamonte",
 provincia:"Huelva",
 plazas:1,
 grupo:"A1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-8528",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-8528",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-8528"
},

{
 id:"opopoint-ayamonte-oficiales-2025",
 procesoKey:"ayamonte-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Ayamonte",
 municipio:"Ayamonte",
 provincia:"Huelva",
 plazas:3,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-8525",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-8525",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-8525"
},

{
 id:"opopoint-gibraleon-2025",
 procesoKey:"gibraleon-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Gibraleón",
 municipio:"Gibraleón",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-10349",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-10349",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-10349"
},

{
 id:"opopoint-villanueva-castillejos-2025",
 procesoKey:"villanueva-castillejos-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villanueva de los Castillejos",
 municipio:"Villanueva de los Castillejos",
 provincia:"Huelva",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-9022",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9022",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9022"
},

{
 id:"opopoint-san-bartolome-torre-2025",
 procesoKey:"san-bartolome-torre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de San Bartolomé de la Torre",
 municipio:"San Bartolomé de la Torre",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-1687",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-1687",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-1687"
},

{
 id:"opopoint-almonaster-real-2025",
 procesoKey:"almonaster-real-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Almonaster la Real",
 municipio:"Almonaster la Real",
 provincia:"Huelva",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-11130",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11130",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11130"
},

{
 id:"opopoint-chucena-2025",
 procesoKey:"chucena-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Chucena",
 municipio:"Chucena",
 provincia:"Huelva",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-17236",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17236",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-17236"
},

/* =========================================================
   ========================= JAÉN ============================
========================================================= */

{
 id:"opopoint-jaen-libre-2025",
 procesoKey:"jaen-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Jaén",
 municipio:"Jaén",
 provincia:"Jaén",
 plazas:19,
 grupo:"C1",
 turno:"Libre",
 oep:"2022-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-20819",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20819",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20819"
},

{
 id:"opopoint-jaen-movilidad-2025",
 procesoKey:"jaen-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Jaén",
 municipio:"Jaén",
 provincia:"Jaén",
 plazas:3,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2022-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-20819",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20819",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20819"
},

{
 id:"opopoint-jaen-oficial-pi-2026",
 procesoKey:"jaen-oficial-pi-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Jaén",
 municipio:"Jaén",
 provincia:"Jaén",
 plazas:3,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9913",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9913",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9913"
},

{
 id:"opopoint-jaen-subinspector-pi-2026",
 procesoKey:"jaen-subinspector-pi-2026",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Jaén",
 municipio:"Jaén",
 provincia:"Jaén",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10760",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10760",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10760"
},

{
 id:"opopoint-jaen-inspector-pi-2026",
 procesoKey:"jaen-inspector-pi-2026",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Jaén",
 municipio:"Jaén",
 provincia:"Jaén",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14186",
 fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-14186",
 convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-14186"
},

{
 id:"opopoint-andujar-libre-2026",
 procesoKey:"andujar-libre-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Andújar",
 municipio:"Andújar",
 provincia:"Jaén",
 plazas:7,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-6368",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6368",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6368"
},

{
 id:"opopoint-andujar-movilidad-2026",
 procesoKey:"andujar-movilidad-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Andújar",
 municipio:"Andújar",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-6368",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6368",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6368"
},

{
 id:"opopoint-mengibar-libre-2026",
 procesoKey:"mengibar-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Mengíbar",
 municipio:"Mengíbar",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-11546",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11546",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11546"
},

{
 id:"opopoint-mengibar-subinspector-2026",
 procesoKey:"mengibar-subinspector-2026",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Mengíbar",
 municipio:"Mengíbar",
 provincia:"Jaén",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-12114",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12114",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12114"
},

{
 id:"opopoint-martos-2026",
 procesoKey:"martos-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Martos",
 municipio:"Martos",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4708",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4708",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4708"
},

{
 id:"opopoint-marmolejo-2026",
 procesoKey:"marmolejo-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Marmolejo",
 municipio:"Marmolejo",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-6277",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6277",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6277"
},

{
 id:"opopoint-porcuna-2026",
 procesoKey:"porcuna-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Porcuna",
 municipio:"Porcuna",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4332",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4332",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4332"
},

{
 id:"opopoint-ibros-2026",
 procesoKey:"ibros-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Ibros",
 municipio:"Ibros",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14268",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14268",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14268"
},

{
 id:"opopoint-linares-movilidad-2026",
 procesoKey:"linares-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Linares",
 municipio:"Linares",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2776",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2776",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2776"
},

{
 id:"opopoint-ubeda-libre-2026",
 procesoKey:"ubeda-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Úbeda",
 municipio:"Úbeda",
 provincia:"Jaén",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Bases publicadas",
 estadoActual:"Pendiente de extracto BOE",
 verificada:true,
 fechaPublicacion:"10/06/2026",
 fuente:"BOP Jaén nº111",
 fuenteUrl:"https://bop.dipujaen.es/",
 convocatoriaUrl:"https://bop.dipujaen.es/"
},

{
 id:"opopoint-ubeda-movilidad-2026",
 procesoKey:"ubeda-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Úbeda",
 municipio:"Úbeda",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Bases publicadas",
 estadoActual:"Pendiente de extracto BOE",
 verificada:true,
 fechaPublicacion:"10/06/2026",
 fuente:"BOP Jaén nº111",
 fuenteUrl:"https://bop.dipujaen.es/",
 convocatoriaUrl:"https://bop.dipujaen.es/"
},

{
 id:"opopoint-castillo-locubin-2025",
 procesoKey:"castillo-locubin-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Castillo de Locubín",
 municipio:"Castillo de Locubín",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-18404",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18404",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18404"
},

{
 id:"opopoint-la-carolina-2025",
 procesoKey:"la-carolina-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de La Carolina",
 municipio:"La Carolina",
 provincia:"Jaén",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-11242",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11242",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11242"
},

{
 id:"opopoint-bedmar-garciez-2025",
 procesoKey:"bedmar-garciez-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Bedmar y Garcíez",
 municipio:"Bedmar y Garcíez",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-6326",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-6326",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-6326"
},

{
 id:"opopoint-santiago-pontones-2025",
 procesoKey:"santiago-pontones-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Santiago-Pontones",
 municipio:"Santiago-Pontones",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-2552",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2552",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2552"
},

{
 id:"opopoint-cazorla-2025",
 procesoKey:"cazorla-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cazorla",
 municipio:"Cazorla",
 provincia:"Jaén",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-21980",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21980",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21980"
},

{
 id:"opopoint-ubeda-inspector-pi-2025",
 procesoKey:"ubeda-inspector-pi-2025",
 puesto:"Inspector de Policía Local",
 organismo:"Ayuntamiento de Úbeda",
 municipio:"Úbeda",
 provincia:"Jaén",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-20830",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20830",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-20830"
},

{
 id:"opopoint-villatorres-anulada-2025",
 procesoKey:"villatorres-anulada-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villatorres",
 municipio:"Villatorres",
 provincia:"Jaén",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"ANULADA",
 estado:"Convocatoria sin efecto",
 estadoActual:"Sin efecto",
 verificada:true,
 fuente:"BOE-A-2025-2102",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2102",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2102"
},

/* =========================================================
   ======================== MÁLAGA ==========================
========================================================= */

{
 id:"opopoint-malaga-inspectores-2026",
 procesoKey:"malaga-inspectores-2026",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Málaga",
 municipio:"Málaga",
 provincia:"Málaga",
 plazas:6,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fechaPublicacion:"17/04/2026",
 fuente:"BOE-A-2026-8444",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8444",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8444"
},

{
 id:"opopoint-malaga-subinspectores-2025",
 procesoKey:"malaga-subinspectores-2025",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Málaga",
 municipio:"Málaga",
 provincia:"Málaga",
 plazas:12,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Nombramiento / proceso final",
 verificada:true,
 fuente:"BOE-A-2025-3235",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3235",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3235"
},

{
 id:"opopoint-marbella-libre-2025",
 procesoKey:"marbella-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:15,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-3567",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567"
},

{
 id:"opopoint-marbella-movilidad-2025",
 procesoKey:"marbella-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Nombramiento / proceso final",
 verificada:true,
 fuente:"BOE-A-2025-3567",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567"
},

{
 id:"opopoint-marbella-restringido-2025",
 procesoKey:"marbella-restringido-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Restringido",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso histórico / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-3567",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3567"
},

{
 id:"opopoint-marbella-intendente-2025",
 procesoKey:"marbella-intendente-2025",
 puesto:"Intendente de Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:1,
 grupo:"A1",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-2622",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2622",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt?id=BOE-A-2025-2622"
},

{
 id:"opopoint-marbella-inspector-2025",
 procesoKey:"marbella-inspector-2025",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-2827",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2827",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2827"
},

{
 id:"opopoint-marbella-subinspectores-2025",
 procesoKey:"marbella-subinspectores-2025",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:2,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-2827",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2827",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2827"
},

{
 id:"opopoint-marbella-oficiales-2025",
 procesoKey:"marbella-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Marbella",
 municipio:"Marbella",
 provincia:"Málaga",
 plazas:4,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-2627",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2627",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-2627"
},

{
 id:"opopoint-mijas-2026",
 procesoKey:"mijas-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Mijas",
 municipio:"Mijas",
 provincia:"Málaga",
 plazas:10,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-3134",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3134",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-3134"
},

{
 id:"opopoint-ronda-libre-2026",
 procesoKey:"ronda-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Ronda",
 municipio:"Ronda",
 provincia:"Málaga",
 plazas:6,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / subsanación",
 verificada:true,
 fechaPublicacion:"10/06/2026",
 fechaInicio:"11/06/2026",
 fechaFin:"08/07/2026",
 tasa:{importe:130,texto:"130,00 €"},
 fuente:"BOE-A-2026-12559",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12559",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12559"
},

{
 id:"opopoint-ronda-movilidad-2026",
 procesoKey:"ronda-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Ronda",
 municipio:"Ronda",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / subsanación",
 verificada:true,
 fechaPublicacion:"10/06/2026",
 fechaInicio:"11/06/2026",
 fechaFin:"08/07/2026",
 tasa:{importe:130,texto:"130,00 €"},
 fuente:"BOE-A-2026-12559",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12559",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-12559"
},

{
 id:"opopoint-ronda-oficiales-2026",
 procesoKey:"ronda-oficiales-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Ronda",
 municipio:"Ronda",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / subsanación",
 verificada:true,
 tasa:{importe:130,texto:"130,00 €"},
 fuente:"BOE-A-2026-15257",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15257",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-15257"
},

{
 id:"opopoint-cartama-libre-2026",
 procesoKey:"cartama-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cártama",
 municipio:"Cártama",
 provincia:"Málaga",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-11805",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11805",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11805"
},

{
 id:"opopoint-cartama-movilidad-2026",
 procesoKey:"cartama-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cártama",
 municipio:"Cártama",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10929",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10929",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10929"
},

{
 id:"opopoint-manilva-3-2026",
 procesoKey:"manilva-3-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Manilva",
 municipio:"Manilva",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos definitivos",
 verificada:true,
 fuente:"BOE-A-2026-1599",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1599",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1599"
},

{
 id:"opopoint-manilva-4-2026",
 procesoKey:"manilva-4-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Manilva",
 municipio:"Manilva",
 provincia:"Málaga",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-5916",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5916",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-5916"
},

{
 id:"opopoint-pizarra-2026",
 procesoKey:"pizarra-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Pizarra",
 municipio:"Pizarra",
 provincia:"Málaga",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-4006",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4006",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-4006"
},

{
 id:"opopoint-casabermeja-2026",
 procesoKey:"casabermeja-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Casabermeja",
 municipio:"Casabermeja",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Bases publicadas",
 estadoActual:"Pendiente de extracto BOE",
 verificada:true,
 fuente:"BOP Málaga",
 fuenteUrl:"https://www.bopmalaga.es/",
 convocatoriaUrl:"https://www.bopmalaga.es/"
},

{
 id:"opopoint-rincon-victoria-2026",
 procesoKey:"rincon-victoria-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Rincón de la Victoria",
 municipio:"Rincón de la Victoria",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-13158",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13158",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13158"
},

{
 id:"opopoint-villanueva-trabuco-2026",
 procesoKey:"villanueva-trabuco-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villanueva del Trabuco",
 municipio:"Villanueva del Trabuco",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8736",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8736",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8736"
},

{
 id:"opopoint-villanueva-algaidas-oficial-2026",
 procesoKey:"villanueva-algaidas-oficial-2026",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Villanueva de Algaidas",
 municipio:"Villanueva de Algaidas",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos definitivos",
 verificada:true,
 fuente:"BOE-A-2026-6355",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6355",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6355"
},

{
 id:"opopoint-villanueva-rosario-2026",
 procesoKey:"villanueva-rosario-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Villanueva del Rosario",
 municipio:"Villanueva del Rosario",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Convocatoria modificada",
 verificada:true,
 fuente:"BOP Málaga",
 fuenteUrl:"https://www.bopmalaga.es/",
 convocatoriaUrl:"https://www.bopmalaga.es/"
},

{
 id:"opopoint-antequera-libre-2025",
 procesoKey:"antequera-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Antequera",
 municipio:"Antequera",
 provincia:"Málaga",
 plazas:8,
 grupo:"C1",
 turno:"Libre",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"Ayuntamiento de Antequera · convocatoria 9 plazas",
 fuenteUrl:"https://www.antequera.es/",
 convocatoriaUrl:"https://www.antequera.es/"
},

{
 id:"opopoint-antequera-movilidad-2025",
 procesoKey:"antequera-movilidad-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Antequera",
 municipio:"Antequera",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"Ayuntamiento de Antequera · convocatoria 9 plazas",
 fuenteUrl:"https://www.antequera.es/",
 convocatoriaUrl:"https://www.antequera.es/"
},

{
 id:"opopoint-teba-2026",
 procesoKey:"teba-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Teba",
 municipio:"Teba",
 provincia:"Málaga",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10276",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10276",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10276"
},

{
 id:"opopoint-torrox-libre-2025",
 procesoKey:"torrox-libre-2025",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Torrox",
 municipio:"Torrox",
 provincia:"Málaga",
 plazas:6,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-12469",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12469",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12469"
},

{
 id:"opopoint-torrox-movilidad-2025",
 procesoKey:"torrox-movilidad-2025",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Torrox",
 municipio:"Torrox",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-12469",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12469",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12469"
},

{
 id:"opopoint-nerja-2025",
 procesoKey:"nerja-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Nerja",
 municipio:"Nerja",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2025-9423",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9423",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-9423"
},

{
 id:"opopoint-benalmadena-oficiales-2026",
 procesoKey:"benalmadena-oficiales-2026",
 puesto:"Oficial/a de Policía Local",
 organismo:"Ayuntamiento de Benalmádena",
 municipio:"Benalmádena",
 provincia:"Málaga",
 plazas:3,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2374",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2374",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2374"
},

{
 id:"opopoint-benalmadena-subinspectores-2026",
 procesoKey:"benalmadena-subinspectores-2026",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Benalmádena",
 municipio:"Benalmádena",
 provincia:"Málaga",
 plazas:3,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2365",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2365",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2365"
},

{
 id:"opopoint-benalmadena-inspector-2025",
 procesoKey:"benalmadena-inspector-2025",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Benalmádena",
 municipio:"Benalmádena",
 provincia:"Málaga",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-26928",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26928",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26928"
},

{
 id:"opopoint-estepona-libre-2025-a",
 procesoKey:"estepona-libre-2025-a",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Estepona",
 municipio:"Estepona",
 provincia:"Málaga",
 plazas:8,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso finalizado / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-11552",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11552",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11552"
},

{
 id:"opopoint-estepona-movilidad-2025-a",
 procesoKey:"estepona-movilidad-2025-a",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Estepona",
 municipio:"Estepona",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso finalizado / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-11552",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11552",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11552"
},

{
 id:"opopoint-estepona-libre-2025-b",
 procesoKey:"estepona-libre-2025-b",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Estepona",
 municipio:"Estepona",
 provincia:"Málaga",
 plazas:7,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso finalizado / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-16010",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-16010",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-16010"
},

{
 id:"opopoint-estepona-movilidad-2025-b",
 procesoKey:"estepona-movilidad-2025-b",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Estepona",
 municipio:"Estepona",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso finalizado / seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-16010",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-16010",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-16010"
},

{
 id:"opopoint-estepona-inspector-2025",
 procesoKey:"estepona-inspector-2025",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Estepona",
 municipio:"Estepona",
 provincia:"Málaga",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Nombramiento / proceso final",
 verificada:true,
 fuente:"BOE-A-2025-11678",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11678",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-11678"
},

{
 id:"opopoint-fuengirola-2025",
 procesoKey:"fuengirola-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Fuengirola",
 municipio:"Fuengirola",
 provincia:"Málaga",
 plazas:14,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-12490",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12490",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12490"
},

{
 id:"opopoint-alhaurin-torre-subinspector-2026",
 procesoKey:"alhaurin-torre-subinspector-2026",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Alhaurín de la Torre",
 municipio:"Alhaurín de la Torre",
 provincia:"Málaga",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Bases publicadas",
 estadoActual:"Convocatoria en BOP",
 verificada:true,
 fuente:"BOP Málaga",
 fuenteUrl:"https://www.bopmalaga.es/",
 convocatoriaUrl:"https://www.bopmalaga.es/"
},

{
 id:"opopoint-cortes-frontera-2025",
 procesoKey:"cortes-frontera-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cortes de la Frontera",
 municipio:"Cortes de la Frontera",
 provincia:"Málaga",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOP Málaga",
 fuenteUrl:"https://www.bopmalaga.es/",
 convocatoriaUrl:"https://www.bopmalaga.es/"
},

{
 id:"opopoint-monda-2025",
 procesoKey:"monda-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Monda",
 municipio:"Monda",
 provincia:"Málaga",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Nombramiento en prácticas",
 verificada:true,
 fuente:"BOP Málaga",
 fuenteUrl:"https://www.bopmalaga.es/",
 convocatoriaUrl:"https://www.bopmalaga.es/"
},

/* =========================================================
   ======================== SEVILLA ==========================
========================================================= */

{
 id:"opopoint-sevilla-inspectores-2026",
 procesoKey:"sevilla-inspectores-2026",
 puesto:"Inspector/a de Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:5,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"14/08/2026",
 fechaInicio:"17/08/2026",
 fechaFin:null,
 tasa:null,
 fuente:"BOE-A-2026-17738",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17738",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17738"
},

{
 id:"opopoint-sevilla-subinspectores-pi-2026",
 procesoKey:"sevilla-subinspectores-pi-2026",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:5,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"14/08/2026",
 fechaInicio:"17/08/2026",
 fechaFin:null,
 tasa:null,
 fuente:"BOE-A-2026-17739",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739"
},

{
 id:"opopoint-sevilla-subinspector-movilidad-2026",
 procesoKey:"sevilla-subinspector-movilidad-2026",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"14/08/2026",
 fechaInicio:"17/08/2026",
 fechaFin:null,
 tasa:null,
 fuente:"BOE-A-2026-17739",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739"
},

{
 id:"opopoint-sevilla-subinspector-concurso-2026",
 procesoKey:"sevilla-subinspector-concurso-2026",
 puesto:"Subinspector/a de Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Abierta",
 estadoActual:"Presentación de solicitudes",
 verificada:true,
 fechaPublicacion:"14/08/2026",
 fechaInicio:"17/08/2026",
 fechaFin:null,
 tasa:null,
 fuente:"BOE-A-2026-17739",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-17739"
},

{
 id:"opopoint-sevilla-intendentes-2026",
 procesoKey:"sevilla-intendentes-2026",
 puesto:"Intendente/a de Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:2,
 grupo:"A1",
 turno:"Promoción interna",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Plazo finalizado",
 verificada:true,
 fuente:"BOE-A-2026-9554",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9554",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9554"
},

{
 id:"opopoint-sevilla-48-2024",
 procesoKey:"sevilla-48-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Sevilla",
 municipio:"Sevilla",
 provincia:"Sevilla",
 plazas:48,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso selectivo en seguimiento",
 verificada:true,
 fuente:"BOE-A-2024-19859",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-19859",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-19859"
},

{
 id:"opopoint-alcala-guadaira-libre-2026",
 procesoKey:"alcala-guadaira-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Alcalá de Guadaíra",
 municipio:"Alcalá de Guadaíra",
 provincia:"Sevilla",
 plazas:8,
 grupo:"C1",
 turno:"Libre",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2026-9328",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9328",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9328"
},

{
 id:"opopoint-alcala-guadaira-movilidad-2026",
 procesoKey:"alcala-guadaira-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Alcalá de Guadaíra",
 municipio:"Alcalá de Guadaíra",
 provincia:"Sevilla",
 plazas:2,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025-2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9328",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9328",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9328"
},

{
 id:"opopoint-ecija-libre-2026",
 procesoKey:"ecija-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Écija",
 municipio:"Écija",
 provincia:"Sevilla",
 plazas:8,
 grupo:"C1",
 turno:"Libre",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2026-2200",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2200",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2200"
},

{
 id:"opopoint-ecija-movilidad-2026",
 procesoKey:"ecija-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Écija",
 municipio:"Écija",
 provincia:"Sevilla",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-2200",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2200",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2200"
},

{
 id:"opopoint-paradas-libre-2026",
 procesoKey:"paradas-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Paradas",
 municipio:"Paradas",
 provincia:"Sevilla",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8163",
 fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-8163",
 convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-8163"
},

{
 id:"opopoint-paradas-movilidad-2026",
 procesoKey:"paradas-movilidad-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Paradas",
 municipio:"Paradas",
 provincia:"Sevilla",
 plazas:1,
 grupo:"C1",
 turno:"Movilidad",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8163",
 fuenteUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-8163",
 convocatoriaUrl:"https://www.boe.es/buscar/doc.php?id=BOE-A-2026-8163"
},

{
 id:"opopoint-burguillos-2026",
 procesoKey:"burguillos-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Burguillos",
 municipio:"Burguillos",
 provincia:"Sevilla",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Plazo finalizado / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10775",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10775",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10775"
},

{
 id:"opopoint-guillena-2026",
 procesoKey:"guillena-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Guillena",
 municipio:"Guillena",
 provincia:"Sevilla",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-14187",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14187",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14187"
},

{
 id:"opopoint-olivares-2026",
 procesoKey:"olivares-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Olivares",
 municipio:"Olivares",
 provincia:"Sevilla",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-6371",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6371",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-6371"
},

{
 id:"opopoint-lantejuela-2026",
 procesoKey:"lantejuela-2026",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Lantejuela",
 municipio:"Lantejuela",
 provincia:"Sevilla",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-8999",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8999",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8999"
},

{
 id:"opopoint-las-cabezas-libre-2025",
 procesoKey:"las-cabezas-libre-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Las Cabezas de San Juan",
 municipio:"Las Cabezas de San Juan",
 provincia:"Sevilla",
 plazas:1,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2025-23182",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23182",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-23182"
},

{
 id:"opopoint-las-cabezas-oficiales-2025",
 procesoKey:"las-cabezas-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Las Cabezas de San Juan",
 municipio:"Las Cabezas de San Juan",
 provincia:"Sevilla",
 plazas:2,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2024-2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOP Sevilla · 28/05/2026",
 fuenteUrl:"https://bopsevilla.dipusevilla.es/",
 convocatoriaUrl:"https://bopsevilla.dipusevilla.es/"
},

{
 id:"opopoint-moron-2026",
 procesoKey:"moron-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Morón de la Frontera",
 municipio:"Morón de la Frontera",
 provincia:"Sevilla",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Admitidos / seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-10777",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10777",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10777"
},

{
 id:"opopoint-mairena-aljarafe-subinspector-2025",
 procesoKey:"mairena-aljarafe-subinspector-2025",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Mairena del Aljarafe",
 municipio:"Mairena del Aljarafe",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2025-25182",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25182",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25182"
},

{
 id:"opopoint-mairena-alcor-libre-2024",
 procesoKey:"mairena-alcor-libre-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Mairena del Alcor",
 municipio:"Mairena del Alcor",
 provincia:"Sevilla",
 plazas:3,
 grupo:"C1",
 turno:"Libre",
 oep:"2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOP Sevilla",
 fuenteUrl:"https://bopsevilla.dipusevilla.es/",
 convocatoriaUrl:"https://bopsevilla.dipusevilla.es/"
},

{
 id:"opopoint-mairena-alcor-oficiales-2025",
 procesoKey:"mairena-alcor-oficiales-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Mairena del Alcor",
 municipio:"Mairena del Alcor",
 provincia:"Sevilla",
 plazas:2,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2022",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOP Sevilla · 28/05/2026",
 fuenteUrl:"https://bopsevilla.dipusevilla.es/",
 convocatoriaUrl:"https://bopsevilla.dipusevilla.es/"
},

{
 id:"opopoint-camas-libre-2025",
 procesoKey:"camas-libre-2025",
 puesto:"Agente de Policía Local",
 organismo:"Ayuntamiento de Camas",
 municipio:"Camas",
 provincia:"Sevilla",
 plazas:9,
 grupo:"C1",
 turno:"Libre",
 oep:"2022-2023-2024",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOE-A-2025-22140",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-22140",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-22140"
},

{
 id:"opopoint-camas-inspector-2025",
 procesoKey:"camas-inspector-2025",
 puesto:"Inspector de Policía Local",
 organismo:"Ayuntamiento de Camas",
 municipio:"Camas",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-21513",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513"
},

{
 id:"opopoint-camas-subinspector-2025",
 procesoKey:"camas-subinspector-2025",
 puesto:"Subinspector de Policía Local",
 organismo:"Ayuntamiento de Camas",
 municipio:"Camas",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-21513",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513"
},

{
 id:"opopoint-camas-oficial-2025",
 procesoKey:"camas-oficial-2025",
 puesto:"Oficial de Policía Local",
 organismo:"Ayuntamiento de Camas",
 municipio:"Camas",
 provincia:"Sevilla",
 plazas:1,
 grupo:"C1",
 turno:"Promoción interna",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-21513",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21513"
},

{
 id:"opopoint-lora-rio-2024",
 procesoKey:"lora-rio-2024",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Lora del Río",
 municipio:"Lora del Río",
 provincia:"Sevilla",
 plazas:5,
 grupo:"C1",
 turno:"Libre",
 oep:"2023",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Pruebas selectivas",
 verificada:true,
 fuente:"BOP Sevilla · seguimiento 2026",
 fuenteUrl:"https://bopsevilla.dipusevilla.es/",
 convocatoriaUrl:"https://bopsevilla.dipusevilla.es/"
},

{
 id:"opopoint-sanlucar-mayor-2025",
 procesoKey:"sanlucar-mayor-2025",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Sanlúcar la Mayor",
 municipio:"Sanlúcar la Mayor",
 provincia:"Sevilla",
 plazas:2,
 grupo:"C1",
 turno:"Libre",
 oep:"2025",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2025-18878",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18878",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-18878"
},

{
 id:"opopoint-marchena-libre-2026",
 procesoKey:"marchena-libre-2026",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Marchena",
 municipio:"Marchena",
 provincia:"Sevilla",
 plazas:4,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9383",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383"
},

{
 id:"opopoint-marchena-subinspector-2026",
 procesoKey:"marchena-subinspector-2026",
 puesto:"Subinspector/a del Cuerpo de Policía Local",
 organismo:"Ayuntamiento de Marchena",
 municipio:"Marchena",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9383",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383"
},

{
 id:"opopoint-marchena-inspector-2026",
 procesoKey:"marchena-inspector-2026",
 puesto:"Inspector/a del Cuerpo de la Policía Local",
 organismo:"Ayuntamiento de Marchena",
 municipio:"Marchena",
 provincia:"Sevilla",
 plazas:1,
 grupo:"A2",
 turno:"Promoción interna",
 oep:"2026",
 tipo:"CONVOCATORIA",
 estado:"Cerrado",
 estadoActual:"Proceso en seguimiento",
 verificada:true,
 fuente:"BOE-A-2026-9383",
 fuenteUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383",
 convocatoriaUrl:"https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-9383"
},

/* =========================================================
   ======================= OEP / PENDIENTES ==================
========================================================= */

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fechaPublicacion:"24/08/2026",
 fuente:"BOJA · 24/08/2026",
 fuenteUrl:"https://www.juntadeandalucia.es/boja/",
 convocatoriaUrl:null
},

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
 estado:"Pendiente de comprobar",
 estadoActual:"Fuente oficial específica pendiente",
 verificada:false,
 fuente:"Ayuntamiento de Lanjarón",
 fuenteUrl:"https://www.lanjaron.es/",
 convocatoriaUrl:null
},

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
 estado:"Pendiente de comprobar",
 estadoActual:"No localizada convocatoria actual",
 verificada:false,
 fuente:"Ayuntamiento de Montoro",
 fuenteUrl:"https://www.montoro.es/",
 convocatoriaUrl:null
},

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"BOP Córdoba",
 fuenteUrl:"https://bop.dipucordoba.es/",
 convocatoriaUrl:null
},

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"BOP Córdoba",
 fuenteUrl:"https://bop.dipucordoba.es/",
 convocatoriaUrl:null
},

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
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"Ayuntamiento de Marbella",
 fuenteUrl:"https://www.marbella.es/",
 convocatoriaUrl:null
},

{
 id:"opopoint-cadiz-oep-2026-2",
 procesoKey:"cadiz-oep-2026-futuro",
 puesto:"Policía Local",
 organismo:"Ayuntamiento de Cádiz",
 municipio:"Cádiz",
 provincia:"Cádiz",
 plazas:11,
 grupo:"C1",
 turno:"Libre",
 oep:"2026",
 tipo:"OEP",
 estado:"Oferta publicada",
 estadoActual:"Pendiente de convocatoria",
 verificada:true,
 fuente:"Ayuntamiento de Cádiz",
 fuenteUrl:"https://transparencia.cadiz.es/",
 convocatoriaUrl:null
}

];


/* =========================================================
   NORMALIZACIÓN
========================================================= */

const mapaOpoPoint = new Map();

convocatoriasOpoPoint.forEach(item => {

  const key = item.procesoKey || item.id;

  if(!mapaOpoPoint.has(key)){
    mapaOpoPoint.set(key,item);
  }else{
    console.warn(
      "Proceso duplicado eliminado:",
      key
    );
  }

});


const baseMaestraOpoPoint =
  Array.from(mapaOpoPoint.values());


/* =========================================================
   VALIDACIÓN PROFESIONAL
========================================================= */

(function(){

  const ids = new Set();
  const keys = new Set();
  const provincias = new Set();

  const errores = [];
  const avisos = [];

  baseMaestraOpoPoint.forEach(item => {

    /* ID */

    if(!item.id){
      errores.push(
        "Registro sin ID"
      );
    }

    if(ids.has(item.id)){
      errores.push(
        `ID DUPLICADO: ${item.id}`
      );
    }

    ids.add(item.id);


    /* PROCESS KEY */

    if(!item.procesoKey){
      errores.push(
        `${item.id}: falta procesoKey`
      );
    }

    if(keys.has(item.procesoKey)){
      errores.push(
        `processKey DUPLICADO: ${item.procesoKey}`
      );
    }

    keys.add(item.procesoKey);


    /* DATOS */

    if(!item.organismo){
      errores.push(
        `${item.id}: falta organismo`
      );
    }

    if(!item.municipio){
      errores.push(
        `${item.id}: falta municipio`
      );
    }

    if(!item.provincia){
      errores.push(
        `${item.id}: falta provincia`
      );
    }

    provincias.add(item.provincia);


    /* PLAZAS */

    if(
      typeof item.plazas !== "number" ||
      item.plazas < 0
    ){
      errores.push(
        `${item.id}: plazas incorrectas`
      );
    }


    /* TASA */

    if(
      item.tasa &&
      (
        typeof item.tasa.importe !== "number" ||
        item.tasa.importe < 0
      )
    ){
      errores.push(
        `${item.id}: tasa incorrecta`
      );
    }


    /* OPOBUSCA */

    const urls = [
      item.fuenteUrl,
      item.convocatoriaUrl
    ]
    .filter(Boolean)
    .map(url =>
      String(url).toLowerCase()
    );

    if(
      urls.some(
        url =>
          url.includes("opobusca")
      )
    ){
      errores.push(
        `${item.id}: enlace OpoBusca detectado`
      );
    }


    /* FUENTE */

    if(
      item.tipo === "CONVOCATORIA" &&
      !item.fuenteUrl
    ){
      errores.push(
        `${item.id}: convocatoria sin fuente`
      );
    }


    /* SOLICITUDES SIN FECHA FIN */

    if(
      item.estadoActual &&
      item.estadoActual
        .toLowerCase()
        .includes("solicitud") &&
      !item.fechaFin
    ){
      avisos.push(
        `${item.organismo}: solicitudes sin fecha fin comprobada`
      );
    }

  });


  console.group(
    "OpoPoint · VALIDACIÓN BASE MAESTRA"
  );


  if(errores.length){

    console.error(
      "❌ ERRORES:",
      errores
    );

  }else{

    console.info(
      "✅ IDs únicos"
    );

    console.info(
      "✅ processKey únicos"
    );

    console.info(
      "✅ Sin enlaces OpoBusca"
    );

    console.info(
      `✅ Procesos cargados: ${baseMaestraOpoPoint.length}`
    );

    console.info(
      `✅ Provincias: ${provincias.size}`
    );

  }


  if(avisos.length){

    console.warn(
      "⚠️ AVISOS:",
      avisos
    );

  }


  console.info(
    "✅ Almería"
  );

  console.info(
    "✅ Cádiz"
  );

  console.info(
    "✅ Córdoba"
  );

  console.info(
    "✅ Granada"
  );

  console.info(
    "✅ Huelva"
  );

  console.info(
    "✅ Jaén"
  );

  console.info(
    "✅ Málaga"
  );

  console.info(
    "✅ Sevilla"
  );


  console.groupEnd();

})();


/* =========================================================
   EXPORTACIÓN
========================================================= */

window.convocatoriasOpoPoint =
  baseMaestraOpoPoint;

window.datos =
  baseMaestraOpoPoint;

window.convocatorias =
  baseMaestraOpoPoint;
