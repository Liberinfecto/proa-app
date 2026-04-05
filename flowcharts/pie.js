/* PIE · Infección en Pie Diabético (G-4) */
/* ═════════════════════════════════════════════
   DATA: DECISION TREE  (Pie Diabético · G-4)
═══════════════════════════════════════════════ */
const NODES_PIE = {

  pie_start:{ step:1, type:'pie_start', next:'pie_severity' },

  pie_severity:{ step:2, type:'pie_severity', options:[
    { label:'LEVE', gf:'#059669', gt:'#047857', sc:'#059669', tc:'#065f46',
      criteria:['Eritema con extensión < 2 cm','qSOFA 0 / SIRS 0'], next:'pie_leve' },
    { label:'MODERADA', gf:'#d97706', gt:'#b45309', sc:'#d97706', tc:'#92400e',
      criteria:['Eritema con extensión > 2 cm','qSOFA 0 / SIRS 0–1','Compromiso más profundo que piel y partes blandas (músculo, tendón, articulación, hueso)'], next:'pie_moderada' },
    { label:'GRAVE', gf:'#dc2626', gt:'#991b1b', sc:'#dc2626', tc:'#991b1b',
      criteria:['Eritema con extensión > 2 cm','qSOFA ≥ 1 / SIRS ≥ 2'], next:'pie_grave' },
  ]},

  pie_leve:{ step:3, type:'pie_leve',
    color:'#059669', gt:'#047857', title:'Infección Leve',
    organisms:[
      '<em>Streptococcus</em> spp.',
      '<em>Staphylococcus aureus</em> sensible a meticilina (SAMS)',
      'Considerar BGN si exposición a ATB en los 3 meses previos',
    ],
    regimens:[
      { label:'Sin FR para SAMR — Primera línea', bg:'#d1fae5', lc:'#065f46',
        lines:[
          '<span class="drug-name">Cefradina o Cefalexina</span> 1000 mg VO c/8 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Amoxicilina-clavulánico</span> 875/125 mg VO c/12 hs',
        ]},
      { label:'Con FR para SAMR — Agregar al esquema anterior', bg:'#ede9fe', lc:'#4c1d95',
        lines:[
          '<span class="drug-name">TMP-SMX</span> 160/800 mg VO c/12 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Doxiciclina</span> 100 mg VO c/12 hs',
          '<button onclick="event.stopPropagation();showTablesPIE(1)" class="ibtn" style="background:#ede9fe;border-color:#7c3aed;color:#4c1d95"><span class="dsm" style="background:#7c3aed"></span>Tabla 2 — FR MDR</button>',
        ]},
      { label:'Si alergia severa a β-lactámicos &nbsp;<button onclick="event.stopPropagation();showTablesPIE(2)" class="ibtn" style="background:#fef3c7;border-color:#d97706;color:#92400e;font-size:10px;padding:2px 9px;vertical-align:middle;line-height:1.4">Tabla 3</button>', bg:'#fef3c7', lc:'#92400e',
        lines:[
          '<span class="drug-name">Clindamicina</span> 600 mg VO c/6–8 hs',
        ]},
    ],
    duration:'7–14 días · Reevaluar a las 48–72 hs',
    interdisciplinary:[
      {lbl:'Fisiatría', txt:'medidas para evitar sobrecarga'},
      {lbl:'Cirugía vascular', txt:'valoración de arteriopatía'},
      {lbl:'Endocrinología/Diabetología', txt:'control metabólico'},
    ],
  },

  pie_moderada:{ step:3, type:'pie_mod_tx',
    color:'#d97706', gt:'#b45309',
    title:'Moderada',
    setting:'Internación Domiciliaria u Hospitalaria',
    organisms:[
      'Cocos GP: <em>Streptococcus</em> spp. · <em>Staphylococcus aureus</em> (incluyendo SAMR)',
      'BGN: Enterobacterales · <em>Pseudomonas aeruginosa</em>',
      'Anaerobios: <em>Bacteroides fragilis</em>',
      'Ambientales: <em>Aeromonas</em> spp.',
    ],
    cultivos:[
      'Debridaje y curetaje de la lesión',
      'Aspirado de colección profunda',
      'Muestra tisular en block',
      'En amputación: muestra de hueso proximal',
      'Hemocultivos: 2 set',
    ],
    cards:[
      { id:0,
        frontTitle:'Sin exposición a antibióticos previa',
        gf:'#d97706', gt:'#b45309',
        regimens:[
          { label:'Primera línea', bg:'#fef3c7', lc:'#92400e',
            lines:[
              '<span class="drug-name">Ampicilina-sulbactam</span> 1,5–3 g iv c/6 hs',
              '+ <span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/8 hs',
            ]},
          { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', lc:'#475569',
            lines:[
              '<span class="drug-name">Ciprofloxacina</span> 400 mg iv c/8 hs',
              '+ <span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/8 hs',
            ]},
          { label:'Int. domiciliaria <button onclick="event.stopPropagation();showTablesPIE(3)" class="ibtn" style="background:#d1fae5;border-color:#059669;color:#065f46;font-size:10px;padding:2px 8px;vertical-align:middle">Anexo 4</button>', bg:'#d1fae5', lc:'#065f46',
            lines:[
              '<span class="drug-name">Ceftriaxona</span> 2 g iv c/24 hs',
              '+ <span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/12 hs',
            ]},
        ],
      },
      { id:1,
        frontTitle:'Con FR para microorganismos multirresistentes',
        gf:'#dc2626', gt:'#991b1b',
        regimens:[
          { label:'Primera línea', bg:'#fee2e2', lc:'#991b1b',
            lines:[
              '<span class="drug-name">Pip/Tazo</span> 4,5 g iv c/6 hs <em style="color:#94a3b8">— o —</em> <span class="drug-name">Meropenem</span> 1 g iv c/8 hs',
              '<div style="font-size:16px;font-weight:900;color:#991b1b;line-height:1;margin:3px 0">+</div>',
              '<span class="drug-name">Vancomicina</span> 25 mg/kg iv carga → 15–20 mg/kg c/12 hs',
              '<em style="color:#94a3b8;display:block;margin:1px 0">— o —</em>',
              '<span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/8 hs',
            ]},
          { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', lc:'#475569',
            lines:[
              '<span class="drug-name">Ciprofloxacina</span> 400 mg iv c/8 hs + <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs',
              '± <span class="drug-name">Metronidazol</span> 500 mg iv c/8 hs <em style="color:#64748b">(si anaerobios)</em>',
              '<div style="font-size:16px;font-weight:900;color:#475569;line-height:1;margin:3px 0">+</div>',
              '<span class="drug-name">Vancomicina</span> 25 mg/kg iv carga → 15–20 mg/kg c/12 hs',
              '<em style="color:#94a3b8;display:block;margin:1px 0">— o —</em>',
              '<span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/8 hs',
            ]},
          { label:'Int. domiciliaria <button onclick="event.stopPropagation();showTablesPIE(3)" class="ibtn" style="background:#d1fae5;border-color:#059669;color:#065f46;font-size:10px;padding:2px 8px;vertical-align:middle">Anexo 4</button>', bg:'#d1fae5', lc:'#065f46',
            lines:[
              '<span class="drug-name">Ertapenem</span> 1 g IM o iv c/24 hs + <span class="drug-name">TMP-SMX</span> 5–10 mg/kg TMP iv c/12 hs',
            ]},
          { label:'Extremadamente resistentes (XDR)', bg:'#ede9fe', lc:'#4c1d95',
            lines:['🩺 <strong>Consultar con Infectología</strong>']},
        ],
      },
    ],
    monitoring:{
      header:'Monitorice y reevalúe a las 48–72 hs',
      headerSub:'· Ajuste o mantenga plan ATB según resultados microbiológicos',
      sinOsteo:{
        title:'En ausencia de osteomielitis',
        items:[
          '<strong>Duración:</strong> 14–21 días',
          'Determine duración en función de abordaje quirúrgico y evolución',
          'Considere terapia secuencial VO a las <strong>48–72 hs</strong>, según disponibilidad y criterios clínicos',
        ],
      },
      conOsteo:{
        title:'En presencia de osteomielitis',
        items:[
          'Considere terapia secuencial VO a los <strong>5–7 días</strong>, según disponibilidad y criterios clínicos',
          '<strong>Con resección total:</strong> 2–5 días',
          '<strong>Resección con cultivos de hueso proximal positivos:</strong> al menos 3 semanas',
          '<strong>Sin resección o afectación extensa:</strong> al menos 6 semanas — Evalúe necesidad de terapia supresiva si infección extensa',
        ],
      },
      urgente:{
        title:'Valoración urgente por',
        items:[
          '<strong>Cirugía vascular:</strong> valoración para control de foco, enfermedad vascular (según corresponda)',
          '<strong>Cirugía general:</strong> valoración para control de foco',
          '<strong>Traumatología:</strong> valoración para control de foco',
        ],
      },
      seguimiento:{
        title:'Seguimiento por equipo multidisciplinario',
        items:[
          '<strong>Infectología:</strong> monitorización y optimización de tratamiento antimicrobiano',
          '<strong>Traumatología/fisiatría:</strong> medidas para evitar sobrecarga, necesidad de prótesis / órtesis',
          '<strong>Endocrinología/diabetología:</strong> control glucémico/metabólico',
        ],
      },
    },
  },

  pie_grave:{ step:3, type:'pie_mod_tx', singleCard:true,
    color:'#991b1b', gt:'#7f1d1d',
    title:'Grave',
    setting:'Internación Hospitalaria',
    organisms:[
      'Cocos GP: <em>Streptococcus</em> spp. · <em>Staphylococcus aureus</em> (incluyendo SAMR)',
      'BGN: Enterobacterales · <em>Pseudomonas aeruginosa</em>',
      'Anaerobios: <em>Bacteroides fragilis</em>',
      'Ambientales: <em>Aeromonas</em> spp.',
    ],
    cultivos:[
      'Debridaje y curetaje de la lesión',
      'Aspirado de colección profunda',
      'Muestra tisular en block',
      'En amputación: muestra de hueso proximal',
      'Hemocultivos: 2 set',
    ],
    treatment:{
      id:'grave',
      frontTitle:'Tratamiento — Sepsis / Shock Séptico',
      gf:'#991b1b', gt:'#7f1d1d',
      regimens:[
        { label:'Elección', bg:'#fee2e2', lc:'#991b1b',
          lines:[
            '<span class="drug-name">Pip/Tazo</span> 4,5 g iv c/6 hs en infusión prolongada',
            '<em style="color:#94a3b8;display:block;margin:1px 0">— o —</em>',
            '<span class="drug-name">Meropenem</span> carga 2 g iv en 1 h → luego 1–2 g iv en infusión de 3 hs c/8 hs',
          ]},
        { label:'Asociar', bg:'#fef3c7', lc:'#92400e',
          lines:[
            '<span class="drug-name">Vancomicina</span> 25 mg/kg iv carga → 15–20 mg/kg iv c/12 hs',
            '<em style="color:#94a3b8;display:block;margin:1px 0">— o —</em>',
            '<span class="drug-name">Linezolid</span> 600 mg iv c/12 hs',
          ]},
        { label:'⚠️ Si FR para enterobacterias productoras de carbapenemasas', bg:'#f1f5f9', lc:'#475569',
          lines:[
            'Agregar: <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs',
            '<em style="color:#94a3b8;display:block;margin:1px 0">— o —</em>',
            '<span class="drug-name">Colistina</span> 5 mg/kg iv carga → luego 2,5 mg/kg iv c/12 hs',
          ]},
        { label:'Extremadamente resistentes (XDR)', bg:'#ede9fe', lc:'#4c1d95',
          lines:['🩺 <strong>Consultar con Infectología</strong>']},
      ],
    },
    monitoring:{
      header:'Monitorice y reevalúe a las 48–72 hs',
      headerSub:'· Ajuste o mantenga plan ATB según resultados microbiológicos',
      sinOsteo:{
        title:'En ausencia de osteomielitis',
        items:[
          '<strong>Duración:</strong> 14–21 días',
          'Determine duración en función de abordaje quirúrgico y evolución',
          'Considere terapia secuencial VO a las <strong>48–72 hs</strong>, según disponibilidad y criterios clínicos',
        ],
      },
      conOsteo:{
        title:'En presencia de osteomielitis',
        items:[
          'Considere terapia secuencial VO a los <strong>5–7 días</strong>, según disponibilidad y criterios clínicos',
          '<strong>Con resección total:</strong> 2–5 días',
          '<strong>Resección con cultivos de hueso proximal positivos:</strong> al menos 3 semanas',
          '<strong>Sin resección o afectación extensa:</strong> al menos 6 semanas — Evalúe necesidad de terapia supresiva si infección extensa',
        ],
      },
      urgente:{
        title:'Valoración urgente por',
        items:[
          '<strong>Cirugía vascular:</strong> valoración para control de foco, enfermedad vascular (según corresponda)',
          '<strong>Cirugía general:</strong> valoración para control de foco',
          '<strong>Traumatología:</strong> valoración para control de foco',
        ],
      },
      seguimiento:{
        title:'Seguimiento por equipo multidisciplinario',
        items:[
          '<strong>Infectología:</strong> monitorización y optimización de tratamiento antimicrobiano',
          '<strong>Traumatología/fisiatría:</strong> medidas para evitar sobrecarga, necesidad de prótesis / órtesis',
          '<strong>Endocrinología/diabetología:</strong> control glucémico/metabólico',
        ],
      },
    },
  },
};

