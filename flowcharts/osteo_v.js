/* Osteomielitis Vertebral / Espondilodiscitis (G-15) */
const NODES_OSTEO_V = {
  ov_start: {
    step: 1,
    type: 'ov_start',
    next: 'ov_imaging',
    title: 'Osteomielitis Vertebral / Espondilodiscitis',
    subtitle: 'Sospecha clínica y Solicitud de Paraclínica',
    sections: [
      {
        h: 'Clínica',
        items: [
          'No instrumentada: dolor lumbar, dorsal o cervical, de días a meses de evolución, en aumento, que no calma con analgesia indicada y que ha motivado múltiples consultas.',
          'Posterior a instrumentación (artrodesis, discectomía, bloqueo peridural, etc): signos fluxivos a nivel del abordaje quirúrgico o sitio de punción +/- fiebre.',
          'Síntomas neurológicos: parestesias, paresia, síndrome esfinteriano, etc.',
        ],
      },
      {
        h: 'Solicitar Paraclínica',
        items: [
          'Hemocultivos 2 set (4 frascos).',
          'Reactantes de fase aguda: PCR, VES, hemograma, función renal, crasis.',
          'Rx columna: elementos sugestivos, lisis ósea, aplastamiento vertebral, edema de vértebra y/o disco, colecciones.',
          'RM columna, si no es posible solicite TC. Complete la valoración.',
        ],
      },
    ],
    traumaText: 'Ingreso hospitalario',
  },

  ov_imaging: {
    step: 2,
    type: 'ov_info',
    title: 'Imagen compatible con infección',
    subtitle: 'Edema de vértebra y/o disco, colecciones',
    sections: [
      {
        h: 'Conducta',
        buttonLabel: 'Muestras de punción',
        buttonTableIndex: 1,
        items: [
          'Punción biopsica bajo imagen.',
          'Paciente estable: no inicie ATB hasta completar cultivos y punción.',
          'Paciente inestable: inicie ATB, solicite 2 set de HC, consulta con equipo de columna.',
          'Siga algoritmo diagnóstico.',
        ],
      },
      {
        h: 'Otros estudios',
        items: [
          'Ecocardiograma: cuando la etiología es por Staphylococcus aureus, Streptococcus sp. y Enterococcus sp.',
          'RxTx.',
        ],
      },
    ],
    next: 'ov_diagnosis',
  },

  ov_diagnosis: {
    step: 3,
    type: 'ov_diag',
    title: 'Diagnóstico de Osteomielitis / Espondilodiscitis vertebral',
    subtitle: '',
    clinica: 'Clínica + imagen compatible',
    hc: [
      '1 frasco (+) a un patógeno primario (S. aureus, Enterococcus sp, Enterobacterias)',
      'O la mayoría de 4 frascos a un microorganismo de baja virulencia',
    ],
    biopsia: [
      '1 cultivo (+) a un patógeno: S. aureus, Enterococcus sp, Enterobacterias',
      '2 cultivos (+) a un microorganismo de baja virulencia (ECN, Cutibacterium sp, Corynebacterium sp.) fenotípicamente idénticos',
    ],
    histo: [
      'Hallazgo de un microorganismo por tinción: bacteria, hongo o micobacteria',
    ],
    next: 'ov_tx_intro',
  },

  ov_tx_intro: {
    step: 4,
    type: 'ov_tx_intro',
    title: 'Tratamiento',
    introLines: [
      'Estadifique la severidad.',
      'Antimicrobianos +/- drenaje de colecciones y/o estabilización columna.',
      'Estadio C2-C3-C4 de la clasificación de Pola, son de resolución quirúrgica.',
    ],
    options: [
      {
        title: 'Osteomielitis vertebral +/- discitis (no instrumentado)',
        tag: 'Staphylococcus aureus, ECN meticilino sensible, Streptococcus sp, Enterobacterias',
        color: '#facc15',
        next: 'ov_noinst_risk',
      },
      {
        title: 'Posterior a instrumentación',
        tag: 'Staphylococcus aureus, ECN meticilino resistente, Enterococcus sp, Enterobacterias multirresistentes',
        color: '#f59e0b',
        next: 'ov_inst_mdr',
      },
    ],
  },

  ov_noinst_risk: {
    step: 5,
    type: 'ov_route',
    title: 'No instrumentado',
    subtitle: 'Definir si hay FR MDR',
    options: [
      {
        title: 'Sin factores de riesgo para microorganismos multirresistentes',
        color: '#7fcf9a',
        next: 'ov_noinst_low',
      },
      {
        title: 'Con factores de riesgo para microorganismos multirresistentes',
        color: '#65a30d',
        next: 'ov_noinst_mdr',
      },
    ],
  },

  ov_noinst_low: {
    step: 6,
    type: 'ov_treatment',
    headerColor: '#7fcf9a',
    headerTextColor: '#14532d',
    title: 'Osteomielitis vertebral +/- discitis',
    subtitle: 'No instrumentado · Sin FR para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#fef3c7',
        labelColor: '#92400e',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 2 gr IV día',
          '+',
          '<span class="drug-name">TMP-SMX</span> 10 mg/kg día IV (de TMP) dividido c/8 hs',
        ],
      },
      {
        label: 'Opción alternativa',
        bg: '#fff7ed',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Cefazolina</span> 2 gr IV c/8 hs',
          '+',
          '<span class="drug-name">Gentamicina</span> 5-7 mg/kg día',
        ],
      },
    ],
    notes: [
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con respuesta clínica, apirexia, reactantes de fase aguda en descenso y con disponibilidad de moléculas para la VO).',
    ],
    durationLabel: 'Duración del tratamiento 8 semanas (Con respuesta clínica y drenaje de colecciones)',
    durationBg: '#fca5a5',
    durationText: '#111111',
    actionButtons: [
      { label: 'Clasificación de Pola', tableIndex: 2 },
      { label: 'Tratamiento por microorganismo', tableIndex: 3 },
    ],
  },

  ov_noinst_mdr: {
    step: 6,
    type: 'ov_treatment',
    headerColor: '#65a30d',
    headerTextColor: '#ffffff',
    title: 'Osteomielitis vertebral +/- discitis',
    subtitle: 'No instrumentado · Con FR para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Cobertura inicial',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
          '+ <span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr IV c/6 hs',
          'o <span class="drug-name">Amikacina</span> 20 mg/kg carga IV seguido de 15 mg/kg día',
          'o <span class="drug-name">Meropenem</span> 1 gr IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Shock séptico:',
      'Vancomicina 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
      '+',
      'Meropenem 2 gr IV dosis carga seguido de 1 gr IV c/8 hs en infusión extendida.',
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con respuesta clínica, apirexia, reactantes de fase aguda en descenso y con disponibilidad de moléculas para la VO).',
    ],
    durationLabel: 'Duración del tratamiento 8 semanas (Con respuesta clínica y drenaje de colecciones)',
    durationBg: '#fca5a5',
    durationText: '#111111',
    actionButtons: [
      { label: 'Clasificación de Pola', tableIndex: 2 },
      { label: 'Tratamiento por microorganismo', tableIndex: 3 },
    ],
  },

  ov_inst_mdr: {
    step: 6,
    type: 'ov_treatment',
    headerColor: '#f59e0b',
    headerTextColor: '#ffffff',
    title: 'Osteomielitis vertebral +/- discitis posterior a instrumentación',
    subtitle: 'Cobertura empírica',
    regimens: [
      {
        label: 'Cobertura inicial',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
          '+ <span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr IV c/6 hs',
          'o <span class="drug-name">Amikacina</span> 20 mg/kg carga IV seguido de 15 mg/kg día',
          'o <span class="drug-name">Meropenem</span> 1 gr IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Shock séptico:',
      'Vancomicina 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
      '+',
      'Meropenem 2 gr IV dosis carga seguido de 1 gr IV c/8 hs en infusión extendida.',
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con respuesta clínica, apirexia, reactantes de fase aguda en descenso y con disponibilidad de moléculas para la VO).',
    ],
    durationLabel: 'Duración del tratamiento 8 semanas (Con respuesta clínica y drenaje de colecciones)',
    durationBg: '#fca5a5',
    durationText: '#111111',
    actionButtons: [
      { label: 'Clasificación de Pola', tableIndex: 2 },
      { label: 'Tratamiento por microorganismo', tableIndex: 3 },
    ],
  },
};

