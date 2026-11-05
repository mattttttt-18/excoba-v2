// BANCO DEFINITIVO DE 90 REACTIVOS ÚNICOS (EXCOBA)
const masterDB = [
    // --- DRAG AND DROP (15 Reactivos) ---
    { cat: "Biología - Anatomía de la Flor", type: "drag", text: "Clasifica las estructuras de la flor en su órgano correspondiente.", pool: ["Antera", "Estigma", "Ovario", "Filamento", "Pétalo"], targets: ["Androceo (Masc)", "Gineceo (Fem)", "Envoltura"], correct: {"Antera":"Androceo (Masc)","Filamento":"Androceo (Masc)","Estigma":"Gineceo (Fem)","Ovario":"Gineceo (Fem)","Pétalo":"Envoltura"} },
    { cat: "Física - Motor Eléctrico", type: "drag", text: "Relaciona las partes del motor eléctrico con su función.", pool: ["Escobillas", "Rotor", "Estator"], targets: ["Conectan batería a corriente", "Gira por magnetismo", "Genera campo magnético"], correct: {"Escobillas":"Conectan batería a corriente","Rotor":"Gira por magnetismo","Estator":"Genera campo magnético"} },
    { cat: "Civismo - Artículos Constitucionales", type: "drag", text: "Asigna la temática al artículo correspondiente de la Constitución de 1917[cite: 3].", pool: ["Educación laica y gratuita", "Libertad de religión", "Tenencia de la tierra", "Derechos laborales"], targets: ["Artículo 3", "Artículo 24", "Artículo 27", "Artículo 123"], correct: {"Educación laica y gratuita":"Artículo 3","Libertad de religión":"Artículo 24","Tenencia de la tierra":"Artículo 27","Derechos laborales":"Artículo 123"} },
    { cat: "Historia - Culturas Mesoamericanas", type: "drag", text: "Clasifica las características de las culturas prehispánicas[cite: 3].", pool: ["Cultura Madre (Cabezas)", "Ciudad de los dioses", "Introdujeron el 0", "Piedra del Sol"], targets: ["Olmeca", "Teotihuacana", "Maya", "Mexica"], correct: {"Cultura Madre (Cabezas)":"Olmeca","Ciudad de los dioses":"Teotihuacana","Introdujeron el 0":"Maya","Piedra del Sol":"Mexica"} },
    { cat: "Química - Métodos de Separación", type: "drag", text: "Clasifica los ejemplos según el método de separación[cite: 3].", pool: ["Tequila (Agua y alcohol)", "Limadura de hierro", "Sangre / Orina", "Sal disuelta en agua"], targets: ["Destilación", "Imantación", "Centrifugación", "Evaporación"], correct: {"Tequila (Agua y alcohol)":"Destilación","Limadura de hierro":"Imantación","Sangre / Orina":"Centrifugación","Sal disuelta en agua":"Evaporación"} },
    { cat: "Química - Cambios de la Materia", type: "drag", text: "Clasifica los siguientes eventos en Físicos o Químicos[cite: 3].", pool: ["Preparar ensalada", "Corrosión de un clavo", "Digestión", "Hielo derritiéndose"], targets: ["Cambio Físico", "Cambio Químico"], correct: {"Preparar ensalada":"Cambio Físico","Hielo derritiéndose":"Cambio Físico","Corrosión de un clavo":"Cambio Químico","Digestión":"Cambio Químico"} },
    { cat: "Biología - Niveles Tróficos", type: "drag", text: "Acomoda los organismos en la cadena trófica.", pool: ["Planta", "Termita", "Oso Hormiguero", "Jaguar", "Bacteria"], targets: ["Productor", "Consumidor 1rio", "Consumidor 2do", "Consumidor 3ro", "Descomponedor"], correct: {"Planta":"Productor","Termita":"Consumidor 1rio","Oso Hormiguero":"Consumidor 2do","Jaguar":"Consumidor 3ro","Bacteria":"Descomponedor"} },
    { cat: "Español - Tipos de Textos", type: "drag", text: "Clasifica según las características del texto.", pool: ["Función poética y emotiva", "Objetivo y demostrable", "Atrae al consumidor"], targets: ["Texto Literario", "Texto Científico", "Texto Publicitario"], correct: {"Función poética y emotiva":"Texto Literario","Objetivo y demostrable":"Texto Científico","Atrae al consumidor":"Texto Publicitario"} },
    { cat: "Física - Tipos de Energía", type: "drag", text: "Relaciona el aparato con su energía útil de salida.", pool: ["Guitarra", "Estufa de gas", "Foco", "Panel fotovoltaico"], targets: ["Mecánica (Sonora)", "Térmica", "Lumínica", "Eléctrica"], correct: {"Guitarra":"Mecánica (Sonora)","Estufa de gas":"Térmica","Foco":"Lumínica","Panel fotovoltaico":"Eléctrica"} },
    { cat: "Física - Propiedades de Fluidos", type: "drag", text: "Asigna el fenómeno a la propiedad del fluido.", pool: ["Agua sube por tubo delgado", "Insecto camina sobre agua", "Miel fluye lento", "Dos gotas se unen"], targets: ["Capilaridad", "Tensión Superficial", "Viscosidad", "Cohesión"], correct: {"Agua sube por tubo delgado":"Capilaridad","Insecto camina sobre agua":"Tensión Superficial","Miel fluye lento":"Viscosidad","Dos gotas se unen":"Cohesión"} },
    { cat: "Biología - Polímeros", type: "drag", text: "Clasifica si la molécula es un Monómero o un Polímero.", pool: ["Etileno", "Nucleótido", "Celulosa", "ADN", "Proteína"], targets: ["Monómero", "Polímero"], correct: {"Etileno":"Monómero","Nucleótido":"Monómero","Celulosa":"Polímero","ADN":"Polímero","Proteína":"Polímero"} },
    { cat: "Biología - Tipos de Célula", type: "drag", text: "Identifica a qué célula corresponde la característica del ADN.", pool: ["ADN confinado en núcleo", "ADN circular en nucleoide", "ADN organizado en cromosomas"], targets: ["Eucariota", "Procariota"], correct: {"ADN confinado en núcleo":"Eucariota","ADN organizado en cromosomas":"Eucariota","ADN circular en nucleoide":"Procariota"} },
    { cat: "Física - Leyes de Kepler", type: "drag", text: "Asigna la ley correspondiente al fenómeno.", pool: ["Órbitas son elípticas", "Cometa Halley regresa en 76 años", "Precesión del perihelio"], targets: ["1ra Ley (Órbitas)", "3ra Ley (Periodos)", "Gravitación Universal"], correct: {"Órbitas son elípticas":"1ra Ley (Órbitas)","Cometa Halley regresa en 76 años":"3ra Ley (Periodos)","Precesión del perihelio":"Gravitación Universal"} },
    { cat: "Geografía - Capas Terrestres", type: "drag", text: "Acomoda las capas de la tierra de adentro hacia afuera.", pool: ["Núcleo Interno", "Manto Superior", "Corteza Terrestre"], targets: ["Capa más profunda", "Capa Intermedia", "Superficie"], correct: {"Núcleo Interno":"Capa más profunda","Manto Superior":"Capa Intermedia","Corteza Terrestre":"Superficie"} },
    { cat: "Cívica - Conceptos Sociales", type: "drag", text: "Relaciona el concepto con su definición.", pool: ["Creer que la propia cultura es superior", "Negar servicios por origen étnico", "Promover la equidad de género"], targets: ["Etnocentrismo", "Discriminación", "Respeto a la diversidad"], correct: {"Creer que la propia cultura es superior":"Etnocentrismo","Negar servicios por origen étnico":"Discriminación","Promover la equidad de género":"Respeto a la diversidad"} },

    // --- NUMERIC WITH UNITS (25 Reactivos) ---
    { cat: "Química - pH", type: "numeric", text: "Una solución tiene concentración de H+ de 3.2 x 10^-4 mol/L. Calcula el pH y selecciona su carácter.", ans: 3.49, uOpts: ["pH (Ácido)", "pH (Base)", "mol/L"], uCor: "pH (Ácido)" },
    { cat: "Física - Cinemática", type: "numeric", text: "Un avión aterriza a 70 m/s y desacelera a 6.7 m/s². Calcula la distancia de frenado.", ans: 365.67, uOpts: ["m", "m/s", "m/s²", "s"], uCor: "m" },
    { cat: "Física - Energía Potencial 1", type: "numeric", text: "Bala de cañón de 30 libras (13.5 kg) a 2 m de altura. Calcula Ep (g=9.81 m/s²).", ans: 264.8, uOpts: ["J", "N", "W", "kg"], uCor: "J" },
    { cat: "Física - Energía Potencial 2", type: "numeric", text: "Bala de cañón de 24 lb-masa (10.88 kg) a 3 m de altura. Calcula Ep (g=9.8 m/s²).[cite: 1]", ans: 319.8, uOpts: ["J", "N", "m/s", "kg"], uCor: "J" },
    { cat: "Física - Presión", type: "numeric", text: "Un libro ejerce 16 N sobre un área de 250 cm² (0.025 m²). Calcula la presión.", ans: 640, uOpts: ["Pa", "N", "J", "m²"], uCor: "Pa" },
    { cat: "Física - Hidrostática", type: "numeric", text: "Un buzo experimenta 148 kPa en agua de mar (d=1025 kg/m³). Calcula la profundidad (g=9.8).", ans: 14.73, uOpts: ["m", "Pa", "atm", "kg"], uCor: "m" },
    { cat: "Química - Disoluciones", type: "numeric", text: "¿Cuántos gramos de Ca3(PO4)2 hay en 200 g de disolución al 4% en masa?", ans: 8, uOpts: ["g", "mol", "%"], uCor: "g" },
    { cat: "Química - Moles", type: "numeric", text: "¿Cuántos moles hay en 240 g de metano (CH4)? (C=12, H=1)", ans: 15, uOpts: ["mol", "g", "L"], uCor: "mol" },
    { cat: "Química - Masas", type: "numeric", text: "¿Cuántos gramos de amoniaco (NH3) hay en 4 moles? (N=14, H=1)", ans: 68, uOpts: ["g", "mol", "N"], uCor: "g" },
    { cat: "Matemáticas - Porcentajes 1", type: "numeric", text: "Carlos pagó una chamarra de $1280 con 8% de descuento. ¿Cuánto pagó?", ans: 1177.6, uOpts: ["$", "%", "pesos"], uCor: "$" },
    { cat: "Matemáticas - Porcentajes 2", type: "numeric", text: "Pantalones de $620 con 15% de descuento. ¿Cuánto costaron?", ans: 527, uOpts: ["$", "%"], uCor: "$" },
    { cat: "Matemáticas - Álgebra", type: "numeric", text: "Resuelve para x: 5(3 - x) = 3x + 7[cite: 2]", ans: 1, uOpts: ["u", "x", "valor numérico"], uCor: "valor numérico" },
    { cat: "Física - Caída Libre 1", type: "numeric", text: "Tiempo que tarda en caer una pelota desde 35m (g=9.8 m/s²).[cite: 7]", ans: 2.67, uOpts: ["s", "m", "m/s"], uCor: "s" },
    { cat: "Física - Trabajo", type: "numeric", text: "Fuerza de 180 N a 40° arrastra una caja 45 m. Calcula el trabajo.", ans: 6204.9, uOpts: ["J", "N", "W"], uCor: "J" },
    { cat: "Matemáticas - Pitágoras", type: "numeric", text: "En un triángulo rectángulo, los catetos son 65 y 72. Calcula la hipotenusa.", ans: 97, uOpts: ["u", "cm", "m"], uCor: "u" },
    { cat: "Matemáticas - Aritmética 1", type: "numeric", text: "Resuelve: -2[3 - 2(-2 + (-40)/4) - 34][cite: 2]", ans: 14, uOpts: ["-", "u"], uCor: "-" },
    { cat: "Física - Dinámica", type: "numeric", text: "Bloque de 5kg recibe 30N al frente y 10N atrás. Calcula la aceleración.", ans: 4, uOpts: ["m/s²", "N", "J"], uCor: "m/s²" },
    { cat: "Física - Cinemática 2", type: "numeric", text: "Conductor a 20 m/s frena a 6.8 m/s². Calcula distancia hasta detenerse.", ans: 29.41, uOpts: ["m", "m/s", "s"], uCor: "m" },
    { cat: "Física - Termodinámica", type: "numeric", text: "¿A cuántos °C equivalen 45 °F?", ans: 7.22, uOpts: ["°C", "°F", "K"], uCor: "°C" },
    { cat: "Matemáticas - Área", type: "numeric", text: "Calcula el área de un círculo de 6m de diámetro. (Usa Pi=3.1416)", ans: 28.27, uOpts: ["m²", "m", "cm²"], uCor: "m²" },
    { cat: "Matemáticas - Volumen", type: "numeric", text: "Volumen de prisma triangular (Área base=10.82 cm², altura=16.5 cm).", ans: 178.53, uOpts: ["cm³", "cm²", "m³"], uCor: "cm³" },
    { cat: "Física - Conversión Peso", type: "numeric", text: "Objeto de 150 libras-masa en la Tierra. Convierte a kg y calcula peso en N.", ans: 667.7, uOpts: ["N", "kg", "J"], uCor: "N" },
    { cat: "Física - Gravedad", type: "numeric", text: "Objeto pesa 60 N en la Tierra (g=9.8). Calcula su peso en la Luna (g=1.6).[cite: 2]", ans: 9.79, uOpts: ["N", "kg"], uCor: "N" },
    { cat: "Física - Velocidad Angular", type: "numeric", text: "Convierte 480 rpm a rad/s.", ans: 50.26, uOpts: ["rad/s", "Hz", "m/s"], uCor: "rad/s" },
    { cat: "Física - Caída Libre 2", type: "numeric", text: "Objeto lanzado a 16m/s llega a 30m/s con a=9.8. Calcula el tiempo.[cite: 2]", ans: 1.42, uOpts: ["s", "m", "m/s"], uCor: "s" },

    // --- MULTIPLE CHOICE (50 Reactivos Teóricos) ---
    { cat: "Historia Universal", type: "choice", text: "¿Cuál fue una de las principales causas de la Gran Depresión en 1929?", opts: ["Caída de la Bolsa de Valores de Nueva York", "La Revolución Rusa", "Segunda Guerra Mundial", "Tratado de Versalles"], cor: 0 },
    { cat: "Historia Universal", type: "choice", text: "¿Qué concepto defendía John Locke en sus escritos?[cite: 1]", opts: ["Derechos naturales del hombre", "Monarquía absoluta", "Comunismo primitivo", "División del Imperio"], cor: 0 },
    { cat: "Historia Universal", type: "choice", text: "¿En qué año ocurrieron las primeras Cruzadas?[cite: 1]", opts: ["1096", "1492", "800", "1521"], cor: 0 },
    { cat: "Historia Universal", type: "choice", text: "¿En qué año coronaron a Carlomagno?[cite: 1]", opts: ["800", "1096", "1453", "1492"], cor: 0 },
    { cat: "Historia Universal", type: "choice", text: "¿En qué año llegó Colón a América?[cite: 1]", opts: ["1492", "1521", "1096", "1656"], cor: 0 },
    { cat: "Historia de México", type: "choice", text: "¿Cuál es el Rey español máximo representante de las Reformas Borbónicas?[cite: 1]", opts: ["Carlos III", "Felipe II", "Carlos V", "Fernando VII"], cor: 0 },
    { cat: "Matemáticas - Probabilidad", type: "choice", text: "Se tienen 3 cajas, cada una con 3 rojas, 2 amarillas y 1 verde. Probabilidad de sacar 3 rojas:[cite: 4]", opts: ["1/8", "3/8", "1/6", "1/18"], cor: 0 },
    { cat: "Matemáticas - Sistemas 1", type: "choice", text: "Resuelve: 12x - 4y = 46 ; 3x + 5y = -16. Hallar x.", opts: ["x = 2.3", "x = 3", "x = 4", "x = -2"], cor: 0 },
    { cat: "Matemáticas - Sistemas 2", type: "choice", text: "Resuelve: x + y = 5 ; x - y = 1[cite: 2]. Hallar x.", opts: ["x = 3", "x = 2", "x = 4", "x = 1"], cor: 0 },
    { cat: "Matemáticas - Sistemas 3", type: "choice", text: "Resuelve: 2x - 2y = 3 ; 5x - 2y = 11. Hallar x.", opts: ["x = 8/3", "x = 3/8", "x = 7/6", "x = 6/7"], cor: 0 },
    { cat: "Matemáticas - Proporciones", type: "choice", text: "5 trabajadores tardan 48 días. Para terminar en 12 días, se necesitan:", opts: ["20 trabajadores", "15 trabajadores", "25 trabajadores", "10 trabajadores"], cor: 0 },
    { cat: "Matemáticas - Álgebra", type: "choice", text: "Desarrolla: (3x + y)²", opts: ["9x² + 6xy + y²", "9x² + y²", "6x² + 3xy + y²", "9x² + 3xy + y²"], cor: 0 },
    { cat: "Matemáticas - Factorización", type: "choice", text: "Factoriza: 24xz⁸ - 8xz¹⁰", opts: ["8xz⁸(3 - z²)", "8xz⁶(3 - z²)", "8z⁸(3x - z²)", "24xz(1 - z²)"], cor: 0 },
    { cat: "Matemáticas - Aritmética 2", type: "choice", text: "Resuelve: 201/3 + 15.5 - 17/100", opts: ["82.33", "83.33", "82", "83"], cor: 0 },
    { cat: "Matemáticas - Notación Científica 1", type: "choice", text: "Expresa 0.000000000325 en notación científica:[cite: 2]", opts: ["3.25 x 10⁻¹⁰", "32.5 x 10⁻¹⁰", "3.25 x 10¹⁰", "32.5 x 10¹⁰"], cor: 0 },
    { cat: "Matemáticas - Notación Científica 2", type: "choice", text: "Resuelve: (4 x 10¹⁵)(2 x 10⁻⁵)[cite: 4]", opts: ["8 x 10¹⁰", "8 x 10⁻¹⁰", "80 x 10¹⁰", "8 x 10⁷"], cor: 0 },
    { cat: "Biología - Genética", type: "choice", text: "Cruce Aa x aa. ¿Probabilidad de estatura media (Aa)?", opts: ["50%", "25%", "75%", "100%"], cor: 0 },
    { cat: "Biología - Virus", type: "choice", text: "Cubierta proteica que protege el material genético del virus:[cite: 2]", opts: ["Cápside", "Membrana", "Pared Celular", "Nucleoide"], cor: 0 },
    { cat: "Biología - Evolución Botánica", type: "choice", text: "Plantas con flor, fruto y semillas cerradas:", opts: ["Angiospermas", "Gimnospermas", "Briofitas", "Helechos"], cor: 0 },
    { cat: "Química - Modelos Atómicos 1", type: "choice", text: "¿Qué modelo propone órbitas elípticas (ampliación de Bohr)?[cite: 2]", opts: ["Sommerfeld", "Thomson", "Dalton", "Rutherford"], cor: 0 },
    { cat: "Química - Modelos Atómicos 2", type: "choice", text: "Modelo donde electrones están incrustados en esfera positiva:", opts: ["Thomson", "Bohr", "Dalton", "Sommerfeld"], cor: 0 },
    { cat: "Química - Modelos Atómicos 3", type: "choice", text: "Átomos son partículas indivisibles e indestructibles:", opts: ["Dalton", "Bohr", "Thomson", "Rutherford"], cor: 0 },
    { cat: "Química - Compuestos", type: "choice", text: "¿Cuál es una sal binaria?", opts: ["CaCl2", "HNO3", "KOH", "H2CO3"], cor: 0 },
    { cat: "Química - Nomenclatura", type: "choice", text: "¿Cuál es un hidróxido?", opts: ["Ca(OH)2", "H2SO4", "HCl", "NaCl"], cor: 0 },
    { cat: "Química - Orgánica", type: "choice", text: "Nombre de CH3-C≡C-CH2-CH3:", opts: ["2-pentino", "2-pentano", "2-penteno", "3-pentino"], cor: 0 },
    { cat: "Química - Orgánica 2", type: "choice", text: "Conocidos como olefinas, tienen al menos un enlace C=C (sp2):", opts: ["Alquenos", "Alcanos", "Alquinos", "Alcoholes"], cor: 0 },
    { cat: "Química - Reacciones", type: "choice", text: "¿Qué efecto tiene congelar alimentos sobre su deterioro?", opts: ["Disminuye su velocidad", "Las acelera", "No modifica reacciones", "Aumenta la velocidad"], cor: 0 },
    { cat: "Biología - Metabolismo", type: "choice", text: "Productos de la glucólisis por molécula de glucosa:[cite: 2]", opts: ["2 ATP, 2 NADH, 2 Piruvatos", "36 ATP, H2O", "4 CO2, Acetil CoA", "O2, Glucógeno"], cor: 0 },
    { cat: "Biología - Cadenas Tróficas", type: "choice", text: "Organismo que actúa como productor:", opts: ["Planta", "Bacteria", "Termita", "Jaguar"], cor: 0 },
    { cat: "Biología - Teoría Celular", type: "choice", text: "Dijo 'Omnis cellula e cellula' (Toda célula proviene de otra):", opts: ["Rudolf Virchow", "Robert Hooke", "Theodor Schwann", "Leeuwenhoek"], cor: 0 },
    { cat: "Química - Isótopos", type: "choice", text: "Isótopo para estimar antigüedad de restos orgánicos:", opts: ["Carbono-14", "Uranio-235", "Yodo-131", "Fósforo-32"], cor: 0 },
    { cat: "Química - Enlaces", type: "choice", text: "Enlace predominante en Cloruro de Sodio (NaCl) sólido:", opts: ["Iónico", "Covalente", "Metálico", "Puente H"], cor: 0 },
    { cat: "Química - Clasificación", type: "choice", text: "Muestra solo con moléculas de H2O de composición constante:", opts: ["Compuesto", "Elemento", "Mezcla homogénea", "Mezcla heterogénea"], cor: 0 },
    { cat: "Química - Mezclas", type: "choice", text: "Mezcla cuyas partículas grandes sedimentan en reposo:", opts: ["Suspensión", "Coloide", "Solución", "Elemento"], cor: 0 },
    { cat: "Física - Caída Libre 3", type: "choice", text: "Dos rocas (grande y pequeña) caen en el vacío desde igual altura:", opts: ["Caen al mismo tiempo", "La grande cae antes", "La pequeña cae antes", "Depende del material"], cor: 0 },
    { cat: "Física - Ondas", type: "choice", text: "¿Cuál onda es electromagnética y no requiere medio material?", opts: ["Luz", "Sonido", "Onda sísmica", "Ola del mar"], cor: 0 },
    { cat: "Física - Proyectiles", type: "choice", text: "En tiro parabólico, velocidad en el eje Y en altura máxima:", opts: ["0 m/s", "9.8 m/s", "Igual a v0", "Máxima"], cor: 0 },
    { cat: "Español - Textos 2", type: "choice", text: "Texto con función poética y emotiva:", opts: ["Literario", "Científico", "Instructivo", "Periodístico"], cor: 0 },
    { cat: "Español - Textos 3", type: "choice", text: "Propósito principal de un instructivo:[cite: 2]", opts: ["Explicar pasos de actividad", "Narrar anécdota", "Defender opinión", "Describir paisaje"], cor: 0 },
    { cat: "Español - Gramática 1", type: "choice", text: "Contiene complemento circunstancial de causa:", opts: ["Suspendido por intensa lluvia", "Salió a las seis", "Colocaron carteles", "Llegaremos mañana"], cor: 0 },
    { cat: "Español - Puntuación", type: "choice", text: "Uso correcto de la coma vocativa:", opts: ["Sofía, trae tu cuaderno, por favor.", "Sofía trae, tu cuaderno", "Sofía trae tu cuaderno, por favor", "Sofía trae tu, cuaderno"], cor: 0 },
    { cat: "Español - Ortografía 1", type: "choice", text: "Uso correcto de 'porque / por qué':[cite: 2]", opts: ["No sé por qué..., porque había poca gente.", "No sé porque..., por qué...", "No sé porqué..., porque...", "No sé por qué..., porqué..."], cor: 0 },
    { cat: "Español - Ortografía 2", type: "choice", text: "Acentuación diacrítica correcta:", opts: ["Explicó que aún faltaba...", "Sí quieres participar...", "Tu sabes que...", "para mi, pero no se..."], cor: 0 },
    { cat: "Español - Semántica", type: "choice", text: "¿Qué significa 'hipótesis' en investigación?", opts: ["Explicación provisional", "Conclusión definitiva", "Opinión sin pruebas", "Herramienta de medición"], cor: 0 },
    { cat: "Historia de México 2", type: "choice", text: "Año de Constitución Política vigente:", opts: ["1917", "1857", "1910", "1824"], cor: 0 },
    { cat: "Historia de México 3", type: "choice", text: "Plan de Juan Álvarez para regresar al federalismo (vs Santa Anna):", opts: ["Plan de Ayutla", "Plan de San Luis", "Plan de Ayala", "Plan de Tuxtepec"], cor: 0 },
    { cat: "Historia Universal 2", type: "choice", text: "Año en que Diego Velázquez pintó 'Las Meninas':", opts: ["1656", "1715", "1621", "1665"], cor: 0 },
    { cat: "Geografía - Demografía", type: "choice", text: "Indicador que agrupa esperanza de vida, educación y PIB:", opts: ["IDH (Índice de Des. Humano)", "Tasa de Natalidad", "Inflación", "Tasa de Mortalidad"], cor: 0 },
    { cat: "Geografía - Migración", type: "choice", text: "Consecuencia social negativa de la migración:", opts: ["Xenofobia y racismo", "Falta de oportunidades", "Violencia", "Gobiernos autoritarios"], cor: 0 },
    { cat: "Español - Figuras retóricas", type: "choice", text: "¿Cuál oración contiene una metáfora?", opts: ["El tiempo es un ladrón.", "Avanzó rápido como el viento.", "Río de varios kilómetros.", "La lluvia golpeaba con fuerza."], cor: 0 }
];

