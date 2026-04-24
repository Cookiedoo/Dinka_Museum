import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// =====================================================================
// TYPES
// =====================================================================
interface ModelConfig {
  kind: "glb" | "framed-image";
  src: string;
  scale?: number;
  yOffset?: number;
  xOffset?: number;
  zOffset?: number;
  rotationOffset?: { x: number; y: number; z: number };
}

interface Artifact {
  num: string;
  type?: string;
  title: string;
  medium: string;
  desc: string;
  interp: string;
  model: ModelConfig;
}

// =====================================================================
// ARTIFACT DATA
// =====================================================================
const ARTIFACTS: Artifact[] = [
  {
    num: "ACC. 01 · i of V",
    type: "Symbolic Object · i of ii",
    title: "The Man in the Sun",
    model: {
      kind: "framed-image",
      src: `${import.meta.env.BASE_URL}man-in-sun.png`,
    },
    medium:
      "Ochre wall-painting fragment, depicting a figure beside the setting sun",
    desc: `The stepmother points to the setting sun and tells the child, <span class="quote">"You see that man near the sun? It is your father."</span> It is a lie meant to kill her — the stepmother thinks no child can catch the sun. But when Aluel reaches the river, the Sun genuinely is there, and he really does pull her from the burning water. The lie becomes an ironically beautiful prophecy. The artifact freezes the moment deception and deliverance became the same event.`,
    interp: `This is the exhibit's first statement about what "rescue" means in the tale. The stepmother's cruelty sets the plot into motion, and the Sun uses that cruelty without excusing it. Providence does not annul wickedness here; it overrules it. The theological weight is closer to Genesis 50:20 than to any sentimental rescue narrative, and the Dinka tale preserves the tension Joseph's story preserves: the harm was real, the deliverance is real, and the two do not cancel. But the one above the wickedness is always in the least of expected places.`,
  },
  {
    num: "ACC. 02 · ii of V",
    type: "Symbolic Object · ii of ii",
    title: "The Gourd of Watered Milk",
    model: {
      kind: "glb",
      src: `${import.meta.env.BASE_URL}models/WaterPot.glb`,
      scale: 1.0,
      yOffset: 0,
    },
    medium: "Dinka leather pot gourd",
    desc: `The stepmother pours water into Aluel's milk gourd before she pours the milk, so the milk floats thin on top while the child drinks water disguised as food. When Aluel discovers the trick, she never accuses, she continues to respect the stepmother, and she spills the gourd in secret. When her father asks if she is hungry, she swears, <span class="quote">"May I die, by God, Father, I have eaten."</span> The gourd is the quietest weapon in the story: a vessel of sustenance made into a vessel of deception, carried every day by a child who would rather lie and face eternal consequences than grieve her father.`,
    interp: `Cruelty in this tale is not spectacular. It is domestic, stratified, and hidden inside objects of care. Aluel's decision to conceal her suffering is itself part of the story's moral narrative: protection works in both directions, and sometimes the fatherless must protect the father. This makes Chol's later breakdown more severe, not less, because his grief was revealed in a gourd of lies.`,
  },
  {
    num: "ACC. 03 · iii of V",
    type: "Document Artifact",
    title: "The Tether-Peg of the Brown Cow-Calf",
    model: {
      kind: "glb",
      src: `${import.meta.env.BASE_URL}models/Stake.glb`,
      scale: 1.0,
      yOffset: 0,
    },
    medium: "A hardwood tether stake, annotated with the Sun's verbal contract",
    desc: `Before the Sun returns Aluel to her father, he names his price: <span class="quote">"take a brown cow-calf and tether her to a stake very early in the morning. I will pick up the cow-calf on my way to the West."</span> By saving Aluel, the Sun establishes a sort of kinship with her family, but that kinship entitles him to a share of her bride-wealth. If the debt goes unpaid, a curse would fall on Aluel even if the Sun did not will it. The stake is small. The stakes are colossal.`,
    interp: `This artifact is the exhibit's most direct claim that deliverance is not free. The Dinka world does not separate rescue from relationship, or relationship from obligation — help received creates a tether that cannot be ignored. The parallel in Christian tradition is the <em>goel</em>, the kinsman-redeemer, whose rescue creates a permanent claim. But the tale is not softer than scripture: it insists that even a benevolent debt, if left unpaid, becomes a curse that acts on its own, regardless of the giver's will. The peg makes the invisible contract physical.`,
  },
  {
    num: "ACC. 04 · iv of V",
    type: "Character Artifact",
    title: "Ring's Spear",
    model: {
      kind: "glb",
      src: `${import.meta.env.BASE_URL}models/Spear.glb`,
      scale: 2.0,
      yOffset: 0.1,
      xOffset: 0.0,
      rotationOffset: { x: 0, y: 0, z: 1.5708 },
    },
    medium:
      "An iron spearhead with a hardwood shaft, notched at the end of the grip for each day of the fight",
    desc: `In a vision Ring comes to the revelation of Aluel's return. When he brings her home, his own father demands her for himself and forces Ring and the father to fight. They throw spears at each other for three very long, grueling days. Ring's twin brothers call out to the two; one begging his father to miss, the other begging Ring to miss. Until the third day, when one of the brothers loses patience and shouts, <span class="quote">"Ring, hit our father!"</span> And he does. And through his heart, comes the notched spear.`,
    interp: `Ring is the character the tale most refuses to simplify. He is "very holy." He saw his wife in a vision before he ever even met her. And to keep her, he skins his own mother (yes, literally kills and destroys his mother), and then kills his own father with the spear. The story does not condemn him, but neither does it celebrate him. It merely records him. The spear embodies the exhibit's thesis in its most difficult form: when deliverance passes through a human hand, that hand is marked. Ring's holiness and his violence occupy the same body, and the tale does not resolve them.`,
  },
  {
    num: "ACC. 05 · v of V",
    type: "Cultural Context Artifact",
    title: "The Pale Shield",
    model: {
      kind: "glb",
      src: `${import.meta.env.BASE_URL}models/BullSheild.glb`,
      scale: 1.0,
      yOffset: 0,
    },
    medium: "Bull-head and hide shield",
    desc: `On the eve of the duel, Ring's father kills his own bull and makes a shield from its hide. He tells Ring that Ring must find his own shield — but Ring has no independent cattle. The companion shield is pale, abstract, and unlike its partner. The tale's own words are what the visitor reads here; the image does not re-enact them. <span class="quote">"The one who will kill the other will take the girl for his wife."</span>`,
    interp: `This is the cultural context the tale demands but does not explain. Dinka marriage is transacted in cattle; cattle are controlled by the head of the household; a son with no cattle has no wife. The bull-hide shield is the normal order of things — wealth used to claim what wealth entitles. The pale shield is the rupture: a household's economy collapsing under the weight of what one man desired and another was forced to supply. Aluel "constantly cries" from that day forward. The artifact does not ask you to forgive this. It asks you to see it.`,
  },
];

