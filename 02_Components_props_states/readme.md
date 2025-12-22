# Complete Notes: Components & Props - Chatbot Project

## 1. Introduction to Components & Props
- Two most important React features: **Components** and **Props**
- Building a **Chatbot Project** to learn these concepts

## 2. Chatbot Project Overview
### Features:
- Send messages to a robot
- Robot responds with:
  1. Get today's date
  2. Flip a coin
  3. Roll a dice
- Can switch text box position (top/bottom)
- Currently simple chatbot, can upgrade to AI later

### Project URL: `super simple.dev/projects/chatbot`

## 3. Setting Up Chatbot Project

### Step 1: Create Project File
```javascript
// Copy react-basics.html → rename to chatbot.html
// Change title to "chatbot"
```

### Step 2: Open with Live Server
- Right-click → Open with Live Server

## 4. What are Components?

### Definition:
- A **component** is just a **piece of the website**
- Example: Text box + button = one component
- Each chat message = another component

### Why Components?
- Split website into manageable pieces
- Work on small pieces at a time
- Reusable code

## 5. Creating First Component

### Component Syntax:
```javascript
function ComponentName() {
    return (
        // HTML/JSX here
    );
}
```

### First Component: Chat Input
```javascript
function ChatInput() {
    return (
        <>
            <input />
            <button>Send</button>
        </>
    );
}
```

### Key Rules:
1. **Component names must start with capital letter** (PascalCase)
2. **Can only return one element** from component
3. Use **fragments** (`<> </>`) or **div** to group multiple elements

## 6. Displaying Components

### Method 1: Function Call (Not Recommended)
```javascript
root.render(ChatInput());
```

### Method 2: Component Syntax (Recommended)
```javascript
root.render(<ChatInput />);
```

### Why Component Syntax?
- Looks like HTML element
- Creates custom HTML elements
- Main idea of React: Create your own elements

## 7. Fragments vs Div

### Problem with Div:
- Adds extra div element to HTML
- Can cause unnecessary nesting

### Solution: Fragments
```javascript
// Fragment syntax
<> </>

// Instead of
<div> </div>
```

### When to Use:
- **Fragment**: When you don't want extra element
- **Div**: When you need block-level element for layout

## 8. Improving Input Element

### Adding Attributes:
```javascript
function ChatInput() {
    return (
        <>
            <input 
                placeholder="Send a message to chatbot"
                size="30"
            />
            <button>Send</button>
        </>
    );
}
```

### JSX vs HTML Differences:
1. **All elements need closing tag** in JSX
2. **Self-closing shortcut**: `<input />` instead of `<input></input>`
3. **Attribute names**: Use camelCase in JSX (e.g., `className` instead of `class`)

## 9. Creating Chat Message Component

### Second Component:
```javascript
function ChatMessage() {
    return (
        <div>
            <p>Hello chatbot</p>
            <img src="user.png" width="50" />
        </div>
    );
}
```

### Downloading Images:
1. Save `user.png` and `robot.png` to project folder
2. Use `src` attribute to load images

## 10. Reusing Components with Props

### Problem:
- Need different messages in same component
- Solution: Use **props** (properties)

### Adding Props to Component:
```javascript
// Using component with props
<ChatMessage 
    message="Hello chatbot"
    sender="user"
/>

<ChatMessage 
    message="Hello, how can I help you?"
    sender="robot"
/>
```

### Accessing Props in Component:
```javascript
function ChatMessage(props) {
    console.log(props); // {message: "...", sender: "..."}
    
    const message = props.message;
    const sender = props.sender;
    
    return (
        <div>
            <p>{message}</p>
            <img src="user.png" width="50" />
        </div>
    );
}
```

## 11. Conditional Rendering

### Different Layout for Robot Messages:
```javascript
function ChatMessage(props) {
    const { message, sender } = props;
    
    if (sender === "robot") {
        return (
            <div>
                <img src="robot.png" width="50" />
                <p>{message}</p>
            </div>
        );
    }
    
    return (
        <div>
            <p>{message}</p>
            <img src="user.png" width="50" />
        </div>
    );
}
```

