namespace Sensor {

    export function Encoder(Cnt: number) {
        let x = 0
        while (x < Cnt) {
            while (pins.digitalReadPin(DigitalPin.P8) == 0) { }
            x = x + 1
        }
    }
}
