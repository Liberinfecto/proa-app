/* Endocarditis Infecciosa (G-10) */
const NODES_ENDO = {
  endo_start: {
    step: 1,
    type: 'endo_start',
    next: 'endo_ett',
    title: 'Sospecha Clínica de Endocarditis Infecciosa (EI)',
    subtitle: '<div style="display:grid;gap:6px;margin-top:2px"><div style="display:flex;gap:7px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:999px;background:rgba(255,255,255,.18);font-size:11px;font-weight:800;flex:0 0 18px">•</span><span>Obtenga un mínimo de 2 sets de hemocultivos (HC)</span></div><div style="display:flex;gap:7px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:999px;background:rgba(255,255,255,.18);font-size:11px;font-weight:800;flex:0 0 18px">•</span><span>Ecocardiograma transtorácico (ETT)</span></div></div>',
    sections: [
      {
        h: 'Hemocultivos Previo a Antibióticos',
        items: [
          'Hemocultivos al menos dos sets, cada uno se inocula en dos frascos (si es posible 1 para anaerobios) con 10 mL en cada uno.',
          'De diferentes sitios de punción y si es posible separadas 20 a 60 minutos.',
          'Si ya se iniciaron antibióticos obtener muestras previo a la siguiente dosis.',
        ],
      },
    ],
    actionButtons: [
      { label: 'Tabla 1 · Duke 2023', tableIndex: 0 },
      { label: 'Tabla 2 · MO Típicos de EI', tableIndex: 1 },
    ],
  },

  endo_ett: {
    step: 2,
    type: 'endo_question',
    title: 'Resultado inicial del ETT',
    subtitle: 'Si hay válvula protésica, dispositivo intracardíaco o pobre calidad / mala ventana en ETT, avanzar a ETE',
    options: [
      {
        title: 'ETT negativo para EI',
        desc: 'Definir baja o alta sospecha clínica',
        color: '#eab308',
        next: 'endo_ett_negative',
      },
      {
        title: 'ETT positivo para EI',
        desc: 'Valorar complicaciones y necesidad de cirugía',
        color: '#dc2626',
        next: 'endo_confirmed',
      },
      {
        title: 'Válvula protésica, dispositivo intracardíaco o ETT no concluyente',
        desc: 'Solicitar Ecocardiograma transesofágico (ETE)',
        color: '#0d3a52',
        context: 'prosthetic_path',
        next: 'endo_ete',
      },
    ],
  },

  endo_ett_negative: {
    step: 3,
    type: 'endo_question',
    title: 'ETT negativo para EI',
    subtitle: 'Clasifique la sospecha clínica',
    options: [
      {
        title: 'Baja sospecha clínica',
        desc: 'Hemocultivos negativos o se confirma otro diagnóstico',
        color: '#65a30d',
        next: 'endo_unlikely',
      },
      {
        title: 'Alta sospecha clínica',
        desc: 'HC con microorganismo típico* y/o bacteriemia persistente y/o embolias sépticas',
        color: '#f59e0b',
        next: 'endo_ete',
      },
    ],
  },

  endo_ete: {
    step: 4,
    type: 'endo_question',
    title: 'Alta sospecha de EI con ETT Negativo: Realizar ETE',
    subtitle: 'Interpretar el resultado del ETE',
    options: [
      {
        title: 'ETE negativo para EI',
        desc: 'Valorar si la sospecha es baja o alta',
        color: '#eab308',
        next: 'endo_ete_negative',
      },
      {
        title: 'ETE positivo para EI',
        desc: 'Valorar complicaciones y necesidad de cirugía',
        color: '#dc2626',
        next: 'endo_confirmed',
      },
    ],
  },

  endo_ete_negative: {
    step: 5,
    type: 'endo_question',
    title: 'ETT negativo con ETE negativo: considerar resultado de HC',
    subtitle: 'Conducta según sospecha clínica y hemocultivos',
    options: [
      {
        title: 'Hemocultivos negativos: Baja sospecha clínica',
        desc: 'HC negativos',
        color: '#65a30d',
        next: 'endo_unlikely',
      },
      {
        title: 'Alta sospecha',
        desc: 'Repetir ETE a los 7-10 días y solicitar estudios complementarios',
        color: '#f59e0b',
        next: 'endo_repeat',
      },
    ],
  },

  endo_unlikely: {
    step: 6,
    type: 'endo_info',
    headerColor: '#84a83d',
    title: 'EI poco probable',
    subtitle: 'Revalorar según evolución clínica',
    summary: 'Baja sospecha clínica, hemocultivos negativos y ETT negativo para EI: EI poco probable.',
    blocks: [
      {
        title: 'Conducta',
        tone: 'green',
        lines: [
          'Revalorar en evolución necesidad de ETE.',
          'Revalorar según evolución clínica posterior.',
        ],
      },
    ],
  },

  endo_repeat: {
    step: 6,
    type: 'endo_info',
    headerColor: '#d97706',
    title: 'Alta sospecha con ETE negativo',
    subtitle: 'Completar reevaluación diagnóstica',
    summary: 'Alta sospecha clínica con ETT negativo y ETE negativo para EI: requiere reevaluación diagnóstica.',
    blocks: [
      {
        title: 'Solicitar',
        tone: 'amber',
        lines: [
          'Repetir ETE a los 7-10 días y tomografía para valorar embolias sépticas.',
          'Considere: PET/TC luego de 60 días de cirugía.',
          'Válvulas protésicas, dispositivos intracardíacos.',
          'TC coronaria de estar disponible.',
        ],
      },
    ],
    actionButtons: [
      { label: 'Tabla 1 · Duke 2023', tableIndex: 0 },
    ],
  },

  endo_confirmed: {
    step: 6,
    type: 'endo_route',
    title: 'Endocarditis infecciosa',
    subtitle: 'Diagnóstico según criterios de Duke 2023 (tabla 1)',
    summary: 'ETT o ETE positivo para EI: diagnóstico según criterios de Duke 2023.',
    intro: [
      'Inicio de antibioticoterapia empírica luego de extracción de HC.',
      'Considere inicio de tratamiento antibiótico previo a la confirmación diagnóstica en pacientes graves y/o inestables.',
    ],
    careNote: 'Tratamiento médico y eventualmente quirúrgico. Valorar con equipo multidisciplinario de EI.',
    actions: [
      { label: 'Tabla 1 · Duke 2023', tableIndex: 0 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
    options: [
      {
        title: 'EI sobre válvula nativa izquierda o derecha',
        tag: 'Elegir según factores de riesgo para SAMR',
        color: '#ef4444',
        next: 'endo_native_route',
      },
      {
        title: 'EI sobre válvula protésica',
        tag: 'Elegir según tiempo desde la cirugía y factores de riesgo para SAMR',
        color: '#f59e0b',
        next: 'endo_prosthetic_route',
      },
    ],
  },

  endo_native_route: {
    step: 7,
    type: 'endo_question',
    title: 'EI sobre válvula nativa izquierda o derecha',
    subtitle: 'Valore factores de riesgo para SAMR (tabla 3)',
    options: [
      {
        title: 'Sin factores de riesgo para SAMR',
        desc: 'Tabla 3',
        color: '#65a30d',
        next: 'endo_native_low',
      },
      {
        title: 'Con factores de riesgo para SAMR',
        desc: 'Tabla 3',
        color: '#dc2626',
        next: 'endo_native_mrsa',
      },
    ],
    actionButtons: [
      { label: 'Tabla 3 · FR para SAMR', tableIndex: 2 },
    ],
  },

  endo_native_low: {
    step: 8,
    type: 'endo_treatment',
    headerColor: '#65a30d',
    title: 'EI sobre válvula nativa izquierda o derecha',
    subtitle: 'Sin factores de riesgo para SAMR',
    summary: 'EI sobre válvula nativa izquierda o derecha, sin factores de riesgo para SAMR.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">Ampicilina</span>: 3 g cada 6 hs iv o 2 g cada 4 hs iv',
          '+',
          '<span class="drug-name">cefazolina</span>: 2 - 3 g cada 8 hs iv',
          '+',
          '<span class="drug-name">gentamicina</span> 3-5 mg/kg/día en dosis única.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },

  endo_native_mrsa: {
    step: 8,
    type: 'endo_treatment',
    headerColor: '#dc2626',
    title: 'EI sobre válvula nativa izquierda o derecha',
    subtitle: 'Con factores de riesgo para SAMR',
    summary: 'EI sobre válvula nativa izquierda o derecha, con factores de riesgo para SAMR.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Cefazolina</span>: 2- 3 g cada 8 hs iv',
          '+',
          '<span class="drug-name">vancomicina</span>: Dosis carga 25 mg/kg, dosis mantenimiento 15 mg/kg/12 horas iv',
          '+',
          '<span class="drug-name">gentamicina</span>: 3-5 mg/kg/día en dosis única iv',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 3 · FR para SAMR', tableIndex: 2 },
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },

  endo_prosthetic_route: {
    step: 7,
    type: 'endo_question',
    title: 'EI sobre válvula protésica',
    subtitle: 'Definir tiempo desde la cirugía',
    options: [
      {
        title: 'Temprana',
        desc: 'Primeros 12 meses post cirugía',
        color: '#f59e0b',
        next: 'endo_prosthetic_early',
      },
      {
        title: 'Tardía',
        desc: '≥ 12 meses post cirugía',
        color: '#0d9488',
        next: 'endo_prosthetic_late',
      },
    ],
  },

  endo_prosthetic_early: {
    step: 8,
    type: 'endo_question',
    title: 'EI sobre válvula protésica temprana',
    subtitle: 'Clasifique el momento clínico',
    options: [
      {
        title: 'Primer mes o permanece internado',
        desc: '',
        color: '#dc2626',
        next: 'endo_prosthetic_firstmonth',
      },
      {
        title: '2 a 12 meses post cirugía',
        desc: '',
        color: '#f59e0b',
        next: 'endo_prosthetic_2to12',
      },
    ],
  },

  endo_prosthetic_late: {
    step: 8,
    type: 'endo_question',
    title: 'EI sobre válvula protésica tardía (≥ 12 meses post cirugía)',
    subtitle: 'Valore factores de riesgo para SAMR',
    options: [
      {
        title: 'Con factores de riesgo para SAMR',
        desc: 'Tabla 3',
        color: '#dc2626',
        next: 'endo_prosthetic_late_mrsa',
      },
      {
        title: 'Sin factores de riesgo para SAMR',
        desc: 'Tabla 3',
        color: '#65a30d',
        next: 'endo_prosthetic_late_low',
      },
    ],
    actionButtons: [
      { label: 'Tabla 3 · FR para SAMR', tableIndex: 2 },
    ],
  },

  endo_prosthetic_firstmonth: {
    step: 9,
    type: 'endo_treatment',
    headerColor: '#dc2626',
    title: 'EI sobre válvula protésica temprana',
    subtitle: 'Primer mes o permanece internado',
    summary: 'EI sobre válvula protésica temprana, en el primer mes o si permanece internado.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Vancomicina</span>: dosis carga 25 mg/kg, dosis mantenimiento 15 mg/kg/12 horas iv',
          '+',
          '<span class="drug-name">meropenem</span> 2 g iv cada 8 hs',
          '+/- <span class="drug-name">amikacina</span> 20 mg/kg/día',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },

  endo_prosthetic_2to12: {
    step: 9,
    type: 'endo_treatment',
    headerColor: '#f59e0b',
    title: 'EI sobre válvula protésica temprana',
    subtitle: '2 a 12 meses post cirugía',
    summary: 'EI sobre válvula protésica temprana, entre 2 y 12 meses post cirugía.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#ffedd5',
        labelColor: '#9a3412',
        lines: [
          '<span class="drug-name">Vancomicina</span>: dosis carga 25 mg/kg, dosis mantenimiento 15 mg/kg/12 horas iv',
          '+',
          '<span class="drug-name">gentamicina</span>: 3 – 5 mg/kg/día en dosis única iv',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },

  endo_prosthetic_late_mrsa: {
    step: 9,
    type: 'endo_treatment',
    headerColor: '#dc2626',
    title: 'EI sobre válvula protésica tardía',
    subtitle: 'Con factores de riesgo para SAMR',
    summary: 'EI sobre válvula protésica tardía, con factores de riesgo para SAMR.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Vancomicina</span>: dosis carga 25 mg/kg, dosis mantenimiento 15 mg/kg/12 horas iv',
          '+',
          '<span class="drug-name">gentamicina</span>: 3 – 5 mg/kg/día en dosis única iv',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 3 · FR para SAMR', tableIndex: 2 },
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },

  endo_prosthetic_late_low: {
    step: 9,
    type: 'endo_treatment',
    headerColor: '#65a30d',
    title: 'EI sobre válvula protésica tardía',
    subtitle: 'Sin factores de riesgo para SAMR',
    summary: 'EI sobre válvula protésica tardía, sin factores de riesgo para SAMR.',
    regimens: [
      {
        label: 'Tratamiento empírico',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">Ampicilina</span>: 3g cada 6 hs iv o 2 g cada 4 hs iv.',
          '+',
          '<span class="drug-name">cefazolina</span>: 2 -3 g cada 8 hs iv',
          '+',
          '<span class="drug-name">gentamicina</span> 3 -5 mg/kg/día en dosis única',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 3 · FR para SAMR', tableIndex: 2 },
      { label: 'Tabla 4 · Tratamiento dirigido', tableIndex: 3 },
      { label: 'Tabla 5 · Cirugía', tableIndex: 4 },
    ],
  },
};

const ENDO_TABLES = [
  {
    id: 'endo_duke',
    label: 'T1 · Duke',
    title: 'Tabla 1 · Criterios de Duke 2023',
    type: 'notes',
    sections: [
      {
        head: 'Endocarditis definitiva',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Criterios patológicos</div>',
          'Microorganismo identificado en el contexto de signos clínicos de EI, en una vegetación, tejido cardíaco, válvula protésica explantada, dispositivo de la aorta implantable, DCEI o émbolo arterial.',
          '<div style="text-align:center;font-weight:800;color:#64748b;margin:6px 0">O</div>',
          'Anatomía patológica con endocarditis activa identificada en una vegetación, tejido cardíaco, válvula protésica explantada, dispositivo de la aorta implantable, DCEI o émbolo arterial.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Criterios clínicos</div>',
          '2 criterios mayores.',
          '1 criterio mayor y 3 menores.',
          '5 criterios menores.',
        ],
      },
      {
        head: 'Endocarditis posible / rechazada',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Endocarditis posible</div>',
          '1 criterio mayor y 1 criterio menor.',
          '3 criterios menores.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Endocarditis rechazada</div>',
          'Claro diagnóstico alternativo que explique la sintomatología.',
          'Falta de recurrencia luego de suspendida la antibioticoterapia de menos de 4 días.',
          'Sin evidencia patológica o macroscópica de EI en la cirugía o autopsia, bajo menos de 4 días de antibioticoterapia.',
          'No cumple los criterios de EI posible.',
        ],
      },
      {
        head: 'Criterios mayores',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Criterios microbiológicos (uno o más de los siguientes)</div>',
          '<div style="font-weight:700;color:#334155">1. Hemocultivos positivos</div>',
          'Microorganismos típicos de EI* en 2 o más sets de HC.',
          'Microorganismos que ocasional o raramente producen EI en 3 o más sets de HC.',
          '<div style="font-weight:700;color:#334155;margin-top:6px">2. Tests de laboratorio positivos</div>',
          'PCR u otras técnicas de búsqueda de ácidos nucleicos positiva para Coxiella burnetti, Bartonella spp o Tropheryma whipplei de HC.',
          'Anticuerpos IgG de fase I para Coxiella burnetti títulos >1/1800 o aislada de un solo HC.',
          'Inmunofluorescencia indirecta (IFI) positiva para IgG e IgM para Bartonella spp con IgG ≥1/1800.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Criterios imagenológicos (uno o más de los siguientes)</div>',
          '<div style="font-weight:700;color:#334155">1. Ecocardiografía y tomografía cardíaca computada (CardioTC)</div>',
          'Ecocardiografía o CardioTC con vegetaciones, perforación valvular o del velo, aneurisma valvular o del velo, absceso, pseudoaneurisma o fístula intracardíaca.',
          'Nueva insuficiencia significativa en ecocardiografía en comparación con estudios previos. No es suficiente la peoría o cambio de insuficiencia preexistente.',
          'Nueva dehiscencia parcial de válvula protésica en comparación con imagen previa.',
          '<div style="font-weight:700;color:#334155;margin-top:6px">2. (18F)FDG PET/TC</div>',
          'Actividad metabólica anormal en válvula nativa o protésica, injerto aórtico ascendente (con evidencia de compromiso valvular), cables intracardíacos de dispositivos u otro material protésico.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Criterios quirúrgicos</div>',
          'Evidencia de EI documentada por inspección directa durante una cirugía cardíaca, sin criterios imagenológicos mayores ni confirmación histológica o microbiológica posterior.',
        ],
      },
      {
        head: 'Criterios menores',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Predisposición</div>',
          'Historia previa de EI, válvula protésica, reparación valvular previa, defecto cardíaco congénito, insuficiencia mayor a leve o estenosis de cualquier etiología, DCEI endovascular, miocardiopatía hipertrófica obstructiva, uso de drogas intravenosas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Fiebre</div>',
          'Temperatura axilar mayor a 38°C.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Fenómenos vasculares</div>',
          'Evidencia clínica o radiológica de émbolos arteriales, infartos pulmonares sépticos, abscesos cerebrales o esplénicos, aneurisma micótico, hemorragia intracraneal, hemorragia conjuntival, manchas de Janeway, púrpura.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Fenómenos inmunológicos</div>',
          'Factor reumatoideo positivo, nódulos de Osler, manchas de Roth o glomerulonefritis mediada por inmunocomplejos.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Evidencia microbiológica</div>',
          'HC positivo con desarrollo de microorganismo consistente con EI pero que no cumple con criterio mayor.',
          'Cultivo positivo o PCR u otras técnicas de búsqueda de ácidos nucleicos positiva, para un microorganismo consistente con EI, proveniente de un sitio estéril sin ser tejido cardíaco, prótesis cardíaca o émbolo.',
          'Hallazgo único de bacteria de la piel por PCR en una válvula o cable sin otra clínica o evidencia microbiológica adicional.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Criterios imagenológicos</div>',
          'Actividad metabólica anormal en el (18F)FDG PET-TC dentro de los 3 meses posteriores a la implantación de una válvula protésica, injerto aórtico ascendente (con evidencia de compromiso valvular), cables intracardíacos de dispositivos u otro material protésico.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Examen físico</div>',
          'Nueva insuficiencia valvular identificada en la auscultación, de no haber ecocardiografía disponible. La peoría o cambio de soplo previamente conocido no es suficiente.',
        ],
      },
    ],
  },
  {
    id: 'endo_mo_typical',
    label: 'T2 · MO Típicos',
    title: 'Tabla 2 · MO Típicos de EI',
    type: 'notes',
    sections: [
      {
        head: 'Microorganismos típicos de EI*',
        items: [
          'Staphylococcus aureus, Staphylococcus lugdunensis, Enterococcus faecalis.',
          'Streptococcus grupo viridans y otros Streptococcus spp. (excepto S. pyogenes y S. pneumoniae).',
          'Granulicatella spp., Abiotrophia spp., Gemella spp.',
          'Grupo HACEK (Haemophilus spp., Aggregatibacter actinomycetemcomitans, Cardiobacterium hominis, Eikenella corrodens y Kingella kingae).',
          'Con material protésico: Staphylococcus coagulasa negativos, Corynebacterium striatum, Corynebacterium jeikeium, Serratia marcescens, Pseudomonas aeruginosa, Cutibacterium acnes, micobacterias no tuberculosas, especialmente Mycobacterium chimaerae y Candida spp.',
        ],
      },
    ],
  },
  {
    id: 'endo_samr',
    label: 'T3 · SAMR',
    title: 'Tabla 3 · Factores de riesgo para SAMR',
    type: 'notes',
    sections: [
      {
        head: 'Factores de riesgo',
        items: [
          'Antecedente de infección o colonización por SAMR.',
          'Cultivo con SAMR en otro sitio (orina, herida, catéter, hisopado nasal u otro sitio).',
        ],
      },
      {
        head: 'Monitorización de ATB',
        table: {
          heads: ['Antibiótico', 'Monitorización'],
          rows: [
            ['Amikacina', 'Dosificación plasmática tras 24 horas de inicio del tratamiento. Valle (pre dosis): 1-2 mcg/mL. Las concentraciones en valle mayores a 10 mcg/mL pueden asociarse a toxicidad. Pico (a 30 minutos de finalizada la infusión): 45-60 mcg/mL.'],
            ['Gentamicina', 'Dosificación plasmática tras primeras 24 horas de inicio del tratamiento. Valle (pre dosis): <1 mcg/ml. Las concentraciones en valle mayores a 2 mg/ml pueden asociarse a toxicidad. Pico (a los 30 minutos de finalizada la infusión): 15-25 mcg/ml.'],
            ['Vancomicina', 'Dosificación en valle (pre dosis), extraer previo a la cuarta dosis, niveles objetivos mínimos 15-20 mcg/mL pudiendo plantearse objetivos mayores según la CIM en Staphylococcus spp. Dosificación en pico: 30-40 mcg/mL. Al menos una o dos veces por semana y 48-72 horas luego del ajuste de dosis. Más frecuentemente si alteración de la función renal, sospecha de toxicidad o si no se logra dosificación objetivo.'],
          ],
        },
      },
    ],
  },
  {
    id: 'endo_directed',
    label: 'T4 · Tratamiento',
    title: 'Tabla 4 · Tratamientos en endocarditis dirigidos de acuerdo al microorganismo responsable',
    type: 'notes',
    sections: [
      {
        head: 'Staphylococcus aureus o SCN',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Meticilino sensible</div>',
          '<span class="drug-name">Cefazolina</span> 2-3 g cada 8 hs iv.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Meticilino resistente</div>',
          '<span class="drug-name">Vancomicina</span> 25 mg/kg iv dosis carga, luego continuar con dosis de mantenimiento 15 mg/kg cada 12 hs iv.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">En válvula protésica agregar</div>',
          '<span class="drug-name">Gentamicina</span> 3 mg/kg/día iv o im en 1 o 2 dosis durante las primeras 2 semanas.',
          'Al 5to día de biterapia y HC de control negativos agregar <span class="drug-name">rifampicina</span> 600 mg cada 12 hs iv o vo.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Duración</div>',
          '4 a 6 semanas en nativas y al menos 6 semanas en protésicas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Aclaraciones</div>',
          'Si resistencia a <span class="drug-name">gentamicina</span>, opción: <span class="drug-name">fluoroquinolonas</span>. Si resistencia a <span class="drug-name">fluoroquinolonas</span>: <span class="drug-name">linezolid</span> o <span class="drug-name">trimetoprim-sulfametoxazol</span>.',
          'Si no utiliza <span class="drug-name">gentamicina</span> ni <span class="drug-name">fluoroquinolona</span> realizar el tratamiento completo con 3 ATB.',
          'EI sobre cavidades derecha: en S. aureus meticilino sensible mantener <span class="drug-name">gentamicina</span> 1 semana. En S. aureus meticilino resistente mantener <span class="drug-name">gentamicina</span> las 2 semanas.',
          'Duración: 2 semanas.',
          'Si VIH +, complicaciones supuradas, vegetación > 20 mm o compromiso de cavidades izquierdas: 4-6 semanas.',
        ],
      },
      {
        head: 'Streptococcus spp.',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">S. viridans y S. bovis CIM a penicilina ≤ 0,125 μg/mL</div>',
          'Nativas: <span class="drug-name">ampicilina</span> 3 g cada 6 hs iv; o <span class="drug-name">ampicilina</span> 3 g iv cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 3 dosis; o <span class="drug-name">ceftriaxona</span> 2 g/día + <span class="drug-name">gentamicina</span> 3 mg/kg/día iv en 3 dosis.',
          'Duración: al menos 4 semanas y mantener <span class="drug-name">gentamicina</span> 2 semanas.',
          'Protésicas: <span class="drug-name">ampicilina</span> 4 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día iv en 3 dosis.',
          'Duración: al menos 6 semanas y mantener <span class="drug-name">gentamicina</span> 2 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">S. viridans y S. bovis CIM a penicilina 0,25 - 0,5 μg/mL</div>',
          'Nativas: <span class="drug-name">ampicilina</span> 3 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día iv en 1 dosis.',
          'Duración: al menos 6 semanas y mantener <span class="drug-name">gentamicina</span> 2 semanas.',
          'Protésicas: <span class="drug-name">ampicilina</span> 4 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día iv en 3 dosis.',
          'Duración: al menos 6 semanas y mantener <span class="drug-name">gentamicina</span> 2 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">S. viridans y S. bovis CIM a penicilina > 0,5 μg/mL</div>',
          'Nativas: <span class="drug-name">ampicilina</span> 3 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 3 dosis.',
          'Duración: mantener biterapia durante las 6 semanas.',
          'Protésicas: <span class="drug-name">ampicilina</span> 4 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 3 dosis.',
          'Mantener la biterapia 6 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Alergia a penicilina</div>',
          'Sin posibilidad de desensibilización, sustituir por <span class="drug-name">ceftriaxona</span>, <span class="drug-name">cefotaxime</span> o <span class="drug-name">vancomicina</span>.',
        ],
      },
      {
        head: 'Otras etiologías',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">E. faecalis (habitualmente sensible ampicilina)</div>',
          '<span class="drug-name">Ampicilina</span> 2 g cada 4 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 3 dosis.',
          'En caso de no poder utilizar <span class="drug-name">gentamicina</span> o resistencia: <span class="drug-name">ampicilina</span> 2 g cada 4 hs iv + <span class="drug-name">ceftriaxona</span> 2 g cada 12 hs iv.',
          'Duración: 6 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">E. faecium (habitualmente resistente a ampicilina)</div>',
          '<span class="drug-name">Vancomicina</span> 25 mg/kg iv dosis carga, luego continuar con dosis de mantenimiento 15 mg/kg cada 12 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 3 dosis iv.',
          'Duración: 6 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Streptococcus nutricionalmente variantes (SNV)</div>',
          'Abiotrophia defectiva y Granulicatella spp: <span class="drug-name">ampicilina</span> 3 g cada 6 hs iv + <span class="drug-name">gentamicina</span> 3 mg/kg/día en 1 dosis iv.',
          'Duración: al menos 6 semanas y mantener <span class="drug-name">gentamicina</span> 2 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Grupo HACEK</div>',
          '<span class="drug-name">Ceftriaxona</span> 2 g/día iv durante 4 semanas.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">HC negativos y riesgo y/o serología reactiva</div>',
          'Brucella spp, Coxiella brunettii, Bartonella spp, Trophermya whipplei: agregar <span class="drug-name">doxiciclina</span> 100 mg cada 12 hs v.o.',
          'Brucella spp: agregar <span class="drug-name">trimetoprim-sulfametoxazol</span> 160/800 mg cada 12 hs vo.',
          'Mycoplasma spp y Legionella spp: agregar <span class="drug-name">levofloxacina</span> 500 mg cada 12 hs iv o vo.',
        ],
      },
    ],
  },
  {
    id: 'endo_surgery',
    label: 'T5 · Cirugía',
    title: 'Tabla 5 · Indicaciones de tratamiento quirúrgico y oportunidad',
    type: 'notes',
    sections: [
      {
        head: 'Endocarditis izquierdas',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Insuficiencia cardíaca</div>',
          'Disfunción valvular con síntomas de insuficiencia cardíaca de cualquier grado.',
          'Oportunidad quirúrgica: dentro de las 24 a 48 horas posteriores al diagnóstico de insuficiencia valvular grave o una lesión destructiva/penetrante con inestabilidad hemodinámica o síntomas de clase III o IV de la NYHA.',
          'Dentro de 1 semana del diagnóstico de insuficiencia valvular severa o una lesión destructiva/penetrante sin inestabilidad hemodinámica o síntomas de clase III o IV de la NYHA.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Infección persistente o con complicaciones locales</div>',
          'Bacteriemia persistente o fiebre mayor a 5 días después de inicio de antibioticoterapia apropiada. Oportunidad: en la semana del diagnóstico.',
          'Bloqueo, absceso anular o aórtico o lesión penetrante destructiva (fístula). Oportunidad: en la primera semana del diagnóstico.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Microorganismos de riesgo</div>',
          'Microorganismo altamente resistente. Oportunidad: en la primera semana del diagnóstico.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Riesgo embólico</div>',
          'Embolias recurrentes con vegetación residual y/o vegetación de más de 10 mm. Oportunidad: en las 24-48 horas posteriores al diagnóstico.',
        ],
      },
      {
        head: 'Endocarditis sobre válvula protésica / posTAVI / derecha',
        items: [
          '<div style="font-weight:800;color:#0f172a;margin-bottom:4px">Endocarditis sobre válvula protésica</div>',
          'Complicada con falla cardíaca, disfunción grave de la prótesis o absceso con los mismos criterios respecto a la oportunidad.',
          'EI a Staphylococcus spp o bacterias Gram negativas no-HACEK. Oportunidad en la semana siguiente al diagnóstico.',
          'EI sobre válvula protésica con infección recurrente.',
          'La oportunidad quirúrgica no se difiere por stroke, a no ser que exista daño neurológico mayor o sea un stroke hemorrágico.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Endocarditis posTAVI</div>',
          'Las opciones terapéuticas quirúrgicas no han evidenciado mejorar el pronóstico y están indicadas en casos excepcionales.',
          '<div style="font-weight:800;color:#0f172a;margin:10px 0 4px">Endocarditis derecha</div>',
          'Bacteriemia a pesar de antibióticos apropiados.',
          'Vegetación tricuspídea grande persistente por encima de 20 mm y embolia pulmonar a pesar de antibioticoterapia adecuada.',
          'Insuficiencia cardíaca a pesar del tratamiento agresivo.',
        ],
      },
    ],
  },
];
