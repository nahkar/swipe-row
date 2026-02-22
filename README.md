# React Swipe Row Component 🚀

A highly customizable, iOS-style swipeable row component for React applications. Built with `framer-motion` for buttery-smooth spring physics animations. Perfect for creating lists with interactive hidden actions like "Archive", "Delete", or "Reply".

![npm version](https://img.shields.io/npm/v/@nahkar/swipe-row)
![React](https://img.shields.io/badge/react-%5E18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.2.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- **Fluid Animations:** Powered by [Framer Motion](https://www.framer.com/motion/) with native-feeling spring physics.
- **Dynamic Actions:** Pass an unlimited number of custom action buttons (Edit, Delete, Archive, etc.).
- **Automatic Styling:** Built-in basic styling with CSS Modules so it just works out of the box without polluting global scopes.
- **Dark Mode Support:** Automatically detects system preferences and adjusts action background colors.
- **Fully Typed:** Written in TypeScript for excellent Developer Experience and IntelliSense.
- **Zero Config:** Auto-calculates swipe distances based on your button widths.

---

## 📦 Installation

```bash
<<<<<<< HEAD
npm install @nahkar/swipe-row framer-motion
# or
yarn add @nahkar/swipe-row framer-motion
# or
pnpm add @nahkar/swipe-row framer-motion
=======
npm install swipe-row framer-motion
# or
yarn add swipe-row framer-motion
# or
pnpm add swipe-row framer-motion
>>>>>>> 7bd739442d427f687c9206bb81a34b2f43cb2e7e
```

*Note: `framer-motion` is required as a peer dependency for animations.*

---

## 💻 Usage

First, import the component and the necessary CSS styles into your React file:

```tsx
<<<<<<< HEAD
import { SwipeRow } from '@nahkar/swipe-row';
import '@nahkar/swipe-row/style.css'; // Important for default styling!
=======
import { SwipeRow } from 'swipe-row';
import 'swipe-row/style.css'; // Important for default styling!
>>>>>>> 7bd739442d427f687c9206bb81a34b2f43cb2e7e
```

### Basic Example (Single Action)

```tsx
function BasicList() {
  return (
    <SwipeRow
      actions={[
        {
          label: 'Delete',
          onClick: () => console.log('Deleted!'),
          backgroundColor: '#ef4444', // Tailwind red-500
        }
      ]}
    >
      <div style={{ padding: '16px' }}>
        Swipe me to the left!
      </div>
    </SwipeRow>
  );
}
```

### Advanced Example (Multiple Actions)

You can pass multiple action objects. The component will automatically calculate how far the user needs to swipe.

```tsx
function EmailList() {
  const handleArchive = () => alert('Archived');
  const handleReply = () => alert('Replying...');

  return (
    <SwipeRow
      actions={[
        {
          label: 'Reply',
          onClick: handleReply,
          backgroundColor: '#3b82f6', // Tailwind blue-500
          width: 80, // Default is 80px
        },
        {
          label: 'Archive',
          onClick: handleArchive,
          backgroundColor: '#f59e0b', // Tailwind amber-500
          width: 90, 
        }
      ]}
    >
      <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <h4>Job Application Updates</h4>
        <p>You have successfully submitted your resume...</p>
      </div>
    </SwipeRow>
  );
}
```

---

## 🛠 Props

### `SwipeRow`

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | **Required** | The main visible content of your row. |
| `actions` | `SwipeAction[]` | **Required** | Array of action configurations to be revealed on swipe. |
| `maxSwipe` | `number` | `undefined` | Override the automatic swipe width calculation (px). |

### `SwipeAction` Object

Configure each button in the `actions` array:

| Property | Type | Default | Description |
|---|---|---|---|
| `label` | `React.ReactNode` | **Required** | The text or icon to show inside the button. |
| `onClick` | `() => void` | **Required** | Function to call when clicked. |
| `backgroundColor` | `string` | `'#64748b'` | CSS background color for the button. |
| `color` | `string` | `'white'` | CSS text color. |
| `width` | `number` | `80` | Width of the button in pixels. Used for auto element calculation. |
| `className` | `string` | `undefined` | Custom CSS class applied to the button element. |
| `ariaLabel` | `string` | `label` string value | For screen readers. |

---

## 🧪 Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the Vite playground: `npm run dev`
4. Run unit tests: `npm run test`
5. Build the library: `npm run build`

---

## 📄 License

MIT © nahkar - Feel free to use in personal and commercial projects!
