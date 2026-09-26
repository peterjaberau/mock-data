The important clarification: these are mostly sibling XState actors, not a strict nested parent/child machine tree. The “parent” relationship is usually lifecycle ownership or UI feature ownership.


```text
App / Router
├─ socket
│  └─ event hub for nearly every room-aware machine
│
├─ global app actors
│  ├─ auth
│  ├─ errorHandler
│  ├─ theme
│  ├─ reducedMotion
│  ├─ soundEffectsPreference
│  ├─ notifications
│  ├─ sharedTicker
│  ├─ roomLayout
│  ├─ modals
│  │  └─ gameStateNav       ← activated only while Game State modal is open
│  │     └─ adminListenerState
│  └─ queue                 ← persistent queue/toast coordination
│
├─ lobby / room-entry features
│  ├─ lobby
│  ├─ allRoomsFetch
│  ├─ createdRoomsFetch
│  ├─ createRoomForm
│  ├─ roomSetup
│  └─ roomFetch
│
└─ roomLifecycle coordinator
   ├─ room core
   │  ├─ roomFetch
   │  ├─ settings
   │  ├─ users
   │  ├─ admin
   │  ├─ dj
   │  ├─ quickAccessPanels
   │  └─ effectiveMetadataSources
   │
   ├─ playback and queue
   │  ├─ audio
   │  ├─ playlist
   │  ├─ queueList
   │  ├─ radioStream
   │  ├─ liveTransport
   │  ├─ trackPreview
   │  ├─ mediaBridge
   │  ├─ poll
   │  └─ pollCardDisplay
   │
   ├─ discovery and library
   │  ├─ addToQueueUi
   │  │  ├─ track-search
   │  │  ├─ catalog-browse
   │  │  │  └─ mediaItemTracks
   │  │  ├─ search
   │  │  └─ addToLibrary
   │  ├─ saved-tracks
   │  ├─ save-playlist
   │  ├─ metadataPreference
   │  └─ metadata-source-auth
   │
   ├─ social
   │  ├─ chat
   │  │  ├─ typing
   │  │  ├─ chatScrollTarget
   │  │  └─ scrollFollow
   │  ├─ allReactions
   │  ├─ feedback
   │  │  └─ feedback-response-form
   │  ├─ whatsNew
   │  └─ giftInbox
   │
   ├─ game state and economy
   │  ├─ gameSession
   │  ├─ userGameState
   │  ├─ roomGameState
   │  ├─ gameStateNewPluginTabs
   │  ├─ inventoryPeek
   │  ├─ trade
   │  ├─ coinGainFeedback
   │  └─ shopQtyAnimation
   │
   ├─ effects and preferences
   │  ├─ soundEffects
   │  └─ screenEffects
   │
   └─ pluginComponentRegistry
      └─ pluginComponent × plugin name × room
         ├─ timer
         ├─ slider
         ├─ toggleableCollection
         └─ configImport
```


**Scope types:**
- `singleton actor`: one app-wide instance, such as socket, auth, chat, playlist, and modals.
- `room-scoped singleton`: activated by roomLifecycle on entering a room and reset on exit.
- `modal-scoped actor`: gameStateNav, activated by the Game State modal rather than room entry.
- `component-local machine`: a new instance per rendered component, such as track-search, catalog-browse, feedback-response-form, slider, and timer.
- `dynamic registry actor`: pluginComponent; one is created per plugin per room.

**- The actual control path is:**
```text
Server → socket → subscribed sibling actors → React components
Room route → roomLifecycle → ACTIVATE/DEACTIVATE room actors
Modals → gameStateNav → adminListenerState when relevant
Plugin registry → one pluginComponent actor per active plugin
```