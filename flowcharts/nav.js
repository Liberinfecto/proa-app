/* NAV · Neumonía Asociada a la Ventilación Mecánica (G-7) */
const NODES_NAV = {
  nav_start: {
    step: 1,
    type: 'nav_start',
    next: 'nav_cpis',
    title: 'Neumonía Asociada a la Ventilación Mecánica',
    subtitle: 'Sospecha, toma de cultivos y etiología probable',
    sections: [
      {
        h: 'Sospecha',
        items: [
          'Aparición de un infiltrado radiológico nuevo o progresión de uno ya existente o imagen compatible en ultrasonido o tomografía, más al menos dos de los siguientes:',
          'Fiebre > 38 ºC o hipotermia < 36 ºC',
          'Secreciones traqueobronquiales purulentas',
          'Leucocitosis o leucopenia',
          'Deterioro de la oxigenación, medido por PaO2/FiO2',
        ],
      },
      {
        h: 'Toma de cultivos previo a inicio de antimicrobianos',
        items: [
          'Aspirado traqueal/cultivo semicuantitativo: buena calidad - menos de 10 células epiteliales planas / campo 10x. El desarrollo abundante de un microorganismo se correlaciona bien con la etiología de la NAV.',
          'LBA mediante FBC o a ciegas/cultivo cuantitativo: buena calidad menos de 1% de células epiteliales planas. Punto de corte para cultivo es ≥ 104 ufc/ml.',
          'Hemocultivos x 2',
        ],
      },
    ],
  },

  nav_cpis: {
    step: 2,
    type: 'nav_question',
    badgeText: 'Diagnóstico probable si CPIS > 6',
    checklist: [
      { text: '1) CPIS modificado', tableIndex: 0, tableLabel: 'Tabla 1' },
      { text: '2) NAV precoz o tardía' },
      { text: '3) Etiología y patógenos probables', tableIndex: 1, tableLabel: 'Tabla 2' },
      { text: '4) FR para microorganismos multirresistentes, EPC, Acinetobacter baumannii y Aspergillus spp', tableIndex: 2, tableLabel: 'Tabla 3' },
      { text: '5) Reevaluación a las 48 / 72 horas', tableIndex: 3, tableLabel: 'Tabla 4' },
    ],
    note: 'Con sospecha e inestabilidad hemodinámica o hipoxemia severa, debe iniciarse ATB rápidamente aún si no hay certeza clínica. En pacientes más estables, un enfoque conservador puede considerarse teniendo en cuenta otras causas de inestabilidad respiratoria.',
    options: [
      {
        title: 'NAV precoz',
        desc: '< 5 días de internación en la unidad, sin otros FR para microorganismos multirresistentes',
        color: '#16a34a',
        next: 'nav_early',
      },
      {
        title: 'NAV tardía',
        desc: '≥ 5 días de internación en la unidad o con otros FR para microorganismos multirresistentes',
        color: '#dc2626',
        next: 'nav_late',
      },
    ],
  },

  nav_early: {
    step: 3,
    type: 'nav_treatment',
    headerColor: '#16a34a',
    durationLabel: 'Duración de tratamiento · NAV PRECOZ: 5 a 7 días',
    durationBg: '#86efac',
    durationText: '#111111',
    title: 'NAV PRECOZ',
    subtitle: '< 5 días de internación en la unidad, sin otros FR para microorganismos multirresistentes',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Ampicilina-sulbactam</span> 1.5 gr IV c/6 h.',
          'Si alergia a betalactámicos <span class="drug-name">Moxifloxacina</span> 400 mg IV día.',
          'Si FR para SAMR agregar <span class="drug-name">Trimetoprim/sulfametoxazol</span> 10 mg/kg IV de trimetoprim dividido en 3 a 4 dosis/día.',
        ],
      },
    ],
    notes: [
      { text: 'Reevaluación a las 48 / 72 horas', tableIndex: 3, tableLabel: 'Tabla 4' },
      'Si evolución desfavorable reconsiderar tratamiento y/o complicaciones.',
    ],
  },

  nav_late: {
    step: 3,
    type: 'nav_treatment',
    headerColor: '#dc2626',
    durationLabel: 'Duración de tratamiento · NAV TARDÍA: 8 días',
    durationBg: '#fca5a5',
    durationText: '#111111',
    title: 'NAV TARDÍA',
    subtitle: '≥ 5 días de internación en la unidad o con otros FR para microorganismos multirresistentes',
    introAlert: 'Con sospecha e inestabilidad hemodinámica o hipoxemia severa, debe iniciarse ATB rápidamente aún si no hay certeza clínica.',
    regimens: [
      {
        label: 'Primera línea',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Cefepime</span> 15 mg/Kg IV en 30 min e iniciar 2 g IV a pasar en 3 h cada 8 h (o <span class="drug-name">piperacilina-tazobactam</span> 9 gr IV carga en 2 h y no más allá de 6 h continuar con 4,5 gr IV a pasar en 3 h cada 6 h) más <span class="drug-name">amikacina</span> 25 mg/kg IV día a pasar en 30 min (monitorizar valle y pico).',
        ],
      },
      {
        label: 'Si FR para EPC y/o Acinetobacter baumannii',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          'Sustituir amikacina por <span class="drug-name">colistina</span> 5 mg/Kg carga y a las 12 h continuar con 5 mg/Kg dividido en dos dosis cada 12 h.',
        ],
      },
      {
        label: 'Si shock séptico',
        bg: '#fca5a5',
        labelColor: '#7f1d1d',
        lines: [
          '<span class="drug-name">Meropenem</span> 2 gr IV en 60 min e iniciar inmediatamente 2 gr IV a pasar en 3 h cada 8 h más <span class="drug-name">colistina</span> 5 mg/Kg carga y a las 12 horas continuar con 5 mg/Kg dividido en dos dosis cada 12 h.',
        ],
      },
      {
        label: 'Si FR para SAMR agregar',
        bg: '#ede9fe',
        labelColor: '#4c1d95',
        lines: [
          '<span class="drug-name">Vancomicina</span> 30 mg/Kg carga a pasar en 1 a 3 h y luego 15 mg/Kg cada 12 h en 1 a 2 h (monitorizar valle y pico) o <span class="drug-name">trimetoprim-sulfametoxazol</span> 10 mg/kg IV de trimetoprim dividido en 3 o 4 dosis/día.',
        ],
      },
    ],
    notes: [
      { text: 'Reevaluación a las 48 / 72 horas', tableIndex: 3, tableLabel: 'Tabla 4' },
      'Si evolución desfavorable reconsiderar tratamiento y/o complicaciones.',
    ],
  },
};

