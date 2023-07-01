// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();

// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(
  105,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Keep the 3D objects on global variables so we can access them later
let desk;
let book;

// OrbitControls allow the camera to move around the scene
let controls;

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the desk model
loader.load(
  "/public/assets/desk/scene.gltf",
  function (gltf) {
    desk = gltf.scene;
    scene.add(desk);

    desk.position.y = -1.9;
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

// Load the book model
loader.load(
  "/public/assets/book/scene.gltf",
  function (gltf) {
    book = gltf.scene;
    scene.add(book);

    book.position.y = 0.3; // Adjust the initial position of the book
    book.position.z = 0.2; // Adjust the initial position of the book
    book.rotation.y = Math.PI; // Adjust the initial position of the book
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set the camera position
camera.position.set(0, -0.2, 2);

// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Add controls to the camera
controls = new OrbitControls(camera, renderer.domElement);

// Smooth movement variables
const movementSpeed = 0.0015;
let moveDirection = 1;
let initialYPosition = book ? book.position.y : 0;

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Smoothly move the book up and down
  if (book) {
    book.position.y += movementSpeed * moveDirection;

    // Check if the book reaches a certain height, then change the moveDirection to reverse the movement
    if (book.position.y >= initialYPosition + 0.3) {
      moveDirection = -1;
    } else if (book.position.y <= initialYPosition) {
      moveDirection = 1;
    }
  }

  renderer.render(scene, camera);
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();
