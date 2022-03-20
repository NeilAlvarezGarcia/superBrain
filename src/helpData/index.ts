export type asset = {
    title: string,
    parragraph: string,
    link?: string
}

export const mathInstructions: asset[] = [
    {title: 'Step 1', parragraph: 'The rules of this game are simple. Given a number of X digits, you´ll have to memorize the number and solve some math operations with each digit of the number.'},
    {title: 'Step 2', parragraph: 'The number will be shown 20 seg, then we´ll hide the number; 20 seg more will be given to try and solve the operation math shown with each digits.'},
    {title: 'Step 3', parragraph: 'You´ll have to calculate the math operation given for each digit, creating a new number with the same length of digits'},
    {title: 'Variation', parragraph: 'You can read the first number out loud (English or spanish) and say the result number out loud and clear too, to add a bit difficult to the game.'},
    {title: 'Extra instruction', parragraph: 'You can take a look in this video for a better understating of the game', link: 'https://youtube.com/clip/Ugkx4RvmCE_o3UxrqZDDY8YN8QpownphtGge'},
]

export const triviaInstructions: asset[] = [
    {title: 'Step 1', parragraph: 'The rules of this game are simple. There will be randomly pick up a topic.'},
    {title: 'Step 2', parragraph: 'A question about that certain topic will be given and a count down of 20 seg will start.'},
    {title: 'Step 3', parragraph: 'You´ll have to select the right answer before the count comes to 0, in order to accumulate points to the score.'},
    {title: 'Step 4', parragraph: 'Once you select a wrong answer, the game will be over and the final score accumulated will be shown.'}
]