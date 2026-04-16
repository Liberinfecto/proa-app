/* ═════════════════════════════════════════════
   DATA: GUIDES
═══════════════════════════════════════════════ */
const GUIDES = [
  { id:'iia',      icon:'🦠', bg:'#fee2e2', name:'Infección Intra-Abdominal (IIA)',                                             ok:true  },
  { id:'pa',       icon:'🔥', bg:'#fef9c3', name:'Pancreatitis Aguda',                                                          ok:true  },
  { id:'ppb',      icon:'🩹', bg:'#fef3c7', name:'Infección de Piel y Partes Blandas',                                          ok:true  },
  { id:'pie',      icon:'🦶', bg:'#fef3c7', name:'Infección en Pie Diabético',                                                  ok:true  },
  { id:'nac',      icon:'🫁', bg:'#e0f2fe', name:'Neumonía Aguda',                                                              ok:true  },
  { id:'nih',      icon:'🏥', bg:'#e0f2fe', name:'Neumonía Intrahospitalaria',                                                  ok:true  },
  { id:'nav',      icon:'🩻', bg:'#e0f2fe', name:'Neumonía Asociada a la Ventilación Mecánica (NAV)',                           ok:true  },
  { id:'itu',      icon:'💧', bg:'#d1fae5', name:'Infección del Tracto Urinario (ITU)',                                         ok:true  },
  { id:'meni',     icon:'🧠', bg:'#fef3c7', name:'Meningoencefalitis Aguda Comunitaria en Paciente Inmunocompetente',           ok:true  },
  { id:'endo',     icon:'❤️', bg:'#fee2e2', name:'Sospecha Clínica de Endocarditis Infecciosa (EI)',                           ok:true  },
  { id:'dcei',     icon:'⚡', bg:'#fee2e2', name:'DCEI y Sospecha de Proceso Infeccioso',                                      ok:true  },
  { id:'cvc',      icon:'💉', bg:'#d1fae5', name:'Infección Asociada a Catéteres Centrales',                                   ok:true  },
  { id:'artritis', icon:'🦴', bg:'#e0f2fe', name:'Artritis Séptica Nativa Aguda',                                              ok:true  },
  { id:'osteo_f',  icon:'🦴', bg:'#e0f2fe', name:'Osteomielitis de Hueso Largo Vinculada a Fractura',                          ok:true  },
  { id:'osteo_v',  icon:'🧍', bg:'#e0f2fe', name:'Osteomielitis Vertebral / Espondilodiscitis',                                ok:true  },
];

/* ═════════════════════════════════════════════
   DATA: DECISION TREE  (IIA · G-1)
═══════════════════════════════════════════════ */
/* NODES (IIA · G-1) loaded via flowcharts/iia.js */

/* ═════════════════════════════════════════════
   DATA: TABLES
═══════════════════════════════════════════════ */
const TABLES = [
  {
    id:'qsofa', label:'T1 · qSOFA',
    title:'Tabla 1 · Quick-SOFA',
    note:'Score ≥ 2 = criterio de alto riesgo para sepsis.',
    heads:['Criterio','Pts'],
    rows:[
      ['Frecuencia respiratoria ≥ 22 rpm','1'],
      ['Alteración del nivel de conciencia','1'],
      ['Presión arterial sistólica < 100 mmHg','1'],
    ],
  },
  {
    id:'mannheim', label:'T2 · Mannheim',
    title:'Tabla 2 · Índice de Mannheim (MPI)',
    note:'MPI > 25 = alto riesgo. Falla renal: Cr ≥ 2 mg/dL o urea ≥ 1 g/L u oliguria < 20 ml/h. Falla respiratoria: PaO₂ < 50 mmHg o PaCO₂ > 50 mmHg. Shock: hipotensión que no revierte con cristaloides. Falla intestinal: parálisis ≥ 24 hs.',
    heads:['Criterio','Pts'],
    rows:[
      ['Edad > 50 años','5'],
      ['Género femenino','5'],
      ['Falla orgánica (≥ 1 tipo)','7'],
      ['Enfermedad maligna','4'],
      ['Evolución peritonitis > 24 hs','4'],
      ['Origen no colónico','4'],
      ['Peritonitis difusa generalizada','6'],
      ['Exudado: Claro','0'],
      ['Exudado: Turbio / Purulento','6'],
      ['Exudado: Fecaloideo','12'],
    ],
  },
  {
    id:'rf_entero', label:'T3 · Enterococcus',
    title:'Tabla 3 · FR para Enterococcus resistente a Ampicilina',
    heads:['Factor de Riesgo'],
    rows:[
      ['Inmunosupresión (hemato-oncológica, trasplante, quimioterapia) + desarrollo de IIA bajo ATB prolongada (> 10 días)'],
      ['ATB previo reciente (último mes) con cefalosporinas o β-lactámicos de amplio espectro por > 10 días'],
      ['Peritonitis hospitalaria + enfermedad hepato-biliar con procedimiento invasivo o implante de dispositivo'],
      ['Trasplante hepático'],
      ['Desarrollada bajo antibioticoterapia en curso > 7 días'],
      ['Cultivo positivo para Enterococcus R-amp en otro sitio (orina, herida, hisopado u otro)'],
    ],
    oneCol: true,
  },
  {
    id:'rf_mrsa', label:'T4 · MRSA',
    title:'Tabla 4 · FR para Staphylococcus resistente a Meticilina',
    heads:['Factor de Riesgo'],
    rows:[
      ['Peritonitis terciaria sin respuesta al tratamiento o con cocos Gram positivos en estudio directo del líquido peritoneal'],
      ['Cultivo con MRSA en otro sitio (orina, herida, catéter, hisopado nasal/faríngeo u otro)'],
      ['Antecedente de infección o colonización por MRSA'],
    ],
    oneCol: true,
  },
  {
    id:'duration', label:'T5 · Duración',
    title:'Tabla 5 · Duración del Tratamiento Antibiótico',
    note:'* Persistencia de actividad infecciosa o disfunciones luego de 5–7 días: investigar persistencia de infección, complicaciones u otro foco nuevo (catéteres, NAV, candidiasis).',
    heads:['Condición clínica','Días'],
    rows:[
      ['IIA no complicada, con resolución quirúrgica del foco','1–3'],
      ['IIA complicada localizada, sin sepsis ni factor de alto riesgo, con control quirúrgico','3–5'],
      ['IIA con criterios de alto riesgo, peritonitis difusa o FR para MDR, sin inestabilidad hemodinámica','5–7'],
      ['IIA de alto riesgo: nosocomial, postoperatoria, inmunosupresor, acumulación de FR, sepsis o disfunciones orgánicas','7–10 *'],
      ['Absceso hepático, esplénico o colección peritoneal supurada drenada','21–28'],
    ],
  },
  {
    id:'spectrum', label:'T6 · Espectro',
    title:'Tabla 6 · Espectro de cobertura',
    heads:['ATB','CGP','BGN','Anaer.'],
    rows:[
      ['AMP/SUL',    '++++', '++',   '++++'],
      ['PTZ',        '++++', '+++',  '++++'],
      ['Gentamicina','+'   , '+++',  '−'],
      ['Amikacina',  '+',    '+++',  '−'],
      ['Moxiflox.',  '++',   '+++',  '+++'],
      ['Ciproflo.',  '++',   '+++',  '−'],
      ['Ceftriax.',  '+++',  '+++',  '−'],
      ['Metronidaz.','−',    '−',    '++++'],
      ['MER/IMP',    '+++',  '++++', '++++'],
      ['Colistina',  '−',    '+++',  '−'],
      ['Tigeciclina','++++', '++++', '++++'],
      ['Fosfomicina','+++',  '++++', '−'],
    ],
  },
  {
    id:'doses', label:'T7 · Dosis',
    title:'Tabla 7 · Dosis de Antimicrobianos Específicos',
    heads:['Fármaco','Dosis'],
    rows:[
      ['Tigeciclina','Carga: 200 mg iv en 1 h\nMant.: 100 mg iv c/12 hs (30–60 min)'],
      ['Vancomicina','Carga: 30 mg/Kg iv en 1–2 h\nMant.: 15 mg/Kg iv en 1 h c/8–12 hs'],
      ['Fosfomicina','Intermitente: 4 g iv c/6 hs u 8 g iv c/8 hs (4–6 h)\nPerfusión continua: carga 4 g → mant. 8 g en 8 hs'],
      ['Meropenem','Carga (sepsis): 2 g iv en 1 h\nMant.: 2 g iv en perfusión ≥ 3 hs c/8 hs'],
      ['Imipenem','500 mg iv c/6 hs o 1 g iv c/8 hs\nCarga en sepsis: 1 g iv en 30 min'],
      ['Colistina','Carga: 4 mg/Kg iv en 1 h\nMant.: 1,5–2 mg/Kg iv c/8–12 hs'],
      ['Fluconazol','Carga: 12 mg/Kg/día en 2 dosis (24 hs)\nMant.: 6 mg/Kg/día en 2 dosis'],
      ['Caspofungina','Carga: 70–100 mg iv en ≥ 1 h\nMant.: 50 mg iv/día'],
    ],
  },
  {
    id:'oral', label:'T8 · IV→Oral',
    title:'Tabla 8 · Pasaje a Vía Oral',
    heads:['Antimicrobiano IV','Antimicrobiano VO'],
    showHeads: true,
    rows:[
      ['Ampicilina/sulbactam','Amoxicilina/clavulánico 875/125 mg c/8 hs'],
      ['Piperacilina/tazobactam','Amox/clav 875/125 mg c/8 hs\n+ Ciprofloxacina 500 mg c/8 hs'],
      ['Gentamicina','Ciprofloxacina 500 mg c/8 hs'],
      ['Moxifloxacina','Moxifloxacina 400 mg/día'],
      ['Ciprofloxacina','Ciprofloxacina 500 mg c/8 hs'],
      ['Ceftriaxona','Cefuroxime 500 mg c/8 hs\no Amox/clav 875/125 mg c/8 hs'],
      ['Metronidazol','Metronidazol 500 mg c/8 hs'],
      ['Tigeciclina','Doxiciclina 300 mg carga → 100 mg c/12 hs\n+ Amox/clav 875/125 mg c/8 hs (o moxifloxacina)'],
    ],
  },
];

/* ═════════════════════════════════════════════
   DATA: TABLES  (Pancreatitis Aguda · G-2)
═══════════════════════════════════════════════ */
const PA_TABLES = [
  {
    id:'pa_severidad', label:'T1 · Severidad',
    title:'Tabla 1 · Clasificación de Severidad — Pancreatitis Aguda',
    type:'pa_double_table',
    left:{
      head:'Atlanta Revisada (RAC)',
      rows:[
        ['Leve','Sin disfunciones orgánicas\nSin complicaciones locales o sistémicas'],
        ['Moderadamente severa','Disfunción orgánica transitoria ≤ 48 hs\nComplicación local o sistémica sin disfunción orgánica persistente'],
        ['Severa','Disfunción orgánica única o múltiple persistente > 48 hs'],
      ],
    },
    right:{
      head:'Basada en Determinantes (DBC)',
      rows:[
        ['Leve','Sin falla orgánica Y sin necrosis (peri)pancreática'],
        ['Moderada','Disfunción orgánica transitoria Y/O necrosis estéril (peri)pancreática'],
        ['Severa','Disfunción orgánica persistente O necrosis (peri)pancreática infectada'],
        ['Crítica','Disfunción orgánica persistente Y necrosis (peri)pancreática infectada'],
      ],
    },
  },
  {
    id:'pa_balthazar', label:'T2 · Balthazar',
    title:'Tabla 2 · Índice de Severidad Tomográfico (Balthazar modificado)',
    type:'pa_balthazar',
  },
  {
    id:'pa_fr_mdr', label:'T3 · FR MDR',
    title:'Tabla 3 · Factores de Riesgo para Microorganismos Multirresistentes',
    type:'pa_fr_mdr',
  },
  {
    id:'pa_dosis', label:'T4 · Dosis',
    title:'Tabla 4 · Dosis de Antimicrobianos Específicos',
    type:'pa_dosis',
    rows:[
      ['Tigeciclina','Carga: 200 mg iv en perfusión de 1 hora\nMant.: 100 mg iv c/12 hs en perfusión de 30 min–1 hora'],
      ['Meropenem','Carga (sepsis): 2 g iv en 1 hora\nMant.: 2 g iv en perfusión de 3 hs o más c/8 hs'],
      ['Imipenem','500 mg iv c/6 hs o 1 g iv c/8 hs\nCarga en sepsis: 1 g iv en 30 min, seguido de la primera dosis de perfusión'],
      ['Colistina','Carga: 4 mg/Kg iv en perfusión de 1 hora\nMant.: 1,5–2 mg/Kg iv c/8–12 hs en perfusión de 1 hora'],
      ['Fluconazol','Carga: 12 mg/kg iv/día en 2 dosis (primeras 24 hs)\nMant.: 6 mg/kg iv/día en 2 dosis'],
    ],
  },
];

/* ═════════════════════════════════════════════
   DATA: TABLES  (Piel y Partes Blandas · G-3)
═══════════════════════════════════════════════ */
const PPB_TABLES = [
  {
    id:'ppb_criterios', label:'T1 · Criterios',
    title:'Tabla 1 · Criterios sistémicos de infección (*)',
    type:'ppb_simple_list',
    items:[
      'Temperatura axilar > 38°C',
      'Frecuencia cardíaca > 100 cpm',
      'Polipnea > 24 rpm',
      'Glóbulos blancos > 12.000 o < 4.000 /mm³',
    ],
    note:'(*) 1 criterio + estabilidad hemodinámica = Moderada. 3 o más criterios, sospecha necrotizante, sepsis o inmunosupresión = Severa.',
  },
  {
    id:'ppb_samr', label:'T2 · FR SAMR',
    title:'Tabla 2 · Factores de Riesgo para SAMR',
    type:'ppb_simple_list',
    items:[
      'Inmunodepresión',
      'Colonización o infección por SAMR en los últimos 12 meses',
      'Contacto domiciliario de persona con SAMR',
      'Uso de antibióticos previos y no respuesta a primera línea',
      'Hospitalización reciente, residencia en centros de larga estancia',
      'Hemodiálisis',
      'Infección por VIH',
      'Usuario de drogas intravenosas',
      'Situación de calle, población privada de libertad',
      'Trabajadores de la salud',
    ],
    note:'En el Hospital de Clínicas el 20% de S. aureus en IPPB presentan resistencia a la meticilina (SAMR). 6,5% resistencia a clindamicina y 34% a eritromicina.',
  },
  {
    id:'ppb_aclaraciones', label:'T3 · Severas',
    title:'Tabla 3 · Aclaraciones — Infecciones Severas',
    type:'ppb_notes',
    items:[
      { hd:'a. Sospechar infección necrotizante si:', tx:'Presencia de dolor intenso desproporcionado a la lesión visible, anestesia de la zona, compromiso sistémico, repercusión hemodinámica, flictenas, crepitación, induración más allá de la zona eritematosa, necrosis de piel, equimosis o acidosis láctica progresiva.' },
      { hd:'b. Pacientes con infección severa, Fournier o sospecha de necrotizante:', tx:'Requieren consulta inmediata con cirujano y urólogo (en Fournier). No se debe retrasar la consulta ni demorar la intervención quirúrgica por estudios imagenológicos. La imagenología (Eco, TAC, RNM) puede valorar extensión pero puede tener falsos negativos. Suelen ser necesarias varias intervenciones para estabilizar al paciente.' },
      { hd:'c. Oncológicos neutropénicos:', tx:'La etiología puede ser cocos Gram positivos, bacilos Gram negativos resistentes o hongos (Cándida, Fusarium, Aspergillus, mucorales). Deben ser evaluados por infectólogo y dermatólogo. Puede ser necesario el agregado de tratamiento empírico antifúngico.' },
      { hd:'d. Clindamicina — efecto antitoxina:', tx:'Se agrega en infecciones graves por su efecto antitoxina en infecciones por Streptococcus spp. y Staphylococcus aureus. Linezolid suma cobertura contra estos microorganismos y el efecto antitoxina.' },
      { hd:'e. Fascitis necrotizante por S. pyogenes:', tx:'Tratamiento de elección: Penicilina + Clindamicina (acción antitoxina de la clindamicina).' },
      { hd:'f. Duración en infecciones severas:', tx:'Al menos 14 días, hasta que el paciente no requiera más cirugía de desbridación, presente mejoría clínica y se encuentre sin fiebre por al menos 48–72 horas.' },
      { hd:'g. Desescalada con cultivos:', tx:'Con los cultivos se puede desescalar a un espectro más reducido. Se puede suspender la clindamicina cuando haya estabilidad clínica e infección confirmada por microorganismos no toxigénicos.' },
    ],
  },
  {
    id:'ppb_consideraciones', label:'T4 · Consideraciones',
    title:'Tabla 4 · Consideraciones Generales',
    type:'ppb_notes',
    items:[
      { hd:'Reevaluación a las 48–72 hs:', tx:'Todos los pacientes deben reevaluarse en cuanto a posibilidad de pasaje a vía oral, considerar desescalar o eventualmente escalar si presenta mala evolución. Considerar necesidad de drenaje de colecciones si persistieran.' },
      { hd:'SAMR y clindamicina:', tx:'SAMR puede presentar resistencia a la clindamicina, por lo que se debe controlar a los pacientes que reciben este fármaco para cobertura de Staphylococcus y eventualmente escalar a vancomicina o cambiar a TMP-SMX en caso de mala evolución. En el Hospital de Clínicas el 20% de S. aureus en IPPB presentaban resistencia a la meticilina (SAMR), el 6,5% resistencia a clindamicina y el 34% a eritromicina.' },
      { hd:'Abscesos perianales:', tx:'Si se sospecha origen cutáneo, agregar cobertura para SAMR y tomar muestra para cultivo.' },
      { hd:'Celulitis periorbitaria / Angina de Ludwig:', tx:'Solicitar TAC o RNM. Consulta urgente con oftalmólogo en celulitis periorbitaria y con otorrinolaringólogo en celulitis periorbitaria y en angina de Ludwig.' },
      { hd:'Abreviaturas:', tx:'ERC: Enfermedad Renal Crónica · EPOC: Enfermedad Pulmonar Obstructiva Crónica · FR: Factores de riesgo · HC: Hemocultivo · SAMS: S. aureus meticilino sensible · SAMR: S. aureus meticilino resistente · TMP-SMX: Trimetoprim-sulfametoxazol (dosis referida al componente TMP; cada ampolla: 80 mg TMP; comprimidos: 80 mg o 160 mg).' },
    ],
  },
];

/* ═════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentNode = 'start';
let history     = [];
let tablesFromScreen = 'iia';   // 'iia' | 'home'
let activeTabIndex = 0;
const TOTAL_STEPS = 6;

/* PA state */
let pa_currentNode = 'pa_start';
let pa_history     = [];
let pa_activeTabIndex = 0;
const PA_TOTAL_STEPS  = 5;

const PA_MM_IDS = ['pa_start','pa_tiempo','pa_colangitis','pa_no_atb','pa_segunda','pa_tx_g1','pa_tx_g2'];

const PA_JUMP_PATHS = {
  'pa_start':      [],
  'pa_tiempo':     ['pa_start'],
  'pa_colangitis': ['pa_start','pa_tiempo'],
  'pa_no_atb':     ['pa_start','pa_tiempo'],
  'pa_segunda':    ['pa_start'],
  'pa_tx_g1':      ['pa_start','pa_segunda'],
  'pa_tx_g2':      ['pa_start','pa_segunda'],
};

/* ── PIE STATE ── */
let pie_currentNode = 'pie_start';
let pie_history     = [];
let pie_activeTabIndex = 0;

/* ── ARTRITIS STATE ── */
let ar_currentNode = 'ar_start';
let ar_history     = [];
let ar_activeTabIndex = 0;
const AR_TOTAL_STEPS = 7;
const AR_MM_IDS = ['ar_start','ar_arthro','ar_diagnosis','ar_tx_intro','ar_noinst_risk','ar_noinst_low','ar_noinst_mdr','ar_inst_recent'];
const AR_JUMP_PATHS = {
  'ar_start':        [],
  'ar_stability':    ['ar_start'],
  'ar_arthro':       ['ar_start'],
  'ar_diagnosis':    ['ar_start','ar_arthro'],
  'ar_tx_intro':     ['ar_start','ar_arthro','ar_diagnosis'],
  'ar_noinst_risk':  ['ar_start','ar_arthro','ar_diagnosis','ar_tx_intro'],
  'ar_noinst_low':   ['ar_start','ar_arthro','ar_diagnosis','ar_tx_intro','ar_noinst_risk'],
  'ar_noinst_mdr':   ['ar_start','ar_arthro','ar_diagnosis','ar_tx_intro','ar_noinst_risk'],
  'ar_inst_recent':  ['ar_start','ar_arthro','ar_diagnosis','ar_tx_intro'],
};

/* ── OSTEO_F STATE ── */
let of_currentNode = 'of_start';
let of_history     = [];
let of_activeTabIndex = 0;
const OF_TOTAL_STEPS = 9;
const OF_MM_IDS = ['of_start','of_early','of_late_route','of_late_no_implant','of_late_implant_route','of_late_loose','of_late_firm','of_tx_route','of_tx_low','of_tx_mdr'];
const OF_JUMP_PATHS = {
  'of_start':               [],
  'of_time':                ['of_start'],
  'of_early':               ['of_start','of_time'],
  'of_late_route':          ['of_start','of_time'],
  'of_late_no_implant':     ['of_start','of_time','of_late_route'],
  'of_late_implant_route':  ['of_start','of_time','of_late_route'],
  'of_late_consolidated':   ['of_start','of_time','of_late_route','of_late_implant_route'],
  'of_late_nonconsolidated':['of_start','of_time','of_late_route','of_late_implant_route'],
  'of_late_loose':          ['of_start','of_time','of_late_route','of_late_implant_route','of_late_nonconsolidated'],
  'of_late_firm':           ['of_start','of_time','of_late_route','of_late_implant_route','of_late_nonconsolidated'],
  'of_tx_intro':            ['of_start','of_time'],
  'of_tx_route':            ['of_start','of_time','of_tx_intro'],
  'of_tx_low':              ['of_start','of_time','of_tx_intro','of_tx_route'],
  'of_tx_mdr':              ['of_start','of_time','of_tx_intro','of_tx_route'],
};

/* ── OSTEO_V STATE ── */
let ov_currentNode = 'ov_start';
let ov_history = [];
let ov_activeTabIndex = 0;
const OV_TOTAL_STEPS = 6;
const OV_MM_IDS = ['ov_start','ov_imaging','ov_diagnosis','ov_noinst_risk','ov_inst_risk'];
const OV_JUMP_PATHS = {
  ov_start: [],
  ov_imaging: ['ov_start'],
  ov_diagnosis: ['ov_start','ov_imaging'],
  ov_tx_intro: ['ov_start','ov_imaging','ov_diagnosis'],
  ov_noinst_risk: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro'],
  ov_inst_risk: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro'],
  ov_noinst_low: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro','ov_noinst_risk'],
  ov_noinst_mdr: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro','ov_noinst_risk'],
  ov_inst_low: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro','ov_inst_risk'],
  ov_inst_mdr: ['ov_start','ov_imaging','ov_diagnosis','ov_tx_intro','ov_inst_risk'],
};

/* ── MEAS STATE ── */
let meni_currentNode = 'meni_start';
let meni_history     = [];
let meni_activeTabIndex = 0;
const MENI_TOTAL_STEPS = 5;
const MENI_MM_IDS = ['meni_start','meni_pl','meni_lcr','meni_ct'];
const MENI_JUMP_PATHS = {
  'meni_start': [],
  'meni_pl':    ['meni_start'],
  'meni_lcr':   ['meni_start','meni_pl'],
  'meni_ct':    ['meni_start','meni_pl'],
  'meni_wait':  ['meni_start','meni_pl','meni_ct'],
};

/* ── ITU STATE ── */
let itu_currentNode = 'itu_start';
let itu_history     = [];
let itu_activeTabIndex = 0;
const ITU_TOTAL_STEPS = 4;
const ITU_MM_IDS = ['itu_start','itu_route','itu_amb','itu_inp','itu_low_simple','itu_pyelo_nc','itu_pyelo_comp','itu_sepsis'];
const ITU_JUMP_PATHS = {
  'itu_start':         [],
  'itu_route':         ['itu_start'],
  'itu_amb':           ['itu_start','itu_route'],
  'itu_inp':           ['itu_start','itu_route'],
  'itu_low_simple':    ['itu_start','itu_route','itu_amb'],
  'itu_low_preg':      ['itu_start','itu_route','itu_amb'],
  'itu_low_comp':      ['itu_start','itu_route','itu_amb'],
  'itu_prost_acute':   ['itu_start','itu_route','itu_amb'],
  'itu_prost_chronic': ['itu_start','itu_route','itu_amb'],
  'itu_pyelo_nc':      ['itu_start','itu_route','itu_amb'],
  'itu_orqui':         ['itu_start','itu_route','itu_amb'],
  'itu_cat_low':       ['itu_start','itu_route','itu_amb'],
  'itu_pyelo_comp':    ['itu_start','itu_route','itu_inp'],
  'itu_pyelo_preg':    ['itu_start','itu_route','itu_inp'],
  'itu_abscess':       ['itu_start','itu_route','itu_inp'],
  'itu_prost_comp':    ['itu_start','itu_route','itu_inp'],
  'itu_cat_sys':       ['itu_start','itu_route','itu_inp'],
  'itu_sepsis':        ['itu_start','itu_route','itu_inp'],
};

/* ── CVC STATE ── */
let cvc_currentNode = 'cvc_start';
let cvc_history = [];
let cvc_activeTabIndex = 0;
const CVC_TOTAL_STEPS = 5;
const CVC_MM_IDS = ['cvc_start','cvc_local_route','cvc_systemic_route','cvc_exit_site','cvc_tunnel_route','cvc_systemic_noflux','cvc_systemic_flux'];
const CVC_JUMP_PATHS = {
  'cvc_start': [],
  'cvc_local_route': ['cvc_start'],
  'cvc_systemic_route': ['cvc_start'],
  'cvc_exit_site': ['cvc_start','cvc_local_route'],
  'cvc_tunnel_route': ['cvc_start','cvc_local_route'],
  'cvc_tunnel_negative': ['cvc_start','cvc_local_route','cvc_tunnel_route'],
  'cvc_systemic_noflux': ['cvc_start','cvc_systemic_route'],
  'cvc_systemic_flux': ['cvc_start','cvc_systemic_route'],
  'cvc_results': ['cvc_start','cvc_systemic_route','cvc_systemic_noflux'],
  'cvc_results_negative': ['cvc_start','cvc_systemic_route','cvc_systemic_noflux','cvc_results'],
  'cvc_colonization': ['cvc_start','cvc_systemic_route','cvc_systemic_noflux','cvc_results'],
  'cvc_secondary': ['cvc_start','cvc_systemic_route','cvc_systemic_noflux','cvc_results'],
  'cvc_bac': ['cvc_start','cvc_systemic_route','cvc_systemic_noflux','cvc_results'],
};

/* ── DCEI STATE ── */
let dcei_currentNode = 'dcei_start';
let dcei_history = [];
let dcei_activeTabIndex = 0;
const DCEI_TOTAL_STEPS = 5;
const DCEI_MM_IDS = ['dcei_start','dcei_bacteremia_route','dcei_local_route','dcei_bact_low','dcei_bact_workup','dcei_superficial','dcei_systemic_workup'];
const DCEI_JUMP_PATHS = {
  'dcei_start': [],
  'dcei_local_route': ['dcei_start'],
  'dcei_bacteremia_route': ['dcei_start'],
  'dcei_superficial': ['dcei_start','dcei_local_route'],
  'dcei_superficial_done': ['dcei_start','dcei_local_route','dcei_superficial'],
  'dcei_systemic_workup': ['dcei_start','dcei_local_route'],
  'dcei_pocket': ['dcei_start','dcei_local_route','dcei_systemic_workup'],
  'dcei_systemic': ['dcei_start','dcei_local_route','dcei_systemic_workup'],
  'dcei_bact_low': ['dcei_start','dcei_bacteremia_route'],
  'dcei_bact_very_low': ['dcei_start','dcei_bacteremia_route','dcei_bact_low'],
  'dcei_bact_workup': ['dcei_start','dcei_bacteremia_route'],
};

/* ── ENDO STATE ── */
let endo_currentNode = 'endo_start';
let endo_history = [];
let endo_activeTabIndex = 0;
let endo_caseContext = null;
const ENDO_TOTAL_STEPS = 9;
const ENDO_MM_IDS = [
  'endo_start','endo_hc_ett','endo_ett_negative','endo_confirmed','endo_ete',
  'endo_unlikely','endo_ete_negative','endo_repeat',
  'endo_native_route','endo_prosthetic_route','endo_native_low','endo_native_mrsa'
];
const ENDO_JUMP_PATHS = {
  'endo_start': [],
  'endo_ett': ['endo_start'],
  'endo_ett_negative': ['endo_start','endo_ett'],
  'endo_ete': ['endo_start','endo_ett'],
  'endo_ete_negative': ['endo_start','endo_ett','endo_ete'],
  'endo_unlikely': ['endo_start','endo_ett','endo_ett_negative'],
  'endo_repeat': ['endo_start','endo_ett','endo_ete','endo_ete_negative'],
  'endo_confirmed': ['endo_start','endo_ett'],
  'endo_native_route': ['endo_start','endo_ett','endo_confirmed'],
  'endo_native_low': ['endo_start','endo_ett','endo_confirmed','endo_native_route'],
  'endo_native_mrsa': ['endo_start','endo_ett','endo_confirmed','endo_native_route'],
  'endo_prosthetic_route': ['endo_start','endo_ett','endo_confirmed'],
  'endo_prosthetic_early': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route'],
  'endo_prosthetic_late': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route'],
  'endo_prosthetic_firstmonth': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route','endo_prosthetic_early'],
  'endo_prosthetic_2to12': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route','endo_prosthetic_early'],
  'endo_prosthetic_late_mrsa': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route','endo_prosthetic_late'],
  'endo_prosthetic_late_low': ['endo_start','endo_ett','endo_confirmed','endo_prosthetic_route','endo_prosthetic_late'],
};

/* ── NAV STATE ── */
let nav_currentNode = 'nav_start';
let nav_history     = [];
let nav_activeTabIndex = 0;
const NAV_TOTAL_STEPS = 3;
const NAV_MM_IDS = ['nav_start','nav_cpis','nav_early','nav_late'];
const NAV_JUMP_PATHS = {
  'nav_start': [],
  'nav_cpis':  ['nav_start'],
  'nav_early': ['nav_start','nav_cpis'],
  'nav_late':  ['nav_start','nav_cpis'],
};

/* ── NIH STATE ── */
let nih_currentNode = 'nih_start';
let nih_history     = [];
let nih_activeTabIndex = 0;
const NIH_TOTAL_STEPS = 4;
const NIH_MM_IDS = ['nih_start','nih_qsofa','nih_q0_route','nih_low_early','nih_low_mdr','nih_severe_early','nih_severe_mdr'];
const NIH_JUMP_PATHS = {
  'nih_start':        [],
  'nih_qsofa':        ['nih_start'],
  'nih_q0_route':     ['nih_start','nih_qsofa'],
  'nih_low_early':    ['nih_start','nih_qsofa','nih_q0_route'],
  'nih_low_mdr':      ['nih_start','nih_qsofa','nih_q0_route'],
  'nih_severe_early': ['nih_start','nih_qsofa'],
  'nih_severe_mdr':   ['nih_start','nih_qsofa'],
};

/* ── NAC STATE ── */
let nac_currentNode = 'nac_start';
let nac_history     = [];
let nac_activeTabIndex = 0;
const NAC_TOTAL_STEPS = 4;
const NAC_MM_IDS = ['nac_start','nac_severity','nac_g1_route','nac_g2_route','nac_g3_route','nac_g1a','nac_g1b','nac_g2a','nac_g2b','nac_g3a','nac_g3b'];
const NAC_JUMP_PATHS = {
  'nac_start':    [],
  'nac_severity': ['nac_start'],
  'nac_g1_route': ['nac_start','nac_severity'],
  'nac_g2_route': ['nac_start','nac_severity'],
  'nac_g3_route': ['nac_start','nac_severity'],
  'nac_g1a':      ['nac_start','nac_severity','nac_g1_route'],
  'nac_g1b':      ['nac_start','nac_severity','nac_g1_route'],
  'nac_g2a':      ['nac_start','nac_severity','nac_g2_route'],
  'nac_g2b':      ['nac_start','nac_severity','nac_g2_route'],
  'nac_g3a':      ['nac_start','nac_severity','nac_g3_route'],
  'nac_g3b':      ['nac_start','nac_severity','nac_g3_route'],
};

/* ═════════════════════════════════════════════
   PANCREATITIS AGUDA — NAV
═══════════════════════════════════════════════ */
/* ── PPB STATE ── */
let ppb_currentNode = 'ppb_start';
let ppb_history     = [];
let ppb_activeTabIndex = 0;

const PPB_MM_IDS = ['ppb_start','ppb_ns_severity','ppb_s_severity','ppb_ns_leve','ppb_ns_moderada','ppb_ns_severa_tipo','ppb_s_leve','ppb_s_moderada','ppb_ns_mordedura','ppb_ns_agua','ppb_ns_necro'];

const PPB_JUMP_PATHS = {
  'ppb_start':          [],
  'ppb_ns_severity':    ['ppb_start'],
  'ppb_s_severity':     ['ppb_start'],
  'ppb_ns_leve':        ['ppb_start','ppb_ns_severity'],
  'ppb_ns_moderada':    ['ppb_start','ppb_ns_severity'],
  'ppb_ns_severa_tipo': ['ppb_start'],
  'ppb_s_leve':         ['ppb_start','ppb_s_severity'],
  'ppb_s_moderada':     ['ppb_start','ppb_s_severity'],
  'ppb_ns_mordedura':   ['ppb_start','ppb_ns_moderada'],
  'ppb_ns_agua':        ['ppb_start','ppb_ns_moderada'],
  'ppb_ns_necro':       ['ppb_start','ppb_ns_severity','ppb_ns_severa_tipo'],
};

