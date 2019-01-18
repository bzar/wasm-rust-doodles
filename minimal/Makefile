all: web/build/minimal.wasm

web/build/minimal.wasm: target/wasm32-unknown-unknown/release/minimal.wasm
	mkdir -p web/build
	cp target/wasm32-unknown-unknown/release/minimal.wasm web/build/

target/wasm32-unknown-unknown/release/minimal.wasm: src/lib.rs
	cargo build --release --target wasm32-unknown-unknown

clean:
	rm -R target web/build

