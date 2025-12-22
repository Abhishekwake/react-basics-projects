# Complete Notes: React Basics & JSX - Super Simple Dev

## 1. Course Introduction
### What we'll build:
- Two projects: **Chatbot** and **E-commerce** project
- Learn React from basics to advanced

### Course Structure:
- Start from React basics
- Learn major features step by step
- Advanced features: React with backend, AWS deployment, TypeScript, AI integration
- Over **125 exercises** throughout the course
- Can change video speed and subtitles

## 2. Prerequisites

### Required Software:
1. **Web Browser**: Google Chrome (recommended)
2. **Code Editor**: VS Code (recommended)

### Required Knowledge:
1. **JavaScript Basics** (need to know):
   - Variables, functions, conditionals, loops
   - Arrays, objects
   - DOM basics
   - Will review as we go

2. **HTML Basics** (need to know):
   - Elements and attributes
   - Common elements: div, p, button, input
   - HTML structure
   - Will review as we go

### Recommended Courses (if needed):
- JavaScript full course (in description)
- HTML and CSS full course (in description)

## 3. Setting Up Development Environment

### Step 1: Create Project Folder
```
Desktop → New Folder → "react-course"
```

### Step 2: Open in VS Code
```
VS Code → File → Open Folder → Select "react-course"
```

### Step 3: Create HTML File
```
Create: react-basics.html
```

### Step 4: Get Starting Code
1. Visit: `super simple.dev/react-basics`
2. Copy all HTML code
3. Paste into `react-basics.html`
4. Save file

### Step 5: Install Live Server Extension
```
VS Code Extensions → Search "Live Server" → Install
```

### Step 6: Open with Live Server
```
Right-click HTML file → Open with Live Server
```

**Result**: Website displays "Welcome to Super Simple Dev React Course"

## 4. Understanding React

### What is React?
1. **External Library** - Code written by others, loaded from internet
2. **Helps create websites easier** - Simplifies web development

### Loading JavaScript on Websites

#### Method 1: Script Element with Inline Code
```html
<script>
  console.log("hello");
</script>
```

#### Method 2: Script Element with External File
```html
<script src="react-basics.js"></script>
```

#### Method 3: Script Element with External URL (External Library)
```html
<script src="https://unpkg.com/super-simple-dev/external-library.js"></script>
```

### React as External Library
- React code hosted on external URLs
- We load it using script elements:
```html
<!-- React core library -->
<script src="https://unpkg.com/super-simple-dev/react.js"></script>
<!-- React DOM for websites -->
<script src="https://unpkg.com/super-simple-dev/react-dom.js"></script>
```

### Why Two Libraries?
- **React**: Shared features (works for websites AND mobile apps)
- **React DOM**: Website-specific features
- **React Native**: Mobile app version (not used here)

### Why Super Simple Dev URL?
- Controls React version for consistency
- Ensures same version as video tutorial

## 5. Setting Up React

### HTML Structure Review
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <!-- Visible content here -->
    <script>
        // JavaScript here (usually at bottom)
    </script>
</body>
</html>
```

### React Setup Code
```javascript
// 1. Get container element from HTML
const container = document.querySelector('.js-container');

// 2. Set up React with the container
const root = ReactDOM.createRoot(container);

// 3. Render content inside container
root.render("Welcome to Super Simple Dev React Course");
```

### Key Concepts:
1. **Container**: HTML element where React displays content
2. **Isolation**: React only controls content inside container
3. **Render**: Display content inside container

## 6. Understanding the Code

### DOM (Document Object Model)
- Connects JavaScript and HTML
- `document.querySelector()`: Get HTML elements in JavaScript
- `ReactDOM.createRoot()`: Set up React with container
- `root.render()`: Display content with React

## 7. JSX (JavaScript XML)

### What is JSX?
- **Enhanced JavaScript** that allows writing HTML directly in JavaScript
- **Syntax extension** for JavaScript
- Must be **translated** to regular JavaScript for browsers

### JSX Example:
```javascript
// JSX code (HTML in JavaScript)
const button = <button>Hello</button>;

