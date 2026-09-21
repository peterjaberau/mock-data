(self.webpackChunkfrontend = self.webpackChunkfrontend || [])
    .push([
        [94934], {
            655324: (e, t, n) => {
                "use strict";
                n.d(t, {
                    V: () => l
                });
                var r = n(793399),
                    o = n(213319),
                    a = n(536289);
                const s = ({
                               initialWidth: e,
                               initialHeight: t
                           }) => ({
                        width: e,
                        height: t
                    }),
                    i = ({
                             initialWidth: e,
                             windowWidth: t
                         }) => ({
                        x: (t - e) / 2,
                        y: 100
                    }),
                    l = ({
                             defaultPosition: e,
                             defaultSize: t,
                             initialHeight: n,
                             initialWidth: l,
                             localStorageName: c
                         }) => {
                        const [d] = (0, a.Z)(), u = {
                            position: e ?? i({
                                initialHeight: n,
                                initialWidth: l,
                                windowWidth: d
                            }),
                            size: t ?? s({
                                initialHeight: n,
                                initialWidth: l,
                                windowWidth: d
                            })
                        }, [p, m] = (0, o.Z)(c, u), g = p ?? u, h = (0, r.Z)(((e, t) => {
                            m({
                                position: e,
                                size: t
                            })
                        }));
                        return {
                            handleDragStop: (0, r.Z)((e => {
                                m({
                                    size: g.size,
                                    position: e
                                })
                            })),
                            handleResize: h,
                            position: g.position,
                            size: g.size,
                            windowWidth: d
                        }
                    }
            },
            359848: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => m
                });
                var r = n(827378),
                    o = n(521883),
                    a = n(377606),
                    s = n(725777),
                    i = n(391709),
                    l = n(793399),
                    c = n(148634);
                var d = n(300311);
                const u = n(704133)
                        .Z,
                    p = e => void 0 !== e.extension,
                    m = ({
                             makeExtensions: e,
                             editorType: t
                         }) => (0, r.forwardRef)((function ({
                                                                value: n,
                                                                onUpdate: m,
                                                                callbacks: g,
                                                                onEditorViewInit: h,
                                                                recordTimingMetric: f,
                                                                startTimingMetric: v,
                                                                constants: y,
                                                                onDestroy: b
                                                            }, E) {
                        const [w, T] = (0, r.useState)({}), x = (0, r.useRef)(n);
                        (0, r.useImperativeHandle)(E, (() => ({
                            viewRef: S,
                            renderReactFunctions: {
                                onRenderReact: P,
                                onDestroyReact: A
                            }
                        })));
                        const k = (0, r.useRef)(null),
                            S = (0, r.useRef)(null),
                            C = Object.entries(g)
                                .reduce(((e, [t, n]) => n ? (e[t] = (0, l.Z)(n), e) : e), {}),
                            P = (0, l.Z)((e => {
                                T((t => ({
                                    ...t,
                                    [e.id]: e
                                })))
                            })),
                            A = (0, l.Z)((e => {
                                T((t => {
                                    const {
                                        [e]: n, ...r
                                    } = t;
                                    return r
                                }))
                            })),
                            N = (0, l.Z)((async e => {
                                try {
                                    const t = e.state.doc.toString();
                                    n !== t && (x.current = t), await (m?.(t, e))
                                }
                                catch (e) {
                                    i.$e((n => {
                                        n.setTags({
                                            editorType: t,
                                            source: "handleUpdate"
                                        }), i.Tb(e, {
                                            level: "error"
                                        })
                                    }))
                                }
                            })),
                            R = (0, l.Z)((e => {
                                S.current?.update([e]);
                                const t = e.annotation(a.YW.userEvent);
                                if (t) {
                                    const n = e.changes.newLength,
                                        r = n - e.changes.length;
                                    f?.(c.jA.ContentsChanged, {
                                        trigger_type: t,
                                        document_length_bucket: (0, d.t)(n),
                                        document_change_length_bucket: (0, d.t)(r)
                                    })
                                }
                            }));
                        return (0, r.useEffect)((() => {
                            const t = k.current;
                            if (null == t) throw new Error("Parent element is null");
                            const r = [...e({
                                callbacks: C,
                                constants: y,
                                renderReactFunctions: {
                                    onRenderReact: P,
                                    onDestroyReact: A
                                },
                                editorViewRef: S
                            })
                                .filter((e => !p(e) || !e.disabled))
                                .map((e => p(e) ? e.extension : e)), s.tk.updateListener.of(N)
                            ];
                            v && r.push((e => s.tk.domEventHandlers({
                                keydown: () => (e(c.jA.ContentsChanged), !1),
                                paste: () => (e(c.jA.ContentsChanged), !1),
                                pointerdown: () => (e(c.jA.ContentsChanged), !1)
                            }))(v));
                            const o = new s.tk({
                                doc: n ?? "",
                                extensions: r,
                                parent: t,
                                dispatch: R
                            });
                            return f?.(c.jA.InitialLoad, {
                                document_length_bucket: (0, d.t)(n?.length ?? 0)
                            }), S.current = o, h && h(o, r), () => {
                                o.destroy(), S.current = null, b?.()
                            }
                        }), []), (0, r.useEffect)((() => {
                            if (n === x.current) return void(x.current = null);
                            if (!S.current || x.current) return;
                            const e = S.current?.state.doc;
                            if (e.toString() !== n) {
                                const t = S.current.state.update({
                                    changes: {
                                        from: 0,
                                        to: e?.length,
                                        insert: n
                                    }
                                });
                                S.current.update([t])
                            }
                        }), [n]), r.createElement(r.Fragment, null, Object.values(w)
                            .map((({
                                       element: e,
                                       parent: t
                                   }) => (0, o.createPortal)(e, t))), r.createElement("div", {
                            ref: k,
                            "data-testid": "CodeEditor::Container",
                            className: u.main
                        }))
                    }))
            },
            830797: (e, t, n) => {
                "use strict";
                n.d(t, {
                    k1: () => o,
                    yS: () => a,
                    SW: () => s,
                    rI: () => i,
                    rU: () => l,
                    IA: () => c
                });
                var r = n(827378);
                const o = () => (0, r.useContext)(l)
                        ?.popOut?.poppedOut,
                    a = () => {
                        const e = (0, r.useContext)(l);
                        return {
                            key: "Mod-\\",
                            run: () => (e?.popOut.togglePoppedOut(), !0)
                        }
                    },
                    s = () => (0, r.useContext)(l)
                        ?.popOut?.poppedOut ? {
                        disabledHoverBorderHighlight: !0,
                        disabledBorder: !0,
                        maxHeight: null,
                        minHeight: null
                    } : {},
                    i = () => (0, r.useContext)(l)
                        ?.popOut?.poppedOut ? {} : {
                        disableActiveLineGutter: !0,
                        disableActiveLineHighlight: !0
                    },
                    l = (0, r.createContext)(null),
                    c = ({
                             children: e
                         }) => {
                        const [t, n] = (0, r.useState)(!1), [o, a] = (0, r.useState)(void 0), [s, i] = (0, r.useState)(void 0), [c, d] = (0, r.useState)(null);
                        return r.createElement(l.Provider, {
                            value: {
                                viewRef: o,
                                setViewRef: a,
                                worker: s,
                                setWorker: i,
                                editorId: c,
                                setEditorId: d,
                                popOut: {
                                    poppedOut: t,
                                    setPoppedOut: n,
                                    togglePoppedOut: () => n((e => !e))
                                }
                            }
                        }, e)
                    }
            },
            118538: (e, t, n) => {
                "use strict";
                n.d(t, {
                    w: () => q,
                    Z: () => X
                });
                var r = n(827378),
                    o = n(399747),
                    a = n(793399),
                    s = n(943879),
                    i = n(628532),
                    l = n(118542),
                    c = n(867976),
                    d = n(810759),
                    u = n(895452);
                const p = () => {
                        const {
                            gptResourceMode: e,
                            isSubmitting: t,
                            hasResponse: n
                        } = (0, d.Z)(u.z);
                        return "explain" === e ? r.createElement(s.Z, {
                            promptText: "Select code to explain...",
                            explanation: n ? "Comments added to explain code" : t ? "AI is explaining..." : void 0
                        }) : r.createElement(s.Z, {
                            placeholderText: "Write a function to..."
                        })
                    },
                    m = () => {
                        const {
                            setGPTResourceMode: e,
                            onToggleAssistant: t,
                            isAssistantVisible: n,
                            onSubmitPrompt: s
                        } = (0, d.Z)(u.z), m = (0, a.Z)((r => {
                            "EXPLAIN" === r && (n || t(), e("explain"), s())
                        }));
                        return r.createElement(r.Fragment, null, r.createElement(o.Shortcuts, {
                            alwaysFireHandler: !0,
                            global: !0,
                            handler: m,
                            isolate: !0,
                            name: "GPT_QUERY_ASSISTANT",
                            targetNodeSelector: "body"
                        }), r.createElement(i.C, {
                            enableBackdropScrolling: !0,
                            gptResponse: r.createElement(c.n, null),
                            queryAssistant: r.createElement(p, null),
                            queryAssistantToggle: r.createElement(l.Z, null)
                        }))
                    };
                var g = n(477319),
                    h = n(830797),
                    f = n(725777),
                    v = n(375335);
                const y = "gpt-3.5-turbo",
                    b = async ({
                                   systemPromptText: e,
                                   promptText: t,
                                   streamingHandler: n,
                                   abortSignal: r
                               }) => {
                        await (0, v.n)({
                            url: "/api/gpt/queryGPT?origin=frontend",
                            method: "POST",
                            body: {
                                maxTokens: 1024,
                                model: y,
                                originService: "gpt_modal",
                                messages: [{
                                    role: "system",
                                    content: e
                                }, {
                                    role: "user",
                                    content: t
                                }],
                                stream: !0
                            },
                            streamingHandler: n,
                            abortSignal: r
                        })
                    };
                var E = n(573645);
                var w = n(540861),
                    T = n.n(w);
                const x = e => {
                        const t = {};
                        for (const n of e)
                            for (const [e, r] of Object.entries(n)) {
                                const n = k(r);
                                t[e] ??= new Set, n.startsWith("(object") && Array.from(t[e])
                                    .find((e => e.startsWith("(object"))) || t[e].add(n)
                            }
                        const n = [];
                        for (const [e, r] of Object.entries(t)) n.push(`${e} ${Array.from(r).join(" | ")}`);
                        return n.length > 0 ? `(object with properties ${n.join(",")})` : "empty object"
                    },
                    k = e => {
                        if (Array.isArray(e)) {
                            const [t] = e;
                            return `(array of ${T()(t)?x(e):k(t)})`
                        }
                        return T()(e) ? x([e]) : "" + typeof e
                    },
                    S = e => e.map((({
                                         key: e,
                                         value: t
                                     }) => `${e} ${k(t)}`))
                        .join("\n");

                function C({
                               userPrompt: e,
                               aiAssistantType: t,
                               scopeItems: n
                           }) {
                    const r = "transformer" === t,
                        o = "data" === n?.[0]?.key,
                        a = o && function (e) {
                            if ("data" === e?.[0]?.key && T()(e[0]?.value)) {
                                const t = e[0]?.value,
                                    n = Object.values(t),
                                    r = n.length > 0 && n.every((e => Array.isArray(e))),
                                    o = n[0].length;
                                return r && n.every((e => e.length === o))
                            }
                            return !1
                        }(n),
                        s = [];
                    return r ? (a ? s.push("Transform data first into an array using formatDataAsArray(data)") : o && s.push('Transform the variable "data"'), s.push(e), a && s.push("The function must return either an object of arrays or an array of objects"), s.push("The code must return the result of calling the function at the end")) : s.push(`${e} and return the result of calling the function at the end`), `Write a Javascript function that can do the following:\n\n  ###\n  ${s.join(". ")}\n  ###\n  \n  If these instructions are unclear or ambiguous, DO NOT RETURN A FUNCTION. Please return ONLY "${M}", like so: \n  ###\n  ${M}\n  ###`
                }
                const P = 3;

                function A({
                               appModelData: e,
                               aiAssistantType: t
                           }) {
                    const {
                        arrays: n,
                        withData: r,
                        withValue: o,
                        scalars: a
                    } = function (e) {
                        const t = Object.keys(e),
                            n = {
                                arrays: [],
                                withData: [],
                                withValue: [],
                                scalars: []
                            };
                        for (const r of t) {
                            const t = e[r].attributes;
                            if (void 0 === t) continue;
                            const o = Object.keys(t);
                            for (const e of o) {
                                const o = `${r}${e.includes(" ")||e[0].match(/^[0-9]/)?`[${e}]`:`.${e}`}`;
                                Array.isArray(t[e]) ? n.arrays.push(o) : "data" === e ? n.withData.push(o) : "value" === e ? n.withValue.push(o) : n.scalars.push(o)
                            }
                        }
                        return n
                    }(e), s = e => "transformer" === t ? `{{ ${e} }}` : e, i = [];
                    a.length >= 1 && i.push(`const sentence = \`The result is \${ ${s(a[0])} }\``), a.length >= 2 && i.push(`const foo = ${s(a[1])}`), a.length >= 3 && (i.push(`someFunction(${s(a[2])})`), i.push(`const z = [${s(a[0])}, ${s(a[1])}, ${s(a[2])} ].map(_ => doSomething(_))`));
                    const l = [];
                    n.length >= 1 && l.push(`${s(n[0])}.map((_) => doSomething(_))`);
                    const c = "transformer" !== t ? r.slice(0, P)
                            .map(s)
                            .join(",") : "",
                        d = o.slice(0, P)
                            .map(s)
                            .join(",");
                    return `Here are some examples of using plugins${"transformer"===t?", which must be wrapped in double curly braces {{ }}":""}:\n${i.join("\n")}\n${l.join("\n")}\n${c?`You can get data from some plugins with the .data property, e.g. ${c}`:""}\n${d?`You can get values from some plugins with the .value property, e.g. ${d}`:""}`
                }
                const N = ({
                               aiAssistantType: e,
                               pluginId: t,
                               pluginAttributes: n,
                               skipAttrTypes: r,
                               skipAllProperties: o
                           }) => {
                    const a = "transformer" === e ? `{{ ${t} }}` : t,
                        s = n?.pluginType ? `of type ${n?.pluginType}` : "",
                        i = Object.keys(n)
                            .filter((e => "pluginType" !== e)),
                        l = i.length > 0 ? `with properties: ${i.map((e=>`${e} ${r?"":`(${k(n[e])})`}`)).join(",")}` : void 0;
                    return `${a} ${s} ${o||!l?"":l}`
                };
                const R = (e, t) => t ? `Anything of the type ${e} has attributes: id (type: string) which returns the name of the object, pluginType (type: string), and functions: ${t.map((e=>`${e}`))}.\n` : "";
                const I = "These objects are in scope",
                    Z = "Focus on transforming the value of this object, which is in scope";
                const M = "GENERATION_ERROR",
                    D = /.*(GENERATION_ERROR|sorry|Sorry).*/;

                function H({
                               userPrompt: e,
                               modelDataAndFunctions: t,
                               aiAssistantType: n,
                               scope: r
                           }, {
                               skipAttrTypes: o,
                               skipAllProperties: a,
                               deleteKeysFromIndex: s
                           } = {}) {
                    const {
                        appModelData: i,
                        pluginTypeToFunctions: l
                    } = t ?? {}, c = [];
                    if (c.push("These libraries are imported and in scope: lodash, moment, papaparse and numbro", "These methods are in scope: \nformatDataAsArray(object) // converts object to array for table data / queries etc.\nformatDataAsObject(array) // converts array to object for table data / queries etc.\nutils.confetti()\nutils.copyToClipboard(value: string)\nutils.downloadPage(filename)\nutils.serializePage() - for pdf\nutils.downloadFile(data, fileName, fileType)\nutils.exportData(data, fileName, fileType)\nutils.getDataByObjectURL()\nutils.getManagedAppConfig()\nutils.openApp(uuid)\nutils.openUrl(url)\nutils.showNotification(options: {title, description, notificationType: (info|success|warning|error), duration (seconds)})"), i) {
                        const e = {
                            ...i
                        };
                        if (void 0 !== s) {
                            const t = Object.keys(e);
                            for (let n = s; n < t.length; n++) delete e[t[n]]
                        }
                        c.push(function ({
                                             appModelData: e,
                                             aiAssistantType: t,
                                             skipAttrTypes: n,
                                             skipAllProperties: r
                                         }) {
                            return `These plugins are in scope:\n${Object.keys(e).map((o=>{const a=e[o]?.attributes??{};return N({aiAssistantType:t,pluginId:o,pluginAttributes:a,skipAttrTypes:n,skipAllProperties:r})})).join("\n")}`
                        }({
                            aiAssistantType: n,
                            appModelData: e,
                            skipAttrTypes: o,
                            skipAllProperties: a
                        })), c.push(A({
                            aiAssistantType: n,
                            appModelData: e
                        }))
                    }
                    l && c.push(function ({
                                              pluginTypeToFunctions: e
                                          }) {
                        return `For plugins listed above, those with types have these properties:\n${e?Object.keys(e).map((t=>{const n=e[t]?.functions;return R(t,n)})):[]}`
                    }({
                        pluginTypeToFunctions: l
                    })), r && c.push(function ({
                                                   scopeItems: e,
                                                   aiAssistantType: t
                                               }) {
                        const n = [`${"transformer"===t?Z:I}:`];
                        return n.push(S(e)), n.join("\n\n")
                    }({
                        scopeItems: r,
                        aiAssistantType: n
                    })), c.push(function (e) {
                        const t = "transformer" === e;
                        return `The output MUST be a function that is immediately called and returned like this: return functionName().\n  \n  For example:\n\n  ###\n  function myExampleFunction(${t?"data":""}) {\n    // example implementation\n    return 'Hello ' + ${t?"{{ current_user?.firstName }}":"current_user?.firstName"};\n  }\n\n  return myExampleFunction(${t?"data":""});\n  ###`
                    }(n));
                    return ["\nYou are a helpful assistant and a javascript expert.\nYour job is to write javascript functions and invoke them.\nI am a computer that runs javascript code.\n  \nTake into account the following context and constraints:", ...c.map(((e, t) => `${t+1}. ${e.trim()}`)), C({
                        userPrompt: e,
                        aiAssistantType: n,
                        scopeItems: r
                    })].join("\n\n")
                }
                const O = "OpenAI Prompt Error",
                    L = ({
                             worker: e,
                             editorId: t,
                             aiAssistantType: n,
                             scope: r,
                             getDataDependents: o
                         }) => async a => (e => {
                        let t, n = !1,
                            r = !1,
                            o = Object.keys(e.modelDataAndFunctions?.appModelData || {})
                                .length;
                        do {
                            if (t = H(e, {
                                skipAttrTypes: n,
                                skipAllProperties: r,
                                deleteKeysFromIndex: o
                            }), n)
                                if (r) {
                                    if (o = Math.floor(o / 2), 0 === o) break
                                }
                                else r = !0;
                            else n = !0
                        } while (t.length > 4e4);
                        return t
                    })({
                        userPrompt: a,
                        modelDataAndFunctions: await (e?.call({
                            method: "getModelScopeForOpenAi",
                            id: t || "",
                            excludePlugins: o?.() ?? []
                        })),
                        aiAssistantType: n,
                        scope: r
                    }), $ = e => {
                        e.dispatch({
                            effects: [E.$T.of(null), f.tk.scrollIntoView(e.state.selection.main.from)]
                        })
                    }, j = async ({
                                      view: e,
                                      prompt: t,
                                      setGeneratedCode: n,
                                      abortController: r,
                                      promptGenerator: o,
                                      setErrorMessage: a,
                                      sendAmplitudeEvent: s
                                  }) => {
                        a(null);
                        const {
                            state: i
                        } = e, l = i.selection.main.from || 0, c = i.doc.lineAt(l)
                            .from, d = [], u = e => `\n${(e=>{let t=!1;return!e.includes("```")&&(e.startsWith("function")||e.startsWith("let")||e.startsWith("const"))?e:e.split("\n").reduce(((e,n)=>(n.startsWith("```")?t=!t:t&&e.push(n),e)),[]).join("\n")})(e.join(""))}\n`;
                        e.dispatch({
                            selection: {
                                anchor: c
                            }
                        });
                        const p = e.state.doc.slice(c)
                            .toString()
                            .split("\n")
                            .length;
                        let m = !1;
                        p < 3 && (e.dispatch({
                            changes: [{
                                from: c,
                                to: c,
                                insert: "\n"
                            }]
                        }), m = !0);
                        try {
                            const a = await o(t);
                            if (await (async ({
                                                  prompt: e,
                                                  streamingHandler: t,
                                                  abortSignal: n
                                              }) => b({
                                systemPromptText: "You are a professional javascript developer. Your job is to generate javascript functions. You strive for accuracy over speed, and succint code over verbose code. When given a prompt, you only ever return code that can be run.",
                                promptText: e,
                                streamingHandler: t,
                                abortSignal: n
                            }))({
                                prompt: a,
                                streamingHandler: t => {
                                    if (t) {
                                        const r = (new TextDecoder)
                                            .decode(t);
                                        d.push(r);
                                        const o = u(d);
                                        n(o), (e => {
                                            if (e.match(D)) throw s("error", `${O}: ${e}`), new Error(O)
                                        })(d.join("")), e.dispatch({
                                            effects: [E.eY.of({
                                                from: c,
                                                newText: o
                                            }), ...m ? [f.tk.scrollIntoView(e.state.doc.length)] : []]
                                        })
                                    }
                                },
                                abortSignal: r.signal
                            }), 0 === d.join("")
                                .trim()
                                .length) throw s("error", `${O}: no response from open ai`), new Error(O);
                            e.dispatch({
                                effects: [E.eY.of({
                                    from: c,
                                    newText: u(d)
                                }), ...m ? [f.tk.scrollIntoView(e.state.doc.length)] : []]
                            })
                        }
                        catch (t) {
                            e.dispatch({
                                changes: [{
                                    from: e.state.doc.length - 2,
                                    to: e.state.doc.length,
                                    insert: ""
                                }]
                            }), n(""), a("Error generating code. Please try again with a different prompt."), $(e)
                        }
                    };
                var W = n(989812);
                const F = e => {
                        const {
                            startOfLine: t
                        } = (0, W.Mf)(e);
                        e.dispatch({
                            effects: [E.$T.of(null), W.x8],
                            selection: {
                                anchor: t
                            },
                            changes: [{
                                from: t,
                                to: t + 1,
                                insert: ""
                            }]
                        })
                    },
                    _ = async ({
                                   view: e,
                                   abortController: t,
                                   setGeneratedCode: n,
                                   aiAssistantType: r
                               }) => {
                        let {
                            startOfLine: o,
                            selectedText: a
                        } = (0, W.Mf)(e);
                        0 === a.length && (o = 0, a = e.state.doc.toString());
                        const s = ["/*\n"],
                            i = () => ({
                                from: o,
                                newText: `${s.join("")}\n\n`
                            });
                        e.dispatch({
                            effects: [W.P$, W.CW.of(void 0), E.eY.of(i())],
                            changes: [{
                                from: o,
                                to: o,
                                insert: "\n"
                            }],
                            selection: {
                                anchor: o
                            }
                        });
                        try {
                            await (async ({
                                              prompt: e,
                                              streamingHandler: t,
                                              abortSignal: n,
                                              aiAssistantType: r
                                          }) => {
                                const o = `\n      Please explain the code below in plain english for someone only vaguely familiar with javascript.\n      ${"transformer"===r?"\nSome expressions may be wrapped in double curly braces, which is acceptable and gives access to plugins, components and queries not in the scope of the code but present elsewhere in the app. These expressions are compiled into correct Javascript before the code is executed.\n\n":""}\n      \`\`\`\n      {}\n      \`\`\`\n      `.replace("{}", e);
                                return b({
                                    systemPromptText: "You are a helpful javascript assistant. Your job is to answer javascript questions correctly as succinctly as possible",
                                    promptText: o,
                                    streamingHandler: t,
                                    abortSignal: n
                                })
                            })({
                                prompt: a,
                                streamingHandler: t => {
                                    t && (s.push((new TextDecoder)
                                        .decode(t)), e.dispatch({
                                        effects: [E.eY.of(i())]
                                    }))
                                },
                                abortSignal: t.signal,
                                aiAssistantType: r
                            }), e.dispatch({
                                effects: [E.eY.of({
                                    from: o,
                                    newText: `${s.join("")}\n*/\n`
                                })]
                            }), n(s.join(""))
                        }
                        catch {
                            F(e)
                        }
                    };
                var B = n(224617),
                    G = n(734051);
                const z = e => e.appModel.dependencyGraph,
                    V = ({
                             aiAssistantType: e,
                             sendAmplitudeEvent: t,
                             gptResourceMode: n,
                             scope: o
                         }) => {
                        const [s, i] = (0, r.useState)(null), [l, c] = (0, r.useState)(null), u = (0, r.useRef)(new AbortController), {
                            viewRef: p,
                            worker: m,
                            editorId: g
                        } = (0, d.Z)(h.rU), v = (e => {
                            const t = (0, B.v9)(z);
                            return (0, a.Z)((() => {
                                const n = e.map((e => t?.getDependentsOf([e, "data"]) ?? (0, G.Set)())),
                                    r = G.Set.union(n)
                                        .map((e => e.selector[0]));
                                return Array.from(r)
                            }))
                        })(o?.map((e => e.plugin))
                            .filter((e => !!e)) ?? []), y = r.useMemo((() => L({
                            aiAssistantType: e,
                            worker: m,
                            editorId: g ?? "",
                            scope: o,
                            getDataDependents: v
                        })), [e, m, g, o, v]), b = (0, a.Z)((async e => {
                            if (!p?.current) return null;
                            await j({
                                view: p.current,
                                prompt: e,
                                setGeneratedCode: i,
                                abortController: u.current,
                                promptGenerator: y,
                                setErrorMessage: c,
                                sendAmplitudeEvent: t
                            }), t("submit")
                        })), w = (0, a.Z)((() => {
                            if (!p?.current) return null;
                            ((e, t) => {
                                const n = e.state.selection.main.from || 0;
                                e.dispatch({
                                    effects: [E.$T.of(null)]
                                }), e.dispatch({
                                    selection: {
                                        anchor: n
                                    }
                                }), e.dispatch({
                                    changes: [{
                                        from: n,
                                        to: n,
                                        insert: t
                                    }]
                                }), e.dispatch({
                                    selection: {
                                        anchor: n + t.length
                                    },
                                    effects: [f.tk.scrollIntoView(n + t.length)]
                                })
                            })(p.current, s ?? ""), t("accept")
                        })), T = (0, a.Z)((e => {
                            if (!p?.current) return null;
                            $(p.current), e?.skipAmplitudeEvent || t("discard")
                        })), x = (0, a.Z)((e => {
                            if (!p?.current) return null;
                            u.current.abort(), u.current = new AbortController, e?.skipAmplitudeEvent || t("abort")
                        })), k = (0, a.Z)((async () => {
                            if (!p?.current) return null;
                            await _({
                                view: p.current,
                                abortController: u.current,
                                aiAssistantType: e,
                                setGeneratedCode: i
                            }), t("submit")
                        })), S = (0, a.Z)((() => {
                            if (!p?.current) return null;
                            ((e, t) => {
                                const {
                                    startOfLine: n
                                } = (0, W.Mf)(e);
                                e.dispatch({
                                    effects: [E.$T.of(null), W.x8],
                                    selection: {
                                        anchor: n
                                    },
                                    changes: [{
                                        from: n,
                                        to: n + 1,
                                        insert: `${t}\n*/\n`
                                    }]
                                })
                            })(p.current, s ?? ""), t("accept")
                        })), C = (0, a.Z)((() => {
                            if (!p?.current) return null;
                            F(p.current), t("discard")
                        })), {
                            onBegin: P,
                            onAccept: A,
                            onReject: N,
                            onAbort: R
                        } = (0, r.useMemo)((() => {
                            switch (n) {
                                case "generate":
                                    return {
                                        onBegin: b, onAccept: w, onReject: T, onAbort: x
                                    };
                                case "explain":
                                    return {
                                        onBegin: k, onAccept: S, onReject: C, onAbort: x
                                    };
                                default:
                                    throw new Error(`GPT resource mode not supported: ${n}`)
                            }
                        }), [n]);
                        return {
                            onBegin: P,
                            onAccept: A,
                            onReject: N,
                            onAbort: R,
                            errorMessage: l,
                            setErrorMessage: c
                        }
                    };
                var U = n(46726),
                    J = n(946625);
                const K = [U.i.generate, U.i.explain],
                    Q = ({
                             aiAssistantType: e,
                             scope: t,
                             children: n
                         }) => {
                        const [o, s] = (0, r.useState)(!1), [i, l] = (0, r.useState)(""), [c, d] = (0, r.useState)("generate"), u = (0, a.Z)((e => {
                            d(e ?? "generate")
                        })), p = (e => {
                            switch (e) {
                                case "javascript":
                                    return "jsquery";
                                case "transformer":
                                    return "transformer";
                                default:
                                    return "javascript"
                            }
                        })(e), m = y, [h, f] = (0, r.useState)(!1), [v, b] = (0, r.useState)(!1), E = (0, a.Z)(((e, t) => {
                            (0, g.PM)("GPT Interacted", {
                                gptMode: c,
                                model: m,
                                pctTablesTruncated: 0,
                                resourceType: p,
                                schemaPromptType: "none",
                                userInput: i,
                                withHistory: !1,
                                withResource: !0,
                                type: e,
                                error: t || ""
                            })
                        })), {
                            onBegin: w,
                            onAccept: T,
                            onReject: x,
                            onAbort: k,
                            errorMessage: S,
                            setErrorMessage: C
                        } = V({
                            sendAmplitudeEvent: E,
                            gptResourceMode: c,
                            aiAssistantType: e,
                            scope: t
                        }), P = (0, a.Z)((() => (T(), f(!1), s(!1), l(""), C(null), E("accept"), Promise.resolve()))), A = (0, a.Z)((e => {
                            l(e), C(null), f(!1)
                        })), N = (0, a.Z)((() => {
                            const e = o;
                            s(!o), C(null), f(!1), e && (k({
                                skipAmplitudeEvent: !0
                            }), x({
                                skipAmplitudeEvent: !0
                            })), E(e ? "close" : "open")
                        })), R = (0, a.Z)((async () => {
                            if (("generate" === c || "edit" === c) && 0 === i.trim()
                                .length) return C("Please type a prompt for Ask AI");
                            h ? await P() : (b(!0), await w(i), b(!1), S ? (f(!1), x()) : f(!0))
                        })), I = (0, a.Z)((() => {
                            k(), x(), f(!1), C(null), s(!1), E("cancel")
                        })), Z = (0, a.Z)((() => {
                            x(), f(!1), s(!1)
                        })), M = (0, a.Z)((() => {}));
                        return r.createElement(J.o, {
                            availableGPTResourceModes: K,
                            errorMessage: S,
                            gptResourceMode: c,
                            hasResponse: h,
                            inputValue: i,
                            isAssistantVisible: o,
                            isSubmitting: v,
                            onInputChange: A,
                            onRejectResponse: Z,
                            onToggleAssistant: N,
                            setGPTResourceMode: u,
                            onSubmitPrompt: R,
                            onAcceptResponse: P,
                            onCancelPrompt: I,
                            onClearError: M
                        }, n)
                    };
                var Y = n(829115);
                const q = ({
                               enablePopoutProps: e,
                               aiAssistantType: t,
                               children: n,
                               scope: o
                           }) => {
                        const a = !!e,
                            s = {
                                disabledEditorValue: n.props.value,
                                disabledEditorMinHeight: n.props.minHeight ?? void 0,
                                disabledEditorMaxHeight: n.props.maxHeight ?? void 0
                            },
                            i = !!t;
                        return r.createElement(h.IA, null, r.createElement(Y.y, {
                            popoutEnabled: a,
                            popoutProps: e,
                            hasAiAssistant: i,
                            disabledPlaceholderProps: s
                        }, i ? r.createElement(Q, {
                            aiAssistantType: t,
                            scope: o
                        }, r.createElement(m, null), n) : n))
                    },
                    X = q
            },
            829115: (e, t, n) => {
                "use strict";
                n.d(t, {
                    y: () => i
                });
                var r = n(827378),
                    o = n(810759),
                    a = n(981192),
                    s = n(830797);
                const i = ({
                               popoutEnabled: e,
                               popoutProps: t,
                               hasAiAssistant: n,
                               disabledPlaceholderProps: i,
                               children: l
                           }) => {
                    const {
                        poppedOut: c,
                        setPoppedOut: d
                    } = (0, o.Z)(s.rU)
                        ?.popOut ?? {}, {
                        popoutTitle: u,
                        popoutSubtitle: p,
                        disablePlaceholderLineNumbers: m,
                        disablePlaceholderGutters: g
                    } = t ?? {};
                    return e ? r.createElement(a.ZP, {
                        poppedOut: c,
                        setPoppedOut: d,
                        popoutTitle: u ?? "",
                        popoutSubtitle: p ?? "",
                        disablePlaceholderLineNumbers: m,
                        disablePlaceholderGutters: g,
                        disabledEditorValue: i?.disabledEditorValue,
                        disabledEditorMinHeight: i?.disabledEditorMinHeight,
                        disabledEditorMaxHeight: i?.disabledEditorMaxHeight,
                        hasAiAssistant: n
                    }, l) : r.createElement(r.Fragment, null, l)
                }
            },
            458475: (e, t, n) => {
                "use strict";
                n.d(t, {
                    t: () => c,
                    Z: () => d
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(362655);
                const i = n(955480)
                        .Z,
                    l = a()
                        .bind(i),
                    c = ({
                             displayParts: e,
                             monospace: t,
                             active: n
                         }) => e.map((e => {
                        const r = document.createElement("span");
                        return r.textContent = e.text.slice(0, 1e4), r.className = l(e.kind, {
                            active: n,
                            monospace: t
                        }), r
                    })),
                    d = ({
                             displayParts: e,
                             monospace: t,
                             active: n,
                             markdown: o,
                             fullWidth: a
                         }) => r.createElement("div", {
                        className: l("main")
                    }, e.map((({
                                   kind: e,
                                   text: i
                               }, c) => {
                        const d = i.slice(0, 1e4);
                        return r.createElement("div", {
                            key: c,
                            className: l(e, {
                                active: n,
                                monospace: t,
                                fullWidth: a
                            })
                        }, "space" === e ? r.createElement("div", null, "\xa0") : o ? r.createElement(s.Z, {
                            styles: {
                                text: "var(--gray)"
                            },
                            value: d
                        }) : d)
                    })))
            },
            389960: (e, t, n) => {
                "use strict";
                n.d(t, {
                    k: () => d
                });
                var r = n(476298),
                    o = n(341665),
                    a = n.n(o),
                    s = n(320224),
                    i = n.n(s),
                    l = n(841654),
                    c = n.n(l);
                const d = e => e.map((e => {
                    const {
                        message: t,
                        severity: n
                    } = e;
                    return {
                        ...e,
                        renderMessage: () => ((e, t) => {
                            const n = document.createElement("div"),
                                o = document.createElement("div");
                            o.style.display = "flex", o.style.justifyContent = "start";
                            const s = document.createElement("div");
                            s.style.alignItems = "start", s.style.marginLeft = "-2px", s.style.paddingTop = "4px";
                            const l = document.createElement("img");
                            switch (t) {
                                case "info":
                                case "hint":
                                    l.src = i();
                                    break;
                                case "warning":
                                    l.src = c();
                                    break;
                                case "error":
                                    l.src = a();
                                    break;
                                default:
                                    (0, r.vE)(t)
                            }
                            s.appendChild(l);
                            const d = document.createElement("div");
                            return d.style.marginLeft = "6px", d.style.paddingTop = "3px", d.style.alignItems = "start", d.innerHTML = e, d.style.fontFamily = "Inter", d.style.color = "#222222", n.appendChild(o), o.appendChild(s), o.appendChild(d), n
                        })(t, n)
                    }
                }))
            },
            813268: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => b
                });
                var r = n(827378),
                    o = n(377606),
                    a = n(725777),
                    s = n(292554),
                    i = n.n(s),
                    l = n(359848),
                    c = n(716861),
                    d = n(213677),
                    u = n(569888),
                    p = n(125811),
                    m = n(755662);
                const g = "DisabledEditorPlaceholder",
                    h = (0, l.Z)({
                        editorType: g,
                        makeExtensions: ({
                                             constants: {
                                                 disableLineNumbers: e,
                                                 disableGutters: t
                                             },
                                             editorViewRef: n
                                         }) => [(0, d.Z)({
                            disableLineNumbers: e,
                            disableGutters: t
                        }), (0, c.t)(g, n), a.tk.lineWrapping, o.yy.readOnly.of(!0), p.K]
                    }),
                    f = {
                        disabledGrey: !0,
                        disableActiveLineGutter: !0,
                        disableActiveLineHighlight: !0,
                        disabledHoverBorderHighlight: !0
                    },
                    v = m.Z,
                    y = i()
                        .bind(v),
                    b = ({
                             onClick: e,
                             value: t,
                             disableLineNumbers: n,
                             disableGutters: o,
                             ...a
                         }) => {
                        a = {
                            ...f,
                            ...a
                        };
                        const {
                            classesToApply: s,
                            variablesToSet: i
                        } = (0, u.B)(a);
                        return r.createElement("div", {
                            onClick: e,
                            style: {
                                ...i
                            },
                            className: y("editorWrapper", {
                                ...s
                            })
                        }, r.createElement(h, {
                            callbacks: !0,
                            value: t,
                            constants: {
                                disableLineNumbers: n,
                                disableGutters: o
                            }
                        }))
                    }
            },
            981192: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Yf: () => h,
                    Ss: () => f,
                    ZP: () => b
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(321427),
                    i = n(655324),
                    l = n(488773),
                    c = n(483430),
                    d = n(161557),
                    u = n(23228),
                    p = n(827714),
                    m = n(813268),
                    g = n(954833);
                const h = 480,
                    f = 260,
                    v = g.Z,
                    y = a()
                        .bind(v),
                    b = ({
                             poppedOut: e,
                             setPoppedOut: t,
                             popoutTitle: n,
                             popoutSubtitle: o,
                             disablePlaceholderLineNumbers: a,
                             disablePlaceholderGutters: g,
                             hasAiAssistant: v,
                             disabledEditorValue: b,
                             disabledEditorMinHeight: E,
                             disabledEditorMaxHeight: w,
                             children: T
                         }) => {
                        const {
                            handleResize: x,
                            handleDragStop: k,
                            position: S,
                            size: C
                        } = (0, i.V)({
                            initialHeight: f,
                            initialWidth: h,
                            localStorageName: "popoutEditorSize"
                        });
                        return r.createElement(r.Fragment, null, e ? r.createElement(r.Fragment, null, r.createElement(u.Z, {
                            minWidth: 100,
                            headerMinWidth: 100,
                            minHeight: 100,
                            onHide: () => t(!1),
                            title: r.createElement(r.Fragment, null, r.createElement("div", {
                                className: y("modalHeader")
                            }, r.createElement("div", {
                                className: y("modalTitle")
                            }, n), r.createElement("div", {
                                className: y("modalTitleSlash")
                            }, "/"), r.createElement("div", {
                                className: y("modalSubtitle")
                            }, o))),
                            closeButton: r.createElement(c.Z, {
                                className: y("closeButton", "modalDoneButton"),
                                onClick: () => t(!1),
                                type: "primary"
                            }, r.createElement(d.z9, {
                                transform: "rotate(180)"
                            }), " Done"),
                            onResize: (e, t) => {
                                x(e, t)
                            },
                            onDragStop: e => {
                                k(e)
                            },
                            defaultSize: C,
                            defaultPosition: S
                        }, r.createElement("div", {
                            "data-testid": "PopoutEditor::Wrapper",
                            className: y("editorWrapper")
                        }, T)), r.createElement("div", null, r.createElement(m.Z, {
                            onClick: () => t(!1),
                            value: b ?? "",
                            minHeight: E,
                            maxHeight: w,
                            disableLineNumbers: a,
                            disableGutters: g
                        }))) : r.createElement("div", {
                            className: y("popoutWrapper")
                        }, r.createElement(c.Z, {
                            type: "ghost",
                            className: y("popoutButton", v ? "popoutButtonMovedOver" : "popoutButtonRegular"),
                            onClick: () => t(!0)
                        }, r.createElement(l.u, {
                            title: r.createElement(r.Fragment, null, "Open pop-out code editor ", r.createElement(p.Z, {
                                keys: (0, s.KA)("GLOBAL_EDITOR", "OPEN_POPOUT")
                            })),
                            placement: "topLeft",
                            mouseEnterDelay: 1
                        }, r.createElement(d.z9, {
                            className: "popoutIcon"
                        }))), T))
                    }
            },
            26527: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(975624);
                var i = n(295161);
                const l = n(519010)
                        .Z,
                    c = a()
                        .bind(l),
                    d = ({
                             children: e,
                             kind: t,
                             onMouseLeave: n
                         }) => ((e => {
                        (0, s.Z)("mouseleave", (({
                                                     target: t
                                                 }) => {
                            e && t === document.querySelector(".cm-tooltip") && e()
                        }), !0)
                    })(n), r.createElement("div", {
                        className: c("main", t),
                        "data-testid": (0, i.g)("CodeEditor::Tooltip", t)
                    }, r.createElement("span", null, e)))
            },
            811710: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(458475),
                    i = n(67089),
                    l = n(14839);
                const c = a()
                        .bind(i.Z),
                    d = ({
                             displayParts: e,
                             documentation: t,
                             activeParameterIndexRange: n,
                             tags: o
                         }) => r.createElement("div", {
                        className: c("main")
                    }, r.createElement("div", {
                        className: c("signature")
                    }, e.map(((e, t) => {
                        return r.createElement(s.Z, {
                            key: t,
                            displayParts: [e],
                            active: (o = t, a = n, a && o >= a.start && o < a.end),
                            monospace: !0
                        });
                        var o, a
                    }))), t && 0 !== t.length && r.createElement("div", {
                        className: c("documentation")
                    }, t.map(((e, t) => r.createElement(s.Z, {
                        key: t,
                        markdown: !0,
                        displayParts: [e]
                    })))), o && r.createElement("div", {
                        className: c("tags")
                    }, r.createElement(l._, {
                        tags: o
                    })))
            },
            14839: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _: () => c
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(458475);
                const i = n(160658)
                        .Z,
                    l = a()
                        .bind(i),
                    c = ({
                             tags: e
                         }) => {
                        const t = e.map((({
                                              name: e,
                                              text: t
                                          }, n) => {
                            if (!["param", "example"].includes(e) || !t) return null;
                            if ("param" === e) {
                                if (1 === t.length) return null;
                                let o = t;
                                return o[0].kind = "monospace", o = [{
                                    text: "@param",
                                    kind: "tag"
                                }, {
                                    text: " ",
                                    kind: "space"
                                }].concat(o), r.createElement("div", {
                                    className: l(e),
                                    key: n
                                }, r.createElement(s.Z, {
                                    displayParts: o,
                                    markdown: !0
                                }))
                            }
                            return t.flatMap((({
                                                   text: e,
                                                   ...t
                                               }) => e.split(/\s*\n\s*/)
                                .map((e => [{
                                    text: e,
                                    ...t
                                }]))))
                                .map(((e, t) => r.createElement("div", {
                                    key: n
                                }, r.createElement(s.Z, {
                                    key: t,
                                    displayParts: e,
                                    markdown: !0,
                                    monospace: !0,
                                    fullWidth: !0
                                }))))
                        }));
                        return t ? r.createElement("div", {
                            className: l("main")
                        }, t) : null
                    }
            },
            378677: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => k
                });
                var r = n(827378),
                    o = n(224617),
                    a = n(734051),
                    s = n(199729),
                    i = n.n(s),
                    l = n(156141),
                    c = n.n(l),
                    d = n(500332),
                    u = n(55848),
                    p = n(992073),
                    m = n(729880),
                    g = n(595646),
                    h = n(484570);
                const f = (e, t) => {
                    if (e[0]) return f(e[0], t);
                    {
                        const n = ((e, t) => Object.keys(e)
                            .filter((e => (0, h.Z)({
                                propertyName: e,
                                pluginTemplate: t,
                                isMobileApp: !1
                            }))))(e, t);
                        return Object.fromEntries(Object.entries(e)
                            .filter((([e]) => !n.includes(e))))
                    }
                };
                var v = n(292554),
                    y = n.n(v),
                    b = n(800625),
                    E = n(694574);
                const w = n(224525)
                        .Z,
                    T = y()
                        .bind(w),
                    x = ({
                             id: e,
                             data: t,
                             subtype: n,
                             selector: o,
                             onSelectClick: a,
                             onInspectInDebugModal: s,
                             onInspectInDebugModalMouseDown: i,
                             onSelectMouseDown: l
                         }) => r.createElement("div", {
                        "data-testid": "CodeEditor::RetoolScopePluginTooltip"
                    }, r.createElement("div", {
                        className: T("header")
                    }, r.createElement(b.Z, {
                        selector: o,
                        selectedPluginId: e,
                        selected: !0,
                        onSelectClick: a,
                        onSelectMouseDown: l,
                        showInspectInDebugModal: !0,
                        onInspectInDebugModal: s,
                        onInspectInDebugModalMouseDown: i,
                        pluginType: n,
                        hidePluginIcon: !0
                    })), r.createElement("div", {
                        className: T("bodyContainer")
                    }, r.createElement(E.Z, {
                        state: t,
                        currentHover: "",
                        pluginType: n,
                        isCodeEditorTooltip: !0
                    }))),
                    k = ({
                             selector: e,
                             scope: t
                         }) => {
                        const n = (0, o.I0)(),
                            s = (0, p.Z)({
                                shouldMakeWidgetVisible: !0,
                                shouldScrollWidgetIntoView: !0,
                                shouldOpenInspector: !0
                            }),
                            l = e[0],
                            h = (0, o.v9)((e => {
                                if ((0, u.x)(l)) return new d.sr({
                                    id: l
                                });
                                return (0, g.appTemplateSelector)(e)
                                    .getPlugin(l)
                            })),
                            v = (0, o.v9)((n => {
                                const r = (0, g.appModelValuesSelector)(n);
                                return (({
                                             selector: e,
                                             values: t,
                                             pluginTemplate: n,
                                             scope: r
                                         }) => {
                                    const o = e.length > 1,
                                        s = (l = t.get(e[0]), (0, a.isImmutable)(l) && "toJS" in l ? l.toJS() : l);
                                    var l;
                                    if (s) {
                                        const t = f(s, n);
                                        return o ? i()(t, e.slice(1)) : t
                                    }
                                    if (r) {
                                        const t = r.find((t => t.key === e[0]));
                                        if (t) return o ? i()(t.value, e.slice(1)) : t.value
                                    }
                                    return null
                                })({
                                    selector: e,
                                    values: r.values,
                                    pluginTemplate: h,
                                    scope: t
                                })
                            }), c());
                        return v ? r.createElement(x, {
                            data: v,
                            id: e[0],
                            subtype: h?.subtype,
                            selector: e,
                            onInspectInDebugModal: () => {
                                n((0, m.Fc)(l))
                            },
                            onInspectInDebugModalMouseDown: e => e.preventDefault(),
                            onSelectClick: () => {
                                s(l, e)
                            },
                            onSelectMouseDown: e => e.preventDefault()
                        }) : null
                    }
            },
            882143: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _B: () => o,
                    Ie: () => a,
                    kx: () => s,
                    mL: () => i,
                    WH: () => l,
                    Ny: () => c
                });
                var r = n(802862);
                const o = r.ScriptElementKind.alias,
                    a = r.ScriptElementKind.memberFunctionElement,
                    s = r.ScriptElementKind.functionElement,
                    i = r.ScriptElementKind.constElement,
                    l = r.ScriptElementKind.variableElement,
                    c = r.ScriptElementKind.memberVariableElement
            },
            512357: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K: () => a
                });
                var r = n(725777),
                    o = n(827378);
                const a = ({
                               editorView: e,
                               reFocus: t,
                               reFocusStartPos: n,
                               reFocusEndPos: a
                           }) => {
                    (0, o.useEffect)((() => {
                        if (t && e) {
                            e.focus();
                            const t = e.state.doc.length;
                            if (n || 0 === n) {
                                const o = n > t ? t : n,
                                    s = a ?? n,
                                    i = s > t ? t : s;
                                e.dispatch({
                                    selection: {
                                        anchor: o,
                                        head: i
                                    },
                                    effects: [r.tk.scrollIntoView(i)]
                                })
                            }
                        }
                    }), [t, n, a, e])
                }
            },
            178425: (e, t, n) => {
                "use strict";
                n.d(t, {
                    u: () => s
                });
                var r = n(827378),
                    o = n(457774),
                    a = n(520048);
                const s = e => {
                    const t = (0, a.Z)(),
                        n = (0, r.useRef)(document.createElement("div"));
                    return (0, r.useEffect)((() => {
                        if (t?.current) {
                            const r = n.current;
                            return r.setAttribute("data-testId", "CodeEditor::TooltipParent"), r.tabIndex = -1, r.addEventListener("blur", (() => {
                                e.current?.viewRef.current && (0, o._B)(e.current.viewRef.current)
                            })), t?.current?.appendChild(r), () => {
                                r.remove()
                            }
                        }
                    }), [e, t]), n
                }
            },
            866313: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => o
                });
                var r = n(231836);
                const o = ({
                               editorRef: e,
                               compartment: t,
                               makeExtension: n,
                               dependencies: o
                           }) => {
                    (0, r.Z)((() => {
                        const r = e.current?.viewRef.current;
                        r && r.dispatch({
                            effects: [t.reconfigure(n())]
                        })
                    }), [...o])
                }
            },
            37340: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = (e, t) => {
                    const {
                        from: n,
                        to: r,
                        text: o
                    } = e.state.doc.lineAt(t);
                    let a = t,
                        s = t;
                    for (; a > n && /\w/.test(o[a - n - 1]);) a--;
                    for (; s < r && /\w/.test(o[s - n]);) s++;
                    return {
                        start: a,
                        end: s
                    }
                }
            },
            483934: (e, t, n) => {
                "use strict";
                n.d(t, {
                    j: () => i,
                    r: () => l
                });
                var r = n(827378),
                    o = n(622483),
                    a = n(355410);
                const s = n(912553)
                        .Z,
                    i = ({
                             column: e,
                             schema: t,
                             schemaMetadata: n,
                             resource: i
                         }) => {
                        const l = (0, r.useRef)(null),
                            c = Object.keys(t ?? {}),
                            [d, u] = (0, r.useState)(c.reduce(((e, t) => (e[t] = c.length > 1, e)), {}));
                        return e ? r.createElement("div", {
                            className: "datasource-schema query-editor-vertical "
                        }, r.createElement(a.A, {
                            name: e.name,
                            table: e.table
                        })) : t ? r.createElement("div", {
                            className: `datasource-schema query-editor-vertical ${s.tooltipSizing}`
                        }, r.createElement(o.F, {
                            virtualizedList: l,
                            filteredAndSortedTableNames: c,
                            tablesUsedByQuery: c,
                            tablesNotUsedByQuery: [],
                            collapsedColumns: d,
                            setCollapsedColumns: u,
                            filteredSchema: t,
                            shouldShowRefetchButton: !1,
                            shouldShowLimitExceeded: !1,
                            shouldShowSubCategories: !1,
                            shouldShowCopyTable: !1,
                            resourceType: i,
                            selectedSchemaMetadata: n,
                            isFullHeight: !0
                        })) : null
                    },
                    l = ({
                             client: e,
                             schemaMetadata: t,
                             resource: n,
                             getTemplateStringTooltipSource: r
                         }) => ({
                                    onCreate: o,
                                    onDestroy: a
                                }) => {
                        const s = r({
                            onCreate: o,
                            onDestroy: a
                        });
                        return async (r, i, l) => {
                            const c = e ? await (e?.getHoverForPosition({
                                position: i,
                                side: l
                            })) : void 0;
                            return c ? {
                                pos: i,
                                end: c.location.to,
                                above: !0,
                                create: () => {
                                    const e = document.createElement("div");
                                    return o?.({
                                        type: "sql",
                                        column: c.column,
                                        schema: c.schema,
                                        resource: n,
                                        schemaMetadata: t,
                                        parent: e,
                                        view: r
                                    }), {
                                        dom: e,
                                        destroy: a
                                    }
                                }
                            } : s(r, i, l)
                        }
                    }
            },
            238021: (e, t, n) => {
                "use strict";
                n.d(t, {
                    W: () => v,
                    $: () => f
                });
                var r = n(711719),
                    o = n.n(r),
                    a = n(827378),
                    s = n(937634),
                    i = n(458475),
                    l = n(14839),
                    c = n(672053),
                    d = n(888422);
                const u = n(114232)
                        .Z,
                    p = (e, t) => {
                        const {
                            displayParts: n,
                            documentation: r,
                            tags: o
                        } = e, p = [], m = document.createElement("div");
                        m.className = u.main;
                        let g = (e => {
                            const t = e.some((e => "keyword" === e.kind && "interface" === e.text)),
                                n = e.some((e => "keyword" === e.kind && "prototype" === e.text));
                            return t || n ? e : (0, c.Lu)(e)
                        })(n);
                        if (g = (0, d.Z)(g, "function" === t), !g.length) return null;
                        if (m.append(...(0, i.t)({
                            displayParts: g
                        })), r) {
                            const e = document.createElement("div"),
                                t = (0, s.s)(e);
                            t.render(a.createElement(i.Z, {
                                displayParts: r,
                                markdown: !0
                            })), p.push(t), m.append(e)
                        }
                        if (o && 0 !== o.length) {
                            const e = document.createElement("div"),
                                t = (0, s.s)(e);
                            t.render(a.createElement(l._, {
                                tags: o
                            })), p.push(t), m.append(e)
                        }
                        return {
                            dom: m,
                            destroy: () => p.forEach((e => e.unmount()))
                        }
                    };
                var m = n(650145);
                const g = n(646664)
                        .Z,
                    h = /(value|data|text|selected\w*)/,
                    f = ({
                             name: e,
                             sortText: t,
                             isFromPlugin: n
                         }) => {
                        let r = parseInt(t || "15");
                        return e.match(h) && (r += 20), n && (r += 20), r
                    },
                    v = async ({
                                   worker: e,
                                   id: t,
                                   position: n,
                                   entries: r,
                                   determineTypeFromEntryDetails: a,
                                   onCreateTooltip: s,
                                   onDestroyTooltip: i
                               }) => {
                        const l = async r => e.call({
                            method: "getCompletionEntryDetails",
                            id: t,
                            position: n,
                            entry: r
                        });
                        return await Promise.all(r.map((async e => {
                            const {
                                kind: t,
                                name: n
                            } = e;
                            let r;
                            a && (r = await l(e));
                            const u = ((e, t) => {
                                if (!e) return t;
                                const {
                                    displayParts: n
                                } = e, r = (0, c.Lu)(n);
                                return (0, d.w)(r)
                            })(r, t);
                            return {
                                label: n,
                                detail: u,
                                boost: f({
                                    name: e.name,
                                    sortText: e.sortText
                                }),
                                info: async () => {
                                    a || (r = await l(e));
                                    let t = null;
                                    const n = r?.displayParts.map((e => e.text))
                                        .join("");
                                    if (n && (t = (0, m.i)(n)), t && s) {
                                        const e = document.createElement("div");
                                        e.className = g.container;
                                        const n = o()
                                            .v4();
                                        return s(t, e, n), {
                                            dom: e,
                                            destroy: () => i ? i(n) : {}
                                        }
                                    }
                                    return r ? p(r, u) : null
                                }
                            }
                        })))
                    }
            },
            533367: (e, t, n) => {
                "use strict";
                n.d(t, {
                    hB: () => c,
                    IY: () => l
                });
                var r = n(802862),
                    o = n(238021),
                    a = n(377606);
                class s {
                    constructor(e) {
                        this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
                        for (let t = 0; t < e.length;) {
                            let n = (0, a.gm)(e, t),
                                r = (0, a.nZ)(n);
                            this.chars.push(n);
                            let o = e.slice(t, t + r),
                                s = o.toUpperCase();
                            this.folded.push((0, a.gm)(s == o ? o.toLowerCase() : s, 0)), t += r
                        }
                        this.astral = e.length != this.chars.length
                    }
                    match(e) {
                        if (0 == this.pattern.length) return [-100];
                        if (e.length < this.pattern.length) return null;
                        let {
                            chars: t,
                            folded: n,
                            any: r,
                            precise: o,
                            byWord: s
                        } = this;
                        if (1 == t.length) {
                            let r = (0, a.gm)(e, 0),
                                o = (0, a.nZ)(r),
                                s = o == e.length ? 0 : -100;
                            if (r == t[0]);
                            else {
                                if (r != n[0]) return null;
                                s += -200
                            }
                            return [s, 0, o]
                        }
                        let i = e.indexOf(this.pattern);
                        if (0 == i) return [e.length == this.pattern.length ? 0 : -100, 0, this.pattern.length];
                        let l = t.length,
                            c = 0;
                        if (i < 0) {
                            for (let o = 0, s = Math.min(e.length, 200); o < s && c < l;) {
                                let s = (0, a.gm)(e, o);
                                s != t[c] && s != n[c] || (r[c++] = o), o += (0, a.nZ)(s)
                            }
                            if (c < l) return null
                        }
                        let d = 0,
                            u = 0,
                            p = !1,
                            m = 0,
                            g = -1,
                            h = -1,
                            f = /[a-z]/.test(e),
                            v = !0;
                        for (let r = 0, c = Math.min(e.length, 200), y = 0; r < c && u < l;) {
                            let c = (0, a.gm)(e, r);
                            i < 0 && (d < l && c == t[d] && (o[d++] = r), m < l && (c == t[m] || c == n[m] ? (0 == m && (g = r), h = r + 1, m++) : m = 0));
                            let b, E = c < 255 ? c >= 48 && c <= 57 || c >= 97 && c <= 122 ? 2 : c >= 65 && c <= 90 ? 1 : 0 : (b = (0, a.bg)(c)) != b.toLowerCase() ? 1 : b != b.toUpperCase() ? 2 : 0;
                            (!r || 1 == E && f || 0 == y && 0 != E) && (t[u] == c || n[u] == c && (p = !0) ? s[u++] = r : s.length && (v = !1)), y = E, r += (0, a.nZ)(c)
                        }
                        return u == l && 0 == s[0] && v ? this.result((p ? -200 : 0) - 100, s, e) : m == l && 0 == g ? [-200 - e.length + (h == e.length ? 0 : -100), 0, h] : i > -1 ? [-700 - e.length, i, i + this.pattern.length] : m == l ? [-900 - e.length, g, h] : u == l ? this.result((p ? -200 : 0) - 100 - 700 + (v ? 0 : -1100), s, e) : 2 == t.length ? null : this.result((r[0] ? -700 : 0) - 200 - 1100, r, e)
                    }
                    result(e, t, n) {
                        let r = [e - n.length],
                            o = 1;
                        for (let e of t) {
                            let t = e + (this.astral ? (0, a.nZ)((0, a.gm)(n, e)) : 1);
                            o > 1 && r[o - 1] == e ? r[o - 1] = t : (r[o++] = e, r[o++] = t)
                        }
                        return r
                    }
                }
                const i = new Set([r.ScriptElementKind.typeElement, r.ScriptElementKind.interfaceElement]),
                    l = async ({
                                   id: e,
                                   worker: t,
                                   triggerDetails: n,
                                   position: r
                               }) => {
                        const {
                            triggerKind: o,
                            triggerCharacter: a
                        } = n, s = await t.call({
                            method: "getCompletionsAtPosition",
                            id: e,
                            position: r,
                            context: {
                                triggerKind: o,
                                triggerCharacter: a
                            }
                        });
                        return s ? s.entries.filter((({
                                                          isFromUncheckedFile: e,
                                                          name: t,
                                                          kind: n
                                                      }) => !e && !t.startsWith("_") && !i.has(n))) : null
                    }, c = ({
                                context: e,
                                triggerDetails: t,
                                comparisonStringOverride: n,
                                options: r
                            }) => {
                        const a = e.state.selection.main.to,
                            i = n ?? e.state.doc.slice(t.from, a)
                                .toString(),
                            l = r.map((e => {
                                const t = e.label.includes(".") ? e.label.split(".")[1] : e.label;
                                return {
                                    ...e,
                                    boost: (0, o.$)({
                                        name: t,
                                        isFromPlugin: !0
                                    })
                                }
                            })),
                            {
                                scoredCompletions: c,
                                completionToMatchLocations: d
                            } = ((e, t) => {
                                const n = new s(t),
                                    r = [],
                                    o = {};
                                return e.forEach((e => {
                                    const t = e.label.startsWith("{{ ") && e.label.endsWith(" }}"),
                                        a = t ? e.label.replace("{{ ", "")
                                            .replace(" }}", "") : e.label,
                                        s = n.match(a);
                                    if (s) {
                                        r.push({
                                            ...e,
                                            score: s?.[0] + (e?.boost ?? 0)
                                        });
                                        let n = s?.slice(1) ?? [];
                                        n = t ? n.map((e => e + 3)) : n, o[e.label] = n
                                    }
                                })), {
                                    scoredCompletions: r,
                                    completionToMatchLocations: o
                                }
                            })(l, i),
                            u = c.sort(((e, t) => (t?.score ?? 0) - (e?.score ?? 0)))
                                .map((e => (delete e.score, e)));
                        return {
                            from: t.from,
                            filter: !1,
                            options: u,
                            getMatch: e => d[e.label] ?? []
                        }
                    }
            },
            963278: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K: () => r
                });
                const r = /[a-zA-Z0-9_\u{a1}-\u{10ffff}]+/u
            },
            263414: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(238021),
                    o = n(533367),
                    a = n(963278),
                    s = n(601200);
                const i = async ({
                                     worker: e,
                                     context: t,
                                     id: n,
                                     position: i,
                                     getCustomCompletions: l,
                                     ...c
                                 }) => {
                    const d = (0, s.s)(t);
                    if (!d) return null;
                    const u = await (0, o.IY)({
                        id: n,
                        position: i,
                        triggerDetails: d,
                        worker: e
                    });
                    if (!u) return null;
                    const p = (0, s.$)(t, d);
                    let m = await (0, r.W)({
                        id: n,
                        position: i,
                        worker: e,
                        entries: u,
                        determineTypeFromEntryDetails: p,
                        ...c
                    });
                    return l && !p && (m = m.concat(l())), {
                        from: d.from,
                        filter: !0,
                        validFor: a.K,
                        closeOnBlur: !1,
                        options: m
                    }
                }
            },
            601200: (e, t, n) => {
                "use strict";
                n.d(t, {
                    $: () => a,
                    s: () => s
                });
                var r = n(802862),
                    o = n(963278);
                const a = (e, t) => {
                        const {
                            from: n,
                            triggerKind: o
                        } = t, a = e.state.doc.toString();
                        return o === r.CompletionTriggerKind.TriggerCharacter || n - 1 >= 0 && "." === a[n - 1]
                    },
                    s = e => {
                        const t = e.matchBefore(o.K),
                            n = t?.from ?? e.pos;
                        let a, s;
                        if (e.explicit || t) a = r.CompletionTriggerKind.Invoked;
                        else {
                            const t = e.tokenBefore([".", "?."]);
                            if (t) a = r.CompletionTriggerKind.TriggerCharacter, s = "?." === t.text ? "." : t.text;
                            else {
                                const t = e.state.doc.toString();
                                n - 1 >= 0 && "." === t[n - 1] && (a = r.CompletionTriggerKind.TriggerCharacter, s = ".")
                            }
                        }
                        return a ? {
                            from: n,
                            triggerKind: a,
                            triggerCharacter: s
                        } : null
                    }
            },
            672053: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Lu: () => s
                });
                var r = n(995188),
                    o = n(742446);
                const a = e => e.findIndex((e => o._.includes(e.kind))),
                    s = e => e = (e => "aliasName" === e[e.length - 1]?.kind ? e.slice(0, e.length - 4) : e)(e = (e => {
                        const t = [];
                        let n = 0;
                        for (; n < e.length;) {
                            const r = e[n];
                            "keyword" !== r.kind || "readonly" !== r.text ? (t.push(r), n += 1) : n += 2
                        }
                        return t
                    })(e = (e => {
                        const t = [],
                            n = [],
                            o = [];
                        for (let a = 0; a < e.length; a++) {
                            const s = e[a];
                            "aliasName" === s.kind && s.text === r.b$ ? o.push(!0) : "punctuation" === s.kind && "<" === s.text ? o.length || n.push(!0) : "punctuation" === s.kind && ">" === s.text ? o.length ? (t.splice(t.length - 3, 3), o.pop()) : n.pop() : n.length || t.push(s)
                        }
                        return t
                    })(e = (e => {
                        const t = a(e);
                        if (-1 === t) return e;
                        const n = e[t],
                            r = n.text;
                        return '"' === r[0] && '"' === r[r.length - 1] && (n.text = n.text.slice(1, r.length - 1)), e[t] = n, e
                    })(e = (e => {
                        const t = a(e);
                        return -1 === t ? e : e.slice(t)
                    })(e)))))
            },
            742446: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _: () => o,
                    d: () => a
                });
                var r = n(882143);
                const o = ["localName", "propertyName", "methodName", "functionName", "aliasName"],
                    a = e => {
                        switch (e) {
                            case r.WH:
                            case r.mL:
                                return "localName";
                            case r.Ny:
                                return "propertyName";
                            case r.kx:
                                return "functionName";
                            case r.Ie:
                                return "methodName"
                        }
                    }
            },
            888422: (e, t, n) => {
                "use strict";
                n.d(t, {
                    w: () => s,
                    Z: () => i
                });
                var r = n(882143),
                    o = n(742446);
                const a = ["string", "number", "boolean"],
                    s = e => {
                        const t = e.findIndex((({
                                                    text: e,
                                                    kind: t
                                                }) => "punctuation" === t && ":" === e)),
                            n = e.slice(t + 1)
                                .filter((({
                                              kind: e
                                          }) => "space" !== e)),
                            r = n[0];
                        if (!r) return "object";
                        if ("methodName" === r.kind) return "method";
                        if ((e => {
                            const t = [];
                            for (const {
                                text: n,
                                kind: r
                            }
                                of e)
                                if ("punctuation" === r && "(" === n && (t.push(!0), t.push("(")), "punctuation" === r && ")" === n && t.pop(), "punctuation" === r && ":" === n && t[0]) return !0;
                            return !1
                        })(e)) return "function";
                        if (1 === n.length && a.includes(r.text)) return r.text;
                        const o = n.length;
                        if (o > 2 && "[" === n[o - 2].text && "]" === n[o - 1].text) return "array";
                        const s = n[0].text,
                            i = n[n.length - 1].text;
                        if ("{" === s && "}" === i) return "object";
                        if ("[" === s && "]" === i) return "array";
                        if (n.find((({
                                         text: e,
                                         kind: t
                                     }) => "punctuation" === t && "=>" === e))) return "function";
                        if (n.find((({
                                         text: e,
                                         kind: t
                                     }) => "keyword" === t && ("true" === e || "false" === e)))) return "boolean";
                        return n.find((({
                                            kind: e
                                        }) => "stringLiteral" === e)) ? "string" : "object"
                    },
                    i = (e, t) => t ? e.map((e => (e => e.kind === (0, o.d)(r.Ny) || e.kind === (0, o.d)(r.mL))(e) ? {
                        ...e,
                        kind: "functionName"
                    } : e)) : e
            },
            295161: (e, t, n) => {
                "use strict";
                n.d(t, {
                    g: () => a,
                    Q: () => s
                });
                var r = n(995188),
                    o = n(55848);
                const a = (e, t) => `${e}${t?`-${t}`:""}`,
                    s = (e, t, n = !0) => !!n && (0, o.x)(t) || e?.some((e => e.text === r.wM))
            },
            678827: (e, t, n) => {
                "use strict";
                n.d(t, {
                    m: () => r
                });
                var r = (e => (e.JSLinter = "js_linter", e.TransformerTemplateStringLinter = "transformer_template_string_linter", e.TemplateStringLinter = "template_string_linter", e.DoubleCurlyLinter = "double_curly_linter", e))(r || {})
            },
            679060: (e, t, n) => {
                "use strict";
                n.d(t, {
                    F: () => r
                });
                const r = (e, t) => {
                    const n = [];
                    return e.forEach((e => {
                        e.to > t && (e.to = t), e.from < 0 && (e.from = 0), e.from <= t && e.to > 0 && n.push(e)
                    })), n
                }
            },
            17288: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var r = n(888422),
                    o = n(650145);
                const a = async ({
                                     worker: e,
                                     id: t,
                                     pos: n,
                                     end: a,
                                     vfsPos: s,
                                     onCreate: i,
                                     onDestroy: l,
                                     view: c,
                                     scope: d
                                 }) => {
                    const u = (await e.call({
                            method: "getDefinitionAtPosition",
                            id: t,
                            position: s
                        }))
                            ?.[0],
                        p = await e.call({
                            method: "getQuickInfoAtPosition",
                            id: t,
                            position: s
                        });
                    if (!p || !u) return null;
                    const m = (0, o.f)(u, p);
                    return m ? {
                        pos: n,
                        end: a,
                        above: !0,
                        create: () => {
                            const e = document.createElement("div");
                            switch (m.kind) {
                                case "method":
                                    i?.({
                                        type: "method",
                                        parent: e,
                                        view: c,
                                        displayParts: m.displayParts,
                                        documentation: m.documentation,
                                        tags: m.tags,
                                        activeParameterIndexRange: m.activeParameterIndexRange
                                    });
                                    break;
                                case "plugin":
                                    i?.({
                                        type: "plugin",
                                        parent: e,
                                        view: c,
                                        scope: d,
                                        selector: m.selector
                                    });
                                    break;
                                case "default": {
                                    const t = (0, r.Z)(m.displayParts, "function" === m.type || "method" === m.type);
                                    let n = "default";
                                    "array" === m.type ? n = "array" : "object" === m.type && (n = "object"), i?.({
                                        type: n,
                                        displayParts: t,
                                        documentation: m.documentation,
                                        parent: e,
                                        view: c
                                    })
                                }
                            }
                            return {
                                dom: e,
                                destroy: l
                            }
                        }
                    } : null
                }
            },
            187372: (e, t, n) => {
                "use strict";
                n.d(t, {
                    k: () => x
                });
                var r = n(827378),
                    o = n(725777),
                    a = n(292554),
                    s = n.n(a),
                    i = n(458475),
                    l = n(67089);
                const c = s()
                        .bind(l.Z),
                    d = ({
                             displayParts: e,
                             documentation: t
                         }) => r.createElement("div", {
                        className: c("main")
                    }, r.createElement("div", {
                        className: c("signature")
                    }, r.createElement(i.Z, {
                        displayParts: e,
                        monospace: !0
                    })), t && 0 !== t.length && r.createElement("div", {
                        className: c("documentation")
                    }, r.createElement(i.Z, {
                        displayParts: t,
                        markdown: !0
                    })));
                var u = n(811710),
                    p = n(833287),
                    m = n.n(p),
                    g = n(672053),
                    h = n(800625),
                    f = n(694574);
                const v = n(853934)
                        .Z,
                    y = s()
                        .bind(v),
                    b = ({
                             name: e,
                             object: t
                         }) => r.createElement("div", {
                        "data-testid": "CodeEditor::ObjectTooltip"
                    }, r.createElement("div", {
                        className: y("header")
                    }, r.createElement(h.Z, {
                        selectedPluginId: e,
                        hidePluginIcon: !0
                    })), r.createElement("div", {
                        className: y("bodyContainer")
                    }, r.createElement(f.Z, {
                        state: t,
                        currentHover: "",
                        isCodeEditorTooltip: !0
                    }))),
                    E = ({
                             object: e
                         }) => r.createElement(b, {
                        name: e.name,
                        object: e.data
                    });
                var w = n(26527),
                    T = n(483934);
                const x = ({
                               onRenderReact: e,
                               onDestroyReact: t,
                               RetoolScopePluginTooltipContainer: n
                           }) => ({
                    onCreate: t => {
                        let a;
                        switch (t.type) {
                            case "method":
                                a = r.createElement(u.Z, {
                                    displayParts: t.displayParts,
                                    documentation: t.documentation,
                                    tags: t.tags,
                                    activeParameterIndexRange: t.activeParameterIndexRange
                                });
                                break;
                            case "plugin":
                                a = r.createElement(n, {
                                    selector: t.selector,
                                    scope: t.scope
                                });
                                break;
                            case "array":
                            case "object": {
                                const e = (e => {
                                    try {
                                        const t = (0, g.Lu)(e)
                                                .map((e => "any" === e.text && "keyword" === e.kind ? "null" : e.text))
                                                .join("")
                                                .replace(/;/g, ","),
                                            n = t.indexOf(":"),
                                            r = t.slice(n + 1),
                                            o = m()
                                                .parse(r);
                                        if (null === o) return;
                                        return {
                                            name: t.slice(0, n),
                                            data: o
                                        }
                                    }
                                    catch (e) {
                                        return
                                    }
                                })(t.displayParts);
                                a = e ? r.createElement(E, {
                                    object: e
                                }) : r.createElement(d, {
                                    displayParts: t.displayParts,
                                    documentation: t.documentation
                                });
                                break
                            }
                            case "sql":
                                a = r.createElement(T.j, {
                                    ...t
                                });
                                break;
                            case "default":
                                a = r.createElement(d, {
                                    displayParts: t.displayParts,
                                    documentation: t.documentation
                                })
                        }
                        e({
                            parent: t.parent,
                            element: r.createElement(w.Z, {
                                kind: t.type,
                                onMouseLeave: () => {
                                    t.view.dispatch({
                                        effects: [o.E8]
                                    })
                                }
                            }, a),
                            id: "hover-tooltip"
                        })
                    },
                    onDestroy: () => {
                        t("hover-tooltip")
                    }
                })
            },
            650145: (e, t, n) => {
                "use strict";
                n.d(t, {
                    i: () => i,
                    f: () => l
                });
                var r = n(882143),
                    o = n(672053),
                    a = n(888422),
                    s = n(995188);
                const i = e => {
                        try {
                            const t = new RegExp(`${s.b$}<\\[(.*?)\\]`)
                                    .exec(e),
                                n = t && t.length > 1,
                                r = new RegExp(`${s.sn}: readonly \\[(.*?)\\]`)
                                    .exec(e),
                                o = r && r.length > 1;
                            let a = null;
                            if (n && !o ? a = t[1] : !n && o ? a = r[1] : n && o && (a = t.index < r.index ? t[1] : r[1]), a) return JSON.parse(`[${a}]`)
                        }
                        catch {
                            return null
                        }
                        return null
                    },
                    l = (e, t) => {
                        const n = t.displayParts?.map((e => e.text))
                            .join("");
                        if (n) {
                            const e = i(n);
                            if (e) return {
                                kind: "plugin",
                                selector: e
                            }
                        }
                        const {
                            kind: s
                        } = e, {
                            displayParts: l,
                            documentation: c
                        } = t, d = (0, o.Lu)(l ?? []), u = (0, a.w)(d);
                        let p;
                        if (s === r.Ie) p = {
                            kind: "method",
                            displayParts: d,
                            documentation: c
                        };
                        else p = {
                            kind: "default",
                            type: u,
                            displayParts: d,
                            documentation: c
                        };
                        return p
                    }
            },
            989812: (e, t, n) => {
                "use strict";
                n.d(t, {
                    ZP: () => v,
                    P$: () => d,
                    x8: () => u,
                    Mf: () => m,
                    CW: () => p
                });
                var r = n(377606),
                    o = n(725777),
                    a = n(266726),
                    s = n.n(a);
                const i = n(883934)
                    .Z;
                const l = function ({
                                        onClick: e,
                                        label: t
                                    }) {
                        const n = document.createElement("div");
                        n.className = i.tooltip, n.onclick = e;
                        const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        r.setAttribute("width", "16"), r.setAttribute("height", "16"), r.setAttribute("fill", "none"), r.setAttribute("class", i.icon);
                        const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        o.setAttribute("fill", "currentColor"), o.setAttribute("fill-rule", "evenodd"), o.setAttribute("clip-rule", "evenodd"), o.setAttribute("d", "M9 2a1 1 0 0 1-.5.866V4H11a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1v1h1v1H5v-1h1v-1H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.5V2.866A1 1 0 1 1 9 2ZM5.5 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 9V8h4v1H6Z"), r.appendChild(o);
                        const a = document.createElement("div"),
                            s = document.createElement("span");
                        s.className = i.label, s.textContent = t;
                        const l = document.createElement("span");
                        return l.className = i.shortcut, l.textContent = "⌘E", a.appendChild(s), a.appendChild(l), n.appendChild(r), n.appendChild(a), n
                    },
                    c = new r.F6,
                    d = c.reconfigure(o.tk.editable.of(!1)),
                    u = c.reconfigure(o.tk.editable.of(!0)),
                    p = r.Py.define(),
                    m = e => {
                        const {
                            state: t
                        } = e, {
                            from: n,
                            to: r
                        } = t.selection.main, o = t.doc.lineAt(n)
                            .from;
                        return {
                            from: n,
                            to: r,
                            startOfLine: o,
                            selectedText: t.doc.slice(o, r)
                                .toString()
                        }
                    },
                    g = r.QQ.define({
                        create() {},
                        update(e, t) {
                            for (const e of t.effects)
                                if (e.is(p)) return e.value;
                            return e
                        },
                        provide: e => o.hJ.compute([e], (t => t.field(e)
                            ?.tooltip ?? null))
                    });
                const h = o.lg.fromClass(class {
                        constructor(e) {
                            this.view = e, this.debouncedPerformUpdate = s()(this.performUpdate, 100)
                        }
                        update(e) {
                            const t = e.state.facet(o.tk.editable);
                            e.selectionSet && t && this.debouncedPerformUpdate(e)
                        }
                        performUpdate(e) {
                            const t = function (e) {
                                const {
                                    view: t,
                                    state: n
                                } = e, {
                                    from: r,
                                    to: o,
                                    startOfLine: a
                                } = m(t);
                                if (o - r < 30 || o - r > 3e3 || e.focusChanged) return;
                                const {
                                    onClickTooltip: s,
                                    tooltipLabel: i
                                } = n.facet(f);
                                let c = r;
                                const d = t.domAtPos(a)
                                        .node.parentElement,
                                    {
                                        left: u,
                                        top: p
                                    } = d?.getBoundingClientRect() ?? {
                                        left: 0,
                                        top: 0
                                    };
                                if (document.elementFromPoint(u, p) !== d) {
                                    const e = t.domAtPos(o)
                                            .node.parentElement,
                                        {
                                            left: n,
                                            top: r
                                        } = e?.getBoundingClientRect() ?? {
                                            left: 0,
                                            top: 0
                                        };
                                    document.elementFromPoint(n, r) === e && (c = o)
                                }
                                return {
                                    tooltip: {
                                        pos: c,
                                        above: !0,
                                        strictSide: !0,
                                        arrow: !1,
                                        create: () => {
                                            const e = l({
                                                onClick: s,
                                                label: i
                                            });
                                            return {
                                                dom: e,
                                                destroy: () => {
                                                    e.remove()
                                                }
                                            }
                                        }
                                    }
                                }
                            }(e);
                            e.view.dispatch({
                                effects: [p.of(t)]
                            })
                        }
                    }),
                    f = r.r$.define({
                        combine: e => ({
                            ...e.length ? e[e.length - 1] : {},
                            ...(0, r.BO)(e, {})
                        }),
                        enables: [h, g, c.of(o.tk.editable.of(!0))]
                    }),
                    v = e => f.of(e)
            },
            437349: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K: () => s
                });
                var r = n(457774),
                    o = n(725777);
                const a = e => o.tk.domEventHandlers({
                        blur: (t, n) => (t.relatedTarget !== e && (0, r._B)(n), !1)
                    }),
                    s = e => [(0, r.ys)({
                        activateOnTyping: !0,
                        closeOnBlur: !1
                    }), a(e)]
            },
            716861: (e, t, n) => {
                "use strict";
                n.d(t, {
                    t: () => a
                });
                var r = n(725777),
                    o = n(391709);

                function a(e, t) {
                    return r.tk.exceptionSink.of((n => {
                        o.$e((r => {
                            r.setTags({
                                editorType: e,
                                source: "codeMirrorExceptionSink"
                            });
                            const a = t?.current?.state.doc.toString() ?? "";
                            r.setExtra("text", a), o.Tb(n, {
                                level: "error"
                            })
                        }))
                    }))
                }
            },
            920440: (e, t, n) => {
                "use strict";
                n.d(t, {
                    S: () => o
                });
                var r = n(725777);
                const o = ({
                               onBlur: e,
                               onFocus: t
                           }) => r.tk.domEventHandlers({
                    focusin: () => (t?.(), !1),
                    focusout: () => (e?.(), !1)
                })
            },
            944327: (e, t, n) => {
                "use strict";
                n.d(t, {
                    b: () => o
                });
                var r = n(725777);
                const o = ({
                               tooltipSource: e,
                               renderTooltipArgs: t
                           }) => {
                    const n = e(t);
                    return [(0, r.bF)(n, {
                        hideOnChange: !0
                    }), r.tk.domEventHandlers({
                        scroll: (e, t) => (t.dispatch({
                            effects: [r.E8]
                        }), !1)
                    })]
                }
            },
            573645: (e, t, n) => {
                "use strict";
                n.d(t, {
                    eY: () => i,
                    $T: () => l,
                    ZP: () => p
                });
                var r = n(377606),
                    o = n(725777);
                const a = o.tk.theme({
                    ".cm-diff-add": {
                        background: "rgba(152, 70, 164, 0.05)",
                        color: "#91a2b0",
                        margin: "0 -2px 0 -6px",
                        marginBottom: "2px",
                        position: "relative",
                        "& ~ *": {
                            display: "none"
                        },
                        display: "flex",
                        gap: "2px"
                    },
                    ".cm-diff-add-plus": {
                        color: "var(--blue)",
                        fontWeight: "bold",
                        width: "32px",
                        textAlign: "center"
                    },
                    ".cm-diff-add-text": {
                        flex: 1
                    },
                    ".cm-diff-add-gutter": {
                        background: "rgba(152, 70, 164, 0.05)"
                    }
                });
                class s extends o.l9 {
                    constructor(e) {
                        super(), this.container = document.createElement("div"), this.container.className = "cm-diff-add", this.text = document.createElement("span"), this.text.className = "cm-diff-add-text", this.text.textContent = e;
                        const t = document.createElement("span");
                        t.className = "cm-diff-add-plus", t.textContent = "+", this.container.appendChild(t), this.container.appendChild(this.text)
                    }
                    toDOM() {
                        return this.container
                    }
                    updateText(e) {
                        this.text.textContent = e
                    }
                }
                const i = r.Py.define(),
                    l = r.Py.define(),
                    c = r.QQ.define({
                        create: () => ({
                            decorations: o.p.none
                        }),
                        update(e, t) {
                            for (const n of t.effects) {
                                if (n.is(i)) {
                                    const {
                                        newText: t,
                                        from: r
                                    } = n.value;
                                    let {
                                        decorations: a
                                    } = e;
                                    if (0 === a.size) {
                                        const e = new s(t);
                                        a = o.p.set([o.p.widget({
                                            widget: e,
                                            side: -1
                                        })
                                            .range(r)
                                        ])
                                    }
                                    else {
                                        const e = a.iter(r)
                                            .value?.spec.widget;
                                        e && e.updateText(t)
                                    }
                                    return {
                                        decorations: a
                                    }
                                }
                                if (n.is(l)) return {
                                    decorations: o.p.none
                                }
                            }
                            return e
                        },
                        provide: e => [o.tk.decorations.from(e, (e => e.decorations))]
                    }),
                    d = new class extends o.SJ {
                        constructor() {
                            super(...arguments), this.elementClass = "cm-diff-add-gutter"
                        }
                    },
                    u = o.v7.compute([c], (e => {
                        const {
                            decorations: t
                        } = e.field(c), n = t.iter(), o = [];
                        for (; n.value;) o.push(d.range(n.from)), n.next();
                        return r.Xs.of(o)
                    })),
                    p = [a, c, u]
            },
            113881: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(227117),
                    o = n(395740);
                const a = ["(", ","],
                    s = [...a, ")"],
                    i = ({
                             completionSource: e,
                             signatureHelpSource: t
                         }) => new o.ri(r.Lz, [r.Lz.data.of({
                        autocomplete: e,
                        signatureHelp: t,
                        signatureHelpTriggerCharacters: a,
                        signatureHelpRetriggerCharacters: s
                    })])
            },
            913564: (e, t, n) => {
                "use strict";
                n.d(t, {
                    qY: () => g,
                    ZP: () => v,
                    uN: () => h,
                    zX: () => f
                });
                var r = n(377606),
                    o = n(725777),
                    a = n(802862),
                    s = n(37340),
                    i = n(409619);
                const l = r.Py.define(),
                    c = o.p.mark({
                        class: "cm-jumpToDefinitionRange",
                        attributes: {
                            "data-testid": "JumpToDefinitionRange::underlineMark"
                        }
                    }),
                    d = o.tk.baseTheme({
                        ".cm-jumpToDefinitionRange": {
                            "text-decoration": "underline",
                            "text-decoration-color": "gold",
                            color: "gold"
                        }
                    }),
                    u = r.QQ.define({
                        create: () => ({
                            state: "default"
                        }),
                        update(e, t) {
                            for (const e of t.effects)
                                if (e.is(l)) return e.value;
                            return e
                        },
                        provide: e => [d, o.tk.decorations.compute([e], (t => {
                            const n = t.field(e);
                            return "active" === n.state ? o.p.set([c.range(n.range.start, n.range.end)]) : o.p.none
                        })), o.tk.contentAttributes.compute([e], (t => "active" === t.field(e)
                            .state ? {
                            style: "cursor: pointer"
                        } : {}))]
                    }),
                    p = o.lg.fromClass(class {
                        constructor(e) {
                            this.view = e, this.abortController = new AbortController, this.jumpToDefinitionKeyIsDown = !1, this.currentHoveredWordRange = null, this.lastMousePosition = null, this.handleKeyDown = e => {
                                this.abortController = new AbortController, e.key === this.view.state.facet(m)
                                    .key && (this.jumpToDefinitionKeyIsDown = !0, this.lastMousePosition && this.getDefinitionAtPosition(this.view.posAtCoords(this.lastMousePosition)))
                            }, this.handleKeyUp = e => {
                                e.key === this.view.state.facet(m)
                                    .key && (this.jumpToDefinitionKeyIsDown = !1, this.cancel())
                            }, this.trigger = e => {
                                this.timeout = setTimeout((() => {
                                    this.doTrigger(e)
                                }))
                            }, this.doTrigger = async e => {
                                const {
                                    state: t
                                } = this.view, {
                                    definitionSource: n
                                } = t.facet(m), r = await n(e);
                                if (!this.abortController.signal.aborted)
                                    if (r?.length) {
                                        const t = (0, s.Z)(this.view, e);
                                        this.view.dispatch({
                                            effects: [l.of({
                                                state: "active",
                                                range: t,
                                                definitionInfo: r[0]
                                            })]
                                        })
                                    }
                                    else this.view.dispatch({
                                        effects: [l.of({
                                            state: "default"
                                        })]
                                    })
                            }, document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp)
                        }
                        getDefinitionAtPosition(e) {
                            null !== e && this.trigger(e)
                        }
                        cancel() {
                            this.abortController.abort(), this.view.dispatch({
                                effects: [l.of({
                                    state: "default"
                                })]
                            })
                        }
                        destroy() {
                            this.cancel(), this.timeout && clearTimeout(this.timeout), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp)
                        }
                    }, {
                        eventHandlers: {
                            mouseleave() {
                                this.lastMousePosition = null
                            },
                            mousemove(e) {
                                this.lastMousePosition = {
                                    x: e.clientX,
                                    y: e.clientY
                                }, this.jumpToDefinitionKeyIsDown && this.getDefinitionAtPosition(this.view.posAtCoords(this.lastMousePosition))
                            },
                            click() {
                                const e = this.view.state.field(u),
                                    t = this.view.state.facet(m)
                                        .onClickInfo;
                                "active" === e.state && t?.(e.definitionInfo, this.view)
                            }
                        }
                    }),
                    m = r.r$.define({
                        combine: e => ({
                            definitionSource: e.length ? e[e.length - 1].definitionSource : () => Promise.resolve(void 0),
                            ...(0, r.BO)(e.map((e => e.config)), {
                                key: "Meta",
                                triggerOnMouseMove: void 0,
                                onClickInfo: void 0
                            })
                        }),
                        enables: [p, u]
                    }),
                    g = ({
                             filename: e,
                             selectPlugin: t,
                             mapVFSPosToCMPos: n
                         }) => (r, o) => {
                        if (`/${e}` !== r.fileName) {
                            if (r.fileName.includes("retoolScope"))
                                if (r.kind === a.ScriptElementKind.memberVariableElement) {
                                    const e = (e => {
                                            const t = e.lastIndexOf("-"),
                                                n = e.lastIndexOf(".");
                                            return e.substring(t + 1, n)
                                                .split(i.K0)[0]
                                        })(r.fileName),
                                        n = [e, r.name];
                                    t?.(e, n)
                                }
                                else if (r.kind === a.ScriptElementKind.constElement) {
                                    const e = r.name;
                                    t?.(e)
                                }
                        }
                        else if (n) {
                            const e = n(r.textSpan.start);
                            o.dispatch({
                                selection: {
                                    anchor: e,
                                    head: e
                                },
                                scrollIntoView: !0
                            })
                        }
                    },
                    h = (e, t) => n => {
                        const r = t(n);
                        if (!e || !r) return Promise.resolve(void 0);
                        const {
                            regionId: o,
                            regionPosition: a
                        } = r;
                        return e.call({
                            method: "getDefinitionAtPosition",
                            id: o,
                            position: a
                        })
                    },
                    f = e => ({
                        key: "Meta",
                        triggerOnMouseMove: e => e.metaKey,
                        onClickInfo: e
                    }),
                    v = (e, t) => m.of({
                        definitionSource: e,
                        config: t
                    })
            },
            338953: (e, t, n) => {
                "use strict";
                n.d(t, {
                    g: () => o
                });
                var r = n(500946);
                const o = e => [(0, r.ir)(e, {
                    needsRefresh: e => e.focusChanged && e.view.hasFocus
                })]
            },
            840011: (e, t, n) => {
                "use strict";
                n.d(t, {
                    P: () => d
                });
                var r = n(457774),
                    o = n(377606),
                    a = n(725777),
                    s = n(510903);
                const i = ({
                               eventName: e,
                               view: t,
                               transaction: n,
                               type: r
                           }) => {
                        const o = n.startState.selection.ranges[0].from,
                            a = Math.min(n.startState.doc.length, 4),
                            i = n.startState.sliceDoc(o - a, o),
                            l = n.startState.selection.ranges[0].from,
                            d = i.substring(0, l)
                                .split(/[\n\s]+/),
                            u = d[d.length - 1],
                            p = u.slice(-1),
                            m = t.state.facet(c)
                                .onTrack;
                        m?.(e, {
                            editorType: t.state.facet(c)
                                .editorType,
                            inTemplate: t.state.facet(c)
                                .inTemplate,
                            codeMirrorVersion: 6,
                            from: (0, s.$w)(u, p),
                            type: r
                        })
                    },
                    l = a.lg.fromClass(class {
                        constructor(e) {
                            this.view = e
                        }
                        update(e) {
                            e.transactions.forEach((t => {
                                if (t.isUserEvent("input.complete")) i({
                                    eventName: s.JZ,
                                    view: this.view,
                                    transaction: t,
                                    type: "pick"
                                });
                                else {
                                    if ("active" === (0, r.LR)(t.startState) && !(0, r.LR)(t.state)) {
                                        if (t.isUserEvent("delete") || e.focusChanged || t.isUserEvent("select")) return null;
                                        i({
                                            eventName: s.JZ,
                                            view: this.view,
                                            transaction: t,
                                            type: "close"
                                        })
                                    }
                                    "pending" !== (0, r.LR)(t.startState) && (0, r.LR)(t.startState) || "active" !== (0, r.LR)(t.state) || i({
                                        eventName: s.dh,
                                        view: this.view,
                                        transaction: t
                                    })
                                }
                            }))
                        }
                    }),
                    c = o.r$.define({
                        combine: e => ({
                            ...(0, o.BO)(e.map((e => e.config)), {
                                editorType: "",
                                inTemplate: !1,
                                onTrack: () => Promise.resolve()
                            })
                        }),
                        enables: [l]
                    }),
                    d = e => c.of({
                        config: e
                    })
            },
            568234: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => g
                });
                var r = n(377606),
                    o = n(725777),
                    a = n(866313);
                const s = new r.F6;
                const i = new r.F6;
                var l = n(827378),
                    c = n(769261),
                    d = n(653624),
                    u = n(338953);
                const p = new r.F6,
                    m = {
                        placeholder: {
                            makeExtension: function ({
                                                         placeholderString: e
                                                     }) {
                                return s.of((0, o.W$)(e ?? ""))
                            },
                            useExtension: function ({
                                                        codeEditorRef: e,
                                                        placeholderString: t
                                                    }) {
                                (0, a.h)({
                                    compartment: s,
                                    dependencies: [t],
                                    editorRef: e,
                                    makeExtension: () => (0, o.W$)(t ?? "")
                                })
                            }
                        },
                        scopeChangeAwareLinter: {
                            makeExtension: ({
                                                lintSource: e
                                            }) => p.of((0, u.g)(e)),
                            useExtension: ({
                                               lintSource: e,
                                               editorRef: t
                                           }) => {
                                const n = (0, d.cv)(),
                                    [r] = (0, c.Z)((() => {
                                        const n = t.current?.viewRef.current;
                                        n && n.dispatch({
                                            effects: [p.reconfigure((0, u.g)(e))]
                                        })
                                    }), 100);
                                (0, l.useEffect)((() => (n?.subscribeToScopeUpdates(r), () => {
                                    n?.cancelSubscriptionToScopeUpdates(r)
                                })), [r, n])
                            }
                        },
                        languageSupport: {
                            makeExtension: function ({
                                                         languageSupport: e
                                                     }) {
                                return i.of(e)
                            },
                            useExtension: function ({
                                                        codeEditorRef: e,
                                                        languageSupport: t
                                                    }) {
                                (0, a.h)({
                                    compartment: i,
                                    dependencies: [t],
                                    editorRef: e,
                                    makeExtension: () => t
                                })
                            }
                        }
                    };

                function g(e) {
                    return {
                        makeReconfigurableExtensions: t => {
                            const n = [],
                                r = t;
                            return Object.entries(e)
                                .forEach((([e, t]) => {
                                    const o = e;
                                    t && n.push(m[o].makeExtension(r[o]))
                                })), n
                        },
                        useReconfigurableExtensions: t => {
                            const n = t;
                            Object.entries(e)
                                .forEach((([e, t]) => {
                                    const r = e;
                                    t && m[r].useExtension(n[r])
                                }))
                        }
                    }
                }
            },
            113130: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l
                });
                var r = n(377606),
                    o = n(725777),
                    a = n(157671);
                const s = o.lg.fromClass(class {
                        constructor(e) {
                            this.view = e, this.placeholders = r.Xs.empty, this.updateDecorations()
                        }
                        updateDecorations() {
                            this.placeholders = r.Xs.empty;
                            const {
                                searchTerm: e,
                                searchOptions: t
                            } = this.view.state.facet(i)
                                .getSearchResults();
                            if (!e) return;
                            const n = (0, a.wf)({
                                    searchableValue: this.view.state.doc.sliceString(0)
                                }, e, t),
                                s = this.view.state.doc.length,
                                l = [];
                            n.reduce(((e, t) => (t.queryMatches.forEach((t => {
                                e.push({
                                    start: t.docPosition,
                                    length: t.length
                                })
                            })), e)), [])
                                .forEach((e => {
                                    const {
                                        start: t,
                                        length: n
                                    } = e;
                                    t >= 0 && t + n <= s && l.push(o.p.mark({
                                        class: "cm-global-search-result-match"
                                    })
                                        .range(t, t + n))
                                })), this.placeholders = r.Xs.of(l)
                        }
                        update() {
                            this.updateDecorations()
                        }
                        needsRefresh() {
                            this.updateDecorations()
                        }
                        run() {
                            this.updateDecorations()
                        }
                        force() {
                            this.updateDecorations()
                        }
                    }, {
                        decorations: e => e.placeholders
                    }),
                    i = r.r$.define({
                        combine: e => ({
                            getSearchResults: e.length ? e[e.length - 1].getSearchResults : () => ({
                                searchTerm: void 0,
                                searchOptions: {}
                            })
                        }),
                        enables: [s]
                    }),
                    l = e => e ? i.of({
                        getSearchResults: e
                    }) : []
            },
            213677: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var r = n(457774),
                    o = n(171617),
                    a = n(395740),
                    s = n(500946),
                    i = n(368926),
                    l = n(377606),
                    c = n(725777);
                const d = ({
                               disableLineNumbers: e,
                               disableGutters: t,
                               readOnly: n = !1
                           } = {}) => [e ? [] : (0, c.Eu)(), (0, c.HQ)(), (0, c.AE)(), (0, o.m8)(), t ? [] : (0, a.mi)(), (0, c.Uw)(), (0, c.qr)(), l.yy.allowMultipleSelections.of(!0), l.yy.readOnly.of(n), (0, a.nY)(), (0, a.nF)(a.R_, {
                    fallback: !0
                }), (0, a.n$)(), (0, r.vQ)(), (0, r.ys)(), (0, c.Zs)(), (0, c.S2)(), (0, c.ZO)(), (0, i.sW)(), c.$f.of([...r.GA, ...o.wQ, ...o.f$, ...a.e7, ...r.B1, ...s.Fv])]
            },
            855517: (e, t, n) => {
                "use strict";
                n.d(t, {
                    q: () => d
                });
                var r = n(377606),
                    o = n(725777),
                    a = n(507022);
                const s = r.Py.define(),
                    i = r.QQ.define({
                        create: () => ({
                            state: "default"
                        }),
                        update(e, t) {
                            for (const e of t.effects)
                                if (e.is(s)) return e.value;
                            return e
                        },
                        provide: e => o.hJ.compute([e], (t => {
                            const n = t.field(e),
                                {
                                    renderConfig: r
                                } = t.facet(c);
                            if ("active" === n.state) {
                                const {
                                    signatureHelpItems: e
                                } = n;
                                return {
                                    pos: t.selection.main.head,
                                    above: !0,
                                    strictSide: !1,
                                    create: () => {
                                        const t = document.createElement("div");
                                        return r?.onCreate(t, e, "signature-help-active"), {
                                            dom: t,
                                            destroy: () => {
                                                r?.onDestroy("signature-help-active")
                                            }
                                        }
                                    }
                                }
                            }
                            if ("pending" === n.state) {
                                const {
                                    previousSignatureHelpItems: e
                                } = n;
                                if (e) return {
                                    pos: t.selection.main.head,
                                    above: !0,
                                    strictSide: !1,
                                    create: () => {
                                        const t = document.createElement("div");
                                        return r?.onCreate(t, e, "signature-help-pending"), {
                                            dom: t,
                                            destroy: () => {
                                                r?.onDestroy("signature-help-pending")
                                            }
                                        }
                                    }
                                }
                            }
                            return null
                        }))
                    }),
                    l = o.lg.fromClass(class {
                        constructor(e) {
                            this.view = e, this.pendingTriggers = [], this.handleDocChange = () => {
                                this.isTriggered && this.trigger({
                                    triggerReason: {
                                        kind: "retrigger"
                                    }
                                })
                            }, this.handleType = () => {
                                const e = this.view.state.selection.main.head - 1,
                                    t = this.view.state.sliceDoc(e, e + 1),
                                    n = this.view.state.languageDataAt("signatureHelpTriggerCharacters", this.view.state.selection.main.head)
                                        ?.[0] ?? [],
                                    r = this.view.state.languageDataAt("signatureHelpRetriggerCharacters", this.view.state.selection.main.head)
                                        ?.[0] ?? [];
                                (n.includes(t) || this.isTriggered && r.includes(t)) && this.trigger({
                                    triggerReason: {
                                        kind: "characterTyped",
                                        triggerCharacter: t
                                    }
                                })
                            }, this.handleSelect = (e = !1) => {
                                e ? this.cancel() : this.isTriggered && this.trigger({
                                    triggerReason: {
                                        kind: "retrigger"
                                    }
                                })
                            }, this.trigger = e => {
                                this.pendingTriggers.push(e), this.timeout = setTimeout((() => {
                                    this.doTrigger()
                                }))
                            }, this.doTrigger = async () => {
                                const e = this.isTriggered,
                                    t = this.getLastActiveItems(),
                                    n = this.view.state.facet(c)
                                        .source ?? this.view.state.languageDataAt("signatureHelp", this.view.state.selection.main.head)
                                        ?.[0];
                                if (this.cancel(), 0 === this.pendingTriggers.length) return;
                                const r = this.pendingTriggers.reduce(u),
                                    o = {
                                        triggerReason: r.triggerReason ? {
                                            kind: e ? "retrigger" : r.triggerReason.kind,
                                            triggerCharacter: "invoked" === r.triggerReason.kind ? void 0 : r.triggerReason.triggerCharacter
                                        } : void 0
                                    };
                                this.pendingTriggers = [], this.view.dispatch({
                                    effects: [s.of({
                                        state: "pending",
                                        previousSignatureHelpItems: t
                                    })]
                                });
                                const a = await (n?.({
                                    position: this.view.state.selection.main.head,
                                    options: o
                                }));
                                return a && 0 !== a.items.length ? void this.view.dispatch({
                                    effects: [s.of({
                                        state: "active",
                                        signatureHelpItems: a
                                    })]
                                }) : void this.cancel()
                            }, this.cancel = () => {
                                this.view.dispatch({
                                    effects: [s.of({
                                        state: "default"
                                    })]
                                })
                            }
                        }
                        get currentSignatureHelpState() {
                            return this.view.state.field(i)
                        }
                        get isTriggered() {
                            return "active" === this.currentSignatureHelpState.state || "pending" === this.currentSignatureHelpState.state || this.pendingTriggers.length > 0
                        }
                        update(e) {
                            e.docChanged && this.handleDocChange();
                            for (const t of e.transactions) t.isUserEvent("input") ? this.handleType() : t.isUserEvent("select") && this.handleSelect()
                        }
                        getLastActiveItems() {
                            switch (this.currentSignatureHelpState.state) {
                                case "active":
                                    return this.currentSignatureHelpState.signatureHelpItems;
                                case "pending":
                                    return this.currentSignatureHelpState.previousSignatureHelpItems;
                                case "default":
                                    return
                            }
                        }
                        destroy() {
                            this.cancel(), this.timeout && clearTimeout(this.timeout)
                        }
                    }, {
                        eventHandlers: {
                            blur(e, t) {
                                const n = t.state.doc.sliceString(0);
                                return a.Df.test(n) || this.view.dispatch({
                                    effects: [s.of({
                                        state: "default"
                                    })]
                                }), !1
                            }
                        }
                    }),
                    c = r.r$.define({
                        combine: e => ({
                            renderConfig: e.length ? e[e.length - 1].renderConfig : void 0,
                            source: e.length ? e[e.length - 1].source : () => Promise.resolve(void 0)
                        }),
                        enables: [l, i]
                    });

                function d({
                               source: e,
                               renderConfig: t
                           }) {
                    return c.of({
                        source: e,
                        renderConfig: t
                    })
                }
                const u = (e, t) => {
                    if (!t.triggerReason) return e;
                    switch (t.triggerReason.kind) {
                        case "invoked":
                        case "characterTyped":
                        default:
                            return t;
                        case "retrigger":
                            return e
                    }
                }
            },
            886715: (e, t, n) => {
                "use strict";
                n.d(t, {
                    M: () => r
                });
                const r = ({
                               items: e,
                               argumentIndex: t
                           }) => {
                    const n = e[0],
                        {
                            parameters: r,
                            prefixDisplayParts: o,
                            suffixDisplayParts: a,
                            separatorDisplayParts: s,
                            documentation: i,
                            tags: l
                        } = n;
                    let c, d = 0;
                    const u = r.reduce(((e, {
                        displayParts: n
                    }, o) => (o === t && (c = {
                        start: d,
                        end: d + n.length
                    }), o === r.length - 1 ? (e = e.concat(n), d += n.length) : (e = e.concat(n)
                        .concat(s), d += n.length + s.length), e)), []);
                    return c && (c.start += o.length, c.end += o.length), {
                        kind: "method",
                        displayParts: o.concat(u)
                            .concat(a),
                        documentation: i,
                        activeParameterIndexRange: c,
                        tags: l
                    }
                }
            },
            321507: (e, t, n) => {
                "use strict";
                n.d(t, {
                    D: () => r
                });
                n(526451), n(32408), n(846250), n(132246), n(747158);
                const r = e => `${e}.js`
            },
            409619: (e, t, n) => {
                "use strict";
                n.d(t, {
                    YD: () => r,
                    K0: () => o
                });
                n(337718), n(998581), n(995188), n(880434);
                const r = "retoolScope",
                    o = "__NO_APIS"
            },
            995188: (e, t, n) => {
                "use strict";
                n.d(t, {
                    b$: () => r,
                    wM: () => o,
                    sn: () => a
                });
                n(911611);
                const r = "RetoolArrayWrapper",
                    o = "_isPlugin",
                    a = "_selector"
            },
            569888: (e, t, n) => {
                "use strict";
                n.d(t, {
                    B: () => s,
                    e: () => l
                });
                var r = n(292554),
                    o = n.n(r),
                    a = n(479627);
                const s = e => {
                        const t = {},
                            n = {};
                        return e && Object.entries(e)
                            .forEach((([e, r]) => {
                                r && (t[e] = !!r, "boolean" != typeof r && (n[`--code-editor-addons-${e}`] = r))
                            })), {
                            classesToApply: t,
                            variablesToSet: n
                        }
                    },
                    i = a.Z,
                    l = o()
                        .bind(i)
            },
            268855: (e, t, n) => {
                "use strict";
                n.d(t, {
                    z: () => a
                });
                var r = n(395740),
                    o = n(853374);
                const a = r.Qf.define([{
                    tag: o.pJ.keyword,
                    fontWeight: 700,
                    color: "var(--dark-purple)"
                }, {
                    tag: o.pJ.number,
                    color: "var(--dark-orange)"
                }, {
                    tag: o.pJ.comment,
                    color: "var(--lightest-gray)"
                }, {
                    tag: o.pJ.string,
                    color: "var(--green)"
                }, {
                    tag: o.pJ.propertyName,
                    color: "var(--dark-purple)"
                }, {
                    tag: o.pJ.operator,
                    color: "var(--dark-orange)"
                }, {
                    tag: o.pJ.meta,
                    color: "var(--medium-gray)"
                }, {
                    tag: o.pJ.link,
                    textDecoration: "underline"
                }, {
                    tag: o.pJ.heading,
                    textDecoration: "underline",
                    fontWeight: "bold"
                }, {
                    tag: o.pJ.emphasis,
                    fontStyle: "italic"
                }, {
                    tag: o.pJ.strong,
                    fontWeight: "bold"
                }, {
                    tag: o.pJ.strikethrough,
                    textDecoration: "line-through"
                }, {
                    tag: o.pJ.deleted,
                    color: "var(--dark-red)"
                }, {
                    tag: o.pJ.invalid,
                    color: "var(--red)"
                }, {
                    tag: o.pJ.className,
                    color: "var(--light-blue)"
                }, {
                    tag: o.pJ.definition(o.pJ.variableName),
                    color: "var(--always-black)"
                }, {
                    tag: o.pJ.local(o.pJ.variableName),
                    color: "var(--always-black)"
                }, {
                    tag: [o.pJ.atom, o.pJ.bool, o.pJ.url, o.pJ.contentSeparator, o.pJ.labelName],
                    color: "var(--dark-blue)"
                }, {
                    tag: [o.pJ.literal, o.pJ.inserted],
                    color: "var(--dark-green)"
                }, {
                    tag: [o.pJ.regexp, o.pJ.escape],
                    color: "var(--dark-orange)"
                }, {
                    tag: [o.pJ.typeName, o.pJ.namespace],
                    color: "var(--green)"
                }, {
                    tag: [o.pJ.special(o.pJ.variableName), o.pJ.macroName],
                    color: "var(--dark-green)"
                }])
            },
            125811: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K: () => a
                });
                var r = n(725777),
                    o = n(249527);
                const a = r.tk.theme({
                    "&.cm-editor": {
                        "-webkit-user-select": "auto",
                        backgroundColor: "#fff",
                        color: "rgba(0, 0, 0, 0.85)",
                        minWidth: 0,
                        lineStyle: "none",
                        fontVariant: "tabular-nums",
                        border: "1px solid #d9d9d9",
                        borderRadius: "4px",
                        transition: "box-shadow 0.15s ease-in-out",
                        "&:focus-within": {
                            borderColor: o.O9.lightestBlue,
                            borderRightWidth: "1px !important",
                            outline: "none !important"
                        },
                        "&:hover": {
                            transition: "all 200ms ease-in, border 200ms ease-in",
                            borderColor: o.O9.lightestBlue,
                            boxShadow: "0 0 0 2px rgba(24, 144, 255, 0.2)",
                            borderRightWidth: "1px !important",
                            outline: "none !important"
                        }
                    },
                    ".cm-focused": {
                        outline: "none !important"
                    },
                    ".cm-gutters": {
                        backgroundColor: o.O9.nearWhite,
                        color: o.O9.gray,
                        borderTopLeftRadius: "4px",
                        borderBottomLeftRadius: "4px",
                        borderRight: "none",
                        paddingLeft: 0
                    },
                    ".cm-gutter": {
                        backgroundColor: "transparent"
                    },
                    ".cm-foldGutter > .cm-gutterElement": {
                        display: "flex",
                        alignItems: "center"
                    },
                    '.cm-foldGutter > .cm-gutterElement span[title="Fold line"]': {
                        paddingBottom: "4px"
                    },
                    '.cm-foldGutter > .cm-gutterElement span[title="Unfold line"]': {
                        paddingBottom: "0"
                    },
                    ".cm-lineNumbers": {
                        fontSize: "11px",
                        minWidth: "22px",
                        fontFamily: "var(--monospace)",
                        color: "#8898aa"
                    },
                    ".cm-line": {
                        fontSize: "11px",
                        fontFamily: "var(--monospace)",
                        transition: "none"
                    },
                    ".cm-lintPoint": {
                        display: "none"
                    },
                    ".cm-tooltip": {
                        borderRadius: "3px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08) !important",
                        backgroundColor: "white !important",
                        pointerEvents: "auto",
                        border: "none !important",
                        outline: "1px solid var(--washed-gray) !important",
                        zIndex: 1e3
                    },
                    ".cm-foldPlaceholder": {
                        border: "1px solid var(--faint-gray)",
                        backgroundColor: "var(--fainter-gray)",
                        color: "var(--gray)",
                        padding: "0 2px 0 0"
                    },
                    ".cm-completionInfo": {
                        padding: "0px !important",
                        backgroundColor: "white !important",
                        pointerEvents: "auto",
                        zIndex: 1e3
                    },
                    ".cm-completionInfo-right": {
                        marginLeft: "8px"
                    },
                    ".cm-completionInfo-left": {
                        marginRight: "8px"
                    },
                    ".cm-tooltip-lint": {
                        backgroundColor: o.O9.white,
                        fontSize: "11px",
                        lineHeight: "16px",
                        fontFamily: "var(--monospace)",
                        padding: 0,
                        color: "rgba(0, 0, 0, 0.65)"
                    },
                    ".cm-diagnostic": {
                        marginLeft: "0.1px",
                        borderRadius: "inherit"
                    },
                    ".cm-diagnostic-error": {
                        backgroundColor: "var(--faint-red)",
                        borderLeft: "4px solid var(--red)"
                    },
                    ".cm-diagnostic-warning": {
                        backgroundColor: "var(--faint-yellow)",
                        borderLeft: "4px solid var(--yellow)"
                    },
                    ".cm-diagnostic-info": {
                        backgroundColor: "var(--faint-gray)",
                        borderLeft: "4px solid var(--gray)"
                    },
                    ".cm-diagnosticAction": {
                        display: "block",
                        margin: "4px 0",
                        cursor: "pointer",
                        backgroundColor: o.O9.white,
                        color: o.O9.black,
                        border: "1px solid #d9d9d9",
                        transition: "background-color 0.15s ease-in-out",
                        "&:hover": {
                            backgroundColor: o.O9.washedGray
                        }
                    },
                    ".cm-tooltip-autocomplete": {
                        transform: "translateX(-10px)",
                        borderRadius: "4px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
                        minWidth: "230px",
                        border: "1px solid #e8e8e8",
                        fontFamily: "var(--monospace)",
                        backgroundColor: "var(--always-white)",
                        padding: "0px"
                    },
                    ".cm-completionIcon": {
                        display: "none"
                    },
                    ".cm-completionLabel": {
                        fontSize: "11px",
                        fontFamily: "var(--monospace)",
                        color: "var(--dark-gray)",
                        lineHeight: "14px",
                        borderRadius: "0px"
                    },
                    ".cm-completionMatchedText": {
                        fontWeight: "bold",
                        textDecoration: "none"
                    },
                    ".cm-completionDetail": {
                        fontSize: "11px",
                        fontFamily: "var(--monospace)",
                        color: "var(--gray)",
                        lineHeight: "14px",
                        borderRadius: "0px",
                        fontStyle: "normal",
                        float: "right",
                        paddingRight: "8px"
                    },
                    ".cm-evaluation-error-open-bracket": {
                        background: "rgb(250,219,222, .4)",
                        color: "var(--light-red)",
                        borderRadius: "4px 0px 0px 4px"
                    },
                    ".cm-evaluation-error": {
                        background: "rgb(250,219,222, .4)"
                    },
                    ".cm-evaluation-error-close-bracket": {
                        background: "rgb(250,219,222, .4)",
                        color: "var(--light-red)",
                        borderRadius: "0px 4px 4px 0px"
                    },
                    ".cm-evaluation-success-open-bracket": {
                        background: "rgb(186,239,205, .4)",
                        color: "var(--green)",
                        borderRadius: "4px 0px 0px 4px"
                    },
                    ".cm-evaluation-success": {
                        background: "rgb(186,239,205, .4)"
                    },
                    ".cm-evaluation-success-close-bracket": {
                        background: "rgb(186,239,205, .4)",
                        color: "var(--green)",
                        borderRadius: "0px 4px 4px 0px"
                    },
                    ".cm-global-search-result-match": {
                        background: "rgb(129,194,248, .4)",
                        borderRadius: "2px"
                    },
                    '.cm-tooltip-autocomplete > ul > li[aria-selected="true"]': {
                        background: "var(--blue)",
                        color: "var(--always-white)",
                        "& .cm-completionLabel": {
                            background: "var(--blue)",
                            color: "var(--always-white)"
                        },
                        "& .cm-completionDetail": {
                            background: "var(--blue)",
                            color: "var(--always-white)",
                            opacity: .7
                        }
                    },
                    '.cm-tooltip-autocomplete > ul > li:hover:not([aria-selected="true"])': {
                        background: "var(--faint-blue)",
                        "& .cm-completionLabel": {
                            background: "var(--faint-blue)"
                        },
                        "& .cm-completionDetail": {
                            background: "var(--faint-blue)"
                        }
                    },
                    ".cm-diagnostic .cm-diagnostic-error .cm-diagnosticText": {
                        borderRadius: "4px"
                    }
                })
            },
            55848: (e, t, n) => {
                "use strict";
                n.d(t, {
                    x: () => o
                });
                var r = n(656739);
                const o = e => r.k.includes(e)
            },
            800625: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => m
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(488773),
                    i = n(557772),
                    l = n(608908),
                    c = n(573519);
                const d = e => r.createElement("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...e,
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("path", {
                    d: "M11.3124 4.6875L7.93741 4.6875M11.3124 4.6875L11.3124 8.06271M11.3124 4.6875L7.9372 8.06271",
                    stroke: "currentColor",
                    strokeWidth: "1.4875",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), r.createElement("path", {
                    d: "M3 6.5L3 3.5C3 2.67157 3.67157 2 4.5 2L12.5 2C13.3284 2 14 2.67157 14 3.5L14 11.5C14 12.3284 13.3284 13 12.5 13H9",
                    stroke: "currentColor",
                    strokeWidth: "1.4875",
                    strokeLinecap: "round"
                }), r.createElement("path", {
                    d: "M7 10.5C7 9.67157 6.32843 9 5.5 9H2.5C1.67157 9 1 9.67157 1 10.5V13.5C1 14.3284 1.67157 15 2.5 15H5.5C6.32843 15 7 14.3284 7 13.5V10.5Z",
                    fill: "currentColor"
                }));
                const u = n(514179)
                        .Z,
                    p = a()
                        .bind(u),
                    m = ({
                             selector: e,
                             selectedPluginId: t,
                             selectedCanvasPlugins: n,
                             selectedDatasource: o,
                             selected: a = !1,
                             onSelectClick: m,
                             onSelectMouseDown: g,
                             pluginType: h,
                             dropdownOverlay: f,
                             showSidebarDropdownMenu: v = !1,
                             showInspectInDebugModal: y = !1,
                             onInspectInDebugModal: b,
                             onInspectInDebugModalMouseDown: E,
                             pluginIcon: w,
                             hidePluginIcon: T = !1,
                             dropdownOpen: x,
                             setDropdownOpen: k
                         }) => {
                        const S = n?.includes(t) || t === o;
                        return r.createElement("div", {
                            className: p("header", {
                                dropdownShown: v && f
                            })
                        }, r.createElement("div", {
                            className: u.pluginId,
                            "data-testid": `StateHeader::${t}`
                        }, v && f && r.createElement(s.Lt, {
                            placement: "bottomLeft",
                            trigger: "click",
                            overlay: f,
                            visible: x,
                            onVisibleChange: k
                        }, r.createElement(i.Z, {
                            className: u.dropdownButton
                        }, r.createElement(s.JO, {
                            type: "hamburger",
                            className: u.dropdownIcon
                        }))), r.createElement("div", {
                            className: u.iconContainer
                        }, !T && w && r.createElement(w, {
                            pluginId: t,
                            className: u.icon
                        })), r.createElement("div", {
                            className: u.headerTextContainer
                        }, e ? e.join(".") : t), h && r.createElement("div", {
                            className: u.headerTypeContainer
                        }, `(${(0,c.n5)(h)})`)), a && r.createElement("div", {
                            className: p("actionButtonRow")
                        }, r.createElement(s.u, {
                            overlay: S ? "Selected" : "Select",
                            placement: y ? "top" : "bottom",
                            mouseEnterDelay: .2
                        }, r.createElement(i.Z, {
                            "data-testid": "StateHeader::SelectClick",
                            className: p("actionButton", {
                                selectedOnCanvas: S
                            }),
                            onClick: m,
                            onMouseDown: g
                        }, r.createElement(l.J, {
                            type: "SelectTarget"
                        }))), y && r.createElement(s.u, {
                            overlay: "Inspect in the Debug Modal",
                            placement: "top",
                            mouseEnterDelay: .2
                        }, r.createElement(i.Z, {
                            "data-testid": "StateHeader::DebugMenuClick",
                            className: p("actionButton", "lastActionButton"),
                            onClick: b,
                            onMouseDown: E
                        }, r.createElement(d, {
                            className: u.icon
                        })))))
                    }
            },
            694574: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => c
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(612522);
                const i = n(358812)
                        .Z,
                    l = a()
                        .bind(i),
                    c = ({
                             state: e,
                             pluginDocs: t,
                             onHover: n,
                             pluginPropertyToDependencyProperties: o = {},
                             pluginPropertyToDependentProperties: a = {},
                             currentHover: c,
                             onSetSelectedPluginId: d,
                             pluginType: u,
                             isCodeEditorTooltip: p = !1
                         }) => r.createElement("div", {
                        className: l("plugin", {
                            isCodeEditorTooltip: p
                        }),
                        "data-testid": `DebugTools::State_browser:${u}`
                    }, r.createElement("div", {
                        className: i.pluginData
                    }, r.createElement(s.Z, {
                        value: e,
                        hoverLabel: !0,
                        labelRendererDocs: t,
                        noRootKey: !0,
                        propertyDependencies: {
                            dependents: a,
                            dependencies: o
                        },
                        onHover: n,
                        collectionLimit: 1e3,
                        currentHover: c,
                        onClickDependencyPlugin: d,
                        pluginType: u
                    })))
            },
            573519: (e, t, n) => {
                "use strict";
                n.d(t, {
                    n5: () => i,
                    AB: () => u,
                    Be: () => m,
                    I: () => g,
                    AA: () => h,
                    y6: () => f,
                    LL: () => v,
                    by: () => y
                });
                var r = n(319672),
                    o = n(484570),
                    a = n(176235),
                    s = n(472992);
                const i = e => "GlobalWidget" === e ? "Module" : e.toLowerCase()
                        .includes("widget") ? (0, s.Qy)(e ?? "")
                        ?.name : (e ?? "")
                        .replace(/Query$/, "")
                        .replace(/Function$/, "Transformer"),
                    l = ({
                             selector: e,
                             pluginTemplate: t,
                             isMobileApp: n
                         }) => {
                        const r = u(e);
                        return (0, o.Z)({
                            propertyName: r,
                            pluginTemplate: t,
                            isMobileApp: n
                        })
                    },
                    c = e => 1 === e.length,
                    d = e => Array.isArray(e) ? e[0] : (0, a.ds)(e)[0],
                    u = e => {
                        let t;
                        return t = Array.isArray(e) ? e : (0, a.ds)(e), t = t.filter((e => "number" != typeof e)), t[t.length - 1]
                    },
                    p = (e, t) => e[0] === t[0],
                    m = (e, t) => {
                        const n = new Set(e.map((e => d(e))));
                        return new Set(t.filter((e => !n.has(e))))
                    },
                    g = ({
                             dependencyGraph: e,
                             pluginTemplate: t,
                             isMobileApp: n
                         }) => {
                        const r = t?.id;
                        return (r ? e.getObjectSelectors(r) : [])
                            .filter((e => !l({
                                selector: e,
                                pluginTemplate: t,
                                isMobileApp: n
                            })))
                            .reduce(((r, o) => {
                                const {
                                    pluginPropertyToDependencyProperties: s,
                                    dependencyPluginsToDependencyProperties: i,
                                    dependencyPropertyToPluginProperties: m
                                } = r;
                                return e.getDirectDependenciesOf(o)
                                    .filter((({
                                                  selector: e
                                              }) => !c(e) && !l({
                                        selector: e,
                                        pluginTemplate: t,
                                        isMobileApp: n
                                    }) && !p(o, e)))
                                    .forEach((({
                                                   selector: e
                                               }) => {
                                        const t = d(e);
                                        s[u(o)] = s[u(o)] ?? [], i[t] = i[t] ?? new Set, m[(0, a.ss)(e)] = m[(0, a.ss)(e)] ?? [], s[u(o)].push((0, a.ss)(e)), i[t].add((0, a.ss)(e)), m[(0, a.ss)(e)].push((0, a.ss)(o))
                                    })), r
                            }), {
                                pluginPropertyToDependencyProperties: {},
                                dependencyPluginsToDependencyProperties: {},
                                dependencyPropertyToPluginProperties: {}
                            })
                    },
                    h = ({
                             dependencyGraph: e,
                             pluginTemplate: t,
                             isMobileApp: n
                         }) => {
                        const r = t?.id;
                        return (r ? e.getObjectSelectors(r) : [])
                            .filter((e => !l({
                                selector: e,
                                pluginTemplate: t,
                                isMobileApp: n
                            })))
                            .reduce(((r, o) => {
                                const {
                                    pluginPropertyToDependentProperties: s,
                                    dependentPluginsToDependentProperties: i,
                                    dependentPropertyToPluginProperties: m
                                } = r;
                                return e.getDirectDependentsOf(o)
                                    .filter((({
                                                  selector: e
                                              }) => !c(e) && !l({
                                        selector: e,
                                        pluginTemplate: t,
                                        isMobileApp: n
                                    }) && !p(o, e)))
                                    .forEach((({
                                                   selector: e
                                               }) => {
                                        const t = d(e);
                                        s[u(o)] = s[u(o)] ?? [], i[t] = i[t] ?? new Set, m[(0, a.ss)(e)] = m[(0, a.ss)(e)] ?? [], s[u(o)].push((0, a.ss)(e)), i[t].add((0, a.ss)(e)), m[(0, a.ss)(e)].push((0, a.ss)(o))
                                    })), r
                            }), {
                                pluginPropertyToDependentProperties: {},
                                dependentPluginsToDependentProperties: {},
                                dependentPropertyToPluginProperties: {}
                            })
                    },
                    f = (e, t) => {
                        const n = Object.keys(e)
                            .map((n => {
                                const r = e[n];
                                return r?.has(t) ? n : void 0
                            }))
                            .filter((e => e));
                        return new Set(n)
                    },
                    v = (e, t) => (e[t] ?? [])
                        .reduce(((e, n) => {
                            const {
                                controllingPluginsToProperties: o,
                                controllingPropertyToPluginProperties: s
                            } = e, i = n.get("pluginId"), l = (0, a.ss)([t, (0, r.Xu)(n.get("event"))]), c = `${i}.${n.get("method")}()`;
                            return o[i] = o[i] ?? new Set, s[c] = s[c] ?? [], o[i].add(c), s[c].push(l), e
                        }), {
                            controllingPluginsToProperties: {},
                            controllingPropertyToPluginProperties: {}
                        }),
                    y = (e, t, n) => n.reduce(((n, o) => {
                        const {
                            controlledByPluginsToProperties: a,
                            controlledByPropertyToPluginProperties: s
                        } = n;
                        return e[o]?.map((e => {
                            if (e.get("pluginId") !== t) return;
                            const n = `${o} ${(0,r.Xu)(e.get("event")).toLowerCase()}`,
                                i = `${t}.${e.get("method")}()`;
                            a[o] = a[o] ?? new Set, s[n] = s[n] ?? [], a[o].add(n), s[n].push(i)
                        })), n
                    }), {
                        controlledByPluginsToProperties: {},
                        controlledByPropertyToPluginProperties: {}
                    })
            },
            992073: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var r = n(827378),
                    o = n(224617),
                    a = n(793399),
                    s = n(8848),
                    i = n(123011),
                    l = n(595646),
                    c = n(926810);
                const d = e => {
                    const {
                        shouldMakeWidgetVisible: t,
                        shouldScrollWidgetIntoView: n,
                        shouldOpenInspector: d
                    } = e ?? {}, u = (0, o.I0)(), p = (0, o.v9)(l.appTemplateSelector), m = (0, a.Z)((e => {
                        u((0, c.WE)({
                            widgetId: e,
                            shouldMakeWidgetVisible: t,
                            shouldScrollWidgetIntoView: n,
                            shouldOpenInspector: d
                        }))
                    })), g = (0, a.Z)((e => {
                        p.plugins.get(e) && u((0, i._)(e))
                    }));
                    return (0, r.useCallback)(((e, t) => {
                        const n = p.getPlugin(e);
                        if (!n) return;
                        const r = n.get("namespace");
                        r ? m(r.getNamespace()[0]) : (n.isWidget() ? m(e) : g(e), u((0, s.updateShouldFocusField)(t)))
                    }), [p])
                }
            },
            23228: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => E
                });
                var r = n(827378),
                    o = n(761492),
                    a = n(734838),
                    s = n(22710),
                    i = n(292554),
                    l = n.n(i),
                    c = n(723544),
                    d = n.n(c),
                    u = n(793399),
                    p = n(520048),
                    m = n(536289),
                    g = n(161557),
                    h = n(488773),
                    f = n(557772);
                const v = n(142013)
                        .Z,
                    y = {
                        top: {
                            cursor: "ns-resize"
                        },
                        topRight: {
                            cursor: "nesw-resize"
                        },
                        right: {
                            cursor: "ew-resize"
                        },
                        bottomRight: {
                            cursor: "nwse-resize"
                        },
                        bottom: {
                            cursor: "ns-resize"
                        },
                        bottomLeft: {
                            cursor: "nesw-resize"
                        },
                        left: {
                            cursor: "ew-resize"
                        },
                        topLeft: {
                            cursor: "nwse-resize"
                        }
                    },
                    b = l()
                        .bind(v),
                    E = ({
                             title: e,
                             closeButton: t,
                             draggable: n = !0,
                             onDragStop: i,
                             resizable: l = !0,
                             onResize: c,
                             onHide: E,
                             clampToWindow: w = !1,
                             children: T,
                             dragHandleClassName: x,
                             showDragHandle: k = !1,
                             showHeader: S = !0,
                             minWidth: C,
                             headerMinWidth: P,
                             minHeight: A,
                             maxWidth: N,
                             maxHeight: R,
                             defaultSize: I,
                             defaultPosition: {
                                 x: Z,
                                 y: M
                             } = {
                                 x: 0,
                                 y: 0
                             },
                             rightTitleAdornments: D,
                             dataAttributes: H = []
                         }) => {
                        const O = (0, p.Z)(),
                            [L, $] = (0, m.Z)(),
                            j = e => ({
                                height: d()(e.height, A ?? 0, R ?? e.height),
                                width: d()(e.width, C ?? 0, N ?? e.width)
                            }),
                            [W, F] = (0, r.useState)((() => I ? j(I) : void 0)),
                            _ = w && W ? {
                                x: W.width,
                                y: W.height
                            } : {
                                x: 30,
                                y: 30
                            },
                            B = L - _.x,
                            G = W ? -W.width + _.x : 0,
                            z = $ - _.y,
                            V = (0, u.Z)((e => ({
                                x: Math.round(d()(e.x, G, B)),
                                y: Math.round(d()(e.y, 0, z))
                            }))),
                            [U, J] = (0, r.useState)(V({
                                x: Z,
                                y: M
                            })),
                            K = P ? {
                                "--header-min-width": `${P}px`
                            } : {},
                            Q = P ? "headerMinWidth" : "",
                            Y = "string" == typeof e ? r.createElement("div", {
                                className: b("headerTitle", Q)
                            }, k && r.createElement(h.JO, {
                                className: v.dragHandle,
                                type: "drag-handle-alt"
                            }), r.createElement("span", null, e)) : e;
                        (0, r.useEffect)((() => {
                            J(V(U))
                        }), [L, $]), (0, r.useEffect)((() => {
                            J(V({
                                x: Z,
                                y: M
                            }))
                        }), [Z, M]);
                        const q = H.reduce(((e, t) => ({
                            ...e,
                            [t]: !0
                        })), {});
                        return r.createElement(o.Z, {
                            node: O?.current
                        }, r.createElement(s.N3, null, r.createElement(a.s, {
                            id: "DraggableResizableModal",
                            "data-testid": "DraggableResizableModal::Main",
                            ...q,
                            className: v.main,
                            size: W,
                            position: U,
                            minWidth: C,
                            minHeight: A,
                            maxWidth: N,
                            maxHeight: R,
                            dragHandleClassName: S ? v.headerContainer : x,
                            onDrag: e => {
                                e.preventDefault(), e.stopPropagation()
                            },
                            onClick: e => {
                                e.stopPropagation()
                            },
                            onResize: (e, t, n, r, o) => {
                                const a = V(o),
                                    s = j({
                                        height: n.offsetHeight,
                                        width: n.offsetWidth
                                    });
                                F(s), J(a), c?.(a, s)
                            },
                            onDragStop: (e, t) => {
                                const n = V({
                                    x: t.x,
                                    y: t.y
                                });
                                J(n), i?.(n)
                            },
                            resizeHandleStyles: y,
                            resizeHandleComponent: l ? {
                                bottomRight: r.createElement(g.NG, {
                                    className: v.dragIndicator
                                })
                            } : void 0,
                            disableDragging: !n,
                            enableResizing: l
                        }, r.createElement("div", {
                            className: b("innerContainer", Q),
                            style: K
                        }, S && r.createElement("div", {
                            className: b("headerContainer", Q)
                        }, r.createElement("div", {
                            className: b("header", Q)
                        }, r.createElement(h.JO, {
                            type: "drag-handle-alt",
                            className: v.dragHandle
                        }), Y), r.createElement("div", {
                            className: v.rightTitleContainer
                        }, D, t || r.createElement(f.Z, {
                            "data-testid": "DraggableResizeableModal::CloseButton",
                            onClick: E,
                            className: v.closeButton,
                            "aria-label": "Close"
                        }, r.createElement(g.bM, {
                            className: v.closeIcon
                        })))), T))))
                    }
            },
            895452: (e, t, n) => {
                "use strict";
                n.d(t, {
                    z: () => r
                });
                const r = (0, n(827378)
                    .createContext)(null)
            },
            946625: (e, t, n) => {
                "use strict";
                n.d(t, {
                    o: () => p
                });
                var r = n(827378),
                    o = n(224617),
                    a = n(291081),
                    s = n(793399),
                    i = n(477319),
                    l = n(528796),
                    c = n(595646),
                    d = n(895452);
                const u = (e, t) => {
                        const [n, o] = (0, r.useState)([e]), [a, s] = (0, r.useState)(0), i = (0, r.useCallback)((r => {
                            const i = 1 === r ? Math.min(a + 1, n.length - 1) : Math.max(a - 1, 0);
                            i !== a && (o((t => {
                                const n = [...t];
                                return n[a] = e, n
                            })), s(i), t(n[i]))
                        }), [e, n, a, t]);
                        return {
                            onSelectPreviousInputHistory: (0, r.useCallback)((() => {
                                i(1)
                            }), [i]),
                            onSelectNextInputHistory: (0, r.useCallback)((() => {
                                i(-1)
                            }), [i]),
                            onPushInputHistory: (0, r.useCallback)((() => {
                                o((t => {
                                    const n = [...t];
                                    return n[0] = e, n.unshift(""), n
                                })), s(0)
                            }), [e])
                        }
                    },
                    p = e => {
                        const {
                            children: t,
                            onClearError: n,
                            ...p
                        } = e, {
                            onSelectPreviousInputHistory: m,
                            onSelectNextInputHistory: g,
                            onPushInputHistory: h
                        } = u(e.inputValue, e.onInputChange), f = (0, s.Z)((e => {
                            (0, i.PM)("GPT Interacted", e)
                        })), v = (0, r.useMemo)((() => e.availableGPTResourceModes.find((({
                                                                                              resourceMode: t
                                                                                          }) => t === e.gptResourceMode))), [e.availableGPTResourceModes, e.gptResourceMode]), {
                            value: y,
                            toggle: b,
                            setTrue: E
                        } = (0, a.Z)(!0), w = (0, s.Z)((() => {
                            n?.(), E()
                        })), T = (0, o.v9)(l.bF), x = (0, o.v9)(c.isCurrentPlaygroundQueryEditableOnCurrentBranchSelector), k = T && !x;
                        return r.createElement(d.z.Provider, {
                            value: {
                                ...p,
                                areErrorDetailsVisible: y,
                                currentGPTResourceMode: v,
                                onErrorDetailsClicked: b,
                                onClearError: w,
                                onPushInputHistory: h,
                                onSelectNextInputHistory: g,
                                onSelectPreviousInputHistory: m,
                                onSendEvent: f,
                                isDisabled: k
                            }
                        }, t)
                    }
            },
            943879: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => D
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(793399),
                    i = n(810759),
                    l = n(375312),
                    c = n(488773);
                const d = n(818378)
                        .Z,
                    u = ({
                             children: e,
                             onClick: t
                         }) => r.createElement("div", {
                        onClick: t,
                        className: d.main
                    }, e);
                var p = n(895452),
                    m = n(459431),
                    g = n(461903),
                    h = n(920818);
                const f = n(616323)
                        .Z,
                    v = a()
                        .bind(f),
                    y = ({
                             children: e,
                             onClick: t,
                             onClose: n,
                             disabled: o,
                             testId: a,
                             menuItemRef: i,
                             tooltip: l
                         }) => {
                        const c = (0, r.useContext)(g.o),
                            d = (0, s.Z)((e => {
                                e.stopPropagation(), t?.(), c?.onClose?.(), n?.()
                            })),
                            u = r.createElement("div", {
                                ref: i,
                                className: v("main", {
                                    disabled: o
                                }),
                                role: "menuitem",
                                "aria-disabled": o,
                                "data-testid": a,
                                onClick: d
                            }, e);
                        return l ? r.createElement(h.Z, {
                            placement: "left",
                            title: l
                        }, u) : u
                    };
                const b = n(982349)
                        .Z,
                    E = a()
                        .bind(b),
                    w = ({
                             options: e,
                             onClickItem: t
                         }) => r.createElement(m.v, null, e.map((({
                                                                      value: e,
                                                                      key: n,
                                                                      displayName: o,
                                                                      description: a
                                                                  }) => r.createElement(y, {
                        key: n,
                        onClick: () => {
                            t(e)
                        }
                    }, r.createElement("div", {
                        className: E("menuItem")
                    }, r.createElement("div", {
                        className: E("menuItemName")
                    }, o), r.createElement("div", {
                        className: E("menuItemDescription")
                    }, a))))));
                var T = n(9342);
                const x = e => r.createElement("svg", {
                        width: "8",
                        height: "4",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e
                    }, r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.227.395A.828.828 0 0 0 6.05.298L4 2.064 1.95.298A.828.828 0 0 0 .867 1.553l2.48 2.135a1 1 0 0 0 1.304 0l2.48-2.135A.828.828 0 0 0 7.226.395Z",
                        fill: "currentColor"
                    })),
                    k = T.Z,
                    S = a()
                        .bind(k),
                    C = ({
                             isClickable: e,
                             options: t,
                             value: n
                         }) => r.createElement("div", {
                        className: S("main", {
                            clickable: e
                        })
                    }, r.createElement("div", {
                        className: S("value")
                    }, t.find((e => e.value === n))
                        ?.displayName), t.length > 1 && r.createElement(x, {
                        className: S("selectArrow")
                    }));
                const P = n(322799)
                        .Z,
                    A = a()
                        .bind(P),
                    N = ({
                             disabled: e,
                             onChange: t,
                             options: n,
                             value: o
                         }) => {
                        const [a, i] = (0, r.useState)(!1), l = (0, r.useRef)(null), c = n.length > 1 && !e, d = (0, s.Z)((() => {
                            c && i(!0)
                        })), u = (0, s.Z)((() => i(!1)));
                        return r.createElement("div", {
                            className: A("main"),
                            ref: l,
                            onFocus: d,
                            onBlur: u,
                            tabIndex: c ? 0 : void 0
                        }, r.createElement(C, {
                            isClickable: c,
                            options: n,
                            value: o
                        }), a && c && r.createElement("div", {
                            className: A("dropdown")
                        }, r.createElement(w, {
                            options: n,
                            onClickItem: e => {
                                t(e), i(!1)
                            }
                        })))
                    };
                var R = n(276523);
                const I = n(955397)
                        .Z,
                    Z = a()
                        .bind(I),
                    M = e => r.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        ...e
                    }, r.createElement("path", {
                        fill: "#B3B3B3",
                        d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14ZM7 1.5A5.5 5.5 0 1 0 12.5 7 5.51 5.51 0 0 0 7 1.5Z"
                    }), r.createElement("path", {
                        fill: "#B3B3B3",
                        d: "M7 7.25a.76.76 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75ZM7 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    })),
                    D = ({
                             explanation: e,
                             placeholderText: t,
                             warningTooltip: n,
                             promptText: o
                         }) => {
                        const {
                            areErrorDetailsVisible: a,
                            availableGPTResourceModes: d,
                            errorMessage: m,
                            gptResourceMode: g,
                            inputValue: h,
                            isSubmitting: f,
                            onCancelPrompt: v,
                            onClearError: y,
                            onErrorDetailsClicked: b,
                            onInputChange: E,
                            onSelectNextInputHistory: w,
                            onSelectPreviousInputHistory: T,
                            onSubmitPrompt: x,
                            onToggleAssistant: k,
                            setGPTResourceMode: S,
                            hasResponse: C
                        } = (0, i.Z)(p.z), P = (0, r.useRef)(null), A = (0, r.useRef)(null), D = !!m, H = f || C && !D, O = (0, l.Z)(H), L = r.createRef();
                        (0, r.useEffect)((() => {
                            O && !H && P.current?.focus()
                        }), [O, H]), (0, r.useEffect)((() => (A.current = document.activeElement, H ? L.current?.focus() : P.current?.focus(), () => {
                            A.current?.focus?.()
                        })), []), (0, r.useEffect)((() => {
                            H ? L.current?.focus() : P.current?.focus()
                        }), [H]);
                        const $ = (0, s.Z)((() => {
                                x(), L.current?.focus()
                            })),
                            j = (0, s.Z)((e => {
                                "Enter" === e.key && $(), "Escape" === e.key && (f || D ? (v(), D && y?.(), P.current?.focus()) : k())
                            })),
                            W = (0, s.Z)((e => {
                                switch (e.key) {
                                    case "ArrowUp":
                                        e.preventDefault(), T();
                                        break;
                                    case "ArrowDown":
                                        e.preventDefault(), w()
                                }
                            })),
                            F = (0, s.Z)((e => E(e.target.value))),
                            _ = (0, r.useMemo)((() => d.map((({
                                                                  displayName: e,
                                                                  description: t,
                                                                  resourceMode: n
                                                              }) => ({
                                description: t,
                                displayName: e,
                                key: n,
                                value: n
                            })))), [d]),
                            B = !e;
                        return r.createElement("div", {
                            className: Z("main")
                        }, r.createElement("div", {
                            className: Z("promptContainer")
                        }, B ? r.createElement(r.Fragment, null, r.createElement(N, {
                            disabled: H,
                            onChange: e => S(e),
                            options: _,
                            value: g
                        }), o ? r.createElement("div", {
                            className: I.promptText
                        }, o) : r.createElement("input", {
                            autoComplete: "off",
                            className: Z("promptInput"),
                            "data-testid": "GPTPrompt::Input",
                            disabled: H,
                            id: "promptInput",
                            onChange: F,
                            onKeyDown: W,
                            onKeyUp: j,
                            placeholder: t,
                            ref: P,
                            type: "text",
                            value: h
                        })) : r.createElement("div", {
                            className: Z("explanation")
                        }, e), r.createElement("div", {
                            className: Z("inputRightSide")
                        }, !!m && r.createElement(u, {
                            onClick: b
                        }, a ? "Hide details" : "Show details"), r.createElement("div", {
                            className: Z("iconContainer", {
                                hidden: !B && !f
                            })
                        }, n && r.createElement(c.u, {
                            title: n
                        }, r.createElement(M, null)), r.createElement(R.y, {
                            onClick: f ? v : $,
                            onKeyUp: j,
                            ref: L,
                            testId: "GPTPrompt::ActionButton",
                            type: f ? "cancel" : "submit"
                        })))))
                    }
            },
            628532: (e, t, n) => {
                "use strict";
                n.d(t, {
                    C: () => u
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(810759),
                    i = n(895452),
                    l = n(276523);
                const c = n(739102)
                        .Z,
                    d = a()
                        .bind(c),
                    u = ({
                             codeDiff: e,
                             enableBackdropScrolling: t,
                             gptResponse: n,
                             inputDropdown: o,
                             isQueryEmpty: a,
                             placeholder: c,
                             queryAssistant: u,
                             queryAssistantToggle: p
                         }) => {
                        const {
                            areErrorDetailsVisible: m,
                            errorMessage: g,
                            isAssistantVisible: h,
                            onClearError: f,
                            onToggleAssistant: v
                        } = (0, s.Z)(i.z), y = r.useCallback((e => {
                            e.stopPropagation()
                        }), []), b = r.useCallback((e => {
                            "Escape" === e.key && f()
                        }), [f]);
                        return r.createElement("div", {
                            className: d("main", {
                                interactable: h && !t
                            }),
                            onClick: v
                        }, (h && e) ?? null, (a && c) ?? null, h && r.createElement("div", {
                            className: d("container")
                        }, g && m ? r.createElement("div", {
                            className: d("errorWrapper"),
                            onClick: y,
                            "data-testid": "GPTPrompt::ErrorMessage"
                        }, r.createElement("div", null, g), r.createElement(l.y, {
                            onClick: f,
                            type: "cancel",
                            onKeyUp: b
                        })) : null, r.createElement("div", {
                            className: d("inputWrapper"),
                            onClick: y
                        }, r.createElement("div", {
                            className: d("queryAssistant")
                        }, u), g ? null : r.createElement(r.Fragment, null, r.createElement("div", {
                            className: d("resultsWrapper"),
                            "data-testid": "GPTPrompt::ResultsWrapper"
                        }, h ? n : null), o && r.createElement("div", {
                            className: d("resultsWrapper"),
                            "data-testid": "GPTPrompt::InputDropdownWrapper"
                        }, h ? o : null)))), r.createElement("div", {
                            className: d("standaloneToggle"),
                            onClick: y
                        }, p))
                    }
            },
            276523: (e, t, n) => {
                "use strict";
                n.d(t, {
                    y: () => c
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o);
                const s = e => r.createElement("svg", {
                    width: "12",
                    height: "12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e
                }, r.createElement("path", {
                    d: "M11.5 2.5h.5a.5.5 0 0 0-.5-.5v.5Zm0 5V8a.5.5 0 0 0 .5-.5h-.5ZM.646 7.146a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L1.707 7.5l2.829-2.828a.5.5 0 1 0-.708-.708L.646 7.146ZM9 2a.5.5 0 0 0 0 1V2Zm2 .5v5h1v-5h-1Zm.5 4.5H1v1h10.5V7Zm0-5H9v1h2.5V2Z",
                    fill: "currentColor"
                }));
                const i = n(226584)
                        .Z,
                    l = a()
                        .bind(i),
                    c = (0, r.forwardRef)((({
                                                onClick: e,
                                                onKeyUp: t,
                                                testId: n,
                                                type: o
                                            }, a) => r.createElement("div", {
                        className: l({
                            cancelButton: "cancel" === o,
                            enterLogoWrapper: "submit" === o
                        }),
                        role: "button",
                        onClick: e,
                        tabIndex: 0,
                        onKeyUp: t,
                        ref: a,
                        "data-testid": n
                    }, "cancel" === o ? "Esc" : r.createElement(s, null))))
            },
            51508: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E: () => l
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o);
                const s = n(43182)
                        .Z,
                    i = a()
                        .bind(s),
                    l = () => r.createElement("div", {
                        className: i("main"),
                        "data-testid": "GPTPrompt::Spinner"
                    }, r.createElement("div", {
                        className: i("spinner")
                    }), r.createElement("div", {
                        className: i("spinnerCutout")
                    }))
            },
            118542: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => y
                });
                var r = n(827378),
                    o = n(399747),
                    a = n(292554),
                    s = n.n(a),
                    i = n(321427),
                    l = n(793399),
                    c = n(810759),
                    d = n(483430),
                    u = n(920818),
                    p = n(895452),
                    m = n(827714),
                    g = n(51508),
                    h = n(970167);
                const f = n(838312)
                        .Z,
                    v = s()
                        .bind(f),
                    y = () => {
                        const {
                            isAssistantVisible: e,
                            isSubmitting: t,
                            onToggleAssistant: n
                        } = (0, c.Z)(p.z), a = (0, l.Z)((e => {
                            if ("TOGGLE" === e) n()
                        })), s = r.createElement(m.Z, {
                            keys: (0, i.ZX)("GPT_QUERY_ASSISTANT", "TOGGLE")
                        });
                        return r.createElement(r.Fragment, null, r.createElement(o.Shortcuts, {
                            alwaysFireHandler: !0,
                            global: !0,
                            handler: a,
                            isolate: !0,
                            name: "GPT_QUERY_ASSISTANT",
                            targetNodeSelector: "body"
                        }), r.createElement(d.Z, {
                            type: "ghost",
                            className: v("main", {
                                isSubmitting: t
                            }),
                            onClick: n,
                            "data-testid": "GPTQueryAssistant::Toggle"
                        }, r.createElement(u.Z, {
                            title: e ? r.createElement(r.Fragment, null, "Close Ask AI ", s) : r.createElement(r.Fragment, null, "Ask AI ", s),
                            placement: "topLeft"
                        }, t ? r.createElement(g.E, null) : r.createElement(h.g, {
                            className: v("icon")
                        }))))
                    }
            },
            867976: (e, t, n) => {
                "use strict";
                n.d(t, {
                    n: () => p
                });
                var r = n(827378),
                    o = n(399747),
                    a = n(321427),
                    s = n(459431),
                    i = n(814098),
                    l = n(793399),
                    c = n(810759),
                    d = n(196781),
                    u = n(895452);
                const p = ({
                               extraMenuItems: e
                           }) => {
                    const {
                        hasResponse: t,
                        onAcceptResponse: n,
                        onInputChange: p,
                        onPushInputHistory: m,
                        onRejectResponse: g,
                        setGPTResourceMode: h,
                        shouldCloseOnAccept: f,
                        onToggleAssistant: v
                    } = (0, c.Z)(u.z), y = (0, r.useRef)(null);
                    (0, r.useEffect)((() => {
                        t && y.current?.focus()
                    }), [t]);
                    const b = (0, l.Z)((() => {
                            m(), p(""), h(null)
                        })),
                        E = (0, l.Z)((async () => {
                            await n(), b(), f && v()
                        })),
                        w = (0, l.Z)((async () => {
                            await g(), b()
                        })),
                        T = (0, l.Z)((e => {
                            switch (e) {
                                case "ACCEPT_SUGGESTION":
                                    E();
                                    break;
                                case "REJECT_SUGGESTION":
                                    w()
                            }
                        }));
                    return t ? r.createElement(o.Shortcuts, {
                        alwaysFireHandler: !0,
                        global: !0,
                        handler: T,
                        isolate: !0,
                        name: "GPT_QUERY_ASSISTANT",
                        stopPropagation: !0,
                        targetNodeSelector: "body"
                    }, r.createElement(s.v, null, r.createElement(i.s, {
                        icon: r.createElement(d.y, {
                            type: "AICheck"
                        }),
                        label: (0, a.ZX)("GPT_QUERY_ASSISTANT", "ACCEPT_SUGGESTION"),
                        onClick: E,
                        menuItemRef: y
                    }, "Accept"), r.createElement(i.s, {
                        icon: r.createElement(d.y, {
                            type: "AITrash"
                        }),
                        label: (0, a.ZX)("GPT_QUERY_ASSISTANT", "REJECT_SUGGESTION"),
                        onClick: w
                    }, "Reject"), e)) : null
                }
            },
            970167: (e, t, n) => {
                "use strict";
                n.d(t, {
                    g: () => o
                });
                var r = n(827378);
                const o = e => r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "none",
                    ...e
                }, r.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M9 2a1 1 0 0 1-.5.866V4H11a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1v1h1v1H5v-1h1v-1H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.5V2.866A1 1 0 1 1 9 2ZM5.5 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 9V8h4v1H6Z",
                    clipRule: "evenodd"
                }))
            },
            46726: (e, t, n) => {
                "use strict";
                n.d(t, {
                    N: () => r,
                    i: () => o
                });
                const r = "Write a sample prompt",
                    o = {
                        edit: {
                            resourceMode: "edit",
                            displayName: "Edit",
                            description: "Change existing code from a prompt",
                            isSelectable: ({
                                               query: e
                                           }) => !!e,
                            shouldShowContinueControl: !1,
                            shouldShowDiffControls: !0,
                            shouldSubmitOnSchemaLoad: !0,
                            type: "prompt"
                        },
                        explain: {
                            resourceMode: "explain",
                            displayName: "Explain",
                            description: "Add comments to explain the query",
                            isSelectable: ({
                                               query: e
                                           }) => !!e,
                            shouldShowContinueControl: !1,
                            shouldShowDiffControls: !0,
                            shouldSubmitOnSchemaLoad: !0,
                            textStates: {
                                pending: "AI is explaining...",
                                fulfilled: "Comments added to explain the query"
                            },
                            type: "action"
                        },
                        fix: {
                            resourceMode: "fix",
                            displayName: "Fix",
                            description: "Find and fix errors",
                            isSelectable: ({
                                               query: e
                                           }) => !!e,
                            shouldShowContinueControl: !0,
                            shouldShowDiffControls: !0,
                            shouldSubmitOnSchemaLoad: !0,
                            textStates: ({
                                             mostRecentResponse: e
                                         }) => ({
                                pending: "AI is finding and fixing errors...",
                                fulfilled: "nothingToBeDone" === e?.subtype ? "No code errors found" : "Errors fixed"
                            }),
                            type: "action"
                        },
                        generate: {
                            resourceMode: "generate",
                            displayName: "Generate",
                            description: "",
                            isSelectable: ({
                                               query: e
                                           }) => !e,
                            shouldShowContinueControl: !1,
                            shouldShowDiffControls: !1,
                            shouldSubmitOnSchemaLoad: !0,
                            type: "prompt"
                        },
                        writeAPrompt: {
                            resourceMode: "writeAPrompt",
                            displayName: "Generate",
                            description: "",
                            isSelectable: () => !1,
                            shouldShowContinueControl: !1,
                            shouldShowDiffControls: !1,
                            shouldSubmitOnSchemaLoad: !1,
                            type: "legacyAction"
                        }
                    }
            },
            790581: (e, t, n) => {
                "use strict";
                n.d(t, {
                    W: () => c
                });
                var r = n(827378),
                    o = n(801031),
                    a = n(426092),
                    s = n.n(a),
                    i = (n(560396), n(488773));
                const l = n(152504)
                        .Z,
                    c = e => r.createElement("div", {
                        className: "schema-column-flex schema-column"
                    }, r.createElement("span", {
                        className: "column-name-container " + (e.column?.indices ? "has-indices" : "")
                    }, r.createElement("span", {
                        title: e.columnName,
                        className: "truncate column-name"
                    }, s()(e.columnName, {
                        length: 44
                    })), "regular_column" !== e.columnType && r.createElement(i.u, {
                        placement: "topLeft",
                        title: `This column has ${"primary_key"===e.columnType?"a unique index":"an index"}. Queries that use this column may be faster than they otherwise would be.`
                    }, r.createElement(o.Z, {
                        className: "column-index-icon",
                        type: "thunderbolt",
                        theme: "primary_key" === e.columnType ? "filled" : "outlined"
                    }))), e.column && r.createElement("span", {
                        title: e.column.data_type,
                        className: l.dataTypeTag
                    }, s()(e.column.data_type, {
                        length: 11
                    })))
            },
            622483: (e, t, n) => {
                "use strict";
                n.d(t, {
                    T: () => u,
                    F: () => p
                });
                var r = n(827378),
                    o = n(194271),
                    a = n(161320),
                    s = n.n(a),
                    i = n(499937),
                    l = n(488773),
                    c = n(355410);
                const d = n(854619)
                    .Z;

                function u(e) {
                    return "mongodb" === e ? "collections" : "grpc" === e ? "services" : "tables"
                }
                const p = ({
                               virtualizedList: e,
                               filteredAndSortedTableNames: t,
                               collapsedColumns: n,
                               setCollapsedColumns: a,
                               filteredSchema: p,
                               shouldShowRefetchButton: m,
                               shouldShowLimitExceeded: g,
                               shouldShowSubCategories: h = !0,
                               shouldShowCopyTable: f = !0,
                               tablesUsedByQuery: v,
                               tablesNotUsedByQuery: y,
                               resourceType: b,
                               selectedSchemaMetadata: E,
                               isQueryEditorVertical: w,
                               isFullHeight: T
                           }) => {
                    const x = (e, t) => {
                            if (h) {
                                const n = u(e);
                                if (v.length > 0 && v[0] === t) return {
                                    sectionTitle: `Referenced ${n}`,
                                    shouldShowTooltip: !0
                                };
                                if (y.length > 0 && y[0] === t) return {
                                    sectionTitle: `All ${n}`,
                                    shouldShowTooltip: 0 === v.length
                                }
                            }
                            return {
                                sectionTitle: null,
                                shouldShowTooltip: !1
                            }
                        },
                        k = r.createElement("div", {
                            className: d.infoTooltipTitleContainer
                        }, m && r.createElement("div", null, `Schema fetched ${s()(E.timestamp).fromNow()}.`), g && r.createElement("div", null, `This schema may be incomplete. Retool fetches the first ${E.limit} ${u(b)} in your ${i.t[b].label} database, sorted alphabetically.`), g && i.ig && r.createElement("div", null, "You can increase the limit by changing the 'DATABASE_SCHEMA_QUERY_LIMIT' environment variable."));
                    return r.createElement("div", {
                        className: `${d.autosizerContainer} ${T&&d.fullHeight} ${w&&d.queryEditorVertical}`
                    }, r.createElement(o.qj, null, (s => r.createElement(o.aV, {
                        ref: e,
                        scrollToAlignment: "start",
                        width: s.width,
                        height: s.height,
                        rowHeight: e => {
                            const r = t[e.index],
                                {
                                    sectionTitle: o
                                } = x(b, r),
                                a = 24 + (o ? 32 : 0);
                            if (n[r]) return a;
                            return 24 * Object.keys(p[r])
                                .length + a
                        },
                        rowCount: Object.keys(p)
                            .length,
                        rowRenderer: ({
                                          index: o,
                                          style: s
                                      }) => {
                            const i = t[o],
                                {
                                    sectionTitle: u,
                                    shouldShowTooltip: h
                                } = x(b, i);
                            return r.createElement("div", {
                                key: o,
                                style: s
                            }, u && r.createElement("div", {
                                className: d.schemaSectionTitleContainer
                            }, r.createElement("div", {
                                className: d.schemaSectionTitleLeft
                            }, r.createElement("div", {
                                className: d.schemaSectionTitle
                            }, u), h && (g || m) && r.createElement(l.u, {
                                placement: "top",
                                title: k
                            }, r.createElement(l.JO, {
                                type: "tooltip",
                                className: "washed-gray hover-lightest-gray ml4"
                            })))), r.createElement(c.p, {
                                key: i,
                                shouldShowCopyTable: f,
                                onTableNameClick: () => {
                                    a({
                                        ...n,
                                        [i]: !n[i]
                                    }), e.current?.recomputeRowHeights(), e.current?.forceUpdate()
                                },
                                collapsed: n[i],
                                tableName: i,
                                table: p[i]
                            }))
                        },
                        style: {
                            padding: "0 10px 10px 12px"
                        }
                    }))))
                }
            },
            355410: (e, t, n) => {
                "use strict";
                n.d(t, {
                    p: () => g,
                    A: () => h
                });
                var r = n(827378),
                    o = n(292554),
                    a = n.n(o),
                    s = n(579079),
                    i = n(488773),
                    l = n(196781),
                    c = n(161557),
                    d = n(790581);
                const u = n(499574)
                        .Z,
                    p = a()
                        .bind(u),
                    m = e => (0, r.useMemo)((() => {
                        const t = e || {},
                            n = Object.keys(t),
                            r = [],
                            o = [],
                            a = [];
                        n.forEach((e => {
                            const n = t[e];
                            if (n?.indices) {
                                !!n.indices.find((e => e.is_unique && !e.with_columns.length)) ? r.push(e) : o.push(e)
                            }
                            else a.push(e)
                        }));
                        const s = [];
                        return r.sort()
                            .forEach((e => s.push({
                                name: e,
                                type: "index"
                            }))), o.sort()
                            .forEach((e => s.push({
                                name: e,
                                type: "primary_key"
                            }))), a.sort()
                            .forEach((e => s.push({
                                name: e,
                                type: "regular_column"
                            }))), s
                    }), [e]),
                    g = e => {
                        const [t, n] = (0, r.useState)(!1), o = m(e.table);
                        return r.createElement("div", null, r.createElement("div", {
                            onClick: t ? () => {} : e.onTableNameClick,
                            className: "table-name flex items-center " + (e.collapsed ? "collapsed-table" : "expanded-table")
                        }, r.createElement(l.y, {
                            type: e.collapsed ? "IconCaretRightSolid" : "IconCaretDownSolid",
                            className: p("icon")
                        }), r.createElement("span", {
                            title: e.tableName,
                            className: "label truncate"
                        }, e.tableName), e.shouldShowCopyTable && r.createElement(i.zx, {
                            type: "ghost",
                            className: "copy-button",
                            onMouseEnter: () => {
                                n(!0)
                            },
                            onMouseLeave: () => {
                                n(!1)
                            },
                            onMouseDown: () => (0, s.Zl)(e.tableName)
                        }, r.createElement(i.u, {
                            title: "Copy table name",
                            placement: "topLeft",
                            mouseEnterDelay: .5
                        }, r.createElement(c.vU, {
                            className: "icon"
                        })))), r.createElement("div", {
                            className: "schema-table",
                            style: {
                                visibility: e.collapsed ? "collapse" : "inherit",
                                opacity: e.collapsed ? 0 : 1
                            }
                        }, !e.collapsed && r.createElement("div", {
                            className: "schema-columns"
                        }, o.map((({
                                       name: t,
                                       type: n
                                   }) => r.createElement(d.W, {
                            key: t,
                            column: e.table[t],
                            columnName: t,
                            columnType: n
                        }))))))
                    },
                    h = ({
                             name: e,
                             table: t
                         }) => {
                        const n = m(t)
                            .find((t => t.name === e));
                        return n ? r.createElement("div", {
                            className: "schema-table"
                        }, r.createElement("div", {
                            className: "schema-columns"
                        }, r.createElement(d.W, {
                            key: e,
                            column: t[e],
                            columnName: e,
                            columnType: n.type
                        }))) : null
                    }
            },
            425060: e => {
                function t(e) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                t.keys = () => [], t.resolve = t, t.id = 425060, e.exports = t
            },
            526451: e => {
                "use strict";
                e.exports = "// grabbed from https://github.com/TypeStrong/tscs/blob/master/lib/node_modules/TypeScript/bin/lib.dom.d.ts\ninterface Console {\n  info(message?: any, ...optionalParams: any[]): void\n  warn(message?: any, ...optionalParams: any[]): void\n  error(message?: any, ...optionalParams: any[]): void\n  log(message?: any, ...optionalParams: any[]): void\n  profile(reportName?: string): void\n  assert(test?: boolean, message?: string, ...optionalParams: any[]): void\n  msIsIndependentlyComposed(element: Element): boolean\n  clear(): void\n  dir(value?: any, ...optionalParams: any[]): void\n  profileEnd(): void\n  count(countTitle?: string): void\n  groupEnd(): void\n  time(timerName?: string): void\n  timeEnd(timerName?: string): void\n  trace(): void\n  group(groupTitle?: string): void\n  dirxml(value: any): void\n  debug(message?: string, ...optionalParams: any[]): void\n  groupCollapsed(groupTitle?: string): void\n  select(element: Element): void\n}\n\ndeclare var console: Console\n"
            },
            846250: e => {
                "use strict";
                e.exports = "// It's important that the selector is listed first, so that it doesn't get truncated in the type hint\ntype RetoolArrayWrapper<selector, T extends Readonly<Array<any>>, L = number> = Omit<T, 'length'> & {\n  length: L\n  selector: selector\n}\n"
            },
            32408: e => {
                "use strict";
                e.exports = "import './retoolScope'\nimport './retoolUtils'\nimport './externalLibraries'\n"
            },
            132246: e => {
                "use strict";
                e.exports = "// retool scope file\n"
            },
            747158: e => {
                "use strict";
                e.exports = "// retool utils file\n"
            },
            157331: () => {},
            445842: () => {},
            893694: () => {},
            470533: () => {},
            872651: () => {},
            690868: () => {},
            742993: () => {}
        }
    ]);
//# sourceMappingURL=https://retoolsentrysourcemaps-secondary.z5.web.core.windows.net/94934.a2408fcd763088fa950d.js.map
