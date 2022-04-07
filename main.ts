//% weight=200 color=#ff0000 icon="\uf0e7"
namespace gggg {
        export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}