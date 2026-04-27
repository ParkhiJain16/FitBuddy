
import React from "react";
import "./BodyMap.css";

/**
 * BodyMap — anatomical muscle map
 *
 * Props:
 *   primary   : string[]  — muscle names, e.g. ["chest", "triceps"]
 *   secondary : string[]  — muscle names, e.g. ["shoulders"]
 *
 * Supported muscle names:
 *   Front: "chest", "front-delts", "side-delts", "triceps",
 *          "biceps", "forearms", "abs", "quads", "calves"
 *   Back:  "traps", "rear-delts", "lats", "rhomboids",
 *          "lower-back", "triceps", "glutes", "hamstrings", "calves"
 *
 * Shorthand aliases also work:
 *   "shoulders" → front-delts + side-delts + rear-delts
 */

// ── alias map ─────────────────────────────────────────────────
const ALIASES = {
  shoulders:   ["front-delts", "side-delts", "rear-delts"],
  "upper-back": ["traps", "rhomboids"],
  "lower-body": ["quads", "hamstrings", "glutes", "calves"],
};

function resolve(names) {
  const out = new Set();
  names.forEach((n) => {
    const key = n.toLowerCase().trim();
    if (ALIASES[key]) ALIASES[key].forEach((a) => out.add(a));
    else out.add(key);
  });
  return out;
}

// ── muscle-id tables ──────────────────────────────────────────
const MUSCLE_TO_IDS = {
  "chest":       ["f-chest-l", "f-chest-r"],
  "front-delts": ["f-adelt-l", "f-adelt-r"],
  "side-delts":  ["f-sdelt-l", "f-sdelt-r"],
  "triceps":     ["f-tri-l",   "f-tri-r",   "b-tri-l",   "b-tri-r"],
  "biceps":      ["f-bic-l",   "f-bic-r"],
  "forearms":    ["f-forearm-l","f-forearm-r"],
  "abs":         ["f-abs"],
  "quads":       ["f-quad-l",  "f-quad-r"],
  "calves":      ["f-calf-l",  "f-calf-r",  "b-calf-l",  "b-calf-r"],
  "traps":       ["b-trap"],
  "rear-delts":  ["b-rdelt-l", "b-rdelt-r"],
  "lats":        ["b-lat-l",   "b-lat-r"],
  "rhomboids":   ["b-rhomb"],
  "lower-back":  ["b-loback"],
  "glutes":      ["b-glute-l", "b-glute-r"],
  "hamstrings":  ["b-ham-l",   "b-ham-r"],
};

function buildIdSets(primary, secondary) {
  const pri = resolve(primary);
  const sec = resolve(secondary);
  const pids = new Set();
  const sids = new Set();
  pri.forEach((m) => (MUSCLE_TO_IDS[m] || []).forEach((id) => pids.add(id)));
  sec.forEach((m) => (MUSCLE_TO_IDS[m] || []).forEach((id) => { if (!pids.has(id)) sids.add(id); }));
  return { pids, sids };
}

function cls(id, pids, sids) {
  if (pids.has(id)) return "mu primary";
  if (sids.has(id)) return "mu secondary";
  return "mu inactive";
}

