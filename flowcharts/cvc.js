/* Infección Asociada a Catéteres Centrales (48 horas o más de colocados) (G-12) */
const NODES_CVC = {
  cvc_start: {
    step: 1,
    type: 'cvc_start',
    title: 'Infección Asociada a Catéteres Centrales',
    subtitle: '48 horas o más de colocados. Seleccione la situación clínica de entrada',
    noteHtml: 'Considere siempre retiro precoz del catéter frente a sospecha de infección, excepto en catéteres utilizados para hemodiálisis.',
    actionButtons: [
      { label: 'Tabla 1 · Estudios / definiciones', tableIndex: 0 },
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
    options: [
      {
        title: 'Sin elementos sistémicos',
        desc: 'No fiebre, no chucho, estabilidad hemodinámica',
        color: '#0d9488',
        next: 'cvc_local_route',
      },
      {
        title: 'Con elementos sistémicos',
        desc: 'Fiebre y/o chucho y/o inestabilidad hemodinámica',
        color: '#f59e0b',
        next: 'cvc_systemic_route',
      },
    ],
  },

  cvc_local_route: {
    step: 2,
    type: 'cvc_question',
    title: 'Sin elementos sistémicos',
    subtitle: 'Defina la extensión de la infección local',
    actionButtons: [
      { label: 'Tabla 1 · Estudios / definiciones', tableIndex: 0 },
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
    ],
    options: [
      {
        title: 'Elementos fluxivos ≤ 2 cm de diámetro desde el orificio de salida y sin compromiso del túnel',
        desc: '',
        color: '#65a30d',
        next: 'cvc_exit_site',
      },
      {
        title: 'Elementos fluxivos > 2 cm peri orificio de salida, y/o a lo largo del trayecto del catéter y/o salida de material purulento',
        desc: '',
        color: '#f59e0b',
        next: 'cvc_tunnel_route',
        belowFlow: {
          text: 'Catéter no es necesario y/o es un catéter tipo Port-a-cath retírelo y envíe punta con HC periféricos a estudio microbiológico',
        },
      },
    ],
  },

  cvc_exit_site: {
    step: 3,
    type: 'cvc_treatment',
    headerColor: '#15803d',
    title: 'Infección del orificio de salida',
    flowStack: [
      {
        bg: 'green',
        text: 'Considere el retiro del catéter si el mismo no sigue siendo necesario',
      },
      {
        bg: 'white',
        text: 'Estudio microbiológico de exudado local.<br>HC periféricos y cultivo de punta de catéter si inmunosupresión severa y/o paciente crítico',
      },
      {
        bg: 'green',
        text: 'Infección del orificio de salida. Tratamiento local y control evolutivo',
      },
    ],
    actions: [
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
  },

  cvc_tunnel_route: {
    step: 3,
    type: 'cvc_treatment',
    headerColor: '#ca8a04',
    title: 'Tunelitis o infección local extensa',
    subtitle: 'Muestras, retiro o preservación del catéter y tratamiento empírico',
    tunnelFlow: {
      request: 'Estudio microbiológico de exudado local, realice retro-cultivos y hemocultivos periféricos',
      decisions: [
        'Catéter de corta duración y es posible colocar otro catéter: retire catéter y envíe punta a cultivo',
        'Catéter tunelizado y/o valioso o no tiene posibilidad de colocar otro: mantenga catéter e inicie tratamiento antibiótico',
      ],
      treatments: [
        'Medidas locales, considere inicio de <span class="drug-name">trimetoprim sulfametoxazol</span> 10 mg/kg iv base trimetoprim por 5-7 días<br><br>Si inmunosupresión severa: <span class="drug-name">vancomicina</span> dosis carga de 25 mg/kg iv, luego 15 mg/kg cada 12 hs iv',
        '<span class="drug-name">Vancomicina</span> dosis carga de 25 mg/kg iv, luego 15 mg/kg cada 12 hs iv<br><br>Inmunosupresión severa: agregue <span class="drug-name">meropenem</span> 1 g cada 8 hs i.v.<br><br>Con FR - MO MDR y pacientes en hemodiálisis: agregue <span class="drug-name">amikacina</span> 20 mg/kg/día iv',
      ],
    },
    actions: [
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
    options: [
      {
        title: 'HC periféricos y retrocultivos negativos',
        desc: 'Mantener catéter y tratamiento antibiótico durante 10-14 días',
        color: '#65a30d',
        next: 'cvc_tunnel_negative',
      },
      {
        title: 'HC periféricos y/o retrocultivo positivos',
        desc: '',
        color: '#eab308',
        next: 'cvc_tunnel_positive_simple',
      },
    ],
  },

  cvc_tunnel_negative: {
    step: 4,
    type: 'cvc_treatment',
    headerColor: '#65a30d',
    title: 'HC periféricos y retrocultivos negativos',
    subtitle: 'Mantener catéter y tratamiento antibiótico',
    regimens: [
      {
        label: 'Conducta',
        bg: '#f7fee7',
        labelColor: '#3f6212',
        lines: [
          '• Mantener catéter y tratamiento antibiótico durante 10-14 días.',
          '• Si tunelitis no mejora con antibióticos: considere nuevo túnel subcutáneo y preservar sitio de acceso venoso.',
          '• Ajuste plan antibiótico con resultado microbiológico.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
  },

  cvc_tunnel_positive_simple: {
    step: 4,
    type: 'cvc_info',
    headerColor: '#eab308',
    title: 'HC periféricos y/o retrocultivo positivos',
    subtitle: 'Conducta posterior y ajuste antibiótico',
    followUpDiagram: {
      topLeft: 'HC periféricos y retrocultivos negativos, mantener catéter y tratamiento antibiótico durante 10-14 días',
      topRight: 'HC periféricos y/o retro-cultivo positivos',
      bottomLeft: 'Si tunelitis no mejora con antibióticos considere nuevo túnel subcutáneo y preservar sitio de acceso venoso',
      bottomRight: 'Re-evalúe retiro de acuerdo a situación clínica, microorganismo aislado, necesidad y posibilidades de nuevo acceso vascular',
      bottomRightNext: 'cvc_bac_compare',
      finalBottom: 'Ajuste plan antibiótico con resultado microbiológico',
    },
  },

  cvc_systemic_route: {
    step: 2,
    type: 'cvc_question',
    title: 'Con elementos sistémicos',
    subtitle: 'Clasifique según presencia de elementos fluxivos',
    actionButtons: [
      { label: 'Tabla 1 · Estudios / definiciones', tableIndex: 0 },
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
    options: [
      {
        title: 'Catéter sin elementos fluxivos',
        desc: '',
        color: '#f59e0b',
        next: 'cvc_systemic_noflux',
      },
      {
        title: 'Catéter con elementos fluxivos',
        desc: 'Alta sospecha',
        color: '#ea580c',
        next: 'cvc_systemic_flux',
      },
    ],
  },

  cvc_systemic_noflux: {
    step: 3,
    type: 'cvc_treatment',
    headerColor: '#d97706',
    title: 'Catéter sin elementos fluxivos',
    subtitle: 'Retiro, muestreo y tratamiento empírico',
    regimens: [
      {
        label: 'Conducta con el catéter',
        bg: '#fff7ed',
        labelColor: '#b45309',
        lines: [
          '• En paciente grave o crítico y si el catéter no es de hemodiálisis: retírelo, envíe hemocultivos y punta de catéter.',
          '• En paciente estable y si el catéter no es de hemodiálisis (y es posible colocar otro): retírelo, envíe hemocultivos y punta de catéter.',
          '• En los casos en los que no se retiró el catéter: envíe hemocultivos y retrocultivo.',
        ],
      },
      {
        label: 'Conducta',
        bg: '#fffbeb',
        labelColor: '#b45309',
        lines: [
          'Valore otros posibles diagnósticos e inicie tratamiento antibiótico según situación clínica y planteos más probables. Revalore con resultados.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
    options: [
      {
        title: 'Con resultados de HC periféricos y retrocultivo (y/o punta de catéter)',
        desc: '',
        color: '#f59e0b',
        next: 'cvc_results',
      },
    ],
  },

  cvc_systemic_flux: {
    step: 3,
    type: 'cvc_treatment',
    headerColor: '#ea580c',
    title: 'Catéter con elementos fluxivos',
    subtitle: 'Alta sospecha de infección asociada a catéter',
    regimens: [
      {
        label: 'Conducta con el catéter',
        bg: '#ffedd5',
        labelColor: '#c2410c',
        lines: [
          '• Retire el catéter si es posible emplazar otro (independientemente del tipo de catéter siempre que no se utilice para hemodiálisis), envíe hemocultivos y punta de catéter a estudio microbiológico.',
          '• En los casos en los que no se retiró el catéter: envíe hemocultivos y retrocultivo.',
        ],
      },
      {
        label: 'Tratamiento empírico',
        bg: '#fed7aa',
        labelColor: '#c2410c',
        lines: [
          '• Post extracción de muestras inicie <span class="drug-name">vancomicina</span> 25 mg/kg, luego 15 mg/kg cada 12 hs iv.',
          '• En paciente grave: agregue <span class="drug-name">meropenem</span> 1 g cada 8 hs iv.',
          '• En pacientes en hemodiálisis y/o con factores de riesgo de microorganismos multirresistentes: valore agregar <span class="drug-name">amikacina</span> 20 mg/kg/día iv.',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
    options: [
      {
        title: 'Con resultados de HC periféricos y retrocultivo (y/o punta de catéter)',
        desc: '',
        color: '#f59e0b',
        next: 'cvc_results',
      },
    ],
  },

  cvc_results: {
    step: 4,
    type: 'cvc_question',
    title: 'Con resultados de HC periféricos y retrocultivo',
    subtitle: 'Clasifique el escenario microbiológico',
    actionButtons: [
      { label: 'Tabla 1 · Estudios / definiciones', tableIndex: 0 },
      { label: 'Tabla 3 · Duración BAC', tableIndex: 2 },
      { label: 'Tabla 4 · Terapia de sellado', tableIndex: 3 },
    ],
    options: [
      {
        title: 'Resultados microbiológicos negativos',
        desc: 'Re-evalúe otros posibles diagnósticos',
        color: '#65a30d',
        static: true,
      },
      {
        title: 'Colonización del catéter',
        desc: '',
        color: '#0d9488',
        next: 'cvc_colonization',
      },
    ],
    dualFlow: {
      leftTitle: 'Bacteriemia con colonización secundaria de catéter',
      leftColor: '#f59e0b',
      rightTitle: 'Bacteriemia asociada a catéter (BAC)',
      rightColor: '#dc2626',
      buttonLabel: 'Ajuste antibioticoterapia con resultado microbiológico',
      buttonNext: 'cvc_bac_compare',
    },
  },

  cvc_results_negative: {
    step: 5,
    type: 'cvc_info',
    headerColor: '#65a30d',
    title: 'Resultados microbiológicos negativos',
    subtitle: 'Re-evalúe otros posibles diagnósticos',
    blocks: [
      {
        title: 'Conducta',
        tone: 'green',
        lines: [
          'Valore otros posibles diagnósticos e inicie tratamiento antibiótico según situación clínica y planteos más probables. Revalore con resultados.',
        ],
      },
    ],
  },

  cvc_colonization: {
    step: 5,
    type: 'cvc_info',
    headerColor: '#0d9488',
    title: 'Colonización del catéter',
    blocks: [
      {
        title: 'Conducta',
        tone: 'teal',
        lines: [
          'Rápida respuesta a la antibioticoterapia empírica.',
          'Retire el catéter salvo paciente en hemodiálisis sin posibilidad de nuevo acceso vascular',
        ],
      },
    ],
    actions: [
      { label: 'Tabla 1 · Estudios / definiciones', tableIndex: 0 },
    ],
  },

  cvc_bac_compare: {
    step: 5,
    type: 'cvc_info',
    headerColor: '#0d3a52',
    title: 'Ajuste antibioticoterapia con resultado microbiológico',
    bacCompare: {
      topBox: 'Re-evalúe retiro de acuerdo a situación clínica, microorganismo aislado, necesidad y posibilidades de nuevo acceso vascular',
      leftItems: [
        'Rápida respuesta al antibiótico empírico',
        'Estabilidad hemodinámica',
        'Sin evidencia de foco metastásico',
        'No microorganismo agresivo/resistente',
      ],
      rightItems: [
        'Persistencia de fiebre o bacteriemia bajo antibiótico apropiado a las 48-72 hs',
        'Infección de túnel y/u orificio de salida',
        'Evidencia de foco metastásico',
        'Sepsis, inestabilidad hemodinámica',
        'Microorganismo agresivo/resistente',
      ],
      leftBottom: 'Tratamiento sistémico y considere recambio o terapia de sellado',
      rightBottom: 'Retire el catéter y realice tratamiento sistémico',
      finalButtonLabel: 'Ver duración de tratamiento antibiótico de BAC',
      finalButtonTableIndex: 2,
    },
    actions: [
      { label: 'Tabla 2 · MO agresivos', tableIndex: 1 },
      { label: 'Tabla 3 · Duración BAC', tableIndex: 2 },
      { label: 'Tabla 4 · Terapia de sellado', tableIndex: 3 },
      { label: 'Tabla 5 · Monitorización', tableIndex: 4 },
    ],
  },
};

const CVC_TABLES = [
  {
    id: 'cvc_studies',
    label: 'T1 · Estudios / definiciones',
    title: 'Tabla 1 · Estudios complementarios y definiciones',
    sections: [
      {
        head: 'Estudios complementarios según situación clínica y evolución',
        items: [
          '<strong>Ecocardiograma</strong>',
          'Válvulas protésicas.',
          'Dispositivos endovasculares protésicos.',
          'Fenómenos embólicos.',
          'Persistencia de fiebre o bacteriemia tras 72 hs de antibioticoterapia apropiada.',
          'Bacteriemia a <em>S. aureus</em>.',
          '<strong>TC de tórax, abdomen y pelvis</strong>',
          'Endocarditis infecciosa.',
          'Embolias clínicamente evidentes.',
          'Persistencia de fiebre o bacteriemia tras 72 hs de antibioticoterapia apropiada.',
          '<strong>Eco-doppler venoso del nivel de emplazamiento del catéter si:</strong>',
          '<span style="color:#1d4ed8;font-weight:700">• Sospecha de tromboflebitis supurada en emplazamiento del catéter.</span>',
          'Bacteriemia persistente tras 72 hs de antibioticoterapia apropiada.',
          'Presentación con fenómenos embólicos y/o endocarditis infecciosa.',
          '<span style="color:#1d4ed8;font-weight:700">Sospecha de tromboflebitis supurada: bacteriemia persistente luego de 72 hs de antibioticoterapia adecuada en BAC sin otra causa aparente, fiebre persistente y/o signos fluxivos locales importantes, trayecto indurado palpable, secreción purulenta en el sitio de inserción.</span>',
        ],
      },
      {
        head: 'Definiciones',
        items: [
          '<strong>Bacteriemia asociada a catéter (BAC)</strong>: punta de catéter o retro-cultivo con desarrollo bacteriano con un tiempo ≤ 2 horas al tiempo de positividad de hemocultivos periféricos, al mismo microorganismo y con el mismo perfil de susceptibilidad antibiótico.',
          '<strong>Bacteriemia con colonización secundaria de catéter</strong>: bacteriemia que no cumple criterio temporal de BAC con el mismo microorganismo en retrocultivo o punta de catéter.',
          '<strong>Colonización del catéter</strong>: desarrollo bacteriano en punta de catéter con hemocultivos negativos o desarrollo bacteriano en retrocultivo con hemocultivos de periferia negativos.',
        ],
      },
    ],
  },
  {
    id: 'cvc_aggressive',
    label: 'T2 · MO agresivos',
    title: 'Tabla 2 · Microorganismos agresivos / resistentes y recambio',
    sections: [
      {
        head: 'Microorganismos agresivos / resistentes',
        items: [
          '<span>&bull; <em>S. aureus</em>.</span>',
          '<span>&bull; <em>Pseudomonas aeruginosa</em>.</span>',
          '<span>&bull; Microorganismos multirresistentes como <em>Acinetobacter baumannii</em> multirresistente o extremadamente resistente, o bacilos Gram negativos productores de carbapenemasas.</span>',
          '<span>&bull; <em>Candida</em> spp.</span>',
        ],
      },
      {
        head: 'Considerar recambio de catéter solo si catéter valioso y',
        items: [
          'Sin fiebre a 48-72 hs de inicio antibiótico.',
          'Hemodinamia estable y estabilidad clínica.',
          'Sin infección del túnel u orificio de salida.',
          '<strong>Catéter valioso</strong>: único territorio vascular disponible para hemodiálisis, dificultades clínicas o anatómicas para emplazar catéteres en otros territorios.',
        ],
      },
    ],
  },
  {
    id: 'cvc_duration',
    label: 'T3 · Duración BAC',
    title: 'Tabla 3 · Duración del tratamiento en BAC',
    sections: [
      {
        head: 'Duración',
        items: [
          '<strong>Staphylococcus coagulasa negativos (SCN)</strong>: con retiro del catéter 5 a 7 días, sin retiro del catéter 10 a 14 días.',
          '<strong><em>S. aureus</em></strong>: siempre retiro del catéter, 14 días de tratamiento luego del primer hemocultivo negativo bajo tratamiento eficaz. Si bacteriemia persiste 72 hs luego de retirado el catéter e iniciada la terapia eficaz, evaluar causas de bacteriemia complicada.',
          '<strong>Enterococcus</strong> spp: con retiro del catéter 7 días, sin retiro del catéter 10 a 14 días.',
          '<strong>Bacilos Gram negativos</strong>: retiro de catéter, 7 a 10 días de antimicrobiano sistémico.',
          '<strong><em>Candida</em></strong> spp: siempre retiro del catéter, 14 días de antifúngico sistémico luego del primer hemocultivo negativo bajo tratamiento.',
        ],
      },
    ],
  },
  {
    id: 'cvc_lock',
    label: 'T4 · Terapia de sellado',
    title: 'Tabla 4 · Terapia de sellado',
    sections: [
      {
        head: 'Terapia de sellado',
        items: [
          'Aspirar 4 mL de contenido y desechar.',
          'Infundir la dilución.',
          'Cerrar el catéter y mantenerlo cerrado por 12 a 24 horas.',
          'Previo al uso del catéter aspirar 4 mL del contenido y desechar.',
        ],
      },
      {
        head: 'Esquemas',
        items: [
          '<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:10px 11px;margin-bottom:8px"><div style="font-size:11px;font-weight:900;color:#0c4a6e;text-transform:uppercase;letter-spacing:.35px;margin-bottom:6px">SCN</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Antibiótico:</strong> vancomicina</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Concentración:</strong> 10 mg/mL, volumen final 3 mL</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Reconstitución:</strong> 1 ampolla (500 mg) en 50 mL de SF</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Carga en catéter:</strong> 3 mL de dilución + 1000 UI de heparina sódica (1 mL)</div></div>',
          '<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:10px 11px;margin-bottom:8px"><div style="font-size:11px;font-weight:900;color:#0c4a6e;text-transform:uppercase;letter-spacing:.35px;margin-bottom:6px">Enterococcus spp</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Antibiótico:</strong> vancomicina + gentamicina</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Concentración:</strong> vancomicina 10 mg/mL + gentamicina 2-8 mg/mL, volumen final 4 mL</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Reconstitución:</strong> vancomicina: 1 ampolla (500 mg) en 50 mL de SF. Gentamicina: 1 ampolla (80 mg) en 10 mL de SF</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Carga en catéter:</strong> 2 mL de dilución de vancomicina + 1 mL de dilución de gentamicina + 1000 UI de heparina sódica (1 mL)</div></div>',
          '<div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:10px 11px"><div style="font-size:11px;font-weight:900;color:#0c4a6e;text-transform:uppercase;letter-spacing:.35px;margin-bottom:6px">Enterobacterias y <em>P. aeruginosa</em></div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Antibiótico:</strong> amikacina</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Concentración:</strong> 2-10 mg/mL, volumen final 4 mL</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Reconstitución:</strong> 1 ampolla (500 mg) en 100 mL de SF</div><div style="font-size:12px;line-height:1.45;color:#1e293b"><strong>Carga en catéter:</strong> 4 mL de dilución de amikacina + 1000 UI de heparina sódica (1 mL)</div></div>',
        ],
      },
      {
        head: 'Aclaraciones',
        items: [
          'Tiempo de sellado: mantener la dilución durante 12 a 24 hs en el catéter.',
          'Microorganismos extremodrogorresistentes y pandrogorresistentes: sellado con etanol 70% 3 mL + 1 mL de SF, volumen final de 4 mL.',
          'Valorar material del catéter.',
        ],
      },
    ],
  },
  {
    id: 'cvc_monitoring',
    label: 'T5 · Monitorización',
    title: 'Tabla 5 · Monitorización de antibióticos',
    sections: [
      {
        head: 'Monitorización',
        table: {
          heads: ['Antibiótico', 'Monitorización'],
          rows: [
            ['Amikacina', 'Dosificación plasmática tras 24 horas de inicio del tratamiento: valle (pre dosis) 1-2 mcg/mL. Las concentraciones en valle mayores a 10 mcg/mL pueden asociarse a toxicidad. Pico (a 30 minutos de finalizada la infusión): 45-60 mcg/mL.'],
            ['Vancomicina', 'Dosificación en valle (pre dosis), extraer previo a la cuarta dosis, niveles objetivos mínimos 15-20 mcg/mL pudiendo plantearse objetivos mayores según la CIM en Staphylococcus spp. Dosificación en pico: 30-40 mcg/mL. Al menos una o dos veces por semana y 48-72 horas luego del ajuste de dosis. Más frecuentemente si alteración de la función renal, sospecha de toxicidad o si no se logra dosificación objetivo.'],
          ],
        },
      },
    ],
  },
];
