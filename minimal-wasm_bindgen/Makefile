all: web/build/minimal_bg.wasm 

web/build/minimal_bg.wasm: target/wasm32-unknown-unknown/release/minimal.wasm
	mkdir -p web/build
	~/.cargo/bin/wasm-bindgen --no-modules target/wasm32-unknown-unknown/release/minimal.wasm --out-dir web/build


target/wasm32-unknown-unknown/release/minimal.wasm: src/lib.rs
	cargo build --release --target wasm32-unknown-unknown

clean:
	rm -R target web/build/*

