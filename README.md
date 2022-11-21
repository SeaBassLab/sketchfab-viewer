# SketchfabViewer

Autores:

- @SeaBassLab

## tl;dr

- Install by executing `npm i sketchfab-viewer` or `yarn add sketchfab-viewer`.
- Import by adding `import { SketchfabViewer } from "sketchfab-viewer";`.

## Description

SketchfabViewer is a Web Component library that allows you to manipulate the Sketchfab Viewer API simply and easily.

## Motivation

With the strong demand for 3D models on the web. Sketchfab has become an important benchmark for many reasons, one of which is connecting a 3D viewer to an iframe tag. I have personally had to work on several projects where it was necessary to implement and modify the API viewer. Hide a button, add a custom payload, custom icon, etc.
The hard part is implementing the Sketchfab client in projects with server-side rendering.🤒
These and other common API viewer configuration errors that consume research time and cause us some headaches. This package will be handling them 👍🏻. So enjoy it 🙌🏼!!!

## Getting started

### Installation

Add SketchfabViewer to your project by executing

```js
 npm install sketchfab-viewer
```

or

```js
 yarn add sketchfab-viewer
```

### Usage

Here's an example of basic usage:

- Add SketchfabViewer in HTML

```html
<sketchfab-viewer uid="538f4a91fb374937833ec025eaad5589"> </sketchfab-viewer>
```

## Alternatives

You will probably need to interact with the different options and settings provided by the Sketchfab viewer API itself. Many of the options have account limitations.
Please visit the [official site](https://sketchfab.com/developers/viewer/initialization) to know all the options and settings

having said that...

- You can control the different aspects of the model viewer by passing properties with the values allowed by the Sketchfab Viewer API

- It even allows adding any loader component by passing the slot='loader' attribute

- The same with any button that you want to add slot='button'

- Keep in mind that the component has a relative position, so you can play with the absolute position all you want.

```js
 <SketchfabViewer
    id="my-viewer"
    uid="538f4a91fb374937833ec025eaad5589"
    settings='[{"name": "getMaterialList", "arguments": []}]'
    options={autospin: 0}
 >
 <MyCustomLoader slot='loader'></MyCustomLoader>
 <Button slot='button' onClick={() => getEnv()}>Set Env</Button>
 </SketchfabViewer>

  const viewer = document.getElementById("my-viewer")
  viewer.addEventListener("onResponse", (event) => console.log(event)); // Response event for all request
  function getEnv(){
    viewer.updateSettings("setEnvironment", [{options}]) // method to use any Viewer API call
  }

```

## Possible Values

| Key           | Default Value | Account Limitation | Usage                                                                               |
| ------------- | ------------- | ------------------ | ----------------------------------------------------------------------------------- |
| autostart     | 1             | none               | Setting to 0 will make the model load wait for a user to click the Play button.     |
| autospin      | 0.2           | none               | Cause the model to automatically spin around the z-axis after loading.              |
| preload       | 1             | none               | Setting to 0 will not force all resources to download before the scene is displayed |
| ui_infos      | 0             | Premium            | Setting to 1 will not hide the model info bar at the top of the viewer.             |
| ui_stop       | 0             | none               | Setting to 0 will not hide the "Disable Viewer" button in the top right.            |
| ui_controls   | 1             | Premium            | Setting to 0 will hide all the viewer controls at the bottom of the viewer.         |
| ui_fadeout    | 0             | Premium            | Setting to 1 will not prevent controls from disappearing when the camera moves.     |
| ui_fullscreen | 0             | Premium            | Setting to 1 will not hide the Fullscreen button.                                   |
| ui_settings   | 0             | Premium            | Setting to 1 will not hide the Settings button.                                     |
| ui_help       | 0             | Premium            | Setting to 1 will not hide the Help button.                                         |
| ui_inspector  | 0             | Premium            | Setting to 1 will not hide the inspector button.                                    |
| ui_vr         | 0             | Premium            | Setting to 1 will not hide the View in VR button.                                   |
| ui_ar         | 0             | Premium            | Setting to 1 will not hide 1 will not hide.                                         |
| ui_watermark  | 0             | Premium            | Setting to 1 will not remove the Sketchfab logo watermark.                          |
| ui_ar_help    | 0             | Premium            | Setting to 1 will not hide the AR popup's help link.                                |
| ui_ar_qrcode  | 0             | Premium            | Setting to 1 will not hide the AR popup's QR code.                                  |
| ui_loading    | 0             | Premium            | Setting to 1 will not hide the viewer loading bars.                                 |

## Author

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/70863556?s=400&v=4" width="100">
    </td>
    <td>
      Sebastian Pulido<br />
      <a href="mailto:sebastian.pulido@ibisdev.tech">sebastian.pulido@ibisdev.tech</a><br />
      Software Developer at IbisDev<br />
      <a href="https://ibisdev.tech">https://ibisdev.tech</a>
    </td>
  </tr>
</table>
