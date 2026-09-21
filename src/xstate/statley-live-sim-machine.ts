const machine =   {
    id: "liveSimMachine",
    preserveActionOrder: !0,
    predictableActionArguments: !0,
    tsTypes: {},
    schema: {
        context: {},
        events: {},
        services: {}
    },
    initial: "idle",
    states: {
        idle: {
            on: {
                "Join live simulation": [{
                    target: "Checking live session exists",
                    actions: "setLiveSessionId",
                    cond: "hasLiveSessionId"
                }, {
                    target: "Waiting for live session id",
                    cond: "hasNoLiveSessionId"
                }],
                "Start live simulation": "Creating live simulation",
                Leave: {
                    target: "Leaving live simulation",
                    actions: "showLeftToast",
                    cond: "hasLiveSessionURL"
                }
            }
        },
        "Waiting for live session id": {
            on: {
                "Add live session id": {
                    target: "Checking live session exists",
                    actions: "setLiveSessionId"
                },
                Cancel: "idle"
            }
        },
        "Checking live session exists": {
            invoke: {
                src: "liveSessionExists",
                onDone: [{
                    target: "Joining live simulation",
                    cond: "liveSessionExists"
                }, {
                    target: "Leaving live simulation",
                    actions: "showSessionDoesNotExistToast"
                }],
                onError: "error"
            }
        },
        "Joining live simulation": {
            invoke: {
                src: "setLiveSessionUrl",
                onDone: {
                    target: "Awaiting party socket for joining",
                    actions: "setLiveSessionId"
                },
                onError: "error"
            }
        },
        "Awaiting party socket for joining": {
            tags: "Awaiting party socket",
            on: {
                "Add party socket": {
                    target: "Participating in live simulation",
                    actions: "setPartySocket"
                }
            }
        },
        "Participating in live simulation": {
            tags: "Live simulation active",
            on: {
                "Copy link to Clipboard": {
                    actions: ["copyLinkToClipboard", "showLinkCopiedToast"]
                },
                Leave: {
                    target: "Leaving live simulation",
                    actions: "showLeftToast"
                }
            },
            entry: ["startLiveMode", "showJoinToast"]
        },
        "Creating live simulation": {
            invoke: {
                src: "createLiveSessionUrl",
                onDone: {
                    target: "Awaiting party socket for hosting",
                    actions: "setLiveSessionId"
                },
                onError: "error"
            }
        },
        "Awaiting party socket for hosting": {
            tags: "Awaiting party socket",
            on: {
                "Add party socket": {
                    target: "Hosting live simulation",
                    actions: ["setLiveSessionId", "setPartySocket"]
                }
            }
        },
        "Hosting live simulation": {
            tags: "Live simulation active",
            on: {
                "Copy link to Clipboard": {
                    actions: ["copyLinkToClipboard", "showLinkCopiedToast"]
                },
                Leave: {
                    target: "Leaving live simulation",
                    actions: "showStopToast"
                }
            },
            entry: ["startLiveMode", "showStartToast"],
            exit: "stopLiveMode"
        },
        "Leaving live simulation": {
            invoke: {
                src: "removeLiveSessionUrl",
                onDone: "idle",
                onError: "error"
            },
            exit: ["leaveLiveMode", "removeLiveSessionId", "removePartySocket"]
        },
        error: {
            always: "idle",
            entry: "showErrorToast"
        }
    }
}