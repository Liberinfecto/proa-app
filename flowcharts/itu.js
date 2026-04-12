/* ITU · Infección del Tracto Urinario (G-8) */
const NODES_ITU = {
  itu_start: {
    step: 1,
    type: 'itu_start',
    next: 'itu_route',
    title: 'Infección del Tracto Urinario',
    subtitle: 'Sospecha clínica, estudios iniciales y criterios generales',
    sections: [
      {
        h: 'Sospecha clínica ITU',
        items: [
          'Disuria, polaquiuria, urgencia miccional, tenesmo vesical, dolor hipogástrico, dolor lumbar.',
          'Fiebre.',
          'Confusión.',
          'Sin evidencia de infección genital baja.',
          'Considerar paucisintomáticos a poblaciones especiales (inmunodeprimidos, ancianos, embarazadas, etc) u otro tipo de sintomatología inespecífica como alteraciones digestivas (náuseas, vómitos).',
        ],
      },
      {
        h: 'Tira reactiva / Ex de orina',
        items: [
          'Solicitar si duda diagnóstica o síntomas leves o inespecíficos.',
          'No solicitar en paciente cateterizado.',
        ],
      },
    ],
    alert: '1) Toma de Urocultivo (puede no realizarse en mujer joven primer episodio)<br>2) Clasificación complicada / no complicada <button class="btn-tables" onclick="event.stopPropagation();showTablesITU(0)" style="display:inline-flex;width:auto;min-width:auto;padding:4px 8px;font-size:10.5px;border-radius:9px;box-shadow:none;margin-left:4px;vertical-align:middle">TABLA 1</button>',
  },

  itu_route: {
    step: 2,
    type: 'itu_route',
    title: 'Gravedad, Criterios de Internación y Tratamiento',
    blocks: [
      {
        title: '1. No complicada / Complicada',
        expandTitle: 'FR (diabetes, embarazo, hombre o RENUC)',
        expandItems: [
          'Diabetes',
          'Embarazo',
          'Hombre',
          'RENUC',
        ],
        extraTableButton: true,
        extraTableLabel: 'Tabla 1',
        extraTableIndex: 0,
      },
      {
        title: 'Si complicada solicitar paraclínica',
        expandTitle: 'Paraclínica',
        expandItems: [
          'Hemocultivos',
          'Función renal',
          'Hemograma',
          'PCR',
          'Imagen: US / TC',
          'Otras según comorbilidades y gravedad',
        ],
      },
      {
        title: '2. Criterios de hospitalización',
        tableIndex: 1,
        tableLabel: 'Tabla 2',
        secondaryTitle: '3. Gravedad',
        secondaryTableIndex: 2,
        secondaryTableLabel: 'qSOFA',
      },
    ],
    options: [
      {
        title: 'Tratamiento ambulatorio',
        desc: 'ITU baja, prostatitis, pielonefritis no complicada, orquiepididimitis o sondado sin criterios de ingreso',
        color: '#16a34a',
        next: 'itu_amb',
      },
      {
        title: 'Tratamiento internado',
        desc: 'ITU complicada, pielonefritis embarazada, absceso, prostatitis complicada, sepsis o shock séptico',
        color: '#dc2626',
        next: 'itu_inp',
      },
    ],
  },

  itu_amb: {
    step: 3,
    type: 'itu_group',
    title: 'Tratamiento ambulatorio',
    subtitle: 'Elegir el escenario clínico',
    color: '#16a34a',
    options: [
      { title: 'ITU baja no complicada', tag: 'Mujer, sin FR de mal pronóstico', next: 'itu_low_simple' },
      { title: 'ITU baja en embarazada', tag: 'Urocultivo de control al finalizar tratamiento', next: 'itu_low_preg' },
      { title: 'ITU baja complicada', tag: 'Descartar ITU alta · En hombres considerar compromiso prostático', next: 'itu_low_comp' },
      { title: 'Prostatitis aguda', tag: 'Valorar FR para ITS y microorganismos multirresistentes', next: 'itu_prost_acute' },
      { title: 'Prostatitis crónica', tag: 'Episodios de ITU recurrentes', next: 'itu_prost_chronic' },
      { title: 'Pielonefritis no complicada', tag: 'Mujer no embarazada · no factores 0-RENUC', next: 'itu_pyelo_nc' },
      { title: 'Orquiepididimitis aguda', tag: 'Diferenciar FR para ITS', next: 'itu_orqui' },
      { title: 'ITU baja en sondado', tag: 'No tratar bacteriuria asintomática', next: 'itu_cat_low' },
    ],
  },

  itu_inp: {
    step: 3,
    type: 'itu_group',
    title: 'Tratamiento internado',
    subtitle: 'Elegir el escenario clínico',
    color: '#dc2626',
    options: [
      { title: 'Pielonefritis complicada', tag: 'Duración 10-14 días', next: 'itu_pyelo_comp' },
      { title: 'Pielonefritis en embarazada', tag: 'Urocultivo de control al finalizar tratamiento · 10-14 días', next: 'itu_pyelo_preg' },
      { title: 'Absceso renal o perinefrítico', tag: 'Médico/quirúrgico según gravedad, tamaño y accesibilidad · 14-28 días', next: 'itu_abscess' },
      { title: 'Prostatitis aguda complicada', tag: 'Duración 3 a 4 semanas', next: 'itu_prost_comp' },
      { title: 'ITU en sondado con fiebre o síntomas sistémicos', tag: 'Retiro o cambio de sonda vesical · 10-14 días', next: 'itu_cat_sys' },
      { title: 'Sepsis o shock séptico', tag: 'Escalar cobertura y valorar Candida / absceso', next: 'itu_sepsis' },
    ],
  },

  itu_low_simple: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#16a34a',
    title: 'ITU baja no complicada',
    subtitle: 'Tratamiento ambulatorio',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Opciones',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Nitrofurantoína macrocristales</span> 100 mg VO c/12h x 5 d.',
          '<span class="drug-name">Fosfomicina trometamol</span> 3 gr VO unidosis.',
          '<span class="drug-name">Nitrofurantoína</span> 100 mg VO c/6h (si no se dispone de macrocristales) x 5d.',
          'Primer episodio mujer jóven <span class="drug-name">TMP/SMX</span> 160/800 mg VO c/12h x 5 d.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Opciones',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          '<span class="drug-name">Nitrofurantoína macrocristales</span> 100 mg VO c/12h x 5d.',
          '<span class="drug-name">Amikacina</span> 15mg/kg/iv dosis única.',
          '<span class="drug-name">Gentamicina</span> 5mg/kg/dosis única.',
        ],
      },
    ],
  },

  itu_low_preg: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#16a34a',
    title: 'ITU baja en embarazada',
    subtitle: 'Urocultivo de control al finalizar tratamiento',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Opciones',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Nitrofurantoína macrocristales</span> 100 mg VO c/12h x 5d <span style="color:#dc2626;font-weight:800">(no administrar en el tercer trimestre)</span>.',
          '<span class="drug-name">Fosfomicina trometamol</span> 3 gr VO unidosis.',
          '<span class="drug-name">Nitrofurantoína</span> 100 mg VO c/6h x 5d (de no disponer de macrocristales) <span style="color:#dc2626;font-weight:800">(no administrar en el tercer trimestre)</span>.',
          '<span class="drug-name">Cefuroxime axetil</span> 500 mg VO c/12h x 7d.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Opciones',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          'Igual esquema que sin FR para microorganismos multirresistentes.',
          'No utilizar cefuroxime.',
        ],
      },
    ],
  },

  itu_low_comp: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#16a34a',
    title: 'ITU baja complicada',
    subtitle: 'Descartar ITU alta · En hombres en general cursa con compromiso prostático',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Opciones',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Cefuroxime axetil</span> 500 mg VO c/12h x 7d.',
          '<span class="drug-name">Fosfomicina trometamol</span> 3 gr VO c/48h x 3 dosis.',
          '<span class="drug-name">Ciprofloxacino</span> 500 mg VO c/12h x 7 d.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Opciones',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          'Igual esquema que sin FR para microorganismos multirresistentes.',
          'No utilizar cefuroxime.',
        ],
      },
    ],
  },

  itu_prost_acute: {
    step: 4,
    type: 'itu_treatment_stack',
    headerColor: '#16a34a',
    title: 'Prostatitis aguda',
    subtitle: 'Tratamiento ambulatorio',
    blocks: [
      {
        label: 'FR para ITS',
        bg: '#dbeafe',
        labelColor: '#1d4ed8',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 gr iv o im unidosis y luego <span class="drug-name">doxiciclina</span> 100 mg VO c/12h x 10d (evaluar otras ITS).',
        ],
      },
      {
        label: 'Sin FR para ITS',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Ciprofloxacina</span> 750 mg VO c/12h o 500 mg VO c/8h x 2 a 4 s.',
        ],
      },
      {
        label: 'Si FR para microorganismos multirresistentes',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          'Se considera como prostatitis aguda complicada.',
        ],
      },
    ],
  },

  itu_prost_chronic: {
    step: 4,
    type: 'itu_treatment_stack',
    headerColor: '#16a34a',
    title: 'Prostatitis crónica',
    subtitle: 'Episodios de ITU recurrentes',
    blocks: [
      {
        label: 'Tratamiento',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          'La elección del antibiótico se realiza de acuerdo con la sensibilidad del microorganismo aislado previamente (opciones VO TMP/SMX, fosfomicina trometamol, doxiciclina, ciprofloxacina) x 4-6 s.',
        ],
      },
      {
        label: 'Si presentación moderada a severa',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          'Si la presentación clínica inicial es moderada a severa trate como prostatitis aguda complicada con microorganismos multirresistentes.',
        ],
      },
    ],
  },

  itu_pyelo_nc: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#16a34a',
    title: 'Pielonefritis no complicada',
    subtitle: 'Mujer no embarazada no factores 0-RENUC',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Tratamiento',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          'Primera dosis <span class="drug-name">ceftriaxona</span> 1gr iv o im o <span class="drug-name">amikacina</span> 20mg/Kg iv luego:',
          '<span class="drug-name">cefuroxime axetil</span> 500 mg VO c/8 h x 7d.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacino</span> 750 mg VO c/12h o 500mg VO c/8h x 7d.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#ecfccb',
        labelColor: '#3f6212',
        lines: [
          'Primera dosis <span class="drug-name">ceftriaxona</span> 1gr iv + <span class="drug-name">amikacina</span> 20 mg/Kg iv luego:',
          '<span class="drug-name">ciprofloxacino</span> 750 mg VO c/12h o 500mg VO c/8h x 7d.',
        ],
      },
    ],
  },

  itu_orqui: {
    step: 4,
    type: 'itu_treatment_stack',
    headerColor: '#16a34a',
    title: 'Orquiepididimitis aguda',
    subtitle: 'Tratamiento ambulatorio',
    blocks: [
      {
        label: 'FR para ITS',
        bg: '#dbeafe',
        labelColor: '#1d4ed8',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1gr iv o im unidosis y luego <span class="drug-name">doxiciclina</span> 100 mg VO c/12h x 10 d (evaluar otras ITS).',
        ],
      },
      {
        label: 'Sin FR para ITS',
        bg: '#dcfce7',
        labelColor: '#166534',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1gr iv o im unidosis y luego <span class="drug-name">ciprofloxacino</span> 500 mg VO c/12h x 10 d.',
        ],
      },
    ],
  },

  itu_cat_low: {
    step: 4,
    type: 'itu_treatment_stack',
    headerColor: '#16a34a',
    title: 'ITU baja en sondado',
    subtitle: 'Tratamiento ambulatorio',
    blocks: [
      {
        label: 'Conducta',
        bg: '#f8fafc',
        labelColor: '#334155',
        lines: [
          'No trate bacteriuria asintomática.',
        ],
      },
    ],
  },

  itu_pyelo_comp: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#dc2626',
    title: 'Pielonefritis complicada',
    subtitle: 'Tratamiento internado · Duración 10-14 días',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 gr iv c/24h.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8h ± <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr iv c/6h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8h + <span class="drug-name">amikacina</span> 20 mg/Kg /24h iv.',
          'Pacientes con trasplante renal: <span class="drug-name">meropenem</span> 1-2 gr iv c/8h.',
        ],
      },
    ],
  },

  itu_pyelo_preg: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#dc2626',
    title: 'Pielonefritis en embarazada',
    subtitle: 'Urocultivo de control al finalizar tratamiento · Duración 10-14 días',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 gr iv c / 24h.',
          'Alergia a betalactámico: <span class="drug-name">fosfomicina disódica</span> 8 gr iv carga y luego 4 gr iv c/6h.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Meropenem</span> 1-2gr iv c/8h. Si FR para EPC considerar agregar <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico: <span class="drug-name">fosfomicina disódica</span> 8 gr iv carga y luego 4 gr iv c/6h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
        ],
      },
    ],
  },

  itu_abscess: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#dc2626',
    title: 'Absceso renal o perinefrítico',
    subtitle: 'Médico/quirúrgico según gravedad, tamaño de absceso y accesibilidad · Duración 14-28 días',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes',
    leftBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 2gr iv c/24h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr iv c/6h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8 h + <span class="drug-name">amikacina</span> 20mg/Kg/24h iv.',
          'Si FR para SAMR agregar <span class="drug-name">vancomicina</span> 25 mg/Kg iv carga y luego 15 a 20 mg/Kg c/12h iv.',
        ],
      },
    ],
  },

  itu_prost_comp: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#dc2626',
    title: 'Prostatitis aguda complicada',
    subtitle: 'Tratamiento internado · Duración 3 a 4 semanas',
    leftTitle: 'Sin FR para microorganismos multirresistentes',
    rightTitle: 'Con FR para microorganismos multirresistentes (Tabla 4)',
    leftBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Ceftriaxona</span> 1 gr iv c/24h.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8h.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr iv c/6h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8 h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
        ],
      },
    ],
  },

  itu_cat_sys: {
    step: 4,
    type: 'itu_treatment_stack',
    headerColor: '#dc2626',
    title: 'ITU en sondado con fiebre o síntomas sistémicos',
    subtitle: 'Tratamiento internado · Duración 10-14 días',
    blocks: [
      {
        label: 'Conducta inicial',
        bg: '#f8fafc',
        labelColor: '#334155',
        lines: [
          'Retiro o cambio de SV.',
        ],
      },
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Piperacilina-tazobactam</span> 4,5 gr iv c/6h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
          'Alergia a betalactámico: <span class="drug-name">ciprofloxacina</span> 400 mg iv c/8 h + <span class="drug-name">amikacina</span> 20 mg/Kg/24h iv.',
        ],
      },
    ],
  },

  itu_sepsis: {
    step: 4,
    type: 'itu_treatment_dual',
    headerColor: '#b91c1c',
    title: 'Sepsis o shock séptico',
    subtitle: 'Tratamiento internado',
    leftTitle: 'Escalada sobre plan seleccionado',
    rightTitle: 'Con FR para microorganismos multirresistentes / grave',
    leftBlocks: [
      {
        label: 'Agregar siempre',
        bg: '#fee2e2',
        labelColor: '#991b1b',
        lines: [
          'Agregar al plan seleccionado siempre <span class="drug-name">amikacina</span> 20 mg/ Kg/ 24h iv.',
          'En absceso agregar <span class="drug-name">vancomicina</span> 25 mg/Kg iv carga y luego 15 a 20 mg/Kg c/12h iv.',
        ],
      },
    ],
    rightBlocks: [
      {
        label: 'Tratamiento',
        bg: '#fecaca',
        labelColor: '#991b1b',
        lines: [
          '<span class="drug-name">Meropenem</span> carga de 2gr iv en 1h y luego 2 gr iv c/8h en perfusión extendida (3h)+ <span class="drug-name">amikacina</span> 25mg/kg/24h iv.',
          'Si riesgo para <span class="drug-name">Candida spp</span> agregar <span class="drug-name">fluconazol</span> 800 mg iv carga y luego 400 a 800 ic mg/24h.',
          'En absceso agregar <span class="drug-name">vancomicina</span> 25 mg/Kg iv carga y luego 15 a 20 mg/Kg c/12h iv.',
        ],
      },
    ],
  },
};

