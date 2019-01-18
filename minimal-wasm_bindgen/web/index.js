import "./build/minimal.js";

// Temporary workaround
delete WebAssembly.instantiateStreaming;

wasm_bindgen("./build/minimal_bg.wasm").then(() => {
  console.log(wasm_bindgen.add(17, 27));
});