/* ═════════════════════════════════════════════
   TABLES  (Pie Diabético · G-4)
═══════════════════════════════════════════════ */
const PIE_TABLES = [
  {
    id:'pie_sirs_qsofa', label:'T1 · SIRS/qSOFA',
    title:'Tabla 1 · Criterios SIRS y qSOFA',
    type:'pie_double',
    left:{
      head:'SIRS (1 punto c/u)',
      color:'#0891b2',
      rows:['Temp. ≤ 36 °C o > 38 °C','FC > 90 lpm','FR ≥ 20 rpm','Leuc. ≥ 12.000 o < 4.000 /mm³'],
      note:'≥ 2 = SIRS',
      noteColor:'#0369a1',
    },
    right:{
      head:'qSOFA (1 punto c/u)',
      color:'#d97706',
      rows:['Glasgow ≤ 13','TAS ≤ 100 mmHg','FR ≥ 22 rpm'],
      note:'≥ 2 = alto riesgo',
      noteColor:'#b45309',
    },
  },
  {
    id:'pie_fr_mdr', label:'T2 · FR MDR',
    title:'Tabla 2 · FR Microbiológicos',
    type:'pie_fr_mdr',
    sections:[
      { head:'FR para <em>Pseudomonas aeruginosa</em>', bg:'#e0f2fe', bc:'#0891b2',
        items:['Isquemia crítica de miembro','Piel macerada en sitio de lesión','Infección previa documentada por <em>P. aeruginosa</em>'] },
      { head:'FR para <em>Aeromonas</em> spp.', bg:'#cffafe', bc:'#0891b2',
        items:['Exposición a agua dulce o estuario (agua salobre)'] },
      { head:'FR para Anaerobios', bg:'#fef9c3', bc:'#d97706',
        items:['Isquemia crítica de miembro','Necrosis del tejido circundante a la lesión','Presencia de gas / crepitación en tejidos'] },
      { head:'FR para Microorganismos MDR (acumulativos)', bg:'#fee2e2', bc:'#dc2626',
        items:['>65 años','Internación hospitalaria en los últimos 3 meses o institucionalización','Contacto frecuente con el sistema de salud','Hemodiálisis crónica','Uso de antibióticos en los 3 meses previos','Inmunocomprometidos (quimioterapia, biológicos anti-TNF, etc.)','Colonización por microorganismo MDR en los últimos 6–12 meses'] },
    ],
  },
  {
    id:'pie_alergia', label:'T3 · Alergia',
    title:'Tabla 3 · Alergia Severa a β-Lactámicos',
    type:'pie_simple',
    intro:'Considerar como alergia grave si el paciente cumple alguno de los siguientes:',
    items:[
      'Requirió admisión a CTI relacionada a reacción alérgica tras administración de β-lactámicos',
      'Hipersensibilidad tardía tipo IV: Nefritis intersticial · Hepatitis · Anemia hemolítica',
      'Hipersensibilidad tardía cutánea severa: Stevens-Johnson · Necrólisis epidérmica tóxica · Dermatitis exfoliativa · AGEP · DRESS',
    ],
  },
  {
    id:'pie_int_dom', label:'T4 · Int. Dom.',
    title:'Tabla 4 · Criterios Internación Domiciliaria',
    type:'pie_int_dom',
    intro:'Contraindican la internación domiciliaria (1 o más de los siguientes):',
    sections:[
      { head:'Criterios clínicos', bg:'#fee2e2', bc:'#dc2626',
        items:['Isquemia severa de miembro','Necesidad de abordaje quirúrgico para control de foco','Inestabilidad metabólica o hemodinámica','Enfermedad crónica concomitante descompensada','IMC > 40 kg/m²'] },
      { head:'Criterios de abordaje', bg:'#fef3c7', bc:'#d97706',
        items:['Exámenes diagnósticos no disponibles fuera del hospital','Ausencia de alternativas terapéuticas para uso domiciliario','Fracaso del tratamiento ambulatorio a las 48–72 hs','Tipo de curaciones no disponibles en ambulatorio','Incapacidad de completar el tratamiento ambulatorio'] },
    ],
  },
  {
    id:'pie_duracion', label:'T5 · Duración',
    title:'Tabla 5 · Duración del Tratamiento',
    type:'pie_duracion',
    sinOsteo:{
      label:'Sin osteomielitis',
      duration:'14–21 días',
      note:'Considerar terapia secuencial VO a las 48–72 hs según evolución y disponibilidad.',
    },
    conOsteo:[
      { c:'Resección total del hueso afectado', d:'2–5 días' },
      { c:'Resección con cultivos de hueso proximal positivos', d:'≥ 3 semanas' },
      { c:'Sin resección o afectación ósea extensa', d:'≥ 6 semanas', note:'Evaluar terapia supresiva si infección extensa' },
    ],
    conOsteoNote:'Considerar terapia secuencial VO a los 5–7 días.',
  },
];

