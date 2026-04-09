/* Osteomielitis de Hueso Largo Vinculada a Fractura (G-14) */
const NODES_OSTEO_F = {
  of_start: {
    step: 1,
    type: 'of_start',
    next: 'of_time',
    title: 'Osteomielitis de Hueso Largo Vinculada a Fractura',
    subtitle: 'Fractura expuesta, fractura aguda o crónica, pseudoartrosis',
    sections: [
      {
        h: 'Clínica',
        items: [
          'Sospecha clínica: signos fluxivos a nivel del foco, fiebre, fístula, osteosíntesis expuesta, retraso consolidación, derrame articular nuevo cuando hay un implante cercano.',
        ],
      },
      {
        h: 'Solicitar Paraclínica',
        items: [
          'Reactantes de fase aguda: VES, PCR. Hemograma, función renal, crasis.',
          'Cultivos: 2 set hemocultivos (infección aguda +/- fiebre).',
          'Imagen: radiografía del foco (buscando lisis, geodas, consolidación de la fractura).',
        ],
      },
    ],
    traumaText: 'Valoración conjunta con Traumatología',
  },

  of_time: {
    step: 2,
    type: 'of_route',
    title: 'Tiempo de evolución de la fractura',
    subtitle: 'Dividir en fractura temprana o tardía',
    options: [
      {
        title: 'Fractura < 4 semanas (temprana)',
        tag: 'Expuesta o cerrada',
        color: '#16a34a',
        next: 'of_early',
      },
      {
        title: 'Fractura > 4 semanas (tardía)',
        tag: 'Valorar osteosíntesis',
        color: '#f59e0b',
        next: 'of_late_route',
      },
    ],
  },

  of_early: {
    step: 3,
    type: 'of_info',
    title: 'Fractura < 4 semanas (temprana)',
    subtitle: 'Con o sin osteosíntesis',
    sections: [
      {
        h: 'Conducta',
        items: [
          'Establecer tipo de lesión y estabilidad del implante.',
          'Valorar limpieza quirúrgica y toma de muestras.',
          'En esta etapa se retiene el implante.',
        ],
      },
      {
        h: 'Tratamiento antimicrobiano sistémico',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    noteLines: [
      'Si sospecha otra etiología: envíe muestras para hongos y micobacterias (en frasco estéril).',
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_late_route: {
    step: 3,
    type: 'of_route',
    title: 'Fractura > 4 semanas (tardía)',
    subtitle: 'Seleccione según osteosíntesis',
    options: [
      {
        title: 'Sin osteosíntesis',
        tag: 'No consolidada',
        color: '#eab308',
        next: 'of_late_no_implant',
      },
      {
        title: 'Con osteosíntesis',
        tag: 'Consolidada o no consolidada',
        color: '#ea580c',
        next: 'of_late_implant_route',
      },
    ],
  },

  of_late_no_implant: {
    step: 4,
    type: 'of_info',
    title: 'Fractura > 4 semanas (tardía)',
    subtitle: 'Sin osteosíntesis · No consolidada',
    sections: [
      {
        h: 'Conducta',
        items: [
          'Establecer tipo de lesión.',
          'Limpieza quirúrgica.',
          'Estabilización mecánica del foco y toma de muestras.',
        ],
      },
      {
        h: 'Tratamiento antimicrobiano sistémico',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    noteLines: [
      'Si sospecha otra etiología: envíe muestras para hongos y micobacterias (en frasco estéril).',
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_late_implant_route: {
    step: 4,
    type: 'of_route',
    title: 'Fractura > 4 semanas (tardía)',
    subtitle: 'Con osteosíntesis',
    options: [
      {
        title: 'Consolidada',
        tag: 'Retiro del implante',
        color: '#f59e0b',
        next: 'of_late_consolidated',
      },
      {
        title: 'No consolidada',
        tag: 'Valorar estabilidad del implante',
        color: '#dc2626',
        next: 'of_late_nonconsolidated',
      },
    ],
  },

  of_late_consolidated: {
    step: 5,
    type: 'of_info',
    title: 'Con osteosíntesis consolidada',
    subtitle: '',
    sections: [
      {
        h: 'Conducta',
        items: [
          'Limpieza quirúrgica.',
          'Retiro del implante y toma de muestras.',
        ],
      },
      {
        h: 'Tratamiento antimicrobiano sistémico',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_late_nonconsolidated: {
    step: 5,
    type: 'of_route',
    title: 'Con osteosíntesis no consolidada',
    subtitle: 'Valorar estabilidad del implante',
    options: [
      {
        title: 'Implante suelto o flojo',
        tag: 'Cambio de fijación',
        color: '#dc2626',
        next: 'of_late_loose',
      },
      {
        title: 'Implante firme',
        tag: 'Manejo multidisciplinario',
        color: '#0284c7',
        next: 'of_late_firm',
      },
    ],
  },

  of_late_loose: {
    step: 6,
    type: 'of_info',
    title: 'Implante suelto o flojo',
    subtitle: '',
    sections: [
      {
        h: 'Conducta',
        items: [
          'Limpieza quirúrgica.',
          'Cambio de fijación.',
          'ATB local y sistémico y toma de muestras.',
        ],
      },
      {
        h: 'Tratamiento antimicrobiano sistémico',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_late_firm: {
    step: 6,
    type: 'of_info',
    title: 'Implante firme',
    subtitle: '',
    sections: [
      {
        h: 'Conducta',
        items: [
          'Manejo por equipo multidisciplinario.',
          'Se evalúa opciones de tratamiento en cada caso (retiro de implante, cambio de plan, ATB local, etc).',
        ],
      },
      {
        h: 'Tratamiento antimicrobiano sistémico',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_tx_intro: {
    step: 7,
    type: 'of_info',
    title: 'Tratamiento antimicrobiano sistémico',
    subtitle: '',
    sections: [
      {
        h: 'Inicio',
        items: [
          'Paciente con sospecha o confirmación de infección: inicie el tratamiento antimicrobiano sistémico en el preoperatorio inmediato (30 minutos a 2 horas antes del procedimiento en función del antibiótico indicado).',
          'No olvide tomar 5 a 6 muestras para cultivo microbiológico y 1 para anatomía patológica.',
        ],
      },
    ],
    actions: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
    next: 'of_tx_route',
  },

  of_tx_route: {
    step: 8,
    type: 'of_route',
    title: 'Tratamiento antimicrobiano sistémico empírico',
    subtitle: 'Evaluar factores de riesgo para microorganismos multirresistentes',
    options: [
      {
        title: 'Sin factores de riesgo para microorganismos multirresistentes',
        tag: 'Cobertura estándar',
        color: '#16a34a',
        next: 'of_tx_low',
      },
      {
        title: 'Con factores de riesgo para microorganismos multirresistentes',
        tag: 'Cobertura ampliada',
        color: '#dc2626',
        next: 'of_tx_mdr',
      },
    ],
  },

  of_tx_low: {
    step: 9,
    type: 'of_treatment',
    headerColor: '#16a34a',
    headerTextColor: '#ffffff',
    title: 'Tratamiento antimicrobiano sistémico empírico',
    subtitle: 'Sin factores de riesgo para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Esquema empírico',
        bg: '#ecfccb',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs',
          '+',
          '<span class="drug-name">Ceftriaxona</span> 2 gr IV día',
        ],
      },
    ],
    notes: [
      'Con resultado de cultivos desescale plan antimicrobiano.',
      'Rote a la VO al día 7-10 (paciente tolerando VO, sin fiebre, con evolución clínica favorable).',
    ],
    actionButtons: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
  },

  of_tx_mdr: {
    step: 9,
    type: 'of_treatment',
    headerColor: '#dc2626',
    headerTextColor: '#ffffff',
    title: 'Tratamiento antimicrobiano sistémico empírico',
    subtitle: 'Con factores de riesgo para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Esquema empírico',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV',
          '+',
          '<span class="drug-name">Amikacina</span> 25 mg/kg carga IV seguido de 15 mg/kg día',
          'O',
          '<span class="drug-name">Meropenem</span> 1 gr IV c/8 hs',
        ],
      },
    ],
    notes: [
      'Shock séptico:<br><span class="drug-name">Vancomicina</span> 25 mg/kg IV dosis carga seguido de 15 mg/kg c/12 hs IV<br>+<br><span class="drug-name">Meropenem</span> 2 gr IV dosis carga seguido de 1 gr IV c/8 hs en infusión extendida.',
      'Con resultado de cultivos desescale plan antimicrobiano.',
      'Rote a la VO al día 7-10 (paciente tolerando VO, sin fiebre, con evolución clínica favorable).',
    ],
    actionButtons: [
      { label: 'Criterios diagnósticos', tableIndex: 1 },
      { label: 'Clasificación Cierny-Mader', tableIndex: 2 },
    ],
  },
};

const OSTEO_F_TABLES = [
  {
    id: 'of_qsofa',
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
    id: 'of_criteria',
    label: 'T2 · Diagnóstico',
    title: 'Tabla 2 · Criterios diagnósticos de infección',
    type: 'notes',
    sections: [
      {
        head: 'Sugestivos',
        items: [
          'Signos fluxivos a nivel del foco.',
          'Material de osteosíntesis expuesto.',
          'Retraso de la consolidación.',
          'Nuevo derrame en articulación en paciente con implante cercano.',
        ],
      },
      {
        head: 'Confirmatorios',
        items: [
          'Fístula.',
          'Biopsia > 5 PMN.',
          'Cultivos: 2 muestras (+) a un mismo microorganismo de baja virulencia con igual perfil fenotípico o 1 muestra (+) a un patógeno primario.',
        ],
      },
    ],
  },
  {
    id: 'of_cierny',
    label: 'T3 · Cierny-Mader',
    title: 'Tabla 3 · Clasificación Cierny-Mader de Osteomielitis',
    type: 'notes',
    sections: [
      {
        head: 'Tipo',
        items: [
          'Tipo I: medular, limitado al canal.',
          'Tipo II: superficial, limitado al exterior del hueso, no penetra cortical.',
          'Tipo III: localizada, penetra cortical, hueso estable.',
          'Tipo IV: difusa, infección circunferencial de la cortical, hueso inestable.',
        ],
      },
      {
        head: 'Huésped',
        items: [
          'A: inmunocompetente, vascularidad normal.',
          'B: compromiso sistémico, local o ambos.',
          'C: riesgo sistémico contraindica tratamiento.',
        ],
      },
    ],
  },
];
