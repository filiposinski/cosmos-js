const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color('hsl(40,100%,60%)');
const colorLight = new THREE.Color('hsl(41,100%,95%)');
const colorGreen = new THREE.Color('hsl(81, 100%, 24%)');
const colorShadow = new THREE.Color('hsl(100,100%,0%');

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
const torusMaterial = new THREE.MeshPhongMaterial({ color: colorGreen, shininess: 50 });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

const knotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const knotMaterial = new THREE.MeshPhongMaterial({ color: colorYellow, shininess: 100 });
const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);
scene.add(torusKnot);

const light = new THREE.PointLight(colorLight, 0.1);

light.position.set(200, 400, 600);
scene.add(light);

const light2 = new THREE.PointLight(colorShadow, 1);

light2.position.z = 0;
light2.position.y = 0;
light2.position.x = 0;

scene.add(light2);

camera.position.z = 100;

const animate = function() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;


    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.02;

    renderer.render(scene, camera);
};

animate();