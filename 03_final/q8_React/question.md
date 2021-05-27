When does React's Virtual DOM update the real DOM?

### Answer:
When updates to the virtual DOM are made, React compares all updates through diffing. After comparisons are made react will batch the updates and make only necessary changes to real DOM.