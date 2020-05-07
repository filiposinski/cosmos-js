const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color('hsl(40,100%,60%)');
const colorLight = new THREE.Color('hsl(41,100%,95%)');
const colorGreen = new THREE.Color('hsl(81, 100%, 24%)');
const colorShadow = new THREE.Color('hsl(100,100%,0%');

//cubemap - not working

const path = 'image/';
const format = '.jpg';
const urls = [
    path + 'arid2_bk' + format, path + 'arid2_dn' + format,
    path + 'arid2_ft' + format, path + 'arid2_lf' + format,
    path + 'arid2_rt' + format, path + 'arid2_up' + format
];

const reflectionCube = new THREE.CubeTextureLoader().load(urls);
const refractionCube = new THREE.CubeTextureLoader().load(urls);
refractionCube.mapping = THREE.CubeRefractionMapping;

scene.background = reflectionCube;


//creating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({
    color: colorLight,
    shininess: 80
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);



const torusGeometry = new THREE.TorusGeometry(40, 10, 80, 400);
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

const light2 = new THREE.PointLight(colorShadow, 5);

light2.position.z = 1;
light2.position.y = 1;
light2.position.x = 1;

scene.add(light2);

camera.position.z = 30;

const animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.5;
    cube.rotation.y += 0.5;

    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;


    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();