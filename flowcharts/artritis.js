/* Artritis Séptica Nativa Aguda (G-13) */
const NODES_ARTRITIS = {
  ar_start: {
    step: 1,
    type: 'ar_start',
    next: 'ar_arthro',
    title: 'Artritis Séptica Nativa Aguda',
    subtitle: 'Sospecha clínica y Solicitud de Paraclínica.',
    sections: [
      {
        h: 'Sospecha clínica',
        items: [
          'Impotencia funcional, edema, rubor y calor local +/- fiebre.',
        ],
      },
      {
        h: 'Solicite',
        items: [
          'Reactantes de fase aguda: VES, PCR. Función renal, función hepático, crasis y hemograma.',
          'Hemocultivos 2 set (4 frascos).',
          'Radiografía de la articulación (busca de lisis, geodas, etc).',
        ],
      },
    ],
    traumaText: 'Ingreso y valoración en conjunto con traumatólogo',
  },

  ar_stability: {
    step: 2,
    type: 'ar_choice',
    badgeText: 'Estabilidad Inicial',
    note: 'Defina estabilidad clínica antes del inicio antimicrobiano.',
    options: [
      {
        title: 'Paciente estable',
        desc: 'No inicie ATB hasta tomar cultivos',
        color: '#eab308',
        next: 'ar_arthro',
      },
      {
        title: 'Paciente inestable',
        desc: 'qSOFA ≥ 2 (hipotensión, taquicardia, compromiso de conciencia)',
        color: '#ea580c',
        next: 'ar_arthro',
      },
    ],
  },

  ar_arthro: {
    step: 3,
    type: 'ar_info',
    title: 'Artrocentesis',
    subtitle: '',
    sections: [
      {
        h: 'Muestras',
        items: [
          'Bioquímica.',
          'Citología.',
          'Bacteriología: directo y cultivo (inocule 1 muestra en frasco de hemocultivo).',
          'Dosificación de lactato.',
        ],
      },
    ],
    actions: [
      { label: 'Set de punción', tableIndex: 1 },
      { label: 'Etiología poco frecuente', tableIndex: 2 },
    ],
    next: 'ar_diagnosis',
  },

  ar_diagnosis: {
    step: 4,
    type: 'ar_info',
    title: 'Diagnóstico artritis séptica nativa aguda',
    subtitle: '',
    sections: [
      {
        h: 'Clínica y laboratorio',
        items: [
          'Clínica: dolor, signos fluxivos, impotencia funcional.',
          'PCR y VES elevados, leucocitosis.',
        ],
      },
      {
        h: 'Líquido articular',
        items: [
          'Sin instrumentación: > 50.000 leucocitos/mm3, 90% neutrófilos.',
          'Posterior a instrumentación: > 20.000 leucocitos/mm3, 75% neutrófilos, glucosa < 60% de la plasmática, proteínas > 45 gr/lt, lactato > 10 mmol/L.',
        ],
      },
      {
        h: 'Microbiológico',
        items: [
          'Hemocultivos (+) y/o gram de líquido articular (+), cultivo (+).',
        ],
      },
    ],
    actions: [
      { label: 'Set de punción', tableIndex: 1 },
    ],
    note: 'Gold standard: cultivo positivo de líquido sinovial.',
    next: 'ar_tx_intro',
  },

  ar_tx_intro: {
    step: 5,
    type: 'ar_route',
    title: 'Tratamiento médico-quirúrgico',
    subtitle: 'Antimicrobianos + drenaje articular (artrotomía o artroscopía)',
    options: [
      {
        title: 'Articulación no instrumentada',
        tag: 'Staphylococcus aureus meticilino sensible, Streptococcus sp, Staphylococcus coagulasa negativo meticilino sensible, Enterobacterias sensibles',
        color: '#facc15',
        next: 'ar_noinst_risk',
      },
      {
        title: 'Articulación instrumentada dentro del primer mes',
        tag: 'Staphylococcus aureus meticilino resistente, Staphylococcus coagulasa negativo meticilino resistente, Enterococcus sp, Enterobacterias multirresistente',
        color: '#f59e0b',
        next: 'ar_inst_recent',
      },
    ],
  },

  ar_noinst_risk: {
    step: 6,
    type: 'ar_route',
    title: 'Articulación no instrumentada',
    subtitle: 'Valore factores de riesgo para microorganismos multirresistentes',
    tableIndex: 3,
    options: [
      {
        title: 'Paciente sin factores de riesgo para microorganismos multirresistentes',
        tag: 'Cobertura para microorganismos sensibles',
        color: '#facc15',
        next: 'ar_noinst_low',
      },
      {
        title: 'Paciente con factores de riesgo para microorganismos multirresistentes',
        tag: 'Cobertura ampliada',
        color: '#65a30d',
        next: 'ar_noinst_mdr',
      },
    ],
  },

  ar_noinst_low: {
    step: 7,
    type: 'ar_treatment',
    headerColor: '#f59e0b',
    headerTextColor: '#ffffff',
    title: 'Articulación no instrumentada',
    subtitle: 'Paciente sin factores de riesgo para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Primera opción',
        bg: '#fef3c7',
        labelColor: '#92400e',
        lines: [
          '<span class="drug-name">Cefazolina</span> 2 gr IV c/8 hs',
          '+ <span class="drug-name">Gentamicina</span> 5-7 mg/kg IV día',
        ],
      },
      {
        label: 'Alternativa',
        bg: '#fff7ed',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 2 gr IV día',
          '+ <span class="drug-name">TMP-SMX</span> 10 mg/kg día IV (de TMP) dividido c/8 hs',
        ],
      },
      {
        label: 'Mordedura (humana o animal)',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">Ampicilina-sulbactam</span> 1,5 gr IV c/6 hs',
        ],
      },
      {
        label: 'Alergia a β-lactámicos',
        bg: '#f3e8ff',
        labelColor: '#6b21a8',
        lines: [
          '<span class="drug-name">Clindamicina</span> 600 mg IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con buena respuesta clínica local, apirexia, tolerando la VO y reactantes de fase aguda en descenso).',
    ],
    durationLabel: 'Duración del plan antimicrobiano: ≤ 4 semanas',
    durationBg: '#fca5a5',
    durationText: '#111111',
    footLabel: 'En artritis acromio-clavicular, sacro-ilíaca o riesgo de mala evolución prolongar el plan antimicrobiano ≥ 6 semanas',
    footBg: '#f87171',
    footText: '#ffffff',
    actionButtons: [
      { label: 'Tratamiento por microorganismo', tableIndex: 4 },
      { label: 'FR MDR y mala evolución', tableIndex: 3 },
    ],
  },

  ar_noinst_mdr: {
    step: 7,
    type: 'ar_treatment',
    headerColor: '#65a30d',
    headerTextColor: '#ffffff',
    title: 'Articulación no instrumentada',
    subtitle: 'Paciente con factores de riesgo para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Cobertura para gram positivos / FR SAMR',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">TMP-SMX</span> 10 mg/kg día IV (de TMP) dividido c/8 hs',
          'O <span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
        ],
      },
      {
        label: 'Agregar cobertura gram negativos',
        bg: '#d9f99d',
        labelColor: '#365314',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr IV c/6 hs',
          'O <span class="drug-name">Amikacina</span> 20 mg/kg carga IV seguido de 15 mg/kg día',
          'O <span class="drug-name">Meropenem</span> 1 gr IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con buena respuesta clínica local, apirexia, tolerando la VO y reactantes de fase aguda en descenso).',
    ],
    durationLabel: 'Duración del plan antimicrobiano: ≤ 4 semanas',
    durationBg: '#fca5a5',
    durationText: '#111111',
    footLabel: 'En artritis acromio-clavicular, sacro-ilíaca o riesgo de mala evolución prolongar el plan antimicrobiano ≥ 6 semanas',
    footBg: '#f87171',
    footText: '#ffffff',
    actionButtons: [
      { label: 'Tratamiento por microorganismo', tableIndex: 4 },
      { label: 'FR MDR y mala evolución', tableIndex: 3 },
    ],
  },

  ar_inst_recent: {
    step: 6,
    type: 'ar_treatment',
    headerColor: '#f59e0b',
    headerTextColor: '#ffffff',
    title: 'Articulación instrumentada dentro del primer mes',
    subtitle: 'Cobertura para MRSA, MR-CoNS, Enterococcus y enterobacterias multirresistentes',
    regimens: [
      {
        label: 'Cobertura inicial',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
          '+ <span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr IV c/6 hs',
          'O <span class="drug-name">Amikacina</span> 20 mg/kg carga IV seguido de 15 mg/kg día',
          'O <span class="drug-name">Meropenem</span> 1 gr IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Shock séptico: meropenem 2 gr IV dosis carga seguido de 1 gr IV c/8 hs en infusión extendida.',
      'Con resultado de cultivos ajuste el plan.',
      'Rotar a vía oral al 7º-10º día (con buena respuesta clínica local, apirexia, tolerando la VO y reactantes de fase aguda en descenso).',
    ],
    durationLabel: 'Duración del plan antimicrobiano: ≤ 4 semanas',
    durationBg: '#fca5a5',
    durationText: '#111111',
    footLabel: 'En artritis acromio-clavicular, sacro-ilíaca o riesgo de mala evolución prolongar el plan antimicrobiano ≥ 6 semanas',
    footBg: '#f87171',
    footText: '#ffffff',
    actionButtons: [
      { label: 'Tratamiento por microorganismo', tableIndex: 4 },
      { label: 'FR MDR y mala evolución', tableIndex: 3 },
    ],
  },
};

