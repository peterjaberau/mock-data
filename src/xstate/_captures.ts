const captures = [
    {
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
    },
    {
        initial: "idle",
        context: {
            files: null,
            count: 0
        },
        schema: {
            events: {}
        },
        states: {
            idle: {},
            dragging: {
                on: {
                    dragleave: {
                        actions: {
                            count: e => e.count - 1
                        }
                    }
                },
                always: {
                    cond: e => 0 === e.count,
                    target: "idle"
                }
            },
            uploading: {
                invoke: {
                    src: "uploadAssets",
                    onDone: "idle"
                }
            }
        },
        on: {
            upload: {
                actions: {
                    files: (e, t) => t.files
                },
                target: ".uploading"
            },
            dragenter: {
                target: ".dragging",
                actions: {
                    count: e => e.count + 1
                }
            }
        }
    },
    {
        predictableActionArguments: !0,
        initial: "selectable",
        invoke: {
            src: {
                type: "keydown.space"
            }
        },
        states: {
            selectable: {
                initial: "idle",
                exit: "endSelection",
                states: {
                    idle: {
                        on: {
                            "drag.start": "selecting"
                        }
                    },
                    selecting: {
                        entry: "deselectAll",
                        on: {
                            "drag.dragging": {
                                actions: "select"
                            },
                            "drag.end": {
                                target: "idle",
                                actions: "endSelection"
                            }
                        }
                    }
                },
                on: {
                    "keydown.space": "pannable",
                    "pointerdown.middle": "pannable.panning",
                    "cursorMode.pan": "pannable.idle"
                }
            },
            pannable: {
                initial: "idle",
                states: {
                    idle: {
                        on: {
                            "drag.start": "panning"
                        }
                    },
                    panning: {
                        on: {
                            "drag.dragging": {
                                actions: "pan"
                            },
                            "drag.end": {
                                target: "idle",
                                actions: "endSelection"
                            }
                        }
                    }
                },
                entry: "enterPannable",
                on: {
                    "keyup.space": {
                        target: "selectable",
                        actions: "cancelPannable"
                    },
                    "pointerup.middle": {
                        target: "selectable",
                        actions: "cancelPannable"
                    },
                    "cursorMode.cancelPannable": "selectable"
                }
            }
        }
    },
    {
        id: "canvasInteractionsMachine",
        preserveActionOrder: !0,
        predictableActionArguments: !0,
        tsTypes: {},
        context: {
            ref: {
                current: null
            },
            viewBox: null,
            selectionBox: null,
            graphActorRef: {},
            contextMenuPoint: null,
            isUIHidden: !1,
            isGridHidden: !1,
            isMetaOnCanvas: !1,
            areEffectsHiddenOnCanvas: !1
        },
        schema: {
            context: {},
            events: {}
        },
        invoke: [
            {
                src: "keydown",
                actions: [
                    "interact.cancel", "interact.enter", "zoom.in", "zoom.out", "TOGGLE_IS_UI_HIDDEN"
                ],
            },
            {
                src: "copy",
                actions: [
                    "selection.copy", "selection.cut", "paste"
                ],
            },
            {
                src: "ArrowUp",
                actions: ["viewbox.move"]
            },
            {
                src: "ArrowLeft",
                actions: ["viewbox.move",]
            },
            {
                src: "ArrowDown",
                actions: ["viewbox.move",]
            },
            {
                src: "ArrowRight",
                actions: ["viewbox.move",]
            },
            {
                src: "Digit0",
                actions: ["zoom.set",]
            },
            {
                src: "Digit1",
                actions: ["fit_to_content"]
            },
            {
                src: "Digit2",
                actions: ["fit_to_selection"]
            },
            {
                src: "contextmenu",
                actions: ["CONTEXT_MENU"]
            },
        ],
        type: "parallel",
        states: {
            mode: {
                initial: "selectable",
                states: {
                    selectable: {},
                    pannable: {}
                },
                on: {
                    ENABLE_PANNING: ".pannable",
                    DISABLE_PANNING: ".selectable"
                }
            },
            panSwitcher: {
                initial: "lockable",
                states: {
                    lockable: {
                        initial: "released",
                        states: {
                            released: {
                                invoke: {
                                    id: "panTriggerListener",
                                },
                                on: {
                                    SPACEBAR_PRESSED: "spacebarPressed",
                                    WHEEL_PRESSED: "wheelPressed"
                                }
                            },
                            spacebarPressed: {
                                entry: [{
                                    "raise": {
                                        type: "ENABLE_PANNING",
                                        sessionSeed: null
                                    }
                                }],
                                exit: [
                                    {
                                        "raise": {
                                            type: "DISABLE_PANNING",
                                            sessionSeed: null
                                        }
                                    }

                                   ],
                                on: {
                                    SPACEBAR_RELEASED: "released"
                                },
                                invoke: {
                                    src: "keyup",
                                    actions: ["SPACEBAR_RELEASED"]
                                }
                            },
                            wheelPressed: {
                                entry: ["enablePanning"],
                                exit: [{
                                    raise: {
                                        type: "DISABLE_PANNING"
                                    }
                                }],
                                on: {
                                    PRESS_SESSION_STOPPED: "released"
                                }
                            }
                        },
                        on: {
                            ENABLE_PAN_MODE: "pan"
                        }
                    },
                    pan: {
                        entry: ["ENABLE_PANNING", "DISABLE_PANNING"],
                        on: {
                            DISABLE_PAN_MODE: "lockable"
                        }

                    }
                }
            }
        },
        on: {
            SET_VIEWBOX_SIZE: {
                actions: ["setViewBoxSize", "fitToContentAfterSetViewBox"]
            },
            fit_to_content: {
                actions: ["newViewBoxOnFitToContent"]
            },
            fit_to_selection: {
                actions: "fitToSelection"
            },
            "viewbox.move": {
                actions: "moveViewbox"
            },
            "zoom.set": {
                actions: "zoomSet"
            },
            "zoom.in": {
                cond: "e => !!e.ref.current && e.viewBox.zoom < 4",
                actions: "zoomIn"
            },
            "zoom.out": {
                cond: "e => !!e.ref.current && e.viewBox.zoom > .1",
                actions: "zoomOut"
            },
            CONTEXT_MENU: {
                actions: []
            },
            TOGGLE_IS_UI_HIDDEN: {
                actions: ["toggleIsUIHidden", "trackToggleUIHidden"]
            },
            TOGGLE_IS_GRID_HIDDEN: {
                actions: ["toggleIsGridHidden", "trackToggleGridHidden"]
            },
            TOGGLE_IS_META_ON_CANVAS: {
                actions: ["toggleIsMetaOnCanvas", "trackToggleMetaOnCanvas"]
            },
            TOGGLE_ARE_EFFECTS_HIDDEN_ON_CANVAS: {
                actions: ["toggleAreEffectsHiddenOnCanvas", "trackToggleEffectsHiddenOnCanvas"]
            },
            TOGGLE_IS_LEFT_PANEL_OPEN: {
                actions: "toggleIsLeftPanelOpen"
            }
        }
    },
    {
        predictableActionArguments: !0,
        preserveActionOrder: !0,
        invoke: [{
            id: "canvasInteractions",
            src: {
                selectionBox: null,
                ref: null,
                graphActorRef: "graphActorRef",
                viewBox: null,
                contextMenuPoint: null,
                isMetaOnCanvas: "t.showMeta",
                areEffectsHiddenOnCanvas: "!1",
                isGridHidden: "showGrid",
                isUIHidden: "!1",
                isLeftPanelOpen: "showLeftPanel"
            }
        }],
        initial: "designing",
        states: {
            designing: {
                initial: "idle",
                entry: [
                    {
                        activeState: void 0,
                        eventLog: [],
                        partySocket: void 0,
                        liveSessionId: void 0
                    }
                ],
                exit: [{
                    actions: ["deselectAll"],
                }],
                invoke: {
                    src: ["redo", "undo", "selectAll", "Delete", "Backspace"],

                },
                states: {
                    idle: {
                        on: {
                            "selectionBox.change": {
                                target: "selecting",
                                actions: []
                            }
                        }
                    },
                    selecting: {
                        on: {
                            "selectionBox.change": [{
                                cond: "",
                                actions: []
                            }, {
                                target: "idle",
                                actions: []
                            }],
                            "KEY.ESCAPE": "idle"
                        }
                    },
                    input: {
                        on: {
                            "INPUT.CANCEL": "idle"
                        },
                        always: {
                            target: "idle",
                            cond: ""
                        },
                        initial: "unknown",
                        states: {
                            unknown: {
                                always: [{
                                    target: "state",
                                    cond: ""
                                }]
                            },
                            edge: {
                                tags: "edgeInput"
                            },
                            newEdge: {
                                tags: "edgeInput",
                                on: {}
                            },
                            state: {
                                tags: "stateInput"
                            }
                        }
                    }
                },
                on: {
                    "KEY.DELETE": {
                        actions: "selection.delete"
                    },
                    "KEY.ESCAPE": {
                        actions: "deselectAll"
                    }
                }
            },
            simulating: {
                invoke: ["SIMULATION.EVENT.TRANSITION", "simActor.reset"],
                entry: [],
                exit: [],
                on: {
                    "mode.live.simulate.start": {

                    },
                    "mode.live.simulate.stop": {

                    },
                    CONFIG_UPDATED_BY_POSTMESSAGE: "designing",
                    "SIMULATION.RESET": {},
                    "SIMULATION.EVENTLOG.CLICK": { },
                    "SIMULATION.STATE": {

                    },
                    "SIMULATION.EVENT.CLICK": {

                    },
                    "SIMULATION.EVENT.TRANSITION": {

                    }
                }
            },
            inspecting: {
                on: {
                    "SIMULATION.STATE": {

                    },
                    "SIMULATION.EVENT.CLICK": {

                    },
                    "mode.design": {
                    },
                    "mode.simulate": {
                    }
                }
            },
            testing: {},
            running: {}
        },
        on: {
            GRAPH_ACTOR_UPDATED: {

            },
            "mode.simulate": {
                target: ".simulating",
                actions: ["focusSvgRef"]
            },
            "mode.design": ".designing",
            "mode.test": ".testing",
            "mode.inspect": ".inspecting",
            fit_to_content: {

            },
            "source.select": {

            },
            "source.deselect": {

            }
        }
    },
    {
        initial: "idle",
        predictableActionArguments: !0,
        preserveActionOrder: !0,
        tsTypes: {},
        schema: {
            context: {
                prompt: "",
                createNewMachine: !1
            },
            events: {},
            services: {}
        },
        states: {
            idle: {
                on: {
                    "prompt.change": {

                    },
                    generate: {
                        target: "generating"
                    },
                    "action.change": {

                    },
                    "create.new.machine": {

                    }
                },
                states: {
                    normal: {},
                    error: {
                        tags: "error"
                    }
                },
                initial: "normal"
            },
            generating: {
                initial: "pending",
                states: {
                    pending: {
                        after: {
                            2e4: "stillPending"
                        }
                    },
                    stillPending: {
                        tags: "stillPending"
                    }
                },
                invoke: {
                    src: "generateMachine",
                    onDone: [{
                        cond: "shouldCreateNewMachine",
                        target: "createNewMachine"
                    }, {
                        cond: "hasExistingMachine",
                        actions: ["storeDigraphConfig", "handleDigraphConfig"],
                        target: "autoSaveVersions"
                    }, {
                        cond: "hasExistingProject",
                        actions: ["storeDigraphConfig", "handleDigraphConfig"],
                        target: "createNewMachine"
                    }, {
                        actions: ["storeDigraphConfig", "handleDigraphConfig"],
                        target: "afterGenerate"
                    }],
                    onError: {
                        target: "idle.error"
                    }
                },
                on: {
                    cancel: "idle"
                }
            },
            autoSaveVersions: {
                invoke: {
                    src: "autoSaveVersions",
                    onDone: {
                        target: "afterGenerate"
                    }
                }
            },
            createNewMachine: {
                invoke: {
                    src: "createNewMachine",
                    onDone: "autoSaveCreatedMachineVersion"
                }
            },
            autoSaveCreatedMachineVersion: {
                invoke: {
                    src: "autoSaveCreatedMachineVersion",
                    onDone: {
                        target: "afterGenerate"
                    }
                }
            },
            afterGenerate: {
                invoke: {
                    src: "savePrompt",
                    onDone: [{
                        actions: ["updateVersionsList", "generationFinished"],
                        target: "idle"
                    }],
                    onError: {
                        target: "idle.error"
                    }
                }
            }
        },
        on: {
            reset: {
                actions: "resetContext"
            }
        }
    },
    {
        predictableActionArguments: !0,
        initial: "not copied",
        schema: {
            context: {
                text: ""
            },
            events: {}
        },
        on: {
            "text changed": {
                actions: "updateText"
            }
        },
        states: {
            "not copied": {
                on: {
                    copy: "copied"
                }
            },
            copied: {
                entry: "onCopy",
                after: {
                    copyThrottleDuration: "not copied"
                }
            }
        }
    },

    {
        schema: {
            events: {},
            context: {}
        },
        predictableActionArguments: !0,
        preserveActionOrder: !0,
        context: {
            selectedIndex: -1,
            createMoreSchemas: !1,
            newSchema: null,
            error: null
        },
        initial: "viewing",
        states: {
            viewing: {
                on: {
                    "search.start": "searching",
                    "search.toggle": "searching",
                    "addModal.open": "adding",
                    "editModal.open": {
                        target: "editing",

                    }
                }
            },
            addingCooldown: {
                after: {
                    50: "adding"
                }
            },
            adding: {
                entry: {
                    eventType: "",
                    eventSchema: {
                        type: "object",
                        properties: {},
                        description: ""
                    }
                },
                on: {
                    "addModal.close": {
                        target: "viewing",

                    },
                    createMoreSchemas: {

                    },
                    addEvent: [{
                        cond: "isDuplicateEventType",
                        actions: {
                            error: "An event with that name already exists. Either edit that event or pick a unique name"
                        }
                    }, {
                        cond: "isEmptyEventType",
                        actions: {
                            error: "Provide a unique event name"
                        }
                    }, {
                        target: "viewing",
                        cond: "e => !e.createMoreSchemas",
                        actions: [{
                            newSchema: {
                                eventType: "",
                                eventSchema: {
                                    type: "object",
                                    properties: {},
                                    additionalProperties: !1
                                }
                            },
                            error: null,
                            createMoreSchemas: !1
                        }]
                    }, {
                        target: "addingCooldown",
                        actions: ["onAdd", {
                            newSchema: {
                                eventType: "",
                                eventSchema: {
                                    type: "object",
                                    properties: {},
                                    additionalProperties: !1
                                }
                            },
                            error: null
                        }]
                    }],
                    "newSchema.change": {

                    }
                }
            },
            editing: {
                on: {
                    "editModal.close": {
                        target: "viewing",

                    },
                    "editingSchema.change": {
                        actions: "validateSchemaChange"
                    },
                    updateEvent: {
                        actions: "onUpdate"
                    },
                    deleteEvent: [{
                        cond: "isUsedInDiagram",
                        actions: [{
                            error: "This event is used in the diagram and can not be deleted."
                        }]
                    }, {
                        actions: [{
                            error: null
                        }, "onDelete"],
                        target: "viewing"
                    }]
                },

            },
            searching: {
                tags: ["searching"],
                on: {
                    "search.stop": "viewing",
                    "search.toggle": "viewing"
                }
            }
        }
    },

    {
        id: "GitHub integration",
        predictableActionArguments: !0,
        tsTypes: {},
        schema: {
            events: {},
            services: {}
        },
        initial: "idle",
        on: {
            Restart: "Check user has access"
        },
        states: {
            idle: {},
            "Check user has access": {
                tags: ["loading"],
                invoke: {
                    src: "checkSubscription",
                    onDone: [{
                        target: "Check GitHub token",
                        cond: "hasPaidSubscription"
                    }, {
                        target: "No subscription"
                    }],
                    onError: "Not logged in"
                }
            },
            "Check GitHub token": {
                tags: ["loading"],
                invoke: {
                    src: "checkGitHubToken",
                    onDone: [{
                        target: "Integration ready",
                        cond: "gitHubTokenIsValid"
                    }, {
                        target: "Missing integration"
                    }],
                    onError: "Missing integration"
                }
            },
            "Missing integration": {
                on: {
                    "Install integration": "Installing integration"
                }
            },
            "Installing integration": {
                tags: ["loading"],
                invoke: {
                    src: "installGitHubIntegration"
                }
            },
            "Not logged in": {},
            "No subscription": {},
            "Integration ready": {
                type: "final",
                entry: "notifyIntegrationReady"
            }
        }
    },
    {
        id: "GitHub Connect Repo",
        preserveActionOrder: !0,
        predictableActionArguments: !0,
        schema: {
            context: {},
            events: {},
            services: {}
        },
        tsTypes: {},
        context: null,
        initial: "Idle",
        on: {
            "Reset all": {
                actions: "resetContext",
                target: "Idle"
            },
            "Clear branches search query": {
                actions: "clearBranchSearchQuery"
            }
        },
        states: {
            Idle: {
                on: {
                    "Start GitHub Connect": {
                        target: "Waiting for GitHub token",
                        actions: [{
                            flowType: "connecting"
                        }, "trackEvent"]
                    },
                    "Open GitHub settings": {
                        target: "Waiting for GitHub token",
                        actions: [{
                            flowType: "modifying"
                        }, "setExistingProject", "setEditorReloadFn", "trackEvent"]
                    },
                    "Sync with GitHub from Editor": {
                        actions: [{
                            syncSource: "Editor"
                        }, "setExistingProject", "setEditorReloadFn", "trackEvent"],
                        target: "Syncing with GitHub"
                    }
                },
                description: "By default, there are no modals open for this feature and everything is hidden."
            },
            "Syncing with GitHub": {
                tags: "syncing-project",
                invoke: {
                    src: "syncWithGithub",
                    onDone: {
                        target: "Idle",
                        cond: null,
                        actions: ["setOnLatestHeadTrue", "setLastSyncedData", "reloadEditor", "showSyncSuccessToast"]
                    },
                    onError: {}
                }
            },
            "Syncing with GitHub from Settings": {
                tags: ["github-settings", "syncFromFilesInProgress"],
                invoke: {
                    src: "syncWithGithub",
                    onDone: {
                        target: "Displaying GitHub Settings.In sync",
                        actions: ["setOnLatestHeadTrue", "setLastSyncedData", "reloadEditor"]
                    },
                    onError: {}
                }
            },
            "Waiting for GitHub token": {
                tags: ["github-token", "waiting-for-github-token", "loading"],
                on: {
                    "Set token": [{
                        target: "Fetching branches",
                        actions: "initOctokit",
                        cond: "flow is branching"
                    }, {
                        target: "Fetching existing project repo",
                        actions: "initOctokit",
                        cond: "flow is modifying"
                    }, {
                        target: "Fetching repos",
                        actions: "initOctokit"
                    }]
                }
            },
            "Fetching repos": {
                tags: ["loading", "show-repos"],
                invoke: {
                    src: "fetchRepos",
                    onDone: {
                        target: "Displaying repos",
                        actions: ["setRepos", "setCurrentRepos"]
                    }
                }
            },
            "Displaying repos": {
                tags: "show-repos",
                on: {
                    "Select repo": {
                        target: "Fetching branches",
                        actions: "setSelectedRepo"
                    },
                    "Set repos search query": {

                        target: "Delay repo search"
                    }
                }
            },
            "Delay repo search": {
                tags: "show-repos",
                after: {
                    300: {
                        target: "Searching repos"
                    }
                }
            },
            "Searching repos": {
                tags: "show-repos",
                entry: "setCurrentRepos",
                always: "Displaying repos"
            },
            "Fetching branches": {
                tags: ["loading", "show-branches"],
                invoke: {
                    src: "fetchBranches",
                    onDone: {
                        target: "Displaying branches",
                        actions: ["setBranches", "setCurrentBranches"]
                    }
                }
            },
            "Displaying branches": {
                tags: "show-branches",
                on: {
                    "Select branch": {
                        target: "Fetching branch",
                        actions: "setSelectedBranch"
                    },
                    "Go back": {
                        cond: "flow is connecting",
                        target: "Displaying repos",
                        actions: ["clearRepoSearchQuery", "clearBranchSearchQuery", {
                            currentBranches: []
                        }]
                    },
                    "Set branches search query": {

                        target: "Delay branch search"
                    }
                }
            },
            "Delay branch search": {
                tags: "show-branches",
                after: {
                    300: {
                        target: "Searching branches"
                    }
                }
            },
            "Searching branches": {
                tags: "show-branches",
                entry: "setCurrentBranches",
                always: "Displaying branches"
            },
            "Fetching branch": {
                tags: ["show-branches", "loading", "fetching-branch"],
                invoke: {
                    src: "fetchBranch",
                    onDone: {
                        actions: "setBranchFiles",
                        target: "Displaying files"
                    }
                }
            },
            "Displaying files": {
                tags: "show-files",
                on: {
                    "Change selected files or folders": {
                        actions: "updateSelectedFoldersAndFiles",
                        target: ".Validating file selection",
                        description: "The user can continue to toggle folders on/off to include them in the files to be scanned. Previously scanned files will be cleared on every change but we can think about how to cache those results, per file, in the future."
                    },
                    "Expand all folders": {
                        actions: "setExpandedFolderIds"
                    },
                    "Collapse all folders": {
                        actions: "setExpandedFolderIds"
                    },
                    "Deselect all files and folders": {
                        actions: "deselectFilesAndFolders",
                        target: ".Validating file selection"
                    },
                    "Set path for new files": {
                        actions: ["setPathForNewFiles", "setPathForNewFilesIsValid", "trackEvent"]
                    },
                    "Go back": [{
                        cond: "flow is modifying",
                        target: "Displaying GitHub Settings"
                    }, {
                        target: "Displaying branches",
                        actions: ["deselectFilesAndFolders", "clearBranchSearchQuery", "clearRepoBranchFileTree"]
                    }],
                    "Toggle initial autoSync": {
                        actions: []
                    }
                },
                states: {
                    "Can not create project": {},
                    "Can create or update project": {
                        on: {
                            "Create connected project": "#GitHub Connect Repo.Creating repo project",
                            "Add additional connected branch": {
                                target: "#GitHub Connect Repo.Adding additional branch",
                                actions: "trackEvent"
                            },
                            "Modify file and folder selection": "#GitHub Connect Repo.Updating repo project settings",
                            "Can not create project": "Can not create project"
                        }
                    },
                    "Validating file selection": {
                        always: [{
                            target: "Can create or update project",
                            cond: "has valid selected files"
                        }, {
                            target: "Can not create project"
                        }]
                    }
                },
                initial: "Validating file selection"
            },
            "Creating repo project": {
                tags: "creating-project",
                invoke: {
                    src: "createProjectRepo",
                    onDone: [{
                        cond: "(e, t) => t.data.machinesWithError.length > 0",
                        target: "Finished connecting project with errored machines",
                        actions: ["setNewlyCreatedProjectResult"]
                    }, {
                        target: "Finished connecting project"
                    }],
                    onError: {
                        actions: "setError",
                        target: "Show error"
                    }
                }
            },
            "Adding additional branch": {
                tags: "creating-project",
                invoke: {
                    src: "addAdditionalBranch",
                    onDone: "Finished connecting project",
                    onError: {
                        actions: "setError",
                        target: "Show error"
                    }
                }
            },
            "Updating repo project settings": {
                tags: "updating-repo-project",
                invoke: {
                    src: "updateRepoProjectSettings",
                    onError: {
                        actions: "setError",
                        target: "Show error"
                    },
                    onDone: [{
                        target: "Delete Confirmation Prompt",
                        cond: "(e, t) => t.data.dryRun && t.data.machinesToDeleteCount > 0",
                        actions: {
                            machinesToDelete: "(e, t) => t.data.machinesToDelete"
                        }
                    }, {
                        target: "Finished updating project"
                    }]
                }
            },
            "Finished connecting project": {
                tags: ["finished-connecting"],
                entry: "redirectToEditorPage"
            },
            "Finished connecting project with errored machines": {
                tags: ["finished-connecting-with-errors"]
            },
            "Finished updating project": {
                entry: ["showSuccessfulUpdateToast", {
                    type: "Reset all"
                }, "reloadEditor"]
            },
            "Show error": {
                tags: "error",
                on: {
                    "Go back": {
                        target: "Displaying files",
                        actions: [{
                            errorMessage: ""
                        }]
                    }
                }
            },
            "Show fatal error": {
                tags: "error"
            },
            "Fetching existing project repo": {
                tags: ["loading-existing-repo", "loading"],
                invoke: {
                    src: "fetchExistingProjectRepo",
                    onDone: {
                        actions: ["setExistingProjectRepo", "setOnLatestHeadFlag"],
                        target: "Displaying GitHub Settings"
                    },
                    onError: {
                        target: "Show fatal error",
                        actions: "setError"
                    }
                }
            },
            "Refetch project repo branch": {
                tags: ["show-files", "fetching-branch"],
                invoke: {
                    src: "refetchBranch",
                    onDone: {
                        actions: "setRefetchedBranchFilesFoldersAndSelections",
                        target: "Displaying files"
                    }
                }
            },
            "Delete Confirmation Prompt": {
                tags: "delete-confirmation",
                on: {
                    "Confirm update with machine deletion": {
                        target: "Updating repo project settings"
                    },
                    "Cancel update to project": {
                        actions: {
                            type: "Reset all"
                        }
                    }
                }
            },
            "Displaying GitHub Settings": {
                tags: ["github-settings"],
                states: {
                    "Evaluating sync status": {
                        always: [{
                            target: "In sync",
                            cond: "is current with latest SHA"
                        }, "Out of sync"]
                    },
                    "In sync": {
                        tags: ["in-sync"],
                        on: {
                            "Show file tree to modify selections": {
                                target: "#GitHub Connect Repo.Refetch project repo branch",
                                actions: "trackEvent"
                            }
                        }
                    },
                    "Out of sync": {
                        tags: ["out-of-sync"]
                    }
                },
                initial: "Evaluating sync status",
                on: {
                    "Change autoSync setting": {
                        target: "Changing AutoSync Setting"
                    },
                    "Sync from GitHub Settings": {
                        actions: [{
                            syncSource: "GitHub Settings Modal"
                        }, "trackEvent"],
                        target: "Syncing with GitHub from Settings"
                    },
                    "Open UI to add connected branch": {
                        target: "Fetching branches",
                        actions: [{
                            flowType: "branching"
                        }, "setSelectedRepo", "trackEvent"]
                    }
                }
            },
            "Changing AutoSync Setting": {
                tags: ["github-settings"],
                invoke: {
                    src: "changeAutoSyncSetting",
                    onDone: {
                        target: "Displaying GitHub Settings",
                        actions: "setAutoUpdateSetting"
                    }
                }
            }
        }
    },
    {
        predictableActionArguments: !0,
        tsTypes: {},
        schema: {
            context: {},
            events: {},
            services: {}
        },
        initial: "fetchSession",
        context: {
            user: null
        },
        invoke: {
            events: ["SIGNED_IN", "SIGNED_OUT", "PASSWORD_RECOVERY"],

        },
        on: {
            __SIGNED_IN: {
                target: ".loggedIn"
            }
        },
        states: {
            fetchSession: {
                tags: "pending",
                invoke: {
                    src: "fetchSession",
                    onDone: [{
                        target: "loggedIn",
                        cond: "hasSession"
                    }, {
                        target: "loggedOut",
                        cond: "hasNoSession",
                        actions: "clearData"
                    }]
                }
            },
            loggedIn: {
                on: {
                    UPDATE_USER_CACHE: {
                        actions: "updateUserData",
                        cond: "hasUser"
                    },
                    __SIGNED_OUT: {
                        target: "signingOut"
                    },
                    SIGN_OUT: {
                        target: "signingOut",
                        actions: "assignRedirectTo"
                    },
                    __PASSWORD_RECOVERY: {
                        actions: "goToPasswordRecovery"
                    }
                },
                exit: "clearData",
                initial: "fetchingUserDetails",
                states: {
                    fetchingUserDetails: {
                        invoke: {
                            src: "fetchUserDetails",
                            onDone: {
                                target: "idle",
                                actions: ["assignUserDetailsToContext", "assignUserDetailsToAnalytics"]
                            }
                        }
                    },
                    idle: {
                        on: {
                            REFETCH_USER_DETAILS: {
                                target: "fetchingUserDetails"
                            }
                        }
                    }
                }
            },
            signingOut: {
                tags: "pending",
                invoke: {
                    src: "signOutSupabase",
                    onDone: {
                        target: "loggedOut",
                        actions: ["clearRedirectTo", "showLoggedOutToast"]
                    }
                }
            },
            loggedOut: {
                on: {
                    SIGN_IN: {
                        actions: "goToLoginPage"
                    }
                }
            }
        }
    },
    {
        id: "messageMachine",
        predictableActionArguments: !0,
        tsTypes: {},
        schema: {
            events: {}
        },
        initial: "listening",
        states: {
            listening: {}
        }
    },
    {
        predictableActionArguments: "!0",
        initial: "awaitingFirstTotalEntries",
        context: {
            currentPage: null,
            entriesPerPage: null,
            totalEntries: 0
        },
        on: {
            ENTRIES_PER_PAGE_CHANGED: {

            },
            TOTAL_ENTRIES_CHANGED: {
                target: ".idle",
                cond: "",
                actions: []
            }
        },
        states: {
            awaitingFirstTotalEntries: {
                on: {
                    SET_PAGE: {

                    }
                }
            },
            idle: {
                always: {
                    cond: "",
                    actions: [{
                        currentPage: 0
                    }, "onPageChange"]
                },
                on: {
                    PREV_PAGE: {
                        actions: ["onPageChange"]
                    },
                    NEXT_PAGE: {
                        actions: ["onPageChange"]
                    },
                    GO_TO_PAGE: {
                        actions: ["onPageChange"]
                    }
                }
            }
        }
    },
    {
        id: "userPreferences",
        predictableActionArguments: !0,
        schema: {
            events: {},
            context: {}
        },
        tsTypes: {},
        initial: "idle",
        context: {
            showCanvasTranslucency: !0
        },
        states: {
            idle: {
                on: {
                    "canvas.translucency.toggle": {
                        actions: "toggleCanvasTranslucency"
                    }
                }
            }
        }
    },
    {
        initial: "idle",
        predictableActionArguments: !0,
        schema: {
            context: {},
            events: {},
            services: {}
        },
        context: {
            id: "",
            affectedEntities: {}
        },
        tsTypes: {},
        states: {
            idle: {
                entry: {
                    id: ""
                },
                on: {
                    DELETE: {
                        target: "fetchType",

                    }
                }
            },
            fetchType: {
                tags: "pending",
                invoke: {
                    src: "getTypeName",
                    onDone: {
                        target: "checkingRelatedEntities",
                        actions: "setEntityType"
                    },
                    onError: {
                        target: "idle",
                        actions: "showErrorMessage"
                    }
                }
            },
            checkingRelatedEntities: {
                tags: ["modalOpen", "pending"],
                invoke: {
                    src: "preDelete",
                    onDone: {
                        target: "awaitingUser",
                        actions: "setAffectedEntities"
                    },
                    onError: {
                        target: "awaitingUser",
                        actions: "showErrorMessage"
                    }
                }
            },
            awaitingUser: {
                tags: "modalOpen",
                on: {
                    CONFIRM: [{
                        target: "deletePending",
                        cond: "hasNoAffectedEntities"
                    }, {
                        target: "awaitingExtraApproval",
                        cond: "hasAffectedEntities"
                    }],
                    CANCEL: "idle"
                }
            },
            awaitingExtraApproval: {
                tags: "modalOpen",
                on: {
                    CONFIRM: "deletePending",
                    CANCEL: "idle"
                }
            },
            deletePending: {
                tags: ["modalOpen", "pending"],
                invoke: {
                    src: "delete",
                    onDone: {
                        target: "idle",
                        actions: "onSuccess"
                    },
                    onError: {
                        target: "awaitingUser",
                        actions: "showErrorMessage"
                    }
                }
            }
        },
        id: "Delete machine"
    },
    {
        predictableActionArguments: !0,
        context: {
            undecidedConsents: [],
            handledConsentIds: []
        },
        tsTypes: {},
        schema: {
            context: {},
            events: {},
            services: {}
        },
        id: "Consent Machine",
        initial: "Checking number of undecided consents",
        states: {
            "Checking number of undecided consents": {
                on: {
                    "User has undecided consents": {
                        target: "Showing Consent Modal"
                    }
                }
            },
            "Showing Consent Modal": {
                initial: "Loading undecided consents",
                states: {
                    "Loading undecided consents": {
                        invoke: {
                            src: "getUndecidedConsents",
                            onDone: [{
                                actions: "setUndecidedConsents",
                                target: "Showing undecided consents"
                            }],
                            onError: [{
                                actions: "setError",
                                target: "#Consent Machine.Error"
                            }]
                        }
                    },
                    "Showing undecided consents": {
                        on: {
                            "Handle consent": {
                                target: "Handling consent"
                            }
                        }
                    },
                    "Handling consent": {
                        entry: "increaseNumberOfConsentsHandled",
                        invoke: {
                            src: "handleConsent",
                            onDone: [{
                                cond: "noMoreConsentsToHandle",
                                target: "#Consent Machine.All Consents Handled"
                            }, {
                                cond: "hasMoreConsentsToHandle",
                                target: "Showing undecided consents",
                                actions: "goToNextStep"
                            }],
                            onError: [{
                                actions: ["setError", "decreaseNumberOfConsentsHandled"],
                                target: "#Consent Machine.Error"
                            }]
                        }
                    }
                }
            },
            Error: {
                on: {
                    Retry: {
                        actions: "removeError",
                        target: "Showing Consent Modal"
                    }
                }
            },
            "All Consents Handled": {
                type: "final"
            }
        }
    },
    {
        id: "LoggedOut Modal",
        predictableActionArguments: "!0",
        preserveActionOrder: "!0",
        states: {
            Opened: {
                on: {
                    Close: {
                        target: "Closed"
                    },
                    "Click to learn more": {
                        target: "Closed"
                    }
                }
            },
            Closed: {
                on: {
                    Open: {
                        target: "Opened",
                        actions: ["setFeatureType"]
                    }
                },
                entry: "clearFeatureType"
            }
        },
        context: {
            featureType: null
        },
        schema: {
            events: {},
            context: {}
        },
        tsTypes: {},
        initial: "Closed"
    },


    {
        initial: "idle",
        predictableActionArguments: !0,
        states: {
            idle: {
                on: {
                    pointerdown: "pending"
                }
            },
            pending: {
                on: {
                    pointermove: "moving",
                    pointerup: "clicked"
                }
            },
            moving: {
                on: {
                    pointerup: "idle",
                    pointerdown: "pending"
                }
            },
            clicked: {
                entry: "onClick",
                on: {
                    blur: "idle"
                }
            }
        }
    },
    {
        initial: "unfocused",
        context: {},
        predictableActionArguments: !0,
        on: {
            VALUE_CHANGED_FROM_PARENT: {
                actions: null
            }
        },
        states: {
            unfocused: {
                on: {
                    FOCUS: {
                        target: "focused"
                    }
                }
            },
            focused: {
                on: {
                    BLUR: {
                        target: "unfocused"
                    },
                    CHANGE: {
                        actions: [null]
                    }
                },
                initial: "closed",
                states: {
                    closed: {
                        on: {
                            CHANGE: {
                                target: "open",
                                actions: [null]
                            },
                            DOWN_ARROW: {
                                target: "open",
                                actions: ["focusFirstOptionAfterTimeout"]
                            }
                        }
                    },
                    open: {
                        on: {
                            PICK_FROM_LIST: {
                                target: "closed",
                                actions: [ "focusInput", "onChange"]
                            },
                            UP_ARROW: {
                                actions: "focusPrevOption"
                            },
                            DOWN_ARROW: {
                                actions: "focusNextOption"
                            }
                        }
                    }
                }
            }
        }
    }
]