// =====================================================================
// SCENE
// =====================================================================
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xb8c4d4);
scene.fog = new THREE.FogExp2(0xc4cfdc, 0.032);

const camera = new THREE.PerspectiveCamera(
  52,
  window.innerWidth / window.innerHeight,
  0.1,
  200,
);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.32;

// =====================================================================
// LIGHTING
// =====================================================================
const ambient = new THREE.AmbientLight(0xfff0d8, 0.35);
scene.add(ambient);

const heavenly = new THREE.DirectionalLight(0xfff0c8, 1.4);
heavenly.position.set(-6, 22, 4);
heavenly.castShadow = true;
heavenly.shadow.mapSize.set(2048, 2048);
heavenly.shadow.camera.near = 0.5;
heavenly.shadow.camera.far = 60;
heavenly.shadow.camera.left = -20;
heavenly.shadow.camera.right = 20;
heavenly.shadow.camera.top = 20;
heavenly.shadow.camera.bottom = -20;
heavenly.shadow.bias = -0.0008;
heavenly.shadow.radius = 8;
scene.add(heavenly);

const rim = new THREE.DirectionalLight(0xa8b8d0, 0.4);
rim.position.set(10, 8, -10);
scene.add(rim);

const hemi = new THREE.HemisphereLight(0xc8d4ec, 0xb8a888, 0.5);
scene.add(hemi);

// =====================================================================
// FLOOR
// =====================================================================
const floorMat = new THREE.MeshStandardMaterial({
  color: 0xdcd4be,
  roughness: 0.5,
  metalness: 0.02,
});
const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), floorMat);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(80, 40, 0xc0b398, 0xc0b398);
(grid.material as THREE.Material).opacity = 0.09;
(grid.material as THREE.Material).transparent = true;
scene.add(grid);

function addFloorCrack(points: THREE.Vector3[]): void {
  const geom = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({
    color: 0x8a7a5a,
    transparent: true,
    opacity: 0.28,
  });
  const line = new THREE.Line(geom, mat);
  line.position.y = 0.02;
  scene.add(line);
}
addFloorCrack([
  new THREE.Vector3(-8, 0, 6),
  new THREE.Vector3(-5, 0, 3),
  new THREE.Vector3(-3, 0, 1),
  new THREE.Vector3(1, 0, -1),
  new THREE.Vector3(4, 0, -4),
  new THREE.Vector3(7, 0, -8),
]);
addFloorCrack([
  new THREE.Vector3(-12, 0, -4),
  new THREE.Vector3(-9, 0, -6),
  new THREE.Vector3(-6, 0, -9),
  new THREE.Vector3(-2, 0, -12),
]);
addFloorCrack([
  new THREE.Vector3(10, 0, 4),
  new THREE.Vector3(8, 0, 2),
  new THREE.Vector3(6, 0, 0),
  new THREE.Vector3(5, 0, -3),
]);

