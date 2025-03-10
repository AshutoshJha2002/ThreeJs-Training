import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { emissive } from 'three/tsl';
function task2() {
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
        let light;
        if(param1==="AmbientLight")
            light=new THREE.AmbientLight(0xffffff, 5);
        else light=new THREE.DirectionalLight(0xffffff, 5);
        //const light = new param1(0xffffff, 5);
        light.position.set(-25, 40, 0);
        if (light.isDirectionalLight) {
            helper(light);
        }
        return light;
    }

function getMesh(param2,param1)
{
    console.log(param2);
    if(param2==="PlaneGeometry")
    {
        const geometry = new THREE.PlaneGeometry(10, 10);
        const material = new param1({ color: 0x808080, side: THREE.DoubleSide });
        const plane = new THREE.Mesh(geometry, material);
        plane.position.set(0, 0, 0);
        plane.rotation.set(-Math.PI / 2, 0, 0);
        plane.scale.set(10, 10, 1);
        plane.receiveShadow = true;
        return plane;
        //scene.add(plane);
    }
    if(param2==="BoxGeometry")
    {
        const geometry1 = new THREE.BoxGeometry(10, 10, 10);
        const material1 = new param1({ color: 'red', side: THREE.DoubleSide, emissive: "red" });
        const cube1 = new THREE.Mesh(geometry1, material1);
        cube1.position.set(0, 13, 0);
        cube1.castShadow = true;
        cube1.receiveShadow = true;
        //scene.add(cube1);
        return cube1;
    }
    if(param2==="CapsuleGeometry")
    {
        const geometry2 = new THREE.CapsuleGeometry(5, 10, 32, 32);
        const material1 = new param1({ color: 'red', side: THREE.DoubleSide, emissive: "red" });
        const cube2 = new THREE.Mesh(geometry2, material1);
        cube2.position.set(27, 13, 0);
        cube2.castShadow = true;
        cube2.receiveShadow = true;
        //scene.add(cube2);
        return cube2;
    }
    if(param2==="CylinderGeometry")
    {
        const material1 = new param1({ color: 'red', side: THREE.DoubleSide, emissive: "red" });
        const geometry3 = new THREE.CylinderGeometry(5, 5, 10, 32);
        const cube3 = new THREE.Mesh(geometry3, material1);
        cube3.position.set(-27, 13, 0);
        cube3.castShadow = true;
        cube3.receiveShadow = true;
        //scene.add(cube3);
        return cube3;
    }
}

    //For Plane and Cube with variable material
    function obj(param1) {
        scene.add(getMesh("PlaneGeometry",param1));
        scene.add(getMesh("BoxGeometry",param1));
        scene.add(getMesh("CapsuleGeometry",param1));
        scene.add(getMesh("CylinderGeometry",param1));
        /*const geometry = new THREE.PlaneGeometry(10, 10);
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
        scene.add(cube3);*/
    }

    //For Spot Light and Point Light
    function lig2(param1) {
        let light;
        if(param1==="SpotLight")
            light=new THREE.SpotLight(0xffffff, 5, 400);
        else light=new THREE.PointLight(0xffffff, 5, 400);
        light.position.set(3, 50, 10);
        light.decay = 0.1;
        light.castShadow = true;

        helper(light);
        return light;
    }

    function getLight(str)
    {
        if(str==="AmbientLight" || str==="DirectionalLight") return lig1(str);
else if(str==="PointLight" || str==="SpotLight") return lig2(str);
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
            scene.add(getLight("AmbientLight"));
            //lig1(THREE.AmbientLight);
            obj(THREE.MeshBasicMaterial);
        }
        else if (event.key === "2") {
            scene.add(getLight("PointLight"));
            //lig2(THREE.PointLight);
            obj(THREE.MeshStandardMaterial);
        }
        else if (event.key === "3") {
            scene.add(getLight("DirectionalLight"));
            //lig1(THREE.DirectionalLight);
            obj(THREE.MeshStandardMaterial);
        }
        else if (event.key === "4") {
            scene.add(getLight("SpotLight"));
            //lig2(THREE.SpotLight);
            obj(THREE.MeshPhongMaterial);
        }
        else if (event.key === "5") {
            scene.add(getLight("PointLight"));
            //lig2(THREE.PointLight);
            obj(THREE.MeshPhongMaterial);
        }
        else if (event.key === "6") {
            scene.add(getLight("AmbientLight"));
            //lig1(THREE.AmbientLight);
            obj(THREE.MeshPhongMaterial);
        }
        else if (event.key === "7") {
            scene.add(getLight("AmbientLight"));
            //lig1(THREE.AmbientLight);
            obj(THREE.MeshPhysicalMaterial);
        }
        else if (event.key === "8") {
            scene.add(getLight("DirectionalLight"));
            //lig1(THREE.DirectionalLight);
            obj(THREE.MeshPhysicalMaterial);
        }
        else if (event.key === "9") {
            scene.add(getLight("PointLight"));
            //lig2(THREE.PointLight);
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
}

