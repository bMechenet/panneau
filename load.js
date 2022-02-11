// Create the scene space
var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true, {})

var scene = new BABYLON.Scene(engine);

scene.createDefaultEnvironment({
    environmentTexture: "objet/environment.env"
});

scene.createDefaultSkybox(scene.environmentTexture);

scene.getNodeByName("BackgroundHelper").dispose();

// Create camera
var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0., 0., 0.), scene);
camera.position = new BABYLON.Vector3(-0.57, 3.1, 0.65);
camera.target = new BABYLON.Vector3(-0.07, 0, 0.65);
camera.minZ = 0.1
camera.fov = 0.5;
scene.activeCamera = camera;



var glassMat = new BABYLON.PBRMaterial("glassMat", scene);
glassMat.metallic = 0.0;
glassMat.roughness = 0.1;
glassMat.subSurface.isTranslucencyEnabled = true;
glassMat.subSurface.tintColor = BABYLON.Color3.Teal();
glassMat.alpha = 0.3;
glassMat.subSurface.tintColor.g = 0.1;
glassMat.subSurface.tintColor.b = glassMat.subSurface.tintColor.g;
glassMat.subSurface.tintColor.r = glassMat.subSurface.tintColor.g;


var liquideMat = new BABYLON.PBRMaterial("liquideMat", scene);
liquideMat.metallic = 0.0;
liquideMat.roughness = 0.1;
liquideMat.subSurface.isTranslucencyEnabled = true;
liquideMat.subSurface.tintColor = BABYLON.Color3.Teal();
liquideMat.alpha = 0.8;
liquideMat.subSurface.tintColor.g = 0.1;
liquideMat.subSurface.tintColor.b = 0.1;
liquideMat.subSurface.tintColor.r = 1;


var rubberMat = new BABYLON.PBRMaterial("rubberMat", scene);
rubberMat.metallic = 0.0;
rubberMat.roughness = 0.45;
rubberMat.subSurface.isTranslucencyEnabled = true;
rubberMat.albedoColor = new BABYLON.Color3(0.01,0.01,0.01);
rubberMat.subSurface.tintColor = BABYLON.Color3.Teal();
rubberMat.subSurface.tintColor.g = 0.01;
rubberMat.subSurface.tintColor.b = rubberMat.subSurface.tintColor.g;
rubberMat.subSurface.tintColor.r = rubberMat.subSurface.tintColor.g;

var rubberVertMat = new BABYLON.PBRMaterial("rubberVertMat", scene);
rubberVertMat.metallic = 0.0;
rubberVertMat.roughness = 0.35;
rubberVertMat.albedoColor = new BABYLON.Color3(0.1,0.4,0.1);

var rubberRougeMat = new BABYLON.PBRMaterial("rubberRougeMat", scene);
rubberRougeMat.metallic = 0.0;
rubberRougeMat.roughness = 0.35;
rubberRougeMat.albedoColor = new BABYLON.Color3(0.4,0.03,0.02);

var rubberBleuMat = new BABYLON.PBRMaterial("rubberBleuMat", scene);
rubberBleuMat.metallic = 0.0;
rubberBleuMat.roughness = 0.35;
rubberBleuMat.albedoColor = new BABYLON.Color3(0.01,0.01,0.5);

var rubberRoseMat = new BABYLON.PBRMaterial("rubberRoseMat", scene);
rubberRoseMat.metallic = 0.0;
rubberRoseMat.roughness = 0.35;
rubberRoseMat.albedoColor = new BABYLON.Color3(0.5,0.15,0.45);

var rubberOrangeMat = new BABYLON.PBRMaterial("rubberOrangeMat", scene);
rubberOrangeMat.metallic = 0.0;
rubberOrangeMat.roughness = 0.35;
rubberOrangeMat.albedoColor = new BABYLON.Color3(0.6, 0.1,0.01);

var rubberVioletMat = new BABYLON.PBRMaterial("rubberVioletMat", scene);
rubberVioletMat.metallic = 0.0;
rubberVioletMat.roughness = 0.35;
rubberVioletMat.albedoColor = new BABYLON.Color3(0.06,0.02,0.09);

var rubberMarronMat = new BABYLON.PBRMaterial("rubberMarronMat", scene);
rubberMarronMat.metallic = 0.0;
rubberMarronMat.roughness = 0.35;
rubberMarronMat.albedoColor = new BABYLON.Color3(0.08,0.01,0);

var rubberCyanMat = new BABYLON.PBRMaterial("rubberCyanMat", scene);
rubberCyanMat.metallic = 0.0;
rubberCyanMat.roughness = 0.35;
rubberCyanMat.albedoColor = new BABYLON.Color3(0.04,0.6,0.35);

var rubberJauneMat = new BABYLON.PBRMaterial("rubberJauneMat", scene);
rubberJauneMat.metallic = 0.0;
rubberJauneMat.roughness = 0.35;
rubberJauneMat.albedoColor = new BABYLON.Color3(0.6,0.4,0.05);

var metalMat = new BABYLON.PBRMaterial("metalMat", scene);
metalMat.metallic = 1;
metalMat.roughness = 0.1;
metalMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);

var lettreAMat = new BABYLON.PBRMaterial("lettreAMat", scene);
lettreAMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
lettreAMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/lettre-01.png", scene);
lettreAMat.roughness = 0.35;