// =====================================================================
// RUINS
// =====================================================================
const stoneMat = new THREE.MeshStandardMaterial({
  color: 0xd8d0bc,
  roughness: 0.95,
  metalness: 0.02,
});
const stoneMatDim = new THREE.MeshStandardMaterial({
  color: 0xc8c0a8,
  roughness: 0.95,
  metalness: 0.02,
});

function makeBrokenColumn(
  x: number,
  z: number,
  height: number,
  radius = 0.38,
): void {
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(radius * 3, 0.3, radius * 3),
    stoneMat,
  );
  base.position.set(x, 0.15, z);
  base.castShadow = true;
  base.receiveShadow = true;
  scene.add(base);

  const col = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.95, radius * 1.05, height, 20),
    stoneMat,
  );
  col.position.set(x, 0.3 + height / 2, z);
  col.castShadow = true;
  col.receiveShadow = true;
  scene.add(col);

  const topFrag = new THREE.Mesh(
    new THREE.BoxGeometry(radius * 2.2, 0.35, radius * 1.7),
    stoneMat,
  );
  const jx = (Math.random() - 0.5) * radius * 0.6;
  const jz = (Math.random() - 0.5) * radius * 0.6;
  topFrag.position.set(x + jx, 0.3 + height + 0.1, z + jz);
  topFrag.rotation.y = Math.random() * Math.PI;
  topFrag.rotation.x = (Math.random() - 0.5) * 0.25;
  topFrag.rotation.z = (Math.random() - 0.5) * 0.2;
  topFrag.castShadow = true;
  scene.add(topFrag);

  if (Math.random() > 0.4) {
    const bit = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 1.4, 0.2, radius * 1.1),
      stoneMatDim,
    );
    bit.position.set(x + jx * 1.7, 0.3 + height + 0.35, z + jz * 1.7);
    bit.rotation.y = Math.random() * Math.PI;
    bit.rotation.x = (Math.random() - 0.5) * 0.5;
    bit.castShadow = true;
    scene.add(bit);
  }
}

const columnData = [
  { x: -15, z: 2, h: 4.6 },
  { x: -14, z: -4, h: 3.4 },
  { x: -12, z: -10, h: 5.2 },
  { x: -7, z: -15, h: 3.8 },
  { x: 0, z: -17, h: 6.0 },
  { x: 7, z: -15, h: 3.6 },
  { x: 12, z: -10, h: 5.4 },
  { x: 14, z: -4, h: 3.2 },
  { x: 15, z: 2, h: 4.8 },
  { x: -11, z: 8, h: 2.2 },
  { x: 11, z: 8, h: 2.6 },
];
columnData.forEach((c) => makeBrokenColumn(c.x, c.z, c.h));

function makeStoneBlock(
  x: number,
  z: number,
  w: number,
  h: number,
  d: number,
  rotY: number,
): void {
  const mat = Math.random() > 0.5 ? stoneMat : stoneMatDim;
  const block = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  block.position.set(x, h / 2, z);
  block.rotation.y = rotY;
  block.castShadow = true;
  block.receiveShadow = true;
  scene.add(block);
}
makeStoneBlock(-10, 4, 1.3, 0.5, 0.9, 0.4);
makeStoneBlock(-8, -2, 0.8, 0.35, 0.7, 0.9);
makeStoneBlock(9, 2, 0.9, 0.4, 1.1, 0.6);
makeStoneBlock(7, -6, 1.4, 0.5, 0.7, 1.3);
makeStoneBlock(-5, 7, 0.7, 0.3, 0.6, 0.2);
makeStoneBlock(4, 6, 1.0, 0.4, 0.8, 1.0);
makeStoneBlock(-3, -9, 0.8, 0.3, 1.2, 0.7);
makeStoneBlock(2, -8, 0.9, 0.45, 0.7, 1.5);
makeStoneBlock(-13, 1, 1.1, 0.4, 0.8, 0.7);
makeStoneBlock(13, -1, 1.0, 0.5, 0.9, 1.1);
makeStoneBlock(-6, 4, 0.6, 0.25, 0.5, 0.3);
makeStoneBlock(6, 3, 0.7, 0.35, 0.6, 1.2);
makeStoneBlock(-9, -7, 1.2, 0.4, 0.7, 0.5);
makeStoneBlock(8, -9, 0.9, 0.5, 1.0, 0.9);
makeStoneBlock(-14, 5, 0.5, 0.2, 0.4, 0.6);
makeStoneBlock(-4, 1, 0.4, 0.18, 0.4, 0.8);
makeStoneBlock(3, -2, 0.5, 0.2, 0.4, 0.4);
makeStoneBlock(-1, 7, 0.6, 0.3, 0.5, 1.1);

