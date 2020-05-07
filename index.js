const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color('hsl(40,100%,60%)');
const colorLight = new THREE.Color('hsl(41,100%,95%)');
const colorPink = new THREE.Color('hsl(306,100%,60%)');

/*const geometry = new THREE.BoxGeometry(6, 6, 6);
const material = new THREE.MeshPhongMaterial({
    color: colorYellow,
    shininess: 80
});

console.log('hello');
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
*/
const torusGeometry = new THREE.TorusGeometry(40, 6, 80, 400);
const torusMaterial = new THREE.MeshBasicMaterial({ color: colorPink });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

const knotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const knotMaterial = new THREE.MeshBasicMaterial({ color: colorYellow });
const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);
scene.add(torusKnot);

const light = new THREE.PointLight(colorLight, 10);

light.position.z = 20;
light.position.y = -20;
light.position.x = -40;

const light2 = new THREE.PointLight(colorLight, 5);

light2.position.z = 10;
light2.position.y = 20;
light2.position.x = 40;

scene.add(light);
//scene.add(light2);

camera.position.z = 100;

const animate = function() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    torus.rotation.x -= 0.03;
    torus.rotation.y -= 0.03;


    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.02;

    renderer.render(scene, camera);
};

animate();