import "./build/hello_world.js";

// Temporary workaround
delete WebAssembly.instantiateStreaming;

wasm_bindgen("./build/hello_world_bg.wasm").then(() => {
  wasm_bindgen.greet("World!");
});