const archL = new THREE.Mesh(new THREE.BoxGeometry(0.9, 7, 0.9), stoneMat);
archL.position.set(-3.2, 3.5, -22);
archL.castShadow = true;
archL.receiveShadow = true;
scene.add(archL);
const archR = new THREE.Mesh(new THREE.BoxGeometry(0.9, 4.5, 0.9), stoneMat);
archR.position.set(3.2, 2.25, -22);
archR.castShadow = true;
archR.receiveShadow = true;
scene.add(archR);
const beamL = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.9), stoneMatDim);
beamL.position.set(-2.3, 7.2, -22);
beamL.rotation.z = -0.08;
beamL.castShadow = true;
scene.add(beamL);

// =====================================================================
// GODRAY BEAMS
// =====================================================================
function makeBeam(x: number, z: number): void {
  const beamGroup = new THREE.Group();

  const innerGeo = new THREE.ConeGeometry(0.9, 13, 24, 1, true);
  const innerMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: { color: { value: new THREE.Color(0xfff5d8) } },
    vertexShader: `
      varying float vY;
      void main() {
        vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying float vY;
      uniform vec3 color;
      void main() {
        float h = (vY + 6.5) / 13.0;
        float alpha = (1.0 - h) * 0.045;
        alpha *= smoothstep(0.0, 0.35, h);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    blending: THREE.AdditiveBlending,
  });
  const inner = new THREE.Mesh(innerGeo, innerMat);
  inner.position.y = 6.5;
  beamGroup.add(inner);

  const outerGeo = new THREE.ConeGeometry(1.8, 13, 24, 1, true);
  const outerMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: { color: { value: new THREE.Color(0xe8d8b8) } },
    vertexShader: innerMat.vertexShader,
    fragmentShader: `
      varying float vY;
      uniform vec3 color;
      void main() {
        float h = (vY + 6.5) / 13.0;
        float alpha = (1.0 - h) * 0.018;
        alpha *= smoothstep(0.0, 0.3, h);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    blending: THREE.AdditiveBlending,
  });
  const outer = new THREE.Mesh(outerGeo, outerMat);
  outer.position.y = 6.5;
  beamGroup.add(outer);

  beamGroup.position.set(x, 0, z);
  scene.add(beamGroup);
}

// =====================================================================
// DUST MOTES
// =====================================================================
const DUST_COUNT = 90;
const dustGeometry = new THREE.BufferGeometry();
const dustPositions = new Float32Array(DUST_COUNT * 3);
const dustVelocities = new Float32Array(DUST_COUNT * 3);
const dustPhases = new Float32Array(DUST_COUNT);

for (let i = 0; i < DUST_COUNT; i++) {
  dustPositions[i * 3 + 0] = (Math.random() - 0.5) * 32;
  dustPositions[i * 3 + 1] = Math.random() * 10 + 1;
  dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4;
  dustVelocities[i * 3 + 0] = (Math.random() - 0.5) * 0.0015;
  dustVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0008;
  dustVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0015;
  dustPhases[i] = Math.random() * Math.PI * 2;
}

dustGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(dustPositions, 3),
);

const dustMaterial = new THREE.PointsMaterial({
  color: 0xfff0d0,
  size: 0.06,
  transparent: true,
  opacity: 0.5,
  sizeAttenuation: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
scene.add(dustParticles);

// =====================================================================
// ARTIFACT LOADERS
// =====================================================================
const gltfLoader = new GLTFLoader();
const texLoader = new THREE.TextureLoader();

function swapPlaceholder(
  idx: number,
  group: THREE.Group,
  placeholder: THREE.Object3D,
  newObject: THREE.Object3D,
): void {
  const slot = artifacts.indexOf(placeholder);
  group.remove(placeholder);
  newObject.userData.idx = idx;
  group.add(newObject);
  artifacts[slot] = newObject;
}

function collectMaterials(obj: THREE.Object3D): THREE.Material[] {
  const mats: THREE.Material[] = [];
  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => {
            const c = (m as THREE.MeshStandardMaterial).clone();
            if (!c.emissive) c.emissive = new THREE.Color(0xfff4de);
            c.emissiveIntensity = 0.05;
            mats.push(c);
            return c;
          });
        } else {
          const m = (mesh.material as THREE.MeshStandardMaterial).clone();
          if (!m.emissive) m.emissive = new THREE.Color(0xfff4de);
          m.emissiveIntensity = 0.05;
          mesh.material = m;
          mats.push(m);
        }
      }
    }
  });
  return mats;
}