// Equivalent regular JavaScript
const button = document.createElement('button');
button.textContent = 'Hello';
```

### Why JSX?
1. **More natural**: Write HTML-like syntax
2. **Error detection**: Better error messages
3. **Value insertion**: Insert JavaScript values easily

## 8. Babel - JavaScript Compiler

### Problem:
- Browsers don't understand JSX
- Need to translate JSX → Regular JavaScript

### Solution: Babel
1. **Load Babel library**:
```html
<script src="https://unpkg.com/super-simple-dev/babel.js"></script>
```

2. **Tell script to use Babel**:
```html
<script type="text/babel">
    // JSX code here
</script>
```

## 9. Working with Elements

### Creating Elements with JSX
```javascript
// Button element
const button = <button>Click me</button>;

// Paragraph element  
const paragraph = <p>This is a paragraph</p>;

// Div element (container)
const div = <div>
    <button>Click me</button>
    <p>Paragraph text</p>
</div>;
```

### Rendering Elements
```javascript
// Render single element
root.render(button);

// Render container with multiple elements
root.render(div);
```

### Important Rule:
- **Can only render ONE element** at top level
- **Solution**: Wrap multiple elements in a div

## 10. Code Formatting Best Practices

### Good Formatting:
```javascript
const div = (
    <div>
        <button>Hello</button>
        <p>Paragraph of text</p>
    </div>
);
```

### Why This Format?
- Clear structure (indentation shows nesting)
- Easier to read
- Industry standard

## 11. Inserting Values in JSX

### Using Curly Braces `{}`
```javascript
const name = "John";
const element = <p>Hello {name}</p>;

// Can use any JavaScript expression
const math = <p>2 + 2 = {2 + 2}</p>;
const today = <p>Today is {new Date().toLocaleDateString()}</p>;
```

## 12. Benefits of React

1. **More Natural**: Direct HTML-like syntax
2. **Better Error Detection**: JSX catches errors early
3. **Easy Value Insertion**: `{ }` syntax for JavaScript values
4. **Component-Based**: (Will learn later) Reusable pieces

## 13. Complete Setup Code

### HTML File Structure:
```html
<!DOCTYPE html>
<html>
<head>
    <title>React Basics</title>
</head>
<body>
    <!-- React container -->
    <div class="js-container"></div>
    
    <!-- Load external libraries -->
    <script src="https://unpkg.com/super-simple-dev/react.js"></script>
    <script src="https://unpkg.com/super-simple-dev/react-dom.js"></script>
    <script src="https://unpkg.com/super-simple-dev/babel.js"></script>
    
    <!-- React code with Babel translation -->
    <script type="text/babel">
        // Get container
        const container = document.querySelector('.js-container');
        
        // Set up React
        const root = ReactDOM.createRoot(container);
        
        // Create elements with JSX
        const button = <button>Hello</button>;
        const paragraph = <p>Paragraph of text</p>;
        
        const div = (
            <div>
                <button>Hello</button>
                <p>Paragraph of text</p>
            </div>
        );
        
        // Render content
        root.render(div);
    </script>
</body>
</html>
```

## 14. Key Takeaways

### React Basics:
- React = External library that simplifies web development
- JSX = JavaScript + HTML syntax
- Babel = Translates JSX to regular JavaScript

### Setup Process:
1. Create HTML structure
2. Add container div
3. Load React, ReactDOM, Babel libraries
4. Write JSX code in script tag with `type="text/babel"`
5. Render content with `ReactDOM.createRoot()` and `root.render()`

### Next Steps:
- Practice with exercises
- Learn more React features in upcoming lessons

## 15. Exercises (Practice Topics)

1. Create and render different HTML elements
2. Practice JSX formatting
3. Insert JavaScript values into JSX
4. Create nested elements
5. Experiment with different element combinations

**Remember**: Check video description for exercise solutions!