const ARTRITIS_TABLES = [
  {
    id: 'ar_qsofa',
    label: 'T1 · qSOFA',
    title: 'Tabla 1 · Quick-SOFA',
    type: 'notes',
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
    id: 'ar_puncion',
    label: 'T2 · Punción',
    title: 'Tabla 2 · Set de Punción Articular',
    type: 'notes',
    sections: [
      {
        head: 'Material',
        items: [
          'Material blanco estéril.',
          '2 frascos estériles.',
          '1 tubo con EDTA (tubo de hemograma, conteo celular).',
          '1 frasco de hemocultivo.',
          '1 jeringa de gasometría.',
        ],
      },
    ],
  },
  {
    id: 'ar_unusual',
    label: 'T3 · Infrecuentes',
    title: 'Tabla 3 · Etiología Poco Frecuente',
    type: 'notes',
    sections: [
      {
        head: 'Pensar frente a',
        items: [
          'Herida penetrante.',
          'Evolución sub-aguda crónica.',
          'Viajes recientes.',
          'Reclusión.',
          'Contacto con Tuberculosis.',
        ],
      },
      {
        head: 'Envíe muestra para',
        items: [
          'Cultivo micológico.',
          'Micobacteria tuberculosa y no tuberculosa: Gene-Xpert, baciloscopia y cultivo CHLA.',
          'Serología Brucella sp.',
        ],
      },
    ],
  },
  {
    id: 'ar_risk',
    label: 'T4 · Riesgos',
    title: 'Tabla 4 · Factores de Riesgo',
    type: 'notes',
    sections: [
      {
        head: 'FR para MDR (acumulativos)',
        items: [
          'Cirugía articular reciente.',
          'Corticoides intra-articular.',
          '> 64 años.',
          'Ingreso hospitalario los últimos 3 meses.',
          'Institucionalizados.',
          'Contacto con Sistema de Salud, hemodiálisis.',
          'ATB 3 meses previos: fluorquinolonas, β lactámicos.',
          'Inmunosuprimidos: en tratamiento quimioterápico.',
        ],
      },
      {
        head: 'FR SAMR',
        items: [
          'Colonización previa.',
          'Hemodiálisis.',
          'Forunculosis.',
          'Privado de libertad.',
          'Institucionalizado.',
        ],
      },
      {
        head: 'FR de mala evolución',
        items: [
          'Diabético, enfermedad renal crónica, hemodiálisis.',
          'Trasplante órgano sólido y hematopoyético.',
          'Inmunosuprimido.',
          'Corticoides crónico, biológicos.',
          'Artritis reumatoide.',
        ],
      },
    ],
  },
  {
    id: 'ar_micro',
    label: 'T5 · Microorganismo',
    title: 'Tabla 5 · Tratamiento por Microorganismo',
    type: 'notes',
    sections: [
      {
        head: 'Staphylococcus aureus meticilino sensible',
        items: [
          'Tratamiento inicial: Cefazolina 2 gr IV c/8 hs + TMP-SMX 10 mg kg día IV (de TMP) dividido c/8 hs.',
          'Tratamiento consolidación: Cefradina 2-3 gr VO día o doxiciclina 100 mg VO c/8 hs.',
          'Alergia β-lactámicos: TMP-SMX 10 mg kg día IV (de TMP) dividido c/8 hs o clindamicina 600 mg IV c/8 hs o linezolid 600 mg VO c/12 hs.',
        ],
      },
      {
        head: 'Staphylococcus aureus meticilino resistente',
        items: [
          'Tratamiento inicial: Vancomicina 25 mg/kg IV carga seguido de 15 mg kg IV c/12 hs + TMP-SMX 10 mg kg día IV (de TMP) dividido c/8 hs.',
          'Tratamiento consolidación: TMP-SMX (160/800 mg) 1 comp c/8 hs o linezolid 600 mg VO c/12 hs + rifampicina 600 mg VO día (inicie luego de los primeros 7-10 días de tratamiento antimicrobiano) o doxiciclina 100 mg VO c/8 hs.',
        ],
      },
      {
        head: 'Staphylococcus coagulasa negativo meticilino resistente',
        items: [
          'Tratamiento inicial: Vancomicina 25 mg kg día IV carga seguido de 15 mg kg c/12 hs +/- doxiciclina 100 mg VO c/8 hs.',
          'Tratamiento consolidación: TMP-SMX (160/800 mg) 1 comp c/8 hs o linezolid 600 mg VO c/12 hs +/- rifampicina 600 mg VO día o doxiciclina 100 mg VO c/8 hs.',
        ],
      },
      {
        head: 'Enterococcus sp.',
        items: [
          'Tratamiento inicial: Ampicilina 3 gr IV c/6 hs o vancomicina 25 mg kg día IV carga seguido de 15 mg kg c/12 hs (resistente a ampicilina) + gentamicina 5-7 mg kg día IV.',
          'Tratamiento consolidación: Amoxicilina 1 gr VO c/8 hs o linezolid 600 mg VO c/12 hs (resistente a ampicilina).',
          'Alergia β-lactámicos: Vancomicina 25 mg kg día IV carga seguido de 15 mg kg c/12 hs.',
        ],
      },
      {
        head: 'Streptococcus sp.',
        items: [
          'Tratamiento inicial: Ampicilina 3 gr IV c/6 hs +/- gentamicina 5-7 mg kg día IV.',
          'Tratamiento consolidación: Amoxicilina 750 mg VO c/8 hs.',
          'Alergia β-lactámicos: Clindamicina 600 mg IV c/8 hs.',
        ],
      },
      {
        head: 'Pseudomonas aeruginosa',
        items: [
          'Tratamiento inicial: Ceftazidime 2 gr IV c/8 hs + amikacina 20 mg kg carga seguido de 15 mg kg día IV.',
          'Tratamiento consolidación IV: Ciprofloxacina 500 mg IV c/8 hs.',
          'Tratamiento consolidación VO: Ciprofloxacina 500 mg VO c/8 hs.',
        ],
      },
      {
        head: 'Neisseria gonorrhoeae',
        items: [
          'Tratamiento inicial: Ceftriaxona 2 gr IV día (7-10 día).',
          'Alergia β-lactámicos: Doxiciclina 100 mg VO c/12 hs.',
        ],
      },
      {
        head: 'Cultivos (-) sin factores de riesgo para microorganismos multirresistentes',
        items: [
          'Tratamiento inicial: Ceftriaxona 2 gr IV día + TMP-SMX 10 mg kg día IV (de TMP) dividido c/8 hs.',
          'Tratamiento consolidación: TMP-SMX F 1 comp (160/800 mg) c/8 hs + Cefuroxime 500 mg VO c/8 hs o amoxicilina-clavulánico 875/125 mg c/8 hs.',
          'Alergia β-lactámicos: Clindamicina 600 mg IV c/8 hs.',
        ],
      },
      {
        head: 'Cultivos (-) con factores de riesgo para microorganismos multirresistentes',
        items: [
          'Tratamiento inicial: Vancomicina 25 mg/kg IV carga seguido de 15 mg kg IV c/12 hs + amikacina 15 mg kg día.',
          'Tratamiento consolidación: Linezolid 600 mg VO día o TMP-SMX F 1 comp (160/800 mg) c/8 hs + doxiciclina 100 mg VO c/12 hs o amoxicilina-clavulánico 875/125 mg c/8 hs.',
        ],
      },
    ],
  },
];