function task3() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, -3);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);

    /*const geometry = new THREE.PlaneGeometry(1,1);
    const material=new THREE.MeshBasicMaterial({color:"red", side: THREE.DoubleSide});
    const plane=new THREE.Mesh(geometry, material);
    plane.rotation.set(-Math.PI/2,0,0);
    plane.scale.set(1,1,1);
    plane.position.set(0,0,0);
    scene.add(plane);*/

    const length = 0.6, height = 1.2;
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, height);
    shape.lineTo(length, height);
    shape.lineTo(length, 0);
    shape.lineTo(0, 0);

    // Create a single circular hole
    const holeRadius = 0.02;
    let arrX = [0.125, 0.25, 0.375];
    let arrY = [0.1, 0.2];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            const hole = new THREE.Path();
            let corX = (length / 4) * (i + 1);
            let corY = (height / 3) * (j + 1);
            hole.absarc(corX, corY, holeRadius, 0, Math.PI * 2, false);
            shape.holes.push(hole);
        }
    }

    const extrudeSettings = {
        depth: 0.001,
        bevelEnabled: false
    };
    const geometry1 = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material1 = new THREE.MeshBasicMaterial({ color: "red", side: THREE.DoubleSide });
    const rect = new THREE.Mesh(geometry1, material1);
    scene.add(rect);
    rect.position.set(0, 0, 0);
    rect.rotation.y = Math.PI / 36;
    //rect.rotation.z=Math.PI/36;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}


function task4() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 900);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);

    let width = 100, height = 100;
    let origin = new THREE.Vector2(0, 0);
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2 + origin.x, -height / 2 + origin.y);
    shape.lineTo(width / 2 + origin.x, -height / 2 + origin.y);
    shape.lineTo(width / 2 + origin.x, height / 2 + origin.y);
    shape.lineTo(-width / 2 + origin.x, height / 2 + origin.y);
    shape.lineTo(-width / 2 + origin.x, -height / 2 + origin.y);

    const pathPoints = [
        new THREE.Vector3(origin.x, origin.y, 0),
        new THREE.Vector3(origin.x + 50, origin.y + 100, 0),
        new THREE.Vector3(origin.x + 100, origin.y, 0),
        new THREE.Vector3(origin.x + 900, origin.y, 0),
        new THREE.Vector3(origin.x + 950, origin.y + 100, 0),
        new THREE.Vector3(origin.x + 1000, origin.y, 0)
    ];

    const path = new THREE.CatmullRomCurve3(pathPoints, false);

    const extrudeSettings = {
        bevelEnabled: false,
        extrudePath: path
    };

    const geometry1 = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material1 = new THREE.MeshBasicMaterial({ color: "red" });
    const rect = new THREE.Mesh(geometry1, material1);
    scene.add(rect);

    const edges = new THREE.EdgesGeometry(geometry1); 
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); 
    const edgeMesh = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(edgeMesh);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}
//task3();
task2();
//task4();