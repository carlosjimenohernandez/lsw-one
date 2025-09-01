# Lsw-one

Complemento personal de software.

### Índice

- [Lsw-one](#lsw-one)
    - [Índice](#índice)
    - [Links del proyecto](#links-del-proyecto)
    - [Aplicaciones](#aplicaciones)
    - [Trucos](#trucos)
    - [Ficheros útiles](#ficheros-útiles)
    - [Flujos ocultos o no intuitivos](#flujos-ocultos-o-no-intuitivos)
    - [Flujo funcional básico](#flujo-funcional-básico)
    - [Extras de interés](#extras-de-interés)
    - [Variables del editor en entorno normal](#variables-del-editor-en-entorno-normal)
    - [Variables del editor en entorno android](#variables-del-editor-en-entorno-android)
      - [Trucos de la app móvil en Android](#trucos-de-la-app-móvil-en-android)

### Links del proyecto

- web:
   - [https://carlosjimenohernandez.github.io/lsw-one](https://carlosjimenohernandez.github.io/lsw-one)
- android: *los links expiran en 1 semana*
   - última versión: [https://limewire.com/d/IQSrD#vmRbOWUDr2](https://limewire.com/d/IQSrD#vmRbOWUDr2)
   - versión del 1 de septiembre de 2025: [https://limewire.com/d/IQSrD#vmRbOWUDr2](https://limewire.com/d/IQSrD#vmRbOWUDr2)
   - versión del 29 de agosto de 2025: [https://limewire.com/d/uJJjv#iyvI89x9Kh](https://limewire.com/d/uJJjv#iyvI89x9Kh)
- github: [https://github.com/carlosjimenohernandez/lsw-one](https://github.com/carlosjimenohernandez/lsw-one)
- documentación: [https://carlosjimenohernandez.github.io/lsw-one/reference](https://carlosjimenohernandez.github.io/lsw-one/reference)

### Aplicaciones

Las aplicaciones que vienen por defecto son:

- 🕓 Ahora - para gestionar las actividades del día
   - ⬅️🕓➡️ En todo el día
   - ⬅️🕓 Antes
   - 🕓➡️ Después
- 📦 Base de datos - para manejar los fatos básicos del sistema
   - 📦 Acción
   - 📦 Concepto
   - 📦 Nota
   - 📦 Articulo
- 📂 Sistema de ficheros
   - ℹ️ Un sistema de ficheros totalmente virtual basado en [`IndexedDB`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
   - ℹ️ Soporta ficheros:
      - 🧾 *.js
      - 🧾 *.css
      - 🧾 *.html
      - 🧾 *.pegjs
      - 🧾 *.md
         - con soporte para LaTeX
            - En misma línea con `$ latex $`
            - En múltiples líneas con `$$` y `$$`
   - 📄 `/kernel/agenda/randomizables.env`
      - ℹ️ Lista los elementos para inflar **randomly** el día
   - 📄 `/kernel/apps/{nombre de app}/load.js`
      - ℹ️ Apps personalizadas
   - 📄 `/kernel/bin/{nombre de binario}.js`
      - ℹ️ Binarios rápidos personalizados
      - ℹ️ Son igual que las apps pero se acceden desde la app «💣 Binarios» solamente
   - 📄 `/kernel/components/{nombre de componente}/{nombre de componente}.{html, js, css}`
      - ℹ️ Componentes Vue2 que quieres cargar automáticamente
   - 📄 `/kernel/goals/goals.week`
      - ℹ️ Script tipo WeekLang para:
         - Sintaxis `req`: requisitos de la semana
         - Sintaxis `set`: planes de la semana
         - el *pegjs* está en:
            - [`./src/lsw-framework/src/apis/lsw-languages/weeklang/weeklang.pegjs`](./src/lsw-framework/src/apis/lsw-languages/weeklang/weeklang.pegjs)
         - el *ejemplo básico* está en:
            - [`./src/lsw-framework/src/apis/lsw-languages/weeklang/test/input/example.week`](./src/lsw-framework/src/apis/lsw-languages/weeklang/test/input/example.week)
- 💣 Binarios
   - ℹ️ Como apps pero sin ensuciar el escritorio
- 📆 Calendario
   - 📊 Reportes - para visualizar reportes personalizados
   - 🔮 Conductometría - para propagaciones conceptuales (en desarrollo y experimental)
   - 🏁 Objetivos y hábitos - para visualizar los estados de ciertas actividades
- 💬 Notas
   - ℹ️ Para consultar tus notas rápidas
   - ℹ️ Puedes priorizar urgentes
- 💬➕ Nueva nota
   - ℹ️ Para crear notas rápidas
   - ℹ️ Soporta Markdown y LaTeX
- 📖 Diario
   - ℹ️ Para un trackeo de texto a diario
   - ℹ️ Puedes ir de un día a otro
- 🔬 Enciclopedia
   - ℹ️ Puedes hacer libros, categorías y artículos
- 🔬➕ Nuevo artículo
   - ℹ️ Para crear artículos rápidamente
   - ℹ️ Soporta Markdown y LaTeX
- 🪲 Inspector de JS
   - ℹ️ Para inspeccionar cómodamente JS en vivo
- 💻 Consola de JS
   - ℹ️ Basada en [`eruda`](https://github.com/liriliri/eruda)
- ♨️ Datos volátiles
   - ℹ️ Para tener una base de datos
   - ℹ️ Orientada a datos desestructurados
   - ℹ️ Solo soporta strings como tipo de dato
   - ℹ️ Máxima flexibilidad para crear tablas y filas
- ✅ Tests de aplicación
   - ℹ️ Tiene los tests principales de la aplicación
   - ⚠️ Orientada a desarrollo
   - ℹ️ En activo
   - ℹ️ Permite comprobar la salud de la aplicación
- 🐱 Emojis
   - ℹ️ Para recuperar emojis rápidamente
- 🔧 Configuraciones
   - ℹ️ Permite acceder a ciertas configuraciones de la aplicación
- 📹 Trackeables
   - ℹ️ Captura frecuencia de eventos de la realidad
   - ℹ️ Monitoriza y persiste tu circunstancia
- ✨ Nueva feature 
   - ⚠️ Orientada a desarrollo
   - ℹ️ En activo siempre

### Trucos

La aplicación es bastante intuitiva considero, así que paso a explicar directamente los "trucos" o aspectos más particulares y específicos.

### Ficheros útiles

En el **📂 Sistema de ficheros** virtual de la app puedes configurar:

- [/kernel/boot.js](#):
   - Para el evento de inicio automático.
- [/kernel/agenda/proto/boot.proto](#):
   - Para iniciar una lógica de virtualización de la conductometría.
   - Puedes usar toda la carpeta para crear tus *includes* de **protolang**
      - Sí, **protolang** (los *.proto) es un lenguaje no documentado
      - El **tripilang** (los *.tri) tampoco está documentado
- [/kernel/agenda/report/*.js](#):
   - Para importar reportes de conductometría.
- [/kernel/components/$componente/$componente.{html,css,js}](#):
   - Para importar componentes vue@2 desde el boot.
- [/kernel/settings/table/storage/*.json](#):
   - Para la caché de las tablas de la aplicación con identificador de almacén especificado.
- [/kernel/settings/automessages.env](#):
   - Para los mensajes de automotivación.
- [/kernel/settings/backgrounds.env](#):
   - Para las imágenes de fondo de pantalla.
- [/kernel/settings/randomizables.env](#):
   - Para las actividades randomizables de la agenda.
- [/kernel/settings/rutiner.md](#):
   - Para el mensaje rutinario.
- [/kernel/settings/rutiner.config.env](#):
   - Para las configuraciones del mensaje rutinario.
- [/kernel/settings/user.env](#):
   - Para preferencias de usuario simples.
- [/kernel/settings/goals/factory](#):
   - Funciones que devuelven los parámetros de un objetivo.
- [/kernel/wiki/categorias.tri](#):
   - Para las categorías disponibles desde la enciclopedia.
   - Sí, **tripilang** (los *.tri) no está documentado. Pero no es difícil.
- [/kernel/wiki/libros/*.tri](#):
   - Para los índices de artículos de los libros disponibles desde la enciclopedia.
- [/kernel/goals/goals.week](#):
   - Para adjuntar objetivos a fechas y días de semanas
   - Permite crear escuchas de barras en el widget de `calendario » después`.
   - Permite crear acciones pendientes a los días
      - se crean cuando se visita el día y se encuentra la coincidencia
   - Debe seguir la sintaxis de `weeklang`, lenguaje documentado en:
      - [./src/lsw-framework/src/apis/lsw-languages/weeklang/README.md](./src/lsw-framework/src/apis/lsw-languages/weeklang/README.md)

Seguramente hay más.

### Flujos ocultos o no intuitivos

- El botón con `🎲↗️`:
   - al clicar, en silencio se importan los `randomizables` que falten, como `Concepto`.
   - es el bloque `Load_secretly_random_actions_as_concepts` en el código en `lsw-agenda-acciones-viewer.js`.
- El boton de `Resetear` en *Configuraciones » Base de datos*:
   - borrará la base de datos si no hay conexiones extra:
   - pero puede que tengas que refrescar (o salir y entrar de la app) para que se pueda seguir usando la base de datos.
      - son cosas de *IndexedDB* y yo no puedo hacer nada con esto.

### Flujo funcional básico

- Se trataría de hacer el script de `weeklang` para que las barras se te vayan poniendo para tus cosas.
   - en el calendario, este botón: `🏁↗️`
   - está escondido, porque en principio te pones la rutina semanal y él ya te la va recordando.
- Y tienes luego para ir añadiendo información, organizándote una base de datos de artículos y libros, de momento.
- Y tienes el apartado de binarios también, para lanzar scripts rápidamente.

### Extras de interés

### Variables del editor en entorno normal

A parte de toda la API normal, con todas sus globales y demás, destacar:

```js
// Las básicas:
Vue.prototype.$lsw.toasts.collapse({});
this.$lsw;
lsw.toasts.send({
   title: "whatever",
   text: "whatever else",
});
Vue.prototype.$lsw.toasts.debug({});
await LswAndroid.eval(es6code);
await LswAndroid.evalFile(es6file);
// Si necesitas más:
await Vue.prototype.$lsw.dialogs.open({
   title: "título",
   template: `<pre class="codeblock">{{ typeof debuggable === 'string' ? debuggable : JSON.stringify(debuggable, null, 2) }}</pre>`,
   factory: {
      data: {
         debuggable: {}
      }
   }
});
LswDebugger.global.debug("aquí puede ir cualquier cosa")
LswDebugger.global.debug("y será accesible")
LswDebugger.global.debug("aunque acumules muchos logs")
LswDebugger.global.debug("porque se autoexpiran")
```



### Variables del editor en entorno android

En la versión de la *aplicación móvil* (solo Android) se carga:

  - [`cordova`](https://github.com/apache/cordova-js) accedible como variable global
  - [`rhino`](https://github.com/mozilla/rhino)
  - [`plugin-cordova-rhino`](https://github.com/mozilla/rhino)

#### Trucos de la app móvil en Android

Para invocar JavaScript en entorno `android/rhino` tienes los ganchos finales:

```js
LswAndroid.evalFile("/kernel/android/myscript.js");
LswAndroid.eval(function() {
   // @android-rhino-js
});
```

```js
cordova
cordova.plugins.Rhinobridge.evaluate(es5code);
applicationContext
Packages
System
Math
$RhinobridgePluginClass
$rhinobridgePlugin
$scope
$rhino
$webview /*
$webview.loadUrl("javascript:" + es5code);
*/
abg /*
abg instanceof class AndroidBridge {
   public Context getContext()
   public Object getSystemService(String name)
   public Class<?> getClass(String name) throws ClassNotFoundException
   public Class<?> forName(String name) throws ClassNotFoundException
   public void toast(String text, int duration)
   public String getPackageName()
   public Object getApplicationInfo()
   public Object getResources()
   public Object getAssets()
   public Object getContentResolver()
   public Object getApplicationContext()
}
*/
print('not seen anywhere')
evaluateByBrowser("alert('hello')");
```