const NAV_TABLES = [
  {
    id: 'nav_cpis',
    label: 'T1 · CPIS',
    title: 'Tabla 1 · CPIS modificado',
    type: 'notes',
    sections: [
      {
        head: 'Diagnóstico probable si CPIS > 6',
        table: {
          heads: ['Signos', 'Valores', 'Puntos (0-10)'],
          rows: [
            ['Temperatura, ºC', '≥36,5 y ≤38,4 / ≥38,5 y ≤38,9 / ≥39,0 o ≤36,0', '0 / 1 / 2'],
            ['Leucocitos/mm3', '≥4.000 y ≤11.000 / <4.000 y >11.000 / <4.000 y >11.000 y formas inmaduras', '0 / 1 / 2'],
            ['Secreciones traqueales', 'Escasas / Abundantes / Purulentas', '0 / 1 / 2'],
            ['Oxigenación, PaO2/FiO2', '>240 o SDRA / ≤240 sin SDRA', '0 / 2'],
            ['Imagen de tórax', 'Sin infiltrados / Infiltrado difuso o desigual / Infiltrado localizado', '0 / 1 / 2'],
          ],
        },
      },
    ],
  },
  {
    id: 'nav_etiology',
    label: 'T2 · Etiología',
    title: 'Tabla 2 · Etiología y consideraciones',
    type: 'nav_etiology',
    sections: [
      {
        head: 'NAV precoz',
        items: [
          'Precoz (< 5 días de ingreso).',
          'Patógenos de la comunidad como Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis, SAMS, anaerobios, Legionella sp.',
          'Considerar etiología viral (Influenza, Covid-19, otros virus respiratorios).',
          'Considerar FR para patógenos específicos (Pseudomonas aeruginosa, S.aureus).',
        ],
      },
    ],
  },
  {
    id: 'nav_risk',
    label: 'T3 · FR',
    title: 'Tabla 3 · Factores de riesgo',
    type: 'notes',
    sections: [
      {
        head: 'FR para microorganismos multirresistentes',
        items: [
          'Tratamiento antimicrobiano previo.',
          'Colonización o infección previa por microorganismos multirresistentes.',
          'Prevalencia local elevada de microorganismos multirresistentes luego de 5 días de internación (estadía hospitalaria prolongada).',
          'Situación de brote en la unidad se debe adaptar pauta.',
        ],
      },
      {
        head: 'FR para Enterobacterias productoras de Carbapenemasas (EPC) y Acinetobacter baumannii',
        items: [
          'Exposición a carbapenemes, ureidopenicilinas con inhibidores de betalactamasas en los 3 últimos meses.',
          'Internación en CTI previa en los últimos 6 meses.',
          'Colonización o infección previa conocida.',
          'Prevalencia en la unidad elevada > 10% en particular luego de 5 días de internación.',
        ],
      },
      {
        head: 'FR para Aspergillus spp',
        items: [
          'Si bien la tasa de NAV por este patógeno es baja, se sugiere su búsqueda si:',
          'Cursando infección pulmonar no hay mejoría.',
          'Estadía hospitalaria prolongada previa.',
          'Uso de corticoides a dosis elevadas.',
          'Cursar o haber cursado recientemente neumonitis viral.',
          'Patología pulmonar (EPOC, fibrosis quística, EPID).',
        ],
      },
      {
        head: 'Consideración',
        items: [
          'Candida spp y Staphylococcus coagulasa negativos no son considerados patógenos de NAV.',
        ],
        tone: 'alert',
      },
    ],
  },
  {
    id: 'nav_reeval',
    label: 'T4 · Reevaluación',
    title: 'Tabla 4 · Reevaluación a las 48 / 72 horas',
    type: 'notes',
    sections: [
      {
        head: 'Conducta',
        table: {
          heads: ['Situación', 'Conducta'],
          rows: [
            ['Identificación de microorganismo', 'Adecuar tratamiento a hallazgo microbiológico.'],
            ['Sin microorganismo identificado y persiste CPIS > 3', 'Se sugiere continuar tratamiento antimicrobiano. Considerar otros focos.'],
            ['No microorganismo identificado y CPIS ≤ 3', 'Evaluar otro diagnóstico. Suspender antibióticos.'],
          ],
          note: 'Si evolución desfavorable reconsiderar tratamiento y/o complicaciones.',
        },
      },
    ],
  },
];
