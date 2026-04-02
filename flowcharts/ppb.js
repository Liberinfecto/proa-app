/* PPB · Infección de Piel y Partes Blandas (G-3) */
/* ═════════════════════════════════════════════
   DATA: DECISION TREE  (Piel y Partes Blandas · G-3)
═══════════════════════════════════════════════ */
const NODES_PPB = {

  ppb_start: { type:'ppb_start_choice' },

  ppb_ns_severity: { type:'ppb_ns_severity_choice' },

  ppb_s_severity: { type:'ppb_s_severity_choice' },

  ppb_ns_leve: {
    type:'ppb_treatment',
    title:'Celulitis / Erisipela — Leve',
    setting:'Ambulatorio', settingBg:'#d1fae5', settingColor:'#065f46',
    cultivos:'No requiere',
    manejo:'Reposo y elevación del área afectada',
    organisms:[
      'Streptococcus pyogenes y otros Streptococcus spp.',
      'SAMS',
      'SAMR (poco frecuente)',
      'Pseudomonas aeruginosa (herida punzante en planta de pie)',
    ],
    regimens:[
      { label:'Primera línea', bg:'#d1fae5', labelColor:'#065f46',
        lines:[
          '<span class="drug-name">Cefradina o Cefalexina</span> 2000–3000 mg VO en 3–4 dosis',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Amoxicilina-clavulánico</span> 875/125 mg VO c/12h',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#fef3c7', labelColor:'#92400e',
        lines:['<span class="drug-name">Clindamicina</span> 300 mg VO c/6h']
      },
      { label:'Si FR para SAMR', bg:'#ede9fe', labelColor:'#4c1d95',
        lines:[
          '<span class="drug-name">Clindamicina</span> 300 mg VO c/6–8h',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">TMP-SMX</span> 160 mg TMP / 800 mg SMX VO c/12h',
          '<button onclick="event.stopPropagation();showTablesPPB(1)" style="display:inline-flex;align-items:center;gap:4px;background:#ede9fe;border:1.5px solid #7c3aed;border-radius:20px;padding:3px 10px 3px 7px;font-size:10.5px;font-weight:700;color:#4c1d95;cursor:pointer;font-family:inherit;vertical-align:middle;margin-top:5px"><span style="width:6px;height:6px;border-radius:50%;background:#7c3aed;display:inline-block"></span>📋 Tabla 2 — FR para SAMR</button>',
        ]
      },
      { label:'Si herida punzante en planta de pie', bg:'#f1f5f9', labelColor:'#334155',
        lines:[
          'Agregar <span class="drug-name">Ciprofloxacina</span> 500 mg VO c/12h',
          'Valorar necesidad de profilaxis antitetánica',
        ]
      },
    ],
    samrTable: false,
    notes:[],
    duration:'5–7 días',
  },

  ppb_ns_moderada: {
    type:'ppb_ns_moderada_cards',
    title:'Celulitis / Mordeduras — Moderada o Con FR',
    setting:'Internación domiciliaria / Internación',
    cultivos:'HC; cultivo aspirativo o de tejido en mordedura o trauma abierto; cultivo si lesiones bullosas',
    duration:'5–10 días',
    cards:[
      {
        id:'ppb_mod_0',
        frontTitle:'Celulitis / Erisipela',
        frontBg:'#fef3c7', frontBorder:'#d97706', frontTitleColor:'#92400e',
        organisms:[
          'Streptococcus pyogenes y otros Streptococcus spp.',
          'SAMS · SAMR',
          'Pseudomonas aeruginosa (herida punzante en planta de pie)',
        ],
        conducta:'Reposo y elevación del área afectada',
        duration:'5–10 días',
        backBg:'#fef3c7', backBorder:'#d97706',
        regimens:[
          { label:'Primera línea', bg:'#fef9c3', labelColor:'#92400e',
            lines:[
              '<span class="drug-name">Ampicilina-sulbactam</span> 1500–3000 mg IV c/6h',
              '+ <span class="drug-name">TMP-SMX</span> 5–10 mg/kg IV/día del componente TMP en 2–3 dosis',
            ]
          },
          { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
            lines:['<span class="drug-name">Clindamicina</span> 600 mg IV c/6h']
          },
          { label:'Si herida punzante en planta de pie', bg:'#f1f5f9', labelColor:'#334155',
            lines:['Agregar <span class="drug-name">Ciprofloxacina</span> 400 mg IV c/12h · Valorar profilaxis antitetánica']
          },
        ],
      },
      {
        id:'ppb_mod_1',
        frontTitle:'Mordedura — Humano, Gato, Perro',
        frontBg:'#fee2e2', frontBorder:'#dc2626', frontTitleColor:'#991b1b',
        organisms:[
          'Flora mixta — Anaerobios: Peptoestreptococcus spp., Prevotella spp., Fusobacterium spp.',
          'Flora mixta — Aerobios: Streptococcus pyogenes, Streptococcus spp., Staphylococcus aureus',
          'Pasteurella multocida · Capnocytophaga canimorsus · Eikenella corrodens',
        ],
        conducta:'Limpieza y debridamiento según necesidad',
        duration:'5–10 días',
        backBg:'#fee2e2', backBorder:'#dc2626',
        regimens:[
          { label:'Primera línea', bg:'#fee2e2', labelColor:'#991b1b',
            lines:['<span class="drug-name">Ampicilina-sulbactam</span> 1500–3000 mg IV c/6h']
          },
          { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
            lines:[
              '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/12h',
              '+ <span class="drug-name">Clindamicina</span> 600 mg IV c/8h',
            ]
          },
          { label:'⚠️ Obligatorio', bg:'#fef9c3', labelColor:'#92400e',
            lines:['Denuncia obligatoria · Valorar profilaxis antitetánica y antirrábica']
          },
        ],
      },
      {
        id:'ppb_mod_2',
        frontTitle:'Exposición a Agua — Dulce o Salada',
        frontBg:'#e0f2fe', frontBorder:'#0891b2', frontTitleColor:'#0369a1',
        organisms:[
          'Agua dulce: Aeromonas spp., Aeromonas hydrophila, Klebsiella spp., Escherichia coli, Edwardsiella tarda',
          'Agua salada: Vibrio vulnificus · Mycobacterium marinum',
        ],
        conducta:'Limpieza y debridamiento según necesidad',
        duration:'5–14 días',
        backBg:'#e0f2fe', backBorder:'#0891b2',
        regimens:[
          { label:'Primera línea', bg:'#e0f2fe', labelColor:'#0369a1',
            lines:[
              '<span class="drug-name">Ceftriaxona</span> 2 g IV/día',
              '+ <span class="drug-name">Doxiciclina</span> 100 mg VO c/12h',
            ]
          },
          { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
            lines:[
              '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/12h',
              '+ <span class="drug-name">Doxiciclina</span> 100 mg VO c/12h',
            ]
          },
        ],
      },
    ],
  },

  ppb_ns_severa_tipo: { type:'ppb_severa_single_card' },

  ppb_ns_mordedura: {
    type:'ppb_treatment',
    title:'Mordedura — Humano, Gato, Perro',
    setting:'Internación', settingBg:'#fee2e2', settingColor:'#991b1b',
    cultivos:'HC y cultivos de la lesión (punción, muestras quirúrgicas)',
    manejo:'Debridamiento',
    organisms:[
      'Flora mixta: Anaerobios (Peptoestreptococcus spp., Prevotella spp., Fusobacterium spp.)',
      'Aerobios: Streptococcus pyogenes, Streptococcus spp., Staphylococcus aureus',
      'Pasteurella multocida (gato/perro)',
      'Capnocytophaga canimorsus (perro)',
      'Eikenella corrodens (humano)',
    ],
    regimens:[
      { label:'Primera línea', bg:'#fee2e2', labelColor:'#991b1b',
        lines:['<span class="drug-name">Ampicilina-sulbactam</span> 1500–3000 mg IV c/6h']
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/12h',
          '+ <span class="drug-name">Clindamicina</span> 600 mg IV c/8h',
        ]
      },
    ],
    notes:[
      '⚠️ <strong>Denuncia obligatoria</strong>',
      'Valorar necesidad de profilaxis <strong>antitetánica</strong> y <strong>antirrábica</strong>',
    ],
    duration:'5–10 días',
  },

  ppb_ns_agua: {
    type:'ppb_treatment',
    title:'Exposición a Agua — Dulce o Salada',
    setting:'Internación', settingBg:'#fee2e2', settingColor:'#991b1b',
    cultivos:'HC y cultivos de la lesión',
    manejo:'Debridamiento según extensión',
    organisms:[
      'Agua dulce: Aeromonas spp., Aeromonas hydrophila, Klebsiella spp., E. coli, Edwardsiella tarda',
      'Agua salada: Vibrio vulnificus, Mycobacterium marinum',
    ],
    regimens:[
      { label:'Primera línea', bg:'#fee2e2', labelColor:'#991b1b',
        lines:[
          '<span class="drug-name">Ceftriaxona</span> 2 g IV/día',
          '+ <span class="drug-name">Doxiciclina</span> 100 mg VO c/12h',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/12h',
          '+ <span class="drug-name">Doxiciclina</span> 100 mg VO c/12h',
        ]
      },
    ],
    notes:[],
    duration:'5–14 días',
  },

  ppb_ns_necro: {
    type:'ppb_treatment',
    title:'Celulitis Severa · Necrotizante · Fournier · Colecciones',
    setting:'Internación — Consulta urgente con cirujano', settingBg:'#fee2e2', settingColor:'#7f1d1d',
    cultivos:'HC y cultivos de la lesión (punción, muestras quirúrgicas)',
    manejo:'Debridamiento amplio y precoz (primeras 6 hs) + reexploraciones. No demorar cirugía por imagenología',
    organisms:[
      'Monomicrobiana: Streptococcus spp., SAMS, SAMR, Aeromonas spp. o Vibrio spp. (si exposición agua)',
      'Polimicrobiana: Pseudomonas aeruginosa, Enterobacterales, Streptococcus spp., SAMS, SAMR, Anaerobios',
      'Gangrena gaseosa: Clostridium spp.',
      'Micosis en pacientes neutropénicos o con lesiones rápidamente progresivas',
    ],
    regimens:[
      { label:'Primera línea', bg:'#fee2e2', labelColor:'#7f1d1d',
        lines:[
          '<span class="drug-name">Pip-Tazo</span> 4,5 g IV c/6h <em style="color:#64748b">o</em> <span class="drug-name">Meropenem</span> 2 g IV c/8h',
          '+ <span class="drug-name">Vancomicina</span> carga 25 mg/kg IV → luego 15–20 mg/kg IV c/12h',
          '+ <span class="drug-name">Clindamicina</span> 600 mg IV c/6h <em style="color:#64748b">(efecto antitoxina)</em>',
        ]
      },
      { label:'Alternativa (Linezolid en lugar de Vanco + Clinda)', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Pip-Tazo</span> o <span class="drug-name">Meropenem</span>',
          '+ <span class="drug-name">Linezolid</span> 600 mg IV c/12h <em style="color:#64748b">(cobertura + efecto antitoxina)</em>',
        ]
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:[
          '<span class="drug-name">Ciprofloxacina</span> 400 mg IV c/8h',
          '+ <span class="drug-name">Amikacina</span> carga 20 mg/kg IV → luego 15 mg/kg IV c/24h',
          '+ <span class="drug-name">Linezolid</span> 600 mg IV c/12h <em style="color:#64748b">— o —</em>',
          '+ <span class="drug-name">Vancomicina</span> carga 25 mg/kg → 15–20 mg/kg c/12h + <span class="drug-name">Clindamicina</span> 600 mg IV c/6h',
        ]
      },
    ],
    notes:[
      'Si se confirma fascitis necrotizante por <em>Streptococcus pyogenes</em>: <strong>Penicilina + Clindamicina</strong> (acción antitoxina)',
      'Suspender clindamicina cuando haya estabilidad clínica e infección confirmada por microorganismos no toxigénicos',
      'En neutropénicos oncológicos: evaluar antifúngico empírico. Consulta con Infectólogo y Dermatólogo',
    ],
    duration:'14–21 días hasta control de foco y mejoría clínica con ≥ 48–72 hs afebril',
  },

  ppb_s_leve: {
    type:'ppb_treatment',
    title:'Forúnculo / Carbunclo / Absceso — Leve',
    setting:'Ambulatorio', settingBg:'#d1fae5', settingColor:'#065f46',
    cultivos:'Si recidivante',
    manejo:'Incisión y drenaje',
    organisms:[
      'SAMS/SAMR',
      '<strong>Perianal:</strong> Flora mixta aerobia (Enterobacterales, Streptococcus spp., Enterococcus spp.) y anaerobia (Bacteroides spp., Peptoestreptococcus spp., Fusobacterium spp., Clostridium spp.)',
    ],
    regimens:[
      { label:'Primera línea', bg:'#d1fae5', labelColor:'#065f46',
        lines:['<span class="drug-name">TMP-SMX</span> 160 mg TMP / 800 mg SMX VO c/12h']
      },
      { label:'Alergia severa a β-lactámicos / alternativa', bg:'#fef3c7', labelColor:'#92400e',
        lines:[
          '<span class="drug-name">Clindamicina</span> 300 mg VO c/8h',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Doxiciclina</span> 100 mg VO c/12h',
        ]
      },
    ],
    notes:[],
    extraRegimens:[
      { label:'Absceso perianal', bg:'#ede9fe', labelColor:'#4c1d95',
        lines:['<span class="drug-name">Amoxicilina-clavulánico</span> 875/125 mg VO c/12h']
      },
    ],
    duration:'5–7 días',
  },

  ppb_s_moderada: {
    type:'ppb_treatment',
    title:'Forúnculo / Carbunclo / Absceso — Moderado o Con FR',
    setting:'Internación domiciliaria / Internación', settingBg:'#fef3c7', settingColor:'#92400e',
    cultivos:'HC y cultivos de la lesión',
    manejo:'Incisión y drenaje',
    organisms:[
      'SAMS/SAMR',
      '<strong>Perianal:</strong> Flora mixta aerobia (Enterobacterales, Streptococcus spp., Enterococcus spp.) y anaerobia (Bacteroides spp., Peptoestreptococcus spp., Fusobacterium spp., Clostridium spp.)',
    ],
    regimens:[
      { label:'Primera línea', bg:'#fef3c7', labelColor:'#92400e',
        lines:['<span class="drug-name">TMP-SMX</span> 5–10 mg/kg IV/día del componente TMP en 2–3 dosis']
      },
      { label:'Alergia grave a β-lactámicos', bg:'#f1f5f9', labelColor:'#475569',
        lines:['<span class="drug-name">Clindamicina</span> 600 mg IV c/6h']
      },
      { label:'Absceso perianal — IV', bg:'#ede9fe', labelColor:'#4c1d95',
        lines:[
          '<span class="drug-name">Ampicilina-sulbactam</span> 1500–3000 mg IV c/6h',
          '± <span class="drug-name">Amikacina</span> 15 mg/kg/día',
        ]
      },
    ],
    notes:[
      'En abscesos perianales con sospecha de origen cutáneo: agregar cobertura para SAMR y tomar cultivo',
    ],
    duration:'5–10 días',
  },
};
