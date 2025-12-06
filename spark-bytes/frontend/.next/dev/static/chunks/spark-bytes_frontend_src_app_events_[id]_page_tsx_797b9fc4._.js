(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventInfoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EventInfoPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(83);
    if ($[0] !== "6f1089a707b42648324868d34d79f713d20ce0ec7bf2d35df41054da8b9545ea") {
        for(let $i = 0; $i < 83; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f1089a707b42648324868d34d79f713d20ce0ec7bf2d35df41054da8b9545ea";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const eventId = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedFood, setSelectedFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] !== eventId) {
        t0 = ({
            "EventInfoPage[useEffect()]": ()=>{
                const loadEvent = async function loadEvent() {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*").eq("id", eventId).maybeSingle();
                    if (error) {
                        console.error(error);
                        return;
                    }
                    setEvent(data);
                    setLoading(false);
                };
                loadEvent();
            }
        })["EventInfoPage[useEffect()]"];
        t1 = [
            eventId
        ];
        $[1] = eventId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== email || $[5] !== event || $[6] !== eventId || $[7] !== name || $[8] !== quantity || $[9] !== router || $[10] !== selectedFood) {
        t2 = async function handleReserve(e) {
            e.preventDefault();
            if (!event) {
                return;
            }
            if (event.attendees >= event.capacity) {
                alert("This event is full.");
                return;
            }
            const foodObj = event.food_items.find({
                "EventInfoPage[handleReserve > event.food_items.find()]": (f)=>f.name === selectedFood
            }["EventInfoPage[handleReserve > event.food_items.find()]"]);
            if (!foodObj) {
                alert("Invalid food selection.");
                return;
            }
            if (quantity > foodObj.quantity) {
                alert("Not enough quantity available.");
                return;
            }
            if (quantity > 3) {
                alert("You can only reserve up to 3 items.");
                return;
            }
            const { data: existingRSVP } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*").eq("email", email).eq("event_id", eventId);
            if (existingRSVP && existingRSVP.length > 0) {
                alert("You already reserved food for this event.");
                return;
            }
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").insert({
                event_id: event.id,
                name,
                email,
                food_item: selectedFood,
                quantity
            });
            if (error_0) {
                console.error("SUPABASE RSVP ERROR \u2192", JSON.stringify(error_0, null, 2));
                alert("Failed to reserve.");
                return;
            }
            const updatedFood = event.food_items.map({
                "EventInfoPage[handleReserve > event.food_items.map()]": (item)=>item.name === selectedFood ? {
                        ...item,
                        quantity: item.quantity - quantity
                    } : item
            }["EventInfoPage[handleReserve > event.food_items.map()]"]);
            await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                attendees: event.attendees + 1,
                food_items: updatedFood
            }).eq("id", event.id);
            alert("Reservation confirmed!");
            router.refresh();
        };
        $[4] = email;
        $[5] = event;
        $[6] = eventId;
        $[7] = name;
        $[8] = quantity;
        $[9] = router;
        $[10] = selectedFood;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const handleReserve = t2;
    if (loading || !event) {
        let t3;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Loading event..."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 147,
                columnNumber: 12
            }, this);
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        return t3;
    }
    let t3;
    if ($[13] !== event.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold mb-3",
            children: event.title
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[13] = event.title;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== event.description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 mb-6 leading-relaxed",
            children: event.description
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[15] = event.description;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Location:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== event.location) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t5,
                " ",
                event.location
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[18] = event.location;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Date:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== event.event_date) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t7,
                " ",
                event.event_date
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[21] = event.event_date;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Time:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== event.event_time) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t9,
                " ",
                event.event_time
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[24] = event.event_time;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Available Food:"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 217,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== event.food_items) {
        t12 = event.food_items.map(_EventInfoPageEventFood_itemsMap);
        $[27] = event.food_items;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "ml-6 list-disc",
            children: t12
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Capacity:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== event.attendees || $[33] !== event.capacity) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t14,
                " ",
                event.attendees,
                "/",
                event.capacity
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[32] = event.attendees;
        $[33] = event.capacity;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t10 || $[36] !== t13 || $[37] !== t15 || $[38] !== t6 || $[39] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 mb-8 text-gray-600 text-sm",
            children: [
                t6,
                t8,
                t10,
                t11,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t13;
        $[37] = t15;
        $[38] = t6;
        $[39] = t8;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-gray-200 h-64 flex items-center justify-center text-gray-600 rounded-lg border border-gray-300",
            children: "Map or Event Image Here"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== t16 || $[43] !== t3 || $[44] !== t4) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm",
            children: [
                t3,
                t4,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[42] = t16;
        $[43] = t3;
        $[44] = t4;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold mb-6 text-center",
            children: "Reserve Food"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-1",
            children: "Full Name"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "EventInfoPage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["EventInfoPage[<input>.onChange]"];
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== name) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    required: true,
                    value: name,
                    onChange: t21,
                    className: "p-2 w-full rounded-md text-black"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 308,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[49] = name;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-1",
            children: "BU Email"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "EventInfoPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["EventInfoPage[<input>.onChange]"];
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== email) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    required: true,
                    value: email,
                    onChange: t24,
                    className: "p-2 w-full rounded-md text-black"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 332,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[53] = email;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-1",
            children: "Select Food"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "EventInfoPage[<select>.onChange]": (e_2)=>setSelectedFood(e_2.target.value)
        })["EventInfoPage[<select>.onChange]"];
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Select an item"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== event.food_items) {
        t29 = event.food_items.map(_EventInfoPageEventFood_itemsMap2);
        $[58] = event.food_items;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== selectedFood || $[61] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    required: true,
                    value: selectedFood,
                    onChange: t27,
                    className: "p-2 w-full rounded-md text-black",
                    children: [
                        t28,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 371,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[60] = selectedFood;
        $[61] = t29;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-1",
            children: "Quantity"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "EventInfoPage[<input>.onChange]": (e_3)=>setQuantity(Number(e_3.target.value))
        })["EventInfoPage[<input>.onChange]"];
        $[64] = t32;
    } else {
        t32 = $[64];
    }
    let t33;
    if ($[65] !== quantity) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            min: "1",
            max: "3",
            required: true,
            value: quantity,
            onChange: t32,
            className: "p-2 w-full rounded-md text-black"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[65] = quantity;
        $[66] = t33;
    } else {
        t33 = $[66];
    }
    let t34;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs mt-1 opacity-80",
            children: "Max 3 per person"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[67] = t34;
    } else {
        t34 = $[67];
    }
    let t35;
    if ($[68] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[68] = t33;
        $[69] = t35;
    } else {
        t35 = $[69];
    }
    let t36;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "bg-white text-teal-700 font-semibold py-2 rounded-md hover:bg-gray-100 mt-4",
            children: "Reserve"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[70] = t36;
    } else {
        t36 = $[70];
    }
    let t37;
    if ($[71] !== handleReserve || $[72] !== t22 || $[73] !== t25 || $[74] !== t30 || $[75] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-1/3 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-teal-600 text-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "flex flex-col gap-4",
                        onSubmit: handleReserve,
                        children: [
                            t22,
                            t25,
                            t30,
                            t35,
                            t36
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                        lineNumber: 426,
                        columnNumber: 151
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 426,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[71] = handleReserve;
        $[72] = t22;
        $[73] = t25;
        $[74] = t30;
        $[75] = t35;
        $[76] = t37;
    } else {
        t37 = $[76];
    }
    let t38;
    if ($[77] !== t18 || $[78] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex justify-center py-16 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-10 w-full max-w-6xl",
                children: [
                    t18,
                    t37
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 438,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[77] = t18;
        $[78] = t37;
        $[79] = t38;
    } else {
        t38 = $[79];
    }
    let t39;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 447,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 447,
                    columnNumber: 182
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 447,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[80] = t39;
    } else {
        t39 = $[80];
    }
    let t40;
    if ($[81] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[81] = t38;
        $[82] = t40;
    } else {
        t40 = $[82];
    }
    return t40;
}
_s(EventInfoPage, "kqpcPOKPL7/2ukd3SH+pXe4i8fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EventInfoPage;
function _EventInfoPageEventFood_itemsMap2(item_1, i_0) {
    return item_1.quantity > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: item_1.name,
        children: [
            item_1.name,
            " (",
            item_1.quantity,
            " left)"
        ]
    }, i_0, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
        lineNumber: 463,
        columnNumber: 32
    }, this) : null;
}
function _EventInfoPageEventFood_itemsMap(item_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            item_0.name,
            " — ",
            item_0.quantity,
            " available"
        ]
    }, i, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
        lineNumber: 466,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EventInfoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_events_%5Bid%5D_page_tsx_797b9fc4._.js.map