const ITU_TABLES = [
  {
    id: 'itu_class',
    label: 'T1 · Clasificación',
    title: 'Tabla 1 · ITU complicada',
    type: 'itu_orenuc',
    summary: 'Una infección del tracto urinario (ITU) se considera complicada cuando ocurre en pacientes con alteraciones estructurales o funcionales de la vía urinaria (ej. sondas, obstrucciones, reflujo), enfermedades de base como diabetes o inmunosupresión, hombres, embarazadas, o cuando presenta afectación sistémica grave (fiebre alta, sepsis).',
    renucRows: [
      ['<span style="color:#dc2626;font-weight:800">R</span> Recurrente', '3 o más episodios en 12 meses o 2 episodios en 6 meses.'],
      ['<span style="color:#dc2626;font-weight:800">E</span> Extra-renal', 'Diabetes mal controlada, inmunodepresión relevante, enfermedades del tejido conectivo.'],
      ['<span style="color:#dc2626;font-weight:800">N</span> Nefrológicos', 'Insuficiencia renal relevante, nefropatía poliquística.'],
      ['<span style="color:#dc2626;font-weight:800">U</span> Urológicos', 'Obstrucción ureteral, sondaje vesical temporal, vejiga neurógena controlada, bacteriuria asintomática en embarazada o trasplante renal en primeros 60 días.'],
      ['<span style="color:#dc2626;font-weight:800">C</span> Cateterizado', 'Sonda vesical permanente, obstrucción urinaria no resuelta, vejiga neurógena no controlada.'],
    ],
  },
  {
    id: 'itu_hosp',
    label: 'T2 · Internación',
    title: 'Tabla 2 · Criterios hospitalización',
    type: 'notes',
    sections: [
      {
        head: 'Para hospitalización considerar',
        items: [
          'ITU complicadas y pielonefritis no complicadas: definir ingreso luego de período de valoración, tratamiento inicial y observación de 6 a 12 horas).',
          'Elementos de gravedad (qSOFA).',
          'Enfermedad crónica descompensada.',
          'Complicaciones locales (obstrucción, abscesos).',
          'Embarazo.',
          'Inmunosupresión relevante.',
          'Fracaso Renal Agudo.',
          'Diagnóstico incierto.',
          'No tolerancia vía oral.',
          'No soporte social.',
          'No posibilidad de revaloración.',
          'No comprender las indicaciones.',
        ],
      },
    ],
  },
  {
    id: 'itu_qsofa',
    label: 'T3 · qSOFA',
    title: 'Tabla 3 · Quick-SOFA',
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
    id: 'itu_mdr',
    label: 'T4 · FR MDR',
    title: 'Tabla 4 · Factores de riesgo para microorganismos multirresistentes',
    type: 'itu_mdr',
    sections: [
      {
        head: 'Enterobacterias productoras de Betalactamasas de espectro expandido (BLEE)',
        items: [
          'Contacto reciente con el sistema de salud (ej. Internación últimos 3 meses en: Centro de agudos; Centro de rehabilitación; Geriátrico; Diálisis).',
          'Consumo de antimicrobianos dentro de los últimos 3 meses (Betalactámicos+inhibidores, cefalosporinas 3G o 4G, quinolonas).',
          'Paciente ≥ 65 años con comorbilidades (ej. insuficiencia renal, diabetes).',
          'Cateterización urinaria > 30 días.',
          'Colonización o infección previa por Enterobacterias con BLEE.',
        ],
      },
      {
        head: 'Enterobacterias productoras de carbapenemasas (EPC)',
        items: [
          'Internación en centro con endemia o brotes por carbapenemasas, en particular en Unidades de Cuidados Intensivos (UCI).',
          'Uso previo de carbapenémicos.',
          'Paciente ≥ 65 años con uropatía obstructiva.',
          'Colonización o infección previa por EPC.',
        ],
      },
      {
        head: 'Enterococcus spp',
        items: [
          'Hospitalización reciente.',
          'Uso de cefalosporinas 3G.',
          'Patología prostática.',
          'Colonización o infección previa por Enterococcus sp.',
        ],
      },
      {
        head: 'Pseudomonas spp',
        items: [
          'Internación prolongada. Admisión a UCI u otras áreas cerradas.',
          'Consumo de antimicrobianos antipseudomónicos dentro de los últimos 3 meses.',
          'Postoperatorio urológico y pacientes con sonda vesical permanente que han recibido profilaxis con cefalosporinas.',
          'Paciente con comorbilidades específicas: enfermedad estructural del pulmón, fibrosis quística, neutropenia, sida, otra inmunodeficiencia.',
          'Colonización o infección previa por Pseudomonas sp.',
        ],
      },
      {
        head: 'Candida spp',
        items: [
          'Ingreso previo a UCI.',
          'Antibioticoterapia previa.',
          'Cirugía abdominal.',
          'Nutrición parenteral.',
          'Pancreatitis grave.',
          'Catéter femoral.',
          'Colonización múltiple previa.',
        ],
      },
    ],
    foot: 'No tomar en cuenta los datos de los urocultivos previos.',
  },
  {
    id: 'itu_amik',
    label: 'T5 · Amikacina',
    title: 'Tabla 5 · Uso de amikacina en ITU',
    type: 'notes',
    sections: [
      {
        head: 'Dosis',
        items: [
          '15mg /Kg/ d en dosis única es solamente para la ITU baja no complicada.',
          '20mg/kg/d es una dosis adecuada para el resto de las situaciones.',
          '25mg/kg/d se sugiere para pacientes graves.',
          'Se calcula con peso ajustado (no con peso real), dosis máxima 1,5 gr/d, se ajusta a la función renal (excepto si se trata de dosis única).',
        ],
      },
      {
        head: 'Administración y monitorización',
        items: [
          'Dosis <1gr diluir en 100mg de SF o SG5% y administrar en 30-60 minutos. Dosis >1gr diluir en 250mg de SF o SG5% y administrar en 60 minutos.',
          'Se administra en dosis única diaria.',
          'Se recomienda dosificación tras 24 h de iniciado el tratamiento. Valle (pre-dosis): 1-2mcg/ml. Las concentraciones del valle mayores a 10mcg/ml pueden asociarse a toxicidad. Pico (a los 30 min de finalizada la infusión) 45-60 mcg/ml.',
        ],
      },
      {
        head: 'Mantenimiento',
        items: [
          'Cuando se indica para biterapia se recomienda no mantener por más de 3 a 5 días.',
          'En monoterapia únicamente en infecciones no complicadas por microorganismo susceptible.',
        ],
      },
    ],
  },
];
