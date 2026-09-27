
export const CommandEditor = {
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
  },

  children: [
    "CommandEditorShortcuts",
    "EditorSidebarPanel",
    "CommandEditorEditor"
  ]
}

export const CommandEditorShortcuts = {
  "sidebarConfig": {
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
  },
  "selectedTab": "Add",
  "isOpen": true,
  "isMultipageApp": true,
  "migrateToMultipageCTAEnabled": false,
  "hasAnyAssistAccess": true
};

export const EditorSidebarPanel = {
  config: {
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
  },
  staticWidthContent: false,

  children: [
    "CreateComponentPanel",
    "EditorPagesPanel"
  ]
}

export const CreateComponentPanel = {
  boundaryName: "CreateComponentPanel",
  children: ["WidgetPickerContainer"]

}
export const EditorPagesPanel = {
  title: "Pages",
  children: ["EditorPagesTree"]
}
export const EditorPagesTree = {
  data: [
    {
      "id": "README",
      "label": "README",
      "level": 0,
      "childrenIds": [],
    },
    {
      "id": "Main",
      "label": "Main",
      "level": 0,
      "childrenIds": [],
    }
  ]
}

export const EditorPageComponentsTreePanel = {
  children: ["EditorComponentsTree", "EditorDependenciesGraph"]
}

export const EditorComponentsTree = {
  paneOrder: [
    "global",
    "page",
    "focused"
  ],
  panes: [
    {
      panekey: "foused",
      tree: []
    },
    {
      panekey: "global",
      tree: []
    },
    {
      panekey: "page",
      tree: {
        allTreeNodeIds: [
          "$main",
          "select1",
          "btn_load_workflow_templates",
          "btn_load_workflow_templates2",
          "tbl_workflow_templates"
        ],
        children: [
          {
            id: "$main",
            label: "Main",
            level: 0,
            "dragNodeType": "ComponentTreeItem",
            "children": [
              {
                "id": "select1",
                "label": "select1",
                "level": 1,
                "children": []
              },
              {
                "id": "btn_load_workflow_templates",
                "label": "btn_load_workflow_templates",
                "level": 1,
                "children": [],
                "dragNodeType": "ComponentTreeItem",
              },
              {
                "id": "btn_load_workflow_templates2",
                "label": "btn_load_workflow_templates2",
                "level": 1,
                "childrenIds": [],
                "children": [],
                "dragNodeType": "ComponentTreeItem",

              },
              {
                "id": "tbl_workflow_templates",
                "label": "tbl_workflow_templates",
                "childrenIds": [],
                "level": 1,
                "dragNodeType": "ComponentTreeItem",
                "children": [],
                "actions": []
              }
            ]
          }
        ],
        flattenedComponentTree: [
          {
            "id": "$main",
            "label": "Main",
            "level": 0,
            "childrenLength": 4,
            "childrenIds": [
              "select1",
              "btn_load_workflow_templates",
              "btn_load_workflow_templates2",
              "tbl_workflow_templates"
            ],
            "dragNodeType": "ComponentTreeItem"
          },
          {
            "id": "select1",
            "label": "select1",
            "level": 1,
            "childrenIds": [],
            "dragNodeType": "ComponentTreeItem"
          },
          {
            "id": "btn_load_workflow_templates",
            "label": "btn_load_workflow_templates",
            "level": 1,
            "childrenIds": [],
            "dragNodeType": "ComponentTreeItem"
          },
          {
            "id": "btn_load_workflow_templates2",
            "label": "btn_load_workflow_templates2",
            "level": 1,
            "childrenIds": [],
            "dragNodeType": "ComponentTreeItem"
          },
          {
            "id": "tbl_workflow_templates",
            "label": "tbl_workflow_templates",
            "level": 1,
            "childrenIds": [],
            "dragNodeType": "ComponentTreeItem"
          }
        ]


      }
    }
  ],
}

export const EditorDependenciesGraph = {
  value: {
    "depGraph": {
      "dependencies": {
        "tbl_workflow_templates": [
          "QUERY_WORKFLOW_TEMPLATES"
        ],
        "btn_load_workflow_templates": [
          "QUERY_WORKFLOW_TEMPLATES"
        ]
      },
      "dependents": {
        "QUERY_WORKFLOW_TEMPLATES": [
          "tbl_workflow_templates",
          "btn_load_workflow_templates"
        ]
      },
      "dependencySelectorEdges": {
        "tbl_workflow_templates": [
          {
            "from": [
              "tbl_workflow_templates",
              "data"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "data"
            ],
            "searchObject": "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
            "type": "templateString",
            "updatesModel": true
          }
        ],
        "btn_load_workflow_templates": [
          {
            "from": [
              "btn_load_workflow_templates",
              "loading"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "isFetching"
            ],
            "searchObject": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
            "type": "templateString",
            "updatesModel": true
          }
        ]
      },
      "dependentSelectorEdges": {
        "QUERY_WORKFLOW_TEMPLATES": [
          {
            "searchObject": "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
            "type": "templateString",
            "updatesModel": false
          },
          {
            "searchObject": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
            "type": "templateString",
            "updatesModel": false
          }
        ]
      },
      "controllers": {
        "QUERY_WORKFLOW_TEMPLATES": [
          "tbl_workflow_templates",
          "btn_load_workflow_templates",
          "btn_load_workflow_templates2"
        ],
        "tbl_workflow_templates": [
          "tbl_workflow_templates"
        ]
      },
      "controls": {
        "tbl_workflow_templates": [
          "QUERY_WORKFLOW_TEMPLATES",
          "tbl_workflow_templates"
        ],
        "btn_load_workflow_templates": [
          "QUERY_WORKFLOW_TEMPLATES"
        ],
        "btn_load_workflow_templates2": [
          "QUERY_WORKFLOW_TEMPLATES"
        ]
      },
      "controlSelectorEdges": {
        "tbl_workflow_templates": [
          {
            "from": [
              "tbl_workflow_templates",
              "events",
              "0",
              "pluginId"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "selectRow",
            "updatesModel": false
          },
          {
            "from": [
              "tbl_workflow_templates",
              "events",
              "1",
              "pluginId"
            ],
            "to": [
              "tbl_workflow_templates",
              "exportData"
            ],
            "searchObject": "tbl_workflow_templates.exportData()",
            "type": "eventHandler",
            "trigger": "clickToolbar",
            "updatesModel": false
          },
          {
            "from": [
              "tbl_workflow_templates",
              "events",
              "2",
              "pluginId"
            ],
            "to": [
              "tbl_workflow_templates",
              "refresh"
            ],
            "searchObject": "tbl_workflow_templates.refresh()",
            "type": "eventHandler",
            "trigger": "clickToolbar",
            "updatesModel": false
          }
        ],
        "btn_load_workflow_templates": [
          {
            "from": [
              "btn_load_workflow_templates",
              "events",
              "0",
              "pluginId"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "reset"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.reset()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          },
          {
            "from": [
              "btn_load_workflow_templates",
              "events",
              "1",
              "pluginId"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          }
        ],
        "btn_load_workflow_templates2": [
          {
            "from": [
              "btn_load_workflow_templates2",
              "events",
              "0",
              "pluginId"
            ],
            "to": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          }
        ]
      },
      "controllerSelectorEdges": {
        "QUERY_WORKFLOW_TEMPLATES": [
          {
            "from": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "to": [
              "tbl_workflow_templates",
              "events",
              "0",
              "pluginId"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "selectRow",
            "updatesModel": false
          },
          {
            "from": [
              "QUERY_WORKFLOW_TEMPLATES",
              "reset"
            ],
            "to": [
              "btn_load_workflow_templates",
              "events",
              "0",
              "pluginId"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.reset()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          },
          {
            "from": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "to": [
              "btn_load_workflow_templates",
              "events",
              "1",
              "pluginId"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          },
          {
            "from": [
              "QUERY_WORKFLOW_TEMPLATES",
              "trigger"
            ],
            "to": [
              "btn_load_workflow_templates2",
              "events",
              "0",
              "pluginId"
            ],
            "searchObject": "QUERY_WORKFLOW_TEMPLATES.trigger()",
            "type": "eventHandler",
            "trigger": "click",
            "updatesModel": false
          }
        ],
        "tbl_workflow_templates": [
          {
            "from": [
              "tbl_workflow_templates",
              "exportData"
            ],
            "to": [
              "tbl_workflow_templates",
              "events",
              "1",
              "pluginId"
            ],
            "searchObject": "tbl_workflow_templates.exportData()",
            "type": "eventHandler",
            "trigger": "clickToolbar",
            "updatesModel": false
          },
          {
            "from": [
              "tbl_workflow_templates",
              "refresh"
            ],
            "to": [
              "tbl_workflow_templates",
              "events",
              "2",
              "pluginId"
            ],
            "searchObject": "tbl_workflow_templates.refresh()",
            "type": "eventHandler",
            "trigger": "clickToolbar",
            "updatesModel": false
          }
        ]
      }
    }
  }

}

export const WidgetPickerContainer = {
  className: "widgetContainer",
  id: "WidgetPickerContainer",
  name: "components",
  tabIdPrefix: "WidgetPicker::Tab",
  style: "pill",
  activeTab: "Components",
  values: [
    {
      "name": "Components"
    },
    {
      "name": "Modules"
    }
  ],
  children: [
    "WidgetPickerComponentsTab",
    "WidgetPickerComponentsModulesTab"
  ]
}
export const WidgetPickerComponentsTab = {
  items: {
    ForEach: [
      {
        key: "Commonly used",
        title: "Commonly used",
        items: [
          {
            "name": "Table",
            "idPrefix": "table",
            "description": "Display tabular data",
            "defaultHeight": 40,
            "defaultWidth": 8,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M43%2038H5V17a1%201%200%200%201%201-1h36a1%201%200%200%201%201%201v21Z'%20fill='%23fff'/%3e%3cpath%20d='M5%2035h38v1a2%202%200%200%201-2%202H7a2%202%200%200%201-2-2v-1Z'%20fill='%23DEDEDE'/%3e%3cpath%20d='M12%2038V11M28%2038V11M5%2022h38M5%2029h38M20%2038V11M36%2038V11'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M43%2016H5v-5a1%201%200%200%201%201-1h36a1%201%200%200%201%201%201v5Z'%20fill='%23DEDEDE'/%3e%3crect%20x='4.8'%20y='10.8'%20width='38.4'%20height='27.4'%20rx='2.2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Tables",
              "subsection": "Basic"
            },
            "tags": [
              "table",
              "v2",
              "data",
              "new"
            ],
            "type": "TableWidget2"
          },
          {
            "name": "Text",
            "description": "Plain text, HTML, or Markdown",
            "defaultWidth": 3,
            "defaultHeight": 3,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Basic"
            },
            "tags": [
              "text",
              "header",
              "title",
              "subtitle",
              "markdown",
              "html",
              "label",
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2011H6a2%202%200%200%200-2%202v4M38%2038h4a2%202%200%200%200%202-2v-4M44%2017v-4a2%202%200%200%200-2-2h-4M4%2032v4a2%202%200%200%200%202%202h4'%20stroke='%23D8D8D8'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M28%2017h11M28%2022h11M9%2028h30M9%2033h24'/%3e%3cpath%20d='M8.622%2015.844V23h1.468v-4.675h.059l1.852%204.64h1l1.851-4.623h.06V23h1.467v-7.156h-1.866l-1.97%204.808h-.084l-1.971-4.808H8.622Z'%20fill='%238E8E8E'/%3e%3cpath%20d='M21.006%2016v7m0%200L24%2020m-2.994%203L18%2020'%20stroke='%238E8E8E'%20stroke-width='1.4'/%3e%3c/svg%3e",
            "template": {
              "value": "👋 **Hello {{ current_user.firstName || 'friend' }}!**",
              "verticalAlign": "center"
            },
            "idPrefix": "text",
            "type": "TextWidget2"
          },
          {
            "name": "Button",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Solid"
            },
            "tags": [
              "click",
              "submit",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='6.5'%20y='15.5'%20width='36'%20height='17'%20rx='3.5'%20fill='%233170F9'%20stroke='%233170F9'/%3e%3cpath%20d='m12.684%2027%20.432-1.327h2.1L15.647%2027h1.319l-2.006-5.818h-1.585L11.366%2027h1.318Zm.745-2.287.716-2.202h.045l.716%202.202h-1.477Zm5.983%202.372c1.162%200%201.892-.682%201.948-1.684h-1.142c-.07.465-.377.727-.792.727-.566%200-.932-.475-.932-1.31%200-.824.37-1.295.932-1.295.443%200%20.727.292.792.727h1.142c-.05-1.009-.815-1.67-1.954-1.67-1.324%200-2.142.917-2.142%202.255%200%201.327.804%202.25%202.148%202.25Zm5.044-4.449h-.82v-1.045h-1.21v1.045h-.598v.91h.597v2.272c-.006.855.577%201.279%201.455%201.242.312-.012.534-.074.656-.114l-.19-.9c-.06.01-.188.04-.302.04-.241%200-.409-.092-.409-.427v-2.113h.821v-.91ZM25.245%2027h1.21v-4.364h-1.21V27Zm.608-4.926c.36%200%20.656-.276.656-.614%200-.335-.296-.61-.656-.61-.358%200-.654.275-.654.61%200%20.338.296.614.654.614Zm3.543%205.011c1.324%200%202.148-.906%202.148-2.25%200-1.352-.824-2.256-2.148-2.256-1.324%200-2.148.904-2.148%202.256%200%201.344.824%202.25%202.148%202.25Zm.006-.937c-.611%200-.924-.56-.924-1.321%200-.762.313-1.324.924-1.324.6%200%20.912.562.912%201.324%200%20.761-.313%201.32-.912%201.32Zm4.139-1.67c.003-.563.338-.893.827-.893.485%200%20.778.318.775.852V27h1.21v-2.778c0-1.018-.596-1.643-1.505-1.643-.648%200-1.117.319-1.313.827h-.051v-.77h-1.153V27h1.21v-2.523Z'%20fill='%23fff'/%3e%3c/svg%3e",
            "template": {
              "allowWrap": true,
              "styleVariant": "solid",
              "text": "Button"
            },
            "visualType": "button",
            "idPrefix": "button",
            "type": "ButtonWidget2"
          },
          {
            "name": "Text Input",
            "description": "A single line of text",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Basic"
            },
            "tags": [
              "v2",
              "search",
              "password",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M7.25%2022.074V20.98a.73.73%200%200%201%20.73-.73H11m3.75%201.824V20.98a.73.73%200%200%200-.73-.73H11m0%200v7.5m0%200H9.11m1.89%200h2.051'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205.432V3.73A.73.73%200%200%201%203.73%203H8m5%202.432V3.73a.73.73%200%200%200-.73-.73H8m0%200v10m0%200H5.481M8%2013h2.735'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": {
              "defaultForDataType": [
                "bigint",
                "uuid",
                "char",
                "varchar",
                "character",
                "character varying",
                "tinytext",
                "interval",
                "cidr",
                "inet",
                "macaddr",
                "bit",
                "varbit",
                "bit varying",
                "binary",
                "varbinary"
              ],
              "defaultForColumnFormat": [
                "button",
                "ModalDataCell",
                "TextDataCell"
              ]
            },
            "templateOverrideKeys": [
              "placeholder",
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "textInput",
            "type": "TextInputWidget2"
          },
          {
            "name": "Number Input",
            "description": "Enter a number",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Number"
            },
            "tags": [
              "v2",
              "integer",
              "float",
              "decimal",
              "percent",
              "currency",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M4.5%2026.06h8.555M11.629%2019.5l-1.426%208.555M8.064%2019.5l-1.426%208.555M5.213%2022.067H13.5'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2010.745h11.406M11.505%202%209.604%2013.406M6.752%202%204.851%2013.406M2.95%205.423H14'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "currency": "USD",
              "format": "decimal",
              "placeholder": "Enter value",
              "showSeparators": true,
              "showStepper": true,
              "value": 0,
              "inputValue": 0,
              "iconBefore": "",
              "textBefore": ""
            },
            "visualType": "input",
            "valueType": "number",
            "templateOverrideKeys": [
              "format",
              "iconBefore",
              "textBefore"
            ],
            "formGenerator": {
              "defaultForDataType": [
                "tinyint",
                "smallint",
                "mediumint",
                "int",
                "int2",
                "int4",
                "int8",
                "integer",
                "numeric",
                "real",
                "double",
                "float",
                "float4",
                "float8",
                "smallserial",
                "serial",
                "bigserial",
                "fixed",
                "number"
              ],
              "defaultForColumnFormat": [
                "NumberDataCell"
              ]
            },
            "idPrefix": "numberInput",
            "type": "NumberInputWidget"
          },
          {
            "name": "Select",
            "description": "Dropdown with options",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='4'%20width='46'%20height='13'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23757575'%20stroke-width='2'%20stroke-linecap='round'%20d='M7%2011h17'/%3e%3crect%20x='4'%20y='15'%20width='43'%20height='29'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20fill='%23EAF1FE'%20d='M5%2026h41v8H5z'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M10%2021h13'/%3e%3cpath%20stroke='%23757575'%20stroke-width='2'%20stroke-linecap='round'%20d='M10%2030h25'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M10%2039h17'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M4%2025.2h43M4%2034.2h43'/%3e%3cpath%20d='m38%2010%202.5%202%202.5-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='m39%2030.361%201.361%201.134L42.63%2029'%20stroke='%233170F9'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%208A7%207%200%201%201%201%208a7%207%200%200%201%2014%200Zm-3.188-1.561a.935.935%200%200%200-.054-1.191.75.75%200%200%200-1.09-.027l-3.636%203.54-1.869-1.04c-.35-.195-.776-.084-1.008.261a.937.937%200%200%200%20.074%201.131l2.356%202.625c.158.176.376.27.601.261a.777.777%200%200%200%20.582-.31l4.044-5.25Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Selects",
              "subsection": "Basic"
            },
            "tags": [
              "dropdown",
              "combobox",
              "autocomplete",
              "v2",
              "input"
            ],
            "valueType": "primitive",
            "visualType": "listbox",
            "formGenerator": {
              "template": {},
              "defaultForColumnFormat": [
                "SingleTagDataCell"
              ]
            },
            "idPrefix": "select",
            "type": "SelectWidget2"
          },
          {
            "name": "Container",
            "description": "Group components in a card",
            "defaultWidth": 6,
            "defaultHeight": 19,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Basic"
            },
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M4%2016.2h40'/%3e%3crect%20x='7'%20y='19'%20width='34'%20height='18'%20rx='2'%20fill='%23EEE'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "_type": "grid",
              "_direction": "horizontal",
              "_align": "start",
              "_justify": "start",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ]
            },
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "containerTitle",
                "template": {
                  "value": "#### Container title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              }
            ],
            "idPrefix": "container",
            "type": "ContainerWidget2"
          },
          {
            "name": "Form",
            "description": "Submit multiple inputs together",
            "defaultWidth": 4,
            "defaultHeight": 25,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Other"
            },
            "tags": [
              "container",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M4%2016.2h40M4%2030.2h40'/%3e%3crect%20x='31'%20y='33'%20width='11'%20height='5'%20rx='2'%20fill='%233170F9'/%3e%3crect%20x='7'%20y='19'%20width='34'%20height='8'%20rx='1'%20fill='%23EEE'/%3e%3c/svg%3e",
            "template": {
              "requireValidation": true,
              "resetAfterSubmit": true,
              "showBody": true,
              "showFooter": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px"
            },
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "formTitle",
                "template": {
                  "value": "#### Form title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              },
              {
                "type": "ButtonWidget2",
                "idPrefix": "formButton",
                "position": {
                  "col": 8,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "footer",
                  "width": 4
                }
              }
            ],
            "idPrefix": "form",
            "type": "FormWidget2"
          },
          {
            "name": "Tabbed Container",
            "description": "Multiple views with navigation",
            "defaultWidth": 6,
            "defaultHeight": 20,
            "section": "Commonly used",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3crect%20x='7'%20y='26'%20width='34'%20height='10'%20rx='1'%20fill='%23E5E5E5'/%3e%3cline%20x1='4'%20y1='22.2'%20x2='44'%20y2='22.2'%20stroke='%23E5E5E5'%20stroke-width='1.6'/%3e%3cpath%20d='M27.6881%2018H30.3376C31.8365%2018%2032.5716%2017.2362%2032.5716%2016.2166C32.5716%2015.2259%2031.8685%2014.6442%2031.1717%2014.609V14.5451C31.8109%2014.3949%2032.3159%2013.9474%2032.3159%2013.1516C32.3159%2012.1768%2031.6128%2011.4545%2030.1938%2011.4545H27.6881V18ZM28.8738%2017.0092V15.0916H30.181C30.9129%2015.0916%2031.3667%2015.5391%2031.3667%2016.1239C31.3667%2016.6449%2031.0087%2017.0092%2030.149%2017.0092H28.8738ZM28.8738%2014.2383V12.4325H30.0723C30.769%2012.4325%2031.1302%2012.8001%2031.1302%2013.305C31.1302%2013.8803%2030.6636%2014.2383%2030.0467%2014.2383H28.8738Z'%20fill='%232B2B2B'/%3e%3crect%20x='7'%20y='9'%20width='17'%20height='11'%20rx='5.5'%20fill='%233170F933'/%3e%3cpath%20d='M13.7298%2018L14.2699%2016.386H16.7309L17.2742%2018H18.5398L16.2323%2011.4545H14.7685L12.4642%2018H13.7298ZM14.5895%2015.4336L15.4748%2012.7969H15.526L16.4113%2015.4336H14.5895Z'%20fill='%233170F9'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "showFooter": false,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1",
                "View 2",
                "View 3"
              ],
              "_labels": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_iconPositionByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ],
              "currentViewKey": "{{ self.viewKeys[0] }}"
            },
            "defaultChildren": [
              {
                "type": "TabsWidget2",
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              }
            ],
            "idPrefix": "tabbedContainer",
            "type": "ContainerWidget2"
          },
          {
            "name": "Mixed Chart",
            "description": "Mixed Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Commonly used",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.799988%2021.2H33.2M0.799988%2011.2H33.2M0.799988%201.20001H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M0.799988%2031.2H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M25.2758%2030.2917V26.6877C25.2758%2026.6213%2025.5264%2026.5675%2025.8355%2026.5675H28.0743C28.3834%2026.5675%2028.634%2026.6213%2028.634%2026.6877V30.2917C28.634%2030.3581%2028.3834%2030.4118%2028.0743%2030.4118H25.8355C25.5264%2030.4118%2025.2758%2030.3581%2025.2758%2030.2917Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M19.1903%2030.1804V24.6254C19.1903%2024.4975%2019.4409%2024.3939%2019.75%2024.3939H21.9888C22.2979%2024.3939%2022.5484%2024.4975%2022.5484%2024.6254V30.1804C22.5484%2030.3082%2022.2979%2030.4118%2021.9888%2030.4118H19.75C19.4409%2030.4118%2019.1903%2030.3082%2019.1903%2030.1804Z'%20fill='%236BAAF7'%20style='fill:%236BAAF7;fill:color(display-p3%200.4196%200.6667%200.9686);fill-opacity:1;'/%3e%3cpath%20d='M7.01929%2030.3004V24.5054C7.01929%2024.4438%207.26987%2024.3939%207.57898%2024.3939H9.81773C10.1268%2024.3939%2010.3774%2024.4438%2010.3774%2024.5054V30.3004C10.3774%2030.362%2010.1268%2030.4118%209.81773%2030.4118H7.57898C7.26987%2030.4118%207.01929%2030.362%207.01929%2030.3004Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20opacity='0.91'%20d='M13.1048%2030.0058L13.1048%2013.7647C13.1048%2013.5405%2013.3554%2013.3587%2013.6645%2013.3587H15.9032C16.2124%2013.3587%2016.4629%2013.5405%2016.4629%2013.7647V30.0058C16.4629%2030.2301%2016.2124%2030.4118%2015.9032%2030.4118H13.6645C13.3554%2030.4118%2013.1048%2030.2301%2013.1048%2030.0058Z'%20fill='%2360A5FA'%20style='fill:%2360A5FA;fill:color(display-p3%200.3765%200.6471%200.9804);fill-opacity:1;'/%3e%3ccircle%20cx='29.4099'%20cy='3.70001'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='22.9143'%20cy='9.0146'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='15.6048'%20cy='4.69147'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='5.25061'%20cy='18.7'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "mixedChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Key Value",
            "description": "Display key-value pairs",
            "defaultWidth": 3,
            "defaultHeight": 43,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Tables",
              "subsection": "Key Value"
            },
            "tags": [
              "object",
              "list",
              "map"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2039H7V16a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v23Z'%20fill='%23fff'/%3e%3cpath%20d='M23%2038V10M7%2027h33.25M7%2021h33.25M7%2033h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M40%2015H7v-5a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v5Z'%20fill='%23EEE'/%3e%3cpath%20d='M6.875%2015h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3crect%20x='6.8'%20y='9.8'%20width='33.4'%20height='28.4'%20rx='2.2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "data": "{\n  id: 0,\n  firstName: 'Chic',\n  lastName: 'Footitt',\n  email: 'chic.footitt@yahoo.com',\n  website: 'https://chic.footitt.com',\n  text: 'Nulla sit amet nibh at augue facilisis viverra quis id dui. Nullam mattis ultricies metus. Donec eros lorem, egestas vitae aliquam quis, rutrum a mauris',\n  role: 'Viewer',\n  teams: ['Workplace', 'Infrastructure'],\n  enabled: true,\n  createdAt: '2023-01-16T23:40:20.385Z',\n}",
              "editIcon": "bold/interface-edit-pencil",
              "itemLabelPosition": "top",
              "groupLayout": "singleColumn",
              "labelWrap": true,
              "_enableSaveActions": true
            },
            "idPrefix": "keyValue",
            "type": "KeyValueWidget2"
          },
          {
            "name": "Image",
            "description": "Upload image or add URL",
            "defaultWidth": 3,
            "defaultHeight": 25,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Images & Video",
              "subsection": "Image"
            },
            "tags": [
              "v2",
              "presentation",
              "photo",
              "picture"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.8'%20y='10.8'%20width='36.4'%20height='26.4'%20rx='3.2'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3ccircle%20cx='13.5'%20cy='18.5'%20r='3.5'%20fill='%23EECA86'/%3e%3cpath%20d='M27.923%2018.366a1%201%200%200%201%201.696-.018l8.395%2013.113A1%201%200%200%201%2037.172%2033H20.781a1%201%200%200%201-.854-1.52l7.996-13.114Z'%20fill='%2382BF99'/%3e%3cpath%20d='M16.676%2026.199a1%201%200%200%201%201.648%200l3.599%205.234A1%201%200%200%201%2021.099%2033H13.9a1%201%200%200%201-.824-1.567l3.599-5.234Z'%20fill='%2382BF99'/%3e%3c/svg%3e",
            "idPrefix": "image",
            "type": "ImageWidget2"
          },
          {
            "name": "Navigation",
            "defaultWidth": 12,
            "defaultHeight": 4,
            "section": "Commonly used",
            "themeEditorSection": {
              "section": "Navigation",
              "subsection": "Basic"
            },
            "description": "Link to apps and URLs",
            "tags": [
              "v2",
              "menu"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6881%2027V20.4545H25.1938C25.6668%2020.4545%2026.0599%2020.5291%2026.3731%2020.6783C26.6884%2020.8253%2026.9239%2021.0266%2027.0794%2021.2823C27.2371%2021.538%2027.3159%2021.8278%2027.3159%2022.1516C27.3159%2022.418%2027.2648%2022.646%2027.1625%2022.8356C27.0602%2023.0231%2026.9228%2023.1754%2026.7502%2023.2926C26.5776%2023.4098%2026.3848%2023.494%2026.1717%2023.5451V23.609C26.404%2023.6218%2026.6266%2023.6932%2026.8397%2023.8232C27.0549%2023.951%2027.2307%2024.1321%2027.3671%2024.3665C27.5034%2024.6009%2027.5716%2024.8842%2027.5716%2025.2166C27.5716%2025.5554%2027.4896%2025.8601%2027.3255%2026.1307C27.1614%2026.3991%2026.9143%2026.6112%2026.584%2026.7667C26.2538%2026.9222%2025.8383%2027%2025.3376%2027H22.6881ZM23.8738%2026.0092H25.149C25.5794%2026.0092%2025.8894%2025.9272%2026.0791%2025.7631C26.2708%2025.5969%2026.3667%2025.3839%2026.3667%2025.1239C26.3667%2024.93%2026.3188%2024.7553%2026.2229%2024.5998C26.127%2024.4421%2025.9906%2024.3185%2025.8138%2024.229C25.6369%2024.1374%2025.426%2024.0916%2025.181%2024.0916H23.8738V26.0092ZM23.8738%2023.2383H25.0467C25.2513%2023.2383%2025.4356%2023.201%2025.5997%2023.1264C25.7637%2023.0497%2025.8926%2022.9421%2025.9864%2022.8036C26.0823%2022.663%2026.1302%2022.4968%2026.1302%2022.305C26.1302%2022.0515%2026.0407%2021.8427%2025.8617%2021.6786C25.6849%2021.5146%2025.4217%2021.4325%2025.0723%2021.4325H23.8738V23.2383Z'%20fill='%23808080'%20/%3e%3cpath%20d='M40.404%2022.663H39.2087C39.1746%2022.467%2039.1117%2022.2933%2039.0201%2022.142C38.9285%2021.9886%2038.8145%2021.8587%2038.6781%2021.7521C38.5418%2021.6456%2038.3862%2021.5657%2038.2115%2021.5124C38.0389%2021.457%2037.8525%2021.4293%2037.6522%2021.4293C37.2964%2021.4293%2036.981%2021.5188%2036.7062%2021.6978C36.4313%2021.8746%2036.2161%2022.1346%2036.0606%2022.4776C35.9051%2022.8185%2035.8273%2023.2351%2035.8273%2023.7273C35.8273%2024.228%2035.9051%2024.6499%2036.0606%2024.9929C36.2183%2025.3338%2036.4335%2025.5916%2036.7062%2025.7663C36.981%2025.9389%2037.2953%2026.0252%2037.649%2026.0252C37.845%2026.0252%2038.0283%2025.9996%2038.1987%2025.9485C38.3713%2025.8952%2038.5258%2025.8175%2038.6622%2025.7152C38.8006%2025.6129%2038.9168%2025.4872%2039.0105%2025.3381C39.1064%2025.1889%2039.1725%2025.0185%2039.2087%2024.8267L40.404%2024.8331C40.3592%2025.1442%2040.2623%2025.4361%2040.1131%2025.7088C39.9661%2025.9815%2039.7733%2026.2223%2039.5347%2026.4311C39.296%2026.6378%2039.0169%2026.7997%2038.6973%2026.9169C38.3777%2027.032%2038.0229%2027.0895%2037.633%2027.0895C37.0578%2027.0895%2036.5443%2026.9563%2036.0926%2026.69C35.6408%2026.4237%2035.285%2026.0391%2035.0251%2025.5362C34.7651%2025.0334%2034.6352%2024.4304%2034.6352%2023.7273C34.6352%2023.022%2034.7662%2022.419%2035.0283%2021.9183C35.2903%2021.4155%2035.6472%2021.0309%2036.0989%2020.7646C36.5506%2020.4982%2037.062%2020.3651%2037.633%2020.3651C37.9974%2020.3651%2038.3362%2020.4162%2038.6494%2020.5185C38.9626%2020.6207%2039.2417%2020.771%2039.4867%2020.9691C39.7318%2021.1651%2039.9331%2021.4059%2040.0908%2021.6914C40.2506%2021.9748%2040.355%2022.2987%2040.404%2022.663Z'%20fill='%23808080'%20/%3e%3crect%20x='2'%20y='18'%20width='17'%20height='12'%20rx='4'%20fill='%23BFDBFE'%20/%3e%3cpath%20d='M8.7298%2027H7.46418L9.76851%2020.4545H11.2323L13.5398%2027H12.2742L10.526%2021.7969H10.4748L8.7298%2027ZM8.77135%2024.4336H12.2231V25.386H8.77135V24.4336Z'%20fill='%230D0D0D'%20/%3e%3c/svg%3e",
            "idPrefix": "navigation",
            "type": "NavigationWidget2"
          }
        ]
      },
      {
        key: "Text inputs",
        title: "Text inputs",
        items: [
          {
            "name": "Editable Text",
            "description": "Display click-to-edit text",
            "defaultWidth": 4,
            "defaultHeight": 7,
            "section": "Text inputs",
            "themeEditorSection": "Editable",
            "tags": [
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%20fill='%23B2B2B2'%3e%3cpath%20d='M44.078%2019.59a.833.833%200%200%201%201.178%200l1.179%201.178a.833.833%200%200%201%200%201.178l-.59.59-2.356-2.358.589-.589ZM42.899%2020.768l2.357%202.356-4.715%204.715-2.356-2.357zM37.596%2026.071l2.357%202.357-2.334.467a.417.417%200%200%201-.49-.49l.467-2.334Z'/%3e%3c/g%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M16%2024h12'/%3e%3cpath%20d='M3.25%2022.074v-1.277c0-.302.245-.547.547-.547H7m3.75%201.824v-1.277a.547.547%200%200%200-.547-.547H7m0%200v7.5m0%200H5.11m1.89%200h2.051'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(37%2019)'%20d='M0%200h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205.432V3.73A.73.73%200%200%201%203.73%203H8m5%202.432V3.73a.73.73%200%200%200-.73-.73H8m0%200v10m0%200H5.481M8%2013h2.735'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": true,
            "idPrefix": "editableText",
            "type": "EditableTextWidget2"
          },
          {
            "name": "Editable Text Area",
            "description": "Display click-to-edit multiline text",
            "defaultWidth": 4,
            "defaultHeight": 7,
            "section": "Text inputs",
            "themeEditorSection": "Editable",
            "tags": [
              "multiline",
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3461_15387)'%3e%3cg%20clip-path='url(%23clip1_3461_15387)'%3e%3cpath%20d='M45.0772%2019.5893C45.4027%2019.2638%2045.9303%2019.2638%2046.2558%2019.5893L47.4343%2020.7678C47.7597%2021.0932%2047.7597%2021.6208%2047.4343%2021.9463L46.845%2022.5355L44.488%2020.1785L45.0772%2019.5893Z'%20fill='%23B2B2B2'/%3e%3crect%20x='43.8989'%20y='20.7676'%20width='3.33333'%20height='6.66667'%20transform='rotate(45%2043.8989%2020.7676)'%20fill='%23B2B2B2'/%3e%3cpath%20d='M38.5952%2026.0713L40.9522%2028.4283L38.6188%2028.895C38.3273%2028.9533%2038.0702%2028.6963%2038.1285%2028.4047L38.5952%2026.0713Z'%20fill='%23B2B2B2'/%3e%3c/g%3e%3cline%20x1='15'%20y1='22'%20x2='33'%20y2='22'%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='15'%20y1='27'%20x2='26'%20y2='27'%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M0.96875%2022.565V21.6073C0.96875%2021.2546%201.25462%2020.9688%201.60726%2020.9688H4.25M7.53125%2022.565V21.6073C7.53125%2021.2546%207.24538%2020.9688%206.89274%2020.9688H4.25M4.25%2020.9688V27.5312M4.25%2027.5312H2.59696M4.25%2027.5312H6.04493'%20stroke='%23B2B2B2'%20stroke-width='1.3125'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3461_15387'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_3461_15387'%3e%3crect%20width='10'%20height='10'%20fill='white'%20transform='translate(38%2019)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2014h12M2%2011h12m-2-3h2M2%203.892v-1.26c0-.35.283-.632.632-.632H6m4%201.892v-1.26A.632.632%200%200%200%209.368%202H6m0%200v6m0%200H3.943M6%208h2.057'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": true,
            "idPrefix": "editableTextArea",
            "type": "EditableTextAreaWidget"
          },
          {
            "name": "Email",
            "description": "Enter an email and validate its format",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Text inputs",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='m5.75%2022.635%204.687%203.185c.34.23.786.23%201.126%200l4.687-3.185v3.615A2.25%202.25%200%200%201%2014%2028.5H8a2.25%202.25%200%200%201-2.25-2.25v-3.615Z'%20fill='%23B2B2B2'/%3e%3cpath%20d='M14.572%2019.5H7.428c-.927%200-1.678.751-1.678%201.678%200%20.123.061.239.163.308l4.335%202.956c.454.31%201.05.31%201.504%200l4.335-2.956a.373.373%200%200%200%20.163-.308c0-.927-.751-1.678-1.678-1.678Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='m1%206.18%206.25%204.247a1.335%201.335%200%200%200%201.5%200L15%206.18V11a3%203%200%200%201-3%203H4a3%203%200%200%201-3-3V6.18Z'%20fill='%23B2B2B2'/%3e%3cpath%20d='M12.763%202H3.237A2.237%202.237%200%200%200%201%204.237c0%20.165.081.318.217.411L7.248%208.76c.454.31%201.05.31%201.504%200l6.03-4.112A.498.498%200%200%200%2015%204.237%202.237%202.237%200%200%200%2012.763%202Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": {
              "defaultForColumnName": [
                "email"
              ],
              "defaultForColumnFormat": [
                "UserDataCell"
              ]
            },
            "templateOverrideKeys": [
              "placeholder",
              "iconBefore",
              "patternType",
              "textBefore"
            ],
            "idPrefix": "email",
            "type": "TextInputWidget2"
          },
          {
            "name": "JSON Editor",
            "description": "Edit and validate JSON",
            "defaultWidth": 4,
            "defaultHeight": 40,
            "section": "Text inputs",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='9'%20width='46'%20height='31'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8.462%2013.5H7.341a1%201%200%200%200-1%201v1.739a1%201%200%200%201-.372.778l-1.082.872a.133.133%200%200%200%20.007.213l1.024.724a1%201%200%200%201%20.423.817V21.5a1%201%200%200%200%201%201H8.5M11.538%2022.5h1.121a1%201%200%200%200%201-1v-1.739a1%201%200%200%201%20.372-.778l1.082-.872a.133.133%200%200%200-.007-.213l-1.024-.724a1%201%200%200%201-.423-.817V14.5a1%201%200%200%200-1-1H11.5'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M6%2029h28M6%2034h17'/%3e%3cpath%20d='M39%2027h1.5m1.5%200h-1.5m0%200v8m0%200H39m1.5%200H42'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.95%202H4.454c-.737%200-1.334.597-1.334%201.333v2.319c0%20.403-.182.784-.496%201.037l-1.488%201.2a.133.133%200%200%200%20.007.213l1.414%201c.353.25.563.655.563%201.088v2.477c0%20.736.597%201.333%201.334%201.333H6m4.05%200h1.495c.737%200%201.334-.597%201.334-1.333v-2.319c0-.403.182-.784.496-1.037l1.488-1.2a.133.133%200%200%200-.007-.213l-1.414-1a1.333%201.333%200%200%201-.563-1.088V3.333c0-.736-.597-1.333-1.333-1.333H10'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "formGenerator": {
              "defaultForDataType": [
                "json",
                "jsonb"
              ],
              "defaultForColumnFormat": [
                "JsonDataCell"
              ]
            },
            "valueType": "object",
            "template": {
              "value": "{\n  \"a\": {\n    \"b\": [1,2,3,4,5,6,7,8,9],\n    \"c\": {\n      \"d\": false\n    },\n    \"e\": \"hi\"\n  }\n}"
            },
            "idPrefix": "jsonEditor",
            "type": "JSONEditorWidget"
          },
          {
            "name": "Password",
            "description": "Enter a password that is hidden or shown",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Text inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Basic"
            },
            "tags": [
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M24.031%2026.264a2.031%202.031%200%201%200%200-4.062%202.031%202.031%200%200%200%200%204.062ZM30.912%2026.264a2.031%202.031%200%201%200%200-4.063%202.031%202.031%200%200%200%200%204.063Z'%20fill='%23D8D8D8'/%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.178%2025.824a4.067%204.067%200%201%200-2.047-2.222l-4.021%204.02a.375.375%200%200%200-.11.266v1.735c0%20.207.168.375.375.375h1.25A.375.375%200%200%200%207%2029.623v-.248c0-.207.168-.375.375-.375h1.25A.375.375%200%200%200%209%2028.625v-1.246c0-.207.168-.375.375-.375h.47c.1%200%20.194-.04.265-.11l1.068-1.07Zm1.754-4.687a1.017%201.017%200%201%200%202.034%200%201.017%201.017%200%200%200-2.034%200Z'%20fill='%23B2B2B2'/%3e%3c/g%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(5%2018)'%20d='M0%200h12v12H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.237%2010.433a5.423%205.423%200%201%200-2.73-2.963l-5.36%205.36a.5.5%200%200%200-.147.354v2.313a.5.5%200%200%200%20.5.5h1.667a.5.5%200%200%200%20.5-.5v-.33a.5.5%200%200%201%20.5-.5h1.666a.5.5%200%200%200%20.5-.5v-1.662a.5.5%200%200%201%20.5-.5h.626a.5.5%200%200%200%20.354-.146l1.424-1.426Zm2.34-6.25a1.356%201.356%200%201%200%202.711%200%201.356%201.356%200%200%200-2.711%200Z'%20fill='%23B2B2B2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "templateOverrideKeys": [
              "label",
              "placeholder",
              "showTextToggle",
              "iconBefore",
              "textBefore"
            ],
            "formGenerator": true,
            "idPrefix": "password",
            "type": "PasswordInputWidget"
          },
          {
            "name": "Rich Text Editor",
            "description": "Edit text using rich formatting",
            "defaultWidth": 4,
            "defaultHeight": 20,
            "section": "Text inputs",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='18'%20width='46'%20height='24'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M1%2013.727h2.937c1.448%200%202.279-.773%202.279-1.831%200-.946-.687-1.54-1.48-1.576v-.064c.72-.15%201.224-.67%201.224-1.419%200-.987-.76-1.655-2.23-1.655H1v6.545Zm1.582-1.275v-1.56h1.007c.604%200%20.975.32.975.822%200%20.463-.32.738-1.004.738h-.978Zm0-2.58V8.439h.901c.528%200%20.863.271.863.706%200%20.46-.37.729-.888.729h-.876ZM29.044%207h-1.636v1.023a3.18%203.18%200%200%201-.46%201.704l.971.495c.546-.478%201.125-1.364%201.125-2.2V7Zm2.114%200h-1.636v1.023a3.18%203.18%200%200%201-.46%201.704l.971.495c.545-.478%201.125-1.364%201.125-2.2V7ZM12.135%207.182h-1.384l-1.086%206.545h1.383l1.087-6.545ZM20.196%2010.046c.003.659-.448%201.004-.937%201.004-.514%200-.846-.361-.85-.94V7.228h-1.361v3.125c.003%201.148.674%201.848%201.662%201.848.738%200%201.269-.38%201.49-.956h.05v.892h1.307v-4.91h-1.361v2.82Z'%20fill='%23949494'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23%2013.25a.75.75%200%200%201-.75.75h-5.5a.75.75%200%200%201%200-1.5h5.5a.75.75%200%200%201%20.75.75Z'%20fill='%23949494'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M6%2025h28M6%2030h17'/%3e%3cpath%20d='M39%2023h1.5m1.5%200h-1.5m0%200v8m0%200H39m1.5%200H42'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "richTextEditor",
            "type": "TextEditorWidget"
          },
          {
            "name": "Text Area",
            "description": "Enter multiple lines of text",
            "defaultWidth": 4,
            "defaultHeight": 10,
            "section": "Text inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Basic"
            },
            "tags": [
              "multiline",
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='9'%20width='46'%20height='31'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M5.5%2022.5h9M5.5%2020.25h9M13%2018h1.5M5.5%2014.919v-.787c0-.35.283-.632.632-.632H8.5m3%201.419v-.787a.632.632%200%200%200-.632-.632H8.5m0%200V18m0%200H6.957M8.5%2018h1.543'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M6%2029h28M6%2034h17'/%3e%3cpath%20d='M39%2027h1.5m1.5%200h-1.5m0%200v8m0%200H39m1.5%200H42'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2014h12M2%2011h12m-2-3h2M2%203.892v-1.26c0-.35.283-.632.632-.632H6m4%201.892v-1.26A.632.632%200%200%200%209.368%202H6m0%200v6m0%200H3.943M6%208h2.057'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": {
              "defaultForDataType": [
                "text",
                "mediumtext",
                "longtext"
              ],
              "defaultForColumnFormat": [
                "HtmlDataCell",
                "MarkdownDataCell",
                "TextMultiDataCell"
              ],
              "template": {
                "labelPosition": "top"
              }
            },
            "idPrefix": "textArea",
            "type": "TextAreaWidget"
          },
          {
            "name": "Text Input",
            "description": "A single line of text",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Text inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Basic"
            },
            "tags": [
              "v2",
              "search",
              "password",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M7.25%2022.074V20.98a.73.73%200%200%201%20.73-.73H11m3.75%201.824V20.98a.73.73%200%200%200-.73-.73H11m0%200v7.5m0%200H9.11m1.89%200h2.051'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205.432V3.73A.73.73%200%200%201%203.73%203H8m5%202.432V3.73a.73.73%200%200%200-.73-.73H8m0%200v10m0%200H5.481M8%2013h2.735'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "string",
            "formGenerator": {
              "defaultForDataType": [
                "bigint",
                "uuid",
                "char",
                "varchar",
                "character",
                "character varying",
                "tinytext",
                "interval",
                "cidr",
                "inet",
                "macaddr",
                "bit",
                "varbit",
                "bit varying",
                "binary",
                "varbinary"
              ],
              "defaultForColumnFormat": [
                "button",
                "ModalDataCell",
                "TextDataCell"
              ]
            },
            "templateOverrideKeys": [
              "placeholder",
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "textInput",
            "type": "TextInputWidget2"
          },
          {
            "name": "URL",
            "description": "Enter a URL and validate its format",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Text inputs",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cg%20clip-path='url(%23a)'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'%3e%3cpath%20d='m12%2021.703-2.024-2.088a2.321%202.321%200%200%200-3.222-.091l-.099.091a2.181%202.181%200%200%200-.09%203.14l2.025%202.087M10.217%2026.521l1.76%201.815a2.39%202.39%200%200%200%203.318.094v0a2.246%202.246%200%200%200%20.092-3.233l-1.76-1.815M12.5%2025.5l-3-3'/%3e%3c/g%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(5%2018)'%20d='M0%200h12v12H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.983%208.455a6.001%206.001%200%200%201-5.394%205.516l3.149-3.148a1.75%201.75%200%200%200%20.512-1.237V9.5a1.75%201.75%200%200%200-1.75-1.75H9.414a.25.25%200%200%201-.177-.073l-.914-.914a1.75%201.75%200%200%200-1.237-.513h-2.05a.25.25%200%200%201-.038-.003L4.49%205.57l.747-.747a.25.25%200%200%201%20.177-.073h1.172c.464%200%20.909-.184%201.237-.513.656-.656.645-1.589.2-2.237a5.986%205.986%200%200%201%204.538%202.101c-.568.122-1.061.587-1.061%201.317%200%20.21.049.415.142.603l.897%201.792a1.243%201.243%200%200%200%201.444.642ZM2%208a6.003%206.003%200%200%200%204.25%205.74v-2.326a.25.25%200%200%200-.073-.177l-.562-.562a1.75%201.75%200%200%201-.388-.587l-.874-2.187a.25.25%200%200%200-.032-.057l.22-.165-.22.165-.33-.44a1.75%201.75%200%200%201-.412-.433l-.518-.778a1.648%201.648%200%200%201-.66-.352A5.929%205.929%200%200%200%202%208Zm14%200A8%208%200%201%201%200%208a8%208%200%200%201%2016%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "label": "URL",
              "labelPosition": "top",
              "placeholder": "retool.com",
              "textBefore": "https://",
              "patternType": "url",
              "iconBefore": ""
            },
            "visualType": "input",
            "valueType": "string",
            "formGenerator": {
              "defaultForColumnName": [
                "url",
                "website",
                "link"
              ],
              "defaultForColumnFormat": [
                "ImageDataCell",
                "LinkDataCell"
              ]
            },
            "templateOverrideKeys": [
              "placeholder",
              "textBefore",
              "patternType",
              "iconBefore"
            ],
            "idPrefix": "url",
            "type": "TextInputWidget2"
          }
        ]
      },
      {
        key: "Number inputs",
        title: "Number inputs",
        items: [
          {
            "name": "Currency",
            "description": "Enter an amount in a specified currency",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Number inputs",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "number",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.75%2019.125a.75.75%200%200%200-1.5%200v.757c-1.285.264-2.234%201.153-2.234%202.432%200%20.616.223%201.113.625%201.5.396.38.956.644%201.621.823l.953.26h.001c.43.115.782.236%201.025.403.23.16.354.352.354.633%200%20.322-.151.591-.422.786-.276.198-.679.32-1.165.32-.684%200-1.22-.232-1.454-.65-.166-.296-.467-.645-.903-.645a.79.79%200%200%200-.592.262.656.656%200%200%200-.139.638c.308.99%201.15%201.62%202.332%201.806a.76.76%200%200%200-.002.05v.375a.75.75%200%200%200%201.5%200V28.5l-.001-.046c.648-.096%201.188-.325%201.596-.662.557-.46.855-1.107.855-1.848%200-.796-.36-1.355-.852-1.741-.485-.38-1.096-.592-1.618-.72l-.786-.205c-.312-.08-.652-.187-.91-.358-.252-.167-.407-.378-.405-.675v-.001a.85.85%200%200%201%20.358-.694c.237-.18.596-.3%201.06-.3.647%200%201.106.225%201.324.573.172.274.469.605.89.605.227%200%20.44-.096.58-.253a.627.627%200%200%200%20.13-.628c-.3-.89-1.128-1.513-2.221-1.693v-.729Z'%20fill='%23B2B2B2'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.415%204h9.17A1.5%201.5%200%200%200%2014%206v4a1.5%201.5%200%200%200-1.415%202h-9.17A1.5%201.5%200%200%200%202%2010V6a1.5%201.5%200%200%200%201.415-2ZM0%204.5A2.5%202.5%200%200%201%202.5%202h11A2.5%202.5%200%200%201%2016%204.5v7a2.5%202.5%200%200%201-2.5%202.5h-11A2.5%202.5%200%200%201%200%2011.5v-7ZM8%2011c1.325%200%202.5-1.343%202.5-3S9.325%205%208%205%205.5%206.343%205.5%208s1.175%203%202.5%203Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "currency": "USD",
              "format": "currency",
              "placeholder": "Enter value",
              "showSeparators": true,
              "showStepper": true,
              "value": 0,
              "inputValue": 0,
              "iconBefore": "",
              "textBefore": ""
            },
            "visualType": "input",
            "valueType": "number",
            "templateOverrideKeys": [
              "format",
              "iconBefore",
              "textBefore"
            ],
            "formGenerator": {
              "defaultForDataType": [
                "decimal",
                "money"
              ],
              "defaultForColumnFormat": [
                "CurrencyDataCell"
              ]
            },
            "idPrefix": "currency",
            "type": "NumberInputWidget"
          },
          {
            "name": "Editable Number",
            "description": "Display a click-to-edit number",
            "defaultWidth": 4,
            "defaultHeight": 7,
            "section": "Number inputs",
            "themeEditorSection": "Editable",
            "tags": [
              "v2",
              "integer",
              "float",
              "decimal",
              "percent",
              "currency",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2026.06h8.555M9.629%2019.5l-1.426%208.555M6.064%2019.5l-1.426%208.555M3.213%2022.067H11.5'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20clip-path='url(%23a)'%20fill='%23B2B2B2'%3e%3cpath%20d='M43.078%2019.59a.833.833%200%200%201%201.178%200l1.179%201.178a.833.833%200%200%201%200%201.178l-.59.59-2.356-2.358.589-.589ZM41.899%2020.768l2.357%202.356-4.715%204.715-2.356-2.357zM36.596%2026.071l2.357%202.357-2.334.467a.417.417%200%200%201-.49-.49l.467-2.334Z'/%3e%3c/g%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M16%2024h12'/%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(36%2019)'%20d='M0%200h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2010.745h11.406M11.505%202%209.604%2013.406M6.752%202%204.851%2013.406M2.95%205.423H14'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "number",
            "formGenerator": true,
            "idPrefix": "editableNumber",
            "type": "EditableNumberWidget"
          },
          {
            "name": "Number Input",
            "description": "Enter a number",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Number inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Number"
            },
            "tags": [
              "v2",
              "integer",
              "float",
              "decimal",
              "percent",
              "currency",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M4.5%2026.06h8.555M11.629%2019.5l-1.426%208.555M8.064%2019.5l-1.426%208.555M5.213%2022.067H13.5'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2010.745h11.406M11.505%202%209.604%2013.406M6.752%202%204.851%2013.406M2.95%205.423H14'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "currency": "USD",
              "format": "decimal",
              "placeholder": "Enter value",
              "showSeparators": true,
              "showStepper": true,
              "value": 0,
              "inputValue": 0,
              "iconBefore": "",
              "textBefore": ""
            },
            "visualType": "input",
            "valueType": "number",
            "templateOverrideKeys": [
              "format",
              "iconBefore",
              "textBefore"
            ],
            "formGenerator": {
              "defaultForDataType": [
                "tinyint",
                "smallint",
                "mediumint",
                "int",
                "int2",
                "int4",
                "int8",
                "integer",
                "numeric",
                "real",
                "double",
                "float",
                "float4",
                "float8",
                "smallserial",
                "serial",
                "bigserial",
                "fixed",
                "number"
              ],
              "defaultForColumnFormat": [
                "NumberDataCell"
              ]
            },
            "idPrefix": "numberInput",
            "type": "NumberInputWidget"
          },
          {
            "name": "Percent",
            "description": "Enter a number as a percentage",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Number inputs",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "number",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='m15.5%2019.5-9%209'%20stroke='%23B2B2B2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cellipse%20cx='8'%20cy='21.375'%20rx='1.5'%20ry='1.875'%20stroke='%23B2B2B2'%20stroke-width='1.5'/%3e%3cellipse%20cx='14'%20cy='26.625'%20rx='1.5'%20ry='1.875'%20stroke='%23B2B2B2'%20stroke-width='1.5'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%202%202%2014'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cellipse%20cx='4'%20cy='4.5'%20rx='2'%20ry='2.5'%20stroke='%23B2B2B2'%20stroke-width='2'/%3e%3cellipse%20cx='12'%20cy='11.5'%20rx='2'%20ry='2.5'%20stroke='%23B2B2B2'%20stroke-width='2'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "currency": "USD",
              "format": "percent",
              "min": 0,
              "max": 1,
              "placeholder": "Enter value",
              "showSeparators": true,
              "showStepper": true,
              "value": 0,
              "inputValue": 0,
              "iconBefore": "",
              "textBefore": ""
            },
            "visualType": "input",
            "valueType": "number",
            "templateOverrideKeys": [
              "format",
              "min",
              "max",
              "iconBefore",
              "textBefore"
            ],
            "formGenerator": {
              "defaultForColumnFormat": [
                "PercentDataCell"
              ]
            },
            "idPrefix": "percent",
            "type": "NumberInputWidget"
          },
          {
            "name": "Phone Number",
            "description": "Enter and validate a phone number",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Number inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Number"
            },
            "tags": [
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='.8'%20y='15.8'%20width='46.4'%20height='16.4'%20rx='2.2'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'%3e%3c/rect%3e%3cpath%20stroke='%23BEBEBE'%20d='m8.354%2020.646%204%204'%3e%3c/path%3e%3cpath%20d='M8.351%2020.288a2.387%202.387%200%200%200-3.375%200l-.48.481a.398.398%200%200%200%200%20.563l1.586%201.586a.398.398%200%200%200%20.562%200l2.168-2.168-.46-.462ZM11.668%2028.505a.398.398%200%200%200%20.563%200l.48-.48a2.387%202.387%200%200%200%200-3.376l-.46-.461-2.169%202.168a.398.398%200%200%200%200%20.563l1.586%201.586Z'%20fill='%23BEBEBE'%3e%3c/path%3e%3cpath%20d='m8.812%2020.75-.46-.462a2.387%202.387%200%200%200-3.376%200l-.48.481a.398.398%200%200%200%200%20.563l1.586%201.586a.398.398%200%200%200%20.562%200l2.168-2.168Zm0%200%203.439%203.438m0%200%20.46.46a2.387%202.387%200%200%201%200%203.376l-.48.48a.398.398%200%200%201-.563%200l-1.586-1.585a.398.398%200%200%201%200-.563l2.168-2.168Z'%20stroke='%23BEBEBE'%20stroke-width='1.6'%3e%3c/path%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'%3e%3c/path%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'%3e%3c/path%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M.28%204.896c1.747%205.971%204.977%209.201%2010.948%2010.949a1.924%201.924%200%200%200%201.896-.505l2.095-2.095a1%201%200%200%200-.193-1.564l-2.196-1.317a1%201%200%200%200-1.096.043l-1.71%201.222a.986.986%200%200%201-.97.103C6.395%2010.557%205.566%209.728%204.392%207.07a.987.987%200%200%201%20.102-.971l1.222-1.71a1%201%200%200%200%20.044-1.096L4.443%201.098A1%201%200%200%200%202.88.906L.784%203a1.924%201.924%200%200%200-.505%201.896Z'%20fill='%23B2B2B2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='rotate(-90%208%208)'%20d='M0%200h16v16H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "lockedCountryCode": "US"
            },
            "formGenerator": {
              "defaultForColumnFormat": [
                "PhoneNumberDataCell"
              ]
            },
            "idPrefix": "phoneNumber",
            "type": "PhoneNumberInputWidget"
          },
          {
            "name": "Range Slider",
            "description": "Select start, end, and increment values",
            "defaultWidth": 3,
            "defaultHeight": 6,
            "section": "Number inputs",
            "themeEditorSection": "Sliders",
            "tags": [
              "slider",
              "number",
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='23'%20width='44'%20height='3'%20rx='1.5'%20fill='%23D8D8D8'/%3e%3crect%20x='12'%20y='23'%20width='22'%20height='3'%20rx='1.5'%20fill='%233170F9'/%3e%3ccircle%20cx='34.333'%20cy='24.399'%20r='3.899'%20fill='%23fff'%20stroke='%23BEBEBE'/%3e%3ccircle%20cx='14.399'%20cy='24.399'%20r='3.899'%20fill='%23fff'%20stroke='%23BEBEBE'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "value": {
                "start": 1,
                "end": 4
              },
              "max": 10,
              "step": 1
            },
            "visualType": "slider",
            "templateOverrideKeys": [
              "value"
            ],
            "formGenerator": true,
            "idPrefix": "rangeSlider",
            "type": "RangeSliderWidget"
          },
          {
            "name": "Rating",
            "description": "Select a star, heart, or smiley rating",
            "defaultHeight": 7,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.854%2017.9c.21-.617%201.082-.617%201.292%200l1.124%203.309h3.553c.668%200%20.938.86.389%201.242l-2.847%201.977%201.104%203.248c.212.622-.494%201.154-1.035.78L8.5%2026.416l-2.934%202.038c-.54.375-1.246-.157-1.035-.78l1.104-3.247-2.847-1.977c-.548-.381-.279-1.242.39-1.242h3.551l1.125-3.31z'%20fill='%23ECBB40'/%3e%3cpath%20d='M24.218%2017.9c.21-.617%201.082-.617%201.291%200l1.125%203.309h3.553c.668%200%20.937.86.389%201.242l-2.848%201.977%201.104%203.248c.212.622-.494%201.154-1.034.78l-2.934-2.039-2.935%202.038c-.54.375-1.246-.157-1.034-.78l1.104-3.247-2.847-1.977c-.549-.381-.28-1.242.389-1.242h3.552l1.125-3.31z'%20fill='%23D8D8D8'/%3e%3cpath%20d='M39.215%2017.996c.204-.628%201.093-.628%201.297%200l.882%202.715a.682.682%200%200%200%20.649.471h2.855c.66%200%20.935.846.4%201.234l-2.31%201.678a.682.682%200%200%200-.247.762l.883%202.716c.204.628-.515%201.15-1.05.762l-2.31-1.678a.682.682%200%200%200-.801%200l-2.31%201.678c-.534.388-1.253-.134-1.05-.762l.883-2.716a.682.682%200%200%200-.248-.762l-2.31-1.678c-.534-.388-.26-1.234.401-1.234h2.855c.296%200%20.558-.19.649-.47l.882-2.716z'%20fill='%23DEDEDE'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25%2017.451c-.346-.216-.866-.094-1.015.368l-1.036%203.186H19.6c-.661%200-.936.846-.401%201.234l2.71%201.97-1.035%203.186c-.204.628.515%201.15%201.05.762l2.71-1.97.367.267v-9.003z'%20fill='%23ECBB40'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.045%202.092c.29-.94%201.62-.94%201.91%200l.952%203.079a1%201%200%200%200%20.955.704h3.182c.956%200%201.367%201.214.607%201.795l-2.659%202.031a1%201%200%200%200-.348%201.09l.995%203.22c.287.93-.79%201.68-1.563%201.09l-2.469-1.887a1%201%200%200%200-1.214%200l-2.47%201.887c-.773.59-1.849-.16-1.562-1.09l.995-3.22a1%201%200%200%200-.348-1.09L1.349%207.67c-.76-.58-.35-1.795.607-1.795h3.182a1%201%200%200%200%20.955-.704l.952-3.08Z'%20fill='%23B2B2B2'%20stroke='%23B2B2B2'%20stroke-width='.5'/%3e%3c/svg%3e",
            "section": "Number inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Special"
            },
            "tags": [
              "v2",
              "stars",
              "hearts",
              "smilies",
              "smileys",
              "input"
            ],
            "template": {
              "labelPosition": "top",
              "value": 4.5,
              "size": "default",
              "allowHalf": true,
              "icons": "stars",
              "max": 5
            },
            "valueType": "number",
            "formGenerator": {
              "defaultForColumnName": [
                "rating",
                "rate"
              ],
              "defaultForColumnFormat": [
                "RatingDataCell"
              ]
            },
            "idPrefix": "rating",
            "type": "RatingWidget2"
          },
          {
            "name": "Slider",
            "description": "Select a single value in a range",
            "defaultWidth": 3,
            "defaultHeight": 6,
            "section": "Number inputs",
            "themeEditorSection": "Sliders",
            "tags": [
              "slider",
              "number",
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='10'%20y='22'%20width='34'%20height='3'%20rx='1.5'%20fill='%23D8D8D8'/%3e%3crect%20x='5'%20y='22'%20width='29'%20height='3'%20rx='1.5'%20fill='%233170F9'/%3e%3ccircle%20cx='31.399'%20cy='23.399'%20r='3.899'%20fill='%23fff'%20stroke='%23BEBEBE'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%205a1%201%200%201%201%202%200%201%201%200%200%201-2%200Zm3.83%201a3.001%203.001%200%200%201-5.66%200H2a1%201%200%200%201%200-2h5.17a3.001%203.001%200%200%201%205.66%200H14a1%201%200%201%201%200%202h-1.17ZM7%2011a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-3.83-1a3.001%203.001%200%200%201%205.66%200H14a1%201%200%201%201%200%202H8.83a3.001%203.001%200%200%201-5.66%200H2a1%201%200%201%201%200-2h1.17Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "labelPosition": "top",
              "value": 2,
              "min": 0,
              "max": 5,
              "step": 1
            },
            "valueType": "number",
            "visualType": "slider",
            "formGenerator": true,
            "idPrefix": "slider",
            "type": "SliderWidget2"
          }
        ]
      },
      {
        key: "Date & time inputs",
        title: "Date & time inputs",
        items: [
          {
            "name": "Calendar Input",
            "description": "Select a date from a calendar",
            "defaultHeight": 36,
            "defaultWidth": 3,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45%2043H3V17a1%201%200%200%201%201-1h40a1%201%200%200%201%201%201v26Z'%20fill='%23fff'/%3e%3cpath%20d='M12%2042V11M3%2023h42M3%2029h42M3%2035h42M36%2042V11'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M45%2016H3V7a1%201%200%200%201%201-1h40a1%201%200%200%201%201%201v9Z'%20fill='%23FCFCFC'/%3e%3cpath%20d='M5.57%208.91h1.328L8.3%2012.33h.06L9.76%208.91h1.328V14h-1.044v-3.314h-.043l-1.317%203.29h-.711l-1.317-3.302h-.043V14H5.57V8.91Zm8.872.887v-.888h4.18v.888h-1.558V14H16V9.797h-1.558ZM23.117%2014l-1.456-5.09h1.175l.843%203.536h.042l.93-3.537h1.007l.927%203.545h.045l.842-3.545h1.176L27.192%2014h-1.05l-.969-3.329h-.04L24.166%2014h-1.049Zm8.573-4.203v-.888h4.181v.888h-1.558V14h-1.064V9.797H31.69ZM39.22%2014V8.91h3.37v.887h-2.294v1.213h2.071v.887h-2.07V14H39.22Z'%20fill='%23B2B2B2'/%3e%3cpath%20d='M28%2042V16.5M20%2042V16.5'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3crect%20x='3'%20y='7'%20width='42'%20height='35'%20rx='3'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M20%2024v4a1%201%200%200%200%201%201h6a1%201%200%200%200%201-1v-4a1%201%200%200%200-1-1h-6a1%201%200%200%200-1%201Z'%20fill='%233170F9'/%3e%3cpath%20d='M3%2016h42'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%205H2v6.333c0%20.368.298.667.667.667h10.666c.368%200%20.667-.3.667-.667V5ZM2.667%201h10.666A2.667%202.667%200%200%201%2016%203.667v7.666A2.667%202.667%200%200%201%2013.333%2014H2.667A2.667%202.667%200%200%201%200%2011.333V3.667A2.667%202.667%200%200%201%202.667%201ZM6%207a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": {
              "section": "Selects",
              "subsection": "Calendar"
            },
            "tags": [
              "date",
              "v2",
              "calendar",
              "input"
            ],
            "template": {
              "value": "{{ new Date() }}",
              "labelPosition": "top"
            },
            "valueType": "dateTime",
            "visualType": "input",
            "formGenerator": true,
            "idPrefix": "calendarInput",
            "type": "CalendarInputWidget"
          },
          {
            "name": "Date",
            "description": "Select or enter a date",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.4%2022.5H6.6v4.737c0%20.228.185.413.414.413h7.972a.414.414%200%200%200%20.414-.413V22.5Zm-8.387-3.75h7.974c1.112%200%202.013.901%202.013%202.013v6.474a2.014%202.014%200%200%201-2.014%202.013H7.014A2.014%202.014%200%200%201%205%2027.237v-6.474c0-1.112.901-2.013%202.013-2.013Zm2.353%205.375a.875.875%200%201%201-1.75%200%20.875.875%200%200%201%201.75%200ZM8.49%2027.25a.875.875%200%201%200%200-1.75.875.875%200%200%200%200%201.75Zm3.384-3.125a.875.875%200%201%201-1.75%200%20.875.875%200%200%201%201.75%200ZM11%2027.25a.875.875%200%201%200%200-1.75.875.875%200%200%200%200%201.75Zm3.55-3.125a.875.875%200%201%201-1.75%200%20.875.875%200%200%201%201.75%200Z'%20fill='%23B2B2B2'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%205H2v6.333c0%20.368.298.667.667.667h10.666c.368%200%20.667-.3.667-.667V5ZM2.667%201h10.666A2.667%202.667%200%200%201%2016%203.667v7.666A2.667%202.667%200%200%201%2013.333%2014H2.667A2.667%202.667%200%200%201%200%2011.333V3.667A2.667%202.667%200%200%201%202.667%201ZM6%207a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Date"
            },
            "tags": [
              "calendar",
              "v2",
              "input"
            ],
            "template": {
              "labelPosition": "top",
              "dateFormat": "MMM d, yyyy",
              "datePlaceholder": "{{ self.dateFormat.toUpperCase() }}",
              "iconBefore": "bold/interface-calendar",
              "value": "{{ new Date() }}",
              "textBefore": ""
            },
            "valueType": "dateTime",
            "visualType": "input",
            "formGenerator": {
              "defaultForDataType": [
                "date"
              ],
              "defaultForColumnFormat": [
                "DateDataCell"
              ]
            },
            "templateOverrideKeys": [
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "date",
            "type": "DateWidget"
          },
          {
            "name": "Date Range",
            "description": "Specify start and end dates",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='5'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cg%20filter='url(%23a)'%3e%3crect%20x='4'%20y='23'%20width='43'%20height='20'%20rx='3'%20fill='%23FCFCFC'/%3e%3crect%20x='3.5'%20y='22.5'%20width='44'%20height='21'%20rx='3.5'%20stroke='%23DEDEDE'/%3e%3c/g%3e%3cpath%20d='M7%2027v3a1%201%200%200%200%201%201h5a1%201%200%200%200%201-1v-3a1%201%200%200%200-1-1H8a1%201%200%200%200-1%201Z'%20fill='%23DEDEDE'/%3e%3cpath%20d='M7%2035v3a1%201%200%200%200%201%201h16a1%201%200%200%200%201-1v-3a1%201%200%200%200-1-1H8a1%201%200%200%200-1%201Z'%20fill='%233170F933'/%3e%3cpath%20d='M21%2034.206v4.588c0%20.114.092.206.206.206H25.5a2.5%202.5%200%200%200%200-5h-4.294a.206.206%200%200%200-.206.206Z'%20fill='%233170F9'/%3e%3cpath%20d='M22%2027v3a1%201%200%200%200%201%201h20a1%201%200%200%200%201-1v-3a1%201%200%200%200-1-1H23a1%201%200%200%200-1%201Z'%20fill='%233170F933'/%3e%3cpath%20d='M31%2035v3a1%201%200%200%200%201%201h11a1%201%200%200%200%201-1v-3a1%201%200%200%200-1-1H32a1%201%200%200%200-1%201Z'%20fill='%23DEDEDE'/%3e%3cpath%20d='M22.794%2026H18.5a2.5%202.5%200%200%200%200%205h4.294a.206.206%200%200%200%20.206-.206v-4.588a.206.206%200%200%200-.206-.206Z'%20fill='%233170F9'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.6%2013.5v4.737c0%20.228.185.413.414.413h7.972a.414.414%200%200%200%20.414-.413V13.5H7.6Zm8.387-3.75H8.013A2.013%202.013%200%200%200%206%2011.763v6.474c0%201.112.902%202.013%202.014%202.013h7.972A2.014%202.014%200%200%200%2018%2018.237v-6.474a2.013%202.013%200%200%200-2.013-2.013ZM15.7%2015a.7.7%200%200%201-.7.7H9a.7.7%200%201%201%200-1.4h6a.7.7%200%200%201%20.7.7ZM12%2017.95a.7.7%200%201%200%200-1.4H9a.7.7%200%201%200%200%201.4h3Z'%20fill='%23B2B2B2'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M22%2014h12'/%3e%3cpath%20d='M39%2010h1.5m1.5%200h-1.5m0%200v8m0%200H39m1.5%200H42'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cdefs%3e%3cfilter%20id='a'%20x='3'%20y='22'%20width='45'%20height='23'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.8625%200%200%200%200%200.8625%200%200%200%200%200.8625%200%200%200%201%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1785:13682'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1785:13682'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.133%206v6.316c0%20.303.247.55.552.55h10.63a.552.552%200%200%200%20.552-.55V6H2.133Zm11.183-5H2.684A2.684%202.684%200%200%200%200%203.684v8.632A2.685%202.685%200%200%200%202.685%2015h10.63A2.685%202.685%200%200%200%2016%2012.316V3.684A2.684%202.684%200%200%200%2013.316%201Zm-.383%207a.933.933%200%200%201-.933.933H4a.933.933%200%201%201%200-1.866h8c.515%200%20.933.417.933.933ZM8%2011.933a.933.933%200%200%200%200-1.866H4a.933.933%200%200%200%200%201.866h4Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Date"
            },
            "tags": [
              "calendar",
              "v2",
              "input"
            ],
            "valueType": "dateTime",
            "idPrefix": "dateRange",
            "type": "DateRangeWidget"
          },
          {
            "name": "Date Time",
            "description": "Select or enter a date and time",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.435%2022.5H6.6v4.737c0%20.228.185.414.414.414h2.134c.156.589.428%201.13.79%201.6H7.014A2.014%202.014%200%200%201%205%2027.236v-6.473c0-1.112.901-2.014%202.013-2.014h7.974c1.112%200%202.013.902%202.013%202.014V23.672A4.491%204.491%200%200%200%2013.5%2022c-.744%200-1.446.181-2.065.5ZM8%2024.75a.75.75%200%201%200%200-1.5.75.75%200%200%200%200%201.5Zm.75%201.5a.75.75%200%201%201-1.5%200%20.75.75%200%200%201%201.5%200Z'%20fill='%23B2B2B2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.684%2028.65a3.15%203.15%200%200%200%200-4.473%203.197%203.197%200%200%200-4.502%200%203.15%203.15%200%200%200%200%204.474%203.197%203.197%200%200%200%204.502%200Zm-1.875-3.553a.522.522%200%201%200-1.044%200v1.5c0%20.245.17.458.41.51l1.636.356a.522.522%200%201%200%20.223-1.02l-1.226-.267v-1.08Z'%20fill='%23B2B2B2'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.697%2014.739a4.2%204.2%200%200%200%200-5.966%204.263%204.263%200%200%200-6.003%200%204.2%204.2%200%200%200%200%205.966%204.263%204.263%200%200%200%206.003%200ZM12.19%2010a.691.691%200%201%200-1.382%200v2c0%20.325.226.606.544.676l2.181.475a.691.691%200%200%200%20.295-1.351l-1.638-.357V10Z'%20fill='%23B2B2B2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%205h12v1.116a6.163%206.163%200%200%201%202%201.334V3.667A2.667%202.667%200%200%200%2013.333%201H2.667A2.667%202.667%200%200%200%200%203.667v7.666A2.667%202.667%200%200%200%202.667%2014h3.374a6.1%206.1%200%200%201-.433-2h-2.94A.667.667%200%200%201%202%2011.333V5Zm3.95%204.686a5.9%205.9%200%200%200-.268%201.046%201%201%200%201%201%20.268-1.045ZM8.785%206.38a6.072%206.072%200%200%200-1.58%201.227%201%201%200%200%201%201.58-1.227ZM5%208a1%201%200%201%200%200-2%201%201%200%200%200%200%202Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Date"
            },
            "tags": [
              "calendar",
              "v2",
              "input"
            ],
            "template": {
              "labelPosition": "top",
              "value": "{{ new Date() }}",
              "dateFormat": "MMM d, yyyy",
              "minuteStep": 15,
              "iconBefore": "bold/interface-calendar",
              "datePlaceholder": "{{ self.dateFormat.toUpperCase() }}",
              "textBefore": ""
            },
            "valueType": "dateTime",
            "visualType": "input",
            "formGenerator": {
              "defaultForDataType": [
                "datetime",
                "timestamp",
                "timestamptz",
                "timestamp_zt",
                "timestamp_ltz",
                "timestamp_ntz"
              ],
              "defaultForColumnFormat": [
                "DateTimeDataCell"
              ]
            },
            "templateOverrideKeys": [
              "placeholder",
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "dateTime",
            "type": "DateTimeWidget"
          },
          {
            "name": "Day",
            "idPrefix": "day",
            "description": "Select or enter a day",
            "defaultHeight": 8,
            "defaultWidth": 3,
            "icon": "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20fill='none'%20xmlns:v='https://vecta.io/nano'%3e%3cg%20stroke-width='1.6'%3e%3cpath%20d='M44%2015H4a3%203%200%200%200-3%203v13a3%203%200%200%200%203%203h40a3%203%200%200%200%203-3V18a3%203%200%200%200-3-3z'%20fill='%23fcfcfc'%20stroke='%23d8d8d8'/%3e%3cpath%20d='M38%2024l2.5%202%202.5-2'%20stroke='%23bebebe'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20d='M8.582%2029.109c-.562%200-1.062-.096-1.5-.289s-.779-.461-1.031-.805-.387-.741-.402-1.191h1.469a.97.97%200%200%200%20.215.566c.13.159.303.283.52.371a1.9%201.9%200%200%200%20.727.133c.286%200%20.54-.049.762-.148s.395-.242.52-.422a1.04%201.04%200%200%200%20.184-.621%201.08%201.08%200%200%200-.188-.641c-.128-.185-.312-.329-.555-.434s-.529-.156-.867-.156h-.707v-1.117h.707c.279%200%20.522-.048.73-.145a1.18%201.18%200%200%200%20.496-.406c.12-.177.178-.381.176-.613.003-.227-.048-.423-.152-.59a1.03%201.03%200%200%200-.434-.395c-.185-.094-.402-.141-.652-.141a1.72%201.72%200%200%200-.68.133c-.208.089-.376.215-.504.379a.96.96%200%200%200-.203.578H5.816c.01-.448.139-.841.387-1.18s.583-.607%201-.797.884-.289%201.402-.289c.534%200%20.997.1%201.391.301s.702.465.918.801.324.707.324%201.113c.003.451-.13.828-.399%201.133a1.87%201.87%200%200%201-1.047.598v.063c.563.078.994.287%201.293.625s.452.754.449%201.254c0%20.448-.128.849-.383%201.203s-.601.628-1.047.828-.951.301-1.523.301zM16.13%2021v8h-1.449v-6.59h-.047l-1.871%201.195v-1.328L14.751%2021h1.379z'%20fill='%23757575'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%205H2v6.333c0%20.368.298.667.667.667h10.666c.368%200%20.667-.3.667-.667V5ZM2.667%201h10.666A2.667%202.667%200%200%201%2016%203.667v7.666A2.667%202.667%200%200%201%2013.333%2014H2.667A2.667%202.667%200%200%201%200%2011.333V3.667A2.667%202.667%200%200%201%202.667%201ZM6%207a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": null,
            "tags": [
              "date",
              "calendar",
              "v2",
              "input"
            ],
            "valueType": "primitive",
            "visualType": "listbox",
            "type": "SelectWidget2"
          },
          {
            "name": "Month",
            "idPrefix": "month",
            "description": "Select or enter a month",
            "defaultHeight": 8,
            "defaultWidth": 3,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='19'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='m38%2024%202.5%202%202.5-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.79%2021v8h1.39v-5.508h.074l2.21%205.485h1.04l2.21-5.473h.075V29h1.39v-8h-1.773l-2.375%205.797h-.094L7.563%2021H5.788Zm11.632%208.121c.941%200%201.504-.441%201.762-.945h.046V29h1.36v-4.016c0-1.586-1.293-2.062-2.438-2.062-1.261%200-2.23.562-2.543%201.656l1.32.188c.141-.41.54-.762%201.231-.762.656%200%201.016.336%201.016.926v.023c0%20.406-.426.426-1.485.54-1.164.124-2.277.472-2.277%201.823%200%201.18.863%201.805%202.008%201.805Zm.367-1.039c-.59%200-1.012-.27-1.012-.789%200-.543.473-.77%201.106-.86.37-.05%201.113-.144%201.297-.292v.707c0%20.668-.54%201.234-1.39%201.234Zm4.223.918h1.414v-3.527c0-.762.574-1.301%201.351-1.301.239%200%20.535.043.657.082v-1.3a3.401%203.401%200%200%200-.508-.04c-.688%200-1.262.39-1.48%201.086h-.063v-1h-1.371v6Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%205H2v6.333c0%20.368.298.667.667.667h10.666c.368%200%20.667-.3.667-.667V5ZM2.667%201h10.666A2.667%202.667%200%200%201%2016%203.667v7.666A2.667%202.667%200%200%201%2013.333%2014H2.667A2.667%202.667%200%200%201%200%2011.333V3.667A2.667%202.667%200%200%201%202.667%201ZM6%207a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": null,
            "tags": [
              "date",
              "calendar",
              "v2",
              "input"
            ],
            "valueType": "primitive",
            "visualType": "listbox",
            "type": "SelectWidget2"
          },
          {
            "name": "Time",
            "description": "Select or enter a time",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.55%2024a4.45%204.45%200%201%201%208.9%200%204.45%204.45%200%200%201-8.9%200ZM11%2017.95a6.05%206.05%200%201%200%200%2012.1%206.05%206.05%200%200%200%200-12.1ZM10.2%2021a.8.8%200%201%201%201.6%200v3.02a.8.8%200%200%201-.49.737l-2.624%201.106a.8.8%200%200%201-.621-1.475l2.135-.9V21Z'%20fill='%23B2B2B2'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M21%2024h12'/%3e%3cpath%20d='M38%2020h1.5m1.5%200h-1.5m0%200v8m0%200H38m1.5%200H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%208a6%206%200%201%201%2012%200A6%206%200%200%201%202%208Zm6-8a8%208%200%201%200%200%2016A8%208%200%200%200%208%200ZM7%205.333a1%201%200%200%201%202%200v2.693a1%201%200%200%201-.652.937L5.451%2010.04a1%201%200%201%201-.697-1.875L7%207.331V5.332Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Date"
            },
            "tags": [
              "calendar",
              "v2",
              "input"
            ],
            "template": {
              "labelPosition": "top",
              "value": "{{ new Date() }}",
              "minuteStep": 15,
              "iconBefore": "bold/interface-time-clock-circle-alternate",
              "textBefore": ""
            },
            "valueType": "dateTime",
            "visualType": "input",
            "formGenerator": {
              "defaultForDataType": [
                "time",
                "timetz"
              ],
              "defaultForColumnFormat": [
                "TimeDataCell"
              ]
            },
            "templateOverrideKeys": [
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "time",
            "type": "TimeWidget"
          },
          {
            "name": "Year",
            "idPrefix": "year",
            "description": "Select or enter a year",
            "defaultHeight": 8,
            "defaultWidth": 2,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='19'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='m38%2024%202.5%202%202.5-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.965%2021h-1.38l-1.987%201.277v1.328l1.87-1.195h.048V29h1.449v-8Zm4.808-.11c-1.734-.011-2.886%201.18-2.886%202.743.004%201.508%201.078%202.598%202.48%202.598.863%200%201.613-.419%202-1.106h.055c-.004%201.71-.625%202.73-1.73%202.73-.692%200-1.157-.398-1.301-1.035h-1.426c.164%201.325%201.21%202.29%202.726%202.29%201.918%200%203.141-1.602%203.137-4.356-.004-2.914-1.52-3.856-3.055-3.863Zm.004%201.172c.856%200%201.485.711%201.485%201.528.004.828-.657%201.539-1.5%201.539-.852%200-1.465-.672-1.469-1.527%200-.86.637-1.54%201.484-1.54Zm7.13-1.171c-1.735-.012-2.887%201.18-2.887%202.742.003%201.508%201.078%202.598%202.48%202.598.863%200%201.613-.419%202-1.106h.055c-.004%201.71-.625%202.73-1.73%202.73-.692%200-1.157-.398-1.302-1.035h-1.425c.164%201.325%201.21%202.29%202.726%202.29%201.918%200%203.14-1.602%203.137-4.356-.004-2.914-1.52-3.856-3.055-3.863Zm.003%201.172c.856%200%201.485.71%201.485%201.527.003.828-.657%201.539-1.5%201.539-.852%200-1.465-.672-1.47-1.527%200-.86.637-1.54%201.485-1.54Zm7.309%207.09c1.93.003%203.082-1.52%203.082-4.145%200-2.61-1.16-4.117-3.082-4.117s-3.078%201.504-3.082%204.117c0%202.62%201.152%204.144%203.082%204.144Zm0-1.223c-.996%200-1.621-1-1.617-2.922.003-1.906.625-2.91%201.617-2.91.996%200%201.617%201.004%201.62%202.91%200%201.922-.62%202.922-1.62%202.922Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%205H2v6.333c0%20.368.298.667.667.667h10.666c.368%200%20.667-.3.667-.667V5ZM2.667%201h10.666A2.667%202.667%200%200%201%2016%203.667v7.666A2.667%202.667%200%200%201%2013.333%2014H2.667A2.667%202.667%200%200%201%200%2011.333V3.667A2.667%202.667%200%200%201%202.667%201ZM6%207a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Zm-1%204a1%201%200%201%200%200-2%201%201%200%200%200%200%202Zm4-4a1%201%200%201%201-2%200%201%201%200%200%201%202%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Date and time inputs",
            "themeEditorSection": null,
            "tags": [
              "date",
              "calendar",
              "v2",
              "input"
            ],
            "valueType": "primitive",
            "visualType": "listbox",
            "type": "SelectWidget2"
          }
        ]
      },
      {
        key: "Special inputs",
        title: "Special inputs",
        items: [
          {
            "name": "Agent Chat",
            "description": "Chat with an AI agent",
            "defaultWidth": 8,
            "defaultHeight": 48,
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Other"
            },
            "tags": [
              "container",
              "v2",
              "ai",
              "chat",
              "agent",
              "llm"
            ],
            "badge": "New",
            "icon": "data:image/svg+xml,%3csvg%20width='44'%20height='38'%20viewBox='0%200%2044%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_628_7851)'%3e%3crect%20x='0.75'%20y='0.75'%20width='42.5'%20height='36.5'%20rx='3.25'%20fill='%23FCFCFC'%20stroke='%23D3D2D3'%20stroke-width='1.5'/%3e%3crect%20x='3.75'%20y='23.75'%20width='36.5'%20height='10.5'%20rx='2.25'%20stroke='%23D3D2D3'%20stroke-width='1.5'/%3e%3cpath%20d='M6.5%2010C7.88071%2010%209%208.88071%209%207.5C9%206.11929%207.88071%205%206.5%205C5.11929%205%204%206.11929%204%207.5C4%208.88071%205.11929%2010%206.5%2010Z'%20fill='%23ECBB40'/%3e%3cpath%20d='M6.5%2019C7.88071%2019%209%2017.8807%209%2016.5C9%2015.1193%207.88071%2014%206.5%2014C5.11929%2014%204%2015.1193%204%2016.5C4%2017.8807%205.11929%2019%206.5%2019Z'%20fill='%23CB7DD6'/%3e%3cpath%20d='M12%206H39'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2011H30'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2016H39'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M36.7768%2028.637L31.5861%2026.0431C31.5102%2026.0049%2031.4242%2025.9916%2031.3403%2026.0051C31.2564%2026.0186%2031.1789%2026.0582%2031.1188%2026.1182C31.0586%2026.1782%2031.0189%2026.2556%2031.0053%2026.3395C30.9916%2026.4234%2031.0047%2026.5094%2031.0427%2026.5854L31.9828%2028.467L33.9986%2028.9993L31.9761%2029.5439L31.0427%2031.4132C31.0122%2031.4749%2030.9979%2031.5432%2031.0011%2031.6119C31.0042%2031.6806%2031.0248%2031.7474%2031.0607%2031.806C31.0967%2031.8646%2031.1469%2031.9132%2031.2067%2031.9471C31.2665%2031.981%2031.334%2031.9992%2031.4027%2032C31.4665%2031.9998%2031.5293%2031.9846%2031.5861%2031.9555L36.7768%2029.3616C36.8439%2029.3278%2036.9003%2029.276%2036.9397%2029.2121C36.9791%2029.1481%2037%2029.0744%2037%2028.9993C37%2028.9242%2036.9791%2028.8505%2036.9397%2028.7865C36.9003%2028.7226%2036.8439%2028.6708%2036.7768%2028.637Z'%20fill='%233170F9'/%3e%3cpath%20d='M32.2395%2029.0048L32.2206%2028.9792C32.2234%2028.9969%2032.2234%2029.0149%2032.2206%2029.0326L32.2395%2029.0048Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_628_7851'%3e%3crect%20width='44'%20height='38'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "defaultQueries": [
              {
                "type": "datasource",
                "subtype": "RetoolAIAgentInvokeQuery",
                "resourceName": "RetoolAIAgentInvokeQuery"
              }
            ],
            "idPrefix": "agentChat",
            "type": "AgentChatWidget"
          },
          {
            "name": "Annotated Text",
            "description": "Select and tag text",
            "defaultWidth": 6,
            "defaultHeight": 35,
            "section": "Special inputs",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3'%20y='6'%20width='42'%20height='36'%20rx='4'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23EDEDED'%20stroke-width='2'%20stroke-linecap='round'%20d='M9%2027h30M9%2032h30M9%2022h30'/%3e%3cpath%20stroke='%233170F9'%20stroke-width='2'%20stroke-linecap='round'%20d='M15%2022h5'/%3e%3cpath%20stroke='%23E7B6E4'%20stroke-width='2'%20stroke-linecap='round'%20d='M24%2027h8'/%3e%3cpath%20stroke='%233170F9'%20stroke-width='2'%20stroke-linecap='round'%20d='M14%2032h8'/%3e%3cpath%20stroke='%23EDEDED'%20stroke-width='2'%20stroke-linecap='round'%20d='M9%2037h15'/%3e%3cpath%20d='M10.24%2010.186a1%201%200%200%201%20.58-.186h6.68a1%201%200%200%201%201%201v3a1%201%200%200%201-1%201h-6.68a1%201%200%200%201-.58-.186l-2.1-1.5a1%201%200%200%201%200-1.628l2.1-1.5Z'%20fill='%23E7B6E4'/%3e%3cpath%20d='M23.24%2010.186a1%201%200%200%201%20.58-.186h6.68a1%201%200%200%201%201%201v3a1%201%200%200%201-1%201h-6.68a1%201%200%200%201-.58-.186l-2.1-1.5a1%201%200%200%201%200-1.628l2.1-1.5Z'%20fill='%233170F9'/%3e%3ccircle%20cx='11'%20cy='12.5'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='24'%20cy='12.5'%20r='1'%20fill='%23fff'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "annotatedText",
            "type": "TextAnnotationWidget"
          },
          {
            "name": "Bounding Box",
            "description": "Select and tag areas of an image",
            "defaultWidth": 6,
            "defaultHeight": 35,
            "section": "Special inputs",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='8'%20width='40'%20height='33'%20rx='2'%20fill='%23fff'/%3e%3cmask%20id='a'%20fill='%23fff'%3e%3crect%20x='9'%20y='12'%20width='21'%20height='19'%20rx='1.39'/%3e%3c/mask%3e%3crect%20x='9'%20y='12'%20width='21'%20height='19'%20rx='1.39'%20fill='%2382BF99'%20fill-opacity='.17'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23a)'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3crect%20x='8'%20y='11'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='8'%20y='11'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23b)'/%3e%3cmask%20id='c'%20fill='%23fff'%3e%3crect%20x='8'%20y='28'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='8'%20y='28'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23c)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3crect%20x='27'%20y='11'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='27'%20y='11'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23d)'/%3e%3cmask%20id='e'%20fill='%23fff'%3e%3crect%20x='27'%20y='28'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='27'%20y='28'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23e)'/%3e%3cpath%20d='M10%208H6a2%202%200%200%200-2%202v4M38%2041h4a2%202%200%200%200%202-2v-4M44%2014v-4a2%202%200%200%200-2-2h-4M4%2035v4a2%202%200%200%200%202%202h4'%20stroke='%23D8D8D8'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3crect%20x='22.8'%20y='22.8'%20width='16.4'%20height='13.4'%20rx='.908'%20fill='%2382BF99'%20fill-opacity='.17'%20stroke='%2382BF99'%20stroke-width='1.6'/%3e%3cmask%20id='f'%20fill='%23fff'%3e%3crect%20x='21'%20y='21'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='21'%20y='21'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23f)'/%3e%3cmask%20id='g'%20fill='%23fff'%3e%3crect%20x='21'%20y='34'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='21'%20y='34'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23g)'/%3e%3cmask%20id='h'%20fill='%23fff'%3e%3crect%20x='37'%20y='21'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='37'%20y='21'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23h)'/%3e%3cmask%20id='i'%20fill='%23fff'%3e%3crect%20x='37'%20y='34.268'%20width='4.1'%20height='4.088'%20rx='.569'/%3e%3c/mask%3e%3crect%20x='37'%20y='34.268'%20width='4.1'%20height='4.088'%20rx='.569'%20fill='%23fff'%20stroke='%2382BF99'%20stroke-width='3.2'%20mask='url(%23i)'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "boundingBox",
            "type": "BoundingBoxWidget"
          },
          {
            "name": "Color Input",
            "description": "Select and adjust color values",
            "defaultWidth": 4,
            "defaultHeight": 8,
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Special"
            },
            "tags": [
              "v2",
              "color",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='15'%20width='46'%20height='18'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cline%20x1='21'%20y1='24'%20x2='33'%20y2='24'%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M38%2020H39.5M41%2020H39.5M39.5%2020V28M39.5%2028H38M39.5%2028H41'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3crect%20x='6.5'%20y='19.5'%20width='9'%20height='9'%20rx='2.5'%20fill='%23C7C7C7'%20stroke='%23C7C7C7'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205.432V3.73A.73.73%200%200%201%203.73%203H8m5%202.432V3.73a.73.73%200%200%200-.73-.73H8m0%200v10m0%200H5.481M8%2013h2.735'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "visualType": "input",
            "valueType": "color",
            "templateOverrideKeys": [
              "iconBefore",
              "textBefore"
            ],
            "idPrefix": "colorInput",
            "type": "ColorInputWidget"
          },
          {
            "name": "Comment Thread",
            "description": "Chat with other app users",
            "defaultWidth": 4,
            "defaultHeight": 48,
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Other"
            },
            "tags": [
              "container",
              "v2",
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3'%20y='6'%20width='42'%20height='36'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M14%2010h27M14%2020h27M14%2015h11'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='1.6'%20d='M3%2025.2h42'/%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20x='6'%20y='30.25'%20width='9'%20height='6'%20rx='.75'%20fill='%23BEBEBE'/%3e%3cpath%20d='M10.317%2037.845a.75.75%200%200%201-1.134%200L7.802%2036.25h3.897l-1.382%201.595Z'%20fill='%23BEBEBE'/%3e%3cpath%20stroke='%23fff'%20stroke-width='.75'%20d='M7.5%2032.125h6M7.5%2034.375h3'/%3e%3c/g%3e%3ccircle%20cx='8.5'%20cy='11.5'%20r='2.5'%20fill='%23747FD8'/%3e%3ccircle%20cx='8.5'%20cy='20.5'%20r='2.5'%20fill='%23ECBB40'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M20%2034h10'/%3e%3cpath%20d='M36%2029h2m2%200h-2m0%200v10m0%200h-2m2%200h2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(6%2029.5)'%20d='M0%200h9v9H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "idPrefix": "commentThread",
            "type": "CommentThreadWidget"
          },
          {
            "name": "File Button",
            "description": "Browse and select files",
            "defaultHeight": 5,
            "defaultWidth": 2,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='6'%20y='16'%20width='35'%20height='16'%20rx='3'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M23.596%2027h1.23v-2.403h2.366v-1.015h-2.366v-1.386h2.622v-1.014h-3.852V27Zm4.657%200h1.21v-4.364h-1.21V27Zm.607-4.926c.361%200%20.657-.276.657-.614%200-.335-.296-.61-.657-.61-.357%200-.653.275-.653.61%200%20.338.296.614.653.614Zm2.782-.892h-1.21V27h1.21v-5.818Zm2.958%205.903c1.08%200%201.807-.525%201.978-1.335l-1.12-.074c-.122.333-.434.506-.838.506-.605%200-.988-.4-.988-1.051v-.003h2.971v-.332c0-1.483-.897-2.216-2.05-2.216-1.285%200-2.117.912-2.117%202.258%200%201.384.82%202.247%202.164%202.247Zm-.968-2.707a.922.922%200%200%201%20.94-.895c.526%200%20.89.375.892.895h-1.832Z'%20fill='%238E8E8E'/%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M20.167%2021.917v3.333c0%20.92-.747%201.667-1.667%201.667h-5.833c-.92%200-1.667-.747-1.667-1.667v-5h7.5c.92%200%201.667.746%201.667%201.667Z'%20fill='%23BEBEBE'/%3e%3cpath%20d='M12%2019h3a1%201%200%200%201%201%201v1.5h-5V20a1%201%200%200%201%201-1Z'%20fill='%23BEBEBE'/%3e%3cpath%20fill='%23fff'%20d='M19.334%2025.667h.833v2.5h-.833zM18.5%2026.5h.833v1.667H18.5zM16%2026.5h2.5v1.667H16z'/%3e%3ccircle%20cx='17.667'%20cy='25.667'%20r='3.333'%20fill='%23fff'%20stroke='%23fff'%20stroke-width='.833'/%3e%3ccircle%20cx='17.666'%20cy='25.667'%20r='1.833'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3cpath%20d='m18.938%2026.856%201.735%201.736'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(11%2019)'%20d='M0%200h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Outline"
            },
            "tags": [
              "upload",
              "v2",
              "input"
            ],
            "valueType": "base64[]",
            "idPrefix": "fileButton",
            "type": "FileButtonWidget"
          },
          {
            "name": "File Dropzone",
            "description": "Drag and drop files",
            "defaultHeight": 10,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='9'%20width='44'%20height='30'%20rx='5'%20fill='%23F6F6F6'%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20stroke-dasharray='2%206'/%3e%3cpath%20d='m10.493%2033%20.432-1.327h2.1L13.455%2033h1.318l-2.005-5.818h-1.586L9.175%2033h1.318Zm.744-2.287.716-2.202H12l.715%202.202h-1.477Zm5.62%202.358c.704%200%201.07-.406%201.238-.77h.051V33h1.194v-5.818h-1.208v2.187h-.037c-.162-.355-.511-.79-1.241-.79-.958%200-1.767.745-1.767%202.245%200%201.46.775%202.247%201.77%202.247Zm.383-.963c-.594%200-.918-.528-.918-1.29%200-.756.319-1.275.918-1.275.588%200%20.918.497.918%201.275%200%20.779-.336%201.29-.918%201.29Zm4.703.963c.704%200%201.07-.406%201.238-.77h.051V33h1.193v-5.818h-1.207v2.187h-.037c-.162-.355-.511-.79-1.241-.79-.958%200-1.767.745-1.767%202.245%200%201.46.775%202.247%201.77%202.247Zm.383-.963c-.594%200-.918-.528-.918-1.29%200-.756.319-1.275.918-1.275.588%200%20.918.497.918%201.275%200%20.779-.336%201.29-.918%201.29Zm7.293-3.472h-.867v-.292c0-.296.12-.469.475-.469.144%200%20.292.031.389.063l.213-.91a3.19%203.19%200%200%200-.855-.119c-.821%200-1.432.463-1.432%201.412v.315h-.617v.91h.617V33h1.21v-3.454h.867v-.91ZM30.358%2033h1.21v-4.364h-1.21V33Zm.608-4.926c.36%200%20.656-.276.656-.614%200-.335-.295-.61-.656-.61-.358%200-.654.275-.654.61%200%20.338.296.614.654.614Zm2.782-.892h-1.21V33h1.21v-5.818Zm2.958%205.903c1.08%200%201.807-.525%201.977-1.335l-1.12-.074c-.121.332-.434.506-.837.506-.605%200-.989-.4-.989-1.051v-.003h2.972v-.332c0-1.483-.898-2.216-2.051-2.216-1.284%200-2.117.912-2.117%202.258%200%201.384.821%202.247%202.165%202.247Zm-.969-2.707a.922.922%200%200%201%20.94-.895c.526%200%20.89.375.893.895h-1.833Z'%20fill='%238E8E8E'/%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M28.167%2016.917v3.333c0%20.92-.747%201.667-1.667%201.667h-5.833c-.92%200-1.667-.747-1.667-1.667v-5h7.5c.92%200%201.667.746%201.667%201.667Z'%20fill='%23BEBEBE'/%3e%3cpath%20d='M20%2014h3a1%201%200%200%201%201%201v1.5h-5V15a1%201%200%200%201%201-1Z'%20fill='%23BEBEBE'/%3e%3cpath%20fill='%23fff'%20d='M27.334%2020.667h.833v2.5h-.833zM26.5%2021.5h.833v1.667H26.5zM24%2021.5h2.5v1.667H24z'/%3e%3ccircle%20cx='25.667'%20cy='20.667'%20r='3.333'%20fill='%23F5F5F5'%20stroke='%23F5F5F5'%20stroke-width='.833'/%3e%3ccircle%20cx='25.666'%20cy='20.667'%20r='1.833'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3cpath%20d='m26.938%2021.856%201.735%201.736'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(19%2014)'%20d='M0%200h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "File"
            },
            "tags": [
              "upload",
              "v2",
              "input"
            ],
            "valueType": "base64[]",
            "idPrefix": "fileDropzone",
            "type": "FileDropzoneWidget"
          },
          {
            "name": "File Input",
            "description": "Browse and select files",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='17'%20width='44'%20height='16'%20rx='3'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M2%2020a3%203%200%200%201%203-3h15v16H5a3%203%200%200%201-3-3V20Z'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M15.167%2022.917v3.333c0%20.92-.746%201.667-1.667%201.667H7.667C6.747%2027.917%206%2027.17%206%2026.25v-5h7.5c.92%200%201.667.746%201.667%201.667Z'%20fill='%23BEBEBE'/%3e%3cpath%20d='M7%2020h3a1%201%200%200%201%201%201v1.5H6V21a1%201%200%200%201%201-1Z'%20fill='%23BEBEBE'/%3e%3cpath%20fill='%23fff'%20d='M14.334%2026.667h.833v2.5h-.833zM13.5%2027.5h.833v1.667H13.5zM11%2027.5h2.5v1.667H11z'/%3e%3ccircle%20cx='12.667'%20cy='26.667'%20r='3.333'%20fill='%23fff'%20stroke='%23fff'%20stroke-width='.833'/%3e%3ccircle%20cx='12.666'%20cy='26.667'%20r='1.833'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3cpath%20d='m13.938%2027.856%201.735%201.736'%20stroke='%23BEBEBE'%20stroke-width='1.167'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20transform='translate(6%2020)'%20d='M0%200h10v10H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.667%200H1.333C.597%200%200%20.597%200%201.333V10a2.667%202.667%200%200%200%202.667%202.667h2.341a6%206%200%200%201%209.659-6.472V4.666A2.667%202.667%200%200%200%2012%202H8v-.667C8%20.597%207.403%200%206.667%200Zm-.218%2012.667Zm8.484-1.867c0%20.754-.202%201.461-.554%202.07l1.042%201.042a1.067%201.067%200%201%201-1.508%201.509l-1.043-1.043a4.133%204.133%200%201%201%202.063-3.578Zm-4.133%202a2%202%200%201%200%200-4%202%202%200%200%200%200%204Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Inputs",
              "subsection": "Special"
            },
            "tags": [
              "upload",
              "v2",
              "input"
            ],
            "valueType": "base64[]",
            "formGenerator": {
              "defaultForDataType": [
                "blob",
                "mediumblob",
                "longblob",
                "bytea"
              ],
              "defaultForColumnFormat": [
                "ImageUploadDataCell"
              ]
            },
            "idPrefix": "fileInput",
            "type": "FileInputWidget"
          },
          {
            "name": "LLM Chat",
            "description": "AI-powered Chatbot",
            "defaultWidth": 4,
            "defaultHeight": 48,
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Other"
            },
            "tags": [
              "container",
              "v2",
              "ai",
              "llm",
              "chat"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='44'%20height='38'%20viewBox='0%200%2044%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_628_7851)'%3e%3crect%20x='0.75'%20y='0.75'%20width='42.5'%20height='36.5'%20rx='3.25'%20fill='%23FCFCFC'%20stroke='%23D3D2D3'%20stroke-width='1.5'/%3e%3crect%20x='3.75'%20y='23.75'%20width='36.5'%20height='10.5'%20rx='2.25'%20stroke='%23D3D2D3'%20stroke-width='1.5'/%3e%3cpath%20d='M6.5%2010C7.88071%2010%209%208.88071%209%207.5C9%206.11929%207.88071%205%206.5%205C5.11929%205%204%206.11929%204%207.5C4%208.88071%205.11929%2010%206.5%2010Z'%20fill='%23ECBB40'/%3e%3cpath%20d='M6.5%2019C7.88071%2019%209%2017.8807%209%2016.5C9%2015.1193%207.88071%2014%206.5%2014C5.11929%2014%204%2015.1193%204%2016.5C4%2017.8807%205.11929%2019%206.5%2019Z'%20fill='%23CB7DD6'/%3e%3cpath%20d='M12%206H39'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2011H30'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2016H39'%20stroke='%23D3D2D3'%20stroke-width='1.8'%20stroke-linecap='round'/%3e%3cpath%20d='M36.7768%2028.637L31.5861%2026.0431C31.5102%2026.0049%2031.4242%2025.9916%2031.3403%2026.0051C31.2564%2026.0186%2031.1789%2026.0582%2031.1188%2026.1182C31.0586%2026.1782%2031.0189%2026.2556%2031.0053%2026.3395C30.9916%2026.4234%2031.0047%2026.5094%2031.0427%2026.5854L31.9828%2028.467L33.9986%2028.9993L31.9761%2029.5439L31.0427%2031.4132C31.0122%2031.4749%2030.9979%2031.5432%2031.0011%2031.6119C31.0042%2031.6806%2031.0248%2031.7474%2031.0607%2031.806C31.0967%2031.8646%2031.1469%2031.9132%2031.2067%2031.9471C31.2665%2031.981%2031.334%2031.9992%2031.4027%2032C31.4665%2031.9998%2031.5293%2031.9846%2031.5861%2031.9555L36.7768%2029.3616C36.8439%2029.3278%2036.9003%2029.276%2036.9397%2029.2121C36.9791%2029.1481%2037%2029.0744%2037%2028.9993C37%2028.9242%2036.9791%2028.8505%2036.9397%2028.7865C36.9003%2028.7226%2036.8439%2028.6708%2036.7768%2028.637Z'%20fill='%233170F9'/%3e%3cpath%20d='M32.2395%2029.0048L32.2206%2028.9792C32.2234%2028.9969%2032.2234%2029.0149%2032.2206%2029.0326L32.2395%2029.0048Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_628_7851'%3e%3crect%20width='44'%20height='38'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "defaultQueries": [
              {
                "type": "datasource",
                "subtype": "RetoolAIQuery",
                "resourceName": "retool_ai"
              }
            ],
            "idPrefix": "llmChat",
            "type": "ChatWidget"
          },
          {
            "name": "Microphone",
            "description": "Record and play back audio",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Solid"
            },
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='16'%20width='46'%20height='16'%20rx='3'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M15.646%2027h1.23v-2.063h.898L18.876%2027h1.358L19%2024.739c.662-.285%201.028-.861%201.028-1.657%200-1.156-.764-1.9-2.085-1.9h-2.296V27Zm1.23-3.051v-1.762h.83c.71%200%201.054.316%201.054.895%200%20.577-.344.867-1.048.867h-.836Zm5.916%203.136c1.08%200%201.807-.525%201.977-1.335l-1.12-.074c-.121.333-.434.506-.837.506-.605%200-.989-.4-.989-1.051v-.003h2.972v-.332c0-1.483-.898-2.216-2.051-2.216-1.285%200-2.117.912-2.117%202.258%200%201.384.821%202.247%202.165%202.247Zm-.969-2.707a.922.922%200%200%201%20.94-.895c.526%200%20.89.375.892.895h-1.832Zm5.733%202.707c1.162%200%201.892-.682%201.949-1.684h-1.142c-.071.465-.378.727-.793.727-.565%200-.931-.475-.931-1.31%200-.824.369-1.295.931-1.295.444%200%20.728.292.793.727h1.142c-.051-1.009-.815-1.67-1.955-1.67-1.323%200-2.142.917-2.142%202.255%200%201.327.804%202.25%202.148%202.25Zm4.695%200c1.324%200%202.148-.906%202.148-2.25%200-1.352-.824-2.256-2.148-2.256-1.323%200-2.147.904-2.147%202.256%200%201.344.824%202.25%202.147%202.25Zm.006-.937c-.61%200-.923-.56-.923-1.321%200-.762.312-1.324.923-1.324.6%200%20.912.562.912%201.324%200%20.761-.313%201.32-.912%201.32Zm2.93.852h1.21v-2.469c0-.537.391-.906.925-.906.168%200%20.398.028.512.065v-1.074a1.814%201.814%200%200%200-.38-.042c-.49%200-.89.284-1.05.824h-.045v-.762h-1.173V27Zm4.677.071c.705%200%201.071-.406%201.239-.77h.051V27h1.193v-5.818H41.14v2.187h-.037c-.162-.355-.511-.79-1.242-.79-.957%200-1.767.745-1.767%202.245%200%201.46.776%202.247%201.77%202.247Zm.384-.963c-.594%200-.918-.529-.918-1.29%200-.756.318-1.275.918-1.275.588%200%20.918.497.918%201.275%200%20.779-.336%201.29-.918%201.29Z'%20fill='%238E8E8E'/%3e%3cg%20opacity='.8'%3e%3cpath%20d='M6.513%2021.058a1.891%201.891%200%201%201%203.782%200v2.27a1.891%201.891%200%201%201-3.782%200v-2.27Z'%20fill='%23757575'/%3e%3cpath%20d='M5%2023.705c0%202.151%201.702%203.31%203.404%203.35m3.404-3.35c0%202.317-1.702%203.392-3.404%203.35m0%200V29'%20stroke='%23757575'%20stroke-width='1.6'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",
            "template": {
              "label": "Record",
              "stopLabel": "Stop"
            },
            "idPrefix": "microphone",
            "type": "MicrophoneWidget2"
          },
          {
            "name": "Scanner",
            "description": "Use your device camera to scan barcodes and QR codes.",
            "defaultWidth": 3,
            "defaultHeight": 5,
            "section": "Special inputs",
            "themeEditorSection": null,
            "tags": [
              "input",
              "scan",
              "barcode",
              "qr"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3'%20y='6'%20width='42'%20height='36'%20rx='4'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8%2029v7a1%201%200%200%200%201%201h2a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1H9a1%201%200%200%200-1%201ZM8%2012v7a1%201%200%200%200%201%201h2a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1H9a1%201%200%200%200-1%201ZM14%2028.5v8a.5.5%200%200%200%20.5.5h1a.5.5%200%200%200%20.5-.5v-8a.5.5%200%200%200-.5-.5h-1a.5.5%200%200%200-.5.5ZM14%2012v7a1%201%200%201%200%202%200v-7a1%201%200%201%200-2%200ZM28%2029v7a1%201%200%200%200%201%201h1a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-1a1%201%200%200%200-1%201ZM28%2012v7a1%201%200%200%200%201%201h1a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-1a1%201%200%200%200-1%201ZM6.8%2024.6h34.4a.8.8%200%200%200%200-1.6H6.8a.8.8%200%200%200%200%201.6ZM18%2029v7a1%201%200%201%200%202%200v-7a1%201%200%201%200-2%200ZM18%2012v7a1%201%200%201%200%202%200v-7a1%201%200%201%200-2%200ZM22%2029v7a1%201%200%200%200%201%201h2a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-2a1%201%200%200%200-1%201ZM22%2012v7a1%201%200%200%200%201%201h2a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-2a1%201%200%200%200-1%201ZM33%2029v7a1%201%200%200%200%201%201h5a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-5a1%201%200%200%200-1%201ZM33%2012v7a1%201%200%200%200%201%201h5a1%201%200%200%200%201-1v-7a1%201%200%200%200-1-1h-5a1%201%200%200%200-1%201Z'%20fill='%238E8E8E'/%3e%3c/svg%3e",
            "template": {
              "timeBetweenScans": 800
            },
            "idPrefix": "scanner",
            "type": "ScannerWidget2"
          },
          {
            "name": "Signature",
            "description": "Capture a signature as an image",
            "section": "Special inputs",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Misc"
            },
            "tags": [
              "v2",
              "input"
            ],
            "defaultWidth": 4,
            "defaultHeight": 15,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='7'%20width='40'%20height='33'%20rx='2'%20fill='%23fff'/%3e%3cpath%20d='M10%207H6a2%202%200%200%200-2%202v4M38%2040h4a2%202%200%200%200%202-2v-4M44%2013V9a2%202%200%200%200-2-2h-4M4%2034v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M10%2029.377c2.807-.143%208.421-2.143%208.421-9s-3.65-7.714-5.474-7.285c-1.263.428-3.368%202.314-1.684%206.428%202.105%205.143%206.737%209.857%209.684%2010.285%202.948.429%205.053.429%206.316-3%201.263-3.428%202.526-3.857%203.79-3%201.486%201.01.447%205.572%202.947%206%202.5.429%203.3-.207%204.5-4.305'%20stroke='%236A6A6A'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "idPrefix": "signature",
            "type": "SignaturePad2"
          },
          {
            "name": "Timer",
            "description": "Record elapsed time",
            "defaultWidth": 2,
            "defaultHeight": 10,
            "section": "Special inputs",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='8'%20y='24'%20width='32'%20height='16'%20rx='4'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M17.648%2030.926h1.346c-.011-1.088-.878-1.824-2.23-1.824-1.33%200-2.287.725-2.278%201.807-.003.884.616%201.38%201.622%201.61l.608.143c.64.148.926.321.932.648-.006.355-.338.602-.904.602-.622%200-1.03-.29-1.062-.85h-1.347c.017%201.361.963%202.012%202.426%202.012%201.45%200%202.307-.656%202.313-1.761-.006-.93-.634-1.498-1.781-1.75l-.5-.114c-.529-.114-.864-.29-.853-.637.003-.318.276-.548.821-.548.549%200%20.85.247.887.662Zm4.6-.29h-.788v-1.045h-1.389v1.045h-.577v1.023h.577v2.122c-.009.884.565%201.327%201.545%201.282.336-.018.577-.086.71-.126l-.21-1.002a1.53%201.53%200%200%201-.303.042c-.225%200-.353-.09-.353-.35V31.66h.787v-1.023Zm1.938%204.438c.608%200%201.029-.236%201.267-.682h.034V35h1.307v-2.966c0-.923-.821-1.454-1.932-1.454-1.173%200-1.838.59-1.949%201.386l1.282.045c.06-.278.29-.449.656-.449.34%200%20.557.165.557.458v.014c0%20.267-.29.324-1.034.39-.884.073-1.623.4-1.623%201.366%200%20.863.6%201.284%201.435%201.284Zm.43-.91c-.322%200-.55-.153-.55-.442%200-.282.222-.452.617-.512.259-.037.577-.093.733-.176v.415c0%20.426-.358.716-.8.716Zm3.027.836h1.39v-2.37c0-.52.369-.869.866-.869.165%200%20.412.029.546.074v-1.207a1.59%201.59%200%200%200-.39-.051c-.477%200-.858.278-1.017.855h-.045v-.796h-1.35V35Zm6.026-4.364h-.787v-1.045h-1.39v1.045h-.576v1.023h.577v2.122c-.009.884.565%201.327%201.545%201.282.336-.018.577-.086.71-.126l-.21-1.002a1.53%201.53%200%200%201-.304.042c-.224%200-.352-.09-.352-.35V31.66h.787v-1.023Z'%20fill='%238E8E8E'/%3e%3cpath%20d='M12.864%2018.144c1.646%200%202.64-1.253%202.643-3.41.003-2.142-1.003-3.369-2.643-3.369-1.643%200-2.64%201.224-2.643%203.369-.007%202.15.994%203.407%202.643%203.41Zm0-1.148c-.751%200-1.237-.754-1.234-2.262.004-1.486.486-2.234%201.234-2.234.745%200%201.23.748%201.23%202.234.004%201.508-.482%202.262-1.23%202.262Zm6.196%201.148c1.646%200%202.64-1.253%202.643-3.41.004-2.142-1.003-3.369-2.643-3.369-1.642%200-2.64%201.224-2.643%203.369-.006%202.15.994%203.407%202.643%203.41Zm0-1.148c-.75%200-1.236-.754-1.233-2.262.003-1.486.485-2.234%201.233-2.234.745%200%201.23.748%201.23%202.234.004%201.508-.482%202.262-1.23%202.262Zm4.439-2.965c.409%200%20.764-.342.767-.768a.776.776%200%200%200-.767-.76.764.764%200%201%200%200%201.527Zm0%203.208c.409%200%20.764-.342.767-.767a.776.776%200%200%200-.767-.76.764.764%200%201%200%200%201.527Zm4.438.905c1.646%200%202.64-1.253%202.643-3.41.004-2.142-1.003-3.369-2.643-3.369-1.643%200-2.64%201.224-2.643%203.369-.006%202.15.994%203.407%202.643%203.41Zm0-1.148c-.75%200-1.237-.754-1.233-2.262.003-1.486.485-2.234%201.233-2.234.745%200%201.23.748%201.23%202.234.004%201.508-.482%202.262-1.23%202.262Zm6.197%201.148c1.645%200%202.64-1.253%202.643-3.41.003-2.142-1.004-3.369-2.643-3.369-1.643%200-2.64%201.224-2.643%203.369-.007%202.15.993%203.407%202.643%203.41Zm0-1.148c-.752%200-1.237-.754-1.234-2.262.003-1.486.486-2.234%201.234-2.234.744%200%201.23.748%201.23%202.234.003%201.508-.483%202.262-1.23%202.262Z'%20fill='%236A6A6A'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "timer",
            "type": "TimerWidget"
          }
        ]
      },
      {
        key: "Buttons",
        title: "Buttons",
        items: [
          {
            "name": "Button",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Solid"
            },
            "tags": [
              "click",
              "submit",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='6.5'%20y='15.5'%20width='36'%20height='17'%20rx='3.5'%20fill='%233170F9'%20stroke='%233170F9'/%3e%3cpath%20d='m12.684%2027%20.432-1.327h2.1L15.647%2027h1.319l-2.006-5.818h-1.585L11.366%2027h1.318Zm.745-2.287.716-2.202h.045l.716%202.202h-1.477Zm5.983%202.372c1.162%200%201.892-.682%201.948-1.684h-1.142c-.07.465-.377.727-.792.727-.566%200-.932-.475-.932-1.31%200-.824.37-1.295.932-1.295.443%200%20.727.292.792.727h1.142c-.05-1.009-.815-1.67-1.954-1.67-1.324%200-2.142.917-2.142%202.255%200%201.327.804%202.25%202.148%202.25Zm5.044-4.449h-.82v-1.045h-1.21v1.045h-.598v.91h.597v2.272c-.006.855.577%201.279%201.455%201.242.312-.012.534-.074.656-.114l-.19-.9c-.06.01-.188.04-.302.04-.241%200-.409-.092-.409-.427v-2.113h.821v-.91ZM25.245%2027h1.21v-4.364h-1.21V27Zm.608-4.926c.36%200%20.656-.276.656-.614%200-.335-.296-.61-.656-.61-.358%200-.654.275-.654.61%200%20.338.296.614.654.614Zm3.543%205.011c1.324%200%202.148-.906%202.148-2.25%200-1.352-.824-2.256-2.148-2.256-1.324%200-2.148.904-2.148%202.256%200%201.344.824%202.25%202.148%202.25Zm.006-.937c-.611%200-.924-.56-.924-1.321%200-.762.313-1.324.924-1.324.6%200%20.912.562.912%201.324%200%20.761-.313%201.32-.912%201.32Zm4.139-1.67c.003-.563.338-.893.827-.893.485%200%20.778.318.775.852V27h1.21v-2.778c0-1.018-.596-1.643-1.505-1.643-.648%200-1.117.319-1.313.827h-.051v-.77h-1.153V27h1.21v-2.523Z'%20fill='%23fff'/%3e%3c/svg%3e",
            "template": {
              "allowWrap": true,
              "styleVariant": "solid",
              "text": "Button"
            },
            "visualType": "button",
            "idPrefix": "button",
            "type": "ButtonWidget2"
          },
          {
            "name": "Button Group",
            "description": "Configure a group of buttons",
            "defaultWidth": 4,
            "defaultHeight": 5,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Grouped"
            },
            "tags": [
              "button",
              "group",
              "v2"
            ],
            "icon": "https://retool-edge.com/assets_vjs/buttonGroup2-B-RWWJbr.svg",
            "idPrefix": "buttonGroup",
            "type": "ButtonGroupWidget2"
          },
          {
            "name": "Close Button",
            "description": "Close UI components",
            "defaultWidth": 1,
            "defaultHeight": 5,
            "idPrefix": "closeButton",
            "hideInDocs": true,
            "section": "Buttons",
            "themeEditorSection": null,
            "tags": [
              "click",
              "submit",
              "v2",
              "close"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2015.8H17C15.2327%2015.8%2013.8%2017.2327%2013.8%2019V30C13.8%2031.7673%2015.2327%2033.2%2017%2033.2H29C30.7674%2033.2%2032.2001%2031.7673%2032.2001%2030V19C32.2001%2017.2327%2030.7674%2015.8%2029%2015.8Z'%20fill='white'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M26%2021.5L20%2027.5'%20stroke='%23DEDEDE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%2021.5L26%2027.5'%20stroke='%23DEDEDE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {
              "allowWrap": true,
              "styleVariant": "outline",
              "text": "",
              "iconBefore": "bold/interface-delete-1",
              "horizontalAlign": "right",
              "style": {
                "border": "transparent"
              },
              "ariaLabel": "Close"
            },
            "visualType": "button",
            "type": "ButtonWidget2"
          },
          {
            "name": "Dropdown Button",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Outline"
            },
            "tags": [
              "click",
              "menu",
              "actions",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='13.8'%20y='15.8'%20width='18.4'%20height='17.4'%20rx='3.2'%20fill='%23fff'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M19.289%2025.932a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM23%2025.932a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM26.71%2025.932a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "styleVariant": "outline",
              "text": "Menu",
              "overlayMaxHeight": 375,
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_captionByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_labels": [
                "Option 1",
                "Option 2",
                "Option 3"
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "visualType": "menuButton",
            "idPrefix": "dropdownButton",
            "type": "DropdownButtonWidget"
          },
          {
            "name": "Link",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 3,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Links",
              "subsection": "Links"
            },
            "tags": [
              "button",
              "click",
              "submit",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m12.684%2027%20.432-1.327h2.1L15.647%2027h1.319l-2.006-5.818h-1.585L11.366%2027h1.318Zm.745-2.287.716-2.202h.045l.716%202.202h-1.477Zm5.983%202.372c1.162%200%201.892-.682%201.948-1.684h-1.142c-.07.465-.377.727-.792.727-.566%200-.932-.475-.932-1.31%200-.824.37-1.295.932-1.295.443%200%20.727.292.792.727h1.142c-.05-1.009-.815-1.67-1.954-1.67-1.324%200-2.142.917-2.142%202.255%200%201.327.804%202.25%202.148%202.25Zm5.044-4.449h-.82v-1.045h-1.21v1.045h-.598v.91h.597v2.272c-.006.855.577%201.279%201.455%201.242.312-.012.534-.074.656-.114l-.19-.9c-.06.01-.188.04-.302.04-.241%200-.409-.092-.409-.427v-2.113h.821v-.91ZM25.245%2027h1.21v-4.364h-1.21V27Zm.608-4.926c.36%200%20.656-.276.656-.614%200-.335-.296-.61-.656-.61-.358%200-.654.275-.654.61%200%20.338.296.614.654.614Zm3.543%205.011c1.324%200%202.148-.906%202.148-2.25%200-1.352-.824-2.256-2.148-2.256-1.324%200-2.148.904-2.148%202.256%200%201.344.824%202.25%202.148%202.25Zm.006-.937c-.611%200-.924-.56-.924-1.321%200-.762.313-1.324.924-1.324.6%200%20.912.562.912%201.324%200%20.761-.313%201.32-.912%201.32Zm4.139-1.67c.003-.563.338-.893.827-.893.485%200%20.778.318.775.852V27h1.21v-2.778c0-1.018-.596-1.643-1.505-1.643-.648%200-1.117.319-1.313.827h-.051v-.77h-1.153V27h1.21v-2.523Z'%20fill='%233170F9'/%3e%3c/svg%3e",
            "template": {
              "text": "Link"
            },
            "visualType": "button",
            "idPrefix": "link",
            "type": "LinkWidget"
          },
          {
            "name": "Link List",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 9,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Links",
              "subsection": "List"
            },
            "tags": [
              "button",
              "click"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M20%2012h14M20%2024h22.5M20%2036h18'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.52%2013.371a2.768%202.768%200%200%200%203.916%200%20.6.6%200%200%201%20.848.849%203.969%203.969%200%201%201-.117-5.725l.627-.619a.394.394%200%200%201%20.67.282l-.007%202.034a.394.394%200%200%201-.395.392l-2.045-.007a.394.394%200%200%201-.275-.673l.57-.564a2.769%202.769%200%200%200-3.791%204.031ZM9.899%2020.173a.6.6%200%201%201%201.2%200v3.052l.663-.663a.6.6%200%201%201%20.849.848l-1.688%201.688a.6.6%200%200%201-.848%200L8.387%2023.41a.6.6%200%201%201%20.849-.848l.663.663v-3.052ZM7.725%2025.8v-.563a.6.6%200%201%200-1.2%200v.563c0%20.953.772%201.725%201.725%201.725h4.5c.953%200%201.725-.772%201.725-1.725v-.563a.6.6%200%201%200-1.2%200v.563c0%20.29-.235.525-.525.525h-4.5a.525.525%200%200%201-.525-.525ZM13.866%2036.828a3.376%203.376%200%200%201-3.034%203.102l1.77-1.77a.984.984%200%200%200%20.289-.696v-.049a.984.984%200%200%200-.985-.984h-.61a.14.14%200%200%201-.1-.041l-.514-.515a.985.985%200%200%200-.696-.288H8.832c-.007%200-.014%200-.02-.002l-.286-.38.42-.42a.141.141%200%200%201%20.1-.042h.659a.984.984%200%200%200%20.696-.288.978.978%200%200%200%20.112-1.259%203.368%203.368%200%200%201%202.553%201.182.737.737%200%200%200-.597.741c0%20.118.027.234.08.34l.504%201.008a.7.7%200%200%200%20.813.36Zm-6.741-.257a3.377%203.377%200%200%200%202.39%203.23v-1.309a.14.14%200%200%200-.04-.1l-.316-.316a.985.985%200%200%201-.218-.33l-.492-1.23a.142.142%200%200%200-.018-.032l.124-.093-.124.093-.186-.248a.983.983%200%200%201-.232-.244l-.291-.437a.928.928%200%200%201-.372-.198%203.367%203.367%200%200%200-.225%201.214Zm7.875%200a4.5%204.5%200%201%201-9%200%204.5%204.5%200%200%201%209%200Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "label": "",
              "labelPosition": "top",
              "showUnderline": "never",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_captionByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "bold/interface-user-single",
                "bold/interface-align-layers-1",
                "bold/travel-map-earth-1"
              ],
              "_labels": [
                "Action 1",
                "Action 2",
                "Action 3"
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "visualType": "menuButton",
            "idPrefix": "linkList",
            "type": "LinkListWidget"
          },
          {
            "name": "Outline Button",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "idPrefix": "button",
            "section": "Buttons",
            "themeEditorSection": null,
            "tags": [
              "click",
              "submit",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.8'%20y='15.8'%20width='38.4'%20height='16.4'%20rx='3.2'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='m13.684%2027%20.432-1.327h2.1L16.647%2027h1.319l-2.006-5.818h-1.585L12.366%2027h1.318Zm.745-2.287.716-2.202h.045l.716%202.202h-1.477Zm5.983%202.372c1.162%200%201.892-.682%201.948-1.684h-1.142c-.07.465-.377.727-.792.727-.566%200-.932-.475-.932-1.31%200-.824.37-1.295.932-1.295.443%200%20.727.292.792.727h1.142c-.05-1.009-.815-1.67-1.954-1.67-1.324%200-2.142.917-2.142%202.255%200%201.327.804%202.25%202.148%202.25Zm5.044-4.449h-.82v-1.045h-1.21v1.045h-.598v.91h.597v2.272c-.006.855.577%201.279%201.455%201.242.312-.012.534-.074.656-.114l-.19-.9c-.06.01-.188.04-.302.04-.241%200-.409-.092-.409-.427v-2.113h.821v-.91ZM26.245%2027h1.21v-4.364h-1.21V27Zm.608-4.926c.36%200%20.656-.276.656-.614%200-.335-.296-.61-.656-.61-.358%200-.654.275-.654.61%200%20.338.296.614.654.614Zm3.543%205.011c1.324%200%202.148-.906%202.148-2.25%200-1.352-.824-2.256-2.148-2.256-1.324%200-2.148.904-2.148%202.256%200%201.344.824%202.25%202.148%202.25Zm.006-.937c-.611%200-.924-.56-.924-1.321%200-.762.313-1.324.924-1.324.6%200%20.912.562.912%201.324%200%20.761-.313%201.32-.912%201.32Zm4.139-1.67c.003-.563.338-.893.827-.893.485%200%20.778.318.775.852V27h1.21v-2.778c0-1.018-.596-1.643-1.505-1.643-.648%200-1.117.319-1.313.827h-.051v-.77h-1.153V27h1.21v-2.523Z'%20fill='%23949494'/%3e%3c/svg%3e",
            "template": {
              "allowWrap": true,
              "styleVariant": "outline",
              "text": "Button"
            },
            "visualType": "button",
            "type": "ButtonWidget2"
          },
          {
            "name": "Split Button",
            "description": "Trigger queries or actions",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Solid"
            },
            "tags": [
              "click",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20x='2.5'%20y='15.5'%20width='44'%20height='18'%20rx='3.5'%20fill='%233170F9'%20stroke='%233170F9'/%3e%3cpath%20d='m7.434%2027.69.432-1.327h2.1l.431%201.326h1.319L9.71%2021.871H8.125L6.116%2027.69h1.318Zm.745-2.288.716-2.201h.045l.716%202.201H8.179Zm5.983%202.373c1.161%200%201.892-.682%201.948-1.685h-1.142c-.07.466-.377.727-.792.727-.566%200-.932-.474-.932-1.31%200-.823.37-1.295.932-1.295.443%200%20.727.293.792.727h1.142c-.05-1.008-.815-1.67-1.954-1.67-1.324%200-2.142.918-2.142%202.256%200%201.326.804%202.25%202.148%202.25Zm5.044-4.45h-.82V22.28h-1.21v1.046h-.598v.909h.597v2.273c-.006.855.577%201.278%201.455%201.241a2.36%202.36%200%200%200%20.656-.113l-.19-.901c-.06.011-.188.04-.302.04-.241%200-.409-.091-.409-.426v-2.114h.821v-.91Zm.789%204.364h1.21v-4.363h-1.21v4.363Zm.608-4.926c.36%200%20.656-.275.656-.613%200-.335-.296-.611-.656-.611-.358%200-.654.275-.654.61%200%20.339.296.614.654.614Zm3.543%205.012c1.324%200%202.148-.907%202.148-2.25%200-1.353-.824-2.256-2.148-2.256-1.324%200-2.148.903-2.148%202.256%200%201.343.824%202.25%202.148%202.25Zm.006-.938c-.611%200-.924-.56-.924-1.32%200-.762.313-1.325.924-1.325.6%200%20.912.563.912%201.324%200%20.762-.313%201.321-.912%201.321Zm4.139-1.67c.003-.563.338-.892.826-.892.486%200%20.779.318.776.852v2.563h1.21V24.91c0-1.017-.596-1.642-1.505-1.642-.648%200-1.117.318-1.313.827h-.051v-.77h-1.153v4.363h1.21v-2.522Z'%20fill='%23fff'/%3e%3cpath%20d='m38.75%2024.966%202%201.6%202-1.6'%20stroke='%23F5F5F5'%20stroke-width='1.2'%20stroke-linecap='square'/%3e%3cpath%20opacity='.2'%20d='M34.5%2015v19'%20stroke='%23fff'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h48v48H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {
              "styleVariant": "solid",
              "showSelectionIndicator": true,
              "overlayMaxHeight": 375,
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_captionByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_labels": [
                "Option 1",
                "Option 2",
                "Option 3"
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "visualType": "menuButton",
            "idPrefix": "splitButton",
            "type": "SplitButtonWidget"
          },
          {
            "name": "Toggle Button",
            "description": "Toggle a Boolean value",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Buttons",
              "subsection": "Outline"
            },
            "tags": [
              "button",
              "expand",
              "collapse",
              "v2"
            ],
            "icon": "https://retool-edge.com/assets_vjs/toggleButton-P80v2M08.svg",
            "visualType": "button",
            "valueType": "boolean",
            "idPrefix": "toggleButton",
            "type": "ToggleButtonWidget"
          },
          {
            "name": "Toggle Link",
            "description": "Toggle a Boolean value",
            "defaultHeight": 3,
            "defaultWidth": 2,
            "section": "Buttons",
            "themeEditorSection": {
              "section": "Links",
              "subsection": "Links"
            },
            "tags": [
              "button",
              "expand",
              "collapse",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='60'%20height='52'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.646%2036h1.185v-2.78h3.033V36h1.19v-6.546h-1.19v2.771h-3.033v-2.77h-1.185V36Zm6.646%200h1.157v-4.91h-1.157V36Zm.581-5.606c.368%200%20.668-.281.668-.626%200-.349-.3-.63-.668-.63-.37%200-.67.281-.67.63%200%20.345.3.626.67.626Zm3.587%205.692c.844%200%201.224-.502%201.406-.86h.07V36h1.139v-6.546h-1.16v2.449h-.049c-.175-.355-.536-.876-1.403-.876-1.134%200-2.026.889-2.026%202.525%200%201.617.866%202.534%202.023%202.534Zm.323-.949c-.764%200-1.167-.671-1.167-1.592%200-.914.397-1.569%201.167-1.569.745%200%201.154.617%201.154%201.57%200%20.952-.416%201.591-1.154%201.591Zm5.698.959c1.144%200%201.93-.56%202.135-1.413l-1.08-.121c-.157.415-.54.633-1.04.633-.747%200-1.243-.493-1.252-1.333h3.42v-.355c0-1.723-1.036-2.48-2.244-2.48-1.406%200-2.324%201.032-2.324%202.547%200%201.54.905%202.522%202.385%202.522Zm-1.234-3.014c.035-.626.499-1.154%201.189-1.154.665%200%201.112.486%201.118%201.154h-2.307Z'%20fill='%23757575'/%3e%3cpath%20d='m13%2032%202%201.6%202-1.6'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='square'/%3e%3cpath%20d='M26.203%2018.254h1.14c-.022-1.106-.964-1.889-2.358-1.889-1.374%200-2.407.774-2.403%201.93%200%20.94.668%201.48%201.745%201.758l.744.192c.707.179%201.173.4%201.176.908-.003.559-.533.933-1.307.933-.741%200-1.316-.332-1.364-1.02h-1.167c.048%201.301%201.016%202.033%202.54%202.033%201.57%200%202.481-.783%202.484-1.937-.003-1.134-.94-1.652-1.924-1.885l-.613-.154c-.537-.128-1.119-.355-1.113-.901.004-.492.445-.853%201.186-.853.706%200%201.173.329%201.234.885Zm3.393%201.87c0-.71.441-1.119%201.061-1.119.608%200%20.965.387.965%201.048V23h1.157v-3.126c0-1.185-.67-1.847-1.69-1.847-.755%200-1.234.342-1.46.898h-.058v-2.47h-1.132V23h1.157v-2.876Zm6.504%202.972c1.438%200%202.352-1.013%202.352-2.531%200-1.522-.914-2.538-2.352-2.538-1.438%200-2.352%201.016-2.352%202.538%200%201.518.914%202.53%202.352%202.53Zm.006-.927c-.795%200-1.185-.71-1.185-1.608%200-.898.39-1.617%201.185-1.617.783%200%201.173.72%201.173%201.617%200%20.898-.39%201.608-1.173%201.608Zm4.21.831h1.208l.92-3.317h.067l.92%203.317h1.206l1.39-4.91h-1.183l-.85%203.433h-.048l-.882-3.432h-1.166l-.883%203.452h-.044l-.863-3.452h-1.18L40.316%2023Z'%20fill='%23757575'/%3e%3cpath%20d='m14.2%2021.8%201.6-2-1.6-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='square'/%3e%3c/svg%3e",
            "iconSmall": "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='8'%20cy='8'%20r='6'%20stroke='%23B2B2B2'%20stroke-width='2'/%3e%3cpath%20d='m10%207.5-2%202-2-2.033'%20stroke='%23B2B2B2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "visualType": "button",
            "valueType": "boolean",
            "idPrefix": "toggleLink",
            "type": "ToggleLinkWidget"
          }
        ]
      },
      {
        key: "Data",
        title: "Data",
        items: [
          {
            "name": "Filter",
            "description": "Configure filters",
            "defaultWidth": 6,
            "defaultHeight": 7,
            "section": "Data",
            "themeEditorSection": {
              "section": "Tables",
              "subsection": "Filter"
            },
            "tags": [
              "filter",
              "table",
              "v2",
              "data"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3'%20y='7'%20width='22'%20height='13'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3crect%20x='28'%20y='7'%20width='17'%20height='13'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='m6.985%2016%20.432-1.327h2.1L9.947%2016h1.318l-2.005-5.818H7.675L5.667%2016h1.318Zm.744-2.287.716-2.202h.046l.716%202.202H7.729Zm5.425-.236c.003-.562.338-.892.827-.892.486%200%20.778.318.775.852V16h1.21v-2.778c0-1.018-.596-1.643-1.505-1.643-.648%200-1.117.319-1.313.827h-.05v-.77h-1.154V16h1.21v-2.523Zm5.374%202.594c.705%200%201.071-.406%201.239-.77h.051V16h1.193v-5.818h-1.207v2.187h-.037c-.162-.355-.511-.79-1.241-.79-.958%200-1.767.745-1.767%202.245%200%201.46.775%202.247%201.77%202.247Zm.384-.963c-.594%200-.918-.529-.918-1.29%200-.755.319-1.275.918-1.275.588%200%20.918.497.918%201.275%200%20.779-.336%201.29-.918%201.29ZM37.587%2013.09c0-1.902-1.182-2.988-2.725-2.988-1.55%200-2.724%201.085-2.724%202.989%200%201.895%201.173%202.989%202.724%202.989%201.543%200%202.725-1.086%202.725-2.99Zm-1.248%200c0%201.234-.585%201.902-1.477%201.902-.895%200-1.477-.668-1.477-1.901s.582-1.9%201.477-1.9c.892%200%201.477.667%201.477%201.9ZM38.476%2016h1.21v-2.469c0-.537.392-.906.926-.906.168%200%20.398.028.512.065v-1.073a1.815%201.815%200%200%200-.38-.043c-.49%200-.89.284-1.05.824h-.045v-.762h-1.173V16Z'%20fill='%23757575'/%3e%3crect%20x='3'%20y='26'%20width='42'%20height='13'%20rx='3'%20fill='%23FCFCFC'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='m36%2032%202.5%202%202.5-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20stroke='%23757575'%20stroke-width='2'%20stroke-linecap='round'%20d='M7%2033h17'/%3e%3c/svg%3e",
            "template": {
              "value": null
            },
            "idPrefix": "filter",
            "type": "FilterWidget"
          },
          {
            "name": "JSON Explorer",
            "description": "Display and explore JSON data",
            "defaultWidth": 4,
            "defaultHeight": 30,
            "section": "Data",
            "themeEditorSection": null,
            "tags": [
              "data"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2010H6a2%202%200%200%200-2%202v4M38%2038h4a2%202%200%200%200%202-2v-4M44%2016v-4a2%202%200%200%200-2-2h-4M4%2032v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M16%2034h19M16%2029h24'%20stroke='%23DEDEDE'%20stroke-width='2'/%3e%3cpath%20d='M13.174%2030.757a1%201%200%200%201%200%201.486l-2.505%202.255c-.644.58-1.669.122-1.669-.743v-4.51c0-.865%201.025-1.322%201.669-.743l2.505%202.255Z'%20fill='%23BEBEBE'/%3e%3cpath%20d='M13.44%2015.454v4.564c-.003.63-.284.962-.795.962-.483%200-.796-.3-.806-.82h-1.377c-.007%201.306.927%201.93%202.112%201.93%201.327%200%202.231-.803%202.234-2.072v-4.564H13.44Zm6.333%201.883H21.1c-.02-1.166-.978-1.972-2.436-1.972-1.435%200-2.486.793-2.48%201.982-.003.965.678%201.518%201.784%201.783l.712.179c.713.172%201.11.377%201.112.818-.003.48-.457.806-1.16.806-.719%200-1.237-.333-1.281-.988h-1.34c.036%201.416%201.049%202.148%202.637%202.148%201.598%200%202.538-.764%202.541-1.963-.003-1.09-.825-1.668-1.962-1.924l-.588-.14c-.57-.131-1.045-.342-1.036-.812%200-.422.374-.732%201.052-.732.661%200%201.067.3%201.118.815Zm8.632%201.39c0-2.141-1.33-3.362-3.065-3.362-1.745%200-3.065%201.22-3.065%203.362%200%202.132%201.32%203.363%203.065%203.363%201.735%200%203.065-1.221%203.065-3.363Zm-1.403%200c0%201.387-.659%202.138-1.662%202.138-1.007%200-1.662-.75-1.662-2.138%200-1.387.655-2.138%201.662-2.138%201.003%200%201.662.751%201.662%202.138Zm8.173-3.273h-1.378v4.117h-.057l-2.826-4.117H29.7V22h1.384v-4.12h.048L33.979%2022h1.196v-6.546Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "template": {
              "value": "{\n  \"a\": {\n    \"b\": [1,2,3,4,5,6,7,8,9],\n    \"c\": {\n      \"d\": false\n    },\n    \"e\": \"hi\"\n  }\n}"
            },
            "idPrefix": "jsonExplorer",
            "type": "JSONExplorerWidget"
          },
          {
            "name": "Key Value",
            "description": "Display key-value pairs",
            "defaultWidth": 3,
            "defaultHeight": 43,
            "section": "Data",
            "themeEditorSection": {
              "section": "Tables",
              "subsection": "Key Value"
            },
            "tags": [
              "object",
              "list",
              "map"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2039H7V16a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v23Z'%20fill='%23fff'/%3e%3cpath%20d='M23%2038V10M7%2027h33.25M7%2021h33.25M7%2033h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M40%2015H7v-5a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v5Z'%20fill='%23EEE'/%3e%3cpath%20d='M6.875%2015h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3crect%20x='6.8'%20y='9.8'%20width='33.4'%20height='28.4'%20rx='2.2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "data": "{\n  id: 0,\n  firstName: 'Chic',\n  lastName: 'Footitt',\n  email: 'chic.footitt@yahoo.com',\n  website: 'https://chic.footitt.com',\n  text: 'Nulla sit amet nibh at augue facilisis viverra quis id dui. Nullam mattis ultricies metus. Donec eros lorem, egestas vitae aliquam quis, rutrum a mauris',\n  role: 'Viewer',\n  teams: ['Workplace', 'Infrastructure'],\n  enabled: true,\n  createdAt: '2023-01-16T23:40:20.385Z',\n}",
              "editIcon": "bold/interface-edit-pencil",
              "itemLabelPosition": "top",
              "groupLayout": "singleColumn",
              "labelWrap": true,
              "_enableSaveActions": true
            },
            "idPrefix": "keyValue",
            "type": "KeyValueWidget2"
          },
          {
            "name": "Reorderable List",
            "description": "Display and reorder a list of values",
            "defaultWidth": 4,
            "defaultHeight": 25,
            "section": "Data",
            "themeEditorSection": null,
            "tags": [
              "data"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='34.6'%20rx='3.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20opacity='.5'%20d='M7%2030v6a2%202%200%200%200%202%202h30a2%202%200%200%200%202-2v-6a2%202%200%200%200-2-2H9a2%202%200%200%200-2%202ZM7%2013v6a2%202%200%200%200%202%202h30a2%202%200%200%200%202-2v-6a2%202%200%200%200-2-2H9a2%202%200%200%200-2%202Z'%20fill='%23D8D8D8'/%3e%3crect%20x='14.2'%20y='17.2'%20width='32.6'%20height='15.6'%20rx='1.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20opacity='.5'%20d='M17%2022v6a2%202%200%200%200%202%202h23a2%202%200%200%200%202-2v-6a2%202%200%200%200-2-2H19a2%202%200%200%200-2%202Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "reorderableList",
            "type": "ReorderableListWidget"
          },
          {
            "name": "Table",
            "idPrefix": "table",
            "description": "Display tabular data",
            "defaultHeight": 40,
            "defaultWidth": 8,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M43%2038H5V17a1%201%200%200%201%201-1h36a1%201%200%200%201%201%201v21Z'%20fill='%23fff'/%3e%3cpath%20d='M5%2035h38v1a2%202%200%200%201-2%202H7a2%202%200%200%201-2-2v-1Z'%20fill='%23DEDEDE'/%3e%3cpath%20d='M12%2038V11M28%2038V11M5%2022h38M5%2029h38M20%2038V11M36%2038V11'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M43%2016H5v-5a1%201%200%200%201%201-1h36a1%201%200%200%201%201%201v5Z'%20fill='%23DEDEDE'/%3e%3crect%20x='4.8'%20y='10.8'%20width='38.4'%20height='27.4'%20rx='2.2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "section": "Data",
            "themeEditorSection": {
              "section": "Tables",
              "subsection": "Basic"
            },
            "tags": [
              "table",
              "v2",
              "data",
              "new"
            ],
            "type": "TableWidget2"
          }
        ]
      },
      {
        key: "Charts",
        title: "Charts",
        items: [
          {
            "name": "Bar Chart",
            "description": "Bar Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.799988%2021.2H33.2M0.799988%2011.2H33.2M0.799988%201.20001H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M0.799988%2031.2H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2030.5L9%2015.5C9%2015.2239%208.77614%2015%208.5%2015H6.5C6.22386%2015%206%2015.2239%206%2015.5L6%2030.5C6%2030.7761%206.22386%2031%206.5%2031H8.5C8.77614%2031%209%2030.7761%209%2030.5Z'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3cpath%20d='M15%2030.5V18.5C15%2018.2239%2014.7761%2018%2014.5%2018H12.5C12.2239%2018%2012%2018.2239%2012%2018.5V30.5C12%2030.7761%2012.2239%2031%2012.5%2031H14.5C14.7761%2031%2015%2030.7761%2015%2030.5Z'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3cpath%20d='M27%2030.5V4.5C27%204.22386%2026.7761%204%2026.5%204H24.5C24.2239%204%2024%204.22386%2024%204.5V30.5C24%2030.7761%2024.2239%2031%2024.5%2031H26.5C26.7761%2031%2027%2030.7761%2027%2030.5Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20opacity='0.91'%20d='M21%2030.5V10.5C21%2010.2239%2020.7761%2010%2020.5%2010H18.5C18.2239%2010%2018%2010.2239%2018%2010.5V30.5C18%2030.7761%2018.2239%2031%2018.5%2031H20.5C20.7761%2031%2021%2030.7761%2021%2030.5Z'%20fill='%2360A5FA'%20style='fill:%2360A5FA;fill:color(display-p3%200.3765%200.6471%200.9804);fill-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "barChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Bubble Chart",
            "description": "Bubble Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='35'%20height='32'%20viewBox='0%200%2035%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.80005%2021.2H34.2001M1.80005%2011.2H34.2001M1.80005%201.20001H34.2001'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M1.80005%2031.2H34.2001'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3ccircle%20cx='2'%20cy='29'%20r='2'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3ccircle%20cx='10'%20cy='22'%20r='5'%20fill='%2367ADFB'%20style='fill:%2367ADFB;fill:color(display-p3%200.4046%200.6783%200.9849);fill-opacity:1;'/%3e%3ccircle%20cx='24'%20cy='10'%20r='9'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "bubbleChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Funnel Chart",
            "description": "Funnel Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='28'%20height='30'%20viewBox='0%200%2028%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='6'%20rx='2'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3crect%20x='5'%20y='8'%20width='18'%20height='6'%20rx='2'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3crect%20x='10'%20y='16'%20width='8'%20height='6'%20rx='2'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3crect%20x='11'%20y='24'%20width='6'%20height='6'%20rx='2'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "funnelChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Heat Map",
            "description": "Heat Map",
            "defaultWidth": 4,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200H0V6H6V0Z'%20fill='%233B82F6'/%3e%3cpath%20d='M12%200H6V6H12V0Z'%20fill='%233B82F6'/%3e%3cpath%20d='M24%200H18V6H24V0Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M30%200H24V6H30V0Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M18%200H12V6H18V0Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M6%206H0V12H6V6Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M12%206H6V12H12V6Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M24%206H18V12H24V6Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M30%206H24V12H30V6Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M18%206H12V12H18V6Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M6%2012H0V18H6V12Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M12%2012H6V18H12V12Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M24%2012H18V18H24V12Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M30%2012H24V18H30V12Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M18%2012H12V18H18V12Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M6%2018H0V24H6V18Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M12%2018H6V24H12V18Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M24%2018H18V24H24V18Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M30%2018H24V24H30V18Z'%20fill='%233B82F6'/%3e%3cpath%20d='M18%2018H12V24H18V18Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M6%2024H0V30H6V24Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M12%2024H6V30H12V24Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M24%2024H18V30H24V24Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M30%2024H24V30H30V24Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M18%2024H12V30H18V24Z'%20fill='%2393C5FD'/%3e%3c/svg%3e",
            "idPrefix": "heatMap",
            "type": "ChartWidget2"
          },
          {
            "name": "Line Chart",
            "description": "Line Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='35'%20height='32'%20viewBox='0%200%2035%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2021H33.4M1%2011H33.4M1%201H33.4'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M1%2031H33.4'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M1.81657%2026.4238L0.147278%2027.6701H31.5841L31.584%2022.3801L26.6048%2018.1536L21.6557%208.9029C20.7286%207.34932%2019.2248%207.25718%2018.49%208.90291L15.5992%2012.3958L13.589%2019.8679C13.0578%2021.0565%2012.1746%2022.0695%2011.0488%2022.7814C9.92303%2023.4933%208.60417%2023.8727%207.25567%2023.8728C5.13023%2023.8728%203.12236%2024.8138%201.81657%2026.4238Z'%20fill='url(%23paint0_linear_5_724)'%20fill-opacity='0.3'%20style=''/%3e%3cpath%20d='M1.80438%2027.2528C1.80438%2027.2528%203.8627%2023.7405%207.36412%2023.1678C10.8655%2022.5951%2011.5204%2022.1614%2012.7079%2020.5037C13.8954%2018.846%2015.8052%2012.825%2015.8052%2012.825C15.8052%2012.825%2017.4273%208.02444%2019.8097%207.71569C22.5919%207.35513%2024.9344%2014.63%2025.8578%2017.8708C26.7812%2021.1117%2029.9269%2021.3724%2029.9269%2021.3724'%20stroke='url(%23paint1_linear_5_724)'%20style=''%20stroke-width='2'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_5_724'%20x1='13.8344'%20y1='4.90023'%20x2='13.8344'%20y2='33.6301'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232899D2'%20style='stop-color:%232899D2;stop-color:color(display-p3%200.1569%200.6000%200.8235);stop-opacity:1;'/%3e%3cstop%20offset='0.785'%20stop-color='%232899D2'%20stop-opacity='0'%20style='stop-color:none;stop-opacity:0;'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_5_724'%20x1='14.3405'%20y1='6.31184'%20x2='14.3405'%20y2='25.3131'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233170F9'%20style='stop-color:%233170F9;stop-color:color(display-p3%200.1922%200.4392%200.9765);stop-opacity:1;'/%3e%3cstop%20offset='1'%20stop-color='%23CAE1FF'%20style='stop-color:%23CAE1FF;stop-color:color(display-p3%200.7912%200.8840%201.0000);stop-opacity:1;'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
            "idPrefix": "lineChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Mixed Chart",
            "description": "Mixed Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.799988%2021.2H33.2M0.799988%2011.2H33.2M0.799988%201.20001H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M0.799988%2031.2H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M25.2758%2030.2917V26.6877C25.2758%2026.6213%2025.5264%2026.5675%2025.8355%2026.5675H28.0743C28.3834%2026.5675%2028.634%2026.6213%2028.634%2026.6877V30.2917C28.634%2030.3581%2028.3834%2030.4118%2028.0743%2030.4118H25.8355C25.5264%2030.4118%2025.2758%2030.3581%2025.2758%2030.2917Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M19.1903%2030.1804V24.6254C19.1903%2024.4975%2019.4409%2024.3939%2019.75%2024.3939H21.9888C22.2979%2024.3939%2022.5484%2024.4975%2022.5484%2024.6254V30.1804C22.5484%2030.3082%2022.2979%2030.4118%2021.9888%2030.4118H19.75C19.4409%2030.4118%2019.1903%2030.3082%2019.1903%2030.1804Z'%20fill='%236BAAF7'%20style='fill:%236BAAF7;fill:color(display-p3%200.4196%200.6667%200.9686);fill-opacity:1;'/%3e%3cpath%20d='M7.01929%2030.3004V24.5054C7.01929%2024.4438%207.26987%2024.3939%207.57898%2024.3939H9.81773C10.1268%2024.3939%2010.3774%2024.4438%2010.3774%2024.5054V30.3004C10.3774%2030.362%2010.1268%2030.4118%209.81773%2030.4118H7.57898C7.26987%2030.4118%207.01929%2030.362%207.01929%2030.3004Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20opacity='0.91'%20d='M13.1048%2030.0058L13.1048%2013.7647C13.1048%2013.5405%2013.3554%2013.3587%2013.6645%2013.3587H15.9032C16.2124%2013.3587%2016.4629%2013.5405%2016.4629%2013.7647V30.0058C16.4629%2030.2301%2016.2124%2030.4118%2015.9032%2030.4118H13.6645C13.3554%2030.4118%2013.1048%2030.2301%2013.1048%2030.0058Z'%20fill='%2360A5FA'%20style='fill:%2360A5FA;fill:color(display-p3%200.3765%200.6471%200.9804);fill-opacity:1;'/%3e%3ccircle%20cx='29.4099'%20cy='3.70001'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='22.9143'%20cy='9.0146'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='15.6048'%20cy='4.69147'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3ccircle%20cx='5.25061'%20cy='18.7'%20r='2'%20fill='%2393C5FD'%20stroke='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;stroke:%2393C5FD;stroke:color(display-p3%200.5765%200.7725%200.9922);stroke-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "mixedChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Pie Chart",
            "description": "Pie Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%200C8.1%200%200%208.1%200%2018C0%2027.9%208.1%2036%2018%2036C23.2%2036%2027.9%2033.8%2031.1%2030.3L18%2018V0Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M36%2018C36%208.1%2027.9%200%2018%200V18H36Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M18%2018L31.1%2030.3C34.1%2027.1%2036%2022.8%2036%2018H18Z'%20fill='%233B82F6'/%3e%3c/svg%3e",
            "idPrefix": "pieChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Plotly JSON Chart",
            "description": "Plotly JSON Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "https://retool-edge.com/assets_vjs/chart2PlotlyJsonPreset-BNx5UMz3.svg",
            "template": {
              "chartType": "plotlyJson",
              "plotlyDataJson": "[\n  {\n    \"x\": [\n      20,\n      20.153,\n      20.307,\n      20.461,\n      20.615,\n      20.769,\n      20.923,\n      21.076,\n      21.23,\n      21.384,\n      21.538,\n      21.692,\n      21.846,\n      22,\n      22.153,\n      22.307,\n      22.461,\n      22.615,\n      22.769,\n      22.923,\n      23.076,\n      23.23,\n      23.384,\n      23.538,\n      23.692,\n      23.846,\n      24,\n      24.153,\n      24.307,\n      24.461,\n      24.615,\n      24.769,\n      24.923,\n      25.076,\n      25.23,\n      25.384,\n      25.538,\n      25.692,\n      25.846,\n      26,\n      26.153,\n      26.307,\n      26.461,\n      26.615,\n      26.769,\n      26.923,\n      27.076,\n      27.23,\n      27.384,\n      27.538,\n      27.692,\n      27.846,\n      28,\n      28.153,\n      28.307,\n      28.461,\n      28.615,\n      28.769,\n      28.923,\n      29.076,\n      29.23,\n      29.384,\n      29.538,\n      29.692,\n      29.846,\n      30,\n      30.153,\n      30.307,\n      30.461,\n      30.615,\n      30.769,\n      30.923,\n      31.076,\n      31.23,\n      31.384,\n      31.538,\n      31.692,\n      31.846,\n      32,\n      32.153,\n      32.307,\n      32.461,\n      32.615,\n      32.769,\n      32.923,\n      33.076,\n      33.23,\n      33.384,\n      33.538,\n      33.692,\n      33.846,\n      34,\n      34.153,\n      34.307,\n      34.461,\n      45,\n      39,\n      16,\n      45,\n      6,\n      26,\n      10,\n      20,\n      38,\n      2,\n      46,\n      29,\n      8,\n      6,\n      1,\n      47,\n      14,\n      21,\n      31,\n      1,\n      37,\n      46,\n      39,\n      20,\n      11,\n      29,\n      14,\n      1,\n      49,\n      40,\n      7,\n      39,\n      50,\n      3,\n      16,\n      47,\n      27,\n      23,\n      28,\n      37,\n      16,\n      33,\n      7,\n      32,\n      10,\n      20,\n      27,\n      25,\n      31,\n      1,\n      23,\n      32,\n      15,\n      27,\n      34,\n      21,\n      41,\n      44,\n      46,\n      49,\n      31\n    ],\n    \"y\": [\n      0,\n      1,\n      2,\n      3,\n      4,\n      5,\n      0,\n      6,\n      9,\n      10,\n      11,\n      12,\n      13,\n      14,\n      17,\n      18,\n      19,\n      20,\n      21,\n      25,\n      26,\n      27,\n      28,\n      33,\n      34,\n      35,\n      36,\n      40,\n      0,\n      6,\n      9,\n      19,\n      24,\n      29,\n      32,\n      37,\n      40,\n      0,\n      1,\n      2,\n      3,\n      4,\n      5,\n      9,\n      10,\n      11,\n      12,\n      13,\n      19,\n      24,\n      29,\n      32,\n      37,\n      40,\n      0,\n      4,\n      9,\n      19,\n      24,\n      29,\n      32,\n      37,\n      40,\n      0,\n      5,\n      9,\n      19,\n      24,\n      29,\n      32,\n      37,\n      40,\n      0,\n      6,\n      9,\n      10,\n      11,\n      12,\n      13,\n      14,\n      19,\n      25,\n      26,\n      27,\n      28,\n      33,\n      34,\n      35,\n      36,\n      40,\n      41,\n      42,\n      43,\n      44,\n      45,\n      45,\n      36,\n      50,\n      5,\n      47,\n      23,\n      7,\n      5,\n      34,\n      18,\n      29,\n      15,\n      15,\n      41,\n      40,\n      6,\n      47,\n      13,\n      47,\n      8,\n      23,\n      15,\n      2,\n      32,\n      43,\n      36,\n      4,\n      15,\n      35,\n      5,\n      7,\n      6,\n      27,\n      37,\n      46,\n      19,\n      13,\n      9,\n      3,\n      15,\n      5,\n      49,\n      1,\n      9,\n      30,\n      27,\n      7,\n      9,\n      32,\n      33,\n      3,\n      49,\n      11,\n      6,\n      38,\n      45,\n      2,\n      16,\n      20,\n      9,\n      23\n    ],\n    \"z\": [\n      27,\n      27,\n      27,\n      27,\n      27,\n      27,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      26,\n      25,\n      25,\n      25,\n      25,\n      25,\n      25,\n      25,\n      25,\n      25,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      24,\n      23,\n      23,\n      23,\n      23,\n      23,\n      23,\n      23,\n      23,\n      23,\n      22,\n      22,\n      22,\n      22,\n      22,\n      22,\n      22,\n      22,\n      22,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      21,\n      45,\n      5,\n      44,\n      39,\n      5,\n      11,\n      13,\n      49,\n      10,\n      46,\n      43,\n      4,\n      10,\n      48,\n      1,\n      42,\n      42,\n      46,\n      36,\n      35,\n      41,\n      17,\n      17,\n      35,\n      21,\n      13,\n      21,\n      41,\n      20,\n      15,\n      26,\n      21,\n      4,\n      8,\n      18,\n      37,\n      26,\n      25,\n      45,\n      19,\n      24,\n      34,\n      6,\n      32,\n      49,\n      16,\n      11,\n      27,\n      24,\n      16,\n      14,\n      0,\n      7,\n      45,\n      30,\n      46,\n      12,\n      38,\n      27,\n      20,\n      16\n    ],\n    \"mode\": \"markers\",\n    \"type\": \"scatter3d\",\n    \"marker\": {\n      \"colorscale\": \"Viridis\",\n      \"showscale\": false,\n      \"size\": [\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        13,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        12,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        11,\n        7,\n        8,\n        6,\n        7,\n        8,\n        8,\n        6,\n        6,\n        7,\n        7,\n        8,\n        6,\n        6,\n        7,\n        6,\n        6,\n        8,\n        9,\n        8,\n        6,\n        6,\n        6,\n        7,\n        3,\n        8,\n        5,\n        8,\n        5,\n        5,\n        4,\n        8,\n        6,\n        3,\n        8,\n        8,\n        3,\n        3,\n        8,\n        6,\n        8,\n        6,\n        3,\n        8,\n        8,\n        8,\n        7,\n        3,\n        7,\n        6,\n        4,\n        6,\n        8,\n        7,\n        6,\n        3,\n        4,\n        5,\n        3,\n        5,\n        7,\n        7,\n        5\n      ],\n      \"symbol\": \"circle\",\n      \"line\": {\n        \"color\": [\n          1,\n          2,\n          3,\n          4,\n          5,\n          6,\n          7,\n          8,\n          9,\n          10,\n          11,\n          12,\n          13,\n          14,\n          15,\n          16,\n          17,\n          18,\n          19,\n          20,\n          21,\n          22,\n          23,\n          24,\n          25,\n          26,\n          27,\n          28,\n          29,\n          30,\n          31,\n          32,\n          33,\n          34,\n          35,\n          36,\n          37,\n          38,\n          39,\n          40,\n          41,\n          42,\n          43,\n          44,\n          45,\n          46,\n          47,\n          48,\n          49,\n          50,\n          51,\n          52,\n          53,\n          54,\n          55,\n          56,\n          57,\n          58,\n          59,\n          60,\n          61,\n          62,\n          63,\n          64,\n          65,\n          66,\n          67,\n          68,\n          69,\n          70,\n          71,\n          72,\n          73,\n          74,\n          75,\n          76,\n          77,\n          78,\n          79,\n          80,\n          81,\n          82,\n          83,\n          84,\n          85,\n          86,\n          87,\n          88,\n          89,\n          90,\n          91,\n          92,\n          93,\n          94,\n          95,\n          96,\n          97,\n          98,\n          99,\n          100,\n          101,\n          102,\n          103,\n          104,\n          105,\n          106,\n          107,\n          108,\n          109,\n          110,\n          111,\n          112,\n          113,\n          114,\n          115,\n          116,\n          117,\n          118,\n          119,\n          120,\n          121,\n          122,\n          123,\n          124,\n          125,\n          126,\n          127,\n          128,\n          129,\n          130,\n          131,\n          132,\n          133,\n          134,\n          135,\n          136,\n          137,\n          138,\n          139,\n          140,\n          141,\n          142,\n          143,\n          144,\n          145,\n          146,\n          147,\n          148,\n          149,\n          150,\n          151,\n          152,\n          153,\n          154,\n          155\n        ],\n        \"width\": 1\n      },\n      \"opacity\": 0.8\n    }\n  }\n]",
              "plotlyLayoutJson": "{\n  \"margin\": {\n    \"l\": 0,\n    \"r\": 0,\n    \"t\": 0,\n    \"b\": 0\n  },\n  \"paper_bgcolor\": \"rgb(0,0,0,0)\",\n  \"plot_bgcolor\": \"rgb(0,0,0,0)\",\n  \"autosize\": false\n}",
              "selectedPoints": "[]"
            },
            "idPrefix": "plotlyJsonChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Sankey Chart",
            "description": "Sankey Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='30'%20height='32'%20viewBox='0%200%2030%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%2032H16.5L17%2026H30V32Z'%20fill='%23D7E7FC'%20style='fill:%23D7E7FC;fill:color(display-p3%200.8431%200.9059%200.9882);fill-opacity:1;'/%3e%3cpath%20d='M14%2021.5L0.5%2021L1%2032H14.5L14%2021.5Z'%20fill='%23D7E7FC'%20style='fill:%23D7E7FC;fill:color(display-p3%200.8431%200.9059%200.9882);fill-opacity:1;'/%3e%3cpath%20d='M22%2013.5C18%2014.5%2015.5%2014%2015.5%2014L16%2027.5C16%2027.5%2019.5%2024.5%2022.5%2024.5C25.5%2024.5%2029.5%2025%2029.5%2025L28.5%2010.5C28.5%2010.5%2026%2012.5%2022%2013.5Z'%20fill='%23D7E7FC'%20style='fill:%23D7E7FC;fill:color(display-p3%200.8431%200.9059%200.9882);fill-opacity:1;'/%3e%3cpath%20d='M29%200H0V12H29V0Z'%20fill='%23D7E7FC'%20style='fill:%23D7E7FC;fill:color(display-p3%200.8431%200.9059%200.9882);fill-opacity:1;'/%3e%3cpath%20d='M15%2014.0363V22C15%2022%2013%2020%208%2019.5C3%2019%201%2019%201%2019V10C1%2010%201.5%2011.5%208.5%2013C14.1875%2014.2188%2014.9238%2014.1172%2015%2014.0363V14C15%2014%2015.0176%2014.0176%2015%2014.0363Z'%20fill='%23D7E7FC'%20style='fill:%23D7E7FC;fill:color(display-p3%200.8431%200.9059%200.9882);fill-opacity:1;'/%3e%3cpath%20d='M3%2018.4062L3%200.59375C3%200.265831%202.77614%200%202.5%200L0.5%200C0.223858%200%200%200.265831%200%200.59375L0%2018.4062C0%2018.7342%200.223858%2019%200.5%2019H2.5C2.77614%2019%203%2018.7342%203%2018.4062Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M3%2031.6562L3%2021.3438C3%2021.1539%202.77614%2021%202.5%2021H0.5C0.223858%2021%200%2021.1539%200%2021.3438L0%2031.6562C0%2031.8461%200.223858%2032%200.5%2032H2.5C2.77614%2032%203%2031.8461%203%2031.6562Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M30%2024.2188V0.78125C30%200.349778%2029.7761%200%2029.5%200L27.5%200C27.2239%200%2027%200.349778%2027%200.78125V24.2188C27%2024.6502%2027.2239%2025%2027.5%2025H29.5C29.7761%2025%2030%2024.6502%2030%2024.2188Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M30%2031.8125V26.1875C30%2026.0839%2029.7761%2026%2029.5%2026H27.5C27.2239%2026%2027%2026.0839%2027%2026.1875V31.8125C27%2031.9161%2027.2239%2032%2027.5%2032H29.5C29.7761%2032%2030%2031.9161%2030%2031.8125Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M17%2011.625V0.375C17%200.167893%2016.7761%200%2016.5%200L14.5%200C14.2239%200%2014%200.167893%2014%200.375V11.625C14%2011.8321%2014.2239%2012%2014.5%2012H16.5C16.7761%2012%2017%2011.8321%2017%2011.625Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3cpath%20d='M17%2031.4375V14.5625C17%2014.2518%2016.7761%2014%2016.5%2014H14.5C14.2239%2014%2014%2014.2518%2014%2014.5625V31.4375C14%2031.7482%2014.2239%2032%2014.5%2032H16.5C16.7761%2032%2017%2031.7482%2017%2031.4375Z'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3c/svg%3e",
            "template": {
              "chartType": "sankey",
              "sankeyDatasource": "{{ [\n  [\"Applications\", \"Rejected\", null, 20],\n  [\"Applications\", \"Interview\", \"Offer\", null, 4],\n  [\"Applications\", \"Interview\", \"No Offer\", null, 3],\n  [\"Applications\", \"No Answer\", null, 30],\n] }}",
              "sankeyDatasourceMode": "manual",
              "sankeyMode": "source",
              "sankeyAllowDuplicateNodesAtDifferentSteps": true,
              "sankeyNodeHoverTemplate": "%{label}<br>Flow: %{value}<extra></extra>",
              "sankeyNodeHoverTemplateMode": "source",
              "sankeyLinkHoverTemplate": "%{source.label} to %{target.label}<br>: %{value}<extra></extra>",
              "sankeyLinkHoverTemplateMode": "source",
              "colorArray": [
                "#4f79a7",
                "#4f79a7",
                "#f38e2c",
                "#76b8b2",
                "#e1575a",
                "#e1575a"
              ],
              "colorArrayDropDown": [
                "#4f79a7",
                "#4f79a7",
                "#f38e2c",
                "#76b8b2",
                "#e1575a",
                "#e1575a"
              ],
              "colorInputMode": "colorArrayDropDown",
              "gradientColorArray": [
                [
                  "0.0",
                  "{{ theme.success }}"
                ],
                [
                  "1.0",
                  "{{ theme.primary }}"
                ]
              ],
              "sankeyLinkColorArray": [
                "#afc3d7",
                "#f9cca0",
                "#c2dedc",
                "#f1b4b4",
                "#f1b4b4"
              ],
              "sankeyLinkColorArrayDropDown": [
                "#afc3d7",
                "#f9cca0",
                "#c2dedc",
                "#f1b4b4",
                "#f1b4b4"
              ],
              "sankeyLinkGradientColorArray": [
                [
                  "0.0",
                  "{{ theme.success }}"
                ],
                [
                  "1.0",
                  "{{ theme.primary }}"
                ]
              ],
              "sankeyLinkColorInputMode": "colorArrayDropDown",
              "plotBgColor": "rgb(0,0,0,0)",
              "paperBgColor": "rgb(0,0,0,0)",
              "legendPosition": "none",
              "showToolbarAddOn": false,
              "showToImage": false,
              "showZoomSelect": false,
              "showPan": false,
              "showBoxSelect": false,
              "showLassoSelect": false,
              "showZoomIn": false,
              "showZoomOut": false,
              "showAutoscale": false,
              "showResetView": false,
              "selectedPoints": "[]"
            },
            "idPrefix": "sankeyChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Scatter Chart",
            "description": "Scatter Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='35'%20height='32'%20viewBox='0%200%2035%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.80005%2021.2H34.2001M1.80005%2011.2H34.2001M1.80005%201.20001H34.2001'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M1.80005%2031.2H34.2001'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3ccircle%20cx='2.5'%20cy='22.5'%20r='2.5'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3ccircle%20cx='30.5'%20cy='12.5'%20r='2.5'%20fill='%2367ADFB'%20style='fill:%2367ADFB;fill:color(display-p3%200.4046%200.6783%200.9849);fill-opacity:1;'/%3e%3ccircle%20cx='19.5'%20cy='11.5'%20r='2.5'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3ccircle%20cx='26.5'%20cy='6.5'%20r='2.5'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3ccircle%20cx='9.5'%20cy='27.5'%20r='2.5'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3ccircle%20cx='20.5'%20cy='27.5'%20r='2.5'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3ccircle%20cx='22.5'%20cy='17.5'%20r='2.5'%20fill='%2367ADFB'%20style='fill:%2367ADFB;fill:color(display-p3%200.4046%200.6783%200.9849);fill-opacity:1;'/%3e%3ccircle%20cx='11.5'%20cy='19.5'%20r='2.5'%20fill='%2393C5FD'%20style='fill:%2393C5FD;fill:color(display-p3%200.5765%200.7725%200.9922);fill-opacity:1;'/%3e%3ccircle%20cx='29.5'%20cy='20.5'%20r='2.5'%20fill='%2380B7FA'%20style='fill:%2380B7FA;fill:color(display-p3%200.5027%200.7161%200.9802);fill-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "scatterChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Sparkline",
            "description": "Simplified line chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='31'%20height='23'%20viewBox='0%200%2031%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.8042%2021.2527C1.8042%2021.2527%203.86252%2017.7404%207.36394%2017.1677C10.8653%2016.595%2011.5202%2016.1613%2012.7077%2014.5036C13.8952%2012.8459%2015.805%206.82487%2015.805%206.82487C15.805%206.82487%2017.4271%202.02431%2019.8095%201.71556C22.5917%201.355%2024.9342%208.62987%2025.8576%2011.8707C26.781%2015.1116%2029.9267%2015.3723%2029.9267%2015.3723'%20stroke='url(%23paint0_linear_15_14)'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_15_14'%20x1='14.3403'%20y1='0.311714'%20x2='14.3403'%20y2='19.313'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233170F9'/%3e%3cstop%20offset='1'%20stop-color='%23CAE1FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
            "idPrefix": "sparkline",
            "type": "ChartWidget2"
          },
          {
            "name": "Stacked Bar Chart",
            "description": "Stacked Bar Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.799988%2021.2H33.2M0.799988%2011.2H33.2M0.799988%201.20001H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M0.799988%2031.2H33.2'%20stroke='%23DEDEDE'%20style='stroke:%23DEDEDE;stroke:color(display-p3%200.8706%200.8706%200.8706);stroke-opacity:1;'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3crect%20x='6'%20y='1.94464'%20width='3'%20height='14.2317'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3crect%20x='6'%20y='16.1763'%20width='3'%20height='14.2317'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3crect%20x='12'%20y='1.94464'%20width='3'%20height='20.2496'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3crect%20x='12'%20y='22.1943'%20width='3'%20height='8.21378'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3crect%20x='18'%20y='1.94464'%20width='3'%20height='4.77451'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3crect%20x='18'%20y='6.71915'%20width='3'%20height='23.6889'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3crect%20x='24'%20y='1.94464'%20width='3'%20height='12.2214'%20fill='%23BFDBFE'%20style='fill:%23BFDBFE;fill:color(display-p3%200.7490%200.8588%200.9961);fill-opacity:1;'/%3e%3crect%20x='24'%20y='14.166'%20width='3'%20height='16.242'%20fill='%236EADFA'%20style='fill:%236EADFA;fill:color(display-p3%200.4314%200.6784%200.9804);fill-opacity:1;'/%3e%3c/svg%3e",
            "idPrefix": "stackedBarChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Sunburst Chart",
            "description": "Sunburst Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9704%200.65094V4.27575C9.76461%204.28302%205.33414%207.54264%203.56697%2012.1072L0.188477%2010.8089C2.47734%204.88726%208.22065%200.665468%2014.9704%200.65094Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M30.8122%2016.4775C30.8122%2022.3919%2027.575%2027.5389%2022.7945%2030.2682L21.0049%2027.1208C24.6964%2025.0175%2027.1946%2021.0493%2027.1946%2016.4848C27.1946%2014.4786%2026.7027%2012.5919%2025.8448%2010.9211L29.0595%209.27283C30.2098%2011.5003%2030.8107%2013.9706%2030.8122%2016.4775Z'%20fill='%233B82F6'/%3e%3cpath%20d='M14.979%208.0049C18.2643%208.0049%2021.1139%209.88697%2022.5224%2012.6256L25.8422%2010.9231C23.8148%206.98065%2019.7125%204.27245%2014.9836%204.27245H14.9684V8.00556L14.979%208.0049Z'%20fill='%233B82F6'/%3e%3cpath%20d='M14.9684%208.00557V4.27312C9.76132%204.27972%205.32887%207.53934%203.565%2012.1111L7.04651%2013.4504C8.27151%2010.274%2011.3509%208.01019%2014.9684%208.00557Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M27.1953%2016.4835C27.1953%2014.4806%2026.7013%2012.5939%2025.8422%2010.9231L22.5225%2012.6256C23.1398%2013.8198%2023.4623%2015.1444%2023.4628%2016.4888C23.4628%2019.6579%2021.7267%2022.4163%2019.1638%2023.8791L21.0076%2027.1222C24.6971%2025.0156%2027.1953%2021.046%2027.1953%2016.4835Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M14.979%2024.9938C12.9598%2024.9955%2011.0064%2024.2756%209.47142%2022.9638L7.05576%2025.8047C9.2654%2027.6928%2012.0771%2028.729%2014.9836%2028.7262C17.1747%2028.7262%2019.2278%2028.1385%2021.0075%2027.1222L19.1638%2023.8797C17.8899%2024.6099%2016.4472%2024.9939%2014.979%2024.9938Z'%20fill='%233B82F6'/%3e%3cpath%20d='M14.9684%2011.6132V8.00557C11.3508%208.01019%208.27217%2010.2746%207.04651%2013.4504L10.4118%2014.7454C10.7668%2013.8247%2011.392%2013.033%2012.2052%2012.4741C13.0184%2011.9152%2013.9817%2011.6147%2014.9684%2011.6132Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M10.0823%2016.4934C10.0823%2015.8766%2010.2018%2015.2889%2010.4118%2014.7454L7.04652%2013.451C6.66979%2014.4196%206.47567%2015.4495%206.47397%2016.4888C6.47397%2019.0841%207.63887%2021.404%209.47142%2022.9638L11.8065%2020.2179C11.2658%2019.7596%2010.8314%2019.189%2010.5336%2018.5458C10.2359%2017.9026%2010.0818%2017.2022%2010.0823%2016.4934Z'%20fill='%233B82F6'/%3e%3cpath%20d='M14.979%208.00491H14.9684V11.6139H14.975C16.8637%2011.6139%2018.5034%2012.6956%2019.3137%2014.2712L22.5231%2012.6256C21.1139%209.88698%2018.2637%208.00491%2014.979%208.00491Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M14.9743%2021.3855C13.8129%2021.3865%2012.6894%2020.9724%2011.8065%2020.2179L9.47141%2022.9638C11.0064%2024.2756%2012.9598%2024.9955%2014.979%2024.9938C16.4473%2024.9937%2017.89%2024.6094%2019.1638%2023.8791L17.3814%2020.7442C16.6487%2021.1642%2015.8188%2021.3857%2014.9743%2021.3855Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M19.8545%2016.4934C19.8544%2017.3572%2019.6255%2018.2056%2019.1911%2018.9523C18.7567%2019.6989%2018.1323%2020.3172%2017.3814%2020.7442L19.1644%2023.8791C21.7267%2022.4163%2023.4628%2019.6579%2023.4628%2016.4888C23.4628%2015.0967%2023.1194%2013.7858%2022.5224%2012.6256L19.313%2014.2712C19.6564%2014.9382%2019.8545%2015.6924%2019.8545%2016.4934Z'%20fill='%2393C5FD'/%3e%3c/svg%3e",
            "template": {
              "chartType": "sunburst",
              "lineWidth": 2,
              "sunburstDataBranchValues": "remainder",
              "sunburstDataLeafOpacity": 0.6,
              "colorArrayDropDown": [
                "#FDDEA0",
                "#8C2A81",
                "#A5DB36",
                "#36B779",
                "#1E988B",
                "#31688E",
                "#462F7D"
              ],
              "gradientColorArray": [
                [
                  "0.0",
                  "{{ theme.canvas }}"
                ],
                [
                  "1.0",
                  "{{ theme.primary }}"
                ]
              ],
              "textTemplateMode": "source",
              "colorInputMode": "colorArrayDropDown",
              "hoverTemplateMode": "source",
              "textTemplate": "%{label}<br>%{value}",
              "textTemplatePosition": "radial",
              "hoverTemplate": "%{label}<br>%{value}<extra></extra>",
              "labelData": [
                "Root",
                "Category A",
                "Category B",
                "Subcategory A1",
                "Subcategory A2",
                "Subcategory B1",
                "Subcategory B2"
              ],
              "parentData": [
                "",
                "Root",
                "Root",
                "Category A",
                "Category A",
                "Category B",
                "Category B"
              ],
              "valueData": [
                100,
                40,
                60,
                20,
                20,
                30,
                30
              ],
              "labelDataMode": "manual",
              "parentDataMode": "manual",
              "valueDataMode": "manual",
              "colorArray": [
                "#FDDEA0",
                "#8C2A81"
              ],
              "plotBgColor": " rgb(0,0,0,0)",
              "paperBgColor": " rgb(0,0,0,0)",
              "legendPosition": "none",
              "showToolbarAddOn": false,
              "showToImage": false,
              "showZoomSelect": false,
              "showPan": false,
              "showBoxSelect": false,
              "showLassoSelect": false,
              "showZoomIn": false,
              "showZoomOut": false,
              "showAutoscale": false,
              "showResetView": false,
              "selectedPoints": "[]"
            },
            "idPrefix": "sunburstChart",
            "type": "ChartWidget2"
          },
          {
            "name": "Treemap",
            "description": "Treemap",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='33'%20height='31'%20viewBox='0%200%2033%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.4688%200H0V15.5H15.4688V0Z'%20fill='%233B82F6'/%3e%3cpath%20d='M33%200H17.5312V15.5H33V0Z'%20fill='%2360A5FA'/%3e%3cpath%20d='M7.21875%2017.5667H0V31H7.21875V17.5667Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M19.5938%2017.5667H9.28125V31H19.5938V17.5667Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M33%2017.5667H21.6562V31H33V17.5667Z'%20fill='%2393C5FD'/%3e%3c/svg%3e",
            "template": {
              "chartType": "treemap",
              "textTemplate": "%{label}<br>%{value}",
              "hoverTemplate": "%{label}<br>%{value}<extra></extra>",
              "textTemplateMode": "source",
              "hoverTemplateMode": "source",
              "labelData": [
                "Parent A",
                "a1",
                "a2",
                "a3",
                "Parent B",
                "b1",
                "b2",
                "b3",
                "b4",
                "Parent C",
                "c1",
                "c2"
              ],
              "parentData": [
                "",
                "Parent A",
                "Parent A",
                "Parent A",
                "",
                "Parent B",
                "Parent B",
                "Parent B",
                "Parent B",
                "",
                "Parent C",
                "Parent C"
              ],
              "valueData": [
                0,
                10,
                20,
                30,
                0,
                15,
                25,
                35,
                40,
                0,
                12,
                22
              ],
              "colorArray": [
                "#BFDBFE",
                "#93C5FD",
                "#93C5FD",
                "#93C5FD",
                "#93C5FD",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#3B82F6",
                "#3B82F6"
              ],
              "colorArrayDropDown": [
                "#BFDBFE",
                "#93C5FD",
                "#93C5FD",
                "#93C5FD",
                "#93C5FD",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#60A5FA",
                "#3B82F6",
                "#3B82F6"
              ],
              "colorInputMode": "colorArrayDropDown",
              "gradientColorArray": [
                [
                  "0.0",
                  "{{ theme.canvas }}"
                ],
                [
                  "1.0",
                  "{{ theme.primary }}"
                ]
              ],
              "labelDataMode": "manual",
              "parentDataMode": "manual",
              "valueDataMode": "manual",
              "plotBgColor": "rgb(0,0,0,0)",
              "paperBgColor": "rgb(0,0,0,0)",
              "legendPosition": "none",
              "showToolbarAddOn": false,
              "showToImage": false,
              "showZoomSelect": false,
              "showPan": false,
              "showBoxSelect": false,
              "showLassoSelect": false,
              "showZoomIn": false,
              "showZoomOut": false,
              "showAutoscale": false,
              "showResetView": false,
              "selectedPoints": "[]"
            },
            "idPrefix": "treemap",
            "type": "ChartWidget2"
          },
          {
            "name": "Waterfall Chart",
            "description": "Waterfall Chart",
            "defaultWidth": 5,
            "defaultHeight": 38,
            "section": "Charts",
            "themeEditorSection": null,
            "tags": [
              "chart",
              "graph",
              "charts",
              "data visualization",
              "bi",
              "diagram",
              "plot",
              "display",
              "series"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_49)'%3e%3cpath%20d='M0.799988%2021.2H33.2M0.799988%2011.2H33.2M0.799988%201.20001H33.2'%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M0.799988%2031.2H33.2'%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20d='M6%2030.5V15.5C6%2015.2239%205.77614%2015%205.5%2015H3.5C3.22386%2015%203%2015.2239%203%2015.5V30.5C3%2030.7761%203.22386%2031%203.5%2031H5.5C5.77614%2031%206%2030.7761%206%2030.5Z'%20fill='%23BFDBFE'/%3e%3cpath%20d='M12%2015.5V3.5C12%203.2239%2011.7761%203%2011.5%203H9.5C9.2239%203%209%203.2239%209%203.5V15.5C9%2015.7761%209.2239%2016%209.5%2016H11.5C11.7761%2016%2012%2015.7761%2012%2015.5Z'%20fill='%2393C5FD'/%3e%3cpath%20d='M30%2027.6481V9.35185C30%209.15753%2029.7761%209%2029.5%209H27.5C27.2239%209%2027%209.15753%2027%209.35185V27.6481C27%2027.8424%2027.2239%2028%2027.5%2028H29.5C29.7761%2028%2030%2027.8424%2030%2027.6481Z'%20fill='%2367ADFB'/%3e%3cpath%20opacity='0.91'%20d='M18%206.90476V3.09524C18%203.04265%2017.7761%203%2017.5%203H15.5C15.2239%203%2015%203.04265%2015%203.09524V6.90476C15%206.95735%2015.2239%207%2015.5%207H17.5C17.7761%207%2018%206.95735%2018%206.90476Z'%20fill='%2360A5FA'/%3e%3cpath%20opacity='0.91'%20d='M24%208.95238V7.04762C24%207.02132%2023.7761%207%2023.5%207H21.5C21.2239%207%2021%207.02132%2021%207.04762V8.95238C21%208.97868%2021.2239%209%2021.5%209H23.5C23.7761%209%2024%208.97868%2024%208.95238Z'%20fill='%2360A5FA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_49'%3e%3crect%20width='34'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {
              "chartType": "waterfall",
              "_seriesType": {
                "0": "waterfall"
              },
              "_seriesAggregationType": {
                "0": "none"
              },
              "_seriesDataLabelPosition": {
                "0": "inside"
              },
              "_seriesDatasource": {
                "0": ""
              },
              "_seriesDatasourceMode": {
                "0": "source"
              },
              "_seriesFilteredGroups": {},
              "_seriesFilteredGroupsMode": {
                "0": "source"
              },
              "_seriesGroupBy": {
                "0": []
              },
              "_seriesGroupByDropdownType": {
                "0": "source"
              },
              "_seriesIds": [
                "0"
              ],
              "_seriesLineColor": {
                "0": "{{ theme.primary }}"
              },
              "_seriesLineDash": {
                "0": "solid"
              },
              "_seriesLineShape": {
                "0": "linear"
              },
              "_seriesLineWidth": {
                "0": 2
              },
              "_seriesLineUnderFillMode": {
                "0": "none"
              },
              "_seriesMarkerBorderColor": {},
              "_seriesMarkerBorderWidth": {
                "0": 0
              },
              "_seriesMarkerColor": {
                "0": "{{ theme.primary }}"
              },
              "_seriesMarkerSize": {
                "0": 6
              },
              "_seriesMarkerSymbol": {
                "0": "circle"
              },
              "_seriesIncreasingColor": {
                "0": "{{ theme.success }}"
              },
              "_seriesDecreasingColor": {
                "0": "{{ theme.danger }}"
              },
              "_seriesIncreasingBorderColor": {
                "0": "{{ theme.success }}"
              },
              "_seriesDecreasingBorderColor": {
                "0": "{{ theme.danger }}"
              },
              "_seriesConnectorLineColor": {
                "0": "#000000"
              },
              "_seriesWaterfallMeasures": {
                "0": [
                  "relative",
                  "relative",
                  "total",
                  "relative",
                  "relative",
                  "total"
                ]
              },
              "_seriesWaterfallMeasuresMode": {
                "0": "source"
              },
              "_seriesWaterfallBase": {
                "0": 0
              },
              "_seriesName": {
                "0": "sales"
              },
              "_seriesShowMarkers": {
                "0": false
              },
              "_seriesXData": {
                "0": [
                  "Sales",
                  "Consulting",
                  "Total Revenue",
                  "Expenses",
                  "Income",
                  "Total"
                ]
              },
              "_seriesYData": {
                "0": [
                  60,
                  80,
                  0,
                  -40,
                  80,
                  0
                ]
              },
              "_seriesZData": {},
              "_seriesXDataMode": {
                "0": "manual"
              },
              "_seriesYDataMode": {
                "0": "manual"
              },
              "_seriesZDataMode": {
                "0": "manual"
              },
              "_seriesTextTemplate": {},
              "_seriesTextTemplateMode": {
                "0": "manual"
              },
              "_seriesHoverTemplate": {
                "0": "<b>%{x}</b><br>%{fullData.name}: %{y}<extra></extra>"
              },
              "_seriesHoverTemplateMode": {
                "0": "source"
              },
              "_seriesYAxis": {
                "0": "y"
              },
              "_seriesGroupByStyles": {
                "0": {}
              },
              "_seriesColorInputMode": {
                "0": "colorArrayDropDown"
              },
              "_seriesColorArray": {
                "0": [
                  null
                ]
              },
              "_seriesColorArrayDropDown": {
                "0": [
                  null
                ]
              },
              "_seriesGradientColorArray": {
                "0": [
                  [
                    "0.0",
                    "{{ theme.success }}"
                  ],
                  [
                    "1.0",
                    "{{ theme.primary }}"
                  ]
                ]
              },
              "barMode": "group",
              "barOrientation": "",
              "stackedBarTotalsDataLabelPosition": "none",
              "legendPosition": "none",
              "title": null,
              "xAxisScale": "category",
              "xAxisGrid": false,
              "xAxisShowLine": false,
              "xAxisShowTickLabels": true,
              "xAxisTitle": "Categories",
              "xAxisTitleStandoff": 20,
              "xAxisZeroLine": false,
              "xAxisTickFormat": "",
              "xAxisTickFormatMode": "gui",
              "xAxisLineWidth": 1,
              "xAxisRangeMode": "auto",
              "xAxisRangeMin": "",
              "xAxisRangeMax": "",
              "xAxisSort": "none",
              "yAxisGrid": false,
              "yAxisScale": "auto",
              "yAxisShowLine": false,
              "yAxisTitle": "Values",
              "yAxisTitleStandoff": 20,
              "yAxisZeroLine": false,
              "yAxisShowTickLabels": true,
              "yAxisTickFormat": "",
              "yAxisTickFormatMode": "gui",
              "yAxisLineWidth": 1,
              "yAxisRangeMode": "auto",
              "yAxisRangeMin": "",
              "yAxisRangeMax": "",
              "yAxisSort": "none",
              "yAxis2Grid": false,
              "yAxis2Scale": "auto",
              "yAxis2ShowLine": false,
              "yAxis2Title": "",
              "yAxis2TitleStandoff": 20,
              "yAxis2ZeroLine": false,
              "yAxis2ShowTickLabels": true,
              "yAxis2TickFormat": "",
              "yAxis2TickFormatMode": "gui",
              "yAxis2LineWidth": 1,
              "yAxis2RangeMode": "auto",
              "yAxis2RangeMin": "",
              "yAxis2RangeMax": "",
              "yAxis2Sort": "none",
              "showSecondYAxis": false,
              "showToolbarAddOn": false,
              "showToImage": false,
              "showZoomSelect": false,
              "showPan": false,
              "showBoxSelect": false,
              "showLassoSelect": false,
              "showZoomIn": false,
              "showZoomOut": false,
              "showAutoscale": false,
              "showResetView": false,
              "selectedPoints": "[]"
            },
            "idPrefix": "waterfallChart",
            "type": "ChartWidget2"
          }
        ]
      },
      {
        key: "Presentation",
        title: "Presentation",
        items: [
          {
            "name": "Alert",
            "description": "Display an alert with preset or custom styling",
            "defaultWidth": 3,
            "defaultHeight": 12,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Other"
            },
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='14.2'%20width='42.6'%20height='20.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3ccircle%20cx='12'%20cy='24'%20r='6'%20fill='%23FBEDC8'/%3e%3ccircle%20cx='12'%20cy='28'%20r='1'%20fill='%23C08811'/%3e%3cpath%20d='M12%2020v6'%20stroke='%23C08811'%20stroke-width='2'/%3e%3cpath%20stroke='%238E8E8E'%20stroke-width='2'%20d='M22%2022h11'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20d='M22%2027h19'/%3e%3c/svg%3e",
            "idPrefix": "alert",
            "type": "AlertWidget2"
          },
          {
            "name": "Avatar",
            "description": "Display a user photo",
            "defaultWidth": 3,
            "defaultHeight": 6,
            "section": "Presentation",
            "themeEditorSection": "Avatars & Tags",
            "tags": [
              "avatar",
              "user",
              "profile",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5'%20y='16'%20width='16'%20height='16'%20rx='2.667'%20fill='%23B3B3B3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%2018.667A2.667%202.667%200%20017.667%2016h10.666A2.667%202.667%200%200121%2018.667v10.666c0%20.694-.265%201.326-.7%201.8C19.05%2028.698%2016.252%2027%2013%2027c-3.251%200-6.05%201.697-7.3%204.134a2.657%202.657%200%2001-.7-1.8V18.666zM17%2022a4%204%200%2011-8%200%204%204%200%20018%200z'%20fill='%23EDEDED'/%3e%3crect%20x='4'%20y='15'%20width='18'%20height='18'%20rx='9'%20stroke='%23FAFAFA'%20stroke-width='2'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='1.879'%20d='M27%2022.061h15M27%2027.061h10'/%3e%3c/svg%3e",
            "template": {
              "src": "{{ current_user.profilePhotoUrl }}",
              "fallback": "{{ current_user.fullName }}",
              "imageSize": 32,
              "label": "{{ current_user.fullName }}",
              "labelCaption": "{{ current_user.email }}",
              "style": {
                "background": "automatic"
              }
            },
            "visualType": "avatar",
            "idPrefix": "avatar",
            "type": "AvatarWidget"
          },
          {
            "name": "Avatar Group",
            "description": "Display multiple user photos",
            "defaultWidth": 2,
            "defaultHeight": 5,
            "section": "Presentation",
            "themeEditorSection": "Avatars & Tags",
            "tags": [
              "user",
              "profile",
              "facepile",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20viewBox='0%200%2048%2048'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='M4%2019.35A2.35%202.35%200%20016.35%2017h9.396a2.35%202.35%200%20012.35%202.35v9.396a2.35%202.35%200%2001-2.35%202.35H6.349A2.35%202.35%200%20014%2028.745v-9.397z'%20fill='%23B3B3B3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4%2019.35A2.35%202.35%200%20016.35%2017h9.396a2.35%202.35%200%20012.35%202.35v9.396c0%20.611-.234%201.168-.617%201.586-1.103-2.146-3.568-3.64-6.431-3.64-2.864%200-5.33%201.494-6.432%203.64A2.34%202.34%200%20014%2028.746v-9.397zm10.571%202.936a3.524%203.524%200%2011-7.047%200%203.524%203.524%200%20017.047%200z'%20fill='%23EDEDED'/%3e%3c/g%3e%3crect%20x='3'%20y='16'%20width='16.095'%20height='16.095'%20rx='8.048'%20stroke='%23FAFAFA'%20stroke-width='2'/%3e%3cg%3e%3cpath%20d='M16.333%2019.301a2.35%202.35%200%20012.35-2.349h9.396a2.35%202.35%200%20012.35%202.35v9.396a2.35%202.35%200%2001-2.35%202.35h-9.396a2.35%202.35%200%2001-2.35-2.35v-9.397z'%20fill='%23B3B3B3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.333%2019.301a2.35%202.35%200%20012.35-2.349h9.396a2.35%202.35%200%20012.35%202.35v9.396a2.34%202.34%200%2001-.617%201.586c-1.102-2.146-3.567-3.64-6.431-3.64s-5.329%201.494-6.431%203.64a2.34%202.34%200%2001-.617-1.586v-9.397zm10.572%202.938a3.524%203.524%200%2011-7.048%200%203.524%203.524%200%20017.048%200z'%20fill='%23EDEDED'/%3e%3c/g%3e%3crect%20x='15.333'%20y='15.952'%20width='16.095'%20height='16.095'%20rx='8.048'%20stroke='%23FAFAFA'%20stroke-width='2'/%3e%3cg%3e%3cpath%20d='M30%2019.35A2.35%202.35%200%200132.35%2017h9.396a2.35%202.35%200%20012.35%202.35v9.396a2.35%202.35%200%2001-2.35%202.35h-9.397A2.35%202.35%200%200130%2028.745v-9.397z'%20fill='%23B3B3B3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2019.35A2.35%202.35%200%200132.35%2017h9.396a2.35%202.35%200%20012.35%202.35v9.396a2.34%202.34%200%2001-.617%201.586c-1.103-2.146-3.568-3.64-6.431-3.64-2.864%200-5.33%201.494-6.432%203.64A2.34%202.34%200%200130%2028.746v-9.397zm10.571%202.936a3.524%203.524%200%2011-7.047%200%203.524%203.524%200%20017.047%200z'%20fill='%23EDEDED'/%3e%3c/g%3e%3crect%20x='29'%20y='16'%20width='16.095'%20height='16.095'%20rx='8.048'%20stroke='%23FAFAFA'%20stroke-width='2'/%3e%3c/svg%3e",
            "template": {
              "images": "[]",
              "fallbacks": "['Hanson Deck', 'Sue Shei', 'Jason Response', 'Cher Actor', 'Erica Widget']",
              "imageSize": 32,
              "style": {
                "background": "automatic"
              }
            },
            "visualType": "avatar",
            "idPrefix": "avatarGroup",
            "type": "AvatarGroupWidget"
          },
          {
            "name": "Calendar",
            "description": "Display events in a calendar view",
            "defaultWidth": 6,
            "defaultHeight": 50,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Container"
            },
            "forceShowInDocs": true,
            "tags": [
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45%2042H3V16a1%201%200%200%201%201-1h40a1%201%200%200%201%201%201v26Z'%20fill='%23fff'/%3e%3cpath%20d='M11%2042V10M3%2022h42M3%2029h42M3%2036h42M37%2042V10'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M45%2016H3V7a1%201%200%200%201%201-1h40a1%201%200%200%201%201%201v9Z'%20fill='%238E8E8E'/%3e%3crect%20x='3'%20y='6'%20width='42'%20height='36'%20rx='3'%20stroke='%238E8E8E'%20stroke-width='1.6'/%3e%3cpath%20d='M28%2041h-9V16h9v25Z'%20fill='%23FCF5E9'/%3e%3cpath%20d='M5.57%207.91V13h1.044V9.674h.043l1.317%203.301h.71l1.318-3.289h.043V13h1.044V7.91H9.76L8.36%2011.33H8.3L6.899%207.91H5.57Zm8.872.887H16V13h1.064V8.797h1.559v-.888h-4.181v.888ZM23.117%2013h1.05l.966-3.328h.04l.97%203.328h1.049l1.456-5.09h-1.176l-.842%203.544h-.045l-.927-3.545H24.65l-.93%203.537h-.042l-.843-3.537h-1.175L23.117%2013Zm8.573-4.203h1.559V13h1.064V8.797h1.558v-.888h-4.18v.888ZM39.22%2013h1.076v-2.103h2.071v-.887h-2.07V8.797h2.294v-.888H39.22V13Z'%20fill='%23fff'/%3e%3cpath%20d='M28%2041V16M19%2041V16'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_eventIdByIndex": [
                "Event1",
                "Event2",
                "Event3",
                "Event4"
              ],
              "_groupIdByIndex": [
                "123",
                "123",
                "",
                ""
              ],
              "_allDayByIndex": [
                "",
                "",
                true,
                ""
              ],
              "_startByIndex": [
                "{{ moment().hours(8).minutes(0).subtract(1, 'hour') }}",
                "{{ moment().hours(12).minutes(0) }}",
                "{{ moment().hours(0).add(1, 'days') }}",
                "{{ moment().hours(7).minutes(0).add(1, 'days') }}"
              ],
              "_endByIndex": [
                "{{ moment().hours(8).minutes(0) }}",
                "{{ moment().hours(13).minutes(0) }}",
                "{{ moment().hours(0).add(3, 'days') }}",
                "{{ moment().hours(15).minutes(0).add(1, 'days') }}"
              ],
              "_titleByIndex": [
                "Standup",
                "Lunch",
                "Offsite",
                "Busy"
              ],
              "_colorByIndex": [
                "{{ theme.automatic[0] }}",
                "{{ theme.automatic[1] }}",
                "",
                "{{ theme.automatic[2] }}"
              ],
              "_ids": [
                "00030",
                "00031",
                "00032",
                "00033"
              ],
              "displayTimeZone": "local",
              "firstDayOfWeek": 0,
              "displayEventTime": true,
              "displayWeekends": true,
              "displayAllDaySlot": true,
              "viewType": "week",
              "listType": "week",
              "dayMaxEvents": 2
            },
            "idPrefix": "calendar",
            "type": "CalendarWidget2"
          },
          {
            "name": "Circular Image",
            "description": "Display an image with a circle crop",
            "defaultWidth": 2,
            "defaultHeight": 25,
            "section": "Presentation",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.127'%20y='6.127'%20width='34.745'%20height='34.745'%20rx='17.373'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.745'/%3e%3cmask%20id='a'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='9'%20y='10'%20width='27'%20height='27'%3e%3ccircle%20cx='22.5'%20cy='23.5'%20r='13.5'%20fill='%23C4C4C4'/%3e%3c/mask%3e%3cg%20mask='url(%23a)'%3e%3crect%20x='7.419'%20y='8.419'%20width='46.118'%20height='32.618'%20rx='3.491'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.745'/%3e%3ccircle%20cx='17.205'%20cy='18.205'%20r='4.295'%20fill='%23EECA86'/%3e%3cpath%20d='M31.17%2018.645a1.091%201.091%200%200%201%201.837-.02l10.844%2016.522a1.091%201.091%200%200%201-.912%201.69h-21.17a1.09%201.09%200%200%201-.925-1.67L31.17%2018.644Z'%20fill='%2382BF99'/%3e%3cpath%20d='M20.17%2028.45a1.09%201.09%200%200%201%201.784%200l4.807%206.832A1.09%201.09%200%200%201%2025.87%2037h-9.614a1.09%201.09%200%200%201-.892-1.718l4.807-6.832Z'%20fill='%2382BF99'/%3e%3c/g%3e%3c/svg%3e",
            "idPrefix": "circularImage",
            "type": "ImageWidget2"
          },
          {
            "name": "Divider",
            "description": "Display a dividing line",
            "defaultWidth": 4,
            "defaultHeight": 1,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Misc"
            },
            "tags": [
              "divider",
              "rule",
              "line",
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%206v8a4%204%200%200%200%204%204h26a4%204%200%200%200%204-4V6M41%2042v-8a4%204%200%200%200-4-4H11a4%204%200%200%200-4%204v8'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-dasharray='1%204'/%3e%3cpath%20d='M41%2024.8a.8.8%200%200%200%200-1.6v1.6ZM7%2023.2a.8.8%200%200%200%200%201.6v-1.6Zm34%200H7v1.6h34v-1.6Z'%20fill='%238E8E8E'/%3e%3c/svg%3e",
            "idPrefix": "divider",
            "type": "DividerWidget"
          },
          {
            "name": "Event List",
            "description": "Display a timeline of events",
            "defaultWidth": 3,
            "defaultHeight": 20,
            "section": "Presentation",
            "themeEditorSection": null,
            "tags": [
              "presentation",
              "timeline"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%209H5a2%202%200%200%200-2%202v4M37%2039h4a2%202%200%200%200%202-2v-4M43%2015v-4a2%202%200%200%200-2-2h-4M3%2033v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3ccircle%20cx='12'%20cy='17'%20r='3'%20fill='%233170F9'/%3e%3ccircle%20cx='12'%20cy='30'%20r='3'%20fill='%233170F9'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M19%2021h10M19%2016h18M19%2029h18M19%2034h10'/%3e%3cpath%20stroke='%23DAECFC'%20stroke-width='2'%20d='M12%2020v7'/%3e%3c/svg%3e",
            "template": {
              "items": "[\"Account created - 2020-06-29\", \"Password updated - 2020-06-29\", \"Billing details added - 2020-06-28\"]",
              "timestamps": "[\"2020-06-29T21:34:00+00:00\", \"2020-06-29T20:39:00+00:00\", \"2020-06-28T11:12:00+00:00\"]"
            },
            "idPrefix": "eventList",
            "type": "TimelineWidget"
          },
          {
            "name": "Icon",
            "description": "Display an icon",
            "defaultWidth": 1,
            "defaultHeight": 3,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Basic"
            },
            "tags": [
              "icon"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='a'%20fill='%23fff'%3e%3cpath%20d='M18.667%207.875H9.333A2.333%202.333%200%200%200%207%2010.208V16.917a2.334%202.334%200%200%200%202.334%202.333h9.332A2.334%202.334%200%200%200%2021%2016.917V10.208a2.333%202.333%200%200%200-2.333-2.333Z'/%3e%3c/mask%3e%3cpath%20d='M9.333%209.625h9.334v-3.5H9.333v3.5Zm9.333%207.875H9.334V21h9.332v-3.5Zm-9.916-.583v-5.405h-3.5v5.405h3.5Zm0-5.405v-1.304h-3.5v1.304h3.5Zm10.5-1.304v1.304h3.5v-1.304h-3.5Zm0%201.304v5.405h3.5v-5.405h-3.5ZM9.334%2017.5a.584.584%200%200%201-.584-.583h-3.5A4.084%204.084%200%200%200%209.334%2021v-3.5Zm9.332%203.5a4.084%204.084%200%200%200%204.084-4.083h-3.5a.584.584%200%200%201-.584.583V21Zm0-11.375c.323%200%20.584.261.584.583h3.5a4.083%204.083%200%200%200-4.083-4.083v3.5Zm-9.333-3.5a4.083%204.083%200%200%200-4.083%204.083h3.5c0-.322.261-.583.583-.583v-3.5Z'%20fill='%23BEBEBE'%20mask='url(%23a)'/%3e%3cpath%20fill='%23BEBEBE'%20d='M7.875%209.625h12.25v1.75H7.875z'/%3e%3cpath%20d='M17.5%2013.125h-7M14%2015.75h-3.5'%20stroke='%23BEBEBE'%20stroke-width='1.75'%20stroke-linecap='round'/%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20d='M27.222%2011.043c1.558%205.326%204.44%208.207%209.765%209.766a1.717%201.717%200%200%200%201.69-.45l1.87-1.869a.892.892%200%200%200-.173-1.395l-1.958-1.175a.892.892%200%200%200-.977.04l-1.526%201.089a.88.88%200%200%201-.866.091c-2.37-1.047-3.11-1.787-4.156-4.157a.88.88%200%200%201%20.091-.866l1.09-1.525a.892.892%200%200%200%20.039-.977l-1.175-1.958a.892.892%200%200%200-1.396-.172l-1.868%201.868a1.716%201.716%200%200%200-.45%201.69Z'%20fill='%23BEBEBE'/%3e%3c/g%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.033%2027.149a1.784%201.784%200%200%200-2.051.021L7.3%2031.253a.723.723%200%200%200%20.422%201.31H8.75v4.813a.875.875%200%200%200%200%201.75h10.5a.875.875%200%201%200%200-1.75v-4.813h.89a.86.86%200%200%200%20.487-1.568l-5.594-3.846ZM11.156%2033a.656.656%200%200%200-.656.656v3.063a.656.656%200%200%200%201.313%200v-3.063a.656.656%200%200%200-.657-.656Zm2.188.656a.656.656%200%200%201%201.312%200v3.063a.656.656%200%200%201-1.312%200v-3.063Zm3.5-.656a.656.656%200%200%200-.656.656v3.063a.656.656%200%200%200%201.312%200v-3.063a.656.656%200%200%200-.656-.656ZM27.875%2028.23a2.23%202.23%200%200%201%202.23-2.23h4.29a2.23%202.23%200%200%201%202.23%202.23V40H34v-1.733c0-.493-.4-.892-.892-.892h-1.716c-.493%200-.892.4-.892.892V40h-2.625V28.23Zm1.75%203.895a.875.875%200%201%201%201.75%200%20.875.875%200%200%201-1.75%200Zm.875-3.5a.875.875%200%201%200%200%201.75.875.875%200%200%200%200-1.75Zm-.875%206.125a.875.875%200%201%201%201.75%200%20.875.875%200%200%201-1.75%200ZM34%2031.25A.875.875%200%201%200%2034%2033a.875.875%200%200%200%200-1.75Zm-.875-1.75a.875.875%200%201%201%201.75%200%20.875.875%200%200%201-1.75%200ZM34%2033.875a.875.875%200%201%200%200%201.75.875.875%200%200%200%200-1.75ZM36.843%2040h.656v-9.625h.396a2.23%202.23%200%200%201%202.23%202.23V40h-3.282Z'%20fill='%23BEBEBE'/%3e%3cdefs%3e%3cclipPath%20id='b'%3e%3cpath%20fill='%23fff'%20transform='rotate(-90%2024%20-3)'%20d='M0%200h14v14H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {
              "styleVariant": "transparent",
              "icon": "bold/shopping-gift",
              "horizontalAlign": "center"
            },
            "idPrefix": "icon",
            "type": "IconWidget"
          },
          {
            "name": "Icon Text",
            "description": "Display an icon aligned closely with text",
            "defaultHeight": 3,
            "defaultWidth": 2,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Basic"
            },
            "tags": [
              "icon",
              "text",
              "v2"
            ],
            "icon": "https://retool-edge.com/assets_vjs/iconTextComponent-CA51ed-T.svg",
            "template": {
              "icon": "bold/shopping-business-startup",
              "iconPosition": "left",
              "text": "Hello {{ current_user.firstName || 'friend' }}!",
              "horizontalAlign": "left"
            },
            "idPrefix": "iconText",
            "type": "IconTextWidget"
          },
          {
            "name": "Image",
            "description": "Upload image or add URL",
            "defaultWidth": 3,
            "defaultHeight": 25,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Images & Video",
              "subsection": "Image"
            },
            "tags": [
              "v2",
              "presentation",
              "photo",
              "picture"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.8'%20y='10.8'%20width='36.4'%20height='26.4'%20rx='3.2'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3ccircle%20cx='13.5'%20cy='18.5'%20r='3.5'%20fill='%23EECA86'/%3e%3cpath%20d='M27.923%2018.366a1%201%200%200%201%201.696-.018l8.395%2013.113A1%201%200%200%201%2037.172%2033H20.781a1%201%200%200%201-.854-1.52l7.996-13.114Z'%20fill='%2382BF99'/%3e%3cpath%20d='M16.676%2026.199a1%201%200%200%201%201.648%200l3.599%205.234A1%201%200%200%201%2021.099%2033H13.9a1%201%200%200%201-.824-1.567l3.599-5.234Z'%20fill='%2382BF99'/%3e%3c/svg%3e",
            "idPrefix": "image",
            "type": "ImageWidget2"
          },
          {
            "name": "Image Grid",
            "description": "Display a collection of images",
            "defaultWidth": 5,
            "defaultHeight": 16,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Images & Video",
              "subsection": "Image"
            },
            "tags": [
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.8'%20y='6.8'%20width='20.4'%20height='14.4'%20rx='3.2'%20fill='white'%20stroke='%23787878'%20stroke-width='1.6'/%3e%3ccircle%20cx='4.92106'%20cy='10.921'%20r='2.02632'%20fill='%23EECA86'/%3e%3cpath%20d='M12.9203%2011.4189C13.3051%2010.7879%2014.2178%2010.7779%2014.6163%2011.4003L18.6987%2017.7766C19.1249%2018.4422%2018.6469%2019.3158%2017.8565%2019.3158H9.88623C9.10575%2019.3158%208.62611%2018.4615%209.03243%2017.7952L12.9203%2011.4189Z'%20fill='%2382BF99'/%3e%3cpath%20d='M6.4127%2015.8828C6.81004%2015.3049%207.66343%2015.3048%208.06079%2015.8828L9.34402%2017.7492C9.8002%2018.4127%209.32518%2019.3158%208.51999%2019.3158H5.95363C5.14846%2019.3158%204.67344%2018.4128%205.12958%2017.7493L6.4127%2015.8828Z'%20fill='%2382BF99'/%3e%3crect%20x='8'%20y='18.32'%20width='3'%20height='1'%20fill='%2382BF99'/%3e%3crect%20x='0.8'%20y='26.8'%20width='20.4'%20height='14.4'%20rx='3.2'%20fill='white'%20stroke='%23787878'%20stroke-width='1.6'/%3e%3ccircle%20cx='4.92106'%20cy='30.921'%20r='2.02632'%20fill='%23EECA86'/%3e%3cpath%20d='M12.9203%2031.4189C13.3051%2030.7879%2014.2178%2030.7779%2014.6163%2031.4003L18.6987%2037.7766C19.1249%2038.4422%2018.6469%2039.3158%2017.8565%2039.3158H9.88623C9.10575%2039.3158%208.62611%2038.4615%209.03243%2037.7952L12.9203%2031.4189Z'%20fill='%2382BF99'/%3e%3cpath%20d='M6.4127%2035.8828C6.81004%2035.3049%207.66343%2035.3048%208.06079%2035.8828L9.34402%2037.7492C9.8002%2038.4127%209.32518%2039.3158%208.51999%2039.3158H5.95363C5.14846%2039.3158%204.67344%2038.4128%205.12958%2037.7493L6.4127%2035.8828Z'%20fill='%2382BF99'/%3e%3crect%20x='8'%20y='38.32'%20width='3'%20height='1'%20fill='%2382BF99'/%3e%3crect%20x='26.8'%20y='6.8'%20width='20.4'%20height='14.4'%20rx='3.2'%20fill='white'%20stroke='%23787878'%20stroke-width='1.6'/%3e%3ccircle%20cx='30.9211'%20cy='10.921'%20r='2.02632'%20fill='%23EECA86'/%3e%3cpath%20d='M38.9203%2011.4189C39.3051%2010.7879%2040.2178%2010.7779%2040.6163%2011.4003L44.6987%2017.7766C45.1249%2018.4422%2044.6469%2019.3158%2043.8565%2019.3158H35.8862C35.1057%2019.3158%2034.6261%2018.4615%2035.0324%2017.7952L38.9203%2011.4189Z'%20fill='%2382BF99'/%3e%3cpath%20d='M32.4127%2015.8828C32.81%2015.3049%2033.6634%2015.3048%2034.0608%2015.8828L35.344%2017.7492C35.8002%2018.4127%2035.3252%2019.3158%2034.52%2019.3158H31.9536C31.1485%2019.3158%2030.6734%2018.4128%2031.1296%2017.7493L32.4127%2015.8828Z'%20fill='%2382BF99'/%3e%3crect%20x='34'%20y='18.32'%20width='3'%20height='1'%20fill='%2382BF99'/%3e%3crect%20x='26.8'%20y='26.8'%20width='20.4'%20height='14.4'%20rx='3.2'%20fill='white'%20stroke='%23787878'%20stroke-width='1.6'/%3e%3ccircle%20cx='30.9211'%20cy='30.921'%20r='2.02632'%20fill='%23EECA86'/%3e%3cpath%20d='M38.9203%2031.4189C39.3051%2030.7879%2040.2178%2030.7779%2040.6163%2031.4003L44.6987%2037.7766C45.1249%2038.4422%2044.6469%2039.3158%2043.8565%2039.3158H35.8862C35.1057%2039.3158%2034.6261%2038.4615%2035.0324%2037.7952L38.9203%2031.4189Z'%20fill='%2382BF99'/%3e%3cpath%20d='M32.4127%2035.8828C32.81%2035.3049%2033.6634%2035.3048%2034.0608%2035.8828L35.344%2037.7492C35.8002%2038.4127%2035.3252%2039.3158%2034.52%2039.3158H31.9536C31.1485%2039.3158%2030.6734%2038.4128%2031.1296%2037.7493L32.4127%2035.8828Z'%20fill='%2382BF99'/%3e%3crect%20x='34'%20y='38.32'%20width='3'%20height='1'%20fill='%2382BF99'/%3e%3c/svg%3e",
            "template": {
              "columnType": "fixed",
              "columnCount": 3,
              "columnMinWidth": 100,
              "aspectRatio": 1,
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_srcByIndex": [
                "https://picsum.photos/id/1062/800/600",
                "https://picsum.photos/id/1025/800/600",
                "https://picsum.photos/id/837/400/300"
              ],
              "_captionByIndex": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "idPrefix": "imageGrid",
            "type": "ImageGridWidget"
          },
          {
            "name": "PDF",
            "description": "Embed a PDF",
            "defaultWidth": 6,
            "defaultHeight": 45,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Container"
            },
            "tags": [
              "document",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5.2'%20y='7.2'%20width='37.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3cpath%20d='M6%2027h36v9a4%204%200%200%201-4%204H10a4%204%200%200%201-4-4v-9Z'%20fill='%23D3675F'/%3e%3cpath%20d='M17.666%2037h1.23v-1.886h1.034c1.338%200%202.117-.799%202.117-1.96%200-1.157-.765-1.972-2.086-1.972h-2.295V37Zm1.23-2.872v-1.94h.83c.71%200%201.053.386%201.053.965%200%20.577-.343.975-1.048.975h-.835ZM24.908%2037c1.773%200%202.847-1.097%202.847-2.915%200-1.812-1.074-2.903-2.83-2.903h-2.08V37h2.063Zm-.832-1.054v-3.71h.784c1.09%200%201.667.557%201.667%201.85%200%201.297-.576%201.86-1.67%201.86h-.781ZM28.666%2037h1.23v-2.403h2.366v-1.015h-2.366v-1.386h2.622v-1.014h-3.852V37Z'%20fill='%23fff'/%3e%3cpath%20d='M23.756%2014.845c-1.034%203.423-3.517%2010.026-5.173%209.06-1.655-.967.604-2.497%201.94-3.141%201.552-.604%205.044-1.836%206.596-1.933%201.94-.12%203.104-.12%202.845.725-.258.846-.776%201.208-1.422.846-.647-.363-4.139-3.503-4.786-5.557Zm0%200c-.776-.966-1.991-3.068-.646-3.744%201.345-.677.991%202.214.646%203.744Z'%20stroke='%23D3675F'%20stroke-width='1.4'/%3e%3c/svg%3e",
            "template": {
              "showTopBar": true,
              "src": "https://upload.wikimedia.org/wikipedia/commons/1/14/Marspathfinder.pdf"
            },
            "idPrefix": "pdf",
            "type": "PDFViewerWidget2"
          },
          {
            "name": "Progress Bar",
            "description": "Display a percentage visually",
            "defaultWidth": 4,
            "defaultHeight": 5,
            "section": "Presentation",
            "themeEditorSection": "Progress",
            "tags": [
              "progress",
              "bar",
              "loading",
              "v2",
              "indicator",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='18'%20width='40'%20height='5'%20rx='2.5'%20fill='%23DEDEDE'/%3e%3cpath%20d='M4%2020.5A2.5%202.5%200%200%201%206.5%2018h10a2.5%202.5%200%200%201%200%205h-10A2.5%202.5%200%200%201%204%2020.5Z'%20fill='%233170F9'/%3e%3cpath%20d='M29.605%2034.08c1.244%200%202.15-.713%202.148-1.697.003-.727-.452-1.25-1.267-1.366v-.045c.63-.137%201.054-.606%201.05-1.259.004-.886-.752-1.61-1.914-1.61-1.13%200-2.006.673-2.028%201.647h1.014c.017-.489.471-.793%201.008-.793.543%200%20.904.33.901.819.003.508-.418.846-1.02.846h-.514v.813h.514c.736%200%201.174.369%201.17.895.003.514-.443.866-1.065.866-.585%200-1.037-.304-1.062-.778h-1.068c.028.983.906%201.662%202.133%201.662Zm5.274.03c1.403.004%202.241-1.104%202.241-3.013%200-1.898-.844-2.995-2.241-2.995-1.398%200-2.24%201.094-2.242%202.995%200%201.906.838%203.014%202.242%203.014Zm0-.888c-.725%200-1.18-.728-1.177-2.125.003-1.387.455-2.117%201.177-2.117.724%200%201.176.73%201.178%202.117%200%201.397-.451%202.125-1.178%202.125Zm6.296-.313c.003.676.431%201.253%201.23%201.253.795%200%201.233-.577%201.23-1.253v-.307c.003-.681-.423-1.253-1.23-1.253-.787%200-1.227.577-1.23%201.253v.307Zm-2.958-3.33c.003.677.432%201.248%201.233%201.248.793%200%201.23-.566%201.228-1.248v-.306c.002-.682-.424-1.253-1.228-1.253-.784%200-1.23.57-1.233%201.253v.306ZM38.473%2034h.713l4-5.818h-.713l-4%205.818Zm3.443-1.398c.003-.3.13-.605.489-.605.375%200%20.486.304.483.605v.307c.003.301-.12.6-.483.6-.364%200-.486-.302-.489-.6v-.307Zm-2.951-3.33c.002-.298.124-.604.485-.604.375%200%20.483.304.48.605v.306c.003.302-.116.6-.48.6-.363%200-.483-.298-.486-.6v-.306Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "visualType": "progress",
            "template": {
              "label": "",
              "value": 60
            },
            "idPrefix": "progressBar",
            "type": "ProgressBarWidget"
          },
          {
            "name": "Progress Circle",
            "description": "Display a percentage visually",
            "defaultWidth": 2,
            "defaultHeight": 10,
            "section": "Presentation",
            "themeEditorSection": "Progress",
            "tags": [
              "progress",
              "circle",
              "loading",
              "v2",
              "indicator",
              "percentage",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='24'%20cy='24'%20r='16'%20stroke='%23D8D8D8'%20stroke-width='4'/%3e%3cpath%20d='M40%2024c0%202.454-.533%204.875-1.557%207.077a15.84%2015.84%200%200%201-4.348%205.617%2014.705%2014.705%200%200%201-6.244%202.999c-2.27.478-4.615.397-6.851-.238'%20stroke='%233170F9'%20stroke-width='4'%20stroke-linecap='round'/%3e%3cpath%20d='M18.605%2027.08c1.244%200%202.15-.713%202.148-1.696.003-.728-.452-1.25-1.267-1.367v-.045c.63-.137%201.054-.606%201.05-1.259.004-.886-.752-1.61-1.914-1.61-1.13%200-2.006.673-2.028%201.647h1.014c.017-.489.471-.793%201.008-.793.543%200%20.904.33.901.819.003.508-.418.846-1.02.846h-.514v.813h.514c.736%200%201.174.369%201.17.895.003.514-.443.866-1.065.866-.585%200-1.037-.304-1.062-.778h-1.068c.028.983.906%201.662%202.133%201.662Zm5.274.03c1.403.004%202.241-1.104%202.241-3.013%200-1.898-.844-2.995-2.241-2.995-1.398%200-2.24%201.094-2.242%202.995%200%201.906.838%203.014%202.242%203.014Zm0-.888c-.725%200-1.18-.728-1.177-2.125.003-1.387.455-2.117%201.177-2.117.724%200%201.176.73%201.178%202.117%200%201.397-.451%202.125-1.178%202.125Zm6.296-.313c.003.676.431%201.253%201.23%201.253.795%200%201.233-.577%201.23-1.253v-.307c.003-.681-.423-1.253-1.23-1.253-.787%200-1.227.577-1.23%201.253v.307Zm-2.958-3.33c.003.677.432%201.248%201.233%201.248.793%200%201.23-.566%201.228-1.248v-.306c.002-.682-.424-1.253-1.228-1.253-.784%200-1.23.57-1.233%201.253v.306ZM27.473%2027h.713l4-5.818h-.713l-4%205.818Zm3.443-1.398c.003-.3.13-.605.489-.605.375%200%20.486.304.483.605v.307c.003.301-.12.6-.483.6-.364%200-.486-.302-.489-.6v-.307Zm-2.951-3.33c.002-.298.125-.604.485-.604.375%200%20.483.304.48.605v.306c.003.302-.116.6-.48.6-.363%200-.483-.298-.485-.6v-.306Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "visualType": "progress",
            "template": {
              "value": 60,
              "horizontalAlign": "center"
            },
            "idPrefix": "progressCircle",
            "type": "ProgressCircleWidget"
          },
          {
            "name": "QR Code",
            "description": "Display data in a QR code",
            "defaultWidth": 3,
            "defaultHeight": 30,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Misc"
            },
            "tags": [
              "v2",
              "presentation"
            ],
            "icon": "https://retool-edge.com/assets_vjs/qrcode-DPXj_XZw.svg",
            "template": {
              "value": "https://retool.com",
              "heightType": "auto"
            },
            "idPrefix": "qrCode",
            "type": "QRCodeWidget"
          },
          {
            "name": "Spacer",
            "description": "Add blank space",
            "defaultWidth": 2,
            "defaultHeight": 1,
            "section": "Presentation",
            "themeEditorSection": null,
            "tags": [
              "margin",
              "padding",
              "layout",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2019v10a4%204%200%200%200%204%204h26a4%204%200%200%200%204-4V19a4%204%200%200%200-4-4H11a4%204%200%200%200-4%204Z'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-dasharray='1%204'/%3e%3cpath%20d='M7%206v1a3%203%200%200%200%203%203h28a3%203%200%200%200%203-3V6M41%2042v-1a3%203%200%200%200-3-3H10a3%203%200%200%200-3%203v1M22%2019h2m2%200h-2m0%200v10m0%200h2m-2%200h-2M37%2022v2m0%202v-2m0%200H11m0%200v2m0-2v-2'%20stroke='%23BEBEBE'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "idPrefix": "spacer",
            "type": "SpacerWidget"
          },
          {
            "name": "Statistic",
            "description": "Display numeric stats and trends",
            "defaultWidth": 3,
            "defaultHeight": 10,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Other"
            },
            "tags": [
              "number",
              "formatting",
              "presentation",
              "v2"
            ],
            "icon": "https://retool-edge.com/assets_vjs/statistic-BuwdBpDV.svg",
            "template": {
              "label": "Gross volume",
              "labelCaption": "Since last month",
              "value": 7552.8,
              "formattingStyle": "currency",
              "currency": "USD",
              "padDecimal": false,
              "enableTrend": false,
              "positiveTrend": "{{ self.value >= 0 }}",
              "showSeparators": true,
              "secondaryValue": 0.08,
              "secondaryFormattingStyle": "percent",
              "secondaryCurrency": "USD",
              "secondaryPadDecimal": false,
              "secondarySignDisplay": "trendArrows",
              "secondaryEnableTrend": true,
              "secondaryPositiveTrend": "{{ self.secondaryValue >= 0 }}",
              "secondaryShowSeparators": true
            },
            "idPrefix": "statistic",
            "type": "StatisticWidget2"
          },
          {
            "name": "Status",
            "description": "Display a status",
            "defaultWidth": 2,
            "defaultHeight": 3,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Other"
            },
            "tags": [
              "status",
              "badge",
              "information",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='19'%20y1='9'%20x2='29'%20y2='9'%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='19'%20y1='24'%20x2='43'%20y2='24'%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='19'%20y1='38'%20x2='29'%20y2='38'%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3crect%20x='5'%20y='5'%20width='9.17241'%20height='9.17241'%20rx='4.58621'%20fill='%23D54D2F'/%3e%3cpath%20d='M7.78039%207.67015L11.5516%2011.5516M7.62061%2011.5021L11.3919%207.62061'%20stroke='white'%20stroke-width='1.31034'%20stroke-linecap='round'/%3e%3cg%20clip-path='url(%23clip0_1785_13831)'%3e%3crect%20x='5'%20y='19.1377'%20width='9.17241'%20height='9.17241'%20rx='4.58621'%20fill='%23149F54'/%3e%3cpath%20d='M8.89534%2026.3445L6.96582%2024.0514L8.89534%2025.198L9.9141%2024.0514L12.2072%2021.7583L8.89534%2026.3445Z'%20stroke='white'%20stroke-width='0.905596'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3crect%20x='5'%20y='32.9312'%20width='9.17241'%20height='9.17241'%20rx='4.58621'%20fill='%23EECA85'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.63159%2034.5952L8.90714%2038.0648C8.92067%2038.2351%209.06284%2038.3665%209.2337%2038.3665H9.93885C10.1097%2038.3665%2010.2519%2038.2351%2010.2654%2038.0648L10.541%2034.5952C10.5561%2034.4047%2010.4055%2034.2417%2010.2144%2034.2417L8.95814%2034.2417C8.767%2034.2417%208.61645%2034.4047%208.63159%2034.5952ZM10.5231%2039.8054C10.5231%2040.3453%2010.0934%2040.783%209.56329%2040.783C9.03322%2040.783%208.60352%2040.3453%208.60352%2039.8054C8.60352%2039.2656%209.03322%2038.8279%209.56329%2038.8279C10.0934%2038.8279%2010.5231%2039.2656%2010.5231%2039.8054Z'%20fill='white'/%3e%3cdefs%3e%3cclipPath%20id='clip0_1785_13831'%3e%3crect%20x='5'%20y='19.1377'%20width='9.17241'%20height='9.17241'%20rx='4.58621'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "idPrefix": "status",
            "type": "StatusWidget"
          },
          {
            "name": "Tags",
            "description": "Display a collection of tags",
            "defaultWidth": 3,
            "defaultHeight": 4,
            "section": "Presentation",
            "themeEditorSection": "Avatars & Tags",
            "tags": [
              "tag",
              "badge",
              "chip",
              "pill",
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='11'%20width='21'%20height='11'%20rx='5.5'%20fill='%23F8DBD8'/%3e%3cpath%20d='M6.219%2014.908h1.546V19h1.213v-4.092h1.544v-.999H6.219v1Zm5.46%204.157c.532%200%20.9-.207%201.11-.597h.029V19h1.143v-2.595c0-.808-.718-1.273-1.69-1.273-1.027%200-1.608.517-1.705%201.213l1.12.04c.053-.244.254-.393.575-.393.298%200%20.487.144.487.4v.013c0%20.233-.253.283-.904.34-.774.065-1.42.35-1.42%201.196%200%20.756.525%201.124%201.255%201.124Zm.376-.796c-.281%200-.48-.134-.48-.388%200-.246.194-.395.54-.447.226-.032.504-.082.64-.154v.363c0%20.373-.312.626-.7.626Zm4.43%202.242c1.15%200%201.936-.524%201.936-1.496v-3.833h-1.21v.654h-.035c-.147-.35-.48-.704-1.082-.704-.798%200-1.521.614-1.521%201.954%200%201.298.688%201.862%201.526%201.862.562%200%20.937-.261%201.081-.614h.043v.671c0%20.487-.299.664-.706.664-.39%200-.624-.15-.689-.386l-1.15.065c.089.669.718%201.163%201.806%201.163Zm.037-2.448c-.45%200-.701-.366-.701-.977%200-.61.248-1.004.7-1.004.446%200%20.704.385.704%201.004%200%20.614-.26.977-.703.977Z'%20fill='%23AC3930'/%3e%3crect%20x='25'%20y='11'%20width='21'%20height='11'%20rx='5.5'%20fill='%23FBEDC8'/%3e%3cpath%20d='M29.219%2014.908h1.546V19h1.213v-4.092h1.544v-.999h-4.303v1Zm5.46%204.157c.532%200%20.9-.207%201.11-.597h.029V19h1.143v-2.595c0-.808-.718-1.273-1.69-1.273-1.027%200-1.608.517-1.705%201.213l1.12.04c.053-.244.254-.393.575-.393.298%200%20.487.144.487.4v.013c0%20.233-.253.283-.904.34-.774.065-1.42.35-1.42%201.196%200%20.756.525%201.124%201.255%201.124Zm.376-.796c-.281%200-.48-.134-.48-.388%200-.246.194-.395.54-.447.226-.032.504-.082.64-.154v.363c0%20.373-.312.626-.7.626Zm4.43%202.242c1.15%200%201.936-.524%201.936-1.496v-3.833h-1.21v.654h-.035c-.147-.35-.48-.704-1.082-.704-.798%200-1.521.614-1.521%201.954%200%201.298.688%201.862%201.526%201.862.562%200%20.937-.261%201.082-.614h.042v.671c0%20.487-.299.664-.706.664-.39%200-.624-.15-.689-.386l-1.15.065c.089.669.718%201.163%201.806%201.163Zm.037-2.448c-.45%200-.701-.366-.701-.977%200-.61.248-1.004.7-1.004.446%200%20.704.385.704%201.004%200%20.614-.26.977-.703.977Z'%20fill='%23885C09'/%3e%3crect%20x='2'%20y='25'%20width='21'%20height='11'%20rx='5.5'%20fill='%23E4DCF5'/%3e%3cpath%20d='M6.219%2028.908h1.546V33h1.213v-4.092h1.544v-.999H6.219v1Zm5.46%204.157c.532%200%20.9-.207%201.11-.597h.029V33h1.143v-2.595c0-.808-.718-1.273-1.69-1.273-1.027%200-1.608.517-1.705%201.213l1.12.04c.053-.244.254-.393.575-.393.298%200%20.487.144.487.4v.013c0%20.233-.253.283-.904.34-.774.065-1.42.35-1.42%201.196%200%20.756.525%201.124%201.255%201.124Zm.376-.796c-.281%200-.48-.134-.48-.388%200-.246.194-.395.54-.447.226-.032.504-.082.64-.154v.363c0%20.373-.312.626-.7.626Zm4.43%202.242c1.15%200%201.936-.524%201.936-1.496v-3.833h-1.21v.654h-.035c-.147-.35-.48-.704-1.082-.704-.798%200-1.521.614-1.521%201.954%200%201.297.688%201.862%201.526%201.862.562%200%20.937-.261%201.081-.614h.043v.671c0%20.487-.299.664-.706.664-.39%200-.624-.15-.689-.386l-1.15.065c.089.669.718%201.163%201.806%201.163Zm.037-2.448c-.45%200-.701-.366-.701-.977%200-.61.248-1.004.7-1.004.446%200%20.704.385.704%201.004%200%20.614-.26.977-.703.977Z'%20fill='%237553B3'/%3e%3crect%20x='25'%20y='25'%20width='21'%20height='11'%20rx='5.5'%20fill='%23FADBEC'/%3e%3cpath%20d='M29.219%2028.908h1.546V33h1.213v-4.092h1.544v-.999h-4.303v1Zm5.46%204.157c.532%200%20.9-.207%201.11-.597h.029V33h1.143v-2.595c0-.808-.718-1.273-1.69-1.273-1.027%200-1.608.517-1.705%201.213l1.12.04c.053-.244.254-.393.575-.393.298%200%20.487.144.487.4v.013c0%20.233-.253.283-.904.34-.774.065-1.42.35-1.42%201.196%200%20.756.525%201.124%201.255%201.124Zm.376-.796c-.281%200-.48-.134-.48-.388%200-.246.194-.395.54-.447.226-.032.504-.082.64-.154v.363c0%20.373-.312.626-.7.626Zm4.43%202.242c1.15%200%201.936-.524%201.936-1.496v-3.833h-1.21v.654h-.035c-.147-.35-.48-.704-1.082-.704-.798%200-1.521.614-1.521%201.954%200%201.297.688%201.862%201.526%201.862.562%200%20.937-.261%201.082-.614h.042v.671c0%20.487-.299.664-.706.664-.39%200-.624-.15-.689-.386l-1.15.065c.089.669.718%201.163%201.806%201.163Zm.037-2.448c-.45%200-.701-.366-.701-.977%200-.61.248-1.004.7-1.004.446%200%20.704.385.704%201.004%200%20.614-.26.977-.703.977Z'%20fill='%239E4878'/%3e%3c/svg%3e",
            "template": {
              "allowWrap": true,
              "data": "[\"Foo\", \"Bar\", \"Baz\"]",
              "itemMode": "dynamic"
            },
            "idPrefix": "tags",
            "type": "TagsWidget2"
          },
          {
            "name": "Text",
            "description": "Plain text, HTML, or Markdown",
            "defaultWidth": 3,
            "defaultHeight": 3,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Text",
              "subsection": "Basic"
            },
            "tags": [
              "text",
              "header",
              "title",
              "subtitle",
              "markdown",
              "html",
              "label",
              "v2",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2011H6a2%202%200%200%200-2%202v4M38%2038h4a2%202%200%200%200%202-2v-4M44%2017v-4a2%202%200%200%200-2-2h-4M4%2032v4a2%202%200%200%200%202%202h4'%20stroke='%23D8D8D8'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='2'%20stroke-linecap='round'%20d='M28%2017h11M28%2022h11M9%2028h30M9%2033h24'/%3e%3cpath%20d='M8.622%2015.844V23h1.468v-4.675h.059l1.852%204.64h1l1.851-4.623h.06V23h1.467v-7.156h-1.866l-1.97%204.808h-.084l-1.971-4.808H8.622Z'%20fill='%238E8E8E'/%3e%3cpath%20d='M21.006%2016v7m0%200L24%2020m-2.994%203L18%2020'%20stroke='%238E8E8E'%20stroke-width='1.4'/%3e%3c/svg%3e",
            "template": {
              "value": "👋 **Hello {{ current_user.firstName || 'friend' }}!**",
              "verticalAlign": "center"
            },
            "idPrefix": "text",
            "type": "TextWidget2"
          },
          {
            "name": "Timeline",
            "idPrefix": "timeline",
            "description": "Display events in a timeline",
            "defaultHeight": 60,
            "defaultWidth": 8,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Container"
            },
            "tags": [
              "v2",
              "gantt"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3crect%20x='6'%20y='10'%20width='33'%20height='4'%20rx='2'%20fill='%23E5E5E5'/%3e%3crect%20x='14'%20y='16'%20width='15'%20height='4'%20rx='2'%20fill='%23E5E5E5'/%3e%3crect%20x='10'%20y='22'%20width='32'%20height='4'%20rx='2'%20fill='%23E5E5E5'/%3e%3crect%20x='18'%20y='28'%20width='19'%20height='4'%20rx='2'%20fill='%23E5E5E5'/%3e%3crect%20x='29'%20y='34'%20width='13'%20height='4'%20rx='2'%20fill='%23E5E5E5'/%3e%3c/svg%3e",
            "template": {
              "data": "[{\"id\":1,\"title\":\"Website Redesign\",\"startDate\":\"2019-12-26\",\"endDate\":\"2020-01-10\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Design\",\"status\":\"In Progress\"}},{\"id\":2,\"title\":\"New Feature Launch\",\"startDate\":null,\"endDate\":\"2019-12-31\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Product\",\"status\":\"In Progress\"}},{\"id\":3,\"title\":\"API Development\",\"startDate\":\"2019-12-16\",\"endDate\":\"2020-01-15\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"Completed\"}},{\"id\":4,\"title\":\"Marketing Campaign\",\"startDate\":\"2020-01-05\",\"endDate\":\"2020-01-25\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Brand\",\"status\":\"Planning\"}},{\"id\":5,\"title\":\"User Research\",\"startDate\":\"2019-12-31\",\"endDate\":\"2020-01-10\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Design\",\"status\":\"In Progress\"}},{\"id\":6,\"title\":\"Backend Optimization\",\"startDate\":\"2020-01-10\",\"endDate\":\"2020-01-30\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"In Progress\"}},{\"id\":7,\"title\":\"Customer Feedback Analysis\",\"startDate\":\"2019-12-29\",\"endDate\":\"2020-01-12\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Product\",\"status\":\"Completed\"}},{\"id\":8,\"title\":\"Content Strategy\",\"startDate\":\"2019-12-18\",\"endDate\":\"2020-01-07\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Brand\",\"status\":\"Planning\"}},{\"id\":9,\"title\":\"Mobile App Update\",\"startDate\":\"2020-01-02\",\"endDate\":\"2020-01-08\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Product\",\"status\":\"In Progress\"}},{\"id\":10,\"title\":\"SEO Optimization\",\"startDate\":\"2020-01-15\",\"endDate\":\"2020-02-04\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"Completed\"}},{\"id\":11,\"title\":\"Branding Refresh\",\"startDate\":\"2019-12-28\",\"endDate\":\"2020-01-15\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Brand\",\"status\":\"In Progress\"}},{\"id\":12,\"title\":\"A/B Testing\",\"startDate\":\"2019-12-31\",\"endDate\":\"2020-01-10\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Product\",\"status\":\"Planning\"}},{\"id\":13,\"title\":\"Security Audit\",\"startDate\":\"2019-12-26\",\"endDate\":\"2020-01-10\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"In Progress\"}},{\"id\":14,\"title\":\"UI/UX Improvements\",\"startDate\":\"2019-12-31\",\"endDate\":\"2020-01-20\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Design\",\"status\":\"Planning\"}},{\"id\":15,\"title\":\"Data Migration\",\"startDate\":\"2020-01-08\",\"endDate\":\"2020-01-17\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"Completed\"}},{\"id\":16,\"title\":\"Competitive Analysis\",\"startDate\":\"2019-12-24\",\"endDate\":\"2020-01-13\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Brand\",\"status\":\"In Progress\"}},{\"id\":17,\"title\":\"User Onboarding Flow\",\"startDate\":\"2019-12-29\",\"endDate\":\"2020-01-05\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Product\",\"status\":\"Planning\"}},{\"id\":18,\"title\":\"Bug Fixes Sprint\",\"startDate\":\"2020-01-06\",\"endDate\":\"2020-01-25\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"In Progress\"}},{\"id\":19,\"title\":\"Social Media Strategy\",\"startDate\":\"2019-12-30\",\"endDate\":\"2020-01-09\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Brand\",\"status\":\"Planning\"}},{\"id\":20,\"title\":\"Cloud Infrastructure Update\",\"startDate\":\"2020-01-20\",\"endDate\":\"2020-02-09\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"Completed\"}},{\"id\":21,\"title\":\"Customer Demo\",\"startDate\":\"2019-12-21T00:00:00.000Z\",\"endDate\":\"2020-01-20T00:00:00.000Z\",\"color\":\"{{ theme.automatic?.[Math.floor(Math.random() * theme.automatic?.length)] || '#E2E2E2' }}\",\"properties\":{\"team\":\"Eng\",\"status\":\"Planning\"}}]",
              "eventIdByIndex": "{{ item.id }}",
              "eventTitleByIndex": "{{ item.title }}",
              "eventStartDateByIndex": "{{ item.startDate }}",
              "eventEndDateByIndex": "{{ item.endDate }}",
              "eventColorByIndex": "{{ item.color }}",
              "eventPropertiesByIndex": "{{ item.properties }}",
              "eventTooltipLabelByIndex": "",
              "renderOneEventPerRow": true,
              "showTodayIndicator": true,
              "timescale": {
                "unit": "month",
                "split": "date"
              },
              "milestoneData": "",
              "metaEventData": "",
              "milestoneColorByIndex": "{{ theme.primary }}",
              "quarterStartMonth": 1,
              "quarterStartDay": 1,
              "_eventGroupingEnabled": false,
              "_groupingConfig": {
                "expandByDefault": true
              }
            },
            "type": "TimelineWidget2"
          },
          {
            "name": "Video",
            "description": "Embed a video",
            "defaultWidth": 6,
            "defaultHeight": 35,
            "section": "Presentation",
            "themeEditorSection": {
              "section": "Images & Video",
              "subsection": "Video"
            },
            "tags": [
              "youtube",
              "vimeo",
              "presentation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4.2'%20y='7.2'%20width='39.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3ccircle%20cx='23.5'%20cy='19.5'%20r='6.5'%20fill='%233170F9'/%3e%3cpath%20d='M25.993%2019.105a.5.5%200%200%201%200%20.79l-3.186%202.477a.5.5%200%200%201-.807-.394v-4.956a.5.5%200%200%201%20.807-.394l3.186%202.477Z'%20fill='%23fff'/%3e%3cpath%20d='M10%2034h28'%20stroke='%23BEBEBE'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3ccircle%20cx='32'%20cy='34'%20r='2.2'%20transform='rotate(90%2032%2034)'%20fill='%23fff'%20stroke='%23BEBEBE'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "playbackRate": 1,
              "src": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              "volume": 1
            },
            "idPrefix": "video",
            "type": "VideoWidget"
          }
        ]
      },

      {
        key: "Frames",
        title: "Frames",
        items: [
          {
            "name": "Drawer Frame",
            "description": "Drawer Frame",
            "defaultWidth": 1,
            "defaultHeight": 6,
            "section": "Frames",
            "themeEditorSection": null,
            "tags": [
              "new",
              "frame",
              "drawer",
              "sidebar",
              "sidepane",
              "pane",
              "popover",
              "slideout",
              "screen",
              "panel"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5'%20y='6.5'%20width='21'%20height='34'%20rx='1'%20fill='%23EBEBEB'/%3e%3cpath%20d='M21%207.25H20.25V8V39V39.75H21H42C42.9665%2039.75%2043.75%2038.9665%2043.75%2038V9C43.75%208.0335%2042.9665%207.25%2042%207.25H21Z'%20fill='white'%20stroke='%23C7C7C7'%20stroke-width='1.5'/%3e%3crect%20x='23'%20y='19'%20width='18'%20height='11'%20rx='1'%20fill='%23C7C7C7'/%3e%3cline%20x1='21'%20y1='16.25'%20x2='43'%20y2='16.25'%20stroke='%23C7C7C7'%20stroke-width='1.5'/%3e%3cpath%20d='M37.1626%2010.0504L41%2014M37%2013.9496L40.8374%2010'%20stroke='%23C7C7C7'%20stroke-width='1.4'/%3e%3c/svg%3e",
            "template": {
              "isHiddenOnDesktop": false,
              "isHiddenOnMobile": true,
              "width": "medium",
              "hidden": true,
              "showHeader": true,
              "showFooter": true,
              "padding": "8px 12px",
              "headerPadding": "8px 12px",
              "footerPadding": "8px 12px",
              "overlayInteraction": true,
              "hideOnEscape": true,
              "showOverlay": true
            },
            "idPrefix": "drawerFrame",
            "type": "DrawerFrameWidget"
          },
          {
            "name": "Modal Frame",
            "description": "Modal Frame",
            "defaultWidth": 1,
            "defaultHeight": 6,
            "section": "Frames",
            "themeEditorSection": null,
            "tags": [
              "new",
              "frame",
              "modal",
              "dialog",
              "popup"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3'%20y='33'%20width='20'%20height='9'%20rx='3'%20fill='%233170F9'/%3e%3crect%20x='8.2'%20y='8.2'%20width='35.6'%20height='27.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M9%2020.2h34'/%3e%3crect%20x='12'%20y='23'%20width='28'%20height='9'%20rx='1'%20fill='%23EEE'/%3e%3cpath%20d='M34.203%2012.063%2039%2017m-5-.063L38.797%2012'%20stroke='%23D8D8D8'%20stroke-width='1.4'/%3e%3c/svg%3e",
            "template": {
              "isHiddenOnDesktop": false,
              "isHiddenOnMobile": true,
              "size": "medium",
              "hidden": true,
              "showHeader": true,
              "showFooter": true,
              "overlayInteraction": true,
              "hideOnEscape": true,
              "showOverlay": true,
              "padding": "8px 12px",
              "headerPadding": "8px 12px",
              "footerPadding": "8px 12px"
            },
            "idPrefix": "modalFrame",
            "type": "ModalFrameWidget"
          },
          {
            "name": "Split Pane Frame",
            "description": "Split Pane Frame",
            "defaultWidth": 1,
            "defaultHeight": 6,
            "section": "Frames",
            "themeEditorSection": null,
            "tags": [],
            "disabledTooltip": "Only one page split pane can be added per page.",
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8%2038L20%2038C21.1046%2038%2022%2037.1046%2022%2036L22%2012C22%2010.8954%2021.1046%2010%2020%2010L8%2010C6.89543%2010%206%2010.8954%206%2012L6%2036C6%2037.1046%206.89543%2038%208%2038Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M30%2038L40%2038C41.1046%2038%2042%2037.1046%2042%2036L42%2012C42%2010.8954%2041.1046%2010%2040%2010L30%2010C28.8954%2010%2028%2010.8954%2028%2012L28%2036C28%2037.1046%2028.8954%2038%2030%2038Z'%20fill='%23EBEBEB'/%3e%3cline%20x1='24.8'%20y1='9.8'%20x2='24.8'%20y2='38.2'%20stroke='%23D8D8D8'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-dasharray='1%204'/%3e%3c/svg%3e",
            "template": {
              "_resizeHandleEnabled": false,
              "isHiddenOnDesktop": false,
              "isHiddenOnMobile": true,
              "showFooter": false,
              "showHeader": false,
              "showHeaderBorder": false,
              "showFooterBorder": false,
              "padding": "8px 12px",
              "headerPadding": "8px 12px",
              "footerPadding": "8px 12px",
              "position": "right"
            },
            "idPrefix": "splitPaneFrame",
            "type": "SplitPaneFrameWidget",
            "isDisabled": false
          }
        ]
      },

      {
        key: "Containers and forms",
        title: "Containers and forms",
        items: [
          {
            "name": "Collapsible Container",
            "description": "Group components in a card and allow collapsing and expanding them.",
            "defaultWidth": 6,
            "defaultHeight": 20,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view",
              "accordion",
              "collapse",
              "expand"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8.7298%2017L9.26993%2015.386H11.7309L12.2742%2017H13.5398L11.2323%2010.4545H9.76851L7.46418%2017H8.7298ZM9.58953%2014.4336L10.4748%2011.7969H10.526L11.4113%2014.4336H9.58953Z'%20fill='%23787878'/%3e%3cpath%20d='M34%2014.5996L36%2012.9996L38%2014.5996'%20stroke='%23D8D8D8'%20stroke-width='1.6'%20stroke-linecap='square'/%3e%3cpath%20d='M7%2022L7%2034C7%2035.1046%207.89543%2036%209%2036L39%2036C40.1046%2036%2041%2035.1046%2041%2034L41%2022C41%2020.8954%2040.1046%2020%2039%2020L9%2020C7.89543%2020%207%2020.8954%207%2022Z'%20fill='%23E5E5E5'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ]
            },
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "collapsibleTitle",
                "template": {
                  "value": "#### Container title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 4,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 9
                }
              },
              {
                "type": "ToggleButtonWidget",
                "idPrefix": "collapsibleToggle",
                "position": {
                  "col": 9,
                  "height": 4,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 3
                }
              }
            ],
            "idPrefix": "collapsibleContainer",
            "type": "ContainerWidget2"
          },
          {
            "name": "Container",
            "description": "Group components in a card",
            "defaultWidth": 6,
            "defaultHeight": 19,
            "section": "Containers and forms",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Basic"
            },
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M4%2016.2h40'/%3e%3crect%20x='7'%20y='19'%20width='34'%20height='18'%20rx='2'%20fill='%23EEE'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "_type": "grid",
              "_direction": "horizontal",
              "_align": "start",
              "_justify": "start",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ]
            },
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "containerTitle",
                "template": {
                  "value": "#### Container title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              }
            ],
            "idPrefix": "container",
            "type": "ContainerWidget2"
          },
          {
            "name": "Form",
            "description": "Submit multiple inputs together",
            "defaultWidth": 4,
            "defaultHeight": 25,
            "section": "Containers and forms",
            "themeEditorSection": {
              "section": "Containers",
              "subsection": "Other"
            },
            "tags": [
              "container",
              "v2"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23D8D8D8'%20stroke-width='1.6'%20d='M4%2016.2h40M4%2030.2h40'/%3e%3crect%20x='31'%20y='33'%20width='11'%20height='5'%20rx='2'%20fill='%233170F9'/%3e%3crect%20x='7'%20y='19'%20width='34'%20height='8'%20rx='1'%20fill='%23EEE'/%3e%3c/svg%3e",
            "template": {
              "requireValidation": true,
              "resetAfterSubmit": true,
              "showBody": true,
              "showFooter": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px"
            },
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "formTitle",
                "template": {
                  "value": "#### Form title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              },
              {
                "type": "ButtonWidget2",
                "idPrefix": "formButton",
                "position": {
                  "col": 8,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "footer",
                  "width": 4
                }
              }
            ],
            "idPrefix": "form",
            "type": "FormWidget2"
          },
          {
            "name": "JSON Schema Form",
            "description": "Build a form with JSON",
            "defaultWidth": 4,
            "defaultHeight": 50,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23EEE'%20stroke-width='1.6'%20d='M4%2030.2h40'/%3e%3crect%20x='31'%20y='33'%20width='11'%20height='5'%20rx='2'%20fill='%233170F9'/%3e%3crect%20x='7'%20y='11'%20width='34'%20height='16'%20rx='1'%20fill='%23EEE'/%3e%3cpath%20d='M13.44%2015.454v4.564c-.003.63-.284.962-.795.962-.483%200-.796-.3-.806-.82h-1.377c-.007%201.306.927%201.93%202.112%201.93%201.327%200%202.231-.803%202.234-2.072v-4.564H13.44Zm6.333%201.883H21.1c-.02-1.166-.978-1.972-2.436-1.972-1.435%200-2.486.793-2.48%201.982-.003.965.678%201.518%201.784%201.783l.712.179c.713.172%201.11.377%201.112.818-.003.48-.457.806-1.16.806-.719%200-1.237-.333-1.281-.988h-1.34c.036%201.416%201.049%202.148%202.637%202.148%201.598%200%202.538-.764%202.541-1.963-.003-1.09-.825-1.668-1.962-1.924l-.588-.14c-.57-.131-1.045-.342-1.036-.812%200-.422.374-.732%201.052-.732.661%200%201.067.3%201.118.815Zm8.632%201.39c0-2.141-1.33-3.362-3.065-3.362-1.745%200-3.065%201.22-3.065%203.362%200%202.132%201.32%203.363%203.065%203.363%201.735%200%203.065-1.221%203.065-3.363Zm-1.403%200c0%201.387-.659%202.138-1.662%202.138-1.007%200-1.662-.75-1.662-2.138%200-1.387.655-2.138%201.662-2.138%201.003%200%201.662.751%201.662%202.138Zm8.173-3.273h-1.378v4.117h-.057l-2.826-4.117H29.7V22h1.384v-4.12h.048L33.979%2022h1.196v-6.546Z'%20fill='%23757575'/%3e%3c/svg%3e",
            "template": {
              "jsonSchema": "{\n  \"title\": \"A registration form\",\n  \"description\": \"A simple form example.\",\n  \"type\": \"object\",\n  \"required\": [\n    \"username\",\n    \"password\"\n  ],\n  \"properties\": {\n    \"username\": {\n      \"type\": \"string\",\n      \"title\": \"Username\"\n    },\n    \"password\": {\n      \"type\": \"string\",\n      \"title\": \"Password\",\n      \"minLength\": 3\n    },\n    \"birthday\": {\n      \"type\": \"string\",\n      \"title\": \"Birthday\",\n    }\n  }\n}",
              "uiSchema": "{\n  \"username\": {\n    \"ui:autofocus\": true,\n    \"ui:emptyValue\": \"\"\n  },\n  \"password\": {\n    \"ui:widget\": \"password\",\n    \"ui:help\": \"Hint: Make it strong!\"\n  },\n  \"birthday\": {\n    \"ui:widget\": \"date\"\n  }\n}",
              "data": "{\n  \"username\": \"john.doe\",\n  \"password\": \"johndoeisthebest\",\n  \"birthday\": \"1970-01-15\"\n}",
              "liveValidate": true
            },
            "idPrefix": "jsonSchemaForm",
            "type": "JSONSchemaFormWidget"
          },
          {
            "name": "Link Card",
            "description": "Display text and link to a card.",
            "defaultWidth": 5,
            "defaultHeight": 20,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='5'%20y='5'%20width='39'%20height='36'%20rx='3'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cline%20x1='12'%20y1='34'%20x2='37'%20y2='34'%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='12'%20y1='29'%20x2='27'%20y2='29'%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3crect%20x='11'%20y='10'%20width='13'%20height='13'%20rx='2'%20fill='%23F7CE3B'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.8988%2013.1234C16.8988%2012.7921%2017.1674%2012.5234%2017.4988%2012.5234C17.8302%2012.5234%2018.0988%2012.7921%2018.0988%2013.1234V16.1749L18.762%2015.5117C18.9964%2015.2774%2019.3763%2015.2774%2019.6106%2015.5117C19.8449%2015.746%2019.8449%2016.1259%2019.6106%2016.3602L17.9231%2018.0477C17.6888%2018.282%2017.3089%2018.282%2017.0745%2018.0477L15.387%2016.3602C15.1527%2016.1259%2015.1527%2015.746%2015.387%2015.5117C15.6214%2015.2774%2016.0013%2015.2774%2016.2356%2015.5117L16.8988%2016.1749V13.1234ZM14.7249%2018.7499V18.1874C14.7249%2017.856%2014.4563%2017.5874%2014.1249%2017.5874C13.7935%2017.5874%2013.5249%2017.856%2013.5249%2018.1874V18.7499C13.5249%2019.7026%2014.2972%2020.4749%2015.2499%2020.4749L19.7499%2020.4749C20.7026%2020.4749%2021.4749%2019.7026%2021.4749%2018.7499L21.4749%2018.1874C21.4749%2017.856%2021.2063%2017.5874%2020.8749%2017.5874C20.5435%2017.5874%2020.2749%2017.856%2020.2749%2018.1874L20.2749%2018.7499C20.2749%2019.0399%2020.0399%2019.2749%2019.7499%2019.2749L15.2499%2019.2749C14.96%2019.2749%2014.7249%2019.0399%2014.7249%2018.7499Z'%20fill='%23F7CE3B'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ],
              "events": [
                {
                  "id": "mockEventHandlerId1",
                  "event": "click",
                  "method": "confetti",
                  "pluginId": "",
                  "type": "util",
                  "waitType": "debounce"
                }
              ]
            },
            "defaultChildren": [
              {
                "type": "IconWidget",
                "idPrefix": "icon",
                "template": {
                  "clickable": false,
                  "horizontalAlign": "left",
                  "icon": "bold/shopping-store-factory-building",
                  "styleVariant": "background",
                  "style": {
                    "background": "primary"
                  }
                },
                "position": {
                  "col": 0,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "body",
                  "width": 2
                }
              },
              {
                "type": "SpacerWidget",
                "idPrefix": "spacer",
                "template": {},
                "position": {
                  "col": 0,
                  "height": 1,
                  "row": 5,
                  "rowGroup": "body",
                  "width": 12
                }
              },
              {
                "type": "TextWidget2",
                "idPrefix": "containerTitle",
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 6,
                  "rowGroup": "body",
                  "width": 12
                }
              },
              {
                "type": "TextWidget2",
                "idPrefix": "containerTitle",
                "template": {
                  "value": "A link card is useful for providing text in a clickable card.",
                  "verticalAlign": "center",
                  "horizontalAlign": "left"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 9,
                  "rowGroup": "body",
                  "width": 12
                }
              },
              {
                "type": "SpacerWidget",
                "idPrefix": "spacer",
                "template": {},
                "position": {
                  "col": 0,
                  "height": 1,
                  "row": 12,
                  "rowGroup": "body",
                  "width": 12
                }
              },
              {
                "type": "TextWidget2",
                "idPrefix": "containerFooter",
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 13,
                  "rowGroup": "body",
                  "width": 8
                }
              }
            ],
            "idPrefix": "linkCard",
            "type": "ContainerWidget2"
          },
          {
            "name": "Stack",
            "description": "Organize components in a flexbox layout",
            "defaultWidth": 6,
            "defaultHeight": 19,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view",
              "flex",
              "stack"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='3.2'%20width='41.6'%20height='41.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8%2032L14%2032C15.1046%2032%2016%2031.1046%2016%2030L16%2018C16%2016.8954%2015.1046%2016%2014%2016L8%2016C6.89543%2016%206%2016.8954%206%2018L6%2030C6%2031.1046%206.89543%2032%208%2032Z'%20fill='%23E5E5E5'/%3e%3cpath%20d='M20%2039L26%2039C27.1046%2039%2028%2038.1046%2028%2037L28%2011C28%209.89543%2027.1046%209%2026%209L20%209C18.8954%209%2018%209.89543%2018%2011L18%2037C18%2038.1046%2018.8954%2039%2020%2039Z'%20fill='%23E5E5E5'/%3e%3cpath%20d='M31%2024L40%2024'%20stroke='%230588F0'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M40%2024L37%2021'%20stroke='%230588F0'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M40%2024L37%2027'%20stroke='%230588F0'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": false,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "_type": "stack",
              "_direction": "horizontal",
              "_align": "start",
              "_justify": "start",
              "_gap": "0px",
              "_flexWrap": true,
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ]
            },
            "idPrefix": "stack",
            "type": "ContainerWidget2"
          },
          {
            "name": "Stepped Container",
            "defaultWidth": 6,
            "defaultHeight": 31,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "wizard",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='27.7648'%20cy='8.58852'%20r='2.58824'%20transform='rotate(-180%2027.7648%208.58852)'%20fill='%23E5E5E5'/%3e%3cpath%20d='M29.7061%208.58887L12.2355%208.58879'%20stroke='%233170F9'%20stroke-width='2.58824'/%3e%3ccircle%20cx='27.765'%20cy='8.58869'%20r='1.94118'%20transform='rotate(-180%2027.765%208.58869)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.29412'/%3e%3ccircle%20cx='13.2943'%20cy='8.58869'%20r='2.26471'%20transform='rotate(-180%2013.2943%208.58869)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.94118'/%3e%3ccircle%20cx='30.5'%20cy='8.5'%20r='5.5'%20fill='%233170F9'/%3e%3ccircle%20cx='30.5'%20cy='8.5'%20r='5.5'%20fill='%233170F9'/%3e%3crect%20x='4.2'%20y='17.2'%20width='39.6'%20height='25.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M10%2024L10%2036C10%2037.1046%2010.8954%2038%2012%2038L36%2038C37.1046%2038%2038%2037.1046%2038%2036L38%2024C38%2022.8954%2037.1046%2022%2036%2022L12%2022C10.8954%2022%2010%2022.8954%2010%2024Z'%20fill='%23E5E5E5'/%3e%3cpath%20d='M28.5%208.86111L29.8611%209.99537L32.1296%207.5'%20stroke='white'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "showFooter": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "Step 1",
                "Step 2",
                "Step 3"
              ],
              "_labels": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_iconPositionByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ],
              "currentViewKey": "{{ self.viewKeys[0] }}"
            },
            "defaultChildren": [
              {
                "type": "StepsWidget",
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              },
              {
                "type": "ButtonWidget2",
                "idPrefix": "prevButton",
                "position": {
                  "col": 0,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "footer",
                  "width": 4
                }
              },
              {
                "type": "ButtonWidget2",
                "idPrefix": "nextButton",
                "position": {
                  "col": 8,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "footer",
                  "width": 4
                }
              }
            ],
            "idPrefix": "steppedContainer",
            "type": "ContainerWidget2"
          },
          {
            "name": "Tabbed Container",
            "description": "Multiple views with navigation",
            "defaultWidth": 6,
            "defaultHeight": 20,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [
              "group",
              "container",
              "card",
              "v2",
              "view"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='7.2'%20width='41.6'%20height='33.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3crect%20x='7'%20y='26'%20width='34'%20height='10'%20rx='1'%20fill='%23E5E5E5'/%3e%3cline%20x1='4'%20y1='22.2'%20x2='44'%20y2='22.2'%20stroke='%23E5E5E5'%20stroke-width='1.6'/%3e%3cpath%20d='M27.6881%2018H30.3376C31.8365%2018%2032.5716%2017.2362%2032.5716%2016.2166C32.5716%2015.2259%2031.8685%2014.6442%2031.1717%2014.609V14.5451C31.8109%2014.3949%2032.3159%2013.9474%2032.3159%2013.1516C32.3159%2012.1768%2031.6128%2011.4545%2030.1938%2011.4545H27.6881V18ZM28.8738%2017.0092V15.0916H30.181C30.9129%2015.0916%2031.3667%2015.5391%2031.3667%2016.1239C31.3667%2016.6449%2031.0087%2017.0092%2030.149%2017.0092H28.8738ZM28.8738%2014.2383V12.4325H30.0723C30.769%2012.4325%2031.1302%2012.8001%2031.1302%2013.305C31.1302%2013.8803%2030.6636%2014.2383%2030.0467%2014.2383H28.8738Z'%20fill='%232B2B2B'/%3e%3crect%20x='7'%20y='9'%20width='17'%20height='11'%20rx='5.5'%20fill='%233170F933'/%3e%3cpath%20d='M13.7298%2018L14.2699%2016.386H16.7309L17.2742%2018H18.5398L16.2323%2011.4545H14.7685L12.4642%2018H13.7298ZM14.5895%2015.4336L15.4748%2012.7969H15.526L16.4113%2015.4336H14.5895Z'%20fill='%233170F9'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "showFooter": false,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1",
                "View 2",
                "View 3"
              ],
              "_labels": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_iconPositionByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ],
              "currentViewKey": "{{ self.viewKeys[0] }}"
            },
            "defaultChildren": [
              {
                "type": "TabsWidget2",
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              }
            ],
            "idPrefix": "tabbedContainer",
            "type": "ContainerWidget2"
          },
          {
            "name": "Wizard",
            "description": "Guide users through a set of conditions",
            "defaultWidth": 6,
            "defaultHeight": 40,
            "section": "Containers and forms",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='27.765'%20cy='8.589'%20r='2.588'%20transform='rotate(-180%2027.765%208.589)'%20fill='%23EEE'/%3e%3cpath%20d='M29.706%208.589h-17.47'%20stroke='%233170F9'%20stroke-width='2.588'/%3e%3ccircle%20cx='27.765'%20cy='8.589'%20r='1.941'%20transform='rotate(-180%2027.765%208.589)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.294'/%3e%3ccircle%20cx='13.294'%20cy='8.589'%20r='2.265'%20transform='rotate(-180%2013.294%208.589)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.941'/%3e%3ccircle%20cx='30.5'%20cy='8.5'%20r='5.5'%20fill='%233170F9'/%3e%3ccircle%20cx='30.5'%20cy='8.5'%20r='5.5'%20fill='%233170F9'/%3e%3crect%20x='4.2'%20y='17.2'%20width='39.6'%20height='25.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M10%2024v12a2%202%200%200%200%202%202h24a2%202%200%200%200%202-2V24a2%202%200%200%200-2-2H12a2%202%200%200%200-2%202Z'%20fill='%23EEE'/%3e%3cpath%20d='m28.5%208.861%201.361%201.134L32.13%207.5'%20stroke='%23fff'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "wizard",
            "type": "WizardWidget"
          }
        ]
      },
      {
        key: "Repeatables",
        title: "Repeatables",
        items: [
          {
            "name": "Container List View",
            "idPrefix": "container",
            "description": "Display repeated components",
            "defaultHeight": 60,
            "defaultWidth": 6,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='3.2'%20width='41.6'%20height='41.6'%20rx='4.8'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cline%20x1='4'%20y1='12.2'%20x2='44'%20y2='12.2'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8%2019L8%2024C8%2025.1046%208.89543%2026%2010%2026L38%2026C39.1046%2026%2040%2025.1046%2040%2024L40%2019C40%2017.8954%2039.1046%2017%2038%2017L10%2017C8.89543%2017%208%2017.8954%208%2019Z'%20fill='%23E5E5E5'/%3e%3cpath%20d='M8%2031L8%2036C8%2037.1046%208.89543%2038%2010%2038L38%2038C39.1046%2038%2040%2037.1046%2040%2036L40%2031C40%2029.8954%2039.1046%2029%2038%2029L10%2029C8.89543%2029%208%2029.8954%208%2031Z'%20fill='%23E5E5E5'/%3e%3cpath%20d='M8%2043L8%2044L40%2044L40%2043C40%2041.8954%2039.1046%2041%2038%2041L10%2041C8.89543%2041%208%2041.8954%208%2043Z'%20fill='%23E5E5E5'/%3e%3c/svg%3e",
            "template": {
              "showBody": true,
              "showHeader": true,
              "padding": "12px",
              "headerPadding": "4px 12px",
              "footerPadding": "4px 12px",
              "overflowType": "hidden",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_viewKeys": [
                "View 1"
              ],
              "_labels": [
                ""
              ],
              "_tooltipByIndex": [
                ""
              ],
              "_hiddenByIndex": [
                ""
              ],
              "_disabledByIndex": [
                ""
              ],
              "_iconByIndex": [
                ""
              ],
              "_iconPositionByIndex": [
                ""
              ],
              "_ids": [
                "00030"
              ],
              "enableFullBleed": true,
              "heightType": "fixed"
            },
            "isDefaultFixedContainer": true,
            "defaultChildren": [
              {
                "type": "TextWidget2",
                "idPrefix": "listViewTitle",
                "template": {
                  "value": "#### List View title",
                  "verticalAlign": "center"
                },
                "position": {
                  "col": 0,
                  "height": 3,
                  "row": 0,
                  "rowGroup": "header",
                  "width": 12
                }
              },
              {
                "type": "ListViewWidget2",
                "idPrefix": "listView",
                "template": {
                  "data": "[0, 1, 2, 3, 4, 5]",
                  "numColumns": 3,
                  "itemWidth": "200px",
                  "padding": "12px",
                  "margin": "0",
                  "enableInstanceValues": false,
                  "layoutType": "list"
                },
                "position": {
                  "col": 0,
                  "height": 20,
                  "row": 0,
                  "rowGroup": "body",
                  "width": 12
                }
              }
            ],
            "section": "Repeatables",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "data",
              "new",
              "list",
              "container",
              "view",
              "repeatables",
              "collection"
            ],
            "type": "ContainerWidget2"
          },
          {
            "name": "Grid View",
            "idPrefix": "gridView",
            "description": "Display repeated components",
            "defaultHeight": 40,
            "defaultWidth": 8,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39.3846%204H8.61539C6.06638%204%204%206.06638%204%208.61539V39.3846C4%2041.9336%206.06638%2044%208.61539%2044H39.3846C41.9336%2044%2044%2041.9336%2044%2039.3846V8.61539C44%206.06638%2041.9336%204%2039.3846%204Z'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.52'/%3e%3crect%20x='8.5'%20y='8.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='19.5'%20y='8.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='30.5'%20y='8.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='8.5'%20y='19.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='19.5'%20y='19.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='30.5'%20y='19.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='8.5'%20y='30.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='19.5'%20y='30.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3crect%20x='30.5'%20y='30.5'%20width='9'%20height='9'%20rx='2'%20fill='%23EEEEEE'/%3e%3c/svg%3e",
            "template": {
              "data": "[\"Fluffy\", \"Whiskers\", \"Fido\", \"Mittens\", \"Rex\", \"Snowball\", \"Spot\", \"Lucky\", \"Princess\", \"Buddy\", \"Milo\", \"Cleo\", \"Lola\", \"Simba\", \"Rocky\", \"Ginger\", \"Spike\", \"Max\", \"Cupcake\", \"Oreo\"]",
              "numColumns": 3,
              "itemWidth": "200px",
              "padding": "0",
              "margin": "0",
              "enableInstanceValues": false,
              "layoutType": "grid"
            },
            "isDefaultFixedContainer": true,
            "defaultChildren": [
              {
                "type": "ContainerWidget2",
                "idPrefix": "container",
                "template": {
                  "showBody": true,
                  "showHeader": true,
                  "padding": "12px",
                  "headerPadding": "4px 12px",
                  "footerPadding": "4px 12px",
                  "itemMode": "static",
                  "_hasMigratedNestedItems": true,
                  "_viewKeys": [
                    "View 1"
                  ],
                  "_labels": [
                    ""
                  ],
                  "_tooltipByIndex": [
                    ""
                  ],
                  "_hiddenByIndex": [
                    ""
                  ],
                  "_disabledByIndex": [
                    ""
                  ],
                  "_iconByIndex": [
                    ""
                  ],
                  "_iconPositionByIndex": [
                    ""
                  ],
                  "_ids": [
                    "00030"
                  ]
                },
                "position": {
                  "col": 0,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "body",
                  "width": 12
                },
                "defaultChildren": [
                  {
                    "type": "TextWidget2",
                    "idPrefix": "containerTitle",
                    "template": {
                      "value": "#### {{ item }}",
                      "verticalAlign": "center"
                    },
                    "position": {
                      "col": 0,
                      "height": 3,
                      "row": 0,
                      "rowGroup": "header",
                      "width": 12
                    }
                  }
                ]
              }
            ],
            "section": "Repeatables",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "data",
              "new",
              "grid",
              "list",
              "view",
              "repeatables",
              "collection"
            ],
            "type": "ListViewWidget2"
          },
          {
            "name": "List View",
            "idPrefix": "listView",
            "description": "Display repeated components",
            "defaultHeight": 40,
            "defaultWidth": 8,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='3.2'%20width='41.6'%20height='41.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8%2010v5a2%202%200%200%200%202%202h28a2%202%200%200%200%202-2v-5a2%202%200%200%200-2-2H10a2%202%200%200%200-2%202ZM8%2022v5a2%202%200%200%200%202%202h28a2%202%200%200%200%202-2v-5a2%202%200%200%200-2-2H10a2%202%200%200%200-2%202ZM8%2034v5a2%202%200%200%200%202%202h28a2%202%200%200%200%202-2v-5a2%202%200%200%200-2-2H10a2%202%200%200%200-2%202Z'%20fill='%23EEE'/%3e%3c/svg%3e",
            "template": {
              "data": "[\"Fluffy\", \"Whiskers\", \"Fido\", \"Mittens\", \"Rex\", \"Snowball\", \"Spot\", \"Lucky\", \"Princess\", \"Buddy\", \"Milo\", \"Cleo\", \"Lola\", \"Simba\", \"Rocky\", \"Ginger\", \"Spike\", \"Max\", \"Cupcake\", \"Oreo\"]",
              "numColumns": 3,
              "itemWidth": "200px",
              "padding": "0",
              "margin": "0",
              "enableInstanceValues": false,
              "layoutType": "list",
              "direction": "vertical"
            },
            "isDefaultFixedContainer": true,
            "defaultChildren": [
              {
                "type": "ContainerWidget2",
                "idPrefix": "container",
                "template": {
                  "showBody": true,
                  "showHeader": true,
                  "padding": "12px",
                  "headerPadding": "4px 12px",
                  "footerPadding": "4px 12px",
                  "itemMode": "static",
                  "_hasMigratedNestedItems": true,
                  "_viewKeys": [
                    "View 1"
                  ],
                  "_labels": [
                    ""
                  ],
                  "_tooltipByIndex": [
                    ""
                  ],
                  "_hiddenByIndex": [
                    ""
                  ],
                  "_disabledByIndex": [
                    ""
                  ],
                  "_iconByIndex": [
                    ""
                  ],
                  "_iconPositionByIndex": [
                    ""
                  ],
                  "_ids": [
                    "00030"
                  ]
                },
                "position": {
                  "col": 0,
                  "height": 5,
                  "row": 0,
                  "rowGroup": "body",
                  "width": 12
                },
                "defaultChildren": [
                  {
                    "type": "TextWidget2",
                    "idPrefix": "containerTitle",
                    "template": {
                      "value": "#### {{ item }}",
                      "verticalAlign": "center"
                    },
                    "position": {
                      "col": 0,
                      "height": 3,
                      "row": 0,
                      "rowGroup": "header",
                      "width": 12
                    }
                  }
                ]
              }
            ],
            "section": "Repeatables",
            "themeEditorSection": null,
            "tags": [
              "v2",
              "data",
              "new",
              "list",
              "view",
              "repeatables",
              "collection"
            ],
            "type": "ListViewWidget2"
          }
        ]
      },
      {
        key: "Navigation",
        title: "Navigation",
        items: [
          {
            "name": "Breadcrumbs",
            "description": "Navigate between pages",
            "defaultWidth": 12,
            "defaultHeight": 5,
            "section": "Navigation",
            "themeEditorSection": {
              "section": "Navigation",
              "subsection": "Steps"
            },
            "tags": [
              "v2",
              "page",
              "navigation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.7298%2026H3.46418L5.76851%2019.4545H7.23229L9.53982%2026H8.27419L6.52597%2020.7969H6.47483L4.7298%2026ZM4.77135%2023.4336H8.22306V24.386H4.77135V23.4336Z'%20fill='%23949494'/%3e%3cpath%20d='M20.6881%2026V19.4545H23.1938C23.6668%2019.4545%2024.0599%2019.5291%2024.3731%2019.6783C24.6884%2019.8253%2024.9239%2020.0266%2025.0794%2020.2823C25.2371%2020.538%2025.3159%2020.8278%2025.3159%2021.1516C25.3159%2021.418%2025.2648%2021.646%2025.1625%2021.8356C25.0602%2022.0231%2024.9228%2022.1754%2024.7502%2022.2926C24.5776%2022.4098%2024.3848%2022.494%2024.1717%2022.5451V22.609C24.404%2022.6218%2024.6266%2022.6932%2024.8397%2022.8232C25.0549%2022.951%2025.2307%2023.1321%2025.3671%2023.3665C25.5034%2023.6009%2025.5716%2023.8842%2025.5716%2024.2166C25.5716%2024.5554%2025.4896%2024.8601%2025.3255%2025.1307C25.1614%2025.3991%2024.9143%2025.6112%2024.584%2025.7667C24.2538%2025.9222%2023.8383%2026%2023.3376%2026H20.6881ZM21.8738%2025.0092H23.149C23.5794%2025.0092%2023.8894%2024.9272%2024.0791%2024.7631C24.2708%2024.5969%2024.3667%2024.3839%2024.3667%2024.1239C24.3667%2023.93%2024.3188%2023.7553%2024.2229%2023.5998C24.127%2023.4421%2023.9906%2023.3185%2023.8138%2023.229C23.6369%2023.1374%2023.426%2023.0916%2023.181%2023.0916H21.8738V25.0092ZM21.8738%2022.2383H23.0467C23.2513%2022.2383%2023.4356%2022.201%2023.5997%2022.1264C23.7637%2022.0497%2023.8926%2021.9421%2023.9864%2021.8036C24.0823%2021.663%2024.1302%2021.4968%2024.1302%2021.305C24.1302%2021.0515%2024.0407%2020.8427%2023.8617%2020.6786C23.6849%2020.5146%2023.4217%2020.4325%2023.0723%2020.4325H21.8738V22.2383Z'%20fill='%23949494'/%3e%3cpath%20d='M42.404%2021.663H41.2087C41.1746%2021.467%2041.1117%2021.2933%2041.0201%2021.142C40.9285%2020.9886%2040.8145%2020.8587%2040.6781%2020.7521C40.5418%2020.6456%2040.3862%2020.5657%2040.2115%2020.5124C40.0389%2020.457%2039.8525%2020.4293%2039.6522%2020.4293C39.2964%2020.4293%2038.981%2020.5188%2038.7062%2020.6978C38.4313%2020.8746%2038.2161%2021.1346%2038.0606%2021.4776C37.9051%2021.8185%2037.8273%2022.2351%2037.8273%2022.7273C37.8273%2023.228%2037.9051%2023.6499%2038.0606%2023.9929C38.2183%2024.3338%2038.4335%2024.5916%2038.7062%2024.7663C38.981%2024.9389%2039.2953%2025.0252%2039.649%2025.0252C39.845%2025.0252%2040.0283%2024.9996%2040.1987%2024.9485C40.3713%2024.8952%2040.5258%2024.8175%2040.6622%2024.7152C40.8006%2024.6129%2040.9168%2024.4872%2041.0105%2024.3381C41.1064%2024.1889%2041.1725%2024.0185%2041.2087%2023.8267L42.404%2023.8331C42.3592%2024.1442%2042.2623%2024.4361%2042.1131%2024.7088C41.9661%2024.9815%2041.7733%2025.2223%2041.5347%2025.4311C41.296%2025.6378%2041.0169%2025.7997%2040.6973%2025.9169C40.3777%2026.032%2040.0229%2026.0895%2039.633%2026.0895C39.0578%2026.0895%2038.5443%2025.9563%2038.0926%2025.69C37.6408%2025.4237%2037.285%2025.0391%2037.0251%2024.5362C36.7651%2024.0334%2036.6352%2023.4304%2036.6352%2022.7273C36.6352%2022.022%2036.7662%2021.419%2037.0283%2020.9183C37.2903%2020.4155%2037.6472%2020.0309%2038.0989%2019.7646C38.5506%2019.4982%2039.062%2019.3651%2039.633%2019.3651C39.9974%2019.3651%2040.3362%2019.4162%2040.6494%2019.5185C40.9626%2019.6207%2041.2417%2019.771%2041.4867%2019.9691C41.7318%2020.1651%2041.9331%2020.4059%2042.0908%2020.6914C42.2506%2020.9748%2042.355%2021.2987%2042.404%2021.663Z'%20fill='%23949494'/%3e%3cline%20x1='17.6784'%20y1='19.424'%20x2='12.6784'%20y2='27.424'%20stroke='%23E5E5E5'%20stroke-width='1.6'/%3e%3cline%20x1='33.6784'%20y1='19.424'%20x2='28.6784'%20y2='27.424'%20stroke='%23E5E5E5'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "value": "{{ retoolContext.appUuid }}",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_itemTypeByIndex": [
                "",
                "",
                ""
              ],
              "_appTargetByIndex": [
                "",
                "",
                ""
              ],
              "_labels": [
                "Breadcrumb 1",
                "Breadcrumb 2",
                "Breadcrumb 3"
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_iconPositionByIndex": [
                "",
                "",
                ""
              ],
              "_screenTargetIdByIndex": [
                "",
                "",
                ""
              ],
              "_persistUrlParamsByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "idPrefix": "breadcrumbs",
            "type": "BreadcrumbsWidget"
          },
          {
            "name": "Navigation",
            "defaultWidth": 12,
            "defaultHeight": 4,
            "section": "Navigation",
            "themeEditorSection": {
              "section": "Navigation",
              "subsection": "Basic"
            },
            "description": "Link to apps and URLs",
            "tags": [
              "v2",
              "menu"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6881%2027V20.4545H25.1938C25.6668%2020.4545%2026.0599%2020.5291%2026.3731%2020.6783C26.6884%2020.8253%2026.9239%2021.0266%2027.0794%2021.2823C27.2371%2021.538%2027.3159%2021.8278%2027.3159%2022.1516C27.3159%2022.418%2027.2648%2022.646%2027.1625%2022.8356C27.0602%2023.0231%2026.9228%2023.1754%2026.7502%2023.2926C26.5776%2023.4098%2026.3848%2023.494%2026.1717%2023.5451V23.609C26.404%2023.6218%2026.6266%2023.6932%2026.8397%2023.8232C27.0549%2023.951%2027.2307%2024.1321%2027.3671%2024.3665C27.5034%2024.6009%2027.5716%2024.8842%2027.5716%2025.2166C27.5716%2025.5554%2027.4896%2025.8601%2027.3255%2026.1307C27.1614%2026.3991%2026.9143%2026.6112%2026.584%2026.7667C26.2538%2026.9222%2025.8383%2027%2025.3376%2027H22.6881ZM23.8738%2026.0092H25.149C25.5794%2026.0092%2025.8894%2025.9272%2026.0791%2025.7631C26.2708%2025.5969%2026.3667%2025.3839%2026.3667%2025.1239C26.3667%2024.93%2026.3188%2024.7553%2026.2229%2024.5998C26.127%2024.4421%2025.9906%2024.3185%2025.8138%2024.229C25.6369%2024.1374%2025.426%2024.0916%2025.181%2024.0916H23.8738V26.0092ZM23.8738%2023.2383H25.0467C25.2513%2023.2383%2025.4356%2023.201%2025.5997%2023.1264C25.7637%2023.0497%2025.8926%2022.9421%2025.9864%2022.8036C26.0823%2022.663%2026.1302%2022.4968%2026.1302%2022.305C26.1302%2022.0515%2026.0407%2021.8427%2025.8617%2021.6786C25.6849%2021.5146%2025.4217%2021.4325%2025.0723%2021.4325H23.8738V23.2383Z'%20fill='%23808080'%20/%3e%3cpath%20d='M40.404%2022.663H39.2087C39.1746%2022.467%2039.1117%2022.2933%2039.0201%2022.142C38.9285%2021.9886%2038.8145%2021.8587%2038.6781%2021.7521C38.5418%2021.6456%2038.3862%2021.5657%2038.2115%2021.5124C38.0389%2021.457%2037.8525%2021.4293%2037.6522%2021.4293C37.2964%2021.4293%2036.981%2021.5188%2036.7062%2021.6978C36.4313%2021.8746%2036.2161%2022.1346%2036.0606%2022.4776C35.9051%2022.8185%2035.8273%2023.2351%2035.8273%2023.7273C35.8273%2024.228%2035.9051%2024.6499%2036.0606%2024.9929C36.2183%2025.3338%2036.4335%2025.5916%2036.7062%2025.7663C36.981%2025.9389%2037.2953%2026.0252%2037.649%2026.0252C37.845%2026.0252%2038.0283%2025.9996%2038.1987%2025.9485C38.3713%2025.8952%2038.5258%2025.8175%2038.6622%2025.7152C38.8006%2025.6129%2038.9168%2025.4872%2039.0105%2025.3381C39.1064%2025.1889%2039.1725%2025.0185%2039.2087%2024.8267L40.404%2024.8331C40.3592%2025.1442%2040.2623%2025.4361%2040.1131%2025.7088C39.9661%2025.9815%2039.7733%2026.2223%2039.5347%2026.4311C39.296%2026.6378%2039.0169%2026.7997%2038.6973%2026.9169C38.3777%2027.032%2038.0229%2027.0895%2037.633%2027.0895C37.0578%2027.0895%2036.5443%2026.9563%2036.0926%2026.69C35.6408%2026.4237%2035.285%2026.0391%2035.0251%2025.5362C34.7651%2025.0334%2034.6352%2024.4304%2034.6352%2023.7273C34.6352%2023.022%2034.7662%2022.419%2035.0283%2021.9183C35.2903%2021.4155%2035.6472%2021.0309%2036.0989%2020.7646C36.5506%2020.4982%2037.062%2020.3651%2037.633%2020.3651C37.9974%2020.3651%2038.3362%2020.4162%2038.6494%2020.5185C38.9626%2020.6207%2039.2417%2020.771%2039.4867%2020.9691C39.7318%2021.1651%2039.9331%2021.4059%2040.0908%2021.6914C40.2506%2021.9748%2040.355%2022.2987%2040.404%2022.663Z'%20fill='%23808080'%20/%3e%3crect%20x='2'%20y='18'%20width='17'%20height='12'%20rx='4'%20fill='%23BFDBFE'%20/%3e%3cpath%20d='M8.7298%2027H7.46418L9.76851%2020.4545H11.2323L13.5398%2027H12.2742L10.526%2021.7969H10.4748L8.7298%2027ZM8.77135%2024.4336H12.2231V25.386H8.77135V24.4336Z'%20fill='%230D0D0D'%20/%3e%3c/svg%3e",
            "idPrefix": "navigation",
            "type": "NavigationWidget2"
          },
          {
            "name": "Page Input",
            "description": "Jump to a specific page of data",
            "defaultWidth": 4,
            "defaultHeight": 4,
            "section": "Navigation",
            "themeEditorSection": "Pagination",
            "tags": [
              "page",
              "navigation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2017.2A4.8%204.8%200%200%200%203.2%2022v6A4.8%204.8%200%200%200%208%2032.8h6a4.8%204.8%200%200%200%204.8-4.8v-6a4.8%204.8%200%200%200-4.8-4.8H8Z'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M8.787%2028v-.857l2.272-2.227c.218-.22.399-.415.543-.585.145-.17.254-.336.326-.495.073-.16.11-.33.11-.512a.966.966%200%200%200-.142-.53.936.936%200%200%200-.386-.346%201.247%201.247%200%200%200-.56-.12%201.15%201.15%200%200%200-.565.133.924.924%200%200%200-.377.374%201.203%201.203%200%200%200-.131.579H8.748c0-.416.095-.777.285-1.084.19-.307.45-.544.783-.712a2.526%202.526%200%200%201%201.15-.253c.44%200%20.825.082%201.157.246.333.164.59.389.774.674.185.286.278.612.278.979%200%20.245-.047.485-.14.722-.095.236-.26.498-.496.786a12.51%2012.51%200%200%201-.988%201.045l-1.128%201.148v.044h2.851V28H8.787Zm17.063.096c-.48%200-.895-.106-1.247-.317a2.15%202.15%200%200%201-.818-.885c-.192-.38-.288-.822-.288-1.33%200-.506.096-.95.288-1.332.194-.381.467-.678.818-.889.352-.21.767-.316%201.247-.316.479%200%20.894.105%201.246.316.352.211.623.508.815.889.194.381.29.826.29%201.333s-.096.95-.29%201.33a2.125%202.125%200%200%201-.815.884c-.352.211-.767.317-1.246.317Zm.006-.927c.26%200%20.477-.071.652-.214.175-.145.305-.339.39-.582.087-.243.13-.513.13-.812%200-.3-.043-.572-.13-.815a1.29%201.29%200%200%200-.39-.584.987.987%200%200%200-.652-.218c-.266%200-.488.073-.665.218-.174.145-.306.34-.393.584a2.448%202.448%200%200%200-.128.815c0%20.299.043.57.128.812.087.243.219.437.393.582.177.143.399.214.665.214Zm5.814-4.078v.895h-2.902v-.895h2.902ZM29.494%2028v-5.372c0-.33.068-.606.204-.825a1.29%201.29%200%200%201%20.556-.492%201.8%201.8%200%200%201%20.774-.163c.2%200%20.378.016.534.048.155.032.27.06.345.086l-.23.895a2.002%202.002%200%200%200-.186-.045%201.122%201.122%200%200%200-.249-.026c-.215%200-.367.053-.457.157-.087.102-.131.25-.131.441V28h-1.16Zm7.574-6.635c.314.002.618.058.915.166.298.107.566.282.805.524.239.241.428.564.569.969.14.405.21.905.21%201.502a5.633%205.633%200%200%201-.178%201.508%203.35%203.35%200%200%201-.515%201.12%202.272%202.272%200%200%201-.808.696c-.316.16-.67.24-1.065.24a2.4%202.4%200%200%201-1.1-.243%202.064%202.064%200%200%201-1.13-1.63h1.166c.06.26.181.466.364.62.186.15.419.227.7.227.454%200%20.804-.198%201.049-.592.245-.394.367-.942.367-1.643h-.045a1.68%201.68%200%200%201-.405.486%201.847%201.847%200%200%201-.566.31%202%202%200%200%201-.665.109%201.98%201.98%200%200%201-1.035-.275%202.007%202.007%200%200%201-.726-.754%202.252%202.252%200%200%201-.269-1.096c0-.427.099-.809.295-1.148.198-.34.474-.61.827-.805.354-.198.767-.295%201.24-.29Zm.004.959a1.202%201.202%200%200%200-1.058.623c-.105.19-.157.402-.157.636.002.232.054.443.157.633a1.16%201.16%200%200%200%201.045.617%201.179%201.179%200%200%200%20.872-.374%201.3%201.3%200%200%200%20.262-.406%201.18%201.18%200%200%200%20.093-.48c0-.223-.053-.43-.16-.62a1.233%201.233%200%200%200-.431-.457%201.137%201.137%200%200%200-.623-.172Zm5.832-.959c.314.002.618.058.914.166.299.107.567.282.806.524.238.241.428.564.569.969.14.405.21.905.21%201.502a5.634%205.634%200%200%201-.178%201.508c-.12.442-.291.814-.515%201.12a2.272%202.272%200%200%201-.809.696c-.315.16-.67.24-1.064.24a2.4%202.4%200%200%201-1.1-.243%202.064%202.064%200%200%201-1.13-1.63h1.166c.06.26.181.466.364.62.186.15.419.227.7.227.454%200%20.803-.198%201.048-.592.245-.394.368-.942.368-1.643h-.045a1.68%201.68%200%200%201-.406.486%201.846%201.846%200%200%201-.565.31c-.21.073-.43.109-.665.109-.384%200-.729-.092-1.036-.275a2.008%202.008%200%200%201-.725-.754%202.251%202.251%200%200%201-.269-1.096c0-.427.099-.809.294-1.148.199-.34.475-.61.828-.805.354-.198.767-.295%201.24-.29Zm.003.959a1.201%201.201%200%200%200-1.058.623c-.104.19-.156.402-.156.636.002.232.054.443.157.633a1.16%201.16%200%200%200%201.045.617%201.18%201.18%200%200%200%20.872-.374%201.3%201.3%200%200%200%20.262-.406%201.18%201.18%200%200%200%20.093-.48c0-.223-.053-.43-.16-.62a1.234%201.234%200%200%200-.431-.457%201.138%201.138%200%200%200-.623-.172Z'%20fill='%23787878'/%3e%3c/svg%3e",
            "template": {
              "max": 10,
              "value": 1,
              "textBefore": "Page",
              "textAfter": "of {{ self.max }}",
              "horizontalAlign": "center"
            },
            "valueType": "number",
            "idPrefix": "pageInput",
            "type": "PageInputWidget"
          },
          {
            "name": "Pagination",
            "description": "Navigate through pages of data",
            "defaultWidth": 4,
            "defaultHeight": 4,
            "section": "Navigation",
            "themeEditorSection": "Pagination",
            "tags": [
              "page",
              "navigation"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='31'%20y='18'%20width='17'%20height='13'%20rx='3'%20fill='%233170F9'/%3e%3cpath%20d='M5.582%2021.454V28H4.396v-5.392h-.038l-1.531.978V22.5l1.627-1.046h1.128ZM11.787%2028v-.857l2.272-2.227c.218-.22.399-.415.543-.585.145-.17.254-.336.326-.495.073-.16.11-.33.11-.512a.966.966%200%200%200-.142-.53.936.936%200%200%200-.386-.346%201.247%201.247%200%200%200-.56-.12%201.15%201.15%200%200%200-.565.133.924.924%200%200%200-.377.374%201.203%201.203%200%200%200-.131.579h-1.129c0-.416.095-.777.285-1.084.19-.307.45-.544.783-.712a2.526%202.526%200%200%201%201.15-.253c.44%200%20.825.082%201.157.246.333.164.59.389.774.674.185.286.278.612.278.979%200%20.245-.047.485-.14.722-.095.236-.26.498-.496.786a12.51%2012.51%200%200%201-.988%201.045l-1.128%201.148v.044h2.851V28h-4.487Z'%20fill='%23787878'/%3e%3cpath%20d='M36.518%2021.365a2.7%202.7%200%200%201%20.914.166c.298.107.567.282.806.524.238.241.428.564.569.969.14.405.21.905.21%201.502a5.633%205.633%200%200%201-.179%201.508%203.35%203.35%200%200%201-.514%201.12%202.272%202.272%200%200%201-.809.696c-.315.16-.67.24-1.064.24a2.4%202.4%200%200%201-1.1-.243%202.064%202.064%200%200%201-1.13-1.63h1.166c.06.26.18.466.364.62.185.15.419.227.7.227.454%200%20.803-.198%201.048-.592.245-.394.368-.942.368-1.643h-.045a1.68%201.68%200%200%201-.406.486%201.847%201.847%200%200%201-.566.31c-.208.073-.43.109-.664.109a1.98%201.98%200%200%201-1.036-.275%202.007%202.007%200%200%201-.725-.754%202.252%202.252%200%200%201-.269-1.096c0-.427.098-.809.294-1.148.198-.34.474-.61.828-.805.354-.198.767-.295%201.24-.29Zm.003.959a1.202%201.202%200%200%200-1.058.623c-.104.19-.156.402-.156.636.002.232.054.443.156.633.105.19.246.34.425.45.182.111.388.167.62.167a1.179%201.179%200%200%200%20.873-.374%201.3%201.3%200%200%200%20.262-.406%201.18%201.18%200%200%200%20.093-.48c0-.223-.053-.43-.16-.62a1.233%201.233%200%200%200-.431-.457%201.137%201.137%200%200%200-.624-.172Zm5.833-.959a2.7%202.7%200%200%201%20.914.166c.298.107.567.282.806.524.238.241.428.564.568.969.141.405.211.905.211%201.502a5.634%205.634%200%200%201-.179%201.508c-.119.442-.29.814-.514%201.12a2.272%202.272%200%200%201-.809.696c-.315.16-.67.24-1.064.24a2.4%202.4%200%200%201-1.1-.243%202.064%202.064%200%200%201-1.13-1.63h1.166c.06.26.18.466.364.62.185.15.419.227.7.227.454%200%20.803-.198%201.048-.592.245-.394.368-.942.368-1.643h-.045a1.68%201.68%200%200%201-.406.486%201.846%201.846%200%200%201-.566.31c-.208.073-.43.109-.664.109a1.98%201.98%200%200%201-1.036-.275%202.007%202.007%200%200%201-.725-.754%202.25%202.25%200%200%201-.269-1.096c0-.427.098-.809.294-1.148.198-.34.474-.61.828-.805.354-.198.767-.295%201.24-.29Zm.003.959a1.201%201.201%200%200%200-1.058.623c-.104.19-.156.402-.156.636.002.232.054.443.156.633.105.19.246.34.425.45.182.111.388.167.62.167a1.18%201.18%200%200%200%20.873-.374%201.3%201.3%200%200%200%20.262-.406%201.18%201.18%200%200%200%20.093-.48c0-.223-.053-.43-.16-.62a1.234%201.234%200%200%200-.431-.457%201.138%201.138%200%200%200-.624-.172Z'%20fill='%23fff'/%3e%3cpath%20d='M21.392%2026.07a.686.686%200%200%201-.499-.204.663.663%200%200%201-.204-.499.655.655%200%200%201%20.204-.492.685.685%200%200%201%20.499-.204c.187%200%20.35.068.489.204a.672.672%200%200%201%20.111.847.733.733%200%200%201-.255.256.665.665%200%200%201-.345.092Zm2.61%200a.686.686%200%200%201-.499-.204.662.662%200%200%201-.204-.499.655.655%200%200%201%20.204-.492.685.685%200%200%201%20.499-.204c.188%200%20.35.068.489.204a.672.672%200%200%201%20.112.847.734.734%200%200%201-.256.256.665.665%200%200%201-.345.092Zm2.61%200a.686.686%200%200%201-.498-.204.663.663%200%200%201-.205-.499.655.655%200%200%201%20.205-.492.685.685%200%200%201%20.498-.204c.188%200%20.35.068.49.204a.672.672%200%200%201%20.111.847.733.733%200%200%201-.256.256.665.665%200%200%201-.345.092Z'%20fill='%23B2B2B2'/%3e%3c/svg%3e",
            "template": {
              "max": 10,
              "value": 1
            },
            "valueType": "number",
            "idPrefix": "pagination",
            "type": "PaginationWidget"
          },
          {
            "name": "Steps",
            "description": "Provide a way to visualize steps in a process",
            "defaultHeight": 8,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='28.7648'%20cy='18.5875'%20r='2.58824'%20transform='rotate(-180%2028.7648%2018.5875)'%20fill='%23E5E5E5'/%3e%3cpath%20d='M30.7061%2018.5879L13.2355%2018.5878'%20stroke='%233170F9'%20stroke-width='2.58824'/%3e%3ccircle%20cx='28.765'%20cy='18.5877'%20r='1.94118'%20transform='rotate(-180%2028.765%2018.5877)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.29412'/%3e%3ccircle%20cx='14.2943'%20cy='18.5877'%20r='2.26471'%20transform='rotate(-180%2014.2943%2018.5877)'%20fill='%233170F9'%20stroke='%233170F9'%20stroke-width='1.94118'/%3e%3ccircle%20cx='31.5'%20cy='18.5'%20r='5.5'%20fill='%233170F9'/%3e%3ccircle%20cx='31.5'%20cy='18.5'%20r='5.5'%20fill='%233170F9'/%3e%3cpath%20d='M30%2018.3611L31.3611%2019.4954L33.6296%2017'%20stroke='white'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5819%2028.4545H13.4537L11.8269%2029.4996V30.5863L13.3578%2029.6083H13.3961V35H14.5819V28.4545Z'%20fill='%23787878'/%3e%3cpath%20d='M29.5817%2035H34.0689V34.0092H31.218V33.9645L32.3462%2032.8171C33.6183%2031.5962%2033.9698%2031.0018%2033.9698%2030.2635C33.9698%2029.1673%2033.0781%2028.3651%2031.7614%2028.3651C30.4638%2028.3651%2029.5433%2029.1705%2029.5433%2030.4137H30.6715C30.6715%2029.7457%2031.0934%2029.3271%2031.7454%2029.3271C32.3686%2029.3271%2032.832%2029.7074%2032.832%2030.3242C32.832%2030.8707%2032.4996%2031.2607%2031.854%2031.9158L29.5817%2034.1435V35Z'%20fill='%23787878'/%3e%3c/svg%3e",
            "section": "Navigation",
            "themeEditorSection": {
              "section": "Navigation",
              "subsection": "Steps"
            },
            "tags": [
              "v2"
            ],
            "template": {
              "value": "{{ self.values[0] }}",
              "showStepNumbers": true,
              "orientation": "horizontal",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_values": [
                "Step 1",
                "Step 2",
                "Step 3"
              ],
              "_labels": [
                "",
                "",
                ""
              ],
              "_captionByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "valueType": "primitive",
            "idPrefix": "steps",
            "type": "StepsWidget"
          },
          {
            "name": "Tabs",
            "description": "Provides a way to select a single tab out of a list of tab options",
            "defaultHeight": 4,
            "defaultWidth": 3,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6881%2027V20.4545H25.1938C25.6668%2020.4545%2026.0599%2020.5291%2026.3731%2020.6783C26.6884%2020.8253%2026.9239%2021.0266%2027.0794%2021.2823C27.2371%2021.538%2027.3159%2021.8278%2027.3159%2022.1516C27.3159%2022.418%2027.2648%2022.646%2027.1625%2022.8356C27.0602%2023.0231%2026.9228%2023.1754%2026.7502%2023.2926C26.5776%2023.4098%2026.3848%2023.494%2026.1717%2023.5451V23.609C26.404%2023.6218%2026.6266%2023.6932%2026.8397%2023.8232C27.0549%2023.951%2027.2307%2024.1321%2027.3671%2024.3665C27.5034%2024.6009%2027.5716%2024.8842%2027.5716%2025.2166C27.5716%2025.5554%2027.4896%2025.8601%2027.3255%2026.1307C27.1614%2026.3991%2026.9143%2026.6112%2026.584%2026.7667C26.2538%2026.9222%2025.8383%2027%2025.3376%2027H22.6881ZM23.8738%2026.0092H25.149C25.5794%2026.0092%2025.8894%2025.9272%2026.0791%2025.7631C26.2708%2025.5969%2026.3667%2025.3839%2026.3667%2025.1239C26.3667%2024.93%2026.3188%2024.7553%2026.2229%2024.5998C26.127%2024.4421%2025.9906%2024.3185%2025.8138%2024.229C25.6369%2024.1374%2025.426%2024.0916%2025.181%2024.0916H23.8738V26.0092ZM23.8738%2023.2383H25.0467C25.2513%2023.2383%2025.4356%2023.201%2025.5997%2023.1264C25.7637%2023.0497%2025.8926%2022.9421%2025.9864%2022.8036C26.0823%2022.663%2026.1302%2022.4968%2026.1302%2022.305C26.1302%2022.0515%2026.0407%2021.8427%2025.8617%2021.6786C25.6849%2021.5146%2025.4217%2021.4325%2025.0723%2021.4325H23.8738V23.2383Z'%20fill='%23808080'%20/%3e%3cpath%20d='M40.404%2022.663H39.2087C39.1746%2022.467%2039.1117%2022.2933%2039.0201%2022.142C38.9285%2021.9886%2038.8145%2021.8587%2038.6781%2021.7521C38.5418%2021.6456%2038.3862%2021.5657%2038.2115%2021.5124C38.0389%2021.457%2037.8525%2021.4293%2037.6522%2021.4293C37.2964%2021.4293%2036.981%2021.5188%2036.7062%2021.6978C36.4313%2021.8746%2036.2161%2022.1346%2036.0606%2022.4776C35.9051%2022.8185%2035.8273%2023.2351%2035.8273%2023.7273C35.8273%2024.228%2035.9051%2024.6499%2036.0606%2024.9929C36.2183%2025.3338%2036.4335%2025.5916%2036.7062%2025.7663C36.981%2025.9389%2037.2953%2026.0252%2037.649%2026.0252C37.845%2026.0252%2038.0283%2025.9996%2038.1987%2025.9485C38.3713%2025.8952%2038.5258%2025.8175%2038.6622%2025.7152C38.8006%2025.6129%2038.9168%2025.4872%2039.0105%2025.3381C39.1064%2025.1889%2039.1725%2025.0185%2039.2087%2024.8267L40.404%2024.8331C40.3592%2025.1442%2040.2623%2025.4361%2040.1131%2025.7088C39.9661%2025.9815%2039.7733%2026.2223%2039.5347%2026.4311C39.296%2026.6378%2039.0169%2026.7997%2038.6973%2026.9169C38.3777%2027.032%2038.0229%2027.0895%2037.633%2027.0895C37.0578%2027.0895%2036.5443%2026.9563%2036.0926%2026.69C35.6408%2026.4237%2035.285%2026.0391%2035.0251%2025.5362C34.7651%2025.0334%2034.6352%2024.4304%2034.6352%2023.7273C34.6352%2023.022%2034.7662%2022.419%2035.0283%2021.9183C35.2903%2021.4155%2035.6472%2021.0309%2036.0989%2020.7646C36.5506%2020.4982%2037.062%2020.3651%2037.633%2020.3651C37.9974%2020.3651%2038.3362%2020.4162%2038.6494%2020.5185C38.9626%2020.6207%2039.2417%2020.771%2039.4867%2020.9691C39.7318%2021.1651%2039.9331%2021.4059%2040.0908%2021.6914C40.2506%2021.9748%2040.355%2022.2987%2040.404%2022.663Z'%20fill='%23808080'%20/%3e%3crect%20x='2'%20y='18'%20width='17'%20height='12'%20rx='4'%20fill='%23BFDBFE'%20/%3e%3cpath%20d='M8.7298%2027H7.46418L9.76851%2020.4545H11.2323L13.5398%2027H12.2742L10.526%2021.7969H10.4748L8.7298%2027ZM8.77135%2024.4336H12.2231V25.386H8.77135V24.4336Z'%20fill='%230D0D0D'%20/%3e%3c/svg%3e",
            "section": "Navigation",
            "themeEditorSection": {
              "section": "Navigation",
              "subsection": "Basic"
            },
            "tags": [
              "v2"
            ],
            "template": {
              "value": "{{ self.values[0] }}",
              "itemMode": "static",
              "_hasMigratedNestedItems": true,
              "_values": [
                "Tab 1",
                "Tab 2",
                "Tab 3"
              ],
              "_labels": [
                "",
                "",
                ""
              ],
              "_tooltipByIndex": [
                "",
                "",
                ""
              ],
              "_hiddenByIndex": [
                "",
                "",
                ""
              ],
              "_disabledByIndex": [
                "",
                "",
                ""
              ],
              "_iconByIndex": [
                "",
                "",
                ""
              ],
              "_iconPositionByIndex": [
                "",
                "",
                ""
              ],
              "_ids": [
                "00030",
                "00031",
                "00032"
              ]
            },
            "valueType": "primitive",
            "idPrefix": "tabs",
            "type": "TabsWidget2"
          }
        ]
      },
      {
        key: "Integrations",
        title: "Integrations",
        items: [
          {
            "defaultHeight": 5,
            "defaultWidth": 4,
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='6.425'%20y='15.8'%20width='34.4'%20height='16.4'%20rx='3.2'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M12.589%2027h3.827v-1.142h-2.421v-4.676h-1.406V27Zm6.591.082c1.373%200%202.205-.906%202.205-2.25%200-1.346-.832-2.253-2.205-2.253-1.372%200-2.204.907-2.204%202.253%200%201.344.832%202.25%202.204%202.25Zm.009-1.048c-.514%200-.798-.488-.798-1.21%200-.725.284-1.216.798-1.216.497%200%20.781.491.781%201.216%200%20.721-.284%201.21-.781%201.21Zm4.942%202.693c1.315%200%202.213-.6%202.213-1.71v-4.38H24.96v.747h-.04c-.167-.401-.548-.805-1.235-.805-.912%200-1.739.702-1.739%202.233%200%201.483.787%202.128%201.744%202.128.642%200%201.071-.298%201.236-.701h.048v.767c0%20.556-.34.758-.806.758-.446%200-.713-.17-.787-.44l-1.316.074c.103.764.821%201.33%202.066%201.33Zm.042-2.798c-.514%200-.8-.418-.8-1.116%200-.697.283-1.148.8-1.148.509%200%20.804.44.804%201.148%200%20.701-.298%201.116-.804%201.116ZM28.948%2027h1.39v-4.364h-1.39V27Zm.696-4.872c.395%200%20.713-.299.713-.665%200-.366-.318-.662-.713-.662-.392%200-.713.296-.713.662%200%20.366.321.665.713.665Zm2.967%202.383c.003-.497.292-.792.733-.792.44%200%20.701.29.699.772V27h1.389v-2.781c.003-.983-.597-1.64-1.514-1.64-.645%200-1.134.327-1.327.858h-.048v-.8h-1.321V27h1.389v-2.489Z'%20fill='%238E8E8E'/%3e%3c/svg%3e",
            "name": "Auth Login",
            "description": "Perform custom API authentication",
            "section": "Integrations",
            "themeEditorSection": null,
            "tags": [],
            "template": {},
            "idPrefix": "authLogin",
            "type": "AuthLoginWidget"
          },
          {
            "name": "Looker",
            "description": "Embed a Looker dashboard",
            "defaultWidth": 4,
            "defaultHeight": 75,
            "section": "Integrations",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20x='4'%20y='7'%20width='40'%20height='32'%20rx='2'%20fill='%23fff'/%3e%3cpath%20d='M10%207H6a2%202%200%200%200-2%202v4M38%2039h4a2%202%200%200%200%202-2v-4M44%2013V9a2%202%200%200%200-2-2h-4M4%2033v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3ccircle%20cx='14'%20cy='22'%20r='3'%20stroke='%23615286'%20stroke-width='2'/%3e%3ccircle%20cx='10.5'%20cy='17.5'%20r='1.7'%20stroke='%23615286'%20stroke-width='1.6'/%3e%3ccircle%20cx='13'%20cy='14'%20r='1.3'%20stroke='%23615286'%20stroke-width='1.4'/%3e%3ccircle%20cx='11.5'%20cy='11.5'%20r='.9'%20stroke='%23615286'%20stroke-width='1.2'/%3e%3crect%20x='25'%20y='12'%20width='22'%20height='3'%20rx='1'%20transform='rotate(90%2025%2012)'%20fill='%23D8D8D8'/%3e%3crect%20x='35'%20y='17'%20width='17'%20height='3'%20rx='1'%20transform='rotate(90%2035%2017)'%20fill='%23D8D8D8'/%3e%3crect%20x='30'%20y='20'%20width='14'%20height='3'%20rx='1'%20transform='rotate(90%2030%2020)'%20fill='%23D8D8D8'/%3e%3crect%20x='40'%20y='20'%20width='14'%20height='3'%20rx='1'%20transform='rotate(90%2040%2020)'%20fill='%23D8D8D8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h48v48H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "looker",
            "type": "LookerWidget"
          },
          {
            "name": "Mapbox Map",
            "description": "Display a map with location markers",
            "defaultWidth": 4,
            "defaultHeight": 30,
            "section": "Integrations",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='6'%20y='6'%20width='36'%20height='36'%20rx='2'%20fill='%23fff'/%3e%3cpath%20d='m19.05%2012.923%207.65-5.538h14.4V36L19.05%2012.923Z'%20fill='%23F5BED0'/%3e%3cpath%20d='m7.35%2023.076%2011.25-9.23%2014.85%2015.23-12.15%2012H7.35v-18Z'%20fill='%23A0D3EC'/%3e%3cpath%20d='M7.35%2021.692V7.384l18.45-.461-18.45%2014.77Z'%20fill='%23EECA86'/%3e%3cpath%20d='M13.24%2030c-2.01%200-3.64%201.653-3.64%203.692%200%202.04%201.63%203.693%203.64%203.693%202.01%200%203.638-1.653%203.638-3.693%200-2.039-1.629-3.692-3.639-3.692Zm1.727%204.598c-1.245%201.262-3.468.86-3.468.86s-.4-2.252.848-3.518c.692-.702%201.838-.673%202.562.058.725.73.75%201.898.058%202.6Z'%20fill='%23fff'/%3e%3cpath%20d='m13.657%2032.164-.356.743-.733.362.733.361.356.744.356-.744.733-.361-.733-.361-.356-.744Z'%20fill='%23fff'/%3e%3cpath%20d='M26.741%207.9a.824.824%200%200%200%20.146-1.135.777.777%200%200%200-1.108-.142L26.74%207.9Zm-19.8%2015.693%2019.8-15.692-.962-1.278-19.8%2015.692.962%201.278Z'%20fill='%236A6A6A'/%3e%3cpath%20transform='matrix(.72237%20-.6915%20.67304%20.7396%2021.3%2042)'%20stroke='%236A6A6A'%20stroke-width='1.6'%20d='M0-.8h18.688'/%3e%3cpath%20transform='matrix(.6981%20.716%20-.6981%20.716%2017.7%2013.385)'%20stroke='%236A6A6A'%20stroke-width='1.6'%20d='M0-.8h33.52'/%3e%3cpath%20d='m28.793%2023.511-.454.659.457.316.456-.32-.459-.655Zm0%200%20.46.656v-.002l.004-.002.009-.006.027-.02a7.554%207.554%200%200%200%20.41-.327c.256-.22.6-.54.944-.944.674-.788%201.44-1.992%201.447-3.446.01-1.787-1.491-3.176-3.273-3.162-1.767.015-3.275%201.397-3.285%203.18-.008%201.46.746%202.66%201.415%203.444a8.42%208.42%200%200%200%201.346%201.258l.028.02.008.006.003.002h.002v.001l.455-.658ZM12.793%2016.511l-.454.659.457.316.456-.32-.459-.655Zm0%200%20.46.656v-.002l.004-.002.009-.006.027-.02a7.554%207.554%200%200%200%20.41-.327c.256-.22.6-.54.944-.944.674-.788%201.44-1.992%201.447-3.446.01-1.787-1.491-3.176-3.273-3.161-1.767.014-3.275%201.396-3.285%203.179-.007%201.46.746%202.66%201.415%203.444a8.42%208.42%200%200%200%201.346%201.258l.028.02.008.006.003.002h.002v.001l.455-.658ZM25.793%2038.511l-.454.659.457.316.456-.32-.459-.655Zm0%200%20.46.656v-.002l.004-.002.009-.006.027-.02a7.554%207.554%200%200%200%20.41-.327c.256-.22.6-.54.944-.944.674-.788%201.44-1.992%201.447-3.446.01-1.787-1.491-3.176-3.273-3.162-1.767.015-3.275%201.397-3.285%203.18-.008%201.46.746%202.66%201.415%203.444a8.42%208.42%200%200%200%201.346%201.258l.028.02.008.006.003.002h.002v.001l.455-.658Z'%20fill='%23E46D61'%20stroke='%23fff'%20stroke-width='1.6'/%3e%3crect%20x='6.8'%20y='6.8'%20width='34.4'%20height='34.4'%20rx='3.2'%20stroke='%236A6A6A'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "mapboxMap",
            "type": "MapWidget"
          },
          {
            "name": "Stripe Card Form",
            "description": "Submit card information to Stripe",
            "defaultWidth": 4,
            "defaultHeight": 20,
            "section": "Integrations",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='7'%20width='40'%20height='34'%20rx='2'%20fill='%23fff'/%3e%3cpath%20d='M10%207H6a2%202%200%200%200-2%202v4M38%2041h4a2%202%200%200%200%202-2v-4M44%2013V9a2%202%200%200%200-2-2h-4M4%2035v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3crect%20x='8.8'%20y='19.8'%20width='30.4'%20height='6.4'%20rx='1.2'%20fill='%23fff'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3crect%20x='8'%20y='29'%20width='32'%20height='7'%20rx='2'%20fill='%236772E5'/%3e%3cpath%20d='M12.7%2011.918c-.4%200-.7.164-.7.493%200%20.986%203.05.493%203%203.123C15%2017.124%2013.9%2018%2012.25%2018c-.7%200-1.4-.164-2.15-.493v-2.082c.65.383%201.5.712%202.15.712.45%200%20.75-.164.75-.548%200-1.096-3-.658-3-3.069%200-1.588%201.1-2.52%202.7-2.52.65%200%201.35.164%202%20.438v2.082c-.6-.383-1.4-.602-2-.602Z'%20fill='%236772E5'/%3e%3c/svg%3e",
            "template": {
              "submitButtonText": "Submit",
              "stripePublishableKey": "pk_test_replace_me"
            },
            "idPrefix": "stripeCardForm",
            "type": "StripeCardFormWidget"
          },
          {
            "name": "Tableau",
            "description": "Embed a Tableau visualization",
            "defaultWidth": 3,
            "defaultHeight": 100,
            "section": "Integrations",
            "themeEditorSection": null,
            "tags": [],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20x='4'%20y='7'%20width='40'%20height='32'%20rx='2'%20fill='%23fff'/%3e%3cpath%20d='M10%207H6a2%202%200%200%200-2%202v4M38%2039h4a2%202%200%200%200%202-2v-4M44%2013V9a2%202%200%200%200-2-2h-4M4%2033v4a2%202%200%200%200%202%202h4'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M12.42%2019.5v.15h1.134v-2.123h2.096v-1.054h-2.096V14.35h-1.133v2.123H10.35v1.054h2.07V19.5z'%20fill='%23E8762D'%20stroke='%23E8762D'%20stroke-width='.3'/%3e%3cpath%20d='M9.032%2022.5v.15h.936V20.715h1.682v-.905H9.968v-1.96h-.936v1.96H7.35v.904h1.682V22.5z'%20fill='%23C72037'%20stroke='%23C72037'%20stroke-width='.3'/%3e%3cpath%20d='M16.022%2016v.15h.933v-1.946H18.65v-.884H16.955v-1.97h-.933v1.97H14.35v.884h1.672V16z'%20fill='%235B879B'%20stroke='%235B879B'%20stroke-width='.3'/%3e%3cpath%20d='M12.55%2024v.15h.876v-1.478h1.224V21.828h-1.224V20.35h-.876v1.478h-1.2V22.672h1.2V24z'%20fill='%235C6692'%20stroke='%235C6692'%20stroke-width='.3'/%3e%3cpath%20d='M9.055%2016v.15h.89v-1.97H11.65V13.32H9.945v-1.97h-.89v1.97H7.35V14.18H9.055V16z'%20fill='%23EB9129'%20stroke='%23EB9129'%20stroke-width='.3'/%3e%3cpath%20d='M18.35%2018.5v.15h.78v-1.254h1.02v-.792h-1.02V15.35h-.78v1.254h-1v.792h1V18.5z'%20fill='%235C6692'%20stroke='%235C6692'%20stroke-width='.3'/%3e%3cpath%20d='M16.022%2022.5v.15h.933V20.715H18.65v-.905H16.955v-1.96h-.933v1.96H14.35v.904h1.672V22.5z'%20fill='%231F457E'%20stroke='%231F457E'%20stroke-width='.3'/%3e%3cpath%20d='M14.5%2011.855h.15V11.152H13.473V9.85h-.724V11.152H11.572V11.855H12.749V13.157h.724V11.855H14.5zM7.027%2018.5v.15h.724V17.348H8.928V16.645H7.751V15.367h-.724V16.645H5.85v.73l.153-.004%201.024-.02V18.5z'%20fill='%237199A6'%20stroke='%237199A6'%20stroke-width='.3'/%3e%3crect%20x='26'%20y='13'%20width='22'%20height='3'%20rx='1'%20transform='rotate(90%2026%2013)'%20fill='%23D8D8D8'/%3e%3crect%20x='36'%20y='18'%20width='17'%20height='3'%20rx='1'%20transform='rotate(90%2036%2018)'%20fill='%23D8D8D8'/%3e%3crect%20x='31'%20y='21'%20width='14'%20height='3'%20rx='1'%20transform='rotate(90%2031%2021)'%20fill='%23D8D8D8'/%3e%3crect%20x='41'%20y='21'%20width='14'%20height='3'%20rx='1'%20transform='rotate(90%2041%2021)'%20fill='%23D8D8D8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h48v48H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "tableau",
            "type": "TableauWidget"
          }
        ]
      },
      {
        key: "Custom",
        title: "Custom",
        items: [
          {
            "name": "HTML",
            "description": "A container for custom HTML and CSS code",
            "defaultWidth": 3,
            "defaultHeight": 3,
            "section": "Custom",
            "themeEditorSection": null,
            "tags": [
              "browser",
              "embed",
              "css"
            ],
            "icon": "https://retool-edge.com/assets_vjs/html-CEBIEDkc.svg",
            "template": {
              "html": "<div class=\"myClass\">\n  Hello World\n</div>",
              "css": ".myClass {\n  text-align: center;\n}"
            },
            "idPrefix": "html",
            "type": "HTMLWidget"
          },
          {
            "name": "IFrame",
            "description": "Embed a web page",
            "defaultWidth": 6,
            "defaultHeight": 50,
            "section": "Custom",
            "themeEditorSection": {
              "section": "Other",
              "subsection": "Container"
            },
            "tags": [
              "browser",
              "url",
              "embed"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41%206H7C4.79086%206%203%207.79086%203%2010V38C3%2040.2091%204.79086%2042%207%2042H41C43.2091%2042%2045%2040.2091%2045%2038V10C45%207.79086%2043.2091%206%2041%206Z'%20fill='white'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M34%206H41C42.0609%206%2043.0783%206.42143%2043.8284%207.17157C44.5786%207.92172%2045%208.93913%2045%2010V38C45%2039.0609%2044.5786%2040.0783%2043.8284%2040.8284C43.0783%2041.5786%2042.0609%2042%2041%2042H34V6Z'%20fill='%23F7F7F7'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3cpath%20d='M37%2027L39.5%2030L42%2027M42%2021L39.5%2018L37%2021'%20stroke='%23949494'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%207H32V21H9V7Z'%20fill='white'/%3e%3cpath%20opacity='0.5'%20d='M28%2030H8C7.73478%2030%207.48043%2030.1054%207.29289%2030.2929C7.10536%2030.4804%207%2030.7348%207%2031C7%2031.2652%207.10536%2031.5196%207.29289%2031.7071C7.48043%2031.8946%207.73478%2032%208%2032H28C28.2652%2032%2028.5196%2031.8946%2028.7071%2031.7071C28.8946%2031.5196%2029%2031.2652%2029%2031C29%2030.7348%2028.8946%2030.4804%2028.7071%2030.2929C28.5196%2030.1054%2028.2652%2030%2028%2030ZM28%2025H8C7.73478%2025%207.48043%2025.1054%207.29289%2025.2929C7.10536%2025.4804%207%2025.7348%207%2026C7%2026.2652%207.10536%2026.5196%207.29289%2026.7071C7.48043%2026.8946%207.73478%2027%208%2027H28C28.2652%2027%2028.5196%2026.8946%2028.7071%2026.7071C28.8946%2026.5196%2029%2026.2652%2029%2026C29%2025.7348%2028.8946%2025.4804%2028.7071%2025.2929C28.5196%2025.1054%2028.2652%2025%2028%2025ZM21%2035H8C7.73478%2035%207.48043%2035.1054%207.29289%2035.2929C7.10536%2035.4804%207%2035.7348%207%2036C7%2036.2652%207.10536%2036.5196%207.29289%2036.7071C7.48043%2036.8946%207.73478%2037%208%2037H21C21.2652%2037%2021.5196%2036.8946%2021.7071%2036.7071C21.8946%2036.5196%2022%2036.2652%2022%2036C22%2035.7348%2021.8946%2035.4804%2021.7071%2035.2929C21.5196%2035.1054%2021.2652%2035%2021%2035Z'%20fill='%23D8D8D8'/%3e%3cpath%20d='M18.5611%2014.0108L16.3681%2011.7498C15.9126%2011.2844%2015.2943%2011.0138%2014.6433%2010.9952C13.9923%2010.9765%2013.3595%2011.2112%2012.8781%2011.6498L12.7711%2011.7498C12.5365%2011.9637%2012.3474%2012.2227%2012.215%2012.5112C12.0827%2012.7998%2012.0099%2013.1121%2012.0009%2013.4294C11.992%2013.7468%2012.0471%2014.0627%2012.1629%2014.3583C12.2787%2014.6538%2012.4529%2014.9231%2012.6751%2015.1498L14.8671%2017.4118M16.6301%2019.2308L18.5371%2021.1968C19.0064%2021.6758%2019.6432%2021.954%2020.3135%2021.9731C20.9838%2021.9921%2021.6353%2021.7504%2022.1311%2021.2988V21.2988C22.3728%2021.0786%2022.5677%2020.8119%2022.704%2020.5147C22.8404%2020.2176%2022.9155%2019.8959%2022.9249%2019.5691C22.9342%2019.2422%2022.8776%2018.9168%2022.7584%2018.6123C22.6392%2018.3078%2022.4598%2018.0305%2022.2311%2017.7968L20.3241%2015.8298M19.1031%2018.1258L15.8531%2014.8758'%20stroke='%23B2B2B2'%20stroke-width='1.625'%20stroke-linecap='round'/%3e%3c/svg%3e",
            "template": {
              "src": "https://www.wikipedia.org/",
              "title": "{{ self.src }}"
            },
            "idPrefix": "iFrame",
            "type": "IFrameWidget2"
          }
        ]
      },
      {
        key: "Legacy",
        title: "Legacy",
        items: [
          {
            "name": "Alert (legacy)",
            "description": "Display an alert with level of severity",
            "defaultWidth": 4,
            "defaultHeight": 5,
            "section": "Legacy",
            "themeEditorSection": null,
            "tags": [
              "legacy"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='3.2'%20y='14.2'%20width='42.6'%20height='20.6'%20rx='4.8'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3ccircle%20cx='12'%20cy='24'%20r='6'%20fill='%23FBEDC8'/%3e%3ccircle%20cx='12'%20cy='28'%20r='1'%20fill='%23C08811'/%3e%3cpath%20d='M12%2020v6'%20stroke='%23C08811'%20stroke-width='2'/%3e%3cpath%20stroke='%238E8E8E'%20stroke-width='2'%20d='M22%2022h11'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20d='M22%2027h19'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "alertLegacy",
            "type": "AlertWidget"
          },
          {
            "name": "Button Group (legacy)",
            "description": "Select a button to trigger queries or actions",
            "defaultWidth": 4,
            "defaultHeight": 10,
            "section": "Legacy",
            "themeEditorSection": null,
            "tags": [
              "input"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='12'%20width='20'%20height='24'%20rx='2'%20fill='%23fff'%20stroke='%23D8D8D8'%20stroke-width='1.6'/%3e%3crect%20x='10'%20y='15'%20width='9'%20height='9'%20rx='4.5'%20fill='%233170F9'/%3e%3crect%20x='26'%20y='12'%20width='20'%20height='24'%20rx='2'%20fill='%23fff'%20stroke='%23EEE'%20stroke-width='1.6'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M7%2032h10M7%2028h10M31%2032h10M31%2028h10'/%3e%3cpath%20d='m12.556%2019.694%201.36%201.134%202.27-2.495'%20stroke='%23fff'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
            "template": {
              "values": "[1,2,3]",
              "labels": ""
            },
            "idPrefix": "buttonGroupLegacy",
            "type": "ButtonGroupWidget"
          },
          {
            "name": "Chart (legacy)",
            "description": "Bar, line, scatter, and pie charts",
            "defaultWidth": 6,
            "defaultHeight": 35,
            "section": "Legacy",
            "themeEditorSection": null,
            "tags": [
              "graph",
              "data",
              "plot",
              "line",
              "scatter",
              "bar",
              "pie"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'%20d='M7.8%2029.2h32.4M7.8%2019.2h32.4M7.8%209.2h32.4'/%3e%3crect%20x='16'%20y='23'%20width='16'%20height='3'%20rx='.5'%20transform='rotate(90%2016%2023)'%20fill='%23BFDBFE'/%3e%3crect%20x='22'%20y='26'%20width='13'%20height='3'%20rx='.5'%20transform='rotate(90%2022%2026)'%20fill='%2393C5FD'/%3e%3crect%20x='34'%20y='12'%20width='27'%20height='3'%20rx='.5'%20transform='rotate(90%2034%2012)'%20fill='%233170F9'/%3e%3crect%20opacity='.91'%20x='28'%20y='18'%20width='21'%20height='3'%20rx='.5'%20transform='rotate(90%2028%2018)'%20fill='%2360A5FA'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='1.6'%20stroke-linecap='round'%20d='M7.8%2039.2h32.4'/%3e%3c/svg%3e",
            "idPrefix": "chartLegacy",
            "type": "PlotlyChartWidget"
          },
          {
            "name": "Checkbox Tree (legacy)",
            "description": "Select values from a multi-level tree",
            "defaultWidth": 3,
            "defaultHeight": 30,
            "section": "Legacy",
            "themeEditorSection": null,
            "tags": [
              "legacy"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.174%2017.757a1%201%200%200%201%200%201.486L8.67%2021.498c-.644.58-1.669.122-1.669-.743v-4.51c0-.865%201.025-1.322%201.669-.743l2.505%202.255ZM11.174%2029.757a1%201%200%200%201%200%201.486L8.67%2033.498c-.644.58-1.669.122-1.669-.743v-4.51c0-.865%201.025-1.322%201.669-.743l2.505%202.255Z'%20fill='%23DEDEDE'/%3e%3crect%20x='14.5'%20y='14.5'%20width='9'%20height='9'%20rx='2.5'%20fill='%233170F9'%20stroke='%233170F9'/%3e%3cpath%20d='m17%2019.361%201.361%201.134L20.63%2018'%20stroke='%23fff'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M28%2018.666h14'/%3e%3crect%20x='14.5'%20y='26.5'%20width='9'%20height='9'%20rx='2.5'%20fill='%23fff'%20stroke='%23DEDEDE'/%3e%3cpath%20stroke='%23DEDEDE'%20stroke-width='2'%20stroke-linecap='round'%20d='M28%2030.334h11'/%3e%3c/svg%3e",
            "template": {},
            "idPrefix": "checkboxTreeLegacy",
            "type": "CheckboxTreeWidget"
          },
          {
            "name": "Key Value",
            "description": "Display key-value pairs",
            "defaultWidth": 2,
            "defaultHeight": 25,
            "section": "Legacy",
            "themeEditorSection": null,
            "tags": [
              "data"
            ],
            "icon": "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2039H7V16a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v23Z'%20fill='%23fff'/%3e%3cpath%20d='M23%2038V10M7%2027h33.25M7%2021h33.25M7%2033h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3cpath%20d='M40%2015H7v-5a1%201%200%200%201%201-1h31a1%201%200%200%201%201%201v5Z'%20fill='%23EEE'/%3e%3cpath%20d='M6.875%2015h33.25'%20stroke='%23DEDEDE'%20stroke-width='1.6'/%3e%3crect%20x='6.8'%20y='9.8'%20width='33.4'%20height='28.4'%20rx='2.2'%20stroke='%23757575'%20stroke-width='1.6'/%3e%3c/svg%3e",
            "template": {
              "data": "{\n  \"a\": 1,\n  \"b\": 2,\n  \"c\": 3\n}",
              "rowVisibility": {
                "a": true,
                "b": true,
                "c": true
              },
              "rowHeaderNames": {},
              "rowFormats": {},
              "rows": [
                "a",
                "b",
                "c"
              ],
              "rowMappers": {}
            },
            "idPrefix": "keyValue",
            "type": "KeyValueMapWidget"
          }
        ]
      },


    ]
  }
}
export const WidgetPickerComponentsModulesTab = {
  items: [
    {
      "name": "toolbar",
      "disabled": false,
      "description": "toolbar",
      "type": "GlobalWidget",
      "defaultWidth": 12,
      "defaultHeight": 60,
      "template": {
        "name": "toolbar",
        "pageUuid": "c4c19b20-fd21-11ed-8c1e-17b628360fcc",
        "overflowType": "hidden",
        "heightType": "fixed"
      },
      "icon": null
    }
  ]
}

export const EditorHistory = {
  items: [
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-27T03:34:12.130Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "currentUser": {
        "authenticators": [],
        "requestedSeatTypeAt": null,
        "lastName": "Jaber",
        "enabled": true,
        "recentVisits": [
          {
            "userId": 177737,
            "pageId": 5408654,
            "visitType": "edit",
            "createdAt": "2026-09-20T12:38:03.061Z",
            "updatedAt": "2026-09-27T03:34:12.189Z"
          },
          {
            "userId": 177737,
            "pageId": 2413099,
            "visitType": "view",
            "createdAt": "2023-09-19T09:03:39.367Z",
            "updatedAt": "2026-09-27T03:26:38.427Z"
          },
          {
            "userId": 177737,
            "pageId": 2416080,
            "visitType": "edit",
            "createdAt": "2023-09-20T00:15:53.769Z",
            "updatedAt": "2026-09-27T03:24:56.352Z"
          },
          {
            "userId": 177737,
            "pageId": 4718868,
            "visitType": "view",
            "createdAt": "2025-12-12T22:29:07.680Z",
            "updatedAt": "2026-09-20T18:05:11.369Z"
          },
          {
            "userId": 177737,
            "pageId": 5408653,
            "visitType": "view",
            "createdAt": "2026-09-20T12:37:22.177Z",
            "updatedAt": "2026-09-20T12:37:22.177Z"
          },
          {
            "userId": 177737,
            "pageId": 2335335,
            "visitType": "view",
            "createdAt": "2023-08-23T07:32:59.924Z",
            "updatedAt": "2026-09-20T10:07:22.194Z"
          },
          {
            "userId": 177737,
            "pageId": 2117695,
            "visitType": "view",
            "createdAt": "2023-05-28T07:18:29.584Z",
            "updatedAt": "2026-09-20T08:48:06.548Z"
          },
          {
            "userId": 177737,
            "pageId": 5408562,
            "visitType": "edit",
            "createdAt": "2026-09-20T08:46:55.721Z",
            "updatedAt": "2026-09-20T08:47:48.224Z"
          },
          {
            "userId": 177737,
            "pageId": 2673612,
            "visitType": "view",
            "createdAt": "2023-12-06T12:55:53.952Z",
            "updatedAt": "2024-09-15T05:30:56.554Z"
          },
          {
            "userId": 177737,
            "pageId": 2413103,
            "visitType": "edit",
            "createdAt": "2023-09-19T09:06:06.375Z",
            "updatedAt": "2024-09-15T05:18:02.417Z"
          },
          {
            "userId": 177737,
            "pageId": 3062406,
            "visitType": "edit",
            "createdAt": "2024-04-18T03:26:36.837Z",
            "updatedAt": "2024-04-18T03:27:45.036Z"
          },
          {
            "userId": 177737,
            "pageId": 3025434,
            "visitType": "view",
            "createdAt": "2024-04-06T04:37:28.884Z",
            "updatedAt": "2024-04-09T10:19:29.515Z"
          },
          {
            "userId": 177737,
            "pageId": 2336657,
            "visitType": "edit",
            "createdAt": "2023-08-23T15:40:14.653Z",
            "updatedAt": "2024-04-02T22:49:09.619Z"
          },
          {
            "userId": 177737,
            "pageId": 2981980,
            "visitType": "edit",
            "createdAt": "2024-03-23T13:45:40.262Z",
            "updatedAt": "2024-03-23T13:46:36.616Z"
          },
          {
            "userId": 177737,
            "pageId": 2981973,
            "visitType": "edit",
            "createdAt": "2024-03-23T13:44:28.125Z",
            "updatedAt": "2024-03-23T13:44:59.078Z"
          },
          {
            "userId": 177737,
            "pageId": 566720,
            "visitType": "view",
            "createdAt": "2023-06-16T23:17:42.921Z",
            "updatedAt": "2023-12-25T00:37:08.930Z"
          },
          {
            "userId": 177737,
            "pageId": 2222446,
            "visitType": "view",
            "createdAt": "2023-07-08T13:56:28.617Z",
            "updatedAt": "2023-12-24T13:50:17.810Z"
          },
          {
            "userId": 177737,
            "pageId": 2384493,
            "visitType": "edit",
            "createdAt": "2023-09-10T08:27:44.255Z",
            "updatedAt": "2023-09-10T08:28:50.055Z"
          },
          {
            "userId": 177737,
            "pageId": 2117659,
            "visitType": "view",
            "createdAt": "2023-05-28T06:35:00.797Z",
            "updatedAt": "2023-08-25T06:42:11.461Z"
          },
          {
            "userId": 177737,
            "pageId": 2335340,
            "visitType": "edit",
            "createdAt": "2023-08-23T07:34:09.293Z",
            "updatedAt": "2023-08-23T07:34:20.679Z"
          },
          {
            "userId": 177737,
            "pageId": 2335328,
            "visitType": "edit",
            "createdAt": "2023-08-23T07:28:50.218Z",
            "updatedAt": "2023-08-23T07:28:52.279Z"
          },
          {
            "userId": 177737,
            "pageId": 2305819,
            "visitType": "view",
            "createdAt": "2023-08-11T14:34:00.129Z",
            "updatedAt": "2023-08-11T14:34:05.329Z"
          },
          {
            "userId": 177737,
            "pageId": 2290185,
            "visitType": "edit",
            "createdAt": "2023-08-05T10:54:01.044Z",
            "updatedAt": "2023-08-11T13:09:07.420Z"
          },
          {
            "userId": 177737,
            "pageId": 566722,
            "visitType": "view",
            "createdAt": "2023-05-28T06:34:08.206Z",
            "updatedAt": "2023-08-08T23:43:43.383Z"
          },
          {
            "userId": 177737,
            "pageId": 2196634,
            "visitType": "view",
            "createdAt": "2023-06-26T15:19:51.541Z",
            "updatedAt": "2023-08-05T14:26:05.519Z"
          },
          {
            "userId": 177737,
            "pageId": 566721,
            "visitType": "edit",
            "createdAt": "2023-06-29T11:13:48.288Z",
            "updatedAt": "2023-06-29T11:14:03.042Z"
          }
        ],
        "permissions": {
          "resourceViewer": true,
          "buildR2AppsAccess": true,
          "usageAnalyticsAccess": true,
          "creator": true,
          "workflowEditor": true,
          "auditLogAccess": true,
          "themeAccess": true,
          "editor": true,
          "userListAccess": true,
          "universalWorkflowAccess": "own",
          "canAccessOrSetupRetoolDB": true,
          "admin": true,
          "workflowViewer": true,
          "viewAssistAccess": true,
          "agentEditor": true,
          "appViewer": true,
          "retoolOsAccess": false,
          "unpublishedReleaseAccess": true,
          "editAssistAccess": true,
          "agentViewer": true,
          "queryLibraryAccess": "write",
          "draftAppsAccess": true,
          "accountDetailsAccess": true,
          "resourceEditor": true,
          "universalResourceAccess": "own",
          "resourceCreator": true,
          "universalAgentAccess": "own"
        },
        "userType": null,
        "salesCTADismissed": false,
        "profilePhotoUrl": "https://lh3.googleusercontent.com/a/ACg8ocKKvTMAi9X1pGF8xIaEOecBnrmus1pT7f5WElpMGUILpSmyRQ=s96-c",
        "pageFavorites": [
          2673612
        ],
        "folderFavorites": [],
        "passwordExpiresAt": null,
        "requestedSeatType": null,
        "sid": "user_5dba4851e18b4fea85e18cc9eea0bbbe",
        "organizationId": 117894,
        "hasGoogleId": true,
        "updatedAt": "2026-09-27T03:26:38.445Z",
        "emailIsVerified": true,
        "ipCountry": "AU",
        "metadata": {},
        "organization": {
          "securityContact": null,
          "retoolFormsDisabled": null,
          "sourceControlEmailAlertingEnabled": true,
          "customSSOSettings": null,
          "enabled": null,
          "billingCardholderName": null,
          "retoolDBStorageLimitBytes": null,
          "inCanaryGroup": false,
          "twoFactorAuthRequired": null,
          "protectedGitHubRepo": null,
          "defaultR2ThemeId": null,
          "rrSettings": {},
          "cacheQueriesPerUser": null,
          "defaultAppThemeId": null,
          "environmentVariables": {
            "htmlEscapeRetoolExpressions": false,
            "hideProdAndStagingToggles": false,
            "enableClientSideCustomAuthBrowserCalls": false,
            "enableCustomPlatformLevelAuthSteps": false,
            "enableCookieForwardingForResources": false,
            "customOAuth2SSOEnabled": false,
            "resourceTypesDenyList": [
              "vertica"
            ]
          },
          "themeId": null,
          "domain": null,
          "permissionsV2MigrationRolledBackAt": null,
          "planId": 84,
          "subdomain": "peterjaberau",
          "requireBillingInfo": null,
          "externalAppsEnabled": false,
          "billingCardholderEmail": null,
          "stripeSubscriptionId": null,
          "hideEnvironmentToggle": null,
          "localPermissionsManagementEnabled": null,
          "defaultOutboundRegion": null,
          "protectedGitBranch": null,
          "twoFactorAuthSettings": null,
          "stripeCustomerId": null,
          "annualSubscriptionDetails": null,
          "isInBillingCompliance": true,
          "billingCardLastFour": null,
          "permissionsV2MigrationRetryRequestedAt": null,
          "isReferral": null,
          "billingCardExpirationDate": null,
          "companyName": "",
          "contactNumber": "",
          "retoolDBRowLimit": null,
          "jitDefaultSeatType": null,
          "isCloudSpacesReady": null,
          "name": "peterjaberau@gmail.com",
          "auditLogSettings": null,
          "assistSettings": null,
          "javaScriptLinks": [],
          "jitEnabled": null,
          "protectedGitHubBaseUrl": null,
          "stripeCurrentPeriodEnd": null,
          "sid": "org_998704e2fd834300ad3d4125b49f97d8",
          "verificationIsRequiredForInvite": false,
          "updatedAt": "2026-09-22T20:42:59.873Z",
          "platformLevelAuthSteps": null,
          "onpremStripeSubscriptionId": null,
          "requestAccessEnabled": null,
          "retoolDBQueryRateLimitRequestsPerMinute": null,
          "retoolosSettings": null,
          "internalDomains": null,
          "applyPreloadedCSSToHomepage": false,
          "protectedGitHubOrg": null,
          "hostname": null,
          "idpMetadataXML": null,
          "gitBranch": null,
          "workflowRunRetentionPeriodMins": null,
          "permissionsV2MigrationLastFailedAt": null,
          "retoolStorageOwnFilesOnlyEnabled": null,
          "preloadedJavaScript": null,
          "billingType": null,
          "parentOrgId": null,
          "assistBetaTermsAccepted": null,
          "stripeCurrentPeriodStart": null,
          "releaseManagementEnabled": true,
          "trialExpiryDate": null,
          "cloudPasswordlessLoginIsEnabled": false,
          "hasAutoMigratedNamedSeats": null,
          "customSSOType": null,
          "trialPlanId": null,
          "isCompanyAccount": false,
          "trialAdditionalFeatures": null,
          "onpremStripePlanId": null,
          "preloadedCSS": null,
          "onboardingStagesCompleted": [
            "resource",
            "application"
          ],
          "id": 117894,
          "createdAt": "2021-09-24T18:31:56.895Z",
          "protectedGitCommit": null,
          "aiSupportBotDisabled": null,
          "licenseVerification": null,
          "billingCardBrand": null,
          "gitUrl": null,
          "protectedGitHubEnterpriseUrl": null,
          "permissionsV2CustomGroupsMigrated": false
        },
        "groups": [
          {
            "universalQueryLibraryAccess": "write",
            "universalProcessAccess": "own",
            "usageAnalyticsAccess": null,
            "name": "admin",
            "auditLogAccess": true,
            "themeAccess": null,
            "userListAccess": true,
            "universalWorkflowAccess": "own",
            "organizationId": 117894,
            "universalAccess": "own",
            "userGroup": {
              "id": 347558,
              "userId": 177737,
              "groupId": 473690,
              "isAdmin": false,
              "createdAt": "2021-09-24T18:31:57.658Z",
              "updatedAt": "2021-09-24T18:31:57.658Z"
            },
            "workspace": null,
            "archivedAt": null,
            "unpublishedReleaseAccess": true,
            "draftAppsAccess": true,
            "accountDetailsAccess": true,
            "id": 473690,
            "universalResourceAccess": "own",
            "universalAgentAccess": "own"
          },
          {
            "universalQueryLibraryAccess": "write",
            "universalProcessAccess": "write",
            "usageAnalyticsAccess": null,
            "name": "All Users",
            "auditLogAccess": false,
            "themeAccess": null,
            "userListAccess": true,
            "universalWorkflowAccess": "write",
            "organizationId": 117894,
            "universalAccess": "write",
            "userGroup": {
              "id": 347557,
              "userId": 177737,
              "groupId": 473693,
              "isAdmin": false,
              "createdAt": "2021-09-24T18:31:57.652Z",
              "updatedAt": "2021-09-24T18:31:57.652Z"
            },
            "workspace": null,
            "archivedAt": null,
            "unpublishedReleaseAccess": true,
            "draftAppsAccess": true,
            "accountDetailsAccess": true,
            "id": 473693,
            "universalResourceAccess": "own",
            "universalAgentAccess": "write"
          }
        ],
        "externalIdentifier": null,
        "roleScopes": [
          "account_details:manage",
          "user_list:view",
          "query_library:edit",
          "query_library:view",
          "unpublished_release:access",
          "draft_apps:manage",
          "assist:view",
          "assist:edit",
          "retool_react_apps:edit",
          "universal_apps_access:view",
          "universal_apps_access:edit",
          "universal_resources_access:view",
          "universal_resources_access:edit",
          "universal_resources_access:own",
          "universal_workflows_access:view",
          "universal_workflows_access:edit",
          "universal_agents_access:view",
          "universal_agents_access:edit",
          "universal_apps_access:own",
          "universal_workflows_access:own",
          "universal_agents_access:own",
          "universal_backend_functions_access:view",
          "universal_backend_functions_access:edit",
          "universal_backend_functions_access:own"
        ],
        "userName": null,
        "tutorialCTADismissed": false,
        "twoFactorAuthSetupRequired": "none",
        "id": 177737,
        "createdAt": "2021-09-24T18:31:57.640Z",
        "firstName": "Peter",
        "lastActive": "2026-09-27T03:26:38.441Z",
        "email": "peterjaberau@gmail.com",
        "lastLoggedIn": "2026-09-27T03:24:16.640Z",
        "twoFactorAuthEnabled": null,
        "seatType": "builder"
      },
      "id": 526615652,
      "published": false,
      "title": "Added plugin select1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-27T03:33:22.616Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526615637,
      "published": false,
      "title": "Deleted plugin keyValue1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-27T03:32:51.134Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526615634,
      "published": false,
      "title": "Added plugin keyValue1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T15:41:52.995Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526159695,
      "published": false,
      "title": "Modified plugin QUERY_WORKFLOW_FROM_API"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T15:41:28.012Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526159690,
      "published": false,
      "title": "Modified plugin query1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T15:41:20.678Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526159689,
      "published": false,
      "title": "Modified plugin query1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T15:41:12.460Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526159686,
      "published": false,
      "title": "Modified plugin query1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T15:39:30.305Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526159660,
      "published": false,
      "title": "Added plugin query1"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T13:45:01.805Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526158070,
      "published": false,
      "title": "Modified plugin QUERY_WORKFLOW_TEMPLATES"
    },
    {
      "isCopilotGenerated": false,
      "createdAt": "2026-09-20T13:38:58.083Z",
      "users": [
        {
          "id": 177737,
          "firstName": "Peter",
          "lastName": "Jaber",
          "email": "peterjaberau@gmail.com"
        }
      ],
      "user": {
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "email": "peterjaberau@gmail.com"
      },
      "id": 526157950,
      "published": false,
      "title": "Modified plugin QUERY_WORKFLOW_TEMPLATES"
    }
  ]
}


export const EditorStatePanel = {
  "appModel": {
    "Main": {
      "pluginType": "Screen",
      "title": "Page 1",
      "browserTitle": "",
      "urlSlug": "",
      "_order": 0,
      "id": "Main"
    },
    "$main": {
      "pluginType": "Frame",
      "type": "main",
      "padding": "8px 12px",
      "enableFullBleed": false,
      "isHiddenOnDesktop": false,
      "isHiddenOnMobile": false,
      "id": "$main",
      "_desktopMargin": "",
      "_mobileMargin": ""
    },
    "QUERY_WORKFLOW_TEMPLATES": {
      "pluginType": "WorkflowRun",
      "queryRefreshTime": "",
      "streamResponse": false,
      "lastReceivedFromResourceAt": null,
      "isFunction": false,
      "functionParameters": null,
      "queryDisabledMessage": "",
      "servedFromCache": false,
      "offlineUserQueryInputs": "",
      "functionDescription": null,
      "successMessage": "",
      "queryDisabled": "",
      "playgroundQuerySaveId": "latest",
      "workflowParams": [
        {
          "key": "wait",
          "value": "0"
        }
      ],
      "resourceNameOverride": "",
      "runWhenModelUpdates": false,
      "workflowRunExecutionType": "sync",
      "showFailureToaster": true,
      "query": "",
      "playgroundQueryUuid": "",
      "playgroundQueryId": null,
      "error": null,
      "workflowRunBodyType": "json",
      "queryRunOnSelectorUpdate": false,
      "runWhenPageLoadsDelay": "",
      "data": null,
      "isImported": false,
      "showSuccessToaster": false,
      "cacheKeyTtl": "",
      "requestSentTimestamp": null,
      "metadata": null,
      "queryRunTime": null,
      "changesetObject": "",
      "offlineOptimisticResponse": null,
      "errorTransformer": "return data.error",
      "finished": null,
      "confirmationMessage": null,
      "isFetching": false,
      "changeset": "",
      "rawData": null,
      "queryTriggerDelay": 0,
      "resourceTypeOverride": null,
      "enableErrorTransformer": false,
      "showLatestVersionUpdatedWarning": false,
      "timestamp": 0,
      "enableTransformer": true,
      "showUpdateSetValueDynamicallyToggle": true,
      "overrideOrgCacheForUserCache": false,
      "runWhenPageLoads": false,
      "transformer": "return data",
      "events": {
        "0": {
          "method": null,
          "targetId": null,
          "pluginId": "",
          "waitType": "debounce",
          "event": "success",
          "type": "state",
          "id": "4c0c24c2",
          "waitMs": 0
        }
      },
      "isMultiplayerEdited": false,
      "queryTimeout": 10000,
      "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
      "requireConfirmation": false,
      "queryFailureConditions": "",
      "id": "QUERY_WORKFLOW_TEMPLATES",
      "changesetIsObject": false,
      "enableCaching": false,
      "offlineQueryType": "None",
      "queryThrottleTime": 750,
      "updateSetValueDynamically": false,
      "notificationDuration": 4.5
    },
    "tbl_workflow_templates": {
      "pluginType": "TableWidget2",
      "selectedRowKey": null,
      "_nextAfterCursor": "",
      "_columnIds": {
        "0": "f7ed5",
        "1": "6462c",
        "2": "92a5e",
        "3": "eb34b",
        "4": "f950e"
      },
      "data": [],
      "_columnKey": {
        "f7ed5": "id",
        "6462c": "name",
        "92a5e": "description",
        "eb34b": "resources",
        "f950e": "category"
      },
      "searchTerm": "",
      "_serverPaginated": false,
      "searchMode": "disabled",
      "_serverPaginationType": "limitOffsetBased",
      "_defaultSort": null,
      "_columnReferenceId": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "sortArray": [],
      "_defaultSelectedRow": {
        "mode": "index",
        "indexType": "display",
        "index": 0
      },
      "_disabledVirtualization": true,
      "_columnValueOverride": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": []
      },
      "_columnBackgroundColor": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_columnSearchMode": {
        "f7ed5": "default",
        "6462c": "default",
        "92a5e": "default",
        "eb34b": "default",
        "f950e": "default"
      },
      "_columnAlternateRowBackgroundColor": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_clearChangesetOnSave": true,
      "heightType": "fixed",
      "_columnTextColor": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "disableEdits": false,
      "autoColumnWidth": false,
      "_rowHeight": "",
      "_isSaving": false,
      "_headerTextWrap": false,
      "_clearChangeset": false,
      "caseSensitiveFiltering": false,
      "_limitOffsetRowCount": null,
      "selectedSourceRow": null,
      "_dynamicColumnsEnabled": false,
      "disableSave": false,
      "_columnEditableOptions": {
        "f7ed5": {
          "spellCheck": false
        },
        "6462c": {
          "spellCheck": false
        },
        "92a5e": {
          "spellCheck": false
        }
      },
      "_toolbarPosition": "bottom",
      "_toolbarButtonLabel": {
        "1a": "Filter",
        "3c": "Download",
        "4d": "Refresh"
      },
      "_nextBeforeCursor": "",
      "_persistRowSelection": false,
      "_toolbarButtonIcon": {
        "1a": "bold/interface-text-formatting-filter-2",
        "3c": "bold/interface-download-button-2",
        "4d": "bold/interface-arrows-round-left"
      },
      "changesetArray": [],
      "groupByColumns": [],
      "_toolbarButtonType": {
        "1a": "filter",
        "3c": "custom",
        "4d": "custom"
      },
      "_showBorder": true,
      "_templatePageSize": null,
      "_dynamicColumnSource": [],
      "_showHeader": true,
      "_calculatedPageSize": 13,
      "_pageSize": 13,
      "_currentPage": 0,
      "overflowActionsOverlayMinWidth": null,
      "_actionsOverflowPosition": 0,
      "hidden": false,
      "_toolbarButtonIds": {
        "0": "1a",
        "1": "3c",
        "2": "4d"
      },
      "columnOrdering": [
        "f7ed5",
        "6462c",
        "92a5e",
        "eb34b",
        "f950e"
      ],
      "_cellSelection": "none",
      "_linkedFilterId": "",
      "margin": "4px 8px",
      "_desktopMargin": "4px 8px",
      "_columnCellTooltip": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_columnFormat": {
        "f7ed5": "string",
        "6462c": "string",
        "92a5e": "string",
        "eb34b": "tags",
        "f950e": "tag"
      },
      "_cursorCache": {},
      "_primaryKeyColumnId": "f7ed5",
      "selectedDataIndex": null,
      "_columnAlignment": {
        "f7ed5": "left",
        "6462c": "left",
        "92a5e": "left",
        "eb34b": "left",
        "f950e": "left"
      },
      "_columnTooltip": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_columnIcon": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_alwaysShowRowSelectionCheckboxes": false,
      "_columnCellTooltipMode": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "overflow",
        "f950e": ""
      },
      "showInEditor": false,
      "_isAddingNewRows": false,
      "selectedSourceRows": [],
      "_enableExpandableRows": false,
      "_selectMultipleRowsOnActionClick": "no",
      "_mobileMargin": "4px 8px",
      "_columnSortDisabled": {
        "f7ed5": false,
        "6462c": false,
        "92a5e": false,
        "eb34b": false,
        "f950e": false
      },
      "_showSummaryRow": false,
      "_defaultFilterOperator": "and",
      "_expandedRows": {},
      "changesetObject": null,
      "_rowSelection": "single",
      "_columnCaption": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_dynamicRowHeights": false,
      "_columnFormatOptions": {
        "eb34b": {
          "automaticColors": true
        },
        "f950e": {
          "automaticColors": true
        }
      },
      "_changeset": null,
      "_afterCursor": "",
      "_columnHeaderBackgroundColor": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "selectedRowKeys": [],
      "_columnHeaderTextColor": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_beforeCursor": "",
      "_columnSummaryAggregationMode": {
        "f7ed5": "none",
        "6462c": "none",
        "92a5e": "none",
        "eb34b": "none",
        "f950e": "none"
      },
      "selectedRows": [],
      "_expandedRowDataIndexes": [
        0
      ],
      "_showColumnBorders": false,
      "overflowActionsOverlayMaxHeight": null,
      "_columnSize": {
        "f7ed5": 100,
        "6462c": 100,
        "92a5e": 100,
        "eb34b": 100,
        "f950e": 100
      },
      "_columnSortMode": {
        "f7ed5": "default",
        "6462c": "default",
        "92a5e": "default",
        "eb34b": "default",
        "f950e": "default"
      },
      "_selectSingleRowsOnActionClick": "replace",
      "_showFooter": true,
      "_alwaysShowScrollbars": false,
      "_toolbarButtonHidden": {
        "1a": "",
        "3c": "",
        "4d": ""
      },
      "events": {
        "0": {
          "method": "trigger",
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "selectRow",
          "type": "datasource",
          "id": "7143129e",
          "waitMs": 0
        },
        "1": {
          "id": "be7ab122",
          "type": "widget",
          "waitMs": 0,
          "waitType": "debounce",
          "event": "clickToolbar",
          "method": "exportData",
          "pluginId": "tbl_workflow_templates",
          "targetId": "3c"
        },
        "2": {
          "id": "68f733d8",
          "type": "widget",
          "waitMs": 0,
          "waitType": "debounce",
          "event": "clickToolbar",
          "method": "refresh",
          "pluginId": "tbl_workflow_templates",
          "targetId": "4d"
        }
      },
      "_columnEditable": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "newRows": [],
      "_rowBackgroundColor": [],
      "emptyMessage": "No rows found",
      "pagination": null,
      "selectedDataIndexes": [],
      "_columnEditableInNewRows": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "id": "tbl_workflow_templates",
      "_columnGroupAggregationMode": {
        "f7ed5": "none",
        "6462c": "none",
        "92a5e": "none",
        "eb34b": "none",
        "f950e": "none"
      },
      "_selectedCell": null,
      "overflowType": "scroll",
      "selectedCell": null,
      "_hasNextPage": true,
      "_includeRowInChangesetArray": false,
      "_columnPosition": {
        "f7ed5": "center",
        "6462c": "center",
        "92a5e": "center",
        "eb34b": "center",
        "f950e": "center"
      },
      "_enableSaveActions": true,
      "_columnPlaceholder": {
        "f7ed5": "Enter value",
        "6462c": "Enter value",
        "92a5e": "Enter value",
        "eb34b": "Select options",
        "f950e": "Select option"
      },
      "selectedRow": null,
      "maintainSpaceWhenHidden": false,
      "_columnHidden": {
        "f7ed5": "",
        "6462c": "",
        "92a5e": "",
        "eb34b": "",
        "f950e": ""
      },
      "_columnLabel": {
        "f7ed5": "ID",
        "6462c": "Name",
        "92a5e": "Description",
        "eb34b": "Resources",
        "f950e": "Category"
      },
      "_showToolbar": true
    },
    "btn_load_workflow_templates": {
      "pluginType": "ButtonWidget2",
      "heightType": "fixed",
      "horizontalAlign": "stretch",
      "events": {
        "0": {
          "method": "reset",
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "click",
          "type": "datasource",
          "id": "7183814b",
          "waitMs": 0
        },
        "1": {
          "method": "trigger",
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "click",
          "type": "datasource",
          "id": 83354339,
          "waitMs": 0
        }
      },
      "submit": false,
      "submitTargetId": "",
      "disabled": false,
      "clickable": true,
      "iconAfter": "",
      "hidden": false,
      "margin": "4px 8px",
      "_desktopMargin": "4px 8px",
      "ariaLabel": "",
      "text": "Load Workflow Templates",
      "showInEditor": false,
      "_mobileMargin": "4px 8px",
      "tooltipText": "",
      "allowWrap": true,
      "styleVariant": "solid",
      "iconBefore": "",
      "id": "btn_load_workflow_templates",
      "loading": false,
      "loaderPosition": "auto",
      "maintainSpaceWhenHidden": false
    },
    "var_mainPage": {
      "pluginType": "State",
      "value": {
        "isPageLoaded": false,
        "isWorkflowTemplateLoaded": false
      },
      "id": "var_mainPage",
      "_desktopMargin": "",
      "_mobileMargin": ""
    },
    "btn_load_workflow_templates2": {
      "pluginType": "ButtonWidget2",
      "heightType": "fixed",
      "horizontalAlign": "stretch",
      "events": {
        "0": {
          "method": "trigger",
          "params": {
            "options": {
              "onSuccess": null,
              "onFailure": null,
              "additionalScope": null
            }
          },
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "click",
          "type": "datasource",
          "id": "7183814b",
          "waitMs": 0
        }
      },
      "submit": false,
      "submitTargetId": "",
      "disabled": false,
      "clickable": true,
      "iconAfter": "",
      "hidden": false,
      "margin": "4px 8px",
      "_desktopMargin": "4px 8px",
      "ariaLabel": "",
      "text": "Reset",
      "showInEditor": false,
      "_mobileMargin": "4px 8px",
      "tooltipText": "",
      "allowWrap": true,
      "styleVariant": "solid",
      "iconBefore": "",
      "id": "btn_load_workflow_templates2",
      "loading": false,
      "loaderPosition": "auto",
      "maintainSpaceWhenHidden": false
    },
    "QUERY_WORKFLOW_FROM_API": {
      "pluginType": "RESTQuery",
      "queryRefreshTime": "",
      "paginationLimit": "",
      "openAPIRequestBody": "",
      "streamResponse": false,
      "body": "",
      "lastReceivedFromResourceAt": 1790491274010,
      "isFunction": false,
      "functionParameters": null,
      "queryDisabledMessage": "",
      "servedFromCache": false,
      "openAPIResolvedSpec": "",
      "offlineUserQueryInputs": "",
      "functionDescription": null,
      "successMessage": "",
      "queryDisabled": "",
      "playgroundQuerySaveId": "latest",
      "workflowParams": null,
      "resourceNameOverride": "",
      "runWhenModelUpdates": true,
      "paginationPaginationField": "",
      "workflowRunExecutionType": "sync",
      "headers": [
        {
          "key": "X-Workflow-Api-Key",
          "value": "retool_wk_6b14e4268ad34789aebffbd69a2ba896"
        }
      ],
      "showFailureToaster": true,
      "paginationEnabled": false,
      "query": "https://peterjaberau.retool.com/url/run-workflow",
      "playgroundQueryUuid": "",
      "playgroundQueryId": null,
      "error": null,
      "workflowRunBodyType": "raw",
      "queryRunOnSelectorUpdate": false,
      "runWhenPageLoadsDelay": "",
      "cookies": "",
      "openAPIParams": {},
      "isImported": false,
      "showSuccessToaster": true,
      "cacheKeyTtl": "",
      "requestSentTimestamp": null,
      "metadata": {
        "request": {
          "url": "https://peterjaberau.retool.com/url/run-workflow",
          "method": "GET",
          "headers": {
            "User-Agent": "Retool/2.0 (+https://docs.tryretool.com/docs/apis)",
            "X-Workflow-Api-Key": "---sanitized---",
            "ot-baggage-requestId": "undefined",
            "x-datadog-trace-id": "5774541000432047676",
            "x-datadog-parent-id": "2724258915019921156",
            "x-datadog-sampling-priority": "1",
            "x-datadog-tags": "_dd.p.tid=6ab8ba8800000000,_dd.p.ksr=1,_dd.p.dm=-1",
            "traceparent": "00-19c6495629d856023f7d661e93425f0b-7d29a84c8050e8e3-01",
            "X-Retool-Forwarded-For": "124.171.151.176"
          },
          "body": null
        },
        "headers": {
          "access-control-allow-origin": [
            "*"
          ],
          "cache-control": [
            "private"
          ],
          "cf-cache-status": [
            "BYPASS"
          ],
          "cf-ray": [
            "a41885790d070d10-PDX"
          ],
          "content-encoding": [
            "gzip"
          ],
          "content-type": [
            "application/json; charset=utf-8"
          ],
          "cross-origin-opener-policy": [
            "same-origin-allow-popups"
          ],
          "date": [
            "Sun, 27 Sep 2026 06:41:14 GMT"
          ],
          "etag": [
            "W/\"4145-gsgT06eL9cFMf4ZITiJNrrsFHOY\""
          ],
          "referrer-policy": [
            "no-referrer-when-downgrade"
          ],
          "server": [
            "cloudflare"
          ],
          "set-cookie": [
            "_cfuvid=PKWL3JK8hyfgpoLRxCN27Gd5X3lDBed3yYZprN0915Y-1790491273.1210692-1.0.1.1-VIdgrXHHiKppjjlOFNYLUxym6DorRIZdkVa9.pIcg2M; HttpOnly; SameSite=None; Secure; Path=/; Domain=retool.com"
          ],
          "strict-transport-security": [
            "max-age=31536000; includeSubDomains"
          ],
          "vary": [
            "Accept-Encoding"
          ],
          "x-content-type-options": [
            "nosniff"
          ],
          "x-request-id": [
            "1e9fcf6744547c42f0f5286400a45e5b"
          ],
          "x-retool-api-version": [
            "4.65.0-01ca5ad (Build 390092)"
          ],
          "x-user-status-code": [
            "200"
          ]
        },
        "status": 200,
        "statusText": "OK"
      },
      "queryRunTime": 1663,
      "changesetObject": "",
      "offlineOptimisticResponse": null,
      "errorTransformer": "return data.error",
      "finished": 1790491274095,
      "confirmationMessage": null,
      "isFetching": false,
      "changeset": "",
      "openAPIOperationId": "",
      "rawData": [
        {
          "id": "postgresToSlack",
          "name": "Postgres to Slack",
          "description": "Get slack messages on new custom query matches",
          "resources": [
            "postgresql",
            "slackopenapi"
          ],
          "category": "Notifications"
        },
        {
          "id": "googleAnalyticsToBigQuery",
          "name": "Google Analytics to BigQuery",
          "description": "Send Google Analytics data to BigQuery",
          "resources": [
            "googleAnalytics",
            "bigquery"
          ],
          "category": "ETL"
        },
        {
          "id": "githubToPostgres",
          "name": "GitHub to Postgres",
          "description": "Send GitHub repository information to Postgres",
          "resources": [
            "github",
            "postgresql"
          ],
          "category": "APIs"
        },
        {
          "id": "githubToSlack",
          "name": "GitHub to Slack",
          "description": "Query GitHub repository information with GraphQL and send to Slack",
          "resources": [
            "github",
            "slackopenapi"
          ],
          "category": "Notifications"
        },
        {
          "id": "postgresToGSheets",
          "name": "Postgres to Google Sheets",
          "description": "Append Postgres row data to Google Sheets",
          "resources": [
            "postgresql",
            "googlesheets"
          ],
          "category": "ETL"
        },
        {
          "id": "fullStoryAlertHandler",
          "name": "FullStory Alerts to Slack",
          "description": "Process FullStory alerts and send to Slack",
          "resources": [
            "restapi",
            "slackopenapi"
          ],
          "category": "APIs"
        },
        {
          "id": "pythonChartingAPI",
          "name": "Python Charting API",
          "category": "APIs",
          "resources": [
            "python"
          ],
          "description": "Create an API using pandas and seaborn for dynamic data processing and chart generation"
        },
        {
          "id": "updateDataInGoogleSheetsFromNewWebhookPostRequest",
          "description": "Update data in Google Sheets from new webhook POST request",
          "resources": [
            "googlesheets",
            "restapi"
          ],
          "category": "APIs",
          "name": "Update data in Google Sheets from new webhook POST request"
        },
        {
          "id": "sendSlackWhenGoogleSheetsRowUpdated",
          "description": "Send a Slack notification when a Google Sheets row is updated",
          "resources": [
            "googlesheets",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack When Google Sheets Row Updated"
        },
        {
          "id": "send-slack-message-when-google-sheet-rows-added",
          "description": "Send a Slack message when a Google Sheet row is added",
          "resources": [
            "googlesheets",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack Message When Google Sheet Rows Added"
        },
        {
          "id": "send-slack-message-when-google-sheets-rows-updated",
          "description": "Send a Slack Message When a Google Sheets Row is Updated",
          "resources": [
            "slackopenapi",
            "googlesheets"
          ],
          "category": "Notifications",
          "name": "Send Slack Message When Google Sheets Rows Updated"
        },
        {
          "id": "update-data-to-google-sheet-from-webhook-post-request",
          "description": "Update data to Google Sheets from a new Webhook POST request",
          "resources": [
            "googlesheets"
          ],
          "category": "APIs",
          "name": "Update Data to Google Sheet from Webhook POST request"
        },
        {
          "id": "add-data-to-google-sheets-from-new-webhook-post-request",
          "description": "Add Data to Google Sheets from a new Webhook POST request",
          "resources": [
            "googlesheets"
          ],
          "category": "APIs",
          "name": "Add Data to Google Sheets from new Webhook POST request"
        },
        {
          "id": "send-slack-on-new-custom-query-matches-in-google-sheets",
          "description": "Send a Slack notification on new custom query matches in Google Sheets",
          "resources": [
            "slackopenapi",
            "googlesheets"
          ],
          "category": "Notifications",
          "name": "Send Slack on new Custom Query Matches in Google Sheets"
        },
        {
          "id": "send-slack-message-lead-converts-in-salesforce",
          "description": "Send a Slack message when a lead converts in Salesforce",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack Message Lead Converts in Salesforce"
        },
        {
          "id": "send-slack-message-new-salesforce-cases",
          "description": "Send a Slack message fo a new Salesforce case",
          "resources": [
            "slackopenapi",
            "salesforce"
          ],
          "category": "Notifications",
          "name": "Send Slack Message New Salesforce Cases"
        },
        {
          "id": "supportResponseTimeReport",
          "description": "Support response time report",
          "resources": [
            "alloydb",
            "asana",
            "athena"
          ],
          "category": "APIs",
          "name": "Support Response Time Report"
        },
        {
          "id": "notify-slack-when-salesforce-opportunity-is-closed-won",
          "description": "Notify Slack when a Salesforce opportunity is marked as Closed Won",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Cron Jobs",
          "name": "Notify Slack when Salesforce opportunity is Closed Won"
        },
        {
          "id": "append-postgres-rows-to-google-sheets",
          "description": "Append new Postgres rows to Google Sheets",
          "resources": [
            "postgresql",
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Append Postgres Rows to Google Sheets"
        },
        {
          "id": "create-hubspot-contact-for-new-google-sheets-rows",
          "description": "Create a new Hubspot Contact when a Google Sheets row is added",
          "resources": [
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Create Hubspot contact for new Google Sheets rows"
        },
        {
          "id": "add-typeform-responses-to-google-sheets",
          "description": "Add new Typeform responses to Google Sheets",
          "resources": [
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Add Typeform responses to Google Sheets"
        },
        {
          "id": "summarize-google-sheets-and-send-via-smtp",
          "description": "Summarize Google Sheets data and send it via SMTP",
          "resources": [
            "googlesheets",
            "smtp"
          ],
          "category": "Cron Jobs",
          "name": "Summarize Google Sheets and send via SMTP"
        },
        {
          "id": "send-github-repo-to-slack",
          "description": "Send Github repository query results to Slack",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send Github repo to Slack"
        },
        {
          "id": "add-new-git-hub-issues-to-asana",
          "description": "Add new GitHub issues to Asana as tasks",
          "resources": [
            "asana",
            "github"
          ],
          "category": "APIs",
          "name": "Add new GitHub issues to Asana"
        },
        {
          "id": "send-new-git-hub-commits-to-slack",
          "description": "Send new Github commits to Slack as messages",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send new GitHub commits to Slack"
        },
        {
          "id": "send-github-mentions-to-slack",
          "description": "Send new Github mentions to Slack as messages",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send Github mentions to Slack"
        },
        {
          "id": "sync-salesforce-to-postgres",
          "description": "Sync Salesforce account data to Postgres",
          "resources": [
            "salesforce",
            "postgresql"
          ],
          "category": "ETL",
          "name": "Sync Salesforce to Postgres"
        },
        {
          "id": "create-salesforce-contacts-from-typeform",
          "description": "Create Salesforce contacts from new Typeform entries",
          "resources": [
            "salesforce",
            "cassandra",
            "closeio",
            "datadog"
          ],
          "category": "APIs",
          "name": "Create Salesforce contacts from Typeform"
        },
        {
          "id": "export-leads-from-google-sheets-to-salesforce",
          "description": "Export leads from Google Sheets to Salesforce",
          "resources": [
            "googlesheets",
            "salesforce"
          ],
          "category": "ETL",
          "name": "Export leads from Google Sheets to Salesforce"
        },
        {
          "id": "enrich-google-form-submissions-and-send-to-salesforce",
          "description": "Enrich Google Form submissions and send to Salesforce",
          "resources": [
            "salesforce"
          ],
          "category": "ETL",
          "name": "Enrich Google Form submissions and send to Salesforce"
        },
        {
          "id": "create-linear-ticket-from-salesforce-feature-request",
          "description": "Create a Linear ticket from a new feature request in Salesforce",
          "resources": [
            "salesforce",
            "gcs",
            "googleMaps",
            "jira"
          ],
          "category": "APIs",
          "name": "Create Linear ticket from Salesforce feature request"
        },
        {
          "id": "webhook-monitor-to-slack-alert",
          "description": "Webhook monitor to Slack alert",
          "resources": [
            "slackopenapi"
          ],
          "category": "APIs",
          "name": "Webhook monitor to Slack alert"
        },
        {
          "id": "create-salesforce-tasks-from-shopify-customers",
          "description": "Create Salesforce tasks from Shopify customers",
          "resources": [
            "salesforce"
          ],
          "category": "APIs",
          "name": "Create Salesforce tasks from Shopify customers"
        },
        {
          "id": "churn-prediction",
          "description": "Identify accounts that are at risk of churn based on product activity",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Churn Prediction"
        },
        {
          "id": "sync-linear-issues-with-trello-cards",
          "description": "Sync Linear issues with Trello cards",
          "resources": [],
          "category": "APIs",
          "name": "Sync Linear issues with Trello cards"
        },
        {
          "id": "send-slack-message-when-linear-ticket-is-assigned",
          "description": "Send a Slack message when Linear ticket is assigned",
          "resources": [
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message when Linear ticket is assigned"
        },
        {
          "id": "weekly-linear-activity-report",
          "description": "Send a weekly report of activity in Linear",
          "resources": [
            "smtp"
          ],
          "category": "Cron Jobs",
          "name": "Weekly Linear activity report"
        },
        {
          "id": "send-slack-message-when-linear-issue-is-closed",
          "description": "Send a Slack message when Linear issue is closed",
          "resources": [
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message when Linear issue is closed"
        },
        {
          "id": "sync-shopify-orders-with-quickbooks",
          "description": "Sync Shopify orders with Quickbooks online",
          "resources": [
            "Shopify"
          ],
          "category": "ETL",
          "name": "Sync Shopify orders with Quickbooks"
        },
        {
          "id": "create-new-shopify-product-from-google-sheets",
          "description": "Create a new Shopify product from a Google Sheets row",
          "resources": [
            "Shopify",
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Create new Shopify product from Google Sheets"
        },
        {
          "id": "send-slack-message-for-high-value-shopify-orders",
          "description": "Send a Slack message when high-value Shopify orders are completed",
          "resources": [
            "Shopify",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message for high-value Shopify orders"
        },
        {
          "id": "location-based-shopify-order-assignment",
          "description": "Assign orders on Shopify based on order location",
          "resources": [
            "Shopify"
          ],
          "category": "ETL",
          "name": "Location-based Shopify order assignment"
        },
        {
          "id": "send-email-for-low-inventory-levels-in-shopify",
          "description": "Send an email notification for low inventory levels in Shopify",
          "resources": [
            "Shopify",
            "smtp"
          ],
          "category": "Notifications",
          "name": "Send email for low inventory levels in Shopify"
        },
        {
          "id": "enrich-airtable-records-with-clearbit",
          "description": "Enrich Airtable records with Clearbit data",
          "resources": [
            "Airtable"
          ],
          "category": "ETL",
          "name": "Enrich Airtable records with Clearbit"
        },
        {
          "id": "send-weekly-airtable-summary-via-email",
          "description": "Send a weekly Airtable base summary via email",
          "resources": [
            "Airtable",
            "smtp"
          ],
          "category": "Notifications",
          "name": "Send Weekly Airtable Summary via Email"
        },
        {
          "id": "send-daily-airtable-summary-in-slack",
          "description": "Send a daily Airtable base activity summary in Slack",
          "resources": [
            "Airtable",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Daily Airtable Summary in Slack"
        },
        {
          "id": "create-trello-cards-from-new-jira-issues",
          "description": "Create Trello cards from new Jira issues",
          "resources": [
            "jira",
            "asana"
          ],
          "category": "APIs",
          "name": "Create Trello cards from new Jira issues"
        },
        {
          "id": "add-typeform-entries-into-airtable",
          "description": "Add new Typeform entries as records in Airtable",
          "resources": [
            "Airtable"
          ],
          "category": "ETL",
          "name": "Add Typeform entries into Airtable"
        },
        {
          "id": "create-trello-cards-from-data-in-airtable",
          "description": "Create Trello cards or lists from data in Airtable",
          "resources": [
            "Airtable",
            "asana"
          ],
          "category": "ETL",
          "name": "Create Trello cards from data in Airtable"
        },
        {
          "id": "sync-api-to-database",
          "description": "Sync API to Retool DB Postgres Database",
          "resources": [
            "Retool DB"
          ],
          "category": "APIs",
          "name": "Sync API to Database"
        },
        {
          "id": "update-database-with-api",
          "description": "Update Retool DB Postgres Database with API",
          "resources": [
            "Retool DB"
          ],
          "category": "APIs",
          "name": "Update Database with API"
        },
        {
          "id": "ai-powered-personalized-newsletter",
          "description": "An AI-powered personalized newsletter",
          "resources": [
            "openapi"
          ],
          "category": "APIs",
          "name": "AI-powered personalized newsletter"
        },
        {
          "id": "ai-powered-changelog",
          "description": "AI-powered Github changelog summary and send to team for review",
          "resources": [
            "github",
            "openapi"
          ],
          "category": "APIs",
          "name": "AI-powered changelog"
        },
        {
          "id": "daily-mrr-notification",
          "description": "Receive daily notifications of your Monthly Recurring Revenue (MRR), providing timely insights into your subscription-based business's financial performance.",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Daily MRR Notification"
        },
        {
          "id": "abandoned-cart-recovery-emails",
          "description": "Recover potentially lost sales by sending targeted emails to customers who have abandoned their shopping carts.",
          "resources": [],
          "category": "ETL",
          "name": "Abandoned Cart Recovery Emails"
        },
        {
          "id": "triage-support-tickets-with-gpt-4",
          "description": "Efficiently manage support tickets by utilizing GPT-4 to categorize and prioritize them, ensuring faster and accurate ticket resolution.",
          "resources": [],
          "category": "APIs",
          "name": "Triage Support Tickets with GPT-4"
        },
        {
          "id": "low-inventory-alerts",
          "description": "Receive timely alerts when inventory levels fall below predefined thresholds, ensuring proactive inventory management and avoiding stockouts.",
          "resources": [],
          "category": "Notifications",
          "name": "Low Inventory Alerts"
        },
        {
          "id": "daily-update-for-new-orders",
          "description": "Get daily updates on new orders, ensuring you stay informed about incoming business and can manage operations effectively.",
          "resources": [],
          "category": "Notifications",
          "name": "Daily Update For New Orders"
        },
        {
          "id": "refund-fulfillment",
          "description": "Efficiently process and manage refunds, ensuring timely and accurate resolution for improved customer satisfaction and operational effectiveness.",
          "resources": [],
          "category": "ETL",
          "name": "Refund Fulfillment"
        },
        {
          "id": "store-performance-reports",
          "description": "Access comprehensive performance reports for your store, providing insights into sales, customer trends, and key metrics to optimize business strategies.",
          "resources": [],
          "category": "ETL",
          "name": "Store Performance Reports"
        },
        {
          "id": "fraudulent-order-notifications",
          "description": "Instantly receive notifications for suspicious orders, helping prevent fraudulent transactions and safeguarding your business and customers.",
          "resources": [],
          "category": "Notifications",
          "name": "Fraudulent Order Notifications"
        },
        {
          "id": "new-customer-follow-up",
          "description": "Initiate follow-up interactions with new customers, fostering engagement and building relationships to enhance customer retention and loyalty.",
          "resources": [],
          "category": "ETL",
          "name": "New Customer Follow Up"
        },
        {
          "id": "customer-loyalty-offer",
          "description": "Create special offers to reward loyal customers, promoting customer retention and strengthening brand engagement for long-term business success.",
          "resources": [],
          "category": "ETL",
          "name": "Customer Loyalty Offer"
        },
        {
          "id": "automatically-re-order-low-stock-items",
          "description": "Automate reordering of low-stock items, ensuring inventory availability and preventing stockouts for seamless business operations.",
          "resources": [],
          "category": "APIs",
          "name": "Automatically Re-Order Low-Stock Items"
        },
        {
          "id": "tag-items-with-shipping-time",
          "description": "Assign shipping time tags to items, providing customers with accurate delivery expectations and enhancing transparency in online shopping experiences.",
          "resources": [],
          "category": "ETL",
          "name": "Tag Items With Shipping Time"
        },
        {
          "id": "weekly-automated-shopify-order-report",
          "description": "Track and analyze Shopify orders with our weekly automated report template. Streamline insights and decision-making by receiving comprehensive sales data every week.",
          "resources": [
            "snowflake",
            "postgresql",
            "graphql"
          ],
          "category": "Notifications",
          "name": "Weekly Automated Shopify Order Report"
        },
        {
          "id": "api-to-sms",
          "description": "Automate SMS notifications using API integration. Streamline communication, send alerts, and engage with personalized text messages seamlessly.",
          "resources": [
            "Retool DB",
            "athena",
            "graphql",
            "restapi"
          ],
          "category": "Notifications",
          "name": "API to SMS"
        },
        {
          "id": "automated-linear-ticket-assignment",
          "description": "Automate ticket distribution. Assign Linear tickets efficiently, enhancing task management and optimizing workflow distribution.",
          "resources": [],
          "category": "APIs",
          "name": "Automated Linear Ticket Assignment"
        },
        {
          "id": "send-github-repo-to-postgres",
          "description": "Send GitHub repository data to a PostgreSQL database, facilitating seamless integration and enabling efficient storage and management of code-related information.",
          "resources": [
            "github",
            "postgresql"
          ],
          "category": "ETL",
          "name": "Send Github Repo to Postgres"
        },
        {
          "id": "sync-google-sheets-rows-to-postgres-database",
          "description": "Synchronize Google Sheets rows with a PostgreSQL database, enabling seamless data transfer and ensuring real-time integration between the two platforms.",
          "resources": [
            "googlesheets",
            "postgresql"
          ],
          "category": "APIs",
          "name": "Sync Google Sheets Rows to Postgres Database"
        },
        {
          "id": "update-data-to-google-sheets-from-new-webhook-post-request",
          "description": "Automatically update Google Sheets with data from new webhook POST requests, ensuring real-time integration and accurate data reflection.",
          "resources": [],
          "category": "APIs",
          "name": "Update Data to Google Sheets from New Webhook POST Request"
        },
        {
          "id": "vector-slack-sync",
          "description": "Sync your Slack conversations with Retool Vectors",
          "resources": [
            "retoolAI",
            "restapi",
            "slackopenapi"
          ],
          "category": "APIs",
          "name": "Vector Slack Sync"
        }
      ],
      "queryTriggerDelay": 0,
      "resourceTypeOverride": "",
      "enableErrorTransformer": false,
      "showLatestVersionUpdatedWarning": false,
      "paginationDataField": "",
      "timestamp": 1790491272568,
      "enableTransformer": false,
      "showUpdateSetValueDynamicallyToggle": true,
      "version": 2,
      "overrideOrgCacheForUserCache": false,
      "runWhenPageLoads": false,
      "transformer": "return data",
      "queryTimeout": 10000,
      "workflowId": null,
      "requireConfirmation": false,
      "type": "GET",
      "queryFailureConditions": "",
      "id": "QUERY_WORKFLOW_FROM_API",
      "changesetIsObject": false,
      "enableCaching": false,
      "bodyType": "none",
      "offlineQueryType": "None",
      "queryThrottleTime": 750,
      "updateSetValueDynamically": false,
      "notificationDuration": "",
      "data": [
        {
          "id": "postgresToSlack",
          "name": "Postgres to Slack",
          "description": "Get slack messages on new custom query matches",
          "resources": [
            "postgresql",
            "slackopenapi"
          ],
          "category": "Notifications"
        },
        {
          "id": "googleAnalyticsToBigQuery",
          "name": "Google Analytics to BigQuery",
          "description": "Send Google Analytics data to BigQuery",
          "resources": [
            "googleAnalytics",
            "bigquery"
          ],
          "category": "ETL"
        },
        {
          "id": "githubToPostgres",
          "name": "GitHub to Postgres",
          "description": "Send GitHub repository information to Postgres",
          "resources": [
            "github",
            "postgresql"
          ],
          "category": "APIs"
        },
        {
          "id": "githubToSlack",
          "name": "GitHub to Slack",
          "description": "Query GitHub repository information with GraphQL and send to Slack",
          "resources": [
            "github",
            "slackopenapi"
          ],
          "category": "Notifications"
        },
        {
          "id": "postgresToGSheets",
          "name": "Postgres to Google Sheets",
          "description": "Append Postgres row data to Google Sheets",
          "resources": [
            "postgresql",
            "googlesheets"
          ],
          "category": "ETL"
        },
        {
          "id": "fullStoryAlertHandler",
          "name": "FullStory Alerts to Slack",
          "description": "Process FullStory alerts and send to Slack",
          "resources": [
            "restapi",
            "slackopenapi"
          ],
          "category": "APIs"
        },
        {
          "id": "pythonChartingAPI",
          "name": "Python Charting API",
          "category": "APIs",
          "resources": [
            "python"
          ],
          "description": "Create an API using pandas and seaborn for dynamic data processing and chart generation"
        },
        {
          "id": "updateDataInGoogleSheetsFromNewWebhookPostRequest",
          "description": "Update data in Google Sheets from new webhook POST request",
          "resources": [
            "googlesheets",
            "restapi"
          ],
          "category": "APIs",
          "name": "Update data in Google Sheets from new webhook POST request"
        },
        {
          "id": "sendSlackWhenGoogleSheetsRowUpdated",
          "description": "Send a Slack notification when a Google Sheets row is updated",
          "resources": [
            "googlesheets",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack When Google Sheets Row Updated"
        },
        {
          "id": "send-slack-message-when-google-sheet-rows-added",
          "description": "Send a Slack message when a Google Sheet row is added",
          "resources": [
            "googlesheets",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack Message When Google Sheet Rows Added"
        },
        {
          "id": "send-slack-message-when-google-sheets-rows-updated",
          "description": "Send a Slack Message When a Google Sheets Row is Updated",
          "resources": [
            "slackopenapi",
            "googlesheets"
          ],
          "category": "Notifications",
          "name": "Send Slack Message When Google Sheets Rows Updated"
        },
        {
          "id": "update-data-to-google-sheet-from-webhook-post-request",
          "description": "Update data to Google Sheets from a new Webhook POST request",
          "resources": [
            "googlesheets"
          ],
          "category": "APIs",
          "name": "Update Data to Google Sheet from Webhook POST request"
        },
        {
          "id": "add-data-to-google-sheets-from-new-webhook-post-request",
          "description": "Add Data to Google Sheets from a new Webhook POST request",
          "resources": [
            "googlesheets"
          ],
          "category": "APIs",
          "name": "Add Data to Google Sheets from new Webhook POST request"
        },
        {
          "id": "send-slack-on-new-custom-query-matches-in-google-sheets",
          "description": "Send a Slack notification on new custom query matches in Google Sheets",
          "resources": [
            "slackopenapi",
            "googlesheets"
          ],
          "category": "Notifications",
          "name": "Send Slack on new Custom Query Matches in Google Sheets"
        },
        {
          "id": "send-slack-message-lead-converts-in-salesforce",
          "description": "Send a Slack message when a lead converts in Salesforce",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack Message Lead Converts in Salesforce"
        },
        {
          "id": "send-slack-message-new-salesforce-cases",
          "description": "Send a Slack message fo a new Salesforce case",
          "resources": [
            "slackopenapi",
            "salesforce"
          ],
          "category": "Notifications",
          "name": "Send Slack Message New Salesforce Cases"
        },
        {
          "id": "supportResponseTimeReport",
          "description": "Support response time report",
          "resources": [
            "alloydb",
            "asana",
            "athena"
          ],
          "category": "APIs",
          "name": "Support Response Time Report"
        },
        {
          "id": "notify-slack-when-salesforce-opportunity-is-closed-won",
          "description": "Notify Slack when a Salesforce opportunity is marked as Closed Won",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Cron Jobs",
          "name": "Notify Slack when Salesforce opportunity is Closed Won"
        },
        {
          "id": "append-postgres-rows-to-google-sheets",
          "description": "Append new Postgres rows to Google Sheets",
          "resources": [
            "postgresql",
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Append Postgres Rows to Google Sheets"
        },
        {
          "id": "create-hubspot-contact-for-new-google-sheets-rows",
          "description": "Create a new Hubspot Contact when a Google Sheets row is added",
          "resources": [
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Create Hubspot contact for new Google Sheets rows"
        },
        {
          "id": "add-typeform-responses-to-google-sheets",
          "description": "Add new Typeform responses to Google Sheets",
          "resources": [
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Add Typeform responses to Google Sheets"
        },
        {
          "id": "summarize-google-sheets-and-send-via-smtp",
          "description": "Summarize Google Sheets data and send it via SMTP",
          "resources": [
            "googlesheets",
            "smtp"
          ],
          "category": "Cron Jobs",
          "name": "Summarize Google Sheets and send via SMTP"
        },
        {
          "id": "send-github-repo-to-slack",
          "description": "Send Github repository query results to Slack",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send Github repo to Slack"
        },
        {
          "id": "add-new-git-hub-issues-to-asana",
          "description": "Add new GitHub issues to Asana as tasks",
          "resources": [
            "asana",
            "github"
          ],
          "category": "APIs",
          "name": "Add new GitHub issues to Asana"
        },
        {
          "id": "send-new-git-hub-commits-to-slack",
          "description": "Send new Github commits to Slack as messages",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send new GitHub commits to Slack"
        },
        {
          "id": "send-github-mentions-to-slack",
          "description": "Send new Github mentions to Slack as messages",
          "resources": [
            "slackopenapi",
            "github"
          ],
          "category": "Notifications",
          "name": "Send Github mentions to Slack"
        },
        {
          "id": "sync-salesforce-to-postgres",
          "description": "Sync Salesforce account data to Postgres",
          "resources": [
            "salesforce",
            "postgresql"
          ],
          "category": "ETL",
          "name": "Sync Salesforce to Postgres"
        },
        {
          "id": "create-salesforce-contacts-from-typeform",
          "description": "Create Salesforce contacts from new Typeform entries",
          "resources": [
            "salesforce",
            "cassandra",
            "closeio",
            "datadog"
          ],
          "category": "APIs",
          "name": "Create Salesforce contacts from Typeform"
        },
        {
          "id": "export-leads-from-google-sheets-to-salesforce",
          "description": "Export leads from Google Sheets to Salesforce",
          "resources": [
            "googlesheets",
            "salesforce"
          ],
          "category": "ETL",
          "name": "Export leads from Google Sheets to Salesforce"
        },
        {
          "id": "enrich-google-form-submissions-and-send-to-salesforce",
          "description": "Enrich Google Form submissions and send to Salesforce",
          "resources": [
            "salesforce"
          ],
          "category": "ETL",
          "name": "Enrich Google Form submissions and send to Salesforce"
        },
        {
          "id": "create-linear-ticket-from-salesforce-feature-request",
          "description": "Create a Linear ticket from a new feature request in Salesforce",
          "resources": [
            "salesforce",
            "gcs",
            "googleMaps",
            "jira"
          ],
          "category": "APIs",
          "name": "Create Linear ticket from Salesforce feature request"
        },
        {
          "id": "webhook-monitor-to-slack-alert",
          "description": "Webhook monitor to Slack alert",
          "resources": [
            "slackopenapi"
          ],
          "category": "APIs",
          "name": "Webhook monitor to Slack alert"
        },
        {
          "id": "create-salesforce-tasks-from-shopify-customers",
          "description": "Create Salesforce tasks from Shopify customers",
          "resources": [
            "salesforce"
          ],
          "category": "APIs",
          "name": "Create Salesforce tasks from Shopify customers"
        },
        {
          "id": "churn-prediction",
          "description": "Identify accounts that are at risk of churn based on product activity",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Churn Prediction"
        },
        {
          "id": "sync-linear-issues-with-trello-cards",
          "description": "Sync Linear issues with Trello cards",
          "resources": [],
          "category": "APIs",
          "name": "Sync Linear issues with Trello cards"
        },
        {
          "id": "send-slack-message-when-linear-ticket-is-assigned",
          "description": "Send a Slack message when Linear ticket is assigned",
          "resources": [
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message when Linear ticket is assigned"
        },
        {
          "id": "weekly-linear-activity-report",
          "description": "Send a weekly report of activity in Linear",
          "resources": [
            "smtp"
          ],
          "category": "Cron Jobs",
          "name": "Weekly Linear activity report"
        },
        {
          "id": "send-slack-message-when-linear-issue-is-closed",
          "description": "Send a Slack message when Linear issue is closed",
          "resources": [
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message when Linear issue is closed"
        },
        {
          "id": "sync-shopify-orders-with-quickbooks",
          "description": "Sync Shopify orders with Quickbooks online",
          "resources": [
            "Shopify"
          ],
          "category": "ETL",
          "name": "Sync Shopify orders with Quickbooks"
        },
        {
          "id": "create-new-shopify-product-from-google-sheets",
          "description": "Create a new Shopify product from a Google Sheets row",
          "resources": [
            "Shopify",
            "googlesheets"
          ],
          "category": "ETL",
          "name": "Create new Shopify product from Google Sheets"
        },
        {
          "id": "send-slack-message-for-high-value-shopify-orders",
          "description": "Send a Slack message when high-value Shopify orders are completed",
          "resources": [
            "Shopify",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Slack message for high-value Shopify orders"
        },
        {
          "id": "location-based-shopify-order-assignment",
          "description": "Assign orders on Shopify based on order location",
          "resources": [
            "Shopify"
          ],
          "category": "ETL",
          "name": "Location-based Shopify order assignment"
        },
        {
          "id": "send-email-for-low-inventory-levels-in-shopify",
          "description": "Send an email notification for low inventory levels in Shopify",
          "resources": [
            "Shopify",
            "smtp"
          ],
          "category": "Notifications",
          "name": "Send email for low inventory levels in Shopify"
        },
        {
          "id": "enrich-airtable-records-with-clearbit",
          "description": "Enrich Airtable records with Clearbit data",
          "resources": [
            "Airtable"
          ],
          "category": "ETL",
          "name": "Enrich Airtable records with Clearbit"
        },
        {
          "id": "send-weekly-airtable-summary-via-email",
          "description": "Send a weekly Airtable base summary via email",
          "resources": [
            "Airtable",
            "smtp"
          ],
          "category": "Notifications",
          "name": "Send Weekly Airtable Summary via Email"
        },
        {
          "id": "send-daily-airtable-summary-in-slack",
          "description": "Send a daily Airtable base activity summary in Slack",
          "resources": [
            "Airtable",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Send Daily Airtable Summary in Slack"
        },
        {
          "id": "create-trello-cards-from-new-jira-issues",
          "description": "Create Trello cards from new Jira issues",
          "resources": [
            "jira",
            "asana"
          ],
          "category": "APIs",
          "name": "Create Trello cards from new Jira issues"
        },
        {
          "id": "add-typeform-entries-into-airtable",
          "description": "Add new Typeform entries as records in Airtable",
          "resources": [
            "Airtable"
          ],
          "category": "ETL",
          "name": "Add Typeform entries into Airtable"
        },
        {
          "id": "create-trello-cards-from-data-in-airtable",
          "description": "Create Trello cards or lists from data in Airtable",
          "resources": [
            "Airtable",
            "asana"
          ],
          "category": "ETL",
          "name": "Create Trello cards from data in Airtable"
        },
        {
          "id": "sync-api-to-database",
          "description": "Sync API to Retool DB Postgres Database",
          "resources": [
            "Retool DB"
          ],
          "category": "APIs",
          "name": "Sync API to Database"
        },
        {
          "id": "update-database-with-api",
          "description": "Update Retool DB Postgres Database with API",
          "resources": [
            "Retool DB"
          ],
          "category": "APIs",
          "name": "Update Database with API"
        },
        {
          "id": "ai-powered-personalized-newsletter",
          "description": "An AI-powered personalized newsletter",
          "resources": [
            "openapi"
          ],
          "category": "APIs",
          "name": "AI-powered personalized newsletter"
        },
        {
          "id": "ai-powered-changelog",
          "description": "AI-powered Github changelog summary and send to team for review",
          "resources": [
            "github",
            "openapi"
          ],
          "category": "APIs",
          "name": "AI-powered changelog"
        },
        {
          "id": "daily-mrr-notification",
          "description": "Receive daily notifications of your Monthly Recurring Revenue (MRR), providing timely insights into your subscription-based business's financial performance.",
          "resources": [
            "salesforce",
            "slackopenapi"
          ],
          "category": "Notifications",
          "name": "Daily MRR Notification"
        },
        {
          "id": "abandoned-cart-recovery-emails",
          "description": "Recover potentially lost sales by sending targeted emails to customers who have abandoned their shopping carts.",
          "resources": [],
          "category": "ETL",
          "name": "Abandoned Cart Recovery Emails"
        },
        {
          "id": "triage-support-tickets-with-gpt-4",
          "description": "Efficiently manage support tickets by utilizing GPT-4 to categorize and prioritize them, ensuring faster and accurate ticket resolution.",
          "resources": [],
          "category": "APIs",
          "name": "Triage Support Tickets with GPT-4"
        },
        {
          "id": "low-inventory-alerts",
          "description": "Receive timely alerts when inventory levels fall below predefined thresholds, ensuring proactive inventory management and avoiding stockouts.",
          "resources": [],
          "category": "Notifications",
          "name": "Low Inventory Alerts"
        },
        {
          "id": "daily-update-for-new-orders",
          "description": "Get daily updates on new orders, ensuring you stay informed about incoming business and can manage operations effectively.",
          "resources": [],
          "category": "Notifications",
          "name": "Daily Update For New Orders"
        },
        {
          "id": "refund-fulfillment",
          "description": "Efficiently process and manage refunds, ensuring timely and accurate resolution for improved customer satisfaction and operational effectiveness.",
          "resources": [],
          "category": "ETL",
          "name": "Refund Fulfillment"
        },
        {
          "id": "store-performance-reports",
          "description": "Access comprehensive performance reports for your store, providing insights into sales, customer trends, and key metrics to optimize business strategies.",
          "resources": [],
          "category": "ETL",
          "name": "Store Performance Reports"
        },
        {
          "id": "fraudulent-order-notifications",
          "description": "Instantly receive notifications for suspicious orders, helping prevent fraudulent transactions and safeguarding your business and customers.",
          "resources": [],
          "category": "Notifications",
          "name": "Fraudulent Order Notifications"
        },
        {
          "id": "new-customer-follow-up",
          "description": "Initiate follow-up interactions with new customers, fostering engagement and building relationships to enhance customer retention and loyalty.",
          "resources": [],
          "category": "ETL",
          "name": "New Customer Follow Up"
        },
        {
          "id": "customer-loyalty-offer",
          "description": "Create special offers to reward loyal customers, promoting customer retention and strengthening brand engagement for long-term business success.",
          "resources": [],
          "category": "ETL",
          "name": "Customer Loyalty Offer"
        },
        {
          "id": "automatically-re-order-low-stock-items",
          "description": "Automate reordering of low-stock items, ensuring inventory availability and preventing stockouts for seamless business operations.",
          "resources": [],
          "category": "APIs",
          "name": "Automatically Re-Order Low-Stock Items"
        },
        {
          "id": "tag-items-with-shipping-time",
          "description": "Assign shipping time tags to items, providing customers with accurate delivery expectations and enhancing transparency in online shopping experiences.",
          "resources": [],
          "category": "ETL",
          "name": "Tag Items With Shipping Time"
        },
        {
          "id": "weekly-automated-shopify-order-report",
          "description": "Track and analyze Shopify orders with our weekly automated report template. Streamline insights and decision-making by receiving comprehensive sales data every week.",
          "resources": [
            "snowflake",
            "postgresql",
            "graphql"
          ],
          "category": "Notifications",
          "name": "Weekly Automated Shopify Order Report"
        },
        {
          "id": "api-to-sms",
          "description": "Automate SMS notifications using API integration. Streamline communication, send alerts, and engage with personalized text messages seamlessly.",
          "resources": [
            "Retool DB",
            "athena",
            "graphql",
            "restapi"
          ],
          "category": "Notifications",
          "name": "API to SMS"
        },
        {
          "id": "automated-linear-ticket-assignment",
          "description": "Automate ticket distribution. Assign Linear tickets efficiently, enhancing task management and optimizing workflow distribution.",
          "resources": [],
          "category": "APIs",
          "name": "Automated Linear Ticket Assignment"
        },
        {
          "id": "send-github-repo-to-postgres",
          "description": "Send GitHub repository data to a PostgreSQL database, facilitating seamless integration and enabling efficient storage and management of code-related information.",
          "resources": [
            "github",
            "postgresql"
          ],
          "category": "ETL",
          "name": "Send Github Repo to Postgres"
        },
        {
          "id": "sync-google-sheets-rows-to-postgres-database",
          "description": "Synchronize Google Sheets rows with a PostgreSQL database, enabling seamless data transfer and ensuring real-time integration between the two platforms.",
          "resources": [
            "googlesheets",
            "postgresql"
          ],
          "category": "APIs",
          "name": "Sync Google Sheets Rows to Postgres Database"
        },
        {
          "id": "update-data-to-google-sheets-from-new-webhook-post-request",
          "description": "Automatically update Google Sheets with data from new webhook POST requests, ensuring real-time integration and accurate data reflection.",
          "resources": [],
          "category": "APIs",
          "name": "Update Data to Google Sheets from New Webhook POST Request"
        },
        {
          "id": "vector-slack-sync",
          "description": "Sync your Slack conversations with Retool Vectors",
          "resources": [
            "retoolAI",
            "restapi",
            "slackopenapi"
          ],
          "category": "APIs",
          "name": "Vector Slack Sync"
        }
      ]
    },
    "select1": {
      "pluginType": "SelectWidget2",
      "_imageByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "itemMode": "static",
      "imageByIndex": [
        "",
        "",
        ""
      ],
      "_disabledByIndex": {
        "0": false,
        "1": false,
        "2": false
      },
      "showSelectionIndicator": true,
      "_values": {
        "0": "Option 1",
        "1": "Option 2",
        "2": "Option 3"
      },
      "_iconByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "iconByIndex": [
        "",
        "",
        ""
      ],
      "values": [
        "Option 1",
        "Option 2",
        "Option 3"
      ],
      "readOnly": false,
      "clearInputValueOnChange": false,
      "iconAfter": "",
      "overlayMinWidth": null,
      "allowDeselect": false,
      "inputValue": "",
      "hidden": false,
      "customValidation": "",
      "_ids": {
        "0": "00030",
        "1": "00031",
        "2": "00032"
      },
      "_captionByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "captionByIndex": [
        "",
        "",
        ""
      ],
      "disabledByIndex": [
        false,
        false,
        false
      ],
      "_hiddenByIndex": {
        "0": false,
        "1": false,
        "2": false
      },
      "hiddenByIndex": [
        false,
        false,
        false
      ],
      "_labels": {
        "0": "",
        "1": "",
        "2": ""
      },
      "labels": [
        "",
        "",
        ""
      ],
      "_tooltipByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "tooltipByIndex": [
        "",
        "",
        ""
      ],
      "_colorByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "colorByIndex": [
        "",
        "",
        ""
      ],
      "_fallbackTextByIndex": {
        "0": "",
        "1": "",
        "2": ""
      },
      "fallbackTextByIndex": [
        "",
        "",
        ""
      ],
      "data": [
        {
          "caption": "",
          "color": "",
          "disabled": false,
          "hidden": false,
          "icon": "",
          "image": "",
          "label": "",
          "fallbackText": "",
          "tooltip": "",
          "value": "Option 1"
        },
        {
          "caption": "",
          "color": "",
          "disabled": false,
          "hidden": false,
          "icon": "",
          "image": "",
          "label": "",
          "fallbackText": "",
          "tooltip": "",
          "value": "Option 2"
        },
        {
          "caption": "",
          "color": "",
          "disabled": false,
          "hidden": false,
          "icon": "",
          "image": "",
          "label": "",
          "fallbackText": "",
          "tooltip": "",
          "value": "Option 3"
        }
      ],
      "margin": "4px 8px",
      "_desktopMargin": "4px 8px",
      "searchMode": "fuzzy",
      "hideValidationMessage": false,
      "textBefore": "",
      "value": null,
      "allowCustomValue": false,
      "selectedIndex": null,
      "selectedItem": null,
      "required": false,
      "disabled": false,
      "_validate": false,
      "validationMessage": "",
      "automaticItemColors": false,
      "itemAdornmentShape": "circle",
      "textAfter": "",
      "showInEditor": false,
      "_mobileMargin": "4px 8px",
      "showClear": false,
      "tooltipText": "",
      "labelAlign": "left",
      "id": "select1",
      "formDataKey": "select1",
      "labelCaption": "",
      "labelWidth": 33,
      "deprecatedLabels": [],
      "placeholder": "Select an option",
      "itemAdornmentSize": "auto",
      "label": "Label",
      "_hasMigratedNestedItems": true,
      "labelWidthUnit": "%",
      "invalid": false,
      "iconBefore": "",
      "selectedLabel": null,
      "emptyMessage": "No options",
      "overlayMaxHeight": 375,
      "loading": false,
      "labelPosition": "top",
      "labelWrap": false,
      "disabledValues": [],
      "maintainSpaceWhenHidden": false
    },
    "current_user": {
      "lastName": "Jaber",
      "profilePhotoUrl": "https://lh3.googleusercontent.com/a/ACg8ocKKvTMAi9X1pGF8xIaEOecBnrmus1pT7f5WElpMGUILpSmyRQ=s96-c",
      "name": "",
      "sid": "user_5dba4851e18b4fea85e18cc9eea0bbbe",
      "metadata": {},
      "groups": [
        {
          "id": 473690,
          "name": "admin"
        },
        {
          "id": 473693,
          "name": "All Users"
        }
      ],
      "externalIdentifier": null,
      "fullName": "Peter Jaber",
      "locale": "en",
      "id": 177737,
      "firstName": "Peter",
      "email": "peterjaberau@gmail.com"
    },
    "urlparams": {
      "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main",
      "hash": {}
    },
    "url": {
      "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main",
      "hashParams": {},
      "searchParams": {}
    },
    "viewport": {
      "width": 992,
      "height": 441
    },
    "theme": {
      "primary": "#3170f9",
      "success": "#059669",
      "labelFont": {
        "size": "12px",
        "fontWeight": "500",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "mode": null,
      "danger": "#dc2626",
      "labelEmphasizedFont": {
        "size": "12px",
        "fontWeight": "600",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "surfaceSecondary": "#ffffff",
      "mediumElevation": "0 0 5px 1px rgba(0, 0, 0, 0.06)",
      "lowElevation": "0 0 2px 1px rgba(0, 0, 0, 0.05)",
      "automatic": [
        "#fde68a",
        "#eecff3",
        "#a7f3d0",
        "#bfdbfe",
        "#c7d2fe",
        "#fecaca",
        "#fcd6bb"
      ],
      "_tokensById": {},
      "info": "#3170f9",
      "defaultFont": {
        "size": "12px",
        "fontWeight": "400",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "tertiary": "#3170f9",
      "highlight": "#fde68a",
      "secondary": "#3170f9",
      "surfacePrimary": "#ffffff",
      "h1Font": {
        "size": "36px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "canvas": "#f6f6f6",
      "h2Font": {
        "size": "28px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "tokens": {},
      "h3Font": {
        "size": "24px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "highElevation": "0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 16px 32px 0 rgba(55, 55, 55, 0.08)",
      "h4Font": {
        "size": "18px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "h5Font": {
        "size": "16px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "warning": "#cd6f00",
      "h6Font": {
        "size": "14px",
        "fontWeight": "700",
        "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
      },
      "borderRadius": "4px"
    },
    "localStorage": {
      "values": {}
    },
    "retoolContext": {
      "translations": {},
      "pages": [
        {
          "id": "Main",
          "title": "Page 1",
          "url": "Main",
          "isCurrentPage": true
        }
      ],
      "runningQueries": [],
      "currentPage": "Main",
      "pageTag": "latest",
      "appName": "App-To-Query-Workflow",
      "environment": "production",
      "inEditorMode": true,
      "appUuid": "1e6cbb30-b4f0-11f1-8707-1bdc377fd873"
    }
  },
  "plugins": {
    "Main": {
      "id": "Main",
      "uuid": "46fd3722-67c6-4905-84a7-fd963d403ec5",
      "_comment": null,
      "type": "screen",
      "subtype": "Screen",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "title": "Page 1",
        "browserTitle": "",
        "urlSlug": "",
        "_order": 0,
        "_searchParams": [],
        "_hashParams": [],
        "_customShortcuts": []
      },
      "style": null,
      "position2": null,
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:38:01.968Z",
      "updatedAt": "2026-09-20T12:38:01.968Z",
      "folder": "",
      "presetName": null,
      "screen": null,
      "boxId": null,
      "subBoxIds": null
    },
    "$main": {
      "id": "$main",
      "uuid": null,
      "_comment": null,
      "type": "frame",
      "subtype": "Frame",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "type": "main",
        "padding": "8px 12px",
        "enableFullBleed": false,
        "isHiddenOnDesktop": false,
        "isHiddenOnMobile": false
      },
      "style": {},
      "position2": null,
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:38:01.968Z",
      "updatedAt": "2026-09-20T12:38:01.968Z",
      "folder": "",
      "presetName": null,
      "screen": "Main",
      "boxId": null,
      "subBoxIds": null
    },
    "QUERY_WORKFLOW_TEMPLATES": {
      "id": "QUERY_WORKFLOW_TEMPLATES",
      "uuid": null,
      "_comment": null,
      "type": "datasource",
      "subtype": "WorkflowRun",
      "namespace": null,
      "resourceName": "WorkflowRun",
      "resourceDisplayName": null,
      "template": {
        "queryRefreshTime": "",
        "allowedGroupIds": [],
        "streamResponse": false,
        "lastReceivedFromResourceAt": null,
        "isFunction": false,
        "functionParameters": null,
        "queryDisabledMessage": "",
        "servedFromCache": false,
        "offlineUserQueryInputs": "",
        "functionDescription": null,
        "successMessage": "",
        "queryDisabled": "",
        "playgroundQuerySaveId": "latest",
        "workflowParams": "[{\"key\":\"wait\",\"value\":\"0\"}]",
        "resourceNameOverride": "",
        "runWhenModelUpdates": false,
        "workflowRunExecutionType": "sync",
        "showFailureToaster": true,
        "query": "",
        "playgroundQueryUuid": "",
        "playgroundQueryId": null,
        "error": null,
        "workflowRunBodyType": "json",
        "privateParams": [],
        "queryRunOnSelectorUpdate": false,
        "runWhenPageLoadsDelay": "",
        "data": null,
        "importedQueryInputs": {},
        "isImported": false,
        "showSuccessToaster": false,
        "cacheKeyTtl": "",
        "requestSentTimestamp": null,
        "metadata": null,
        "queryRunTime": null,
        "changesetObject": "",
        "offlineOptimisticResponse": null,
        "errorTransformer": "return data.error",
        "finished": null,
        "confirmationMessage": null,
        "isFetching": false,
        "changeset": "",
        "rawData": null,
        "queryTriggerDelay": "0",
        "resourceTypeOverride": null,
        "watchedParams": [],
        "enableErrorTransformer": false,
        "showLatestVersionUpdatedWarning": false,
        "timestamp": 0,
        "importedQueryDefaults": {},
        "enableTransformer": true,
        "showUpdateSetValueDynamicallyToggle": true,
        "overrideOrgCacheForUserCache": false,
        "runWhenPageLoads": false,
        "transformer": "return data",
        "events": [
          {
            "method": null,
            "params": {},
            "targetId": null,
            "pluginId": "",
            "waitType": "debounce",
            "event": "success",
            "type": "state",
            "id": "4c0c24c2",
            "waitMs": "0"
          }
        ],
        "isMultiplayerEdited": false,
        "queryTimeout": "10000",
        "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
        "requireConfirmation": false,
        "queryFailureConditions": "",
        "changesetIsObject": false,
        "enableCaching": false,
        "allowedGroups": [],
        "offlineQueryType": "None",
        "queryThrottleTime": "750",
        "updateSetValueDynamically": false,
        "notificationDuration": 4.5
      },
      "style": null,
      "position2": null,
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:38:30.172Z",
      "updatedAt": "2026-09-20T13:45:01.458Z",
      "folder": "",
      "presetName": null,
      "screen": null,
      "boxId": null,
      "subBoxIds": null
    },
    "tbl_workflow_templates": {
      "id": "tbl_workflow_templates",
      "uuid": "7c8aa814-9a91-484a-801b-72f1bcc5b6f8",
      "_comment": null,
      "type": "widget",
      "subtype": "TableWidget2",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "selectedRowKey": null,
        "_nextAfterCursor": "",
        "_columnBackgroundColor": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_defaultSort": null,
        "_columnSearchMode": {
          "f7ed5": "default",
          "6462c": "default",
          "92a5e": "default",
          "eb34b": "default",
          "f950e": "default"
        },
        "_columnAlternateRowBackgroundColor": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_clearChangesetOnSave": true,
        "heightType": "fixed",
        "_columnTextColor": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "disableEdits": false,
        "autoColumnWidth": false,
        "_rowHeight": "",
        "_columnIds": [
          "f7ed5",
          "6462c",
          "92a5e",
          "eb34b",
          "f950e"
        ],
        "_isSaving": false,
        "_headerTextWrap": false,
        "_actionIds": [],
        "_clearChangeset": false,
        "caseSensitiveFiltering": false,
        "_limitOffsetRowCount": null,
        "selectedSourceRow": null,
        "_dynamicColumnsEnabled": false,
        "disableSave": false,
        "_columnEditableOptions": {
          "f7ed5": {
            "spellCheck": false
          },
          "6462c": {
            "spellCheck": false
          },
          "92a5e": {
            "spellCheck": false
          },
          "eb34b": {},
          "f950e": {}
        },
        "_toolbarPosition": "bottom",
        "_groupByColumns": [],
        "_toolbarButtonLabel": {
          "1a": "Filter",
          "3c": "Download",
          "4d": "Refresh"
        },
        "_nextBeforeCursor": "",
        "_persistRowSelection": false,
        "_toolbarButtonIcon": {
          "1a": "bold/interface-text-formatting-filter-2",
          "3c": "bold/interface-download-button-2",
          "4d": "bold/interface-arrows-round-left"
        },
        "changesetArray": [],
        "groupByColumns": [],
        "_toolbarButtonType": {
          "1a": "filter",
          "3c": "custom",
          "4d": "custom"
        },
        "_columnOptionList": {
          "f7ed5": {},
          "6462c": {},
          "92a5e": {},
          "eb34b": {},
          "f950e": {}
        },
        "_columnValueOverride": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": "{{ _.startCase(item) }}"
        },
        "_showBorder": true,
        "_templatePageSize": null,
        "_dynamicColumnProperties": {},
        "_showHeader": true,
        "_currentPage": 0,
        "overflowActionsOverlayMinWidth": null,
        "_actionsOverflowPosition": 0,
        "_columnKey": {
          "f7ed5": "id",
          "6462c": "name",
          "92a5e": "description",
          "eb34b": "resources",
          "f950e": "category"
        },
        "hidden": false,
        "_toolbarButtonIds": [
          "1a",
          "3c",
          "4d"
        ],
        "columnOrdering": [],
        "data": "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
        "_cellSelection": "none",
        "_serverPaginated": false,
        "_linkedFilterId": null,
        "searchMode": "fuzzy",
        "_columnCellTooltip": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_columnFormat": {
          "f7ed5": "string",
          "6462c": "string",
          "92a5e": "string",
          "eb34b": "tags",
          "f950e": "tag"
        },
        "_cursorCache": {},
        "_calculatedPageSize": null,
        "_primaryKeyColumnId": "f7ed5",
        "selectedDataIndex": null,
        "_columnAlignment": {
          "f7ed5": "left",
          "6462c": "left",
          "92a5e": "left",
          "eb34b": "left",
          "f950e": "left"
        },
        "_actionIcon": {},
        "margin": "4px 8px",
        "_columnTooltip": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_columnIcon": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_alwaysShowRowSelectionCheckboxes": false,
        "_columnCellTooltipMode": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "overflow",
          "f950e": ""
        },
        "_pageSize": null,
        "showInEditor": false,
        "_isAddingNewRows": false,
        "selectedSourceRows": [],
        "_enableExpandableRows": false,
        "_selectMultipleRowsOnActionClick": "no",
        "_columnSortDisabled": {
          "f7ed5": false,
          "6462c": false,
          "92a5e": false,
          "eb34b": false,
          "f950e": false
        },
        "_showSummaryRow": false,
        "filterStack": null,
        "_expandedRows": null,
        "changesetObject": null,
        "_actionDisabled": {},
        "_columnReferenceId": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_dynamicColumnSource": [],
        "_rowSelection": "single",
        "_columnCaption": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_dynamicColumnFormatOptions": {},
        "_dynamicRowHeights": false,
        "_columnFormatOptions": {
          "f7ed5": {},
          "6462c": {},
          "92a5e": {},
          "eb34b": {
            "automaticColors": true
          },
          "f950e": {
            "automaticColors": true
          }
        },
        "_changeset": null,
        "_afterCursor": "",
        "_columnHeaderBackgroundColor": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "selectedRowKeys": [],
        "_columnHeaderTextColor": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_beforeCursor": "",
        "_columnSummaryAggregationMode": {
          "f7ed5": "none",
          "6462c": "none",
          "92a5e": "none",
          "eb34b": "none",
          "f950e": "none"
        },
        "searchTerm": "",
        "selectedRows": [],
        "_disabledVirtualization": false,
        "_expandedRowDataIndexes": [],
        "_showColumnBorders": false,
        "_columnStatusIndicatorOptions": {
          "f7ed5": {},
          "6462c": {},
          "92a5e": {},
          "eb34b": {},
          "f950e": {}
        },
        "overflowActionsOverlayMaxHeight": null,
        "_columnSize": {
          "f7ed5": 100,
          "6462c": 100,
          "92a5e": 100,
          "eb34b": 100,
          "f950e": 100
        },
        "_serverPaginationType": "limitOffsetBased",
        "_columnSortMode": {
          "f7ed5": "default",
          "6462c": "default",
          "92a5e": "default",
          "eb34b": "default",
          "f950e": "default"
        },
        "_selectSingleRowsOnActionClick": "replace",
        "_showFooter": true,
        "_groupedColumnConfig": {},
        "_dynamicColumnSize": {},
        "_alwaysShowScrollbars": false,
        "_virtualizeStartIndex": 0,
        "_toolbarButtonHidden": {
          "1a": "",
          "3c": "",
          "4d": ""
        },
        "_defaultFilters": {},
        "events": [
          {
            "method": "trigger",
            "params": {},
            "targetId": null,
            "pluginId": "QUERY_WORKFLOW_TEMPLATES",
            "waitType": "debounce",
            "event": "selectRow",
            "type": "datasource",
            "id": "7143129e",
            "waitMs": "0"
          },
          {
            "id": "be7ab122",
            "type": "widget",
            "waitMs": "0",
            "waitType": "debounce",
            "event": "clickToolbar",
            "method": "exportData",
            "pluginId": "tbl_workflow_templates",
            "targetId": "3c"
          },
          {
            "id": "68f733d8",
            "type": "widget",
            "waitMs": "0",
            "waitType": "debounce",
            "event": "clickToolbar",
            "method": "refresh",
            "pluginId": "tbl_workflow_templates",
            "targetId": "4d"
          }
        ],
        "_columnEditable": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "newRows": [],
        "_rowBackgroundColor": [],
        "emptyMessage": "No rows found",
        "pagination": null,
        "selectedDataIndexes": [],
        "_columnEditableInNewRows": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_columnGroupAggregationMode": {
          "f7ed5": "none",
          "6462c": "none",
          "92a5e": "none",
          "eb34b": "none",
          "f950e": "none"
        },
        "sortArray": [],
        "_selectedCell": null,
        "overflowType": "scroll",
        "selectedCell": null,
        "_defaultSelectedRow": {
          "mode": "index",
          "indexType": "display",
          "index": 0
        },
        "_hasNextPage": false,
        "_includeRowInChangesetArray": false,
        "_columnPosition": {
          "f7ed5": "center",
          "6462c": "center",
          "92a5e": "center",
          "eb34b": "center",
          "f950e": "center"
        },
        "_enableSaveActions": true,
        "_columnPlaceholder": {
          "f7ed5": "Enter value",
          "6462c": "Enter value",
          "92a5e": "Enter value",
          "eb34b": "Select options",
          "f950e": "Select option"
        },
        "_defaultFilterOperator": "and",
        "_actionLabel": {},
        "_virtualizeEndIndex": 0,
        "selectedRow": null,
        "_actionHidden": {},
        "maintainSpaceWhenHidden": false,
        "_columnHidden": {
          "f7ed5": "",
          "6462c": "",
          "92a5e": "",
          "eb34b": "",
          "f950e": ""
        },
        "_columnLabel": {
          "f7ed5": "ID",
          "6462c": "Name",
          "92a5e": "Description",
          "eb34b": "Resources",
          "f950e": "Category"
        },
        "_showToolbar": true
      },
      "style": {},
      "position2": {
        "type": "grid",
        "container": "",
        "rowGroup": "body",
        "subcontainer": "",
        "row": 7.599999999999999,
        "col": 1,
        "height": 13.2,
        "width": 7,
        "tabNum": 0,
        "stackPosition": null
      },
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:40:57.486Z",
      "updatedAt": "2026-09-20T13:27:23.344Z",
      "folder": "",
      "presetName": null,
      "screen": "Main",
      "boxId": null,
      "subBoxIds": null
    },
    "btn_load_workflow_templates": {
      "id": "btn_load_workflow_templates",
      "uuid": "c3a44de3-c4bd-4b4c-b304-36678488092f",
      "_comment": null,
      "type": "widget",
      "subtype": "ButtonWidget2",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "heightType": "fixed",
        "horizontalAlign": "stretch",
        "clickable": false,
        "iconAfter": "",
        "submitTargetId": null,
        "hidden": false,
        "ariaLabel": "",
        "text": "Load Workflow Templates",
        "margin": "4px 8px",
        "showInEditor": false,
        "tooltipText": "",
        "allowWrap": true,
        "styleVariant": "solid",
        "submit": false,
        "iconBefore": "",
        "events": [
          {
            "method": "reset",
            "params": {},
            "targetId": null,
            "pluginId": "QUERY_WORKFLOW_TEMPLATES",
            "waitType": "debounce",
            "event": "click",
            "type": "datasource",
            "id": "7183814b",
            "waitMs": "0"
          },
          {
            "method": "trigger",
            "params": {},
            "targetId": null,
            "pluginId": "QUERY_WORKFLOW_TEMPLATES",
            "waitType": "debounce",
            "event": "click",
            "type": "datasource",
            "id": "83354339",
            "waitMs": "0"
          }
        ],
        "loading": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
        "loaderPosition": "auto",
        "disabled": false,
        "maintainSpaceWhenHidden": false
      },
      "style": {},
      "position2": {
        "type": "grid",
        "container": "",
        "rowGroup": "body",
        "subcontainer": "",
        "row": 6.3999999999999995,
        "col": 1,
        "height": 1,
        "width": 3,
        "tabNum": 0,
        "stackPosition": null
      },
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:41:11.989Z",
      "updatedAt": "2026-09-20T13:27:46.576Z",
      "folder": "",
      "presetName": null,
      "screen": "Main",
      "boxId": null,
      "subBoxIds": null
    },
    "var_mainPage": {
      "id": "var_mainPage",
      "uuid": null,
      "_comment": null,
      "type": "state",
      "subtype": "State",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "value": "{\n  \"isPageLoaded\": false,\n  \"isWorkflowTemplateLoaded\": false\n}"
      },
      "style": null,
      "position2": null,
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T12:48:41.305Z",
      "updatedAt": "2026-09-20T12:58:10.747Z",
      "folder": "",
      "presetName": null,
      "screen": null,
      "boxId": null,
      "subBoxIds": null
    },
    "btn_load_workflow_templates2": {
      "id": "btn_load_workflow_templates2",
      "uuid": "7433fc2c-63cd-4e89-9822-cf8eaf628f7e",
      "_comment": null,
      "type": "widget",
      "subtype": "ButtonWidget2",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "heightType": "fixed",
        "horizontalAlign": "stretch",
        "clickable": false,
        "iconAfter": "",
        "submitTargetId": null,
        "hidden": false,
        "ariaLabel": "",
        "text": "Reset",
        "margin": "4px 8px",
        "showInEditor": false,
        "tooltipText": "",
        "allowWrap": true,
        "styleVariant": "solid",
        "submit": false,
        "iconBefore": "",
        "events": [
          {
            "method": "trigger",
            "params": {
              "options": {
                "onSuccess": null,
                "onFailure": null,
                "additionalScope": null
              }
            },
            "targetId": null,
            "pluginId": "QUERY_WORKFLOW_TEMPLATES",
            "waitType": "debounce",
            "event": "click",
            "type": "datasource",
            "id": "7183814b",
            "waitMs": "0"
          }
        ],
        "loading": false,
        "loaderPosition": "auto",
        "disabled": false,
        "maintainSpaceWhenHidden": false
      },
      "style": {},
      "position2": {
        "type": "grid",
        "container": "",
        "rowGroup": "body",
        "subcontainer": "",
        "row": 6.4,
        "col": 5,
        "height": 1,
        "width": 2,
        "tabNum": 0,
        "stackPosition": null
      },
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T13:04:25.066Z",
      "updatedAt": "2026-09-20T13:04:38.915Z",
      "folder": "",
      "presetName": null,
      "screen": "Main",
      "boxId": null,
      "subBoxIds": null
    },
    "QUERY_WORKFLOW_FROM_API": {
      "id": "QUERY_WORKFLOW_FROM_API",
      "uuid": null,
      "_comment": null,
      "type": "datasource",
      "subtype": "RESTQuery",
      "namespace": null,
      "resourceName": "REST-WithoutResource",
      "resourceDisplayName": null,
      "template": {
        "queryRefreshTime": "",
        "paginationLimit": "",
        "allowedGroupIds": [],
        "openAPIRequestBody": "",
        "streamResponse": false,
        "body": "",
        "lastReceivedFromResourceAt": null,
        "isFunction": false,
        "functionParameters": null,
        "queryDisabledMessage": "",
        "servedFromCache": false,
        "openAPIResolvedSpec": "",
        "offlineUserQueryInputs": "",
        "functionDescription": null,
        "successMessage": "",
        "queryDisabled": "",
        "playgroundQuerySaveId": "latest",
        "workflowParams": null,
        "resourceNameOverride": "",
        "runWhenModelUpdates": true,
        "paginationPaginationField": "",
        "workflowRunExecutionType": "sync",
        "headers": "[{\"key\":\"X-Workflow-Api-Key\",\"value\":\"retool_wk_6b14e4268ad34789aebffbd69a2ba896\"}]",
        "showFailureToaster": true,
        "paginationEnabled": false,
        "query": "https://peterjaberau.retool.com/url/run-workflow",
        "playgroundQueryUuid": "",
        "playgroundQueryId": null,
        "error": null,
        "workflowRunBodyType": "raw",
        "privateParams": [],
        "queryRunOnSelectorUpdate": false,
        "runWhenPageLoadsDelay": "",
        "data": null,
        "importedQueryInputs": {},
        "isImported": false,
        "showSuccessToaster": true,
        "cacheKeyTtl": "",
        "requestSentTimestamp": null,
        "cookies": "",
        "metadata": null,
        "queryRunTime": null,
        "changesetObject": "",
        "offlineOptimisticResponse": null,
        "errorTransformer": "return data.error",
        "finished": null,
        "confirmationMessage": null,
        "isFetching": false,
        "changeset": "",
        "openAPIOperationId": "",
        "rawData": null,
        "queryTriggerDelay": "0",
        "resourceTypeOverride": "",
        "watchedParams": [],
        "enableErrorTransformer": false,
        "showLatestVersionUpdatedWarning": false,
        "paginationDataField": "",
        "timestamp": 0,
        "openAPIParams": "{}",
        "importedQueryDefaults": {},
        "enableTransformer": false,
        "showUpdateSetValueDynamicallyToggle": true,
        "version": 2,
        "overrideOrgCacheForUserCache": false,
        "runWhenPageLoads": false,
        "transformer": "return data",
        "events": [],
        "queryTimeout": "10000",
        "workflowId": null,
        "requireConfirmation": false,
        "type": "GET",
        "queryFailureConditions": "",
        "changesetIsObject": false,
        "enableCaching": false,
        "allowedGroups": [],
        "bodyType": "none",
        "offlineQueryType": "None",
        "queryThrottleTime": "750",
        "updateSetValueDynamically": false,
        "notificationDuration": ""
      },
      "style": null,
      "position2": null,
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-20T15:39:29.962Z",
      "updatedAt": "2026-09-20T15:41:27.816Z",
      "folder": "",
      "presetName": null,
      "screen": null,
      "boxId": null,
      "subBoxIds": null
    },
    "select1": {
      "id": "select1",
      "uuid": "89d7956a-bd37-4be4-bcad-492339175614",
      "_comment": null,
      "type": "widget",
      "subtype": "SelectWidget2",
      "namespace": null,
      "resourceName": null,
      "resourceDisplayName": null,
      "template": {
        "imageByIndex": [],
        "_disabledByIndex": [
          "",
          "",
          ""
        ],
        "showSelectionIndicator": true,
        "_values": [
          "Option 1",
          "Option 2",
          "Option 3"
        ],
        "iconByIndex": [],
        "values": [],
        "readOnly": false,
        "clearInputValueOnChange": false,
        "iconAfter": "",
        "_iconByIndex": [
          "",
          "",
          ""
        ],
        "overlayMinWidth": null,
        "allowDeselect": false,
        "inputValue": "",
        "hidden": false,
        "customValidation": "",
        "data": [],
        "searchMode": "fuzzy",
        "hideValidationMessage": false,
        "fallbackTextByIndex": [],
        "textBefore": "",
        "_fallbackTextByIndex": [
          "",
          "",
          ""
        ],
        "selectedItem": null,
        "validationMessage": "",
        "margin": "4px 8px",
        "automaticItemColors": false,
        "itemAdornmentShape": "circle",
        "textAfter": "",
        "showInEditor": false,
        "showClear": false,
        "tooltipText": "",
        "labelAlign": "left",
        "formDataKey": "{{ self.id }}",
        "value": null,
        "hiddenByIndex": [],
        "labelCaption": "",
        "labelWidth": "33",
        "deprecatedLabels": [],
        "_hiddenByIndex": [
          "",
          "",
          ""
        ],
        "placeholder": "Select an option",
        "_captionByIndex": [
          "",
          "",
          ""
        ],
        "itemAdornmentSize": "auto",
        "label": "Label",
        "_hasMigratedNestedItems": true,
        "captionByIndex": [],
        "_validate": false,
        "itemMode": "static",
        "labelWidthUnit": "%",
        "allowCustomValue": false,
        "invalid": false,
        "selectedIndex": null,
        "_tooltipByIndex": [
          "",
          "",
          ""
        ],
        "_colorByIndex": [
          "",
          "",
          ""
        ],
        "tooltipByIndex": [],
        "iconBefore": "",
        "colorByIndex": [],
        "selectedLabel": "",
        "events": {},
        "_ids": [
          "00030",
          "00031",
          "00032"
        ],
        "emptyMessage": "No options",
        "overlayMaxHeight": 375,
        "loading": false,
        "disabled": false,
        "labelPosition": "top",
        "_labels": [
          "",
          "",
          ""
        ],
        "labelWrap": false,
        "disabledValues": [],
        "disabledByIndex": [],
        "maintainSpaceWhenHidden": false,
        "_imageByIndex": [
          "",
          "",
          ""
        ],
        "required": false,
        "labels": []
      },
      "style": {},
      "position2": {
        "type": "grid",
        "container": "",
        "rowGroup": "body",
        "subcontainer": "",
        "row": 2.8,
        "col": 7,
        "height": 0.2,
        "width": 4,
        "tabNum": 0,
        "stackPosition": null
      },
      "mobilePosition2": null,
      "mobileAppPosition": null,
      "tabIndex": null,
      "container": "",
      "createdAt": "2026-09-27T03:34:11.845Z",
      "updatedAt": "2026-09-27T03:34:11.845Z",
      "folder": "",
      "presetName": null,
      "screen": "Main",
      "boxId": null,
      "subBoxIds": null
    }
  },
  "selectedPluginId": "tbl_workflow_templates",
  "inEditorMode": true,
  "selectedCanvasPlugins": [
    "btn_load_workflow_templates"
  ],
  "selectedDatasource": "QUERY_WORKFLOW_FROM_API",
  "modelInitialized": true,
  "showHiddenPlugins": false,
  "sidebarPanelOpen": true,
  "isMultipageApp": true,
  "isMobileApp": false,
  "currentPage": "Main"
}

export const EditorInspectorPanel = {
  editors: [
    {
      "name": "text",
      "type": "codeInput",
      "props": {
        "label": "Text",
        "labelPosition": "auto",
        "validator": "string | void"
      }
    },
    {
      "name": "ariaLabel",
      "type": "codeInput",
      "props": {
        "label": "Accessible name",
        "docs": "An accessible description of the button for screen readers.",
        "labelPosition": "auto",
        "validator": "string | void"
      }
    },
    {
      "name": "textBefore",
      "type": "codeInput",
      "props": {
        "docs": "Add text to the front",
        "label": "Prefix text",
        "labelPosition": "auto",
        "validator": "string | void",
        "listEditorType": "Adornments",
        "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArrSURBVHgB7d1HiBRNH8fxMuecc84Rc86iqIhiwIQe9SLixZMHvXgRDCgiePIgeBHFrBgxYECMmHPO2TX7vO+33reG3t6Z3Zne8anZ3d8Hlh13emfa7v5V/buqp7fYP/9lRMSL4kZEvFEARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8KmnSICsry7x79858/vzZ/Pjxw+jPTYgkJ98BfPLkiXnz5o0RkdTlK4D37t0znz59so/r169vypQpo97vL7p//7793rlzZyOFQ+QA0vMRvvLly5s6derY4Cl8IqmJNAjDOZ8rO134RCR1kQLIgAsoOxU+kegiBZDRTnDOJyLRRQogUw1Q7yeSP5ECqOCJpIeuhBHxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIAUwDLk7ndhHuUyIiyUrLXdHy4/fv32bVqlVJLdu8eXMzceJEk2nWrl1rzpw5Y6pXr25WrFhhSpQoYf9fq1evtuGcNWuWvXNAJvnz54/ZtWtXUsuy7r169TKSP2zz3bt322Ni0KBBpkqVKv4DiAsXLiS1HLfCyMQAupslvX371t4np2rVqjaA58+ftz+fMGFCxgUQbr3z8v3797QF8MqVK/b1mjVrZhusooQAciMz9OzZM3MC6AwfPtzumEQqV65sMtG8efPMoUOHTKdOnWz4CpqOHTvm2kBw4610OXXqlPn69aupVKlSkQtgPBkVwPbt2xfIUqdVq1b2q6Bq1KiRadmypZF/X0YFMBXU0ZR4v379sj1P6dKlzd27d83NmzdNrVq1TNu2bbP1mNzF7datW+bVq1emXr16ttUvW7Zswtd/8eKFLRdYvmTJkraH4Hd4n3jLPnjwwL4f71vYsZ0ppxo3bmxKlSplS+9nz57Zn9WtW9fUqFHDngcHsX1+/vxpez9cu3bNFC/+vzFAXie8XSnhHz16ZN6/f29fl96SfVCuXLkc6/Plyxf7/rwe4wS8B7/7+vVr27jwlQg3GOPYKFasmGnRokXcZVgXVzqyDvTewee4RefHjx/t+7J+DRo0MNWqVTPJKLABZGeuXLnSPl68eLFZt26dPRCCKA379etnNmzYYI4dO5btOXbowoULTdOmTbP9/MOHD2bz5s3m+PHjOd6TwM6fPz/HjXFZdtu2baZLly6FPoA0eG7wZsqUKebw4cP2QA+iDJ88eXK2sFCiu5t54eHDh/YLDFIFA8gBvWfPnlhYgwYPHmwbQhdesN9ZntcYPXq02b59e+w5GojcAuh+FzNnzoxbFhNmt8y0adNiAaSxP3HiRLb/l0NDwLqEG6KwQjEN4cJHMChjnfXr19uRSMJH0IYOHRrbwCxPMGnBHFpaXsuFj8ARYHY4vn37ZpYvX253iBizf/9+Gz5XHdD7gV6LBim4bdkv4YaLf9NoBc8x6ZF27twZC1/Dhg1tee8CevToUXPx4sW468M00N69e+3jmjVr2rI6r56I48K99u3bt+MuQ9DAsUN1hcePH5t9+/bFwsc24P/oGh2qBBqdvBTYHjCIMNELtmnTxv6bcmTRokX28blz5+zgzpw5c2yZQel68OBBs3HjRtsC09pSAoGphKtXr9rHU6dONWPHjo21tLzHggUL7GNGbXNrVYsKqoUxY8ZkK93Onj1rB1oIJtvMHbC9e/e23zkNIFyjRo0yrVu3zvZ6jI7u2LHDBonfY8Tb3fqSxpHA8/s0kPQwjCKG0ePMmDHDlsHJYHmqlkuXLpnr16/nGIOg0rpx44Z93KFDB/udY8iFq2LFirYS4Lt7jl6R0yNeb9iwYbn2ghkVwDVr1uT6/NKlS+2GDxs3blwsfOAcjx1++vRp+28CSPjAd3pCAoiXL1/GAtinTx/7mHq/f//+2d6D1s+9Jq1bYeLKq0RojOKNknLuHT5v6t69u+2hCBkhdAFMxtOnT22o6ZHGjx+f7b6zNIQjR460+4tl7ty5Y7p165bjNUaMGJF0+ByOHQLI6/L6tWvXjj3HuavjBto4hgg5z3FcuPC559q1axebgqJHpzdOpECVoIluhxgMn+MODDZQuLeiRXKlaPg8g7t9h8NHKcXBwYk22ElFSaLtzrYKIyjuAA6fk+fFbVf2XbypD/ab25fu7uzJrFNeKJ1db0oPG+TKT0rVChUqxH7OwBzrGS5x6cWD58Txzg+DMqoHnD59eq5/+SfYMgUFR6Uc1+PFGzUDGzARWjZKVyaqeZzqgVTQ0OA0adIk4fPxSj0kmpdl4AOUjal4/vy5/c4IKQ1ePPRSSPQn8eKNUieD8vLkyZP2vTnv5/ghTPS0oFcLo1SmWuJ8kPWhUQhfjpjXPXQzKoB01Zx0+0K9z8AN54JhboDBHSSFCUFKtWz7G4INnQtaIgyIpRPnowSQiogxBHpSN/VAqMOj5YRu69atOV6HZSnXkx2oKxSDMOnC8LoLX9euXc3AgQNtz8DBSY954MCB2LmjpB8HLiUbo5cDBgzIddncKpgoqKJo/AkWZSgBdIMvhDP4fvRyLnwErkePHnbuj+kXN7ec13iGowAGXL582X5nJIz5vjAm3OXvIYCUfO5StX8b0wgEkNFLBpPcPGV4bjd4HDDfGa4e4s1fJqKPIwVwRQXiTcZS8sQrTSUat62D3Dk+U0MEIR7m3phGYpl0c9ch08PxHuD8l1H1IE5VnHhjDInmE+PJqABy2RcjYYm+wldcpBtlJ5jMpSVmEIGTaM77mIAvrIMxjO5yzpXoy43+poMbpWS+le0ZDCLPuTEASjz2gRvU4DsXVDAqye+m0sski3LSDba43i/e4EtwpJVpKXc+SjBZtyNHjphkZVQJyiVgfCVCfc3VK39L3759Y5dZLVmyJFbPuw3MYEU6D8ZMwcQxX4lwYM6dO9ekA0P3BIvwbdq0yf5s9uzZtqdhmoGLH7Zs2WIbWz47B+bZgsP59FR/6+Jxyk1GQp3wxQLguGDqi3NEPl7FFz2haxSCj/NSoErQVIaY87wG7/9XuASvKWTAZdmyZfaEGgTPhY8pEiaHke4BgEyX17YMC27TMA5cJsuDpVuwsnGT8MG5XRc+fmfIkCE2pMm+X6rY927d6OkSTcFwUQDniY4LHKPlkyZNSnrdiv0T4Y/9cdUAwkOzhQk7neFoJoQZHMiE0LkP0OY2V1qQsI2ZbwtOcAdRdrIMF4AzKJNoTtcnTlO49pV1JayprqNGQROg7CnIn/ErCIKXcMVDb5jpH9qlh8vPOmoUVMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEo0gBdPfcFJH8iRRA98l0BVEkfyIF0H2QkjsHi0h0kQLo7ofP7cPVC4pEFymA3CfF3YyUm5QqhCLRRB4F5e5R3CgnKyvL3kOfm9IoiCKpiXRXtCDuUJzoL9WISO7yHUDQC/KnmbiFHD1hGl5SpEhISwBFJBpdCSPikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOLRfwAlfLaGDR9tzwAAAABJRU5ErkJggg=="
      }
    },
    {
      "name": "textAfter",
      "type": "codeInput",
      "props": {
        "docs": "Add text to the back",
        "label": "Suffix text",
        "labelPosition": "auto",
        "validator": "string | void",
        "listEditorType": "Adornments",
        "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYnSURBVHgB7d05aFRdGIfxNzG4ERUVcYm7iCIqFuIuIpaKWAmKYKc2KjaCYGGjjYXYiGBlI2IvWGiljYKoES00ZCU7Sci+x+/7H7hDZszEOzMJ79zw/EBmkowTCx/OuefeObfkz/8MgItSA+CGAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4KqusrDQA8ZSUlNj8+fOtvLzcli9fbosXL7ZClBmA2HQvo+Hh4fCno6PDVq5caRUVFZavEu6ONLdEM5rNmzcbZodGQQXY1NQUvl6yZIlt2bLF8sExIJAjjVmahio6TUF7e3utsbHR8kGAQJ4U4urVq8NzTUcHBgYsVwQIFEARrlu3Ljzv6uqyXBEgUKAFCxaEx76+PssVAQIFitYxR0ZGLFcECMyQfE4oECDgiAABRwQIOCJAwBEBAo4IEHBEgIAjAgQcESDgiAABRwQIOCJAwBEBYk7TJxRqa2utWHdeYVMmZNXQ0GCvXr2K9doTJ07Y/v37rZgovlu3bllPT48dP37crly5Er4/Pj5ujx8/DlFeunQp9al2DwSIrPr7++3r16+xXrt169aiC1D/fsUnv3//Tn1fAX758iU8P3fuHAGi+F28eHHaPTA3btxoxUb7dl69etV+/Phhp06dsmJEgIjl0KFD4T900hw7diz8KVYEiBmnYytN8cbGxmzPnj1hC7/q6mr79euXrVq1ynbu3GlLly5NvV47immK2N7ebmvXrrXdu3fbwoULs75/a2ur1dTUhNeXlZWFKaT+jn5PJr2vNktav359avOkYkKAmHGjo6P26NGj8Pzu3bv25MkT6+zsTHvNtWvX7MiRI/bs2TN7//592s9WrFgRFk8yNxfu7u62ly9f2ocPH/76nQr2+vXrtnfv3rTvv3jxwqqqquzChQtFGSCnITCrovgUxq5du1Lff/r0aViJVHwK7eTJkyE80esVphZLIhMTE+G9ovgUnALWyCdDQ0P28OHDsHKbJIyAmFWKSaPgjh07wtfNzc12+/bt8Pzz589hceTy5cthu3dNXd+9e2fPnz+3+vr6sNt0tLjz6dMn+/nzZ3h+/vx5O336tJWWlqZ+x82bN8Nzrdpu2LDBkoIAEcuNGzey/kyjkUasqZw5cyYVn+gY7+DBg/bx48fwtQJUfKJHjYQKUNra2lIBahFIz3Xsd/To0bTfoZEzek8dayYJU1AUTNO/bCbHF9m2bVt4VDiZo9W8efNSU9HBwcG0n+kYLjM+TVN1k5TofJ+iTRJGQMRy586dtJXLuHTnoEzRiLdo0aIp/45WNrOpq6sLU1ddXqbnmYs7SUOAiEVTR8/zgFpZ1cKNjgUzrVmzJjy2tLRY0hAgEuH169ep+Pbt2xeu7dy0aVO4QaZGzLdv36aOHZOEAJEI379/D48HDhwI5/sy6eR8ErEIg0TQhdUSLdBMpkWgqaamScAIiFg0wug4LBvdomvZsmU2WzTt1HnBN2/ehFMSujutFnP079IpkKQuxhAgYrl///60P9fpAV1eNlsOHz4cjgPl3r17qWtFo1MgWqGNTkUkCVNQzIjoqpQ4dK4vzntNfk8tuDx48MAqKirC1wovik/XeZ49ezY8n+4URjEq+VOsn9VHXiorK8Nj5oXMc4nuRKtL2vT5RH0Sohii03lJybwY/F+YgiJxysvLbfv27TYXMAUFHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBCYIdF+p7kgQKBAUXhT3R7tXwgQKNDw8HB41AeFc0WAQAE0+uneFJLPzuEECOQp2hZRtEO39qjJFXvCADlSeJp2RiOfbkAT7daW83t9+/aNXdGAPGnkyzc+YQQEcqDRT6udWnDRMV8+086092NfUMAPizCAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4Og/pgPKy/3FAHcAAAAASUVORK5CYII="
      }
    },
    {
      "name": "iconBefore",
      "type": "iconInput",
      "props": {
        "docs": "Add icon to the front",
        "label": "Prefix icon",
        "labelPosition": "left",
        "listEditorType": "Adornments",
        "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqESURBVHgB7d1nixTNGsbx8knmnHPOCbOIGUVRMCCiqPgN/FKCLwRzDqgYEMWEYs4555yfc/51qD69be/uTE+4R71+sGzqme2Z7aur6q6anjr//pcTERN/OBExowCKGFIARQwpgCKGFEARQwqgiCEFUMSQAihiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGJIARQxpACKGFIARQz95Yrg/fv37vnz5+7du3fu8+fPTm83IZKbggN49+5dHz4RyV9BAbxx44Z78+aN/7p169auWbNmrl69eq5OnTpORGqXOYC0fITvn3/+cV27dnX169d3IpKfTEWYMOaDwieSXaYAhvDR7VT4RLLLFECqnWDMJyLZZQogUw2g4CIi2WUKYJjnU7VTpDBaCSNiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYKso1YQp19uxZVypt2rTxHyKVyDSAjx8/dvv27XOldO7cOf95ypQpCqJUHNMAhnCUA2EvNICHDx92z549q3W7P//8082cOdP98Yd6+IX4/v2727Ztm3/1zcSJE13Tpk3dr8a8BSwXwj5o0CBXiIcPH7p79+7ltG2xLs1I9/zTp0+ue/furkWLFu53QgC58BdGjRqlAMr/dOjQwfXv37/GbYr1WskjR464Dx8+uMaNG/92AfwdKIAZtGrVyg0YMMCJFKpiAkiRBHQVC+2aDhw4MBrvlbrIk4sHDx746+hwESu6UW/fvnX379/3n0OVlss7xt26dct9+fLFt364cOFCNKbs0qXLD9uHv8MYldtwvR7uN63bxr6wLffXo0cPv/2dO3fc06dPXefOnf1HdV68eOH/Bi18z549U7f59u1b1HVs27atb73j6MpzPzz+unXr+hNa+/btc+41hP1Hr169Ure5fv2678J26tQp9dIp7COP+eXLl347ehfsa7kvMlYRAYxPFfCZAGYJIrflII+P9QhjOYs9aQ4dOuQPuqlTp7rjx4+78+fP/7DNwoULXbt27aLv9+7d6w/Q4Pbt2/4Dy5YtqxJADsjNmze7J0+e/HC/Q4YMcWPHjvUHesBV7bZv3+7vg2LRpk2bot/9/fffNQYw3BZLly5N7RZzYIdtFi9eHAWQ/+eBAwei8MRxwpg7d65r0qSJq018H1asWPHD779+/eq2bt3qv04+r2Acz+3DyS1u0qRJ/vgpVwGtIsp0yaARJFpEwpMrtuU2yUKLdfjiTpw44cNHq0QXltYn2Lhxo3v16lX0Pb8nPHF8P3ToUNegQYPoZ7SS8fDRmjA+DS3fmTNn3K5du1L3h4tr7dixI7odrUnz5s1dTbp16xaF/+rVq6nbXL582X8mnJwQwbVk169fH4WP/eN/xt8FLdGGDRt8eEqJlnfLli1R+Gghe/fuHT2m/fv3u9OnT7tyqZgu6OrVq/0/JB4gviaMNbWGydsEVA8rKXwgYMOGDXPjx4+PfsbZeN26dT4MdDtD6MaMGeM/X7lyxR8sM2bMcH369PnhPnfv3u3DxwG0YMGC6IAG4eOAunnzpg9F2u2ZMlmyZIlr2bKlywXb9+vXz9/3xYsX3ejRo6v8nhPCpUuX/NfxE+jRo0ejq+nNmzevSit77do1P93A88NjoTtaClSTOVmxH5wY5s+fH/UM6IZyouL5psfCybEcVdeKKsIQGP4B8TFc6J4mu6Vp3U2UI3gcfHxUhzkrWqokulnx8KFjx44+GAQk3y73x48f/cGL2bNnVwkfCPOjR498UPhIC+C0adNyDl/Qt29f//gJTHJ+lZNIQMsSTJ482d+OsVeyi8sUCycQglHKADLuZp/5W3PmzKnSLafLOX36dP942Ibndfjw4a7UKq4KyhMQ/qmhMIN4EMP3SZXS6nGQpaG7k4YTCQGkCJKP0O2kcFDdffPWAYSvunAzpZIvxlS0DhyotBjx/0XoftJVbdiwYfRzCixpf4suZ/xxhzf7KYXwHFA8infjA1p3Tg48Lrqq5VCx0xA8WWnd0koIHmd2Joark/bPRXVdGgofqC641QkHFF3UlStXpm4TxpVsQwuTrJ6mVVNzwf+FlUFUZ8eNG+cDRhcvtMhp86R083hTH1pJTh4UU5KFkFK+tySFMLDPtIZpwvOVy4qnYqj4ecC0bmlg1eLR4uTbbSuF169fR1/HCzjVSQtgVnRnCSABorBC6xamHvgbtIBxVHQpwlBsSaL8T4sTxoilEn8fy9qeL7r35fBTTMTHu6Xxn/3uwkmAA55CSk1ooRo1auSKhakFur20aHRDCWAovhDOv/6qemjt3LkzCh/jYwLK/tNbYN8owoTWs1C0xGkIOicCqr3JsXhScv9L5adaCaPQVRVK/LQcHMiMYcqJqRICyBhzxIgR0TwlVdI4KqOhy0cxZvDgwT/cVz5jrtBlBy1wcvKcwlMaAkjIw9K+SqDl+j+J8I5UcfGq58mTJ1Nvd+rUKT8pzbin2KheghPAnj17/NeMc5NVzPjcXtr4mPFWPm9zHu/+J1tNxtHVvb409KCY+uHEkYaWmseS66L7QimAGRAGxhA1fVBwKIZQOWQCn4M0HkRaglAMYtE2E/3h9xQzuA1zWizLKkXvga5vKLaE1i+t+EILFU4Wx44di8ZfPEe0jGvWrHH54HGHFTgsNSRwjIcJFfN88amQOJ7LUC1mPEp4w7iTzwcPHvRVXJ63tFUypaDF2Bnwj6ttvMJysdpWleSCkjl/i/CtWrXK/2z58uVRRZVlZoSOg4aiCB8c8PEDiLFfmNgvNrqb8dY1ba4RzEmyvI6CGhXb5D4mv6/NhAkT/OohJNf78liZ+E+ii8586dq1a/3UB+NO8PzEl/3Rsle3xrTY1AKWSD5rCWvalslrJsvj45zkfCHzpSNHjowqnPEDmYIHazbjC5KLuc6RhQRh32hhqptqoYrNutPkPnJbJsVDS5/rvrEgfdasWX5cF/A1iyBYbRQkx8VhEp7nNQjhY18YoxLScqnzb4aJl7AKJLlWMV/M85XTokWL3M+MA4WKYXyCO47xD9tQQmesxZm9Et/Dkcl2Ptg/iiGF7iPdR+4jXpzJ9XY8X4xR2Q+Lt1s37YKW85UKv8L1YGqbRuBsTwtU6a8c52AvZhUy69wmt7N+kbNpF7ScocjnlRUi5WLaBQ3CRHupFHotGJFSqbgX5Ir8TlQFFTGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGJIARQxpACKGFIARQxlCmB4/VYpr+Eo8jvIFMDw+qtyXTtR5FeVKYDhFdlpF1kVkdxlCmB4FTEX2CnX1aNEfkWZAsj1RkIIuQScQiiSTaZXxAe8F0B4Nxuu0szbb3H1rUq8EJBIJSoogOBiqPlc1VhE/q/gAIK3Hw5XbeZSb5qeEMlNUQIoItloJYyIIQVQxJACKGJIARQxpACKGFIARQwpgCKGFEARQwqgiCEFUMSQAihiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGLoP7jczv4XnO3wAAAAAElFTkSuQmCC",
        "validator": "icon"
      }
    },
    {
      "name": "iconAfter",
      "type": "iconInput",
      "props": {
        "docs": "Add icon to the back",
        "label": "Suffix icon",
        "labelPosition": "left",
        "listEditorType": "Adornments",
        "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7d1BSjNJAIbhyiCioqCIbrIQ14p38LiewjsEPUC2ipiFmOjmn6mG/sk4zmB3SL7O8DwQqg3o7qWrq+zu0a+/FCDijwLECBCCBAhBAoQgAUKQACFIgBAkQAgSIAQJEIIECEEChCABQpAAIUiAECRACBIgBAkQggQIQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBO5PJpAA/MxqNyu7ubjk8PCwnJyfl4OCgrGKnAD9W32X08fHRfF5eXsrp6WkZj8elr5G3I8HP1VwWi0WZzWbl+fm5+e7o6KhcXl6WPgQIPc3n8zKdTsvn52fvM6FFGOhpf3+/XFxcNMd1Ovr+/l66EiCsoEZ4dnbWHL++vpauBAgrOj4+bsa3t7fSlQBhRXt7e81YrwW7EiCsqO4NVn3WMwUIQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBAoQgAUKQR1IwaA8PD2Vdzs/Pm0+SABmkp6encn9/X9bp8fGxGW9vb2MhmoIySG0cm1BjTxEgg7TJKDYZ+1cChCABQpBFGAavLpJUdaq46tT06urq94LLuhd5fkKADNryVkEda4B9Qqy/W59edn19/fu7GmPy+q8SIIP2NbQ2yLo/+NN4amjL4bXS8VUCZPDu7u7+EVE9riH+19nw38LrEu+6CZCtUIOp72JYvoZrz4Zfp6XfTTerIYXXEiBbowZWPzWwdmGmWg6x/fmrIcZXCZCtU0P7blq6TeG1BMjW+m5a2hp6eC0BstWWp6XL320LAfK/sE3RLfOvaBAkQAgSIAQJEIIECEECZJDq3t6mJB/MJEAGaZNRbDL2r0a/+rxXFzak3Whfl+/uluhjMpk0483NTZdfsxHPsA3h2Z3rZAoKQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBAoQgAUKQAGFF7f0Mo9GodCVAWNFisWjG3d3d0pUAYUWz2awZDw8PS1cChBXM5/Pm6dzVyclJ6UqA0FONbzqdNsenp6fl4OCgdOWGXOigLrjUa7467WzPfEdHR2U8Hpc+dtpb6YHu6pmvb3yVMyB0ULca6mpnXXCp13x9pp1/+3seygQ5FmEgSIAQJEAIEiAECRCCBAhBAoQgAUKQACFIgBAkQAgSIAQJEIIECEEChCABQpAAIUiAECRACBIgBAkQggQIQQKEIAFCkAAhSIAQJEAI+hOIpgXpXqZmhgAAAABJRU5ErkJggg==",
        "validator": "icon"
      }
    },
    {
      "name": "editIcon",
      "type": "iconInput",
      "props": {
        "label": "Edit Icon",
        "labelPosition": "left",
        "validator": "icon",
        "docs": "Icon that appears on the right when in non-edit mode to signal that the text is editable.",
        "placeholder": "search",
        "listEditorType": "Adornments"
      }
    },
    {
      "name": "tooltipText",
      "type": "codeInput",
      "props": {
        "docs": "Show a tooltip on the component or its label on hover",
        "label": "Tooltip",
        "labelPosition": "auto",
        "validator": "string",
        "baseMode": "markdown",
        "listEditorType": "Adornments",
        "docsImage": "https://retool-edge.com/assets_vjs/tooltip-fIXf9fdZ.png"
      }
    },
    {
      "name": "inputTooltip",
      "type": "codeInput",
      "props": {
        "docs": "Show a tooltip below the input on focus",
        "label": "Helper text",
        "labelPosition": "auto",
        "validator": "string",
        "baseMode": "markdown",
        "listEditorType": "Adornments",
        "docsImage": "https://retool-edge.com/assets_vjs/helpertext-JYp8PT0Y.png"
      }
    },
    {
      "name": "showTimestamp",
      "type": "codeInput",
      "props": {
        "docs": "Show a timestamp for each message",
        "label": "Timestamp",
        "labelPosition": "auto",
        "validator": "boolean",
        "listEditorType": "Adornments",
        "docsImage": "https://retool-edge.com/assets_vjs/helpertext-JYp8PT0Y.png"
      }
    }
  ],
  selectedPlugin: {
    "id": "btn_load_workflow_templates",
    "uuid": "c3a44de3-c4bd-4b4c-b304-36678488092f",
    "_comment": null,
    "type": "widget",
    "subtype": "ButtonWidget2",
    "namespace": null,
    "resourceName": null,
    "resourceDisplayName": null,
    "template": {
      "heightType": "fixed",
      "horizontalAlign": "stretch",
      "clickable": false,
      "iconAfter": "",
      "submitTargetId": null,
      "hidden": false,
      "ariaLabel": "",
      "text": "Load Workflow Templates",
      "margin": "4px 8px",
      "showInEditor": false,
      "tooltipText": "",
      "allowWrap": true,
      "styleVariant": "solid",
      "submit": false,
      "iconBefore": "",
      "events": [
        {
          "method": "reset",
          "params": {},
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "click",
          "type": "datasource",
          "id": "7183814b",
          "waitMs": "0"
        },
        {
          "method": "trigger",
          "params": {},
          "targetId": null,
          "pluginId": "QUERY_WORKFLOW_TEMPLATES",
          "waitType": "debounce",
          "event": "click",
          "type": "datasource",
          "id": "83354339",
          "waitMs": "0"
        }
      ],
      "loading": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
      "loaderPosition": "auto",
      "disabled": false,
      "maintainSpaceWhenHidden": false
    },
    "style": {},
    "position2": {
      "type": "grid",
      "container": "",
      "rowGroup": "body",
      "subcontainer": "",
      "row": 6.3999999999999995,
      "col": 1,
      "height": 1,
      "width": 3,
      "tabNum": 0,
      "stackPosition": null
    },
    "mobilePosition2": null,
    "mobileAppPosition": null,
    "tabIndex": null,
    "container": "",
    "createdAt": "2026-09-20T12:41:11.989Z",
    "updatedAt": "2026-09-20T13:27:46.576Z",
    "folder": "",
    "presetName": null,
    "screen": "Main",
    "boxId": null,
    "subBoxIds": null
  },
  sections: [
    {
      "title": "Content",
      "editors": [
        {
          "name": "text",
          "type": "codeInput",
          "props": {
            "label": "Text",
            "labelPosition": "auto",
            "validator": "string | void"
          }
        },
        {
          "name": "ariaLabel",
          "type": "codeInput",
          "props": {
            "label": "Accessible name",
            "docs": "An accessible description of the button for screen readers.",
            "labelPosition": "auto",
            "validator": "string | void"
          }
        },
        {
          "name": "textBefore",
          "type": "codeInput",
          "props": {
            "docs": "Add text to the front",
            "label": "Prefix text",
            "labelPosition": "auto",
            "validator": "string | void",
            "listEditorType": "Adornments",
            "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArrSURBVHgB7d1HiBRNH8fxMuecc84Rc86iqIhiwIQe9SLixZMHvXgRDCgiePIgeBHFrBgxYECMmHPO2TX7vO+33reG3t6Z3Zne8anZ3d8Hlh13emfa7v5V/buqp7fYP/9lRMSL4kZEvFEARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8KmnSICsry7x79858/vzZ/Pjxw+jPTYgkJ98BfPLkiXnz5o0RkdTlK4D37t0znz59so/r169vypQpo97vL7p//7793rlzZyOFQ+QA0vMRvvLly5s6derY4Cl8IqmJNAjDOZ8rO134RCR1kQLIgAsoOxU+kegiBZDRTnDOJyLRRQogUw1Q7yeSP5ECqOCJpIeuhBHxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIARTxSAEU8UgBFPFIAUwDLk7ndhHuUyIiyUrLXdHy4/fv32bVqlVJLdu8eXMzceJEk2nWrl1rzpw5Y6pXr25WrFhhSpQoYf9fq1evtuGcNWuWvXNAJvnz54/ZtWtXUsuy7r169TKSP2zz3bt322Ni0KBBpkqVKv4DiAsXLiS1HLfCyMQAupslvX371t4np2rVqjaA58+ftz+fMGFCxgUQbr3z8v3797QF8MqVK/b1mjVrZhusooQAciMz9OzZM3MC6AwfPtzumEQqV65sMtG8efPMoUOHTKdOnWz4CpqOHTvm2kBw4610OXXqlPn69aupVKlSkQtgPBkVwPbt2xfIUqdVq1b2q6Bq1KiRadmypZF/X0YFMBXU0ZR4v379sj1P6dKlzd27d83NmzdNrVq1TNu2bbP1mNzF7datW+bVq1emXr16ttUvW7Zswtd/8eKFLRdYvmTJkraH4Hd4n3jLPnjwwL4f71vYsZ0ppxo3bmxKlSplS+9nz57Zn9WtW9fUqFHDngcHsX1+/vxpez9cu3bNFC/+vzFAXie8XSnhHz16ZN6/f29fl96SfVCuXLkc6/Plyxf7/rwe4wS8B7/7+vVr27jwlQg3GOPYKFasmGnRokXcZVgXVzqyDvTewee4RefHjx/t+7J+DRo0MNWqVTPJKLABZGeuXLnSPl68eLFZt26dPRCCKA379etnNmzYYI4dO5btOXbowoULTdOmTbP9/MOHD2bz5s3m+PHjOd6TwM6fPz/HjXFZdtu2baZLly6FPoA0eG7wZsqUKebw4cP2QA+iDJ88eXK2sFCiu5t54eHDh/YLDFIFA8gBvWfPnlhYgwYPHmwbQhdesN9ZntcYPXq02b59e+w5GojcAuh+FzNnzoxbFhNmt8y0adNiAaSxP3HiRLb/l0NDwLqEG6KwQjEN4cJHMChjnfXr19uRSMJH0IYOHRrbwCxPMGnBHFpaXsuFj8ARYHY4vn37ZpYvX253iBizf/9+Gz5XHdD7gV6LBim4bdkv4YaLf9NoBc8x6ZF27twZC1/Dhg1tee8CevToUXPx4sW468M00N69e+3jmjVr2rI6r56I48K99u3bt+MuQ9DAsUN1hcePH5t9+/bFwsc24P/oGh2qBBqdvBTYHjCIMNELtmnTxv6bcmTRokX28blz5+zgzpw5c2yZQel68OBBs3HjRtsC09pSAoGphKtXr9rHU6dONWPHjo21tLzHggUL7GNGbXNrVYsKqoUxY8ZkK93Onj1rB1oIJtvMHbC9e/e23zkNIFyjRo0yrVu3zvZ6jI7u2LHDBonfY8Tb3fqSxpHA8/s0kPQwjCKG0ePMmDHDlsHJYHmqlkuXLpnr16/nGIOg0rpx44Z93KFDB/udY8iFq2LFirYS4Lt7jl6R0yNeb9iwYbn2ghkVwDVr1uT6/NKlS+2GDxs3blwsfOAcjx1++vRp+28CSPjAd3pCAoiXL1/GAtinTx/7mHq/f//+2d6D1s+9Jq1bYeLKq0RojOKNknLuHT5v6t69u+2hCBkhdAFMxtOnT22o6ZHGjx+f7b6zNIQjR460+4tl7ty5Y7p165bjNUaMGJF0+ByOHQLI6/L6tWvXjj3HuavjBto4hgg5z3FcuPC559q1axebgqJHpzdOpECVoIluhxgMn+MODDZQuLeiRXKlaPg8g7t9h8NHKcXBwYk22ElFSaLtzrYKIyjuAA6fk+fFbVf2XbypD/ab25fu7uzJrFNeKJ1db0oPG+TKT0rVChUqxH7OwBzrGS5x6cWD58Txzg+DMqoHnD59eq5/+SfYMgUFR6Uc1+PFGzUDGzARWjZKVyaqeZzqgVTQ0OA0adIk4fPxSj0kmpdl4AOUjal4/vy5/c4IKQ1ePPRSSPQn8eKNUieD8vLkyZP2vTnv5/ghTPS0oFcLo1SmWuJ8kPWhUQhfjpjXPXQzKoB01Zx0+0K9z8AN54JhboDBHSSFCUFKtWz7G4INnQtaIgyIpRPnowSQiogxBHpSN/VAqMOj5YRu69atOV6HZSnXkx2oKxSDMOnC8LoLX9euXc3AgQNtz8DBSY954MCB2LmjpB8HLiUbo5cDBgzIddncKpgoqKJo/AkWZSgBdIMvhDP4fvRyLnwErkePHnbuj+kXN7ec13iGowAGXL582X5nJIz5vjAm3OXvIYCUfO5StX8b0wgEkNFLBpPcPGV4bjd4HDDfGa4e4s1fJqKPIwVwRQXiTcZS8sQrTSUat62D3Dk+U0MEIR7m3phGYpl0c9ch08PxHuD8l1H1IE5VnHhjDInmE+PJqABy2RcjYYm+wldcpBtlJ5jMpSVmEIGTaM77mIAvrIMxjO5yzpXoy43+poMbpWS+le0ZDCLPuTEASjz2gRvU4DsXVDAqye+m0sski3LSDba43i/e4EtwpJVpKXc+SjBZtyNHjphkZVQJyiVgfCVCfc3VK39L3759Y5dZLVmyJFbPuw3MYEU6D8ZMwcQxX4lwYM6dO9ekA0P3BIvwbdq0yf5s9uzZtqdhmoGLH7Zs2WIbWz47B+bZgsP59FR/6+Jxyk1GQp3wxQLguGDqi3NEPl7FFz2haxSCj/NSoErQVIaY87wG7/9XuASvKWTAZdmyZfaEGgTPhY8pEiaHke4BgEyX17YMC27TMA5cJsuDpVuwsnGT8MG5XRc+fmfIkCE2pMm+X6rY927d6OkSTcFwUQDniY4LHKPlkyZNSnrdiv0T4Y/9cdUAwkOzhQk7neFoJoQZHMiE0LkP0OY2V1qQsI2ZbwtOcAdRdrIMF4AzKJNoTtcnTlO49pV1JayprqNGQROg7CnIn/ErCIKXcMVDb5jpH9qlh8vPOmoUVMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEIwVQxCMFUMQjBVDEo0gBdPfcFJH8iRRA98l0BVEkfyIF0H2QkjsHi0h0kQLo7ofP7cPVC4pEFymA3CfF3YyUm5QqhCLRRB4F5e5R3CgnKyvL3kOfm9IoiCKpiXRXtCDuUJzoL9WISO7yHUDQC/KnmbiFHD1hGl5SpEhISwBFJBpdCSPikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOKRAijikQIo4pECKOLRfwAlfLaGDR9tzwAAAABJRU5ErkJggg=="
          }
        },
        {
          "name": "textAfter",
          "type": "codeInput",
          "props": {
            "docs": "Add text to the back",
            "label": "Suffix text",
            "labelPosition": "auto",
            "validator": "string | void",
            "listEditorType": "Adornments",
            "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYnSURBVHgB7d05aFRdGIfxNzG4ERUVcYm7iCIqFuIuIpaKWAmKYKc2KjaCYGGjjYXYiGBlI2IvWGiljYKoES00ZCU7Sci+x+/7H7hDZszEOzMJ79zw/EBmkowTCx/OuefeObfkz/8MgItSA+CGAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4IkDAEQECjggQcESAgCMCBBwRIOCIAAFHBAg4KqusrDQA8ZSUlNj8+fOtvLzcli9fbosXL7ZClBmA2HQvo+Hh4fCno6PDVq5caRUVFZavEu6ONLdEM5rNmzcbZodGQQXY1NQUvl6yZIlt2bLF8sExIJAjjVmahio6TUF7e3utsbHR8kGAQJ4U4urVq8NzTUcHBgYsVwQIFEARrlu3Ljzv6uqyXBEgUKAFCxaEx76+PssVAQIFitYxR0ZGLFcECMyQfE4oECDgiAABRwQIOCJAwBEBAo4IEHBEgIAjAgQcESDgiAABRwQIOCJAwBEBYk7TJxRqa2utWHdeYVMmZNXQ0GCvXr2K9doTJ07Y/v37rZgovlu3bllPT48dP37crly5Er4/Pj5ujx8/DlFeunQp9al2DwSIrPr7++3r16+xXrt169aiC1D/fsUnv3//Tn1fAX758iU8P3fuHAGi+F28eHHaPTA3btxoxUb7dl69etV+/Phhp06dsmJEgIjl0KFD4T900hw7diz8KVYEiBmnYytN8cbGxmzPnj1hC7/q6mr79euXrVq1ynbu3GlLly5NvV47immK2N7ebmvXrrXdu3fbwoULs75/a2ur1dTUhNeXlZWFKaT+jn5PJr2vNktav359avOkYkKAmHGjo6P26NGj8Pzu3bv25MkT6+zsTHvNtWvX7MiRI/bs2TN7//592s9WrFgRFk8yNxfu7u62ly9f2ocPH/76nQr2+vXrtnfv3rTvv3jxwqqqquzChQtFGSCnITCrovgUxq5du1Lff/r0aViJVHwK7eTJkyE80esVphZLIhMTE+G9ovgUnALWyCdDQ0P28OHDsHKbJIyAmFWKSaPgjh07wtfNzc12+/bt8Pzz589hceTy5cthu3dNXd+9e2fPnz+3+vr6sNt0tLjz6dMn+/nzZ3h+/vx5O336tJWWlqZ+x82bN8Nzrdpu2LDBkoIAEcuNGzey/kyjkUasqZw5cyYVn+gY7+DBg/bx48fwtQJUfKJHjYQKUNra2lIBahFIz3Xsd/To0bTfoZEzek8dayYJU1AUTNO/bCbHF9m2bVt4VDiZo9W8efNSU9HBwcG0n+kYLjM+TVN1k5TofJ+iTRJGQMRy586dtJXLuHTnoEzRiLdo0aIp/45WNrOpq6sLU1ddXqbnmYs7SUOAiEVTR8/zgFpZ1cKNjgUzrVmzJjy2tLRY0hAgEuH169ep+Pbt2xeu7dy0aVO4QaZGzLdv36aOHZOEAJEI379/D48HDhwI5/sy6eR8ErEIg0TQhdUSLdBMpkWgqaamScAIiFg0wug4LBvdomvZsmU2WzTt1HnBN2/ehFMSujutFnP079IpkKQuxhAgYrl///60P9fpAV1eNlsOHz4cjgPl3r17qWtFo1MgWqGNTkUkCVNQzIjoqpQ4dK4vzntNfk8tuDx48MAqKirC1wovik/XeZ49ezY8n+4URjEq+VOsn9VHXiorK8Nj5oXMc4nuRKtL2vT5RH0Sohii03lJybwY/F+YgiJxysvLbfv27TYXMAUFHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBCYIdF+p7kgQKBAUXhT3R7tXwgQKNDw8HB41AeFc0WAQAE0+uneFJLPzuEECOQp2hZRtEO39qjJFXvCADlSeJp2RiOfbkAT7daW83t9+/aNXdGAPGnkyzc+YQQEcqDRT6udWnDRMV8+086092NfUMAPizCAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4IgAAUcECDgiQMARAQKOCBBwRICAIwIEHBEg4Og/pgPKy/3FAHcAAAAASUVORK5CYII="
          }
        },
        {
          "name": "iconBefore",
          "type": "iconInput",
          "props": {
            "docs": "Add icon to the front",
            "label": "Prefix icon",
            "labelPosition": "left",
            "listEditorType": "Adornments",
            "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqESURBVHgB7d1nixTNGsbx8knmnHPOCbOIGUVRMCCiqPgN/FKCLwRzDqgYEMWEYs4555yfc/51qD69be/uTE+4R71+sGzqme2Z7aur6q6anjr//pcTERN/OBExowCKGFIARQwpgCKGFEARQwqgiCEFUMSQAihiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGJIARQxpACKGFIARQz95Yrg/fv37vnz5+7du3fu8+fPTm83IZKbggN49+5dHz4RyV9BAbxx44Z78+aN/7p169auWbNmrl69eq5OnTpORGqXOYC0fITvn3/+cV27dnX169d3IpKfTEWYMOaDwieSXaYAhvDR7VT4RLLLFECqnWDMJyLZZQogUw2g4CIi2WUKYJjnU7VTpDBaCSNiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYKso1YQp19uxZVypt2rTxHyKVyDSAjx8/dvv27XOldO7cOf95ypQpCqJUHNMAhnCUA2EvNICHDx92z549q3W7P//8082cOdP98Yd6+IX4/v2727Ztm3/1zcSJE13Tpk3dr8a8BSwXwj5o0CBXiIcPH7p79+7ltG2xLs1I9/zTp0+ue/furkWLFu53QgC58BdGjRqlAMr/dOjQwfXv37/GbYr1WskjR464Dx8+uMaNG/92AfwdKIAZtGrVyg0YMMCJFKpiAkiRBHQVC+2aDhw4MBrvlbrIk4sHDx746+hwESu6UW/fvnX379/3n0OVlss7xt26dct9+fLFt364cOFCNKbs0qXLD9uHv8MYldtwvR7uN63bxr6wLffXo0cPv/2dO3fc06dPXefOnf1HdV68eOH/Bi18z549U7f59u1b1HVs27atb73j6MpzPzz+unXr+hNa+/btc+41hP1Hr169Ure5fv2678J26tQp9dIp7COP+eXLl347ehfsa7kvMlYRAYxPFfCZAGYJIrflII+P9QhjOYs9aQ4dOuQPuqlTp7rjx4+78+fP/7DNwoULXbt27aLv9+7d6w/Q4Pbt2/4Dy5YtqxJADsjNmze7J0+e/HC/Q4YMcWPHjvUHesBV7bZv3+7vg2LRpk2bot/9/fffNQYw3BZLly5N7RZzYIdtFi9eHAWQ/+eBAwei8MRxwpg7d65r0qSJq018H1asWPHD779+/eq2bt3qv04+r2Acz+3DyS1u0qRJ/vgpVwGtIsp0yaARJFpEwpMrtuU2yUKLdfjiTpw44cNHq0QXltYn2Lhxo3v16lX0Pb8nPHF8P3ToUNegQYPoZ7SS8fDRmjA+DS3fmTNn3K5du1L3h4tr7dixI7odrUnz5s1dTbp16xaF/+rVq6nbXL582X8mnJwQwbVk169fH4WP/eN/xt8FLdGGDRt8eEqJlnfLli1R+Gghe/fuHT2m/fv3u9OnT7tyqZgu6OrVq/0/JB4gviaMNbWGydsEVA8rKXwgYMOGDXPjx4+PfsbZeN26dT4MdDtD6MaMGeM/X7lyxR8sM2bMcH369PnhPnfv3u3DxwG0YMGC6IAG4eOAunnzpg9F2u2ZMlmyZIlr2bKlywXb9+vXz9/3xYsX3ejRo6v8nhPCpUuX/NfxE+jRo0ejq+nNmzevSit77do1P93A88NjoTtaClSTOVmxH5wY5s+fH/UM6IZyouL5psfCybEcVdeKKsIQGP4B8TFc6J4mu6Vp3U2UI3gcfHxUhzkrWqokulnx8KFjx44+GAQk3y73x48f/cGL2bNnVwkfCPOjR498UPhIC+C0adNyDl/Qt29f//gJTHJ+lZNIQMsSTJ482d+OsVeyi8sUCycQglHKADLuZp/5W3PmzKnSLafLOX36dP942Ibndfjw4a7UKq4KyhMQ/qmhMIN4EMP3SZXS6nGQpaG7k4YTCQGkCJKP0O2kcFDdffPWAYSvunAzpZIvxlS0DhyotBjx/0XoftJVbdiwYfRzCixpf4suZ/xxhzf7KYXwHFA8infjA1p3Tg48Lrqq5VCx0xA8WWnd0koIHmd2Joark/bPRXVdGgofqC641QkHFF3UlStXpm4TxpVsQwuTrJ6mVVNzwf+FlUFUZ8eNG+cDRhcvtMhp86R083hTH1pJTh4UU5KFkFK+tySFMLDPtIZpwvOVy4qnYqj4ecC0bmlg1eLR4uTbbSuF169fR1/HCzjVSQtgVnRnCSABorBC6xamHvgbtIBxVHQpwlBsSaL8T4sTxoilEn8fy9qeL7r35fBTTMTHu6Xxn/3uwkmAA55CSk1ooRo1auSKhakFur20aHRDCWAovhDOv/6qemjt3LkzCh/jYwLK/tNbYN8owoTWs1C0xGkIOicCqr3JsXhScv9L5adaCaPQVRVK/LQcHMiMYcqJqRICyBhzxIgR0TwlVdI4KqOhy0cxZvDgwT/cVz5jrtBlBy1wcvKcwlMaAkjIw9K+SqDl+j+J8I5UcfGq58mTJ1Nvd+rUKT8pzbin2KheghPAnj17/NeMc5NVzPjcXtr4mPFWPm9zHu/+J1tNxtHVvb409KCY+uHEkYaWmseS66L7QimAGRAGxhA1fVBwKIZQOWQCn4M0HkRaglAMYtE2E/3h9xQzuA1zWizLKkXvga5vKLaE1i+t+EILFU4Wx44di8ZfPEe0jGvWrHH54HGHFTgsNSRwjIcJFfN88amQOJ7LUC1mPEp4w7iTzwcPHvRVXJ63tFUypaDF2Bnwj6ttvMJysdpWleSCkjl/i/CtWrXK/2z58uVRRZVlZoSOg4aiCB8c8PEDiLFfmNgvNrqb8dY1ba4RzEmyvI6CGhXb5D4mv6/NhAkT/OohJNf78liZ+E+ii8586dq1a/3UB+NO8PzEl/3Rsle3xrTY1AKWSD5rCWvalslrJsvj45zkfCHzpSNHjowqnPEDmYIHazbjC5KLuc6RhQRh32hhqptqoYrNutPkPnJbJsVDS5/rvrEgfdasWX5cF/A1iyBYbRQkx8VhEp7nNQjhY18YoxLScqnzb4aJl7AKJLlWMV/M85XTokWL3M+MA4WKYXyCO47xD9tQQmesxZm9Et/Dkcl2Ptg/iiGF7iPdR+4jXpzJ9XY8X4xR2Q+Lt1s37YKW85UKv8L1YGqbRuBsTwtU6a8c52AvZhUy69wmt7N+kbNpF7ScocjnlRUi5WLaBQ3CRHupFHotGJFSqbgX5Ir8TlQFFTGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGJIARQxpACKGFIARQxlCmB4/VYpr+Eo8jvIFMDw+qtyXTtR5FeVKYDhFdlpF1kVkdxlCmB4FTEX2CnX1aNEfkWZAsj1RkIIuQScQiiSTaZXxAe8F0B4Nxuu0szbb3H1rUq8EJBIJSoogOBiqPlc1VhE/q/gAIK3Hw5XbeZSb5qeEMlNUQIoItloJYyIIQVQxJACKGJIARQxpACKGFIARQwpgCKGFEARQwqgiCEFUMSQAihiSAEUMaQAihhSAEUMKYAihhRAEUMKoIghBVDEkAIoYkgBFDGkAIoYUgBFDCmAIoYUQBFDCqCIIQVQxJACKGLoP7jczv4XnO3wAAAAAElFTkSuQmCC",
            "validator": "icon"
          }
        },
        {
          "name": "iconAfter",
          "type": "iconInput",
          "props": {
            "docs": "Add icon to the back",
            "label": "Suffix icon",
            "labelPosition": "left",
            "listEditorType": "Adornments",
            "docsImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB4CAYAAADrGP7PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7d1BSjNJAIbhyiCioqCIbrIQ14p38LiewjsEPUC2ipiFmOjmn6mG/sk4zmB3SL7O8DwQqg3o7qWrq+zu0a+/FCDijwLECBCCBAhBAoQgAUKQACFIgBAkQAgSIAQJEIIECEEChCABQpAAIUiAECRACBIgBAkQggQIQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBO5PJpAA/MxqNyu7ubjk8PCwnJyfl4OCgrGKnAD9W32X08fHRfF5eXsrp6WkZj8elr5G3I8HP1VwWi0WZzWbl+fm5+e7o6KhcXl6WPgQIPc3n8zKdTsvn52fvM6FFGOhpf3+/XFxcNMd1Ovr+/l66EiCsoEZ4dnbWHL++vpauBAgrOj4+bsa3t7fSlQBhRXt7e81YrwW7EiCsqO4NVn3WMwUIQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBAoQgAUKQR1IwaA8PD2Vdzs/Pm0+SABmkp6encn9/X9bp8fGxGW9vb2MhmoIySG0cm1BjTxEgg7TJKDYZ+1cChCABQpBFGAavLpJUdaq46tT06urq94LLuhd5fkKADNryVkEda4B9Qqy/W59edn19/fu7GmPy+q8SIIP2NbQ2yLo/+NN4amjL4bXS8VUCZPDu7u7+EVE9riH+19nw38LrEu+6CZCtUIOp72JYvoZrz4Zfp6XfTTerIYXXEiBbowZWPzWwdmGmWg6x/fmrIcZXCZCtU0P7blq6TeG1BMjW+m5a2hp6eC0BstWWp6XL320LAfK/sE3RLfOvaBAkQAgSIAQJEIIECEECZJDq3t6mJB/MJEAGaZNRbDL2r0a/+rxXFzak3Whfl+/uluhjMpk0483NTZdfsxHPsA3h2Z3rZAoKQQKEIAFCkAAhSIAQJEAIEiAECRCCBAhBAoQgAUKQAGFF7f0Mo9GodCVAWNFisWjG3d3d0pUAYUWz2awZDw8PS1cChBXM5/Pm6dzVyclJ6UqA0FONbzqdNsenp6fl4OCgdOWGXOigLrjUa7467WzPfEdHR2U8Hpc+dtpb6YHu6pmvb3yVMyB0ULca6mpnXXCp13x9pp1/+3seygQ5FmEgSIAQJEAIEiAECRCCBAhBAoQgAUKQACFIgBAkQAgSIAQJEIIECEEChCABQpAAIUiAECRACBIgBAkQggQIQQKEIAFCkAAhSIAQJEAI+hOIpgXpXqZmhgAAAABJRU5ErkJggg==",
            "validator": "icon"
          }
        },
        {
          "name": "editIcon",
          "type": "iconInput",
          "props": {
            "label": "Edit Icon",
            "labelPosition": "left",
            "validator": "icon",
            "docs": "Icon that appears on the right when in non-edit mode to signal that the text is editable.",
            "placeholder": "search",
            "listEditorType": "Adornments"
          }
        },
        {
          "name": "tooltipText",
          "type": "codeInput",
          "props": {
            "docs": "Show a tooltip on the component or its label on hover",
            "label": "Tooltip",
            "labelPosition": "auto",
            "validator": "string",
            "baseMode": "markdown",
            "listEditorType": "Adornments",
            "docsImage": "https://retool-edge.com/assets_vjs/tooltip-fIXf9fdZ.png"
          }
        },
        {
          "name": "inputTooltip",
          "type": "codeInput",
          "props": {
            "docs": "Show a tooltip below the input on focus",
            "label": "Helper text",
            "labelPosition": "auto",
            "validator": "string",
            "baseMode": "markdown",
            "listEditorType": "Adornments",
            "docsImage": "https://retool-edge.com/assets_vjs/helpertext-JYp8PT0Y.png"
          }
        },
        {
          "name": "showTimestamp",
          "type": "codeInput",
          "props": {
            "docs": "Show a timestamp for each message",
            "label": "Timestamp",
            "labelPosition": "auto",
            "validator": "boolean",
            "listEditorType": "Adornments",
            "docsImage": "https://retool-edge.com/assets_vjs/helpertext-JYp8PT0Y.png"
          }
        }
      ]
    },
    {
      "title": "Interaction",
      "editors": [
        null,
        {
          "name": "submitTargetId",
          "type": "pluginSelect",
          "props": {
            "label": "Form to submit",
            "docs": "Select a Form to submit when this Button is clicked. The `submitting` and `submitDisabled` states will also be inherited."
          }
        },
        {
          "type": "componentWithHidden"
        },
        {
          "type": "events",
          "props": {
            "events": [
              "click"
            ]
          }
        },
        {
          "name": "loading",
          "type": "codeInput",
          "props": {
            "label": "Loading",
            "placeholder": "false",
            "docs": "Whether the component should show a loading indicator.",
            "example": "`{{ query1.isFetching }}`"
          }
        },
        {
          "name": "loaderPosition",
          "type": "select",
          "props": {
            "label": "Loader position",
            "labelPosition": "left",
            "options": [
              {
                "value": "auto",
                "label": "Auto"
              },
              {
                "value": "left",
                "label": "Prefix"
              },
              {
                "value": "right",
                "label": "Suffix"
              },
              {
                "value": "replace",
                "label": "Replace contents"
              }
            ]
          }
        },
        {
          "name": "disabled",
          "type": "codeInput",
          "props": {
            "baseMode": "javascript",
            "docs": "Dynamically control whether the component is disabled.\n\nDisabled inputs are greyed out and cannot be modified or focused.",
            "example": "",
            "label": "Disabled",
            "labelPosition": "auto",
            "placeholder": "false",
            "validator": "boolean | void"
          }
        },
        {
          "name": "formDataKey",
          "type": "codeInput",
          "props": {
            "label": "Form data key",
            "labelPosition": "auto",
            "docs": "Specify a key of a wrapping form component when constructing the `data` attribute.\n\n---\n\n1. This will cause the values of the fields within to appear as an array of objects keyed by the form data key, e.g. `formDataKey: [{input1: 'value'}, {input1: 'value'}]`\n2. When this is empty or is the same as another field, this field will **not** appear in the `data` attribute",
            "validator": "string"
          }
        }
      ]
    },
    {
      "title": "Appearance",
      "editors": [
        {
          "name": "horizontalAlign",
          "type": "segmented",
          "props": {
            "label": "Align",
            "labelPosition": "left",
            "options": [
              {
                "icon": "IconHorizontalAlignLeft",
                "label": "left",
                "value": "left"
              },
              {
                "icon": "IconHorizontalAlignCenter",
                "label": "center",
                "value": "center"
              },
              {
                "icon": "IconHorizontalAlignRight",
                "label": "right",
                "value": "right"
              },
              {
                "value": "stretch",
                "label": "Stretch",
                "icon": "IconHorizontalAlignJustify"
              }
            ]
          }
        },
        {
          "name": "allowWrap",
          "type": "checkbox",
          "props": {
            "allowDynamic": false,
            "label": "Wrap text",
            "labelPosition": "left",
            "defaultValue": true
          }
        },
        {
          "type": "stylesV3",
          "props": {
            "variants": {
              "solid": {
                "prefix": "button",
                "props": {
                  "label": {
                    "type": "contrastText",
                    "context": "background"
                  },
                  "icon": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "label"
                    }
                  },
                  "background": {
                    "type": "defaultColor",
                    "defaultValue": "primary"
                  },
                  "hoverBackground": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": [
                        "background"
                      ]
                    }
                  },
                  "hoverLabel": {
                    "type": "contrastText",
                    "context": "hoverBackground"
                  },
                  "activeBackground": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": [
                        "background"
                      ]
                    }
                  },
                  "border": {
                    "type": "color",
                    "color": "transparent"
                  },
                  "activeBorder": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "border"
                    }
                  },
                  "focusBorder": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "border"
                    }
                  },
                  "borderRadius": {
                    "type": "defaultNumber",
                    "defaultValue": "borderRadius"
                  },
                  "fontWeight": {
                    "type": "typography",
                    "property": "fontWeight",
                    "value": "labelEmphasizedFont"
                  },
                  "fontSize": {
                    "type": "typography",
                    "property": "size",
                    "value": "labelEmphasizedFont"
                  },
                  "fontFamily": {
                    "type": "typography",
                    "property": "fontFamily",
                    "value": "labelEmphasizedFont"
                  },
                  "paddingHorizontal": {
                    "type": "number",
                    "value": "8px"
                  },
                  "opacity": {
                    "type": "number",
                    "value": "1"
                  },
                  "boxShadow": {
                    "type": "boxShadow"
                  },
                  "hoverBoxShadow": {
                    "type": "boxShadow"
                  },
                  "activeBoxShadow": {
                    "type": "boxShadow"
                  },
                  "focusBoxShadow": {
                    "type": "boxShadow"
                  }
                },
                "composedConfigs": [
                  {
                    "prefix": "buttonContent",
                    "props": {
                      "label": {
                        "type": "contrastText"
                      },
                      "icon": {
                        "type": "generatedColor",
                        "generatedValue": {
                          "source": "label"
                        }
                      },
                      "fontSize": {
                        "type": "typography",
                        "property": "size",
                        "value": "labelEmphasizedFont"
                      },
                      "fontWeight": {
                        "type": "typography",
                        "property": "fontWeight",
                        "value": "labelEmphasizedFont"
                      },
                      "fontFamily": {
                        "type": "typography",
                        "property": "fontFamily",
                        "value": "labelEmphasizedFont"
                      },
                      "progressTrack": {
                        "type": "generatedColor",
                        "generatedValue": {
                          "source": "icon",
                          "alpha": 50
                        }
                      },
                      "progressBackground": {
                        "type": "color",
                        "color": "transparent"
                      }
                    },
                    "composedConfigs": [
                      {
                        "prefix": "progressCircle",
                        "props": {
                          "background": {
                            "type": "color",
                            "color": "transparent"
                          },
                          "track": {
                            "type": "defaultGeneratedColor",
                            "defaultValue": "surfaceSecondaryBorder"
                          },
                          "fill": {
                            "type": "defaultColor",
                            "defaultValue": "primary"
                          },
                          "completion": {
                            "type": "defaultColor",
                            "defaultValue": "success"
                          },
                          "text": {
                            "type": "contrastText",
                            "context": "background"
                          },
                          "negative": {
                            "type": "defaultColor",
                            "defaultValue": "danger"
                          },
                          "fontSize": {
                            "type": "typography",
                            "property": "size",
                            "value": "h3Font"
                          },
                          "fontWeight": {
                            "type": "typography",
                            "property": "fontWeight",
                            "value": "labelFont"
                          },
                          "fontFamily": {
                            "type": "typography",
                            "property": "fontFamily",
                            "value": "h3Font"
                          }
                        },
                        "composedConfigs": [],
                        "composedMapping": {}
                      }
                    ],
                    "composedMapping": {
                      "overrides": {
                        "progressCircle.fill": "buttonContent.icon",
                        "progressCircle.track": "buttonContent.progressTrack",
                        "progressCircle.background": "buttonContent.progressBackground"
                      }
                    }
                  }
                ],
                "composedMapping": {
                  "overrides": {
                    "buttonContent.label": "button.label",
                    "buttonContent.icon": "button.icon",
                    "buttonContent.fontWeight": "button.fontWeight"
                  }
                }
              },
              "outline": {
                "prefix": "button",
                "props": {
                  "label": {
                    "type": "contrastText",
                    "context": "background"
                  },
                  "icon": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "label"
                    }
                  },
                  "background": {
                    "type": "color",
                    "color": "transparent"
                  },
                  "hoverBackground": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": []
                    }
                  },
                  "activeBackground": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": []
                    }
                  },
                  "border": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "label",
                      "lightness": 50
                    }
                  },
                  "activeBorder": {
                    "type": "generatedColor",
                    "generatedValue": {
                      "source": "border",
                      "lightness": 600
                    }
                  },
                  "borderRadius": {
                    "type": "defaultNumber",
                    "defaultValue": "borderRadius"
                  },
                  "fontWeight": {
                    "type": "typography",
                    "property": "fontWeight",
                    "value": "labelEmphasizedFont"
                  },
                  "fontSize": {
                    "type": "typography",
                    "property": "size",
                    "value": "labelEmphasizedFont"
                  },
                  "fontFamily": {
                    "type": "typography",
                    "property": "fontFamily",
                    "value": "labelEmphasizedFont"
                  },
                  "boxShadow": {
                    "type": "boxShadow"
                  }
                },
                "composedConfigs": [
                  {
                    "prefix": "buttonContent",
                    "props": {
                      "label": {
                        "type": "contrastText"
                      },
                      "icon": {
                        "type": "generatedColor",
                        "generatedValue": {
                          "source": "label"
                        }
                      },
                      "fontSize": {
                        "type": "typography",
                        "property": "size",
                        "value": "labelEmphasizedFont"
                      },
                      "fontWeight": {
                        "type": "typography",
                        "property": "fontWeight",
                        "value": "labelEmphasizedFont"
                      },
                      "fontFamily": {
                        "type": "typography",
                        "property": "fontFamily",
                        "value": "labelEmphasizedFont"
                      },
                      "progressTrack": {
                        "type": "generatedColor",
                        "generatedValue": {
                          "source": "icon",
                          "alpha": 50
                        }
                      },
                      "progressBackground": {
                        "type": "color",
                        "color": "transparent"
                      }
                    },
                    "composedConfigs": [
                      {
                        "prefix": "progressCircle",
                        "props": {
                          "background": {
                            "type": "color",
                            "color": "transparent"
                          },
                          "track": {
                            "type": "defaultGeneratedColor",
                            "defaultValue": "surfaceSecondaryBorder"
                          },
                          "fill": {
                            "type": "defaultColor",
                            "defaultValue": "primary"
                          },
                          "completion": {
                            "type": "defaultColor",
                            "defaultValue": "success"
                          },
                          "text": {
                            "type": "contrastText",
                            "context": "background"
                          },
                          "negative": {
                            "type": "defaultColor",
                            "defaultValue": "danger"
                          },
                          "fontSize": {
                            "type": "typography",
                            "property": "size",
                            "value": "h3Font"
                          },
                          "fontWeight": {
                            "type": "typography",
                            "property": "fontWeight",
                            "value": "labelFont"
                          },
                          "fontFamily": {
                            "type": "typography",
                            "property": "fontFamily",
                            "value": "h3Font"
                          }
                        },
                        "composedConfigs": [],
                        "composedMapping": {}
                      }
                    ],
                    "composedMapping": {
                      "overrides": {
                        "progressCircle.fill": "buttonContent.icon",
                        "progressCircle.track": "buttonContent.progressTrack",
                        "progressCircle.background": "buttonContent.progressBackground"
                      }
                    }
                  }
                ],
                "composedMapping": {
                  "overrides": {
                    "buttonContent.label": "button.label",
                    "buttonContent.icon": "button.icon",
                    "buttonContent.fontWeight": "button.fontWeight"
                  }
                }
              }
            },
            "defaultVariant": "solid",
            "providesStyleContext": false,
            "groupedStyles": {
              "fill": {
                "background": {},
                "activeBackground": {},
                "hoverBackground": {},
                "icon": {}
              },
              "text": {
                "label": {},
                "fontSize": {
                  "parentEditorLabel": "Font"
                },
                "fontWeight": {
                  "parentEditorLabel": "Font"
                },
                "fontFamily": {
                  "parentEditorLabel": "Font"
                }
              },
              "border": {
                "border": {
                  "label": "Fill",
                  "styleInspectorLabel": "Border"
                },
                "borderRadius": {
                  "label": "Radius",
                  "styleInspectorLabel": "Border radius"
                }
              },
              "shadows": {
                "boxShadow": {
                  "label": "Shadow"
                }
              }
            }
          }
        },
        {
          "name": "groupLayout",
          "type": "select",
          "props": {
            "docs": "**Auto columns:** use multiple columns if space allows\n\n **Single column:** use a single column, regardless of width\n\n **Wrap:** render options horizontally",
            "label": "Group layout",
            "labelPosition": "left",
            "options": [
              {
                "value": "multiColumn",
                "label": "Auto column"
              },
              {
                "value": "singleColumn",
                "label": "Single column"
              },
              {
                "value": "wrap",
                "label": "Wrap"
              },
              {
                "value": "tree",
                "label": "Tree"
              }
            ]
          }
        },
        {
          "name": "minColumnWidth",
          "type": "codeInput",
          "props": {
            "docs": "Minimum column width (in pixels) rounded up to the nearest column. In Auto Column mode, items will snap to Retool grid columns.",
            "label": "Min col width",
            "labelPosition": "auto",
            "validator": "number | void",
            "example": "160"
          }
        },
        {
          "name": "showClear",
          "type": "checkbox",
          "props": {
            "label": "Show clear button",
            "labelPosition": "left"
          }
        },
        {
          "name": "showCharacterCount",
          "type": "checkbox",
          "props": {
            "label": "Show character count",
            "labelPosition": "left",
            "advanced": true
          }
        },
        {
          "name": "hidden",
          "type": "codeInput",
          "props": {
            "label": "Hidden",
            "labelPosition": "auto",
            "baseMode": "javascript",
            "docs": "Dynamically control whether the component is hidden.\n\nThis property can also be set via the `setHidden` API in Event Handlers or JavaScript queries.",
            "example": "",
            "placeholder": "false",
            "validator": "boolean | void"
          }
        },
        {
          "name": "maintainSpaceWhenHidden",
          "type": "checkbox",
          "props": {
            "label": "Maintain space when hidden",
            "docs": "Visually hide the component without affecting layout.",
            "advanced": true,
            "validator": "boolean | void"
          }
        },
        {
          "name": "showInEditor",
          "type": "checkbox",
          "props": {
            "label": "Always show in edit mode",
            "docs": "When in edit mode, render the component with an outline instead of hiding.",
            "allowDynamic": false,
            "advanced": true
          }
        },
        {
          "type": "componentWithHidden",
          "advanced": true
        },
        {
          "type": "componentWithHidden",
          "advanced": true
        }
      ]
    },
    {
      "title": "Spacing",
      "editors": [
        null,
        {
          "type": "componentWithHidden",
          "name": "pixelHeight"
        },
        {
          "type": "componentWithHidden",
          "name": "widthType"
        },
        {
          "type": "componentWithHidden",
          "name": "pixelWidth"
        },
        {
          "type": "componentWithHidden",
          "name": "margin"
        }
      ]
    }
  ],
  appTemplate: {
    "appMaxWidth": "1200px",
    "appStyles": "",
    "appTesting": null,
    "appThemeId": null,
    "appThemeModeId": null,
    "appThemeName": null,
    "createdAt": null,
    "customComponentCollections": [],
    "customDocumentTitle": "",
    "customDocumentTitleEnabled": false,
    "customShortcuts": [],
    "experimentalFeatures": {
      "disableMultiplayerEditing": false,
      "multiplayerEditingEnabled": false,
      "sourceControlTemplateDehydration": false
    },
    "folders": [],
    "formAppSettings": {
      "customRedirectUrl": ""
    },
    "inAppRetoolPillAppearance": "NO_OVERRIDE",
    "instrumentationEnabled": false,
    "internationalizationSettings": {
      "internationalizationEnabled": false,
      "internationalizationFiles": []
    },
    "isFetching": false,
    "isFormApp": false,
    "isGlobalWidget": false,
    "isMobileApp": false,
    "loadingIndicatorsDisabled": false,
    "markdownLinkBehavior": "auto",
    "mobileAppSettings": {
      "displaySetting": {
        "landscapeMode": false,
        "tabletMode": false
      },
      "mobileOfflineModeBannerMode": "default",
      "mobileOfflineModeDelaySync": false,
      "mobileOfflineModeEnabled": false
    },
    "mobileOfflineAssets": [],
    "multiScreenMobileApp": false,
    "notificationsSettings": {
      "globalQueryShowFailureToast": true,
      "globalQueryShowSuccessToast": false,
      "globalQueryToastDuration": 4.5,
      "globalToastPosition": "bottomRight"
    },
    "pageCodeFolders": {
      "Main": []
    },
    "pageLoadValueOverrides": [],
    "persistUrlParams": false,
    "plugins": {
      "Main": {
        "id": "Main",
        "uuid": "46fd3722-67c6-4905-84a7-fd963d403ec5",
        "_comment": null,
        "type": "screen",
        "subtype": "Screen",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "title": "Page 1",
          "browserTitle": "",
          "urlSlug": "",
          "_order": 0,
          "_searchParams": [],
          "_hashParams": [],
          "_customShortcuts": []
        },
        "style": null,
        "position2": null,
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:38:01.968Z",
        "updatedAt": "2026-09-20T12:38:01.968Z",
        "folder": "",
        "presetName": null,
        "screen": null,
        "boxId": null,
        "subBoxIds": null
      },
      "$main": {
        "id": "$main",
        "uuid": null,
        "_comment": null,
        "type": "frame",
        "subtype": "Frame",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "type": "main",
          "padding": "8px 12px",
          "enableFullBleed": false,
          "isHiddenOnDesktop": false,
          "isHiddenOnMobile": false
        },
        "style": {},
        "position2": null,
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:38:01.968Z",
        "updatedAt": "2026-09-20T12:38:01.968Z",
        "folder": "",
        "presetName": null,
        "screen": "Main",
        "boxId": null,
        "subBoxIds": null
      },
      "QUERY_WORKFLOW_TEMPLATES": {
        "id": "QUERY_WORKFLOW_TEMPLATES",
        "uuid": null,
        "_comment": null,
        "type": "datasource",
        "subtype": "WorkflowRun",
        "namespace": null,
        "resourceName": "WorkflowRun",
        "resourceDisplayName": null,
        "template": {
          "queryRefreshTime": "",
          "allowedGroupIds": [],
          "streamResponse": false,
          "lastReceivedFromResourceAt": null,
          "isFunction": false,
          "functionParameters": null,
          "queryDisabledMessage": "",
          "servedFromCache": false,
          "offlineUserQueryInputs": "",
          "functionDescription": null,
          "successMessage": "",
          "queryDisabled": "",
          "playgroundQuerySaveId": "latest",
          "workflowParams": "[{\"key\":\"wait\",\"value\":\"0\"}]",
          "resourceNameOverride": "",
          "runWhenModelUpdates": false,
          "workflowRunExecutionType": "sync",
          "showFailureToaster": true,
          "query": "",
          "playgroundQueryUuid": "",
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": "json",
          "privateParams": [],
          "queryRunOnSelectorUpdate": false,
          "runWhenPageLoadsDelay": "",
          "data": null,
          "importedQueryInputs": {},
          "isImported": false,
          "showSuccessToaster": false,
          "cacheKeyTtl": "",
          "requestSentTimestamp": null,
          "metadata": null,
          "queryRunTime": null,
          "changesetObject": "",
          "offlineOptimisticResponse": null,
          "errorTransformer": "return data.error",
          "finished": null,
          "confirmationMessage": null,
          "isFetching": false,
          "changeset": "",
          "rawData": null,
          "queryTriggerDelay": "0",
          "resourceTypeOverride": null,
          "watchedParams": [],
          "enableErrorTransformer": false,
          "showLatestVersionUpdatedWarning": false,
          "timestamp": 0,
          "importedQueryDefaults": {},
          "enableTransformer": true,
          "showUpdateSetValueDynamicallyToggle": true,
          "overrideOrgCacheForUserCache": false,
          "runWhenPageLoads": false,
          "transformer": "return data",
          "events": [
            {
              "method": null,
              "params": {},
              "targetId": null,
              "pluginId": "",
              "waitType": "debounce",
              "event": "success",
              "type": "state",
              "id": "4c0c24c2",
              "waitMs": "0"
            }
          ],
          "isMultiplayerEdited": false,
          "queryTimeout": "10000",
          "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
          "requireConfirmation": false,
          "queryFailureConditions": "",
          "changesetIsObject": false,
          "enableCaching": false,
          "allowedGroups": [],
          "offlineQueryType": "None",
          "queryThrottleTime": "750",
          "updateSetValueDynamically": false,
          "notificationDuration": 4.5
        },
        "style": null,
        "position2": null,
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:38:30.172Z",
        "updatedAt": "2026-09-20T13:45:01.458Z",
        "folder": "",
        "presetName": null,
        "screen": null,
        "boxId": null,
        "subBoxIds": null
      },
      "tbl_workflow_templates": {
        "id": "tbl_workflow_templates",
        "uuid": "7c8aa814-9a91-484a-801b-72f1bcc5b6f8",
        "_comment": null,
        "type": "widget",
        "subtype": "TableWidget2",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "selectedRowKey": null,
          "_nextAfterCursor": "",
          "_columnBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_defaultSort": null,
          "_columnSearchMode": {
            "f7ed5": "default",
            "6462c": "default",
            "92a5e": "default",
            "eb34b": "default",
            "f950e": "default"
          },
          "_columnAlternateRowBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_clearChangesetOnSave": true,
          "heightType": "fixed",
          "_columnTextColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "disableEdits": false,
          "autoColumnWidth": false,
          "_rowHeight": "",
          "_columnIds": [
            "f7ed5",
            "6462c",
            "92a5e",
            "eb34b",
            "f950e"
          ],
          "_isSaving": false,
          "_headerTextWrap": false,
          "_actionIds": [],
          "_clearChangeset": false,
          "caseSensitiveFiltering": false,
          "_limitOffsetRowCount": null,
          "selectedSourceRow": null,
          "_dynamicColumnsEnabled": false,
          "disableSave": false,
          "_columnEditableOptions": {
            "f7ed5": {
              "spellCheck": false
            },
            "6462c": {
              "spellCheck": false
            },
            "92a5e": {
              "spellCheck": false
            },
            "eb34b": {},
            "f950e": {}
          },
          "_toolbarPosition": "bottom",
          "_groupByColumns": [],
          "_toolbarButtonLabel": {
            "1a": "Filter",
            "3c": "Download",
            "4d": "Refresh"
          },
          "_nextBeforeCursor": "",
          "_persistRowSelection": false,
          "_toolbarButtonIcon": {
            "1a": "bold/interface-text-formatting-filter-2",
            "3c": "bold/interface-download-button-2",
            "4d": "bold/interface-arrows-round-left"
          },
          "changesetArray": [],
          "groupByColumns": [],
          "_toolbarButtonType": {
            "1a": "filter",
            "3c": "custom",
            "4d": "custom"
          },
          "_columnOptionList": {
            "f7ed5": {},
            "6462c": {},
            "92a5e": {},
            "eb34b": {},
            "f950e": {}
          },
          "_columnValueOverride": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": "{{ _.startCase(item) }}"
          },
          "_showBorder": true,
          "_templatePageSize": null,
          "_dynamicColumnProperties": {},
          "_showHeader": true,
          "_currentPage": 0,
          "overflowActionsOverlayMinWidth": null,
          "_actionsOverflowPosition": 0,
          "_columnKey": {
            "f7ed5": "id",
            "6462c": "name",
            "92a5e": "description",
            "eb34b": "resources",
            "f950e": "category"
          },
          "hidden": false,
          "_toolbarButtonIds": [
            "1a",
            "3c",
            "4d"
          ],
          "columnOrdering": [],
          "data": "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
          "_cellSelection": "none",
          "_serverPaginated": false,
          "_linkedFilterId": null,
          "searchMode": "fuzzy",
          "_columnCellTooltip": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnFormat": {
            "f7ed5": "string",
            "6462c": "string",
            "92a5e": "string",
            "eb34b": "tags",
            "f950e": "tag"
          },
          "_cursorCache": {},
          "_calculatedPageSize": null,
          "_primaryKeyColumnId": "f7ed5",
          "selectedDataIndex": null,
          "_columnAlignment": {
            "f7ed5": "left",
            "6462c": "left",
            "92a5e": "left",
            "eb34b": "left",
            "f950e": "left"
          },
          "_actionIcon": {},
          "margin": "4px 8px",
          "_columnTooltip": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnIcon": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_alwaysShowRowSelectionCheckboxes": false,
          "_columnCellTooltipMode": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "overflow",
            "f950e": ""
          },
          "_pageSize": null,
          "showInEditor": false,
          "_isAddingNewRows": false,
          "selectedSourceRows": [],
          "_enableExpandableRows": false,
          "_selectMultipleRowsOnActionClick": "no",
          "_columnSortDisabled": {
            "f7ed5": false,
            "6462c": false,
            "92a5e": false,
            "eb34b": false,
            "f950e": false
          },
          "_showSummaryRow": false,
          "filterStack": null,
          "_expandedRows": null,
          "changesetObject": null,
          "_actionDisabled": {},
          "_columnReferenceId": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_dynamicColumnSource": [],
          "_rowSelection": "single",
          "_columnCaption": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_dynamicColumnFormatOptions": {},
          "_dynamicRowHeights": false,
          "_columnFormatOptions": {
            "f7ed5": {},
            "6462c": {},
            "92a5e": {},
            "eb34b": {
              "automaticColors": true
            },
            "f950e": {
              "automaticColors": true
            }
          },
          "_changeset": null,
          "_afterCursor": "",
          "_columnHeaderBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "selectedRowKeys": [],
          "_columnHeaderTextColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_beforeCursor": "",
          "_columnSummaryAggregationMode": {
            "f7ed5": "none",
            "6462c": "none",
            "92a5e": "none",
            "eb34b": "none",
            "f950e": "none"
          },
          "searchTerm": "",
          "selectedRows": [],
          "_disabledVirtualization": false,
          "_expandedRowDataIndexes": [],
          "_showColumnBorders": false,
          "_columnStatusIndicatorOptions": {
            "f7ed5": {},
            "6462c": {},
            "92a5e": {},
            "eb34b": {},
            "f950e": {}
          },
          "overflowActionsOverlayMaxHeight": null,
          "_columnSize": {
            "f7ed5": 100,
            "6462c": 100,
            "92a5e": 100,
            "eb34b": 100,
            "f950e": 100
          },
          "_serverPaginationType": "limitOffsetBased",
          "_columnSortMode": {
            "f7ed5": "default",
            "6462c": "default",
            "92a5e": "default",
            "eb34b": "default",
            "f950e": "default"
          },
          "_selectSingleRowsOnActionClick": "replace",
          "_showFooter": true,
          "_groupedColumnConfig": {},
          "_dynamicColumnSize": {},
          "_alwaysShowScrollbars": false,
          "_virtualizeStartIndex": 0,
          "_toolbarButtonHidden": {
            "1a": "",
            "3c": "",
            "4d": ""
          },
          "_defaultFilters": {},
          "events": [
            {
              "method": "trigger",
              "params": {},
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "selectRow",
              "type": "datasource",
              "id": "7143129e",
              "waitMs": "0"
            },
            {
              "id": "be7ab122",
              "type": "widget",
              "waitMs": "0",
              "waitType": "debounce",
              "event": "clickToolbar",
              "method": "exportData",
              "pluginId": "tbl_workflow_templates",
              "targetId": "3c"
            },
            {
              "id": "68f733d8",
              "type": "widget",
              "waitMs": "0",
              "waitType": "debounce",
              "event": "clickToolbar",
              "method": "refresh",
              "pluginId": "tbl_workflow_templates",
              "targetId": "4d"
            }
          ],
          "_columnEditable": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "newRows": [],
          "_rowBackgroundColor": [],
          "emptyMessage": "No rows found",
          "pagination": null,
          "selectedDataIndexes": [],
          "_columnEditableInNewRows": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnGroupAggregationMode": {
            "f7ed5": "none",
            "6462c": "none",
            "92a5e": "none",
            "eb34b": "none",
            "f950e": "none"
          },
          "sortArray": [],
          "_selectedCell": null,
          "overflowType": "scroll",
          "selectedCell": null,
          "_defaultSelectedRow": {
            "mode": "index",
            "indexType": "display",
            "index": 0
          },
          "_hasNextPage": false,
          "_includeRowInChangesetArray": false,
          "_columnPosition": {
            "f7ed5": "center",
            "6462c": "center",
            "92a5e": "center",
            "eb34b": "center",
            "f950e": "center"
          },
          "_enableSaveActions": true,
          "_columnPlaceholder": {
            "f7ed5": "Enter value",
            "6462c": "Enter value",
            "92a5e": "Enter value",
            "eb34b": "Select options",
            "f950e": "Select option"
          },
          "_defaultFilterOperator": "and",
          "_actionLabel": {},
          "_virtualizeEndIndex": 0,
          "selectedRow": null,
          "_actionHidden": {},
          "maintainSpaceWhenHidden": false,
          "_columnHidden": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnLabel": {
            "f7ed5": "ID",
            "6462c": "Name",
            "92a5e": "Description",
            "eb34b": "Resources",
            "f950e": "Category"
          },
          "_showToolbar": true
        },
        "style": {},
        "position2": {
          "type": "grid",
          "container": "",
          "rowGroup": "body",
          "subcontainer": "",
          "row": 7.599999999999999,
          "col": 1,
          "height": 13.2,
          "width": 7,
          "tabNum": 0,
          "stackPosition": null
        },
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:40:57.486Z",
        "updatedAt": "2026-09-20T13:27:23.344Z",
        "folder": "",
        "presetName": null,
        "screen": "Main",
        "boxId": null,
        "subBoxIds": null
      },
      "btn_load_workflow_templates": {
        "id": "btn_load_workflow_templates",
        "uuid": "c3a44de3-c4bd-4b4c-b304-36678488092f",
        "_comment": null,
        "type": "widget",
        "subtype": "ButtonWidget2",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "heightType": "fixed",
          "horizontalAlign": "stretch",
          "clickable": false,
          "iconAfter": "",
          "submitTargetId": null,
          "hidden": false,
          "ariaLabel": "",
          "text": "Load Workflow Templates",
          "margin": "4px 8px",
          "showInEditor": false,
          "tooltipText": "",
          "allowWrap": true,
          "styleVariant": "solid",
          "submit": false,
          "iconBefore": "",
          "events": [
            {
              "method": "reset",
              "params": {},
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": "7183814b",
              "waitMs": "0"
            },
            {
              "method": "trigger",
              "params": {},
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": "83354339",
              "waitMs": "0"
            }
          ],
          "loading": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
          "loaderPosition": "auto",
          "disabled": false,
          "maintainSpaceWhenHidden": false
        },
        "style": {},
        "position2": {
          "type": "grid",
          "container": "",
          "rowGroup": "body",
          "subcontainer": "",
          "row": 6.3999999999999995,
          "col": 1,
          "height": 1,
          "width": 3,
          "tabNum": 0,
          "stackPosition": null
        },
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:41:11.989Z",
        "updatedAt": "2026-09-20T13:27:46.576Z",
        "folder": "",
        "presetName": null,
        "screen": "Main",
        "boxId": null,
        "subBoxIds": null
      },
      "var_mainPage": {
        "id": "var_mainPage",
        "uuid": null,
        "_comment": null,
        "type": "state",
        "subtype": "State",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "value": "{\n  \"isPageLoaded\": false,\n  \"isWorkflowTemplateLoaded\": false\n}"
        },
        "style": null,
        "position2": null,
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T12:48:41.305Z",
        "updatedAt": "2026-09-20T12:58:10.747Z",
        "folder": "",
        "presetName": null,
        "screen": null,
        "boxId": null,
        "subBoxIds": null
      },
      "btn_load_workflow_templates2": {
        "id": "btn_load_workflow_templates2",
        "uuid": "7433fc2c-63cd-4e89-9822-cf8eaf628f7e",
        "_comment": null,
        "type": "widget",
        "subtype": "ButtonWidget2",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "heightType": "fixed",
          "horizontalAlign": "stretch",
          "clickable": false,
          "iconAfter": "",
          "submitTargetId": null,
          "hidden": false,
          "ariaLabel": "",
          "text": "Reset",
          "margin": "4px 8px",
          "showInEditor": false,
          "tooltipText": "",
          "allowWrap": true,
          "styleVariant": "solid",
          "submit": false,
          "iconBefore": "",
          "events": [
            {
              "method": "trigger",
              "params": {
                "options": {
                  "onSuccess": null,
                  "onFailure": null,
                  "additionalScope": null
                }
              },
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": "7183814b",
              "waitMs": "0"
            }
          ],
          "loading": false,
          "loaderPosition": "auto",
          "disabled": false,
          "maintainSpaceWhenHidden": false
        },
        "style": {},
        "position2": {
          "type": "grid",
          "container": "",
          "rowGroup": "body",
          "subcontainer": "",
          "row": 6.4,
          "col": 5,
          "height": 1,
          "width": 2,
          "tabNum": 0,
          "stackPosition": null
        },
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T13:04:25.066Z",
        "updatedAt": "2026-09-20T13:04:38.915Z",
        "folder": "",
        "presetName": null,
        "screen": "Main",
        "boxId": null,
        "subBoxIds": null
      },
      "QUERY_WORKFLOW_FROM_API": {
        "id": "QUERY_WORKFLOW_FROM_API",
        "uuid": null,
        "_comment": null,
        "type": "datasource",
        "subtype": "RESTQuery",
        "namespace": null,
        "resourceName": "REST-WithoutResource",
        "resourceDisplayName": null,
        "template": {
          "queryRefreshTime": "",
          "paginationLimit": "",
          "allowedGroupIds": [],
          "openAPIRequestBody": "",
          "streamResponse": false,
          "body": "",
          "lastReceivedFromResourceAt": null,
          "isFunction": false,
          "functionParameters": null,
          "queryDisabledMessage": "",
          "servedFromCache": false,
          "openAPIResolvedSpec": "",
          "offlineUserQueryInputs": "",
          "functionDescription": null,
          "successMessage": "",
          "queryDisabled": "",
          "playgroundQuerySaveId": "latest",
          "workflowParams": null,
          "resourceNameOverride": "",
          "runWhenModelUpdates": true,
          "paginationPaginationField": "",
          "workflowRunExecutionType": "sync",
          "headers": "[{\"key\":\"X-Workflow-Api-Key\",\"value\":\"retool_wk_6b14e4268ad34789aebffbd69a2ba896\"}]",
          "showFailureToaster": true,
          "paginationEnabled": false,
          "query": "https://peterjaberau.retool.com/url/run-workflow",
          "playgroundQueryUuid": "",
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": "raw",
          "privateParams": [],
          "queryRunOnSelectorUpdate": false,
          "runWhenPageLoadsDelay": "",
          "data": null,
          "importedQueryInputs": {},
          "isImported": false,
          "showSuccessToaster": true,
          "cacheKeyTtl": "",
          "requestSentTimestamp": null,
          "cookies": "",
          "metadata": null,
          "queryRunTime": null,
          "changesetObject": "",
          "offlineOptimisticResponse": null,
          "errorTransformer": "return data.error",
          "finished": null,
          "confirmationMessage": null,
          "isFetching": false,
          "changeset": "",
          "openAPIOperationId": "",
          "rawData": null,
          "queryTriggerDelay": "0",
          "resourceTypeOverride": "",
          "watchedParams": [],
          "enableErrorTransformer": false,
          "showLatestVersionUpdatedWarning": false,
          "paginationDataField": "",
          "timestamp": 0,
          "openAPIParams": "{}",
          "importedQueryDefaults": {},
          "enableTransformer": false,
          "showUpdateSetValueDynamicallyToggle": true,
          "version": 2,
          "overrideOrgCacheForUserCache": false,
          "runWhenPageLoads": false,
          "transformer": "return data",
          "events": [],
          "queryTimeout": "10000",
          "workflowId": null,
          "requireConfirmation": false,
          "type": "GET",
          "queryFailureConditions": "",
          "changesetIsObject": false,
          "enableCaching": false,
          "allowedGroups": [],
          "bodyType": "none",
          "offlineQueryType": "None",
          "queryThrottleTime": "750",
          "updateSetValueDynamically": false,
          "notificationDuration": ""
        },
        "style": null,
        "position2": null,
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-20T15:39:29.962Z",
        "updatedAt": "2026-09-20T15:41:27.816Z",
        "folder": "",
        "presetName": null,
        "screen": null,
        "boxId": null,
        "subBoxIds": null
      },
      "select1": {
        "id": "select1",
        "uuid": "89d7956a-bd37-4be4-bcad-492339175614",
        "_comment": null,
        "type": "widget",
        "subtype": "SelectWidget2",
        "namespace": null,
        "resourceName": null,
        "resourceDisplayName": null,
        "template": {
          "imageByIndex": [],
          "_disabledByIndex": [
            "",
            "",
            ""
          ],
          "showSelectionIndicator": true,
          "_values": [
            "Option 1",
            "Option 2",
            "Option 3"
          ],
          "iconByIndex": [],
          "values": [],
          "readOnly": false,
          "clearInputValueOnChange": false,
          "iconAfter": "",
          "_iconByIndex": [
            "",
            "",
            ""
          ],
          "overlayMinWidth": null,
          "allowDeselect": false,
          "inputValue": "",
          "hidden": false,
          "customValidation": "",
          "data": [],
          "searchMode": "fuzzy",
          "hideValidationMessage": false,
          "fallbackTextByIndex": [],
          "textBefore": "",
          "_fallbackTextByIndex": [
            "",
            "",
            ""
          ],
          "selectedItem": null,
          "validationMessage": "",
          "margin": "4px 8px",
          "automaticItemColors": false,
          "itemAdornmentShape": "circle",
          "textAfter": "",
          "showInEditor": false,
          "showClear": false,
          "tooltipText": "",
          "labelAlign": "left",
          "formDataKey": "{{ self.id }}",
          "value": null,
          "hiddenByIndex": [],
          "labelCaption": "",
          "labelWidth": "33",
          "deprecatedLabels": [],
          "_hiddenByIndex": [
            "",
            "",
            ""
          ],
          "placeholder": "Select an option",
          "_captionByIndex": [
            "",
            "",
            ""
          ],
          "itemAdornmentSize": "auto",
          "label": "Label",
          "_hasMigratedNestedItems": true,
          "captionByIndex": [],
          "_validate": false,
          "itemMode": "static",
          "labelWidthUnit": "%",
          "allowCustomValue": false,
          "invalid": false,
          "selectedIndex": null,
          "_tooltipByIndex": [
            "",
            "",
            ""
          ],
          "_colorByIndex": [
            "",
            "",
            ""
          ],
          "tooltipByIndex": [],
          "iconBefore": "",
          "colorByIndex": [],
          "selectedLabel": "",
          "events": {},
          "_ids": [
            "00030",
            "00031",
            "00032"
          ],
          "emptyMessage": "No options",
          "overlayMaxHeight": 375,
          "loading": false,
          "disabled": false,
          "labelPosition": "top",
          "_labels": [
            "",
            "",
            ""
          ],
          "labelWrap": false,
          "disabledValues": [],
          "disabledByIndex": [],
          "maintainSpaceWhenHidden": false,
          "_imageByIndex": [
            "",
            "",
            ""
          ],
          "required": false,
          "labels": []
        },
        "style": {},
        "position2": {
          "type": "grid",
          "container": "",
          "rowGroup": "body",
          "subcontainer": "",
          "row": 2.8,
          "col": 7,
          "height": 0.2,
          "width": 4,
          "tabNum": 0,
          "stackPosition": null
        },
        "mobilePosition2": null,
        "mobileAppPosition": null,
        "tabIndex": null,
        "container": "",
        "createdAt": "2026-09-27T03:34:11.845Z",
        "updatedAt": "2026-09-27T03:34:11.845Z",
        "folder": "",
        "presetName": null,
        "screen": "Main",
        "boxId": null,
        "subBoxIds": null
      }
    },
    "preloadedAppJavaScript": null,
    "preloadedAppJSLinks": [],
    "pubAppDecoupledQueriesDisabled": true,
    "queryStatusVisibility": false,
    "responsiveLayoutDisabled": false,
    "rootScreen": "Main",
    "savePlatform": "web",
    "shortlink": null,
    "testEntities": [],
    "tests": [],
    "urlFragmentDefinitions": [],
    "version": "4.65.0",
    "serializedLayout": null,
    "agentEvals": {}
  },
  value: {
    "appModel": {
      "cachedJSValues": {
        "Main": {
          "pluginType": "Screen",
          "title": "Page 1",
          "browserTitle": "",
          "urlSlug": "",
          "_order": 0,
          "id": "Main"
        },
        "$main": {
          "pluginType": "Frame",
          "type": "main",
          "padding": "8px 12px",
          "enableFullBleed": false,
          "isHiddenOnDesktop": false,
          "isHiddenOnMobile": false,
          "id": "$main",
          "_desktopMargin": "",
          "_mobileMargin": ""
        },
        "QUERY_WORKFLOW_TEMPLATES": {
          "pluginType": "WorkflowRun",
          "queryRefreshTime": "",
          "streamResponse": false,
          "lastReceivedFromResourceAt": null,
          "isFunction": false,
          "functionParameters": null,
          "queryDisabledMessage": "",
          "servedFromCache": false,
          "offlineUserQueryInputs": "",
          "functionDescription": null,
          "successMessage": "",
          "queryDisabled": "",
          "playgroundQuerySaveId": "latest",
          "workflowParams": [
            {
              "key": "wait",
              "value": "0"
            }
          ],
          "resourceNameOverride": "",
          "runWhenModelUpdates": false,
          "workflowRunExecutionType": "sync",
          "showFailureToaster": true,
          "query": "",
          "playgroundQueryUuid": "",
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": "json",
          "queryRunOnSelectorUpdate": false,
          "runWhenPageLoadsDelay": "",
          "data": null,
          "isImported": false,
          "showSuccessToaster": false,
          "cacheKeyTtl": "",
          "requestSentTimestamp": null,
          "metadata": null,
          "queryRunTime": null,
          "changesetObject": "",
          "offlineOptimisticResponse": null,
          "errorTransformer": "return data.error",
          "finished": null,
          "confirmationMessage": null,
          "isFetching": false,
          "changeset": "",
          "rawData": null,
          "queryTriggerDelay": 0,
          "resourceTypeOverride": null,
          "enableErrorTransformer": false,
          "showLatestVersionUpdatedWarning": false,
          "timestamp": 0,
          "enableTransformer": true,
          "showUpdateSetValueDynamicallyToggle": true,
          "overrideOrgCacheForUserCache": false,
          "runWhenPageLoads": false,
          "transformer": "return data",
          "events": {
            "0": {
              "method": null,
              "targetId": null,
              "pluginId": "",
              "waitType": "debounce",
              "event": "success",
              "type": "state",
              "id": "4c0c24c2",
              "waitMs": 0
            }
          },
          "isMultiplayerEdited": false,
          "queryTimeout": 10000,
          "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
          "requireConfirmation": false,
          "queryFailureConditions": "",
          "id": "QUERY_WORKFLOW_TEMPLATES",
          "changesetIsObject": false,
          "enableCaching": false,
          "offlineQueryType": "None",
          "queryThrottleTime": 750,
          "updateSetValueDynamically": false,
          "notificationDuration": 4.5
        },
        "tbl_workflow_templates": {
          "pluginType": "TableWidget2",
          "selectedRowKey": null,
          "_nextAfterCursor": "",
          "_columnIds": {
            "0": "f7ed5",
            "1": "6462c",
            "2": "92a5e",
            "3": "eb34b",
            "4": "f950e"
          },
          "data": [],
          "_columnKey": {
            "f7ed5": "id",
            "6462c": "name",
            "92a5e": "description",
            "eb34b": "resources",
            "f950e": "category"
          },
          "searchTerm": "",
          "_serverPaginated": false,
          "searchMode": "disabled",
          "_serverPaginationType": "limitOffsetBased",
          "_defaultSort": null,
          "_columnReferenceId": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "sortArray": [],
          "_defaultSelectedRow": {
            "mode": "index",
            "indexType": "display",
            "index": 0
          },
          "_disabledVirtualization": true,
          "_columnValueOverride": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": []
          },
          "_columnBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnSearchMode": {
            "f7ed5": "default",
            "6462c": "default",
            "92a5e": "default",
            "eb34b": "default",
            "f950e": "default"
          },
          "_columnAlternateRowBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_clearChangesetOnSave": true,
          "heightType": "fixed",
          "_columnTextColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "disableEdits": false,
          "autoColumnWidth": false,
          "_rowHeight": "",
          "_isSaving": false,
          "_headerTextWrap": false,
          "_clearChangeset": false,
          "caseSensitiveFiltering": false,
          "_limitOffsetRowCount": null,
          "selectedSourceRow": null,
          "_dynamicColumnsEnabled": false,
          "disableSave": false,
          "_columnEditableOptions": {
            "f7ed5": {
              "spellCheck": false
            },
            "6462c": {
              "spellCheck": false
            },
            "92a5e": {
              "spellCheck": false
            }
          },
          "_toolbarPosition": "bottom",
          "_toolbarButtonLabel": {
            "1a": "Filter",
            "3c": "Download",
            "4d": "Refresh"
          },
          "_nextBeforeCursor": "",
          "_persistRowSelection": false,
          "_toolbarButtonIcon": {
            "1a": "bold/interface-text-formatting-filter-2",
            "3c": "bold/interface-download-button-2",
            "4d": "bold/interface-arrows-round-left"
          },
          "changesetArray": [],
          "groupByColumns": [],
          "_toolbarButtonType": {
            "1a": "filter",
            "3c": "custom",
            "4d": "custom"
          },
          "_showBorder": true,
          "_templatePageSize": null,
          "_dynamicColumnSource": [],
          "_showHeader": true,
          "_calculatedPageSize": 13,
          "_pageSize": 13,
          "_currentPage": 0,
          "overflowActionsOverlayMinWidth": null,
          "_actionsOverflowPosition": 0,
          "hidden": false,
          "_toolbarButtonIds": {
            "0": "1a",
            "1": "3c",
            "2": "4d"
          },
          "columnOrdering": [
            "f7ed5",
            "6462c",
            "92a5e",
            "eb34b",
            "f950e"
          ],
          "_cellSelection": "none",
          "_linkedFilterId": "",
          "margin": "4px 8px",
          "_desktopMargin": "4px 8px",
          "_columnCellTooltip": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnFormat": {
            "f7ed5": "string",
            "6462c": "string",
            "92a5e": "string",
            "eb34b": "tags",
            "f950e": "tag"
          },
          "_cursorCache": {},
          "_primaryKeyColumnId": "f7ed5",
          "selectedDataIndex": null,
          "_columnAlignment": {
            "f7ed5": "left",
            "6462c": "left",
            "92a5e": "left",
            "eb34b": "left",
            "f950e": "left"
          },
          "_columnTooltip": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnIcon": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_alwaysShowRowSelectionCheckboxes": false,
          "_columnCellTooltipMode": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "overflow",
            "f950e": ""
          },
          "showInEditor": false,
          "_isAddingNewRows": false,
          "selectedSourceRows": [],
          "_enableExpandableRows": false,
          "_selectMultipleRowsOnActionClick": "no",
          "_mobileMargin": "4px 8px",
          "_columnSortDisabled": {
            "f7ed5": false,
            "6462c": false,
            "92a5e": false,
            "eb34b": false,
            "f950e": false
          },
          "_showSummaryRow": false,
          "_defaultFilterOperator": "and",
          "_expandedRows": {},
          "changesetObject": null,
          "_rowSelection": "single",
          "_columnCaption": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_dynamicRowHeights": false,
          "_columnFormatOptions": {
            "eb34b": {
              "automaticColors": true
            },
            "f950e": {
              "automaticColors": true
            }
          },
          "_changeset": null,
          "_afterCursor": "",
          "_columnHeaderBackgroundColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "selectedRowKeys": [],
          "_columnHeaderTextColor": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_beforeCursor": "",
          "_columnSummaryAggregationMode": {
            "f7ed5": "none",
            "6462c": "none",
            "92a5e": "none",
            "eb34b": "none",
            "f950e": "none"
          },
          "selectedRows": [],
          "_expandedRowDataIndexes": [
            0
          ],
          "_showColumnBorders": false,
          "overflowActionsOverlayMaxHeight": null,
          "_columnSize": {
            "f7ed5": 100,
            "6462c": 100,
            "92a5e": 100,
            "eb34b": 100,
            "f950e": 100
          },
          "_columnSortMode": {
            "f7ed5": "default",
            "6462c": "default",
            "92a5e": "default",
            "eb34b": "default",
            "f950e": "default"
          },
          "_selectSingleRowsOnActionClick": "replace",
          "_showFooter": true,
          "_alwaysShowScrollbars": false,
          "_toolbarButtonHidden": {
            "1a": "",
            "3c": "",
            "4d": ""
          },
          "events": {
            "0": {
              "method": "trigger",
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "selectRow",
              "type": "datasource",
              "id": "7143129e",
              "waitMs": 0
            },
            "1": {
              "id": "be7ab122",
              "type": "widget",
              "waitMs": 0,
              "waitType": "debounce",
              "event": "clickToolbar",
              "method": "exportData",
              "pluginId": "tbl_workflow_templates",
              "targetId": "3c"
            },
            "2": {
              "id": "68f733d8",
              "type": "widget",
              "waitMs": 0,
              "waitType": "debounce",
              "event": "clickToolbar",
              "method": "refresh",
              "pluginId": "tbl_workflow_templates",
              "targetId": "4d"
            }
          },
          "_columnEditable": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "newRows": [],
          "_rowBackgroundColor": [],
          "emptyMessage": "No rows found",
          "pagination": null,
          "selectedDataIndexes": [],
          "_columnEditableInNewRows": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "id": "tbl_workflow_templates",
          "_columnGroupAggregationMode": {
            "f7ed5": "none",
            "6462c": "none",
            "92a5e": "none",
            "eb34b": "none",
            "f950e": "none"
          },
          "_selectedCell": null,
          "overflowType": "scroll",
          "selectedCell": null,
          "_hasNextPage": true,
          "_includeRowInChangesetArray": false,
          "_columnPosition": {
            "f7ed5": "center",
            "6462c": "center",
            "92a5e": "center",
            "eb34b": "center",
            "f950e": "center"
          },
          "_enableSaveActions": true,
          "_columnPlaceholder": {
            "f7ed5": "Enter value",
            "6462c": "Enter value",
            "92a5e": "Enter value",
            "eb34b": "Select options",
            "f950e": "Select option"
          },
          "selectedRow": null,
          "maintainSpaceWhenHidden": false,
          "_columnHidden": {
            "f7ed5": "",
            "6462c": "",
            "92a5e": "",
            "eb34b": "",
            "f950e": ""
          },
          "_columnLabel": {
            "f7ed5": "ID",
            "6462c": "Name",
            "92a5e": "Description",
            "eb34b": "Resources",
            "f950e": "Category"
          },
          "_showToolbar": true
        },
        "btn_load_workflow_templates": {
          "pluginType": "ButtonWidget2",
          "heightType": "fixed",
          "horizontalAlign": "stretch",
          "events": {
            "0": {
              "method": "reset",
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": "7183814b",
              "waitMs": 0
            },
            "1": {
              "method": "trigger",
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": 83354339,
              "waitMs": 0
            }
          },
          "submit": false,
          "submitTargetId": "",
          "disabled": false,
          "clickable": true,
          "iconAfter": "",
          "hidden": false,
          "margin": "4px 8px",
          "_desktopMargin": "4px 8px",
          "ariaLabel": "",
          "text": "Load Workflow Templates",
          "showInEditor": false,
          "_mobileMargin": "4px 8px",
          "tooltipText": "",
          "allowWrap": true,
          "styleVariant": "solid",
          "iconBefore": "",
          "id": "btn_load_workflow_templates",
          "loading": false,
          "loaderPosition": "auto",
          "maintainSpaceWhenHidden": false
        },
        "var_mainPage": {
          "pluginType": "State",
          "value": {
            "isPageLoaded": false,
            "isWorkflowTemplateLoaded": false
          },
          "id": "var_mainPage",
          "_desktopMargin": "",
          "_mobileMargin": ""
        },
        "btn_load_workflow_templates2": {
          "pluginType": "ButtonWidget2",
          "heightType": "fixed",
          "horizontalAlign": "stretch",
          "events": {
            "0": {
              "method": "trigger",
              "params": {
                "options": {
                  "onSuccess": null,
                  "onFailure": null,
                  "additionalScope": null
                }
              },
              "targetId": null,
              "pluginId": "QUERY_WORKFLOW_TEMPLATES",
              "waitType": "debounce",
              "event": "click",
              "type": "datasource",
              "id": "7183814b",
              "waitMs": 0
            }
          },
          "submit": false,
          "submitTargetId": "",
          "disabled": false,
          "clickable": true,
          "iconAfter": "",
          "hidden": false,
          "margin": "4px 8px",
          "_desktopMargin": "4px 8px",
          "ariaLabel": "",
          "text": "Reset",
          "showInEditor": false,
          "_mobileMargin": "4px 8px",
          "tooltipText": "",
          "allowWrap": true,
          "styleVariant": "solid",
          "iconBefore": "",
          "id": "btn_load_workflow_templates2",
          "loading": false,
          "loaderPosition": "auto",
          "maintainSpaceWhenHidden": false
        },
        "QUERY_WORKFLOW_FROM_API": {
          "pluginType": "RESTQuery",
          "queryRefreshTime": "",
          "paginationLimit": "",
          "openAPIRequestBody": "",
          "streamResponse": false,
          "body": "",
          "lastReceivedFromResourceAt": 1790491274010,
          "isFunction": false,
          "functionParameters": null,
          "queryDisabledMessage": "",
          "servedFromCache": false,
          "openAPIResolvedSpec": "",
          "offlineUserQueryInputs": "",
          "functionDescription": null,
          "successMessage": "",
          "queryDisabled": "",
          "playgroundQuerySaveId": "latest",
          "workflowParams": null,
          "resourceNameOverride": "",
          "runWhenModelUpdates": true,
          "paginationPaginationField": "",
          "workflowRunExecutionType": "sync",
          "headers": [
            {
              "key": "X-Workflow-Api-Key",
              "value": "retool_wk_6b14e4268ad34789aebffbd69a2ba896"
            }
          ],
          "showFailureToaster": true,
          "paginationEnabled": false,
          "query": "https://peterjaberau.retool.com/url/run-workflow",
          "playgroundQueryUuid": "",
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": "raw",
          "queryRunOnSelectorUpdate": false,
          "runWhenPageLoadsDelay": "",
          "cookies": "",
          "openAPIParams": {},
          "isImported": false,
          "showSuccessToaster": true,
          "cacheKeyTtl": "",
          "requestSentTimestamp": null,
          "metadata": {
            "request": {
              "url": "https://peterjaberau.retool.com/url/run-workflow",
              "method": "GET",
              "headers": {
                "User-Agent": "Retool/2.0 (+https://docs.tryretool.com/docs/apis)",
                "X-Workflow-Api-Key": "---sanitized---",
                "ot-baggage-requestId": "undefined",
                "x-datadog-trace-id": "5774541000432047676",
                "x-datadog-parent-id": "2724258915019921156",
                "x-datadog-sampling-priority": "1",
                "x-datadog-tags": "_dd.p.tid=6ab8ba8800000000,_dd.p.ksr=1,_dd.p.dm=-1",
                "traceparent": "00-19c6495629d856023f7d661e93425f0b-7d29a84c8050e8e3-01",
                "X-Retool-Forwarded-For": "124.171.151.176"
              },
              "body": null
            },
            "headers": {
              "access-control-allow-origin": [
                "*"
              ],
              "cache-control": [
                "private"
              ],
              "cf-cache-status": [
                "BYPASS"
              ],
              "cf-ray": [
                "a41885790d070d10-PDX"
              ],
              "content-encoding": [
                "gzip"
              ],
              "content-type": [
                "application/json; charset=utf-8"
              ],
              "cross-origin-opener-policy": [
                "same-origin-allow-popups"
              ],
              "date": [
                "Sun, 27 Sep 2026 06:41:14 GMT"
              ],
              "etag": [
                "W/\"4145-gsgT06eL9cFMf4ZITiJNrrsFHOY\""
              ],
              "referrer-policy": [
                "no-referrer-when-downgrade"
              ],
              "server": [
                "cloudflare"
              ],
              "set-cookie": [
                "_cfuvid=PKWL3JK8hyfgpoLRxCN27Gd5X3lDBed3yYZprN0915Y-1790491273.1210692-1.0.1.1-VIdgrXHHiKppjjlOFNYLUxym6DorRIZdkVa9.pIcg2M; HttpOnly; SameSite=None; Secure; Path=/; Domain=retool.com"
              ],
              "strict-transport-security": [
                "max-age=31536000; includeSubDomains"
              ],
              "vary": [
                "Accept-Encoding"
              ],
              "x-content-type-options": [
                "nosniff"
              ],
              "x-request-id": [
                "1e9fcf6744547c42f0f5286400a45e5b"
              ],
              "x-retool-api-version": [
                "4.65.0-01ca5ad (Build 390092)"
              ],
              "x-user-status-code": [
                "200"
              ]
            },
            "status": 200,
            "statusText": "OK"
          },
          "queryRunTime": 1663,
          "changesetObject": "",
          "offlineOptimisticResponse": null,
          "errorTransformer": "return data.error",
          "finished": 1790491274095,
          "confirmationMessage": null,
          "isFetching": false,
          "changeset": "",
          "openAPIOperationId": "",
          "rawData": [
            {
              "id": "postgresToSlack",
              "name": "Postgres to Slack",
              "description": "Get slack messages on new custom query matches",
              "resources": [
                "postgresql",
                "slackopenapi"
              ],
              "category": "Notifications"
            },
            {
              "id": "googleAnalyticsToBigQuery",
              "name": "Google Analytics to BigQuery",
              "description": "Send Google Analytics data to BigQuery",
              "resources": [
                "googleAnalytics",
                "bigquery"
              ],
              "category": "ETL"
            },
            {
              "id": "githubToPostgres",
              "name": "GitHub to Postgres",
              "description": "Send GitHub repository information to Postgres",
              "resources": [
                "github",
                "postgresql"
              ],
              "category": "APIs"
            },
            {
              "id": "githubToSlack",
              "name": "GitHub to Slack",
              "description": "Query GitHub repository information with GraphQL and send to Slack",
              "resources": [
                "github",
                "slackopenapi"
              ],
              "category": "Notifications"
            },
            {
              "id": "postgresToGSheets",
              "name": "Postgres to Google Sheets",
              "description": "Append Postgres row data to Google Sheets",
              "resources": [
                "postgresql",
                "googlesheets"
              ],
              "category": "ETL"
            },
            {
              "id": "fullStoryAlertHandler",
              "name": "FullStory Alerts to Slack",
              "description": "Process FullStory alerts and send to Slack",
              "resources": [
                "restapi",
                "slackopenapi"
              ],
              "category": "APIs"
            },
            {
              "id": "pythonChartingAPI",
              "name": "Python Charting API",
              "category": "APIs",
              "resources": [
                "python"
              ],
              "description": "Create an API using pandas and seaborn for dynamic data processing and chart generation"
            },
            {
              "id": "updateDataInGoogleSheetsFromNewWebhookPostRequest",
              "description": "Update data in Google Sheets from new webhook POST request",
              "resources": [
                "googlesheets",
                "restapi"
              ],
              "category": "APIs",
              "name": "Update data in Google Sheets from new webhook POST request"
            },
            {
              "id": "sendSlackWhenGoogleSheetsRowUpdated",
              "description": "Send a Slack notification when a Google Sheets row is updated",
              "resources": [
                "googlesheets",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack When Google Sheets Row Updated"
            },
            {
              "id": "send-slack-message-when-google-sheet-rows-added",
              "description": "Send a Slack message when a Google Sheet row is added",
              "resources": [
                "googlesheets",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack Message When Google Sheet Rows Added"
            },
            {
              "id": "send-slack-message-when-google-sheets-rows-updated",
              "description": "Send a Slack Message When a Google Sheets Row is Updated",
              "resources": [
                "slackopenapi",
                "googlesheets"
              ],
              "category": "Notifications",
              "name": "Send Slack Message When Google Sheets Rows Updated"
            },
            {
              "id": "update-data-to-google-sheet-from-webhook-post-request",
              "description": "Update data to Google Sheets from a new Webhook POST request",
              "resources": [
                "googlesheets"
              ],
              "category": "APIs",
              "name": "Update Data to Google Sheet from Webhook POST request"
            },
            {
              "id": "add-data-to-google-sheets-from-new-webhook-post-request",
              "description": "Add Data to Google Sheets from a new Webhook POST request",
              "resources": [
                "googlesheets"
              ],
              "category": "APIs",
              "name": "Add Data to Google Sheets from new Webhook POST request"
            },
            {
              "id": "send-slack-on-new-custom-query-matches-in-google-sheets",
              "description": "Send a Slack notification on new custom query matches in Google Sheets",
              "resources": [
                "slackopenapi",
                "googlesheets"
              ],
              "category": "Notifications",
              "name": "Send Slack on new Custom Query Matches in Google Sheets"
            },
            {
              "id": "send-slack-message-lead-converts-in-salesforce",
              "description": "Send a Slack message when a lead converts in Salesforce",
              "resources": [
                "salesforce",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack Message Lead Converts in Salesforce"
            },
            {
              "id": "send-slack-message-new-salesforce-cases",
              "description": "Send a Slack message fo a new Salesforce case",
              "resources": [
                "slackopenapi",
                "salesforce"
              ],
              "category": "Notifications",
              "name": "Send Slack Message New Salesforce Cases"
            },
            {
              "id": "supportResponseTimeReport",
              "description": "Support response time report",
              "resources": [
                "alloydb",
                "asana",
                "athena"
              ],
              "category": "APIs",
              "name": "Support Response Time Report"
            },
            {
              "id": "notify-slack-when-salesforce-opportunity-is-closed-won",
              "description": "Notify Slack when a Salesforce opportunity is marked as Closed Won",
              "resources": [
                "salesforce",
                "slackopenapi"
              ],
              "category": "Cron Jobs",
              "name": "Notify Slack when Salesforce opportunity is Closed Won"
            },
            {
              "id": "append-postgres-rows-to-google-sheets",
              "description": "Append new Postgres rows to Google Sheets",
              "resources": [
                "postgresql",
                "googlesheets"
              ],
              "category": "ETL",
              "name": "Append Postgres Rows to Google Sheets"
            },
            {
              "id": "create-hubspot-contact-for-new-google-sheets-rows",
              "description": "Create a new Hubspot Contact when a Google Sheets row is added",
              "resources": [
                "googlesheets"
              ],
              "category": "ETL",
              "name": "Create Hubspot contact for new Google Sheets rows"
            },
            {
              "id": "add-typeform-responses-to-google-sheets",
              "description": "Add new Typeform responses to Google Sheets",
              "resources": [
                "googlesheets"
              ],
              "category": "ETL",
              "name": "Add Typeform responses to Google Sheets"
            },
            {
              "id": "summarize-google-sheets-and-send-via-smtp",
              "description": "Summarize Google Sheets data and send it via SMTP",
              "resources": [
                "googlesheets",
                "smtp"
              ],
              "category": "Cron Jobs",
              "name": "Summarize Google Sheets and send via SMTP"
            },
            {
              "id": "send-github-repo-to-slack",
              "description": "Send Github repository query results to Slack",
              "resources": [
                "slackopenapi",
                "github"
              ],
              "category": "Notifications",
              "name": "Send Github repo to Slack"
            },
            {
              "id": "add-new-git-hub-issues-to-asana",
              "description": "Add new GitHub issues to Asana as tasks",
              "resources": [
                "asana",
                "github"
              ],
              "category": "APIs",
              "name": "Add new GitHub issues to Asana"
            },
            {
              "id": "send-new-git-hub-commits-to-slack",
              "description": "Send new Github commits to Slack as messages",
              "resources": [
                "slackopenapi",
                "github"
              ],
              "category": "Notifications",
              "name": "Send new GitHub commits to Slack"
            },
            {
              "id": "send-github-mentions-to-slack",
              "description": "Send new Github mentions to Slack as messages",
              "resources": [
                "slackopenapi",
                "github"
              ],
              "category": "Notifications",
              "name": "Send Github mentions to Slack"
            },
            {
              "id": "sync-salesforce-to-postgres",
              "description": "Sync Salesforce account data to Postgres",
              "resources": [
                "salesforce",
                "postgresql"
              ],
              "category": "ETL",
              "name": "Sync Salesforce to Postgres"
            },
            {
              "id": "create-salesforce-contacts-from-typeform",
              "description": "Create Salesforce contacts from new Typeform entries",
              "resources": [
                "salesforce",
                "cassandra",
                "closeio",
                "datadog"
              ],
              "category": "APIs",
              "name": "Create Salesforce contacts from Typeform"
            },
            {
              "id": "export-leads-from-google-sheets-to-salesforce",
              "description": "Export leads from Google Sheets to Salesforce",
              "resources": [
                "googlesheets",
                "salesforce"
              ],
              "category": "ETL",
              "name": "Export leads from Google Sheets to Salesforce"
            },
            {
              "id": "enrich-google-form-submissions-and-send-to-salesforce",
              "description": "Enrich Google Form submissions and send to Salesforce",
              "resources": [
                "salesforce"
              ],
              "category": "ETL",
              "name": "Enrich Google Form submissions and send to Salesforce"
            },
            {
              "id": "create-linear-ticket-from-salesforce-feature-request",
              "description": "Create a Linear ticket from a new feature request in Salesforce",
              "resources": [
                "salesforce",
                "gcs",
                "googleMaps",
                "jira"
              ],
              "category": "APIs",
              "name": "Create Linear ticket from Salesforce feature request"
            },
            {
              "id": "webhook-monitor-to-slack-alert",
              "description": "Webhook monitor to Slack alert",
              "resources": [
                "slackopenapi"
              ],
              "category": "APIs",
              "name": "Webhook monitor to Slack alert"
            },
            {
              "id": "create-salesforce-tasks-from-shopify-customers",
              "description": "Create Salesforce tasks from Shopify customers",
              "resources": [
                "salesforce"
              ],
              "category": "APIs",
              "name": "Create Salesforce tasks from Shopify customers"
            },
            {
              "id": "churn-prediction",
              "description": "Identify accounts that are at risk of churn based on product activity",
              "resources": [
                "salesforce",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Churn Prediction"
            },
            {
              "id": "sync-linear-issues-with-trello-cards",
              "description": "Sync Linear issues with Trello cards",
              "resources": [],
              "category": "APIs",
              "name": "Sync Linear issues with Trello cards"
            },
            {
              "id": "send-slack-message-when-linear-ticket-is-assigned",
              "description": "Send a Slack message when Linear ticket is assigned",
              "resources": [
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack message when Linear ticket is assigned"
            },
            {
              "id": "weekly-linear-activity-report",
              "description": "Send a weekly report of activity in Linear",
              "resources": [
                "smtp"
              ],
              "category": "Cron Jobs",
              "name": "Weekly Linear activity report"
            },
            {
              "id": "send-slack-message-when-linear-issue-is-closed",
              "description": "Send a Slack message when Linear issue is closed",
              "resources": [
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack message when Linear issue is closed"
            },
            {
              "id": "sync-shopify-orders-with-quickbooks",
              "description": "Sync Shopify orders with Quickbooks online",
              "resources": [
                "Shopify"
              ],
              "category": "ETL",
              "name": "Sync Shopify orders with Quickbooks"
            },
            {
              "id": "create-new-shopify-product-from-google-sheets",
              "description": "Create a new Shopify product from a Google Sheets row",
              "resources": [
                "Shopify",
                "googlesheets"
              ],
              "category": "ETL",
              "name": "Create new Shopify product from Google Sheets"
            },
            {
              "id": "send-slack-message-for-high-value-shopify-orders",
              "description": "Send a Slack message when high-value Shopify orders are completed",
              "resources": [
                "Shopify",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Slack message for high-value Shopify orders"
            },
            {
              "id": "location-based-shopify-order-assignment",
              "description": "Assign orders on Shopify based on order location",
              "resources": [
                "Shopify"
              ],
              "category": "ETL",
              "name": "Location-based Shopify order assignment"
            },
            {
              "id": "send-email-for-low-inventory-levels-in-shopify",
              "description": "Send an email notification for low inventory levels in Shopify",
              "resources": [
                "Shopify",
                "smtp"
              ],
              "category": "Notifications",
              "name": "Send email for low inventory levels in Shopify"
            },
            {
              "id": "enrich-airtable-records-with-clearbit",
              "description": "Enrich Airtable records with Clearbit data",
              "resources": [
                "Airtable"
              ],
              "category": "ETL",
              "name": "Enrich Airtable records with Clearbit"
            },
            {
              "id": "send-weekly-airtable-summary-via-email",
              "description": "Send a weekly Airtable base summary via email",
              "resources": [
                "Airtable",
                "smtp"
              ],
              "category": "Notifications",
              "name": "Send Weekly Airtable Summary via Email"
            },
            {
              "id": "send-daily-airtable-summary-in-slack",
              "description": "Send a daily Airtable base activity summary in Slack",
              "resources": [
                "Airtable",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Send Daily Airtable Summary in Slack"
            },
            {
              "id": "create-trello-cards-from-new-jira-issues",
              "description": "Create Trello cards from new Jira issues",
              "resources": [
                "jira",
                "asana"
              ],
              "category": "APIs",
              "name": "Create Trello cards from new Jira issues"
            },
            {
              "id": "add-typeform-entries-into-airtable",
              "description": "Add new Typeform entries as records in Airtable",
              "resources": [
                "Airtable"
              ],
              "category": "ETL",
              "name": "Add Typeform entries into Airtable"
            },
            {
              "id": "create-trello-cards-from-data-in-airtable",
              "description": "Create Trello cards or lists from data in Airtable",
              "resources": [
                "Airtable",
                "asana"
              ],
              "category": "ETL",
              "name": "Create Trello cards from data in Airtable"
            },
            {
              "id": "sync-api-to-database",
              "description": "Sync API to Retool DB Postgres Database",
              "resources": [
                "Retool DB"
              ],
              "category": "APIs",
              "name": "Sync API to Database"
            },
            {
              "id": "update-database-with-api",
              "description": "Update Retool DB Postgres Database with API",
              "resources": [
                "Retool DB"
              ],
              "category": "APIs",
              "name": "Update Database with API"
            },
            {
              "id": "ai-powered-personalized-newsletter",
              "description": "An AI-powered personalized newsletter",
              "resources": [
                "openapi"
              ],
              "category": "APIs",
              "name": "AI-powered personalized newsletter"
            },
            {
              "id": "ai-powered-changelog",
              "description": "AI-powered Github changelog summary and send to team for review",
              "resources": [
                "github",
                "openapi"
              ],
              "category": "APIs",
              "name": "AI-powered changelog"
            },
            {
              "id": "daily-mrr-notification",
              "description": "Receive daily notifications of your Monthly Recurring Revenue (MRR), providing timely insights into your subscription-based business's financial performance.",
              "resources": [
                "salesforce",
                "slackopenapi"
              ],
              "category": "Notifications",
              "name": "Daily MRR Notification"
            },
            {
              "id": "abandoned-cart-recovery-emails",
              "description": "Recover potentially lost sales by sending targeted emails to customers who have abandoned their shopping carts.",
              "resources": [],
              "category": "ETL",
              "name": "Abandoned Cart Recovery Emails"
            },
            {
              "id": "triage-support-tickets-with-gpt-4",
              "description": "Efficiently manage support tickets by utilizing GPT-4 to categorize and prioritize them, ensuring faster and accurate ticket resolution.",
              "resources": [],
              "category": "APIs",
              "name": "Triage Support Tickets with GPT-4"
            },
            {
              "id": "low-inventory-alerts",
              "description": "Receive timely alerts when inventory levels fall below predefined thresholds, ensuring proactive inventory management and avoiding stockouts.",
              "resources": [],
              "category": "Notifications",
              "name": "Low Inventory Alerts"
            },
            {
              "id": "daily-update-for-new-orders",
              "description": "Get daily updates on new orders, ensuring you stay informed about incoming business and can manage operations effectively.",
              "resources": [],
              "category": "Notifications",
              "name": "Daily Update For New Orders"
            },
            {
              "id": "refund-fulfillment",
              "description": "Efficiently process and manage refunds, ensuring timely and accurate resolution for improved customer satisfaction and operational effectiveness.",
              "resources": [],
              "category": "ETL",
              "name": "Refund Fulfillment"
            },
            {
              "id": "store-performance-reports",
              "description": "Access comprehensive performance reports for your store, providing insights into sales, customer trends, and key metrics to optimize business strategies.",
              "resources": [],
              "category": "ETL",
              "name": "Store Performance Reports"
            },
            {
              "id": "fraudulent-order-notifications",
              "description": "Instantly receive notifications for suspicious orders, helping prevent fraudulent transactions and safeguarding your business and customers.",
              "resources": [],
              "category": "Notifications",
              "name": "Fraudulent Order Notifications"
            },
            {
              "id": "new-customer-follow-up",
              "description": "Initiate follow-up interactions with new customers, fostering engagement and building relationships to enhance customer retention and loyalty.",
              "resources": [],
              "category": "ETL",
              "name": "New Customer Follow Up"
            },
            {
              "id": "customer-loyalty-offer",
              "description": "Create special offers to reward loyal customers, promoting customer retention and strengthening brand engagement for long-term business success.",
              "resources": [],
              "category": "ETL",
              "name": "Customer Loyalty Offer"
            },
            {
              "id": "automatically-re-order-low-stock-items",
              "description": "Automate reordering of low-stock items, ensuring inventory availability and preventing stockouts for seamless business operations.",
              "resources": [],
              "category": "APIs",
              "name": "Automatically Re-Order Low-Stock Items"
            },
            {
              "id": "tag-items-with-shipping-time",
              "description": "Assign shipping time tags to items, providing customers with accurate delivery expectations and enhancing transparency in online shopping experiences.",
              "resources": [],
              "category": "ETL",
              "name": "Tag Items With Shipping Time"
            },
            {
              "id": "weekly-automated-shopify-order-report",
              "description": "Track and analyze Shopify orders with our weekly automated report template. Streamline insights and decision-making by receiving comprehensive sales data every week.",
              "resources": [
                "snowflake",
                "postgresql",
                "graphql"
              ],
              "category": "Notifications",
              "name": "Weekly Automated Shopify Order Report"
            },
            {
              "id": "api-to-sms",
              "description": "Automate SMS notifications using API integration. Streamline communication, send alerts, and engage with personalized text messages seamlessly.",
              "resources": [
                "Retool DB",
                "athena",
                "graphql",
                "restapi"
              ],
              "category": "Notifications",
              "name": "API to SMS"
            },
            {
              "id": "automated-linear-ticket-assignment",
              "description": "Automate ticket distribution. Assign Linear tickets efficiently, enhancing task management and optimizing workflow distribution.",
              "resources": [],
              "category": "APIs",
              "name": "Automated Linear Ticket Assignment"
            },
            {
              "id": "send-github-repo-to-postgres",
              "description": "Send GitHub repository data to a PostgreSQL database, facilitating seamless integration and enabling efficient storage and management of code-related information.",
              "resources": [
                "github",
                "postgresql"
              ],
              "category": "ETL",
              "name": "Send Github Repo to Postgres"
            },
            {
              "id": "sync-google-sheets-rows-to-postgres-database",
              "description": "Synchronize Google Sheets rows with a PostgreSQL database, enabling seamless data transfer and ensuring real-time integration between the two platforms.",
              "resources": [
                "googlesheets",
                "postgresql"
              ],
              "category": "APIs",
              "name": "Sync Google Sheets Rows to Postgres Database"
            },
            {
              "id": "update-data-to-google-sheets-from-new-webhook-post-request",
              "description": "Automatically update Google Sheets with data from new webhook POST requests, ensuring real-time integration and accurate data reflection.",
              "resources": [],
              "category": "APIs",
              "name": "Update Data to Google Sheets from New Webhook POST Request"
            },
            {
              "id": "vector-slack-sync",
              "description": "Sync your Slack conversations with Retool Vectors",
              "resources": [
                "retoolAI",
                "restapi",
                "slackopenapi"
              ],
              "category": "APIs",
              "name": "Vector Slack Sync"
            }
          ],
          "queryTriggerDelay": 0,
          "resourceTypeOverride": "",
          "enableErrorTransformer": false,
          "showLatestVersionUpdatedWarning": false,
          "paginationDataField": "",
          "timestamp": 1790491272568,
          "enableTransformer": false,
          "showUpdateSetValueDynamicallyToggle": true,
          "version": 2,
          "overrideOrgCacheForUserCache": false,
          "runWhenPageLoads": false,
          "transformer": "return data",
          "queryTimeout": 10000,
          "workflowId": null,
          "requireConfirmation": false,
          "type": "GET",
          "queryFailureConditions": "",
          "id": "QUERY_WORKFLOW_FROM_API",
          "changesetIsObject": false,
          "enableCaching": false,
          "bodyType": "none",
          "offlineQueryType": "None",
          "queryThrottleTime": 750,
          "updateSetValueDynamically": false,
          "notificationDuration": ""
        },
        "select1": {
          "pluginType": "SelectWidget2",
          "_imageByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "itemMode": "static",
          "imageByIndex": [
            "",
            "",
            ""
          ],
          "_disabledByIndex": {
            "0": false,
            "1": false,
            "2": false
          },
          "showSelectionIndicator": true,
          "_values": {
            "0": "Option 1",
            "1": "Option 2",
            "2": "Option 3"
          },
          "_iconByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "iconByIndex": [
            "",
            "",
            ""
          ],
          "values": [
            "Option 1",
            "Option 2",
            "Option 3"
          ],
          "readOnly": false,
          "clearInputValueOnChange": false,
          "iconAfter": "",
          "overlayMinWidth": null,
          "allowDeselect": false,
          "inputValue": "",
          "hidden": false,
          "customValidation": "",
          "_ids": {
            "0": "00030",
            "1": "00031",
            "2": "00032"
          },
          "_captionByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "captionByIndex": [
            "",
            "",
            ""
          ],
          "disabledByIndex": [
            false,
            false,
            false
          ],
          "_hiddenByIndex": {
            "0": false,
            "1": false,
            "2": false
          },
          "hiddenByIndex": [
            false,
            false,
            false
          ],
          "_labels": {
            "0": "",
            "1": "",
            "2": ""
          },
          "labels": [
            "",
            "",
            ""
          ],
          "_tooltipByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "tooltipByIndex": [
            "",
            "",
            ""
          ],
          "_colorByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "colorByIndex": [
            "",
            "",
            ""
          ],
          "_fallbackTextByIndex": {
            "0": "",
            "1": "",
            "2": ""
          },
          "fallbackTextByIndex": [
            "",
            "",
            ""
          ],
          "data": [
            {
              "caption": "",
              "color": "",
              "disabled": false,
              "hidden": false,
              "icon": "",
              "image": "",
              "label": "",
              "fallbackText": "",
              "tooltip": "",
              "value": "Option 1"
            },
            {
              "caption": "",
              "color": "",
              "disabled": false,
              "hidden": false,
              "icon": "",
              "image": "",
              "label": "",
              "fallbackText": "",
              "tooltip": "",
              "value": "Option 2"
            },
            {
              "caption": "",
              "color": "",
              "disabled": false,
              "hidden": false,
              "icon": "",
              "image": "",
              "label": "",
              "fallbackText": "",
              "tooltip": "",
              "value": "Option 3"
            }
          ],
          "margin": "4px 8px",
          "_desktopMargin": "4px 8px",
          "searchMode": "fuzzy",
          "hideValidationMessage": false,
          "textBefore": "",
          "value": null,
          "allowCustomValue": false,
          "selectedIndex": null,
          "selectedItem": null,
          "required": false,
          "disabled": false,
          "_validate": false,
          "validationMessage": "",
          "automaticItemColors": false,
          "itemAdornmentShape": "circle",
          "textAfter": "",
          "showInEditor": false,
          "_mobileMargin": "4px 8px",
          "showClear": false,
          "tooltipText": "",
          "labelAlign": "left",
          "id": "select1",
          "formDataKey": "select1",
          "labelCaption": "",
          "labelWidth": 33,
          "deprecatedLabels": [],
          "placeholder": "Select an option",
          "itemAdornmentSize": "auto",
          "label": "Label",
          "_hasMigratedNestedItems": true,
          "labelWidthUnit": "%",
          "invalid": false,
          "iconBefore": "",
          "selectedLabel": null,
          "emptyMessage": "No options",
          "overlayMaxHeight": 375,
          "loading": false,
          "labelPosition": "top",
          "labelWrap": false,
          "disabledValues": [],
          "maintainSpaceWhenHidden": false
        },
        "current_user": {
          "lastName": "Jaber",
          "profilePhotoUrl": "https://lh3.googleusercontent.com/a/ACg8ocKKvTMAi9X1pGF8xIaEOecBnrmus1pT7f5WElpMGUILpSmyRQ=s96-c",
          "name": "",
          "sid": "user_5dba4851e18b4fea85e18cc9eea0bbbe",
          "metadata": {},
          "groups": [
            {
              "id": 473690,
              "name": "admin"
            },
            {
              "id": 473693,
              "name": "All Users"
            }
          ],
          "externalIdentifier": null,
          "fullName": "Peter Jaber",
          "locale": "en",
          "id": 177737,
          "firstName": "Peter",
          "email": "peterjaberau@gmail.com"
        },
        "urlparams": {
          "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main",
          "hash": {}
        },
        "url": {
          "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main",
          "hashParams": {},
          "searchParams": {}
        },
        "viewport": {
          "width": 1200,
          "height": 456
        },
        "theme": {
          "primary": "#3170f9",
          "success": "#059669",
          "labelFont": {
            "size": "12px",
            "fontWeight": "500",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "mode": null,
          "danger": "#dc2626",
          "labelEmphasizedFont": {
            "size": "12px",
            "fontWeight": "600",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "surfaceSecondary": "#ffffff",
          "mediumElevation": "0 0 5px 1px rgba(0, 0, 0, 0.06)",
          "lowElevation": "0 0 2px 1px rgba(0, 0, 0, 0.05)",
          "automatic": [
            "#fde68a",
            "#eecff3",
            "#a7f3d0",
            "#bfdbfe",
            "#c7d2fe",
            "#fecaca",
            "#fcd6bb"
          ],
          "_tokensById": {},
          "info": "#3170f9",
          "defaultFont": {
            "size": "12px",
            "fontWeight": "400",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "tertiary": "#3170f9",
          "highlight": "#fde68a",
          "secondary": "#3170f9",
          "surfacePrimary": "#ffffff",
          "h1Font": {
            "size": "36px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "canvas": "#f6f6f6",
          "h2Font": {
            "size": "28px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "tokens": {},
          "h3Font": {
            "size": "24px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "highElevation": "0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 16px 32px 0 rgba(55, 55, 55, 0.08)",
          "h4Font": {
            "size": "18px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "h5Font": {
            "size": "16px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "warning": "#cd6f00",
          "h6Font": {
            "size": "14px",
            "fontWeight": "700",
            "name": "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
          },
          "borderRadius": "4px"
        },
        "localStorage": {
          "values": {}
        },
        "retoolContext": {
          "translations": {},
          "pages": [
            {
              "id": "Main",
              "title": "Page 1",
              "url": "Main",
              "isCurrentPage": true
            }
          ],
          "runningQueries": [],
          "currentPage": "Main",
          "pageTag": "latest",
          "appName": "App-To-Query-Workflow",
          "environment": "production",
          "inEditorMode": true,
          "appUuid": "1e6cbb30-b4f0-11f1-8707-1bdc377fd873"
        }
      },
      "values": {
        "values": {
          "Main": {
            "pluginType": "Screen",
            "title": "Page 1",
            "browserTitle": "",
            "urlSlug": "",
            "_order": 0,
            "id": "Main"
          },
          "$main": {
            "pluginType": "Frame",
            "type": "main",
            "padding": "8px 12px",
            "enableFullBleed": false,
            "isHiddenOnDesktop": false,
            "isHiddenOnMobile": false,
            "id": "$main",
            "_desktopMargin": "",
            "_mobileMargin": ""
          },
          "QUERY_WORKFLOW_TEMPLATES": {
            "pluginType": "WorkflowRun",
            "queryRefreshTime": "",
            "streamResponse": false,
            "lastReceivedFromResourceAt": null,
            "isFunction": false,
            "functionParameters": null,
            "queryDisabledMessage": "",
            "servedFromCache": false,
            "offlineUserQueryInputs": "",
            "functionDescription": null,
            "successMessage": "",
            "queryDisabled": "",
            "playgroundQuerySaveId": "latest",
            "resourceNameOverride": "",
            "runWhenModelUpdates": false,
            "workflowRunExecutionType": "sync",
            "showFailureToaster": true,
            "query": "",
            "playgroundQueryUuid": "",
            "playgroundQueryId": null,
            "error": null,
            "workflowRunBodyType": "json",
            "queryRunOnSelectorUpdate": false,
            "runWhenPageLoadsDelay": "",
            "data": null,
            "isImported": false,
            "showSuccessToaster": false,
            "cacheKeyTtl": "",
            "requestSentTimestamp": null,
            "metadata": null,
            "queryRunTime": null,
            "changesetObject": "",
            "offlineOptimisticResponse": null,
            "errorTransformer": "return data.error",
            "finished": null,
            "confirmationMessage": null,
            "isFetching": false,
            "changeset": "",
            "rawData": null,
            "queryTriggerDelay": 0,
            "resourceTypeOverride": null,
            "enableErrorTransformer": false,
            "showLatestVersionUpdatedWarning": false,
            "timestamp": 0,
            "enableTransformer": true,
            "showUpdateSetValueDynamicallyToggle": true,
            "overrideOrgCacheForUserCache": false,
            "runWhenPageLoads": false,
            "transformer": "return data",
            "events": {
              "0": {
                "method": null,
                "targetId": null,
                "pluginId": "",
                "waitType": "debounce",
                "event": "success",
                "type": "state",
                "id": "4c0c24c2",
                "waitMs": 0
              }
            },
            "isMultiplayerEdited": false,
            "queryTimeout": 10000,
            "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
            "requireConfirmation": false,
            "queryFailureConditions": "",
            "id": "QUERY_WORKFLOW_TEMPLATES",
            "changesetIsObject": false,
            "enableCaching": false,
            "offlineQueryType": "None",
            "queryThrottleTime": 750,
            "updateSetValueDynamically": false,
            "notificationDuration": 4.5
          },
          "tbl_workflow_templates": {
            "pluginType": "TableWidget2",
            "selectedRowKey": null,
            "_nextAfterCursor": "",
            "_columnIds": {
              "0": "f7ed5",
              "1": "6462c",
              "2": "92a5e",
              "3": "eb34b",
              "4": "f950e"
            },
            "_columnKey": {
              "f7ed5": "id",
              "6462c": "name",
              "92a5e": "description",
              "eb34b": "resources",
              "f950e": "category"
            },
            "searchTerm": "",
            "_serverPaginated": false,
            "searchMode": "disabled",
            "_serverPaginationType": "limitOffsetBased",
            "_defaultSort": null,
            "_columnReferenceId": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_defaultSelectedRow": {
              "mode": "index",
              "indexType": "display",
              "index": 0
            },
            "_disabledVirtualization": true,
            "_columnValueOverride": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": ""
            },
            "_columnBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnSearchMode": {
              "f7ed5": "default",
              "6462c": "default",
              "92a5e": "default",
              "eb34b": "default",
              "f950e": "default"
            },
            "_columnAlternateRowBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_clearChangesetOnSave": true,
            "heightType": "fixed",
            "_columnTextColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "disableEdits": false,
            "autoColumnWidth": false,
            "_rowHeight": "",
            "_isSaving": false,
            "_headerTextWrap": false,
            "_clearChangeset": false,
            "caseSensitiveFiltering": false,
            "_limitOffsetRowCount": null,
            "selectedSourceRow": null,
            "_dynamicColumnsEnabled": false,
            "disableSave": false,
            "_columnEditableOptions": {
              "f7ed5": {
                "spellCheck": false
              },
              "6462c": {
                "spellCheck": false
              },
              "92a5e": {
                "spellCheck": false
              }
            },
            "_toolbarPosition": "bottom",
            "_toolbarButtonLabel": {
              "1a": "Filter",
              "3c": "Download",
              "4d": "Refresh"
            },
            "_nextBeforeCursor": "",
            "_persistRowSelection": false,
            "_toolbarButtonIcon": {
              "1a": "bold/interface-text-formatting-filter-2",
              "3c": "bold/interface-download-button-2",
              "4d": "bold/interface-arrows-round-left"
            },
            "_toolbarButtonType": {
              "1a": "filter",
              "3c": "custom",
              "4d": "custom"
            },
            "_showBorder": true,
            "_templatePageSize": null,
            "_showHeader": true,
            "_calculatedPageSize": 13,
            "_pageSize": 13,
            "_currentPage": 0,
            "overflowActionsOverlayMinWidth": null,
            "_actionsOverflowPosition": 0,
            "hidden": false,
            "_toolbarButtonIds": {
              "0": "1a",
              "1": "3c",
              "2": "4d"
            },
            "_cellSelection": "none",
            "_linkedFilterId": "",
            "margin": "4px 8px",
            "_desktopMargin": "4px 8px",
            "_columnCellTooltip": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnFormat": {
              "f7ed5": "string",
              "6462c": "string",
              "92a5e": "string",
              "eb34b": "tags",
              "f950e": "tag"
            },
            "_primaryKeyColumnId": "f7ed5",
            "selectedDataIndex": null,
            "_columnAlignment": {
              "f7ed5": "left",
              "6462c": "left",
              "92a5e": "left",
              "eb34b": "left",
              "f950e": "left"
            },
            "_columnTooltip": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnIcon": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_alwaysShowRowSelectionCheckboxes": false,
            "_columnCellTooltipMode": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "overflow",
              "f950e": ""
            },
            "showInEditor": false,
            "_isAddingNewRows": false,
            "_enableExpandableRows": false,
            "_selectMultipleRowsOnActionClick": "no",
            "_mobileMargin": "4px 8px",
            "_columnSortDisabled": {
              "f7ed5": false,
              "6462c": false,
              "92a5e": false,
              "eb34b": false,
              "f950e": false
            },
            "_showSummaryRow": false,
            "_defaultFilterOperator": "and",
            "changesetObject": null,
            "_rowSelection": "single",
            "_columnCaption": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_dynamicRowHeights": false,
            "_columnFormatOptions": {
              "eb34b": {
                "automaticColors": true
              },
              "f950e": {
                "automaticColors": true
              }
            },
            "_changeset": null,
            "_afterCursor": "",
            "_columnHeaderBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnHeaderTextColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_beforeCursor": "",
            "_columnSummaryAggregationMode": {
              "f7ed5": "none",
              "6462c": "none",
              "92a5e": "none",
              "eb34b": "none",
              "f950e": "none"
            },
            "_showColumnBorders": false,
            "overflowActionsOverlayMaxHeight": null,
            "_columnSize": {
              "f7ed5": 100,
              "6462c": 100,
              "92a5e": 100,
              "eb34b": 100,
              "f950e": 100
            },
            "_columnSortMode": {
              "f7ed5": "default",
              "6462c": "default",
              "92a5e": "default",
              "eb34b": "default",
              "f950e": "default"
            },
            "_selectSingleRowsOnActionClick": "replace",
            "_showFooter": true,
            "_alwaysShowScrollbars": false,
            "_toolbarButtonHidden": {
              "1a": "",
              "3c": "",
              "4d": ""
            },
            "events": {
              "0": {
                "method": "trigger",
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "selectRow",
                "type": "datasource",
                "id": "7143129e",
                "waitMs": 0
              },
              "1": {
                "id": "be7ab122",
                "type": "widget",
                "waitMs": 0,
                "waitType": "debounce",
                "event": "clickToolbar",
                "method": "exportData",
                "pluginId": "tbl_workflow_templates",
                "targetId": "3c"
              },
              "2": {
                "id": "68f733d8",
                "type": "widget",
                "waitMs": 0,
                "waitType": "debounce",
                "event": "clickToolbar",
                "method": "refresh",
                "pluginId": "tbl_workflow_templates",
                "targetId": "4d"
              }
            },
            "_columnEditable": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "emptyMessage": "No rows found",
            "pagination": null,
            "_columnEditableInNewRows": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "id": "tbl_workflow_templates",
            "_columnGroupAggregationMode": {
              "f7ed5": "none",
              "6462c": "none",
              "92a5e": "none",
              "eb34b": "none",
              "f950e": "none"
            },
            "_selectedCell": null,
            "overflowType": "scroll",
            "selectedCell": null,
            "_hasNextPage": true,
            "_includeRowInChangesetArray": false,
            "_columnPosition": {
              "f7ed5": "center",
              "6462c": "center",
              "92a5e": "center",
              "eb34b": "center",
              "f950e": "center"
            },
            "_enableSaveActions": true,
            "_columnPlaceholder": {
              "f7ed5": "Enter value",
              "6462c": "Enter value",
              "92a5e": "Enter value",
              "eb34b": "Select options",
              "f950e": "Select option"
            },
            "selectedRow": null,
            "maintainSpaceWhenHidden": false,
            "_columnHidden": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnLabel": {
              "f7ed5": "ID",
              "6462c": "Name",
              "92a5e": "Description",
              "eb34b": "Resources",
              "f950e": "Category"
            },
            "_showToolbar": true
          },
          "btn_load_workflow_templates": {
            "pluginType": "ButtonWidget2",
            "heightType": "fixed",
            "horizontalAlign": "stretch",
            "events": {
              "0": {
                "method": "reset",
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": "7183814b",
                "waitMs": 0
              },
              "1": {
                "method": "trigger",
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": 83354339,
                "waitMs": 0
              }
            },
            "submit": false,
            "submitTargetId": "",
            "disabled": false,
            "clickable": true,
            "iconAfter": "",
            "hidden": false,
            "margin": "4px 8px",
            "_desktopMargin": "4px 8px",
            "ariaLabel": "",
            "text": "Load Workflow Templates",
            "showInEditor": false,
            "_mobileMargin": "4px 8px",
            "tooltipText": "",
            "allowWrap": true,
            "styleVariant": "solid",
            "iconBefore": "",
            "id": "btn_load_workflow_templates",
            "loading": false,
            "loaderPosition": "auto",
            "maintainSpaceWhenHidden": false
          },
          "var_mainPage": {
            "pluginType": "State",
            "id": "var_mainPage",
            "_desktopMargin": "",
            "_mobileMargin": ""
          },
          "btn_load_workflow_templates2": {
            "pluginType": "ButtonWidget2",
            "heightType": "fixed",
            "horizontalAlign": "stretch",
            "events": {
              "0": {
                "method": "trigger",
                "params": {},
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": "7183814b",
                "waitMs": 0
              }
            },
            "submit": false,
            "submitTargetId": "",
            "disabled": false,
            "clickable": true,
            "iconAfter": "",
            "hidden": false,
            "margin": "4px 8px",
            "_desktopMargin": "4px 8px",
            "ariaLabel": "",
            "text": "Reset",
            "showInEditor": false,
            "_mobileMargin": "4px 8px",
            "tooltipText": "",
            "allowWrap": true,
            "styleVariant": "solid",
            "iconBefore": "",
            "id": "btn_load_workflow_templates2",
            "loading": false,
            "loaderPosition": "auto",
            "maintainSpaceWhenHidden": false
          },
          "QUERY_WORKFLOW_FROM_API": {
            "pluginType": "RESTQuery",
            "queryRefreshTime": "",
            "paginationLimit": "",
            "openAPIRequestBody": "",
            "streamResponse": false,
            "body": "",
            "lastReceivedFromResourceAt": 1790491274010,
            "isFunction": false,
            "functionParameters": null,
            "queryDisabledMessage": "",
            "servedFromCache": false,
            "openAPIResolvedSpec": "",
            "offlineUserQueryInputs": "",
            "functionDescription": null,
            "successMessage": "",
            "queryDisabled": "",
            "playgroundQuerySaveId": "latest",
            "workflowParams": null,
            "resourceNameOverride": "",
            "runWhenModelUpdates": true,
            "paginationPaginationField": "",
            "workflowRunExecutionType": "sync",
            "showFailureToaster": true,
            "paginationEnabled": false,
            "query": "https://peterjaberau.retool.com/url/run-workflow",
            "playgroundQueryUuid": "",
            "playgroundQueryId": null,
            "error": null,
            "workflowRunBodyType": "raw",
            "queryRunOnSelectorUpdate": false,
            "runWhenPageLoadsDelay": "",
            "cookies": "",
            "isImported": false,
            "showSuccessToaster": true,
            "cacheKeyTtl": "",
            "requestSentTimestamp": null,
            "queryRunTime": 1663,
            "changesetObject": "",
            "offlineOptimisticResponse": null,
            "errorTransformer": "return data.error",
            "finished": 1790491274095,
            "confirmationMessage": null,
            "isFetching": false,
            "changeset": "",
            "openAPIOperationId": "",
            "queryTriggerDelay": 0,
            "resourceTypeOverride": "",
            "enableErrorTransformer": false,
            "showLatestVersionUpdatedWarning": false,
            "paginationDataField": "",
            "timestamp": 1790491272568,
            "enableTransformer": false,
            "showUpdateSetValueDynamicallyToggle": true,
            "version": 2,
            "overrideOrgCacheForUserCache": false,
            "runWhenPageLoads": false,
            "transformer": "return data",
            "queryTimeout": 10000,
            "workflowId": null,
            "requireConfirmation": false,
            "type": "GET",
            "queryFailureConditions": "",
            "id": "QUERY_WORKFLOW_FROM_API",
            "changesetIsObject": false,
            "enableCaching": false,
            "bodyType": "none",
            "offlineQueryType": "None",
            "queryThrottleTime": 750,
            "updateSetValueDynamically": false,
            "notificationDuration": ""
          },
          "select1": {
            "pluginType": "SelectWidget2",
            "_imageByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "itemMode": "static",
            "_disabledByIndex": {
              "0": false,
              "1": false,
              "2": false
            },
            "showSelectionIndicator": true,
            "_values": {
              "0": "Option 1",
              "1": "Option 2",
              "2": "Option 3"
            },
            "_iconByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "readOnly": false,
            "clearInputValueOnChange": false,
            "iconAfter": "",
            "overlayMinWidth": null,
            "allowDeselect": false,
            "inputValue": "",
            "hidden": false,
            "customValidation": "",
            "_ids": {
              "0": "00030",
              "1": "00031",
              "2": "00032"
            },
            "_captionByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "_hiddenByIndex": {
              "0": false,
              "1": false,
              "2": false
            },
            "_labels": {
              "0": "",
              "1": "",
              "2": ""
            },
            "_tooltipByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "_colorByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "_fallbackTextByIndex": {
              "0": "",
              "1": "",
              "2": ""
            },
            "margin": "4px 8px",
            "_desktopMargin": "4px 8px",
            "searchMode": "fuzzy",
            "hideValidationMessage": false,
            "textBefore": "",
            "value": null,
            "allowCustomValue": false,
            "selectedIndex": null,
            "selectedItem": null,
            "required": false,
            "disabled": false,
            "_validate": false,
            "validationMessage": "",
            "automaticItemColors": false,
            "itemAdornmentShape": "circle",
            "textAfter": "",
            "showInEditor": false,
            "_mobileMargin": "4px 8px",
            "showClear": false,
            "tooltipText": "",
            "labelAlign": "left",
            "id": "select1",
            "formDataKey": "select1",
            "labelCaption": "",
            "labelWidth": 33,
            "placeholder": "Select an option",
            "itemAdornmentSize": "auto",
            "label": "Label",
            "_hasMigratedNestedItems": true,
            "labelWidthUnit": "%",
            "invalid": false,
            "iconBefore": "",
            "selectedLabel": null,
            "emptyMessage": "No options",
            "overlayMaxHeight": 375,
            "loading": false,
            "labelPosition": "top",
            "labelWrap": false,
            "maintainSpaceWhenHidden": false
          },
          "current_user": {
            "lastName": "Jaber",
            "profilePhotoUrl": "https://lh3.googleusercontent.com/a/ACg8ocKKvTMAi9X1pGF8xIaEOecBnrmus1pT7f5WElpMGUILpSmyRQ=s96-c",
            "name": "",
            "sid": "user_5dba4851e18b4fea85e18cc9eea0bbbe",
            "externalIdentifier": null,
            "fullName": "Peter Jaber",
            "locale": "en",
            "id": 177737,
            "firstName": "Peter",
            "email": "peterjaberau@gmail.com"
          },
          "urlparams": {
            "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main"
          },
          "url": {
            "href": "https://peterjaberau.retool.com/editor/1e6cbb30-b4f0-11f1-8707-1bdc377fd873/App-To-Query-Workflow/Main"
          },
          "viewport": {
            "width": 1200,
            "height": 456
          },
          "theme": {
            "primary": "#3170f9",
            "success": "#059669",
            "mode": null,
            "danger": "#dc2626",
            "surfaceSecondary": "#ffffff",
            "mediumElevation": "0 0 5px 1px rgba(0, 0, 0, 0.06)",
            "lowElevation": "0 0 2px 1px rgba(0, 0, 0, 0.05)",
            "info": "#3170f9",
            "tertiary": "#3170f9",
            "highlight": "#fde68a",
            "secondary": "#3170f9",
            "surfacePrimary": "#ffffff",
            "canvas": "#f6f6f6",
            "highElevation": "0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 16px 32px 0 rgba(55, 55, 55, 0.08)",
            "warning": "#cd6f00",
            "borderRadius": "4px"
          },
          "localStorage": {},
          "retoolContext": {
            "currentPage": "Main",
            "pageTag": "latest",
            "appName": "App-To-Query-Workflow",
            "environment": "production",
            "inEditorMode": true,
            "appUuid": "1e6cbb30-b4f0-11f1-8707-1bdc377fd873"
          }
        },
        "size": 16
      },
      "errors": {
        "current_user": {
          "lastName": null,
          "profilePhotoUrl": null,
          "name": null,
          "sid": null,
          "metadata": null,
          "groups": null,
          "externalIdentifier": null,
          "fullName": null,
          "locale": null,
          "id": null,
          "firstName": null,
          "email": null
        },
        "urlparams": {
          "href": null,
          "hash": null
        },
        "url": {
          "href": null,
          "hashParams": null,
          "searchParams": null
        },
        "viewport": {
          "width": null,
          "height": null
        },
        "theme": {
          "primary": null,
          "success": null,
          "labelFont": null,
          "mode": null,
          "danger": null,
          "labelEmphasizedFont": null,
          "surfaceSecondary": null,
          "mediumElevation": null,
          "lowElevation": null,
          "automatic": null,
          "_tokensById": null,
          "info": null,
          "defaultFont": null,
          "tertiary": null,
          "highlight": null,
          "secondary": null,
          "surfacePrimary": null,
          "h1Font": null,
          "canvas": null,
          "h2Font": null,
          "tokens": null,
          "h3Font": null,
          "highElevation": null,
          "h4Font": null,
          "h5Font": null,
          "warning": null,
          "h6Font": null,
          "borderRadius": null
        },
        "localStorage": {
          "values": null
        },
        "retoolContext": {
          "translations": null,
          "pages": null,
          "runningQueries": null,
          "currentPage": null,
          "pageTag": null,
          "appName": null,
          "environment": null,
          "inEditorMode": null,
          "appUuid": null
        },
        "QUERY_WORKFLOW_FROM_API": {
          "queryRefreshTime": null,
          "paginationLimit": null,
          "openAPIRequestBody": null,
          "streamResponse": null,
          "body": null,
          "lastReceivedFromResourceAt": null,
          "isFunction": null,
          "functionParameters": null,
          "queryDisabledMessage": null,
          "servedFromCache": null,
          "openAPIResolvedSpec": null,
          "offlineUserQueryInputs": null,
          "functionDescription": null,
          "successMessage": null,
          "queryDisabled": null,
          "playgroundQuerySaveId": null,
          "workflowParams": null,
          "resourceNameOverride": null,
          "runWhenModelUpdates": null,
          "paginationPaginationField": null,
          "workflowRunExecutionType": null,
          "headers": null,
          "showFailureToaster": null,
          "paginationEnabled": null,
          "query": null,
          "playgroundQueryUuid": null,
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": null,
          "queryRunOnSelectorUpdate": null,
          "runWhenPageLoadsDelay": null,
          "data": null,
          "isImported": null,
          "showSuccessToaster": null,
          "cacheKeyTtl": null,
          "requestSentTimestamp": null,
          "cookies": null,
          "metadata": null,
          "queryRunTime": null,
          "changesetObject": null,
          "offlineOptimisticResponse": null,
          "errorTransformer": null,
          "finished": null,
          "confirmationMessage": null,
          "isFetching": null,
          "changeset": null,
          "openAPIOperationId": null,
          "rawData": null,
          "queryTriggerDelay": null,
          "resourceTypeOverride": null,
          "enableErrorTransformer": null,
          "showLatestVersionUpdatedWarning": null,
          "paginationDataField": null,
          "timestamp": null,
          "openAPIParams": null,
          "enableTransformer": null,
          "showUpdateSetValueDynamicallyToggle": null,
          "version": null,
          "overrideOrgCacheForUserCache": null,
          "runWhenPageLoads": null,
          "transformer": null,
          "queryTimeout": null,
          "workflowId": null,
          "requireConfirmation": null,
          "type": null,
          "queryFailureConditions": null,
          "id": null,
          "changesetIsObject": null,
          "enableCaching": null,
          "bodyType": null,
          "offlineQueryType": null,
          "queryThrottleTime": null,
          "updateSetValueDynamically": null,
          "notificationDuration": null
        },
        "Main": {
          "title": null,
          "browserTitle": null,
          "urlSlug": null,
          "_order": null,
          "id": null
        },
        "$main": {
          "type": null,
          "padding": null,
          "enableFullBleed": null,
          "isHiddenOnDesktop": null,
          "isHiddenOnMobile": null,
          "id": null,
          "_desktopMargin": null,
          "_mobileMargin": null
        },
        "QUERY_WORKFLOW_TEMPLATES": {
          "queryRefreshTime": null,
          "streamResponse": null,
          "lastReceivedFromResourceAt": null,
          "isFunction": null,
          "functionParameters": null,
          "queryDisabledMessage": null,
          "servedFromCache": null,
          "offlineUserQueryInputs": null,
          "functionDescription": null,
          "successMessage": null,
          "queryDisabled": null,
          "playgroundQuerySaveId": null,
          "workflowParams": null,
          "resourceNameOverride": null,
          "runWhenModelUpdates": null,
          "workflowRunExecutionType": null,
          "showFailureToaster": null,
          "query": null,
          "playgroundQueryUuid": null,
          "playgroundQueryId": null,
          "error": null,
          "workflowRunBodyType": null,
          "queryRunOnSelectorUpdate": null,
          "runWhenPageLoadsDelay": null,
          "data": null,
          "isImported": null,
          "showSuccessToaster": null,
          "cacheKeyTtl": null,
          "requestSentTimestamp": null,
          "metadata": null,
          "queryRunTime": null,
          "changesetObject": null,
          "offlineOptimisticResponse": null,
          "errorTransformer": null,
          "finished": null,
          "confirmationMessage": null,
          "isFetching": null,
          "changeset": null,
          "rawData": null,
          "queryTriggerDelay": null,
          "resourceTypeOverride": null,
          "enableErrorTransformer": null,
          "showLatestVersionUpdatedWarning": null,
          "timestamp": null,
          "enableTransformer": null,
          "showUpdateSetValueDynamicallyToggle": null,
          "overrideOrgCacheForUserCache": null,
          "runWhenPageLoads": null,
          "transformer": null,
          "events": {
            "0": {
              "method": null,
              "targetId": null,
              "pluginId": null,
              "waitType": null,
              "event": null,
              "type": null,
              "id": null,
              "waitMs": null
            }
          },
          "isMultiplayerEdited": null,
          "queryTimeout": null,
          "workflowId": null,
          "requireConfirmation": null,
          "queryFailureConditions": null,
          "id": null,
          "changesetIsObject": null,
          "enableCaching": null,
          "offlineQueryType": null,
          "queryThrottleTime": null,
          "updateSetValueDynamically": null,
          "notificationDuration": null
        },
        "tbl_workflow_templates": {
          "selectedRowKey": null,
          "_nextAfterCursor": null,
          "_columnBackgroundColor": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_defaultSort": null,
          "_columnSearchMode": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_columnAlternateRowBackgroundColor": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_clearChangesetOnSave": null,
          "heightType": null,
          "_columnTextColor": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "disableEdits": null,
          "autoColumnWidth": null,
          "_rowHeight": null,
          "_columnIds": {
            "0": null,
            "1": null,
            "2": null,
            "3": null,
            "4": null
          },
          "_isSaving": null,
          "_headerTextWrap": null,
          "_clearChangeset": null,
          "caseSensitiveFiltering": null,
          "_limitOffsetRowCount": null,
          "selectedSourceRow": null,
          "_dynamicColumnsEnabled": null,
          "disableSave": null,
          "_columnEditableOptions": {
            "f7ed5": {
              "spellCheck": null
            },
            "6462c": {
              "spellCheck": null
            },
            "92a5e": {
              "spellCheck": null
            }
          },
          "_toolbarPosition": null,
          "_toolbarButtonLabel": {
            "1a": null,
            "3c": null,
            "4d": null
          },
          "_nextBeforeCursor": null,
          "_persistRowSelection": null,
          "_toolbarButtonIcon": {
            "1a": null,
            "3c": null,
            "4d": null
          },
          "changesetArray": null,
          "groupByColumns": null,
          "_toolbarButtonType": {
            "1a": null,
            "3c": null,
            "4d": null
          },
          "_columnValueOverride": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_showBorder": null,
          "_templatePageSize": null,
          "_showHeader": null,
          "_currentPage": null,
          "overflowActionsOverlayMinWidth": null,
          "_actionsOverflowPosition": null,
          "_columnKey": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "hidden": null,
          "_toolbarButtonIds": {
            "0": null,
            "1": null,
            "2": null
          },
          "columnOrdering": null,
          "data": null,
          "_cellSelection": null,
          "_serverPaginated": null,
          "_linkedFilterId": null,
          "_desktopMargin": null,
          "searchMode": null,
          "_columnCellTooltip": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_columnFormat": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_cursorCache": null,
          "_calculatedPageSize": null,
          "_primaryKeyColumnId": null,
          "selectedDataIndex": null,
          "_columnAlignment": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "margin": null,
          "_columnTooltip": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_columnIcon": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_alwaysShowRowSelectionCheckboxes": null,
          "_columnCellTooltipMode": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_pageSize": null,
          "showInEditor": null,
          "_isAddingNewRows": null,
          "selectedSourceRows": null,
          "_enableExpandableRows": null,
          "_selectMultipleRowsOnActionClick": null,
          "_mobileMargin": null,
          "_columnSortDisabled": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_showSummaryRow": null,
          "filterStack": null,
          "_expandedRows": null,
          "changesetObject": null,
          "_columnReferenceId": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_dynamicColumnSource": null,
          "_rowSelection": null,
          "_columnCaption": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_dynamicRowHeights": null,
          "_columnFormatOptions": {
            "eb34b": {
              "automaticColors": null
            },
            "f950e": {
              "automaticColors": null
            }
          },
          "_changeset": null,
          "_afterCursor": null,
          "_columnHeaderBackgroundColor": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "selectedRowKeys": null,
          "_columnHeaderTextColor": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_beforeCursor": null,
          "_columnSummaryAggregationMode": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "searchTerm": null,
          "selectedRows": null,
          "_disabledVirtualization": null,
          "_expandedRowDataIndexes": null,
          "_showColumnBorders": null,
          "overflowActionsOverlayMaxHeight": null,
          "_columnSize": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_serverPaginationType": null,
          "_columnSortMode": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_selectSingleRowsOnActionClick": null,
          "_showFooter": null,
          "_alwaysShowScrollbars": null,
          "_virtualizeStartIndex": null,
          "_toolbarButtonHidden": {
            "1a": null,
            "3c": null,
            "4d": null
          },
          "events": {
            "0": {
              "method": null,
              "targetId": null,
              "pluginId": null,
              "waitType": null,
              "event": null,
              "type": null,
              "id": null,
              "waitMs": null
            },
            "1": {
              "id": null,
              "type": null,
              "waitMs": null,
              "waitType": null,
              "event": null,
              "method": null,
              "pluginId": null,
              "targetId": null
            },
            "2": {
              "id": null,
              "type": null,
              "waitMs": null,
              "waitType": null,
              "event": null,
              "method": null,
              "pluginId": null,
              "targetId": null
            }
          },
          "_columnEditable": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "newRows": null,
          "_rowBackgroundColor": null,
          "emptyMessage": null,
          "pagination": null,
          "selectedDataIndexes": null,
          "_columnEditableInNewRows": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "id": null,
          "_columnGroupAggregationMode": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "sortArray": null,
          "_selectedCell": null,
          "overflowType": null,
          "selectedCell": null,
          "_defaultSelectedRow": {
            "mode": null,
            "indexType": null,
            "index": null
          },
          "_hasNextPage": null,
          "_includeRowInChangesetArray": null,
          "_columnPosition": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_enableSaveActions": null,
          "_columnPlaceholder": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_defaultFilterOperator": null,
          "_virtualizeEndIndex": null,
          "selectedRow": null,
          "maintainSpaceWhenHidden": null,
          "_columnHidden": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_columnLabel": {
            "f7ed5": null,
            "6462c": null,
            "92a5e": null,
            "eb34b": null,
            "f950e": null
          },
          "_showToolbar": null
        },
        "btn_load_workflow_templates": {
          "heightType": null,
          "horizontalAlign": null,
          "clickable": null,
          "iconAfter": null,
          "submitTargetId": null,
          "hidden": null,
          "_desktopMargin": null,
          "ariaLabel": null,
          "text": null,
          "margin": null,
          "showInEditor": null,
          "_mobileMargin": null,
          "tooltipText": null,
          "allowWrap": null,
          "styleVariant": null,
          "submit": null,
          "iconBefore": null,
          "events": {
            "0": {
              "method": null,
              "targetId": null,
              "pluginId": null,
              "waitType": null,
              "event": null,
              "type": null,
              "id": null,
              "waitMs": null
            },
            "1": {
              "method": null,
              "targetId": null,
              "pluginId": null,
              "waitType": null,
              "event": null,
              "type": null,
              "id": null,
              "waitMs": null
            }
          },
          "id": null,
          "loading": null,
          "loaderPosition": null,
          "disabled": null,
          "maintainSpaceWhenHidden": null
        },
        "var_mainPage": {
          "value": null,
          "id": null,
          "_desktopMargin": null,
          "_mobileMargin": null
        },
        "btn_load_workflow_templates2": {
          "heightType": null,
          "horizontalAlign": null,
          "clickable": null,
          "iconAfter": null,
          "submitTargetId": null,
          "hidden": null,
          "_desktopMargin": null,
          "ariaLabel": null,
          "text": null,
          "margin": null,
          "showInEditor": null,
          "_mobileMargin": null,
          "tooltipText": null,
          "allowWrap": null,
          "styleVariant": null,
          "submit": null,
          "iconBefore": null,
          "events": {
            "0": {
              "method": null,
              "params": {
                "options": null
              },
              "targetId": null,
              "pluginId": null,
              "waitType": null,
              "event": null,
              "type": null,
              "id": null,
              "waitMs": null
            }
          },
          "id": null,
          "loading": null,
          "loaderPosition": null,
          "disabled": null,
          "maintainSpaceWhenHidden": null
        },
        "select1": {
          "imageByIndex": null,
          "_disabledByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "showSelectionIndicator": null,
          "_values": {
            "0": null,
            "1": null,
            "2": null
          },
          "iconByIndex": null,
          "values": null,
          "readOnly": null,
          "clearInputValueOnChange": null,
          "iconAfter": null,
          "_iconByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "overlayMinWidth": null,
          "allowDeselect": null,
          "inputValue": null,
          "hidden": null,
          "customValidation": null,
          "data": null,
          "_desktopMargin": null,
          "searchMode": null,
          "hideValidationMessage": null,
          "fallbackTextByIndex": null,
          "textBefore": null,
          "_fallbackTextByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "selectedItem": null,
          "validationMessage": null,
          "margin": null,
          "automaticItemColors": null,
          "itemAdornmentShape": null,
          "textAfter": null,
          "showInEditor": null,
          "_mobileMargin": null,
          "showClear": null,
          "tooltipText": null,
          "labelAlign": null,
          "formDataKey": null,
          "value": null,
          "hiddenByIndex": null,
          "labelCaption": null,
          "labelWidth": null,
          "deprecatedLabels": null,
          "_hiddenByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "placeholder": null,
          "_captionByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "itemAdornmentSize": null,
          "label": null,
          "_hasMigratedNestedItems": null,
          "captionByIndex": null,
          "_validate": null,
          "itemMode": null,
          "labelWidthUnit": null,
          "allowCustomValue": null,
          "invalid": null,
          "selectedIndex": null,
          "_tooltipByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "_colorByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "tooltipByIndex": null,
          "iconBefore": null,
          "colorByIndex": null,
          "selectedLabel": null,
          "_ids": {
            "0": null,
            "1": null,
            "2": null
          },
          "emptyMessage": null,
          "id": null,
          "overlayMaxHeight": null,
          "loading": null,
          "disabled": null,
          "labelPosition": null,
          "_labels": {
            "0": null,
            "1": null,
            "2": null
          },
          "labelWrap": null,
          "disabledValues": null,
          "disabledByIndex": null,
          "maintainSpaceWhenHidden": null,
          "_imageByIndex": {
            "0": null,
            "1": null,
            "2": null
          },
          "required": null,
          "labels": null
        }
      },
      "dependencyGraph": {
        "cycleCheckingDeferred": false,
        "depGraph": {
          "nodeData": {},
          "adjacencyList": {},
          "adjacencyListReversed": {}
        },
        "dependenciesOfCache": {},
        "cachedTopologicalOrder": [
          [
            "current_user",
            "lastName"
          ],
          [
            "current_user",
            "profilePhotoUrl"
          ],
          [
            "current_user",
            "name"
          ],
          [
            "current_user",
            "sid"
          ],
          [
            "current_user",
            "metadata"
          ],
          [
            "current_user",
            "groups"
          ],
          [
            "current_user",
            "externalIdentifier"
          ],
          [
            "current_user",
            "fullName"
          ],
          [
            "current_user",
            "locale"
          ],
          [
            "current_user",
            "id"
          ],
          [
            "current_user",
            "firstName"
          ],
          [
            "current_user",
            "email"
          ],
          [
            "urlparams",
            "href"
          ],
          [
            "urlparams",
            "hash"
          ],
          [
            "url",
            "href"
          ],
          [
            "url",
            "hashParams"
          ],
          [
            "url",
            "searchParams"
          ],
          [
            "viewport",
            "width"
          ],
          [
            "viewport",
            "height"
          ],
          [
            "theme",
            "primary"
          ],
          [
            "theme",
            "success"
          ],
          [
            "theme",
            "labelFont"
          ],
          [
            "theme",
            "mode"
          ],
          [
            "theme",
            "danger"
          ],
          [
            "theme",
            "labelEmphasizedFont"
          ],
          [
            "theme",
            "surfaceSecondary"
          ],
          [
            "theme",
            "mediumElevation"
          ],
          [
            "theme",
            "lowElevation"
          ],
          [
            "theme",
            "automatic"
          ],
          [
            "theme",
            "_tokensById"
          ],
          [
            "theme",
            "info"
          ],
          [
            "theme",
            "defaultFont"
          ],
          [
            "theme",
            "tertiary"
          ],
          [
            "theme",
            "highlight"
          ],
          [
            "theme",
            "secondary"
          ],
          [
            "theme",
            "surfacePrimary"
          ],
          [
            "theme",
            "h1Font"
          ],
          [
            "theme",
            "canvas"
          ],
          [
            "theme",
            "h2Font"
          ],
          [
            "theme",
            "tokens"
          ],
          [
            "theme",
            "h3Font"
          ],
          [
            "theme",
            "highElevation"
          ],
          [
            "theme",
            "h4Font"
          ],
          [
            "theme",
            "h5Font"
          ],
          [
            "theme",
            "warning"
          ],
          [
            "theme",
            "h6Font"
          ],
          [
            "theme",
            "borderRadius"
          ],
          [
            "localStorage",
            "values"
          ],
          [
            "retoolContext",
            "translations"
          ],
          [
            "retoolContext",
            "pages"
          ],
          [
            "retoolContext",
            "runningQueries"
          ],
          [
            "retoolContext",
            "currentPage"
          ],
          [
            "retoolContext",
            "pageTag"
          ],
          [
            "retoolContext",
            "appName"
          ],
          [
            "retoolContext",
            "environment"
          ],
          [
            "retoolContext",
            "inEditorMode"
          ],
          [
            "retoolContext",
            "appUuid"
          ],
          [
            "Main",
            "title"
          ],
          [
            "Main",
            "browserTitle"
          ],
          [
            "Main",
            "urlSlug"
          ],
          [
            "Main",
            "_order"
          ],
          [
            "Main",
            "id"
          ],
          [
            "$main",
            "type"
          ],
          [
            "$main",
            "padding"
          ],
          [
            "$main",
            "enableFullBleed"
          ],
          [
            "$main",
            "isHiddenOnDesktop"
          ],
          [
            "$main",
            "isHiddenOnMobile"
          ],
          [
            "$main",
            "id"
          ],
          [
            "$main",
            "_desktopMargin"
          ],
          [
            "$main",
            "_mobileMargin"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryRefreshTime"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "streamResponse"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "lastReceivedFromResourceAt"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "isFunction"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "functionParameters"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryDisabledMessage"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "servedFromCache"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "offlineUserQueryInputs"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "functionDescription"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "successMessage"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryDisabled"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "playgroundQuerySaveId"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "workflowParams"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "resourceNameOverride"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "runWhenModelUpdates"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "workflowRunExecutionType"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "showFailureToaster"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "query"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "playgroundQueryUuid"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "playgroundQueryId"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "error"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "workflowRunBodyType"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryRunOnSelectorUpdate"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "runWhenPageLoadsDelay"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "data"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "isImported"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "showSuccessToaster"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "cacheKeyTtl"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "requestSentTimestamp"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "metadata"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryRunTime"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "changesetObject"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "offlineOptimisticResponse"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "errorTransformer"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "finished"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "confirmationMessage"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "isFetching"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "changeset"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "rawData"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryTriggerDelay"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "resourceTypeOverride"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "enableErrorTransformer"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "showLatestVersionUpdatedWarning"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "timestamp"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "enableTransformer"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "showUpdateSetValueDynamicallyToggle"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "overrideOrgCacheForUserCache"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "runWhenPageLoads"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "transformer"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "method"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "targetId"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "pluginId"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "waitType"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "event"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "type"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "id"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "events",
            0,
            "waitMs"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "isMultiplayerEdited"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryTimeout"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "workflowId"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "requireConfirmation"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryFailureConditions"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "id"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "changesetIsObject"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "enableCaching"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "offlineQueryType"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "queryThrottleTime"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "updateSetValueDynamically"
          ],
          [
            "QUERY_WORKFLOW_TEMPLATES",
            "notificationDuration"
          ],
          [
            "tbl_workflow_templates",
            "selectedRowKey"
          ],
          [
            "tbl_workflow_templates",
            "_nextAfterCursor"
          ],
          [
            "tbl_workflow_templates",
            "_columnIds",
            0
          ],
          [
            "tbl_workflow_templates",
            "_columnIds",
            1
          ],
          [
            "tbl_workflow_templates",
            "_columnIds",
            2
          ],
          [
            "tbl_workflow_templates",
            "_columnIds",
            3
          ],
          [
            "tbl_workflow_templates",
            "_columnIds",
            4
          ],
          [
            "tbl_workflow_templates",
            "_columnKey",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnKey",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnKey",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnKey",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnKey",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "data"
          ],
          [
            "tbl_workflow_templates",
            "_serverPaginated"
          ],
          [
            "tbl_workflow_templates",
            "searchTerm"
          ],
          [
            "tbl_workflow_templates",
            "searchMode"
          ],
          [
            "tbl_workflow_templates",
            "_serverPaginationType"
          ],
          [
            "tbl_workflow_templates",
            "_defaultSort"
          ],
          [
            "tbl_workflow_templates",
            "_columnReferenceId",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnReferenceId",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnReferenceId",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnReferenceId",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnReferenceId",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "sortArray"
          ],
          [
            "tbl_workflow_templates",
            "_defaultSelectedRow",
            "mode"
          ],
          [
            "tbl_workflow_templates",
            "_defaultSelectedRow",
            "indexType"
          ],
          [
            "tbl_workflow_templates",
            "_defaultSelectedRow",
            "index"
          ],
          [
            "tbl_workflow_templates",
            "_disabledVirtualization"
          ],
          [
            "tbl_workflow_templates",
            "_virtualizeStartIndex"
          ],
          [
            "tbl_workflow_templates",
            "_virtualizeEndIndex"
          ],
          [
            "tbl_workflow_templates",
            "_columnValueOverride",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnValueOverride",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnValueOverride",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnValueOverride",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnValueOverride",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnBackgroundColor",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnBackgroundColor",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnBackgroundColor",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnBackgroundColor",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnBackgroundColor",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSearchMode",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnSearchMode",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnSearchMode",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSearchMode",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnSearchMode",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlternateRowBackgroundColor",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlternateRowBackgroundColor",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlternateRowBackgroundColor",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlternateRowBackgroundColor",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlternateRowBackgroundColor",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_clearChangesetOnSave"
          ],
          [
            "tbl_workflow_templates",
            "heightType"
          ],
          [
            "tbl_workflow_templates",
            "_columnTextColor",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnTextColor",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnTextColor",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnTextColor",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnTextColor",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "disableEdits"
          ],
          [
            "tbl_workflow_templates",
            "autoColumnWidth"
          ],
          [
            "tbl_workflow_templates",
            "_rowHeight"
          ],
          [
            "tbl_workflow_templates",
            "_isSaving"
          ],
          [
            "tbl_workflow_templates",
            "_headerTextWrap"
          ],
          [
            "tbl_workflow_templates",
            "_clearChangeset"
          ],
          [
            "tbl_workflow_templates",
            "caseSensitiveFiltering"
          ],
          [
            "tbl_workflow_templates",
            "_limitOffsetRowCount"
          ],
          [
            "tbl_workflow_templates",
            "selectedSourceRow"
          ],
          [
            "tbl_workflow_templates",
            "_dynamicColumnsEnabled"
          ],
          [
            "tbl_workflow_templates",
            "disableSave"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableOptions",
            "f7ed5",
            "spellCheck"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableOptions",
            "6462c",
            "spellCheck"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableOptions",
            "92a5e",
            "spellCheck"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarPosition"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonLabel",
            "1a"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonLabel",
            "3c"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonLabel",
            "4d"
          ],
          [
            "tbl_workflow_templates",
            "_nextBeforeCursor"
          ],
          [
            "tbl_workflow_templates",
            "_persistRowSelection"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIcon",
            "1a"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIcon",
            "3c"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIcon",
            "4d"
          ],
          [
            "tbl_workflow_templates",
            "changesetArray"
          ],
          [
            "tbl_workflow_templates",
            "groupByColumns"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonType",
            "1a"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonType",
            "3c"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonType",
            "4d"
          ],
          [
            "tbl_workflow_templates",
            "_showBorder"
          ],
          [
            "tbl_workflow_templates",
            "_templatePageSize"
          ],
          [
            "tbl_workflow_templates",
            "_dynamicColumnSource"
          ],
          [
            "tbl_workflow_templates",
            "_showHeader"
          ],
          [
            "tbl_workflow_templates",
            "_calculatedPageSize"
          ],
          [
            "tbl_workflow_templates",
            "_pageSize"
          ],
          [
            "tbl_workflow_templates",
            "_currentPage"
          ],
          [
            "tbl_workflow_templates",
            "overflowActionsOverlayMinWidth"
          ],
          [
            "tbl_workflow_templates",
            "_actionsOverflowPosition"
          ],
          [
            "tbl_workflow_templates",
            "hidden"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIds",
            0
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIds",
            1
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonIds",
            2
          ],
          [
            "tbl_workflow_templates",
            "columnOrdering"
          ],
          [
            "tbl_workflow_templates",
            "_cellSelection"
          ],
          [
            "tbl_workflow_templates",
            "_linkedFilterId"
          ],
          [
            "tbl_workflow_templates",
            "margin"
          ],
          [
            "tbl_workflow_templates",
            "_desktopMargin"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltip",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltip",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltip",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltip",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltip",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormat",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormat",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormat",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormat",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormat",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_cursorCache"
          ],
          [
            "tbl_workflow_templates",
            "_primaryKeyColumnId"
          ],
          [
            "tbl_workflow_templates",
            "selectedDataIndex"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlignment",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlignment",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlignment",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlignment",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnAlignment",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnTooltip",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnTooltip",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnTooltip",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnTooltip",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnTooltip",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnIcon",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnIcon",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnIcon",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnIcon",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnIcon",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_alwaysShowRowSelectionCheckboxes"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltipMode",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltipMode",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltipMode",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltipMode",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnCellTooltipMode",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "showInEditor"
          ],
          [
            "tbl_workflow_templates",
            "_isAddingNewRows"
          ],
          [
            "tbl_workflow_templates",
            "selectedSourceRows"
          ],
          [
            "tbl_workflow_templates",
            "_enableExpandableRows"
          ],
          [
            "tbl_workflow_templates",
            "_selectMultipleRowsOnActionClick"
          ],
          [
            "tbl_workflow_templates",
            "_mobileMargin"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortDisabled",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortDisabled",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortDisabled",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortDisabled",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortDisabled",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_showSummaryRow"
          ],
          [
            "tbl_workflow_templates",
            "_defaultFilterOperator"
          ],
          [
            "tbl_workflow_templates",
            "filterStack"
          ],
          [
            "tbl_workflow_templates",
            "_expandedRows"
          ],
          [
            "tbl_workflow_templates",
            "changesetObject"
          ],
          [
            "tbl_workflow_templates",
            "_rowSelection"
          ],
          [
            "tbl_workflow_templates",
            "_columnCaption",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnCaption",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnCaption",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnCaption",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnCaption",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_dynamicRowHeights"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormatOptions",
            "eb34b",
            "automaticColors"
          ],
          [
            "tbl_workflow_templates",
            "_columnFormatOptions",
            "f950e",
            "automaticColors"
          ],
          [
            "tbl_workflow_templates",
            "_changeset"
          ],
          [
            "tbl_workflow_templates",
            "_afterCursor"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderBackgroundColor",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderBackgroundColor",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderBackgroundColor",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderBackgroundColor",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderBackgroundColor",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "selectedRowKeys"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderTextColor",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderTextColor",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderTextColor",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderTextColor",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnHeaderTextColor",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_beforeCursor"
          ],
          [
            "tbl_workflow_templates",
            "_columnSummaryAggregationMode",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnSummaryAggregationMode",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnSummaryAggregationMode",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSummaryAggregationMode",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnSummaryAggregationMode",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "selectedRows"
          ],
          [
            "tbl_workflow_templates",
            "_expandedRowDataIndexes"
          ],
          [
            "tbl_workflow_templates",
            "_showColumnBorders"
          ],
          [
            "tbl_workflow_templates",
            "overflowActionsOverlayMaxHeight"
          ],
          [
            "tbl_workflow_templates",
            "_columnSize",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnSize",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnSize",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSize",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnSize",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortMode",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortMode",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortMode",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortMode",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnSortMode",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_selectSingleRowsOnActionClick"
          ],
          [
            "tbl_workflow_templates",
            "_showFooter"
          ],
          [
            "tbl_workflow_templates",
            "_alwaysShowScrollbars"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonHidden",
            "1a"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonHidden",
            "3c"
          ],
          [
            "tbl_workflow_templates",
            "_toolbarButtonHidden",
            "4d"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "method"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "targetId"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "pluginId"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "waitType"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "event"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "type"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "id"
          ],
          [
            "tbl_workflow_templates",
            "events",
            0,
            "waitMs"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "id"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "type"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "waitMs"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "waitType"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "event"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "method"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "pluginId"
          ],
          [
            "tbl_workflow_templates",
            "events",
            1,
            "targetId"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "id"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "type"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "waitMs"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "waitType"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "event"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "method"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "pluginId"
          ],
          [
            "tbl_workflow_templates",
            "events",
            2,
            "targetId"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditable",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditable",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditable",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditable",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditable",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "newRows"
          ],
          [
            "tbl_workflow_templates",
            "_rowBackgroundColor"
          ],
          [
            "tbl_workflow_templates",
            "emptyMessage"
          ],
          [
            "tbl_workflow_templates",
            "pagination"
          ],
          [
            "tbl_workflow_templates",
            "selectedDataIndexes"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableInNewRows",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableInNewRows",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableInNewRows",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableInNewRows",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnEditableInNewRows",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "id"
          ],
          [
            "tbl_workflow_templates",
            "_columnGroupAggregationMode",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnGroupAggregationMode",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnGroupAggregationMode",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnGroupAggregationMode",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnGroupAggregationMode",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_selectedCell"
          ],
          [
            "tbl_workflow_templates",
            "overflowType"
          ],
          [
            "tbl_workflow_templates",
            "selectedCell"
          ],
          [
            "tbl_workflow_templates",
            "_hasNextPage"
          ],
          [
            "tbl_workflow_templates",
            "_includeRowInChangesetArray"
          ],
          [
            "tbl_workflow_templates",
            "_columnPosition",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnPosition",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnPosition",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnPosition",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnPosition",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_enableSaveActions"
          ],
          [
            "tbl_workflow_templates",
            "_columnPlaceholder",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnPlaceholder",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnPlaceholder",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnPlaceholder",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnPlaceholder",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "selectedRow"
          ],
          [
            "tbl_workflow_templates",
            "maintainSpaceWhenHidden"
          ],
          [
            "tbl_workflow_templates",
            "_columnHidden",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnHidden",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnHidden",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnHidden",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnHidden",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_columnLabel",
            "f7ed5"
          ],
          [
            "tbl_workflow_templates",
            "_columnLabel",
            "6462c"
          ],
          [
            "tbl_workflow_templates",
            "_columnLabel",
            "92a5e"
          ],
          [
            "tbl_workflow_templates",
            "_columnLabel",
            "eb34b"
          ],
          [
            "tbl_workflow_templates",
            "_columnLabel",
            "f950e"
          ],
          [
            "tbl_workflow_templates",
            "_showToolbar"
          ],
          [
            "btn_load_workflow_templates",
            "heightType"
          ],
          [
            "btn_load_workflow_templates",
            "horizontalAlign"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "method"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "targetId"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "pluginId"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "waitType"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "event"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "type"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "id"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            0,
            "waitMs"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "method"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "targetId"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "pluginId"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "waitType"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "event"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "type"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "id"
          ],
          [
            "btn_load_workflow_templates",
            "events",
            1,
            "waitMs"
          ],
          [
            "btn_load_workflow_templates",
            "submitTargetId"
          ],
          [
            "btn_load_workflow_templates",
            "submit"
          ],
          [
            "btn_load_workflow_templates",
            "disabled"
          ],
          [
            "btn_load_workflow_templates",
            "clickable"
          ],
          [
            "btn_load_workflow_templates",
            "iconAfter"
          ],
          [
            "btn_load_workflow_templates",
            "hidden"
          ],
          [
            "btn_load_workflow_templates",
            "margin"
          ],
          [
            "btn_load_workflow_templates",
            "_desktopMargin"
          ],
          [
            "btn_load_workflow_templates",
            "ariaLabel"
          ],
          [
            "btn_load_workflow_templates",
            "text"
          ],
          [
            "btn_load_workflow_templates",
            "showInEditor"
          ],
          [
            "btn_load_workflow_templates",
            "_mobileMargin"
          ],
          [
            "btn_load_workflow_templates",
            "tooltipText"
          ],
          [
            "btn_load_workflow_templates",
            "allowWrap"
          ],
          [
            "btn_load_workflow_templates",
            "styleVariant"
          ],
          [
            "btn_load_workflow_templates",
            "iconBefore"
          ],
          [
            "btn_load_workflow_templates",
            "id"
          ],
          [
            "btn_load_workflow_templates",
            "loading"
          ],
          [
            "btn_load_workflow_templates",
            "loaderPosition"
          ],
          [
            "btn_load_workflow_templates",
            "maintainSpaceWhenHidden"
          ],
          [
            "var_mainPage",
            "value"
          ],
          [
            "var_mainPage",
            "id"
          ],
          [
            "var_mainPage",
            "_desktopMargin"
          ],
          [
            "var_mainPage",
            "_mobileMargin"
          ],
          [
            "btn_load_workflow_templates2",
            "heightType"
          ],
          [
            "btn_load_workflow_templates2",
            "horizontalAlign"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "method"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "params",
            "options"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "targetId"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "pluginId"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "waitType"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "event"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "type"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "id"
          ],
          [
            "btn_load_workflow_templates2",
            "events",
            0,
            "waitMs"
          ],
          [
            "btn_load_workflow_templates2",
            "submitTargetId"
          ],
          [
            "btn_load_workflow_templates2",
            "submit"
          ],
          [
            "btn_load_workflow_templates2",
            "disabled"
          ],
          [
            "btn_load_workflow_templates2",
            "clickable"
          ],
          [
            "btn_load_workflow_templates2",
            "iconAfter"
          ],
          [
            "btn_load_workflow_templates2",
            "hidden"
          ],
          [
            "btn_load_workflow_templates2",
            "margin"
          ],
          [
            "btn_load_workflow_templates2",
            "_desktopMargin"
          ],
          [
            "btn_load_workflow_templates2",
            "ariaLabel"
          ],
          [
            "btn_load_workflow_templates2",
            "text"
          ],
          [
            "btn_load_workflow_templates2",
            "showInEditor"
          ],
          [
            "btn_load_workflow_templates2",
            "_mobileMargin"
          ],
          [
            "btn_load_workflow_templates2",
            "tooltipText"
          ],
          [
            "btn_load_workflow_templates2",
            "allowWrap"
          ],
          [
            "btn_load_workflow_templates2",
            "styleVariant"
          ],
          [
            "btn_load_workflow_templates2",
            "iconBefore"
          ],
          [
            "btn_load_workflow_templates2",
            "id"
          ],
          [
            "btn_load_workflow_templates2",
            "loading"
          ],
          [
            "btn_load_workflow_templates2",
            "loaderPosition"
          ],
          [
            "btn_load_workflow_templates2",
            "maintainSpaceWhenHidden"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryRefreshTime"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "paginationLimit"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "openAPIRequestBody"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "streamResponse"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "body"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "lastReceivedFromResourceAt"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "isFunction"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "functionParameters"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryDisabledMessage"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "servedFromCache"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "openAPIResolvedSpec"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "offlineUserQueryInputs"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "functionDescription"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "successMessage"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryDisabled"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "playgroundQuerySaveId"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "workflowParams"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "resourceNameOverride"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "runWhenModelUpdates"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "paginationPaginationField"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "workflowRunExecutionType"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "headers"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "showFailureToaster"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "paginationEnabled"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "query"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "playgroundQueryUuid"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "playgroundQueryId"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "error"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "workflowRunBodyType"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryRunOnSelectorUpdate"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "runWhenPageLoadsDelay"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "cookies"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "openAPIParams"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "data"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "isImported"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "showSuccessToaster"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "cacheKeyTtl"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "requestSentTimestamp"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "metadata"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryRunTime"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "changesetObject"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "offlineOptimisticResponse"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "errorTransformer"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "finished"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "confirmationMessage"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "isFetching"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "changeset"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "openAPIOperationId"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "rawData"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryTriggerDelay"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "resourceTypeOverride"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "enableErrorTransformer"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "showLatestVersionUpdatedWarning"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "paginationDataField"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "timestamp"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "enableTransformer"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "showUpdateSetValueDynamicallyToggle"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "version"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "overrideOrgCacheForUserCache"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "runWhenPageLoads"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "transformer"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryTimeout"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "workflowId"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "requireConfirmation"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "type"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryFailureConditions"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "id"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "changesetIsObject"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "enableCaching"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "bodyType"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "offlineQueryType"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "queryThrottleTime"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "updateSetValueDynamically"
          ],
          [
            "QUERY_WORKFLOW_FROM_API",
            "notificationDuration"
          ],
          [
            "select1",
            "itemMode"
          ],
          [
            "select1",
            "_imageByIndex",
            0
          ],
          [
            "select1",
            "_imageByIndex",
            1
          ],
          [
            "select1",
            "_imageByIndex",
            2
          ],
          [
            "select1",
            "imageByIndex"
          ],
          [
            "select1",
            "_disabledByIndex",
            0
          ],
          [
            "select1",
            "_disabledByIndex",
            1
          ],
          [
            "select1",
            "_disabledByIndex",
            2
          ],
          [
            "select1",
            "showSelectionIndicator"
          ],
          [
            "select1",
            "_values",
            0
          ],
          [
            "select1",
            "_values",
            1
          ],
          [
            "select1",
            "_values",
            2
          ],
          [
            "select1",
            "_iconByIndex",
            0
          ],
          [
            "select1",
            "_iconByIndex",
            1
          ],
          [
            "select1",
            "_iconByIndex",
            2
          ],
          [
            "select1",
            "iconByIndex"
          ],
          [
            "select1",
            "values"
          ],
          [
            "select1",
            "readOnly"
          ],
          [
            "select1",
            "clearInputValueOnChange"
          ],
          [
            "select1",
            "iconAfter"
          ],
          [
            "select1",
            "overlayMinWidth"
          ],
          [
            "select1",
            "allowDeselect"
          ],
          [
            "select1",
            "inputValue"
          ],
          [
            "select1",
            "hidden"
          ],
          [
            "select1",
            "customValidation"
          ],
          [
            "select1",
            "_fallbackTextByIndex",
            0
          ],
          [
            "select1",
            "_fallbackTextByIndex",
            1
          ],
          [
            "select1",
            "_fallbackTextByIndex",
            2
          ],
          [
            "select1",
            "fallbackTextByIndex"
          ],
          [
            "select1",
            "_hiddenByIndex",
            0
          ],
          [
            "select1",
            "_hiddenByIndex",
            1
          ],
          [
            "select1",
            "_hiddenByIndex",
            2
          ],
          [
            "select1",
            "hiddenByIndex"
          ],
          [
            "select1",
            "_captionByIndex",
            0
          ],
          [
            "select1",
            "_captionByIndex",
            1
          ],
          [
            "select1",
            "_captionByIndex",
            2
          ],
          [
            "select1",
            "captionByIndex"
          ],
          [
            "select1",
            "_tooltipByIndex",
            0
          ],
          [
            "select1",
            "_tooltipByIndex",
            1
          ],
          [
            "select1",
            "_tooltipByIndex",
            2
          ],
          [
            "select1",
            "tooltipByIndex"
          ],
          [
            "select1",
            "_colorByIndex",
            0
          ],
          [
            "select1",
            "_colorByIndex",
            1
          ],
          [
            "select1",
            "_colorByIndex",
            2
          ],
          [
            "select1",
            "colorByIndex"
          ],
          [
            "select1",
            "_ids",
            0
          ],
          [
            "select1",
            "_ids",
            1
          ],
          [
            "select1",
            "_ids",
            2
          ],
          [
            "select1",
            "disabledByIndex"
          ],
          [
            "select1",
            "_labels",
            0
          ],
          [
            "select1",
            "_labels",
            1
          ],
          [
            "select1",
            "_labels",
            2
          ],
          [
            "select1",
            "labels"
          ],
          [
            "select1",
            "data"
          ],
          [
            "select1",
            "margin"
          ],
          [
            "select1",
            "_desktopMargin"
          ],
          [
            "select1",
            "searchMode"
          ],
          [
            "select1",
            "hideValidationMessage"
          ],
          [
            "select1",
            "textBefore"
          ],
          [
            "select1",
            "value"
          ],
          [
            "select1",
            "allowCustomValue"
          ],
          [
            "select1",
            "selectedIndex"
          ],
          [
            "select1",
            "selectedItem"
          ],
          [
            "select1",
            "disabled"
          ],
          [
            "select1",
            "required"
          ],
          [
            "select1",
            "_validate"
          ],
          [
            "select1",
            "validationMessage"
          ],
          [
            "select1",
            "automaticItemColors"
          ],
          [
            "select1",
            "itemAdornmentShape"
          ],
          [
            "select1",
            "textAfter"
          ],
          [
            "select1",
            "showInEditor"
          ],
          [
            "select1",
            "_mobileMargin"
          ],
          [
            "select1",
            "showClear"
          ],
          [
            "select1",
            "tooltipText"
          ],
          [
            "select1",
            "labelAlign"
          ],
          [
            "select1",
            "id"
          ],
          [
            "select1",
            "formDataKey"
          ],
          [
            "select1",
            "labelCaption"
          ],
          [
            "select1",
            "labelWidth"
          ],
          [
            "select1",
            "deprecatedLabels"
          ],
          [
            "select1",
            "placeholder"
          ],
          [
            "select1",
            "itemAdornmentSize"
          ],
          [
            "select1",
            "label"
          ],
          [
            "select1",
            "_hasMigratedNestedItems"
          ],
          [
            "select1",
            "labelWidthUnit"
          ],
          [
            "select1",
            "invalid"
          ],
          [
            "select1",
            "iconBefore"
          ],
          [
            "select1",
            "selectedLabel"
          ],
          [
            "select1",
            "emptyMessage"
          ],
          [
            "select1",
            "overlayMaxHeight"
          ],
          [
            "select1",
            "loading"
          ],
          [
            "select1",
            "labelPosition"
          ],
          [
            "select1",
            "labelWrap"
          ],
          [
            "select1",
            "disabledValues"
          ],
          [
            "select1",
            "maintainSpaceWhenHidden"
          ]
        ],
        "cachedTopologicalIndex": {
          "current_user.lastName": 0,
          "current_user.profilePhotoUrl": 1,
          "current_user.name": 2,
          "current_user.sid": 3,
          "current_user.metadata": 4,
          "current_user.groups": 5,
          "current_user.externalIdentifier": 6,
          "current_user.fullName": 7,
          "current_user.locale": 8,
          "current_user.id": 9,
          "current_user.firstName": 10,
          "current_user.email": 11,
          "urlparams.href": 12,
          "urlparams.hash": 13,
          "url.href": 14,
          "url.hashParams": 15,
          "url.searchParams": 16,
          "viewport.width": 17,
          "viewport.height": 18,
          "theme.primary": 19,
          "theme.success": 20,
          "theme.labelFont": 21,
          "theme.mode": 22,
          "theme.danger": 23,
          "theme.labelEmphasizedFont": 24,
          "theme.surfaceSecondary": 25,
          "theme.mediumElevation": 26,
          "theme.lowElevation": 27,
          "theme.automatic": 28,
          "theme._tokensById": 29,
          "theme.info": 30,
          "theme.defaultFont": 31,
          "theme.tertiary": 32,
          "theme.highlight": 33,
          "theme.secondary": 34,
          "theme.surfacePrimary": 35,
          "theme.h1Font": 36,
          "theme.canvas": 37,
          "theme.h2Font": 38,
          "theme.tokens": 39,
          "theme.h3Font": 40,
          "theme.highElevation": 41,
          "theme.h4Font": 42,
          "theme.h5Font": 43,
          "theme.warning": 44,
          "theme.h6Font": 45,
          "theme.borderRadius": 46,
          "localStorage.values": 47,
          "retoolContext.translations": 48,
          "retoolContext.pages": 49,
          "retoolContext.runningQueries": 50,
          "retoolContext.currentPage": 51,
          "retoolContext.pageTag": 52,
          "retoolContext.appName": 53,
          "retoolContext.environment": 54,
          "retoolContext.inEditorMode": 55,
          "retoolContext.appUuid": 56,
          "Main.title": 57,
          "Main.browserTitle": 58,
          "Main.urlSlug": 59,
          "Main._order": 60,
          "Main.id": 61,
          "$main.type": 62,
          "$main.padding": 63,
          "$main.enableFullBleed": 64,
          "$main.isHiddenOnDesktop": 65,
          "$main.isHiddenOnMobile": 66,
          "$main.id": 67,
          "$main._desktopMargin": 68,
          "$main._mobileMargin": 69,
          "QUERY_WORKFLOW_TEMPLATES.queryRefreshTime": 70,
          "QUERY_WORKFLOW_TEMPLATES.streamResponse": 71,
          "QUERY_WORKFLOW_TEMPLATES.lastReceivedFromResourceAt": 72,
          "QUERY_WORKFLOW_TEMPLATES.isFunction": 73,
          "QUERY_WORKFLOW_TEMPLATES.functionParameters": 74,
          "QUERY_WORKFLOW_TEMPLATES.queryDisabledMessage": 75,
          "QUERY_WORKFLOW_TEMPLATES.servedFromCache": 76,
          "QUERY_WORKFLOW_TEMPLATES.offlineUserQueryInputs": 77,
          "QUERY_WORKFLOW_TEMPLATES.functionDescription": 78,
          "QUERY_WORKFLOW_TEMPLATES.successMessage": 79,
          "QUERY_WORKFLOW_TEMPLATES.queryDisabled": 80,
          "QUERY_WORKFLOW_TEMPLATES.playgroundQuerySaveId": 81,
          "QUERY_WORKFLOW_TEMPLATES.workflowParams": 82,
          "QUERY_WORKFLOW_TEMPLATES.resourceNameOverride": 83,
          "QUERY_WORKFLOW_TEMPLATES.runWhenModelUpdates": 84,
          "QUERY_WORKFLOW_TEMPLATES.workflowRunExecutionType": 85,
          "QUERY_WORKFLOW_TEMPLATES.showFailureToaster": 86,
          "QUERY_WORKFLOW_TEMPLATES.query": 87,
          "QUERY_WORKFLOW_TEMPLATES.playgroundQueryUuid": 88,
          "QUERY_WORKFLOW_TEMPLATES.playgroundQueryId": 89,
          "QUERY_WORKFLOW_TEMPLATES.error": 90,
          "QUERY_WORKFLOW_TEMPLATES.workflowRunBodyType": 91,
          "QUERY_WORKFLOW_TEMPLATES.queryRunOnSelectorUpdate": 92,
          "QUERY_WORKFLOW_TEMPLATES.runWhenPageLoadsDelay": 93,
          "QUERY_WORKFLOW_TEMPLATES.data": 94,
          "QUERY_WORKFLOW_TEMPLATES.isImported": 95,
          "QUERY_WORKFLOW_TEMPLATES.showSuccessToaster": 96,
          "QUERY_WORKFLOW_TEMPLATES.cacheKeyTtl": 97,
          "QUERY_WORKFLOW_TEMPLATES.requestSentTimestamp": 98,
          "QUERY_WORKFLOW_TEMPLATES.metadata": 99,
          "QUERY_WORKFLOW_TEMPLATES.queryRunTime": 100,
          "QUERY_WORKFLOW_TEMPLATES.changesetObject": 101,
          "QUERY_WORKFLOW_TEMPLATES.offlineOptimisticResponse": 102,
          "QUERY_WORKFLOW_TEMPLATES.errorTransformer": 103,
          "QUERY_WORKFLOW_TEMPLATES.finished": 104,
          "QUERY_WORKFLOW_TEMPLATES.confirmationMessage": 105,
          "QUERY_WORKFLOW_TEMPLATES.isFetching": 106,
          "QUERY_WORKFLOW_TEMPLATES.changeset": 107,
          "QUERY_WORKFLOW_TEMPLATES.rawData": 108,
          "QUERY_WORKFLOW_TEMPLATES.queryTriggerDelay": 109,
          "QUERY_WORKFLOW_TEMPLATES.resourceTypeOverride": 110,
          "QUERY_WORKFLOW_TEMPLATES.enableErrorTransformer": 111,
          "QUERY_WORKFLOW_TEMPLATES.showLatestVersionUpdatedWarning": 112,
          "QUERY_WORKFLOW_TEMPLATES.timestamp": 113,
          "QUERY_WORKFLOW_TEMPLATES.enableTransformer": 114,
          "QUERY_WORKFLOW_TEMPLATES.showUpdateSetValueDynamicallyToggle": 115,
          "QUERY_WORKFLOW_TEMPLATES.overrideOrgCacheForUserCache": 116,
          "QUERY_WORKFLOW_TEMPLATES.runWhenPageLoads": 117,
          "QUERY_WORKFLOW_TEMPLATES.transformer": 118,
          "QUERY_WORKFLOW_TEMPLATES.events.0.method": 119,
          "QUERY_WORKFLOW_TEMPLATES.events.0.targetId": 120,
          "QUERY_WORKFLOW_TEMPLATES.events.0.pluginId": 121,
          "QUERY_WORKFLOW_TEMPLATES.events.0.waitType": 122,
          "QUERY_WORKFLOW_TEMPLATES.events.0.event": 123,
          "QUERY_WORKFLOW_TEMPLATES.events.0.type": 124,
          "QUERY_WORKFLOW_TEMPLATES.events.0.id": 125,
          "QUERY_WORKFLOW_TEMPLATES.events.0.waitMs": 126,
          "QUERY_WORKFLOW_TEMPLATES.isMultiplayerEdited": 127,
          "QUERY_WORKFLOW_TEMPLATES.queryTimeout": 128,
          "QUERY_WORKFLOW_TEMPLATES.workflowId": 129,
          "QUERY_WORKFLOW_TEMPLATES.requireConfirmation": 130,
          "QUERY_WORKFLOW_TEMPLATES.queryFailureConditions": 131,
          "QUERY_WORKFLOW_TEMPLATES.id": 132,
          "QUERY_WORKFLOW_TEMPLATES.changesetIsObject": 133,
          "QUERY_WORKFLOW_TEMPLATES.enableCaching": 134,
          "QUERY_WORKFLOW_TEMPLATES.offlineQueryType": 135,
          "QUERY_WORKFLOW_TEMPLATES.queryThrottleTime": 136,
          "QUERY_WORKFLOW_TEMPLATES.updateSetValueDynamically": 137,
          "QUERY_WORKFLOW_TEMPLATES.notificationDuration": 138,
          "tbl_workflow_templates.selectedRowKey": 139,
          "tbl_workflow_templates._nextAfterCursor": 140,
          "tbl_workflow_templates._columnIds.0": 141,
          "tbl_workflow_templates._columnIds.1": 142,
          "tbl_workflow_templates._columnIds.2": 143,
          "tbl_workflow_templates._columnIds.3": 144,
          "tbl_workflow_templates._columnIds.4": 145,
          "tbl_workflow_templates._columnKey.f7ed5": 146,
          "tbl_workflow_templates._columnKey.6462c": 147,
          "tbl_workflow_templates._columnKey.92a5e": 148,
          "tbl_workflow_templates._columnKey.eb34b": 149,
          "tbl_workflow_templates._columnKey.f950e": 150,
          "tbl_workflow_templates.data": 151,
          "tbl_workflow_templates._serverPaginated": 152,
          "tbl_workflow_templates.searchTerm": 153,
          "tbl_workflow_templates.searchMode": 154,
          "tbl_workflow_templates._serverPaginationType": 155,
          "tbl_workflow_templates._defaultSort": 156,
          "tbl_workflow_templates._columnReferenceId.f7ed5": 157,
          "tbl_workflow_templates._columnReferenceId.6462c": 158,
          "tbl_workflow_templates._columnReferenceId.92a5e": 159,
          "tbl_workflow_templates._columnReferenceId.eb34b": 160,
          "tbl_workflow_templates._columnReferenceId.f950e": 161,
          "tbl_workflow_templates.sortArray": 162,
          "tbl_workflow_templates._defaultSelectedRow.mode": 163,
          "tbl_workflow_templates._defaultSelectedRow.indexType": 164,
          "tbl_workflow_templates._defaultSelectedRow.index": 165,
          "tbl_workflow_templates._disabledVirtualization": 166,
          "tbl_workflow_templates._virtualizeStartIndex": 167,
          "tbl_workflow_templates._virtualizeEndIndex": 168,
          "tbl_workflow_templates._columnValueOverride.f7ed5": 169,
          "tbl_workflow_templates._columnValueOverride.6462c": 170,
          "tbl_workflow_templates._columnValueOverride.92a5e": 171,
          "tbl_workflow_templates._columnValueOverride.eb34b": 172,
          "tbl_workflow_templates._columnValueOverride.f950e": 173,
          "tbl_workflow_templates._columnBackgroundColor.f7ed5": 174,
          "tbl_workflow_templates._columnBackgroundColor.6462c": 175,
          "tbl_workflow_templates._columnBackgroundColor.92a5e": 176,
          "tbl_workflow_templates._columnBackgroundColor.eb34b": 177,
          "tbl_workflow_templates._columnBackgroundColor.f950e": 178,
          "tbl_workflow_templates._columnSearchMode.f7ed5": 179,
          "tbl_workflow_templates._columnSearchMode.6462c": 180,
          "tbl_workflow_templates._columnSearchMode.92a5e": 181,
          "tbl_workflow_templates._columnSearchMode.eb34b": 182,
          "tbl_workflow_templates._columnSearchMode.f950e": 183,
          "tbl_workflow_templates._columnAlternateRowBackgroundColor.f7ed5": 184,
          "tbl_workflow_templates._columnAlternateRowBackgroundColor.6462c": 185,
          "tbl_workflow_templates._columnAlternateRowBackgroundColor.92a5e": 186,
          "tbl_workflow_templates._columnAlternateRowBackgroundColor.eb34b": 187,
          "tbl_workflow_templates._columnAlternateRowBackgroundColor.f950e": 188,
          "tbl_workflow_templates._clearChangesetOnSave": 189,
          "tbl_workflow_templates.heightType": 190,
          "tbl_workflow_templates._columnTextColor.f7ed5": 191,
          "tbl_workflow_templates._columnTextColor.6462c": 192,
          "tbl_workflow_templates._columnTextColor.92a5e": 193,
          "tbl_workflow_templates._columnTextColor.eb34b": 194,
          "tbl_workflow_templates._columnTextColor.f950e": 195,
          "tbl_workflow_templates.disableEdits": 196,
          "tbl_workflow_templates.autoColumnWidth": 197,
          "tbl_workflow_templates._rowHeight": 198,
          "tbl_workflow_templates._isSaving": 199,
          "tbl_workflow_templates._headerTextWrap": 200,
          "tbl_workflow_templates._clearChangeset": 201,
          "tbl_workflow_templates.caseSensitiveFiltering": 202,
          "tbl_workflow_templates._limitOffsetRowCount": 203,
          "tbl_workflow_templates.selectedSourceRow": 204,
          "tbl_workflow_templates._dynamicColumnsEnabled": 205,
          "tbl_workflow_templates.disableSave": 206,
          "tbl_workflow_templates._columnEditableOptions.f7ed5.spellCheck": 207,
          "tbl_workflow_templates._columnEditableOptions.6462c.spellCheck": 208,
          "tbl_workflow_templates._columnEditableOptions.92a5e.spellCheck": 209,
          "tbl_workflow_templates._toolbarPosition": 210,
          "tbl_workflow_templates._toolbarButtonLabel.1a": 211,
          "tbl_workflow_templates._toolbarButtonLabel.3c": 212,
          "tbl_workflow_templates._toolbarButtonLabel.4d": 213,
          "tbl_workflow_templates._nextBeforeCursor": 214,
          "tbl_workflow_templates._persistRowSelection": 215,
          "tbl_workflow_templates._toolbarButtonIcon.1a": 216,
          "tbl_workflow_templates._toolbarButtonIcon.3c": 217,
          "tbl_workflow_templates._toolbarButtonIcon.4d": 218,
          "tbl_workflow_templates.changesetArray": 219,
          "tbl_workflow_templates.groupByColumns": 220,
          "tbl_workflow_templates._toolbarButtonType.1a": 221,
          "tbl_workflow_templates._toolbarButtonType.3c": 222,
          "tbl_workflow_templates._toolbarButtonType.4d": 223,
          "tbl_workflow_templates._showBorder": 224,
          "tbl_workflow_templates._templatePageSize": 225,
          "tbl_workflow_templates._dynamicColumnSource": 226,
          "tbl_workflow_templates._showHeader": 227,
          "tbl_workflow_templates._calculatedPageSize": 228,
          "tbl_workflow_templates._pageSize": 229,
          "tbl_workflow_templates._currentPage": 230,
          "tbl_workflow_templates.overflowActionsOverlayMinWidth": 231,
          "tbl_workflow_templates._actionsOverflowPosition": 232,
          "tbl_workflow_templates.hidden": 233,
          "tbl_workflow_templates._toolbarButtonIds.0": 234,
          "tbl_workflow_templates._toolbarButtonIds.1": 235,
          "tbl_workflow_templates._toolbarButtonIds.2": 236,
          "tbl_workflow_templates.columnOrdering": 237,
          "tbl_workflow_templates._cellSelection": 238,
          "tbl_workflow_templates._linkedFilterId": 239,
          "tbl_workflow_templates.margin": 240,
          "tbl_workflow_templates._desktopMargin": 241,
          "tbl_workflow_templates._columnCellTooltip.f7ed5": 242,
          "tbl_workflow_templates._columnCellTooltip.6462c": 243,
          "tbl_workflow_templates._columnCellTooltip.92a5e": 244,
          "tbl_workflow_templates._columnCellTooltip.eb34b": 245,
          "tbl_workflow_templates._columnCellTooltip.f950e": 246,
          "tbl_workflow_templates._columnFormat.f7ed5": 247,
          "tbl_workflow_templates._columnFormat.6462c": 248,
          "tbl_workflow_templates._columnFormat.92a5e": 249,
          "tbl_workflow_templates._columnFormat.eb34b": 250,
          "tbl_workflow_templates._columnFormat.f950e": 251,
          "tbl_workflow_templates._cursorCache": 252,
          "tbl_workflow_templates._primaryKeyColumnId": 253,
          "tbl_workflow_templates.selectedDataIndex": 254,
          "tbl_workflow_templates._columnAlignment.f7ed5": 255,
          "tbl_workflow_templates._columnAlignment.6462c": 256,
          "tbl_workflow_templates._columnAlignment.92a5e": 257,
          "tbl_workflow_templates._columnAlignment.eb34b": 258,
          "tbl_workflow_templates._columnAlignment.f950e": 259,
          "tbl_workflow_templates._columnTooltip.f7ed5": 260,
          "tbl_workflow_templates._columnTooltip.6462c": 261,
          "tbl_workflow_templates._columnTooltip.92a5e": 262,
          "tbl_workflow_templates._columnTooltip.eb34b": 263,
          "tbl_workflow_templates._columnTooltip.f950e": 264,
          "tbl_workflow_templates._columnIcon.f7ed5": 265,
          "tbl_workflow_templates._columnIcon.6462c": 266,
          "tbl_workflow_templates._columnIcon.92a5e": 267,
          "tbl_workflow_templates._columnIcon.eb34b": 268,
          "tbl_workflow_templates._columnIcon.f950e": 269,
          "tbl_workflow_templates._alwaysShowRowSelectionCheckboxes": 270,
          "tbl_workflow_templates._columnCellTooltipMode.f7ed5": 271,
          "tbl_workflow_templates._columnCellTooltipMode.6462c": 272,
          "tbl_workflow_templates._columnCellTooltipMode.92a5e": 273,
          "tbl_workflow_templates._columnCellTooltipMode.eb34b": 274,
          "tbl_workflow_templates._columnCellTooltipMode.f950e": 275,
          "tbl_workflow_templates.showInEditor": 276,
          "tbl_workflow_templates._isAddingNewRows": 277,
          "tbl_workflow_templates.selectedSourceRows": 278,
          "tbl_workflow_templates._enableExpandableRows": 279,
          "tbl_workflow_templates._selectMultipleRowsOnActionClick": 280,
          "tbl_workflow_templates._mobileMargin": 281,
          "tbl_workflow_templates._columnSortDisabled.f7ed5": 282,
          "tbl_workflow_templates._columnSortDisabled.6462c": 283,
          "tbl_workflow_templates._columnSortDisabled.92a5e": 284,
          "tbl_workflow_templates._columnSortDisabled.eb34b": 285,
          "tbl_workflow_templates._columnSortDisabled.f950e": 286,
          "tbl_workflow_templates._showSummaryRow": 287,
          "tbl_workflow_templates._defaultFilterOperator": 288,
          "tbl_workflow_templates.filterStack": 289,
          "tbl_workflow_templates._expandedRows": 290,
          "tbl_workflow_templates.changesetObject": 291,
          "tbl_workflow_templates._rowSelection": 292,
          "tbl_workflow_templates._columnCaption.f7ed5": 293,
          "tbl_workflow_templates._columnCaption.6462c": 294,
          "tbl_workflow_templates._columnCaption.92a5e": 295,
          "tbl_workflow_templates._columnCaption.eb34b": 296,
          "tbl_workflow_templates._columnCaption.f950e": 297,
          "tbl_workflow_templates._dynamicRowHeights": 298,
          "tbl_workflow_templates._columnFormatOptions.eb34b.automaticColors": 299,
          "tbl_workflow_templates._columnFormatOptions.f950e.automaticColors": 300,
          "tbl_workflow_templates._changeset": 301,
          "tbl_workflow_templates._afterCursor": 302,
          "tbl_workflow_templates._columnHeaderBackgroundColor.f7ed5": 303,
          "tbl_workflow_templates._columnHeaderBackgroundColor.6462c": 304,
          "tbl_workflow_templates._columnHeaderBackgroundColor.92a5e": 305,
          "tbl_workflow_templates._columnHeaderBackgroundColor.eb34b": 306,
          "tbl_workflow_templates._columnHeaderBackgroundColor.f950e": 307,
          "tbl_workflow_templates.selectedRowKeys": 308,
          "tbl_workflow_templates._columnHeaderTextColor.f7ed5": 309,
          "tbl_workflow_templates._columnHeaderTextColor.6462c": 310,
          "tbl_workflow_templates._columnHeaderTextColor.92a5e": 311,
          "tbl_workflow_templates._columnHeaderTextColor.eb34b": 312,
          "tbl_workflow_templates._columnHeaderTextColor.f950e": 313,
          "tbl_workflow_templates._beforeCursor": 314,
          "tbl_workflow_templates._columnSummaryAggregationMode.f7ed5": 315,
          "tbl_workflow_templates._columnSummaryAggregationMode.6462c": 316,
          "tbl_workflow_templates._columnSummaryAggregationMode.92a5e": 317,
          "tbl_workflow_templates._columnSummaryAggregationMode.eb34b": 318,
          "tbl_workflow_templates._columnSummaryAggregationMode.f950e": 319,
          "tbl_workflow_templates.selectedRows": 320,
          "tbl_workflow_templates._expandedRowDataIndexes": 321,
          "tbl_workflow_templates._showColumnBorders": 322,
          "tbl_workflow_templates.overflowActionsOverlayMaxHeight": 323,
          "tbl_workflow_templates._columnSize.f7ed5": 324,
          "tbl_workflow_templates._columnSize.6462c": 325,
          "tbl_workflow_templates._columnSize.92a5e": 326,
          "tbl_workflow_templates._columnSize.eb34b": 327,
          "tbl_workflow_templates._columnSize.f950e": 328,
          "tbl_workflow_templates._columnSortMode.f7ed5": 329,
          "tbl_workflow_templates._columnSortMode.6462c": 330,
          "tbl_workflow_templates._columnSortMode.92a5e": 331,
          "tbl_workflow_templates._columnSortMode.eb34b": 332,
          "tbl_workflow_templates._columnSortMode.f950e": 333,
          "tbl_workflow_templates._selectSingleRowsOnActionClick": 334,
          "tbl_workflow_templates._showFooter": 335,
          "tbl_workflow_templates._alwaysShowScrollbars": 336,
          "tbl_workflow_templates._toolbarButtonHidden.1a": 337,
          "tbl_workflow_templates._toolbarButtonHidden.3c": 338,
          "tbl_workflow_templates._toolbarButtonHidden.4d": 339,
          "tbl_workflow_templates.events.0.method": 340,
          "tbl_workflow_templates.events.0.targetId": 341,
          "tbl_workflow_templates.events.0.pluginId": 342,
          "tbl_workflow_templates.events.0.waitType": 343,
          "tbl_workflow_templates.events.0.event": 344,
          "tbl_workflow_templates.events.0.type": 345,
          "tbl_workflow_templates.events.0.id": 346,
          "tbl_workflow_templates.events.0.waitMs": 347,
          "tbl_workflow_templates.events.1.id": 348,
          "tbl_workflow_templates.events.1.type": 349,
          "tbl_workflow_templates.events.1.waitMs": 350,
          "tbl_workflow_templates.events.1.waitType": 351,
          "tbl_workflow_templates.events.1.event": 352,
          "tbl_workflow_templates.events.1.method": 353,
          "tbl_workflow_templates.events.1.pluginId": 354,
          "tbl_workflow_templates.events.1.targetId": 355,
          "tbl_workflow_templates.events.2.id": 356,
          "tbl_workflow_templates.events.2.type": 357,
          "tbl_workflow_templates.events.2.waitMs": 358,
          "tbl_workflow_templates.events.2.waitType": 359,
          "tbl_workflow_templates.events.2.event": 360,
          "tbl_workflow_templates.events.2.method": 361,
          "tbl_workflow_templates.events.2.pluginId": 362,
          "tbl_workflow_templates.events.2.targetId": 363,
          "tbl_workflow_templates._columnEditable.f7ed5": 364,
          "tbl_workflow_templates._columnEditable.6462c": 365,
          "tbl_workflow_templates._columnEditable.92a5e": 366,
          "tbl_workflow_templates._columnEditable.eb34b": 367,
          "tbl_workflow_templates._columnEditable.f950e": 368,
          "tbl_workflow_templates.newRows": 369,
          "tbl_workflow_templates._rowBackgroundColor": 370,
          "tbl_workflow_templates.emptyMessage": 371,
          "tbl_workflow_templates.pagination": 372,
          "tbl_workflow_templates.selectedDataIndexes": 373,
          "tbl_workflow_templates._columnEditableInNewRows.f7ed5": 374,
          "tbl_workflow_templates._columnEditableInNewRows.6462c": 375,
          "tbl_workflow_templates._columnEditableInNewRows.92a5e": 376,
          "tbl_workflow_templates._columnEditableInNewRows.eb34b": 377,
          "tbl_workflow_templates._columnEditableInNewRows.f950e": 378,
          "tbl_workflow_templates.id": 379,
          "tbl_workflow_templates._columnGroupAggregationMode.f7ed5": 380,
          "tbl_workflow_templates._columnGroupAggregationMode.6462c": 381,
          "tbl_workflow_templates._columnGroupAggregationMode.92a5e": 382,
          "tbl_workflow_templates._columnGroupAggregationMode.eb34b": 383,
          "tbl_workflow_templates._columnGroupAggregationMode.f950e": 384,
          "tbl_workflow_templates._selectedCell": 385,
          "tbl_workflow_templates.overflowType": 386,
          "tbl_workflow_templates.selectedCell": 387,
          "tbl_workflow_templates._hasNextPage": 388,
          "tbl_workflow_templates._includeRowInChangesetArray": 389,
          "tbl_workflow_templates._columnPosition.f7ed5": 390,
          "tbl_workflow_templates._columnPosition.6462c": 391,
          "tbl_workflow_templates._columnPosition.92a5e": 392,
          "tbl_workflow_templates._columnPosition.eb34b": 393,
          "tbl_workflow_templates._columnPosition.f950e": 394,
          "tbl_workflow_templates._enableSaveActions": 395,
          "tbl_workflow_templates._columnPlaceholder.f7ed5": 396,
          "tbl_workflow_templates._columnPlaceholder.6462c": 397,
          "tbl_workflow_templates._columnPlaceholder.92a5e": 398,
          "tbl_workflow_templates._columnPlaceholder.eb34b": 399,
          "tbl_workflow_templates._columnPlaceholder.f950e": 400,
          "tbl_workflow_templates.selectedRow": 401,
          "tbl_workflow_templates.maintainSpaceWhenHidden": 402,
          "tbl_workflow_templates._columnHidden.f7ed5": 403,
          "tbl_workflow_templates._columnHidden.6462c": 404,
          "tbl_workflow_templates._columnHidden.92a5e": 405,
          "tbl_workflow_templates._columnHidden.eb34b": 406,
          "tbl_workflow_templates._columnHidden.f950e": 407,
          "tbl_workflow_templates._columnLabel.f7ed5": 408,
          "tbl_workflow_templates._columnLabel.6462c": 409,
          "tbl_workflow_templates._columnLabel.92a5e": 410,
          "tbl_workflow_templates._columnLabel.eb34b": 411,
          "tbl_workflow_templates._columnLabel.f950e": 412,
          "tbl_workflow_templates._showToolbar": 413,
          "btn_load_workflow_templates.heightType": 414,
          "btn_load_workflow_templates.horizontalAlign": 415,
          "btn_load_workflow_templates.events.0.method": 416,
          "btn_load_workflow_templates.events.0.targetId": 417,
          "btn_load_workflow_templates.events.0.pluginId": 418,
          "btn_load_workflow_templates.events.0.waitType": 419,
          "btn_load_workflow_templates.events.0.event": 420,
          "btn_load_workflow_templates.events.0.type": 421,
          "btn_load_workflow_templates.events.0.id": 422,
          "btn_load_workflow_templates.events.0.waitMs": 423,
          "btn_load_workflow_templates.events.1.method": 424,
          "btn_load_workflow_templates.events.1.targetId": 425,
          "btn_load_workflow_templates.events.1.pluginId": 426,
          "btn_load_workflow_templates.events.1.waitType": 427,
          "btn_load_workflow_templates.events.1.event": 428,
          "btn_load_workflow_templates.events.1.type": 429,
          "btn_load_workflow_templates.events.1.id": 430,
          "btn_load_workflow_templates.events.1.waitMs": 431,
          "btn_load_workflow_templates.submitTargetId": 432,
          "btn_load_workflow_templates.submit": 433,
          "btn_load_workflow_templates.disabled": 434,
          "btn_load_workflow_templates.clickable": 435,
          "btn_load_workflow_templates.iconAfter": 436,
          "btn_load_workflow_templates.hidden": 437,
          "btn_load_workflow_templates.margin": 438,
          "btn_load_workflow_templates._desktopMargin": 439,
          "btn_load_workflow_templates.ariaLabel": 440,
          "btn_load_workflow_templates.text": 441,
          "btn_load_workflow_templates.showInEditor": 442,
          "btn_load_workflow_templates._mobileMargin": 443,
          "btn_load_workflow_templates.tooltipText": 444,
          "btn_load_workflow_templates.allowWrap": 445,
          "btn_load_workflow_templates.styleVariant": 446,
          "btn_load_workflow_templates.iconBefore": 447,
          "btn_load_workflow_templates.id": 448,
          "btn_load_workflow_templates.loading": 449,
          "btn_load_workflow_templates.loaderPosition": 450,
          "btn_load_workflow_templates.maintainSpaceWhenHidden": 451,
          "var_mainPage.value": 452,
          "var_mainPage.id": 453,
          "var_mainPage._desktopMargin": 454,
          "var_mainPage._mobileMargin": 455,
          "btn_load_workflow_templates2.heightType": 456,
          "btn_load_workflow_templates2.horizontalAlign": 457,
          "btn_load_workflow_templates2.events.0.method": 458,
          "btn_load_workflow_templates2.events.0.params.options": 459,
          "btn_load_workflow_templates2.events.0.targetId": 460,
          "btn_load_workflow_templates2.events.0.pluginId": 461,
          "btn_load_workflow_templates2.events.0.waitType": 462,
          "btn_load_workflow_templates2.events.0.event": 463,
          "btn_load_workflow_templates2.events.0.type": 464,
          "btn_load_workflow_templates2.events.0.id": 465,
          "btn_load_workflow_templates2.events.0.waitMs": 466,
          "btn_load_workflow_templates2.submitTargetId": 467,
          "btn_load_workflow_templates2.submit": 468,
          "btn_load_workflow_templates2.disabled": 469,
          "btn_load_workflow_templates2.clickable": 470,
          "btn_load_workflow_templates2.iconAfter": 471,
          "btn_load_workflow_templates2.hidden": 472,
          "btn_load_workflow_templates2.margin": 473,
          "btn_load_workflow_templates2._desktopMargin": 474,
          "btn_load_workflow_templates2.ariaLabel": 475,
          "btn_load_workflow_templates2.text": 476,
          "btn_load_workflow_templates2.showInEditor": 477,
          "btn_load_workflow_templates2._mobileMargin": 478,
          "btn_load_workflow_templates2.tooltipText": 479,
          "btn_load_workflow_templates2.allowWrap": 480,
          "btn_load_workflow_templates2.styleVariant": 481,
          "btn_load_workflow_templates2.iconBefore": 482,
          "btn_load_workflow_templates2.id": 483,
          "btn_load_workflow_templates2.loading": 484,
          "btn_load_workflow_templates2.loaderPosition": 485,
          "btn_load_workflow_templates2.maintainSpaceWhenHidden": 486,
          "QUERY_WORKFLOW_FROM_API.queryRefreshTime": 487,
          "QUERY_WORKFLOW_FROM_API.paginationLimit": 488,
          "QUERY_WORKFLOW_FROM_API.openAPIRequestBody": 489,
          "QUERY_WORKFLOW_FROM_API.streamResponse": 490,
          "QUERY_WORKFLOW_FROM_API.body": 491,
          "QUERY_WORKFLOW_FROM_API.lastReceivedFromResourceAt": 492,
          "QUERY_WORKFLOW_FROM_API.isFunction": 493,
          "QUERY_WORKFLOW_FROM_API.functionParameters": 494,
          "QUERY_WORKFLOW_FROM_API.queryDisabledMessage": 495,
          "QUERY_WORKFLOW_FROM_API.servedFromCache": 496,
          "QUERY_WORKFLOW_FROM_API.openAPIResolvedSpec": 497,
          "QUERY_WORKFLOW_FROM_API.offlineUserQueryInputs": 498,
          "QUERY_WORKFLOW_FROM_API.functionDescription": 499,
          "QUERY_WORKFLOW_FROM_API.successMessage": 500,
          "QUERY_WORKFLOW_FROM_API.queryDisabled": 501,
          "QUERY_WORKFLOW_FROM_API.playgroundQuerySaveId": 502,
          "QUERY_WORKFLOW_FROM_API.workflowParams": 503,
          "QUERY_WORKFLOW_FROM_API.resourceNameOverride": 504,
          "QUERY_WORKFLOW_FROM_API.runWhenModelUpdates": 505,
          "QUERY_WORKFLOW_FROM_API.paginationPaginationField": 506,
          "QUERY_WORKFLOW_FROM_API.workflowRunExecutionType": 507,
          "QUERY_WORKFLOW_FROM_API.headers": 508,
          "QUERY_WORKFLOW_FROM_API.showFailureToaster": 509,
          "QUERY_WORKFLOW_FROM_API.paginationEnabled": 510,
          "QUERY_WORKFLOW_FROM_API.query": 511,
          "QUERY_WORKFLOW_FROM_API.playgroundQueryUuid": 512,
          "QUERY_WORKFLOW_FROM_API.playgroundQueryId": 513,
          "QUERY_WORKFLOW_FROM_API.error": 514,
          "QUERY_WORKFLOW_FROM_API.workflowRunBodyType": 515,
          "QUERY_WORKFLOW_FROM_API.queryRunOnSelectorUpdate": 516,
          "QUERY_WORKFLOW_FROM_API.runWhenPageLoadsDelay": 517,
          "QUERY_WORKFLOW_FROM_API.cookies": 518,
          "QUERY_WORKFLOW_FROM_API.openAPIParams": 519,
          "QUERY_WORKFLOW_FROM_API.data": 520,
          "QUERY_WORKFLOW_FROM_API.isImported": 521,
          "QUERY_WORKFLOW_FROM_API.showSuccessToaster": 522,
          "QUERY_WORKFLOW_FROM_API.cacheKeyTtl": 523,
          "QUERY_WORKFLOW_FROM_API.requestSentTimestamp": 524,
          "QUERY_WORKFLOW_FROM_API.metadata": 525,
          "QUERY_WORKFLOW_FROM_API.queryRunTime": 526,
          "QUERY_WORKFLOW_FROM_API.changesetObject": 527,
          "QUERY_WORKFLOW_FROM_API.offlineOptimisticResponse": 528,
          "QUERY_WORKFLOW_FROM_API.errorTransformer": 529,
          "QUERY_WORKFLOW_FROM_API.finished": 530,
          "QUERY_WORKFLOW_FROM_API.confirmationMessage": 531,
          "QUERY_WORKFLOW_FROM_API.isFetching": 532,
          "QUERY_WORKFLOW_FROM_API.changeset": 533,
          "QUERY_WORKFLOW_FROM_API.openAPIOperationId": 534,
          "QUERY_WORKFLOW_FROM_API.rawData": 535,
          "QUERY_WORKFLOW_FROM_API.queryTriggerDelay": 536,
          "QUERY_WORKFLOW_FROM_API.resourceTypeOverride": 537,
          "QUERY_WORKFLOW_FROM_API.enableErrorTransformer": 538,
          "QUERY_WORKFLOW_FROM_API.showLatestVersionUpdatedWarning": 539,
          "QUERY_WORKFLOW_FROM_API.paginationDataField": 540,
          "QUERY_WORKFLOW_FROM_API.timestamp": 541,
          "QUERY_WORKFLOW_FROM_API.enableTransformer": 542,
          "QUERY_WORKFLOW_FROM_API.showUpdateSetValueDynamicallyToggle": 543,
          "QUERY_WORKFLOW_FROM_API.version": 544,
          "QUERY_WORKFLOW_FROM_API.overrideOrgCacheForUserCache": 545,
          "QUERY_WORKFLOW_FROM_API.runWhenPageLoads": 546,
          "QUERY_WORKFLOW_FROM_API.transformer": 547,
          "QUERY_WORKFLOW_FROM_API.queryTimeout": 548,
          "QUERY_WORKFLOW_FROM_API.workflowId": 549,
          "QUERY_WORKFLOW_FROM_API.requireConfirmation": 550,
          "QUERY_WORKFLOW_FROM_API.type": 551,
          "QUERY_WORKFLOW_FROM_API.queryFailureConditions": 552,
          "QUERY_WORKFLOW_FROM_API.id": 553,
          "QUERY_WORKFLOW_FROM_API.changesetIsObject": 554,
          "QUERY_WORKFLOW_FROM_API.enableCaching": 555,
          "QUERY_WORKFLOW_FROM_API.bodyType": 556,
          "QUERY_WORKFLOW_FROM_API.offlineQueryType": 557,
          "QUERY_WORKFLOW_FROM_API.queryThrottleTime": 558,
          "QUERY_WORKFLOW_FROM_API.updateSetValueDynamically": 559,
          "QUERY_WORKFLOW_FROM_API.notificationDuration": 560,
          "select1.itemMode": 561,
          "select1._imageByIndex.0": 562,
          "select1._imageByIndex.1": 563,
          "select1._imageByIndex.2": 564,
          "select1.imageByIndex": 565,
          "select1._disabledByIndex.0": 566,
          "select1._disabledByIndex.1": 567,
          "select1._disabledByIndex.2": 568,
          "select1.showSelectionIndicator": 569,
          "select1._values.0": 570,
          "select1._values.1": 571,
          "select1._values.2": 572,
          "select1._iconByIndex.0": 573,
          "select1._iconByIndex.1": 574,
          "select1._iconByIndex.2": 575,
          "select1.iconByIndex": 576,
          "select1.values": 577,
          "select1.readOnly": 578,
          "select1.clearInputValueOnChange": 579,
          "select1.iconAfter": 580,
          "select1.overlayMinWidth": 581,
          "select1.allowDeselect": 582,
          "select1.inputValue": 583,
          "select1.hidden": 584,
          "select1.customValidation": 585,
          "select1._fallbackTextByIndex.0": 586,
          "select1._fallbackTextByIndex.1": 587,
          "select1._fallbackTextByIndex.2": 588,
          "select1.fallbackTextByIndex": 589,
          "select1._hiddenByIndex.0": 590,
          "select1._hiddenByIndex.1": 591,
          "select1._hiddenByIndex.2": 592,
          "select1.hiddenByIndex": 593,
          "select1._captionByIndex.0": 594,
          "select1._captionByIndex.1": 595,
          "select1._captionByIndex.2": 596,
          "select1.captionByIndex": 597,
          "select1._tooltipByIndex.0": 598,
          "select1._tooltipByIndex.1": 599,
          "select1._tooltipByIndex.2": 600,
          "select1.tooltipByIndex": 601,
          "select1._colorByIndex.0": 602,
          "select1._colorByIndex.1": 603,
          "select1._colorByIndex.2": 604,
          "select1.colorByIndex": 605,
          "select1._ids.0": 606,
          "select1._ids.1": 607,
          "select1._ids.2": 608,
          "select1.disabledByIndex": 609,
          "select1._labels.0": 610,
          "select1._labels.1": 611,
          "select1._labels.2": 612,
          "select1.labels": 613,
          "select1.data": 614,
          "select1.margin": 615,
          "select1._desktopMargin": 616,
          "select1.searchMode": 617,
          "select1.hideValidationMessage": 618,
          "select1.textBefore": 619,
          "select1.value": 620,
          "select1.allowCustomValue": 621,
          "select1.selectedIndex": 622,
          "select1.selectedItem": 623,
          "select1.disabled": 624,
          "select1.required": 625,
          "select1._validate": 626,
          "select1.validationMessage": 627,
          "select1.automaticItemColors": 628,
          "select1.itemAdornmentShape": 629,
          "select1.textAfter": 630,
          "select1.showInEditor": 631,
          "select1._mobileMargin": 632,
          "select1.showClear": 633,
          "select1.tooltipText": 634,
          "select1.labelAlign": 635,
          "select1.id": 636,
          "select1.formDataKey": 637,
          "select1.labelCaption": 638,
          "select1.labelWidth": 639,
          "select1.deprecatedLabels": 640,
          "select1.placeholder": 641,
          "select1.itemAdornmentSize": 642,
          "select1.label": 643,
          "select1._hasMigratedNestedItems": 644,
          "select1.labelWidthUnit": 645,
          "select1.invalid": 646,
          "select1.iconBefore": 647,
          "select1.selectedLabel": 648,
          "select1.emptyMessage": 649,
          "select1.overlayMaxHeight": 650,
          "select1.loading": 651,
          "select1.labelPosition": 652,
          "select1.labelWrap": 653,
          "select1.disabledValues": 654,
          "select1.maintainSpaceWhenHidden": 655
        },
        "metaData": {
          "currentContainerStructure": {
            "parentPointer": {},
            "childrenPointer": {}
          },
          "pluginMetaDataTracker": {
            "idSets": [
              {},
              {},
              {},
              {}
            ],
            "idMaps": [
              {},
              {},
              {},
              {}
            ],
            "selectorSets": [
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              }
            ],
            "selectorMaps": [
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              },
              {
                "inner": {}
              }
            ],
            "stringIdMaps": [
              {}
            ],
            "stringSelectorSets": [
              {}
            ]
          },
          "namespaces": {
            "params": {}
          },
          "previousContainerStructure": {
            "parentPointer": {},
            "childrenPointer": {}
          },
          "pluginTypes": {},
          "formDataProviderTracker": {
            "params": {}
          },
          "formAggregationTracker": {
            "params": {},
            "formDataAggregationField": {},
            "fieldsToAggregate": {}
          },
          "listViewAggregationTracker": {
            "params": {},
            "listViewDescendantFormFieldsTree": {
              "parentPointer": {},
              "childrenPointer": {}
            }
          },
          "suboptimalListViewAggregationTracker": {
            "params": {},
            "suboptimalListViewsProblemsTree": {
              "parentPointer": {},
              "childrenPointer": {}
            }
          },
          "descendentScope": {
            "params": {}
          },
          "scopeBarrier": {
            "referencingIdBlocked": {},
            "barriers": {},
            "barrierGraph": {
              "parentPointer": {},
              "childrenPointer": {}
            },
            "bypassScopeBarrier": {}
          },
          "screenBarrier": {
            "referencingIdBlocked": {},
            "pluginToScreenMap": {},
            "multiscreenEnabled": true
          },
          "templateString": {
            "params": {
              "hooks": [
                null,
                null,
                null
              ]
            },
            "templateStringDeps": {},
            "templateStringDepReverse": {},
            "idToDepNode": {},
            "templateStrings": {
              "inner": {}
            },
            "fallbackTemplateStrings": {
              "inner": {}
            },
            "hooks": [
              {},
              null,
              null,
              null
            ]
          },
          "templateStringOverrides": {
            "params": {}
          },
          "mappedEvaluation": {
            "params": {}
          },
          "globalWidgetOutput": {},
          "propertyUpdates": {},
          "updateExtensions": [
            null,
            null,
            null,
            null,
            {
              "params": {}
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "multiscreenEnabled": true
        },
        "deferredDependencyChecks": []
      },
      "globals": {
        "email": "peterjaberau@gmail.com",
        "id": 177737,
        "firstName": "Peter",
        "lastName": "Jaber",
        "fullName": "Peter Jaber",
        "profilePhotoUrl": "https://lh3.googleusercontent.com/a/ACg8ocKKvTMAi9X1pGF8xIaEOecBnrmus1pT7f5WElpMGUILpSmyRQ=s96-c",
        "groups": [
          {
            "id": 473690,
            "name": "admin"
          },
          {
            "id": 473693,
            "name": "All Users"
          }
        ],
        "metadata": {},
        "sid": "user_5dba4851e18b4fea85e18cc9eea0bbbe",
        "externalIdentifier": null
      },
      "environment": "production",
      "modelInitialized": true,
      "redirectingToShortlink": false,
      "loadedPluginTypes": [],
      "loadedScreens": []
    },
    "appTemplate": {
      "appMaxWidth": "1200px",
      "appStyles": "",
      "appTesting": null,
      "appThemeId": null,
      "appThemeModeId": null,
      "appThemeName": null,
      "createdAt": null,
      "customComponentCollections": [],
      "customDocumentTitle": "",
      "customDocumentTitleEnabled": false,
      "customShortcuts": [],
      "experimentalFeatures": {
        "disableMultiplayerEditing": false,
        "multiplayerEditingEnabled": false,
        "sourceControlTemplateDehydration": false
      },
      "folders": [],
      "formAppSettings": {
        "customRedirectUrl": ""
      },
      "inAppRetoolPillAppearance": "NO_OVERRIDE",
      "instrumentationEnabled": false,
      "internationalizationSettings": {
        "internationalizationEnabled": false,
        "internationalizationFiles": []
      },
      "isFetching": false,
      "isFormApp": false,
      "isGlobalWidget": false,
      "isMobileApp": false,
      "loadingIndicatorsDisabled": false,
      "markdownLinkBehavior": "auto",
      "mobileAppSettings": {
        "displaySetting": {
          "landscapeMode": false,
          "tabletMode": false
        },
        "mobileOfflineModeBannerMode": "default",
        "mobileOfflineModeDelaySync": false,
        "mobileOfflineModeEnabled": false
      },
      "mobileOfflineAssets": [],
      "multiScreenMobileApp": false,
      "notificationsSettings": {
        "globalQueryShowFailureToast": true,
        "globalQueryShowSuccessToast": false,
        "globalQueryToastDuration": 4.5,
        "globalToastPosition": "bottomRight"
      },
      "pageCodeFolders": {
        "Main": []
      },
      "pageLoadValueOverrides": [],
      "persistUrlParams": false,
      "plugins": {
        "Main": {
          "id": "Main",
          "uuid": "46fd3722-67c6-4905-84a7-fd963d403ec5",
          "_comment": null,
          "type": "screen",
          "subtype": "Screen",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "title": "Page 1",
            "browserTitle": "",
            "urlSlug": "",
            "_order": 0,
            "_searchParams": [],
            "_hashParams": [],
            "_customShortcuts": []
          },
          "style": null,
          "position2": null,
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:38:01.968Z",
          "updatedAt": "2026-09-20T12:38:01.968Z",
          "folder": "",
          "presetName": null,
          "screen": null,
          "boxId": null,
          "subBoxIds": null
        },
        "$main": {
          "id": "$main",
          "uuid": null,
          "_comment": null,
          "type": "frame",
          "subtype": "Frame",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "type": "main",
            "padding": "8px 12px",
            "enableFullBleed": false,
            "isHiddenOnDesktop": false,
            "isHiddenOnMobile": false
          },
          "style": {},
          "position2": null,
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:38:01.968Z",
          "updatedAt": "2026-09-20T12:38:01.968Z",
          "folder": "",
          "presetName": null,
          "screen": "Main",
          "boxId": null,
          "subBoxIds": null
        },
        "QUERY_WORKFLOW_TEMPLATES": {
          "id": "QUERY_WORKFLOW_TEMPLATES",
          "uuid": null,
          "_comment": null,
          "type": "datasource",
          "subtype": "WorkflowRun",
          "namespace": null,
          "resourceName": "WorkflowRun",
          "resourceDisplayName": null,
          "template": {
            "queryRefreshTime": "",
            "allowedGroupIds": [],
            "streamResponse": false,
            "lastReceivedFromResourceAt": null,
            "isFunction": false,
            "functionParameters": null,
            "queryDisabledMessage": "",
            "servedFromCache": false,
            "offlineUserQueryInputs": "",
            "functionDescription": null,
            "successMessage": "",
            "queryDisabled": "",
            "playgroundQuerySaveId": "latest",
            "workflowParams": "[{\"key\":\"wait\",\"value\":\"0\"}]",
            "resourceNameOverride": "",
            "runWhenModelUpdates": false,
            "workflowRunExecutionType": "sync",
            "showFailureToaster": true,
            "query": "",
            "playgroundQueryUuid": "",
            "playgroundQueryId": null,
            "error": null,
            "workflowRunBodyType": "json",
            "privateParams": [],
            "queryRunOnSelectorUpdate": false,
            "runWhenPageLoadsDelay": "",
            "data": null,
            "importedQueryInputs": {},
            "isImported": false,
            "showSuccessToaster": false,
            "cacheKeyTtl": "",
            "requestSentTimestamp": null,
            "metadata": null,
            "queryRunTime": null,
            "changesetObject": "",
            "offlineOptimisticResponse": null,
            "errorTransformer": "return data.error",
            "finished": null,
            "confirmationMessage": null,
            "isFetching": false,
            "changeset": "",
            "rawData": null,
            "queryTriggerDelay": "0",
            "resourceTypeOverride": null,
            "watchedParams": [],
            "enableErrorTransformer": false,
            "showLatestVersionUpdatedWarning": false,
            "timestamp": 0,
            "importedQueryDefaults": {},
            "enableTransformer": true,
            "showUpdateSetValueDynamicallyToggle": true,
            "overrideOrgCacheForUserCache": false,
            "runWhenPageLoads": false,
            "transformer": "return data",
            "events": [
              {
                "method": null,
                "params": {},
                "targetId": null,
                "pluginId": "",
                "waitType": "debounce",
                "event": "success",
                "type": "state",
                "id": "4c0c24c2",
                "waitMs": "0"
              }
            ],
            "isMultiplayerEdited": false,
            "queryTimeout": "10000",
            "workflowId": "bca03032-7bdc-4192-a20c-aea51da57ff7",
            "requireConfirmation": false,
            "queryFailureConditions": "",
            "changesetIsObject": false,
            "enableCaching": false,
            "allowedGroups": [],
            "offlineQueryType": "None",
            "queryThrottleTime": "750",
            "updateSetValueDynamically": false,
            "notificationDuration": 4.5
          },
          "style": null,
          "position2": null,
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:38:30.172Z",
          "updatedAt": "2026-09-20T13:45:01.458Z",
          "folder": "",
          "presetName": null,
          "screen": null,
          "boxId": null,
          "subBoxIds": null
        },
        "tbl_workflow_templates": {
          "id": "tbl_workflow_templates",
          "uuid": "7c8aa814-9a91-484a-801b-72f1bcc5b6f8",
          "_comment": null,
          "type": "widget",
          "subtype": "TableWidget2",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "selectedRowKey": null,
            "_nextAfterCursor": "",
            "_columnBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_defaultSort": null,
            "_columnSearchMode": {
              "f7ed5": "default",
              "6462c": "default",
              "92a5e": "default",
              "eb34b": "default",
              "f950e": "default"
            },
            "_columnAlternateRowBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_clearChangesetOnSave": true,
            "heightType": "fixed",
            "_columnTextColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "disableEdits": false,
            "autoColumnWidth": false,
            "_rowHeight": "",
            "_columnIds": [
              "f7ed5",
              "6462c",
              "92a5e",
              "eb34b",
              "f950e"
            ],
            "_isSaving": false,
            "_headerTextWrap": false,
            "_actionIds": [],
            "_clearChangeset": false,
            "caseSensitiveFiltering": false,
            "_limitOffsetRowCount": null,
            "selectedSourceRow": null,
            "_dynamicColumnsEnabled": false,
            "disableSave": false,
            "_columnEditableOptions": {
              "f7ed5": {
                "spellCheck": false
              },
              "6462c": {
                "spellCheck": false
              },
              "92a5e": {
                "spellCheck": false
              },
              "eb34b": {},
              "f950e": {}
            },
            "_toolbarPosition": "bottom",
            "_groupByColumns": [],
            "_toolbarButtonLabel": {
              "1a": "Filter",
              "3c": "Download",
              "4d": "Refresh"
            },
            "_nextBeforeCursor": "",
            "_persistRowSelection": false,
            "_toolbarButtonIcon": {
              "1a": "bold/interface-text-formatting-filter-2",
              "3c": "bold/interface-download-button-2",
              "4d": "bold/interface-arrows-round-left"
            },
            "changesetArray": [],
            "groupByColumns": [],
            "_toolbarButtonType": {
              "1a": "filter",
              "3c": "custom",
              "4d": "custom"
            },
            "_columnOptionList": {
              "f7ed5": {},
              "6462c": {},
              "92a5e": {},
              "eb34b": {},
              "f950e": {}
            },
            "_columnValueOverride": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": "{{ _.startCase(item) }}"
            },
            "_showBorder": true,
            "_templatePageSize": null,
            "_dynamicColumnProperties": {},
            "_showHeader": true,
            "_currentPage": 0,
            "overflowActionsOverlayMinWidth": null,
            "_actionsOverflowPosition": 0,
            "_columnKey": {
              "f7ed5": "id",
              "6462c": "name",
              "92a5e": "description",
              "eb34b": "resources",
              "f950e": "category"
            },
            "hidden": false,
            "_toolbarButtonIds": [
              "1a",
              "3c",
              "4d"
            ],
            "columnOrdering": [],
            "data": "{{  QUERY_WORKFLOW_TEMPLATES.data }}",
            "_cellSelection": "none",
            "_serverPaginated": false,
            "_linkedFilterId": null,
            "searchMode": "fuzzy",
            "_columnCellTooltip": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnFormat": {
              "f7ed5": "string",
              "6462c": "string",
              "92a5e": "string",
              "eb34b": "tags",
              "f950e": "tag"
            },
            "_cursorCache": {},
            "_calculatedPageSize": null,
            "_primaryKeyColumnId": "f7ed5",
            "selectedDataIndex": null,
            "_columnAlignment": {
              "f7ed5": "left",
              "6462c": "left",
              "92a5e": "left",
              "eb34b": "left",
              "f950e": "left"
            },
            "_actionIcon": {},
            "margin": "4px 8px",
            "_columnTooltip": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnIcon": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_alwaysShowRowSelectionCheckboxes": false,
            "_columnCellTooltipMode": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "overflow",
              "f950e": ""
            },
            "_pageSize": null,
            "showInEditor": false,
            "_isAddingNewRows": false,
            "selectedSourceRows": [],
            "_enableExpandableRows": false,
            "_selectMultipleRowsOnActionClick": "no",
            "_columnSortDisabled": {
              "f7ed5": false,
              "6462c": false,
              "92a5e": false,
              "eb34b": false,
              "f950e": false
            },
            "_showSummaryRow": false,
            "filterStack": null,
            "_expandedRows": null,
            "changesetObject": null,
            "_actionDisabled": {},
            "_columnReferenceId": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_dynamicColumnSource": [],
            "_rowSelection": "single",
            "_columnCaption": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_dynamicColumnFormatOptions": {},
            "_dynamicRowHeights": false,
            "_columnFormatOptions": {
              "f7ed5": {},
              "6462c": {},
              "92a5e": {},
              "eb34b": {
                "automaticColors": true
              },
              "f950e": {
                "automaticColors": true
              }
            },
            "_changeset": null,
            "_afterCursor": "",
            "_columnHeaderBackgroundColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "selectedRowKeys": [],
            "_columnHeaderTextColor": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_beforeCursor": "",
            "_columnSummaryAggregationMode": {
              "f7ed5": "none",
              "6462c": "none",
              "92a5e": "none",
              "eb34b": "none",
              "f950e": "none"
            },
            "searchTerm": "",
            "selectedRows": [],
            "_disabledVirtualization": false,
            "_expandedRowDataIndexes": [],
            "_showColumnBorders": false,
            "_columnStatusIndicatorOptions": {
              "f7ed5": {},
              "6462c": {},
              "92a5e": {},
              "eb34b": {},
              "f950e": {}
            },
            "overflowActionsOverlayMaxHeight": null,
            "_columnSize": {
              "f7ed5": 100,
              "6462c": 100,
              "92a5e": 100,
              "eb34b": 100,
              "f950e": 100
            },
            "_serverPaginationType": "limitOffsetBased",
            "_columnSortMode": {
              "f7ed5": "default",
              "6462c": "default",
              "92a5e": "default",
              "eb34b": "default",
              "f950e": "default"
            },
            "_selectSingleRowsOnActionClick": "replace",
            "_showFooter": true,
            "_groupedColumnConfig": {},
            "_dynamicColumnSize": {},
            "_alwaysShowScrollbars": false,
            "_virtualizeStartIndex": 0,
            "_toolbarButtonHidden": {
              "1a": "",
              "3c": "",
              "4d": ""
            },
            "_defaultFilters": {},
            "events": [
              {
                "method": "trigger",
                "params": {},
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "selectRow",
                "type": "datasource",
                "id": "7143129e",
                "waitMs": "0"
              },
              {
                "id": "be7ab122",
                "type": "widget",
                "waitMs": "0",
                "waitType": "debounce",
                "event": "clickToolbar",
                "method": "exportData",
                "pluginId": "tbl_workflow_templates",
                "targetId": "3c"
              },
              {
                "id": "68f733d8",
                "type": "widget",
                "waitMs": "0",
                "waitType": "debounce",
                "event": "clickToolbar",
                "method": "refresh",
                "pluginId": "tbl_workflow_templates",
                "targetId": "4d"
              }
            ],
            "_columnEditable": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "newRows": [],
            "_rowBackgroundColor": [],
            "emptyMessage": "No rows found",
            "pagination": null,
            "selectedDataIndexes": [],
            "_columnEditableInNewRows": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnGroupAggregationMode": {
              "f7ed5": "none",
              "6462c": "none",
              "92a5e": "none",
              "eb34b": "none",
              "f950e": "none"
            },
            "sortArray": [],
            "_selectedCell": null,
            "overflowType": "scroll",
            "selectedCell": null,
            "_defaultSelectedRow": {
              "mode": "index",
              "indexType": "display",
              "index": 0
            },
            "_hasNextPage": false,
            "_includeRowInChangesetArray": false,
            "_columnPosition": {
              "f7ed5": "center",
              "6462c": "center",
              "92a5e": "center",
              "eb34b": "center",
              "f950e": "center"
            },
            "_enableSaveActions": true,
            "_columnPlaceholder": {
              "f7ed5": "Enter value",
              "6462c": "Enter value",
              "92a5e": "Enter value",
              "eb34b": "Select options",
              "f950e": "Select option"
            },
            "_defaultFilterOperator": "and",
            "_actionLabel": {},
            "_virtualizeEndIndex": 0,
            "selectedRow": null,
            "_actionHidden": {},
            "maintainSpaceWhenHidden": false,
            "_columnHidden": {
              "f7ed5": "",
              "6462c": "",
              "92a5e": "",
              "eb34b": "",
              "f950e": ""
            },
            "_columnLabel": {
              "f7ed5": "ID",
              "6462c": "Name",
              "92a5e": "Description",
              "eb34b": "Resources",
              "f950e": "Category"
            },
            "_showToolbar": true
          },
          "style": {},
          "position2": {
            "type": "grid",
            "container": "",
            "rowGroup": "body",
            "subcontainer": "",
            "row": 7.599999999999999,
            "col": 1,
            "height": 13.2,
            "width": 7,
            "tabNum": 0,
            "stackPosition": null
          },
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:40:57.486Z",
          "updatedAt": "2026-09-20T13:27:23.344Z",
          "folder": "",
          "presetName": null,
          "screen": "Main",
          "boxId": null,
          "subBoxIds": null
        },
        "btn_load_workflow_templates": {
          "id": "btn_load_workflow_templates",
          "uuid": "c3a44de3-c4bd-4b4c-b304-36678488092f",
          "_comment": null,
          "type": "widget",
          "subtype": "ButtonWidget2",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "heightType": "fixed",
            "horizontalAlign": "stretch",
            "clickable": false,
            "iconAfter": "",
            "submitTargetId": null,
            "hidden": false,
            "ariaLabel": "",
            "text": "Load Workflow Templates",
            "margin": "4px 8px",
            "showInEditor": false,
            "tooltipText": "",
            "allowWrap": true,
            "styleVariant": "solid",
            "submit": false,
            "iconBefore": "",
            "events": [
              {
                "method": "reset",
                "params": {},
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": "7183814b",
                "waitMs": "0"
              },
              {
                "method": "trigger",
                "params": {},
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": "83354339",
                "waitMs": "0"
              }
            ],
            "loading": "{{ QUERY_WORKFLOW_TEMPLATES.isFetching ? true : false }}",
            "loaderPosition": "auto",
            "disabled": false,
            "maintainSpaceWhenHidden": false
          },
          "style": {},
          "position2": {
            "type": "grid",
            "container": "",
            "rowGroup": "body",
            "subcontainer": "",
            "row": 6.3999999999999995,
            "col": 1,
            "height": 1,
            "width": 3,
            "tabNum": 0,
            "stackPosition": null
          },
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:41:11.989Z",
          "updatedAt": "2026-09-20T13:27:46.576Z",
          "folder": "",
          "presetName": null,
          "screen": "Main",
          "boxId": null,
          "subBoxIds": null
        },
        "var_mainPage": {
          "id": "var_mainPage",
          "uuid": null,
          "_comment": null,
          "type": "state",
          "subtype": "State",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "value": "{\n  \"isPageLoaded\": false,\n  \"isWorkflowTemplateLoaded\": false\n}"
          },
          "style": null,
          "position2": null,
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T12:48:41.305Z",
          "updatedAt": "2026-09-20T12:58:10.747Z",
          "folder": "",
          "presetName": null,
          "screen": null,
          "boxId": null,
          "subBoxIds": null
        },
        "btn_load_workflow_templates2": {
          "id": "btn_load_workflow_templates2",
          "uuid": "7433fc2c-63cd-4e89-9822-cf8eaf628f7e",
          "_comment": null,
          "type": "widget",
          "subtype": "ButtonWidget2",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "heightType": "fixed",
            "horizontalAlign": "stretch",
            "clickable": false,
            "iconAfter": "",
            "submitTargetId": null,
            "hidden": false,
            "ariaLabel": "",
            "text": "Reset",
            "margin": "4px 8px",
            "showInEditor": false,
            "tooltipText": "",
            "allowWrap": true,
            "styleVariant": "solid",
            "submit": false,
            "iconBefore": "",
            "events": [
              {
                "method": "trigger",
                "params": {
                  "options": {
                    "onSuccess": null,
                    "onFailure": null,
                    "additionalScope": null
                  }
                },
                "targetId": null,
                "pluginId": "QUERY_WORKFLOW_TEMPLATES",
                "waitType": "debounce",
                "event": "click",
                "type": "datasource",
                "id": "7183814b",
                "waitMs": "0"
              }
            ],
            "loading": false,
            "loaderPosition": "auto",
            "disabled": false,
            "maintainSpaceWhenHidden": false
          },
          "style": {},
          "position2": {
            "type": "grid",
            "container": "",
            "rowGroup": "body",
            "subcontainer": "",
            "row": 6.4,
            "col": 5,
            "height": 1,
            "width": 2,
            "tabNum": 0,
            "stackPosition": null
          },
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T13:04:25.066Z",
          "updatedAt": "2026-09-20T13:04:38.915Z",
          "folder": "",
          "presetName": null,
          "screen": "Main",
          "boxId": null,
          "subBoxIds": null
        },
        "QUERY_WORKFLOW_FROM_API": {
          "id": "QUERY_WORKFLOW_FROM_API",
          "uuid": null,
          "_comment": null,
          "type": "datasource",
          "subtype": "RESTQuery",
          "namespace": null,
          "resourceName": "REST-WithoutResource",
          "resourceDisplayName": null,
          "template": {
            "queryRefreshTime": "",
            "paginationLimit": "",
            "allowedGroupIds": [],
            "openAPIRequestBody": "",
            "streamResponse": false,
            "body": "",
            "lastReceivedFromResourceAt": null,
            "isFunction": false,
            "functionParameters": null,
            "queryDisabledMessage": "",
            "servedFromCache": false,
            "openAPIResolvedSpec": "",
            "offlineUserQueryInputs": "",
            "functionDescription": null,
            "successMessage": "",
            "queryDisabled": "",
            "playgroundQuerySaveId": "latest",
            "workflowParams": null,
            "resourceNameOverride": "",
            "runWhenModelUpdates": true,
            "paginationPaginationField": "",
            "workflowRunExecutionType": "sync",
            "headers": "[{\"key\":\"X-Workflow-Api-Key\",\"value\":\"retool_wk_6b14e4268ad34789aebffbd69a2ba896\"}]",
            "showFailureToaster": true,
            "paginationEnabled": false,
            "query": "https://peterjaberau.retool.com/url/run-workflow",
            "playgroundQueryUuid": "",
            "playgroundQueryId": null,
            "error": null,
            "workflowRunBodyType": "raw",
            "privateParams": [],
            "queryRunOnSelectorUpdate": false,
            "runWhenPageLoadsDelay": "",
            "data": null,
            "importedQueryInputs": {},
            "isImported": false,
            "showSuccessToaster": true,
            "cacheKeyTtl": "",
            "requestSentTimestamp": null,
            "cookies": "",
            "metadata": null,
            "queryRunTime": null,
            "changesetObject": "",
            "offlineOptimisticResponse": null,
            "errorTransformer": "return data.error",
            "finished": null,
            "confirmationMessage": null,
            "isFetching": false,
            "changeset": "",
            "openAPIOperationId": "",
            "rawData": null,
            "queryTriggerDelay": "0",
            "resourceTypeOverride": "",
            "watchedParams": [],
            "enableErrorTransformer": false,
            "showLatestVersionUpdatedWarning": false,
            "paginationDataField": "",
            "timestamp": 0,
            "openAPIParams": "{}",
            "importedQueryDefaults": {},
            "enableTransformer": false,
            "showUpdateSetValueDynamicallyToggle": true,
            "version": 2,
            "overrideOrgCacheForUserCache": false,
            "runWhenPageLoads": false,
            "transformer": "return data",
            "events": [],
            "queryTimeout": "10000",
            "workflowId": null,
            "requireConfirmation": false,
            "type": "GET",
            "queryFailureConditions": "",
            "changesetIsObject": false,
            "enableCaching": false,
            "allowedGroups": [],
            "bodyType": "none",
            "offlineQueryType": "None",
            "queryThrottleTime": "750",
            "updateSetValueDynamically": false,
            "notificationDuration": ""
          },
          "style": null,
          "position2": null,
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-20T15:39:29.962Z",
          "updatedAt": "2026-09-20T15:41:27.816Z",
          "folder": "",
          "presetName": null,
          "screen": null,
          "boxId": null,
          "subBoxIds": null
        },
        "select1": {
          "id": "select1",
          "uuid": "89d7956a-bd37-4be4-bcad-492339175614",
          "_comment": null,
          "type": "widget",
          "subtype": "SelectWidget2",
          "namespace": null,
          "resourceName": null,
          "resourceDisplayName": null,
          "template": {
            "imageByIndex": [],
            "_disabledByIndex": [
              "",
              "",
              ""
            ],
            "showSelectionIndicator": true,
            "_values": [
              "Option 1",
              "Option 2",
              "Option 3"
            ],
            "iconByIndex": [],
            "values": [],
            "readOnly": false,
            "clearInputValueOnChange": false,
            "iconAfter": "",
            "_iconByIndex": [
              "",
              "",
              ""
            ],
            "overlayMinWidth": null,
            "allowDeselect": false,
            "inputValue": "",
            "hidden": false,
            "customValidation": "",
            "data": [],
            "searchMode": "fuzzy",
            "hideValidationMessage": false,
            "fallbackTextByIndex": [],
            "textBefore": "",
            "_fallbackTextByIndex": [
              "",
              "",
              ""
            ],
            "selectedItem": null,
            "validationMessage": "",
            "margin": "4px 8px",
            "automaticItemColors": false,
            "itemAdornmentShape": "circle",
            "textAfter": "",
            "showInEditor": false,
            "showClear": false,
            "tooltipText": "",
            "labelAlign": "left",
            "formDataKey": "{{ self.id }}",
            "value": null,
            "hiddenByIndex": [],
            "labelCaption": "",
            "labelWidth": "33",
            "deprecatedLabels": [],
            "_hiddenByIndex": [
              "",
              "",
              ""
            ],
            "placeholder": "Select an option",
            "_captionByIndex": [
              "",
              "",
              ""
            ],
            "itemAdornmentSize": "auto",
            "label": "Label",
            "_hasMigratedNestedItems": true,
            "captionByIndex": [],
            "_validate": false,
            "itemMode": "static",
            "labelWidthUnit": "%",
            "allowCustomValue": false,
            "invalid": false,
            "selectedIndex": null,
            "_tooltipByIndex": [
              "",
              "",
              ""
            ],
            "_colorByIndex": [
              "",
              "",
              ""
            ],
            "tooltipByIndex": [],
            "iconBefore": "",
            "colorByIndex": [],
            "selectedLabel": "",
            "events": {},
            "_ids": [
              "00030",
              "00031",
              "00032"
            ],
            "emptyMessage": "No options",
            "overlayMaxHeight": 375,
            "loading": false,
            "disabled": false,
            "labelPosition": "top",
            "_labels": [
              "",
              "",
              ""
            ],
            "labelWrap": false,
            "disabledValues": [],
            "disabledByIndex": [],
            "maintainSpaceWhenHidden": false,
            "_imageByIndex": [
              "",
              "",
              ""
            ],
            "required": false,
            "labels": []
          },
          "style": {},
          "position2": {
            "type": "grid",
            "container": "",
            "rowGroup": "body",
            "subcontainer": "",
            "row": 2.8,
            "col": 7,
            "height": 0.2,
            "width": 4,
            "tabNum": 0,
            "stackPosition": null
          },
          "mobilePosition2": null,
          "mobileAppPosition": null,
          "tabIndex": null,
          "container": "",
          "createdAt": "2026-09-27T03:34:11.845Z",
          "updatedAt": "2026-09-27T03:34:11.845Z",
          "folder": "",
          "presetName": null,
          "screen": "Main",
          "boxId": null,
          "subBoxIds": null
        }
      },
      "preloadedAppJavaScript": null,
      "preloadedAppJSLinks": [],
      "pubAppDecoupledQueriesDisabled": true,
      "queryStatusVisibility": false,
      "responsiveLayoutDisabled": false,
      "rootScreen": "Main",
      "savePlatform": "web",
      "shortlink": null,
      "testEntities": [],
      "tests": [],
      "urlFragmentDefinitions": [],
      "version": "4.65.0",
      "serializedLayout": null,
      "agentEvals": {}
    },
    "widgetEditorComponents": {
      "fileInput": {
        "compare": null,
        "displayName": "Connect(kn)"
      },
      "checkbox": {
        "compare": null,
        "displayName": "Connect(Mn)"
      }
    },
    datasourcePlugins: [
      "QUERY_WORKFLOW_TEMPLATES",
      "QUERY_WORKFLOW_FROM_API"
    ],

  },

}