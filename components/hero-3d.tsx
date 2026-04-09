"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

interface ParticleNetworkProps {
  mousePosition: { x: number; y: number };
}

function ParticleNetwork({ mousePosition }: ParticleNetworkProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const { theme } = useTheme();
  const { size } = useThree();
  const [color, setColor] = useState("#888888");
  
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#333333");
  }, [theme]);
  
  const [sphere] = useState(() => {
    const count = 3000;
    const radius = 1.2;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  });

  useFrame((state, delta) => {
    // Automatic rotation of the particle sphere
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 15;
      pointsRef.current.rotation.y -= delta / 20;
    }

    // Interactive tilt of the entire group based on mouse position
    if (groupRef.current) {
      const x = (mouseRef.current.x / size.width) * 2 - 1;
      const y = -(mouseRef.current.y / size.height) * 2 + 1;

      // Smoothly interpolate rotation to match mouse position
      // Using lerp for fluid movement
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        y * 0.2, // Tilt range
        0.1      // Smoothing factor
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        x * 0.2, // Tilt range
        0.1      // Smoothing factor
      );
    }
  });

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={color}
            size={0.003}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
          />
        </Points>
      </group>
    </group>
  );
}

interface Hero3DProps {
  mousePosition?: { x: number; y: number };
}

export function Hero3D({ mousePosition = { x: 0, y: 0 } }: Hero3DProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <ParticleNetwork mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
