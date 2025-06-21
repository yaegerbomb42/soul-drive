// Basic three.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 300);
document.getElementById('scene-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

const commandInput = document.getElementById('command-input');
const sendButton = document.getElementById('send-command');

const commandQueue = [];

sendButton.addEventListener('click', () => {
    const command = commandInput.value.trim();
    if (command) {
        commandQueue.push(command);
        alert('Queued command: ' + command);
        commandInput.value = '';
    }
});

// Placeholder for Firebase integration
// const firebaseConfig = { /* TODO: add config */ };
// firebase.initializeApp(firebaseConfig);