function loadGLBArtifact(
  idx: number,
  group: THREE.Group,
  placeholder: THREE.Object3D,
  cfg: ModelConfig,
  facingY: number,
): void {
  gltfLoader.load(
    cfg.src,
    (gltf) => {
      const model = gltf.scene;

      // Initial scale (before rotation-aware bounding box)
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 0.95;
      const autoScale = targetSize / maxDim;
      const finalScale = autoScale * (cfg.scale || 1.0);
      model.scale.setScalar(finalScale);

      // Apply rotation FIRST so bounding box reflects final orientation
      if (cfg.rotationOffset) {
        model.rotation.x += cfg.rotationOffset.x || 0;
        model.rotation.y += cfg.rotationOffset.y || 0;
        model.rotation.z += cfg.rotationOffset.z || 0;
      }

      // NOW measure the rotated model's bounds and center it
      const box2 = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box2.getCenter(center);
      model.position.x = -center.x;
      model.position.z = -center.z;
      model.position.y = -box2.min.y;

      // Wrap for offset + spin
      const wrapper = new THREE.Group();
      wrapper.add(model);
      wrapper.position.x = cfg.xOffset || 0;
      wrapper.position.z = cfg.zOffset || 0;
      wrapper.position.y = 3.1 + (cfg.yOffset || 0);
      wrapper.rotation.y = facingY;

      const materials = collectMaterials(model);
      wrapper.userData.materials = materials;
      wrapper.userData.baseY = wrapper.position.y;
      wrapper.userData.baseRotY = facingY;

      const bubbleSize = 1.1;
      const bubble = new THREE.Mesh(
        new THREE.BoxGeometry(bubbleSize, bubbleSize * 1.4, bubbleSize),
        new THREE.MeshBasicMaterial({ visible: false }),
      );
      bubble.position.y = 0.5;
      bubble.userData.isClickBubble = true;
      wrapper.add(bubble);

      swapPlaceholder(idx, group, placeholder, wrapper);
    },
    undefined,
    (err) => console.error(`Failed to load ${cfg.src}:`, err),
  );
}

function loadFramedImageArtifact(
  idx: number,
  group: THREE.Group,
  placeholder: THREE.Object3D,
  cfg: ModelConfig,
  facingY: number,
): void {
  texLoader.load(
    cfg.src,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      const imgAspect = texture.image.width / texture.image.height;
      const frameW = 1.1;
      const frameH = frameW / imgAspect;
      const frameDepth = 0.05;
      const matBorder = 0.06;

      const frameGroup = new THREE.Group();

      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x3a2a1a,
        roughness: 0.6,
        metalness: 0.05,
      });
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(
          frameW + matBorder * 2,
          frameH + matBorder * 2,
          frameDepth,
        ),
        frameMat,
      );
      frame.castShadow = true;
      frame.receiveShadow = true;
      frameGroup.add(frame);

      const matMat = new THREE.MeshStandardMaterial({
        color: 0xf2e8d0,
        roughness: 0.8,
      });
      const matPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(frameW, frameH),
        matMat,
      );
      matPlane.position.z = frameDepth / 2 + 0.001;
      frameGroup.add(matPlane);

      const paintMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.7,
        emissive: new THREE.Color(0xfff4de),
        emissiveIntensity: 0.05,
        emissiveMap: texture,
      });
      const painting = new THREE.Mesh(
        new THREE.PlaneGeometry(frameW * 0.92, frameH * 0.92),
        paintMat,
      );
      painting.position.z = frameDepth / 2 + 0.002;
      frameGroup.add(painting);

      const easelMat = new THREE.MeshStandardMaterial({
        color: 0x2a1a0e,
        roughness: 0.7,
      });
      const easel = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, frameH + matBorder, 0.04),
        easelMat,
      );
      easel.position.z = -frameDepth / 2 - 0.02;
      easel.rotation.x = 0.15;
      easel.castShadow = true;
      frameGroup.add(easel);

      frameGroup.position.y = 3.1 + (frameH + matBorder * 2) / 2 + 0.03;
      frameGroup.rotation.y = facingY;

      frameGroup.userData.materials = [paintMat];
      frameGroup.userData.baseY = frameGroup.position.y;
      frameGroup.userData.baseRotY = facingY;

      const bubble = new THREE.Mesh(
        new THREE.BoxGeometry(frameW + 0.4, frameH + 0.4, 0.5),
        new THREE.MeshBasicMaterial({ visible: false }),
      );
      bubble.userData.isClickBubble = true;
      frameGroup.add(bubble);

      swapPlaceholder(idx, group, placeholder, frameGroup);
    },
    undefined,
    (err) => console.error(`Failed to load ${cfg.src}:`, err),
  );
}

