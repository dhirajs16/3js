import * as THREE from "three"


const canvas = document.getElementById('webgl')


// Scene
const scene = new THREE.Scene()

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1, 1)
const material  = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material) //red cube
scene.add(mesh)

// size and aspect ratio
const size = {
    width: 800,
    height: 600
}
const aspect_ratio = size.width/size.height

// camera
const camera = new THREE.PerspectiveCamera(75, aspect_ratio,) // (fov, aspect_ratio, )
camera.position.z = 3
camera.position.y = 1
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)







