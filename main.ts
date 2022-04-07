namespace Fenrn {
    export function Sfdf(Cnt: number) {
        let x = 0
        while (x < Cnt) {
                while (pins.digitalReadPin(DigitalPin.P8) == 0) { }
                x = x + 1
        }
    }
}