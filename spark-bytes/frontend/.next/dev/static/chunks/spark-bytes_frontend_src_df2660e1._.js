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
"[project]/spark-bytes/frontend/src/app/create_event/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/useAdminGuard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreateEvent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "bcd5779a444b2265418644fc6a9ce98afc4dbd47358e280900e8b2c994a4a909") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcd5779a444b2265418644fc6a9ce98afc4dbd47358e280900e8b2c994a4a909";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { loading, authorized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminGuard"])();
    const [eventName, setEventName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [capacity, setCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "",
                quantity: ""
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [foodItems, setFoodItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CreateEvent[addFoodItem]": ()=>{
                setFoodItems(_CreateEventAddFoodItemSetFoodItems);
            }
        })["CreateEvent[addFoodItem]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const addFoodItem = t1;
    let t2;
    if ($[3] !== foodItems) {
        t2 = ({
            "CreateEvent[updateFoodItem]": (index, field, value)=>{
                const updated = [
                    ...foodItems
                ];
                updated[index][field] = value;
                setFoodItems(updated);
            }
        })["CreateEvent[updateFoodItem]"];
        $[3] = foodItems;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const updateFoodItem = t2;
    let t3;
    if ($[5] !== foodItems) {
        t3 = ({
            "CreateEvent[removeFoodItem]": (index_0)=>{
                setFoodItems(foodItems.filter({
                    "CreateEvent[removeFoodItem > foodItems.filter()]": (_, i)=>i !== index_0
                }["CreateEvent[removeFoodItem > foodItems.filter()]"]));
            }
        })["CreateEvent[removeFoodItem]"];
        $[5] = foodItems;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const removeFoodItem = t3;
    let t4;
    if ($[7] !== capacity || $[8] !== date || $[9] !== description || $[10] !== email || $[11] !== eventName || $[12] !== foodItems || $[13] !== location || $[14] !== router || $[15] !== time) {
        t4 = ({
            "CreateEvent[handleSubmit]": async (e)=>{
                e.preventDefault();
                const cleanFoodItems = foodItems.filter(_CreateEventHandleSubmitFoodItemsFilter).map(_CreateEventHandleSubmitAnonymous);
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").insert({
                    title: eventName,
                    organizer_email: email,
                    location,
                    event_date: date,
                    event_time: time,
                    description,
                    food_items: cleanFoodItems,
                    capacity,
                    attendees: 0,
                    created_at: new Date().toISOString()
                });
                if (error) {
                    console.error(error);
                    alert("Failed to create event.");
                    return;
                }
                alert("Event created!");
                router.push("/profile_reserve");
            }
        })["CreateEvent[handleSubmit]"];
        $[7] = capacity;
        $[8] = date;
        $[9] = description;
        $[10] = email;
        $[11] = eventName;
        $[12] = foodItems;
        $[13] = location;
        $[14] = router;
        $[15] = time;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const handleSubmit = t4;
    if (loading) {
        let t5;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center text-lg",
                children: "Checking access..."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                lineNumber: 131,
                columnNumber: 12
            }, this);
            $[17] = t5;
        } else {
            t5 = $[17];
        }
        return t5;
    }
    if (!authorized) {
        return null;
    }
    let t5;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-center mb-6",
            children: "Create an Event"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Event Name"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CreateEvent[<input>.onChange]": (e_0)=>setEventName(e_0.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== eventName) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: eventName,
                    onChange: t7,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 166,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[21] = eventName;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Organizer Email"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "CreateEvent[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== email) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    value: email,
                    onChange: t10,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 190,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[25] = email;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Event Description"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "CreateEvent[<textarea>.onChange]": (e_2)=>setDescription(e_2.target.value)
        })["CreateEvent[<textarea>.onChange]"];
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t13,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2 h-24"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 214,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[29] = description;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Location (please enter complete address or building name)"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "CreateEvent[<input>.onChange]": (e_3)=>setLocation(e_3.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== location) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: location,
                    onChange: t16,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 238,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[33] = location;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Date"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "CreateEvent[<input>.onChange]": (e_4)=>setDate(e_4.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== date) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: date,
                    onChange: t19,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 262,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[37] = date;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Time"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "CreateEvent[<input>.onChange]": (e_5)=>setTime(e_5.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== time) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    value: time,
                    onChange: t22,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 286,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[41] = time;
        $[42] = t23;
    } else {
        t23 = $[42];
    }
    let t24;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Capacity"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "CreateEvent[<input>.onChange]": (e_6)=>setCapacity(Number(e_6.target.value))
        })["CreateEvent[<input>.onChange]"];
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] !== capacity) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    min: 1,
                    value: capacity,
                    onChange: t25,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[45] = capacity;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-2",
            children: "Food Items"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== foodItems || $[49] !== removeFoodItem || $[50] !== updateFoodItem) {
        let t29;
        if ($[52] !== foodItems.length || $[53] !== removeFoodItem || $[54] !== updateFoodItem) {
            t29 = ({
                "CreateEvent[foodItems.map()]": (item_1, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Food name",
                                value: item_1.name,
                                onChange: {
                                    "CreateEvent[foodItems.map() > <input>.onChange]": (e_7)=>updateFoodItem(index_1, "name", e_7.target.value)
                                }["CreateEvent[foodItems.map() > <input>.onChange]"],
                                required: true,
                                className: "flex-1 border border-gray-300 rounded-lg px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                                lineNumber: 328,
                                columnNumber: 122
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Qty",
                                value: item_1.quantity,
                                onChange: {
                                    "CreateEvent[foodItems.map() > <input>.onChange]": (e_8)=>updateFoodItem(index_1, "quantity", e_8.target.value)
                                }["CreateEvent[foodItems.map() > <input>.onChange]"],
                                required: true,
                                className: "w-24 border border-gray-300 rounded-lg px-3 py-2"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                                lineNumber: 330,
                                columnNumber: 146
                            }, this),
                            foodItems.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CreateEvent[foodItems.map() > <button>.onClick]": ()=>removeFoodItem(index_1)
                                }["CreateEvent[foodItems.map() > <button>.onClick]"],
                                className: "text-red-500 text-lg font-bold px-2",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                                lineNumber: 332,
                                columnNumber: 169
                            }, this)
                        ]
                    }, index_1, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                        lineNumber: 328,
                        columnNumber: 62
                    }, this)
            })["CreateEvent[foodItems.map()]"];
            $[52] = foodItems.length;
            $[53] = removeFoodItem;
            $[54] = updateFoodItem;
            $[55] = t29;
        } else {
            t29 = $[55];
        }
        t28 = foodItems.map(t29);
        $[48] = foodItems;
        $[49] = removeFoodItem;
        $[50] = updateFoodItem;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: addFoodItem,
            className: "mt-2 text-sm text-teal-600 font-semibold",
            children: "+ Add another food item"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[56] = t29;
    } else {
        t29 = $[56];
    }
    let t30;
    if ($[57] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[57] = t28;
        $[58] = t30;
    } else {
        t30 = $[58];
    }
    let t31;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700",
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== handleSubmit || $[61] !== t11 || $[62] !== t14 || $[63] !== t17 || $[64] !== t20 || $[65] !== t23 || $[66] !== t26 || $[67] !== t30 || $[68] !== t8) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center flex-grow px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-md p-8 w-full max-w-lg",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            t8,
                            t11,
                            t14,
                            t17,
                            t20,
                            t23,
                            t26,
                            t30,
                            t31
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                        lineNumber: 375,
                        columnNumber: 161
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                lineNumber: 375,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[60] = handleSubmit;
        $[61] = t11;
        $[62] = t14;
        $[63] = t17;
        $[64] = t20;
        $[65] = t23;
        $[66] = t26;
        $[67] = t30;
        $[68] = t8;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences:"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 391,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 391,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 391,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[70] = t33;
    } else {
        t33 = $[70];
    }
    let t34;
    if ($[71] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[71] = t32;
        $[72] = t34;
    } else {
        t34 = $[72];
    }
    return t34;
}
_s(CreateEvent, "C0lbC6tw92VtyEE455owGxp2Uzo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAdminGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminGuard"]
    ];
});
_c = CreateEvent;
function _CreateEventHandleSubmitAnonymous(item_0) {
    return {
        name: item_0.name.trim(),
        quantity: Number(item_0.quantity)
    };
}
function _CreateEventHandleSubmitFoodItemsFilter(item) {
    return item.name.trim() !== "" && item.quantity !== "";
}
function _CreateEventAddFoodItemSetFoodItems(prev) {
    return [
        ...prev,
        {
            name: "",
            quantity: ""
        }
    ];
}
var _c;
__turbopack_context__.k.register(_c, "CreateEvent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_df2660e1._.js.map