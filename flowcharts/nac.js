/* NAC · Neumonía Aguda Comunitaria (G-5) */
const NODES_NAC = {
  nac_start: {
    step: 1,
    type: 'nac_start',
    next: 'nac_severity',
    title: 'Neumonía Aguda Comunitaria',
    subtitle: 'Sin inmunodepresión severa',
    conclusion: 'Planteo de NAC Sin Inmunosupresion severa',
    sections: [
      {
        h: 'Sospecha clínica',
        items: [
          'Duración de síntomas en general menor a 5 días',
          'Fiebre y síntomas del tracto respiratorio inferior: tos, expectoración, disnea, crepitantes o dolor torácico',
          'En añosos e inmunodeprimidos considerar cuadro sin fiebre y síntomas extrapulmonares',
        ],
      },
      {
        h: 'Imagen',
        items: [
          'Rx de tórax: infiltrado nuevo y sin diagnóstico alternativo',
          'Ultrasonografía: diagnóstico de neumonía, complicaciones locales y guía de maniobras',
          'TC de tórax: considerar en inmunodeprimidos, patología estructural o evolución tórpida',
        ],
      },
      {
        h: 'Considerar además',
        items: [
          'Ofrecer test rápido para VIH según contexto',
          'Si sospecha neumonitis/neumonía viral, seguir protocolo específico',
          'Pensar en tuberculosis en pacientes de alto riesgo',
        ],
      },
    ],
  },

  nac_severity: {
    step: 2,
    type: 'nac_severity',
    badgeText: 'Valorar Criterios de Internación y Severidad',
    groups: [
      {
        icon: '🏠',
        title: 'Grupo 1',
        color: '#059669',
        bg: '#d1fae5',
        border: '#059669',
        text: '#065f46',
        score: 'CRB-65 / CURB-65: 0–1 o PSI I–II',
        desc: 'Ambulatorio si las comorbilidades están compensadas, tolera vía oral y cuenta con contención social.',
        next: 'nac_g1_route',
      },
      {
        icon: '🏥',
        title: 'Grupo 2',
        color: '#d97706',
        bg: '#fef3c7',
        border: '#d97706',
        text: '#92400e',
        score: 'CRB-65 / CURB-65: 2 o PSI III',
        desc: 'U otra causa de internación presente o comorbilidades no compensadas.',
        extra: 'INTERNACIÓN EN CUIDADOS MODERADOS',
        next: 'nac_g2_route',
      },
      {
        icon: '🚨',
        title: 'Grupo 3',
        color: '#dc2626',
        bg: '#fee2e2',
        border: '#dc2626',
        text: '#991b1b',
        score: 'CRB-65 / CURB-65: 3–5 o PSI IV–V',
        desc: 'Criterios de sepsis.',
        extra: 'INTERNACIÓN EN CUIDADOS CRÍTICOS (CI / CTI)',
        next: 'nac_g3_route',
      },
    ],
  },

  nac_g1_route: {
    step: 3,
    type: 'nac_split',
    title: 'Grupo 1 · Ambulatorio',
    subtitle: 'Elegí el subgrupo clínico que corresponde',
    noteLines: [
      'En general no es necesario realizar paraclínica.',
      'Ofrecer realizar test rápido para VIH.',
    ],
    commonInfoTitle: 'Considerar',
    commonInfo: [
      'Tuberculosis en pacientes de alto riesgo: VIH, PPL',
      'De elección realizar prueba molecular rápida en una sola muestra de esputo para diagnóstico de TB pulmonar y para detectar resistencia a la rifampicina (Xpert MTB/RIF o Ultra)',
      'Neumonitis/neumonía viral: sugerimos realizar antígeno para SARS CoV-2; de ser negativo realizar PCR en las primeras 48 horas, así como diagnóstico de influenza por el método que disponga. Guiarse por recomendaciones institucionales del MSP o equipo tratante.',
    ],
    sharedFooterTitle: 'Duración del tratamiento:',
    sharedFooter: [
      '5 días (Basado en mejoría clínica y ausencia de complicaciones loco-regionales)',
      'Si la causa de ingreso es social mantener pauta según grupo de riesgo.',
      'Control ambulatorio 48-72hs',
    ],
    color: '#059669',
    options: [
      {
        title: 'Grupo 1a',
        tag: '< 65 años · Sin comorbilidades · Sin FR para microorganismos resistentes',
        next: 'nac_g1a',
      },
      {
        title: 'Grupo 1b',
        tag: '≥ 65 años sin comorbilidades o < 65 con comorbilidades compensadas · Sin FR MDR',
        next: 'nac_g1b',
      },
    ],
  },

  nac_g2_route: {
    step: 3,
    type: 'nac_split',
    title: 'Grupo 2 · Cuidados Moderados',
    subtitle: 'Definir si hay',
    subtitleActionLabel: 'FR MDR',
    noteLines: [
      'Iniciar tratamiento antimicrobiano empírico en las primeras 4 horas desde la entrada al hospital',
      'Paraclínica a considerar: hemograma, glicemia, ionograma, creatininemia, azoemia, funcional y enzimograma hepático, PCR, gasometría arterial, VIH.',
      'Microbiológico: cultivo de la expectoración, considerar realizar en grupo 2b Hemocultivos x 2 (total 40 ml).',
    ],
    sharedFooter: [
      'Rotar a vía oral luego de 48 horas si: clínicamente estable por 24 horas al menos, mejoría de signos o síntomas de infección, en apirexia, ausencia de factores que puedan afectar una correcta absorción enteral, tolerar vía oral.',
      'Reevaluar esquema antimicrobiano según resultados microbiológicos y evolución clínica.',
      'Si mejoría clínica valorar alta precoz con o sin internación domiciliaria.',
      'DURACIÓN TTO: 7 días. Basado en mejoría clínica.',
    ],
    color: '#d97706',
    hideResistanceButton: true,
    options: [
      {
        title: 'Grupo 2a',
        tag: 'SIN FR para microorganismos multirresistentes',
        next: 'nac_g2a',
      },
      {
        title: 'Grupo 2b',
        tag: 'CON FR para microorganismos multirresistentes',
        next: 'nac_g2b',
      },
    ],
  },

  nac_g3_route: {
    step: 3,
    type: 'nac_split',
    title: 'Grupo 3 · Cuidados Críticos',
    subtitle: 'Definir si hay',
    subtitleActionLabel: 'FR MDR',
    noteLines: [
      'Inicio precoz de antibioticoterapia (ANTES DE 1 HORA)',
      'Paraclínica sugerida: hemograma, glicemia, ionograma, creatininemia, azoemia, funcional y enzimograma hepático, crasis, PCR, gasometría arterial, VIH.',
      'Estudios microbiológicos:',
      'Hemocultivos x 2 (total 40 ml)',
      'Cultivo de la expectoración / Aspirado de secreciones traqueales / Lavado bronquiolo-alveolar',
      'Antígeno neumocóccico en orina',
      'Panel respiratorio alto o bajo en secreciones (biología molecular por sistema de PCR multiplex)',
    ],
    sharedFooter: [
      'REEVALUAR ESQUEMA ANTIMICROBIANO SEGÚN RESULTADOS MICROBIOLÓGICOS Y EVOLUCIÓN CLÍNICA.',
      'DURACIÓN TRATAMIENTO: 7 días. Basado en mejoría clínica.',
    ],
    color: '#dc2626',
    hideResistanceButton: true,
    options: [
      {
        title: 'Grupo 3a',
        tag: 'SIN FR para microorganismos multirresistentes',
        next: 'nac_g3a',
      },
      {
        title: 'Grupo 3b',
        tag: 'CON FR para microorganismos multirresistentes',
        next: 'nac_g3b',
      },
    ],
  },

  nac_g1a: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#059669',
    title: 'Grupo 1a < 65 años · Sin comorbilidades · Sin',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    hideResistanceButton: true,
    setting: 'Ambulatorio',
    settingColor: '#d1fae5',
    settingText: '#065f46',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#d1fae5',
        labelColor: '#065f46',
        lines: [
          '<span class="drug-name">Amoxicilina</span> 500 mg VO c/8 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Amoxicilina</span> 750–1000 mg VO c/12 hs',
        ],
      },
      {
        label: 'Si alergia grave a β-lactámicos o FR para atípicos',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Claritromicina</span> 500 mg VO c/12 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Claritromicina UD</span> 1000 mg VO c/24 hs',
        ],
      },
    ],
  },

  nac_g1b: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#059669',
    title: 'Grupo 1b ≥ 65 años o comorbilidades compensadas · Sin',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    hideResistanceButton: true,
    setting: 'Ambulatorio',
    settingColor: '#d1fae5',
    settingText: '#065f46',
    prelude: [
      'Considerar laboratorio básico si la evolución no es la esperada.',
    ],
    regimens: [
      {
        label: 'Primera línea',
        bg: '#d1fae5',
        labelColor: '#065f46',
        lines: [
          '<span class="drug-name">Amoxicilina/clavulánico</span> 875/125 mg VO c/12 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Amoxicilina/sulbactam</span> 875/125 mg VO c/12 hs',
        ],
      },
      {
        label: 'Si alta sospecha de atípicos',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          'Agregar <span class="drug-name">Claritromicina</span> 500 mg VO c/12 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Claritromicina UD</span> 1000 mg VO c/24 hs',
        ],
      },
      {
        label: 'Alergia grave a β-lactámicos',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Levofloxacina</span> 750 mg VO c/24 hs',
          '<em style="color:#64748b">— o —</em>',
          '<span class="drug-name">Moxifloxacina</span> 400 mg VO c/24 hs',
        ],
      },
    ],
  },

  nac_g2a: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#d97706',
    title: 'Grupo 2a: SIN FR para microorganismos multirresistentes',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    setting: 'Internación en Cuidados Moderados',
    settingColor: '#fef3c7',
    settingText: '#92400e',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#fef3c7',
        labelColor: '#92400e',
        lines: [
          '<span class="drug-name">Ampicilina/sulbactam</span> 1000/500 mg IV c/6 hs',
        ],
      },
      {
        label: 'Si internación domiciliaria puede considerarse ceftriaxona 1 g IV cada 24 hs',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 g IV cada 24 hs',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo bajo o intermedio',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 g IV c/24 hs',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo alto',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Moxifloxacina</span> 400 mg VO o IV cada 24 hs',
        ],
      },
      {
        label: 'Si sospecha de atípicos considerar agregar al betalactámico',
        bg: '#dbeafe',
        labelColor: '#1d4ed8',
        lines: [
          '<span class="drug-name">Claritromicina</span> 500 mg IV o VO cada 12 hs',
        ],
      },
    ],
  },

  nac_g2b: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#d97706',
    title: 'Grupo 2b: CON FR para microorganismos multirresistentes',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    setting: 'Internación en Cuidados Moderados',
    settingColor: '#fef3c7',
    settingText: '#92400e',
    regimens: [
      {
        label: 'Enterobacterias productoras de BLEE o Pseudomonas aeruginosa',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 g IV cada 6 hs',
          '+/- <span class="drug-name">Amikacina</span> 15 mg/kg/día (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si riesgo SAMR agregar',
        bg: '#ede9fe',
        labelColor: '#4c1d95',
        lines: [
          '<span class="drug-name">Trimetoprim/sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV o VO dividido en 3 o 4 dosis',
          'Si alergia alternativa <span class="drug-name">Vancomicina</span> carga 30 mg/kg IV y luego 15 a 20 mg/kg IV cada 12 hs, monitorizar valle y pico',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo bajo o intermedio',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 g IV cada 24 hs',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo alto',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Moxifloxacina</span> 400 mg VO o IV cada 24 hs',
        ],
      },
      {
        label: 'Si sospecha de atípicos considerar agregar al betalactámico',
        bg: '#dbeafe',
        labelColor: '#1d4ed8',
        lines: [
          '<span class="drug-name">Claritromicina</span> 500 mg IV o VO cada 12 hs',
        ],
      },
    ],
  },

  nac_g3a: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#dc2626',
    title: 'Grupo 3a: SIN FR para microorganismos multirresistentes',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    setting: 'Internación en Cuidados Críticos (CI / CTI)',
    settingColor: '#fee2e2',
    settingText: '#991b1b',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ampicilina/sulbactam</span> 1.000 mg / 500 mg IV cada 6 hs',
          '+ <span class="drug-name">Claritromicina</span> 500 mg IV cada 12 hs',
        ],
      },
      {
        label: 'Alergia leve o intermedia',
        bg: '#e0f2fe',
        labelColor: '#0c4a6e',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 g IV cada 24 hs',
          '+ <span class="drug-name">Claritromicina</span> 500 mg IV cada 12 hs',
        ],
      },
      {
        label: 'Alergia grave a β-lactámicos',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs',
        ],
      },
    ],
  },

  nac_g3b: {
    step: 4,
    type: 'nac_treatment',
    headerColor: '#dc2626',
    title: 'Grupo 3b: CON FR para microorganismos multirresistentes',
    subtitle: 'Tratamiento empírico',
    txLabelHidden: true,
    subtitleAsLabel: true,
    setting: 'Internación en Cuidados Críticos (CI / CTI)',
    settingColor: '#fee2e2',
    settingText: '#991b1b',
    regimens: [
      {
        label: 'P. aeruginosa o Enterobacterias productoras de BLEE',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 9 g IV carga en 2 hs y luego a las 6 hs repetir 4,5 g IV cada 6 hs',
          '+/- <span class="drug-name">Amikacina</span> 15 mg/kg IV a pasar en 30 min y luego en forma inmediata 2 g IV a pasar en 3 horas cada 8 hs',
          '+ <span class="drug-name">Claritromicina</span> 500 mg IV cada 12 hs',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo bajo o intermedio',
        bg: '#fef3c7',
        labelColor: '#92400e',
        lines: [
          'Considerar plan con <span class="drug-name">Cefepime</span>',
          '+ <span class="drug-name">Claritromicina</span> 500 mg IV cada 12 hs',
          'Con o sin <span class="drug-name">Amikacina</span> 25 mg/kg/día IV a pasar en 30 min (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si alergia a betalactámicos riesgo alto',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Moxifloxacina</span> 400 mg IV cada 24 hs',
          '+/- <span class="drug-name">Amikacina</span> 15 mg/kg/día IV (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Alergia grave a β-lactámicos',
        bg: '#f1f5f9',
        labelColor: '#475569',
        lines: [
          '<span class="drug-name">Levofloxacina</span> 750 mg IV c/24 hs',
          'Si no está disponible: <span class="drug-name">Ciprofloxacina</span> 400 mg IV c/8 hs',
          '+ <span class="drug-name">Amikacina</span> 15 mg/kg/día IV',
        ],
      },
      {
        label: 'Si riesgo SAMR',
        bg: '#ede9fe',
        labelColor: '#4c1d95',
        lines: [
          '<span class="drug-name">Trimetoprim sulfametoxazol</span> 10 mg/kg/día de trimetoprim IV dividido en 3 o 4 dosis',
          'O <span class="drug-name">Vancomicina</span> carga 30 mg/kg IV y luego 15-20 mg/kg IV cada 12 hs (monitorizar valle y pico)',
        ],
      },
      {
        label: 'Si shock séptico y riesgo de Enterobacterias productoras de BLEE',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Meropenem</span> 2 g IV carga a pasar en 1 hora y luego 2 g IV a pasar en 3 horas cada 8 hs',
          '+ <span class="drug-name">Claritromicina</span> 500 mg IV cada 12 hs',
        ],
      },
    ],
  },
};

