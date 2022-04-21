import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import guessANumberImg from './img/guess_a_number.gif';
import elixirImg from './img/elixir.jpg';
import twitterImg from './img/twitter.png';
import gitHubImg from './img/github.png';

import {
    FlexBox,
    Heading,
    FullScreen,
    Progress,
    Slide,
    Deck,
    Box,
    Text,
    UnorderedList,
    ListItem,
    Appear,
    Notes,
    Image
} from 'spectacle';

const theme = {
    colors: {
        secondary: '#FF1414',
        primary: '#DDDDDD',
        tertiary: '#2a2a31',
        quartenary: '#A7A7A7'
    },
    fonts: {
        header: '"Oswald", Helvetica, Arial, sans-serif',
        text: '"Open Sans", Helvetica, Arial, sans-serif'
    },
    space: [8, 24, 32]
};

const Terminal = () => (
    <FlexBox height="100%">
        <iframe src="http://localhost:6622" width="90%" height="100%"></iframe>
    </FlexBox>
);
const ProsCons = ({ children }) => (
    <>
        <FlexBox>
            <FlexBox width="70%" justifyContent="space-around">
                <Heading color="white" fontSize="34px">
                    PROs
                </Heading>
                <Heading color="white" fontSize="34px">
                    CONs
                </Heading>
            </FlexBox>
        </FlexBox>
        <FlexBox>
            <FlexBox width="70%" justifyContent="space-around" alignItems="flex-start">
                {children}
            </FlexBox>
        </FlexBox>
    </>
);

const template = ({ slideNumber, numberOfSlides }) => (
    <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
        <Box padding="0 1em">
            <FullScreen />
        </Box>
        <Box padding="1em">
            <Progress />
            &nbsp;{slideNumber} / {numberOfSlides}
        </Box>
    </FlexBox>
);

