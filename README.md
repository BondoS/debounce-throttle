## Question: Explain and implement a debounce and throttle functions that accepts a function as a parameter then use this parameter as a callback function.

### What is debounce? 🍰

Imagine yourself as a 7-year-old toddler who loves to eat vanilla cake! Today your mom has made one, but it's not for you, it's for the guests! You, being spunky, keep on asking her for the cake that she got annoyed and told you that she will give you the cake only if you remain silent for one hour. This means you won’t get the cake if you keep on asking her continuously - **you will only get it one hour after last time you ask,** once you stop asking for the cake.
This is debouncing[^1].

> In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

---

### What is throttling? 🍰

Consider the same cake example. This time you kept on asking your mom for the cake so many times. Finally, she gives you the cake. But, you keep on asking her for more. Annoyed, she agrees to give you more cake with a condition that you can have the cake only after an hour. Still, you keep on asking her for the cake, but now she ignores you. Finally, after an interval of one hour, you get more cake. **If you ask for more, you will get it only after an hour, no matter how many times you ask her.**
This is throttling is[^1].

> Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

---

The implementation is written in JavaScript, to run the file, please use `node .\debounce-throttle.js`
you should only see the next result in the console

```
1200
1500
```

[^1]: [Reference](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript)
