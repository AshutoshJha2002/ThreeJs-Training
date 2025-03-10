/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const canvas=document.getElementById("draw");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate();
//renderer.setAnimationLoop(animate);

*/
//import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js';
//import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/controls/OrbitControls.js';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';
/*import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// Select the canvas
const canvas = document.getElementById('draw');

// Create the Scene
const scene = new THREE.Scene();

// Create the Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 5); // Position the camera

// Create the Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2; // Restrict vertical rotation

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

// Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
*/


// Create Scene
/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Directional Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5); // Light starts at (5,5,5)

// Set target
light.target.position.set(0, 0, 0); // Light points towards (0,0,0)
scene.add(light.target); // Add target to scene

scene.add(light);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
*/


//Hemisphere Light

// Create Scene
/*const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 5);

// Create Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a Sphere (for better light visualization)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.3, roughness: 0.7 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Create Hemisphere Light
const skyColor = 0x87CEEB; // Light Blue (Sky)
const groundColor = 0x8B4513; // Brownish-Orange (Ground)
const intensity = 1.5;
const hemiLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
hemiLight.position.set(0, 5, 0); // Place the light above
scene.add(hemiLight);

// Add HemisphereLight Helper (to see the light direction)
const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 1);
scene.add(hemiLightHelper);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01; // Rotate sphere
  renderer.render(scene, camera);
}

animate();
*/

//Spot Light

// Create Scene
/*const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 10);

// Create Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Sphere (Object to be illuminated)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.5, roughness: 0.7 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 1, 0);
scene.add(sphere);

// Create Floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 1 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Create SpotLight
const spotLight = new THREE.SpotLight(0xffaa00, 2, 10, Math.PI / 6, 0, 2);
spotLight.position.set(3, 5, 3);
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight);
scene.add(spotLight.target);

// Add a SpotLight Helper (To visualize the spotlight cone)
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01; // Rotate sphere
  spotLightHelper.update(); // Update helper when light moves
  renderer.render(scene, camera);
}

animate();
*/

// Import Three.js (if using modules)

// Scene Setup
/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create BoxGeometry (Cube)
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create EdgesGeometry (Outline Effect)
const edges = new THREE.EdgesGeometry(geometry,90);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const edgeLines = new THREE.LineSegments(edges, lineMaterial);
scene.add(edgeLines);


// Camera Position
camera.position.z = 5;

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    edgeLines.rotation.x += 0.01;
    edgeLines.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
*/


// Import Three.js (only needed if using ES modules)
// import * as THREE from 'three';
//Extrude GEOMETRY


// 1️⃣ Create a Scene
/*const scene = new THREE.Scene();

// 2️⃣ Create a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

// 3️⃣ Create a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4️⃣ Create a 2D Shape (Square)
const shape = new THREE.Shape();
shape.moveTo(0, 0);  // Start point
shape.lineTo(2, 0);  // Bottom edge
shape.lineTo(2, 2);  // Right edge
shape.lineTo(0, 2);  // Top edge
shape.lineTo(0, 0);  // Close shape

// 5️⃣ Define Extrusion Settings
const extrudeSettings = {
    depth: 1,            // Thickness along Z-axis
    bevelEnabled: true,  // Enable smooth edges
    bevelThickness: 0.1, // Depth of bevel
    bevelSize: 0.1,      // How far bevel extends
    bevelSegments: 5     // Bevel smoothness
};

// 6️⃣ Create Extruded Geometry
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

// 7️⃣ Create Material and Mesh
const material = new THREE.MeshStandardMaterial({ color: 0xff5733 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 8️⃣ Add Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// 9️⃣ Animation Loop
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;  // Rotate the shape
    renderer.render(scene, camera);
}
animate();
*/


// 1️⃣ Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2️⃣ Create a rotating sphere with MeshNormalMaterial
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const normalMaterial = new THREE.MeshNormalMaterial(); // Uses normals for colors
const sphere = new THREE.Mesh(sphereGeometry, normalMaterial);
sphere.position.x = -2; // Move it left
scene.add(sphere);

// 3️⃣ Create a rotating cube with MeshNormalMaterial
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, normalMaterial);
cube.position.x = 2; // Move it right
scene.add(cube);

// 4️⃣ Position the camera
camera.position.z = 5;

// 5️⃣ Animation loop to rotate objects
function animate() {
    requestAnimationFrame(animate);
    
    sphere.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
