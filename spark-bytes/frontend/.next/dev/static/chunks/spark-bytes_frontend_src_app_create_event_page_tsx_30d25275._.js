(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CreateEvent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "826f9f85584b999359b83fe08cb87c1e7b6c541fdc7e22f8c82e322f8c15dc21") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "826f9f85584b999359b83fe08cb87c1e7b6c541fdc7e22f8c82e322f8c15dc21";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
    let t2;
    if ($[2] !== router) {
        t1 = ({
            "CreateEvent[useEffect()]": ()=>{
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
        })["CreateEvent[useEffect()]"];
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
        t3 = ({
            "CreateEvent[addFoodItem]": ()=>{
                setFoodItems(_CreateEventAddFoodItemSetFoodItems);
            }
        })["CreateEvent[addFoodItem]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const addFoodItem = t3;
    let t4;
    if ($[6] !== foodItems) {
        t4 = ({
            "CreateEvent[updateFoodItem]": (index, field, value)=>{
                const updated = [
                    ...foodItems
                ];
                updated[index][field] = value;
                setFoodItems(updated);
            }
        })["CreateEvent[updateFoodItem]"];
        $[6] = foodItems;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const updateFoodItem = t4;
    let t5;
    if ($[8] !== foodItems) {
        t5 = ({
            "CreateEvent[removeFoodItem]": (index_0)=>{
                setFoodItems(foodItems.filter({
                    "CreateEvent[removeFoodItem > foodItems.filter()]": (_, i)=>i !== index_0
                }["CreateEvent[removeFoodItem > foodItems.filter()]"]));
            }
        })["CreateEvent[removeFoodItem]"];
        $[8] = foodItems;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const removeFoodItem = t5;
    let t6;
    if ($[10] !== capacity || $[11] !== date || $[12] !== description || $[13] !== email || $[14] !== eventName || $[15] !== foodItems || $[16] !== location || $[17] !== router || $[18] !== time) {
        t6 = ({
            "CreateEvent[handleSubmit]": async (e)=>{
                e.preventDefault();
                const cleanFoodItems = foodItems.filter(_CreateEventHandleSubmitFoodItemsFilter).map(_CreateEventHandleSubmitAnonymous);
                const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").insert({
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
                if (error_0) {
                    console.error(error_0);
                    alert("Failed to create event.");
                    return;
                }
                alert("Event created!");
                router.push("/profile_reserve");
            }
        })["CreateEvent[handleSubmit]"];
        $[10] = capacity;
        $[11] = date;
        $[12] = description;
        $[13] = email;
        $[14] = eventName;
        $[15] = foodItems;
        $[16] = location;
        $[17] = router;
        $[18] = time;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    const handleSubmit = t6;
    if (loading) {
        let t7;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center text-lg",
                children: "Checking access..."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                lineNumber: 180,
                columnNumber: 12
            }, this);
            $[20] = t7;
        } else {
            t7 = $[20];
        }
        return t7;
    }
    if (!authorized) {
        return null;
    }
    let t7;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold text-center mb-6",
            children: "Create an Event"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 192,
            columnNumber: 10
        }, this);
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Event Name"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "CreateEvent[<input>.onChange]": (e_0)=>setEventName(e_0.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== eventName) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: eventName,
                    onChange: t9,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 215,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[24] = eventName;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Organizer Email"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CreateEvent[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== email) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    value: email,
                    onChange: t12,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 239,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[28] = email;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Event Description"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "CreateEvent[<textarea>.onChange]": (e_2)=>setDescription(e_2.target.value)
        })["CreateEvent[<textarea>.onChange]"];
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== description) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t15,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2 h-24"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 263,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[32] = description;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Location"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "CreateEvent[<input>.onChange]": (e_3)=>setLocation(e_3.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== location) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: location,
                    onChange: t18,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 287,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[36] = location;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Date"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "CreateEvent[<input>.onChange]": (e_4)=>setDate(e_4.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== date) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: date,
                    onChange: t21,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 311,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[40] = date;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Time"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[42] = t23;
    } else {
        t23 = $[42];
    }
    let t24;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "CreateEvent[<input>.onChange]": (e_5)=>setTime(e_5.target.value)
        })["CreateEvent[<input>.onChange]"];
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== time) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    value: time,
                    onChange: t24,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 335,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[44] = time;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-1",
            children: "Capacity"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "CreateEvent[<input>.onChange]": (e_6)=>setCapacity(Number(e_6.target.value))
        })["CreateEvent[<input>.onChange]"];
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== capacity) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    min: 1,
                    value: capacity,
                    onChange: t27,
                    required: true,
                    className: "w-full border border-gray-300 rounded-lg px-4 py-2"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 359,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[48] = capacity;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-gray-700 mb-2",
            children: "Food Items"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== foodItems || $[52] !== removeFoodItem || $[53] !== updateFoodItem) {
        let t31;
        if ($[55] !== foodItems.length || $[56] !== removeFoodItem || $[57] !== updateFoodItem) {
            t31 = ({
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
                                lineNumber: 377,
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
                                lineNumber: 379,
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
                                lineNumber: 381,
                                columnNumber: 169
                            }, this)
                        ]
                    }, index_1, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                        lineNumber: 377,
                        columnNumber: 62
                    }, this)
            })["CreateEvent[foodItems.map()]"];
            $[55] = foodItems.length;
            $[56] = removeFoodItem;
            $[57] = updateFoodItem;
            $[58] = t31;
        } else {
            t31 = $[58];
        }
        t30 = foodItems.map(t31);
        $[51] = foodItems;
        $[52] = removeFoodItem;
        $[53] = updateFoodItem;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: addFoodItem,
            className: "mt-2 text-sm text-teal-600 font-semibold",
            children: "+ Add another food item"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[60] = t30;
        $[61] = t32;
    } else {
        t32 = $[61];
    }
    let t33;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700",
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[62] = t33;
    } else {
        t33 = $[62];
    }
    let t34;
    if ($[63] !== handleSubmit || $[64] !== t10 || $[65] !== t13 || $[66] !== t16 || $[67] !== t19 || $[68] !== t22 || $[69] !== t25 || $[70] !== t28 || $[71] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center flex-grow px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-md p-8 w-full max-w-lg",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            t10,
                            t13,
                            t16,
                            t19,
                            t22,
                            t25,
                            t28,
                            t32,
                            t33
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                        lineNumber: 424,
                        columnNumber: 161
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                lineNumber: 424,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[63] = handleSubmit;
        $[64] = t10;
        $[65] = t13;
        $[66] = t16;
        $[67] = t19;
        $[68] = t22;
        $[69] = t25;
        $[70] = t28;
        $[71] = t32;
        $[72] = t34;
    } else {
        t34 = $[72];
    }
    let t35;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences:"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 440,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 440,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
                    lineNumber: 440,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/create_event/page.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[74] = t34;
        $[75] = t36;
    } else {
        t36 = $[75];
    }
    return t36;
}
_s(CreateEvent, "0GKGVxUdIi4YsP8FXEAT+UVp0MI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
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

//# sourceMappingURL=spark-bytes_frontend_src_app_create_event_page_tsx_30d25275._.js.map