let examDB = [];
let current = 0;
let answers = {};
let time = 5400; // 90 minutos exactos
let timerId;

function startExam() {
    examDB = [...masterDB].sort(() => Math.random() - 0.5);
    
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    
    buildGrid();
    loadQuestion(0);
    
    timerId = setInterval(() => {
        time--;
        let h = Math.floor(time / 3600).toString().padStart(2, '0');
        let m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        let s = (time % 60).toString().padStart(2, '0');
        document.getElementById('timer').innerText = `${h}:${m}:${s}`;
        if (time <= 0) finishExam();
    }, 1000);
}

function buildGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';
    examDB.forEach((_, i) => {
        let btn = document.createElement('div');
        btn.className = 'q-btn';
        btn.innerText = i + 1;
        btn.id = `btn-${i}`;
        btn.onclick = () => loadQuestion(i);
        grid.appendChild(btn);
    });
}

function loadQuestion(idx) {
    if (document.getElementById(`btn-${current}`)) {
        document.getElementById(`btn-${current}`).classList.remove('active');
    }
    current = idx;
    document.getElementById(`btn-${current}`).classList.add('active');
    document.getElementById('progress-indicator').innerText = `Pregunta ${current + 1} de 90`;
    
    let q = examDB[current];
    document.getElementById('question-category').innerText = q.cat;
    document.getElementById('question-text').innerHTML = q.text;
    
    let inter = document.getElementById('interaction-container');
    inter.innerHTML = '';
    
    if (q.type === 'choice') {
        q.opts.forEach((opt, i) => {
            let checked = (answers[current] === i) ? 'checked' : '';
            inter.innerHTML += `<label class="radio-label"><input type="radio" name="q" value="${i}" ${checked} onchange="saveChoice(${i})"> <span>${opt}</span></label>`;
        });
    } else if (q.type === 'numeric') {
        let val = answers[current] ? answers[current].v : '';
        let sel = answers[current] ? answers[current].u : '';
        
        let optsHtml = `<option value="" disabled ${sel === '' ? 'selected' : ''}>-- Elige unidad --</option>`;
        q.uOpts.forEach(u => {
            optsHtml += `<option value="${u}" ${u === sel ? 'selected' : ''}>${u}</option>`;
        });
        
        inter.innerHTML = `
            <div class="numeric-group">
                <input type="number" id="numVal" placeholder="Valor numérico" value="${val}" oninput="saveNumeric()" step="any">
                <select id="numUnit" onchange="saveNumeric()" required>${optsHtml}</select>
            </div>
            <p style="color:#e74c3c; font-size:0.85rem; text-align:center; margin-top:10px;">* Ingresa la cantidad numérica y selecciona obligatoriamente la unidad correspondiente.</p>
        `;
    } else if (q.type === 'drag') {
        let targetsHtml = q.targets.map(t => {
            let safeTId = t.replace(/[\s\(\)°/]/g, '_');
            return `<div class="target-box" ondragover="allowDrop(event)" ondrop="drop(event, '${safeTId}')" id="target-${safeTId}">
                <h4>${t}</h4>
                ${getDroppedItems(safeTId)}
            </div>`;
        }).join('');
            
        inter.innerHTML = `
            <div class="dd-container">
                <p style="text-align:center; color:#bbb; margin:0 0 10px 0; font-size:0.9rem;">Arrastra cada elemento hacia la categoría que le corresponde.</p>
                <div class="pool" ondragover="allowDrop(event)" ondrop="drop(event, 'pool')">${getPoolItems(q.pool)}</div>
                <div class="targets">${targetsHtml}</div>
            </div>`;
    }
    updateStatusCount();
}

