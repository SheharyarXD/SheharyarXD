import * as THREE from 'three';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05070A, 0.05);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
container.appendChild(renderer.domElement);

// Core Object - Icosahedron
const geometry = new THREE.IcosahedronGeometry(4, 1);
const material = new THREE.MeshBasicMaterial({ 
  color: 0x58A6FF, 
  wireframe: true, 
  transparent: true, 
  opacity: 0.4 
});
const core = new THREE.Mesh(geometry, material);
scene.add(core);

// Inner solid core
const innerGeo = new THREE.IcosahedronGeometry(2.5, 0);
const innerMat = new THREE.MeshBasicMaterial({ color: 0x112244 });
const innerCore = new THREE.Mesh(innerGeo, innerMat);
scene.add(innerCore);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 700; // Optimized count
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 40;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.05,
  color: 0x58A6FF,
  transparent: true,
  opacity: 0.6,
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Mouse interaction tracking
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  // Rotation
  core.rotation.y += 0.002;
  core.rotation.x += 0.001;
  
  innerCore.rotation.y -= 0.005;
  
  particlesMesh.rotation.y = -elapsedTime * 0.05;

  // Parallax based on mouse
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
  camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();