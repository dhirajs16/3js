
import * as THREE from 'three' 

const canvas = document.getElementById('webgl')

// scene
const scene = new THREE.Scene()

// mesh
const geometry = new THREE.BoxGeometry(1, 1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
// Position
mesh.position.set(5, 8, 0)
mesh.position.normalize() // to bring the postion close to 1

// scale
mesh.scale.set(2, 1, 0.75)

// rotation
mesh.rotation.set(0, 1.5, Math.PI*0.5) //Math.PI or 3.14159 is pi i.e., 180 degrees
scene.add(mesh)






// camera
const size = {
    width: 800,
    height: 600
}
const aspect_ratio = size.width/size.height

const camera = new THREE.PerspectiveCamera(75, aspect_ratio)
camera.position.set(2, 2, 8)
scene.add(camera)

// lookAt() function
// By defualt camera looks at origin
camera.lookAt(new THREE.Vector3(-5, 0, 0))


// Axes helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)




// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)



// To see the distance between two vector3 with `distanceTo()`
console.log(new THREE.Vector3(1, 1, 1).distanceTo(new THREE.Vector3(2, 2, 2)))
console.log(camera.position.distanceTo(mesh.position))
console.log(mesh.position.length()) //To check distance from the origin



