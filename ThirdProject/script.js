import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,0,-3);
const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls=new OrbitControls(camera, renderer.domElement);

/*const geometry = new THREE.PlaneGeometry(1,1);
const material=new THREE.MeshBasicMaterial({color:"red", side: THREE.DoubleSide});
const plane=new THREE.Mesh(geometry, material);
plane.rotation.set(-Math.PI/2,0,0);
plane.scale.set(1,1,1);
plane.position.set(0,0,0);
scene.add(plane);*/

const length = 0.5, width = 0.3;
const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

// Create a single circular hole
const holeRadius = 0.02;
let arrX=[0.125,0.25,0.375];
let arrY=[0.1,0.2];
for(let i=0;i<3;i++)
{
    for(let j=0;j<2;j++)
    {
        const hole = new THREE.Path();
        let corX=(length/4)*(i+1);
        let corY=(width/3)*(j+1);
        hole.absarc(corX, corY, holeRadius, 0, Math.PI * 2, false);
        shape.holes.push(hole);
    }
}

const extrudeSettings = {
	depth: 0.001,
    bevelEnabled: false
};
const geometry1 = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material1 = new THREE.MeshBasicMaterial( { color: "red", side: THREE.DoubleSide } );
const rect = new THREE.Mesh( geometry1, material1 ) ;
scene.add( rect );
rect.position.set(0,0,0);
rect.rotation.y=Math.PI/36;
//rect.rotation.z=Math.PI/36;

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();