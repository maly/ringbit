let sonar = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
basic.forever(function () {
    sonar = RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm)
    if (sonar < 10 && sonar != 0) {
        RingbitCar.freestyle(0, 100)
        basic.pause(500)
    } else {
        RingbitCar.forward()
    }
})
