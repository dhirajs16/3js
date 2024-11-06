import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


// domElement
const canvas = document.getElementById('display')

// scene
const scene = new THREE.Scene()


// camera
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(55,size.width/size.height, 0.1, 100)
camera.position.z = 8
scene.add(camera)


// texture loader
const textureLoader = new THREE.TextureLoader()
const matcaps8Texture = textureLoader.load('./static/matcaps/3.png')


// meshes
const material = new THREE.MeshBasicMaterial({map: matcaps8Texture, wireframe:false})
// const material = new THREE.MeshBasicMaterial()
// material.color.set(0xff0000)
// material.wireframe = true

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(),
  material 
)
sphere.position.x = -3
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  material 
)
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(),
  material
)
torus.position.x = 3
scene.add(sphere, plane, torus)


// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.max(2, window.devicePixelRatio))


// animation
const clock = new THREE.Clock()

const animate = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}
animate()


// window functions
window.addEventListener('resize', () => {
  size.width = window.innerWidth
  size.height = window.innerHeight
  camera.aspect = size.width / size.height
  camera.updateProjectionMatrix()
  renderer.setSize(size.width, size.height)
  renderer.setPixelRatio(Math.max(2, window.devicePixelRatio))
})
window.addEventListener('dblclick', () => {
  !document.fullscreenElement? canvas.requestFullscreen() : document.exitFullscreen()
})