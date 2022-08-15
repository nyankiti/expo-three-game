import { useEffect } from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { GLView, ExpoWebGLRenderingContext } from "expo-gl";
import * as THREE from "three";
import * as ExpoTHREE from "expo-three";
/* components */
import SphereMesh from "./components/SphereMesh";

// @ts-ignore
const getNow = global.nativePerformanceNow ?? Date.now;

export default function App() {
  let gl: ExpoWebGLRenderingContext;
  let renderer: ExpoTHREE.Renderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;

  const render = () => {
    renderer.render(scene, camera);
    gl.endFrameEXP();
  };

  const contextCreateHandler = (ctx: ExpoWebGLRenderingContext) => {
    gl = ctx;
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // レンダラーの作成
    renderer = new ExpoTHREE.Renderer({ gl });
    renderer.setSize(width, height);

    // シーンの作成
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(0, 1, 4);

    // 立方体の作成
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    const boxMat = new THREE.MeshLambertMaterial({ color: "gray" });
    const boxMsh = new THREE.Mesh(boxGeo, boxMat);
    boxMsh.position.set(0, 0, 0);
    boxMsh.rotation.set(0, 0.5, 0);
    scene.add(boxMsh);

    // ライトの作成
    const light = new THREE.DirectionalLight();
    light.position.set(0, 3, 4);
    light.target.position.set(0, 0, 0);
    scene.add(light);

    render();
  };
  return (
    // onContextCreate関数は、GLパラメータを受け取り、それを使ってシーンを作成し、
    // ライト、オブジェクト、カメラ、床など、他のものを追加するためにインスタンス化する役割を担っています。
    <GLView style={{ flex: 1 }} onContextCreate={contextCreateHandler}></GLView>
  );
}
