// The collapse, authored rather than simulated so nothing passes through anything.
// 1. The stack tips left as one piece over the left top edge of what is under it.
// 2. It slides off and fans out toward the front, like a deck of cards. Every block keeps the same
//    tilt, so they stay parallel; they keep their spacing along that tilt until they have spread
//    into separate lanes, and only then close up. Parallel slabs that far apart cannot overlap.
// 3. Each lands on its left edge and slaps down flat, all together.
// Pure math, shared by index.html and tools/check-collapse.mjs (which checks every frame for overlaps).
import * as THREE from 'three';

export const GRAV = 16;
// where the blocks come to rest, bottom block first: left of the tower, one lane each, lanes far
// enough apart that a block's peg (it sticks out of the front face) never reaches the next block
const LANES = [-1.2, 1.05, 3.3], REST_X = -5.5, REST_RY = .06;

const smooth = s=>{ s=Math.min(1,Math.max(0,s)); return s*s*(3-2*s); };

/** P: the pivot (left top edge of what is left standing). rel: each falling block's centre minus P,
 *  bottom block first, stacked straight up (the tower as it stands). */
export function planFall(P, rel, { BW, BH, STEP }){
  const HW = BW/2, HB = BH/2;
  const TB = .75, TT = .55;                     // tip: angle at let-go, and how long the tip takes
  const w0 = 2*TB/TT;                            // spin at let-go
  const phiL = .9, D = .5, D2 = .17;             // tilt at touchdown, flight time, slap time
  const e = new THREE.Euler(0,0,0,'YXZ');
  const EDGE = new THREE.Vector3(-HW, -HB, 0);  // left bottom edge, block space
  const edgeOff = (phi, ry)=>EDGE.clone().applyEuler(e.set(0, ry, phi, 'YXZ'));
  const normal = (phi, ry)=>new THREE.Vector3(0,1,0).applyEuler(e.set(0, ry, phi, 'YXZ'));
  const r0 = rel[0];
  const rigid = (phi, out)=>out.set(P.x + r0.x*Math.cos(phi) - r0.y*Math.sin(phi), P.y + r0.x*Math.sin(phi) + r0.y*Math.cos(phi), P.z + r0.z);

  // the bottom block's flight: from where the tip lets go to its left edge touching the table
  const S = rigid(TB, new THREE.Vector3());
  const v = new THREE.Vector3(-w0*(S.y-P.y), w0*(S.x-P.x), 0);
  const edge0 = new THREE.Vector3(REST_X, 0, LANES[0]).add(edgeOff(0, REST_RY)).setY(0);
  const C = edge0.clone().sub(edgeOff(phiL, REST_RY));
  const vy = (C.y - S.y + .5*GRAV*D*D)/D;
  const a = new THREE.Vector3(2*(C.x - S.x - v.x*D)/(D*D), 0, 2*(C.z - S.z - v.z*D)/(D*D));
  const alpha = 2*(phiL - TB - w0*D)/(D*D);
  // lane offsets from the bottom block's resting spot
  const lane = rel.map((_,k)=>new THREE.Vector3(0, 0, LANES[k] - LANES[0]));

  const duration = TT + D + D2, firstLand = TT + D;
  function pose(k, t, obj){
    if(t < TT){ const phi = TB*(t/TT)**2;
      rigid(phi, obj.position).addScaledVector(normal(phi, 0), k*STEP); obj.rotation.set(0, 0, phi); return; }
    const tt = t - TT;
    if(tt < D){
      const u = tt/D, phi = TB + w0*tt + .5*alpha*tt*tt, ry = REST_RY*smooth(u);
      const spread = smooth(u/.55), close = 1 - smooth((u-.55)/.45);
      obj.position.set(S.x + v.x*tt + .5*a.x*tt*tt, S.y + vy*tt - .5*GRAV*tt*tt, S.z + v.z*tt + .5*a.z*tt*tt)
        .addScaledVector(normal(phi, ry), k*STEP*close).addScaledVector(lane[k], spread);
      obj.rotation.set(0, ry, phi); return;
    }
    const s = Math.min(1, (tt - D)/D2), phi = phiL*(1 - s*s);
    obj.position.copy(edge0).add(lane[k]).sub(edgeOff(phi, REST_RY)); obj.rotation.set(0, REST_RY, phi);
  }
  return { duration, firstLand, pose };
}
