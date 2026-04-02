/* PA · Pancreatitis Aguda (G-2) */
/* ═════════════════════════════════════════════
   DATA: DECISION TREE  (Pancreatitis Aguda · G-2)
═══════════════════════════════════════════════ */
const NODES_PA = {

  /* ── 1. SOSPECHA CLÍNICA ─────────────────── */
  pa_start: {
    step:1, type:'pa_start_dual',
    btnLabel:'Evolución temporal →',
    next:'pa_tiempo',
  },

  /* ── 2. VALORACIÓN DIAGNÓSTICA ───────────── */
  pa_diagnostic: {
    step:2, type:'pa_diagnostic',
    next:'pa_tiempo',
  },

  /* ── 3. PRIMERA SEMANA — BIFURCACIÓN ─────── */
  pa_tiempo: {
    step:2, type:'pa_tiempo',
  },

  /* ── 4a. COLANGITIS + ATB ─────────────────── */
  pa_colangitis: {
    step:3, type:'pa_colangitis_tx',
    next:'pa_segunda',
  },

  /* ── 4b. SIN COLANGITIS → NO ATB ─────────── */
  pa_no_atb: {
    step:3, type:'pa_no_atb',
    next:'pa_segunda',
  },

  /* ── 5. SOSPECHA INFECCIÓN PANCREÁTICA ────── */
  pa_segunda: {
    step:4, type:'pa_sospecha_infeccion',
  },

  /* ── 6a. TRATAMIENTO GRUPO 1 ─────────────── */
  pa_tx_g1: {
    step:5, type:'pa_treatment',
    color:'#059669',
    title:'Grupo 1 · Primeras 2 semanas',
    sub:'Sin FR para microorganismos MDR',
    regimens:[
      { label:'Primera línea', bg:'#d1fae5', labelColor:'#065f46',
        lines:[
          '<span class="drug-name">Piperacilina/tazobactam</span> 4,5 g iv c/6 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs',
        ]
      },
      { label:'Alergia leve-moderada β-lactámicos', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Cefepime</span> 2 g iv c/8 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs',
        ]
      },
      { label:'Alergia grave β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Moxifloxacina</span> 400 mg iv c/24 hs',
          '+ <span class="drug-name">Amikacina</span>',
        ]
      },
    ],
    duration:'No menor a 2 semanas, considerando drenajes, control del cuadro infeccioso y descenso mantenido de reactantes de fase aguda.',
  },

  /* ── 6b. TRATAMIENTO GRUPO 2 ─────────────── */
  pa_tx_g2: {
    step:5, type:'pa_treatment',
    color:'#991b1b',
    title:'Grupo 2 · Tardío >2 semanas y/o con FR MDR',
    sub:'Con FR para microorganismos MDR',
    regimens:[
      { label:'Primera línea', bg:'#fee2e2', labelColor:'#991b1b',
        lines:[
          '<span class="drug-name">Meropenem</span> dosis carga 2 g iv en 1 hora → luego 2 g iv en perfusión de 3 hs c/8 hs',
          '+ <span class="drug-name">Amikacina</span> 20 mg/kg iv c/24 hs',
        ]
      },
      { label:'* Alto riesgo de carbapenemasa', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Ceftazidime/avibactam</span> 2,5 g iv c/8 hs en perfusión de 3 hs',
          '+ <span class="drug-name">Aztreonam</span> 1–2 g iv c/8 hs en perfusión 2–3 hs',
          'Alternativas: <span class="drug-name">meropenem–colistina</span> o <span class="drug-name">tigeciclina–colistina</span>',
        ]
      },
    ],
    note:'** Agregar antifúngico si: colonización o infección por Candida en otro sitio + otro FR de candidiasis invasiva, o mala respuesta clínica luego de 5–7 días de ATB.<br><strong>Fluconazol:</strong> carga 12 mg/kg iv/día en 2 dosis (primeras 24 hs) → mantenimiento 6 mg/kg iv/día en 2 dosis.',
    duration:'No menor a 2 semanas, considerando drenajes, control del cuadro infeccioso y descenso mantenido de reactantes de fase aguda.',
  },
};