// =====================================================================
// PEDESTALS
// =====================================================================
const pedestals: THREE.Group[] = [];
const artifacts: THREE.Object3D[] = [];

const arcRadius = 9.5;
const arcSpan = Math.PI * 0.85;
const arcStart = Math.PI / 2 - arcSpan / 2;

const pedMat = new THREE.MeshStandardMaterial({
  color: 0xfaf6ee,
  roughness: 0.45,
  metalness: 0.02,
});
const pedTopMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.3,
  metalness: 0.04,
});
const artifactBaseMat = new THREE.MeshStandardMaterial({
  color: 0xfbfaf7,
  roughness: 0.45,
  metalness: 0.06,
  emissive: new THREE.Color(0xfff4de),
  emissiveIntensity: 0.05,
});

for (let i = 0; i < 5; i++) {
  const t = i / 4;
  const angle = arcStart + t * arcSpan;
  const x = Math.cos(angle) * arcRadius;
  const z = -Math.sin(angle) * arcRadius - 1.5;

  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.0, 1.2), pedMat);
  base.position.y = 1.5;
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.1, 1.38), pedTopMat);
  top.position.y = 3.05;
  top.castShadow = true;
  top.receiveShadow = true;
  group.add(top);

  const artSize = 0.92;
  const placeholder = new THREE.Mesh(
    new THREE.BoxGeometry(artSize, artSize, artSize),
    artifactBaseMat.clone(),
  );
  placeholder.position.y = 3.1 + artSize / 2;
  placeholder.castShadow = true;
  placeholder.receiveShadow = true;
  placeholder.userData.idx = i;
  placeholder.userData.baseY = placeholder.position.y;
  placeholder.userData.baseRotY = 0;
  group.add(placeholder);
  artifacts.push(placeholder);

  const towardViewer = new THREE.Vector3(0 - x, 0, 12 - z).normalize();
  const facingY = Math.atan2(towardViewer.x, towardViewer.z);
  const cfg = ARTIFACTS[i].model;
  if (cfg.kind === "glb") {
    loadGLBArtifact(i, group, placeholder, cfg, facingY);
  } else if (cfg.kind === "framed-image") {
    loadFramedImageArtifact(i, group, placeholder, cfg, facingY);
  }

  // Plaque
  const plaqueCanvas = document.createElement("canvas");
  plaqueCanvas.width = 256;
  plaqueCanvas.height = 256;
  const pctx = plaqueCanvas.getContext("2d")!;
  pctx.fillStyle = "#faf6ee";
  pctx.fillRect(0, 0, 256, 256);
  pctx.fillStyle = "#1a1814";
  pctx.font = 'italic 120px "Cormorant Garamond", serif';
  pctx.textAlign = "center";
  pctx.textBaseline = "middle";
  const romans = ["I", "II", "III", "IV", "V"];
  pctx.fillText(romans[i], 128, 140);
  const plaqueTex = new THREE.CanvasTexture(plaqueCanvas);
  plaqueTex.anisotropy = 8;
  const plaqueMat = new THREE.MeshStandardMaterial({
    map: plaqueTex,
    roughness: 0.8,
  });
  const plaque = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), plaqueMat);
  plaque.position.set(0, 2.25, 0.71);
  group.add(plaque);

  const spot = new THREE.SpotLight(0xfff4de, 1.4, 18, Math.PI / 6.5, 0.45, 1.3);
  spot.position.set(x, 10, z);
  spot.target.position.set(x, 0, z);
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  spot.shadow.bias = -0.0008;
  scene.add(spot);
  scene.add(spot.target);

  makeBeam(x, z);

  group.userData.idx = i;
  pedestals.push(group);
  scene.add(group);
}

// =====================================================================
// CAMERA STATE
// =====================================================================
const WAKE_CAM_POS = new THREE.Vector3(0.8, 1.6, 14);
const WAKE_CAM_LOOK = new THREE.Vector3(0.4, 2.0, 5);
const GALLERY_CAM_POS = new THREE.Vector3(0, 3.7, 12);
const GALLERY_CAM_LOOK = new THREE.Vector3(0, 2.6, -4);

camera.position.copy(WAKE_CAM_POS);
camera.lookAt(WAKE_CAM_LOOK);

type State = "intro" | "waking" | "gallery" | "zooming" | "zoomed";
let state: State = "intro";
let currentArtifact = -1;
const camTargetPos = WAKE_CAM_POS.clone();
const camTargetLook = WAKE_CAM_LOOK.clone();
const lookInterp = WAKE_CAM_LOOK.clone();

