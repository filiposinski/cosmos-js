const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color('hsl(40,100%,60%)');
const colorLight = new THREE.Color('hsl(41,100%,95%)');
const colorPink = new THREE.Color('hsl(306,100%,60%)');

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
    color: colorYellow,
    shininess: 80
});
console.log('hello');
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const light = new THREE.PointLight(colorLight, 2);

light.position.z = 20;
light.position.y = -20;
light.position.x = -40;

const light2 = new THREE.PointLight(colorLight, 1);

light2.position.z = 10;
light2.position.y = 20;
light2.position.x = 40;

scene.add(light);
scene.add(light2);

camera.position.z = 5;

const animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();