// ── Front SVG ─────────────────────────────────────────────────
function FrontBody({ pids, sids }) {
  const c = (id) => cls(id, pids, sids);
  return (
    <svg viewBox="0 0 100 230" className="body-svg">
      {/* silhouette */}
      <ellipse cx="50" cy="14" rx="11" ry="12" className="body-base" />
      <rect x="44" y="24" width="12" height="8" rx="2" className="body-base" />
      <path d="M26,33 L74,33 L78,100 L22,100 Z" className="body-base" />
      <path d="M22,100 L22,112 Q22,120 50,120 Q78,120 78,112 L78,100 Z" className="body-base" />
      {/* arms base */}
      <rect x="6" y="33" width="14" height="48" rx="6" className="body-base" />
      <rect x="80" y="33" width="14" height="48" rx="6" className="body-base" />
      <ellipse cx="12" cy="83" rx="5" ry="6" className="body-joint" />
      <ellipse cx="88" cy="83" rx="5" ry="6" className="body-joint" />
      <rect x="7" y="88" width="11" height="20" rx="5" className="body-base" />
      <rect x="82" y="88" width="11" height="20" rx="5" className="body-base" />
      <ellipse cx="12" cy="111" rx="6" ry="6" className="body-joint" />
      <ellipse cx="88" cy="111" rx="6" ry="6" className="body-joint" />

      {/* muscles */}
      <path id="f-chest-l"    className={c("f-chest-l")}    d="M26,37 Q26,61 48,61 L48,37 Z" />
      <path id="f-chest-r"    className={c("f-chest-r")}    d="M52,37 Q52,61 74,61 L74,37 Z" />
      <ellipse id="f-adelt-l" className={c("f-adelt-l")}    cx="21" cy="43" rx="7" ry="9" />
      <ellipse id="f-adelt-r" className={c("f-adelt-r")}    cx="79" cy="43" rx="7" ry="9" />
      <ellipse id="f-sdelt-l" className={c("f-sdelt-l")}    cx="13" cy="51" rx="5" ry="6" />
      <ellipse id="f-sdelt-r" className={c("f-sdelt-r")}    cx="87" cy="51" rx="5" ry="6" />
      <rect    id="f-abs"     className={c("f-abs")}         x="40" y="62" width="20" height="36" rx="4" />
      <line x1="40" y1="71" x2="60" y2="71" stroke="#16162a" strokeWidth=".6" />
      <line x1="40" y1="80" x2="60" y2="80" stroke="#16162a" strokeWidth=".6" />
      <line x1="40" y1="89" x2="60" y2="89" stroke="#16162a" strokeWidth=".6" />
      <line x1="50" y1="62" x2="50" y2="98"  stroke="#16162a" strokeWidth=".6" />
      <ellipse id="f-tri-l"      className={c("f-tri-l")}      cx="14"  cy="65" rx="4" ry="10" />
      <ellipse id="f-tri-r"      className={c("f-tri-r")}      cx="86" cy="65" rx="4" ry="10" />
      <ellipse id="f-bic-l"      className={c("f-bic-l")}      cx="14" cy="65" rx="5" ry="11" />
      <ellipse id="f-bic-r"      className={c("f-bic-r")}      cx="86" cy="65" rx="5" ry="11" />
      <rect    id="f-forearm-l"  className={c("f-forearm-l")}  x="7"  y="88" width="10" height="20" rx="4" />
      <rect    id="f-forearm-r"  className={c("f-forearm-r")}  x="83" y="88" width="10" height="20" rx="4" />

      {/* legs */}
      <rect id="f-quad-l"  className={c("f-quad-l")}  x="22" y="120" width="22" height="58" rx="9" />
      <rect id="f-quad-r"  className={c("f-quad-r")}  x="56" y="120" width="22" height="58" rx="9" />
      <ellipse cx="33" cy="182" rx="10" ry="6" className="body-joint" />
      <ellipse cx="67" cy="182" rx="10" ry="6" className="body-joint" />
      <rect id="f-calf-l"  className={c("f-calf-l")}  x="24" y="188" width="17" height="36" rx="6" />
      <rect id="f-calf-r"  className={c("f-calf-r")}  x="59" y="188" width="17" height="36" rx="6" />
      <ellipse cx="33" cy="226" rx="10" ry="5" className="body-joint" />
      <ellipse cx="67" cy="226" rx="10" ry="5" className="body-joint" />
    </svg>
  );
}

