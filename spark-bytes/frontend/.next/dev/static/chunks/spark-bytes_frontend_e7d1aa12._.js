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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "fc03dfe07a0efd0ac046c4b0f88024a7d0d106dd6ef818fe82ef3511d67d2ce7") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fc03dfe07a0efd0ac046c4b0f88024a7d0d106dd6ef818fe82ef3511d67d2ce7";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const eventId = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loggedInUser, setLoggedInUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                food: "",
                quantity: 1
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== eventId) {
        t1 = ({
            "EventInfoPage[useEffect()]": ()=>{
                const loadEvent = async function loadEvent() {
                    const { data: eventData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*").eq("id", eventId).maybeSingle();
                    const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    setLoggedInUser(userData?.user || null);
                    setEvent(eventData);
                    setLoading(false);
                };
                loadEvent();
            }
        })["EventInfoPage[useEffect()]"];
        t2 = [
            eventId
        ];
        $[2] = eventId;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== event || $[6] !== items) {
        t3 = function getAvailableOptions(index) {
            if (!event) {
                return [];
            }
            const selectedFoods = items.map({
                "EventInfoPage[getAvailableOptions > items.map()]": (it, i)=>i === index ? null : it.food
            }["EventInfoPage[getAvailableOptions > items.map()]"]).filter(Boolean);
            return event.food_items.filter({
                "EventInfoPage[getAvailableOptions > event.food_items.filter()]": (f)=>!selectedFoods.includes(f.name) && f.quantity > 0
            }["EventInfoPage[getAvailableOptions > event.food_items.filter()]"]);
        };
        $[5] = event;
        $[6] = items;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const getAvailableOptions = t3;
    let t4;
    if ($[8] !== items) {
        t4 = function addItemRow() {
            setItems([
                ...items,
                {
                    food: "",
                    quantity: 1
                }
            ]);
        };
        $[8] = items;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const addItemRow = t4;
    let t5;
    if ($[10] !== items) {
        t5 = function removeItem(index_0) {
            setItems(items.filter({
                "EventInfoPage[removeItem > items.filter()]": (_, i_0)=>i_0 !== index_0
            }["EventInfoPage[removeItem > items.filter()]"]));
        };
        $[10] = items;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const removeItem = t5;
    let t6;
    if ($[12] !== items) {
        t6 = function updateItemFood(index_1, value) {
            const updated = [
                ...items
            ];
            updated[index_1].food = value;
            setItems(updated);
        };
        $[12] = items;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const updateItemFood = t6;
    let t7;
    if ($[14] !== items) {
        t7 = function updateQuantity(index_2, value_0) {
            const updated_0 = [
                ...items
            ];
            updated_0[index_2].quantity = value_0;
            setItems(updated_0);
        };
        $[14] = items;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const updateQuantity = t7;
    let t8;
    if ($[16] !== email || $[17] !== event || $[18] !== eventId || $[19] !== items || $[20] !== name || $[21] !== router) {
        t8 = async function handleReserve(e) {
            e.preventDefault();
            if (!event) {
                return;
            }
            if (items.length === 0) {
                alert("Please select at least one food item.");
                return;
            }
            for (const row of items){
                if (!row.food) {
                    alert("Each item must have a food selection.");
                    return;
                }
                if (row.quantity < 1 || row.quantity > 3) {
                    alert("Each item must be between 1\u20133.");
                    return;
                }
                const foodObj = event.food_items.find({
                    "EventInfoPage[handleReserve > event.food_items.find()]": (f_0)=>f_0.name === row.food
                }["EventInfoPage[handleReserve > event.food_items.find()]"]);
                if (!foodObj || row.quantity > foodObj.quantity) {
                    alert(`Not enough quantity available for ${row.food}.`);
                    return;
                }
            }
            const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*").eq("email", email).eq("event_id", eventId);
            if (existing && existing.length > 0) {
                alert("You already reserved food for this event.");
                return;
            }
            const { data: newRsvp, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").insert({
                event_id: event.id,
                name,
                email
            }).select().single();
            if (error || !newRsvp) {
                console.error(error);
                alert("Failed to reserve.");
                return;
            }
            for (const row_0 of items){
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").insert({
                    rsvp_id: newRsvp.id,
                    food_item: row_0.food,
                    quantity: row_0.quantity
                });
            }
            const updatedFood = event.food_items.map({
                "EventInfoPage[handleReserve > event.food_items.map()]": (f_1)=>{
                    const row_1 = items.find({
                        "EventInfoPage[handleReserve > event.food_items.map() > items.find()]": (i_1)=>i_1.food === f_1.name
                    }["EventInfoPage[handleReserve > event.food_items.map() > items.find()]"]);
                    return row_1 ? {
                        ...f_1,
                        quantity: f_1.quantity - row_1.quantity
                    } : f_1;
                }
            }["EventInfoPage[handleReserve > event.food_items.map()]"]);
            await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                attendees: event.attendees + 1,
                food_items: updatedFood
            }).eq("id", event.id);
            alert("Reservation confirmed!");
            router.refresh();
        };
        $[16] = email;
        $[17] = event;
        $[18] = eventId;
        $[19] = items;
        $[20] = name;
        $[21] = router;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    const handleReserve = t8;
    if (loading || !event) {
        let t9;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Loading event..."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 255,
                columnNumber: 12
            }, this);
            $[23] = t9;
        } else {
            t9 = $[23];
        }
        return t9;
    }
    const allFoods = event.food_items;
    const allSelected = items.length >= allFoods.length;
    let t9;
    if ($[24] !== event.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold mb-3",
            children: event.title
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[24] = event.title;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== event.description) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 mb-6",
            children: event.description
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[26] = event.description;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Location:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== event.location) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t11,
                " ",
                event.location
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[29] = event.location;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Date:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== event.event_date) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t13,
                " ",
                event.event_date
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[32] = event.event_date;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Time:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== event.event_time) {
        t16 = formatTime(event.event_time);
        $[35] = event.event_time;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t15,
                " ",
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Created by:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== event.organizer_email) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t18,
                " ",
                event.organizer_email
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[40] = event.organizer_email;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Available Food:"
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 350,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== event.food_items) {
        t21 = event.food_items.map(_EventInfoPageEventFood_itemsMap);
        $[43] = event.food_items;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "ml-6 list-disc",
            children: t21
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Capacity:"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== event.attendees || $[49] !== event.capacity) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t23,
                " ",
                event.attendees,
                "/",
                event.capacity
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[48] = event.attendees;
        $[49] = event.capacity;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t12 || $[52] !== t14 || $[53] !== t17 || $[54] !== t19 || $[55] !== t22 || $[56] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 text-gray-600 text-sm mb-8",
            children: [
                t12,
                t14,
                t17,
                t19,
                t20,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[51] = t12;
        $[52] = t14;
        $[53] = t17;
        $[54] = t19;
        $[55] = t22;
        $[56] = t24;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== event.location) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-64 rounded-lg border overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventMap, {
                location: event.location
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 402,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[58] = event.location;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== t10 || $[61] !== t25 || $[62] !== t26 || $[63] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm",
            children: [
                t9,
                t10,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[60] = t10;
        $[61] = t25;
        $[62] = t26;
        $[63] = t9;
        $[64] = t27;
    } else {
        t27 = $[64];
    }
    let t28;
    if ($[65] !== addItemRow || $[66] !== allSelected || $[67] !== email || $[68] !== getAvailableOptions || $[69] !== handleReserve || $[70] !== items || $[71] !== loggedInUser || $[72] !== name || $[73] !== removeItem || $[74] !== router || $[75] !== updateItemFood || $[76] !== updateQuantity) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-1/3 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-teal-600 text-white p-8 rounded-2xl shadow-md",
                children: !loggedInUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Log in to reserve food"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 421,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "EventInfoPage[<button>.onClick]": ()=>router.push("/login")
                            }["EventInfoPage[<button>.onClick]"],
                            className: "bg-white text-teal-700 font-semibold px-4 py-2 rounded-md",
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 421,
                            columnNumber: 226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 421,
                    columnNumber: 127
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex flex-col gap-4",
                    onSubmit: handleReserve,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-center mb-4",
                            children: "Reserve Food"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 423,
                            columnNumber: 206
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            required: true,
                            placeholder: "Full Name",
                            className: "p-2 rounded-md text-black",
                            value: name,
                            onChange: {
                                "EventInfoPage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
                            }["EventInfoPage[<input>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 423,
                            columnNumber: 278
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            required: true,
                            placeholder: "BU Email",
                            className: "p-2 rounded-md text-black",
                            value: email,
                            onChange: {
                                "EventInfoPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
                            }["EventInfoPage[<input>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 425,
                            columnNumber: 51
                        }, this),
                        items.map({
                            "EventInfoPage[items.map()]": (row_2, index_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            className: "text-black p-2 rounded-md flex-1",
                                            value: row_2.food,
                                            onChange: {
                                                "EventInfoPage[items.map() > <select>.onChange]": (e_2)=>updateItemFood(index_3, e_2.target.value)
                                            }["EventInfoPage[items.map() > <select>.onChange]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select item"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 68
                                                }, this),
                                                getAvailableOptions(index_3).map(_EventInfoPageItemsMapAnonymous)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 118
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            max: 3,
                                            className: "w-16 text-black p-2 rounded-md",
                                            value: row_2.quantity,
                                            onChange: {
                                                "EventInfoPage[items.map() > <input>.onChange]": (e_3)=>updateQuantity(index_3, Number(e_3.target.value))
                                            }["EventInfoPage[items.map() > <input>.onChange]"]
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 181
                                        }, this),
                                        items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "text-white text-xl",
                                            onClick: {
                                                "EventInfoPage[items.map() > <button>.onClick]": ()=>removeItem(index_3)
                                            }["EventInfoPage[items.map() > <button>.onClick]"],
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, index_3, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 63
                                }, this)
                        }["EventInfoPage[items.map()]"]),
                        !allSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "underline text-sm mt-1",
                            onClick: addItemRow,
                            children: "+ Add another item"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 435,
                            columnNumber: 61
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "bg-white text-teal-700 font-semibold py-2 rounded-md mt-4",
                            children: "Reserve"
                        }, void 0, false, {
                            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                            lineNumber: 435,
                            columnNumber: 167
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 423,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 421,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[65] = addItemRow;
        $[66] = allSelected;
        $[67] = email;
        $[68] = getAvailableOptions;
        $[69] = handleReserve;
        $[70] = items;
        $[71] = loggedInUser;
        $[72] = name;
        $[73] = removeItem;
        $[74] = router;
        $[75] = updateItemFood;
        $[76] = updateQuantity;
        $[77] = t28;
    } else {
        t28 = $[77];
    }
    let t29;
    if ($[78] !== t27 || $[79] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex justify-center py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-10 w-full max-w-6xl",
                    children: [
                        t27,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                    lineNumber: 454,
                    columnNumber: 156
                }, this)
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
                lineNumber: 454,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[78] = t27;
        $[79] = t28;
        $[80] = t29;
    } else {
        t29 = $[80];
    }
    return t29;
}
_s(EventInfoPage, "bXP4vc5wlk/MzT9UgIDIfwdJG6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = EventInfoPage;
function _EventInfoPageItemsMapAnonymous(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: item_0.name,
        children: [
            item_0.name,
            " (",
            item_0.quantity,
            " left)"
        ]
    }, item_0.name, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
        lineNumber: 464,
        columnNumber: 10
    }, this);
}
function _EventInfoPageEventFood_itemsMap(item, i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            item.name,
            " — ",
            item.quantity,
            " available"
        ]
    }, i_2, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/page.tsx",
        lineNumber: 467,
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