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
            text: "Two independent Tuya canvas lamps are available: Sebs lamp and Sebs bedside lamp. Start the local SignalRGB Tuya Canvas Bridge window before using them."
        }
        Text {
            color: theme.primarytextcolor
            font.pixelSize: 13
            text: "Drag each lamp independently in the SignalRGB layout."
        }
    }
}
