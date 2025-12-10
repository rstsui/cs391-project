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
"[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileReserve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/useAuthGuard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function formatTime(timeString) {
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "cfda425342e1c7e004277f291301880885ad021ab7732649b1d4b59bb2b126da") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfda425342e1c7e004277f291301880885ad021ab7732649b1d4b59bb2b126da";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { loading: authLoading, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthGuard"])();
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
    if ($[3] !== authLoading || $[4] !== router || $[5] !== user) {
        t2 = ({
            "ProfileReserve[useEffect()]": ()=>{
                const loadData = {
                    "ProfileReserve[useEffect() > loadData]": async ()=>{
                        if (!user) {
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
                if (!authLoading && user) {
                    loadData();
                }
            }
        })["ProfileReserve[useEffect()]"];
        t3 = [
            authLoading,
            user,
            router
        ];
        $[3] = authLoading;
        $[4] = router;
        $[5] = user;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[8] !== events) {
        t4 = ({
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
                    "ProfileReserve[handleCancel > items.forEach()]": (item)=>{
                        updatedFood = updatedFood.map({
                            "ProfileReserve[handleCancel > items.forEach() > updatedFood.map()]": (food)=>food.name === item.food_item ? {
                                    ...food,
                                    quantity: food.quantity + item.quantity
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
                    "ProfileReserve[handleCancel > setEvents()]": (prev)=>prev.map({
                            "ProfileReserve[handleCancel > setEvents() > prev.map()]": (e_0)=>e_0.id === event.id ? {
                                    ...e_0,
                                    food_items: updatedFood,
                                    attendees: event.attendees - 1
                                } : e_0
                        }["ProfileReserve[handleCancel > setEvents() > prev.map()]"])
                }["ProfileReserve[handleCancel > setEvents()]"]);
                setRsvps({
                    "ProfileReserve[handleCancel > setRsvps()]": (prev_0)=>prev_0.filter({
                            "ProfileReserve[handleCancel > setRsvps() > prev_0.filter()]": (x)=>x.id !== rsvp.id
                        }["ProfileReserve[handleCancel > setRsvps() > prev_0.filter()]"])
                }["ProfileReserve[handleCancel > setRsvps()]"]);
            }
        })["ProfileReserve[handleCancel]"];
        $[8] = events;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleCancel = t4;
    let t5;
    if ($[10] !== editFood || $[11] !== editQuantity || $[12] !== editingRsvp || $[13] !== events) {
        t5 = ({
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
                const { data: existingItems, error: loadErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").select("*").eq("rsvp_id", rsvpId);
                if (loadErr) {
                    console.error(loadErr);
                    alert("Failed to load existing items.");
                    return;
                }
                const oldItem = existingItems.find({
                    "ProfileReserve[handleEditSubmit > existingItems.find()]": (i)=>i.food_item === editFood
                }["ProfileReserve[handleEditSubmit > existingItems.find()]"]);
                const oldQty = oldItem?.quantity || 0;
                const newQty = editQuantity;
                if (newQty > 3) {
                    alert("You may only reserve up to 3 of each item.");
                    return;
                }
                const updatedFood_0 = event_0.food_items.map({
                    "ProfileReserve[handleEditSubmit > event_0.food_items.map()]": (item_0)=>{
                        if (item_0.name === editFood) {
                            return {
                                ...item_0,
                                quantity: item_0.quantity + oldQty - newQty
                            };
                        }
                        return item_0;
                    }
                }["ProfileReserve[handleEditSubmit > event_0.food_items.map()]"]);
                if (updatedFood_0.some(_ProfileReserveHandleEditSubmitUpdatedFood_0Some)) {
                    alert("Not enough quantity available.");
                    return;
                }
                if (newQty === 0 && oldItem) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").delete().eq("id", oldItem.id);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                        food_items: updatedFood_0
                    }).eq("id", event_0.id);
                    alert("Item removed!");
                    setEvents({
                        "ProfileReserve[handleEditSubmit > setEvents()]": (prev_1)=>prev_1.map({
                                "ProfileReserve[handleEditSubmit > setEvents() > prev_1.map()]": (ev)=>ev.id === event_0.id ? {
                                        ...ev,
                                        food_items: updatedFood_0
                                    } : ev
                            }["ProfileReserve[handleEditSubmit > setEvents() > prev_1.map()]"])
                    }["ProfileReserve[handleEditSubmit > setEvents()]"]);
                    setRsvps({
                        "ProfileReserve[handleEditSubmit > setRsvps()]": (prev_2)=>prev_2.map({
                                "ProfileReserve[handleEditSubmit > setRsvps() > prev_2.map()]": (r)=>r.id === rsvpId ? {
                                        ...r,
                                        rsvp_items: existingItems.filter({
                                            "ProfileReserve[handleEditSubmit > setRsvps() > prev_2.map() > existingItems.filter()]": (it)=>it.food_item !== editFood
                                        }["ProfileReserve[handleEditSubmit > setRsvps() > prev_2.map() > existingItems.filter()]"])
                                    } : r
                            }["ProfileReserve[handleEditSubmit > setRsvps() > prev_2.map()]"])
                    }["ProfileReserve[handleEditSubmit > setRsvps()]"]);
                    setEditingRsvp(null);
                    return;
                }
                if (oldItem) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").update({
                        quantity: newQty
                    }).eq("id", oldItem.id);
                } else {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").insert({
                        rsvp_id: rsvpId,
                        food_item: editFood,
                        quantity: newQty
                    });
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    food_items: updatedFood_0
                }).eq("id", event_0.id);
                alert("Reservation item updated!");
                const updatedItems = oldItem ? existingItems.map({
                    "ProfileReserve[handleEditSubmit > existingItems.map()]": (it_0)=>it_0.food_item === editFood ? {
                            ...it_0,
                            quantity: newQty
                        } : it_0
                }["ProfileReserve[handleEditSubmit > existingItems.map()]"]) : [
                    ...existingItems,
                    {
                        food_item: editFood,
                        quantity: newQty
                    }
                ];
                setEvents({
                    "ProfileReserve[handleEditSubmit > setEvents()]": (prev_3)=>prev_3.map({
                            "ProfileReserve[handleEditSubmit > setEvents() > prev_3.map()]": (ev_0)=>ev_0.id === event_0.id ? {
                                    ...ev_0,
                                    food_items: updatedFood_0
                                } : ev_0
                        }["ProfileReserve[handleEditSubmit > setEvents() > prev_3.map()]"])
                }["ProfileReserve[handleEditSubmit > setEvents()]"]);
                setRsvps({
                    "ProfileReserve[handleEditSubmit > setRsvps()]": (prev_4)=>prev_4.map({
                            "ProfileReserve[handleEditSubmit > setRsvps() > prev_4.map()]": (r_0)=>r_0.id === rsvpId ? {
                                    ...r_0,
                                    rsvp_items: updatedItems
                                } : r_0
                        }["ProfileReserve[handleEditSubmit > setRsvps() > prev_4.map()]"])
                }["ProfileReserve[handleEditSubmit > setRsvps()]"]);
                setEditingRsvp(null);
            }
        })["ProfileReserve[handleEditSubmit]"];
        $[10] = editFood;
        $[11] = editQuantity;
        $[12] = editingRsvp;
        $[13] = events;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const handleEditSubmit = t5;
    if (authLoading || loading) {
        let t6;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "min-h-screen flex items-center justify-center text-lg",
                children: "Loading reservations\u2026"
            });
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        return t6;
    }
    if (!user) {
        return null;
    }
    let t6;
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h1", {
            className: "text-3xl font-semibold text-center mb-2",
            children: "My Reservations"
        });
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
            className: "text-lg text-center mb-12",
            children: "Food pickups you have reserved"
        });
        $[16] = t6;
        $[17] = t7;
    } else {
        t6 = $[16];
        t7 = $[17];
    }
    let t8;
    if ($[18] !== rsvps.length) {
        t8 = rsvps.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
            className: "text-gray-700 text-center",
            children: "You have no reservations yet."
        });
        $[18] = rsvps.length;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== events || $[21] !== handleCancel || $[22] !== rsvps) {
        let t10;
        if ($[24] !== events || $[25] !== handleCancel) {
            t10 = ({
                "ProfileReserve[rsvps.map()]": (rsvp_0)=>{
                    const event_1 = events.find({
                        "ProfileReserve[rsvps.map() > events.find()]": (e_2)=>e_2.id === rsvp_0.event_id
                    }["ProfileReserve[rsvps.map() > events.find()]"]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "bg-white border border-black w-72 p-6 rounded-2xl shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                                className: "text-xl font-semibold",
                                children: event_1?.title
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                                className: "mt-3 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                        children: "Date:"
                                    }),
                                    " ",
                                    event_1?.event_date
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                        children: "Time:"
                                    }),
                                    " ",
                                    formatTime(event_1?.event_time)
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                        children: "Location:"
                                    }),
                                    " ",
                                    event_1?.location
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: "text-gray-700 mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                    children: "Items:"
                                })
                            }),
                            rsvp_0.rsvp_items && rsvp_0.rsvp_items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                                className: "list-disc ml-5 text-gray-700",
                                children: rsvp_0.rsvp_items.map(_ProfileReserveRsvpsMapRsvp_0Rsvp_itemsMap)
                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: "text-gray-700",
                                children: "No items reserved."
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "flex gap-3 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                        onClick: {
                                            "ProfileReserve[rsvps.map() > <button>.onClick]": ()=>handleCancel(rsvp_0)
                                        }["ProfileReserve[rsvps.map() > <button>.onClick]"],
                                        className: "bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600",
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                        onClick: {
                                            "ProfileReserve[rsvps.map() > <button>.onClick]": ()=>{
                                                setEditingRsvp(rsvp_0);
                                                const firstItem = rsvp_0.rsvp_items?.[0];
                                                setEditFood(firstItem?.food_item || "");
                                                setEditQuantity(firstItem?.quantity || 1);
                                            }
                                        }["ProfileReserve[rsvps.map() > <button>.onClick]"],
                                        className: "bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300",
                                        children: "Edit"
                                    })
                                ]
                            })
                        ]
                    }, rsvp_0.id);
                }
            })["ProfileReserve[rsvps.map()]"];
            $[24] = events;
            $[25] = handleCancel;
            $[26] = t10;
        } else {
            t10 = $[26];
        }
        t9 = rsvps.map(t10);
        $[20] = events;
        $[21] = handleCancel;
        $[22] = rsvps;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[27] !== t8 || $[28] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("main", {
            className: "flex-1 px-10 py-16 max-w-6xl mx-auto w-full",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("section", {
                    className: "flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10",
                    children: [
                        t8,
                        t9
                    ]
                })
            ]
        });
        $[27] = t8;
        $[28] = t9;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== editFood || $[31] !== editQuantity || $[32] !== editingRsvp || $[33] !== events || $[34] !== handleEditSubmit) {
        t11 = editingRsvp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "bg-white p-6 rounded-xl w-96 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: [
                            "Edit Reservation \u2014",
                            " ",
                            events.find({
                                "ProfileReserve[events.find()]": (e_3)=>e_3.id === editingRsvp.event_id
                            }["ProfileReserve[events.find()]"])?.title
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: "block font-medium mb-1",
                        children: "Food Item"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
                        value: editFood || "",
                        onChange: {
                            "ProfileReserve[<select>.onChange]": (e_4)=>setEditFood(e_4.target.value)
                        }["ProfileReserve[<select>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-4",
                        children: events.find({
                            "ProfileReserve[events.find()]": (e_5)=>e_5.id === editingRsvp.event_id
                        }["ProfileReserve[events.find()]"])?.food_items.map(_ProfileReserveAnonymous)
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: "block font-medium mb-1",
                        children: "Quantity (max 3)"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        type: "number",
                        min: 1,
                        max: 3,
                        value: editQuantity,
                        onChange: {
                            "ProfileReserve[<input>.onChange]": (e_6)=>setEditQuantity(Number(e_6.target.value))
                        }["ProfileReserve[<input>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-6"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                onClick: {
                                    "ProfileReserve[<button>.onClick]": ()=>setEditingRsvp(null)
                                }["ProfileReserve[<button>.onClick]"],
                                className: "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",
                                children: "Close"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                onClick: handleEditSubmit,
                                className: "px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700",
                                children: "Save Changes"
                            })
                        ]
                    })
                ]
            })
        });
        $[30] = editFood;
        $[31] = editQuantity;
        $[32] = editingRsvp;
        $[33] = events;
        $[34] = handleEditSubmit;
        $[35] = t11;
    } else {
        t11 = $[35];
    }
    let t12;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: "buspark@bu.edu"
                })
            ]
        });
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t10 || $[38] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t10,
                t11,
                t12
            ]
        });
        $[37] = t10;
        $[38] = t11;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    return t13;
}
_s(ProfileReserve, "qEw2LQpB3CsHFw/qU0d6TY4xYEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$useAuthGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthGuard"]
    ];
});
_c = ProfileReserve;
function _ProfileReserveAnonymous(item_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("option", {
        value: item_2.name,
        children: [
            item_2.name,
            " (",
            item_2.quantity,
            " left)"
        ]
    }, item_2.name);
}
function _ProfileReserveRsvpsMapRsvp_0Rsvp_itemsMap(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
        children: [
            item_1.food_item,
            " \xD7 ",
            item_1.quantity
        ]
    }, item_1.id);
}
function _ProfileReserveHandleEditSubmitUpdatedFood_0Some(i_0) {
    return i_0.quantity < 0;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileReserve");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_4e3d117e._.js.map