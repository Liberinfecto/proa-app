/* IIA · Infección Intra-Abdominal (G-1) */
const NODES = {

  /* ── 1. PRESENTACIÓN ───────────────────── */
  start: {
    step:1, type:'info',
    badge:{ bg:'#E8820C', color:'white', text:'SOSPECHA CLÍNICA' },
    title:null,
    sub:null,
    sections:[
      { h:'Antecedentes', items:[
        {t:'Cirugía abdominal reciente'},
        {t:'Trauma abdominal penetrante'},
        {t:'Endoscopia digestiva reciente'},
        {t:'Ingestión de cuerpo extraño o riesgo de'},
      ]},
      { h:'Historia', items:[
        {t:'Dolor abdominal'},
        {t:'Alteración tránsito digestivo'},
        {t:'Fiebre o síntomas sistémicos'},
        {t:'FUM / Anticoncepción / Síntomas ginecológicos'},
      ]},
      { h:'Examen', items:[
        {t:'Signos abdominales positivos'},
        {t:'Deshidratación'},
        {t:'Ictericia'},
      ]},
      { h:'Laboratorio e imagen', items:[
        {t:'Leucocitos elevados', hl:true},
        {t:'Proteína C reactiva elevada', hl:true},
        {t:'Evaluación quirúrgica +/−', hl:true},
        {t:'Imagen abdominal (TC / Eco)', hl:true},
      ]},
    ],
    alert:'⚠️ La presencia de los siguientes aleja pero no descarta la IIA: Síntomas urinarios, Ex. Orina: Nitritos, Leucocitos, Hematuria.',
    btnLabel:'Continuar →',
    next:'page2'
  },

  /* ── 2. PÁGINA 2 — DIAGRAMA + FLIP CARD ─── */
  page2: {
    step:2, type:'flow_diagram',
    next:'origin',
  },

  /* ── 3. ORIGEN ──────────────────────────── */
  origin: {
    step:3, type:'origin_page',
    options:[
      {
        label:'Comunitaria',
        tag:'Sin factores de riesgo para MMR',
        color:'green', bg:'#d1fae5', border:'#059669', txt:'#065f46',
        icon:'🏘️', next:'focus_low'
      },
      {
        label:'Comunitaria',
        tag:'Con factores de riesgo para enterobacterias MDR',
        color:'amber', bg:'#fef3c7', border:'#d97706', txt:'#92400e',
        icon:'⚠️', next:'focus_medium'
      },
      {
        label:'Hospitalaria / Postoperatoria',
        tag:'Inicio en internación o tras cirugía',
        color:'red', bg:'#fee2e2', border:'#dc2626', txt:'#991b1b',
        icon:'🏥', next:'hospital_subtype'
      },
    ]
  },

  /* ── 4a. IIA HOSPITALARIA ───────────────── */
  hospital_subtype: {
    step:4, type:'hosp_subtype',
    badge:{ bg:'#fee2e2', color:'#991b1b', text:'Paso 4 · Tipo hospitalario' },
    title:'Tipo de IIA Hospitalaria',
    sub:'Seleccioná el escenario que corresponde al paciente',
    options:[
      {
        color:'#78350f', bg:'#fef9c3', border:'#ca8a04',
        title:'✅ SIN otros factores de riesgo para MMR',
        items:['Sin antibióticos previos','Sin procedimientos invasivos previos','Intervalo cirugía índice → re-operación < 5 días','Antibióticos ≤ 24 hs'],
        next:'focus_medium'
      },
      {
        color:'#7f1d1d', bg:'#fee2e2', border:'#dc2626',
        title:'🔴 CON factores de riesgo para MMR — Peritonitis Terciaria',
        items:['Uso de antibióticos ≥ 5 días','Intervalo re-operación y cirugía índice > 4 días','Múltiples re-operaciones','Infección no controlada con > 5 días de ATB','Uso previo de azoles'],
        next:'treatment_high'
      },
    ]
  },

  /* ── 5a. FOCO BAJO RIESGO — vista combinada ── */
  focus_low: {
    step:5, type:'combo_low',
  },

  /* ── 5b. FOCO MDR — vista combinada ─────── */
  focus_medium: {
    step:5, type:'combo_med',
  },

  /* ── 6. TRATAMIENTOS ─────────────────────── */

  tx_low_hep: {
    step:6, type:'treatment',
    color:'#059669',
    title:'Comunitaria · Sin FR MDR',
    focus:'Foco Hepático / Biliar / Gastroduodenal',
    regimens:[
      { label:'Primera línea', bg:'#d1fae5', labelColor:'#065f46',
        lines:[
          '<span class="drug-name">Ampicilina/sulbactam</span> 3 g iv c/6 hs',
          '+ Si criterios Tabla 1: agregar <span class="drug-name">Gentamicina</span> 5 mg/Kg iv c/24 hs (una vez/día)',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Moxifloxacina</span> 400 mg iv/día',
          '± <span class="drug-name">Gentamicina</span> 5 mg/Kg iv c/24 hs',
        ]
      },
    ],
    duration:'1–3 días si resolución quirúrgica · 3–5 días si complicada localizada',
    durationRef:'Tabla 5',
  },

  tx_low_int: {
    step:6, type:'treatment',
    color:'#059669',
    title:'Comunitaria · Sin FR MDR',
    focus:'Foco Delgado / Colon / Apéndice / Recto',
    regimens:[
      { label:'Primera línea', bg:'#d1fae5', labelColor:'#065f46',
        lines:[
          '<span class="drug-name">Ampicilina/sulbactam</span> 3 g iv c/6 hs',
          '+ <span class="drug-name">Gentamicina</span> 5 mg/Kg iv c/24 hs (una vez/día)',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Metronidazol</span> 500 mg iv c/8 hs + <span class="drug-name">Gentamicina</span> 5 mg/Kg iv c/24 hs',
          '<em style="color:#94a3b8">— o —</em>',
          '<span class="drug-name">Ciprofloxacina</span> 400 mg iv c/8 hs',
        ]
      },
    ],
    duration:'1–3 días si resolución quirúrgica · 3–5 días si complicada localizada',
    durationRef:'Tabla 5',
  },

  tx_med_hep: {
    step:6, type:'treatment',
    color:'#d97706',
    title:'Con riesgo MDR · Comunitaria o Hospitalaria sin otros FR',
    focus:'Foco Hepático / Biliar / Gastroduodenal',
    regimens:[
      { label:'Primera línea', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Piperacilina/tazobactam</span> 4,5 g iv c/6 hs',
          '+ Si criterios Tabla 1: agregar <span class="drug-name">Amikacina</span> 20 mg/Kg iv c/24 hs',
        ]
      },
      { label:'Escalada — Sepsis con disfunciones mayores (hemodinámica, respiratoria o renal)', bg:'#fee2e2', labelColor:'#991b1b',
        lines:[
          'Sustituir pip/tazo por:',
          '<span class="drug-name">Meropenem</span> carga 2 g iv en 1 h → luego 2 g iv en perfusión de 3 hs c/8 hs',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Tigeciclina</span> 200 mg iv carga → luego 100 mg iv c/12 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/Kg iv c/24 hs',
        ]
      },
    ],
    duration:'5–7 días sin inestabilidad · 7–10 días si sepsis, inmunosupresor o acumulación de FR',
    durationRef:'Tabla 5',
  },

  tx_med_int: {
    step:6, type:'treatment',
    color:'#d97706',
    title:'Con riesgo MDR · Comunitaria o Hospitalaria sin otros FR',
    focus:'Foco Delgado / Colon / Apéndice / Recto',
    regimens:[
      { label:'Primera línea', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Piperacilina/tazobactam</span> 4,5 g iv c/6 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/Kg iv c/24 hs (una vez/día)',
        ]
      },
      { label:'Escalada — Sepsis con disfunciones mayores o acumulación de FR', bg:'#fee2e2', labelColor:'#991b1b',
        lines:[
          'Sustituir pip/tazo por:',
          '<span class="drug-name">Imipenem</span> 0,5 g iv c/6 hs',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Tigeciclina</span> 200 mg iv carga → luego 100 mg iv c/12 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/Kg iv c/24 hs',
        ]
      },
    ],
    duration:'5–7 días sin inestabilidad · 7–10 días si sepsis, inmunosupresor o acumulación de FR',
    durationRef:'Tabla 5',
  },

  treatment_high: {
    step:6, type:'treatment',
    color:'#991b1b',
    title:'Peritonitis Terciaria / Hospital con FR para MMR',
    focus:'Consulta con Infectología recomendada ★',
    regimens:[
      { label:'✅ Recomendado — Consulta Infectología', bg:'#fee2e2', labelColor:'#7f1d1d',
        lines:[
          '<span class="drug-name">Meropenem</span> o <span class="drug-name">Imipenem</span> + <span class="drug-name">Amikacina</span> 20 mg/Kg c/24 hs + <span class="drug-name">Fluconazol</span> ★',
          '+ Agregar <span class="drug-name">Vancomicina</span> según FR para <em>Enterococcus</em> R-amp (Tabla 3) o <em>Staphylococcus</em> R-met (Tabla 4)',
        ]
      },
      { label:'⚡ Alternativas', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Tigeciclina</span> + <span class="drug-name">Colistina</span> + <span class="drug-name">Fluconazol</span> ★',
          '<em style="color:#94a3b8">— o —</em>',
          '<span class="drug-name">Tigeciclina</span> + <span class="drug-name">Fosfomicina</span> + <span class="drug-name">Fluconazol</span> ★',
        ]
      },
      { label:'🍄 Si uso previo de azoles o shock séptico', bg:'#ede9fe', labelColor:'#4c1d95',
        lines:[
          'Sustituir <span class="drug-name">Fluconazol</span> por <span class="drug-name">Equinocandina</span>',
          '(Caspofungina: carga 70–100 mg iv en ≥ 1 h → mantenimiento 50 mg/día)',
        ]
      },
    ],
    duration:'7–10 días. Si persiste disfunción a los 5–7 días: buscar foco persistente, complicaciones o nuevo foco (catéter, NAV, candidiasis)',
    durationRef:'Tabla 5',
    note:'★ Fluconazol: carga 12 mg/Kg/día en 2 dosis (primeras 24 h) → mantenimiento 6 mg/Kg/día. Ver Tabla 7 para dosis de todos los antimicrobianos.',
  },
};
