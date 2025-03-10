import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;
const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls=new OrbitControls(camera, renderer.domElement);
controls.enableDamping=true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 10; 
controls.enablePan=false;
controls.minPolarAngle = 0;  
controls.maxPolarAngle = Math.PI / 2; 
function myFunc(height, width, depth){
    const geometry=new THREE.BoxGeometry(height, width, depth);
    const material=new THREE.MeshBasicMaterial({color: 'red'});
    const cube=new THREE.Mesh(geometry,material);
    scene.add(cube);
} 
myFunc(2,2,2);
//controls.target.set(0,0,5);
function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
}
animate();