const NAC_TABLES = [
  {
    id: 'nac_scores',
    label: 'T1 · Scores',
    title: 'Scores, comorbilidades e internación',
    type: 'notes',
    sections: [
      {
        head: 'CURB-65 / CRB-65',
        items: [
          'C: confusión nueva',
          'U: urea > 44 mg/dl (solicitar en ≥ 65 años o comorbilidades)',
          'R: frecuencia respiratoria > 30/min',
          'B: PAS < 90 mmHg o PAD ≤ 60 mmHg',
          '65: edad ≥ 65 años',
        ],
      },
      {
        head: 'PSI / PORT',
        calcButton: 'Calcular PSI / PORT',
        table: {
          heads: ['Clase', 'Puntaje', 'Conducta'],
          rows: [
            ['Clase I', '< 50 puntos', 'Tratamiento extrahospitalario'],
            ['Clase II', '51–70 puntos', 'Tratamiento extrahospitalario'],
            ['Clase III', '71–90 puntos', 'Valoración en Urgencias'],
            ['Clase IV', '91–130 puntos', 'Ingreso hospitalario'],
            ['Clase V', '> 130 puntos', 'Ingreso hospitalario'],
          ],
          note: 'Se sugiere uso de app para cálculo.',
        },
      },
      {
        head: 'Comorbilidades a considerar',
        items: [
          'Enfermedad neurológica, hepática y/o renal',
          'Diabetes mellitus, insuficiencia cardíaca',
          'EPOC o asma, alcoholismo, tabaquismo, consumo de PBC',
          'Neoplasia, colagenopatía, asplenia',
          'Inmunosupresión por patología o fármacos',
        ],
      },
      {
        head: 'Internar aunque CURB-65 sea 0–1 si',
        items: [
          'qSOFA ≥ 2 o en aumento',
          'Más de un lóbulo afectado, SatO2 < 93% o insuficiencia respiratoria',
          'Inestabilidad hemodinámica, neumonía necrotizante o derrame pleural',
          'Fracaso antibiótico previo, intolerancia digestiva o sin soporte social',
        ],
      },
    ],
  },
  {
    id: 'nac_mdr',
    label: 'T2 · FR MDR',
    title: 'Factores de Riesgo para microorganismos multirresistentes',
    type: 'notes',
    sections: [
      {
        head: 'FR para Pseudomonas aeruginosa',
        items: [
          'Internación > 7 días en el último mes',
          'Bronquiectasias · Fibrosis quística',
          'EPOC con VEF1 < 30%',
          '> 10 mg de prednisona diaria en las últimas 2 semanas',
          'Administración frecuente (> 4 veces/año) o reciente de antibióticos (en los últimos 3 meses)',
          'Inmunodepresión severa',
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
      {
        head: 'FR para Enterobacterias productoras de BLEE',
        items: [
          'Considerar en pacientes con comorbilidades (ej.: EPOC, diabetes no controlada, stroke) con severo grado de dependencia, institucionalizados, expuestos a antimicrobianos en los últimos 3 meses (quinolonas, betalactámicos, carbapenemes) y en quienes se plantea un probable mecanismo aspirativo.',
          'Colonización o infección previa',
        ],
      },
      {
        head: 'FR para anaerobios',
        items: [
          'NO realizar doble cobertura anaerobicida',
          'Neumonía por aspiración o necrotizante: en general polimicrobiana',
          'Trastornos deglutorios',
          'Focos sépticos dentarios, procedimientos dentales o digestivos',
          'Alcoholismo, fármacos sedantes u otra patología que deprima sensorio',
        ],
      },
    ],
  },
  {
    id: 'nac_allergy',
    label: 'T3 · Alergia',
    title: 'Alergia a β-lactámicos',
    type: 'allergy_grid',
    sections: [
      {
        head: 'Riesgo bajo',
        tone: 'green',
        history: [
          'Síntomas aislados que alejan planteo de reacción de hipersensibilidad (ejemplo síntomas gastrointestinales, cefaleas, prurito sin rush, reacción desconocida, alejada [más de 10 años], sin características de hipersensibilidad inmediata).',
        ],
        action: [
          'Prueba de tolerancia oral bajo observación clínica',
          'Considerar antibiótico alternativo (ejemplo, cefalosporinas)',
        ],
      },
      {
        head: 'Riesgo intermedio',
        tone: 'amber',
        history: [
          'Urticaria u otros eritemas pruriginosos, síntomas con características de reacción inmediata, sin anafilaxia.',
        ],
        action: [
          'Pruebas cutáneas: si resultado negativo realizar prueba de tolerancia oral bajo observación',
          'Considerar antibiótico alternativo (ejemplo, cefalosporinas)',
        ],
      },
      {
        head: 'Riesgo alto',
        tone: 'red',
        history: [
          'Anafilaxia, hepatitis alérgica, nefritis intersticial, anemia hemolítica, reacciones cutáneas severas ej.: síndrome de Steven Johnson, necrolisis epidérmica tóxica, dermatitis exfoliativa, pustulosis aguda exantematosa generalizada, DRESS.',
          'Hipersensibilidad tipo I mediada por IgE.',
          'Pruebas cutáneas positivas',
          'Reacciones recurrentes',
          'Reacciones a más de un betalactámico.',
        ],
        action: [
          'No dar betalactámicos',
          'Según el caso se podrá: referir a especialista, consultar PROA o realizar desensibilización',
        ],
      },
    ],
  },
  {
    id: 'nac_pathogens',
    label: 'T4 · Etiología',
    title: 'Patógenos probables y diagnósticos diferenciales',
    type: 'notes',
    sections: [
      {
        head: 'Bacterianos frecuentes',
        items: [
          'Streptococcus pneumoniae',
          'En fumadores o patología pulmonar crónica: Haemophilus influenzae, Moraxella catarrhalis',
        ],
      },
      {
        head: 'Atípicos',
        items: [
          'Mycoplasma pneumoniae, Chlamydophila pneumoniae, C. psittaci',
          'Legionella spp., Coxiella burnetii',
          'Considerar por exposición laboral, ambiental, viajes, animales o áreas rurales',
        ],
      },
      {
        head: 'Virales y otros',
        items: [
          'Influenza y COVID-19 tienen manejo específico',
          'Otros virus respiratorios: VRS, metapneumovirus, parainfluenza, adenovirus, rinovirus',
          'Tuberculosis: considerar especialmente en PPL, inmunodeprimidos o contexto socioeconómico deficitario',
        ],
      },
      {
        head: 'Aspiración / anaerobios',
        items: [
          'No realizar doble cobertura anaerobicida de rutina',
          'Pensar en polimicrobiana si hay aspiración, trastornos deglutorios, focos dentarios o depresión del sensorio',
        ],
      },
    ],
  },
  {
    id: 'nac_duration',
    label: 'T5 · Duración',
    title: 'Duración y reevaluación',
    type: 'notes',
    sections: [
      {
        head: 'Duración orientativa',
        items: [
          'Grupo 1: 5–7 días',
          'Grupo 2: 7 días',
          'Grupo 3a: 7 días',
          'Grupo 3b: 10–14 días',
          'Si se usa claritromicina: duración total de 10 días',
        ],
      },
      {
        head: 'Rotación a VO',
        items: [
          'Luego de 48–72 hs si está clínicamente estable',
          'Mejoría de signos y síntomas',
          'Afebril y sin problemas de absorción gastrointestinal',
          'Tolera vía oral',
        ],
      },
      {
        head: 'Reevaluar siempre',
        items: [
          'Resultados microbiológicos',
          'Evolución clínica y necesidad de escalada o desescalada',
          'Complicaciones loco-regionales o diagnóstico alternativo',
        ],
      },
    ],
  },
];
