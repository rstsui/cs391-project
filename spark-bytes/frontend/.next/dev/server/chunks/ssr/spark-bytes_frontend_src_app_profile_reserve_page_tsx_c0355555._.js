module.exports = [
"[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileReserve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [rsvps, setRsvps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingRsvp, setEditingRsvp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editItems, setEditItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /* Load RSVPs + Events */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            const user = data?.user;
            if (!user) {
                router.push("/login");
                return;
            }
            if (!user.email?.endsWith("@bu.edu")) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                alert("You must use your BU email to log in.");
                router.push("/login");
                return;
            }
            // Load RSVPs
            const { data: rsvpData, error: rsvpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").select("*, rsvp_items(*)") // JOIN rsvp_items
            .eq("email", user.email);
            if (rsvpError) console.error("RSVP fetch error:", rsvpError);
            // Load events
            const { data: eventData, error: eventError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("events").select("*");
            if (eventError) console.error("Event fetch error:", eventError);
            setRsvps(rsvpData || []);
            setEvents(eventData || []);
            setLoading(false);
        };
        loadData();
    }, [
        router
    ]);
    const updateItemQuantity = (index, newQty)=>{
        setEditItems((prev)=>prev.map((item, i)=>i === index ? {
                    ...item,
                    quantity: newQty
                } : item));
    };
    /* CANCEL A RESERVATION */ /* CANCEL A RESERVATION — supports multiple food items */ const handleCancel = async (rsvp)=>{
        const yes = confirm("Cancel this reservation?");
        if (!yes) return;
        // 1. Load all food items attached to this RSVP
        const { data: items, error: itemsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").select("*").eq("rsvp_id", rsvp.id);
        if (itemsError) {
            console.error(itemsError);
            alert("Could not load reservation items.");
            return;
        }
        const event = events.find((e)=>e.id === rsvp.event_id);
        if (!event) {
            alert("Event not found.");
            return;
        }
        // 2. Restore EVERY food item qty
        let updatedFood = [
            ...event.food_items
        ];
        items.forEach((item)=>{
            updatedFood = updatedFood.map((food)=>food.name === item.food_item ? {
                    ...food,
                    quantity: food.quantity + item.quantity
                } : food);
        });
        // 3. Update event inventory + attendees count
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
            food_items: updatedFood,
            attendees: Math.max(0, (event.attendees || 1) - 1)
        }).eq("id", event.id);
        if (updateError) {
            console.error(updateError);
            alert("Failed to update event inventory.");
            return;
        }
        // 4. Delete all rsvp_items rows for this rsvp
        await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").delete().eq("rsvp_id", rsvp.id);
        // 5. Delete the rsvp itself
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvps").delete().eq("id", rsvp.id);
        if (deleteError) {
            console.error(deleteError);
            alert("Failed to delete RSVP.");
            return;
        }
        alert("Reservation canceled.");
        // 6. Update UI
        setEvents((prev)=>prev.map((e)=>e.id === event.id ? {
                    ...e,
                    food_items: updatedFood,
                    attendees: event.attendees - 1
                } : e));
        setRsvps((prev)=>prev.filter((x)=>x.id !== rsvp.id));
    };
    /* SAVE EDIT — supports multiple food items */ /* SAVE EDIT — supports multiple food items */ const handleEditSubmit = async ()=>{
        if (!editingRsvp) return;
        const rsvpId = editingRsvp.id;
        const event = events.find((e)=>e.id === editingRsvp.event_id);
        if (!event) return;
        // Load existing items safely
        const { data: existingItemsRaw } = await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").select("*").eq("rsvp_id", rsvpId);
        const existingItems = existingItemsRaw || [];
        let updatedFood = [
            ...event.food_items
        ];
        // Loop through every existing reserved item
        for (const existing of existingItems){
            const edited = editItems.find((e)=>e.food_item === existing.food_item);
            // If UI somehow doesn't send something, default to old quantity
            const newQty = edited?.quantity ?? existing.quantity;
            const oldQty = existing.quantity;
            // Validate range
            if (newQty < 1) {
                alert("Quantity must be at least 1.");
                return;
            }
            if (newQty > 3) {
                alert("Max quantity per item is 3.");
                return;
            }
            // Update inventory: add back old, subtract new
            updatedFood = updatedFood.map((f)=>f.name === existing.food_item ? {
                    ...f,
                    quantity: f.quantity + oldQty - newQty
                } : f);
            // Prevent negative inventory
            const check = updatedFood.find((f)=>f.quantity < 0);
            if (check) {
                alert(`Not enough ${check.name} available.`);
                return;
            }
            // Update item quantity in DB
            await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("rsvp_items").update({
                quantity: newQty
            }).eq("id", existing.id);
        }
        // Update event inventory in DB
        await __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("events").update({
            food_items: updatedFood
        }).eq("id", event.id);
        alert("Reservation updated!");
        // Update state (UI)
        setEvents((prev)=>prev.map((ev)=>ev.id === event.id ? {
                    ...ev,
                    food_items: updatedFood
                } : ev));
        setRsvps((prev)=>prev.map((r)=>r.id === rsvpId ? {
                    ...r,
                    rsvp_items: editItems
                } // filtered & updated items
                 : r));
        setEditingRsvp(null);
    };
    /* UI */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 px-10 py-16 max-w-6xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold text-center mb-2",
                        children: "My Reservations"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-center mb-12",
                        children: "Food pickups you have reserved"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10",
                        children: [
                            rsvps.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 text-center",
                                children: "You have no reservations yet."
                            }, void 0, false, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 259,
                                columnNumber: 47
                            }, this),
                            rsvps.map((rsvp)=>{
                                const event = events.find((e)=>e.id === rsvp.event_id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-black w-72 p-6 rounded-2xl shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: event?.title
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                event?.event_date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Time:"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                formatTime(event?.event_time)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Location:"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                event?.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 mt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Items:"
                                            }, void 0, false, {
                                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        rsvp.rsvp_items && rsvp.rsvp_items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc ml-5 text-gray-700",
                                            children: rsvp.rsvp_items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        item.food_item,
                                                        " × ",
                                                        item.quantity
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: "No items reserved."
                                        }, void 0, false, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCancel(rsvp),
                                                    className: "bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingRsvp(rsvp);
                                                        setEditingRsvp(rsvp);
                                                        setEditItems(rsvp.rsvp_items.map((i)=>({
                                                                id: i.id,
                                                                food_item: i.food_item,
                                                                quantity: i.quantity
                                                            })));
                                                    },
                                                    className: "bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, rsvp.id, true, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            editingRsvp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl w-96 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: [
                                "Edit Reservation — ",
                                events.find((e)=>e.id === editingRsvp.event_id)?.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                            lineNumber: 338,
                            columnNumber: 7
                        }, this),
                        editItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 border-b pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: item.food_item
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm mt-1",
                                        children: "Quantity (1–3)"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        max: 3,
                                        value: item.quantity,
                                        onChange: (e)=>updateItemQuantity(index, Number(e.target.value)),
                                        className: "border w-full px-3 py-2 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, item.food_item, true, {
                                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                lineNumber: 345,
                                columnNumber: 9
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingRsvp(null),
                                    className: "px-4 py-2 bg-gray-300 rounded",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEditSubmit,
                                    className: "px-4 py-2 bg-teal-600 text-white rounded",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                            lineNumber: 362,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                    lineNumber: 337,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 336,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black text-white text-center text-sm py-6 px-4 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "buspark@bu.edu"
                    }, void 0, false, {
                        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/spark-bytes/frontend/src/app/profile_reserve/page.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=spark-bytes_frontend_src_app_profile_reserve_page_tsx_c0355555._.js.map