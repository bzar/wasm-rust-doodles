import "./build/hello_websys.js";

// Temporary workaround
delete WebAssembly.instantiateStreaming;

wasm_bindgen("./build/hello_websys_bg.wasm").then(() => {
  wasm_bindgen.greet("World!");
});
