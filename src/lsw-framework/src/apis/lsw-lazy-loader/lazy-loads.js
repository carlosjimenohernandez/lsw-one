(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswLazyLoads'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswLazyLoads'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  // @code.start: LswLazyLoads class | @section: Lsw LazyLoader API » LswLazyLoads class
  
  LswLazyLoader.global.register({
    alias: "highlight.js:global",
    url: "assets/lib/highlight/highlight.js",
    confirmer: () => typeof hljs !== "undefined",
    getter: () => hljs,
    type: "scriptSrc",
  });
  
  LswLazyLoader.global.register({
    alias: "highlight.js:themes:default",
    url: "assets/lib/highlight/styles/default.min.css",
    type: "linkStylesheet",
    once: true,
  });
  
  LswLazyLoader.global.register({
    alias: "highlight.js:themes:monokai",
    url: "assets/lib/highlight/styles/monokai.min.css",
    type: "linkStylesheet",
    once: true,
  });
  
  LswLazyLoader.global.register({
    alias: "pegjs",
    url: "assets/lib/pegjs/pegjs.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof pegjs !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "beautifier",
    url: "assets/lib/beautifier/beautifier.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof beautifier !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "babel",
    url: "assets/lib/babel/babel.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof Babel !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "eruda",
    url: "assets/lib/eruda/eruda.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof eruda !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "jmespath",
    url: "assets/lib/jmespath/jmespath.min.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof jmespath !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "jquery",
    url: "assets/lib/jquery/jquery-v3.7.1.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof jQuery !== "undefined",
  });
  
  LswLazyLoader.global.register({
    alias: "qunit.js",
    url: "assets/lib/qunit/qunit.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof QUnit !== "undefined",
  });

  LswLazyLoader.global.register({
    alias: "qunit.css",
    url: "assets/lib/qunit/qunit.css",
    type: "linkStylesheet",
    once: true,
    confirmer: () => typeof QUnit !== "undefined",
  });

  LswLazyLoader.global.register({
    alias: "ejs",
    url: "assets/lib/ejs/ejs.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof ejs !== "undefined",
  });

  LswLazyLoader.global.register({
    alias: "sqlite3",
    url: "assets/lib/sqlite/sqlite3.js",
    type: "scriptSrc",
    once: true,
    confirmer: () => typeof sqlite3InitModule !== "undefined",
  });

  LswLazyLoader.global.register({
    alias: "lsw-sqlite",
    url: "assets/lib/lsw-sqlite/lsw-sqlite.dist.js",
    type: "scriptAsync",
    once: true,
    confirmer: () => typeof LswSqlite !== "undefined",
  });

  class LswLazyLoads {

    static loadHighlightJs() {
      return Promise.all([
        LswLazyLoader.global.load("highlight.js:global"),
        // LswLazyLoader.global.load("highlight.js:themes:default"),
        LswLazyLoader.global.load("highlight.js:themes:monokai"),
      ]).then(() => {
        hljs.highlightAll();
      });
    }

    static loadPegjs() {
      return LswLazyLoader.global.load("pegjs");
    }

    static loadBeautifier() {
      return LswLazyLoader.global.load("beautifier");
    }

    static loadHtml2Pdf() {
      return LswLazyLoader.global.load("html2pdf");
    }

    static loadBabel() {
      return LswLazyLoader.global.load("babel");
    }

    static loadEruda() {
      return LswLazyLoader.global.load("eruda");
    }

    static loadJmespath() {
      return LswLazyLoader.global.load("jmespath");
    }

    static loadJquery() {
      return LswLazyLoader.global.load("jquery");
    }

    static loadQunit() {
      return Promise.all([
        LswLazyLoader.global.load("jquery"),
        LswLazyLoader.global.load("qunit.css"),
        LswLazyLoader.global.load("qunit.js"),
      ]);
    }

    static loadEjs() {
      return LswLazyLoader.global.load("ejs");
    }

    static async loadSqlite() {
      if(!("sqlite3" in window)) {
        await LswLazyLoader.global.load("sqlite3");
        const sqlite3 = await sqlite3InitModule();
        Export_globally_sqlite3: {
          window.sqlite3 = sqlite3;
        }
      }
      if(!("LswSqlite" in window)) {
        await LswLazyLoader.global.load("lsw-sqlite");
      }
      return LswSqlite;
    }

  };

  return LswLazyLoads;

  // @code.end: LswLazyLoads class

});
