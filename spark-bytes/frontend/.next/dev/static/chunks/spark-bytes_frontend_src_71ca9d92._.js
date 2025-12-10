(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/lib/useAdminGuard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useAdminGuard.ts
__turbopack_context__.s([
    "useAdminGuard",
    ()=>useAdminGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useAdminGuard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "ae022128d3b283830b06b6d63f1376742ac99ca8b2c3d620bc7f63b43f5acd89") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae022128d3b283830b06b6d63f1376742ac99ca8b2c3d620bc7f63b43f5acd89";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== router) {
        t0 = ({
            "useAdminGuard[useEffect()]": ()=>{
                const checkAccess = async function checkAccess() {
                    setLoading(true);
                    const { data: authData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    const user = authData?.user;
                    if (!user) {
                        router.push("/login");
                        return;
                    }
                    const { data: profile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("role").eq("id", user.id).maybeSingle();
                    if (error) {
                        console.error("Profile loading error:", error);
                        router.push("/login");
                        return;
                    }
                    if (!profile) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").insert([
                            {
                                id: user.id,
                                email: user.email,
                                role: "user"
                            }
                        ]);
                        router.push("/request_access");
                        return;
                    }
                    if (profile.role !== "admin") {
                        router.push("/request_access");
                        return;
                    }
                    setAuthorized(true);
                    setLoading(false);
                };
                checkAccess();
            }
        })["useAdminGuard[useEffect()]"];
        t1 = [
            router
        ];
        $[1] = router;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== authorized || $[5] !== loading) {
        t2 = {
            loading,
            authorized
        };
        $[4] = authorized;
        $[5] = loading;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_s(useAdminGuard, "XYMqtAOqfwFRK43SXKvRxJq/qwk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventOrganizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/useAdminGuard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function EventOrganizer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "647d4378e130db2df608f343fa3c9732aff79ed19f6a31cbc29f25e154965a03") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "647d4378e130db2df608f343fa3c9732aff79ed19f6a31cbc29f25e154965a03";
    }
    const { loading, authorized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminGuard"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [rsvps, setRsvps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== authorized) {
        t1 = ({
            "EventOrganizer[useEffect()]": ()=>{
                if (!authorized) {
                    return;
                }
                const loadRSVPs = async function loadRSVPs() {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("name, food_item, quantity");
                    if (error) {
                        console.error("Error loading RSVPs:", error);
                    } else {
                        setRsvps(data || []);
                    }
                };
                loadRSVPs();
            }
        })["EventOrganizer[useEffect()]"];
        t2 = [
            authorized
        ];
        $[2] = authorized;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (loading) {
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Checking access…"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 63,
                columnNumber: 12
            }, this);
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    if (!authorized) {
        return null;
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-6 text-center text-gray-800",
            children: "Event Sign-Up Overview"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-4 border-b font-semibold",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                        lineNumber: 82,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-4 border-b font-semibold",
                        children: "Food Type"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                        lineNumber: 82,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-3 px-4 border-b font-semibold",
                        children: "Amount"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                        lineNumber: 82,
                        columnNumber: 166
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 82,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== rsvps) {
        t5 = rsvps.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4 border-b text-center",
                colSpan: 3,
                children: "No RSVPs yet."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 89,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 89,
            columnNumber: 31
        }, this) : rsvps.map(_EventOrganizerRsvpsMap);
        $[8] = rsvps;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex-grow px-8 py-12",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full text-left text-gray-800",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: t5
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                                lineNumber: 97,
                                columnNumber: 205
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                        lineNumber: 97,
                        columnNumber: 147
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                    lineNumber: 97,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                    lineNumber: 105,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                    lineNumber: 105,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                    lineNumber: 105,
                    columnNumber: 253
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_s(EventOrganizer, "8imFtHA/VEHB9Hmw6Jr/OT67DT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminGuard"]
    ];
});
_c = EventOrganizer;
function _EventOrganizerRsvpsMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4 border-b",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 121,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4 border-b",
                children: item.food_item
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 121,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-3 px-4 border-b",
                children: item.quantity
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
                lineNumber: 121,
                columnNumber: 133
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/event_organizer/page.tsx",
        lineNumber: 121,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EventOrganizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_71ca9d92._.js.map