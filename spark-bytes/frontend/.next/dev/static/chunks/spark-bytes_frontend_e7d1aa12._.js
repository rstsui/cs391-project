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
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* Format time */ function formatTime(timeString) {
    if (!timeString) return "";
    const [hourStr, minuteStr] = timeString.split(":");
    let hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}
const EventMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EventMap;
function EventInfoPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "e1975858c43870b38341faa9b2666623a11654ba93edffa6b6d2d04c7a32b06f") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1975858c43870b38341faa9b2666623a11654ba93edffa6b6d2d04c7a32b06f";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const eventId = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedFood, setSelectedFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loggedInUser, setLoggedInUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] !== eventId) {
        t0 = ({
            "EventInfoPage[useEffect()]": ()=>{
                const loadEvent = async function loadEvent() {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*").eq("id", eventId).maybeSingle();
                    const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    setLoggedInUser(userData?.user || null);
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
                lineNumber: 166,
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
            lineNumber: 175,
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
            lineNumber: 183,
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
            lineNumber: 191,
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
            lineNumber: 198,
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
            lineNumber: 206,
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
            lineNumber: 213,
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
            lineNumber: 221,
            columnNumber: 10
        }, this);
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== event.event_time) {
        t10 = formatTime(event.event_time);
        $[24] = event.event_time;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t9,
                " ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Created by:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== event.organizer_email) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t12,
                " ",
                event.organizer_email
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[29] = event.organizer_email;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Available Food:"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 259,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== event.food_items) {
        t15 = event.food_items.map(_EventInfoPageEventFood_itemsMap);
        $[32] = event.food_items;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "ml-6 list-disc",
            children: t15
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Capacity:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== event.attendees || $[38] !== event.capacity) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t17,
                " ",
                event.attendees,
                "/",
                event.capacity
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[37] = event.attendees;
        $[38] = event.capacity;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== t11 || $[41] !== t13 || $[42] !== t16 || $[43] !== t18 || $[44] !== t6 || $[45] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 mb-8 text-gray-600 text-sm",
            children: [
                t6,
                t8,
                t11,
                t13,
                t14,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t13;
        $[42] = t16;
        $[43] = t18;
        $[44] = t6;
        $[45] = t8;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== event.location) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-64 rounded-lg border border-gray-300 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventMap, {
                location: event.location
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 311,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[47] = event.location;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t19 || $[50] !== t20 || $[51] !== t3 || $[52] !== t4) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm",
            children: [
                t3,
                t4,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t20;
        $[51] = t3;
        $[52] = t4;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== email || $[55] !== event.food_items || $[56] !== handleReserve || $[57] !== loggedInUser || $[58] !== name || $[59] !== quantity || $[60] !== router || $[61] !== selectedFood) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-1/3 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-teal-600 text-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center",
                children: !loggedInUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Log in to reserve food"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 330,
                            columnNumber: 192
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "EventInfoPage[<button>.onClick]": ()=>router.push("/login")
                            }["EventInfoPage[<button>.onClick]"],
                            className: "bg-white text-teal-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100",
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 330,
                            columnNumber: 262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 330,
                    columnNumber: 163
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-6 text-center",
                            children: "Reserve Food"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 332,
                            columnNumber: 163
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col gap-4",
                            onSubmit: handleReserve,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 303
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: name,
                                            onChange: {
                                                "EventInfoPage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
                                            }["EventInfoPage[<input>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "BU Email"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            required: true,
                                            value: email,
                                            onChange: {
                                                "EventInfoPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
                                            }["EventInfoPage[<input>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 165
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "Select Food"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            value: selectedFood,
                                            onChange: {
                                                "EventInfoPage[<select>.onChange]": (e_2)=>setSelectedFood(e_2.target.value)
                                            }["EventInfoPage[<select>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select an item"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 99
                                                }, this),
                                                event.food_items.map(_EventInfoPageEventFood_itemsMap2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 168
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 216
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            max: "3",
                                            required: true,
                                            value: quantity,
                                            onChange: {
                                                "EventInfoPage[<input>.onChange]": (e_3)=>setQuantity(Number(e_3.target.value))
                                            }["EventInfoPage[<input>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 270
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1 opacity-80",
                                            children: "Max 3 per person"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 211
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-white text-teal-700 font-semibold py-2 rounded-md hover:bg-gray-100 mt-4",
                                    children: "Reserve"
                                }, void 0, false, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 165
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 332,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 330,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[54] = email;
        $[55] = event.food_items;
        $[56] = handleReserve;
        $[57] = loggedInUser;
        $[58] = name;
        $[59] = quantity;
        $[60] = router;
        $[61] = selectedFood;
        $[62] = t22;
    } else {
        t22 = $[62];
    }
    let t23;
    if ($[63] !== t21 || $[64] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex justify-center py-16 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-10 w-full max-w-6xl",
                children: [
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 355,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[63] = t21;
        $[64] = t22;
        $[65] = t23;
    } else {
        t23 = $[65];
    }
    let t24;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 364,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 364,
                    columnNumber: 182
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 364,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[66] = t24;
    } else {
        t24 = $[66];
    }
    let t25;
    if ($[67] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[67] = t23;
        $[68] = t25;
    } else {
        t25 = $[68];
    }
    return t25;
}
_s(EventInfoPage, "wqgxIYNrxyEdblhUFW9wcrzPy0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = EventInfoPage;
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
        lineNumber: 380,
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
        lineNumber: 383,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "EventMap");
__turbopack_context__.k.register(_c1, "EventInfoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/spark-bytes/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
]);

//# sourceMappingURL=spark-bytes_frontend_e7d1aa12._.js.map