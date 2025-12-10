(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/lib/useAuthGuard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useAuthGuard.ts
__turbopack_context__.s([
    "useAuthGuard",
    ()=>useAuthGuard
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
function useAuthGuard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "37700481ffab3b49968d1d88f420edcca5d3830359ee76861750d9936b1ec8bb") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37700481ffab3b49968d1d88f420edcca5d3830359ee76861750d9936b1ec8bb";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {} : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { redirectToLogin: t2 } = t1;
    const redirectToLogin = t2 === undefined ? true : t2;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    let t4;
    if ($[3] !== redirectToLogin || $[4] !== router) {
        t3 = ({
            "useAuthGuard[useEffect()]": ()=>{
                const checkUser = async function checkUser() {
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    const usr = data?.user || null;
                    setUser(usr);
                    setLoading(false);
                    if (!usr && redirectToLogin) {
                        router.push("/login");
                    }
                };
                checkUser();
            }
        })["useAuthGuard[useEffect()]"];
        t4 = [
            router,
            redirectToLogin
        ];
        $[3] = redirectToLogin;
        $[4] = router;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== loading || $[8] !== user) {
        t5 = {
            loading,
            user
        };
        $[7] = loading;
        $[8] = user;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(useAuthGuard, "8ZNwZiIFW44agV5SnSYwOiBYxdY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/spark-bytes/frontend/src/app/profile_page/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/useAuthGuard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "3e554f694af9347e4f3b5ed9d604e39ef23fea3f48d95dd0e004d86bbc6c9923") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e554f694af9347e4f3b5ed9d604e39ef23fea3f48d95dd0e004d86bbc6c9923";
    }
    const { loading, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthGuard"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileLoading, setProfileLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] !== user) {
        t0 = ({
            "ProfilePage[useEffect()]": ()=>{
                const loadProfile = async function loadProfile() {
                    if (!user) {
                        return;
                    }
                    setProfileLoading(true);
                    const { data: profileData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("email, role").eq("id", user.id).single();
                    if (error) {
                        console.error("Error loading profile:", error);
                        setProfile(null);
                    } else {
                        setProfile(profileData);
                    }
                    setProfileLoading(false);
                };
                loadProfile();
            }
        })["ProfilePage[useEffect()]"];
        t1 = [
            user
        ];
        $[1] = user;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading || profileLoading) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center text-lg",
                children: "Loading profile…"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    if (!user || !profile) {
        return null;
    }
    let t2;
    if ($[5] !== profile.email) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-center mb-2",
            children: profile.email
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[5] = profile.email;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== user.created_at) {
        t3 = new Date(user.created_at).toLocaleDateString();
        $[7] = user.created_at;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-500 mb-1",
            children: [
                "Member since ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = `px-3 py-1 rounded-full text-sm font-medium ${profile.role === "admin" ? "bg-green-100 text-green-700 border border-green-300" : "bg-gray-100 text-gray-700 border"}`;
    const t6 = profile.role === "admin" ? "Administrator" : "Standard User";
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t5,
                children: t6
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                lineNumber: 96,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 text-center text-gray-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Welcome to Spark!Bytes — helping reduce food waste across campus."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                lineNumber: 105,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== profile.role) {
        t9 = profile.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/admin/requests",
            className: "block w-full text-center bg-black text-white py-2 rounded-lg hover:bg-gray-900",
            children: "Admin Dashboard"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 112,
            columnNumber: 38
        }, this);
        $[15] = profile.role;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== profile.role) {
        t10 = profile.role !== "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/request_access",
            className: "block w-full text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700",
            children: "Request Admin Access"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 120,
            columnNumber: 39
        }, this);
        $[17] = profile.role;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/profile_reserve",
            className: "block w-full text-center bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200",
            children: "View My Events"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t10 || $[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 space-y-4",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t2 || $[25] !== t4 || $[26] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-10",
            children: [
                t2,
                t4,
                t7,
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t2;
        $[25] = t4;
        $[26] = t7;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                    lineNumber: 155,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                    lineNumber: 155,
                    columnNumber: 182
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
                    lineNumber: 155,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100 px-6 py-16",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_page/page.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    return t15;
}
_s(ProfilePage, "hb+XB8JtB7x7BAyr4Agnw0/8JT4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthGuard"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_f5c83bdc._.js.map