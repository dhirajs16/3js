import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// domElement
const canvas = document.getElementById('id_canvas')


// load texture

// Conventional Way
// const image = new Image()
// const texture = new THREE.Texture(image)
// image.onload = () => texture.needsUpdate = true
// image.src = './Assets/color.jpg'

// loading manager: it is useful when you are loading multiple assets: fonts, texture and others
const loadingManager = new THREE.LoadingManager()
// loadingManager.onStart = () => console.log("Started")
// loadingManager.onLoad = () => console.log("Loaded")
// loadingManager.onProgress = () => console.log("Progressed")
// loadingManager.onError = (err) => console.log("LoadingManager Error:", err)

const textureLoader = new THREE.TextureLoader(loadingManager)

const colorTexture = textureLoader.load('./Assets/door/color.jpg')
// const alphaTexture = textureLoader.load('./Assets/door/alpha.jpg')
// const ambientTexture = textureLoader.load('./Assets/door/ambientOcclusion.jpg')
// const heightTexture = textureLoader.load('./Assets/door/height.jpg')
// const metalnessTexture = textureLoader.load('./Assets/door/metalness.jpg')
// const normalTexture = textureLoader.load('./Assets/door/normal.jpg')
// const roughnessTexture = textureLoader.load('./Assets/door/roughness.jpg')

// const minecraftTexture = textureLoader.load('./Assets/minecraft.png')


// scene
const scene = new THREE.Scene()


// camera
const size = {
    width: window.innerWidth,
    height: window.innerHeight 
}

const camera = new THREE.PerspectiveCamera(50, size.width/size.height, 0.1, 100)
camera.position.set(0,0,4)
scene.add(camera)


// mesh
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
    new THREE.MeshBasicMaterial({map: colorTexture})
)
scene.add(cube)


// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2))


// windows function
window.addEventListener('resize', () => {
    size.width = window.innerWidth
    size.height = window.innerHeight
    camera.aspect = size.width/size.height
    camera.updateProjectionMatrix()
    renderer.setSize(size.width, size.height)
    renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    !document.fullscreenElement? canvas.requestFullscreen() : document.exitFullscreen()
})


// animate
const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
animate()


// datgui
const gui = new dat.GUI()
gui.add(cube.material, 'wireframe')
