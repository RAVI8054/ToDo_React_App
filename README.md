#  To-Do React App
A minimal, user-friendly **To-Do List** app built using **React** + **Vite**.  
It allows users to add, delete, edit, and mark tasks as completed, with a clean UI using utility-first CSS .
---
## 🚀 Features
- ✅ Add new tasks
- ✅ Delete tasks
- ✅ Edit existing tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Responsive and styled UI 
---
##  Project Structure
```bash
src/
├── components/
│   ├── EventHandler.js       # Contains add/edit/delete/complete logic handlers
│   ├── Footer.jsx            # App footer (optional)
│   ├── Header.jsx            # App header/title
│   ├── ToDoItem.jsx          # Single task UI with edit/delete/complete
│   └── ToDoList.jsx          # Maps through tasks, renders ToDoItem list
├── App.jsx                   # Main app, manages state
├── main.jsx                  # App entry point
└── index.css                 # Global styles (Tailwind or custom CSS)
