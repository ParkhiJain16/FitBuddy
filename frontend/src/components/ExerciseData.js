import BSvideo from "../assets/video/BS.mp4";
import BSimage from "../assets/image/BS.png";
import RDLimage from "../assets/image/RDL.png";
import RDLvideo from "../assets/video/RDL.mp4";
import LPimage from "../assets/image/LP.png";
import LPvideo from "../assets/video/LP.mp4";
import WLimage from "../assets/image/WL.png";
import WLvideo from "../assets/video/WL.mp4";
import CLvideo from "../assets/video/CL.mp4";
import CLimage from "../assets/image/CL.png";
import BPimage from "../assets/image/BP.png";
import BPvideo from "../assets/video/BP.mp4";  
import OHPimage from "../assets/image/OHP.png";
import OHPvideo from "../assets/video/OHP.mp4";
import SPimage from "../assets/image/SP.png";
import SPvideo from "../assets/video/SP.mp4";
import IDBvideo from "../assets/video/IDB.mp4";
import IDBimage from "../assets/image/IDB.png";
import LRimage from "../assets/image/LR.png";
import LRvideo from "../assets/video/LR.mp4";
import TPDvideo from "../assets/video/TPD.mp4";
import TPDimage from "../assets/image/TPD.png";
import BRvideo from "../assets/video/BR.mp4";
import BRimage from "../assets/image/BR.png";
import BCimage from "../assets/image/BC.png";
import BCvideo from "../assets/video/BC.mp4";
import SCRimage from "../assets/image/SCR.png";
import SCRvideo from "../assets/video/SCR.mp4";
import PUimage from "../assets/image/PU.png";
import PUvideo from "../assets/video/PU.mp4";
import IBP from "../assets/image/IBP.png";
import IBPv from "../assets/video/IBP.mp4";
import CF from "../assets/image/CF.png";
import CFv from "../assets/video/CF.mp4";
import SC from "../assets/image/SC.png";
import SCv from "../assets/video/SC.mp4";
import LPD from "../assets/image/LPD.png";
import LPDv from "../assets/video/LPD.mp4";
import HC from "../assets/image/HC.png";
import HCv from "../assets/video/HC.mp4";
// import BSS from "../assets/image/BSS.png";
// import BSSv from "../assets/video/BSS.mp4";
import LEimage from "../assets/image/LE.png";
import LEvideo from "../assets/video/LE.mp4";

import React from 'react'

