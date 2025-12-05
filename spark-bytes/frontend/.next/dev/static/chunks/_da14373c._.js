(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/events/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventInfoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
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
const EventMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/events/[id]/map_component.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/events/[id]/map_component.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EventMap;
function EventInfoPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "d7fca1e9112e41565c0d7573c7ad274814152fe7da8fbb7bc39e98e30f16859f") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7fca1e9112e41565c0d7573c7ad274814152fe7da8fbb7bc39e98e30f16859f";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const eventId = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loggedInUser, setLoggedInUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== eventId) {
        t1 = ({
            "EventInfoPage[useEffect()]": ()=>{
                const loadEvent = async function loadEvent() {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*").eq("id", eventId).maybeSingle();
                    const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== email || $[6] !== event || $[7] !== eventId || $[8] !== name || $[9] !== router || $[10] !== selectedItems) {
        t3 = async function handleReserve(e) {
            e.preventDefault();
            if (!event) {
                return;
            }
            if (selectedItems.length === 0) {
                alert("Please select at least one food item.");
                return;
            }
            if (event.attendees >= event.capacity) {
                alert("This event is full.");
                return;
            }
            for (const sel of selectedItems){
                const foodObj = event.food_items.find({
                    "EventInfoPage[handleReserve > event.food_items.find()]": (f)=>f.name === sel.name
                }["EventInfoPage[handleReserve > event.food_items.find()]"]);
                if (!foodObj) {
                    alert(`Invalid food selection: ${sel.name}`);
                    return;
                }
                if (sel.quantity > foodObj.quantity) {
                    alert(`Not enough ${sel.name} available.`);
                    return;
                }
                if (sel.quantity > 3) {
                    alert(`You can only reserve up to 3 of ${sel.name}.`);
                    return;
                }
            }
            const { data: existingRSVP } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*").eq("email", email).eq("event_id", eventId);
            if (existingRSVP && existingRSVP.length > 0) {
                alert("You already reserved food for this event. Go to my events to view or edit your reservation.");
                return;
            }
            const { data: newRsvp, error: rsvpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").insert({
                event_id: event.id,
                name,
                email
            }).select().maybeSingle();
            if (rsvpError) {
                console.error(rsvpError);
                alert("Failed to reserve.");
                return;
            }
            const itemsPayload = selectedItems.map({
                "EventInfoPage[handleReserve > selectedItems.map()]": (item)=>({
                        rsvp_id: newRsvp.id,
                        food_item: item.name,
                        quantity: item.quantity
                    })
            }["EventInfoPage[handleReserve > selectedItems.map()]"]);
            const { error: itemsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").insert(itemsPayload);
            if (itemsError) {
                console.error(itemsError);
                alert("Failed to save food selections.");
                return;
            }
            const updatedFood = event.food_items.map({
                "EventInfoPage[handleReserve > event.food_items.map()]": (item_0)=>{
                    const sel_0 = selectedItems.find({
                        "EventInfoPage[handleReserve > event.food_items.map() > selectedItems.find()]": (s)=>s.name === item_0.name
                    }["EventInfoPage[handleReserve > event.food_items.map() > selectedItems.find()]"]);
                    return sel_0 ? {
                        ...item_0,
                        quantity: item_0.quantity - sel_0.quantity
                    } : item_0;
                }
            }["EventInfoPage[handleReserve > event.food_items.map()]"]);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                attendees: event.attendees + 1,
                food_items: updatedFood
            }).eq("id", event.id);
            alert("Reservation confirmed!");
            router.refresh();
        };
        $[5] = email;
        $[6] = event;
        $[7] = eventId;
        $[8] = name;
        $[9] = router;
        $[10] = selectedItems;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const handleReserve = t3;
    if (loading || !event) {
        let t4;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 text-center",
                children: "Loading event..."
            }, void 0, false, {
                fileName: "[project]/src/app/events/[id]/page.tsx",
                lineNumber: 195,
                columnNumber: 12
            }, this);
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        return t4;
    }
    let t4;
    if ($[13] !== event.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold mb-3",
            children: event.title
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[13] = event.title;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== event.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 mb-6 leading-relaxed",
            children: event.description
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, this);
        $[15] = event.description;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Location:"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== event.location) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t6,
                " ",
                event.location
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[18] = event.location;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Date:"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 235,
            columnNumber: 10
        }, this);
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== event.event_date) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t8,
                " ",
                event.event_date
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 242,
            columnNumber: 10
        }, this);
        $[21] = event.event_date;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Time:"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== event.event_time) {
        t11 = formatTime(event.event_time);
        $[24] = event.event_time;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t10,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Created by:"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== event.organizer_email) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t13,
                " ",
                event.organizer_email
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[29] = event.organizer_email;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Available Food:"
            }, void 0, false, {
                fileName: "[project]/src/app/events/[id]/page.tsx",
                lineNumber: 288,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== event.food_items) {
        t16 = event.food_items.map(_EventInfoPageEventFood_itemsMap);
        $[32] = event.food_items;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "ml-6 list-disc",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "Capacity:"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== event.attendees || $[38] !== event.capacity) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t18,
                " ",
                event.attendees,
                "/",
                event.capacity
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[37] = event.attendees;
        $[38] = event.capacity;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t12 || $[41] !== t14 || $[42] !== t17 || $[43] !== t19 || $[44] !== t7 || $[45] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 mb-8 text-gray-600 text-sm",
            children: [
                t7,
                t9,
                t12,
                t14,
                t15,
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t14;
        $[42] = t17;
        $[43] = t19;
        $[44] = t7;
        $[45] = t9;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-64 rounded-lg border border-gray-300 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventMap, {
                lat: 42.3498,
                lng: -71.099
            }, void 0, false, {
                fileName: "[project]/src/app/events/[id]/page.tsx",
                lineNumber: 340,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t20 || $[49] !== t4 || $[50] !== t5) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm",
            children: [
                t4,
                t5,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[48] = t20;
        $[49] = t4;
        $[50] = t5;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== email || $[53] !== event.food_items || $[54] !== handleReserve || $[55] !== loggedInUser || $[56] !== name || $[57] !== router || $[58] !== selectedItems) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-1/3 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-teal-600 text-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center",
                children: !loggedInUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Log in to reserve food"
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[id]/page.tsx",
                            lineNumber: 357,
                            columnNumber: 192
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "EventInfoPage[<button>.onClick]": ()=>router.push("/login")
                            }["EventInfoPage[<button>.onClick]"],
                            className: "bg-white text-teal-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100",
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[id]/page.tsx",
                            lineNumber: 357,
                            columnNumber: 262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/events/[id]/page.tsx",
                    lineNumber: 357,
                    columnNumber: 163
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-6 text-center",
                            children: "Reserve Food"
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[id]/page.tsx",
                            lineNumber: 359,
                            columnNumber: 163
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col gap-4",
                            onSubmit: handleReserve,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 303
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: name,
                                            onChange: {
                                                "EventInfoPage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
                                            }["EventInfoPage[<input>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[id]/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm mb-1",
                                            children: "BU Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            required: true,
                                            value: email,
                                            onChange: {
                                                "EventInfoPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
                                            }["EventInfoPage[<input>.onChange]"],
                                            className: "p-2 w-full rounded-md text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 165
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[id]/page.tsx",
                                    lineNumber: 361,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        event.food_items.map({
                                            "EventInfoPage[event.food_items.map()]": (item_2, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 bg-white text-black p-2 rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                item_2.name,
                                                                " (",
                                                                item_2.quantity,
                                                                " left)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 177
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: 0,
                                                            max: 3,
                                                            value: selectedItems.find({
                                                                "EventInfoPage[event.food_items.map() > selectedItems.find()]": (si)=>si.name === item_2.name
                                                            }["EventInfoPage[event.food_items.map() > selectedItems.find()]"])?.quantity || 0,
                                                            onChange: {
                                                                "EventInfoPage[event.food_items.map() > <input>.onChange]": (e_2)=>{
                                                                    const qty = Number(e_2.target.value);
                                                                    setSelectedItems({
                                                                        "EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems()]": (prev)=>{
                                                                            if (qty === 0) {
                                                                                return prev.filter({
                                                                                    "EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.filter()]": (p)=>p.name !== item_2.name
                                                                                }["EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.filter()]"]);
                                                                            }
                                                                            const exists = prev.find({
                                                                                "EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.find()]": (p_0)=>p_0.name === item_2.name
                                                                            }["EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.find()]"]);
                                                                            if (exists) {
                                                                                return prev.map({
                                                                                    "EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.map()]": (p_1)=>p_1.name === item_2.name ? {
                                                                                            ...p_1,
                                                                                            quantity: qty
                                                                                        } : p_1
                                                                                }["EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems() > prev.map()]"]);
                                                                            }
                                                                            return [
                                                                                ...prev,
                                                                                {
                                                                                    name: item_2.name,
                                                                                    quantity: qty
                                                                                }
                                                                            ];
                                                                        }
                                                                    }["EventInfoPage[event.food_items.map() > <input>.onChange > setSelectedItems()]"]);
                                                                }
                                                            }["EventInfoPage[event.food_items.map() > <input>.onChange]"],
                                                            className: "w-20 p-1 border rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 245
                                                        }, this)
                                                    ]
                                                }, i_0, true, {
                                                    fileName: "[project]/src/app/events/[id]/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 75
                                                }, this)
                                        }["EventInfoPage[event.food_items.map()]"]),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs opacity-80 mt-2",
                                            children: "You may select up to 3 of each item."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/[id]/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[id]/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-white text-teal-700 font-semibold py-2 rounded-md hover:bg-gray-100 mt-4",
                                    children: "Reserve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[id]/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/events/[id]/page.tsx",
                            lineNumber: 359,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/events/[id]/page.tsx",
                lineNumber: 357,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[52] = email;
        $[53] = event.food_items;
        $[54] = handleReserve;
        $[55] = loggedInUser;
        $[56] = name;
        $[57] = router;
        $[58] = selectedItems;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    let t24;
    if ($[60] !== t22 || $[61] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex justify-center py-16 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-10 w-full max-w-6xl",
                children: [
                    t22,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/[id]/page.tsx",
                lineNumber: 409,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[60] = t22;
        $[61] = t23;
        $[62] = t24;
    } else {
        t24 = $[62];
    }
    let t25;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/[id]/page.tsx",
                    lineNumber: 418,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/[id]/page.tsx",
                    lineNumber: 418,
                    columnNumber: 182
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/[id]/page.tsx",
                    lineNumber: 418,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[63] = t25;
    } else {
        t25 = $[63];
    }
    let t26;
    if ($[64] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[id]/page.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[64] = t24;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    return t26;
}
_s(EventInfoPage, "DrqkfLple8x106R5SYomUGJXazI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = EventInfoPage;
function _EventInfoPageEventFood_itemsMap(item_1, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            item_1.name,
            " — ",
            item_1.quantity,
            " available"
        ]
    }, i, true, {
        fileName: "[project]/src/app/events/[id]/page.tsx",
        lineNumber: 434,
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
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
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
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
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
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

//# sourceMappingURL=_da14373c._.js.map