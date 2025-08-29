LswConstants.global.define("rutiner.md", `

Aprovecha para poner algo guapo aquí.

Y se te irá recordando.

`.trim());

LswConstants.global.define("/kernel/settings/rutiner.config.env", `

timeout=0h 3min
  
`.trim());


LswConstants.global.define("randomizables.env", `

números = 1
conceptos = 1
ideas = 1
interfaces gráficas = 1
patrones = 1
arquitectura de la realidad = 1
arquitectura del yo = 1
lenguajes formales = 1
cocina = 1
nutrición = 1
química = 1
nutrición = 1
química = 1
física = 1
matemáticas = 1
geometría = 1
canvas = 1
perspectiva = 1
medicina = 1
biología = 1
fisiología = 1
musculación = 1
flexibilidad = 1
emociones = 1
actividad física = 1
optimización de ram = 1
autocontrol = 1
autobservación = 1
autoanálisis = 1
meditación = 1
relajación = 1
paisajismo = 1
dibujo 3d = 1
perspectiva = 1
geometría = 1
mates = 1
dibujo artístico = 1
anime = 1
abstracto = 1
esquemista = 1
conceptualista = 1
reflexión = 1
diálogo interno = 1

`.trim());

LswConstants.global.define("backgrounds.env", `

assets/images/montania1.png
assets/images/playa1.png
assets/images/playa2.png

`.trim());

LswConstants.global.define("automessages.env", `

Sé tu propia luz.
Lo conseguiremos.
Todo se andará.
Sigamos adelante.
En algún momento encontraremos la luz.

`.trim());


LswConstants.global.define("categorias.tri", `

Árbol de categorías [] {
  Biología [] {
    Vegetal [] {}
    Animal [] {}
    Social [] {}
  }
  Medicina [] {
    Fisiología [] {}
    Nutrición [] {}
  }
  Química [] {}
  Física [] {}
  Matemáticas [] {
    Programación [] {}
    Lógica abstracta [] {}
  }
  Arte [] {}
}

`.trim());


LswConstants.global.define("report/inicio.js", `

const conceptos = await lsw.database.selectMany("Concepto");
const acciones = await lsw.database.selectMany("Accion");
const acciones_virtuales = await lsw.database.selectMany("Accion_virtual");
const propagadores = await lsw.database.selectMany("Propagador_de_concepto");
const prototipos = await lsw.database.selectMany("Propagador_prototipo");
const acumulaciones_objeto = acciones_virtuales.reduce((out, it) => {
  if(!(it.en_concepto in out)) {
    out[it.en_concepto] = 0;
  }
  out[it.en_concepto] += (LswTimer.utils.fromDurationstringToMilliseconds(it.tiene_duracion) || 0);
  return out;
}, {});
const acumulaciones = Object.keys(acumulaciones_objeto).sort((k1, k2) => {
  const c1 = acumulaciones_objeto[k1];
  const c2 = acumulaciones_objeto[k2];
  return c2 > c1 ? 1 : -1;
}).map(id => {
  const ms = acumulaciones_objeto[id];
  return {
    nombre: id,
    total: LswTimer.utils.fromMillisecondsToDurationstring(ms)
  };
});

return {
  "Acumulaciones virtuales": acumulaciones,
  "Conceptos": conceptos,
  "Acciones": acciones,
  "Acciones virtuales": acciones_virtuales,
  "Propagadores": propagadores,
  "Propagadores prototipo": prototipos,
};

`.trim());

LswConstants.global.define("boot.proto", `

inc /kernel/agenda/proto/concepto
inc /kernel/agenda/proto/funcion
inc /kernel/agenda/proto/relacion

def desayunar, comer, cenar

fun unEjemplo: param1, param2 {
  console.log("Solo un ejemplo.");
}

rel desayunar
  > consumir * 1
  > abstenerse * 0
  >> unEjemplo: 500, 1000

`.trim());

LswConstants.global.define("boot.js", `

// Cuidadito con este script que te cargas la app
// y luego tienes que borrar la caché para volver a tenerla.
        
`.trim());

LswConstants.global.define("multiplicador.js", `

fun multiplicador: contexto {
  const {
    accion,
    propagador_de_concepto
  } = contexto;
  return {
    tiene_duracion: LswTimer.utils.multiplyDuration(
      accion.tiene_duracion,
      propagador_de_concepto.tiene_parametros_extra
    )
  };
}
        
`.trim());

LswConstants.global.define("user.env", `

app.username=usuario
app.clock_message=💎
        
`.trim());

/*
LswConstants.global.define("/kernel/settings/goals/factory/fisico-3-veces.js", `

return LswGoals.minTimesToday("actividad física", 3);

`.trim());

LswConstants.global.define("/kernel/settings/goals/factory/fisico-4h.js", `

return LswGoals.minDurationToday("actividad física", "4h");

`.trim());
//*/

LswConstants.global.define("/kernel/settings/goals.env", `

actividad física | > 3 | !1
actividad física | > 4h | !2
programar | > 6h | !3

`.trim());

LswConstants.global.define("/kernel/goals/goals.week", `

*-*:

* {
  req programar >6h !10
  req correr >1h !10
  req bici > 1h !10
  req pesas > 1h !10
  req estiramientos > 30min !10
}

lun {

}

mar {

}

mie {

}

jue {

}

vie {

}

sab {
  set 06:00 = desayunar con ajo
  set 22:00 = ver puesta de sol
}

dom {
  set 10:00 = tiempo de reflexión semanal
}

  
  `.trim());

LswConstants.global.define("/kernel/settings/trackables.env", `

Sky castle

`.trim());

LswConstants.global.define("/kernel/editor/validators/js.js", `

  await LswLazyLoads.loadBeautifier();

  return ;
    
  `.trim());

LswConstants.global.define("/kernel/apps/example/load.js", `

return {
  label: "🏅 Example of app",
  event: () => {
    lsw.toasts.debug({ message: "hi from custom app!" });
  }
};
  
`.trim());

LswConstants.global.define("/kernel/android/boot.js", `
  
/*
// Inject your local android api from here:
lsw.fs.evaluateAsJavascriptFileOrReturn("/kernel/android/api/load.js");
//*/

`.trim());

