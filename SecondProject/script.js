import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { emissive } from 'three/tsl';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 80, 5);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

function helper(light) {
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.top = 60;
    light.shadow.camera.bottom = -60;
    light.shadow.camera.left = -60;
    light.shadow.camera.right = 60;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 1000;
}

//For Directional Light and Ambient Light
function lig1(param1) {
    const light = new param1(0xffffff, 5);
    light.position.set(-25, 40, 0);
    if (light.isDirectionalLight) {
        helper(light);
    }
    scene.add(light);
    //const lightHelper = new THREE.DirectionalLightHelper(light, 5);
    //scene.add(lightHelper);
}

//For Plane and Cube with variable material
function obj(param1) {
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new param1({ color: 0x808080, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(0, 0, 0);
    plane.rotation.set(-Math.PI / 2, 0, 0);
    plane.scale.set(10, 10, 1);
    plane.receiveShadow = true;
    scene.add(plane);

    const geometry1 = new THREE.BoxGeometry(10, 10, 10);
    const material1 = new param1({ color: 'red', side: THREE.DoubleSide, emissive: "red" });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.set(0, 13, 0);
    cube1.castShadow = true;
    cube1.receiveShadow = true;
    scene.add(cube1);

    const geometry2 = new THREE.CapsuleGeometry(5, 10, 32, 32);
    const cube2 = new THREE.Mesh(geometry2, material1);
    cube2.position.set(27, 13, 0);
    cube2.castShadow = true;
    cube2.receiveShadow = true;
    scene.add(cube2);

    const geometry3 = new THREE.CylinderGeometry(5, 5, 10, 32);
    const cube3 = new THREE.Mesh(geometry3, material1);
    cube3.position.set(-27, 13, 0);
    cube3.castShadow = true;
    cube3.receiveShadow = true;
    scene.add(cube3);
}

//For Spot Light and Point Light
function lig2(param1) {
    const light = new param1(0xffffff, 5, 400);
    light.position.set(3, 50, 10);
    light.decay = 0.1;
    light.castShadow = true;

    helper(light);
    scene.add(light);
}

//lig1(THREE.AmbientLight);
//obj(THREE.MeshStandardMaterial);

function removeObj() {
    while (scene.children.length > 0) {
        console.log(scene.children[0]);
        let child = scene.children[0];
        if (child.geometry) {
            child.geometry.dispose();
        }
        if (child.material) {
            child.material.dispose();
        }
        scene.remove(child);
    }
}

function eventHandler(event) {
    removeObj();
    if (event.key === "1") {
        lig1(THREE.AmbientLight);
        obj(THREE.MeshBasicMaterial);
    }
    else if (event.key === "2") {
        lig2(THREE.PointLight);
        obj(THREE.MeshStandardMaterial);
    }
    else if (event.key === "3") {
        lig1(THREE.DirectionalLight);
        obj(THREE.MeshStandardMaterial);
    }
    else if (event.key === "4") {
        lig2(THREE.SpotLight);
        obj(THREE.MeshPhongMaterial);
    }
    else if (event.key === "5") {
        lig2(THREE.PointLight);
        obj(THREE.MeshPhongMaterial);
    }
    else if (event.key === "6") {
        lig1(THREE.AmbientLight);
        obj(THREE.MeshPhongMaterial);
    }
    else if (event.key === "7") {
        lig1(THREE.AmbientLight);
        obj(THREE.MeshPhysicalMaterial);
    }
    else if (event.key === "8") {
        lig1(THREE.DirectionalLight);
        obj(THREE.MeshPhysicalMaterial);
    }
    else if (event.key === "9") {
        lig2(THREE.PointLight);
        obj(THREE.MeshPhysicalMaterial);
    }
}

document.addEventListener("keyup", eventHandler);

renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();