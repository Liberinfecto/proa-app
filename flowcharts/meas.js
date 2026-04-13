/* MEAS · Meningoencefalitis Aguda Comunitaria en Paciente Inmunocompetente (G-9) */
const NODES_MENI = {
  meni_start: {
    step: 1,
    type: 'meni_start',
    next: 'meni_pl',
    title: 'Meningoencefalitis Aguda Comunitaria en Paciente Inmunocompetente',
    subtitle: 'Emergencia Infectológica · Enfermedad de notificación obligatoria al MSP',
    sections: [
      {
        h: 'Sospecha de infección del Sistema Nervioso Central',
        items: [
          'Fiebre, Cefalea, Vómitos, Fotofobia, Alteración del Estado de conciencia, Convulsiones, Rigidez de nuca, Lesiones de Piel Hemorrágicas.',
        ],
      },
      {
        h: 'Investigue',
        items: [
          '<span style="display:block;background:#dbeafe;border:1px solid #93c5fd;border-radius:10px;padding:8px 10px;color:#1e3a8a;font-weight:600">Historia clínica: viajes recientes, contacto con mosquitos*, factores de riesgo para L. monocytogenes, lesiones orales y/o genitales.</span>',
          '<span style="display:block;background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;padding:8px 10px;color:#92400e;font-weight:600">Hemograma, Glicemia, Crasis, PCR, Creatininemia, Lactato, Hemocultivos por 2 sets (total 4 frascos con 10 ml de sangre cada uno), Serología para VIH, fondo de ojo.</span>',
        ],
      },
    ],
    regimens: [
      '<span class="drug-name">Ceftriaxona</span> 2 gr iv c/12hs',
      '<span class="drug-name">Aciclovir</span> 10 mg/kg i/v c/8hs',
      '<span class="drug-name">Dexametasona</span> 0.15 mg/kg i/v c/6hs (dosis máxima 10 mg c/6hs)',
      '± <span class="drug-name">Ampicilina</span> 2gr i/v c/4hs (si sospecha L. monocytogenes)',
    ],
    actionButtons: [
      { label: 'FR Listeria y etiologías especiales', tableIndex: 0 },
    ],
  },

  meni_pl: {
    step: 2,
    type: 'meni_question',
    title: 'Evaluar contraindicación para punción lumbar',
    checklist: [
      'Inestabilidad Hemodinámica.',
      'Glasgow < 10.',
      'Crisis focales.',
      'Plaquetas < 50 mil.',
      'INR > 1,5.',
      'Infección en zona de punción.',
      'Edema de papila en fondo de ojo.',
      'Síndrome Focal Neurológico.',
    ],
    options: [
      { title: 'Sin contraindicación', desc: 'Realizar punción lumbar', color: '#16a34a', next: 'meni_lcr' },
      { title: 'Con contraindicación', desc: 'Solicitar TC cráneo', color: '#dc2626', next: 'meni_ct' },
    ],
  },

  meni_ct: {
    step: 3,
    type: 'meni_route',
    title: 'TC cráneo',
    subtitle: 'Definir si la contraindicación para PL persiste',
    options: [
      { title: 'TC cráneo con contraindicación de PL', tag: 'Mantener tratamiento y esperar evolución', color: '#dc2626', next: 'meni_wait' },
      { title: 'TC sin contraindicación de PL', tag: 'Continuar el algoritmo con punción lumbar', color: '#16a34a', next: 'meni_lcr' },
    ],
  },

  meni_lcr: {
    step: 4,
    type: 'meni_lcr',
    title: 'Punción lumbar',
    subtitle: 'Solicite muestras y guíe el tratamiento por resultados rápidos o citoquímica',
    lumbarItems: [
      'Citoquímico.',
      'Bacteriológico.',
      'Ag pneumocóccico.',
      'Panel PCR (VHS1 y 2 / VVZ).',
      'Muestra testigo.',
      '5 muestras totales.',
    ],
    rapidBlocks: [
      {
        head: 'Tratamiento guiado por resultados microbiológicos rápidos del LCR',
        items: [
          'Directo con bacterias: guiar tratamiento ATB según tinción de gram.',
          'Ag pneumo. positivo: tratamiento para S. pneumoniae.',
          'Panel PCR positivo VHS o VVZ: tratamiento antiviral dirigido.',
          'Directo sin bacterias, Ag pneumococcico negativo y panel de VHS y VVZ negativo: solicite panel multiparamétrico-ME y Ag Cryptococcus de muestra testigo.',
        ],
      },
    ],
    chemistryBlocks: [
      {
        head: 'Posible etiología bacteriana',
        items: [
          'Proteínas: 1-5 g/L',
          'Leucocitos > 500',
          'Predominio PMN (80%)',
          'Glucosa < 0.4 g/L',
          'Lactato >30 mg/dL',
        ],
        next: 'meni_tx_bact',
      },
      {
        head: 'Posible etiología viral',
        items: [
          'Proteínas < 2 g/L',
          'Leucocitos 10-1000',
          'Predominio linfocitos',
          'Glucosa > 0.45 g/L',
          'Lactato < 30 mg/dL',
        ],
        next: 'meni_tx_viral',
      },
    ],
    actionButtons: [
      { label: 'Citoquímico y microbiológico LCR', tableIndex: 1 },
    ],
  },

  meni_wait: {
    step: 4,
    type: 'meni_treatment',
    headerColor: '#dc2626',
    title: 'TC cráneo con contraindicación de PL',
    subtitle: 'Conducta',
    regimens: [
      {
        label: 'Mantener',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          'Mantener tratamiento antimicrobiano + dexametasona y esperar evolución.',
        ],
      },
    ],
  },

  meni_tx_bact: {
    step: 5,
    type: 'meni_treatment',
    headerColor: '#0f766e',
    title: 'Posible etiología bacteriana',
    subtitle: 'Tratamiento guiado por resultados rápidos y citoquímica',
    regimens: [
      {
        label: 'Tratamiento',
        bg: '#ccfbf1',
        labelColor: '#115e59',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 2 gr iv c/12hs + <span class="drug-name">Dexametasona</span> 0.15 mg/kg i/v c/6hs',
        ],
      },
    ],
    notes: [
      'Ajustar los tratamientos antimicrobianos según los hallazgos citoquímicos y microbiológicos.',
      { text: 'Tratamiento específico por microorganismo', tableIndex: 2, tableLabel: 'Tabla 3' },
    ],
  },

  meni_tx_viral: {
    step: 5,
    type: 'meni_treatment',
    headerColor: '#1d4ed8',
    title: 'Posible etiología viral',
    subtitle: 'Tratamiento guiado por resultados rápidos y citoquímica',
    regimens: [
      {
        label: 'Tratamiento',
        bg: '#dbeafe',
        labelColor: '#1d4ed8',
        lines: [
          '<span class="drug-name">Aciclovir</span> 10 mg/kg c/8hs + <span class="drug-name">Ceftriaxona</span> 2 gr iv c/12hs + <span class="drug-name">Dexametasona</span> 0.15 mg/kg iv c/6hs',
        ],
      },
    ],
    notes: [
      'Ante resultados negativos y LCR de posible etiología viral derivar muestra al DLSP para evaluar otras etiologías.',
      { text: 'Tratamiento específico por microorganismo', tableIndex: 2, tableLabel: 'Tabla 3' },
    ],
  },
};

