"use client";

// ─────────────────────────────────────────────────────────────────────────────
// WebGL / Three.js animated background
//
// ENABLE / DISABLE:  flip the constant below to `false` to instantly turn off.
// The component renders nothing when disabled — zero performance cost.
// ─────────────────────────────────────────────────────────────────────────────
export const WEBGL_ENABLED = true;

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const ACCENT = new THREE.Color("#B5926A");

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!WEBGL_ENABLED) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    // ── Scene & Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.z = 40;

    // ── Particles ─────────────────────────────────────────────────────────────
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT * 3); // drift velocity per axis
    const opacities = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Random positions in a wide box
      positions[i * 3]     = (Math.random() - 0.5) * 80;  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;  // z

      sizes[i] = Math.random() * 2.5 + 0.8;

      // Slow drift
      speeds[i * 3]     = (Math.random() - 0.5) * 0.008;
      speeds[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      speeds[i * 3 + 2] = (Math.random() - 0.5) * 0.003;

      opacities[i] = Math.random() * 0.45 + 0.1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Sprite texture — a soft Gaussian dot
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext("2d")!;
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.4, "rgba(255,255,255,0.4)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const material = new THREE.PointsMaterial({
      color: ACCENT,
      size: 1.2,
      map: sprite,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ── Mouse parallax ────────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────────────
    const canvasEl = canvas;
    function resize() {
      const w = canvasEl.clientWidth;
      const h = canvasEl.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvasEl);

    // ── Animation loop ────────────────────────────────────────────────────────
    let frame = 0;
    let rafId: number;

    function animate() {
      rafId = requestAnimationFrame(animate);
      frame++;

      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3]     += speeds[i * 3];
        pos[i * 3 + 1] += speeds[i * 3 + 1];
        pos[i * 3 + 2] += speeds[i * 3 + 2];

        // Wrap around bounds
        if (pos[i * 3]     >  40) pos[i * 3]     = -40;
        if (pos[i * 3]     < -40) pos[i * 3]     =  40;
        if (pos[i * 3 + 1] >  30) pos[i * 3 + 1] = -30;
        if (pos[i * 3 + 1] < -30) pos[i * 3 + 1] =  30;
        if (pos[i * 3 + 2] >  20) pos[i * 3 + 2] = -20;
        if (pos[i * 3 + 2] < -20) pos[i * 3 + 2] =  20;
      }

      geometry.attributes.position.needsUpdate = true;

      // Gentle parallax
      points.rotation.y += (mouse.x * 0.05 - points.rotation.y) * 0.04;
      points.rotation.x += (-mouse.y * 0.03 - points.rotation.x) * 0.04;

      // Slow global rotation
      points.rotation.y += 0.0003;

      renderer.render(scene, camera);
    }

    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      renderer.dispose();
    };
  }, []);

  if (!WEBGL_ENABLED) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  );
}