export const ExerciseData={
    benchPress: {
        title: "Flat Dumbbell Bench Press",
        video: BPvideo,
        thumbnail: BPimage,
        description: "Dumbbell Bench Press is a variation on the standard Bench Press. Like Bench Press, this compound exercise primarily targets the chest, while also training the triceps and shoulders. The use of dumbbells allows for greater instability which can help you become more stable on pushing movements in general, while also isolating each side of the body to prevent you from compensating for any weaknesses between sides.",
        instructions:[
            'Lie your back onto a bench while squeezing your shoulder blades together and place your heels firmly on the ground underneath your knees.',
            'The bench should be in contact with your head, shoulders, and butt at all times.',
            'Position the dumbbells so that they are just outside shoulder-width apart.',
            'Keeping your core braced by breathing into your stomach and flexing the abdominal muscles, descend the barbell to your chest by flexing your elbows keeping them at a 45 degree angle from your torso.',
            'Once your arms are fully extended over the shoulders, exhale to return the dumbbells back to the starting position.',
        ],
        equipment:[
            {name:"Dumbbells", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s"},
            {name: "Flat Bench",image:"data:image/png;base64,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"},
        ],
        primaryMuscles: ['Chest'],
        secondaryMuscles: ['Triceps', 'Shoulders'],
        bodymapPrimary: ['chest'],
        bodymapSecondary: ['triceps', 'shoulders'],
        mistakes: [
            {
                title: 'Flared Elbows',
                description: 'Flaring your elbows out can sometimes help you lift heavier weights, but it places more tension on your shoulders. The ideal position can vary slightly from person to person, but try to keep your elbows around 45 degrees from your torso, and make small adjustments from there.',
            },
            {
                title: 'Heavy Dumbbells',
                description: "Dumbbells are less stable than a barbell. This added instability means you won't be able to move the same weight you would with a barbell. Keep your weights on the lighter side, and focus on stability and control."
            },
            // {
            //     title: 'Bouncing the Bar',
            //     description: 'Bouncing the bar off your chest can help you lift heavier weights, but it increases your risk of injury, and makes the exercise less effective. Focus on slowly lowering the bar, and gently tapping your chest at the bottom of the movement.'
            // },
        ],
    },
    overHeadPress:{
        title: "Tricep OverHead Extention with Rope",
        video: OHPvideo,
        thumbnail: OHPimage,
        description: 'Similar to other tricep extensions, this is an isolation exercise that targets the triceps. The use of a cable machine gives you more control over where the resistance is coming from, and allows for more consistent tension in your triceps than other equipment like free weights or machines. By performing the movement overhead, you ensure that you’re taking your triceps through their full range of motion by getting a good stretch as you return towards the starting position.',
        instructions:[
            'Attach a cable rope and place the pulley to shoulder height.',
            'Grasp the cable rope with neutral grip (palms facing each other), and turn around, facing away from the pulley. Extend your hands directly behind your head.',
            'Bend your torso forward keeping your back straight and chest up. Position your right foot one step forward.',
            'Extend your elbows forward until your arms are straight.',
            'Once you have reached full arm extension, flex your elbows back to the starting position.',
        ],
        equipment:[
            {name: "Rope Cable", image: "data:image/jpeg;base64,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" },
        ],

        primaryMuscles: ['Triceps'],
        secondaryMuscles: ['None'],
        bodymapPrimary: ['triceps'],
        bodymapSecondary: [''],
        mistakes:[
            {
                title: 'Limit Range of Motion at the Top',
                description: 'Make sure you’re keeping tension on your triceps at the top of the movement. Many lifters will lock out their arms with the weight directly over their elbow. This gives your triceps time to rest between reps. Limit your range of motion so there’s always tension on your triceps.'
            },
            {
                title: 'Elbow Drift',
                description: 'Keep your elbows as stationary as possible throughout this exercise. This will help you maintain tension in your triceps. Think of the weight arcing around your elbow, rather than simply pressing the weight overhead.'
            },
        ],
    },
    inclineBench:{
        title: "Incline Dumbbell BenchPress",
        video: BPvideo,
        thumbnail: BPimage,
        description: 'Dumbbell Incline Bench Press is a variation on the more standard Barbell Incline Bench Press. This compound exercise primarily targets the chest, but the incline also places more emphasis on the shoulders. The use of dumbbells makes this exercise more unstable than its barbell counterpart, while also forcing you to address any strength discrepancies between sides.',
        instructions:[
            'Lie your back onto a bench while squeezing your shoulder blades together and placing your heels firmly on the ground underneath your knees.',
            'The bench should be at 45-60 degrees and in contact with your head, shoulders, and butt at all times..',
            'Position the dumbbells so that they are just outside shoulder-width apart.',
            'Keeping your core braced by breathing into your stomach and flexing the abdominal muscles, extend your elbows while keeping them at a 45 degree angle from your torso.',
            'Once your arms are fully extended over the shoulders, exhale to return the dumbbells back to the starting position.',
        ],
        equipment:[
            {name: "Dumbbells", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s" },
            {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Chest'],
        secondaryMuscles: ['Triceps','Shoulders'],
        bodymapPrimary: ['chest'],
        bodymapSecondary: ['triceps','shoulders'],
        mistakes:[
            {
                title: 'Flared Elbows',
                description: 'Flaring your elbows out can sometimes help you lift heavier weights, but it places more tension on your shoulders. The ideal position can vary slightly from person to person, but try to keep your elbows around 45 degrees from your torso, and make small adjustments from there.'
            },
            {
                title: 'Heavy Dumbbells',
                description: "Dumbbells are less stable than a barbell. This added instability means you won't be able to move the same weight you would with a barbell. Keep your weights on the lighter side, and focus on stability and control"
            },
        ],
    },
    lateralRaises:{
        title: "Dumbbell Lateral Raises",
        video: LRvideo,
        thumbnail: LRimage,
        description: 'Dumbbell Lateral Raise is a classic isolation exercise and one of the most effective movements for building shoulder width. Similar to the cable variation, it primarily targets the shoulders—specifically the medial deltoid (middle head of the shoulder). Using dumbbells allows for a more natural range of motion, but unlike cables, the resistance is not constant, making the top portion of the movement more challenging. Additionally, because each arm works independently, dumbbell lateral raises help improve coordination and reveal strength imbalances between sides, while also requiring greater control and stability throughout the movement.',
        instructions:[
            'Stand upright, feet shoulder-width',
            'Hold dumbbells at your sides, palms facing inward',
            'Slight bend in elbows (don’t lock them)',
            'Raise arms out to the side until shoulder height',
            'Keep movement controlled (no swinging)',
            'Lower Slowly.',
        ],
        equipment:[
            {name: "Dumbbells", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Shoulders'],
        secondaryMuscles: ['None'],
        bodymapPrimary: ['shoulders'],
        bodymapSecondary: [''],
        mistakes:[
            {
                title: 'Using Momentum (Swinging)',
                description: 'Swinging your body to lift the dumbbells turns this into a full-body movement instead of isolating the shoulders. If you need momentum, the weight is too heavy. Keep your torso still and control every rep.'
            },
            {
                title: 'Heavy Dumbbells',
                description: "Going heavy shifts the work away from the medial deltoid to your traps and front delts. This exercise is about control, not ego. Use lighter weights and focus on clean form."
            },
            {
                title: 'Locked or Overly Bent Elbows',
                description: 'Fully locking your elbows puts unnecessary stress on joints, while bending too much turns it into a different movement. Maintain a slight, consistent bend throughout.'
            },
            {
                title: 'Leading with Hands Instead of Elbows',
                description: "If your hands are higher than your elbows, you're not properly engaging the medial deltoid. Think about driving your elbows up, not your hands."
            }
        ],
    },
    tricepPushDown:{
        title: "Cable Rope Tricep PushDown",
        video: TPDvideo,
        thumbnail: TPDimage,
        description: 'This is an isolation triceps exercise. The use of cables gives you more control over where the resistance is coming from, allowing you to keep more tension in your triceps compared to equipment like dumbbells. Because you can easily adjust the weight on a cable machine this is also a great exercise for performing drop sets, and burning out your triceps.',
        instructions:[
            'Place pulley to the highest position with a rope attachment.',
            'Grab ahold of the rope with a neutral grip, palms facing in, and pull your elbows to your sides and flexed to 90 degrees so your forearms are parallel with the floor.',
            'Brace your core to keep your spine neutral with your shoulders back.',
            'Extend your elbows while keeping them at your sides to completely extend your arms.',
            'Once you have reached full arm extension, flex your elbows back to the starting position.',
        ],
        equipment:[
            {name: "Rope Cable", image: "data:image/jpeg;base64,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" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Triceps'],
        secondaryMuscles: ['None'],
        bodymapPrimary: ['triceps'],
        bodymapSecondary: [''],
        mistakes:[
            {
                title: 'Limit Range of Motion at the Top',
                description: 'There should always be tension on your triceps. It’s very common to lose tension at the top of the movement when your arm is fully flexed. Limit your range of motion so your triceps stay engaged for the entire exercise without resting at the top.'
            }
        ],
    },
    barbelRow:{
        title: "Bent Over Barbell Row",
        video: BRvideo,
        thumbnail: BRimage,
        description: 'Bent Over Barbell row is a compound movement that primarily targets your back, but also hits your shoulders, traps, and biceps. The use of a barbell adds more stability to this movement compared to something like dumbbells which can help you focus on exerting strength rather than stabilizing the movement. It’s a great exercise for building strength, and can be a way to start learning more advanced exercises like Olympic Lifts.',
        instructions:[
            'Stand upright with your feet shoulder-width apart and slightly angled out with a loaded barbell on the ground next to your shins.',
            'Brace your core by breathing into your stomach and flexing your abdomen before hinging the hips backward and flexing your knees to allow your extended arms to reach the barbell.',
            'Grab ahold the barbell with your palms facing towards your body and then extend your hips until the barbell reaches knee height.',
            'Maintain this position as you flex your elbows past your sides at 45 degrees to your torso and touch the barbell just above the belly button.',
            'Lower the barbell back to knee height and repeat the allotted repetitions.',
        ],
        equipment:[
            {name: "Barbell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeAgwFywFUxIw2eMyXeNnsw1CBZFvU9b-CA&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Back'],
        secondaryMuscles: ['Shoulders','Biceps'],
        bodymapPrimary: ['lats','upper-back'],
        bodymapSecondary: ['shoulders','biceps'],
        mistakes:[
            {
                title: 'Don’t Use Momentum',
                description: 'Extending your lower back can help you move more weight by recruiting additional muscle groups to help you build momentum. Keep your torso stable by engaging your core, and limit your movement to the desired exercise. You may need to reduce your weight to maintain proper form.'
            },
            {
                title: 'Back Flat',
                description: 'Keeping your back flat is essential to maintaining proper form with this exercise. It’s very common to see your back start to round as you become fatigued. Focus on keeping your core engaged, and shoulders back.'
            }
        ],
    },
    pullUps:{
        title: "Pull Up",
        video: PUvideo,
        thumbnail: PUimage,
        description: 'Pull Ups are compound, bodyweight exercise that primarily target the back, but also hits the shoulders and biceps. While this exercise does have a decently high barrier to entry, it can be easily adapted to match your current conditioning with weighted or assisted variations. This is an excellent exercise for building functional strength and body control.',
        instructions:[
            'Place your hands on the pull up bar with your palms facing away from your body.',
            'Brace your torso by breathing into your stomach and keeping your abdominal muscles flexed.',
            'Pull your chest up to the bar by flexing your elbows down into the backside of your ribcage.',
            'Once you have reached your chest to the bar, you will lower yourself back to the starting position.',
        ],
        equipment:[
            {name: "Pull-Up Bar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc48cglgjCVsRX4C8wsSkPwYALcUTLdc5xDA&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Back'],
        secondaryMuscles: ['Biceps'],
        bodymapPrimary: ['lats','upper-back'],
        bodymapSecondary: ['biceps'],
        mistakes:[
            {
                title: "Using Momentum (Kipping)",
                description: "Swinging your body or using hips to get up is a common error; pull-ups should be controlled movements."
            },
            {
                title: "Incomplete Range of Motion",
                description: "Not extending arms fully at the bottom or not pulling high enough (chin over bar) reduces the exercise's effectiveness."
            },
            {
                title: "Improper Elbow Position",
                description: "Allowing elbows to flare out too much, which can stress the shoulder joints."
            }
        ],
    },
    SCR:{
        title: "Seated Cable Row",
        video: SCRvideo,
        thumbnail: SCRimage,
        description: 'Cable Row is a compound movement that primarily targets your back, but also hits your shoulders and biceps. This exercise is often done with a specific cable machine that sets you into the perfect position, but you can also use an adjustable cable to have more control over the direction your resistance is coming from. This is a great exercise for building muscle mass and strength in your back, and is a common addition to most upper body or pull workouts.',
        instructions:[
            'Position yourself on the bench, and place both feet on their respective foot plates. Bend your knees slightly.',
            'Lean forward, and grasp the handle with both hands, while keeping your back straight.',
            'Engage your back to pull the handles towards your torso.',
            'Simultaneously engage your lower back to lean back slightly.',
            'Pinch your shoulder blades together, and hold this position for a moment at the end of the movement.',
            'Slowly return to the starting position while maintaining tension in your back.',
        ],
        equipment:[
            {name: "Row Cable", image: "data:image/jpeg;base64,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" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Back'],
        secondaryMuscles: ['Biceps'],
        bodymapPrimary: ['lats','upper-back'],
        bodymapSecondary: ['biceps'],
        mistakes:[
            {
                title: "Over Recruiting Biceps",
                description: "While your biceps should be involved, you should be feeling a majority of the tension in your back. Try focusing on driving your elbow back instead of bringing the weight towards your chest. This mindset shift will help you recruit the proper muscle groups for this exercise."
            },
            {
                title: "Don’t Use Momentum",
                description: "Extending your lower back can help you move more weight by recruiting additional muscle groups to help you build momentum. Keep your torso stable by engaging your core, and limit your movement to the desired exercise. You may need to reduce your weight to maintain proper form."
            },
        ],  
    },
    barbell:{
        title: "Barbell Curl",
        video: BCvideo,
        thumbnail: BCimage,
        description: 'As with other curls, this isolation exercise targets the biceps. The use of a barbell adds more stability to this movement, and somewhat restricts your range of motion. This added stability means you can focus more on exertion than stabilizing the movement. This is a great variation for helping you build strength in your biceps.',
        instructions:[
            'Stand in an upright posture grabbing ahold of a barbell shoulder-width apart with your palms facing away from your body just below waist height.',
            'Brace your core by breathing into your stomach and flexing your abdominal muscles as you begin to flex your elbows to raise the bar.',
            'Keep your elbows at your sides as you flex the barbell to shoulder height avoiding movement through your spine.',
            'Exhale and lower the barbell back to the starting position.',
        ],
        equipment:[
            {name: "Barbell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeAgwFywFUxIw2eMyXeNnsw1CBZFvU9b-CA&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        bodymapPrimary: ['biceps'],
        bodymapSecondary: ['forearms'],
        mistakes:[
            {
                title: "Swinging the Dumbbells",
                description: "Using momentum, or recruiting additional muscle groups can help you lift heavier weights with this exercise. However it also reduces the effectiveness, and increases the risk of injury. Keep your weights on the lighter side, and focus on controlling the weight. If you’re struggling, consider using a seated variation. This can help you prevent swinging the dumbbells or adding additional movements to this exercise."
            },
            {
                title: "Limit Range of Motion",
                description: "There should always be tension on your biceps. It’s very common to lose tension in your biceps at the top or bottom of the exercise. Try to limit your range of motion so that your biceps are always engaged."
            },
        ],
    },
    backSquats:{
        title: "Back Squats",
        video: BSvideo,
        thumbnail: BSimage,
        description: 'Back Squat is one of the three Powerlifting movements, and one of the most common lower body exercises. It’s a great compound exercise that can help build strength and muscle mass in your leg, especially your quadriceps. It’s a staple in most fitness programs, and is often used as a metric for tracking lower body strength in general.',
        instructions:[
            'Set the barbell just below shoulder height and grab ahold the barbell outside shoulder-width.',
            'Squeeze your shoulder blades together and brace your core by breathing into your stomach and flexing your abdominal muscles.',
            'Quarter squat underneath the barbell to place it on the base of your neck before lifting and stepping back and planting your feet shoulder-width apart.',
            'Keeping your heels planted firmly on the ground, descend by hinging at your hips while keeping your chest up.',
            'Your knees should track outward and slightly forward as you descend and keep your spine neutral throughout the exercise.',
            'Once your thighs have reached parallel with the floor, return back to the starting position.'
        ],
        equipment:[
            {name: "Barbell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeAgwFywFUxIw2eMyXeNnsw1CBZFvU9b-CA&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
            {name: "Squats Rack", image: "data:image/jpeg;base64,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"}
        ],

        primaryMuscles: ['Quads'],
        secondaryMuscles: ['Abs','Lower Back','Hamstrings','Glutes','Calves'],
        bodymapPrimary: ['quads'],
        bodymapSecondary: ['abs','lower-back','hamstrings','glutes','calves'],
        mistakes:[
            {
                title: "Weak Hip Hinge",
                description: "The hip hinge is a crucial part of the squat. Make sure you’re dropping your hips back first, and then bending your knees to drop into your squat. The same is true on the way up. Make sure you’re driving your hips forward, not just extending your legs."
            },
            {
                title: "Knees Caving In",
                description: "Always make sure that your knees are tracking over your toes. Allowing your knees to cave inward places a ton of stress on them, and increases your risk of injury. If you're struggling with your knees caving in, focus on keeping your weight evenly distributed throughout your foot."
            },
        ],
    },
    rdl:{
        title: "Romanian DeadLift",
        video: RDLvideo,
        thumbnail: RDLimage,
        description: 'Romanian Deadlift is a variation on the more standard Deadlift. It’s a compound exercise that primarily targets your glutes, and hamstrings. Unlike the standard Deadlift, this variation focuses mostly on driving your hips forward to raise the weight, and restricts movement in your knees. This is a great exercise for building strength, and can translate well to other exercises that utilize a hip hinge.',
        instructions:[
            'Place a loaded barbell an inch away from your shins and brace your core to maintain a neutral spine throughout the exercise.',
            'Hinge your hips backward until you are able to grip the barbell.',
            'Push through the heels as you extend your hips until your torso is upright and the barbell is resting on your thigh.',
            'Keep your knees only slightly bent as you extend your hips backward to descend the barbell to the ground.',
            'Once you have reached a depth where you are no longer able to keep a neutral spine, return to the starting upright position.',
        ],
        equipment:[
            {name: "Barbell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeAgwFywFUxIw2eMyXeNnsw1CBZFvU9b-CA&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Hamstings'],
        secondaryMuscles: ['Lower Back','Glutes','Calves'],
        bodymapPrimary: ['hamstrings'],
        bodymapSecondary: ['lower-back','glutes','calves'],
        mistakes:[
            {
                title: "Going too Low",
                description: "While your knees are going to bend a bit as you drop your hips back, limit your range of motion to as low as your hip hinge allows. Hamstring flexibility is the deciding factor in how low you should go."
            },
            {
                title: "Rounding Your Back",
                description: "Rounding your back will allow you to reach closer to the floor, but also increases your risk of injury, and reduces the effectiveness of this exercise. Focus on keeping your shoulders back, and your lower back braced to support your spine. Hamstring flexibility is the deciding factor in how low you can go."
            },
        ],
    },
    legpress:{
        title: "Leg Press",
        video: LPvideo,
        thumbnail: LPimage,
        description: 'Leg Press is a compound exercise that primarily targets the quadriceps. The exercise itself is fairly similar to a standard squat, with some key differences. The biggest of these differences is the added stability from supporting your back on the Leg Press Machine. The end result of these changes is a more stable movement that further emphasizes your quadriceps. Leg Press is an excellent exercise for anyone looking to build muscle mass or strength in their quads.',
        instructions:[
            'Sit on a leg press machine positioning your shoulders and hips against the backpad while placing your feet shoulder-width apart slightly angled out on the platform.',
            'Evenly distribute the weight through your feet as you raise the platform and remove the safety bars.',
            'Grab ahold of the brace bars and brace your core to keep your lower back and shoulders touching the backpad.',
            'Lower the platform while tracking your knees out over the second toe keeping your heels on the platform.',
            'Descend the platform until you are no longer able to keep your lower back against the backpad and return to the starting position.',
        ],
        equipment:[
            {name: "Leg Press Machine", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHEhUTERIVFRUWGBcSFRgWFxYXGBkbHhcXHRkXHRkYHSkgIR8lGxgYIzEiJSorLi4uGCAzODUtNygtLisBCgoKDg0OGRAQGS0mHyUrMjMrNystKy0tLTAxLjcrLSsvKy01LTUrLS0rNzgtNy0tNS0tKysrKzgrLS0tKy0uLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xABDEAABAwIDBQUEBwUHBQEAAAABAAIDBBEFEiEGBzFBURMiYXGBFDKRoSNCUnKiscEVM2KC8ENjkqOyw+EWU8LR0gj/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABwRAQEBAAIDAQAAAAAAAAAAAAABEQISAzFhBP/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHH2irZ6FuaGN8lhfLGwPe43Gnec0DS5uTyUbO3ktN++o6pn3qSe3+KMvCniIICzetRA5ZHNYejzJGfhLG1auNb2oKTIaaNlQ0n6TLOwOYL8Q1odceZGunNWLLE2YWc0OHQgH81F8e3eYfjjg6SHI4aXhJiza37wbofMi6Dm029vDpbZjNHz70d7eH0Zcldvbw6mIEZmmvx7OMgDz7Us+V1xtst0tJDSySUTJGzRjtGtMj3h4Grm2eTqW3t4gKAbGbIM2q7VntfYSsAkYHNDo3R8HH3gczXW1vazhp0C7dm9vaLaJ/ZxPcyQ8GStyOd903LSfAG6lC8/7abKwbNNidT1rJXizZG52CQO4iRrWm4F/MjTU62muwGLybTRFntGWaMWe05u83gHix1HI24HzCCy0USqtmq2R5fFibor/UEWeMeADnrnzVWI4NU00MlXFUmZ9uzbCGSZADmebaBo0ub36XKCeoiICIiAiIgIiICIiAiIgIiICIiAiIgKo98GMvpaqKNj3tyxZzlcW+89w5fcHxVuLz3vWq/acUnHKMRxD0ja4/NxQTrdhi1W2zKnM+CYB8Mp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tbD9zlTJGXzzMa8C7Ym98u/hMhs1pPC4DgLrUrt1FcwucyON7bnKwSjtAOWa4Db26FFk24ieB7KVk8baiCjdLGb5HNGe5BINg03FiCNR5K892kGIRRyuxAvs4s7Fsjg54AzZidSRe7dCb6cAq5qthzg5c+nq6qlcLXztliBPAfSss0j1K2G4tjmBM7QVkdRFpq/I8amw1sHnXTis947383kk2TZ8XksFdCKiN7HAEOaQQRcHToVVNBvYqobCpomP6uhc5vrlOf8ANd2He1RSMcXMmY8AkMc0HMbaNBaSBfhd1lp53xgFMKWuhcxjWNLHNcGgN1y6aN06qw1RdXt22gZJIbRVEVxHG7v5ngGwsOV7XPDXirvpZDKxrjxLQTbqQiSZrKiIiiIiAiIgIiICIiAiIgIiICIiAiIgLDVUsdY3LKxr29HtDh8CsyIIpiO7ygrbkRGInnE4t/Cbt+S5uC7qaPDp/aJHSTva5r4w8hrGlti02YBmIIB1NvBT1EBERAXMr9nqXEL9rTxuJ4nKA7/E2x+a6aIstnpC6/dvTTXMT5IjyF87fxa/NVhPsvicruyNC9ziDcjIGNsP+452U/EHwXoNEZea4t32I1cgZ7G9pNgHPLWsHG5LgTpw4X8Lr0PgdEcNpoISQTFFHESOBLWBpI+C3URRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Quads'],
        secondaryMuscles: ['Hamstrings','Glutes','Calves'],
        bodymapPrimary: ['quads'],
        bodymapSecondary: ['hamstrings','glutes','calves'],
        mistakes:[
            {
                title: "Knees Caving In",
                description: "Always make sure that your knees are tracking over your toes. Allowing your knees to cave inward places a ton of stress on them, and increases your risk of injury. If you're struggling with your knees caving in, focus on keeping your weight evenly distributed throughout your foot."
            },
            {
                title: "Locking out Knees",
                description: "Don’t lock out your knees at the end of the movement. This can place a lot of tension on your knees, and increases the risk of injury. Keep a slight bend in your knee even at full extension."
            },
        ],
    },
    wl:{
        title: "Walking Dumbbell Lunges",
        video: WLvideo,
        thumbnail: WLimage,
        description: 'Dumbbell Lunge is a variation on the more standard Lunge. Similar to other Lunge variations, Dumbbell Lunge is a compound exercise that primarily targets the quads. The exercise itself is the same as a standard lunge except for the added weight from holding dumbbells in each hand. This is a great variation for anyone looking to make their lunges a bit more challenging without adding more complexity to the movement.',
        instructions:[
            'Stand in an upright posture with your feet hip-width apart resting your arms by your sides holding a pair of dumbbells with your palms facing in.',
            'Shift your weight to your stance leg as the other leg begins to step forward.',
            'Initiate contact, heel first with the stepping leg until the foot is firmly planted and the back heel is lifted off the floor.',
            'While maintaining an upright torso, descend your back knee towards the ground keeping your front heel on the ground.',
            'Raise your back knee once the front thigh has become parallel with the floor and push off your front forefoot to return to the starting position.',
        ],
        equipment:[
            {name: "Dumbbell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s" },
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Quads'],
        secondaryMuscles: ['Hamstrings','Glutes','Calves'],
        bodymapPrimary: ['quads'],
        bodymapSecondary: ['hamstrings','glutes','calves'],
        mistakes:[
            {
                title: "Not Deep Enough",
                description: "Make sure you’re dropping your knee to the ground. Limiting your range of motion will make this exercise less effective. You don’t need to slam your knee down. Aim for a controlled tap, or 1-2 inches off the ground."
            },
            {
                title: "Improper Distance",
                description: "The exact distance for an ideal lunge varies for everyone, but it’s incredibly important. A small step can lead to more tension on your knee, as well as a narrow base of support. A long step can also lead to instability. Both will increase your risk of injury, and make the exercise less effective. If you’re struggling with lunge distance, start with a position where you feel stable, and experiment with small adjustments until you find the distance you’re comfortable with."
            },
            {
                title: "Knees Not Inline with Toes",
                description: "If your knees aren’t inline with your toes, this can place tension on your knee. This can increase your risk of injury. Make sure that as you drop into your lunge, your knees and toes are inline."
            }
        ], 
    },
    cr:{
        title: "Calf Raises",
        video: CLvideo,
        thumbnail: CLimage,
        description: 'This bodyweight isolation exercise primarily targets the calves. It’s an effective exercise for developing muscle mass and increasing strength in your calf, and can be easily modified through a number of different variations.',
        instructions:[
            'Stand upright with your feet hip width apart.',
            'Raise your heels off the ground by flexing your calves as far as your range of motion will allow.',
            'Controllably return to the starting position.',
        ],
        equipment:[
            {name: "Body-weight",image: "data:image/jpeg;base64,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"},
            // {name: "Incline Bench", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFCvanCqwruzQWKVvJ1mQ35bZvSq0-G4ZXg&s"}
        ],

        primaryMuscles: ['Calves'],
        secondaryMuscles: ['None'],
        bodymapPrimary: ['calves'],
        bodymapSecondary: [''],
        mistakes:[
            {
                title: "Bouncing Instead of Controlling",
                description: "Using momentum instead of controlled movement reduces muscle activation. Perform the movement slowly, especially the lowering phase, to fully engage the calves."
            },
            {
                title: "Not Using Full Range of Motion",
                description: "Many people don’t drop their heels low enough or don’t rise up fully onto their toes. This limits calf development. Lower your heels below step level (if possible) and rise as high as you can."
            },
            {
                title: "Leaning Too Much Forward or Back",
                description: "Shifting your body weight forward or backward reduces effectiveness. Keep your body upright and balanced so the calves do the work instead of other muscles."
            }
        ],
    },
    shoulderpress:{
        title: "Dumbbell Shoulder Press",
        video: SPvideo,
        thumbnail: SPimage,
        description: 'Dumbbell Shoulder Press is a compound exercise that primarily targets the shoulders. The use of dumbbells allows for slightly more instability than with equipment like barbells. This can help you recruit and develop stabilizing muscles around the shoulders. In addition, by using dumbbells, you can help identify and address any strength imbalances between sides.',
        instructions:[
            'Sit on a bench with your back straight holding a pair of dumbbells just outside shoulder-width apart, palms facing forward, and elbows flexed to your sides.',
            'Begin to extend your arms overhead by pressing through your palms while keeping your wrist and forearms vertical to the ground.',
            'The dumbbells should be in align with your ears at full arm extension before descending them back to the starting position.',
        ],
        equipment:[
            {name:"Dumbbells", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s"},
            {name: "Flat Bench",image:"data:image/png;base64,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"},
        ],

        primaryMuscles: ['Shoulders'],
        secondaryMuscles: ['Triceps'],
        bodymapPrimary: ['shoulders'],
        bodymapSecondary: ['triceps'],
        mistakes:[
            {
                title: "Leaning Back",
                description: "Leaning back can help you lift a bit more weight, or finish off a difficult set. However, it also reduces the effectiveness of the exercise, and increases the risk of injury. Keep your back straight, core engaged, and gaze forward to help prevent this."
            },
            {
                title: "Always Sitting",
                description: "Performing this exercise while seated adds stability to the movement. You don’t need to focus on keeping your balance, or stabilizing your body. This allows you to focus more on exertion, which is great, but make sure you’re including some standing variations as well. This will help highlight and address some instability you may have with this movement."
            },
        ],
    },
    cablecrossover:{
        title: "Cable Crossover Fly",
        video: CFv,
        thumbnail: CF,
        description: 'Cable Crossover Fly is an isolation exercise that targets the chest. It’s a variation on the more standard Dumbbell Fly, and can easily be adapted to further isolate specific areas of the chest. Using cables to add resistance allows you to keep more consistent tension on your chest, as well as control the angle that the resistance is coming from.',
        instructions:[
            'Place the pulleys to just above head height.',
            'Stand in an upright staggered stance while holding the pair of dual pulley handles with arms laterally extended at shoulder height and palms facing forward, slightly angled down.',
            'Brace your core to keep your spine in a stationary neutral position.',
            'Keep your arms extended and create a wide arc to flex the handles together at the bottom of your ribcage.',
            'Return back to the starting position.',
        ],
        equipment:[
            {name:"Cable CrossOver", image:"data:image/jpeg;base64,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"},
        ],

        primaryMuscles: ['Chest'],
        secondaryMuscles: ['Shoulders'],
        bodymapPrimary: ['chest'],
        bodymapSecondary: ['shoulders'],
        mistakes:[
            {
                title: "High Resistance",
                description: "Extending your arms away from your body increases the tension placed on your joint’s and muscles. Keep the resistance for this exercise fairly light, and focus on moving slowly, and controlling the movement before you add more resistance."
            },
        ],
    },
    skullcrusher:{
        title: "Skull Crusher",
        video: SCv,
        thumbnail: SC,
        description: 'Skullcrushers are an isolation exercise that targets the triceps. By laying back on a bench, you prevent yourself from swaying or leaning into the movement in order to help you move the weight. An EZ-Bar helps you find a comfortable grip, while still adding stability to the movement similar to a barbell variation.',
        instructions:[
            'Lie your back onto a bench while squeezing your shoulder blades together and placing your heels firmly on the ground underneath your knees.',
            'The bench should be in contact with your head, shoulders, and butt at all times.',
            'Unrack the barbell with a shoulder-width grip and position it overtop of your shoulders.',
            'Keep your upper arms vertical with the ground and stationary as you flex your elbows to lower the barbell to just above your forehead.',
            'Exhale to extend your arms and return the barbell to the starting position.',
        ],
        equipment:[
            {name: "Flat Bench",image:"data:image/png;base64,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"},
            {name: "EZ-Bar", image: "data:image/jpeg;base64,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"}
        ],

        primaryMuscles: ['Triceps'],
        secondaryMuscles: ['Forearms'],
        bodymapPrimary: ['triceps'],
        bodymapSecondary: ['forearms'],
        mistakes:[
            {
                title: "Limit Range of Motion at the Top",
                description: "Make sure you’re keeping tension on your triceps at the top of the movement. Many lifters will lock out their arms with the weight directly over their elbow. This gives your triceps time to rest between reps. Limit your range of motion so there’s always tension on your triceps."
            },
            {
                title: "Elbow Drift",
                description: "Don’t allow your elbows to move much during this exercise. A little movement is fine, but you want the weight to pivot around your elbow as much as possible. Try shifting your mindset from lowering the weight directly onto your forehead, to arcing around towards the top of your head."
            }
        ],
    },
    legextention:{
        title: "Leg Extention",
        video: LEvideo,
        thumbnail: LEimage,
        description: "Leg Extensions are an isolation exercise that target the quads. Due to a severe lack of isolation movements for the lower body, this is a great option for specifically targeting your quadriceps. The use of a machine restricts your range of motion, and adds some stability to the movement. This can help your focus more on exertion than stabilizing the movement. The downside to this exercise is that it places a lot of tension on your knee. Keep your weights light, and focus on pausing near the end of your range of motion.",
        instructions:[
            'Sit upright in a leg extension machine while placing the lower back just above your ankles in front of your lower legs.',
            'Your knees should be flexed to 90 degrees and the back pad should be contact with your lower back and shoulders.',
            'Grab ahold of the handles for additional support.',
            'Extend your legs in an upward arc until your lower legs are aligned with your thighs.',
            'Return to the starting position.',
        ],
        equipment:[
            {name: "Leg Extention Machine", image: "data:image/jpeg;base64,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"},
        ],

        primaryMuscles: ['Quads'],
        secondaryMuscles: ['None'],
        bodymapPrimary: ['quads'],
        bodymapSecondary: [''],
        mistakes:[
            {
                title: "Too Much Weight",
                description: "This exercise inherently places a lot of tension on your knee. Adding too much further increases your risk of injury. You can do this exercise safely by focusing on controlling the movement, and limiting your range of motion prior to fully extending your leg."
            }
        ],
    },
    latpulldown:{
        title: "Lat PullDown",
        video: LPDv,
        thumbnail: LPD,
        description: "This compound exercise primarily targets the back, but also hits the shoulders and biceps. The movement itself is based on a Pull Up, however, by locking your legs into place, you can add significantly more stability to the movement making it easier to complete a rep, as well as getting control over the resistance. This exercise can be easily adapted to meet your needs with different handles.",
        instructions:[
            'Attach a bar to the pull-down pulley and grip it shoulder-width apart with your palms facing forward.',
            'Sit upright on the seat positioning your knees underneath the adjustable pad.',
            'Brace your core to maintain a neutral spine.',
            'With your arms extended overhead, flex your elbows to your the backside of your ribcage leaning back slightly.',
            'Extend your arms back to the starting position.',
        ],
        equipment:[
            {name: "Lat PullDown Cable Machine", image: "data:image/jpeg;base64,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"},
        ],

        primaryMuscles: ['Back'],
        secondaryMuscles: ['Shoulders','Biceps'],
        bodymapPrimary: ['rhomboids'],
        bodymapSecondary: ['shoulders','biceps'],
        mistakes:[
            {
                title: "Bringing the Bar too Low",
                description: "It’s important to move through your full range of motion, however it’s very common to see people brining the bar far too low. Aim to pull the bar down between your chin and the top of your chest."
            },
            {
                title: "Under Recruiting Back",
                description: "Many back exercises will also recruit your shoulders and biceps, however it’s very common to see lifters over recruit these smaller muscle groups. Try shifting your mindset from bringing the bar to your chest or vice versa, and instead think of brining your elbows to your side. This mindset shift will help you better recruit your back with these movements."
            }
        ],
    },
    hammercurl:{
        title: "Hammer Curl",
        video: HCv,
        thumbnail: HC,
        description: "Similar to other curls, this isolation exercise targets the biceps. Unlike the standard Dumbbell Bicep Curl, this variation rotates your wrist into a more natural position. This rotation also help to emphasize the long head of the bicep. This is a great exercise for adding some variety to your curls as well as developing functional strength and building muscle mass.",
        instructions:[
            'Stand in an upright posture with your feet at shoulder-width apart.',
            'Position a pair of dumbbells next to your hips with your palms facing in.',
            'Brace your core by breathing into your stomach and flexing your abdominal muscles.',
            'Keep your elbow at your side as you flex one dumbbell up to shoulder height keeping your palm facing in.',
            'Once the dumbbell has reached shoulder height, lower back to the starting position.',
            'Alternate the movement between each arm.',
        ],
        equipment:[
            {name:"Dumbbells", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ0yXf34NUIrRIuII44aBfVK5cCQXB4gz1A&s"},
        ],

        primaryMuscles: ['Biceps'],
        secondaryMuscles: ['Forearms'],
        bodymapPrimary: ['Biceps'],
        bodymapSecondary: ['forearms'],
        mistakes:[
           {
            title: "Swinging the Dumbbells",
            description: "Using momentum, or recruiting additional muscle groups can help you lift heavier weights with this exercise. However it also reduces the effectiveness, and increases the risk of injury. Keep your weights on the lighter side, and focus on controlling the weight. If you’re struggling, consider using a seated variation. This can help you prevent swinging the dumbbells or adding additional movements to this exercise."
           },
           {
            title: "Limit Range of Motion",
            description: "There should always be tension on your biceps. It’s very common to lose tension in your biceps at the top or bottom of the exercise. Try to limit your range of motion so that your biceps are always engaged."
           }
        ],
    }
}