## 12. JavaScript Shortcuts

### 1. Destructuring Props
```javascript
// Long way
const message = props.message;
const sender = props.sender;

// Destructuring
const { message, sender } = props;

// Even better: Destructure in parameters
function ChatMessage({ message, sender }) {
    // Use message and sender directly
}
```

### 2. Conditional (Guard) Operator in JSX
```javascript
// Using && (and) operator
{sender === "robot" && <img src="robot.png" width="50" />}
{sender === "user" && <img src="user.png" width="50" />}
```

### How && Operator Works:
- If left side is `true`, returns right side
- If left side is `false`, returns left side (which is falsy and won't display)

## 13. Code Formatting Best Practices

### Long Lines Solution:
```javascript
// Bad (too long)
<input placeholder="Send a message to chatbot" size="30" />

// Good (multi-line)
<input 
    placeholder="Send a message to chatbot"
    size="30"
/>

// Good for conditions
{sender === "robot" && (
    <img 
        src="robot.png" 
        width="50" 
    />
)}
```

### Component Attributes:
- Put each attribute on its own line
- Align attributes vertically
- Use indentation to show hierarchy

## 14. App Component Pattern

### Best Practice: Create App Component
```javascript
function App() {
    return (
        <>
            <ChatInput />
            <ChatMessage 
                message="Hello chatbot"
                sender="user"
            />
            <ChatMessage 
                message="Hello, how can I help you?"
                sender="robot"
            />
            {/* More messages */}
        </>
    );
}

// Render the App
root.render(<App />);
```

### Benefits:
- Represents entire application
- Can use component features (props, state)
- Components can contain other components

## 15. Complete Chatbot Code Structure

```javascript
// 1. Chat Input Component
function ChatInput() {
    return (
        <>
            <input 
                placeholder="Send a message to chatbot"
                size="30"
            />
            <button>Send</button>
        </>
    );
}

// 2. Chat Message Component
function ChatMessage({ message, sender }) {
    return (
        <div>
            {sender === "robot" && (
                <img 
                    src="robot.png" 
                    width="50" 
                />
            )}
            <p>{message}</p>
            {sender === "user" && (
                <img 
                    src="user.png" 
                    width="50" 
                />
            )}
        </div>
    );
}

// 3. App Component
function App() {
    return (
        <>
            <ChatInput />
            <ChatMessage 
                message="Hello chatbot"
                sender="user"
            />
            <ChatMessage 
                message="Hello, how can I help you?"
                sender="robot"
            />
            <ChatMessage 
                message="Can you get me today's date?"
                sender="user"
            />
            <ChatMessage 
                message="Today is October 10, 2023"
                sender="robot"
            />
        </>
    );
}

// 4. Render App
const container = document.querySelector('.js-container');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## 16. Key Concepts Summary

### Components:
- Pieces of website
- Created with functions
- Names start with capital letter (PascalCase)
- Return JSX/HTML

### Props:
- Properties passed to components
- Make components reusable
- Accessed via `props` parameter or destructuring

### JSX Rules:
- Must return single element
- Use fragments (`<> </>`) to group without extra div
- Self-closing tags for empty elements
- Curly braces `{ }` for JavaScript expressions

### Best Practices:
- Use App component for entire application
- Format long lines properly
- Use destructuring for props
- Use conditional rendering with `&&`

## 17. Next Lesson Preview
- **State**: Makes website interactive
- Will add functionality to send new messages
- Dynamic updates to chatbot

## 18. Project Status
✅ Created: Text input + Send button  
✅ Created: Chat message components  
✅ Added: User and robot messages  
✅ Implemented: Different layouts for user/robot  
✅ Used: Props for reusability  
❌ Not yet: Interactive messaging  
❌ Not yet: Dynamic updates  

**Next**: Add state to make chatbot interactive!


In this lesson:
1. Component = a piece of the website
2. Component = create our own HTML elements
3. Started the Chatbot Project
4. Split the Chatbot into
5. props = make components reusable
6. Destructuring, Guard Operator
7. Code cleanup
8. Created <App>component
