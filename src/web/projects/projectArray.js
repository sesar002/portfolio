import { IoBeer } from "react-icons/io5";
import { GiHalfDead } from "react-icons/gi";
import { BsFillChatSquareTextFill, BsFillCalculatorFill } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";

export const projects = [
  {
    id: "beer",
    icon: <IoBeer className="project-icon" />,
    name: "Beer App",
    ghPages: "",
    ghCode: "https://github.com/sesar002/beer-app-react",
    techStack: "React, Node.js",
    about:
      "When app is started it generates 25 beers. By clicking on the star a beer is added to favourites and if you click on it again it will be removed from favourites. When You hover over the beer a button will be displayed to view details about the beer. There are four filters, search filter that searches beers by name, range filter that filters beers by their alcohol percentage, show only favourites filter and sort filter that gives an option to sort by name or by alcohol percentage.",
  },
  {
    id: "hangman",
    icon: <GiHalfDead className="project-icon" />,
    name: "Hangman Game",
    ghPages: "http://sesar002.github.io/hangman-game-react",
    ghCode: "https://github.com/sesar002/hangman-game-react",
    techStack: "React, Node.js, Redux",
    about:
      "When app is started you need to input your name in input area and click play. After that screen is desplayed with hidden quote and alphabet letters. You need to click on the letters to see if the letter is in the quote. If it isn't then parts of the body are revealed and errors count is increased and displayed on mans head.",
  },
  {
    id: "chat",
    icon: <BsFillChatSquareTextFill className="project-icon" />,
    name: "Chat App",
    ghPages: "https://sesar002.github.io/chat-app/",
    ghCode: "https://github.com/sesar002/chat-app",
    techStack: "React, Node.js, SCSS",
    about:
      "When app is started it generates You a random name and random color. To have multiple users online You need to open the app in multiple tabs. Scaledrone Chat Service used. Scaledrone provides features like realtime messaging, message history and user presence so you can focus on the business logic.",
  },
  {
    id: "todo",
    icon: <RiTodoLine className="project-icon" />,
    name: "To Do List",
    ghPages: "https://sesar002.github.io/Todo-with-React/",
    ghCode: "https://github.com/sesar002/Todo-with-React",
    techStack: "React, React-router",
    about:
      "In the input fielnd you type something you want to do and press enter key or Add button. When you finish something you click on that item and it will move it to Completed list. If you want to remove that item you click X button next to the item. All list shows all items you want to do, Completed list shows all the items you completed, and Not completed list shows all items you didn't complete.",
  },
  {
    id: "calc",
    icon: <BsFillCalculatorFill className="project-icon" />,
    name: "Calculator App",
    ghPages: "https://sesar002.github.io/calculator/",
    ghCode: "https://github.com/sesar002/calculator",
    techStack: "JavaScript, SCSS, HTML5",
    about:
      "App has the option of addition, subtraction, multiplication and division. Mathjs API is used for result.",
  },
];
