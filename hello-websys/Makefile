all: web/build/hello_websys_bg.wasm 

web/build/hello_websys_bg.wasm: target/wasm32-unknown-unknown/release/hello_websys.wasm
	mkdir -p web/build
	~/.cargo/bin/wasm-bindgen --no-modules target/wasm32-unknown-unknown/release/hello_websys.wasm --out-dir web/build


target/wasm32-unknown-unknown/release/hello_websys.wasm: src/lib.rs
	cargo build --release --target wasm32-unknown-unknown

clean:
	rm -R target web/build/*

