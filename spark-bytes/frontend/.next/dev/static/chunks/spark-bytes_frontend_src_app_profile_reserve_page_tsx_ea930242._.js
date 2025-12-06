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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "6823e491fec464c6bc62a3e4bff51d698de166deea6c4a77c49bfb8fb06f995e") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6823e491fec464c6bc62a3e4bff51d698de166deea6c4a77c49bfb8fb06f995e";
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingRsvp, setEditingRsvp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editFood, setEditFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editQuantity, setEditQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t2;
    let t3;
    if ($[3] !== router) {
        t2 = ({
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
                        const { data: rsvpData, error: rsvpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*").eq("email", user.email);
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
        t3 = [
            router
        ];
        $[3] = router;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== events) {
        t4 = ({
            "ProfileReserve[handleCancel]": async (rsvp)=>{
                const confirmDelete = confirm(`Cancel reservation for ${rsvp.food_item} (x${rsvp.quantity})?`);
                if (!confirmDelete) {
                    return;
                }
                const event = events.find({
                    "ProfileReserve[handleCancel > events.find()]": (e)=>e.id === rsvp.event_id
                }["ProfileReserve[handleCancel > events.find()]"]);
                if (!event) {
                    return;
                }
                const updatedFoodItems = event.food_items.map({
                    "ProfileReserve[handleCancel > event.food_items.map()]": (item)=>item.name === rsvp.food_item ? {
                            ...item,
                            quantity: item.quantity + rsvp.quantity
                        } : item
                }["ProfileReserve[handleCancel > event.food_items.map()]"]);
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    food_items: updatedFoodItems
                }).eq("id", event.id);
                if (updateError) {
                    alert("Failed to restore food quantity.");
                    console.error(updateError);
                    return;
                }
                const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").delete().eq("id", rsvp.id);
                if (deleteError) {
                    alert("Failed to cancel reservation.");
                    console.error(deleteError);
                    return;
                }
                alert("Reservation canceled.");
                setRsvps({
                    "ProfileReserve[handleCancel > setRsvps()]": (prev)=>prev.filter({
                            "ProfileReserve[handleCancel > setRsvps() > prev.filter()]": (item_0)=>item_0.id !== rsvp.id
                        }["ProfileReserve[handleCancel > setRsvps() > prev.filter()]"])
                }["ProfileReserve[handleCancel > setRsvps()]"]);
            }
        })["ProfileReserve[handleCancel]"];
        $[6] = events;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleCancel = t4;
    let t5;
    if ($[8] !== editFood || $[9] !== editQuantity || $[10] !== editingRsvp || $[11] !== events) {
        t5 = ({
            "ProfileReserve[handleEditSubmit]": async ()=>{
                if (!editingRsvp) {
                    return;
                }
                const event_0 = events.find({
                    "ProfileReserve[handleEditSubmit > events.find()]": (e_0)=>e_0.id === editingRsvp.event_id
                }["ProfileReserve[handleEditSubmit > events.find()]"]);
                if (!event_0) {
                    return;
                }
                const oldFood = editingRsvp.food_item;
                const oldQty = editingRsvp.quantity;
                let updated = event_0.food_items.map({
                    "ProfileReserve[handleEditSubmit > event_0.food_items.map()]": (item_1)=>item_1.name === oldFood ? {
                            ...item_1,
                            quantity: item_1.quantity + oldQty
                        } : item_1
                }["ProfileReserve[handleEditSubmit > event_0.food_items.map()]"]);
                updated = updated.map({
                    "ProfileReserve[handleEditSubmit > updated.map()]": (item_2)=>item_2.name === editFood ? {
                            ...item_2,
                            quantity: item_2.quantity - editQuantity
                        } : item_2
                }["ProfileReserve[handleEditSubmit > updated.map()]"]);
                if (updated.some(_ProfileReserveHandleEditSubmitUpdatedSome)) {
                    alert("Not enough quantity available.");
                    return;
                }
                const { error: rsvpUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").update({
                    food_item: editFood,
                    quantity: editQuantity
                }).eq("id", editingRsvp.id);
                if (rsvpUpdateError) {
                    alert("Failed to update RSVP.");
                    return;
                }
                const { error: eventError_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    food_items: updated
                }).eq("id", event_0.id);
                if (eventError_0) {
                    alert("Failed to update event food inventory.");
                    return;
                }
                alert("Reservation updated!");
                setEditingRsvp(null);
                setRsvps({
                    "ProfileReserve[handleEditSubmit > setRsvps()]": (prev_0)=>prev_0.map({
                            "ProfileReserve[handleEditSubmit > setRsvps() > prev_0.map()]": (item_4)=>item_4.id === editingRsvp.id ? {
                                    ...item_4,
                                    food_item: editFood,
                                    quantity: editQuantity
                                } : item_4
                        }["ProfileReserve[handleEditSubmit > setRsvps() > prev_0.map()]"])
                }["ProfileReserve[handleEditSubmit > setRsvps()]"]);
            }
        })["ProfileReserve[handleEditSubmit]"];
        $[8] = editFood;
        $[9] = editQuantity;
        $[10] = editingRsvp;
        $[11] = events;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const handleEditSubmit = t5;
    if (loading) {
        let t6;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex justify-center items-center text-lg",
                children: "Loading reservations..."
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 227,
                columnNumber: 12
            }, this);
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        return t6;
    }
    let t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-semibold text-center mb-2",
            children: "My Events"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 237,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-center mb-12",
            children: "Food pickups you have reserved"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 238,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    let t8;
    if ($[16] !== rsvps.length) {
        t8 = rsvps.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 text-center",
            children: "You have no reservations yet."
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 247,
            columnNumber: 32
        }, this);
        $[16] = rsvps.length;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== events || $[19] !== handleCancel || $[20] !== rsvps) {
        let t10;
        if ($[22] !== events || $[23] !== handleCancel) {
            t10 = ({
                "ProfileReserve[rsvps.map()]": (rsvp_0)=>{
                    const event_1 = events.find({
                        "ProfileReserve[rsvps.map() > events.find()]": (e_1)=>e_1.id === rsvp_0.event_id
                    }["ProfileReserve[rsvps.map() > events.find()]"]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-black w-72 p-6 rounded-2xl shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: event_1?.title
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 111
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Date:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 204
                                    }, this),
                                    " ",
                                    event_1?.event_date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 170
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Time:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 281
                                    }, this),
                                    " ",
                                    formatTime(event_1?.event_time)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 370
                                    }, this),
                                    " ",
                                    event_1?.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 341
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Food Item:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 454
                                    }, this),
                                    " ",
                                    rsvp_0.food_item
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 420
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Quantity:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 533
                                    }, this),
                                    " ",
                                    rsvp_0.quantity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 504
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
                                        lineNumber: 262,
                                        columnNumber: 614
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProfileReserve[rsvps.map() > <button>.onClick]": ()=>{
                                                setEditingRsvp(rsvp_0);
                                                setEditFood(rsvp_0.food_item);
                                                setEditQuantity(rsvp_0.quantity);
                                            }
                                        }["ProfileReserve[rsvps.map() > <button>.onClick]"],
                                        className: "bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 155
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 262,
                                columnNumber: 581
                            }, this)
                        ]
                    }, rsvp_0.id, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 262,
                        columnNumber: 18
                    }, this);
                }
            })["ProfileReserve[rsvps.map()]"];
            $[22] = events;
            $[23] = handleCancel;
            $[24] = t10;
        } else {
            t10 = $[24];
        }
        t9 = rsvps.map(t10);
        $[18] = events;
        $[19] = handleCancel;
        $[20] = rsvps;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[25] !== t8 || $[26] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 px-10 py-16 max-w-6xl mx-auto w-full",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10",
                    children: [
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 289,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[25] = t8;
        $[26] = t9;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== editFood || $[29] !== editQuantity || $[30] !== editingRsvp || $[31] !== events || $[32] !== handleEditSubmit) {
        t11 = editingRsvp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl w-96 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: [
                            "Edit Reservation — ",
                            events.find({
                                "ProfileReserve[events.find()]": (e_2)=>e_2.id === editingRsvp.event_id
                            }["ProfileReserve[events.find()]"])?.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 298,
                        columnNumber: 174
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block font-medium mb-1",
                        children: "Food Item"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 300,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: editFood,
                        onChange: {
                            "ProfileReserve[<select>.onChange]": (e_3)=>setEditFood(e_3.target.value)
                        }["ProfileReserve[<select>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-4",
                        children: events.find({
                            "ProfileReserve[events.find()]": (e_4)=>e_4.id === editingRsvp.event_id
                        }["ProfileReserve[events.find()]"])?.food_items.map(_ProfileReserveAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 300,
                        columnNumber: 118
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block font-medium mb-1",
                        children: "Quantity (max 3)"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 304,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 3,
                        value: editQuantity,
                        onChange: {
                            "ProfileReserve[<input>.onChange]": (e_5)=>setEditQuantity(Number(e_5.target.value))
                        }["ProfileReserve[<input>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-6"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 304,
                        columnNumber: 164
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProfileReserve[<button>.onClick]": ()=>setEditingRsvp(null)
                                }["ProfileReserve[<button>.onClick]"],
                                className: "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 306,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEditSubmit,
                                className: "px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700",
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 308,
                                columnNumber: 124
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 306,
                        columnNumber: 99
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 298,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 298,
            columnNumber: 26
        }, this);
        $[28] = editFood;
        $[29] = editQuantity;
        $[30] = editingRsvp;
        $[31] = events;
        $[32] = handleEditSubmit;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 320,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 320,
                    columnNumber: 184
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 320,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== t10 || $[36] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t11;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    return t13;
}
_s(ProfileReserve, "GNDyoDeGFY/OCsXtsq9HpV6xTKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileReserve;
function _ProfileReserveAnonymous(item_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: item_5.name,
        children: [
            item_5.name,
            " (",
            item_5.quantity,
            " left)"
        ]
    }, item_5.name, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
        lineNumber: 337,
        columnNumber: 10
    }, this);
}
function _ProfileReserveHandleEditSubmitUpdatedSome(item_3) {
    return item_3.quantity < 0;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileReserve");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_profile_reserve_page_tsx_ea930242._.js.map