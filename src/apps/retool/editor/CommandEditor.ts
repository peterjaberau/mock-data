const editorSidebarConfig = {
  props: {
    canvasContents: null,
    customInspector: null,
    editorSidebarConfig: {
      "Add": {
        "icon": "PlusCircle",
        "position": "top",
        "shortcutKeys": "⇧⌘A"
      },
      "Pages": {
        "icon": "Note",
        "position": "top",
        "displayName": "Pages"
      },
      "Explorer": {
        "icon": "BoundingBox",
        "position": "top",
        "shortcutKeys": "⇧⌘D",
        "displayName": "Component tree"
      },
      "Code": {
        "icon": "Code",
        "position": "top",
        "shortcutKeys": "⇧⌘E"
      },
      "AppStructure": {
        "icon": "TreeView",
        "position": "top",
        "displayName": "App structure"
      },
      "Functions": {
        "icon": "Function",
        "position": "top",
        "displayName": "Functions"
      },
      "Search": {
        "icon": "MagnifyingGlass",
        "position": "top",
        "displayName": "Code search",
        "shortcutKeys": "⇧⌘F"
      },
      "StateTab": {
        "icon": "CodeBlock",
        "position": "top",
        "displayName": "State"
      },
      "History": {
        "icon": "ClockCountdown",
        "position": "top",
        "displayName": "Releases and history"
      },
      "Settings": {
        "icon": "Gear",
        "position": "top",
        "displayName": "App settings",
        "staticWidth": 670
      },
      "AICopilot": {
        "icon": "FeatureAI",
        "position": "bottom",
        "displayName": "Assist (Beta)",
        "shortcutKeys": "⌘I",
        "minWidth": 500,
        "maxWidth": 800,
        "buttonDarkenedBackground": "var(--assist-blue-100)"
      }
    }
  }
}