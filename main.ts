namespace Sensor {
    /**
     * สำหรับ นับค่า Encoder จากขา P8 
     */
    //% block 
    export function Encoder(Cnt: number) {
        let x = 0
        while (x < Cnt) {
            while (pins.digitalReadPin(DigitalPin.P8) == 0) { }
            x = x + 1
            while (pins.digitalReadPin(DigitalPin.P8) == 1) { }
            x = x + 1
        }
    }
}