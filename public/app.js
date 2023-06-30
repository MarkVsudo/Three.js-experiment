// // Import the THREE.js library
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// // Move each object to different corners
// const objectPosition1 = new THREE.Vector3(-30, -10, 10);
// const objectPosition2 = new THREE.Vector3(20, -20, 0);
// const objectPosition3 = new THREE.Vector3(20, 20, 0);
// const objectPosition4 = new THREE.Vector3(-20, 20, 0);

// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// let objToRender = "model1";

// const loader = new GLTFLoader();
// loadModel("model1", objectPosition1);
// loadModel("model3", objectPosition2);
// loadModel("model4", objectPosition3);
// loadModel("model5", objectPosition4);

// function loadModel(modelName, position) {
//   loader.load(
//     `public/assets/${modelName}/scene.gltf`,
//     function (gltf) {
//       const object = gltf.scene;
//       object.position.copy(position);
//       scene.add(object);
//     },
//     function (xhr) {
//       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//     },
//     function (error) {
//       console.error(error);
//     }
//   );
// }

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("model-container").appendChild(renderer.domElement);

// // Set camera position and target to encompass all models
// const cameraTarget = new THREE.Vector3(0, 0, 0); // Center of the scene
// const distanceBetweenModels = 20; // Adjust this distance as needed

// // Calculate bounding sphere containing all models
// const boundingSphere = new THREE.Sphere(cameraTarget, distanceBetweenModels);

// // Update camera position and target to include all models in view
// camera.position.set(0, 0, boundingSphere.radius * 2);
// camera.lookAt(cameraTarget);

// const topLight = new THREE.DirectionalLight(0xffffff, 1);
// topLight.position.set(500, 500, 500);
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(
//   0x333333,
//   objToRender === "model2" ? 5 : 1
// );
// scene.add(ambientLight);

// // Disable OrbitControls
// // const controls = new OrbitControls(camera, renderer.domElement);
// // Remove the above line to disable the OrbitControls

// function animate() {
//   requestAnimationFrame(animate);

//   // Remove the controls.update() function to disable zooming and dragging
//   // controls.update();

//   renderer.render(scene, camera);
// }

// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// };

// animate();
