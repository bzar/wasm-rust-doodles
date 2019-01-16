all: web/build/hello_world_bg.wasm 

web/build/hello_world_bg.wasm: target/wasm32-unknown-unknown/debug/hello_world.wasm
	mkdir -p web/build
	~/.cargo/bin/wasm-bindgen --no-modules target/wasm32-unknown-unknown/debug/hello_world.wasm --out-dir web/build


target/wasm32-unknown-unknown/debug/hello_world.wasm: src/lib.rs
	cargo build --target wasm32-unknown-unknown

clean:
	rm -R target web/build/*

