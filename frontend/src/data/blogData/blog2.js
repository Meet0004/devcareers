const blog2 = {
  id: 'stop-using-console-log-advanced-debugging-chrome-vs-code',
  template: 'article',
  title: 'Stop Using console.log: Advanced Debugging Techniques in Chrome and VS Code',
  category: 'Debugging and Tools',
  categoryColor: '#f97316',
  readTime: '14 min read',
  date: 'Apr 26, 2026',
  author: 'Meet Soni',
  overview:
    "Every JavaScript developer starts with console.log. It is simple, quick and feels under your control. But once your app grows, that habit quietly starts wasting your time. Modern tools in Chrome DevTools and VS Code give you a much better way to see what your code is doing, without spamming logs or reloading ten times. This guide shows you how to move from console.log to proper debugging, in a practical way.",
  covers: [
    'Why console.log is fine for small checks but bad as your main debugging tool',
    'How to use breakpoints, watch expressions and call stack in Chrome DevTools and VS Code',
    'Practical debugging workflows you can start using in your next project',
  ],
  tags: ['Debugging', 'JavaScript', 'Chrome DevTools', 'VS Code'],
  featured: false,

  content: {
    hook: {
      paragraphs: [
        "Be honest. Your usual flow is something like this. Add console.log, save, switch to browser, refresh, read log, change code, repeat.",
        "This works until your file becomes long, your state becomes complex and you have no idea which console output is from which run.",
        "At that point you are not really debugging. You are just guessing faster.",
        "The good news is you already have much better tools in your browser and editor. You probably just never sat down to learn them properly."
      ],
      closingQuestion:
        "Let us fix that. One step at a time, without making it feel like some heavy advanced topic."
    },

    sections: [
      {
        id: 'why-console-log-is-limited',
        heading: 'Why console.log Alone Will Slow You Down',
        subheading: 'Good for quick checks, bad as a long term strategy',
        paragraphs: [
          "Most developers start with console.log because it is the easiest way to see values. There is nothing wrong with using it for a simple one line check.",
          "The problem appears when you depend only on console.log for everything. Articles and talks on debugging point out a few common issues. Logs clutter your console, they often accidentally go to production, and they do not show state across time in a structured way.",
          "You end up adding logs in ten places, forgetting to remove half of them, and still not understanding the real sequence of calls or the exact place where things broke.",
          "Proper debugging tools let you pause code at the right line, see all variables together, inspect the call stack and move step by step without constantly editing your source file."
        ]
      },

      {
        id: 'mental-model-breakpoints',
        heading: 'Think In Terms Of Breakpoints, Not Print Statements',
        subheading: 'Pause the movie instead of printing every frame',
        paragraphs: [
          "A breakpoint is basically a marker that says. When the code reaches this line, stop and let me inspect everything here.",
          "Instead of printing out values in different places, you pause once and then look around. You see current variable values, what called this function, what the arguments are and how the state is changing as you step through.",
          "Most modern debuggers also let you set different types of breakpoints. Normal ones, conditional ones that only trigger when some expression is true, or logpoints that print something without changing the code.",
          "Once you get used to this way of thinking, console.log starts feeling like a very blunt instrument."
        ]
      },

      {
        id: 'chrome-devtools-basics',
        heading: 'Chrome DevTools: Your Frontend Debugging Control Room',
        subheading: 'Use the Sources tab, not only the Console tab',
        paragraphs: [
          "Chrome DevTools is much more than the place where you read console.log output. It has full support for breakpoints, stepping and variable inspection.",
          "Open DevTools, go to the Sources tab, and locate your JavaScript file. You can click on the line number to add a breakpoint. Now when the browser hits that line, it will pause automatically.",
          "When the code is paused, you will see panels for local variables, global variables, call stack and breakpoints. You can expand objects, check values and step over, step into or step out of functions line by line.",
          "You can also use the debugger keyword in your code while developing. When DevTools is open and execution reaches that line, it pauses as if you had clicked a breakpoint there."
        ]
      },

      {
        id: 'chrome-advanced-tricks',
        heading: 'Advanced Chrome Tricks: Conditional Breakpoints And Logpoints',
        subheading: 'Focus only on the cases you care about',
        paragraphs: [
          "Sometimes a function runs hundreds of times, but you only care about one particular call. In such cases, a normal breakpoint will keep stopping you again and again.",
          "Chrome DevTools lets you right click on a breakpoint and make it conditional. You can enter an expression and the debugger will only pause when that condition is true, for example when id is equal to a certain value.",
          "There is also a feature called logpoint in recent DevTools versions. A logpoint prints a message to the console when the line executes, but you configure it from DevTools instead of editing your code. This is perfect when you want console style logs without pushing changes to the source or risking leaving debug logs in production.",
          "These small features save a lot of time in larger apps where you cannot afford to keep reloading and editing for every single check."
        ]
      },

      {
        id: 'vscode-setup',
        heading: 'VS Code Debugger: One Click Instead Of Ten Console Logs',
        subheading: 'Set up launch configs once and reuse them',
        paragraphs: [
          "VS Code has a very capable built in debugger that works for Node applications and also with Chrome or Edge for frontend apps.",
          "You open the Run and Debug view, choose the environment like Node.js or Chrome, and VS Code creates a launch.json file with a basic configuration. After that, you can start debugging with one click instead of running scripts manually and relying on console.log",
          "When you run the debugger, VS Code opens a special panel with variables, watch expressions, call stack and breakpoints. It also highlights the current line in the editor so you can follow the flow easily.",
          "If you work with Node or full stack projects, this setup pays off quickly because you stop jumping between terminal prints and editor all the time."
        ]
      },

      {
        id: 'vscode-tools',
        heading: 'Using Watch, Call Stack And Conditional Breakpoints In VS Code',
        subheading: 'See only what matters without changing your code',
        paragraphs: [
          "The Variables section in the debug sidebar shows local and global variables for the current scope. You can expand them to inspect nested objects in detail.",
          "The Watch panel lets you type any expression you want to track, for example user.name or items.length. VS Code will keep updating these values every time you hit a breakpoint.",
          "The Call Stack panel shows the chain of function calls that led to the current line. This is very useful when you are inside a deep helper and you want to know who actually called it.",
          "You can also create conditional breakpoints in VS Code, just like in DevTools. Right click on the breakpoint, add a condition or a hit count, and the debugger will pause only when that condition matches. This is mentioned often in official docs as one of the most powerful features for complex debugging."
        ]
      },

      {
        id: 'when-to-use-console-log',
        heading: 'When console.log Still Makes Sense',
        subheading: 'It is a small tool, not the whole toolbox',
        paragraphs: [
          "None of this means that console.log is evil or that you should never use it again. Even experienced developers still use it for very quick sanity checks or to log something temporary while exploring.",
          "The point is to change what you reach for first. If you are chasing a tricky bug, a race condition or a complex data flow, jumping into a debugger with breakpoints will almost always be faster and clearer than adding logs everywhere.",
          "For server side code in Node, people also recommend using proper logging libraries like Pino or Winston for production, and using console only during local development.",
          "You can keep console.log as a helper, but it should not be your main plan for every bug you face."
        ]
      },

      {
        id: 'how-to-practise',
        heading: 'How To Practise These Techniques Without Feeling Lost',
        subheading: 'Small daily habits matter more than one big tutorial',
        paragraphs: [
          "You do not have to master everything in one day. Start with one change. For your next bug, instead of writing five logs, set one breakpoint in Chrome or VS Code and step through the code once.",
          "Pick one feature per week. One week you focus only on basic breakpoints. Next week you try conditional breakpoints. Then you explore watch expressions or logpoints.",
          "You can also watch short videos or read quick blogs on specific DevTools or VS Code features. Many resources highlight top debugging features that save time in real projects.",
          "After a month of doing this, your default reaction to a bug will not be console.log everywhere. It will be. Let me pause here and see exactly what is going on."
        ]
      }
    ],

    conclusion: {
      heading: 'Make Your Debugging Feel Calm, Not Chaotic',
      paragraphs: [
        "Good debugging is not about being a genius. It is about having the right visibility into your code at the right time.",
        "Chrome DevTools and VS Code already give you pause, inspect and step through for free. If you move from console.log spam to a breakpoint first approach, your future self will thank you on every deadline.",
        "Next time you reach for console.log out of habit, just pause and ask yourself. Can I set a breakpoint here instead and understand this properly in five minutes.",
      ],
      callToAction:
        "If you want, paste a small code snippet where you are currently using console.log to debug, and I can show you how to set it up with proper breakpoints in Chrome or VS Code.",
    },
  },
};

export default blog2;