function toggleFlipPA() {
  const inner = document.getElementById('pa-flip-inner');
  if (!inner) return;
  const flipped = inner.getAttribute('data-flipped') === '1';
  inner.style.transform = flipped ? '' : 'rotateY(180deg)';
  inner.style.webkitTransform = flipped ? '' : 'rotateY(180deg)';
  inner.setAttribute('data-flipped', flipped ? '0' : '1');
}
function initFlipPA() {
  const inner = document.getElementById('pa-flip-inner');
  const back  = document.getElementById('pa-flip-back');
  if (!inner || !back) return;
  // Measure back face by temporarily pulling out of absolute flow
  back.style.position   = 'relative';
  back.style.transform  = 'none';
  back.style.webkitTransform = 'none';
  back.style.visibility = 'hidden';
  const backH = back.offsetHeight;
  back.style.position   = 'absolute';
  back.style.transform  = 'rotateY(180deg)';
  back.style.webkitTransform = 'rotateY(180deg)';
  back.style.visibility = '';
  // Set inner height so front (with legend) matches back
  if (backH > 0) inner.style.height = backH + 'px';
}
function paGoBack() {
  if (pa_history.length > 0) {
    pa_currentNode = pa_history.pop();
    renderNodePA(pa_currentNode);
  } else { goHome(); }
}
function paNavigate(nodeId) {
  pa_history.push(pa_currentNode);
  pa_currentNode = nodeId;
  renderNodePA(nodeId);
}
function paRestart() {
  pa_history = []; pa_currentNode = 'pa_start';
  renderNodePA('pa_start');
}
function paJumpTo(id) {
  if (id === pa_currentNode) return;
  if (PA_JUMP_PATHS[id] !== undefined) {
    pa_history = [...PA_JUMP_PATHS[id]];
    pa_currentNode = id;
    renderNodePA(id);
  }
}
function toggleMinimapPA() {
  const panel = document.getElementById('pa-minimap-panel');
  const btn   = document.getElementById('pa-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapPA(nodeId) {
  PA_MM_IDS.forEach(id => {
    const rect = document.getElementById('pa-mm-' + id);
    const txt  = document.getElementById('pa-mmt-' + id);
    if (!rect) return;
    const isCurrent = (id === nodeId);
    const isVisited = pa_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited  ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke',       isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2'       : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited  ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

/* ═════════════════════════════════════════════
   PANCREATITIS AGUDA — RENDER
═══════════════════════════════════════════════ */
function renderNodePA(nodeId) {
  const node = NODES_PA[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / PA_TOTAL_STEPS) * 100);
  const fill = document.getElementById('pa-progress-fill');
  const ptxt = document.getElementById('pa-progress-txt');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';

  const sublabels = {
    pa_start:'Sospecha · Valoración Inicial',
    pa_tiempo:'Evolución en 1ª Semana',
    pa_colangitis:'Tratamiento — Colangitis',
    pa_no_atb:'Sin Indicación Antibiótica',
    pa_segunda:'Sospecha de Infección Pancreática',
    pa_tx_g1:'Tratamiento Grupo 1',
    pa_tx_g2:'Tratamiento Grupo 2',
  };
  const sub = document.getElementById('pa-step-sublabel');
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  /* ── PA START DUAL-COLUMN ────────────────── */
  if (node.type === 'pa_start_dual') {
    html = `
      <div class="step-card" style="padding:12px">
        <div class="sospecha-banner" style="margin-bottom:10px;background:linear-gradient(135deg,#1a6a90 0%,#0d3a52 100%);box-shadow:0 3px 10px rgba(13,58,82,.35)"><h2>PANCREATITIS AGUDA</h2></div>

        <!-- FLIP CARD -->
        <div style="perspective:1000px" onclick="toggleFlipPA()">
          <div id="pa-flip-inner" style="position:relative;width:100%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1)">

            <!-- FRENTE: Sospecha Clínica -->
            <div id="pa-flip-front" style="width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1.5px solid #E8820C;border-radius:10px;overflow:hidden;display:flex;flex-direction:column">
              <div style="background:linear-gradient(160deg,#f09520,#E8820C);color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:space-between">
                <span>Sospecha Clínica</span>
                <span style="font-size:17px;opacity:.9">↺</span>
                <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
              </div>
              <div style="background:white;padding:10px 11px;flex:1">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#b45309;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #fed7aa;padding-bottom:2px">Antecedentes</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6;margin-bottom:8px">• Litiasis biliar<br>• CPER previa<br>• Alcoholismo<br>• Hipertrigliceridemia</div>
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#b45309;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #fed7aa;padding-bottom:2px">Historia</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6;margin-bottom:8px">• Dolor abdominal en barra<br>• Vómitos</div>
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#b45309;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #fed7aa;padding-bottom:2px">Examen</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6">• Dolor abdominal +/− defensa</div>
              </div>
              <div style="background:#fff7ed;border-top:1px solid #fed7aa;padding:9px 11px;font-size:11.5px;color:#b45309;font-weight:700;text-align:center">
                ↺ &nbsp;Girar para ver la valoración paraclínica
              </div>
            </div>

            <!-- REVERSO: Valoración Paraclínica -->
            <div id="pa-flip-back" style="position:absolute;top:0;left:0;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);-webkit-transform:rotateY(180deg);border:1.5px solid #0891b2;border-radius:10px;overflow:hidden">
              <div style="background:linear-gradient(160deg,#0ea5e9,#0891b2);color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:space-between">
                <span>Valoración Paraclínica</span>
                <span style="font-size:17px;opacity:.9">↺</span>
                <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
              </div>
              <div style="background:white;padding:10px 11px">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #bae6fd;padding-bottom:2px">Diagnóstica</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6;margin-bottom:8px">• Amilasa &gt; 3× valor normal <button onclick="event.stopPropagation();openModalAmilasa()" style="display:inline-flex;align-items:center;gap:4px;background:#e0f2fe;border:1.5px solid #0891b2;border-radius:20px;padding:2px 8px 2px 6px;font-size:10.5px;font-weight:700;color:#075985;cursor:pointer;font-family:inherit;vertical-align:middle;margin-left:3px"><span style="width:6px;height:6px;border-radius:50%;background:#0891b2;display:inline-block"></span>ℹ️ Amilasa</button><br>• TC o RNM compatible</div>
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #bae6fd;padding-bottom:2px">Etiológica</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6;margin-bottom:8px">• Eco de hígado y vía biliar<br>• Perfil hepático obstructivo<br>• Perfil lipídico<br>• Colangio-RNM si sospecha litiásica con Eco no concluyente</div>
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.3px;margin-bottom:4px;border-bottom:1.5px solid #bae6fd;padding-bottom:2px">Severidad (Tabla 1)</div>
                <div style="font-size:12px;color:#1e293b;line-height:1.6">• Disfunciones al inicio y a las 48 hs<br>• Hemograma, Cr, Azo, Iono, Crasis, P. hepático, Lactato</div>
              </div>
            </div>

          </div>
        </div>
        <!-- EVOLUCIÓN TEMPORAL -->
        <div style="margin-top:10px;border:1.5px solid #334155;border-radius:10px;overflow:hidden">
          <div style="background:linear-gradient(160deg,#2d3f52,#1e293b);color:white;padding:6px 10px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;position:relative;overflow:hidden">
            Evolución Temporal
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:white;padding:8px 9px;display:grid;grid-template-columns:1fr 1fr;gap:7px">
            <button onclick="paNavigate('pa_tiempo')"
              style="background:linear-gradient(160deg,#059669,#047857);color:white;border:none;border-radius:8px;padding:10px 6px;font-size:11.5px;font-weight:800;cursor:pointer;font-family:inherit;line-height:1.35;position:relative;overflow:hidden;box-shadow:0 2px 6px rgba(5,150,105,.3)">
              <span style="position:relative;z-index:1">≤ 1 semana</span>
              <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
            </button>
            <button onclick="paNavigate('pa_segunda')"
              style="background:linear-gradient(160deg,#dc2626,#b91c1c);color:white;border:none;border-radius:8px;padding:10px 6px;font-size:11.5px;font-weight:800;cursor:pointer;font-family:inherit;line-height:1.35;position:relative;overflow:hidden;box-shadow:0 2px 6px rgba(220,38,38,.3)">
              <span style="position:relative;z-index:1">&gt; 1 semana</span>
              <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
            </button>
          </div>
        </div>

      </div>`;
  }

  /* ── PA DIAGNOSTIC ───────────────────────── */
  else if (node.type === 'pa_diagnostic') {
    html = `
      <div class="step-card">
        <div class="step-badge" style="background:#0891b2;color:white">VALORACIÓN DIAGNÓSTICA Y ETIOLÓGICA</div>
        <h2 style="font-size:16px;font-weight:800;margin-top:6px">Confirmación diagnóstica</h2>
        <p class="sub" style="margin-top:4px">Tiempo ≤ 1 semana</p>

        <div class="info-section" style="margin-top:14px">
          <div class="info-section-title">Diagnóstico (1 de 2 criterios)</div>
          <div class="info-row highlight"><span class="info-dot">•</span><span><strong>Bioquímica:</strong> Amilasa &gt; 3 veces el valor normal</span></div>
          <div class="info-row highlight"><span class="info-dot">•</span><span><strong>Imagenológica:</strong> TC o RNM compatible con pancreatitis</span></div>
        </div>

        <div class="info-section" style="margin-top:12px">
          <div class="info-section-title">Valoración Etiológica</div>
          <div class="info-row"><span class="info-dot">•</span><span>Ecografía de hígado y vía biliar</span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Perfil hepático — patrón obstructivo</span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Perfil lipídico</span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Considerar Colangio-RNM si alta sospecha litiásica con ecografía no concluyente</span></div>
        </div>

        <div class="info-section" style="margin-top:12px">
          <div class="info-section-title">Valoración de Severidad — Paraclínica</div>
          <div class="info-row"><span class="info-dot">•</span><span>Evaluar disfunciones <strong>al inicio y a las 48 horas</strong></span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Hemograma, creatininemia, azoemia, ionograma, crasis, perfil hepático, lactato</span></div>
        </div>
      </div>

      <button class="btn-tables" onclick="showTablesPA(0)">📋 Tabla 1 — Clasificación de Severidad (Atlanta / DBC)</button>

      <div class="choices">
        <button class="btn-primary" onclick="paNavigate('${node.next}')">Evolución temporal →</button>
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
      </div>`;
  }

  /* ── PA TIEMPO — BIFURCACIÓN ─────────────── */
  else if (node.type === 'pa_tiempo') {
    html = `
      <div class="step-card">
        <div class="step-badge" style="background:#0891b2;color:white">PRIMERA SEMANA</div>
        <p class="sub" style="margin-top:6px">En la primera semana, el riesgo de infección pancreática es bajo. Evaluar etiología y presencia de colangitis para definir la conducta antibiótica.</p>
      </div>

      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
        <div style="background:linear-gradient(160deg,#059669,#047857);color:white;padding:12px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
          ✅ Etiología biliar SIN colangitis / Otras etiologías
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:12px 14px;border:1px solid #a7f3d0;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          <button class="btn-primary" style="background:linear-gradient(160deg,#059669,#047857);font-size:13px;padding:11px" onclick="paNavigate('pa_no_atb')">
            Continuar sin antibióticos →
          </button>
        </div>
      </div>

      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
        <div style="background:linear-gradient(160deg,#b45309,#92400e);color:white;padding:12px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
          ⚠️ Etiología biliar + Colangitis asociada
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:12px 14px;border:1px solid #fde68a;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          <div style="font-size:12px;color:#78350f;margin-bottom:6px;line-height:1.5;background:#fef9c3;padding:8px 10px;border-radius:6px">
            <strong>Criterio:</strong> Patrón de colestasis con BT &gt; 4 mg/dl mantenida ≥ 48 hs y/o signos imagenológicos de obstrucción biliar
          </div>
          <div style="font-size:12px;color:#475569;margin-bottom:8px">→ Solicitar hemocultivos antes de iniciar antibióticos</div>
          <button class="btn-primary" style="background:linear-gradient(160deg,#b45309,#92400e);font-size:13px;padding:11px" onclick="paNavigate('pa_colangitis')">
            Iniciar antibióticos + Control de foco →
          </button>
        </div>
      </div>

      <div class="choices">
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
      </div>`;
  }

  /* ── PA COLANGITIS TX ─────────────────────── */
  else if (node.type === 'pa_colangitis_tx') {
    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:linear-gradient(160deg,#b45309,#92400e);padding:15px 16px;color:white;position:relative;overflow:hidden">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.65;margin-bottom:5px">Tratamiento</div>
        <div style="font-size:15px;font-weight:800;line-height:1.3">Etiología Biliar con Colangitis</div>
        <div style="font-size:12px;opacity:.8;margin-top:3px">Iniciar antibióticos + Control de foco endoscópico</div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">
        <div class="regimen-block" style="background:#fef9c3">
          <div class="regimen-label" style="color:#78350f">Primera línea</div>
          <div class="drug-line"><span class="drug-name">Ampicilina/sulbactam</span> 3 g iv c/6 hs + <span class="drug-name">Gentamicina</span> 5 mg/Kg iv c/24 hs</div>
        </div>
        <div class="regimen-block" style="background:#f1f5f9">
          <div class="regimen-label" style="color:#475569">Alergia grave β-lactámicos</div>
          <div class="drug-line"><span class="drug-name">Moxifloxacina</span> 400 mg iv/día + <span class="drug-name">Gentamicina</span></div>
        </div>
        <div class="regimen-block" style="background:#fee2e2">
          <div class="regimen-label" style="color:#991b1b">Riesgo de microorganismos multirresistentes</div>
          <div class="drug-line"><span class="drug-name">Piperacilina/tazobactam</span> 4,5 g iv c/6 hs + <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs</div>
          <div class="drug-line" style="margin-top:6px;font-style:italic;color:#64748b;font-size:12px">Si sepsis con disfunciones mayores (hemodinámica, renal, respiratoria):</div>
          <div class="drug-line"><span class="drug-name">Meropenem</span> carga 2 g iv en 1 hora → luego 2 g iv en perfusión de 3 hs c/8 hs + <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs</div>
        </div>

        <div class="duration-box">
          <h4>⏱️ Duración</h4>
          <p>5–7 días</p>
        </div>

        <div class="divider"></div>

        <div style="background:linear-gradient(135deg,#e0f2fe,#bae6fd);border:1px solid #7dd3fc;border-radius:var(--radius-sm);padding:11px 12px">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.5px;margin-bottom:6px">🔬 Control de Foco</div>
          <div style="font-size:12.5px;color:#0c4a6e;line-height:1.5"><strong>CPRE</strong> — Colangiopancreatografía endoscópica retrógrada: papilotomía + extracción mecánica de litiasis</div>
        </div>

        <div class="reevaluar-note" style="margin-top:12px;color:#334155;font-weight:600">
          ⚠️ Reevaluar esquema antimicrobiano según cultivos y respuesta clínica.
        </div>
      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
        <button class="btn-back" onclick="paRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── PA NO ATB ────────────────────────────── */
  else if (node.type === 'pa_no_atb') {
    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:linear-gradient(160deg,#059669,#047857);padding:15px 16px;color:white;position:relative;overflow:hidden">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.65;margin-bottom:5px">Sin Indicación Antibiótica</div>
        <div style="font-size:15px;font-weight:800;line-height:1.3">Biliar sin colangitis / Otras etiologías</div>
        <div style="font-size:12px;opacity:.8;margin-top:3px">Valoración de severidad + Observación</div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">
        <div style="background:#d1fae5;border:1.5px solid #059669;border-radius:var(--radius-sm);padding:14px;text-align:center;margin-bottom:12px">
          <div style="font-size:18px;font-weight:900;color:#065f46;letter-spacing:.3px">NO INICIAR ANTIBIÓTICOS</div>
          <div style="font-size:11.5px;color:#047857;margin-top:5px;line-height:1.5">La pancreatitis aguda sin colangitis no tiene indicación de cobertura antibiótica empírica en la primera semana</div>
        </div>

        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;color:#334155;margin-bottom:8px">Valoración de Severidad</div>
        <div class="info-row"><span class="info-dot">•</span><span>Evaluar disfunciones orgánicas al inicio y a las 48 horas</span></div>
        <div class="info-row"><span class="info-dot">•</span><span>Hemograma, creatininemia, azoemia, ionograma, crasis, perfil hepático, lactato</span></div>

        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesPA(0)">📋 Tabla 1 — Severidad (Atlanta / DBC)</button>
        <button class="btn-tables" style="margin-top:8px" onclick="showTablesPA(1)">📋 Tabla 2 — Índice Tomográfico de Balthazar</button>
      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
        <button class="btn-back" onclick="paRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── PA SOSPECHA INFECCIÓN >1 SEMANA ─────── */
  else if (node.type === 'pa_sospecha_infeccion') {
    html = `
      <div class="step-card">
        <div class="step-badge" style="background:#dc2626;color:white">MÁS DE 1 SEMANA</div>
        <h2 style="font-size:15px;font-weight:800;margin:6px 0 4px">Sospecha de Infección Pancreática o Peripancreática</h2>
        <p class="sub">Más allá de la primera semana aumenta el riesgo de infección pancreática. Evaluar los siguientes criterios para indicar tratamiento antimicrobiano.</p>

        <div class="info-section" style="margin-top:14px">
          <div class="info-section-title">Factores de Riesgo</div>
          <div class="info-row"><span class="info-dot">•</span><span>Presentación inicial grave de pancreatitis</span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Índice tomográfico de Balthazar ≥ 4 <button onclick="event.stopPropagation();showTablesPA(1)" style="display:inline-flex;align-items:center;gap:4px;background:#e0f2fe;border:1.5px solid #0891b2;border-radius:20px;padding:2px 9px 2px 7px;font-size:10.5px;font-weight:700;color:#075985;cursor:pointer;font-family:inherit;vertical-align:middle;margin-left:3px"><span style="width:6px;height:6px;border-radius:50%;background:#0891b2;display:inline-block"></span>Tabla 2</button></span></div>
          <div class="info-row"><span class="info-dot">•</span><span>En la 2ª semana solo 1/3 de las infecciones son pancreáticas; más allá de las 2 semanas, la mayoría de las complicaciones infecciosas corresponden a infecciones pancreáticas</span></div>
        </div>

        <div class="info-section">
          <div class="info-section-title">Elementos Clínicos (excluir otra causa de infección)</div>
          <div class="info-row"><span class="info-dot">•</span><span>Deterioro clínico progresivo</span></div>
          <div class="info-row"><span class="info-dot">•</span><span>Fiebre con agravación o aparición de DOMs</span></div>
        </div>

        <div class="info-section">
          <div class="info-section-title">Elementos Paraclínicos</div>
          <div class="info-row highlight"><span class="info-dot">•</span><span>Reactantes de fase aguda en aumento (PCR, procalcitonina)</span></div>
          <div class="info-row highlight"><span class="info-dot">•</span><span>TC/RNM con <strong>aire en tejido pancreático o peripancreático</strong></span></div>
          <div class="info-row highlight"><span class="info-dot">•</span><span>Hemocultivo positivo sin otro foco identificado</span></div>
        </div>
      </div>

      <button class="btn-tables" onclick="showTablesPA(1)">📋 Tabla 2 — Índice de Balthazar</button>
      <button class="btn-tables" style="margin-top:8px" onclick="showTablesPA(2)">📋 Tabla 3 — Factores de Riesgo MDR</button>

      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md);margin-top:4px">
        <div style="background:linear-gradient(160deg,#1a5472,#0d3a52);color:white;padding:10px 14px;font-weight:800;font-size:12px;position:relative;overflow:hidden">
          Seleccionar grupo de tratamiento antimicrobiano
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:10px 12px;border:1px solid var(--gray-200);border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          <button style="display:block;width:100%;text-align:left;background:#d1fae5;border:1.5px solid #059669;border-radius:var(--radius-sm);padding:12px 14px;margin-bottom:8px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;color:#065f46;line-height:1.4" onclick="paNavigate('pa_tx_g1')">
            Grupo 1 · Primeras 2 semanas, sin FR MDR →
          </button>
          <button style="display:block;width:100%;text-align:left;background:#fee2e2;border:1.5px solid #dc2626;border-radius:var(--radius-sm);padding:12px 14px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:700;color:#991b1b;line-height:1.4" onclick="paNavigate('pa_tx_g2')">
            Grupo 2 · Tardío >2 semanas o con FR MDR →
          </button>
        </div>
      </div>

      <div class="choices">
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
      </div>`;
  }

  /* ── PA TREATMENT ─────────────────────────── */
  else if (node.type === 'pa_treatment') {
    const regColors = {
      '#d1fae5':'#065f46','#fef3c7':'#92400e','#fee2e2':'#991b1b',
      '#f1f5f9':'#334155','#ede9fe':'#4c1d95',
    };
    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:${node.color};padding:15px 16px;color:white;position:relative;overflow:hidden">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.65;margin-bottom:5px">Tratamiento Antimicrobiano</div>
        <div style="font-size:15px;font-weight:800;line-height:1.3">${node.title}</div>
        <div style="font-size:12px;opacity:.8;margin-top:3px">${node.sub}</div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor||regColors[r.bg]||'#334155'}">${r.label}</div>
            ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
          </div>`).join('')}

        ${node.note ? `<div class="note-box" style="margin-bottom:10px">${node.note}</div>` : ''}

        <div style="background:linear-gradient(135deg,#e0f2fe,#bae6fd);border:1px solid #7dd3fc;border-radius:var(--radius-sm);padding:11px 12px;margin-bottom:10px">
          <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.5px;margin-bottom:6px">🩺 Manejo Quirúrgico</div>
          <div style="font-size:12px;color:#0c4a6e;line-height:1.5">Si colección peripancreática infectada: <strong>drenaje quirúrgico recomendado</strong>. La conducta frente a necrosis infectada se decide caso a caso (observación, drenaje o necrosectomía). De ser posible, diferir procedimientos hasta encapsulación de la necrosis <strong>(> 4 semanas)</strong>.</div>
        </div>

        <div class="duration-box">
          <h4>⏱️ Duración</h4>
          <p>${node.duration}</p>
        </div>

        <div class="divider"></div>
        <div class="reevaluar-note">
          ⚠️ Reevaluar esquema según cultivos y respuesta clínica.
        </div>
        <button class="btn-tables" onclick="showTablesPA(3)">📋 Tabla 4 — Dosis de Antimicrobianos</button>
      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="paGoBack()">← Volver</button>
        <button class="btn-back" onclick="paRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('pa-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapPA(nodeId);
  if (nodeId === 'pa_start') requestAnimationFrame(initFlipPA);
  if (nodeId === 'ppb_ns_moderada') requestAnimationFrame(initPPBCards);
  if (nodeId === 'ppb_ns_severa_tipo') requestAnimationFrame(() => ppbFlipInit(10));

}

/* ═════════════════════════════════════════════
   PA TABLES
═══════════════════════════════════════════════ */
function showTablesPA(idx) {
  document.getElementById('pa-tables-back-btn').onclick = () => showScreen('pa');
  showScreen('pa-tables');
  renderPATablesUI(idx || 0);
}

function renderPATablesUI(idx) {
  pa_activeTabIndex = idx;

  document.getElementById('pa-tabs-bar').innerHTML = PA_TABLES.map((t,i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="paSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = PA_TABLES.map((t, i) => {
    let inner = '';

    if (t.type === 'pa_double_table') {
      const makeRows = rows => rows.map(r =>
        `<tr><td style="font-weight:700;width:38%;font-size:11px;padding:6px 10px;vertical-align:top">${r[0]}</td>` +
        `<td style="font-size:11px;white-space:pre-wrap;padding:6px 10px;line-height:1.4">${r[1]}</td></tr>`
      ).join('');
      inner = `
        <div style="padding:10px">
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#075985;background:#e0f2fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">${t.left.head}</div>
          <table class="tbl" style="margin-bottom:10px"><tbody>${makeRows(t.left.rows)}</tbody></table>
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#075985;background:#e0f2fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">${t.right.head}</div>
          <table class="tbl"><tbody>${makeRows(t.right.rows)}</tbody></table>
        </div>`;

    } else if (t.type === 'pa_balthazar') {
      inner = `
        <div style="padding:10px">
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#075985;background:#e0f2fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">Grado TC</div>
          <table class="tbl" style="margin-bottom:10px;table-layout:fixed;width:100%">
            <thead><tr>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;width:16%">Grado</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;text-align:center;width:14%">Pts</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px">Definición</th>
            </tr></thead>
            <tbody>
              <tr><td class="pts" style="font-size:11px">A</td><td class="pts" style="font-size:11px">0</td><td style="font-size:11px;padding:5px 8px">Páncreas normal</td></tr>
              <tr><td class="pts" style="font-size:11px">B</td><td class="pts" style="font-size:11px">1</td><td style="font-size:11px;padding:5px 8px">Páncreas agrandado</td></tr>
              <tr><td class="pts" style="font-size:11px">C</td><td class="pts" style="font-size:11px">2</td><td style="font-size:11px;padding:5px 8px">Inflamación pancreática o de grasa peripancreática</td></tr>
              <tr><td class="pts" style="font-size:11px">D</td><td class="pts" style="font-size:11px">3</td><td style="font-size:11px;padding:5px 8px">Colección líquida peripancreática única</td></tr>
              <tr><td class="pts" style="font-size:11px">E</td><td class="pts" style="font-size:11px">4</td><td style="font-size:11px;padding:5px 8px">≥ 2 colecciones líquidas y/o aire retroperitoneal</td></tr>
            </tbody>
          </table>
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#075985;background:#e0f2fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">% Necrosis</div>
          <table class="tbl" style="margin-bottom:10px;table-layout:fixed;width:100%">
            <thead><tr>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;width:16%">%</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;text-align:center;width:14%">Pts</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px">Definición</th>
            </tr></thead>
            <tbody>
              <tr><td class="pts" style="font-size:11px">No</td><td class="pts" style="font-size:11px">0</td><td style="font-size:11px;padding:5px 8px">Realce pancreático uniforme</td></tr>
              <tr><td class="pts" style="font-size:11px">&lt;30%</td><td class="pts" style="font-size:11px">2</td><td style="font-size:11px;padding:5px 8px">No realce de una o más regiones ≈ cabeza de páncreas</td></tr>
              <tr><td class="pts" style="font-size:11px">30–50%</td><td class="pts" style="font-size:11px">4</td><td style="font-size:11px;padding:5px 8px">No realce de 30–50% de la glándula</td></tr>
              <tr><td class="pts" style="font-size:11px">&gt;50%</td><td class="pts" style="font-size:11px">6</td><td style="font-size:11px;padding:5px 8px">No realce de la glándula mayor de 50%</td></tr>
            </tbody>
          </table>
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#075985;background:#e0f2fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">Índice TC = Grado + Necrosis → Pronóstico</div>
          <table class="tbl" style="table-layout:fixed;width:100%">
            <thead><tr>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;width:30%">Índice TC</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;text-align:center">Morbilidad</th>
              <th style="background:#3a8dc4;color:white;padding:6px 8px;font-size:10px;text-align:center">Mortalidad</th>
            </tr></thead>
            <tbody>
              <tr><td class="pts" style="font-size:11px">0–1</td><td style="font-size:11px;text-align:center">0%</td><td style="font-size:11px;text-align:center">0%</td></tr>
              <tr><td class="pts" style="font-size:11px">2–3</td><td style="font-size:11px;text-align:center">8%</td><td style="font-size:11px;text-align:center">3%</td></tr>
              <tr><td class="pts" style="font-size:11px">4–6</td><td style="font-size:11px;text-align:center">35%</td><td style="font-size:11px;text-align:center">6%</td></tr>
              <tr><td class="pts" style="font-size:11px">7–10</td><td style="font-size:11px;text-align:center">92%</td><td style="font-size:11px;text-align:center">17%</td></tr>
            </tbody>
          </table>
          <div class="tbl-note">ℹ️ Índice ≥ 4: morbilidad significativa. Índice ≥ 7: mortalidad relevante.</div>
        </div>`;

    } else if (t.type === 'pa_fr_mdr') {
      const blee = ['Hospitalización en los últimos 3 meses','Internación en centros de tercer nivel o geriátricos','Uso de antibióticos en los últimos 3 meses (β-lactámicos + inhibidores, cefalosporinas 3G/4G, quinolonas)','Catéter urinario mayor 30 días','Gastrostomía','Hemodiálisis, quimioterapia, radioterapia','Diabetes','Infección/colonización por Enterobacterias BLEE en los últimos 6 meses','Procedimiento biliar invasivo (CPRE)'];
      const epc  = ['Endemia o brotes por EPC en el área de internación actual','Internación en los últimos 3 meses en centro con casos de EPC','Uso previo de carbapenémicos u otros ATB de amplio espectro por más de 1 semana','Colonización o infección previa por EPC en los últimos 6 meses'];
      const cand = ['Nutrición parenteral','Insuficiencia renal en hemodiálisis','Antimicrobianos de amplio espectro mayor de 1 semana','Colonización o infección por Candida spp en otro sitio','Estadía en UCI','Gravedad o disfunciones mantenidas'];
      const mkRows = arr => arr.map(r => `<tr><td style="font-size:11px;padding:5px 10px">• ${r}</td></tr>`).join('');
      inner = `
        <div style="padding:10px">
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#92400e;background:#fef9c3;border-radius:6px;padding:5px 9px;margin-bottom:6px">Enterobacterias BLEE</div>
          <table class="tbl tbl-compact" style="margin-bottom:10px"><tbody>${mkRows(blee)}</tbody></table>
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#991b1b;background:#fee2e2;border-radius:6px;padding:5px 9px;margin-bottom:6px">Enterobacterias productoras de Carbapenemasas (EPC)</div>
          <table class="tbl tbl-compact" style="margin-bottom:10px"><tbody>${mkRows(epc)}</tbody></table>
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#4c1d95;background:#ede9fe;border-radius:6px;padding:5px 9px;margin-bottom:6px">Candidiasis Invasiva</div>
          <table class="tbl tbl-compact"><tbody>${mkRows(cand)}</tbody></table>
        </div>`;

    } else if (t.type === 'pa_dosis') {
      inner = `<table class="tbl" style="width:100%"><tbody>
        ${t.rows.map(r =>
          `<tr><td style="font-weight:700;width:36%;font-size:10.5px;padding:6px 10px;vertical-align:top">${r[0]}</td>` +
          `<td style="font-size:10.5px;white-space:pre-wrap;padding:6px 10px;line-height:1.4">${r[1]}</td></tr>`
        ).join('')}
      </tbody></table>`;
    }

    return `
      <div class="table-swipe-card" id="pa-swipe-card-${i}" style="height:auto;min-height:0">
        <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
          <div class="table-swipe-head">${t.title}</div>
          <div>${inner}</div>
        </div>
      </div>`;
  }).join('');

  const dotsHTML = PA_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" id="pa-swipe-dot-${i}" onclick="paSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('pa-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="pa-tables-swipe" style="flex:1;align-items:start">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const container = document.getElementById('pa-tables-swipe');
    const card = document.getElementById('pa-swipe-card-' + idx);
    if (container && card) container.scrollLeft = card.offsetLeft;
    paScrollTabIntoView(idx);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.intersectionRatio >= 0.6) {
          const j = parseInt(e.target.id.replace('pa-swipe-card-',''));
          pa_activeTabIndex = j;
          document.querySelectorAll('#pa-tabs-bar .tab-btn').forEach((b,k) => b.classList.toggle('active', k===j));
          document.querySelectorAll('[id^="pa-swipe-dot-"]').forEach((d,k) => d.classList.toggle('active', k===j));
          paScrollTabIntoView(j);
        }
      });
    }, { root: document.getElementById('pa-tables-swipe'), threshold: 0.6 });

    PA_TABLES.forEach((_,j) => { const c = document.getElementById('pa-swipe-card-'+j); if(c) obs.observe(c); });
  });
}

function paSwipeToTable(idx) {
  const container = document.getElementById('pa-tables-swipe');
  const card = document.getElementById('pa-swipe-card-' + idx);
  if (container && card) { container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' }); pa_activeTabIndex = idx; }
}

function paScrollTabIntoView(i) {
  const bar = document.getElementById('pa-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}


/* ═════════════════════════════════════════════
   PIEL Y PARTES BLANDAS — NAV
═══════════════════════════════════════════════ */
function ppbGoBack() {
  if (ppb_history.length > 0) {
    ppb_currentNode = ppb_history.pop();
    renderNodePPB(ppb_currentNode);
  } else { goHome(); }
}
function ppbNavigate(nodeId) {
  ppb_history.push(ppb_currentNode);
  ppb_currentNode = nodeId;
  renderNodePPB(nodeId);
}
function ppbRestart() {
  ppb_history = []; ppb_currentNode = 'ppb_start';
  renderNodePPB('ppb_start');
}
function ppbJumpTo(id) {
  if (id === ppb_currentNode) return;
  if (PPB_JUMP_PATHS[id] !== undefined) {
    ppb_history = [...PPB_JUMP_PATHS[id]];
    ppb_currentNode = id;
    renderNodePPB(id);
  }
}
function toggleMinimapPPB() {
  const panel = document.getElementById('ppb-minimap-panel');
  const btn   = document.getElementById('ppb-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapPPB(nodeId) {
  PPB_MM_IDS.forEach(id => {
    const rect = document.getElementById('ppb-mm-' + id);
    const txt  = document.getElementById('ppb-mmt-' + id);
    if (!rect) return;
    const isCurrent = (id === nodeId);
    const isVisited  = ppb_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited  ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke',       isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2'       : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited  ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

/* ═════════════════════════════════════════════
   PIEL Y PARTES BLANDAS — RENDER
═══════════════════════════════════════════════ */
function renderNodePPB(nodeId) {
  const node = NODES_PPB[nodeId];
  if (!node) return;

  const sublabels = {
    ppb_start:'IPPB — Tipo de Infección',
    ppb_ns_severity:'No Supurada — Severidad',
    ppb_s_severity:'Supurada — Severidad',
    ppb_ns_leve:'Celulitis / Erisipela Leve',
    ppb_ns_moderada:'Celulitis / Mordeduras',
    ppb_ns_severa_tipo:'IPPB Severa',
    ppb_s_leve:'Forúnculo / Absceso Leve',
    ppb_s_moderada:'Forúnculo / Absceso Moderado',
    ppb_ns_mordedura:'Mordedura',
    ppb_ns_agua:'Exposición a Agua',
    ppb_ns_necro:'Severa / Necrotizante / Fournier',
  };
  const sub = document.getElementById('ppb-step-sublabel');
  if (sub) sub.textContent = sublabels[nodeId] || '';

  // progress bar based on depth
  const depth = ppb_history.length;
  const fill = document.getElementById('ppb-progress-fill');
  if (fill) fill.style.width = Math.min(depth * 25, 100) + '%';

  let html = '';

  /* ── TIPO DE INFECCIÓN ──────────────────── */
  if (node.type === 'ppb_start_choice') {
    html = `
      <div class="step-card" style="padding:13px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#7c3aed 0%,#4c1d95 100%);box-shadow:0 3px 10px rgba(124,58,237,.35);margin-bottom:12px">
          <h2>INFECCIÓN DE PIEL Y PARTES BLANDAS</h2>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <button onclick="ppbNavigate('ppb_ns_severity')"
            style="background:linear-gradient(160deg,#0891b2,#0369a1);color:white;border:none;border-radius:10px;padding:14px 10px;cursor:pointer;font-family:inherit;text-align:center;position:relative;overflow:hidden;box-shadow:0 3px 8px rgba(8,145,178,.3)">
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
            <div style="font-size:12px;font-weight:800;line-height:1.3">No Supurada</div>
            <div style="font-size:10px;opacity:.8;margin-top:3px;line-height:1.3">Celulitis · Erisipela<br>Mordeduras</div>
          </button>
          <button onclick="ppbNavigate('ppb_s_severity')"
            style="background:linear-gradient(160deg,#d97706,#b45309);color:white;border:none;border-radius:10px;padding:14px 10px;cursor:pointer;font-family:inherit;text-align:center;position:relative;overflow:hidden;box-shadow:0 3px 8px rgba(217,119,6,.3)">
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
            <div style="font-size:12px;font-weight:800;line-height:1.3">Supurada</div>
            <div style="font-size:10px;opacity:.8;margin-top:3px;line-height:1.3">Forúnculo · Carbunclo<br>Absceso</div>
          </button>
        </div>
        <button onclick="ppbNavigate('ppb_ns_severa_tipo')"
          style="width:100%;background:linear-gradient(160deg,#dc2626,#991b1b);color:white;border:none;border-radius:10px;padding:12px 14px;cursor:pointer;font-family:inherit;text-align:center;position:relative;overflow:hidden;box-shadow:0 3px 8px rgba(220,38,38,.3)">
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          <div style="font-size:12px;font-weight:800;margin-bottom:5px">IPPB Severa</div>
          <div style="font-size:10.5px;opacity:.9;line-height:1.5">3 o más elementos de infección sistémica (*), sospecha de infección necrotizante, sepsis o inmunosupresión (neutropenia, trasplante, inmunosupresores)</div>
        </button>
        <button class="btn-tables" onclick="showTablesPPB(0)" style="margin-top:6px">📋 Tabla 1 — Criterios sistémicos (*)</button>
      </div>`;
  }

  /* ── NO SUPURADA — SEVERIDAD ────────────── */
  else if (node.type === 'ppb_ns_severity_choice') {
    html = `
      <div style="display:flex;flex-direction:column;gap:8px">

        <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
          <div style="background:linear-gradient(160deg,#059669,#047857);color:white;padding:11px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
            ✅ Leve
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:white;padding:10px 14px;border:1px solid #a7f3d0;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
            <div style="font-size:12px;color:#065f46;margin-bottom:7px;line-height:1.45">Sin criterios sistémicos · Área &lt; 75 cm²</div>
            <button class="btn-primary" style="background:linear-gradient(160deg,#059669,#047857);font-size:13px;padding:10px" onclick="ppbNavigate('ppb_ns_leve')">Celulitis / Erisipela Leve →</button>
          </div>
        </div>

        <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
          <div style="background:linear-gradient(160deg,#d97706,#b45309);color:white;padding:11px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
            ⚠️ Moderada / Con FR
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:white;padding:10px 14px;border:1px solid #fde68a;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
            <div style="font-size:12px;color:#92400e;margin-bottom:7px;line-height:1.45">1 criterio sistémico + hemodinámica estable · Área &gt; 75 cm² o comorbilidad: obesidad mórbida, DM, ERC, cirrosis, EPOC, insuf. venosa, arteriopatía periférica</div>
            <button class="btn-primary" style="background:linear-gradient(160deg,#d97706,#b45309);font-size:13px;padding:10px" onclick="ppbNavigate('ppb_ns_moderada')">Celulitis / Mordeduras →</button>
          </div>
        </div>

      </div>
      <button class="btn-tables" onclick="showTablesPPB(0)" style="margin-top:4px">📋 Tabla 1 — Criterios sistémicos (*)</button>
      <div class="choices" style="margin-top:4px">
        <button class="btn-back" onclick="ppbGoBack()">← Volver</button>
      </div>`;
  }

  /* ── SUPURADA — SEVERIDAD ───────────────── */
  else if (node.type === 'ppb_s_severity_choice') {
    html = `
      <div style="display:flex;flex-direction:column;gap:8px">

        <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
          <div style="background:linear-gradient(160deg,#059669,#047857);color:white;padding:11px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
            ✅ Leve
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:white;padding:10px 14px;border:1px solid #a7f3d0;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
            <div style="font-size:12px;color:#065f46;margin-bottom:7px">Sin criterios de infección sistémica</div>
            <button class="btn-primary" style="background:linear-gradient(160deg,#059669,#047857);font-size:13px;padding:10px" onclick="ppbNavigate('ppb_s_leve')">Forúnculo / carbunclo / absceso — Leve →</button>
          </div>
        </div>

        <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
          <div style="background:linear-gradient(160deg,#d97706,#b45309);color:white;padding:11px 14px;font-weight:800;font-size:13px;position:relative;overflow:hidden">
            ⚠️ Moderada o Con FR para mala evolución
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:white;padding:10px 14px;border:1px solid #fde68a;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
            <div style="font-size:12px;color:#92400e;margin-bottom:7px;line-height:1.45">1 criterio de infección sistémica + hemodinámica estable<br>· Comorbilidades: obesidad mórbida, diabetes, ERC, cirrosis, EPOC, insuficiencia venosa sintomática, arteriopatía periférica</div>
            <button class="btn-primary" style="background:linear-gradient(160deg,#d97706,#b45309);font-size:13px;padding:10px" onclick="ppbNavigate('ppb_s_moderada')">Forúnculo / carbunclo / absceso — Moderado →</button>
          </div>
        </div>

      </div>
      <button class="btn-tables" onclick="showTablesPPB(0)" style="margin-top:4px">📋 Tabla 1 — Criterios sistémicos (*)</button>
      <button class="btn-tables" onclick="showTablesPPB(1)" style="margin-top:6px">📋 Tabla 2 — Factores de Riesgo para SAMR</button>
      <div class="choices" style="margin-top:4px">
        <button class="btn-back" onclick="ppbGoBack()">← Volver</button>
      </div>`;
  }

  /* ── SEVERA — SUBTIPO ───────────────────── */
  else if (node.type === 'ppb_severa_single_card') {
    const necroOrgs = [
      'Monomicrobiana: Streptococcus spp., SAMS, SAMR, Aeromonas spp., Aeromonas hydrophila o Vibrio spp. (exposición a agua)',
      'Polimicrobiana: Pseudomonas aeruginosa, Enterobacterales, Streptococcus spp., SAMS, SAMR, Anaerobios',
      'Gangrena gaseosa: Clostridium spp.',
      'Micosis: pacientes con neutropenia o lesiones rápidamente progresivas',
    ];
    const necroRegs = [
      { label:'Primera línea', bg:'#fee2e2', labelColor:'#7f1d1d',
        lines:[
          '<span class="drug-name">Pip-Tazo</span> 4,5 g IV c/6h <em style="color:#94a3b8">o</em> <span class="drug-name">Meropenem</span> 2 g IV c/8h',
          '+ <span class="drug-name">Vancomicina</span> carga 25 mg/kg IV → 15–20 mg/kg IV c/12h',
          '+ <span class="drug-name">Clindamicina</span> 600 mg IV c/6h <em style="color:#94a3b8">(efecto antitoxina)</em>',
        ]
      },
      { label:'Alternativa — Linezolid en lugar de Vanco + Clinda', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Pip-Tazo</span> o <span class="drug-name">Meropenem</span>',
          '+ <span class="drug-name">Linezolid</span> 600 mg IV c/12h',
        ]
      },
      { label:'Alergia grave a β-lactámicos — Opción 1', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/8h',
          '+ <span class="drug-name">Amikacina</span> carga 20 mg/kg IV → luego 15 mg/kg IV c/24h',
          '+ <span class="drug-name">Linezolid</span> 600 mg IV c/12h',
        ]
      },
      { label:'Alergia grave a β-lactámicos — Opción 2', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/8h',
          '+ <span class="drug-name">Amikacina</span> carga 20 mg/kg IV → luego 15 mg/kg IV c/24h',
          '+ <span class="drug-name">Vancomicina</span> carga 25 mg/kg → luego 15–20 mg/kg IV c/12h',
          '+ <span class="drug-name">Clindamicina</span> 600 mg IV c/6h',
        ]
      },
    ];
    const regColors = {'#fee2e2':'#7f1d1d','#fef3c7':'#92400e','#f1f5f9':'#334155'};
    const orgsHTML = necroOrgs.map(o => `<div style="font-size:11.5px;color:#1e293b;line-height:1.5;margin-bottom:4px">• ${o}</div>`).join('');
    const regiHTML = necroRegs.map(r =>
      `<div class="regimen-block" style="background:${r.bg};margin-bottom:7px">
        <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
        ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
      </div>`
    ).join('');

    html = `
      <!-- Internación + Cultivos -->
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md);margin-bottom:10px">
        <div style="background:linear-gradient(160deg,#991b1b,#7f1d1d);color:white;padding:10px 14px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;position:relative;overflow:hidden">
          🏥 Internación — Consulta con Cirugía
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:9px 14px;border:1px solid #fecaca;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#991b1b;letter-spacing:.3px;margin-bottom:3px">Cultivos</div>
          <div style="font-size:12px;color:#1e293b;line-height:1.45">HC y cultivos de la lesión (punción, muestras quirúrgicas)</div>
        </div>
      </div>

      <!-- Flip card -->
      <div style="perspective:1000px;cursor:pointer" onclick="ppbFlip(10)">
        <div id="ppb-flip-10" style="position:relative;width:100%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1)">
          <!-- FRENTE -->
          <div style="backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1.5px solid #991b1b;border-radius:10px;overflow:hidden;display:flex;flex-direction:column">
            <div style="background:linear-gradient(160deg,#dc2626,#991b1b);color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden">
              <span>Celulitis severa / necrotizante / gangrena de Fournier / colecciones</span>
              <span style="font-size:16px;opacity:.9">↺</span>
              <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
            </div>
            <div style="background:white;padding:9px 11px;flex:1">
              <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Microorganismos a Cubrir</div>
              ${orgsHTML}
              <div style="margin-top:8px;padding-top:7px;border-top:1px solid #e2e8f0">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Conducta</div>
                <div style="font-size:11.5px;color:#1e293b;line-height:1.4">• Debridamiento amplio y precoz (primeras 6 hs) y reexploraciones<br>• No demorar cirugía por estudios imagenológicos</div>
              </div>
              <div style="margin-top:7px;padding-top:7px;border-top:1px solid #e2e8f0">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Duración del Tratamiento Antibiótico</div>
                <div style="font-size:11.5px;color:#1e293b;line-height:1.4">14–21 días hasta control de foco y respuesta clínica favorable</div>
              </div>
            </div>
            <div style="background:#fff5f5;border-top:1px solid #fecaca;padding:6px 11px;font-size:10.5px;color:#991b1b;font-weight:700;text-align:center">
              ↺ Girar para ver el tratamiento antibiótico
            </div>
          </div>
          <!-- REVERSO -->
          <div id="ppb-flip-back-10" style="position:absolute;top:0;left:0;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);-webkit-transform:rotateY(180deg);border:1.5px solid #991b1b;border-radius:10px;overflow:hidden">
            <div style="background:linear-gradient(160deg,#dc2626,#991b1b);color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden">
              <span>Tratamiento Antibiótico</span>
              <span style="font-size:16px;opacity:.9">↺</span>
              <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
            </div>
            <div style="background:white;padding:9px 11px">
              ${regiHTML}
              <div style="font-size:11px;color:#475569;background:#f8fafc;border-left:3px solid #94a3b8;border-radius:0 6px 6px 0;padding:8px 10px;margin-top:4px;line-height:1.5">
                • Si fascitis necrotizante por <em>S. pyogenes</em>: <strong>Penicilina + Clindamicina</strong><br>
                • Suspender clindamicina con estabilidad clínica e infección por no toxigénicos<br>
                • Neutropénicos: evaluar antifúngico empírico
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ppbGoBack()">← Volver</button>
        <button class="btn-back" onclick="ppbRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── PPB NS MODERADA — FLIP CARDS ──────── */
  else if (node.type === 'ppb_ns_moderada_cards') {
    const regColors = { '#fef9c3':'#92400e','#fee2e2':'#991b1b','#e0f2fe':'#0369a1','#f1f5f9':'#334155','#fef3c7':'#92400e' };

    const cardsHTML = node.cards.map((c, idx) => {
      const orgsHTML = c.organisms.map(o =>
        `<div style="font-size:11.5px;color:#1e293b;line-height:1.5;margin-bottom:3px">• ${o}</div>`
      ).join('');
      const regiHTML = c.regimens.map(r =>
        `<div class="regimen-block" style="background:${r.bg};margin-bottom:7px">
          <div class="regimen-label" style="color:${r.labelColor||regColors[r.bg]||'#334155'}">${r.label}</div>
          ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
        </div>`
      ).join('');
      return `
        <div style="perspective:1000px;cursor:pointer;margin-bottom:10px" onclick="ppbFlip(${idx})">
          <div id="ppb-flip-${idx}" style="position:relative;width:100%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1)">
            <!-- FRENTE: organismos -->
            <div style="backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1.5px solid ${c.frontBorder};border-radius:10px;overflow:hidden;display:flex;flex-direction:column">
              <div style="background:${c.frontBorder};background:linear-gradient(160deg,${c.frontBorder}cc,${c.frontBorder});color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden">
                <span>${c.frontTitle}</span>
                <span style="font-size:16px;opacity:.9">↺</span>
                <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
              </div>
              <div style="background:white;padding:9px 11px;flex:1">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Microorganismos a Cubrir</div>
                ${orgsHTML}
                ${c.conducta ? `<div style="margin-top:8px;padding-top:7px;border-top:1px solid #e2e8f0">
                  <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Conducta</div>
                  <div style="font-size:11.5px;color:#1e293b;line-height:1.4">• ${c.conducta}</div>
                </div>` : ''}
                ${c.duration ? `<div style="margin-top:7px;padding-top:7px;border-top:1px solid #e2e8f0">
                  <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:3px">Duración del Tratamiento Antibiótico</div>
                  <div style="font-size:11.5px;color:#1e293b;line-height:1.4">${c.duration}</div>
                </div>` : ''}
              </div>
              <div style="background:${c.frontBg};border-top:1px solid ${c.frontBorder}33;padding:6px 11px;font-size:10.5px;color:${c.frontTitleColor};font-weight:700;text-align:center">
                ↺ Girar para ver el tratamiento
              </div>
            </div>
            <!-- REVERSO: tratamiento -->
            <div id="ppb-flip-back-${idx}" style="position:absolute;top:0;left:0;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);-webkit-transform:rotateY(180deg);border:1.5px solid ${c.backBorder};border-radius:10px;overflow:hidden">
              <div style="background:${c.backBorder};background:linear-gradient(160deg,${c.backBorder}cc,${c.backBorder});color:white;padding:7px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden">
                <span>${c.frontTitle} — Tratamiento</span>
                <span style="font-size:16px;opacity:.9">↺</span>
                <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,transparent 100%);pointer-events:none"></div>
              </div>
              <div style="background:white;padding:9px 11px">${regiHTML}</div>
            </div>
          </div>
        </div>`;
    }).join('');

    html = `
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md);margin-bottom:10px">
        <div style="background:linear-gradient(160deg,#0ea5e9,#0891b2);color:white;padding:10px 14px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;position:relative;overflow:hidden">
          🔬 Cultivos
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:10px 14px;font-size:12px;color:#0c4a6e;line-height:1.5;border:1px solid #bae6fd;border-top:none;border-radius:0 0 var(--radius) var(--radius)">${node.cultivos}</div>
      </div>

      ${cardsHTML}

      <div class="choices" style="margin-top:4px">
        <button class="btn-back" onclick="ppbGoBack()">← Volver</button>
        <button class="btn-back" onclick="ppbRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── PPB TREATMENT ──────────────────────── */
  else if (node.type === 'ppb_treatment') {
    const regColors = { '#d1fae5':'#065f46','#fef3c7':'#92400e','#fee2e2':'#991b1b','#f1f5f9':'#334155','#ede9fe':'#4c1d95' };

    const orgsHTML = node.organisms.map(o => `<div style="font-size:11px;color:#334155;margin-bottom:3px;line-height:1.4">• ${o}</div>`).join('');
    const notesHTML = node.notes.length ? node.notes.map(n => `<div style="font-size:11.5px;color:#475569;margin-bottom:4px;line-height:1.45">• ${n}</div>`).join('') : '';

    const headerColor =
      node.settingBg === '#d1fae5' ? 'linear-gradient(160deg,#059669,#047857)' :
      node.settingBg === '#fee2e2' ? (node.settingColor === '#7f1d1d' ? 'linear-gradient(160deg,#991b1b,#7f1d1d)' : 'linear-gradient(160deg,#dc2626,#991b1b)') :
      'linear-gradient(160deg,#d97706,#b45309)';

    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:${headerColor};padding:14px 16px;color:white;position:relative;overflow:hidden">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.65;margin-bottom:5px">Tratamiento Recomendado</div>
        <div style="font-size:15px;font-weight:800;line-height:1.3">${node.title}</div>
        <div style="font-size:11px;opacity:.8;margin-top:4px;background:rgba(0,0,0,.15);border-radius:6px;padding:4px 8px;display:inline-block">${node.setting}</div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:var(--radius-sm);padding:9px 11px;margin-bottom:10px">
          <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.4px;margin-bottom:5px">Gérmenes probables</div>
          ${orgsHTML}
        </div>

        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor||regColors[r.bg]||'#334155'}">${r.label}</div>
            ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
          </div>`).join('')}

        ${notesHTML ? `<div style="background:#f8fafc;border-left:3px solid #94a3b8;border-radius:0 6px 6px 0;padding:9px 11px;margin-top:4px">${notesHTML}</div>` : ''}
        ${node.samrTable ? `<button class="btn-tables" onclick="showTablesPPB(1)" style="margin-top:8px">📋 Tabla 2 — Factores de Riesgo para SAMR</button>` : ''}
        ${(node.extraRegimens||[]).map(r => {
          const regColors = {'#ede9fe':'#4c1d95','#fef3c7':'#92400e','#fee2e2':'#991b1b','#f1f5f9':'#334155'};
          return `<div class="regimen-block" style="background:${r.bg};margin-top:8px">
            <div class="regimen-label" style="color:${r.labelColor||regColors[r.bg]||'#334155'}">${r.label}</div>
            ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
          </div>`;
        }).join('')}

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
          <div style="background:#e0f2fe;border:1px solid #7dd3fc;border-radius:var(--radius-sm);padding:8px 10px">
            <div style="font-size:9px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.4px;margin-bottom:3px">Cultivos</div>
            <div style="font-size:11px;color:#0c4a6e;line-height:1.4">${node.cultivos}</div>
          </div>
          <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:var(--radius-sm);padding:8px 10px">
            <div style="font-size:9px;font-weight:800;text-transform:uppercase;color:#166534;letter-spacing:.4px;margin-bottom:3px">Manejo local</div>
            <div style="font-size:11px;color:#14532d;line-height:1.4">${node.manejo}</div>
          </div>
        </div>

        <div class="duration-box" style="margin-top:10px">
          <h4>⏱️ Duración</h4>
          <p>${node.duration}</p>
        </div>

      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ppbGoBack()">← Volver</button>
        <button class="btn-back" onclick="ppbRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('ppb-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapPPB(nodeId);
}

/* ═════════════════════════════════════════════
   PPB TABLES
═══════════════════════════════════════════════ */
function showTablesPPB(idx) {
  document.getElementById('ppb-tables-back-btn').onclick = () => showScreen('ppb');
  showScreen('ppb-tables');
  renderPPBTablesUI(idx || 0);
}

function renderPPBTablesUI(idx) {
  ppb_activeTabIndex = idx;
  document.getElementById('ppb-tabs-bar').innerHTML = PPB_TABLES.map((t,i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="ppbSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = PPB_TABLES.map((t, i) => {
    let inner = '';
    if (t.type === 'ppb_simple_list') {
      inner = `<div style="padding:10px 12px">
        ${t.items.map(it => `<div style="font-size:12px;color:#1e293b;padding:5px 0;border-bottom:1px solid #e8f0f7;line-height:1.45">• ${it}</div>`).join('')}
        ${t.note ? `<div class="tbl-note" style="margin-top:10px">ℹ️ ${t.note}</div>` : ''}
      </div>`;
    } else if (t.type === 'ppb_notes') {
      inner = `<div style="padding:10px 12px">
        ${t.items.map(it => `
          <div style="margin-bottom:9px;padding-bottom:9px;border-bottom:1px solid #e8f0f7">
            <div style="font-size:10.5px;font-weight:800;color:#334155;text-transform:uppercase;letter-spacing:.3px;margin-bottom:3px">${it.hd}</div>
            <div style="font-size:11.5px;color:#475569;line-height:1.5">${it.tx}</div>
          </div>`).join('')}
      </div>`;
    }
    return `<div class="table-swipe-card" id="ppb-swipe-card-${i}" style="height:auto;min-height:0">
      <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
        <div class="table-swipe-head">${t.title}</div>
        ${inner}
      </div>
    </div>`;
  }).join('');

  const dotsHTML = PPB_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" id="ppb-swipe-dot-${i}" onclick="ppbSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('ppb-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="ppb-tables-swipe" style="flex:1;align-items:start">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const container = document.getElementById('ppb-tables-swipe');
    const card = document.getElementById('ppb-swipe-card-' + idx);
    if (container && card) container.scrollLeft = card.offsetLeft;
    ppbScrollTabIntoView(idx);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.intersectionRatio >= 0.6) {
          const j = parseInt(e.target.id.replace('ppb-swipe-card-',''));
          ppb_activeTabIndex = j;
          document.querySelectorAll('#ppb-tabs-bar .tab-btn').forEach((b,k) => b.classList.toggle('active', k===j));
          document.querySelectorAll('[id^="ppb-swipe-dot-"]').forEach((d,k) => d.classList.toggle('active', k===j));
          ppbScrollTabIntoView(j);
        }
      });
    }, { root: document.getElementById('ppb-tables-swipe'), threshold: 0.6 });
    PPB_TABLES.forEach((_,j) => { const c = document.getElementById('ppb-swipe-card-'+j); if(c) obs.observe(c); });
  });
}