var lettreBMat = new BABYLON.PBRMaterial("lettreBMat", scene);
lettreBMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
lettreBMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/lettre-02.png", scene);
lettreBMat.roughness = 0.35;

var lettreCMat = new BABYLON.PBRMaterial("lettreCMat", scene);
lettreCMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
lettreCMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/lettre-03.png", scene);
lettreCMat.roughness = 0.35;

var lettreDMat = new BABYLON.PBRMaterial("lettreDMat", scene);
lettreDMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
lettreDMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/lettre-04.png", scene);
lettreDMat.roughness = 0.35;

var thermoMat = new BABYLON.PBRMaterial("thermoMat", scene);
thermoMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
thermoMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/termometre-01.png", scene);
thermoMat.roughness = 0.35;

var moletteMat = new BABYLON.PBRMaterial("moletteMat", scene);
moletteMat.albedoColor = new BABYLON.Color3(0.01,0.01,0.01);
moletteMat.emissiveTexture = new BABYLON.Texture("objet/panneau/bouton/molette.jpg", scene);
moletteMat.emissiveColor = new BABYLON.Color3(1,1,1);
moletteMat.roughness = 0.35;

var panneauMat = new BABYLON.PBRMaterial("panneauMat", scene);
panneauMat.albedoTexture = new BABYLON.Texture("objet/panneau/bouton/triposition-01.png", scene);
panneauMat.roughness = 0.1;
panneauMat.albedoColor = new BABYLON.Color3(0.8,0.8,0.8);
panneauMat.metallic = 0.8;


var lightRed = new BABYLON.PointLight("pointRed", new BABYLON.Vector3(0.55, 0.03, 0.5), scene);
lightRed.diffuse = new BABYLON.Color3(1,0,0);
lightRed.intensity = 5;

var lightBlue = new BABYLON.PointLight("pointBlue", new BABYLON.Vector3(0.55, 0.03, 0.83), scene);
lightBlue.diffuse = new BABYLON.Color3(0,0,0.5);
lightBlue.intensity = 50;

BABYLON.SceneLoader.Append("objet/panneau/", "panneau.glb", scene, function (scene) {

    scene.getMeshByID("tube-thermo").material = glassMat;
    scene.getMeshByID("ampoule-rouge.001").material = glassMat;
    scene.getMeshByID("ampoule-bleu.001").material = glassMat;

    scene.getMeshByID("ampoule-bleu").material = rubberMat;
    scene.getMeshByID("ampoule-rouge").material = rubberMat;
    scene.getMeshByID("molette").material = rubberMat;
    scene.getMeshByID("switch1_primitive0").material = rubberMat;
    scene.getMeshByID("switch2_primitive0").material = rubberMat;
    scene.getMeshByID("switch3_primitive0").material = rubberMat;
    scene.getMeshByID("switch4_primitive0").material = rubberMat;

    scene.getMeshByID("tripos1").material = rubberMat;
    scene.getMeshByID("tripos2").material = rubberMat;
    scene.getMeshByID("tripos3").material = rubberMat;

    scene.getMeshByID("liquide-thermo").material = liquideMat;

    scene.getMeshByID("bouton1-1").material = rubberVertMat;
    scene.getMeshByID("bouton1-2").material = rubberRougeMat;
    scene.getMeshByID("bouton1-3").material = rubberBleuMat;
    scene.getMeshByID("bouton2-1").material = rubberRoseMat;
    scene.getMeshByID("bouton2-2").material = rubberOrangeMat;
    scene.getMeshByID("bouton2-3").material = rubberVioletMat;
    scene.getMeshByID("bouton3-1").material = rubberMarronMat;
    scene.getMeshByID("bouton3-2").material = rubberCyanMat;
    scene.getMeshByID("bouton3-3").material = rubberJauneMat;

    scene.getMeshByID("switch1_primitive1").material = metalMat;
    scene.getMeshByID("switch2_primitive1").material = metalMat;
    scene.getMeshByID("switch3_primitive1").material = metalMat;
    scene.getMeshByID("switch4_primitive1").material = metalMat;

    scene.getMeshByID("lettreA").material = lettreAMat;
    scene.getMeshByID("lettreB").material = lettreBMat;
    scene.getMeshByID("lettreC").material = lettreCMat;
    scene.getMeshByID("lettreD").material = lettreDMat;

    scene.getMeshByID("base-thermo").material = thermoMat;

    scene.getMeshByID("molette").material = moletteMat;

    scene.getMeshByID("panneau").material = panneauMat;

    scene.getMeshByID("molette").position = new BABYLON.Vector3(0.13,-0.04,-0.12);
});

const variableRed = new BABYLON.Animation("variableRed", "intensity", 10, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
const keyFramesRed = [];

keyFramesRed.push({
    frame: 0,
    value: 5
});
keyFramesRed.push({
    frame: 20,
    value: 0
});
keyFramesRed.push({
    frame: 30,
    value: 0
});
keyFramesRed.push({
    frame: 50,
    value: 5
});

variableRed.setKeys(keyFramesRed);
lightRed.animations.push(variableRed);
scene.beginAnimation(lightRed, 0, 50, true);


// Render Loop
engine.runRenderLoop(function() {
    scene.render();
});
// Auto Resize
window.addEventListener("resize", function() {
    engine.resize();
});