const OSTEO_V_TABLES = [
  {
    id: 'ov_qsofa',
    label: 'T1 · qSOFA',
    title: 'Tabla 1 · Quick-SOFA',
    sections: [
      {
        head: 'Considerar sepsis si ≥ 2 puntos o en aumento',
        table: {
          heads: ['Criterio', 'Puntos'],
          rows: [
            ['FR mayor a 22 rpm', '1'],
            ['Alteración de la conciencia', '1'],
            ['PAS menor de 100 mmHg', '1'],
          ],
        },
      },
    ],
  },
  {
    id: 'ov_puncion',
    label: 'T2 · Punción',
    title: 'Tabla 2 · Muestras de la punción biopsica',
    sections: [
      {
        head: 'Solicitar',
        items: [
          'Cultivo bacteriano inespecífico.',
          'Gene-Xpert, baciloscopía, cultivo CHLA.',
          'Micología.',
          'Si sospecha otra etiología: envíe serología para Brucella sp, Bartonella sp.',
        ],
      },
    ],
  },
  {
    id: 'ov_pola',
    label: 'T3 · Pola',
    title: 'Tabla 3 · Clasificación de Pola',
    sections: [
      { head: 'A', items: ['Discitis en ausencia de absceso epidural, inestabilidad o síntomas neurológicos.'] },
      { head: 'B', items: ['Destrucción ósea o inestabilidad en ausencia de absceso epidural o síntomas neurológicos.'] },
      {
        head: 'C',
        items: [
          'C1. Absceso epidural en ausencia de síntomas neurológicos o inestabilidad.',
          'C2. Absceso epidural e inestabilidad en ausencia de síntomas neurológicos.',
          'C3. Absceso epidural y síntomas neurológicos en ausencia de inestabilidad.',
          'C4. Absceso epidural con síntomas neurológicos e inestabilidad.',
        ],
      },
    ],
  },
  {
    id: 'ov_micro',
    label: 'T4 · Microorganismo',
    title: 'Tabla 4 · Tratamiento por Microorganismo',
    type: 'ov_micro_table',
    heads: ['Microorganismo', 'Tratamiento inicial', 'Tratamiento consolidación', 'Alergia β-lactámicos'],
    rows: [
      [
        'Staphylococcus aureus meticilino sensible',
        'Cefazolina 2 gr IV c/8 hs + TMP-SMX 10 mg/kg día IV (de TMP) dividido c/8 hs',
        'Cefradina 2-3 gr VO día o doxiciclina 100 mg VO c/8 hs',
        'TMP-SMX 10 mg/kg día IV (de TMP) dividido c/8 hs o clindamicina 600 mg IV c/8 hs o linezolid 600 mg VO c/12 hs',
      ],
      [
        'Staphylococcus aureus meticilino resistente',
        'Vancomicina 25 mg/kg IV carga seguido de 15 mg/kg IV c/12 hs + TMP-SMX 10 mg/kg día IV (de TMP) dividido c/8 hs',
        'TMP-SMX (160/800 mg) 1 comp c/8 hs o linezolid 600 mg VO c/12 hs + rifampicina 600 mg VO día o doxiciclina 100 mg VO c/8 hs',
        '',
      ],
      [
        'Staphylococcus coagulasa negativo meticilino resistente',
        'Vancomicina 25 mg/kg día IV carga seguido de 15 mg/kg c/12 hs +/- doxiciclina 100 mg VO c/8 hs',
        'TMP-SMX (160/800 mg) 1 comp c/8 hs o linezolid 600 mg VO c/12 hs +/- rifampicina 600 mg VO día o doxiciclina 100 mg VO c/8 hs',
        '',
      ],
      [
        'Enterococcus sp.',
        'Ampicilina 3 gr IV c/6 hs o vancomicina 25 mg/kg día IV carga seguido de 15 mg/kg c/12 hs + gentamicina 5-7 mg/kg día IV',
        'Amoxicilina 1 gr VO c/8 hs o linezolid 600 mg VO c/12 hs',
        'Vancomicina 25 mg/kg día IV carga seguido de 15 mg/kg c/12 hs',
      ],
      [
        'Streptococcus sp.',
        'Ampicilina 3 gr IV c/6 hs +/- gentamicina 5-7 mg/kg día IV',
        'Amoxicilina 750 mg VO c/8 hs',
        'Clindamicina 600 mg IV c/8 hs',
      ],
      [
        'Pseudomonas aeruginosa',
        'Ceftazidime 2 gr IV c/8 hs + amikacina 20 mg/kg carga seguido de 15 mg/kg día IV',
        'Ciprofloxacina 500 mg VO c/8 hs',
        'Ciprofloxacina 500 mg IV c/8 hs',
      ],
      [
        'Neisseria gonorrhoeae',
        'Ceftriaxona 2 gr IV día (7-10 días)',
        '----',
        'Doxiciclina 100 mg VO c/12 hs',
      ],
      [
        'Cultivos (-) sin factores de riesgo para microorganismos multirresistentes',
        'Ceftriaxona 2 gr IV día + TMP-SMX 10 mg/kg día IV (de TMP) dividido c/8 hs',
        'TMP-SMX F 1 comp (160/800 mg) c/8 hs + cefuroxime 500 mg VO c/8 hs o amoxicilina-clavulánico 875/125 mg c/8 hs',
        'Clindamicina 600 mg IV c/8 hs',
      ],
      [
        'Cultivos (-) con factores de riesgo para microorganismos multirresistentes',
        'Vancomicina 25 mg/kg IV carga seguido de 15 mg/kg IV c/12 hs + amikacina 15 mg/kg día',
        'Linezolid 600 mg VO día o TMP-SMX F 1 comp (160/800 mg) c/8 hs + doxiciclina 100 mg VO c/12 hs o amoxicilina-clavulánico 875/125 mg c/8 hs',
        '',
      ],
    ],
  },
];