let wakingUp = false;
let wakeStartTime = 0;
const WAKE_DURATION = 2400;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// =====================================================================
// ZOOM
// =====================================================================
function zoomToArtifact(idx: number): void {
  if (state === "zooming") return;
  currentArtifact = idx;
  state = "zooming";

  const ped = pedestals[idx];
  const p = ped.position;

  const toViewer = new THREE.Vector3(
    GALLERY_CAM_POS.x - p.x,
    0,
    GALLERY_CAM_POS.z - p.z,
  ).normalize();
  const dist = 3.0;
  camTargetPos.set(p.x + toViewer.x * dist, 3.6, p.z + toViewer.z * dist);
  camTargetLook.set(p.x, 3.5, p.z);

  const a = ARTIFACTS[idx];
  (document.getElementById("p-num") as HTMLElement).textContent = a.num;
  (document.getElementById("p-type") as HTMLElement).textContent = a.type || "";
  (document.getElementById("p-title") as HTMLElement).textContent = a.title;
  (document.getElementById("p-medium") as HTMLElement).textContent = a.medium;
  (document.getElementById("p-desc") as HTMLElement).innerHTML = a.desc;
  (document.getElementById("p-interp") as HTMLElement).innerHTML = a.interp;

  const panelEl = document.getElementById("panel") as HTMLElement;
  panelEl.scrollTop = 0;
  setTimeout(() => {
    panelEl.classList.add("open");
    panelEl.scrollTop = 0;
    (document.getElementById("back-btn") as HTMLElement).classList.add(
      "visible",
    );
    state = "zoomed";
  }, 900);

  (document.getElementById("gallery-ui") as HTMLElement).classList.add(
    "hidden",
  );
  document.querySelectorAll(".nav-dot").forEach((d, i) => {
    d.classList.toggle("active", i === idx);
  });
}

function returnToGallery(): void {
  state = "zooming";
  currentArtifact = -1;
  camTargetPos.copy(GALLERY_CAM_POS);
  camTargetLook.copy(GALLERY_CAM_LOOK);
  (document.getElementById("panel") as HTMLElement).classList.remove("open");
  (document.getElementById("back-btn") as HTMLElement).classList.remove(
    "visible",
  );
  (document.getElementById("gallery-ui") as HTMLElement).classList.remove(
    "hidden",
  );
  document
    .querySelectorAll(".nav-dot")
    .forEach((d) => d.classList.remove("active"));
  setTimeout(() => {
    state = "gallery";
  }, 900);
}

// =====================================================================
// INPUT
// =====================================================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredIdx = -1;

function updateMouse(e: PointerEvent | MouseEvent): void {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  mouse.x = (x / rect.width) * 2 - 1;
  mouse.y = -(y / rect.height) * 2 + 1;
}

function findArtifactRoot(obj: THREE.Object3D): THREE.Object3D | null {
  let cur: THREE.Object3D | null = obj;
  while (cur) {
    if (artifacts.indexOf(cur) !== -1) return cur;
    cur = cur.parent;
  }
  return null;
}

canvas.addEventListener("pointermove", (e) => {
  if (state !== "gallery") return;
  updateMouse(e);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(artifacts, true);
  if (hits.length > 0) {
    const root = findArtifactRoot(hits[0].object);
    if (root) {
      hoveredIdx = root.userData.idx;
      canvas.classList.add("hover");
      return;
    }
  }
  hoveredIdx = -1;
  canvas.classList.remove("hover");
});

canvas.addEventListener("click", (e) => {
  if (state !== "gallery") return;
  updateMouse(e);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(artifacts, true);
  if (hits.length > 0) {
    const root = findArtifactRoot(hits[0].object);
    if (root) zoomToArtifact(root.userData.idx);
  }
});

document.querySelectorAll(".nav-dot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = parseInt((btn as HTMLElement).dataset.idx!, 10);
    if (state === "gallery") {
      zoomToArtifact(idx);
    } else if (state === "zoomed") {
      (document.getElementById("panel") as HTMLElement).classList.remove(
        "open",
      );
      setTimeout(() => zoomToArtifact(idx), 320);
    }
  });
});

(document.getElementById("back-btn") as HTMLElement).addEventListener(
  "click",
  returnToGallery,
);
(document.getElementById("close-panel") as HTMLElement).addEventListener(
  "click",
  returnToGallery,
);

(document.getElementById("enter-btn") as HTMLElement).addEventListener(
  "click",
  () => {
    (document.getElementById("intro") as HTMLElement).classList.add("gone");
    setTimeout(() => {
      wakingUp = true;
      wakeStartTime = performance.now();
      camTargetPos.copy(GALLERY_CAM_POS);
      camTargetLook.copy(GALLERY_CAM_LOOK);
      state = "waking";
    }, 200);
  },
);

