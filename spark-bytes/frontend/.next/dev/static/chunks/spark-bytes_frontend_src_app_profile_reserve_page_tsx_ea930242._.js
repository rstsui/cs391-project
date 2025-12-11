(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileReserve
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
/* Format time like 7:30 PM */ function formatTime(timeString) {
    if (!timeString) return "";
    const [hourStr, minuteStr] = timeString.split(":");
    let hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}
function ProfileReserve() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "f240e46fd31dc3bb5f28d658a6c32ebc6a5414eab8fbdd5f6e425831a65401df") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f240e46fd31dc3bb5f28d658a6c32ebc6a5414eab8fbdd5f6e425831a65401df";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [rsvps, setRsvps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingRsvp, setEditingRsvp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [editItems, setEditItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    let t4;
    if ($[4] !== router) {
        t3 = ({
            "ProfileReserve[useEffect()]": ()=>{
                const loadData = {
                    "ProfileReserve[useEffect() > loadData]": async ()=>{
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                        const user = data?.user;
                        if (!user) {
                            router.push("/login");
                            return;
                        }
                        if (!user.email?.endsWith("@bu.edu")) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                            alert("You must use your BU email to log in.");
                            router.push("/login");
                            return;
                        }
                        const { data: rsvpData, error: rsvpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*, rsvp_items(*)").eq("email", user.email);
                        if (rsvpError) {
                            console.error("RSVP fetch error:", rsvpError);
                        }
                        const { data: eventData, error: eventError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*");
                        if (eventError) {
                            console.error("Event fetch error:", eventError);
                        }
                        setRsvps(rsvpData || []);
                        setEvents(eventData || []);
                        setLoading(false);
                    }
                }["ProfileReserve[useEffect() > loadData]"];
                loadData();
            }
        })["ProfileReserve[useEffect()]"];
        t4 = [
            router
        ];
        $[4] = router;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProfileReserve[updateItemQuantity]": (index, newQty)=>{
                setEditItems({
                    "ProfileReserve[updateItemQuantity > setEditItems()]": (prev)=>prev.map({
                            "ProfileReserve[updateItemQuantity > setEditItems() > prev.map()]": (item, i)=>i === index ? {
                                    ...item,
                                    quantity: newQty
                                } : item
                        }["ProfileReserve[updateItemQuantity > setEditItems() > prev.map()]"])
                }["ProfileReserve[updateItemQuantity > setEditItems()]"]);
            }
        })["ProfileReserve[updateItemQuantity]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const updateItemQuantity = t5;
    let t6;
    if ($[8] !== events) {
        t6 = ({
            "ProfileReserve[handleCancel]": async (rsvp)=>{
                const yes = confirm("Cancel this reservation?");
                if (!yes) {
                    return;
                }
                const { data: items, error: itemsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").select("*").eq("rsvp_id", rsvp.id);
                if (itemsError) {
                    console.error(itemsError);
                    alert("Could not load reservation items.");
                    return;
                }
                const event = events.find({
                    "ProfileReserve[handleCancel > events.find()]": (e)=>e.id === rsvp.event_id
                }["ProfileReserve[handleCancel > events.find()]"]);
                if (!event) {
                    alert("Event not found.");
                    return;
                }
                let updatedFood = [
                    ...event.food_items
                ];
                items.forEach({
                    "ProfileReserve[handleCancel > items.forEach()]": (item_0)=>{
                        updatedFood = updatedFood.map({
                            "ProfileReserve[handleCancel > items.forEach() > updatedFood.map()]": (food)=>food.name === item_0.food_item ? {
                                    ...food,
                                    quantity: food.quantity + item_0.quantity
                                } : food
                        }["ProfileReserve[handleCancel > items.forEach() > updatedFood.map()]"]);
                    }
                }["ProfileReserve[handleCancel > items.forEach()]"]);
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    food_items: updatedFood,
                    attendees: Math.max(0, (event.attendees || 1) - 1)
                }).eq("id", event.id);
                if (updateError) {
                    console.error(updateError);
                    alert("Failed to update event inventory.");
                    return;
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").delete().eq("rsvp_id", rsvp.id);
                const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").delete().eq("id", rsvp.id);
                if (deleteError) {
                    console.error(deleteError);
                    alert("Failed to delete RSVP.");
                    return;
                }
                alert("Reservation canceled.");
                setEvents({
                    "ProfileReserve[handleCancel > setEvents()]": (prev_0)=>prev_0.map({
                            "ProfileReserve[handleCancel > setEvents() > prev_0.map()]": (e_0)=>e_0.id === event.id ? {
                                    ...e_0,
                                    food_items: updatedFood,
                                    attendees: event.attendees - 1
                                } : e_0
                        }["ProfileReserve[handleCancel > setEvents() > prev_0.map()]"])
                }["ProfileReserve[handleCancel > setEvents()]"]);
                setRsvps({
                    "ProfileReserve[handleCancel > setRsvps()]": (prev_1)=>prev_1.filter({
                            "ProfileReserve[handleCancel > setRsvps() > prev_1.filter()]": (x)=>x.id !== rsvp.id
                        }["ProfileReserve[handleCancel > setRsvps() > prev_1.filter()]"])
                }["ProfileReserve[handleCancel > setRsvps()]"]);
            }
        })["ProfileReserve[handleCancel]"];
        $[8] = events;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleCancel = t6;
    let t7;
    if ($[10] !== editItems || $[11] !== editingRsvp || $[12] !== events) {
        t7 = ({
            "ProfileReserve[handleEditSubmit]": async ()=>{
                if (!editingRsvp) {
                    return;
                }
                const rsvpId = editingRsvp.id;
                const event_0 = events.find({
                    "ProfileReserve[handleEditSubmit > events.find()]": (e_1)=>e_1.id === editingRsvp.event_id
                }["ProfileReserve[handleEditSubmit > events.find()]"]);
                if (!event_0) {
                    return;
                }
                const { data: existingItemsRaw } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").select("*").eq("rsvp_id", rsvpId);
                const existingItems = existingItemsRaw || [];
                let updatedFood_0 = [
                    ...event_0.food_items
                ];
                for (const existing of existingItems){
                    const edited = editItems.find({
                        "ProfileReserve[handleEditSubmit > editItems.find()]": (e_2)=>e_2.food_item === existing.food_item
                    }["ProfileReserve[handleEditSubmit > editItems.find()]"]);
                    const newQty_0 = edited?.quantity ?? existing.quantity;
                    const oldQty = existing.quantity;
                    if (newQty_0 < 1) {
                        alert("Quantity must be at least 1.");
                        return;
                    }
                    if (newQty_0 > 3) {
                        alert("Max quantity per item is 3.");
                        return;
                    }
                    updatedFood_0 = updatedFood_0.map({
                        "ProfileReserve[handleEditSubmit > updatedFood_0.map()]": (f)=>f.name === existing.food_item ? {
                                ...f,
                                quantity: f.quantity + oldQty - newQty_0
                            } : f
                    }["ProfileReserve[handleEditSubmit > updatedFood_0.map()]"]);
                    const check = updatedFood_0.find(_ProfileReserveHandleEditSubmitUpdatedFood_0Find);
                    if (check) {
                        alert(`Not enough ${check.name} available.`);
                        return;
                    }
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").update({
                        quantity: newQty_0
                    }).eq("id", existing.id);
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    food_items: updatedFood_0
                }).eq("id", event_0.id);
                alert("Reservation updated!");
                setEvents({
                    "ProfileReserve[handleEditSubmit > setEvents()]": (prev_2)=>prev_2.map({
                            "ProfileReserve[handleEditSubmit > setEvents() > prev_2.map()]": (ev)=>ev.id === event_0.id ? {
                                    ...ev,
                                    food_items: updatedFood_0
                                } : ev
                        }["ProfileReserve[handleEditSubmit > setEvents() > prev_2.map()]"])
                }["ProfileReserve[handleEditSubmit > setEvents()]"]);
                setRsvps({
                    "ProfileReserve[handleEditSubmit > setRsvps()]": (prev_3)=>prev_3.map({
                            "ProfileReserve[handleEditSubmit > setRsvps() > prev_3.map()]": (r)=>r.id === rsvpId ? {
                                    ...r,
                                    rsvp_items: editItems
                                } : r
                        }["ProfileReserve[handleEditSubmit > setRsvps() > prev_3.map()]"])
                }["ProfileReserve[handleEditSubmit > setRsvps()]"]);
                setEditingRsvp(null);
            }
        })["ProfileReserve[handleEditSubmit]"];
        $[10] = editItems;
        $[11] = editingRsvp;
        $[12] = events;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleEditSubmit = t7;
    let t8;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-semibold text-center mb-2",
            children: "My Reservations"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 289,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-center mb-12",
            children: "Food pickups you have reserved"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 290,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t8 = $[14];
        t9 = $[15];
    }
    let t10;
    if ($[16] !== rsvps.length) {
        t10 = rsvps.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 text-center",
            children: "You have no reservations yet."
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 299,
            columnNumber: 33
        }, this);
        $[16] = rsvps.length;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== events || $[19] !== handleCancel || $[20] !== rsvps) {
        let t12;
        if ($[22] !== events || $[23] !== handleCancel) {
            t12 = ({
                "ProfileReserve[rsvps.map()]": (rsvp_0)=>{
                    const event_1 = events.find({
                        "ProfileReserve[rsvps.map() > events.find()]": (e_3)=>e_3.id === rsvp_0.event_id
                    }["ProfileReserve[rsvps.map() > events.find()]"]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-black w-72 p-6 rounded-2xl shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: event_1?.title
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 111
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Date:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 204
                                    }, this),
                                    " ",
                                    event_1?.event_date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 170
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Time:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 281
                                    }, this),
                                    " ",
                                    formatTime(event_1?.event_time)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 370
                                    }, this),
                                    " ",
                                    event_1?.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 341
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Items:"
                                }, void 0, false, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 454
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 420
                            }, this),
                            rsvp_0.rsvp_items && rsvp_0.rsvp_items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc ml-5 text-gray-700",
                                children: rsvp_0.rsvp_items.map(_ProfileReserveRsvpsMapRsvp_0Rsvp_itemsMap)
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 534
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: "No items reserved."
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 654
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProfileReserve[rsvps.map() > <button>.onClick]": ()=>handleCancel(rsvp_0)
                                        }["ProfileReserve[rsvps.map() > <button>.onClick]"],
                                        className: "bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 739
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProfileReserve[rsvps.map() > <button>.onClick]": ()=>{
                                                setEditingRsvp(rsvp_0);
                                                setEditingRsvp(rsvp_0);
                                                setEditItems(rsvp_0.rsvp_items.map(_ProfileReserveRsvpsMapButtonOnClickRsvp_0Rsvp_itemsMap));
                                            }
                                        }["ProfileReserve[rsvps.map() > <button>.onClick]"],
                                        className: "bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 155
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 314,
                                columnNumber: 706
                            }, this)
                        ]
                    }, rsvp_0.id, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 314,
                        columnNumber: 18
                    }, this);
                }
            })["ProfileReserve[rsvps.map()]"];
            $[22] = events;
            $[23] = handleCancel;
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        t11 = rsvps.map(t12);
        $[18] = events;
        $[19] = handleCancel;
        $[20] = rsvps;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[25] !== t10 || $[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 px-10 py-16 max-w-6xl mx-auto w-full",
            children: [
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 341,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== editItems || $[29] !== editingRsvp || $[30] !== events || $[31] !== handleEditSubmit) {
        t13 = editingRsvp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl w-96 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: [
                            "Edit Reservation — ",
                            events.find({
                                "ProfileReserve[events.find()]": (e_4)=>e_4.id === editingRsvp.event_id
                            }["ProfileReserve[events.find()]"])?.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 350,
                        columnNumber: 180
                    }, this),
                    editItems.map({
                        "ProfileReserve[editItems.map()]": (item_2, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 border-b pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: item_2.food_item
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm mt-1",
                                        children: "Quantity (1–3)"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 175
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        max: 3,
                                        value: item_2.quantity,
                                        onChange: {
                                            "ProfileReserve[editItems.map() > <input>.onChange]": (e_5)=>updateItemQuantity(index_0, Number(e_5.target.value))
                                        }["ProfileReserve[editItems.map() > <input>.onChange]"],
                                        className: "border w-full px-3 py-2 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 235
                                    }, this)
                                ]
                            }, item_2.food_item, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 353,
                                columnNumber: 67
                            }, this)
                    }["ProfileReserve[editItems.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProfileReserve[<button>.onClick]": ()=>setEditingRsvp(null)
                                }["ProfileReserve[<button>.onClick]"],
                                className: "px-4 py-2 bg-gray-300 rounded",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 356,
                                columnNumber: 90
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEditSubmit,
                                className: "px-4 py-2 bg-teal-600 text-white rounded",
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 358,
                                columnNumber: 106
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 356,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 350,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 350,
            columnNumber: 26
        }, this);
        $[28] = editItems;
        $[29] = editingRsvp;
        $[30] = events;
        $[31] = handleEditSubmit;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 369,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 369,
                    columnNumber: 184
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 369,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t12 || $[35] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t13;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    return t15;
}
_s(ProfileReserve, "Q0PhGrSRC2NyxPDrob4s1qonW48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileReserve;
function _ProfileReserveRsvpsMapButtonOnClickRsvp_0Rsvp_itemsMap(i_0) {
    return {
        id: i_0.id,
        food_item: i_0.food_item,
        quantity: i_0.quantity
    };
}
function _ProfileReserveRsvpsMapRsvp_0Rsvp_itemsMap(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            item_1.food_item,
            " × ",
            item_1.quantity
        ]
    }, item_1.id, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
        lineNumber: 393,
        columnNumber: 10
    }, this);
}
function _ProfileReserveHandleEditSubmitUpdatedFood_0Find(f_0) {
    return f_0.quantity < 0;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileReserve");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_profile_reserve_page_tsx_ea930242._.js.map