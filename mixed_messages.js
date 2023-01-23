let characters = ['King Thomas I', 'President Derrick', 'The First Duke of Chesterfield', 'Pharaoh Abunhothep', 'Christopher the Lion', 'Emperor Bakumarnobuzzardin', 'Pricess Aleia of Bandi', 'Vandorf the Suspicious', 'DJ Big Hat', 'Sonia Anne Sommersen', 'Rev. Conrad Small', 'Eric the Giant', 'Captain Sardine', 'Lieutenant Harris', 'King Peter III of Sunnyland', 'Baron Clementville', 'Mark Random', 'Her Majesty Queen Bella ruler of Unknown Country', 'General Blinkaneye'];

let funFacts = [
    'Hated lemons',
    'Wrote the first book of stories from their land',
    'Travelled the length of their country in search for a golden goose',
    'Discovered how to cook onion soup',
    'Raided all neighbouring countries at least twice',
    'Always wanted to be a famous musician',
    'Kept 10 dogs, 15 cats and a guinea pig all their life',
    'The name we know is not their real name',
    'Had a mysterious condition which made them wake up at night and recite first 4 lines of Hamlet in a semi-conscious state, only on Tuesdays',
    'Create dthe first hybrid microwave-hoover machine',
    'Travelled in time and met their grandpa, who gave them a secret recipe for pancakes',
    'Built the first prototype of sugar-powered automobile',
    'Was considered a spy when he visited the country of their uncle',
    'Never slept in the same bed for more than a week',
    'Invented a programming language very similar to JavaScript',
    'Could apparently make obsolete computer components appear out of thin air',
    'Always said a random thing when asked by their butler the question "how are you today?"',
    'Used a toothbrush to comb hair',
    'Laid the foundations of a mysterious theory known as Theory of Impossible Quotes, of which we know nothing',
    'Could read and write in 25.5 languages' ];

let famousQuotes = [
    'Never do this',
    'I have known things that you will never know',
    'What an excellent idea I\'ve just had, you must write it down at once!',
    'I came, I saw, I bought a burger',
    'A man is worth as much as he is worth, and no more',
    'In the whole land, I and I alone know how to make tomato soup properly',
    'This is to be known: whatever things are discovered here, they have to be properly discovered and not just partly',
    'Get out of my way or I will perform 10 squats in front of you',
    'The biggest poison in the world is... I forget',
    'And so it will be, that inhabitants of this land will be known as Yzzairdesmenks',
    'Two plus two equals something, I am sure of that',
    'In the future, people will not do any work. All work will be done by machines. When all work is done, the machines will retire to another planet, where they will play chess forever',
    'Let the best one win',
    'Our leaders have been responsible for so much good and bad and everything in between. This has always been the case.',
    'I have a distinct impression that my words will one day be quoted by a machine program',
    'Give me the best stake in the land',
    'I never learned how to say clever things',
    'This here is something that will be spoken about for generations to come',
    'Know this: I am the quardian of this land',
    'Heavens above! Why is it that I don\'t know a thing about this?!' ];




    function randomIndex {

        return math.Floor(math.Random() * 19));

    }

    function createMessage() {

        let character = characters[randomIndex()];
        let funFact = funFacts[randomIndex()];
        let famousQuote = famousQuotes[randomIndex()];

        console.log(`Today's historical character is: ${character}`);
        console.log(`Fun fact about ${character}: ${funFact}`);
        console.log(`Famous quote: ${famousQuote}`);

    }

    createMessage();
    