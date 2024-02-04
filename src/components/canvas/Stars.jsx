import React from 'react'
import  { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Preload, Points, PointMaterial } from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as randon from 'maath/random/dist/maath-random.esm'
import { Group } from 'three'
import { random } from 'maath'

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array (5000), {radius:1.2});
  useFrame((state, delta)=> {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled{...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size = {0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return(
    <div className="w-full h-auto absolute inset-0 z-[-1] ">
      <Canvas
        camera={{position:[0,0,1]}}
      >
        <Suspense>
          <Stars/>
        </Suspense>
      </Canvas>
    </div>
  )
}
export default StarsCanvas