/* ═════════════════════════════════════════════
   MINIMAP / NAVIGATION  (Pie Diabético · G-4)
═══════════════════════════════════════════════ */
const PIE_MM_IDS = [
  'pie_start',
  'pie_severity',
  'pie_leve',
  'pie_moderada',
  'pie_grave',
];

const PIE_JUMP_PATHS = {
  'pie_start':    [],
  'pie_severity': ['pie_start'],
  'pie_leve':     ['pie_start','pie_severity'],
  'pie_moderada': ['pie_start','pie_severity'],
  'pie_grave':    ['pie_start','pie_severity'],
};

/* Datos osteomielitis — usados en la pantalla de severidad (expand) */
const PIE_OSTEO = {
  criteriosCl:[
    'Lesión ulcerada > 2 cm o tiempo de evolución > 4 semanas',
    'Úlcera sobre prominencia ósea',
    'Segmento óseo / fragmento tendinoso / cápsula articular visible o test de contacto óseo (+)',
    'VES > 60 mm/h',
    'PCR > 70 mg/dL',
    'Dedos "en salchicha"',
  ],
  criteriosRx:[
    'Pérdida de cortical ósea, pérdida de patrón trabecular con desmineralización',
    'Esclerosis ósea con o sin erosión',
    'Densidad anormal en tejido subcutáneo o gas contiguo al hueso',
    'Presencia de secuestro o involucro',
  ],
  algoritmo:[
    { hd:'Elementos radiológicos en Rx + 1 o más criterios clínicos o paraclínicos',
      items:['Osteomielitis confirmada','Considere si es necesario complementar con RMN'] },
    { hd:'Elementos radiológicos no concluyentes + 1 o más elementos clínicos o paraclínicos',
      items:['Solicite RMN','Considere biopsia ósea diagnóstica para muestra microbiológica'] },
    { hd:'Si presenta contraindicación para RMN',
      items:['Centellograma óseo con ciprofloxacino','Tomografía computarizada','PET scan'] },
  ],
};
