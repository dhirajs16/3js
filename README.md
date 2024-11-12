# **3js**

- **Lesson 1**: Basic Scene (3js code structure: scene, mesh, camera and renderer).

- **Lesson 2**: 3js Project Setup with node.js and oject transformation(position, rotation, scaling and quaternion), axes helper, distanceTo(), length().

- **Lesson 3**: Animation with `window.requestAnimationFrame()` and Clock Object.

- **Lesson 4**: Controls:`OrbitalControls`, viewport, windows, resize event, pixel ratio and double click event.

- **Lesson 5**: Types of Geometry(v9), Mesh Wireframe, BufferGeometry with float32array, `dat.gui`.
- **Lesson 6**: Texture(v11), loading manager, texture transformation(repeat, rotate), mipmapping

- **Lesson 7**: Material(v12) and it's types, Properties of MeshBasicMaterial, Light reactive materials. 

<hr>

### **Vite app setup**
```
npm create vite@latest myproject
cd myproject

npm install three
npm run dev

```
<hr>

## **Lesson 7**

### Properties of MeshBasicMaterial:

1. **Color**: Sets the color of the material. 
   ```javascript
   material.color.set(0xffffff); // white color
   ```

2. **Map**: Sets a texture map for the material.
   ```javascript
   material.map = new THREE.TextureLoader().load('path/to/texture.jpg');
   ```

3. **Wireframe**: Renders the material as a wireframe.
   ```javascript
   material.wireframe = true;
   ```

4. **Wireframe Line Width**: Sets the width of the wireframe lines.
   ```javascript
   material.wireframeLinewidth = 1;
   ```

5. **Opacity**: Sets the opacity of the material.
   ```javascript
   material.opacity = 0.5; // 50% transparent
   ```

6. **Transparent**: Enables transparency.
   ```javascript
   material.transparent = true;
   ```

7. **Side**: Specifies which side of faces will be rendered - front, back, or both.
   ```javascript
   material.side = THREE.DoubleSide;
   ```

8. **Visible**: Sets the material to be visible or not.
   ```javascript
   material.visible = true;
   ```

9. **Fog**: Whether the material is affected by scene fog.
   ```javascript
   material.fog = true;
   ```

10. **Blending**: How the material blends with the rest of the scene.
    ```javascript
    material.blending = THREE.NormalBlending;
    ```

11. **Depth Test**: Whether to use depth testing.
    ```javascript
    material.depthTest = true;
    ```

12. **Depth Write**: Whether rendering this material has any effect on the depth buffer.
    ```javascript
    material.depthWrite = true;
    ```

13. **Alpha Test**: Sets a threshold value for alpha testing.
    ```javascript
    material.alphaTest = 0.5;
    ```

14. **PremultipliedAlpha**: Whether the alpha value is premultiplied.
    ```javascript
    material.premultipliedAlpha = false;
    ```


12, 45:00