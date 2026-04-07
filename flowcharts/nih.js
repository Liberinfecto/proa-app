/* NIH · Neumonía Intrahospitalaria (G-6) */
const NODES_NIH = {
  nih_start: {
    step: 1,
    type: 'nih_start',
    next: 'nih_qsofa',
    title: 'Neumonía Intrahospitalaria',
    subtitle: 'Definición, sospecha diagnóstica y estudios microbiológicos',
    sections: [
      {
        h: 'Definición',
        items: [
          'Neumonía adquirida en el hospital ≥ 48 horas después del ingreso hospitalario o hasta 7 días luego del alta.',
          'Grupo heterogéneo de pacientes y patogenia.',
          'Quedan excluidos pacientes con inmunosupresión severa.',
        ],
      },
      {
        h: 'Sospecha diagnóstica',
        items: [
          'Tos, expectoración, disnea, insuficiencia respiratoria, fiebre, delirium.',
          'En pacientes añosos considerar ausencia de fiebre y síntomas extrapulmonares.',
          'Reactantes de fase aguda: leucocitosis o leucopenia, aumento de PCR, de procalcitonina.',
          'Aparición de infiltrado radiológico nuevo o imagen compatible en ultrasonido o tomografía.',
          'Particularmente si FR para aspiración de vía aérea: trastorno deglutorio, sonda enteral, ventilación no invasiva, ventilación invasiva previa, alteración del nivel de vigilia, procedimientos sobre vía aérea o endoscópicos.',
        ],
      },
      {
        h: 'Microbiología',
        flipId: 'nih-micro',
        items: [
          'Cultivo de expectoración / aspirado traqueal / LBA.',
          'Hemocultivos x 2 en 2 sets (separados por sitio de punción y tiempo, total 40 ml).',
          'Si sospecha de neumonitis/neumonía viral se sugiere realizar antígeno para SARS Cov-2 y de ser negativo realizar PCR en las primeras 48 hs y diagnóstico de influenza por el método disponible.',
          'Con resultados luego de iniciado el tratamiento empírico tener en cuenta la calidad de la muestra y evolución clínica para plantear cambios en el plan inicial.',
        ],
        backTitle: 'Calidad de la muestra',
        backItems: [
          'Expectoración: representativo si > 25 PMN por campo y menos de 10 células epiteliales planas/campo 10x.',
          'AT: menos de 10 células epiteliales planas/campo 10x.',
          'LBA: menos de 1% de células epiteliales planas. Punto de corte para cultivo es ≥104 ufc/ml.',
        ],
      },
    ],
    alert: 'No se recomienda el tratamiento ATB profiláctico de la aspiración de vía aérea en ausencia de clínica infecciosa.',
  },

  nih_qsofa: {
    step: 2,
    type: 'nih_question',
    badgeText: 'PARA INICIAR TRATAMIENTO EMPÍRICO CONSIDERAR:',
    checklist: [
      { text: '1) Quick – SOFA', tableIndex: 0, tableLabel: 'Tabla 1' },
      { text: '2) Estadía hospitalaria < o ≥ 5 días' },
      { text: '3) Microorganismos probables', tableIndex: 1, tableLabel: 'Tabla 2' },
      { text: '4) FR para Microorganismos Multirresistentes', tableIndex: 2, tableLabel: 'Tabla 3' },
      { text: '5) FR para Microorganismos Específicos', tableIndex: 3, tableLabel: 'Tabla 4' },
    ],
    options: [
      {
        title: 'Quick-SOFA 0–1',
        desc: 'Sin shock séptico ni insuficiencia respiratoria severa',
        color: '#eab308',
        next: 'nih_q0_route',
      },
      {
        title: 'Quick-SOFA ≥ 2',
        desc: '',
        color: '#ea580c',
        next: 'nih_severe_early',
      },
      {
        title: 'Shock séptico o insuficiencia respiratoria severa',
        desc: '',
        color: '#dc2626',
        next: 'nih_severe_mdr',
      },
    ],
  },

  nih_q0_route: {
    step: 3,
    type: 'nih_route',
    title: 'Quick-SOFA 0–1',
    subtitle: 'Definir estadía hospitalaria y FR MDR',
    color: '#d97706',
    options: [
      {
        title: 'Estadía < 5 días',
        tag: 'Sin FR para microorganismos multirresistentes',
        color: '#16a34a',
        next: 'nih_low_early',
      },
      {
        title: 'Estadía ≥ 5 días',
        tag: 'O FR para microorganismos multirresistentes',
        color: '#eab308',
        next: 'nih_low_mdr',
      },
    ],
  },

  nih_q2_route: {
    step: 3,
    type: 'nih_route',
    title: 'Quick-SOFA ≥ 2',
    subtitle: 'Definir estadía hospitalaria y FR MDR',
    color: '#dc2626',
    options: [
      {
        title: 'Estadía < 5 días',
        tag: 'Sin otros FR para microorganismos resistentes',
        color: '#ea580c',
        next: 'nih_severe_early',
      },
      {
        title: 'Estadía ≥ 5 días',
        tag: 'O FR para microorganismos multirresistentes',
        color: '#dc2626',
        next: 'nih_severe_mdr',
      },
    ],
  },

  nih_low_early: {
    step: 4,
    type: 'nih_treatment',
    headerColor: '#16a34a',
    durationLabel: 'Duración de tratamiento 5 días',
    durationBg: '#6cc04a',
    durationText: '#111111',
    title: 'Quick-SOFA 0–1 · Estadía < 5 días',
    subtitle: 'Sin FR para microorganismos multirresistentes',
    setting: '',
    settingColor: '#fef3c7',
    settingText: '#92400e',
    regimens: [
      {
        label: 'Sin contraindicación para vía oral',
        bg: '#fef3c7',
        labelColor: '#92400e',
        lines: [
          '<span class="drug-name">Amoxicilina-clavulánico</span> 875 mg / 125 mg VO cada 8 hs',
          'Si alergia a betalactámicos <span class="drug-name">Moxifloxacina</span> 400 mg VO cada 24 hs',
        ],
      },
      {
        label: 'Con contraindicación para vía oral',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Ampicilina-sulbactam</span> 1000 mg / 500 mg IV cada 6 hs',
          'Si alergia a betalactámicos <span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs',
        ],
      },
      {
        label: 'Si FR para SAMR agregar',
        bg: '#ede9fe',
        labelColor: '#4c1d95',
        lines: [
          '<span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día de trimetoprim VO dividido en 2 o 3 dosis',
        ],
      },
    ],
    notes: [
      'Si se inició IV considerar rotar a VO en evolución si ausencia de factores que puedan afectar una correcta absorción intestinal.',
      'Se puede otorgar alta precoz con o sin internación domiciliaria (si la internación dependiera de la NIH).',
    ],
  },

  nih_low_mdr: {
    step: 4,
    type: 'nih_treatment',
    headerColor: '#eab308',
    durationLabel: 'Duración de tratamiento 5 - 7 días',
    durationBg: '#fde047',
    durationText: '#111111',
    title: 'Quick-SOFA 0–1 · Estadía ≥ 5 días',
    subtitle: 'O FR para microorganismos multirresistentes',
    setting: '',
    settingColor: '#fef3c7',
    settingText: '#92400e',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4.5 g IV cada 6 hs',
          '+/- <span class="drug-name">Amikacina</span> 15 mg/kg/día IV a pasar en 30 min (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si alergia a betalactámicos',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Moxifloxacina</span> 400 mg IV o VO cada 24 hs',
          '+/- <span class="drug-name">Amikacina</span> 15 mg/kg/día IV a pasar en 30 min (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si FR para SAMR agregar',
        bg: '#ede9fe',
        labelColor: '#4c1d95',
        lines: [
          '<span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV dividido en 3 o 4 dosis',
        ],
      },
    ],
    notes: [
      'De haber aislamiento microbiológico ajustar el mismo.',
      { text: 'Valorar rotación a vía oral', tableIndex: 4, tableLabel: 'Tabla 5' },
      'Si mejoría valorar alta precoz con o sin internación domiciliaria (si la internación dependiera de la NIH).',
    ],
  },

  nih_severe_early: {
    step: 4,
    type: 'nih_treatment',
    headerColor: '#ea580c',
    durationLabel: 'Duración de tratamiento 5-7 días',
    durationBg: '#fb923c',
    durationText: '#111111',
    title: 'Quick-SOFA ≥ 2 · Estadía < 5 días',
    subtitle: 'Sin otros FR para microorganismos resistentes',
    setting: '',
    settingColor: '#fee2e2',
    settingText: '#991b1b',
    regimens: [
      {
        label: 'Si estadía < 5 días, sin otros FR para microorganismos resistentes',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Ampicilina-sulbactam</span> 1000 mg / 500 mg IV cada 6 hs',
          'Si alergia a betalactámicos <span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs',
          'Si FR para SAMR agregar: <span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día IV dividido en 3 o 4 dosis',
        ],
      },
      {
        label: 'Si estadía ≥ 5 días o FR para microorganismos multirresistentes',
        bg: '#fdba74',
        labelColor: '#7c2d12',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 9 g IV dosis carga en 2 hs y luego a las 6 hs iniciar 4.5 g IV a pasar en 3 hs cada 6 hs',
          'Más <span class="drug-name">Amikacina</span> 15 mg/kg/día IV a pasar en 30 min (monitorizar valle y pico)',
          'Si alergia a betalactámicos <span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs',
          'Más <span class="drug-name">Amikacina</span> 15 mg/kg/día IV a pasar en 30 min (monitorizar valle y pico)',
          'Si FR para SAMR agregar: <span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día IV dividido en 3 o 4 dosis',
        ],
      },
    ],
    notes: [
      'De haber aislamiento microbiológico ajustar el tratamiento.',
      { text: 'Valorar rotación a vía oral', tableIndex: 4, tableLabel: 'Tabla 5' },
      'Si mejoría valorar alta precoz con o sin internación domiciliaria (si la internación dependiera de la NIH).',
    ],
  },

  nih_severe_mdr: {
    step: 4,
    type: 'nih_treatment',
    headerColor: '#dc2626',
    durationLabel: 'Duración de tratamiento 7 días',
    durationBg: '#ef4444',
    durationText: '#111111',
    title: 'Shock séptico o insuficiencia respiratoria severa',
    subtitle: '',
    setting: '',
    settingColor: '#fee2e2',
    settingText: '#991b1b',
    regimens: [
      {
        label: 'Si estadía < 5 días, sin otros FR para microorganismos resistentes',
        bg: '#fde2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ampicilina-sulbactam</span> 1000 mg / 500 mg IV cada 6 hs (si alergia a betalactámicos cambiarlo por <span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs) más <span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV dividido en 3 o 4 dosis',
        ],
      },
      {
        label: 'Si estadía ≥ 5 días o FR para microorganismos multirresistentes',
        bg: '#fbcaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Meropenem</span> 2 g IV dosis carga a pasar en 1 h y luego 2 g IV a pasar en 3 h cada 8 hs',
          'Más <span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV dividido en 3 o 4 dosis o <span class="drug-name">Vancomicina</span> 30 mg/kg IV carga a pasar en 1 a 3 h, y luego 15 mg/kg IV a pasar en 1 a 2 h cada 12 h (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si FR para Enterobacterias productoras de Carbapenemasas o Acinetobacter baumannii',
        bg: '#f7b7b7',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Meropenem</span> 2 g IV dosis carga a pasar en 1 h y luego 2 g IV a pasar en 3 h cada 8 h',
          'Más <span class="drug-name">Colistín</span> 15 mg/kg carga y luego 5 mg/kg dividido en dos dosis cada 12 h',
          'Más <span class="drug-name">Trimetoprim-sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV dividido en 3 o 4 dosis',
          'o <span class="drug-name">Vancomicina</span> 30 mg/kg IV carga a pasar en 1 a 3 h, y luego 15 mg/kg IV a pasar en 1 a 2 h cada 12 h (monitorizar valle y pico)',
        ],
      },
    ],
  },
};

