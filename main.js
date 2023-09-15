const button = document.querySelector(".choiceButton");
const choice = document.querySelector(".showRandomChoice");
console.log("hello");
button.addEventListener("click", pickRandomChoice);

const list = [
    '3d Movies',
    'Anime',
    'Bad breath',
    'Camping',
    'Car Alarms',
    'Cats',
    'Childer throwing fist in public',
    'Christmas decorations in October',
    'Dental floss that shreds',
    'Drivers not going at a green light',
    'Elevator Music',
    'Fans at athletic events',
    'Flimsy restaurant straws',
    'Flying on a commercial airliner',
    'Frat boys bragging about drinking',
    'Girls waving at someone past you',
    'Global warming alarmist',
    'hard pillows',
    'Hard toco shells',
    'Hiccups',
    'indecisive customers ahead of you',
    'Internet passwords',
    'Morning People',
    'Mosquitoes',
    'Movie remakes',
    'Movie sequels',
    'Music from yout parents’ generation',
    'Other drivers on the road',
    'Plastic fruit conterpieces',
    'Pop-up advertisements',
    'Raisin cookies',
    'Rap music',
    ' Ringtones',
    'Romance Novels',
    'Saturday morning cartoons',
    'Saying “like”',
    'seats that share armrests',
    'Selfies',
    'Sitcomes',
    'Skinny jeans on men',
    'Spam Email',
    'Speed Bumps',
    'Super Bowl half-time shows',
    'Tattoos',
    'Talemarketers',
    'Texting',
    'Vending Machines',
    'Video games',
    'Walking into spider webs',
    'Procrastination',
    'sleeping in',
    'AI',
    'eating while driving',
    'Phone keyboards',
    'earbuds',
    'currency',
    'Rhetoric',
    'Math'
]

function pickRandomChoice () {
    const randomList = Math.floor(Math.random() * list.length);
    const computerChoice = list[randomList];
    choice.innerHTML = `${computerChoice}`
    console.log("hi");
}


// const phrases = "3d Movies, Anime, Bad breath, Camping, Car Alarms, Cats, Childer throwing fist in public, Christmas decorations in October, Dental floss that shreds, Drivers not going at a green light, Elevator Music, Fans at athletic events, Flimsy restaurant straws, Flying on a commercial airliner, Frat boys bragging about drinking, Girls waving at someone past you, Global warming alarmist, hard pillows, Hard toco shells, Hiccups, indecisive customers ahead of you, Internet passwords, Morning People, Mosquitoes, Movie remakes, Movie sequels, Music from yout parents’ generation, Other drivers on the road, Plastic fruit conterpieces, Pop-up advertisements, Raisin cookies, Rap music,  Ringtones, Romance Novels, Saturday morning cartoons, Saying “like”, seats that share armrests, Selfies, Sitcomes, Skinny jeans on men, Spam Email, Speed Bumps, Super Bowl half-time shows, Tattoos, Talemarketers, Texting, Vending Machines, Video games, Walking into spider webs, Procrastination, sleeping in, AI, eating while driving, Phone keyboards, earbuds, currency,  Rhetoric, Math";
// const phraseArray = phrases.split(", ");
// console.log(phraseArray);