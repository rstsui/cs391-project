(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/app/admin/events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminEventsPage
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
function AdminEventsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "e976c727ddb33c925ba2a7db8d3bcaa732fc1b1e90ef8a5ea7c780a23fdbb47d") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e976c727ddb33c925ba2a7db8d3bcaa732fc1b1e90ef8a5ea7c780a23fdbb47d";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [rsvps, setRsvps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [showRsvpsMap, setShowRsvpsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [editingEvent, setEditingEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editTitle, setEditTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editLocation, setEditLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editDate, setEditDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editTime, setEditTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [editFoodItems, setEditFoodItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AdminEventsPage[loadAdminEvents]": async (userId)=>{
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*").eq("host_id", userId).order("created_at", {
                    ascending: false
                });
                if (error) {
                    console.error(error);
                    return;
                }
                const eventsData = data || [];
                setEvents(eventsData);
                const eventIds = eventsData.map(_AdminEventsPageLoadAdminEventsEventsDataMap);
                if (eventIds.length > 0) {
                    const { data: rsvpData, error: rsvpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*, rsvp_items(*)").in("event_id", eventIds);
                    if (rsvpError) {
                        console.error("Failed to load RSVPs:", rsvpError);
                        setRsvps([]);
                    } else {
                        setRsvps(rsvpData || []);
                    }
                } else {
                    setRsvps([]);
                }
            }
        })["AdminEventsPage[loadAdminEvents]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const loadAdminEvents = t4;
    let t5;
    let t6;
    if ($[6] !== router) {
        t5 = ({
            "AdminEventsPage[useEffect()]": ()=>{
                const checkRole = async function checkRole() {
                    const { data: t7 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    const { user } = t7;
                    if (!user) {
                        router.push("/login");
                        return;
                    }
                    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("role").eq("id", user.id).single();
                    if (profile?.role !== "admin") {
                        router.push("/request_access");
                        return;
                    }
                    setAuthorized(true);
                    loadAdminEvents(user.id);
                };
                checkRole();
            }
        })["AdminEventsPage[useEffect()]"];
        t6 = [
            router
        ];
        $[6] = router;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AdminEventsPage[handleDelete]": async (eventId)=>{
                if (!confirm("Delete this event? This cannot be undone.")) {
                    return;
                }
                const { data: rsvpRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("id").eq("event_id", eventId);
                const rsvpIds = rsvpRows?.map(_AdminEventsPageHandleDeleteAnonymous) || [];
                if (rsvpIds.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").delete().in("rsvp_id", rsvpIds);
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").delete().eq("event_id", eventId);
                const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").delete().eq("id", eventId);
                if (error_0) {
                    console.error(error_0);
                    alert("Failed to delete event");
                    return;
                }
                setEvents({
                    "AdminEventsPage[handleDelete > setEvents()]": (prev)=>prev.filter({
                            "AdminEventsPage[handleDelete > setEvents() > prev.filter()]": (e_0)=>e_0.id !== eventId
                        }["AdminEventsPage[handleDelete > setEvents() > prev.filter()]"])
                }["AdminEventsPage[handleDelete > setEvents()]"]);
                setRsvps({
                    "AdminEventsPage[handleDelete > setRsvps()]": (prev_0)=>prev_0.filter({
                            "AdminEventsPage[handleDelete > setRsvps() > prev_0.filter()]": (r_0)=>r_0.event_id !== eventId
                        }["AdminEventsPage[handleDelete > setRsvps() > prev_0.filter()]"])
                }["AdminEventsPage[handleDelete > setRsvps()]"]);
            }
        })["AdminEventsPage[handleDelete]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleDelete = t7;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "AdminEventsPage[handleCancel]": async (eventId_0)=>{
                if (!confirm("Are you sure you want to cancel this event?")) {
                    return;
                }
                const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    status: "cancelled"
                }).eq("id", eventId_0);
                if (error_1) {
                    alert("Failed to cancel event");
                    return;
                }
                setEvents({
                    "AdminEventsPage[handleCancel > setEvents()]": (prev_1)=>prev_1.map({
                            "AdminEventsPage[handleCancel > setEvents() > prev_1.map()]": (e_1)=>e_1.id === eventId_0 ? {
                                    ...e_1,
                                    status: "cancelled"
                                } : e_1
                        }["AdminEventsPage[handleCancel > setEvents() > prev_1.map()]"])
                }["AdminEventsPage[handleCancel > setEvents()]"]);
            }
        })["AdminEventsPage[handleCancel]"];
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const handleCancel = t8;
    const formatTime = _AdminEventsPageFormatTime;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "AdminEventsPage[openEditModal]": (event)=>{
                setEditingEvent(event);
                setEditTitle(event.title || "");
                setEditLocation(event.location || "");
                setEditDate(event.event_date || "");
                setEditTime(event.event_time || "");
                setEditFoodItems((event.food_items || []).map(_AdminEventsPageOpenEditModalAnonymous));
            }
        })["AdminEventsPage[openEditModal]"];
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const openEditModal = t9;
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "AdminEventsPage[closeEditModal]": ()=>{
                setEditingEvent(null);
                setEditTitle("");
                setEditLocation("");
                setEditDate("");
                setEditTime("");
                setEditFoodItems([]);
            }
        })["AdminEventsPage[closeEditModal]"];
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const closeEditModal = t10;
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "AdminEventsPage[updateFoodItem]": (index, field, value)=>{
                setEditFoodItems({
                    "AdminEventsPage[updateFoodItem > setEditFoodItems()]": (prev_2)=>prev_2.map({
                            "AdminEventsPage[updateFoodItem > setEditFoodItems() > prev_2.map()]": (it, i)=>i === index ? {
                                    ...it,
                                    [field]: value
                                } : it
                        }["AdminEventsPage[updateFoodItem > setEditFoodItems() > prev_2.map()]"])
                }["AdminEventsPage[updateFoodItem > setEditFoodItems()]"]);
            }
        })["AdminEventsPage[updateFoodItem]"];
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const updateFoodItem = t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "AdminEventsPage[addFoodItem]": ()=>{
                setEditFoodItems(_AdminEventsPageAddFoodItemSetEditFoodItems);
            }
        })["AdminEventsPage[addFoodItem]"];
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const addFoodItem = t12;
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "AdminEventsPage[removeFoodItem]": (index_0)=>{
                setEditFoodItems({
                    "AdminEventsPage[removeFoodItem > setEditFoodItems()]": (prev_4)=>prev_4.filter({
                            "AdminEventsPage[removeFoodItem > setEditFoodItems() > prev_4.filter()]": (_, i_0)=>i_0 !== index_0
                        }["AdminEventsPage[removeFoodItem > setEditFoodItems() > prev_4.filter()]"])
                }["AdminEventsPage[removeFoodItem > setEditFoodItems()]"]);
            }
        })["AdminEventsPage[removeFoodItem]"];
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const removeFoodItem = t13;
    let t14;
    if ($[16] !== editDate || $[17] !== editFoodItems || $[18] !== editLocation || $[19] !== editTime || $[20] !== editTitle || $[21] !== editingEvent) {
        t14 = ({
            "AdminEventsPage[handleEditSubmit]": async ()=>{
                if (!editingEvent) {
                    return;
                }
                if (!editTitle.trim()) {
                    alert("Title is required.");
                    return;
                }
                const normalizedFoodItems = editFoodItems.map(_AdminEventsPageHandleEditSubmitEditFoodItemsMap);
                const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
                    title: editTitle,
                    location: editLocation,
                    event_date: editDate,
                    event_time: editTime,
                    food_items: normalizedFoodItems
                }).eq("id", editingEvent.id);
                if (error_2) {
                    console.error("Failed to update event:", error_2);
                    alert("Failed to update event. Check console for details.");
                    return;
                }
                setEvents({
                    "AdminEventsPage[handleEditSubmit > setEvents()]": (prev_5)=>prev_5.map({
                            "AdminEventsPage[handleEditSubmit > setEvents() > prev_5.map()]": (ev)=>ev.id === editingEvent.id ? {
                                    ...ev,
                                    title: editTitle,
                                    location: editLocation,
                                    event_date: editDate,
                                    event_time: editTime,
                                    food_items: normalizedFoodItems
                                } : ev
                        }["AdminEventsPage[handleEditSubmit > setEvents() > prev_5.map()]"])
                }["AdminEventsPage[handleEditSubmit > setEvents()]"]);
                alert("Event updated!");
                closeEditModal();
            }
        })["AdminEventsPage[handleEditSubmit]"];
        $[16] = editDate;
        $[17] = editFoodItems;
        $[18] = editLocation;
        $[19] = editTime;
        $[20] = editTitle;
        $[21] = editingEvent;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const handleEditSubmit = t14;
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "AdminEventsPage[toggleShowRsvps]": (eventId_1)=>{
                setShowRsvpsMap({
                    "AdminEventsPage[toggleShowRsvps > setShowRsvpsMap()]": (prev_6)=>({
                            ...prev_6,
                            [eventId_1]: !prev_6[eventId_1]
                        })
                }["AdminEventsPage[toggleShowRsvps > setShowRsvpsMap()]"]);
            }
        })["AdminEventsPage[toggleShowRsvps]"];
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const toggleShowRsvps = t15;
    if (!authorized) {
        return null;
    }
    let t16;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-semibold mb-6",
            children: "Admin: Your Events"
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== events.length) {
        t17 = events.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-center w-full",
            children: "You haven't created any events yet."
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 379,
            columnNumber: 34
        }, this);
        $[25] = events.length;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== events || $[28] !== rsvps || $[29] !== showRsvpsMap) {
        let t19;
        if ($[31] !== rsvps || $[32] !== showRsvpsMap) {
            t19 = ({
                "AdminEventsPage[events.map()]": (event_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-md border rounded-xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: [
                                    event_0.title,
                                    " ",
                                    event_0.status === "cancelled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-600",
                                        children: "(Cancelled)"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 222
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Date:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 280
                                    }, this),
                                    " ",
                                    event_0.event_date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Time:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 330
                                    }, this),
                                    " ",
                                    formatTime(event_0.event_time)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 327
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 392
                                    }, this),
                                    " ",
                                    event_0.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 389
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Food:"
                                }, void 0, false, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                    lineNumber: 390,
                                    columnNumber: 461
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 441
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "ml-4 list-disc",
                                children: event_0.food_items?.map(_AdminEventsPageEventsMapAnonymous)
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 487
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-blue-600 text-white px-3 py-1 rounded",
                                        onClick: {
                                            "AdminEventsPage[events.map() > <button>.onClick]": ()=>openEditModal(event_0)
                                        }["AdminEventsPage[events.map() > <button>.onClick]"],
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 617
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-yellow-600 text-white px-3 py-1 rounded",
                                        onClick: {
                                            "AdminEventsPage[events.map() > <button>.onClick]": ()=>handleCancel(event_0.id)
                                        }["AdminEventsPage[events.map() > <button>.onClick]"],
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-red-600 text-white px-3 py-1 rounded",
                                        onClick: {
                                            "AdminEventsPage[events.map() > <button>.onClick]": ()=>handleDelete(event_0.id)
                                        }["AdminEventsPage[events.map() > <button>.onClick]"],
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 83
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-gray-200 text-gray-800 px-3 py-1 rounded",
                                        onClick: {
                                            "AdminEventsPage[events.map() > <button>.onClick]": ()=>toggleShowRsvps(event_0.id)
                                        }["AdminEventsPage[events.map() > <button>.onClick]"],
                                        children: showRsvpsMap[event_0.id] ? "Hide RSVPs" : "Show RSVPs"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 390,
                                columnNumber: 584
                            }, this),
                            showRsvpsMap[event_0.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 border-t pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold mb-2",
                                        children: "RSVPs"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 204
                                    }, this),
                                    rsvps.filter({
                                        "AdminEventsPage[events.map() > rsvps.filter()]": (r_3)=>r_3.event_id === event_0.id
                                    }["AdminEventsPage[events.map() > rsvps.filter()]"]).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: "No RSVPs yet."
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 81
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: rsvps.filter({
                                            "AdminEventsPage[events.map() > rsvps.filter()]": (r_1)=>r_1.event_id === event_0.id
                                        }["AdminEventsPage[events.map() > rsvps.filter()]"]).map(_AdminEventsPageEventsMapAnonymous2)
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 138
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 398,
                                columnNumber: 168
                            }, this)
                        ]
                    }, event_0.id, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 390,
                        columnNumber: 53
                    }, this)
            })["AdminEventsPage[events.map()]"];
            $[31] = rsvps;
            $[32] = showRsvpsMap;
            $[33] = t19;
        } else {
            t19 = $[33];
        }
        t18 = events.map(t19);
        $[27] = events;
        $[28] = rsvps;
        $[29] = showRsvpsMap;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[34] !== t17 || $[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center px-4 py-8 flex-grow",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 w-full max-w-4xl",
                    children: [
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                    lineNumber: 420,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[34] = t17;
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== editDate || $[38] !== editFoodItems || $[39] !== editLocation || $[40] !== editTime || $[41] !== editTitle || $[42] !== editingEvent || $[43] !== handleEditSubmit) {
        t20 = editingEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-xl w-full max-w-2xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Edit Event"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 429,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 429,
                        columnNumber: 239
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: editTitle,
                        onChange: {
                            "AdminEventsPage[<input>.onChange]": (e_2)=>setEditTitle(e_2.target.value)
                        }["AdminEventsPage[<input>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-3"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 429,
                        columnNumber: 297
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 145
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: editDate,
                                        onChange: {
                                            "AdminEventsPage[<input>.onChange]": (e_3)=>setEditDate(e_3.target.value)
                                        }["AdminEventsPage[<input>.onChange]"],
                                        className: "border w-full px-3 py-2 rounded mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 202
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 431,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 115
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: editTime,
                                        onChange: {
                                            "AdminEventsPage[<input>.onChange]": (e_4)=>setEditTime(e_4.target.value)
                                        }["AdminEventsPage[<input>.onChange]"],
                                        className: "border w-full px-3 py-2 rounded mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 433,
                                columnNumber: 110
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 431,
                        columnNumber: 100
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium",
                        children: "Location"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 435,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: editLocation,
                        onChange: {
                            "AdminEventsPage[<input>.onChange]": (e_5)=>setEditLocation(e_5.target.value)
                        }["AdminEventsPage[<input>.onChange]"],
                        className: "border w-full px-3 py-2 rounded mb-3"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 435,
                        columnNumber: 177
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mt-2",
                        children: "Food Items"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 437,
                        columnNumber: 100
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mt-2",
                        children: [
                            editFoodItems.map({
                                "AdminEventsPage[editFoodItems.map()]": (item_0, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: item_0.name,
                                                onChange: {
                                                    "AdminEventsPage[editFoodItems.map() > <input>.onChange]": (e_6)=>updateFoodItem(index_1, "name", e_6.target.value)
                                                }["AdminEventsPage[editFoodItems.map() > <input>.onChange]"],
                                                placeholder: "Food name",
                                                className: "border px-3 py-2 rounded w-2/3"
                                            }, void 0, false, {
                                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 116
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: String(item_0.quantity),
                                                onChange: {
                                                    "AdminEventsPage[editFoodItems.map() > <input>.onChange]": (e_7)=>updateFoodItem(index_1, "quantity", e_7.target.value)
                                                }["AdminEventsPage[editFoodItems.map() > <input>.onChange]"],
                                                placeholder: "Qty",
                                                className: "border px-3 py-2 rounded w-1/3"
                                            }, void 0, false, {
                                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AdminEventsPage[editFoodItems.map() > <button>.onClick]": ()=>removeFoodItem(index_1)
                                                }["AdminEventsPage[editFoodItems.map() > <button>.onClick]"],
                                                className: "text-red-500 ml-1",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 140
                                            }, this)
                                        ]
                                    }, index_1, true, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 74
                                    }, this)
                            }["AdminEventsPage[editFoodItems.map()]"]),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addFoodItem,
                                className: "text-teal-600 text-sm underline",
                                children: "+ Add food item"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 445,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 437,
                        columnNumber: 168
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-end gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeEditModal,
                                className: "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 445,
                                columnNumber: 217
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleEditSubmit,
                                className: "px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700",
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                                lineNumber: 445,
                                columnNumber: 338
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 445,
                        columnNumber: 172
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                lineNumber: 429,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 429,
            columnNumber: 27
        }, this);
        $[37] = editDate;
        $[38] = editFoodItems;
        $[39] = editLocation;
        $[40] = editTime;
        $[41] = editTitle;
        $[42] = editingEvent;
        $[43] = handleEditSubmit;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                    lineNumber: 459,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                    lineNumber: 459,
                    columnNumber: 184
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "buspark@bu.edu"
                }, void 0, false, {
                    fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                    lineNumber: 459,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== t19 || $[47] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t20;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    return t22;
}
_s(AdminEventsPage, "otc2HgXdlGISV2GLfjPMeeA8kos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminEventsPage;
function _AdminEventsPageEventsMapAnonymous2(r_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 p-3 rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Email:"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 476,
                        columnNumber: 86
                    }, this),
                    " ",
                    r_2.email
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                lineNumber: 476,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Items:"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 476,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "ml-4 list-disc",
                        children: r_2.rsvp_items?.map(_AdminEventsPageEventsMapAnonymousAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 476,
                        columnNumber: 170
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                lineNumber: 476,
                columnNumber: 125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Qty:"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                        lineNumber: 476,
                        columnNumber: 301
                    }, this),
                    " ",
                    r_2.quantity
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
                lineNumber: 476,
                columnNumber: 278
            }, this)
        ]
    }, r_2.id, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
        lineNumber: 476,
        columnNumber: 10
    }, this);
}
function _AdminEventsPageEventsMapAnonymousAnonymous(it_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            it_0.food_item,
            " — ",
            it_0.quantity
        ]
    }, it_0.id, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
        lineNumber: 479,
        columnNumber: 10
    }, this);
}
function _AdminEventsPageEventsMapAnonymous(item, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            item.name,
            " — ",
            item.quantity
        ]
    }, i_1, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/admin/events/page.tsx",
        lineNumber: 482,
        columnNumber: 10
    }, this);
}
function _AdminEventsPageHandleEditSubmitEditFoodItemsMap(f_0) {
    return {
        name: f_0.name,
        quantity: isNaN(Number(f_0.quantity)) ? f_0.quantity : Number(f_0.quantity)
    };
}
function _AdminEventsPageAddFoodItemSetEditFoodItems(prev_3) {
    return [
        ...prev_3,
        {
            name: "",
            quantity: "0"
        }
    ];
}
function _AdminEventsPageOpenEditModalAnonymous(f) {
    return {
        name: f.name,
        quantity: String(f.quantity)
    };
}
function _AdminEventsPageFormatTime(timeString) {
    if (!timeString) {
        return "";
    }
    const [hourStr, minuteStr] = timeString.split(":");
    const hour = parseInt(hourStr || "0", 10);
    const minute = parseInt(minuteStr || "0", 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    let h = hour % 12;
    if (h === 0) {
        h = 12;
    }
    return `${h}:${minute.toString().padStart(2, "0")} ${ampm}`;
}
function _AdminEventsPageHandleDeleteAnonymous(r) {
    return r.id;
}
function _AdminEventsPageLoadAdminEventsEventsDataMap(e) {
    return e.id;
}
var _c;
__turbopack_context__.k.register(_c, "AdminEventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_admin_events_page_tsx_efb21e19._.js.map