const MENI_TABLES = [
  {
    id: 'meni_special',
    label: 'T1 · Especiales',
    title: 'Tabla 1 · Factores y etiologías especiales',
    type: 'notes',
    sections: [
      {
        head: 'Factores de riesgo para Listeria monocytogenes',
        items: [
          '> 60 años.',
          'Inmunosuprimido.',
          '3er trimestre de embarazo.',
          'Dosis alta de corticoides.',
          'Alcoholismo.',
          'Personas que residen en ELEPEM.',
        ],
      },
      {
        head: 'Arbovirus',
        items: [
          'En pacientes con antecedentes de contactos con mosquitos + síntomas.',
          'Dengue: cefalea, mialgias, astenia, erupción cutánea.',
          'Zika: erupción cutánea, conjuntivitis, artromialgias.',
          'Chikungunya: erupción cutánea, astenia, artromialgias intensas.',
        ],
      },
      {
        head: 'Etiología herpética',
        items: [
          'En pacientes con lesiones orales y/o genitales plantear posible etiología herpética.',
        ],
      },
    ],
  },
  {
    id: 'meni_lcr',
    label: 'T2 · LCR',
    title: 'Tabla 2 · Citoquímico y microbiológico del LCR',
    type: 'notes',
    sections: [
      {
        head: 'Citoquímico normal',
        items: [
          'Leucocitos < 5 cel/mm3.',
          'Glucosa > 0.45 g/L.',
          'Proteínas < 0.4 g/L.',
        ],
      },
      {
        head: 'Posible etiología bacteriana y viral',
        table: {
          heads: ['Posible etiología bacteriana', 'Posible etiología viral'],
          rows: [
            ['Proteínas: 1-5 g/L.', 'Proteínas < 2 g/L.'],
            ['Leucocitos > 500.', 'Leucocitos 10-1000.'],
            ['Predominio PMN (80%).', 'Predominio linfocitos.'],
            ['Glucosa < 0.4 g/L.', 'Glucosa > 0.45 g/L.'],
            ['Lactato >30 mg/dL.', 'Lactato < 30 mg/dL.'],
          ],
        },
      },
      {
        head: 'Consideración para Listeria monocytogenes',
        items: [
          'Puede generar menor inflamación del LCR: leucocitos > 100, proteínas > 0.5 g/L y glucosa normal.',
        ],
      },
      {
        head: 'Microbiológico de LCR',
        items: [
          'S. pneumoniae: diplococos Gram positivos.',
          'N. meningitidis: diplococos Gram negativos.',
          'H. influenzae: bacilos Gram negativos pleomórficos.',
          'L. monocytogenes: bacilos Gram positivos.',
        ],
      },
    ],
  },
  {
    id: 'meni_specific',
    label: 'T3 · Tratamiento',
    title: 'Tabla 3 · Tratamiento específico',
    type: 'notes',
    sections: [
      {
        head: 'Tratamiento específico',
        table: {
          heads: ['Microorganismo', 'Tratamiento de elección', 'Duración', 'Opción (alergia)'],
          rows: [
            ['S. pneumoniae', 'Ceftriaxona 2 gr i/v cada 12 hs', '10 a 14 días', 'Moxifloxacina 400 mg iv día'],
            ['N. meningitidis', 'Ceftriaxona 2 gr i/v cada 12 hs', '7 días', 'Moxifloxacina 400 mg iv día'],
            ['H. influenzae', 'Ceftriaxona 2 gr i/v cada 12 hs', '7 días', 'Moxifloxacina 400 mg iv día'],
          ],
          note: 'Aislamiento con precauciones por gotitas hasta 24 hs de tratamiento ATB adecuado en <em>S. pneumoniae</em>, <em>N. meningitidis</em> y <em>H. influenzae</em>.',
        },
      },
      {
        head: 'Tratamiento específico',
        table: {
          heads: ['Microorganismo', 'Tratamiento de elección', 'Duración', 'Opción (alergia)'],
          rows: [
            ['L. monocytogenes', 'Ampicilina 2 gr i/v cada 4 hs + Gentamicina 5 mg/kg i/v día', '21 días', 'Trimetoprim-sulfametoxazol 20 mg/kg día solo o asociado a Rifampicina'],
            ['Meningitis / Encefalitis herpética', 'Aciclovir 10 mg/kg i/v cada 8 hs', '14 días meningitis / 21 días encefalitis', ''],
          ],
          note: 'Solicitar RNM en todo caso donde se plantea encefalitis y en toda infección por <em>L. monocytogenes</em> o etiología herpética.',
        },
      },
    ],
  },
  {
    id: 'meni_meningo',
    label: 'T4 · N. mening.',
    title: 'Tabla 4 · Profilaxis post exposición frente a casos de Neisseria meningitidis',
    type: 'notes',
    sections: [
      {
        head: 'Indicación',
        items: [
          'Personas con exposición directa, prolongada y estrecha, 7 días previos al inicio de síntomas a 24 hs posteriores del inicio del tratamiento ATB adecuado.',
          'Prolongado (≥ 8 hs).',
          'Estrecho (≤ 1m) del caso índice.',
          'Guardería y centro primera infancia: ver recomendación específica.',
        ],
      },
      {
        head: 'Profilaxis ATB de elección',
        table: {
          heads: ['Fármaco', 'Dosis', 'Duración', 'Consideraciones'],
          rows: [
            ['Rifampicina', '600 mg v/o c/12hs', '2 días', '<span style="color:#a16207;font-weight:700">Precaución en embarazo. Valorar interacciones medicamentosas</span>'],
            ['Ciprofloxacina', '500 mg v/o', 'Única dosis', '<span style="color:#b91c1c;font-weight:700">Contraindicada en embarazo y lactancia</span>'],
            ['Ceftriaxona', '250 mg i/m', 'Única dosis', 'De elección en embarazo y lactancia'],
          ],
        },
      },
    ],
  },
  {
    id: 'meni_hib',
    label: 'T5 · Hib',
    title: 'Tabla 5 · Profilaxis post exposición frente a casos de Haemophilus influenzae tipo b',
    type: 'notes',
    sections: [
      {
        head: 'Indicación',
        items: [
          'Convivientes con el caso índice.',
          '>6 años: que estén en contacto con niños menores de 4 años que no hayan recibido la vacunación completa o inmunodeprimidos.',
          'Conviviente <6 años no inmunizado.',
          'Esplenectomizados no inmunizados.',
          'En el caso índice, cuando haya sido tratado con un antibiótico diferente a ceftriaxona y es menor de 2 años y/o convive con un contacto susceptible.',
          'Guardería y centro primera infancia: ver recomendación específica.',
        ],
      },
      {
        head: 'Profilaxis ATB de elección',
        table: {
          heads: ['Fármaco', 'Dosis', 'Duración', 'Consideraciones'],
          rows: [
            ['Rifampicina', '600 mg vo c/día', '4 días', '<span style="color:#a16207;font-weight:700">Precaución en embarazo. Valorar interacciones medicamentosas</span>'],
          ],
        },
      },
    ],
  },
];
