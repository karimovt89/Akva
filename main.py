import eel


@eel.expose
def getData():
    return "true"




eel.init("html")
eel.start("index.html")

