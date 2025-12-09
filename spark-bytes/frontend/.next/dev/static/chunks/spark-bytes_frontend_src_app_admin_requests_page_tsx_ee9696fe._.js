(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminRequestsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminRequestsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "e06095a02bb030022e6f90c14e80da12132f3c6110aed3c0b86c9485e2251bad") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e06095a02bb030022e6f90c14e80da12132f3c6110aed3c0b86c9485e2251bad";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    let t2;
    if ($[2] !== router) {
        t1 = ({
            "AdminRequestsPage[useEffect()]": ()=>{
                const checkAdmin = async function checkAdmin() {
                    const { data: auth } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    const user = auth?.user;
                    if (!user) {
                        router.push("/login");
                        return;
                    }
                    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("role").eq("id", user.id).maybeSingle();
                    if (!profile || profile.role !== "admin") {
                        router.push("/request_access");
                        return;
                    }
                    setIsAdmin(true);
                };
                checkAdmin();
            }
        })["AdminRequestsPage[useEffect()]"];
        t2 = [
            router
        ];
        $[2] = router;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = async function loadRequests() {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("admin_requests_with_profiles").select("*").order("requested_at", {
                ascending: false
            });
            if (error) {
                console.error("Error loading requests:", error);
                return;
            }
            if (!data) {
                return;
            }
            setRequests(data.map(_AdminRequestsPageLoadRequestsDataMap));
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const loadRequests = t3;
    let t4;
    let t5;
    if ($[6] !== isAdmin) {
        t4 = ({
            "AdminRequestsPage[useEffect()]": ()=>{
                if (isAdmin) {
                    loadRequests();
                }
            }
        })["AdminRequestsPage[useEffect()]"];
        t5 = [
            isAdmin
        ];
        $[6] = isAdmin;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = async function updateStatus(id, newStatus) {
            const { data: reqRow } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("admin_requests").select("user_id").eq("id", id).maybeSingle();
            if (!reqRow) {
                return alert("Unable to load request.");
            }
            const userId = reqRow.user_id;
            const { error: statusErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("admin_requests").update({
                status: newStatus
            }).eq("id", id);
            if (statusErr) {
                alert(statusErr.message);
                return;
            }
            if (newStatus === "approved") {
                const { error: roleErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").update({
                    role: "admin"
                }).eq("id", userId);
                if (roleErr) {
                    alert(roleErr.message);
                    return;
                }
            }
            loadRequests();
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const updateStatus = t6;
    let t7;
    if ($[10] !== filter || $[11] !== requests) {
        t7 = filter === "all" ? requests : requests.filter({
            "AdminRequestsPage[requests.filter()]": (req)=>req.status === filter
        }["AdminRequestsPage[requests.filter()]"]);
        $[10] = filter;
        $[11] = requests;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const filteredRequests = t7;
    if (isAdmin === null) {
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Checking access…"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                lineNumber: 163,
                columnNumber: 12
            }, this);
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        return t8;
    }
    if (!isAdmin) {
        return null;
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-6",
            children: "Admin Access Requests"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== filter) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 mb-6",
            children: [
                "all",
                "pending",
                "approved",
                "rejected"
            ].map({
                "AdminRequestsPage[(anonymous)()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "AdminRequestsPage[(anonymous)() > <button>.onClick]": ()=>setFilter(f)
                        }["AdminRequestsPage[(anonymous)() > <button>.onClick]"],
                        className: `px-4 py-2 rounded-lg border ${filter === f ? "bg-teal-600 text-white border-teal-600" : "bg-white text-gray-700 border-gray-300"}`,
                        children: f[0].toUpperCase() + f.slice(1)
                    }, f, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                        lineNumber: 183,
                        columnNumber: 50
                    }, this)
            }["AdminRequestsPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[15] = filter;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== filteredRequests.length) {
        t10 = filteredRequests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600",
            children: "No requests found."
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
            lineNumber: 194,
            columnNumber: 44
        }, this);
        $[17] = filteredRequests.length;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== filteredRequests) {
        let t12;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = ({
                "AdminRequestsPage[filteredRequests.map()]": (req_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-5 rounded-xl shadow-sm bg-white mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-lg",
                                        children: req_0.email
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 184
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 text-sm rounded-full ${req_0.status === "pending" ? "bg-yellow-100 text-yellow-800" : req_0.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                        children: req_0.status[0].toUpperCase() + req_0.status.slice(1)
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 238
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                lineNumber: 205,
                                columnNumber: 141
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-3",
                                children: req_0.message
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                lineNumber: 205,
                                columnNumber: 511
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-4",
                                children: [
                                    "Requested on: ",
                                    new Date(req_0.requested_at).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                lineNumber: 205,
                                columnNumber: 564
                            }, this),
                            req_0.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AdminRequestsPage[filteredRequests.map() > <button>.onClick]": ()=>updateStatus(req_0.id, "approved")
                                        }["AdminRequestsPage[filteredRequests.map() > <button>.onClick]"],
                                        className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 730
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AdminRequestsPage[filteredRequests.map() > <button>.onClick]": ()=>updateStatus(req_0.id, "rejected")
                                        }["AdminRequestsPage[filteredRequests.map() > <button>.onClick]"],
                                        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                                        children: "Reject"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                                lineNumber: 205,
                                columnNumber: 702
                            }, this)
                        ]
                    }, req_0.id, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
                        lineNumber: 205,
                        columnNumber: 63
                    }, this)
            })["AdminRequestsPage[filteredRequests.map()]"];
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        t11 = filteredRequests.map(t12);
        $[19] = filteredRequests;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 max-w-3xl mx-auto",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/requests/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    return t12;
}
_s(AdminRequestsPage, "f/ht2P11CxFGGkbHAxpzipm04O0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminRequestsPage;
function _AdminRequestsPageLoadRequestsDataMap(row) {
    return {
        id: row.id,
        user_id: row.user_id,
        message: row.message,
        status: row.status,
        requested_at: row.requested_at,
        email: row.email
    };
}
var _c;
__turbopack_context__.k.register(_c, "AdminRequestsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_admin_requests_page_tsx_ee9696fe._.js.map