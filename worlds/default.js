// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js", "video.js",
    ];

    Constants.DefaultCards = [
        {
            card: {
                layers: ["walk", "pointer"],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
                translation: [0, -1.5736032771350863, -0.673165032147081],
                rotation: [0, 0, 0, 1],
                name: "/LifeBelowGEO.glb",
                dataLocation: "./assets/3d/LifeBelowGEO_002.glb",
                dataScale: [1, 1, 1],
                fileName: "/LifeBelowGEO_002.glb",
                modelType: "glb",
                shadow: true,
                // singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                // dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                dataLocation: "./assets/sky/realistic_empty_underwater_scene_well_lit.jpg",
                fileName: "/realistic_empty_underwater_scene_well_lit.jpg",
                dataType: "jpg",
            }
        },

        {
            card: {
                translation: [0.029004916692090266, 4.650590764477098, -1.1803538019038742],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                name: "/untitled3.glb",
                animationClipIndex: 0,
                animationStartTime: 30616,
                dataLocation: "./assets/3d/untitled3.glb",    //fishes
                // dataLocation: "./assets/3d/LBW_Dirty.glb",    //polluted items            
                dataScale: [1, 1, 1],
                fileName: "/untitled3.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },

        {
            card: {
                translation: [-2.14861780246635, -0.8000653486815275, -1.6888274309357052],
                scale: [4, 4, 4],
                rotation: [0, 0.7015206662828777, 0, 0.6882107825775338],
                layers: ["pointer"],
                name: "/Life_Below_Water_Banner.png",
                cornerRadius: 0.02,
                fileName: "/Life_Below_Water_Banner.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Life_Below_Water_Banner.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [2.057613440624781, 0.021626490264146758, -2.0691351838014262],
                scale: [2.182471771641725, 2.182471771641725, 2.182471771641725],
                rotation: [0, -0.6957235160600336, 0, 0.7183096750017114],
                layers: ["pointer"],
                name: "/Life_Below_Water.png",
                cornerRadius: 0.02,
                fileName: "/Life_Below_Water.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Life_Below_Water.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-5.9632483706048625, 0.021626490264146758, -26.08193135200725],
                scale: [2.182471771641725, 2.182471771641725, 2.182471771641725],
                rotation: [0, -0.9999888524537972, 0, 0.004721754773162181],
                layers: ["pointer"],
                name: "/90_Percent_of_Worlds_Fishers.png",
                cornerRadius: 0.02,
                fileName: "/90_Percent_of_Worlds_Fishers.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/90_Percent_of_Worlds_Fishers.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-5.9924569864458, 0.021626490264146758, -30.374665255357954],
                scale: [2.182471771641725, 2.182471771641725, 2.182471771641725],
                rotation: [0, -0.01722102029031064, 0, 0.9998517072347083],
                layers: ["pointer"],
                name: "/Increasing_Acidification.png",
                cornerRadius: 0.02,
                fileName: "/Increasing_Acidification.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Increasing_Acidification.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-26.12163516941361, 0.021626490264146758, -30.482852565105922],
                scale: [2.182471771641725, 2.182471771641725, 2.182471771641725],
                rotation: [0.005202952772464066, -0.0014926022688139414, 0.000007766052880936419, 0.9999853505729989],
                layers: ["pointer"],
                name: "/Our_Ocean.png",
                cornerRadius: 0.02,
                fileName: "/Our_Ocean.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Our_Ocean.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-26.253078973860386, 0.021626490264146758, -26.070853753094987],
                scale: [2.182471771641725, 2.182471771641725, 2.182471771641725],
                rotation: [0, 0.9999999841801602, 0, 0.00017787545978121405],
                layers: ["pointer"],
                name: "/Plastic_Pollution.png",
                cornerRadius: 0.02,
                fileName: "/Plastic_Pollution.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/images/Plastic_Pollution.png",
                textureType: "image",
                type: "2d",
            
            }
        },

        {
            card: {
                translation: [-13.06900242768163, 0.7481842240183003, -26.08193135200725],
                scale: [3, 3, 3],
                rotation: [0, -0.9999888524537972, 0, 0.004721754773162181],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Earthshot_Oceans.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Earthshot_Oceans.mp4",
                textureType: "video",
                type: "2d",
            
                       
            }
        },  

        {
            card: {
                translation: [-12.955904729329125, 0.7481842240183003, -30.374665255357954],
                scale: [3, 3, 3],
                rotation: [0, -0.01722102029031064, 0, 0.9998517072347083],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "PODCAST_Seeing_the_Ocean_as_a_Solution,_Not_a_Victim.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/PODCAST_Seeing_the_Ocean_as_a_Solution,_Not_a_Victim.mp4",
                textureType: "video",
                type: "2d",
                       
            }
        },  

        {
            card: {
                translation: [-32.95892978773886, 0.7481842240183003, -30.269063801011075],
                scale: [3, 3, 3],
                rotation: [0.005202952772464066, -0.0014926022688139414, 0.000007766052880936419, 0.9999853505729989],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "World_Oceans_Day_2019_Message_from_Peter_Thomson.mp4",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: 0.03,
                playStartTime: 98.082717,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/World_Oceans_Day_2019_Message_from_Peter_Thomson.mp4",
                textureType: "video",
                type: "2d",
            
                       
            }
        },  
    ];
}