function saveChoice(val) {
    answers[current] = val;
    document.getElementById(`btn-${current}`).classList.add('answered');
    updateStatusCount();
}

function saveNumeric() {
    let v = document.getElementById('numVal').value;
    let u = document.getElementById('numUnit').value;
    
    if (v !== '' && u !== '') {
        answers[current] = { v: parseFloat(v), u: u };
        document.getElementById(`btn-${current}`).classList.add('answered');
        document.getElementById('numUnit').style.borderColor = "var(--accent-green)";
    } else {
        document.getElementById(`btn-${current}`).classList.remove('answered');
        delete answers[current];
    }
    updateStatusCount();
}

/* --- CONTROL DRAG AND DROP --- */
let dragState = {}; 
function drag(ev) { ev.dataTransfer.setData("text", ev.target.innerText); }
function allowDrop(ev) { ev.preventDefault(); }
function drop(ev, targetId) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    if (!dragState[current]) dragState[current] = {};
    dragState[current][data] = targetId;
    answers[current] = dragState[current];
    document.getElementById(`btn-${current}`).classList.add('answered');
    loadQuestion(current);
}
function getPoolItems(pool) {
    let html = '';
    pool.forEach(p => {
        if (!dragState[current] || dragState[current][p] === 'pool' || !dragState[current][p]) {
            html += `<div class="draggable" draggable="true" ondragstart="drag(event)">${p}</div>`;
        }
    });
    return html;
}
function getDroppedItems(targetId) {
    if (!dragState[current]) return '';
    let html = '';
    for (let item in dragState[current]) {
        if (dragState[current][item] === targetId) {
            html += `<div class="draggable" draggable="true" ondragstart="drag(event)">${item}</div>`;
        }
    }
    return html;
}

function updateStatusCount() {
    let answeredCount = Object.keys(answers).length;
    document.getElementById('exam-status').innerText = `Respondidas: ${answeredCount} / 90`;
}

function prevQuestion() {
    if (current > 0) loadQuestion(current - 1);
}

function nextQuestion() {
    if (current < 89) loadQuestion(current + 1);
}

function finishExam() {
    clearInterval(timerId);
    let score = 0;
    
    examDB.forEach((q, i) => {
        if (q.type === 'choice' && answers[i] === q.cor) score++;
        if (q.type === 'numeric' && answers[i]) {
            if (Math.abs(answers[i].v - q.ans) < 0.5 && answers[i].u === q.uCor) score++;
        }
        if (q.type === 'drag' && answers[i]) {
            let isCorrect = true;
            for (let key in q.correct) {
                let safeTarget = q.correct[key].replace(/[\s\(\)°/]/g, '_');
                if (answers[i][key] !== safeTarget) isCorrect = false;
            }
            if (isCorrect) score++;
        }
    });
    
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    document.getElementById('final-score').innerText = `${score} / 90`;
}