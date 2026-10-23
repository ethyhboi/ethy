Item {
    anchors.fill: parent
    Column {
        anchors.margins: 16
        anchors.fill: parent
        spacing: 10
        Text {
            width: parent.width
            wrapMode: Text.WordWrap
            color: theme.primarytextcolor
            font.pixelSize: 16
            text: "Three independent Tuya canvas lamps are available: Sebs lamp, Sebs bedside lamp, and Sebs roof bulb. Start the local SignalRGB Tuya Canvas Bridge window before using them."
        }
        Text {
            color: theme.primarytextcolor
            font.pixelSize: 13
            text: "Drag each lamp independently in the SignalRGB layout."
        }
    }
}
