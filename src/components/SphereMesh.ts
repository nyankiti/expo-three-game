import {
  AmbientLight,
  SphereGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";

class SphereMesh extends Mesh {
  constructor() {
    super(
      new SphereGeometry(0, 50, 20, 0, Math.PI * 2, 0, Math.PI * 2),
      new MeshStandardMaterial({
        color: 0xff0000,
      })
    );
  }
}

export default SphereMesh;
