/* ═════════════════════════════════════════════
   DATA: GUIDES
═══════════════════════════════════════════════ */
const GUIDES = [
  { id:'iia',      icon:'🦠', bg:'#fee2e2', name:'Infección Intra-Abdominal (IIA)',                                             ok:true  },
  { id:'pa',       icon:'🔥', bg:'#fef9c3', name:'Pancreatitis Aguda',                                                          ok:true  },
  { id:'ppb',      icon:'🩹', bg:'#fef3c7', name:'Infección de Piel y Partes Blandas',                                          ok:true  },
  { id:'pie',      icon:'🦶', bg:'#fef3c7', name:'Infección en Pie Diabético',                                                  ok:false },
  { id:'nac',      icon:'🫁', bg:'#e0f2fe', name:'Neumonía Aguda',                                                              ok:false },
  { id:'nih',      icon:'🏥', bg:'#e0f2fe', name:'Neumonía Intrahospitalaria',                                                  ok:false },
  { id:'nav',      icon:'💨', bg:'#e0f2fe', name:'Neumonía Asociada a la Ventilación Mecánica (NAV)',                           ok:false },
  { id:'itu',      icon:'💧', bg:'#d1fae5', name:'Infección del Tracto Urinario (ITU)',                                         ok:false },
  { id:'meni',     icon:'🧠', bg:'#fef3c7', name:'Meningoencefalitis Aguda Comunitaria en Paciente Inmunocompetente',           ok:false },
  { id:'endo',     icon:'❤️', bg:'#fee2e2', name:'Sospecha Clínica de Endocarditis Infecciosa (EI)',                           ok:false },
  { id:'dcei',     icon:'⚡', bg:'#fee2e2', name:'DCEI y Sospecha de Proceso Infeccioso',                                      ok:false },
  { id:'cvc',      icon:'💉', bg:'#d1fae5', name:'Infección Asociada a Catéteres Centrales',                                   ok:false },
  { id:'artritis', icon:'🦴', bg:'#e0f2fe', name:'Artritis Séptica Nativa Aguda',                                              ok:false },
  { id:'osteo_f',  icon:'🦴', bg:'#e0f2fe', name:'Osteomielitis de Hueso Largo Vinculada a Fractura',                          ok:false },
  { id:'osteo_v',  icon:'🦴', bg:'#e0f2fe', name:'Osteomielitis Vertebral / Espondilodiscitis',                                ok:false },
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
