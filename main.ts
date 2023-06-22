function 모션4 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(3000)
    maqueen.motorStop(maqueen.Motors.All)
    radio.sendString("E")
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    basic.pause(7000)
}
radio.onReceivedString(function (receivedString) {
    while (receivedString == "D") {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
    if (receivedString == "B") {
        모션2()
        radio.sendString("C")
    } else if (receivedString == "D") {
        basic.showIcon(IconNames.Happy)
        모션4()
    } else {
    	
    }
})
function 모션2 () {
    for (let index = 0; index < 6; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        basic.pause(300)
        maqueen.motorStop(maqueen.Motors.All)
    }
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(3000)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.setGroup(5)
basic.showNumber(2)
