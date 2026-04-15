/* Paciente con Dispositivo Cardíaco Electrónico Implantable (DCEI) y Sospecha de Proceso Infeccioso (G-11) */
const NODES_DCEI = {
  dcei_start: {
    step: 1,
    type: 'dcei_start',
    title: 'Paciente con Dispositivo Cardíaco Electrónico Implantable (DCEI) y Sospecha de Proceso Infeccioso',
    subtitle: 'Seleccione la situación clínica de entrada',
    actionButtons: [
      { label: 'qSOFA', tableIndex: 0 },
      { label: 'Tabla 1 · FR para SAMR', tableIndex: 1 },
      { label: 'Tabla 2 · Muestras', tableIndex: 2 },
    ],
    options: [
      {
        title: 'Sospecha de infección del DCEI',
        desc: '',
        color: '#0d3a52',
        next: 'dcei_local_route',
      },
      {
        title: 'Bacteriemia en paciente con DCEI',
        desc: 'De otro foco o con foco no aclarado',
        color: '#1d4ed8',
        next: 'dcei_bacteremia_route',
      },
    ],
  },

  dcei_local_route: {
    step: 2,
    type: 'dcei_question',
    title: 'Sospecha de infección del DCEI',
    subtitle: 'Defina si se trata de una infección incisional superficial o de compromiso del bolsillo / infección sistémica',
    actionButtons: [
      { label: 'qSOFA', tableIndex: 0 },
      { label: 'Tabla 1 · FR para SAMR', tableIndex: 1 },
      { label: 'Tabla 2 · Muestras', tableIndex: 2 },
    ],
    options: [
      {
        title: 'Signos loco-regionales sin síntomas sistémicos',
        desc: 'Signos fluxivos en piel y celular subcutáneo, < 2 cm en la herida quirúrgica, sin drenaje de pus, fístula o dehiscencia y con menos de 30 días de evolución',
        color: '#eab308',
        next: 'dcei_superficial',
      },
      {
        title: 'Infección del bolsillo o elementos de infección sistémica con sospecha de compromiso del DCEI',
        desc: 'Dolor, signos fluxivos > 2 cm, drenaje de pus, fístula, dehiscencia, deformación o exposición, fiebre, chuchos o qSOFA ≥ 1',
        color: '#dc2626',
        next: 'dcei_systemic_workup',
      },
    ],
  },

  dcei_superficial: {
    step: 3,
    type: 'dcei_treatment',
    headerColor: '#d97706',
    title: 'Infección incisional superficial',
    subtitle: 'Manejo conservador',
    regimens: [
      {
        label: 'Tratamiento',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Cefradina</span> 1 g cada 8 horas vo',
          'Si riesgo de SAMR (Tabla 1): <span class="drug-name">trimetoprim-sulfametoxazol</span> a 5-10 mg/kg/día vo de componente de trimetoprim',
        ],
      },
    ],
    plainNote: 'Antibioticoterapia 7-10 días.',
    actions: [
      { label: 'Tabla 1 · FR para SAMR', tableIndex: 1 },
    ],
    options: [
      {
        title: 'Dudas respecto a compromiso del bolsillo y/o mala evolución',
        desc: '',
        color: '#f59e0b',
        next: 'dcei_systemic_workup',
      },
    ],
  },

  dcei_systemic_workup: {
    step: 3,
    type: 'dcei_treatment',
    headerColor: '#dc2626',
    title: 'Compromiso del bolsillo o infección sistémica con sospecha de DCEI',
    subtitle: 'Estudios iniciales, tratamiento empírico y retiro del dispositivo',
    criteria: [
      'Dolor, signos fluxivos mayores a 2 cm en la herida quirúrgica.',
      'Drenaje de pus, fístula, dehiscencia de la herida.',
      'Deformación o exposición del generador o cables proximales.',
      'Fiebre, chuchos, qSOFA≥1.',
    ],
    regimens: [
      {
        label: 'Solicitar',
        bg: '#fff7ed',
        labelColor: '#9a3412',
        lines: [
          '• Hemocultivos periféricos 2 sets y muestra superficial.',
          '• ETT/ETE.',
          '• PET en casos seleccionados (ETT/ETE y TC sin alteraciones y más de 3 meses de la implantación).',
          '• Valoración de embolias infecciosas con tomografía tórax, abdomen y pelvis.',
        ],
      },
      {
        label: 'Tratamiento empírico',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Vancomicina</span> dosis carga: 25 mg/kg carga, luego 15 mg/kg cada 12 hs iv',
          '+ <span class="drug-name">cefazolina</span> 2 g cada 8 hs iv',
          'Colocación reciente u otros factores de riesgo para bacilos Gram negativos: agregar <span class="drug-name">meropenem</span> 1 g cada 8 hs iv',
        ],
      },
    ],
    careNote: 'Retiro completo del dispositivo en las primeras 72 horas con toma de muestras intraoperatorias.',
    actions: [
      { label: 'qSOFA', tableIndex: 0 },
      { label: 'Tabla 1 · FR para SAMR', tableIndex: 1 },
      { label: 'Tabla 2 · Muestras', tableIndex: 2 },
    ],
    options: [
      {
        title: 'Infección del bolsillo',
        desc: 'Sin evidencia de endocarditis infecciosa ni embolias y hemocultivos negativos',
        color: '#f59e0b',
        next: 'dcei_pocket',
      },
      {
        title: 'Infección sistémica',
        desc: 'Con o sin afectación del bolsillo; HC positivos +/- evidencia de EI y/o embolias',
        color: '#dc2626',
        next: 'dcei_systemic',
      },
    ],
  },

  dcei_pocket: {
    step: 5,
    type: 'dcei_treatment',
    headerColor: '#f59e0b',
    title: 'Infección del bolsillo',
    subtitle: 'Sin evidencia de EI ni embolias y hemocultivos negativos',
    regimens: [
      {
        label: 'Conducta',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '• Ajustar tratamiento a microorganismo aislado.',
          '• Sin aislamiento identificado: <span class="drug-name">linezolid</span> 600 mg vo cada 12 hs',
        ],
      },
      {
        label: 'Duración',
        bg: '#fff7ed',
        labelColor: '#9a3412',
        lines: [
          'Antibioticoterapia 10-14 días.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 2 · Muestras', tableIndex: 2 },
    ],
  },

  dcei_systemic: {
    step: 5,
    type: 'dcei_treatment',
    headerColor: '#b91c1c',
    title: 'Infección sistémica',
    subtitle: 'Con o sin afectación del bolsillo',
    regimens: [
      {
        label: 'Conducta',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '• Ajustar tratamiento a microorganismo aislado.',
          '• Sin aislamiento: valoración individualizada.',
        ],
      },
      {
        label: 'Duración',
        bg: '#fff1f2',
        labelColor: '#9f1239',
        lines: [
          'Antibioticoterapia 4 semanas.',
          'Si EI manejo según guías EI.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 2 · Muestras', tableIndex: 2 },
    ],
  },

  dcei_bacteremia_route: {
    step: 2,
    type: 'dcei_question',
    title: 'Bacteriemia en paciente con DCEI',
    subtitle: 'Clasifique el riesgo de infección del DCEI',
    noteHtml: '<div style="font-weight:800;color:#92400e;margin-bottom:4px">Microorganismos de alto riesgo de infección del DCEI</div><div style="color:#9a3412;font-size:12px;line-height:1.45">S. aureus, Candida spp, Staphylococcus coagulasa negativos, Cutibacterium spp, Streptococcus spp (no S. pneumoniae), Enterococcus spp sin otro foco clínicamente evidente.</div>',
    branchFlow: {
      top: [
        'Bacteriemia a microorganismos que no son de alto riesgo',
        'Baja probabilidad de Infección del DCEI',
      ],
      left: 'Buena evolución y resolución de bacteriemia',
      right: {
        title: 'Mala evolución o bacteriemia persistente',
        next: 'dcei_bact_workup',
      },
      bottom: 'Probabilidad de Infección de DCEI muy baja, valore otros focos',
    },
    options: [
      {
        title: 'Bacteriemia con microorganismos de alto riesgo de infección del DCEI',
        desc: 'Mayor probabilidad de infección del DCEI',
        color: '#eab308',
        next: 'dcei_bact_workup',
      },
    ],
  },

  dcei_bact_workup: {
    step: 4,
    type: 'dcei_info',
    headerColor: '#d97706',
    title: 'Mayor probabilidad de infección del DCEI',
    subtitle: 'ETT/ETE y estudios complementarios',
    blocks: [
      {
        title: 'Solicitar',
        tone: 'amber',
        lines: [
          'ETT/ETE.',
          'Valoración de embolias con tomografía.',
          'PET en casos seleccionados.',
        ],
      },
      {
        title: 'Conducta posterior',
        tone: 'amber',
        lines: [
          'De acuerdo a los resultados retome en el algoritmo de infección sistémica con sospecha de compromiso del DCEI valorando el retiro del mismo.',
        ],
      },
    ],
    nextButton: {
      label: 'Continuar con algoritmo sistémico del DCEI',
      next: 'dcei_systemic_workup',
    },
  },
};