function ppbSwipeToTable(idx) {
  const container = document.getElementById('ppb-tables-swipe');
  const card = document.getElementById('ppb-swipe-card-' + idx);
  if (container && card) { container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' }); ppb_activeTabIndex = idx; }
}

function ppbFlipInit(idx) {
  const inner = document.getElementById('ppb-flip-' + idx);
  const back  = document.getElementById('ppb-flip-back-' + idx);
  if (!inner || !back) return;
  back.style.position = 'relative'; back.style.transform = 'none';
  back.style.webkitTransform = 'none'; back.style.visibility = 'hidden';
  const h = back.offsetHeight;
  back.style.position = 'absolute'; back.style.transform = 'rotateY(180deg)';
  back.style.webkitTransform = 'rotateY(180deg)'; back.style.visibility = '';
  if (h > 0) inner.style.height = h + 'px';
}
function ppbFlip(idx) {
  const inner = document.getElementById('ppb-flip-' + idx);
  const back  = document.getElementById('ppb-flip-back-' + idx);
  if (!inner || !back) return;
  const flipped = inner.getAttribute('data-flipped') === '1';

  if (!flipped) {
    // going to show back — measure back height first
    back.style.position       = 'relative';
    back.style.transform      = 'none';
    back.style.webkitTransform = 'none';
    back.style.visibility     = 'hidden';
    const h = back.offsetHeight;
    back.style.position       = 'absolute';
    back.style.transform      = 'rotateY(180deg)';
    back.style.webkitTransform = 'rotateY(180deg)';
    back.style.visibility     = '';
    inner.style.height = h + 'px';
  } else {
    // going back to front — remove fixed height so front auto-sizes
    inner.style.height = '';
  }

  inner.style.transform = flipped ? '' : 'rotateY(180deg)';
  inner.style.webkitTransform = flipped ? '' : 'rotateY(180deg)';
  inner.setAttribute('data-flipped', flipped ? '0' : '1');
}
function initPPBCards() { /* height managed dynamically on each flip */ }

function ppbScrollTabIntoView(i) {
  const bar = document.getElementById('ppb-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   PIE DIABÉTICO — NAV
═══════════════════════════════════════════════ */
function pieGoBack() {
  if (pie_history.length > 0) {
    pie_currentNode = pie_history.pop();
    renderNodePIE(pie_currentNode);
  } else { goHome(); }
}
function pieNavigate(nodeId) {
  pie_history.push(pie_currentNode);
  pie_currentNode = nodeId;
  renderNodePIE(nodeId);
}
function pieRestart() {
  pie_history = []; pie_currentNode = 'pie_start';
  renderNodePIE('pie_start');
}
function pieJumpTo(id) {
  if (id === pie_currentNode) return;
  if (PIE_JUMP_PATHS[id] !== undefined) {
    pie_history = [...PIE_JUMP_PATHS[id]];
    pie_currentNode = id;
    renderNodePIE(id);
  }
}
function toggleMinimapPIE() {
  const panel = document.getElementById('pie-minimap-panel');
  const btn   = document.getElementById('pie-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapPIE(nodeId) {
  PIE_MM_IDS.forEach(id => {
    const rect = document.getElementById('pie-mm-' + id);
    const txt  = document.getElementById('pie-mmt-' + id);
    if (!rect) return;
    const isCurrent = (id === nodeId);
    const isVisited  = pie_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited  ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke',       isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2'       : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited  ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}
function pieExpandMod(id) {
  const body  = document.getElementById('pie-mod-exp-' + id);
  const arrow = document.getElementById('pie-mod-arr-' + id);
  if (!body) return;
  body.classList.toggle('open');
  if (arrow) arrow.classList.toggle('open');
}
function pieToggleExpand() {
  const sec = document.getElementById('pie-expand-mod-grave');
  const tri = document.getElementById('pie-arr-tri');
  if (!sec) return;
  const opening = !sec.classList.contains('open');
  sec.classList.toggle('open');
  if (tri) tri.classList.toggle('open');
  if (opening) setTimeout(() => sec.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
}
function pieFlipSev() {
  const inner = document.getElementById('pie-fi-sev');
  if (!inner) return;
  const isF = inner.getAttribute('data-f') === '1';
  const back = inner.querySelector('.pie-ff-back');
  if (!isF) {
    back.style.position = 'relative'; back.style.transform = 'none';
    back.style.webkitTransform = 'none'; back.style.visibility = 'hidden';
    const h = back.offsetHeight;
    back.style.position = 'absolute'; back.style.transform = 'rotateY(180deg) translateZ(1px)';
    back.style.webkitTransform = 'rotateY(180deg) translateZ(1px)'; back.style.visibility = '';
    if (h > 0) inner.style.height = h + 'px';
  } else {
    inner.addEventListener('transitionend', function handler() {
      inner.style.height = '';
      inner.removeEventListener('transitionend', handler);
    });
  }
  inner.style.transform = isF ? '' : 'rotateY(180deg)';
  inner.style.webkitTransform = isF ? '' : 'rotateY(180deg)';
  inner.setAttribute('data-f', isF ? '0' : '1');
}

/* ═════════════════════════════════════════════
   PIE DIABÉTICO — RENDER
═══════════════════════════════════════════════ */
function renderNodePIE(nodeId) {
  const node = NODES_PIE[nodeId];
  if (!node) return;

  const sublabels = {
    pie_start:    'Sospecha Clínica',
    pie_severity: 'Clasificación de Severidad',
    pie_leve:     'Tratamiento — Leve',
    pie_moderada: 'Tratamiento — Moderada',
    pie_grave:    'Tratamiento — Grave',
  };
  const sub = document.getElementById('pie-step-sublabel');
  if (sub) sub.textContent = sublabels[nodeId] || '';

  const fill = document.getElementById('pie-progress-fill');
  if (fill) fill.style.width = Math.round(((node.step - 1) / 5) * 100) + '%';

  let html = '';

  /* ── SOSPECHA / PIE_START ──────────────── */
  if (node.type === 'pie_start') {
    const criteria = ['Presencia de lesión ulcerada','Edema local o induración','Eritema local que no desaparece con elevación de la extremidad durante 30 s','Dolor y/o sensibilidad local','Calor localizado','Secreción purulenta a través de lesión ulcerada'];
    const labs     = ['Hemograma · Funcional renal · Funcional y enzimograma hepático · Ionograma','Glicemia y hemoglobina glicosilada','Proteína C reactiva · Velocidad de eritrosedimentación'];
    const critHTML = criteria.map(i => `<div style="display:flex;gap:8px;font-size:12.5px;color:#334155;padding:4px 0;border-bottom:1px solid #f0f4f8;line-height:1.4"><span style="flex-shrink:0;color:#555">•</span><span>${i}</span></div>`).join('');
    const labsHTML = labs.map(i => `<div style="display:flex;gap:8px;font-size:12.5px;color:#334155;padding:4px 0;border-bottom:1px solid #f0f4f8;line-height:1.4"><span style="flex-shrink:0;color:#555">•</span><span>${i}</span></div>`).join('');
    const hlRow = t => `<div style="display:flex;gap:8px;font-size:12.5px;color:#334155;padding:4px 0 4px 7px;border-bottom:1px solid #fde68a;border-left:3px solid #f59e0b;background:#fff9c4;border-radius:3px;line-height:1.4;margin-bottom:2px"><span style="flex-shrink:0;color:#555">•</span><span>${t}</span></div>`;
    html = `
      <div class="step-card" style="padding:15px">
        <div style="background:linear-gradient(135deg,#b45309,#92400e);border-radius:var(--radius-sm);padding:11px 14px;text-align:center;color:white;margin-bottom:12px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          <h2 style="font-size:16px;font-weight:800;letter-spacing:.3px;position:relative;z-index:1;color:white">INFECCIÓN EN PIE DIABÉTICO</h2>
          <p style="font-size:11px;opacity:.8;margin-top:3px;position:relative;z-index:1">Paciente con Diabetes Mellitus y sospecha de infección en pie</p>
        </div>
        <div style="font-size:12.5px;font-weight:700;color:#334155;margin-bottom:6px">Sospecha si presenta al menos 2 de:</div>
        ${critHTML}
        <div style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.4px;color:#111;margin-bottom:5px;border-bottom:2px solid #111;padding-bottom:3px;margin-top:12px">Solicite y valore</div>
        ${labsHTML}
        ${hlRow('<strong>Radiografía de pie</strong> (vista anterior y lateral)')}
        ${hlRow('<strong>Pulsos distales:</strong> pedio y tibial posterior')}
        ${hlRow('<strong>Eco Doppler</strong> arterial y venoso de MMII (oportunidad según clínica)')}
      </div>
      <button onclick="pieNavigate('${node.next}')"
        style="display:block;width:100%;background:linear-gradient(160deg,#1a5472,#0d3a52);color:white;border:none;border-radius:var(--radius);padding:14px 16px;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;text-align:center;box-shadow:0 3px 8px rgba(13,58,82,.3);margin-top:4px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        Determinar severidad →
      </button>`;
  }

  /* ── SEVERIDAD ─────────────────────────── */
  else if (node.type === 'pie_severity') {
    const sevBlocks = node.options.map(o => `
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md);cursor:pointer;margin-bottom:6px" onclick="pieNavigate('${o.next}')">
        <div style="padding:11px 14px;font-size:13px;font-weight:800;color:white;background:linear-gradient(160deg,${o.gf},${o.gt});position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
          ${o.label}
        </div>
        <div style="background:white;padding:10px 14px;border:1.5px solid ${o.sc};border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          ${o.criteria.map(c=>`<div style="font-size:12px;color:${o.tc};margin-bottom:3px;line-height:1.45">• ${c}</div>`).join('')}
          <button style="display:block;width:100%;background:linear-gradient(160deg,${o.gf},${o.gt});color:white;border:none;border-radius:var(--radius);padding:10px;font-size:12.5px;font-weight:800;cursor:pointer;font-family:inherit;text-align:center;margin-top:9px;position:relative;overflow:hidden">
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
            Ver tratamiento →
          </button>
        </div>
      </div>`).join('');

    const clRows  = PIE_OSTEO.criteriosCl.map(i => `<div style="font-size:11.5px;color:#1e293b;line-height:1.45;margin-bottom:3px">• ${i}</div>`).join('');
    const rxRows  = PIE_OSTEO.criteriosRx.map(i => `<div style="font-size:11.5px;color:#1e293b;line-height:1.45;margin-bottom:3px">• ${i}</div>`).join('');
    const algRows = PIE_OSTEO.algoritmo.map(a => `
      <div style="margin-bottom:9px;padding-bottom:9px;border-bottom:1px solid #bae6fd">
        <div style="font-size:10.5px;font-weight:800;color:#0369a1;margin-bottom:5px;line-height:1.4">${a.hd}</div>
        ${a.items.map(i=>`<div style="font-size:11.5px;color:#334155;line-height:1.4;margin-bottom:2px">→ ${i}</div>`).join('')}
      </div>`).join('');

    html = `
      <div class="step-card" style="padding:12px">
        <div style="font-size:13px;font-weight:800;color:#1e293b;margin-bottom:10px">Clasificación de Severidad de la Infección</div>
        <button class="btn-tables" onclick="showTablesPIE(0)" style="background:linear-gradient(160deg,#1a5472,#0d3a52);color:white;border-color:#0d3a52">📋 Tabla 1 — Criterios SIRS y qSOFA</button>
      </div>
      ${sevBlocks}

      <div class="pie-arrow-row">
        <button class="pie-arr-back" onclick="pieGoBack()">
          <div class="pie-arr-back-lbl">Volver</div>
          <div class="pie-arr-left"></div>
        </button>
        <button class="pie-arr-center" onclick="pieToggleExpand()">
          <div class="pie-arr-lbl">Si Moderada / Grave</div>
          <div class="pie-arr-tri" id="pie-arr-tri"></div>
        </button>
      </div>

      <div class="pie-expand" id="pie-expand-mod-grave">
        <div class="pie-urgencia">
          <div class="pie-urgencia-hdr">1. Valoración por equipo quirúrgico</div>
          <div class="pie-urgencia-body">Valoración urgente. Definir criterio de abordaje, limpieza quirúrgica y revascularización según corresponda.</div>
        </div>

        <div class="pie-flip-wrap" onclick="pieFlipSev()">
          <div class="pie-flip-inner" id="pie-fi-sev">
            <div class="pie-ff pie-ff-front">
              <div class="pie-flip-bar">
                <span>2. Determinar presencia de Osteomielitis</span><span style="font-size:16px;opacity:.9">↺</span>
              </div>
              <div class="pie-flip-content">
                <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#0369a1;margin-bottom:6px">Criterios clínicos y paraclínicos — al menos 1</div>
                ${clRows}
                <div style="margin-top:10px;padding-top:9px;border-top:1px solid #bae6fd">
                  <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#0369a1;margin-bottom:6px">Elementos radiológicos en Rx</div>
                  ${rxRows}
                </div>
                <div style="margin-top:7px;font-size:10.5px;font-weight:700;color:#0369a1;text-align:center;background:#e0f2fe;border-radius:6px;padding:5px">↺ Girar para ver el algoritmo imagenológico</div>
              </div>
            </div>
            <div class="pie-ff pie-ff-back">
              <div class="pie-flip-bar">
                <span>Algoritmo imagenológico</span><span style="font-size:16px;opacity:.9">↺</span>
              </div>
              <div class="pie-flip-content">
                ${algRows}
                <div style="font-size:11px;color:#475569;font-style:italic;background:#e0f2fe;border-left:3px solid #0891b2;border-radius:0 5px 5px 0;padding:7px 10px;margin-top:2px">Considerar biopsia ósea diagnóstica para muestra microbiológica cuando sea posible.</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  /* ── LEVE ──────────────────────────────── */
  else if (node.type === 'pie_leve') {
    const orgsHTML = node.organisms.map(o => `<div style="font-size:11px;color:#334155;margin-bottom:3px;line-height:1.4">• ${o}</div>`).join('');
    const regsHTML = node.regimens.map(r => `
      <div class="regimen-block" style="background:${r.bg};margin-bottom:8px">
        <div class="regimen-label" style="color:${r.lc}">${r.label}</div>
        ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
      </div>`).join('');
    const interHTML = node.interdisciplinary.map(r =>
      `<div style="display:flex;gap:8px;padding:4px 0;border-bottom:1px solid #bae6fd;font-size:12px;line-height:1.4">
        <span style="font-weight:800;color:#0369a1;flex-shrink:0;min-width:118px">${r.lbl}</span>
        <span style="color:#0c4a6e">${r.txt}</span>
      </div>`).join('');
    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:linear-gradient(160deg,${node.color},${node.gt});padding:14px 15px;color:white;box-shadow:var(--shadow-md);position:relative;overflow:hidden">
        <div style="font-size:15px;font-weight:800;line-height:1.3">${node.title}</div>
        <div style="font-size:10.5px;margin-top:5px;background:rgba(0,0,0,.2);border-radius:5px;padding:3px 8px;display:inline-block">Ambulatorio · No requiere cultivo</div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:var(--radius-sm);padding:9px 11px;margin-bottom:10px">
          <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;margin-bottom:5px">Microorganismos a cubrir</div>
          ${orgsHTML}
        </div>
        ${regsHTML}
        <div class="duration-box">
          <h4>⏱️ Duración</h4>
          <p>${node.duration}</p>
        </div>
        <div style="background:#e0f2fe;border:1px solid #7dd3fc;border-radius:var(--radius-sm);padding:10px 12px;margin-top:10px">
          <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#075985;letter-spacing:.4px;margin-bottom:8px">Refiera para abordaje interdisciplinario</div>
          ${interHTML}
        </div>
      </div>
      <div class="choices" style="margin-top:4px">
        <button class="btn-back" onclick="pieGoBack()">← Volver</button>
        <button class="btn-back" onclick="pieRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── MODERADA / GRAVE (pie_mod_tx) ──────── */
  else if (node.type === 'pie_mod_tx') {
    const orgsHTML = node.organisms.map(o => `<div style="font-size:11px;color:#334155;margin-bottom:3px;line-height:1.4">• ${o}</div>`).join('');
    const cultHTML = node.cultivos.map(c => `<div style="font-size:11.5px;color:#1e293b;padding:5px 0;border-bottom:1px solid #f0f4f8;line-height:1.45">• ${c}</div>`).join('');

    const makeAcc = (card, key) => {
      const regsHTML = card.regimens.map(r =>
        `<div class="regimen-block" style="background:${r.bg};padding:8px 10px;margin-bottom:6px">
          <div class="regimen-label" style="color:${r.lc};font-size:9.5px">${r.label}</div>
          ${r.lines.map(l=>`<div class="drug-line" style="font-size:11.5px">${l}</div>`).join('')}
        </div>`).join('');
      return `
        <div class="pie-acc">
          <div class="pie-acc-hdr" style="background:linear-gradient(160deg,${card.gf},${card.gt})" onclick="pieExpandMod('${key}')">
            <span style="position:relative;z-index:1">${card.frontTitle}</span>
            <span class="pie-acc-arrow" id="pie-mod-arr-${key}" style="position:relative;z-index:1">▼</span>
          </div>
          <div class="pie-acc-body" id="pie-mod-exp-${key}" style="--pie-acc-border:${card.gf}">
            <div style="padding:8px 10px">${regsHTML}</div>
          </div>
        </div>`;
    };

    const cardsWrapper = node.singleCard
      ? makeAcc(node.treatment, node.treatment.id)
      : `<div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
          <div style="background:linear-gradient(160deg,#1a5472,#0d3a52);color:white;padding:8px 13px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;position:relative;overflow:hidden">Tratamiento
            <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.13) 0%,transparent 100%);pointer-events:none"></div>
          </div>
          <div style="background:#f0f4f8;padding:10px 10px 4px">
            ${node.cards.map(c => makeAcc(c, c.id)).join('')}
          </div>
        </div>`;

    const m = node.monitoring;
    const mRows = items => items.map(i => `<div style="font-size:11.5px;color:#334155;line-height:1.5;margin-bottom:4px;padding-left:8px;border-left:2px solid #e2e8f0">• ${i}</div>`).join('');
    const monBlock = `
      <div class="pie-acc">
        <div class="pie-acc-hdr" style="background:linear-gradient(160deg,#334155,#1e293b);border-radius:var(--radius);font-size:11px;text-align:center;line-height:1.5" onclick="pieExpandMod('mon')">
          <span style="position:relative;z-index:1;flex:1">
            <div style="font-size:12px;font-weight:800">${m.header}</div>
            <div style="font-size:10.5px;opacity:.75;margin-top:2px;font-weight:600">${m.headerSub}</div>
          </span>
          <span class="pie-acc-arrow" id="pie-mod-arr-mon" style="position:relative;z-index:1;margin-left:8px">▼</span>
        </div>
        <div class="pie-acc-body" id="pie-mod-exp-mon" style="--pie-acc-border:#334155">
          <div style="padding:10px 13px;border-bottom:1px solid #e2e8f0">
            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#d97706;margin-bottom:7px">${m.sinOsteo.title}</div>
            ${mRows(m.sinOsteo.items)}
          </div>
          <div style="padding:10px 13px;border-bottom:1px solid #e2e8f0">
            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#0369a1;margin-bottom:7px">${m.conOsteo.title}</div>
            ${mRows(m.conOsteo.items)}
          </div>
          <div style="padding:10px 12px;border-bottom:1px solid #e2e8f0">
            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#991b1b;margin-bottom:7px">${m.urgente.title}</div>
            ${mRows(m.urgente.items)}
          </div>
          <div style="padding:10px 12px">
            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#065f46;margin-bottom:7px">${m.seguimiento.title}</div>
            ${mRows(m.seguimiento.items)}
          </div>
        </div>
      </div>`;

    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:linear-gradient(160deg,${node.color},${node.gt});padding:14px 15px;color:white;box-shadow:var(--shadow-md);position:relative;overflow:hidden">
        <div style="font-size:15px;font-weight:800;line-height:1.3">${node.title}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px;flex-wrap:wrap">
          <div style="font-size:10.5px;background:rgba(0,0,0,.2);border-radius:5px;padding:3px 8px">${node.setting}</div>
          ${!node.singleCard ? `<button onclick="event.stopPropagation();showTablesPIE(3)" class="ibtn" style="background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.4);color:white;font-size:10px;padding:2px 10px;margin-top:0">Anexo 4</button>` : ''}
        </div>
        <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
      </div>
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
        <div style="background:linear-gradient(160deg,#0891b2,#0369a1);color:white;padding:8px 13px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;position:relative;overflow:hidden">🏥 Cultivos — al menos 1 técnica
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:8px 13px;border:1.5px solid #bae6fd;border-top:none;border-radius:0 0 var(--radius) var(--radius)">${cultHTML}</div>
      </div>
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
        <div style="background:linear-gradient(160deg,#334155,#1e293b);color:white;padding:8px 13px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;display:flex;align-items:center;justify-content:space-between;position:relative;overflow:hidden">
          <span>Microorganismos a cubrir</span>
          <button onclick="event.stopPropagation();showTablesPIE(1)" class="ibtn" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.3);color:white;font-size:10px;padding:2px 9px;vertical-align:middle;position:relative;z-index:1">Anexo 2</button>
          <div style="position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.12) 0%,transparent 100%);pointer-events:none"></div>
        </div>
        <div style="background:white;padding:9px 13px;border:1.5px solid #e2e8f0;border-top:none;border-radius:0 0 var(--radius) var(--radius)">${orgsHTML}</div>
      </div>
      ${cardsWrapper}
      ${monBlock}
      <div class="choices" style="margin-top:4px">
        <button class="btn-back" onclick="pieGoBack()">← Volver</button>
        <button class="btn-back" onclick="pieRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('pie-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapPIE(nodeId);
}

/* ═════════════════════════════════════════════
   PIE TABLES
═══════════════════════════════════════════════ */
function showTablesPIE(idx) {
  document.getElementById('pie-tables-back-btn').onclick = () => showScreen('pie');
  showScreen('pie-tables');
  renderPIETablesUI(idx || 0);
}

function renderPIETablesUI(idx) {
  pie_activeTabIndex = idx;
  document.getElementById('pie-tabs-bar').innerHTML = PIE_TABLES.map((t,i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="pieSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = PIE_TABLES.map((t, i) => {
    let inner = '';

    if (t.type === 'pie_double') {
      const makeList = side =>
        side.rows.map(r => `<div style="font-size:11px;color:#1e293b;padding:4px 0;border-bottom:1px solid #e8f0f7;line-height:1.4">• ${r}</div>`).join('');
      inner = `<div style="padding:10px 12px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div>
            <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;background:${t.left.color};color:white;border-radius:6px;padding:4px 8px;margin-bottom:5px">${t.left.head}</div>
            ${makeList(t.left)}
            <div style="font-size:10px;font-weight:800;color:${t.left.noteColor};margin-top:5px;padding:3px 8px;background:${t.left.color}22;border-radius:5px">${t.left.note}</div>
          </div>
          <div>
            <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;background:${t.right.color};color:white;border-radius:6px;padding:4px 8px;margin-bottom:5px">${t.right.head}</div>
            ${makeList(t.right)}
            <div style="font-size:10px;font-weight:800;color:${t.right.noteColor};margin-top:5px;padding:3px 8px;background:${t.right.color}22;border-radius:5px">${t.right.note}</div>
          </div>
        </div>
      </div>`;
    }

    else if (t.type === 'pie_fr_mdr' || t.type === 'pie_int_dom') {
      inner = `<div style="padding:10px 12px">
        ${t.intro ? `<div style="font-size:11.5px;color:#475569;margin-bottom:8px;line-height:1.4">${t.intro}</div>` : ''}
        ${t.sections.map(s => `
          <div style="background:${s.bg};border-left:3px solid ${s.bc};border-radius:0 6px 6px 0;padding:8px 10px;margin-bottom:7px">
            <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:${s.bc};letter-spacing:.3px;margin-bottom:4px">${s.head}</div>
            ${s.items.map(it=>`<div style="font-size:11px;color:#1e293b;line-height:1.4;margin-bottom:2px">• ${it}</div>`).join('')}
          </div>`).join('')}
      </div>`;
    }

    else if (t.type === 'pie_simple') {
      inner = `<div style="padding:10px 12px">
        ${t.intro ? `<div style="font-size:11.5px;color:#475569;margin-bottom:8px;line-height:1.4">${t.intro}</div>` : ''}
        ${t.items.map(it=>`<div style="font-size:11.5px;color:#1e293b;padding:5px 0;border-bottom:1px solid #e8f0f7;line-height:1.45">• ${it}</div>`).join('')}
      </div>`;
    }

    else if (t.type === 'pie_duracion') {
      inner = `<div style="padding:10px 12px">
        <div style="background:#d1fae5;border-left:3px solid #059669;border-radius:0 6px 6px 0;padding:8px 10px;margin-bottom:10px">
          <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#065f46;letter-spacing:.3px;margin-bottom:3px">${t.sinOsteo.label}</div>
          <div style="font-size:13px;font-weight:800;color:#065f46;margin-bottom:3px">${t.sinOsteo.duration}</div>
          <div style="font-size:11px;color:#047857;line-height:1.4">${t.sinOsteo.note}</div>
        </div>
        <div style="font-size:9.5px;font-weight:800;text-transform:uppercase;color:#334155;letter-spacing:.3px;margin-bottom:5px">Con osteomielitis</div>
        ${t.conOsteo.map(r=>`
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:7px 10px;margin-bottom:5px">
            <div style="font-size:11px;color:#475569;line-height:1.4;margin-bottom:2px">${r.c}</div>
            <div style="font-size:13px;font-weight:800;color:#1e293b">${r.d}</div>
            ${r.note ? `<div style="font-size:10.5px;color:#94a3b8;margin-top:2px">${r.note}</div>` : ''}
          </div>`).join('')}
        <div style="font-size:10.5px;color:#475569;font-style:italic;margin-top:4px">${t.conOsteoNote}</div>
      </div>`;
    }

    return `<div class="table-swipe-card" id="pie-swipe-card-${i}" style="height:auto;min-height:0">
      <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
        <div class="table-swipe-head">${t.title}</div>
        ${inner}
      </div>
    </div>`;
  }).join('');

  const dotsHTML = PIE_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" id="pie-swipe-dot-${i}" onclick="pieSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('pie-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="pie-tables-swipe" style="flex:1;align-items:start">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const container = document.getElementById('pie-tables-swipe');
    const card = document.getElementById('pie-swipe-card-' + idx);
    if (container && card) container.scrollLeft = card.offsetLeft;
    pieScrollTabIntoView(idx);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.intersectionRatio >= 0.6) {
          const j = parseInt(e.target.id.replace('pie-swipe-card-',''));
          pie_activeTabIndex = j;
          document.querySelectorAll('#pie-tabs-bar .tab-btn').forEach((b,k) => b.classList.toggle('active', k===j));
          document.querySelectorAll('[id^="pie-swipe-dot-"]').forEach((d,k) => d.classList.toggle('active', k===j));
          pieScrollTabIntoView(j);
        }
      });
    }, { root: document.getElementById('pie-tables-swipe'), threshold: 0.6 });
    PIE_TABLES.forEach((_,j) => { const c = document.getElementById('pie-swipe-card-'+j); if(c) obs.observe(c); });
  });
}

function pieSwipeToTable(idx) {
  const container = document.getElementById('pie-tables-swipe');
  const card = document.getElementById('pie-swipe-card-' + idx);
  if (container && card) { container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' }); pie_activeTabIndex = idx; }
}

function pieScrollTabIntoView(i) {
  const bar = document.getElementById('pie-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   ARTRITIS SÉPTICA NATIVA AGUDA — NAV/RENDER
═══════════════════════════════════════════════ */
function arGoBack() {
  if (ar_history.length > 0) {
    ar_currentNode = ar_history.pop();
    renderNodeAR(ar_currentNode);
  } else { goHome(); }
}
function arNavigate(nodeId) {
  ar_history.push(ar_currentNode);
  ar_currentNode = nodeId;
  renderNodeAR(nodeId);
}
function arRestart() {
  ar_history = [];
  ar_currentNode = 'ar_start';
  renderNodeAR('ar_start');
}
function arJumpTo(id) {
  if (id === ar_currentNode) return;
  if (AR_JUMP_PATHS[id] !== undefined) {
    ar_history = [...AR_JUMP_PATHS[id]];
    ar_currentNode = id;
    renderNodeAR(id);
  }
}
function toggleMinimapAR() {
  const panel = document.getElementById('ar-minimap-panel');
  const btn   = document.getElementById('ar-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapAR(nodeId) {
  AR_MM_IDS.forEach(id => {
    const rect = document.getElementById('ar-mm-' + id);
    const txt  = document.getElementById('ar-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = ar_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

function renderNodeAR(nodeId) {
  const node = NODES_ARTRITIS[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / AR_TOTAL_STEPS) * 100);
  const fill = document.getElementById('ar-progress-fill');
  const path = document.getElementById('ar-path-txt');
  const sub  = document.getElementById('ar-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (path) path.textContent = ar_history.length > 0 ? `${ar_history.length} paso${ar_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    ar_start: 'Sospecha clínica',
    ar_stability: 'Estabilidad inicial',
    ar_arthro: 'Artrocentesis',
    ar_diagnosis: 'Diagnóstico',
    ar_tx_intro: 'Tratamiento médico-quirúrgico',
    ar_joint_type: 'Tipo de articulación',
    ar_noinst_risk: 'Factores de riesgo',
    ar_noinst_low: 'Sin FR MDR',
    ar_noinst_mdr: 'Con FR MDR',
    ar_inst_recent: 'Instrumentada < 1 mes',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'ar_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#84cc16 0%,#65a30d 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.84);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div class="triangle-nav-wrap" style="padding:8px 0 2px">
          <div class="tri"></div>
        </div>
        <div class="note-box" style="margin-top:0;background:#e0f2fe;border-left:3px solid #0ea5e9;color:#0c4a6e;text-align:center;font-weight:700">${node.traumaText}</div>
        <div class="triangle-nav-wrap" style="padding:8px 0 2px">
          <div class="tri"></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:2px">
          <div style="background:linear-gradient(160deg,#86efac 0%,#4ade80 100%);border-radius:12px;padding:12px 10px;color:#14532d;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente estable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">No inicie ATB hasta tomar cultivos</div>
          </div>
          <div style="background:linear-gradient(160deg,#fde68a 0%,#facc15 100%);border-radius:12px;padding:12px 10px;color:#713f12;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente inestable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">qSOFA ≥ 2</div>
            <div style="font-size:11px;font-weight:700;line-height:1.4;margin-top:6px">Inicie ATB empírico y continúe con el algoritmo diagnóstico</div>
          </div>
        </div>
        <button class="btn-tables" onclick="showTablesAR(0)" style="margin-top:10px">📋 Ver qSOFA</button>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="arNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  } else if (node.type === 'ar_info' && nodeId === 'ar_diagnosis') {
    const clinica = node.sections[0];
    const liquido = node.sections[1];

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
        </div>

        <div style="background:#fef9c3;border:1px solid #fde68a;border-radius:12px;padding:11px 12px">
          <div class="info-section-title" style="border-bottom:none;padding-bottom:0;margin-bottom:6px;color:#854d0e">Clínica y laboratorio</div>
          ${clinica.items.map(i => `<div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px">• ${i}</div>`).join('')}
        </div>

        <div style="display:flex;justify-content:center;padding:6px 0 4px;font-size:22px;font-weight:900;color:#ca8a04">+</div>

        <div style="background:#fde68a;border:1px solid #facc15;border-radius:12px;padding:11px 12px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;flex-wrap:wrap">
            <div class="info-section-title" style="border-bottom:none;padding-bottom:0;margin-bottom:0;color:#854d0e">Líquido Articular</div>
            <button class="btn-tables" onclick="showTablesAR(1)" style="width:auto;min-width:auto;padding:6px 10px;font-size:11px;border-radius:9px;box-shadow:none">📋 Set de punción</button>
          </div>
          <div style="background:rgba(255,255,255,.55);border:1px solid rgba(250,204,21,.7);border-radius:10px;padding:9px 10px">
            ${liquido.items.map(i => `<div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:5px">• ${i}</div>`).join('')}
          </div>
        </div>

        <div style="display:flex;justify-content:center;padding:6px 0 4px;font-size:22px;font-weight:900;color:#ea580c">+</div>

        <div style="background:#fed7aa;border:1px solid #fdba74;border-radius:12px;padding:11px 12px">
          <div class="info-section-title" style="border-bottom:none;padding-bottom:0;margin-bottom:6px;color:#9a3412">Microbiológico</div>
          <div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px">• Hemocultivos (+).</div>
          <div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px">• Gram de líquido articular (+).</div>
          <div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px">• Cultivo de líquido articular (+).</div>
          <div style="margin-top:8px;background:#fee2e2;border:1px solid #fca5a5;border-radius:10px;padding:9px 10px;font-size:12px;font-weight:800;line-height:1.4;color:#991b1b">Gold standard: cultivo positivo de líquido sinovial.</div>
        </div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="arNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>
      <div class="choices"><button class="btn-back" onclick="arGoBack()">← Volver</button></div>`;
  } else if (node.type === 'ar_info') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          ${node.subtitle ? `<div style="font-size:11px;color:rgba(255,255,255,.84);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>` : ''}
        </div>
        ${sectionsHTML}
        ${node.noteLines ? `<div class="note-box" style="margin-top:12px">${node.noteLines.map(line => `<div style="margin-bottom:4px">• ${line}</div>`).join('')}</div>` : ''}
        ${node.actions ? `<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">${node.actions.map(a => `<button class="btn-tables" onclick="showTablesAR(${a.tableIndex})">📋 ${a.label}</button>`).join('')}</div>` : ''}
      </div>
      ${node.next ? `
        <div class="triangle-nav-wrap">
          <button class="triangle-nav-btn" onclick="arNavigate('${node.next}')">
            <div class="tri"></div>
            <span>Siguiente</span>
          </button>
        </div>
        <div class="choices"><button class="btn-back" onclick="arGoBack()">← Volver</button></div>
      ` : `
        <div class="choices"><button class="btn-back" onclick="arGoBack()">← Volver</button></div>
      `}`;
  } else if (node.type === 'ar_choice' || node.type === 'ar_route') {
    html = `
      <div class="step-card">
        ${node.badgeText ? `<div style="display:flex;justify-content:center"><div class="step-badge" style="background:#e0f2fe;color:#0c4a6e;font-size:12px;padding:6px 12px;letter-spacing:.2px;white-space:nowrap;text-align:center">${node.badgeText}</div></div>` : `<h2>${node.title}</h2>`}
        ${node.note ? `<div class="note-box" style="margin-top:12px">${node.note}</div>` : (node.subtitle ? `<p class="sub" style="margin-top:10px">${node.subtitle}</p>` : '')}
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="arNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#ea580c' ? '🚨' : opt.color === '#65a30d' ? '🛡️' : opt.color === '#f59e0b' ? '🦿' : '🩺'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>` : ''}
              ${opt.tag ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>
        `).join('')}
        ${typeof node.tableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesAR(${node.tableIndex})">📋 FR MDR y mala evolución</button>` : ''}
        <button class="btn-back" onclick="arGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'ar_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor};color:${node.headerTextColor || '#fff'}">
        <h2 style="color:${node.headerTextColor || '#fff'}">${node.title}</h2>
        ${node.subtitle ? `<p style="color:${node.headerTextColor || '#fff'};opacity:.92">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
          ${nodeId === 'ar_noinst_mdr' && r.label === 'Cobertura para gram positivos / FR SAMR' ? `<div style="display:flex;justify-content:center;align-items:center;font-size:26px;font-weight:900;color:#65a30d;margin:-2px 0 6px">+</div>` : ''}
        `).join('')}
        ${node.notes ? `
          <div style="background:${nodeId === 'ar_inst_recent' ? '#fb923c' : '#f8fafc'};border:1px solid ${nodeId === 'ar_inst_recent' ? '#ea580c' : '#e2e8f0'};border-radius:12px;padding:11px 12px;margin-top:10px">
            ${node.notes.map(item => `<div style="font-size:12px;color:${nodeId === 'ar_inst_recent' ? '#431407' : '#334155'};line-height:1.45;margin-bottom:5px;font-weight:${nodeId === 'ar_inst_recent' ? '700' : '400'}">• ${item}</div>`).join('')}
          </div>
        ` : ''}
        ${node.durationLabel ? `<div style="margin-top:10px;background:${node.durationBg};color:${node.durationText};border-radius:10px;padding:10px 12px;font-size:12px;font-weight:800;text-align:center">${node.durationLabel}</div>` : ''}
        ${node.footLabel ? `<div style="margin-top:10px;background:${node.footBg};color:${node.footText};border-radius:10px;padding:10px 12px;font-size:11.5px;font-weight:700;text-align:center;line-height:1.4">${node.footLabel}</div>` : ''}
        <div class="divider"></div>
        ${node.actionButtons ? node.actionButtons.map((b, idx) => `<button class="btn-tables" onclick="showTablesAR(${b.tableIndex})" style="${idx ? 'margin-top:8px' : ''}">📋 ${b.label}</button>`).join('') : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="arGoBack()">← Volver</button>
        <button class="btn-back" onclick="arRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('ar-flow-body');
  body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapAR(nodeId);
}

function showTablesAR(idx) {
  document.getElementById('ar-tables-back-btn').onclick = () => showScreen('artritis');
  showScreen('artritis-tables');
  renderARTablesUI(idx || 0);
}

function renderARTablesUI(idx) {
  ar_activeTabIndex = idx;
  document.getElementById('ar-tabs-bar').innerHTML = ARTRITIS_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="arSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = ARTRITIS_TABLES.map((t, i) => {
    if (t.id === 'ar_qsofa') {
      const q = t.sections[0];
      return `
        <div class="table-swipe-card" id="ar-swipe-card-${i}">
          <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
            <div class="table-swipe-head">${t.title}</div>
            <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
              <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${q.head}</div>
              <table class="tbl" style="margin-top:4px">
                <thead>
                  <tr>
                    ${q.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${q.table.rows.map(r => `
                    <tr>
                      ${r.map((cell, idx2) => `<td style="font-size:11.5px;${idx2===1 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>`;
    }

    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
      </div>
    `).join('');
    const scrollable = t.id === 'ar_micro';
    return `
      <div class="table-swipe-card" id="ar-swipe-card-${i}">
        <div class="table-swipe-inner" style="${scrollable ? 'overflow-y:auto;max-height:calc(100vh - 200px);-webkit-overflow-scrolling:touch' : 'height:auto;min-height:0;overflow-y:visible'}">
          <div class="table-swipe-head">${t.title}</div>
          ${sectionsHTML}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = ARTRITIS_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="arSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('ar-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="ar-tables-swipe">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('ar-tables-swipe');
    if (!scroller) return;
    const cardWidth = scroller.clientWidth;
    scroller.scrollLeft = idx * cardWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== ar_activeTabIndex) {
          ar_activeTabIndex = active;
          document.querySelectorAll('#ar-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-artritis-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          arScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function arSwipeToTable(i) {
  ar_activeTabIndex = i;
  document.querySelectorAll('#ar-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-artritis-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('ar-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  arScrollTabIntoView(i);
}

function arScrollTabIntoView(i) {
  const bar = document.getElementById('ar-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   OSTEOMIELITIS VINCULADA A FRACTURA — NAV/RENDER
═══════════════════════════════════════════════ */
function ofGoBack() {
  if (of_history.length > 0) {
    of_currentNode = of_history.pop();
    renderNodeOF(of_currentNode);
  } else { goHome(); }
}
function ofNavigate(nodeId) {
  of_history.push(of_currentNode);
  of_currentNode = nodeId;
  renderNodeOF(nodeId);
}
function ofRestart() {
  of_history = [];
  of_currentNode = 'of_start';
  renderNodeOF('of_start');
}
function ofJumpTo(id) {
  if (id === of_currentNode) return;
  if (OF_JUMP_PATHS[id] !== undefined) {
    of_history = [...OF_JUMP_PATHS[id]];
    of_currentNode = id;
    renderNodeOF(id);
  }
}
function toggleMinimapOF() {
  const panel = document.getElementById('of-minimap-panel');
  const btn   = document.getElementById('of-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapOF(nodeId) {
  OF_MM_IDS.forEach(id => {
    const rect = document.getElementById('of-mm-' + id);
    const txt  = document.getElementById('of-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = of_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

function renderNodeOF(nodeId) {
  const node = NODES_OSTEO_F[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / OF_TOTAL_STEPS) * 100);
  const fill = document.getElementById('of-progress-fill');
  const path = document.getElementById('of-path-txt');
  const sub  = document.getElementById('of-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (path) path.textContent = of_history.length > 0 ? `${of_history.length} paso${of_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    of_start: 'Sospecha clínica',
    of_time: 'Tiempo de evolución',
    of_early: 'Fractura temprana',
    of_late_route: 'Fractura tardía',
    of_late_no_implant: 'Sin osteosíntesis',
    of_late_implant_route: 'Con osteosíntesis',
    of_late_consolidated: 'Consolidada',
    of_late_nonconsolidated: 'No consolidada',
    of_late_loose: 'Implante suelto o flojo',
    of_late_firm: 'Implante firme',
    of_tx_intro: 'Inicio del tratamiento',
    of_tx_route: 'Tratamiento empírico',
    of_tx_low: 'Sin FR MDR',
    of_tx_mdr: 'Con FR MDR',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'of_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section" style="${
        s.h === 'Clínica'
          ? 'background:#dcfce7;border:1px solid #86efac;border-radius:12px;padding:11px 12px;'
          : s.h === 'Solicitar Paraclínica'
            ? 'background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;'
            : ''
      }">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.84);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div class="triangle-nav-wrap" style="padding:8px 0 2px">
          <div class="tri"></div>
        </div>
        <div class="note-box" style="margin-top:0;background:#e0f2fe;border-left:3px solid #0ea5e9;color:#0c4a6e;text-align:center;font-weight:700">${node.traumaText}</div>
        <div class="triangle-nav-wrap" style="padding:8px 0 2px">
          <div class="tri"></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:2px">
          <div style="background:linear-gradient(160deg,#86efac 0%,#4ade80 100%);border-radius:12px;padding:12px 10px;color:#14532d;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente clínicamente estable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">No inicie ATB hasta tomar cultivos</div>
          </div>
          <div style="background:linear-gradient(160deg,#fde68a 0%,#facc15 100%);border-radius:12px;padding:12px 10px;color:#713f12;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente inestable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">qSOFA ≥ 2</div>
            <div style="font-size:11px;line-height:1.35;margin-top:6px;font-weight:700">Inicie ATB empírico y continúe con el algoritmo diagnóstico</div>
          </div>
        </div>
        <button class="btn-tables" onclick="showTablesOF(0)" style="margin-top:10px">📋 Ver qSOFA</button>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="ofNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  } else if (node.type === 'of_info') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section" style="${
        s.h === 'Conducta'
          ? 'background:#dcfce7;border:1px solid #86efac;border-radius:12px;padding:11px 12px;'
          : s.h === 'Tratamiento antimicrobiano sistémico' || s.h === 'Inicio'
            ? 'background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;'
            : ''
      }">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          ${node.subtitle ? `<div style="font-size:${nodeId === 'of_early' ? '13px' : '11px'};font-weight:${nodeId === 'of_early' ? '800' : '500'};color:rgba(255,255,255,.92);margin-top:4px;text-transform:uppercase;letter-spacing:${nodeId === 'of_early' ? '.9px' : '.8px'}">${node.subtitle}</div>` : ''}
        </div>
        ${sectionsHTML}
        ${node.noteLines ? `<div class="note-box" style="margin-top:12px">${node.noteLines.map(line => `<div style="margin-bottom:4px">• ${line}</div>`).join('')}</div>` : ''}
        ${node.actions ? `<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">${node.actions.map(a => `<button class="btn-tables" onclick="showTablesOF(${a.tableIndex})">📋 ${a.label}</button>`).join('')}</div>` : ''}
      </div>
      ${node.next ? `
        <div class="triangle-nav-wrap">
          <button class="triangle-nav-btn" onclick="ofNavigate('${node.next}')">
            <div class="tri"></div>
            <span>Siguiente</span>
          </button>
        </div>
        <div class="choices"><button class="btn-back" onclick="ofGoBack()">← Volver</button></div>
      ` : `
        <div class="choices"><button class="btn-back" onclick="ofGoBack()">← Volver</button></div>
      `}`;
  } else if (node.type === 'of_route') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p class="sub" style="margin-top:10px">${node.subtitle}</p>` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="ofNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : opt.color === '#16a34a' ? '🦴' : opt.color === '#0284c7' ? '🔧' : '🩺'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.tag ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-back" onclick="ofGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'of_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor};color:${node.headerTextColor || '#fff'}">
        <h2 style="color:${node.headerTextColor || '#fff'}">${node.title}</h2>
        ${node.subtitle ? `<p style="color:${node.headerTextColor || '#fff'};opacity:.92">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}
        ${node.notes ? (
          nodeId === 'of_tx_mdr'
            ? `
              <div style="background:#fb923c;border:1px solid #ea580c;border-radius:12px;padding:11px 12px;margin-top:10px">
                <div style="font-size:12px;color:#431407;line-height:1.45;font-weight:700">• ${node.notes[0]}</div>
              </div>
              ${node.notes.length > 1 ? `
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
                  ${node.notes.slice(1).map(item => `<div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
                </div>
              ` : ''}
            `
            : `
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
                ${node.notes.map(item => `<div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
              </div>
            `
        ) : ''}
        <div class="divider"></div>
        ${node.actionButtons ? node.actionButtons.map((b, idx) => `<button class="btn-tables" onclick="showTablesOF(${b.tableIndex})" style="${idx ? 'margin-top:8px' : ''}">📋 ${b.label}</button>`).join('') : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ofGoBack()">← Volver</button>
        <button class="btn-back" onclick="ofRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('of-flow-body');
  body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapOF(nodeId);
}

function showTablesOF(idx) {
  document.getElementById('of-tables-back-btn').onclick = () => showScreen('osteo_f');
  showScreen('osteo_f-tables');
  renderOFTablesUI(idx || 0);
}

function renderOFTablesUI(idx) {
  of_activeTabIndex = idx;
  document.getElementById('of-tabs-bar').innerHTML = OSTEO_F_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="ofSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = OSTEO_F_TABLES.map((t, i) => {
    if (t.id === 'of_qsofa') {
      const q = t.sections[0];
      return `
        <div class="table-swipe-card" id="of-swipe-card-${i}">
          <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
            <div class="table-swipe-head">${t.title}</div>
            <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
              <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${q.head}</div>
              <table class="tbl" style="margin-top:4px">
                <thead>
                  <tr>
                    ${q.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${q.table.rows.map(r => `
                    <tr>
                      ${r.map((cell, idx2) => `<td style="font-size:11.5px;${idx2===1 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>`;
    }

    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
      </div>
    `).join('');

    return `
      <div class="table-swipe-card" id="of-swipe-card-${i}">
        <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
          <div class="table-swipe-head">${t.title}</div>
          ${sectionsHTML}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = OSTEO_F_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="ofSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('of-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="of-tables-swipe">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('of-tables-swipe');
    if (!scroller) return;
    const cardWidth = scroller.clientWidth;
    scroller.scrollLeft = idx * cardWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== of_activeTabIndex) {
          of_activeTabIndex = active;
          document.querySelectorAll('#of-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-osteo_f-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          ofScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function ofSwipeToTable(i) {
  of_activeTabIndex = i;
  document.querySelectorAll('#of-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-osteo_f-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('of-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  ofScrollTabIntoView(i);
}

function ofScrollTabIntoView(i) {
  const bar = document.getElementById('of-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   OSTEOMIELITIS VERTEBRAL — NAV/RENDER
═══════════════════════════════════════════════ */
function ovGoBack() {
  if (ov_history.length > 0) {
    ov_currentNode = ov_history.pop();
    renderNodeOV(ov_currentNode);
  }
}
function ovNavigate(nodeId) {
  ov_history.push(ov_currentNode);
  ov_currentNode = nodeId;
  renderNodeOV(nodeId);
}
function ovRestart() {
  ov_history = [];
  ov_currentNode = 'ov_start';
  renderNodeOV('ov_start');
}
function ovJumpTo(id) {
  if (id === ov_currentNode) return;
  if (OV_JUMP_PATHS[id] !== undefined) {
    ov_history = [...OV_JUMP_PATHS[id]];
    ov_currentNode = id;
    renderNodeOV(id);
  }
}
function toggleMinimapOV() {
  const panel = document.getElementById('ov-minimap-panel');
  const btn = document.getElementById('ov-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapOV(nodeId) {
  OV_MM_IDS.forEach(id => {
    const rect = document.getElementById('ov-mm-' + id);
    const txt = document.getElementById('ov-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = ov_history.includes(id);
    rect.setAttribute('fill', isCurrent ? '#f59e0b' : isVisited ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.1)');
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill', isCurrent ? '#1e293b' : isVisited ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.45)');
  });
}
function renderNodeOV(nodeId) {
  const node = NODES_OSTEO_V[nodeId];
  if (!node) return;
  const pct = Math.round(((node.step - 1) / OV_TOTAL_STEPS) * 100);
  const fill = document.getElementById('ov-progress-fill');
  const path = document.getElementById('ov-path-txt');
  const sub = document.getElementById('ov-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (path) path.textContent = ov_history.length > 0 ? `${ov_history.length} paso${ov_history.length > 1 ? 's' : ''} atrás` : '';
  const sublabels = {
    ov_start: 'Sospecha clínica',
    ov_imaging: 'Imagen y punción',
    ov_diagnosis: 'Diagnóstico',
    ov_tx_intro: 'Tratamiento',
    ov_noinst_risk: 'No instrumentado',
    ov_inst_risk: 'Posterior a instrumentación',
    ov_noinst_low: 'Sin FR MDR',
    ov_noinst_mdr: 'Con FR MDR',
    ov_inst_low: 'Sin FR MDR',
    ov_inst_mdr: 'Con FR MDR',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';
  if (node.type === 'ov_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section" style="${
        s.h === 'Clínica'
          ? 'background:#dcfce7;border:1px solid #86efac;border-radius:12px;padding:11px 12px;'
          : 'background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;'
      }">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>`).join('');
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.84);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div class="triangle-nav-wrap" style="padding:8px 0 2px"><div class="tri"></div></div>
        <div class="note-box" style="margin-top:0;background:#e0f2fe;border-left:3px solid #0ea5e9;color:#0c4a6e;text-align:center;font-weight:700">${node.traumaText}</div>
        <div class="triangle-nav-wrap" style="padding:8px 0 2px"><div class="tri"></div></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:2px">
          <div style="background:linear-gradient(160deg,#86efac 0%,#4ade80 100%);border-radius:12px;padding:12px 10px;color:#14532d;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente estable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">No inicie ATB</div>
          </div>
          <div style="background:linear-gradient(160deg,#fde68a 0%,#facc15 100%);border-radius:12px;padding:12px 10px;color:#713f12;box-shadow:var(--shadow-md);text-align:center">
            <div style="font-size:12px;font-weight:800;line-height:1.3">Paciente inestable</div>
            <div style="font-size:11px;line-height:1.4;margin-top:5px">qSOFA ≥ 2</div>
            <div style="font-size:11px;line-height:1.35;margin-top:6px;font-weight:700">Inicie ATB y continúe con el algoritmo diagnóstico</div>
          </div>
        </div>
        <button class="btn-tables" onclick="showTablesOV(0)" style="margin-top:10px">📋 Ver qSOFA</button>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="ovNavigate('${node.next}')"><div class="tri"></div><span>Siguiente</span></button>
      </div>`;
  } else if (node.type === 'ov_info') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section" style="${
        s.h === 'Conducta'
          ? 'background:#dcfce7;border:1px solid #86efac;border-radius:12px;padding:11px 12px;'
          : 'background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;'
      }">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
          <div class="info-section-title" style="margin-bottom:0">${s.h}</div>
          ${typeof s.buttonTableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesOV(${s.buttonTableIndex})" style="width:auto;min-width:auto;padding:6px 10px;font-size:11px;border-radius:9px;box-shadow:none">📋 ${s.buttonLabel}</button>` : ''}
        </div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>`).join('');
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          ${node.subtitle ? `<div style="font-size:11px;color:rgba(255,255,255,.84);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>` : ''}
        </div>
        ${sectionsHTML}
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="ovNavigate('${node.next}')"><div class="tri"></div><span>Siguiente</span></button>
      </div>
      <div class="choices"><button class="btn-back" onclick="ovGoBack()">← Volver</button></div>`;
  } else if (node.type === 'ov_diag') {
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
        </div>
        <div class="info-section" style="background:#fef9c3;border:1px solid #fde68a;border-radius:12px;padding:11px 12px">
          <div class="info-section-title">Clínica e Imagen</div>
          <div style="font-size:12px;color:#334155;line-height:1.45">${node.clinica}</div>
        </div>
        <div style="text-align:center;font-weight:800;color:#64748b;margin:8px 0 4px">+/-</div>
        <div class="info-section" style="background:#fef3c7;border:1px solid #fcd34d;border-radius:12px;padding:11px 12px">
          <div class="info-section-title">Hemocultivos</div>
          ${node.hc.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
        </div>
        <div class="info-section" style="background:#ffedd5;border:1px solid #fdba74;border-radius:12px;padding:11px 12px;margin-top:10px">
          <div class="info-section-title">Biopsia</div>
          ${node.biopsia.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
        </div>
        <div class="info-section" style="background:#fee2e2;border:1px solid #fca5a5;border-radius:12px;padding:11px 12px;margin-top:10px">
          <div class="info-section-title">Histopatología</div>
          ${node.histo.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
        </div>
        ${node.noteLines ? `<div class="note-box" style="margin-top:12px">${node.noteLines.map(line => `<div style="margin-bottom:4px">• ${line}</div>`).join('')}</div>` : ''}
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="ovNavigate('${node.next}')"><div class="tri"></div><span>Siguiente</span></button>
      </div>
      <div class="choices"><button class="btn-back" onclick="ovGoBack()">← Volver</button></div>`;
  } else if (node.type === 'ov_route') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p class="sub" style="margin-top:10px">${node.subtitle}</p>` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="ovNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : opt.color === '#65a30d' ? '🧪' : opt.color === '#f59e0b' ? '🦠' : '🩺'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.tag ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
        <button class="btn-back" onclick="ovGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'ov_tx_intro') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:12px;padding:12px 13px;margin-top:10px">
          ${node.introLines.map(line => `<div style="font-size:12px;color:#713f12;line-height:1.45;margin-bottom:5px">• ${line}</div>`).join('')}
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="ovNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#f59e0b' ? '🦠' : '🩺'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.tag ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
        <button class="btn-back" onclick="ovGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'ov_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor};color:${node.headerTextColor || '#fff'}">
        <h2 style="color:${node.headerTextColor || '#fff'}">${node.title}</h2>
        ${node.subtitle ? `<p style="color:${node.headerTextColor || '#fff'};opacity:.92">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>`).join('')}
        ${node.notes ? (
          node.notes[0] === 'Shock séptico:'
            ? `
              <div style="background:#fecaca;border:1px solid #ef4444;border-radius:12px;padding:11px 12px;margin-top:10px">
                <div style="font-size:12px;color:#7f1d1d;line-height:1.45;font-weight:800;margin-bottom:5px">• ${node.notes[0]}</div>
                <div class="drug-line"><span class="drug-name">${node.notes[1].split(' IV')[0]}</span>${node.notes[1].slice(node.notes[1].indexOf(' IV'))}</div>
                <div class="drug-line">${node.notes[2]}</div>
                <div class="drug-line"><span class="drug-name">${node.notes[3].split(' IV')[0]}</span>${node.notes[3].slice(node.notes[3].indexOf(' IV'))}</div>
              </div>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
                ${node.notes.slice(4).map(item => `<div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
              </div>`
            : `
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
                ${node.notes.map(item => `<div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
              </div>`
        ) : ''}
        ${node.durationLabel ? `<div style="background:${node.durationBg};color:${node.durationText};border-radius:12px;padding:10px 12px;margin-top:10px;font-size:12px;font-weight:800;text-align:center">${node.durationLabel}</div>` : ''}
        <div class="divider"></div>
        ${node.actionButtons ? node.actionButtons.map((b, idx) => `<button class="btn-tables" onclick="showTablesOV(${b.tableIndex})" style="${idx ? 'margin-top:8px' : ''}">📋 ${b.label}</button>`).join('') : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ovGoBack()">← Volver</button>
        <button class="btn-back" onclick="ovRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }
  const body = document.getElementById('ov-flow-body');
  body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapOV(nodeId);
}
function showTablesOV(idx) {
  document.getElementById('ov-tables-back-btn').onclick = () => showScreen('osteo_v');
  showScreen('osteo_v-tables');
  renderOVTablesUI(idx || 0);
}
function showImagesOV() {
  document.getElementById('ov-images-back-btn').onclick = () => showScreen('osteo_v');
  showScreen('osteo_v-images');
}

// ── Image Lightbox with pinch-to-zoom ──────────────────────────────────────
let _lbScale = 1, _lbPosX = 0, _lbPosY = 0;
let _lbStartDist = 0, _lbStartScale = 1;
let _lbLastX = 0, _lbLastY = 0;
let _lbMidX = 0, _lbMidY = 0;
let _lbListenersAdded = false;

function _lbDist(t) {
  const dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}
function _lbApply() {
  document.getElementById('lightbox-img').style.transform =
    `translate(${_lbPosX}px, ${_lbPosY}px) scale(${_lbScale})`;
}
function _lbReset() {
  _lbScale = 1; _lbPosX = 0; _lbPosY = 0; _lbApply();
}

function openImageLightbox(src) {
  const modal = document.getElementById('modal-image-lightbox');
  const img   = document.getElementById('lightbox-img');
  const cont  = document.getElementById('lightbox-container');
  img.src = src;
  _lbReset();
  modal.style.display = 'flex';

  if (!_lbListenersAdded) {
    _lbListenersAdded = true;

    cont.addEventListener('touchstart', e => {
      if (e.touches.length === 2) {
        _lbStartDist  = _lbDist(e.touches);
        _lbStartScale = _lbScale;
        _lbMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        _lbMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      } else if (e.touches.length === 1) {
        _lbLastX = e.touches[0].clientX;
        _lbLastY = e.touches[0].clientY;
      }
      e.preventDefault();
    }, { passive: false });

    cont.addEventListener('touchmove', e => {
      if (e.touches.length === 2) {
        const dist  = _lbDist(e.touches);
        _lbScale    = Math.min(Math.max(_lbStartScale * (dist / _lbStartDist), 1), 5);
        _lbApply();
      } else if (e.touches.length === 1 && _lbScale > 1) {
        _lbPosX += e.touches[0].clientX - _lbLastX;
        _lbPosY += e.touches[0].clientY - _lbLastY;
        _lbLastX = e.touches[0].clientX;
        _lbLastY = e.touches[0].clientY;
        _lbApply();
      }
      e.preventDefault();
    }, { passive: false });

    cont.addEventListener('touchend', e => {
      if (_lbScale <= 1.05) _lbReset();
    });
  }
}
function closeImageLightbox() {
  document.getElementById('modal-image-lightbox').style.display = 'none';
  _lbReset();
}
function renderOVTablesUI(idx) {
  ov_activeTabIndex = idx;
  document.getElementById('ov-tabs-bar').innerHTML = OSTEO_V_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="ovSwipeToTable(${i})">${t.label}</button>`
  ).join('');
  const cardsHTML = OSTEO_V_TABLES.map((t, i) => {
    if (t.id === 'ov_qsofa') {
      const q = t.sections[0];
      return `<div class="table-swipe-card" id="ov-swipe-card-${i}">
        <div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible">
          <div class="table-swipe-head">${t.title}</div>
          <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
            <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${q.head}</div>
            <table class="tbl" style="margin-top:4px">
              <thead><tr>${q.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}</tr></thead>
              <tbody>${q.table.rows.map(r => `<tr>${r.map((cell, idx2) => `<td style="font-size:11.5px;${idx2===1 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
      </div>`;
    }
    if (t.type === 'ov_micro_table') {
      return `<div class="table-swipe-card" id="ov-swipe-card-${i}">
        <div class="table-swipe-inner" style="overflow-y:auto;max-height:calc(100vh - 200px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head">${t.title}</div>
          <div style="padding:10px 10px">
            <table class="tbl" style="font-size:11px">
              <thead><tr>${t.heads.map(h => `<th style="font-size:10.5px">${h}</th>`).join('')}</tr></thead>
              <tbody>${t.rows.map(r => `<tr>${r.map(cell => `<td style="white-space:pre-line;vertical-align:top">${cell || ''}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
          </div>
        </div>
      </div>`;
    }
    const sectionsHTML = t.sections.map(s => `<div style="padding:10px 11px;border-bottom:1px solid #e8f0f7"><div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>${s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}</div>`).join('');
    return `<div class="table-swipe-card" id="ov-swipe-card-${i}"><div class="table-swipe-inner" style="height:auto;min-height:0;overflow-y:visible"><div class="table-swipe-head">${t.title}</div>${sectionsHTML}</div></div>`;
  }).join('');
  const dotsHTML = OSTEO_V_TABLES.map((_,i) => `<div class="swipe-dot${i===idx?' active':''}" onclick="ovSwipeToTable(${i})"></div>`).join('');
  document.getElementById('ov-tables-panels').innerHTML = `<div class="tables-swipe-container" id="ov-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;
  requestAnimationFrame(() => {
    const scroller = document.getElementById('ov-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== ov_activeTabIndex) {
          ov_activeTabIndex = active;
          document.querySelectorAll('#ov-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-osteo_v-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          ovScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}
function ovSwipeToTable(i) {
  ov_activeTabIndex = i;
  document.querySelectorAll('#ov-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-osteo_v-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('ov-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  ovScrollTabIntoView(i);
}
function ovScrollTabIntoView(i) {
  const bar = document.getElementById('ov-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   MENINGOENCEFALITIS AGUDA COMUNITARIA — MEAS
═══════════════════════════════════════════════ */
function meniGoBack() {
  if (meni_history.length > 0) {
    meni_currentNode = meni_history.pop();
    renderNodeMENI(meni_currentNode);
  } else { goHome(); }
}
function meniNavigate(nodeId) {
  meni_history.push(meni_currentNode);
  meni_currentNode = nodeId;
  renderNodeMENI(nodeId);
}
function meniRestart() {
  meni_history = [];
  meni_currentNode = 'meni_start';
  renderNodeMENI('meni_start');
}
function meniTogglePanel(panelId) {
  const el = document.getElementById(panelId);
  if (!el) return;
  const isOpen = el.style.display === 'block';
  ['meni-lcr-rapid-panel','meni-lcr-chem-panel'].forEach(id => {
    const node = document.getElementById(id);
    if (node) node.style.display = 'none';
  });
  el.style.display = isOpen ? 'none' : 'block';
}
function meniJumpTo(id) {
  if (id === meni_currentNode) return;
  if (MENI_JUMP_PATHS[id] !== undefined) {
    meni_history = [...MENI_JUMP_PATHS[id]];
    meni_currentNode = id;
    renderNodeMENI(id);
  }
}
function toggleMinimapMENI() {
  const panel = document.getElementById('meni-minimap-panel');
  const btn   = document.getElementById('meni-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapMENI(nodeId) {
  MENI_MM_IDS.forEach(id => {
    const rect = document.getElementById('meni-mm-' + id);
    const txt  = document.getElementById('meni-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = meni_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited  ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited  ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
  const rapidRect = document.getElementById('meni-mm-rapid');
  const rapidTxt  = document.getElementById('meni-mmt-rapid');
  const chemRect  = document.getElementById('meni-mm-chem');
  const chemTxt   = document.getElementById('meni-mmt-chem');
  if (rapidRect) {
    rapidRect.setAttribute('fill', 'rgba(255,255,255,.08)');
    rapidRect.setAttribute('stroke', 'rgba(255,255,255,.14)');
    rapidRect.setAttribute('stroke-width', '1');
  }
  if (rapidTxt)  rapidTxt.setAttribute('fill', 'rgba(255,255,255,.45)');
  if (chemRect) {
    chemRect.setAttribute('fill', 'rgba(255,255,255,.08)');
    chemRect.setAttribute('stroke', 'rgba(255,255,255,.14)');
    chemRect.setAttribute('stroke-width', '1');
  }
  if (chemTxt)   chemTxt.setAttribute('fill', 'rgba(255,255,255,.45)');
}

/* ═════════════════════════════════════════════
   MEAS — RENDER
═══════════════════════════════════════════════ */
function renderNodeMENI(nodeId) {
  const node = NODES_MENI[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / MENI_TOTAL_STEPS) * 100);
  const fill = document.getElementById('meni-progress-fill');
  const ptxt = document.getElementById('meni-progress-txt');
  const path = document.getElementById('meni-path-txt');
  const sub  = document.getElementById('meni-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = meni_history.length > 0 ? `${meni_history.length} paso${meni_history.length > 1 ? 's' : ''} atrás` : '';
  const sublabels = {
    meni_start: 'Sospecha inicial',
    meni_pl:    'Contraindicación para PL',
    meni_ct:    'TC de cráneo',
    meni_lcr:   'Interpretación del LCR',
    meni_wait:  'Conducta',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'meni_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => i.trim().startsWith('<')
          ? `<div style="font-size:12.5px;line-height:1.4;color:var(--gray-700);padding:4px 0">${i}</div>`
          : `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`
        ).join('')}
      </div>
    `).join('');
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#991b1b 0%,#b91c1c 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.82);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:11px 12px;margin-top:10px">
          <div style="font-size:11px;font-weight:800;color:#9a3412;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Iniciar tratamiento empírico</div>
          ${node.regimens.map(item => `<div style="font-size:12px;color:#7c2d12;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesMENI(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0">📋 ${b.label}</button>`).join('')}</div>
        </div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="meniNavigate('${node.next}')"><div class="tri"></div><span>Siguiente</span></button>
      </div>`;

  } else if (node.type === 'meni_question') {
    html = `
      <div class="step-card meni-warm-card">
        <h2>${node.title}</h2>
        <div class="note-box" style="margin-top:12px;background:#fffdf5;border-left:4px solid #fbbf24">
          <div class="meni-criteria-grid">
            ${node.checklist.map(item => `<div style="font-size:12px;color:#334155;line-height:1.4;padding:4px 0">• ${item}</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:${opt.color === '#dc2626' ? 'linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%)' : 'linear-gradient(180deg,#f0fdf4 0%,#dcfce7 100%)'}" onclick="meniNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '⚠️' : '🧪'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
        <button class="btn-back" onclick="meniGoBack()">← Volver</button>
      </div>`;

  } else if (node.type === 'meni_route' && nodeId === 'meni_ct') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <div style="display:grid;gap:12px;margin-top:12px">
          <div style="background:linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%);border:1px solid #fdba74;border-radius:16px;padding:14px;box-shadow:var(--shadow-md)">
            <div style="font-size:12px;font-weight:900;color:#9a3412;text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px">TC cráneo con contraindicación de PL</div>
            <div style="font-size:15px;line-height:1.35;color:#7c2d12;font-weight:700">Mantener tratamiento antimicrobiano + dexametasona y esperar evolución</div>
          </div>
          <div style="background:linear-gradient(180deg,#ecfccb 0%,#dcfce7 100%);border:1px solid #86efac;border-radius:16px;padding:14px;box-shadow:var(--shadow-md)">
            <div style="font-size:12px;font-weight:900;color:#166534;text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px">TC de cráneo sin contraindicación</div>
            <div style="font-size:15px;line-height:1.35;color:#166534;font-weight:700;margin-bottom:8px">Continuar el algoritmo con punción lumbar</div>
            <div style="font-size:14px;line-height:1.35;color:#166534;font-weight:700">Ajustar los tratamientos antimicrobianos según los hallazgos citoquímicos y microbiológicos</div>
          </div>
        </div>
      </div>
      <div class="choices">
        <button class="btn-back" onclick="meniGoBack()">← Volver</button>
      </div>`;

  } else if (node.type === 'meni_route') {
    html = `
      <div class="step-card"><h2>${node.title}</h2><p class="sub">${node.subtitle}</p></div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="meniNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '⛔' : '➡️'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
        <button class="btn-back" onclick="meniGoBack()">← Volver</button>
      </div>`;

  } else if (node.type === 'meni_lcr') {
    html = `
      <div class="step-card" style="padding:14px">
        <div style="background:linear-gradient(135deg,#0f766e 0%,#115e59 100%);border-radius:14px;padding:14px 14px 12px;box-shadow:0 10px 24px rgba(15,118,110,.18)">
          <h2 style="color:white;margin:0">${node.title}</h2>
          <p style="font-size:12px;line-height:1.45;color:rgba(255,255,255,.88);margin:6px 0 0">${node.subtitle}</p>
        </div>
        <div style="margin-top:10px;background:linear-gradient(180deg,#f0fdfa 0%,#ecfeff 100%);border:1px solid #99f6e4;border-radius:14px;padding:12px 13px;box-shadow:var(--shadow-md)">
          <div style="font-size:11px;font-weight:900;color:#0f766e;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Solicite</div>
          ${node.lumbarItems.map(item => `<div style="font-size:12.5px;color:#134e4a;line-height:1.5;margin-bottom:5px;font-weight:600">• ${item}</div>`).join('')}
        </div>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesMENI(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0">📋 ${b.label}</button>`).join('')}</div>
      </div>
      <div class="choices">
        <button class="origin-choice" style="border-color:#ea580c;background:white" onclick="meniTogglePanel('meni-lcr-rapid-panel')">
          <div class="origin-choice-icon" style="background:#ea580c">1</div>
          <div class="origin-choice-body">
            <div class="origin-choice-label" style="color:#ea580c">Tratamiento guiado por resultados microbiológicos rápidos del LCR</div>
          </div>
          <div class="origin-choice-arrow" style="color:#ea580c">›</div>
        </button>
        <div id="meni-lcr-rapid-panel" style="display:none;margin-top:4px">
          <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#fff;overflow:hidden">
            <div style="background:#f6c8a7;padding:16px 10px;text-align:center;min-height:150px;display:flex;align-items:center;justify-content:center">
              <div style="font-size:12px;line-height:1.35;color:#111827">Directo con bacterias: guiar tratamiento ATB según tinción de gram</div>
            </div>
            <div style="background:#f6c8a7;padding:16px 10px;text-align:center;min-height:150px;display:flex;align-items:center;justify-content:center">
              <div style="font-size:12px;line-height:1.35;color:#111827">Ag pneumo. positivo: tratamiento para <em>S. pneumoniae</em></div>
            </div>
            <div style="background:#f6c8a7;padding:16px 10px;text-align:center;min-height:150px;display:flex;align-items:center;justify-content:center">
              <div style="font-size:12px;line-height:1.35;color:#111827">Panel PCR positivo VHS o VVZ: tratamiento antiviral dirigido</div>
            </div>
          </div>
          <div style="display:flex;justify-content:center;margin:10px 0;color:#93c5fd;font-size:28px;line-height:1">▼</div>
          <div style="background:#c7d8f5;padding:18px 14px;text-align:center">
            <div style="font-size:12px;line-height:1.4;color:#111827">Directo sin bacterias, Ag pneumococcico negativo y panel de VHS y VVZ negativo, solicite panel multiparamétrico-ME y Ag <em>Cryptococcus</em> de muestra testigo</div>
          </div>
          <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px">
            <button class="btn-tables" onclick="showTablesMENI(2)" style="width:auto;min-width:auto">📋 Tratamiento específico</button>
            <button class="btn-tables" onclick="showTablesMENI(1)" style="width:auto;min-width:auto">📋 Tabla LCR</button>
          </div>
        </div>
        <button class="origin-choice" style="border-color:#64748b;background:white" onclick="meniTogglePanel('meni-lcr-chem-panel')">
          <div class="origin-choice-icon" style="background:#64748b">2</div>
          <div class="origin-choice-body">
            <div class="origin-choice-label" style="color:#475569">Tratamiento guiado por características citoquímicas del LCR</div>
          </div>
          <div class="origin-choice-arrow" style="color:#475569">›</div>
        </button>
        <div id="meni-lcr-chem-panel" style="display:none;margin-top:4px">
          <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:#fff;overflow:hidden;align-items:stretch">
            <div style="display:flex;flex-direction:column">
              <div style="background:#bcb8b8;padding:16px 10px;text-align:center;min-height:182px;display:flex;align-items:center;justify-content:center">
                <div style="font-size:12px;line-height:1.4;color:#111827">Proteínas: 1-5 g/L<br>Leucocitos &gt; 500<br>Predominio PMN (80%)<br>Glucosa &lt; 0.4 g/L<br>Lactato &gt;30 mg/dL<br>Posible etiología<br><strong>BACTERIANA</strong></div>
              </div>
              <div style="display:flex;justify-content:center;margin:10px 0;color:#93c5fd;font-size:28px;line-height:1">▼</div>
              <div style="width:100%;min-height:108px;background:#bcb8b8;padding:16px 10px;text-align:center;display:flex;align-items:center;justify-content:center">
                <div style="font-size:12px;line-height:1.4;color:#111827">Ceftriaxona 2 gr iv c/12hs +<br>Dexametasona 0.15 mg/kg<br>iv c/6hs</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column">
              <div style="background:#c7d8f5;padding:16px 10px;text-align:center;min-height:182px;display:flex;align-items:center;justify-content:center">
                <div style="font-size:12px;line-height:1.4;color:#111827">Proteínas &lt; 2 g/L<br>Leucocitos 10-1000<br>Predominio linfocitos<br>Glucosa &gt; 0.45 g/L<br>Lactato &lt; 30 mg/dL<br>Posible etiología<br><strong>VIRAL</strong></div>
              </div>
              <div style="display:flex;justify-content:center;margin:10px 0;color:#93c5fd;font-size:28px;line-height:1">▼</div>
              <div style="width:100%;min-height:108px;background:#c7d8f5;padding:16px 10px;text-align:center;display:flex;align-items:center;justify-content:center">
                <div style="font-size:12px;line-height:1.4;color:#111827">Aciclovir 10 mg/kg c/8hs +<br>Ceftriaxona 2 gr iv c/12hs +<br>Dexametasona 0.15 mg/kg iv<br>c/6hs</div>
              </div>
            </div>
          </div>
          <div style="margin-top:12px;background:#dbeafe;border:1px solid #93c5fd;border-radius:14px;padding:14px 12px;text-align:center;box-shadow:var(--shadow-md)">
            <div style="font-size:13px;line-height:1.4;color:#1e3a8a;font-weight:700">Ante resultados negativos y LCR de posible etiología viral derivar muestra al DLSP para evaluar otras etiologías</div>
          </div>
          <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px">
            <button class="btn-tables" onclick="showTablesMENI(1)" style="width:auto;min-width:auto">📋 Citoquímico LCR</button>
            <button class="btn-tables" onclick="showTablesMENI(2)" style="width:auto;min-width:auto">📋 Tratamiento específico</button>
          </div>
        </div>
        <button class="btn-back" onclick="meniGoBack()">← Volver</button>
      </div>`;

  } else if (node.type === 'meni_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.regimens.map(r => `<div class="regimen-block" style="background:${r.bg}"><div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}</div>`).join('')}
        ${node.notes ? `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">${node.notes.map(item => `<div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px"><span>• ${typeof item === 'string' ? item : item.text}</span>${typeof item === 'object' && typeof item.tableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesMENI(${item.tableIndex})" style="display:inline-flex;width:auto;min-width:auto;padding:5px 8px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-left:6px;vertical-align:middle">📋 ${item.tableLabel}</button>` : ''}</div>`).join('')}</div>` : ''}
        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesMENI(2)">📋 Tratamiento específico</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="meniGoBack()">← Volver</button>
        <button class="btn-back" onclick="meniRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('meni-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapMENI(nodeId);
}

/* ═════════════════════════════════════════════
   MEAS TABLES
═══════════════════════════════════════════════ */
function showTablesMENI(idx) {
  document.getElementById('meni-tables-back-btn').onclick = () => showScreen('meni');
  showScreen('meni-tables');
  renderMENITablesUI(idx || 0);
}
function renderMENITablesUI(idx) {
  meni_activeTabIndex = idx;
  document.getElementById('meni-tabs-bar').innerHTML = MENI_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="meniSwipeToTable(${i})">${t.label}</button>`
  ).join('');
  const cardsHTML = MENI_TABLES.map((t, i) => {
    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.table ? `
          <table class="tbl" style="margin-top:4px">
            <thead><tr>${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}</tr></thead>
            <tbody>${s.table.rows.map(r => `<tr>${r.map(cell => `<td style="font-size:11.5px;color:#334155">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
          ${s.table.note ? `<div class="tbl-note" style="margin:8px 0 0">${s.table.note}</div>` : ''}
        ` : s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
      </div>`).join('');
    return `<div class="table-swipe-card" id="meni-swipe-card-${i}">
      <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
        <div class="table-swipe-head">${t.title}</div>
        ${sectionsHTML}
      </div>
    </div>`;
  }).join('');
  const dotsHTML = MENI_TABLES.map((_, i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="meniSwipeToTable(${i})"></div>`
  ).join('');
  document.getElementById('meni-tables-panels').innerHTML =
    `<div class="tables-swipe-container" id="meni-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;
  requestAnimationFrame(() => {
    const scroller = document.getElementById('meni-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== meni_activeTabIndex) {
          meni_activeTabIndex = active;
          document.querySelectorAll('#meni-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === active));
          document.querySelectorAll('#screen-meni-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === active));
          meniScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}
function meniSwipeToTable(i) {
  meni_activeTabIndex = i;
  document.querySelectorAll('#meni-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === i));
  document.querySelectorAll('#screen-meni-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  const scroller = document.getElementById('meni-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  meniScrollTabIntoView(i);
}
function meniScrollTabIntoView(i) {
  const bar = document.getElementById('meni-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* ═════════════════════════════════════════════
   CVC — NAV / MINIMAP / RENDER
═══════════════════════════════════════════════ */
function cvcGoBack() {
  if (cvc_history.length > 0) {
    cvc_currentNode = cvc_history.pop();
    renderNodeCVC(cvc_currentNode);
  } else {
    goHome();
  }
}
function cvcNavigate(nodeId) {
  cvc_history.push(cvc_currentNode);
  cvc_currentNode = nodeId;
  renderNodeCVC(nodeId);
}
function cvcRestart() {
  cvc_history = [];
  cvc_currentNode = 'cvc_start';
  renderNodeCVC('cvc_start');
}
function cvcJumpTo(id) {
  if (id === cvc_currentNode) return;
  if (CVC_JUMP_PATHS[id] !== undefined) {
    cvc_history = [...CVC_JUMP_PATHS[id]];
    cvc_currentNode = id;
    renderNodeCVC(id);
  }
}
function toggleMinimapCVC() {
  const panel = document.getElementById('cvc-minimap-panel');
  const btn = document.getElementById('cvc-minimap-arrow-btn');
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle('open');
  btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapCVC(nodeId) {
  CVC_MM_IDS.forEach(id => {
    const rect = document.getElementById('cvc-mm-' + id);
    const txt = document.getElementById('cvc-mmt-' + id);
    if (!rect || !txt) return;
    const isCurrent = id === nodeId;
    const isVisited = cvc_history.includes(id);
    rect.setAttribute('fill', isCurrent ? '#f59e0b' : isVisited ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.12)');
    txt.setAttribute('fill', isCurrent ? '#111827' : isVisited ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.55)');
    txt.setAttribute('font-weight', isCurrent ? '800' : '600');
  });
}
function renderNodeCVC(nodeId) {
  const node = NODES_CVC[nodeId];
  if (!node) return;

  const pct = Math.round(((node.step - 1) / CVC_TOTAL_STEPS) * 100);
  const fill = document.getElementById('cvc-progress-fill');
  const ptxt = document.getElementById('cvc-progress-txt');
  const path = document.getElementById('cvc-path-txt');
  const sub = document.getElementById('cvc-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = cvc_history.length > 0 ? `${cvc_history.length} paso${cvc_history.length > 1 ? 's' : ''} atrás` : '';
  const sublabels = {
    cvc_start: 'Evaluación inicial',
    cvc_local_route: 'Sin elementos sistémicos',
    cvc_exit_site: 'Orificio de salida',
    cvc_tunnel_route: 'Tunelitis',
    cvc_tunnel_negative: 'Evolución local',
    cvc_systemic_route: 'Con elementos sistémicos',
    cvc_systemic_noflux: 'Sin elementos fluxivos',
    cvc_systemic_flux: 'Con elementos fluxivos',
    cvc_results: 'Resultados microbiológicos',
    cvc_results_negative: 'Resultados negativos',
    cvc_colonization: 'Colonización',
    cvc_secondary: 'Colonización secundaria',
    cvc_bac: 'BAC',
  };
  if (sub) sub.textContent = sublabels[nodeId] || 'Tratamiento';

  let html = '';

  if (node.type === 'cvc_start') {
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11.2px;color:rgba(255,255,255,.88);margin-top:4px;line-height:1.45">${node.subtitle}</div>
        </div>
        ${node.noteHtml ? `<div style="margin-top:12px;background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px;font-size:12px;color:#9a3412;line-height:1.5;font-weight:700">${node.noteHtml}</div>` : ''}
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:12px">
          ${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesCVC(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 10px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="cvcNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : '💉'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
      </div>`;
  } else if (node.type === 'cvc_question') {
    html = `
      <div class="step-card">
        <div style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%);border-radius:14px;padding:16px 14px 14px;box-shadow:0 10px 24px rgba(13,58,82,.18)">
          <h2 style="color:white;margin:0;text-align:center">${node.title}</h2>
          ${node.subtitle ? `<div style="font-size:11.3px;color:rgba(255,255,255,.86);margin-top:6px;line-height:1.45;text-align:center">${node.subtitle}</div>` : ''}
        </div>
        ${node.noteHtml ? `<div style="margin-top:12px;background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px">${node.noteHtml}</div>` : ''}
        ${node.actionButtons ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesCVC(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => {
          const bg = opt.color === '#dc2626'
            ? 'linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%)'
            : opt.color === '#65a30d'
              ? 'linear-gradient(180deg,#f7fee7 0%,#ecfccb 100%)'
              : opt.color === '#1d4ed8'
                ? 'linear-gradient(180deg,#eff6ff 0%,#dbeafe 100%)'
                : 'linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%)';
          const icon = opt.color === '#dc2626'
            ? '🚨'
            : opt.color === '#65a30d'
              ? '✅'
              : opt.color === '#1d4ed8'
                ? '🩸'
                : '💉';
          if (opt.static) {
            return `
              <div style="border:1.5px solid ${opt.color};background:${bg};border-radius:18px;padding:14px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 8px 18px rgba(101,163,13,.10)">
                <div class="origin-choice-icon" style="background:${opt.color}">${icon}</div>
                <div class="origin-choice-body">
                  <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
                  ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>` : ''}
                </div>
              </div>`;
          }
          return `
            <div>
              <button class="origin-choice" style="border-color:${opt.color};background:${bg}" onclick="cvcNavigate('${opt.next}')">
                <div class="origin-choice-icon" style="background:${opt.color}">${icon}</div>
                <div class="origin-choice-body" style="${!opt.desc ? 'display:flex;align-items:center;min-height:44px;' : ''}">
                  <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
                  ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>` : ''}
                </div>
                <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
              </button>
              ${opt.belowFlow ? `
                <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1;margin-top:2px">▼</div>
                <div style="background:linear-gradient(180deg,#fef3c7 0%,#fde68a 100%);border:1.5px solid #f59e0b;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 18px rgba(245,158,11,.12)">
                  <div style="font-size:12.2px;line-height:1.42;color:#78350f;font-weight:800">${opt.belowFlow.text}</div>
                </div>` : ''}
            </div>`;
        }).join('')}
        ${node.dualFlow ? `
          <div style="display:grid;gap:8px;margin-top:6px">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:stretch">
              <div style="background:linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%);border:1.5px solid ${node.dualFlow.leftColor};border-radius:14px;padding:14px 12px;text-align:center;box-shadow:0 8px 18px rgba(245,158,11,.10)">
                <div style="font-size:12.4px;line-height:1.38;color:#b45309;font-weight:800">${node.dualFlow.leftTitle}</div>
              </div>
              <div style="background:linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%);border:1.5px solid ${node.dualFlow.rightColor};border-radius:14px;padding:14px 12px;text-align:center;box-shadow:0 8px 18px rgba(220,38,38,.10)">
                <div style="font-size:12.4px;line-height:1.38;color:#dc2626;font-weight:800">${node.dualFlow.rightTitle}</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
            </div>
            <button onclick="cvcNavigate('${node.dualFlow.buttonNext}')" style="appearance:none;border:2px solid #111827;border-radius:14px;padding:14px 14px;text-align:center;background:white;box-shadow:0 8px 18px rgba(17,24,39,.08);cursor:pointer">
              <div style="font-size:12.4px;line-height:1.4;color:#111827;font-weight:800">${node.dualFlow.buttonLabel}</div>
            </button>
          </div>` : ''}
        <button class="btn-back" onclick="cvcGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'cvc_info') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.85;margin-top:6px">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.followUpDiagram ? `
          <div style="display:grid;gap:8px">
            <div style="display:grid;grid-template-columns:1fr 2fr;gap:10px;align-items:stretch">
              <div style="background:white;border:1.5px solid #f59e0b;border-radius:14px;padding:14px 12px;text-align:center;box-shadow:0 8px 18px rgba(245,158,11,.10);display:flex;align-items:center;justify-content:center;min-height:108px">
                <div style="font-size:12px;line-height:1.42;color:#1f2937;font-weight:700">${node.followUpDiagram.topLeft}</div>
              </div>
              <div style="background:white;border:1.5px solid #f59e0b;border-radius:14px;padding:14px 16px;text-align:center;box-shadow:0 8px 18px rgba(245,158,11,.10);display:flex;align-items:center;justify-content:center;min-height:108px">
                <div style="font-size:12.2px;line-height:1.42;color:#92400e;font-weight:800">${node.followUpDiagram.topRight}</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 2fr;gap:10px;align-items:center">
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
              <div style="position:relative;height:18px;color:#eab308;font-size:18px;font-weight:900;line-height:1">
                <span style="position:absolute;left:25%;top:0">▼</span>
                <span style="position:absolute;left:78%;top:0">▼</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:2fr 1fr;gap:10px;align-items:stretch">
              <div style="background:linear-gradient(180deg,#fffbeb 0%,#fde68a 100%);border:1.5px solid #f59e0b;border-radius:14px;padding:16px 16px;text-align:center;box-shadow:0 8px 18px rgba(245,158,11,.12);display:flex;align-items:center;justify-content:center;min-height:132px">
                <div style="font-size:12.1px;line-height:1.42;color:#78350f;font-weight:800">${node.followUpDiagram.bottomLeft}</div>
              </div>
              <button onclick="cvcNavigate('${node.followUpDiagram.bottomRightNext}')" style="appearance:none;background:white;border:2px solid #111827;border-radius:14px;padding:16px 12px;text-align:center;box-shadow:0 8px 18px rgba(17,24,39,.08);display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;min-height:132px;cursor:pointer">
                <div style="font-size:12px;line-height:1.4;color:#111827;font-weight:800">${node.followUpDiagram.bottomRight}</div>
                <div style="font-size:20px;line-height:1;color:#111827;font-weight:900">›</div>
              </button>
            </div>
            <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
            <div style="background:white;border:2px solid #111827;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 18px rgba(17,24,39,.08)">
              <div style="font-size:12.2px;line-height:1.42;color:#111827;font-weight:800">${node.followUpDiagram.finalBottom}</div>
            </div>
          </div>` : ''}
        ${node.bacCompare ? `
          <div style="display:grid;gap:8px">
            <div style="background:#eff6ff;border:1.5px solid #38bdf8;border-radius:14px;padding:10px 12px;text-align:center;box-shadow:0 8px 18px rgba(56,189,248,.12)">
              <div style="font-size:12.1px;line-height:1.4;color:#0f172a;font-weight:800">${node.bacCompare.topBox}</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
              <div style="display:flex;justify-content:center;align-items:center;color:#f59e0b;font-size:18px;font-weight:900;line-height:1">▼</div>
              <div style="display:flex;justify-content:center;align-items:center;color:#ef4444;font-size:18px;font-weight:900;line-height:1">▼</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #f59e0b;border-bottom:none;border-radius:14px 14px 0 0;overflow:hidden">
              <div style="background:#ffedd5;padding:12px 10px;border-right:1px solid #fdba74">
                ${node.bacCompare.leftItems.map(item => `<div style="font-size:12px;line-height:1.38;color:#7c2d12;font-weight:700;margin-bottom:6px">• ${item}</div>`).join('')}
              </div>
              <div style="background:#fee2e2;padding:12px 10px">
                ${node.bacCompare.rightItems.map(item => `<div style="font-size:12px;line-height:1.38;color:#991b1b;font-weight:700;margin-bottom:6px">• ${item}</div>`).join('')}
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #f59e0b;border-radius:0 0 14px 14px;overflow:hidden;box-shadow:0 8px 18px rgba(245,158,11,.10)">
              <div style="background:linear-gradient(180deg,#fdba74 0%,#fb923c 100%);padding:12px 10px;text-align:center;border-right:1px solid #f97316">
                <div style="font-size:12.1px;line-height:1.38;color:#431407;font-weight:800">${node.bacCompare.leftBottom}</div>
              </div>
              <div style="background:linear-gradient(180deg,#f87171 0%,#ef4444 100%);padding:12px 10px;text-align:center">
                <div style="font-size:12.1px;line-height:1.38;color:white;font-weight:800">${node.bacCompare.rightBottom}</div>
              </div>
            </div>
            <button onclick="showTablesCVC(${node.bacCompare.finalButtonTableIndex})" style="appearance:none;border:2px solid #111827;border-radius:14px;padding:12px 12px;text-align:center;background:white;box-shadow:0 8px 18px rgba(17,24,39,.08);cursor:pointer">
              <div style="font-size:12.2px;line-height:1.42;color:#111827;font-weight:800">${node.bacCompare.finalButtonLabel}</div>
            </button>
          </div>` : ''}
        ${(node.blocks || []).map(block => {
          const tone = block.tone === 'green'
            ? { bg:'#ecfccb', color:'#3f6212' }
            : block.tone === 'teal'
              ? { bg:'#ccfbf1', color:'#115e59' }
            : { bg:'#ffedd5', color:'#9a3412' };
          return `<div class="regimen-block" style="background:${tone.bg}">
            <div class="regimen-label" style="color:${tone.color}">${block.title}</div>
            ${block.lines.map(line => `<div class="drug-line" style="color:${tone.color}">${line}</div>`).join('')}
          </div>`;
        }).join('')}
        ${node.nextButton ? `<div style="display:flex;justify-content:center;margin-top:10px"><button class="triangle-nav-btn" onclick="cvcNavigate('${node.nextButton.next}')"><div class="tri"></div><span>${node.nextButton.label}</span></button></div>` : ''}
        ${node.actions ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actions.map(b => `<button class="btn-tables" onclick="showTablesCVC(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="cvcGoBack()">← Volver</button>
        <button class="btn-back" onclick="cvcRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  } else if (node.type === 'cvc_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.85;margin-top:6px">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.summary ? `<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;margin-bottom:10px;font-size:12.5px;color:#334155;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        ${node.criteria ? `<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:11px 12px;margin-bottom:10px"><div style="font-size:11px;font-weight:900;color:#9a3412;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Cualquiera de los siguientes</div>${node.criteria.map(item => `<div style="font-size:12px;color:#7c2d12;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}</div>` : ''}
        ${node.flowStack ? `<div style="display:grid;gap:8px">${node.flowStack.map((item, idx) => {
          const isGreen = item.bg === 'green';
          const bg = isGreen ? 'linear-gradient(180deg,#d9f99d 0%,#bef264 100%)' : 'white';
          const border = isGreen ? '#84cc16' : '#d1d5db';
          const color = isGreen ? '#365314' : '#1f2937';
          return `${idx ? `<div style="display:flex;justify-content:center;align-items:center;color:#84cc16;font-size:18px;font-weight:900;line-height:1">▼</div>` : ''}<div style="background:${bg};border:1.5px solid ${border};border-radius:14px;padding:14px 12px;text-align:center;box-shadow:0 8px 18px rgba(132,204,22,.10)"><div style="font-size:12.7px;line-height:1.45;color:${color};font-weight:700">${item.text}</div></div>`;
        }).join('')}</div>` : ''}
        ${node.tunnelFlow ? `
          <div style="display:grid;gap:8px">
            <div class="regimen-block" style="background:#fff7ed">
              <div class="regimen-label" style="color:#9a3412">Solicitar</div>
              <div class="drug-line">${node.tunnelFlow.request}</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #f59e0b;border-radius:14px;overflow:hidden;box-shadow:0 8px 18px rgba(245,158,11,.10)">
              <div style="background:white;padding:12px 10px;text-align:center;border-right:1px solid #fed7aa"><div style="font-size:12px;line-height:1.4;color:#1f2937;font-weight:700">${node.tunnelFlow.decisions[0]}</div></div>
              <div style="background:white;padding:12px 10px;text-align:center"><div style="font-size:12px;line-height:1.4;color:#1f2937;font-weight:700">${node.tunnelFlow.decisions[1]}</div></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
              <div style="display:flex;justify-content:center;align-items:center;color:#eab308;font-size:18px;font-weight:900;line-height:1">▼</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #eab308;border-radius:14px;overflow:hidden;box-shadow:0 8px 18px rgba(234,179,8,.12)">
              <div style="background:linear-gradient(180deg,#fef9c3 0%,#fde68a 100%);padding:12px 10px;text-align:center;border-right:1px solid #fcd34d"><div style="font-size:12px;line-height:1.4;color:#713f12;font-weight:700">${node.tunnelFlow.treatments[0]}</div></div>
              <div style="background:linear-gradient(180deg,#fef9c3 0%,#fde68a 100%);padding:12px 10px;text-align:center"><div style="font-size:12px;line-height:1.4;color:#713f12;font-weight:700">${node.tunnelFlow.treatments[1]}</div></div>
            </div>
          </div>` : ''}
        ${(node.regimens || []).map(r => `<div class="regimen-block" style="background:${r.bg}"><div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}</div>`).join('')}
        ${node.plainNote ? `<div style="margin-top:10px;background:linear-gradient(180deg,#fef3c7 0%,#fde68a 100%);border:1px solid #f59e0b;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 20px rgba(245,158,11,.12)"><div style="font-size:11px;font-weight:900;color:#92400e;text-transform:uppercase;letter-spacing:.45px;margin-bottom:4px">Duración</div><div style="font-size:13px;line-height:1.4;color:#78350f;font-weight:800">${node.plainNote}</div></div>` : ''}
        ${node.careNote ? `<div style="margin-top:12px;background:linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%);border:1px solid #fda4af;border-radius:14px;padding:13px 12px;text-align:center;box-shadow:var(--shadow-md)"><div style="font-size:11px;font-weight:900;color:#9f1239;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Conducta clave</div><div style="font-size:13px;line-height:1.45;color:#881337;font-weight:700">${node.careNote}</div></div>` : ''}
        ${node.actions ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actions.map(b => `<button class="btn-tables" onclick="showTablesCVC(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        ${node.options ? node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="cvcNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : opt.color === '#65a30d' ? '✅' : '💉'}</div>
            <div class="origin-choice-body" style="${!opt.desc ? 'display:flex;align-items:center;min-height:44px;' : ''}">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('') : ''}
        <button class="btn-back" onclick="cvcGoBack()">← Volver</button>
        <button class="btn-back" onclick="cvcRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('cvc-flow-body');
  if (body) body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapCVC(nodeId);
}

/* ═════════════════════════════════════════════
   CVC TABLES
═══════════════════════════════════════════════ */
function showTablesCVC(idx) {
  document.getElementById('cvc-tables-back-btn').onclick = () => showScreen('cvc');
  showScreen('cvc-tables');
  renderCVCTablesUI(idx || 0);
}
function renderCVCTablesUI(idx) {
  cvc_activeTabIndex = idx;
  document.getElementById('cvc-tabs-bar').innerHTML = CVC_TABLES.map((t, i) => `<button class="tab-btn${i===idx?' active':''}" onclick="cvcSwipeToTable(${i})">${t.label}</button>`).join('');
  const cardsHTML = CVC_TABLES.map((t, i) => {
    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.table ? `
          <table class="tbl" style="margin-top:4px">
            <thead><tr>${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}</tr></thead>
            <tbody>${s.table.rows.map(r => `<tr>${r.map(cell => `<td style="font-size:11.3px;color:#334155;white-space:pre-wrap;line-height:1.4">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        ` : s.items.map(item => {
          const raw = typeof item === 'string' && item.trim().startsWith('<');
          return raw
            ? `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">${item}</div>`
            : `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">• ${item}</div>`;
        }).join('')}
      </div>`).join('');
    return `<div class="table-swipe-card" id="cvc-swipe-card-${i}">
      <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
        <div class="table-swipe-head">${t.title}</div>
        ${sectionsHTML}
      </div>
    </div>`;
  }).join('');
  const dotsHTML = CVC_TABLES.map((_,i) => `<div class="swipe-dot${i===idx?' active':''}" onclick="cvcSwipeToTable(${i})"></div>`).join('');
  document.getElementById('cvc-tables-panels').innerHTML = `<div class="tables-swipe-container" id="cvc-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;
  requestAnimationFrame(() => {
    const scroller = document.getElementById('cvc-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== cvc_activeTabIndex) {
          cvc_activeTabIndex = active;
          document.querySelectorAll('#cvc-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-cvc-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          cvcScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}
function cvcSwipeToTable(i) {
  cvc_activeTabIndex = i;
  document.querySelectorAll('#cvc-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-cvc-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('cvc-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  cvcScrollTabIntoView(i);
}
function cvcScrollTabIntoView(i) {
  const bar = document.getElementById('cvc-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   DCEI — NAV / MINIMAP / RENDER
═══════════════════════════════════════════════ */
function dceiGoBack() {
  if (dcei_history.length > 0) {
    dcei_currentNode = dcei_history.pop();
    renderNodeDCEI(dcei_currentNode);
  } else {
    goHome();
  }
}
function dceiNavigate(nodeId) {
  dcei_history.push(dcei_currentNode);
  dcei_currentNode = nodeId;
  renderNodeDCEI(nodeId);
}
function dceiRestart() {
  dcei_history = [];
  dcei_currentNode = 'dcei_start';
  renderNodeDCEI('dcei_start');
}
function dceiJumpTo(id) {
  if (id === dcei_currentNode) return;
  if (DCEI_JUMP_PATHS[id] !== undefined) {
    dcei_history = [...DCEI_JUMP_PATHS[id]];
    dcei_currentNode = id;
    renderNodeDCEI(id);
  }
}
function toggleMinimapDCEI() {
  const panel = document.getElementById('dcei-minimap-panel');
  const btn = document.getElementById('dcei-minimap-arrow-btn');
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle('open');
  btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapDCEI(nodeId) {
  DCEI_MM_IDS.forEach(id => {
    const rect = document.getElementById('dcei-mm-' + id);
    const txt = document.getElementById('dcei-mmt-' + id);
    if (!rect || !txt) return;
    const isCurrent = id === nodeId;
    const isVisited = dcei_history.includes(id);
    rect.setAttribute('fill', isCurrent ? '#f59e0b' : isVisited ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.12)');
    txt.setAttribute('fill', isCurrent ? '#111827' : isVisited ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.55)');
    txt.setAttribute('font-weight', isCurrent ? '800' : '600');
  });
}
function renderNodeDCEI(nodeId) {
  const node = NODES_DCEI[nodeId];
  if (!node) return;

  const pct = Math.round(((node.step - 1) / DCEI_TOTAL_STEPS) * 100);
  const fill = document.getElementById('dcei-progress-fill');
  const ptxt = document.getElementById('dcei-progress-txt');
  const path = document.getElementById('dcei-path-txt');
  const sub = document.getElementById('dcei-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = dcei_history.length > 0 ? `${dcei_history.length} paso${dcei_history.length > 1 ? 's' : ''} atrás` : '';
  const sublabels = {
    dcei_start: 'Evaluación inicial',
    dcei_local_route: 'Sospecha de infección del DCEI',
    dcei_superficial: 'Manejo conservador',
    dcei_superficial_done: 'Evolución favorable',
    dcei_systemic_workup: 'Estudio y retiro del dispositivo',
    dcei_pocket: 'Infección del bolsillo',
    dcei_systemic: 'Infección sistémica',
    dcei_bacteremia_route: 'Bacteriemia y DCEI',
    dcei_bact_low: 'Baja probabilidad',
    dcei_bact_very_low: 'Muy baja probabilidad',
    dcei_bact_workup: 'Mayor probabilidad',
  };
  if (sub) sub.textContent = sublabels[nodeId] || 'Tratamiento';

  let html = '';

  if (node.type === 'dcei_start') {
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11.2px;color:rgba(255,255,255,.88);margin-top:4px;line-height:1.45">${node.subtitle}</div>
        </div>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:12px">
          ${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesDCEI(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 10px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="dceiNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#1d4ed8' ? '🩸' : '⚡'}</div>
            <div class="origin-choice-body" style="${!opt.desc ? 'display:flex;align-items:center;min-height:44px;' : ''}">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
      </div>`;
  } else if (node.type === 'dcei_question') {
    html = `
      <div class="step-card">
        <div style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%);border-radius:14px;padding:16px 14px 14px;box-shadow:0 10px 24px rgba(13,58,82,.18)">
          <h2 style="color:white;margin:0;text-align:center">${node.title}</h2>
          ${node.subtitle ? `<div style="font-size:11.3px;color:rgba(255,255,255,.86);margin-top:6px;line-height:1.45;text-align:center">${node.subtitle}</div>` : ''}
        </div>
        ${node.noteHtml ? `<div style="margin-top:12px;background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px">${node.noteHtml}</div>` : ''}
        ${node.branchFlow ? `
          <div style="display:grid;gap:8px;margin-top:12px">
            ${node.branchFlow.top.map((item, idx) => `${idx ? `<div style="display:flex;justify-content:center;align-items:center;color:#16a34a;font-size:18px;font-weight:900;line-height:1">↓</div>` : ''}<div style="background:${idx === 0 ? 'linear-gradient(180deg,#f7fee7 0%,#ecfccb 100%)' : 'white'};border:1.5px solid #84cc16;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 20px rgba(132,204,22,.10)"><div style="font-size:12.3px;line-height:1.45;color:#3f6212;font-weight:${idx === 0 ? '800' : '700'}">${item}</div></div>`).join('')}
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-top:2px">
              <div style="flex:1;display:grid;gap:8px">
                <div style="display:flex;justify-content:center;align-items:center;color:#16a34a;font-size:18px;font-weight:900;line-height:1">↓</div>
                <div style="background:white;border:1.5px solid #84cc16;border-radius:14px;padding:12px 10px;text-align:center;box-shadow:0 8px 20px rgba(132,204,22,.10);min-height:62px;display:flex;align-items:center;justify-content:center"><div style="font-size:12px;line-height:1.4;color:#3f6212;font-weight:700">${node.branchFlow.left}</div></div>
                <div style="display:flex;justify-content:center;align-items:center;color:#16a34a;font-size:18px;font-weight:900;line-height:1">↓</div>
              </div>
              <div style="flex:1;display:grid;gap:8px">
                <div style="display:flex;justify-content:center;align-items:center;color:#d97706;font-size:18px;font-weight:900;line-height:1">↓</div>
                <button style="background:linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%);border:1.5px solid #f59e0b;border-radius:14px;padding:12px 34px 12px 10px;text-align:center;box-shadow:0 8px 20px rgba(245,158,11,.10);min-height:62px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:inherit;position:relative" onclick="dceiNavigate('${node.branchFlow.right.next}')">
                  <div style="font-size:12px;line-height:1.4;color:#b45309;font-weight:700">${node.branchFlow.right.title}</div>
                  <div style="position:absolute;right:11px;top:50%;transform:translateY(-50%);font-size:16px;line-height:1;color:#d97706;font-weight:900">›</div>
                </button>
              </div>
            </div>
            <div style="background:linear-gradient(180deg,#ecfccb 0%,#dcfce7 100%);border:1.5px solid #84cc16;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 20px rgba(132,204,22,.10)"><div style="font-size:12.3px;line-height:1.45;color:#3f6212;font-weight:800">${node.branchFlow.bottom}</div></div>
          </div>` : ''}
        ${node.actionButtons ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesDCEI(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => {
          const bg = opt.color === '#dc2626'
            ? 'linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%)'
            : opt.color === '#65a30d'
              ? 'linear-gradient(180deg,#f7fee7 0%,#ecfccb 100%)'
              : 'linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%)';
          const icon = opt.color === '#dc2626'
            ? '🚨'
            : opt.color === '#65a30d'
              ? '✅'
              : opt.color === '#1d4ed8'
                ? '🩸'
                : '⚡';
          return `
            <button class="origin-choice" style="border-color:${opt.color};background:${bg}" onclick="dceiNavigate('${opt.next}')">
              <div class="origin-choice-icon" style="background:${opt.color}">${icon}</div>
              <div class="origin-choice-body">
                <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
                <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
              </div>
              <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
            </button>`;
        }).join('')}
        <button class="btn-back" onclick="dceiGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'dcei_info') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.85;margin-top:6px">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.summary ? `<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;margin-bottom:10px;font-size:12.5px;color:#334155;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        ${(node.blocks || []).map(block => {
          const tone = block.tone === 'green'
            ? { bg:'#ecfccb', color:'#3f6212' }
            : { bg:'#ffedd5', color:'#9a3412' };
          return `<div class="regimen-block" style="background:${tone.bg}">
            <div class="regimen-label" style="color:${tone.color}">${block.title}</div>
            ${block.lines.map(line => `<div class="drug-line" style="color:${tone.color}">${line}</div>`).join('')}
          </div>`;
        }).join('')}
        ${node.nextButton ? `<div style="display:flex;justify-content:center;margin-top:10px"><button class="triangle-nav-btn" onclick="dceiNavigate('${node.nextButton.next}')"><div class="tri"></div><span>${node.nextButton.label}</span></button></div>` : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="dceiGoBack()">← Volver</button>
        <button class="btn-back" onclick="dceiRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  } else if (node.type === 'dcei_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        ${node.subtitle ? `<p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.85;margin-top:6px">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        ${node.summary ? `<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;margin-bottom:10px;font-size:12.5px;color:#334155;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        ${node.criteria ? `<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:11px 12px;margin-bottom:10px"><div style="font-size:11px;font-weight:900;color:#9a3412;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Cualquiera de los siguientes</div>${node.criteria.map(item => `<div style="font-size:12px;color:#7c2d12;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}</div>` : ''}
        ${node.regimens.map(r => `<div class="regimen-block" style="background:${r.bg}"><div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}</div>`).join('')}
        ${node.plainNote ? `<div style="margin-top:10px;background:linear-gradient(180deg,#fef3c7 0%,#fde68a 100%);border:1px solid #f59e0b;border-radius:14px;padding:12px 12px;text-align:center;box-shadow:0 8px 20px rgba(245,158,11,.12)"><div style="font-size:11px;font-weight:900;color:#92400e;text-transform:uppercase;letter-spacing:.45px;margin-bottom:4px">Duración</div><div style="font-size:13px;line-height:1.4;color:#78350f;font-weight:800">${node.plainNote}</div></div>` : ''}
        ${node.careNote ? `<div style="margin-top:12px;background:linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%);border:1px solid #fda4af;border-radius:14px;padding:13px 12px;text-align:center;box-shadow:var(--shadow-md)"><div style="font-size:11px;font-weight:900;color:#9f1239;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Conducta clave</div><div style="font-size:13px;line-height:1.45;color:#881337;font-weight:700">${node.careNote}</div></div>` : ''}
        ${node.actions ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actions.map(b => `<button class="btn-tables" onclick="showTablesDCEI(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        ${node.options ? node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="dceiNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : opt.color === '#65a30d' ? '✅' : '⚡'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('') : ''}
        <button class="btn-back" onclick="dceiGoBack()">← Volver</button>
        <button class="btn-back" onclick="dceiRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('dcei-flow-body');
  if (body) body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapDCEI(nodeId);
}

/* ═════════════════════════════════════════════
   DCEI TABLES
═══════════════════════════════════════════════ */
function showTablesDCEI(idx) {
  document.getElementById('dcei-tables-back-btn').onclick = () => showScreen('dcei');
  showScreen('dcei-tables');
  renderDCEITablesUI(idx || 0);
}
function renderDCEITablesUI(idx) {
  dcei_activeTabIndex = idx;
  document.getElementById('dcei-tabs-bar').innerHTML = DCEI_TABLES.map((t, i) => `<button class="tab-btn${i===idx?' active':''}" onclick="dceiSwipeToTable(${i})">${t.label}</button>`).join('');
  const cardsHTML = DCEI_TABLES.map((t, i) => {
    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.table ? `
          <table class="tbl" style="margin-top:4px">
            <thead><tr>${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}</tr></thead>
            <tbody>${s.table.rows.map(r => `<tr>${r.map(cell => `<td style="font-size:11.3px;color:#334155;white-space:pre-wrap;line-height:1.4">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        ` : s.items.map(item => {
          const raw = typeof item === 'string' && item.trim().startsWith('<');
          return raw
            ? `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">${item}</div>`
            : `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">• ${item}</div>`;
        }).join('')}
      </div>`).join('');
    return `<div class="table-swipe-card" id="dcei-swipe-card-${i}">
      <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
        <div class="table-swipe-head">${t.title}</div>
        ${sectionsHTML}
      </div>
    </div>`;
  }).join('');
  const dotsHTML = DCEI_TABLES.map((_,i) => `<div class="swipe-dot${i===idx?' active':''}" onclick="dceiSwipeToTable(${i})"></div>`).join('');
  document.getElementById('dcei-tables-panels').innerHTML = `<div class="tables-swipe-container" id="dcei-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;
  requestAnimationFrame(() => {
    const scroller = document.getElementById('dcei-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== dcei_activeTabIndex) {
          dcei_activeTabIndex = active;
          document.querySelectorAll('#dcei-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-dcei-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          dceiScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}
function dceiSwipeToTable(i) {
  dcei_activeTabIndex = i;
  document.querySelectorAll('#dcei-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-dcei-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('dcei-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  dceiScrollTabIntoView(i);
}
function dceiScrollTabIntoView(i) {
  const bar = document.getElementById('dcei-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   ENDOCARDITIS — NAV / MINIMAP / RENDER
═══════════════════════════════════════════════ */
function endoGoBack() {
  if (endo_history.length > 0) {
    endo_currentNode = endo_history.pop();
    renderNodeENDO(endo_currentNode);
  } else {
    goHome();
  }
}
function endoNavigate(nodeId) {
  endo_history.push(endo_currentNode);
  if (
    (endo_currentNode === 'endo_ett' && (nodeId === 'endo_ett_negative' || nodeId === 'endo_confirmed')) ||
    endo_currentNode === 'endo_start'
  ) {
    endo_caseContext = null;
  }
  endo_currentNode = nodeId;
  renderNodeENDO(nodeId);
}
function endoNavigateWithContext(nodeId, context) {
  endo_history.push(endo_currentNode);
  endo_currentNode = nodeId;
  endo_caseContext = context || null;
  renderNodeENDO(nodeId);
}
function endoRestart() {
  endo_history = [];
  endo_currentNode = 'endo_start';
  endo_caseContext = null;
  renderNodeENDO('endo_start');
}
function endoJumpTo(id) {
  if (id === endo_currentNode) return;
  if (ENDO_JUMP_PATHS[id]) {
    endo_history = [...ENDO_JUMP_PATHS[id]];
    endo_currentNode = id;
    renderNodeENDO(id);
  }
}
function toggleMinimapENDO() {
  const panel = document.getElementById('endo-minimap-panel');
  const btn = document.getElementById('endo-minimap-arrow-btn');
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle('open');
  btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapENDO(nodeId) {
  ENDO_MM_IDS.forEach(id => {
    const rect = document.getElementById('endo-mm-' + id);
    const txt = document.getElementById('endo-mmt-' + id);
    if (!rect || !txt) return;
    const isCurrent = id === nodeId;
    const isVisited = endo_history.includes(id);
    rect.setAttribute('fill', isCurrent ? '#f59e0b' : isVisited ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.12)');
    txt.setAttribute('fill', isCurrent ? '#111827' : isVisited ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.55)');
    txt.setAttribute('font-weight', isCurrent ? '800' : '600');
  });
}
function renderNodeENDO(nodeId) {
  const node = NODES_ENDO[nodeId];
  if (!node) return;

  const pct = Math.round(((node.step - 1) / ENDO_TOTAL_STEPS) * 100);
  const fill = document.getElementById('endo-progress-fill');
  const ptxt = document.getElementById('endo-progress-txt');
  const path = document.getElementById('endo-path-txt');
  const sub = document.getElementById('endo-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = endo_history.length > 0 ? `${endo_history.length} paso${endo_history.length > 1 ? 's' : ''} atrás` : '';
  const sublabels = {
    endo_start: 'Evaluación inicial',
    endo_ett: 'Resultado del ETT',
    endo_ett_negative: 'ETT negativo',
    endo_ete: 'Realizar ETE',
    endo_ete_negative: 'ETT y ETE negativos',
    endo_unlikely: 'EI poco probable',
    endo_repeat: 'Reevaluación diagnóstica',
    endo_confirmed: 'Diagnóstico y plan inicial',
    endo_native_route: 'Válvula nativa',
    endo_prosthetic_route: 'Válvula protésica',
  };
  if (sub) sub.textContent = sublabels[nodeId] || 'Tratamiento empírico';

  let html = '';

  if (node.type === 'endo_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11.2px;color:rgba(255,255,255,.86);margin-top:4px;line-height:1.45">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div style="display:grid;place-items:center;margin-top:10px;width:100%">
          ${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesENDO(${b.tableIndex})" style="display:block;width:auto;max-width:260px;padding:6px 12px;font-size:10.5px;border-radius:9px;box-shadow:none;margin:0 auto;text-align:center;white-space:normal">📋 ${b.label}</button>`).join('')}
        </div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="endoNavigate('${node.next}')"><div class="tri"></div><span>Siguiente</span></button>
      </div>`;
  } else if (node.type === 'endo_question') {
    html = `
      <div class="step-card">
        <div style="background:linear-gradient(135deg,#0d3a52 0%,#135f8f 100%);border-radius:14px;padding:16px 14px 14px;box-shadow:0 10px 24px rgba(13,58,82,.18)">
          <h2 style="color:white;margin:0;text-align:center">${node.title}</h2>
        </div>
        ${node.actionButtons ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesENDO(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => {
          const isDanger = opt.color === '#dc2626';
          const isGreen = opt.color === '#65a30d';
          const bg = isDanger ? 'linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%)' : isGreen ? 'linear-gradient(180deg,#f7fee7 0%,#ecfccb 100%)' : 'linear-gradient(180deg,#fff7ed 0%,#ffedd5 100%)';
          const icon = isDanger ? '🚨' : isGreen ? '✅' : opt.color === '#0d3a52' ? '🫀' : '🩺';
          const click = opt.context
            ? `endoNavigateWithContext('${opt.next}','${opt.context}')`
            : `endoNavigate('${opt.next}')`;
          return `
            <button class="origin-choice" style="border-color:${opt.color};background:${bg}" onclick="${click}">
              <div class="origin-choice-icon" style="background:${opt.color}">${icon}</div>
              <div class="origin-choice-body">
                <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
                <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
              </div>
              <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
            </button>`;
        }).join('')}
        <button class="btn-back" onclick="endoGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'endo_info') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.85;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.summary ? `<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;margin-bottom:10px;font-size:12.5px;color:#334155;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        ${node.blocks.map(block => {
          const tone = block.tone === 'green'
            ? { bg:'#ecfccb', color:'#3f6212' }
            : { bg:'#ffedd5', color:'#9a3412' };
          return `<div class="regimen-block" style="background:${tone.bg}">
            <div class="regimen-label" style="color:${tone.color}">${block.title}</div>
            ${block.lines.map(line => `<div class="drug-line" style="color:${tone.color}">${line}</div>`).join('')}
          </div>`;
        }).join('')}
        ${node.actionButtons ? `<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actionButtons.map(b => `<button class="btn-tables" onclick="showTablesENDO(${b.tableIndex})" style="width:auto;min-width:auto;text-align:center">${b.label}</button>`).join('')}</div>` : ''}
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="endoGoBack()">← Volver</button>
        <button class="btn-back" onclick="endoRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  } else if (node.type === 'endo_route') {
    const options = (nodeId === 'endo_confirmed' && endo_caseContext === 'prosthetic_path')
      ? node.options.filter(opt => opt.next !== 'endo_native_route')
      : node.options;
    html = `
      <div class="step-card" style="padding:14px">
        <div style="background:linear-gradient(135deg,#b91c1c 0%,#ef4444 100%);border-radius:14px;padding:14px 14px 12px;box-shadow:0 10px 24px rgba(185,28,28,.18)">
          <h2 style="color:white;margin:0">${node.title}</h2>
          <p style="font-size:12px;line-height:1.45;color:rgba(255,255,255,.9);margin:6px 0 0">${node.subtitle}</p>
        </div>
        ${node.summary ? `<div style="margin-top:12px;background:#fef2f2;border:1px solid #fca5a5;border-radius:14px;padding:12px;font-size:12.5px;color:#7f1d1d;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        <div style="margin-top:12px;background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:12px">
          ${node.intro.map(item => `<div style="font-size:12.5px;color:#7c2d12;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
        </div>
        ${node.careNote ? `<div style="margin-top:12px;background:linear-gradient(180deg,#fff1f2 0%,#ffe4e6 100%);border:1px solid #fda4af;border-radius:14px;padding:13px 12px;text-align:center;box-shadow:var(--shadow-md)"><div style="font-size:11px;font-weight:900;color:#9f1239;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Conducta General</div><div style="font-size:13px;line-height:1.45;color:#881337;font-weight:700">${node.careNote}</div></div>` : ''}
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:10px">${node.actions.map(b => `<button class="btn-tables" onclick="showTablesENDO(${b.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;text-align:center">📋 ${b.label}</button>`).join('')}</div>
      </div>
      <div class="choices">
        ${options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="endoNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#ef4444' ? '🫀' : '🩺'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.tag}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>`).join('')}
        <button class="btn-back" onclick="endoGoBack()">← Volver</button>
      </div>`;
  } else if (node.type === 'endo_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.summary ? `<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:11px 12px;margin-bottom:10px;font-size:12.5px;color:#334155;line-height:1.45"><strong>Resumen:</strong> ${node.summary}</div>` : ''}
        ${node.regimens.map(r => `<div class="regimen-block" style="background:${r.bg}"><div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}</div>`).join('')}
        <div class="divider"></div>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px">${node.actions.map(b => `<button class="btn-tables" onclick="showTablesENDO(${b.tableIndex})" style="width:auto;min-width:auto;text-align:center">${b.label}</button>`).join('')}</div>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="endoGoBack()">← Volver</button>
        <button class="btn-back" onclick="endoRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('endo-flow-body');
  if (body) body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapENDO(nodeId);
}

/* ═════════════════════════════════════════════
   ENDOCARDITIS TABLES
═══════════════════════════════════════════════ */
function showTablesENDO(idx) {
  document.getElementById('endo-tables-back-btn').onclick = () => showScreen('endo');
  showScreen('endo-tables');
  renderENDOTablesUI(idx || 0);
}
function renderENDOTablesUI(idx) {
  endo_activeTabIndex = idx;
  document.getElementById('endo-tabs-bar').innerHTML = ENDO_TABLES.map((t, i) => `<button class="tab-btn${i===idx?' active':''}" onclick="endoSwipeToTable(${i})">${t.label}</button>`).join('');
  const cardsHTML = ENDO_TABLES.map((t, i) => {
    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
        <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
        ${s.table ? `
          <table class="tbl" style="margin-top:4px">
            <thead><tr>${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}</tr></thead>
            <tbody>${s.table.rows.map(r => `<tr>${r.map(cell => `<td style="font-size:11.3px;color:#334155;white-space:pre-wrap;line-height:1.4">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        ` : s.items.map(item => {
          const raw = typeof item === 'string' && item.trim().startsWith('<');
          return raw
            ? `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">${item}</div>`
            : `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:5px">• ${item}</div>`;
        }).join('')}
      </div>`).join('');
    return `<div class="table-swipe-card" id="endo-swipe-card-${i}">
      <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
        <div class="table-swipe-head">${t.title}</div>
        ${sectionsHTML}
      </div>
    </div>`;
  }).join('');
  const dotsHTML = ENDO_TABLES.map((_,i) => `<div class="swipe-dot${i===idx?' active':''}" onclick="endoSwipeToTable(${i})"></div>`).join('');
  document.getElementById('endo-tables-panels').innerHTML = `<div class="tables-swipe-container" id="endo-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;
  requestAnimationFrame(() => {
    const scroller = document.getElementById('endo-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== endo_activeTabIndex) {
          endo_activeTabIndex = active;
          document.querySelectorAll('#endo-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-endo-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          endoScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}
function endoSwipeToTable(i) {
  endo_activeTabIndex = i;
  document.querySelectorAll('#endo-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-endo-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('endo-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  endoScrollTabIntoView(i);
}
function endoScrollTabIntoView(i) {
  const bar = document.getElementById('endo-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   INFECCIÓN DEL TRACTO URINARIO — ITU
═══════════════════════════════════════════════ */
function ituGoBack() {
  if (itu_history.length > 0) {
    itu_currentNode = itu_history.pop();
    renderNodeITU(itu_currentNode);
  } else { goHome(); }
}
function ituNavigate(nodeId) {
  itu_history.push(itu_currentNode);
  itu_currentNode = nodeId;
  renderNodeITU(nodeId);
}
function ituRestart() {
  itu_history = [];
  itu_currentNode = 'itu_start';
  renderNodeITU('itu_start');
}
function ituJumpTo(id) {
  if (id === itu_currentNode) return;
  if (ITU_JUMP_PATHS[id] !== undefined) {
    itu_history = [...ITU_JUMP_PATHS[id]];
    itu_currentNode = id;
    renderNodeITU(id);
  }
}
function toggleMinimapITU() {
  const panel = document.getElementById('itu-minimap-panel');
  const btn   = document.getElementById('itu-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function ituToggleExpand(id) {
  const body  = document.getElementById('itu-exp-' + id);
  const arrow = document.getElementById('itu-arr-' + id);
  if (!body) return;
  const isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}
function updateMinimapITU(nodeId) {
  ITU_MM_IDS.forEach(id => {
    const rect = document.getElementById('itu-mm-' + id);
    const txt  = document.getElementById('itu-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = itu_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited  ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited  ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

/* ═════════════════════════════════════════════
   INFECCIÓN DEL TRACTO URINARIO — RENDER
═══════════════════════════════════════════════ */
function renderNodeITU(nodeId) {
  const node = NODES_ITU[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / ITU_TOTAL_STEPS) * 100);
  const fill = document.getElementById('itu-progress-fill');
  const ptxt = document.getElementById('itu-progress-txt');
  const path = document.getElementById('itu-path-txt');
  const sub  = document.getElementById('itu-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = itu_history.length > 0 ? `${itu_history.length} paso${itu_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    itu_start: 'Sospecha clínica',
    itu_route: 'Definir ámbito',
    itu_amb:   'Escenarios ambulatorios',
    itu_inp:   'Escenarios internados',
  };
  if (sub) sub.textContent = sublabels[nodeId] || 'Tratamiento';

  let html = '';

  if (node.type === 'itu_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');
    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0f766e 0%,#0d9488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.82);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        ${node.alert ? `<div class="alert-box" style="margin-top:14px">${node.alert}</div>` : ''}
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="ituNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  }

  else if (node.type === 'itu_route') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
          ${node.blocks.map((block, idx) => `
            <div style="background:white;border:1px solid ${idx === 0 ? '#99f6e4' : '#bfdbfe'};border-radius:14px;overflow:hidden;box-shadow:0 8px 18px rgba(15,23,42,.06)">
              <div style="padding:10px 11px;border-bottom:${block.expandItems || block.secondaryTitle ? '1px solid rgba(226,232,240,.9)' : 'none'};display:flex;align-items:center;justify-content:space-between;gap:10px;background:${idx <= 1 ? 'linear-gradient(180deg,#ecfeff 0%,#ffffff 100%)' : 'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)'}">
                <div style="font-size:12px;font-weight:800;color:${idx === 0 ? '#0f766e' : '#1d4ed8'};line-height:1.35">${block.title}</div>
                ${typeof block.tableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesITU(${block.tableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;flex-shrink:0;margin-top:0;background:${idx <= 1 ? '#ccfbf1' : '#dbeafe'};border-color:${idx <= 1 ? '#5eead4' : '#93c5fd'};color:${idx <= 1 ? '#115e59' : '#1d4ed8'}">📋 ${block.tableLabel}</button>` : ''}
              </div>
              ${block.expandItems ? `
                <button onclick="ituToggleExpand('route-${idx}')" style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 11px;background:white;border:none;border-top:none;cursor:pointer;font-family:inherit">
                  <span style="font-size:11.5px;font-weight:700;color:#0f766e;text-align:left">${block.expandTitle}</span>
                  <span id="itu-arr-route-${idx}" style="font-size:12px;color:#0f766e;transition:transform .2s">▼</span>
                </button>
                <div id="itu-exp-route-${idx}" style="display:none;padding:0 11px 10px;background:white">
                  ${block.expandItems.map(item => `<div style="font-size:11.5px;color:#334155;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
                  ${block.extraTableButton ? `<div style="padding-top:6px"><button class="btn-tables" onclick="showTablesITU(${block.extraTableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;background:#ccfbf1;border-color:#5eead4;color:#115e59">📋 ${block.extraTableLabel}</button></div>` : ''}
                </div>
              ` : ''}
              ${block.secondaryTitle ? `
                <div style="padding:10px 11px;background:white;display:flex;align-items:center;justify-content:space-between;gap:10px">
                  <div style="font-size:12px;font-weight:800;color:#1d4ed8;line-height:1.35">${block.secondaryTitle}</div>
                  <button class="btn-tables" onclick="showTablesITU(${block.secondaryTableIndex})" style="width:auto;min-width:auto;padding:6px 9px;font-size:10.5px;border-radius:9px;box-shadow:none;flex-shrink:0;margin-top:0;background:#dbeafe;border-color:#93c5fd;color:#1d4ed8">📋 ${block.secondaryTableLabel}</button>
                </div>
              ` : ''}
            </div>
          `).join('')}
          <div style="background:white;border:1px solid #fecaca;border-radius:14px;overflow:hidden;box-shadow:0 8px 18px rgba(15,23,42,.06)">
            <div style="padding:10px 11px;background:linear-gradient(180deg,#fff1f2 0%,#ffffff 100%);border-bottom:1px solid rgba(254,202,202,.9)">
              <div style="font-size:12px;font-weight:800;color:#b91c1c;line-height:1.35">Tratamiento</div>
            </div>
            <div style="padding:10px 11px;background:white">
              <div style="background:linear-gradient(180deg,#dc2626 0%,#b91c1c 100%);color:white;border-radius:10px;padding:9px 10px;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.12)">
                <div style="font-size:11px;font-weight:900;letter-spacing:.2px;line-height:1.25">TOMAR EN CUENTA UC PREVIOS.</div>
                <div style="font-size:10px;font-weight:700;opacity:.95;line-height:1.2;margin-top:3px">Las opciones se presentan en orden de preferencia.</div>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;justify-content:center">
                <button class="btn-tables" onclick="showTablesITU(3)" style="width:auto;min-width:auto;padding:7px 10px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;background:#fee2e2;border-color:#fca5a5;color:#991b1b">📋 FR MDR</button>
                <button class="btn-tables" onclick="showTablesITU(4)" style="width:auto;min-width:auto;padding:7px 10px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-top:0;background:#fff7ed;border-color:#fdba74;color:#9a3412">📋 Uso de amikacina</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="ituNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🏥' : '🏠'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color}">${opt.desc}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-back" onclick="ituGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'itu_group') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <p class="sub">${node.subtitle}</p>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${node.color};background:white" onclick="ituNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${node.color}">${node.color === '#dc2626' ? '🩺' : '💊'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${node.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${node.color}">${opt.tag}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${node.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-back" onclick="ituGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'itu_treatment_dual') {
    const renderBlocks = blocks => blocks.map(r => `
      <div class="regimen-block" style="background:${r.bg};margin-bottom:8px">
        <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
        ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
      </div>
    `).join('');
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        <div style="display:grid;grid-template-columns:1fr;gap:10px">
          <div style="background:#f8fafc;border:1px solid #dbeafe;border-radius:12px;padding:10px 11px">
            <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#0c4a6e;letter-spacing:.4px;margin-bottom:8px">${node.leftTitle}</div>
            ${renderBlocks(node.leftBlocks)}
          </div>
          <div style="background:#f8fafc;border:1px solid #dcfce7;border-radius:12px;padding:10px 11px">
            <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#166534;letter-spacing:.4px;margin-bottom:8px">${node.rightTitle}</div>
            ${renderBlocks(node.rightBlocks)}
          </div>
        </div>
        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesITU(3)">📋 FR de resistencia</button>
        <button class="btn-tables" onclick="showTablesITU(4)" style="margin-top:8px">📋 Uso de amikacina</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ituGoBack()">← Volver</button>
        <button class="btn-back" onclick="ituRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  else if (node.type === 'itu_treatment_stack') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.blocks.map(r => `
          <div class="regimen-block" style="background:${r.bg};margin-bottom:8px">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}
        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesITU(3)">📋 FR de resistencia</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="ituGoBack()">← Volver</button>
        <button class="btn-back" onclick="ituRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('itu-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapITU(nodeId);
}

/* ═════════════════════════════════════════════
   ITU TABLES
═══════════════════════════════════════════════ */
function showTablesITU(idx) {
  document.getElementById('itu-tables-back-btn').onclick = () => showScreen('itu');
  showScreen('itu-tables');
  renderITUTablesUI(idx || 0);
}

function renderITUTablesUI(idx) {
  itu_activeTabIndex = idx;
  document.getElementById('itu-tabs-bar').innerHTML = ITU_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="ituSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = ITU_TABLES.map((t, i) => {
    if (t.type === 'itu_orenuc') {
      return `<div class="table-swipe-card" id="itu-swipe-card-${i}">
        <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head">${t.title}</div>
          <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7;background:#eff6ff">
            <div style="font-size:11px;font-weight:800;color:#1d4ed8;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">Definición</div>
            <div style="font-size:11.5px;color:#1e3a8a;line-height:1.5">${t.summary}</div>
          </div>
          <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7;background:#fff7ed">
            <div style="font-size:11px;font-weight:800;color:#9a3412;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">RENUC</div>
            ${t.renucRows.map(r => `
              <div style="padding:8px 0;border-bottom:1px solid #fed7aa">
                <div style="font-size:11.5px;font-weight:800;color:#1e293b;line-height:1.35;margin-bottom:3px">${r[0]}</div>
                <div style="font-size:11.5px;color:#7c2d12;line-height:1.45">${r[1]}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
    }

    if (t.type === 'itu_mdr') {
      const sectionsHTML = t.sections.map(s => `
        <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
          <div style="font-size:11px;font-weight:800;color:#991b1b;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
          ${s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
        </div>
      `).join('');
      return `<div class="table-swipe-card" id="itu-swipe-card-${i}">
        <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head" style="background:linear-gradient(160deg,#ef4444 0%,#dc2626 100%)">${t.title}</div>
          ${sectionsHTML}
          <div class="tbl-note">${t.foot}</div>
        </div>
      </div>`;
    }

    const sectionsHTML = t.sections.map(s => {
      const rawNote = s.table && typeof s.table.note === 'string' ? s.table.note.trim() : '';
      const noteHTML = rawNote && rawNote !== 'undefined' ? `<div class="tbl-note" style="margin:8px 0 0">${rawNote}</div>` : '';
      return `
        <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
          <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
          ${s.table ? `
            <table class="tbl" style="margin-top:4px">
              <thead>
                <tr>
                  ${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${s.table.rows.map(r => `<tr>${r.map((cell, ci) => `<td style="font-size:11.5px;${ci===1 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
            ${noteHTML}
          ` : s.items.map(item => `<div style="font-size:12px;color:#1e293b;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
        </div>
      `;
    }).join('');

    return `<div class="table-swipe-card" id="itu-swipe-card-${i}">
      <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
        <div class="table-swipe-head">${t.title}</div>
        ${sectionsHTML}
      </div>
    </div>`;
  }).join('');

  const dotsHTML = ITU_TABLES.map((_, i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="ituSwipeToTable(${i})"></div>`
  ).join('');
  document.getElementById('itu-tables-panels').innerHTML =
    `<div class="tables-swipe-container" id="itu-tables-swipe">${cardsHTML}</div><div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('itu-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== itu_activeTabIndex) {
          itu_activeTabIndex = active;
          document.querySelectorAll('#itu-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === active));
          document.querySelectorAll('#screen-itu-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === active));
          ituScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function ituSwipeToTable(i) {
  itu_activeTabIndex = i;
  document.querySelectorAll('#itu-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === i));
  document.querySelectorAll('#screen-itu-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  const scroller = document.getElementById('itu-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  ituScrollTabIntoView(i);
}
function ituScrollTabIntoView(i) {
  const bar = document.getElementById('itu-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* ═════════════════════════════════════════════
   NEUMONÍA ASOCIADA A LA VENTILACIÓN MECÁNICA — NAV
═══════════════════════════════════════════════ */
function navGoBack() {
  if (nav_history.length > 0) {
    nav_currentNode = nav_history.pop();
    renderNodeNAV(nav_currentNode);
  } else { goHome(); }
}
function navNavigate(nodeId) {
  nav_history.push(nav_currentNode);
  nav_currentNode = nodeId;
  renderNodeNAV(nodeId);
}
function navRestart() {
  nav_history = [];
  nav_currentNode = 'nav_start';
  renderNodeNAV('nav_start');
}
function navJumpTo(id) {
  if (id === nav_currentNode) return;
  if (NAV_JUMP_PATHS[id] !== undefined) {
    nav_history = [...NAV_JUMP_PATHS[id]];
    nav_currentNode = id;
    renderNodeNAV(id);
  }
}
function toggleMinimapNAV() {
  const panel = document.getElementById('nav-minimap-panel');
  const btn   = document.getElementById('nav-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapNAV(nodeId) {
  NAV_MM_IDS.forEach(id => {
    const rect = document.getElementById('nav-mm-' + id);
    const txt  = document.getElementById('nav-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = nav_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

/* ═════════════════════════════════════════════
   NEUMONÍA ASOCIADA A LA VENTILACIÓN MECÁNICA — RENDER
═══════════════════════════════════════════════ */
function renderNodeNAV(nodeId) {
  const node = NODES_NAV[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / NAV_TOTAL_STEPS) * 100);
  const fill = document.getElementById('nav-progress-fill');
  const ptxt = document.getElementById('nav-progress-txt');
  const path = document.getElementById('nav-path-txt');
  const sub  = document.getElementById('nav-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = nav_history.length > 0 ? `${nav_history.length} paso${nav_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    nav_start: 'Sospecha y microbiología',
    nav_cpis:  'Diagnóstico inicial',
    nav_early: 'Tratamiento NAV precoz',
    nav_late:  'Tratamiento NAV tardía',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'nav_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.82);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="navNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  }

  else if (node.type === 'nav_question') {
    html = `
      <div class="step-card">
        <div style="display:flex;justify-content:center">
          <div class="step-badge" style="background:#e0f2fe;color:#0c4a6e;font-size:12px;padding:6px 12px;letter-spacing:.2px;white-space:nowrap;text-align:center">${node.badgeText}</div>
        </div>
        ${node.note ? `<div class="alert-box" style="margin-top:12px">${node.note}</div>` : ''}
        <div class="note-box" style="margin-top:12px">
          ${node.checklist.map(item => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 0">
              <div style="font-size:12px;color:#334155;line-height:1.35;flex:1">${item.text}</div>
              ${typeof item.tableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesNAV(${item.tableIndex})" style="width:auto;min-width:auto;padding:7px 10px;font-size:11px;border-radius:10px;box-shadow:none;flex-shrink:0;align-self:center;margin-top:0">📋 ${item.tableLabel}</button>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="navNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : '💨'}</div>
            <div class="origin-choice-body" style="display:flex;flex-direction:column;justify-content:center;min-height:38px">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color};margin-top:2px">${opt.desc}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-back" onclick="navGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'nav_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.introAlert ? `<div class="alert-box" style="margin-bottom:12px">${node.introAlert}</div>` : ''}
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}
        ${node.notes ? `
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
            ${node.notes.map(item => `
              <div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">
                <span>• ${typeof item === 'string' ? item : item.text}</span>
                ${typeof item === 'object' && typeof item.tableIndex === 'number'
                  ? `<button class="btn-tables" onclick="showTablesNAV(${item.tableIndex})" style="display:inline-flex;width:auto;min-width:auto;padding:5px 8px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-left:6px;vertical-align:middle">📋 ${item.tableLabel}</button>`
                  : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${node.durationLabel ? `
          <div style="margin-top:10px;background:${node.durationBg};color:${node.durationText};border-radius:10px;padding:10px 12px;font-size:12px;font-weight:800;text-align:center">
            ${node.durationLabel}
          </div>
        ` : ''}
        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesNAV(2)">📋 FR de resistencia</button>
        <button class="btn-tables" onclick="showTablesNAV(3)" style="margin-top:8px">📋 Reevaluación 48 / 72 hs</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="navGoBack()">← Volver</button>
        <button class="btn-back" onclick="navRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('nav-flow-body');
  body.innerHTML = html;
  window.scrollTo(0, 0);
  updateMinimapNAV(nodeId);
}

/* ═════════════════════════════════════════════
   NAV TABLES
═══════════════════════════════════════════════ */
function showTablesNAV(idx) {
  document.getElementById('nav-tables-back-btn').onclick = () => showScreen('nav');
  showScreen('nav-tables');
  renderNAVTablesUI(idx || 0);
}

function renderNAVTablesUI(idx) {
  nav_activeTabIndex = idx;
  document.getElementById('nav-tabs-bar').innerHTML = NAV_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="navSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = NAV_TABLES.map((t, i) => {
    if (t.type === 'nav_etiology') {
      const cards = t.sections.map((s, sectionIndex) => {
        const isMain = sectionIndex === 0;
        return `
          <div style="padding:12px;border-bottom:1px solid #e8f0f7;${isMain ? 'background:linear-gradient(180deg,#eff6ff 0%,#ffffff 100%);' : 'background:#ffffff;'}">
            <div style="display:inline-flex;align-items:center;gap:6px;background:${isMain ? '#dbeafe' : '#f1f5f9'};color:${isMain ? '#1d4ed8' : '#334155'};border:1px solid ${isMain ? '#93c5fd' : '#cbd5e1'};border-radius:999px;padding:5px 10px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">${s.head}</div>
            ${s.items.map((item, itemIndex) => `
              <div style="font-size:${isMain && itemIndex === 1 ? '12.5px' : '12px'};color:#1e293b;line-height:1.5;margin-bottom:${isMain && itemIndex === 0 ? '8px' : '6px'};${isMain && itemIndex === 1 ? 'font-weight:600;' : ''}">
                • ${item}
              </div>
            `).join('')}
          </div>
        `;
      }).join('');

      return `
        <div class="table-swipe-card" id="nav-swipe-card-${i}">
          <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
            <div class="table-swipe-head">${t.title}</div>
            ${cards}
          </div>
        </div>`;
    }

    const sectionsHTML = t.sections.map(s => {
      const rawNote = s.table && typeof s.table.note === 'string' ? s.table.note.trim() : '';
      const noteHTML = rawNote && rawNote !== 'undefined' ? `<div class="tbl-note" style="margin:8px 0 0">${rawNote}</div>` : '';
      const sectionStyle = s.tone === 'alert'
        ? 'padding:12px;border-bottom:1px solid #fecaca;background:#fff5f5;'
        : 'padding:10px 11px;border-bottom:1px solid #e8f0f7';
      const headingStyle = s.tone === 'alert'
        ? 'font-size:11px;font-weight:800;color:#b91c1c;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px'
        : 'font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px';
      const itemColor = s.tone === 'alert' ? '#7f1d1d' : '#1e293b';
      return `
        <div style="${sectionStyle}">
          <div style="${headingStyle}">${s.head}</div>
          ${s.table ? `
            <table class="tbl" style="margin-top:4px">
              <thead>
                <tr>
                  ${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${s.table.rows.map(r => `
                  <tr>
                    ${r.map((cell, ci) => `<td style="font-size:11.5px;${ci>0 ? 'color:#334155;' : ''}">${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
            ${noteHTML}
          ` : s.items.map(item => `<div style="font-size:12px;color:${itemColor};line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
        </div>
      `;
    }).join('');

    return `
      <div class="table-swipe-card" id="nav-swipe-card-${i}">
        <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head">${t.title}</div>
          ${sectionsHTML}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = NAV_TABLES.map((_, i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="navSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('nav-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="nav-tables-swipe">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('nav-tables-swipe');
    if (!scroller) return;
    scroller.scrollLeft = idx * scroller.clientWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== nav_activeTabIndex) {
          nav_activeTabIndex = active;
          document.querySelectorAll('#nav-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === active));
          document.querySelectorAll('#screen-nav-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === active));
          navScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function navSwipeToTable(i) {
  nav_activeTabIndex = i;
  document.querySelectorAll('#nav-tabs-bar .tab-btn').forEach((b, j) => b.classList.toggle('active', j === i));
  document.querySelectorAll('#screen-nav-tables .swipe-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  const scroller = document.getElementById('nav-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  navScrollTabIntoView(i);
}
function navScrollTabIntoView(i) {
  const bar = document.getElementById('nav-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* ═════════════════════════════════════════════
   NEUMONÍA INTRAHOSPITALARIA — NAV
═══════════════════════════════════════════════ */
function nihGoBack() {
  if (nih_history.length > 0) {
    nih_currentNode = nih_history.pop();
    renderNodeNIH(nih_currentNode);
  } else { goHome(); }
}
function nihNavigate(nodeId) {
  nih_history.push(nih_currentNode);
  nih_currentNode = nodeId;
  renderNodeNIH(nodeId);
}
function nihRestart() {
  nih_history = [];
  nih_currentNode = 'nih_start';
  renderNodeNIH('nih_start');
}
function nihJumpTo(id) {
  if (id === nih_currentNode) return;
  if (NIH_JUMP_PATHS[id] !== undefined) {
    nih_history = [...NIH_JUMP_PATHS[id]];
    nih_currentNode = id;
    renderNodeNIH(id);
  }
}
function toggleMinimapNIH() {
  const panel = document.getElementById('nih-minimap-panel');
  const btn   = document.getElementById('nih-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapNIH(nodeId) {
  NIH_MM_IDS.forEach(id => {
    const rect = document.getElementById('nih-mm-' + id);
    const txt  = document.getElementById('nih-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = nih_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

function nihFlipInit(id) {
  const inner = document.getElementById(id + '-inner');
  const front = document.getElementById(id + '-front');
  const back  = document.getElementById(id + '-back');
  if (!inner || !front || !back) return;
  const frontH = front.offsetHeight;
  back.style.position = 'relative';
  back.style.transform = 'none';
  back.style.webkitTransform = 'none';
  back.style.visibility = 'hidden';
  const backH = back.offsetHeight;
  back.style.position = 'absolute';
  back.style.transform = 'rotateY(180deg)';
  back.style.webkitTransform = 'rotateY(180deg)';
  back.style.visibility = '';
  const h = Math.max(frontH, backH);
  if (h > 0) inner.style.height = h + 'px';
}

function nihFlipToggle(id) {
  const inner = document.getElementById(id + '-inner');
  const front = document.getElementById(id + '-front');
  const back  = document.getElementById(id + '-back');
  if (!inner || !front || !back) return;
  const flipped = inner.getAttribute('data-flipped') === '1';
  if (!flipped) {
    const frontH = front.offsetHeight;
    back.style.position = 'relative';
    back.style.transform = 'none';
    back.style.webkitTransform = 'none';
    back.style.visibility = 'hidden';
    const backH = back.offsetHeight;
    back.style.position = 'absolute';
    back.style.transform = 'rotateY(180deg)';
    back.style.webkitTransform = 'rotateY(180deg)';
    back.style.visibility = '';
    inner.style.height = Math.max(frontH, backH) + 'px';
  } else {
    requestAnimationFrame(() => nihFlipInit(id));
  }
  inner.style.transform = flipped ? '' : 'rotateY(180deg)';
  inner.style.webkitTransform = flipped ? '' : 'rotateY(180deg)';
  inner.setAttribute('data-flipped', flipped ? '0' : '1');
}

/* ═════════════════════════════════════════════
   NEUMONÍA INTRAHOSPITALARIA — RENDER
═══════════════════════════════════════════════ */
function renderNodeNIH(nodeId) {
  const node = NODES_NIH[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / NIH_TOTAL_STEPS) * 100);
  const fill = document.getElementById('nih-progress-fill');
  const ptxt = document.getElementById('nih-progress-txt');
  const path = document.getElementById('nih-path-txt');
  const sub  = document.getElementById('nih-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = nih_history.length > 0 ? `${nih_history.length} paso${nih_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    nih_start: 'Definición y sospecha diagnóstica',
    nih_qsofa: 'Gravedad inicial',
    nih_q0_route: 'qSOFA 0–1',
    nih_q2_route: 'qSOFA ≥ 2',
    nih_low_early: 'Quick-SOFA 0–1 · Estadía < 5 días',
    nih_low_mdr: 'Tratamiento NIH con FR MDR',
    nih_severe_early: 'qSOFA ≥ 2',
    nih_severe_mdr: 'Shock séptico o IR severa',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'nih_start') {
    const sectionsHTML = node.sections.map(s => `
      ${s.flipId ? `
        <div class="info-section" style="padding:0 2px;border:none;background:transparent">
          <div style="perspective:1000px;cursor:pointer" onclick="nihFlipToggle('${s.flipId}')">
            <div id="${s.flipId}-inner" data-flipped="0" style="position:relative;width:100%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1)">
              <div id="${s.flipId}-front" style="width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;overflow:hidden;transform:translateZ(0);-webkit-transform:translateZ(0)">
                <div style="background:white;border:2px solid #94a3b8;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(15,23,42,.05)">
                  <div class="info-section-title" style="margin-bottom:0;display:flex;align-items:center;justify-content:space-between;padding:7px 12px 4px;border-bottom:none;border-top:2px solid #0d9488">
                    <span>Microbiología</span>
                    <span style="font-size:14px;line-height:1;color:#0d9488;font-weight:900">↺</span>
                  </div>
                  <div style="background:white;padding:10px 12px">
                    ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
                  </div>
                </div>
              </div>
              <div id="${s.flipId}-back" style="position:absolute;top:0;left:0;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);-webkit-transform:rotateY(180deg);border-radius:12px;overflow:hidden">
                <div style="background:linear-gradient(160deg,#0f766e 0%,#0d9488 100%);color:white;padding:9px 12px;font-size:12px;font-weight:800;letter-spacing:.2px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:space-between">
                  <span>${s.backTitle}</span>
                  <span style="font-size:14px;line-height:1;color:rgba(255,255,255,.95);font-weight:900">↺</span>
                </div>
                <div style="background:white;border:2px solid #0d9488;border-top:none;border-radius:0 0 12px 12px;padding:11px 12px;box-shadow:0 8px 16px rgba(15,118,110,.08)">
                  ${s.backItems.map(i => `<div style="font-size:13px;color:#1e293b;line-height:1.5;margin-bottom:6px">• ${i}</div>`).join('')}
                </div>
              </div>
            </div>
          </div>
          <div class="flip-hint">↺ Toca la tarjeta para girar</div>
        </div>
      ` : `
        <div class="info-section">
          <div class="info-section-title">${s.h}</div>
          ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
        </div>
      `}
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.82);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div class="alert-box" style="margin-top:14px">${node.alert}</div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="nihNavigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  }

  else if (node.type === 'nih_question') {
    html = `
      <div class="step-card">
        <div style="display:flex;justify-content:center">
          <div class="step-badge" style="background:#e0f2fe;color:#0c4a6e;font-size:12px;padding:6px 12px;letter-spacing:.2px;white-space:nowrap;text-align:center">${node.badgeText}</div>
        </div>
        <div class="note-box" style="margin-top:12px">
          ${node.checklist.map(item => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:4px 0">
              <div style="font-size:12px;color:#334155;line-height:1.35;flex:1">${item.text}</div>
              ${typeof item.tableIndex === 'number' ? `<button class="btn-tables" onclick="showTablesNIH(${item.tableIndex})" style="width:auto;min-width:auto;padding:7px 10px;font-size:11px;border-radius:10px;box-shadow:none;flex-shrink:0;align-self:center;margin-top:0">📋 ${item.tableLabel}</button>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color};background:white" onclick="nihNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color}">${opt.color === '#dc2626' ? '🚨' : '🩺'}</div>
            <div class="origin-choice-body" style="display:flex;flex-direction:column;justify-content:center;min-height:38px">
              <div class="origin-choice-label" style="color:${opt.color}">${opt.title}</div>
              ${opt.desc ? `<div class="origin-choice-tag" style="color:${opt.color};margin-top:2px">${opt.desc}</div>` : ''}
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-back" onclick="nihGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'nih_route') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <p class="sub">${node.subtitle}</p>
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${opt.color || node.color};background:white" onclick="nihNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${opt.color || node.color}">${node.color === '#dc2626' ? '🏥' : '💊'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${opt.color || node.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${opt.color || node.color}">${opt.tag}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${opt.color || node.color}">›</div>
          </button>
        `).join('')}
        <button class="btn-tables" onclick="showTablesNIH(2)">📋 Ver FR para microorganismos resistentes</button>
        <button class="btn-back" onclick="nihGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'nih_treatment') {
    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        <h2>${node.title}</h2>
        <p style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px">${node.subtitle}</p>
      </div>
      <div class="treatment-body">
        ${node.setting ? `
          <div style="display:inline-flex;align-items:center;gap:6px;background:${node.settingColor};color:${node.settingText};font-size:11px;font-weight:800;padding:5px 10px;border-radius:999px;margin-bottom:12px">
            🏥 ${node.setting}
          </div>
        ` : ''}
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}
        ${node.notes ? `
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:11px 12px;margin-top:10px">
            ${node.notes.map(item => `
              <div style="font-size:12px;color:#334155;line-height:1.45;margin-bottom:5px">
                <span>• ${typeof item === 'string' ? item : item.text}</span>
                ${typeof item === 'object' && typeof item.tableIndex === 'number'
                  ? `<button class="btn-tables" onclick="showTablesNIH(${item.tableIndex})" style="display:inline-flex;width:auto;min-width:auto;padding:5px 8px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-left:6px;vertical-align:middle">📋 ${item.tableLabel}</button>`
                  : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${node.durationLabel ? `
          <div style="margin-top:10px;background:${node.durationBg};color:${node.durationText};border-radius:10px;padding:10px 12px;font-size:12px;font-weight:800;text-align:center">
            ${node.durationLabel}
          </div>
        ` : ''}
        <div class="divider"></div>
        <button class="btn-tables" onclick="showTablesNIH(2)">📋 FR de resistencia</button>
        <button class="btn-tables" onclick="showTablesNIH(4)" style="margin-top:8px">📋 Rotación a VO</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="nihGoBack()">← Volver</button>
        <button class="btn-back" onclick="nihRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('nih-flow-body');
  body.innerHTML = html;
  if (node.type === 'nih_start') requestAnimationFrame(() => nihFlipInit('nih-micro'));
  window.scrollTo(0,0);
  updateMinimapNIH(nodeId);
}

/* ═════════════════════════════════════════════
   NIH TABLES
═══════════════════════════════════════════════ */
function showTablesNIH(idx) {
  document.getElementById('nih-tables-back-btn').onclick = () => showScreen('nih');
  showScreen('nih-tables');
  renderNIHTablesUI(idx || 0);
}

function renderNIHTablesUI(idx) {
  nih_activeTabIndex = idx;
  document.getElementById('nih-tabs-bar').innerHTML = NIH_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="nihSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = NIH_TABLES.map((t, i) => {
    if (t.id === 'nih_qsofa') {
      const q = t.sections[0];
      return `
        <div class="table-swipe-card" id="nih-swipe-card-${i}">
          <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
            <div class="table-swipe-head">${t.title}</div>
            <div style="padding:10px 11px;border-bottom:1px solid #e8f0f7">
              <div style="font-size:11px;font-weight:800;color:#0c4a6e;text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${q.head}</div>
              <table class="tbl" style="margin-top:4px">
                <thead>
                  <tr>
                    ${q.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${q.table.rows.map(r => `
                    <tr>
                      ${r.map((cell, idx2) => `<td style="font-size:11.5px;${idx2===1 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>`;
    }

    const sectionsHTML = t.sections.map(s => {
      const rawNote = s.table && typeof s.table.note === 'string' ? s.table.note.trim() : '';
      const noteHTML = rawNote && rawNote !== 'undefined' ? `<div class="tbl-note" style="margin:8px 0 0">${rawNote}</div>` : '';
      return `
        <div style="padding:10px 11px;border-bottom:1px solid ${t.id === 'nih_mdr' || t.id === 'nih_specific' ? '#fecaca' : '#e8f0f7'};${t.id === 'nih_mdr' || t.id === 'nih_specific' ? 'background:#fff5f5;' : ''}">
          <div style="font-size:11px;font-weight:800;color:${t.id === 'nih_mdr' || t.id === 'nih_specific' ? '#b91c1c' : '#0c4a6e'};text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>
          ${s.table ? `
            <table class="tbl" style="margin-top:4px">
              <thead>
                <tr>
                  ${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${s.table.rows.map(r => `
                  <tr>
                    ${r.map((cell, idx2) => `<td style="font-size:11.5px;${idx2===1 && s.table.heads.length===2 ? 'font-weight:600;color:#334155;' : ''}">${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
            ${noteHTML}
          ` : s.items.map(item => `<div style="font-size:12px;color:${t.id === 'nih_mdr' || t.id === 'nih_specific' ? '#3f3f46' : '#1e293b'};line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
        </div>`;
    }).join('');

    return `
      <div class="table-swipe-card" id="nih-swipe-card-${i}">
        <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head" style="${t.id === 'nih_mdr' || t.id === 'nih_specific' ? 'background:linear-gradient(160deg,#ef4444 0%,#dc2626 100%)' : ''}">${t.title}</div>
          ${sectionsHTML}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = NIH_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="nihSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('nih-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="nih-tables-swipe">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('nih-tables-swipe');
    if (!scroller) return;
    const cardWidth = scroller.clientWidth;
    scroller.scrollLeft = idx * cardWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== nih_activeTabIndex) {
          nih_activeTabIndex = active;
          document.querySelectorAll('#nih-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-nih-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          nihScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function nihSwipeToTable(i) {
  nih_activeTabIndex = i;
  document.querySelectorAll('#nih-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-nih-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('nih-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  nihScrollTabIntoView(i);
}

function nihScrollTabIntoView(i) {
  const bar = document.getElementById('nih-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   NEUMONÍA AGUDA — NAV
═══════════════════════════════════════════════ */
function nacGoBack() {
  if (nac_history.length > 0) {
    nac_currentNode = nac_history.pop();
    renderNodeNAC(nac_currentNode);
  } else { goHome(); }
}
function nacNavigate(nodeId) {
  nac_history.push(nac_currentNode);
  nac_currentNode = nodeId;
  renderNodeNAC(nodeId);
}
function nacRestart() {
  nac_history = [];
  nac_currentNode = 'nac_start';
  renderNodeNAC('nac_start');
}
function nacJumpTo(id) {
  if (id === nac_currentNode) return;
  if (NAC_JUMP_PATHS[id] !== undefined) {
    nac_history = [...NAC_JUMP_PATHS[id]];
    nac_currentNode = id;
    renderNodeNAC(id);
  }
}
function toggleMinimapNAC() {
  const panel = document.getElementById('nac-minimap-panel');
  const btn   = document.getElementById('nac-minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}
function updateMinimapNAC(nodeId) {
  NAC_MM_IDS.forEach(id => {
    const rect = document.getElementById('nac-mm-' + id);
    const txt  = document.getElementById('nac-mmt-' + id);
    if (!rect) return;
    const isCurrent = id === nodeId;
    const isVisited = nac_history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
}

/* ═════════════════════════════════════════════
   NEUMONÍA AGUDA — RENDER
═══════════════════════════════════════════════ */
function renderNodeNAC(nodeId) {
  const node = NODES_NAC[nodeId];
  if (!node) return;

  const pct  = Math.round(((node.step - 1) / NAC_TOTAL_STEPS) * 100);
  const fill = document.getElementById('nac-progress-fill');
  const ptxt = document.getElementById('nac-progress-txt');
  const path = document.getElementById('nac-path-txt');
  const sub  = document.getElementById('nac-step-sublabel');
  if (fill) fill.style.width = pct + '%';
  if (ptxt) ptxt.textContent = '';
  if (path) path.textContent = nac_history.length > 0 ? `${nac_history.length} paso${nac_history.length > 1 ? 's' : ''} atrás` : '';

  const sublabels = {
    nac_start: 'Sospecha y diagnóstico',
    nac_severity: 'Gravedad e internación',
    nac_g1_route: 'Grupo 1',
    nac_g2_route: 'Grupo 2',
    nac_g3_route: 'Grupo 3',
    nac_g1a: 'Tratamiento ambulatorio',
    nac_g1b: 'Tratamiento ambulatorio',
    nac_g2a: 'Cuidados moderados',
    nac_g2b: 'Cuidados moderados · FR MDR',
    nac_g3a: 'Cuidados críticos',
    nac_g3b: 'Cuidados críticos · FR MDR',
  };
  if (sub) sub.textContent = sublabels[nodeId] || '';

  let html = '';

  if (node.type === 'nac_start') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => `<div class="info-row"><span class="info-dot">•</span><span>${i}</span></div>`).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner" style="background:linear-gradient(135deg,#0ea5b7 0%,#0d7488 100%)">
          <h2>${node.title}</h2>
          <div style="font-size:11px;color:rgba(255,255,255,.82);margin-top:4px;text-transform:uppercase;letter-spacing:.8px">${node.subtitle}</div>
        </div>
        ${sectionsHTML}
        <div style="margin-top:16px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center">
          <div style="font-size:18px;font-weight:800;line-height:1.25;color:#0d3a52;letter-spacing:.2px">
            ${node.conclusion}
          </div>
        </div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="nacNavigate('${node.next}')">
          <div class="tri"></div>
          <span></span>
        </button>
      </div>`;
  }

  else if (node.type === 'nac_severity') {
    html = `
      <div class="step-card">
        <div style="display:flex;justify-content:center">
          <div class="step-badge" style="background:#e0f2fe;color:#0c4a6e;font-size:12px;padding:6px 12px;letter-spacing:.2px;white-space:nowrap;text-align:center">${node.badgeText}</div>
        </div>
        <button class="btn-tables" onclick="showTablesNAC(0)" style="margin-top:4px">📋 Ver scores y criterios de internación</button>
      </div>
      <div class="choices">
        ${node.groups.map(g => `
          <button class="choice-btn" style="border-color:${g.border};background:${g.bg}" onclick="nacNavigate('${g.next}')">
            <div class="choice-icon" style="background:${g.border}">${g.icon}</div>
            <div class="choice-text">
              <strong style="color:${g.text}">${g.title}</strong>
              <small style="color:${g.text};opacity:.9">${g.score}</small>
              <small>${g.desc}</small>
              ${g.extra ? `<small style="font-weight:800;letter-spacing:.2px">${g.extra}</small>` : ''}
            </div>
            <span class="choice-arrow" style="color:${g.border}">›</span>
          </button>
        `).join('')}
        <button class="btn-back" onclick="nacGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'nac_split') {
    html = `
      <div class="step-card">
        <h2>${node.title}</h2>
        <p class="sub">${node.subtitle || ''}${node.subtitleActionLabel ? ` <button onclick="event.stopPropagation();showTablesNAC(1)" class="ibtn" style="background:#fef3c7;border-color:#d97706;color:#92400e;font-size:10px;padding:2px 8px;margin-top:0;vertical-align:middle">${node.subtitleActionLabel}</button>` : ''}</p>
        ${node.noteLines ? `<div class="note-box" style="margin-top:12px">${node.noteLines.map(line => `<div style="margin-bottom:4px">${line}</div>`).join('')}</div>` : (node.note ? `<div class="note-box" style="margin-top:12px">${node.note}</div>` : '')}
        ${node.sharedFooter ? `
          <div class="note-box" style="margin-top:12px;${node.title.includes('Grupo 2') ? 'background:#fef3c7;border-left:3px solid #d97706;color:#78350f' : node.title.includes('Grupo 3') ? 'background:#fee2e2;border-left:3px solid #dc2626;color:#7f1d1d' : ''}">
            ${node.sharedFooterTitle ? `<div style="font-weight:800;margin-bottom:6px">${node.sharedFooterTitle}</div>` : ''}
            ${node.sharedFooter.map(item => `<div style="margin-bottom:4px">• ${item}</div>`).join('')}
          </div>
        ` : ''}
      </div>
      <div class="choices">
        ${node.options.map(opt => `
          <button class="origin-choice" style="border-color:${node.color};background:white" onclick="nacNavigate('${opt.next}')">
            <div class="origin-choice-icon" style="background:${node.color}">${node.title.includes('1') ? '💊' : node.title.includes('2') ? '🩺' : '🚑'}</div>
            <div class="origin-choice-body">
              <div class="origin-choice-label" style="color:${node.color}">${opt.title}</div>
              <div class="origin-choice-tag" style="color:${node.color}">${opt.tag}</div>
            </div>
            <div class="origin-choice-arrow" style="color:${node.color}">›</div>
          </button>
        `).join('')}
        ${node.commonInfo ? `
          <div style="border-radius:10px;overflow:hidden;border:1px solid #93c5fd">
            <div style="background:linear-gradient(160deg,#4a9fd4 0%,#3a8dc4 100%);color:white;padding:8px 11px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.5px">${node.commonInfoTitle || 'Considerar'}</div>
            <div style="background:#eff6ff;padding:10px 11px">
              ${node.commonInfo.map(item => `<div style="font-size:11.5px;color:#1e293b;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
            </div>
          </div>
        ` : ''}
        ${node.title.includes('Grupo 1') ? `<button class="btn-tables" onclick="showTablesNAC(0)">📋 Comorbilidades a considerar</button>` : ''}
        ${node.hideResistanceButton ? '' : `<button class="btn-tables" onclick="showTablesNAC(1)">📋 Ver FR para microorganismos resistentes</button>`}
        <button class="btn-back" onclick="nacGoBack()">← Volver</button>
      </div>`;
  }

  else if (node.type === 'nac_treatment') {
    const titleHTML = nodeId === 'nac_g1a'
      ? `Grupo 1a < 65 años · Sin comorbilidades · Sin <button onclick="event.stopPropagation();showTablesNAC(1)" class="ibtn" style="background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.38);color:white;font-size:11px;padding:3px 10px;margin-top:0;vertical-align:middle;position:relative;top:-1px">FR MDR</button>`
      : nodeId === 'nac_g1b'
      ? `Grupo 1b: ≥ 65 años, SIN comorbilidades o < 65 años, CON comorbilidades compensadas, SIN <button onclick="event.stopPropagation();showTablesNAC(1)" class="ibtn" style="background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.38);color:white;font-size:11px;padding:3px 10px;margin-top:0;vertical-align:middle;position:relative;top:-1px">FR MDR</button>`
      : node.title;

    html = `
      <div class="treatment-header" style="background:${node.headerColor}">
        ${node.txLabelHidden ? '' : `<div class="tx-label">Tratamiento empírico</div>`}
        <h2>${titleHTML}</h2>
        ${node.subtitle ? `<p style="${node.subtitleAsLabel ? 'font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.8;margin-top:6px' : ''}">${node.subtitle}</p>` : ''}
      </div>
      <div class="treatment-body">
        <div style="display:inline-flex;align-items:center;gap:6px;background:${node.settingColor};color:${node.settingText};font-size:11px;font-weight:800;padding:5px 10px;border-radius:999px;margin-bottom:12px">
          🏥 ${node.setting}
        </div>

        ${node.prelude && node.prelude.length ? `
          <div class="note-box" style="margin-bottom:12px">
            ${node.prelude.map(i => `<div style="margin-bottom:4px">${i}</div>`).join('')}
          </div>
        ` : ''}

        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor}">${r.label}</div>
            ${r.lines.map(l => `<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}

        ${node.duration ? `
          <div class="duration-box">
            <h4>Duración orientativa</h4>
            <p>${node.duration}</p>
          </div>
        ` : ''}

        ${node.note ? `<div class="note-box" style="margin-top:10px">${node.note}</div>` : ''}

        <div class="divider"></div>
        ${nodeId === 'nac_g1a' || nodeId === 'nac_g1b' || node.hideResistanceButton ? '' : `<button class="btn-tables" onclick="showTablesNAC(1)">📋 FR de resistencia</button>`}
        <button class="btn-tables" onclick="showTablesNAC(2)" style="margin-top:8px">📋 Alergia a β-lactámicos</button>
      </div>
      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="nacGoBack()">← Volver</button>
        <button class="btn-back" onclick="nacRestart()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('nac-flow-body');
  body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimapNAC(nodeId);
}

/* ═════════════════════════════════════════════
   NAC TABLES
═══════════════════════════════════════════════ */
function showTablesNAC(idx) {
  document.getElementById('nac-tables-back-btn').onclick = () => showScreen('nac');
  showScreen('nac-tables');
  renderNACTablesUI(idx || 0);
}

function renderNACTablesUI(idx) {
  nac_activeTabIndex = idx;
  document.getElementById('nac-tabs-bar').innerHTML = NAC_TABLES.map((t, i) =>
    `<button class="tab-btn${i===idx?' active':''}" onclick="nacSwipeToTable(${i})">${t.label}</button>`
  ).join('');

  const cardsHTML = NAC_TABLES.map((t, i) => {
    const headStyle = t.id === 'nac_mdr'
      ? 'background:linear-gradient(160deg,#ef4444 0%,#dc2626 100%);color:white;padding:10px 13px;font-size:12px;font-weight:800;position:relative;overflow:hidden'
      : 'background:linear-gradient(160deg, #4a9fd4 0%, #3a8dc4 100%);color:white;padding:10px 13px;font-size:12px;font-weight:800;position:relative;overflow:hidden';

    if (t.type === 'allergy_grid') {
      const toneStyles = {
        green: { bg:'#f0fdf4', br:'#86efac', hd:'#166534', ac:'#14532d' },
        amber: { bg:'#fffbeb', br:'#fcd34d', hd:'#92400e', ac:'#78350f' },
        red:   { bg:'#fef2f2', br:'#fca5a5', hd:'#991b1b', ac:'#7f1d1d' },
      };
      const allergyCols = t.sections.map(s => {
        const tone = toneStyles[s.tone] || toneStyles.green;
        return `
          <div style="background:${tone.bg};border:1px solid ${tone.br};border-radius:10px;overflow:hidden">
            <div style="background:${tone.br};color:${tone.hd};padding:8px 10px;font-size:11px;font-weight:800">${s.head}</div>
            <div style="padding:10px">
              <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;color:${tone.hd};margin-bottom:6px">Historia / patrón clínico</div>
              ${s.history.map(item => `<div style="font-size:11.5px;color:#1f2937;line-height:1.45;margin-bottom:5px">• ${item}</div>`).join('')}
              <div style="margin-top:10px;padding-top:8px;border-top:1px solid ${tone.br}">
                <div style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.4px;color:${tone.ac};margin-bottom:6px">Acción</div>
                ${s.action.map(item => `<div style="font-size:11.5px;color:${tone.ac};line-height:1.45;margin-bottom:5px;font-weight:700">• ${item}</div>`).join('')}
              </div>
            </div>
          </div>`;
      }).join('');
      return `
        <div class="table-swipe-card" id="nac-swipe-card-${i}">
          <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
            <div class="table-swipe-head" style="${headStyle}">${t.title}</div>
            <div style="padding:10px;display:grid;grid-template-columns:1fr;gap:10px">
              ${allergyCols}
            </div>
          </div>
        </div>`;
    }

    const sectionsHTML = t.sections.map(s => `
      <div style="padding:10px 11px;border-bottom:1px solid ${t.id === 'nac_mdr' ? '#fecaca' : '#e8f0f7'};${t.id === 'nac_mdr' ? 'background:#fff5f5;' : ''}">
        ${!(t.id === 'nac_mdr' && s.head === 'FR para anaerobios') ? `<div style="font-size:11px;font-weight:800;color:${t.id === 'nac_mdr' ? '#b91c1c' : '#0c4a6e'};text-transform:uppercase;letter-spacing:.4px;margin-bottom:6px">${s.head}</div>` : ''}
        ${s.table ? `
          <table class="tbl" style="margin-top:4px">
            <thead>
              <tr>
                ${s.table.heads.map(h => `<th style="background:#dbeafe;color:#0c4a6e;font-size:11px;font-weight:800;padding:7px 8px;text-align:left;border-bottom:1px solid #bfdbfe">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${s.table.rows.map(r => `
                <tr>
                  ${r.map((cell, idx) => `<td style="font-size:11.5px;${idx===2?'font-weight:600;color:#334155;':''}">${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="tbl-note" style="margin:8px 0 0;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
            <span>${s.table.note}</span>
            ${s.calcButton ? `<button class="ibtn" onclick="openNACPsiCalculator()" style="background:#e0f2fe;border-color:#0891b2;color:#0c4a6e;margin-top:0;flex-shrink:0"><span class="dsm" style="background:#0891b2"></span>${s.calcButton}</button>` : ''}
          </div>
        ` : (t.id === 'nac_mdr' && s.head === 'FR para anaerobios'
            ? `
              <div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px"><strong style="color:#b91c1c;text-transform:uppercase">${s.head}:</strong> <strong>${s.items[0]}</strong></div>
              ${s.items.slice(1).map(item => `<div style="font-size:12px;color:#3f3f46;line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')}
            `
            : s.items.map(item => `<div style="font-size:12px;color:${t.id === 'nac_mdr' ? '#3f3f46' : '#1e293b'};line-height:1.45;margin-bottom:4px">• ${item}</div>`).join('')
          )}
      </div>
    `).join('');

    return `
      <div class="table-swipe-card" id="nac-swipe-card-${i}">
        <div class="table-swipe-inner" style="background:white;border-radius:var(--radius);box-shadow:var(--shadow-md);border:1px solid rgba(0,0,0,.06);overflow-y:auto;overflow-x:hidden;height:auto;max-height:calc(100vh - 245px);-webkit-overflow-scrolling:touch">
          <div class="table-swipe-head" style="${headStyle}">${t.title}</div>
          ${sectionsHTML}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = NAC_TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" onclick="nacSwipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('nac-tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="nac-tables-swipe">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>`;

  requestAnimationFrame(() => {
    const scroller = document.getElementById('nac-tables-swipe');
    if (!scroller) return;
    const cardWidth = scroller.clientWidth;
    scroller.scrollLeft = idx * cardWidth;
    let ticking = false;
    scroller.onscroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const width = scroller.clientWidth || 1;
        const active = Math.round(scroller.scrollLeft / width);
        if (active !== nac_activeTabIndex) {
          nac_activeTabIndex = active;
          document.querySelectorAll('#nac-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===active));
          document.querySelectorAll('#screen-nac-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===active));
          nacScrollTabIntoView(active);
        }
        ticking = false;
      });
    };
  });
}

function nacSwipeToTable(i) {
  nac_activeTabIndex = i;
  document.querySelectorAll('#nac-tabs-bar .tab-btn').forEach((b,j)=>b.classList.toggle('active', j===i));
  document.querySelectorAll('#screen-nac-tables .swipe-dot').forEach((d,j)=>d.classList.toggle('active', j===i));
  const scroller = document.getElementById('nac-tables-swipe');
  if (scroller) scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' });
  nacScrollTabIntoView(i);
}

function nacScrollTabIntoView(i) {
  const bar = document.getElementById('nac-tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

/* ═════════════════════════════════════════════
   NAC PSI CALCULATOR
═══════════════════════════════════════════════ */
function openNACPsiCalculator() {
  const m = document.getElementById('modal-nac-psi');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeNACPsiCalculator() {
  const m = document.getElementById('modal-nac-psi');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}
function calculateNACPsi() {
  const num = id => {
    const el = document.getElementById(id);
    return el ? parseFloat(el.value || '0') : 0;
  };
  const checked = id => {
    const el = document.getElementById(id);
    return !!(el && el.checked);
  };
  const sex = document.getElementById('nac-psi-sex')?.value || 'male';
  const age = num('nac-psi-age');
  let score = sex === 'female' ? Math.max(age - 10, 0) : age;
  if (checked('nac-psi-nursing')) score += 10;
  if (checked('nac-psi-neoplastic')) score += 30;
  if (checked('nac-psi-liver')) score += 20;
  if (checked('nac-psi-chf')) score += 10;
  if (checked('nac-psi-cva')) score += 10;
  if (checked('nac-psi-renal')) score += 10;
  if (checked('nac-psi-confusion')) score += 20;
  if (num('nac-psi-rr') >= 30) score += 20;
  if (num('nac-psi-sbp') < 90) score += 20;
  const temp = num('nac-psi-temp');
  if (temp < 35 || temp >= 40) score += 15;
  if (num('nac-psi-pulse') >= 125) score += 10;
  if (num('nac-psi-ph') < 7.35) score += 30;
  if (num('nac-psi-bun') >= 30) score += 20;
  if (num('nac-psi-sodium') < 130) score += 20;
  if (num('nac-psi-glucose') >= 250) score += 10;
  if (num('nac-psi-hct') < 30) score += 10;
  if (num('nac-psi-pao2') < 60) score += 10;
  if (checked('nac-psi-effusion')) score += 10;
  let psiClass = 'Clase I';
  let plan = 'Tratamiento extrahospitalario';
  if (score > 130) {
    psiClass = 'Clase V'; plan = 'Ingreso hospitalario';
  } else if (score >= 91) {
    psiClass = 'Clase IV'; plan = 'Ingreso hospitalario';
  } else if (score >= 71) {
    psiClass = 'Clase III'; plan = 'Valoración en Urgencias';
  } else if (score >= 51) {
    psiClass = 'Clase II'; plan = 'Tratamiento extrahospitalario';
  }
  const result = document.getElementById('nac-psi-result');
  const scoreEl = document.getElementById('nac-psi-score');
  const classEl = document.getElementById('nac-psi-class');
  const planEl  = document.getElementById('nac-psi-plan');
  if (result) result.style.display = 'block';
  if (scoreEl) scoreEl.textContent = `Puntaje total: ${Math.round(score)} puntos`;
  if (classEl) classEl.textContent = `${psiClass}`;
  if (planEl)  planEl.textContent  = `Conducta sugerida: ${plan}.`;
}

/* ═════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════ */
function renderHome() {
  document.getElementById('guide-list').innerHTML = GUIDES.map(g => `
    <div class="guide-card${g.ok ? ' available' : ' disabled'}"
         onclick="${g.ok ? `startGuide('${g.id}')` : ''}">
      <div class="guide-icon" style="background:${g.bg}">${g.icon}</div>
      <div class="guide-info">
        <h3>${g.name}</h3>
      </div>
      ${g.ok
        ? '<span class="guide-arrow">›</span>'
        : '<span class="guide-soon">Próx.</span>'
      }
    </div>
  `).join('');
}

/* ═════════════════════════════════════════════
   SCREEN NAV
═══════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${id}`).classList.add('active');
  window.scrollTo(0,0);
}

function goHome() {
  history = []; currentNode = 'start';
  showScreen('home');
}

function startGuide(id) {
  if (id === 'iia') {
    history = []; currentNode = 'start';
    showScreen('iia');
    renderNode('start');
  } else if (id === 'pa') {
    pa_history = []; pa_currentNode = 'pa_start';
    showScreen('pa');
    renderNodePA('pa_start');
  } else if (id === 'ppb') {
    ppb_history = []; ppb_currentNode = 'ppb_start';
    showScreen('ppb');
    renderNodePPB('ppb_start');
  } else if (id === 'pie') {
    pie_history = []; pie_currentNode = 'pie_start';
    showScreen('pie');
    renderNodePIE('pie_start');
  } else if (id === 'nac') {
    nac_history = []; nac_currentNode = 'nac_start';
    showScreen('nac');
    renderNodeNAC('nac_start');
  } else if (id === 'nih') {
    nih_history = []; nih_currentNode = 'nih_start';
    showScreen('nih');
    renderNodeNIH('nih_start');
  } else if (id === 'artritis') {
    ar_history = []; ar_currentNode = 'ar_start';
    showScreen('artritis');
    renderNodeAR('ar_start');
  } else if (id === 'osteo_f') {
    of_history = []; of_currentNode = 'of_start';
    showScreen('osteo_f');
    renderNodeOF('of_start');
  } else if (id === 'osteo_v') {
    ov_history = []; ov_currentNode = 'ov_start';
    showScreen('osteo_v');
    renderNodeOV('ov_start');
  } else if (id === 'nav') {
    nav_history = []; nav_currentNode = 'nav_start';
    showScreen('nav');
    renderNodeNAV('nav_start');
  } else if (id === 'itu') {
    itu_history = []; itu_currentNode = 'itu_start';
    showScreen('itu');
    renderNodeITU('itu_start');
  } else if (id === 'meni') {
    meni_history = []; meni_currentNode = 'meni_start';
    showScreen('meni');
    renderNodeMENI('meni_start');
  } else if (id === 'endo') {
    endo_history = []; endo_currentNode = 'endo_start';
    endo_caseContext = null;
    showScreen('endo');
    renderNodeENDO('endo_start');
  } else if (id === 'dcei') {
    dcei_history = []; dcei_currentNode = 'dcei_start';
    showScreen('dcei');
    renderNodeDCEI('dcei_start');
  } else if (id === 'cvc') {
    cvc_history = []; cvc_currentNode = 'cvc_start';
    showScreen('cvc');
    renderNodeCVC('cvc_start');
  }
}

function goBack() {
  if (history.length > 0) {
    currentNode = history.pop();
    renderNode(currentNode);
  } else { goHome(); }
}

function navigate(nodeId) {
  history.push(currentNode);
  currentNode = nodeId;
  renderNode(nodeId);
}

function restartFlow() {
  history = []; currentNode = 'start';
  renderNode('start');
}

/* ═════════════════════════════════════════════
   TABLES NAV
═══════════════════════════════════════════════ */
function showTables(fromNode) {
  tablesFromScreen = 'iia';
  document.getElementById('tables-back-btn').onclick = () => showScreen('iia');
  showScreen('tables');
  renderTablesUI(0);
}

function showTablesFromTreatment() {
  tablesFromScreen = 'iia';
  document.getElementById('tables-back-btn').onclick = () => showScreen('iia');
  showScreen('tables');
  renderTablesUI(0);
}

function scrollTabIntoView(i) {
  const bar = document.getElementById('tabs-bar');
  const btn = bar && bar.querySelectorAll('.tab-btn')[i];
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function renderTablesUI(idx) {
  activeTabIndex = idx;

  document.getElementById('tabs-bar').innerHTML = TABLES.map((t,i) => `
    <button class="tab-btn${i===idx?' active':''}" onclick="swipeToTable(${i})">${t.label}</button>
  `).join('');

  const cardsHTML = TABLES.map((t, i) => {
    let rowsHTML = '';

    if (t.id === 'qsofa') {
      rowsHTML = t.rows.map(r => `
        <tr><td>${r[0]}</td><td class="pts">${r[1]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl"><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.id === 'mannheim') {
      rowsHTML = t.rows.map(r => `
        <tr><td>${r[0]}</td><td class="pts">${r[1]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl tbl-compact"><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.id === 'duration') {
      rowsHTML = t.rows.map(r => `
        <tr><td style="font-size:11px;padding:5px 10px">${r[0]}</td><td class="pts" style="min-width:52px;font-size:11px;padding:5px 8px">${r[1]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl"><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.id === 'doses') {
      rowsHTML = t.rows.map(r => `
        <tr><td style="font-weight:700;min-width:80px;font-size:10.5px;padding:5px 10px">${r[0]}</td><td style="font-size:10.5px;white-space:pre-wrap;padding:5px 10px;line-height:1.4">${r[1]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl"><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.id === 'spectrum') {
      const colW = ['42%','20%','20%','18%'];
      const thCells = t.heads.map((h,i) =>
        `<th style="font-size:10.5px;padding:7px ${i===0?'10px':'4px'};text-align:${i===0?'left':'center'};background:#3a8dc4;color:white;width:${colW[i]}">${h}</th>`
      ).join('');
      rowsHTML = t.rows.map(r => `
        <tr>
          <td style="font-size:11px;padding:5px 10px;font-weight:600;word-break:keep-all">${r[0]}</td>
          <td style="font-size:12px;padding:5px 4px;text-align:center;color:#1a5f7a;font-weight:700">${r[1]}</td>
          <td style="font-size:12px;padding:5px 4px;text-align:center;color:#1a5f7a;font-weight:700">${r[2]}</td>
          <td style="font-size:12px;padding:5px 4px;text-align:center;color:#1a5f7a;font-weight:700">${r[3]}</td>
        </tr>`).join('');
      rowsHTML = `<table class="tbl" style="table-layout:fixed;width:100%"><thead><tr>${thCells}</tr></thead><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.id === 'oral') {
      const thCells = t.heads.map(h => `<th style="font-size:10px;padding:7px 10px;background:#3a8dc4;color:white">${h}</th>`).join('');
      rowsHTML = t.rows.map(r => `
        <tr><td style="font-weight:700;min-width:72px;font-size:10.5px;padding:5px 10px">${r[0]}</td><td style="font-size:10.5px;white-space:pre-wrap;padding:5px 10px;line-height:1.4">${r[1]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl"><thead><tr>${thCells}</tr></thead><tbody>${rowsHTML}</tbody></table>`;

    } else if (t.oneCol) {
      rowsHTML = t.rows.map(r => `<tr><td style="font-size:11.5px">• ${r[0]}</td></tr>`).join('');
      rowsHTML = `<table class="tbl tbl-compact"><tbody>${rowsHTML}</tbody></table>`;
    }

    return `
      <div class="table-swipe-card" id="swipe-card-${i}">
        <div class="table-swipe-inner">
          <div class="table-swipe-head">${t.title}</div>
          <div>${rowsHTML}</div>
          ${t.note ? `<div class="tbl-note">ℹ️ ${t.note}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  const dotsHTML = TABLES.map((_,i) =>
    `<div class="swipe-dot${i===idx?' active':''}" id="swipe-dot-${i}" onclick="swipeToTable(${i})"></div>`
  ).join('');

  document.getElementById('tables-panels').innerHTML = `
    <div class="tables-swipe-container" id="tables-swipe" style="flex:1">${cardsHTML}</div>
    <div class="swipe-dot-nav">${dotsHTML}</div>
  `;

  requestAnimationFrame(() => {
    const container = document.getElementById('tables-swipe');
    const card = document.getElementById('swipe-card-' + idx);
    if (container && card) container.scrollLeft = card.offsetLeft;
    scrollTabIntoView(idx);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.intersectionRatio >= 0.6) {
          const i = parseInt(e.target.id.replace('swipe-card-',''));
          activeTabIndex = i;
          document.querySelectorAll('.tab-btn').forEach((b,j) => b.classList.toggle('active', j===i));
          document.querySelectorAll('.swipe-dot').forEach((d,j) => d.classList.toggle('active', j===i));
          scrollTabIntoView(i);
        }
      });
    }, { root: document.getElementById('tables-swipe'), threshold: 0.6 });

    TABLES.forEach((_,i) => {
      const c = document.getElementById('swipe-card-' + i);
      if (c) obs.observe(c);
    });
  });
}

function swipeToTable(idx) {
  const container = document.getElementById('tables-swipe');
  const card = document.getElementById('swipe-card-' + idx);
  if (container && card) container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
}

/* ═════════════════════════════════════════════
   RENDER NODE
═══════════════════════════════════════════════ */
function renderNode(nodeId) {
  const node = nodes[nodeId] || NODES[nodeId];
  if (!node) return;

  // header meta
  document.getElementById('step-sublabel').textContent =
    node.type === 'treatment'    ? 'Tratamiento recomendado' :
    node.type === 'combo_low'    ? 'Tratamiento · Sin FR MDR' :
    node.type === 'combo_med'    ? 'Tratamiento · Con FR MDR' :
    node.type === 'info'         ? 'Evaluación inicial' :
    node.type === 'flow_diagram' ? 'Esquema general & criterios' :
    node.type === 'origin_page'  ? 'Tipo de IIA' :
    `Paso ${node.step} de ${TOTAL_STEPS}`;

  const pct = Math.round((node.step / TOTAL_STEPS) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-txt').textContent  = `Paso ${node.step} de ${TOTAL_STEPS}`;
  document.getElementById('path-txt').textContent      = history.length > 0 ? `${history.length} paso${history.length>1?'s':''} atrás` : '';

  let html = '';

  /* ── INFO ───────────────── */
  if (node.type === 'info') {
    const sectionsHTML = node.sections.map(s => `
      <div class="info-section">
        <div class="info-section-title">${s.h}</div>
        ${s.items.map(i => {
          const text = typeof i === 'string' ? i : i.t;
          const hl   = typeof i === 'object' && i.hl;
          return `<div class="info-row${hl?' highlight':''}"><span class="info-dot">•</span><span>${text}</span></div>`;
        }).join('')}
      </div>
    `).join('');

    html = `
      <div class="step-card" style="padding:14px">
        <div class="sospecha-banner">
          <h2>${node.badge.text}</h2>
        </div>
        ${sectionsHTML}
        <div class="alert-box" style="margin-top:14px">${node.alert}</div>
      </div>
      <div class="triangle-nav-wrap">
        <button class="triangle-nav-btn" onclick="navigate('${node.next}')">
          <div class="tri"></div>
          <span>Siguiente</span>
        </button>
      </div>`;
  }

  /* ── QUESTION ───────────── */
  else if (node.type === 'question') {
    const colMap = {
      green: { border:'#059669', bg:'#d1fae5', iconBg:'#059669', txt:'#065f46' },
      amber: { border:'#d97706', bg:'#fef3c7', iconBg:'#d97706', txt:'#92400e' },
      red:   { border:'#dc2626', bg:'#fee2e2', iconBg:'#dc2626', txt:'#991b1b' },
      navy:  { border:'#0d3a52', bg:'#e0f2fe', iconBg:'#0d3a52', txt:'#0c4a6e' },
    };

    let extra = '';

    if (node.criteria) {
      extra += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:12px">
        ${node.criteria.map(c=>`
          <div class="criteria-item">
            <span class="ci">${c.i}</span>${c.t}
          </div>`).join('')}
      </div>`;
    }

    if (node.rfList) {
      extra += `<div class="rf-list">
        ${node.rfList.map(r=>`<div class="rf-row"><span class="rf-dot">⚠</span><span>${r}</span></div>`).join('')}
      </div>`;
    }

    if (node.dualRF) {
      const { green, red } = node.dualRF;
      extra += `<div class="dual-rf">
        <div class="dual-box" style="background:${green.color}">
          <div class="dual-box-title" style="color:${green.textColor}">${green.title}</div>
          ${green.items.map(i=>`<div class="dual-row" style="color:${green.textColor}">· ${i}</div>`).join('')}
        </div>
        <div class="dual-box" style="background:${red.color}">
          <div class="dual-box-title" style="color:${red.textColor}">${red.title}</div>
          ${red.items.map(i=>`<div class="dual-row" style="color:${red.textColor}">· ${i}</div>`).join('')}
        </div>
      </div>`;
    }

    if (node.alert) {
      extra += `<div class="alert-box">${node.alert}</div>`;
    }

    html = `
      <div class="step-card">
        <div class="step-badge" style="background:${node.badge.bg};color:${node.badge.color}">${node.badge.text}</div>
        <h2>${node.title}</h2>
        <p class="sub">${node.sub}</p>
        ${extra}
      </div>
      <div class="choices">
        ${node.options.map(opt => {
          const c = colMap[opt.color] || colMap.navy;
          return `
            <button class="choice-btn"
                    style="border-color:${c.border};background:${c.bg}"
                    onclick="navigate('${opt.next}')">
              <div class="choice-icon" style="background:${c.iconBg}">${opt.icon}</div>
              <div class="choice-text">
                <strong style="color:${c.txt}">${opt.label}</strong>
                ${opt.desc ? `<small>${opt.desc}</small>` : ''}
              </div>
              <span class="choice-arrow" style="color:${c.border}">›</span>
            </button>`;
        }).join('')}
        ${history.length > 0
          ? `<button class="btn-back" onclick="goBack()">← Volver</button>` : ''}
      </div>`;
  }

  /* ── ORIGIN PAGE ────────────────────────── */
  else if (node.type === 'origin_page') {
    const choicesHTML = node.options.map(opt => `
      <button class="origin-choice"
              style="border-color:${opt.border};background:${opt.bg}"
              onclick="navigate('${opt.next}')">
        <div class="origin-choice-icon" style="background:${opt.border}">${opt.icon}</div>
        <div class="origin-choice-body">
          <div class="origin-choice-label" style="color:${opt.txt}">${opt.label}</div>
          <div class="origin-choice-tag"   style="color:${opt.txt}">${opt.tag}</div>
        </div>
        <div class="origin-choice-arrow" style="color:${opt.border}">›</div>
      </button>
    `).join('');

    html = `
      <div class="step-card">
        <div class="step-badge" style="background:#f1f5f9;color:#475569">Paso 3 · Tipo de IIA</div>
        <h2 style="margin-top:2px">Origen de la Infección</h2>
        <p class="sub">Seleccioná el escenario que corresponde al paciente</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        <div class="origin-section-title">Seleccionar tipo</div>
        ${choicesHTML}
      </div>

      <!-- Tabs de referencia -->
      <div class="ref-tabs-section">
        <div class="ref-tabs-bar">
          <button class="ref-tab-btn active"  onclick="switchRefTab(0)">FR Enterobacterias</button>
          <button class="ref-tab-btn"         onclick="switchRefTab(1)">Enterococcus R-amp</button>
          <button class="ref-tab-btn"         onclick="switchRefTab(2)">Staphylococcus MRSA</button>
        </div>

        <!-- Panel 0: FR enterobacterias MDR -->
        <div class="ref-panel active" id="ref-panel-0">
          <div class="fr-orange-header">Factores de riesgo para enterobacterias MDR</div>
          <div class="fr-body">
            <div class="fr-cols">
              <div>
                <div class="fr-item">Hospitalización en los últimos 3 meses</div>
                <div class="fr-item">Internación en centros de tercer nivel o geriátricos</div>
                <div class="fr-item">Antibióticos últimos 3 meses (β-lactámicos + inhibidores, cefalosporinas 3G/4G, quinolonas)</div>
                <div class="fr-item">Catéter urinario > 30 días</div>
              </div>
              <div>
                <div class="fr-item">Gastrostomía</div>
                <div class="fr-item">Hemodiálisis, quimioterapia, radioterapia</div>
                <div class="fr-item">Diabetes</div>
                <div class="fr-item">Infecc./coloniz. BGN BLEE (últimos 6 meses)</div>
                <div class="fr-item">Procedimiento biliar invasivo (CPER)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 1: Tabla 3 Enterococcus -->
        <div class="ref-panel" id="ref-panel-1">
          <div class="tabla-block">
            <div class="tabla-block-head">Tabla 3 · FR para <em>Enterococcus sp</em> resistente a ampicilina</div>
            <div class="tabla-block-row">
              Inmunosupresión (hemato-oncológica, trasplante, quimioterapia) y desarrollo de IIA bajo ATB prolongada (> 10 días)
            </div>
            <div class="tabla-block-row">
              ATB previo reciente (último mes) con cefalosporinas o β-lactámicos de amplio espectro durante > 10 días
            </div>
            <div class="tabla-block-row">
              Peritonitis hospitalaria en casos de:
              <div class="tabla-sub-item">Enfermedad hepato-biliar con procedimiento invasivo o implante de dispositivo</div>
              <div class="tabla-sub-item">Trasplante Hepático</div>
              <div class="tabla-sub-item">Desarrollada bajo ATB en curso > 7 días</div>
            </div>
            <div class="tabla-block-row">
              Cultivo positivo para <em>Enterococcus sp</em> R-amp en otro sitio (orina, herida, hisopado u otro)
            </div>
          </div>
        </div>

        <!-- Panel 2: Tabla 4 MRSA -->
        <div class="ref-panel" id="ref-panel-2">
          <div class="tabla-block">
            <div class="tabla-block-head">Tabla 4 · FR para <em>Staphylococcus sp</em> resistente a meticilina</div>
            <div class="tabla-block-row">
              Peritonitis terciaria sin respuesta al tratamiento o con cocos Gram positivos en estudio directo del líquido peritoneal
            </div>
            <div class="tabla-block-row">
              Cultivo con <em>Staphylococcus sp</em> resistente a meticilina en otro sitio (orina, herida, catéter, hisopado nasal o faríngeo u otro)
            </div>
            <div class="tabla-block-row">
              Antecedente de infección o colonización por <em>S. aureus</em> resistente a meticilina
            </div>
          </div>
        </div>
      </div>

      <div class="choices">
        <button class="btn-back" onclick="goBack()">← Volver</button>
      </div>`;
  }

  /* ── HOSP SUBTYPE ───────────────────────── */
  else if (node.type === 'hosp_subtype') {
    html = `
      <div class="step-card">
        <div class="step-badge" style="background:${node.badge.bg};color:${node.badge.color}">${node.badge.text}</div>
        <h2>${node.title}</h2>
        <p class="sub">${node.sub}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:9px">
        ${node.options.map(opt => `
          <button onclick="navigate('${opt.next}')"
            style="width:100%;text-align:left;border:2px solid ${opt.border};background:${opt.bg};
                   border-radius:var(--radius);padding:13px 14px;cursor:pointer;
                   font-family:inherit;box-shadow:var(--shadow);transition:transform .12s"
            ontouchstart="this.style.transform='scale(.98)'"
            ontouchend="this.style.transform=''">
            <div style="font-size:13px;font-weight:800;color:${opt.color};margin-bottom:7px">${opt.title}</div>
            ${opt.items.map(i => `
              <div style="display:flex;gap:7px;font-size:12px;color:${opt.color};padding:2px 0;line-height:1.4;opacity:.9">
                <span style="flex-shrink:0">·</span><span>${i}</span>
              </div>`).join('')}
            <div style="text-align:right;margin-top:8px;font-size:18px;color:${opt.border}">›</div>
          </button>
        `).join('')}
      </div>
      <div class="choices">
        <button class="btn-back" onclick="goBack()">← Volver</button>
      </div>`;
  }

  /* ── COMBO LOW ──────────────────────────── */
  else if (node.type === 'combo_low') {
    html = `
      <!-- Header verde -->
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)">
        <div class="combo-header" style="background:#059669">
          IIA comunitaria SIN factores de riesgo de microorganismos multirresistentes
        </div>
        <div class="combo-body">
          <!-- Foco Hepático -->
          <div class="foco-row">
            <div class="foco-label">Foco Hepático, Biliar o Gastroduodenal</div>
            <div class="foco-content">
              <div class="fc-main">• <strong>Ampicilina/sulbactam</strong> 3 g iv c/6 hs</div>
              <div class="fc-main">• Si criterios <button class="t1-chip" onclick="event.stopPropagation();openTabla1()"><span class="t1-chip-dot"></span>Tabla 1</button>: agregar <strong>Gentamicina</strong> 5 mg/Kg iv c/24 hs (una vez/día)</div>
              <div class="fc-alt">Alergia grave β-lactámicos:</div>
              <div class="fc-alt-item">Moxifloxacina 400 mg iv/día ± Gentamicina</div>
            </div>
          </div>
          <!-- Foco Intestinal -->
          <div class="foco-row">
            <div class="foco-label">Foco Delgado, Colon, Apéndice, Recto</div>
            <div class="foco-content">
              <div class="fc-main">• <strong>Ampicilina/sulbactam</strong> 3 g iv c/6 hs + <strong>Gentamicina</strong> 5 mg/Kg iv c/24 hs</div>
              <div class="fc-alt">Alergia grave β-lactámicos:</div>
              <div class="fc-alt-item">• Metronidazol 500 mg iv c/8 hs + Gentamicina 5 mg/Kg iv c/24 hs</div>
              <div class="fc-alt-item">• Ciprofloxacina 400 mg iv c/8 hs</div>
            </div>
          </div>
        </div>
      </div>
      <div class="choices">
        <button class="btn-back" onclick="goBack()">← Volver</button>
        <button class="btn-back" onclick="restartFlow()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── COMBO MED (comunitaria con FR / hospitalaria sin otros FR) ─ */
  else if (node.type === 'combo_med') {
    const fromHospital = history.includes('hospital_subtype');
    const headerBg    = fromHospital ? '#1a5f7a' : '#d97706';
    const headerTitle = fromHospital
      ? 'IIA Hospitalaria · Sin otros factores de riesgo para MMR'
      : 'IIA comunitaria CON RIESGO de enterobacterias multirresistentes';
    const headerNote  = fromHospital
      ? '⚠️ El esquema antibiótico es el mismo que para IIA comunitaria con riesgo de enterobacterias MDR (Piperacilina/tazobactam ± amikacina).'
      : null;

    html = `
      <!-- Header contextual -->
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md);margin-bottom:2px">
        <div class="combo-header" style="background:${headerBg}">${headerTitle}</div>
        ${headerNote ? `
        <div style="background:white;padding:9px 13px;border:1px solid #bae6fd;border-top:none;border-radius:0 0 var(--radius) var(--radius)">
          <div style="font-size:11.5px;color:#0c4a6e;line-height:1.5">${headerNote}</div>
        </div>` : ''}
      </div>

      <!-- Caja salmón: Foco Hepático -->
      <div class="salmon-box">
        <div style="font-size:11px;font-weight:800;color:#7f1d1d;margin-bottom:7px;text-transform:uppercase;letter-spacing:.4px">
          🏮 Hepático / Biliar / Gastroduodenal
        </div>
        <div class="salmon-line">• <strong>Piperacilina/tazobactam</strong> 4,5 g iv c/6 hs</div>
        <div class="salmon-line">• Si criterios <button class="t1-chip" onclick="event.stopPropagation();openTabla1()"><span class="t1-chip-dot"></span>Tabla 1</button>: agregar <strong>Amikacina</strong> 20 mg/Kg iv c/24 hs</div>
        <div class="salmon-line bold">• Sepsis con disfunciones mayores (hemodinámica, respiratoria o renal): sustituir pip/tazo por <strong>Meropenem</strong> carga 2 g iv en 1 h → luego 2 g iv en perfusión ≥ 3 hs c/8 hs</div>
        <div class="salmon-line" style="color:#64748b;font-size:11px;margin-top:4px">Alergia a β-lactámicos: Tigeciclina 200 mg iv carga → 100 mg iv c/12 hs + Amikacina 20 mg/Kg c/24 hs</div>
      </div>

      <!-- Caja salmón: Foco Intestinal -->
      <div class="salmon-box">
        <div style="font-size:11px;font-weight:800;color:#7f1d1d;margin-bottom:7px;text-transform:uppercase;letter-spacing:.4px">
          🌀 Delgado / Colon / Apéndice / Recto
        </div>
        <div class="salmon-line">• <strong>Piperacilina/tazobactam</strong> 4,5 g iv c/6 hs + <strong>Amikacina</strong> 20 mg/Kg c/24 hs (una vez/día)</div>
        <div class="salmon-line bold">• Sepsis con disfunciones mayores o acumulación de FR para enterobacterias multirresistentes: sustituir pip/tazo por <strong>Imipenem</strong> 0,5 g iv c/6 hs</div>
        <div class="salmon-line" style="color:#64748b;font-size:11px;margin-top:4px">Alergia a β-lactámicos: Tigeciclina 200 mg iv carga → 100 mg iv c/12 hs + Amikacina 20 mg/Kg c/24 hs</div>
      </div>

      <div class="choices">
        <button class="btn-back" onclick="goBack()">← Volver</button>
        <button class="btn-back" onclick="restartFlow()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  /* ── FLOW DIAGRAM (pg 2) ────────────────── */
  else if (node.type === 'flow_diagram') {
    html = `
      <!-- Diagrama de flujo -->
      <div class="step-card" style="padding:13px">
        <div class="fd-wrap">
          <div class="fd-block fd-blue">INFECCIÓN INTRA-ABDOMINAL (IIA)</div>
          <div class="fd-arrow">▼</div>
          <div class="fd-block fd-orange" style="border-radius:6px">INICIAR ANTIBIÓTICOS I/V SEGÚN FOCO SOSPECHADO O DOCUMENTADO</div>
          <div class="fd-arrow">▼</div>
          <div class="fd-block fd-yellow" style="border-radius:6px;width:100%">
            <div class="fd-yellow-label">Considerar</div>
            <div class="fd-cols">
              <div class="fd-col">Riesgo de microorganismos multiresistentes</div>
              <div class="fd-col">Inicio hospitalario o postoperatorio</div>
              <div class="fd-col">Presencia criterios de alto riesgo de mala evolución y muerte</div>
            </div>
          </div>
          <div class="fd-arrow">▼</div>
          <div class="fd-foco-wrap">
            <div class="fd-foco">
              CONTROL QUIRÚRGICO DE FOCO
              <div class="fd-foco-sub">Envío de muestras para cultivo, salvo IIA comunitaria de bajo riesgo sin factor de riesgo para microorganismos multirresistentes</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flip card -->
      <div style="padding:0 0 4px">
        <div style="font-size:11px;color:var(--gray-400);font-weight:600;padding:0 2px 5px">
          📋 Tabla 1 — toca la tarjeta para ver la valoración de sistemas
        </div>
        <div class="flip-card-outer" id="flip-card" onclick="toggleFlip()">
          <div class="flip-card-inner">
            <!-- FRENTE: Tabla 1 Alto Riesgo -->
            <div class="flip-face flip-front">
              <div class="flip-front-head">Tabla 1 · IIA Alto Riesgo</div>
              <div class="flip-front-body">
                <div class="flip-criteria-grid">
                  <div class="flip-crit">Sepsis o disfunciones orgánicas</div>
                  <div class="flip-crit">Inmunosupresión</div>
                  <div class="flip-crit" style="list-style:none;padding:1px 0">
                    <button class="qsofa-chip" onclick="event.stopPropagation();openQsofa()">
                      <span class="chip-dot"></span>Quick-SOFA ≥ 2 &nbsp;ℹ️
                    </button>
                  </div>
                  <div class="flip-crit">Enfermedad maligna</div>
                  <div class="flip-crit">Asociada a cuidados de salud</div>
                  <div class="flip-crit">Índice Pronóstico Mannheim alto</div>
                  <div class="flip-crit">Retraso a la cirugía > 24 hs</div>
                  <div class="flip-crit">Peritonitis difusa, generalizada</div>
                  <div class="flip-crit">Imposibilidad control del foco</div>
                  <div class="flip-crit">Embarazo</div>
                  <div class="flip-crit">Edad > 70 años</div>
                  <div class="flip-crit">Comorbilidad hepática, renal, cardíaca</div>
                </div>
              </div>
            </div>
            <!-- REVERSO: Valoración de sistemas -->
            <div class="flip-face flip-back">
              <div class="flip-back-head">Valoración de sistemas · Alto Riesgo</div>
              <div class="flip-back-body">
                <div class="flip-back-item">• Valoración de sistemas</div>
                <div class="flip-back-sub">- Gasometría con Lactato</div>
                <div class="flip-back-sub">- Función renal, ionograma</div>
                <div class="flip-back-sub">- Crasis, enzimograma hepático</div>
                <div class="flip-back-item">• Reanimación hemodinámica y otras disfunciones</div>
                <div class="flip-back-item">• Valorar ingreso en UCI/CI</div>
                <div class="flip-back-item">• Hemocultivos periféricos</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-hint">↺ Toca la tarjeta para girar</div>
      </div>

      <!-- Navegación -->
      <div class="choices">
        <button class="btn-primary" onclick="navigate('${node.next}')">Evaluar tipo de IIA →</button>
        <button class="btn-back" onclick="goBack()">← Volver</button>
      </div>`;
  }

  /* ── TREATMENT ──────────────────────────── */
  else if (node.type === 'treatment') {
    const regColors = {
      '#d1fae5':'#065f46', '#fef3c7':'#92400e', '#fee2e2':'#991b1b',
      '#f1f5f9':'#334155', '#ede9fe':'#4c1d95',
    };

    html = `
      <div style="border-radius:var(--radius) var(--radius) 0 0;background:${node.color};padding:15px 16px;color:white">
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;opacity:.65;margin-bottom:5px">Tratamiento Recomendado</div>
        <div style="font-size:15px;font-weight:800;line-height:1.3">${node.title}</div>
        <div style="font-size:12px;opacity:.8;margin-top:3px">${node.focus}</div>
      </div>
      <div class="treatment-body" style="border-radius:0 0 var(--radius) var(--radius)">
        ${node.regimens.map(r => `
          <div class="regimen-block" style="background:${r.bg}">
            <div class="regimen-label" style="color:${r.labelColor||regColors[r.bg]||'#334155'}">${r.label}</div>
            ${r.lines.map(l=>`<div class="drug-line">${l}</div>`).join('')}
          </div>
        `).join('')}

        ${node.note ? `<div class="note-box">${node.note}</div>` : ''}

        <div class="duration-box">
          <h4>⏱️ Duración — ${node.durationRef}</h4>
          <p>${node.duration}</p>
        </div>

        <div class="divider"></div>
        <div class="reevaluar-note">
          ⚠️ Reevaluar esquema según cultivos y respuesta clínica.<br>
          Enviar muestras intraabdominales en <em>todas</em> las exploraciones o punciones.
        </div>
        <button class="btn-tables" onclick="showTablesFromTreatment()">📋 Ver Tablas de Referencia</button>
      </div>

      <div class="choices" style="margin-top:10px">
        <button class="btn-back" onclick="goBack()">← Volver</button>
        <button class="btn-back" onclick="restartFlow()" style="margin-top:4px">↩️ Nuevo caso</button>
      </div>`;
  }

  const body = document.getElementById('flow-body');
  body.innerHTML = html;
  window.scrollTo(0,0);
  updateMinimap(nodeId);
}

function switchRefTab(idx) {
  [0,1,2].forEach(i => {
    const panel = document.getElementById(`ref-panel-${i}`);
    const btn   = document.querySelectorAll('.ref-tab-btn')[i];
    if (!panel || !btn) return;
    panel.classList.toggle('active', i === idx);
    btn.classList.toggle('active',   i === idx);
  });
}

const MM_IDS = ['start','page2','origin','focus_low','focus_medium','hospital_subtype','treatment_high'];

const JUMP_PATHS = {
  'start':            [],
  'page2':            ['start'],
  'origin':           ['start','page2'],
  'focus_low':        ['start','page2','origin'],
  'focus_medium':     ['start','page2','origin'],
  'hospital_subtype': ['start','page2','origin'],
  'treatment_high':   ['start','page2','origin','hospital_subtype'],
};

function jumpTo(id) {
  if (id === currentNode) return;
  if (JUMP_PATHS[id] !== undefined) {
    history = [...JUMP_PATHS[id]];
    currentNode = id;
    renderNode(id);
  }
}

function toggleMinimap() {
  const panel = document.getElementById('minimap-panel');
  const btn   = document.getElementById('minimap-arrow-btn');
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}

function updateMinimap(nodeId) {
  MM_IDS.forEach(id => {
    const rect = document.getElementById('mm-' + id);
    const txt  = document.getElementById('mmt-' + id);
    if (!rect) return;
    const isCurrent = (id === nodeId);
    const isVisited = history.includes(id);
    rect.setAttribute('fill',
      isCurrent ? '#f59e0b' :
      isVisited ? 'rgba(255,255,255,.28)' :
      'rgba(255,255,255,.1)'
    );
    rect.setAttribute('stroke', isCurrent ? '#fbbf24' : 'none');
    rect.setAttribute('stroke-width', isCurrent ? '2' : '0');
    if (txt) txt.setAttribute('fill',
      isCurrent ? '#1e293b' :
      isVisited ? 'rgba(255,255,255,.85)' :
      'rgba(255,255,255,.45)'
    );
  });
  // Highlight Comunitaria grouper if either child is current or visited
  const comGroup = document.getElementById('mm-comunitaria');
  if (comGroup) {
    const comActive = (nodeId==='focus_low'||nodeId==='focus_medium');
    const comVisited = (history.includes('focus_low')||history.includes('focus_medium'));
    comGroup.setAttribute('fill',
      comActive  ? 'rgba(245,158,11,.15)' :
      comVisited ? 'rgba(255,255,255,.12)' :
      'rgba(255,255,255,.05)'
    );
    comGroup.setAttribute('stroke',
      comActive ? '#f59e0b' : 'rgba(255,255,255,.15)'
    );
  }
}

function openModalAmilasa() {
  const m = document.getElementById('modal-amilasa');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeModalAmilasa() {
  const m = document.getElementById('modal-amilasa');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}


function openTabla1() {
  const m = document.getElementById('modal-tabla1');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  // reset flip
  const c = document.getElementById('t1-flip-card');
  if (c) c.classList.remove('flipped');
}
function closeTabla1() {
  const m = document.getElementById('modal-tabla1');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}
function toggleT1Flip() {
  const c = document.getElementById('t1-flip-card');
  if (c) c.classList.toggle('flipped');
}

function openQsofa() {
  const m = document.getElementById('modal-qsofa');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeQsofa() {
  const m = document.getElementById('modal-qsofa');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}

function toggleFlip() {
  const card = document.getElementById('flip-card');
  if (card) card.classList.toggle('flipped');
}

/* ═════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
renderHome();

// Alias so node data can use both const names
const nodes = NODES;
/* NODES_PPB (PPB · G-3) loaded via flowcharts/ppb.js */


/* NODES_PA (PA · G-2) loaded via flowcharts/pa.js */