(document.getElementById("cite-btn") as HTMLElement).addEventListener(
  "click",
  () => {
    (document.getElementById("cite-modal") as HTMLElement).classList.add(
      "open",
    );
  },
);
(document.getElementById("curator-btn") as HTMLElement).addEventListener(
  "click",
  () => {
    (document.getElementById("curator-modal") as HTMLElement).classList.add(
      "open",
    );
  },
);
document.querySelectorAll(".modal").forEach((m) => {
  m.querySelector(".close")!.addEventListener("click", () =>
    m.classList.remove("open"),
  );
  m.addEventListener("click", (e) => {
    if (e.target === m) m.classList.remove("open");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".modal.open")
      .forEach((m) => m.classList.remove("open"));
    if (state === "zoomed") returnToGallery();
  }
  if (state === "zoomed") {
    if (e.key === "ArrowRight" && currentArtifact < 4) {
      const next = currentArtifact + 1;
      (document.getElementById("panel") as HTMLElement).classList.remove(
        "open",
      );
      setTimeout(() => zoomToArtifact(next), 320);
    }
    if (e.key === "ArrowLeft" && currentArtifact > 0) {
      const prev = currentArtifact - 1;
      (document.getElementById("panel") as HTMLElement).classList.remove(
        "open",
      );
      setTimeout(() => zoomToArtifact(prev), 320);
    }
  }
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// =====================================================================
// ANIMATION LOOP
// =====================================================================
const clock = new THREE.Clock();
let time = 0;

function animate(): void {
  const dt = clock.getDelta();
  time += dt;

  if (wakingUp) {
    const elapsed = performance.now() - wakeStartTime;
    const t = Math.min(elapsed / WAKE_DURATION, 1);
    const eased = easeOutExpo(t);
    renderer.toneMappingExposure = 0.32 + eased * (0.88 - 0.32);
    if (t >= 1) {
      wakingUp = false;
      state = "gallery";
    }
  }

  const lerpAmt = state === "waking" ? 0.025 : 0.055;
  camera.position.lerp(camTargetPos, lerpAmt);
  lookInterp.lerp(camTargetLook, lerpAmt);
  camera.lookAt(lookInterp);

  artifacts.forEach((art, i) => {
    const bob = Math.sin(time * 0.7 + i * 1.3) * 0.015;
    let targetY = art.userData.baseY + bob;

    let targetEmissive = 0.05;
    if (hoveredIdx === i && state === "gallery") {
      targetY += 0.12;
      targetEmissive = 0.22;
      art.rotation.y += dt * 0.8;
    } else if (currentArtifact === i && state === "zoomed") {
      art.rotation.y += dt * 0.4;
      targetEmissive = 0.16;
    }

    if (art.userData.materials) {
      (art.userData.materials as THREE.MeshStandardMaterial[]).forEach((m) => {
        m.emissiveIntensity = THREE.MathUtils.lerp(
          m.emissiveIntensity,
          targetEmissive,
          0.08,
        );
      });
    } else if ((art as THREE.Mesh).material) {
      const mat = (art as THREE.Mesh).material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = THREE.MathUtils.lerp(
        mat.emissiveIntensity,
        targetEmissive,
        0.08,
      );
    }

    art.position.y = THREE.MathUtils.lerp(art.position.y, targetY, 0.12);
  });

  const posAttr = dustParticles.geometry.attributes
    .position as THREE.BufferAttribute;
  for (let i = 0; i < DUST_COUNT; i++) {
    posAttr.array[i * 3 + 0] +=
      dustVelocities[i * 3 + 0] + Math.sin(time * 0.3 + dustPhases[i]) * 0.0008;
    posAttr.array[i * 3 + 1] +=
      dustVelocities[i * 3 + 1] +
      Math.cos(time * 0.25 + dustPhases[i]) * 0.0006;
    posAttr.array[i * 3 + 2] +=
      dustVelocities[i * 3 + 2] +
      Math.sin(time * 0.35 + dustPhases[i] + 1.5) * 0.0008;

    if (posAttr.array[i * 3 + 0] > 16 || posAttr.array[i * 3 + 0] < -16)
      dustVelocities[i * 3 + 0] *= -1;
    if (posAttr.array[i * 3 + 1] > 11 || posAttr.array[i * 3 + 1] < 0.5)
      dustVelocities[i * 3 + 1] *= -1;
    if (posAttr.array[i * 3 + 2] > 8 || posAttr.array[i * 3 + 2] < -16)
      dustVelocities[i * 3 + 2] *= -1;
  }
  posAttr.needsUpdate = true;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
