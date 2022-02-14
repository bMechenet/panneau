var reponse = ["false", "false", "false", "true", "45", "false", "true", "false", "true", "true", "true", "true", "false", "false", "true", "false", "false", "true", "1", "3", "1"];
var inputReponse = ["false", "false", "false", "false", "25", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "2", "2", "2"]

$("#lettrea").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("lettreA").translate(BABYLON.Axis.Y, -0.04, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("lettreA").translate(BABYLON.Axis.Y, 0.04, BABYLON.Space.WORLD);
    }
    inputReponse[0] = $(this).attr("val");
    checkArray();
})
$("#lettreb").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("lettreB").translate(BABYLON.Axis.Y, -0.04, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("lettreB").translate(BABYLON.Axis.Y, 0.04, BABYLON.Space.WORLD);
    }
    inputReponse[1] = $(this).attr("val");
    checkArray();
})
$("#lettrec").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("lettreC").translate(BABYLON.Axis.Y, -0.04, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("lettreC").translate(BABYLON.Axis.Y, 0.04, BABYLON.Space.WORLD);
    }
    inputReponse[2] = $(this).attr("val");
    checkArray();
})
$("#lettred").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("lettreD").translate(BABYLON.Axis.Y, -0.04, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("lettreD").translate(BABYLON.Axis.Y, 0.04, BABYLON.Space.WORLD);
    }
    inputReponse[3] = $(this).attr("val");
    checkArray();
})


$("#molette").click(function(){
    if($(this).attr("val") == "95"){
        $(this).attr("val", "0");
    }else{
        $(this).attr("val", parseFloat($(this).attr("val")) + 5);
    }
    scene.getMeshByID("molette").rotate(BABYLON.Axis.Y, 0.314, BABYLON.Space.LOCAL);
    inputReponse[4] = $(this).attr("val");
    checkArray();
})


$("#switch1").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getTransformNodeByID("switch1").rotate(BABYLON.Axis.Z, -0.5, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getTransformNodeByID("switch1").rotate(BABYLON.Axis.Z, 0.5, BABYLON.Space.WORLD);
    }
    inputReponse[5] = $(this).attr("val");
    checkArray();
})
$("#switch2").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getTransformNodeByID("switch2").rotate(BABYLON.Axis.Z, -0.5, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getTransformNodeByID("switch2").rotate(BABYLON.Axis.Z, 0.5, BABYLON.Space.WORLD);
    }
    inputReponse[6] = $(this).attr("val");
    checkArray();
})
$("#switch3").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getTransformNodeByID("switch3").rotate(BABYLON.Axis.Z, -0.5, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getTransformNodeByID("switch3").rotate(BABYLON.Axis.Z, 0.5, BABYLON.Space.WORLD);
    }
    inputReponse[7] = $(this).attr("val");
    checkArray();
})
$("#switch4").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getTransformNodeByID("switch4").rotate(BABYLON.Axis.Z, -0.5, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getTransformNodeByID("switch4").rotate(BABYLON.Axis.Z, 0.5, BABYLON.Space.WORLD);
    }
    inputReponse[8] = $(this).attr("val");
    checkArray();
})


$("#btn1-1").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton1-1").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton1-1").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[9] = $(this).attr("val");
    checkArray();
})
$("#btn1-2").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton1-2").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton1-2").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[10] = $(this).attr("val");
    checkArray();
})
$("#btn1-3").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton1-3").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton1-3").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[11] = $(this).attr("val");
    checkArray();
})
$("#btn2-1").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton2-1").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton2-1").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[12] = $(this).attr("val");
    checkArray();
})
$("#btn2-2").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton2-2").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton2-2").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[13] = $(this).attr("val");
    checkArray();
})
$("#btn2-3").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton2-3").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton2-3").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[14] = $(this).attr("val");
    checkArray();
})
$("#btn3-1").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton3-1").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton3-1").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[15] = $(this).attr("val");
    checkArray();
})
$("#btn3-2").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton3-2").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton3-2").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[16] = $(this).attr("val");
    checkArray();
})
$("#btn3-3").click(function(){
    if($(this).attr("val") == "false"){
        $(this).attr("val", "true");
        scene.getMeshByID("bouton3-3").translate(BABYLON.Axis.Y, -0.06, BABYLON.Space.WORLD);
    }else{
        $(this).attr("val", "false");
        scene.getMeshByID("bouton3-3").translate(BABYLON.Axis.Y, 0.06, BABYLON.Space.WORLD);
    }
    inputReponse[17] = $(this).attr("val");
    checkArray();
})


$("#tripos1").click(function(){
    if($(this).attr("val") == "1"){
        $(this).attr("val", "2");
        scene.getMeshByID("tripos1").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else if($(this).attr("val") == "2"){
        $(this).attr("val", "3");
        scene.getMeshByID("tripos1").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else{
        $(this).attr("val", "1");
        scene.getMeshByID("tripos1").rotate(BABYLON.Axis.Y, -4.1, BABYLON.Space.LOCAL);
    }
    inputReponse[18] = $(this).attr("val");
    checkArray();
})
$("#tripos2").click(function(){
    if($(this).attr("val") == "1"){
        $(this).attr("val", "2");
        scene.getMeshByID("tripos2").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else if($(this).attr("val") == "2"){
        $(this).attr("val", "3");
        scene.getMeshByID("tripos2").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else{
        $(this).attr("val", "1");
        scene.getMeshByID("tripos2").rotate(BABYLON.Axis.Y, -4.1, BABYLON.Space.LOCAL);
    }
    inputReponse[19] = $(this).attr("val");
    checkArray();
})
$("#tripos3").click(function(){
    if($(this).attr("val") == "1"){
        $(this).attr("val", "2");
        scene.getMeshByID("tripos3").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else if($(this).attr("val") == "2"){
        $(this).attr("val", "3");
        scene.getMeshByID("tripos3").rotate(BABYLON.Axis.Y, -1.1, BABYLON.Space.LOCAL);
    }else{
        $(this).attr("val", "1");
        scene.getMeshByID("tripos3").rotate(BABYLON.Axis.Y, -4.1, BABYLON.Space.LOCAL);
    }
    inputReponse[20] = $(this).attr("val");
    checkArray();
})

function checkArray(){
    for(var i = 0; i<=21; i++){
        if(inputReponse[i] != reponse[i]){
            break;
        }
        if(i == 21){
            window.alert("c'est bon !")
        }

    }

}
