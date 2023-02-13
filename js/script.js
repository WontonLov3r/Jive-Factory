document.getElementById("comingUpContent").style.display="none"
document.getElementById("pastEventsContent").style.display="none"
document.getElementById("eventsWeekTab").className = "accordionPanelTab highlight"

const hidePanels = () => {
    document.getElementById("comingUpContent").style.display="none"
    document.getElementById("pastEventsContent").style.display="none"
    document.getElementById("eventsWeekContent").style.display = "none"
    document.getElementById("comingUpTab").className = "accordionPanelTab"
    document.getElementById("pastEventsTab").className = "accordionPanelTab"
    document.getElementById("eventsWeekTab").className = "accordionPanelTab"
}

const showComingUp = () => {
    hidePanels()
    document.getElementById("comingUpContent").style.display="block"
    document.getElementById("comingUpTab").className = "accordionPanelTab highlight"
}

const showPastEvents = () => {
    hidePanels()
    document.getElementById("pastEventsContent").style.display="block"
    document.getElementById("pastEventsTab").className = "accordionPanelTab highlight"
}

const showEvents = () => {
    hidePanels()
    document.getElementById("eventsWeekContent").style.display="block"
    document.getElementById("eventsWeekTab").className = "accordionPanelTab highlight"
}