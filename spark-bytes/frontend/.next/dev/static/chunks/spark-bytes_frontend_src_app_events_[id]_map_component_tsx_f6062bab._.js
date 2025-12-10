(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/EventMap.tsx
__turbopack_context__.s([
    "default",
    ()=>EventMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spark-bytes/frontend/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const containerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "0.75rem"
};
// default location in case of geocoding failure (BU CDS building)
const DEFAULT_CENTER = {
    lat: 42.3500229,
    lng: -71.1031113
};
function EventMap({ location }) {
    _s();
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isLoaded, loadError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadScript"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "AIzaSyB_lQ2fc93Dtdaz4Loc1gy18qbd3rFapts")
    });
    // geocode the location string into coordinates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventMap.useEffect": ()=>{
            async function geocode() {
                const trimmed = location.trim();
                const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(trimmed)}&key=${("TURBOPACK compile-time value", "AIzaSyBKZ3zfcGDX4LJDIidihcgqUJezX1vLofw")}`;
                try {
                    console.log("Geocoding request for:", trimmed, url);
                    const res = await fetch(url);
                    const data = await res.json();
                    console.log("Geocoding response:", data);
                    if (data.status === "OK" && data.results?.length > 0) {
                        const { lat, lng } = data.results[0].geometry.location;
                        setCoords({
                            lat,
                            lng
                        });
                    } else {
                        console.warn("Location not found — using fallback coordinates. Status:", data.status, "Error message:", data.error_message);
                        setCoords(DEFAULT_CENTER);
                    }
                } catch (err) {
                    console.error("Geocoding error:", err);
                    setCoords(DEFAULT_CENTER);
                }
            }
            if (location) {
                geocode();
            }
        }
    }["EventMap.useEffect"], [
        location
    ]);
    if (loadError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Map failed to load."
    }, void 0, false, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx",
        lineNumber: 67,
        columnNumber: 25
    }, this);
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading map library..."
    }, void 0, false, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx",
        lineNumber: 68,
        columnNumber: 25
    }, this);
    if (!coords) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Finding location..."
    }, void 0, false, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx",
        lineNumber: 69,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
        mapContainerStyle: containerStyle,
        center: coords,
        zoom: 15,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
            position: coords
        }, void 0, false, {
            fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
_s(EventMap, "CWbzUsEbiaQTK7Dqp7uD2Gz6S1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$spark$2d$bytes$2f$frontend$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadScript"]
    ];
});
_c = EventMap;
var _c;
__turbopack_context__.k.register(_c, "EventMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/spark-bytes/frontend/src/app/events/[id]/map_component.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=spark-bytes_frontend_src_app_events_%5Bid%5D_map_component_tsx_f6062bab._.js.map