// ── Back SVG ──────────────────────────────────────────────────
function BackBody({ pids, sids }) {
  const c = (id) => cls(id, pids, sids);
  return (
    <svg viewBox="0 0 100 230" className="body-svg">
      {/* silhouette */}
      <ellipse cx="50" cy="14" rx="11" ry="12" className="body-base" />
      <rect x="44" y="24" width="12" height="8" rx="2" className="body-base" />
      <path d="M26,33 L74,33 L78,100 L22,100 Z" className="body-base" />
      <path d="M22,100 L22,112 Q22,120 50,120 Q78,120 78,112 L78,100 Z" className="body-base" />
      <rect x="6" y="33" width="14" height="48" rx="6" className="body-base" />
      <rect x="80" y="33" width="14" height="48" rx="6" className="body-base" />
      <ellipse cx="12" cy="83" rx="5" ry="6" className="body-joint" />
      <ellipse cx="88" cy="83" rx="5" ry="6" className="body-joint" />
      <rect x="7" y="88" width="11" height="20" rx="5" className="body-base" />
      <rect x="82" y="88" width="11" height="20" rx="5" className="body-base" />
      <ellipse cx="12" cy="111" rx="6" ry="6" className="body-joint" />
      <ellipse cx="88" cy="111" rx="6" ry="6" className="body-joint" />

      {/* muscles */}
      <path    id="b-trap"    className={c("b-trap")}    d="M30,33 Q50,29 70,33 Q62,50 50,52 Q38,50 30,33 Z" />
      <ellipse id="b-rdelt-l" className={c("b-rdelt-l")} cx="21" cy="43" rx="7" ry="9" />
      <ellipse id="b-rdelt-r" className={c("b-rdelt-r")} cx="79" cy="43" rx="7" ry="9" />
      <path    id="b-lat-l"   className={c("b-lat-l")}   d="M22,46 Q22,60 26,78 Q29,94 31,100 L22,100 Z" />
      <path    id="b-lat-r"   className={c("b-lat-r")}   d="M78,46 Q78,60 74,78 Q71,94 69,100 L78,100 Z" />
      <ellipse id="b-rhomb"   className={c("b-rhomb")}   cx="50" cy="70" rx="14" ry="18" />
      <rect    id="b-loback"  className={c("b-loback")}  x="40" y="86" width="20" height="12" rx="3" />
      <ellipse id="b-tri-l"   className={c("b-tri-l")}   cx="14"  cy="65" rx="4" ry="10" />
      <ellipse id="b-tri-r"   className={c("b-tri-r")}   cx="86" cy="65" rx="4" ry="10" />

      {/* legs */}
      <ellipse id="b-glute-l" className={c("b-glute-l")} cx="34" cy="111" rx="13" ry="11" />
      <ellipse id="b-glute-r" className={c("b-glute-r")} cx="66" cy="111" rx="13" ry="11" />
      <rect    id="b-ham-l"   className={c("b-ham-l")}   x="22" y="120" width="22" height="58" rx="9" />
      <rect    id="b-ham-r"   className={c("b-ham-r")}   x="56" y="120" width="22" height="58" rx="9" />
      <ellipse cx="33" cy="182" rx="10" ry="6" className="body-joint" />
      <ellipse cx="67" cy="182" rx="10" ry="6" className="body-joint" />
      <rect    id="b-calf-l"  className={c("b-calf-l")}  x="24" y="188" width="17" height="36" rx="6" />
      <rect    id="b-calf-r"  className={c("b-calf-r")}  x="59" y="188" width="17" height="36" rx="6" />
      <ellipse cx="33" cy="226" rx="10" ry="5" className="body-joint" />
      <ellipse cx="67" cy="226" rx="10" ry="5" className="body-joint" />
    </svg>
  );
}

// ── Main export ───────────────────────────────────────────────
const BodyMap = ({ primary = [], secondary = [] }) => {
  const { pids, sids } = buildIdSets(primary, secondary);

  return (
    <div className="bodymap-wrap">
      <div className="bodymap-views">
        <div className="bodymap-col">
          <span className="bodymap-view-lbl">Front</span>
          <FrontBody pids={pids} sids={sids} />
        </div>
        <div className="bodymap-col">
          <span className="bodymap-view-lbl">Back</span>
          <BackBody pids={pids} sids={sids} />
        </div>
      </div>
    </div>
  );
};

export default BodyMap;