import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// domElement
const canvas = document.getElementById('display')

// scene
const scene = new THREE.Scene()

// mesh
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
scene.add(mesh)

// camera
const size = {
    width: 800,
    height: 600
}
const aspectRatio = size.width / size.height
const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 100)
camera.position.set(0, 0, 6)
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(size.width, size.height)


// animate
const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

animate()