const NIH_TABLES = [
  {
    id: 'nih_qsofa',
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
    id: 'nih_etiology',
    label: 'T2 · Etiología',
    title: 'Tabla 2 · Etiologías probables',
    type: 'notes',
    sections: [
      {
        head: 'Cobertura según estadía y FR',
        items: [
          'Si < 5 días de internación: cubrir patógenos de la comunidad como Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis, etc.',
          'Si ≥ 5 días o FR para microorganismos multirresistentes cubrir patógenos como Enterobacterias productoras de BLEE, Enterobacterias productoras de carbapenemasas, SAMR.',
          'Si FR para patógenos específicos considerar cobertura de estos (Pseudomonas aeruginosa y S. aureus).',
          'Cobertura empírica de anaerobios en particular si se plantea mecanismo aspirativo.',
        ],
      },
      {
        head: 'Considerar además',
        items: [
          'Posibilidad de etiología viral, como único patógeno o coinfección, en cualquier momento de la internación si clínica compatible, en particular virus Influenza y SARS Cov-2.',
          'FR para microorganismos atípicos como Legionella sp. (dado que es causa de brotes nosocomiales).',
          'Tuberculosis si clínica compatible, FR como PPL, inmunodeprimidos, contexto socioeconómico deficitario, etc. Considerar test molecular rápido en esputo.',
          'Si inmunodepresión severa considerar etiologías vinculadas a la misma. Excede este flujograma.',
        ],
      },
    ],
  },
  {
    id: 'nih_mdr',
    label: 'T3 · FR MDR',
    title: 'Tabla 3 · Factores de Riesgo para Microorganismos Multirresistentes',
    type: 'notes',
    sections: [
      {
        head: 'FR para Enterobacterias productoras de BLEEs',
        items: [
          'Tratamiento antimicrobiano en los 3 últimos meses',
          'Comorbilidades (ej.: EPOC, diabetes no controlada, stroke)',
          'Severo grado de dependencia',
          'Institucionalizados',
          'Colonización o infección previa por estas',
          'Prevalencia hospitalaria elevada',
        ],
      },
      {
        head: 'FR para Enterobacterias productoras de Carbapenemasas (EPC) y Acinetobacter baumannii',
        items: [
          'Exposición a carbapenemes, ureidopenicilinas con inhibidores de betalactamasas en los 3 últimos meses',
          'Internación en CTI previa en los últimos 6 meses. En particular si prevalencia en la unidad elevada >10% luego de 5 días de internación',
          'Colonización o infección previa conocida',
        ],
      },
      {
        head: 'FR para anaerobios',
        items: [
          'NO realizar doble cobertura anaerobicida.',
          'Mecanismo aspirativo',
          'Asociado a procedimientos sobre vía aérea reciente',
          'Deterioro de sensorio previo',
        ],
      },
      {
        head: 'Consideración general',
        items: [
          'La exposición durante la internación actual o la colonización o infección reciente por un microorganismo multirresistente son factores de riesgo de mayor peso que pueden hacer escalar a un espectro mayor en el tratamiento empírico inicial que el contemplado en este flujograma, así como una situación de brote.',
        ],
      },
    ],
  },
  {
    id: 'nih_specific',
    label: 'T4 · Específicos',
    title: 'Tabla 4 · Factores de Riesgo para Microorganismos Específicos',
    type: 'notes',
    sections: [
      {
        head: 'FR para Pseudomonas aeruginosa',
        items: [
          'Internación > 7 días en el último mes',
          'Bronquiectasias, fibrosis quística',
          'EPOC VEF1 < 30%',
          '> 10 mg de prednisona diaria en las últimas 2 semanas',
          'Administración frecuente (> 4 veces/año) o reciente de antibióticos en los últimos 3 meses',
          'Inmunocomprometidos (trasplante renal, enfermedades hematooncológicas, TMO, quimioterapia, tratamiento con prednisona > 20 mg/día por 3 meses)',
        ],
      },
      {
        head: 'FR para SAMR',
        items: [
          'Jóvenes sanos con NAC severa y rápidamente progresiva',
          'Hemoptisis',
          'Infecciones de piel y partes blandas',
          'Usuario de drogas endovenosas',
          'Neumonía necrotizante',
          'Hemodiálisis',
          'Infección o colonización previa por SAMS o SAMR',
          'Personas privadas de libertad',
          'Hacinamiento',
        ],
      },
    ],
  },
  {
    id: 'nih_rotate',
    label: 'T5 · Rotación VO',
    title: 'Tabla 5 · Oportunidad de rotar ATB a VO',
    type: 'notes',
    sections: [
      {
        head: 'Se recomienda rotar a VO luego de 48 hs si',
        items: [
          'Clínicamente estable por al menos 24 hs',
          'Mejoría de signo-sintomatología de infección',
          'En apirexia',
          'Ausencia de factores que puedan afectar una correcta absorción intestinal',
          'Tolerancia de vía oral',
        ],
      },
      {
        head: 'Alternativas cuando no hay el mismo antimicrobiano disponible',
        table: {
          heads: ['IV', 'VO'],
          rows: [
            ['Ampicilina-sulbactam', 'Amoxicilina-clavulánico o amoxicilina-sulbactam'],
            ['Piperacilina-tazobactam', 'Amoxicilina-clavulánico más ciprofloxacina o doxiciclina'],
            ['Vancomicina', 'Trimetoprim-sulfametoxazol o linezolid'],
          ],
          note: 'Valorar siempre estabilidad clínica y microbiología al momento de rotar.',
        },
      },
    ],
  },
];