const machine1 = {
    setup: {
        types: {
            events: {},
            context: {}
        },
        guards: {
            hasAlternateFeatures: {}
        },
        actions: {
            trackOpenUpgradeModal:  {

            }
            ,
            trackNextFeatureClick: e => {
            }
            ,
            trackPreviousFeatureClick: e => {
            }
            ,
            trackUpgradeModalLearnMoreClick: {}
            ,
            trackCloseUpgradeModal: e => {}
            ,
            setHasLeftPrimaryFeature: {},
            setFeatureId: {},
            setCurrentlyShownFeatureId: {},
            reset: {}
        }
    },
    createMachine: {
        id: "Upgrade Modal",
        context: {
            featureId: null,
            alternateFeatureIds: [],
            hasLeftPrimaryFeature: !1
        },
        initial: "Closed",
        states: {
            Opened: {
                on: {
                    Close: {
                        target: "Closed",
                        actions: ["trackCloseUpgradeModal"]
                    },
                    "Click to learn more": {
                        target: "Closed",
                        actions: ["trackUpgradeModalLearnMoreClick"]
                    },
                    "Next feature": {
                        guard: "hasAlternateFeatures",
                        actions: ["setCurrentlyShownFeatureId", "setHasLeftPrimaryFeature", "trackNextFeatureClick"]
                    },
                    "Previous feature": {
                        guard: "hasAlternateFeatures",
                        actions: ["setCurrentlyShownFeatureId", "trackPreviousFeatureClick"]
                    }
                }
            },
            Closed: {
                entry: "reset",
                on: {
                    Open: {
                        target: "Opened",
                        actions: [{
                            type: "setFeatureId",
                            params: e => {

                            }
                        }, "trackOpenUpgradeModal"]
                    }
                }
            }
        }
    }

}