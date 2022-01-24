import input from 'input';

async function askstuff() {
        const answer = '1Password';
        const guess = await input.text('What is the password?');
        if (guess == answer) {
         console.log('That is the correct password.');
        } else {
            console.log('That is the incorrect password.')
        }
}
askstuff();