const DCEI_TABLES = [
  {
    id: 'dcei_qsofa',
    label: 'qSOFA',
    title: 'Quick-SOFA (abreviación de la escala de valoración de fallas orgánicas - SOFA)',
    type: 'notes',
    sections: [
      {
        head: 'Considerar sepsis si ≥ 2 o en aumento',
        table: {
          heads: ['Criterio', 'Puntos'],
          rows: [
            ['Frecuencia respiratoria > 22 respiraciones/minuto', '1'],
            ['Alteración de conciencia', '1'],
            ['Presión arterial sistólica < 100 mm Hg', '1'],
          ],
        },
      },
    ],
  },
  {
    id: 'dcei_samr',
    label: 'T1 · FR SAMR',
    title: 'Tabla 1 · Factores de riesgo para Staphylococcus aureus Resistente a Meticilina (SAMR)',
    type: 'notes',
    sections: [
      {
        head: 'Factores de riesgo',
        items: [
          'Antecedente de infección o colonización por SAMR.',
          'Cultivo con SAMR en otro sitio (orina, herida, catéter, hisopado nasal u otra muestra).',
        ],
      },
    ],
  },
  {
    id: 'dcei_samples',
    label: 'T2 · Muestras',
    title: 'Tabla 2 · Muestras para estudio microbiológico',
    type: 'notes',
    sections: [
      {
        head: 'Solicitar',
        items: [
          'Hemocultivos 2 set de 2 frascos con 10 mL cada uno.',
          'Muestra superficial de bolsillo: si es posible aspirado.',
          'Muestra de colecciones y abscesos peri-implante de estar presente.',
          'Biopsias de tejido peri-implante en suero fisiológico.',
          'Dispositivo en frasco estéril.',
          'Cables en frascos estéril.',
        ],
      },
    ],
  },
  {
    id: 'dcei_proph_coord',
    label: 'T3a · Coord.',
    title: 'Tabla 3a · Medidas de profilaxis prequirúrgica en colocación coordinada de DCEI',
    type: 'notes',
    sections: [
      {
        head: 'Medidas',
        items: [
          'Considere uso de mupirocina ungüento nasal cada 8 horas por 7 días y baños con clorhexidina detergente al 4% a los días 1 y 7 del tratamiento en aquellos pacientes con historia de infecciones recientes (menos de 6 meses) o reiteradas de piel y partes blandas o en quienes presenten colonización.',
          'Baño previo con clorhexidina detergente 4% e higiene inicial local amplia incluyendo la axila.',
          'Antisepsia en piel con clorhexidina alcohólica 1-2% o alcohol 70%.',
        ],
      },
      {
        head: 'Profilaxis antibiótica prequirúrgica',
        items: [
          '<span class="drug-name">Cefazolina</span> 2-3 g 30 min antes de la incisión en piel en primer implante o recambio programado.',
          '<span class="drug-name">Vancomicina</span> 30 mg/kg 2 horas antes + <span class="drug-name">amikacina</span> 20 mg/kg 1 hora antes de la incisión en piel en pacientes con factores de riesgo para colonización por microorganismos multirresistentes.',
          'Se podrá valorar, según los factores de riesgo y disponibilidad, el uso de sobres reabsorbibles con antibióticos. No se recomienda el uso de antibiótico local.',
        ],
      },
    ],
  },
  {
    id: 'dcei_proph_urgent',
    label: 'T3b · Urgente',
    title: 'Tabla 3b · Medidas de profilaxis prequirúrgica en colocación urgente de DCEI',
    type: 'notes',
    sections: [
      {
        head: 'Medidas',
        items: [
          'Baño previo con clorhexidina detergente 4% e higiene inicial local amplia incluyendo la axila.',
          'Antisepsia en piel con clorhexidina alcohólica 1-2% o alcohol 70%.',
        ],
      },
      {
        head: 'Profilaxis antibiótica prequirúrgica',
        items: [
          '<span class="drug-name">Cefazolina</span> 2-3 g 30 min antes de la incisión en piel.',
          '<span class="drug-name">Vancomicina</span> 30 mg/kg 2 horas antes + <span class="drug-name">amikacina</span> 20 mg/kg 1 hora antes de la incisión en piel en pacientes ingresados más de 48 horas o en posoperatorio de cirugía cardíaca.',
          'Se podrá valorar, según los factores de riesgo y disponibilidad, el uso de sobres reabsorbibles con antibióticos. No se recomienda el uso de antibiótico local.',
        ],
      },
    ],
  },
];