const Presentation = () => (
    <Deck theme={theme} template={template}>
        <Slide>
            <FlexBox height="100%">
                <Heading>
                    History of
                    <br />
                    Programming Paradigms
                </Heading>
            </FlexBox>
        </Slide>

        <Slide>
            <Heading>(Fun Facts) About me</Heading>
            <FlexBox alignItems="center">
                <UnorderedList>
                    <Appear>
                        <ListItem>Sports Enthusiast</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Dog Lover</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>
                            Founder of three companies &#x1f4e1; &#x1f372; &#x1f4bb;
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>
                            &#x1f697; &#x1f691; &#x1f699; &#x1f697; &#x1f691; &#x1f699; &#x1f697;
                            &#x1f691; &#x1f699;{' '}
                        </ListItem>
                    </Appear>
                </UnorderedList>
            </FlexBox>
            <Text fontSize={24}>
                Rui Ferrão &#x1f3c4; &#x1f3c2; &#x1f4bb; <br />
                &#x1f4e7; rui.ferrao@academiadecodigo.org <br />
                <FlexBox justifyContent="flex-start">
                    <Image size="24px" src={twitterImg} />
                    &nbsp;@ruipferrao
                </FlexBox>
                <FlexBox justifyContent="flex-start">
                    <Image size="24px" src={gitHubImg} />
                    &nbsp;@ferrao
                </FlexBox>
            </Text>
        </Slide>

        <Slide>
            <Heading>
                What is a <br />
                Programming Paradigm?
            </Heading>
            <Appear>
                <Text>
                    General aproach or philosophy used when implementing a computer program.
                </Text>
            </Appear>
            <Appear>
                <Text>Mostly about the writing style and organizing code in a specific way.</Text>
            </Appear>
            <Appear>
                <Text>
                    <strong>The way in which we modularize software.</strong>
                </Text>
            </Appear>
        </Slide>

        <Slide>
            <Heading>Programming Paradigms</Heading>
            <FlexBox alignItems="center">
                <Appear>
                    <UnorderedList>
                        <ListItem>Procedural</ListItem>
                        <ListItem>Object-Oriented</ListItem>
                        <ListItem>Functional</ListItem>
                    </UnorderedList>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox flexDirection="column" justifyContent="space-around" height="80%">
                <Appear priority={1}>
                    <Heading>Guess a Number</Heading>
                </Appear>
                <Appear priority={0}>
                    <FlexBox>
                        <Image src={guessANumberImg} />
                    </FlexBox>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <Heading>Procedural Programming</Heading>
            <FlexBox flexDirection="column">
                <Text>
                    Program is modularized as a set of imperative
                    <br />
                    procedures, which reference the state of the program.
                </Text>
                <Appear>
                    <UnorderedList fontSize={26}>
                        <ListItem>BASIC</ListItem>
                        <ListItem>Pascal</ListItem>
                        <ListItem>C</ListItem>
                        <ListItem>JavaScript</ListItem>
                    </UnorderedList>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <Terminal />
        </Slide>

        <Slide>
            <Heading>Procedural Programming</Heading>
            <ProsCons>
                <UnorderedList>
                    <Appear>
                        <ListItem>Simplicity</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Speed</ListItem>
                    </Appear>
                </UnorderedList>
                <UnorderedList>
                    <Appear>
                        <ListItem>Problem Modeling</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Reusability</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Testability</ListItem>
                    </Appear>
                </UnorderedList>
            </ProsCons>
        </Slide>

        <Slide>
            <Heading>Object Oriented Programming</Heading>
            <FlexBox flexDirection="column">
                <Text>
                    Program is modularized as a set of objects, <br />
                    which encapsulate state and behaviour and <br />
                    collaborate by sending messages between them.
                </Text>
                <Appear>
                    <UnorderedList fontSize={26}>
                        <ListItem>C++</ListItem>
                        <ListItem>Ruby</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>JavaScript</ListItem>
                    </UnorderedList>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <Terminal />
        </Slide>

        <Slide>
            <Heading>Object Oriented Programming</Heading>
            <ProsCons>
                <UnorderedList>
                    <Appear>
                        <ListItem>Problem Modeling</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Reusability</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Expandability</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Mantainability</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Testability</ListItem>
                    </Appear>
                </UnorderedList>
                <UnorderedList>
                    <Appear>
                        <ListItem>Program Size</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Performance</ListItem>
                    </Appear>
                </UnorderedList>
            </ProsCons>
            <Notes>
                <ul>
                    <li>Modeling - easy to model real world problems</li>
                    <li>Reusability - grab objects and use them in other programs</li>
                    <li>Expandability - add new functionallity without touching existing code</li>
                    <li>
                        Mantainability - update parts of the system without need large scale updates
                    </li>
                    <li>Testability - test objects in isolation and they encapsulate state</li>
                    <li>
                        Size - tend to be larger, due to common boilerplate/cerimony required for
                        OOP
                    </li>
                    <li>
                        Performance - easy to get too many layers of abstractions requiring many
                        calls to execute
                    </li>
                </ul>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Functional Programming</Heading>
            <FlexBox flexDirection="column">
                <Text>
                    Program is modularized as a set of pure functions, which receive immutable
                    state, operate on it and return a new modified state. These functions compose
                    between them to produce the desired outcome through a declarative style.
                </Text>
                <Appear>
                    <UnorderedList fontSize={26}>
                        <ListItem>Erlang</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>Elixir</ListItem>
                    </UnorderedList>
                </Appear>
            </FlexBox>
        </Slide>

        <Slide>
            <Terminal />
        </Slide>

        <Slide>
            <Heading>Functional Programming</Heading>
            <ProsCons>
                <UnorderedList>
                    <Appear>
                        <ListItem>Safety</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Reusability</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Mantainability</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Concurrency</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Readability</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>Testability</ListItem>
                    </Appear>
                </UnorderedList>
                <UnorderedList>
                    <Appear>
                        <ListItem>Modeling</ListItem>
                    </Appear>

                    <Appear>
                        <ListItem>I/O</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Performance</ListItem>
                    </Appear>
                </UnorderedList>
            </ProsCons>
            <Notes>
                <ul>
                    <li>Safety - no state mutations (time) makes it less bug prone</li>
                    <li>Reusability - pure functions are easy to compose together</li>
                    <li>
                        Mantainability - update parts of the system without need large scale updates
                    </li>

                    <li>Concurrency - no state updates, everything is a read operation</li>
                    <li>Readability - declarative style of coding makes it easier to read</li>
                    <li>Testability - sooo easy to test pure functions, data in data out</li>
                    <li>
                        Modeling - writing pure functions easy, combining them to solve real world
                        problems is hard
                    </li>
                    <li>IO - We can not do it with pure functions</li>
                    <li>Performance - immutability and recursion have a toll on performance</li>
                </ul>
            </Notes>
        </Slide>

        <Slide>
            <Heading>Learn a new Language</Heading>
            <FlexBox>
                <Image src={elixirImg} />
            </FlexBox>
        </Slide>
    </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
