const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})



const colorYellow = new THREE.Color('hsl(40,100%,60%)');
const colorLight = new THREE.Color('hsl(41,100%,95%)');
const colorGreen = new THREE.Color('hsl(81, 100%, 24%)');


//cubemap below - not working
/*const path = 'image/';
const format = '.jpg';
const urls = [
    path + 'arid2_bk' + format, path + 'arid2_dn' + format,
    path + 'arid2_up' + format, path + 'arid2_lf' + format,
    path + 'arid2_rt' + format, path + 'arid2_ft' + format
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


//creating torus
const torusGeometry = new THREE.TorusGeometry(40, 10, 80, 400);
const torusMaterial = new THREE.MeshPhongMaterial({ color: colorGreen, shininess: 50 });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

const knotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const knotMaterial = new THREE.MeshPhongMaterial({ color: colorYellow, shininess: 100 });
const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);
scene.add(torusKnot);

const light = new THREE.PointLight(colorLight, 1);

light.position.set(200, 400, 600);
scene.add(light);

const ambientLight = new THREE.AmbientLight(colorLight);
scene.add(ambientLight);
*/

const createSphere = (r = 1, color = 0xffffff) => {
    const sphereMat = new THREE.MeshPhongMaterial({
        color,
        shininess: 50,
    });
    const sphereGeo = new THREE.SphereGeometry(r, 20, 20);
    return new THREE.Mesh(sphereGeo, sphereMat);
};

const createLight = (i = 1, color = 0xffffff) => {
    return new THREE.PointLight(color, i);
};

const nucleus = createSphere(3);
const l1 = createLight(.8);
const l2 = createLight(.4, 0xb1e1ff);
l1.position.set(60, 20, 60);
l2.position.set(-30, 0, 20);

camera.position.set(0, 0, 50);

scene.add(nucleus, l1);
nucleus.add(l2);


const createElectron = (r = 0.4, color = 0xb1e1ff) => {
    const sphere = createSphere(r, color);
    const pivot = new THREE.Object3D();
    pivot.add(sphere);
    return {
        sphere,
        pivot
    };
};


const e1 = createElectron(.4);
const e2 = createElectron(.4);
const e3 = createElectron(.4);
const e4 = createElectron(.4);
e1.sphere.position.set(10, 0, 0);
e2.sphere.position.set(-10, 0, 0);
e3.sphere.position.set(5, 0, 0);
e4.sphere.position.set(-5, 0, 0);

nucleus.add(e1.pivot, e2.pivot, e3.pivot, e4.pivot);

e1.pivot.rotation.y = 120;
e1.pivot.rotation.y = 60;
e1.pivot.rotation.y = -60;
e1.pivot.rotation.y = 90;


const animate = function() {
    requestAnimationFrame(animate);


    e1.pivot.rotation.z += 0.01;
    e2.pivot.rotation.z += 0.03;
    e3.pivot.rotation.z += 0.03;
    e4.pivot.rotation.z += 0.04;
    nucleus.rotation.z += 0.005;
    nucleus.rotation.x += 0.008;
    nucleus.rotation.y += 0.009;


    renderer.render(scene, camera);
};

animate();