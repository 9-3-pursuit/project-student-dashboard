# What is this?

This is a log of my progress as I manage this project. I've used similar logs in previous projects and I find that they help hold me more accountable. External project managment platforms exsist, but since this is a smaller project and a solo project, it will be easier for me to manage (and actually use) if the log exsists in the project.

## The Plan

Inspired by the [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react) page in the documentation, my plan is:

> 1. ✅ Break Down the UI into Component Hierarchy.
>    ![Diagram of Component Hierarchy](./assets/Student%20Dashboard%20Diagram-3.jpg "Component Hierarchy")
>
> 1. ✅ Create static version
>
>    1. ✅ Create header component
>    1. ✅ Create CohortList component
>    1. ✅ Create StudentList component
>    1. ✅ Style page layout
>
> 1. ✅ Find the minimal but complete representation of UI state (see Componet diagram)
> 1. ✅ Identify where your state should live
> 1. Add inverse data flow (see Componet diagram)

I also need to keep track of which requirements I've built/fulfilled and which I haven't:

> ### Required Features:
>
> 1. ★ Cohort list
> 1. ★ Sorted and formatted cohort list
> 1. ★ Interactive cohort list
> 1. ★ Student list
> 1. ★ Improved student list
> 1. ★ Additional student details
> 1. ★ Improved student details
> 1. ★ 1-on-1 section
> 1. ★ Interactive 1-on-1 section
> 1. ★ Style your application

## Reflection

I am offically finished, as of **Wednesday, Feb 22** at **12:41** .

I'm really proud of **making through this project**. The idea of this project was overwhelming and then life happend and actually made it overwhelming. But I finished! And early.

I really struggled with **motivation**. Like there was so much happening this week/weekend. I really focused on the plan thought which was nice. The plan made it managable. I went from requirment to requirment and just worked on one at a time. Once I got the componenet functional I refactored and then moved on. Once the project was finished I refactored everything all at once.

My greatest take away is **stick to the plan**. Next time I make a plan I'll write out a seperate "Thinking In React" checklist for each component. Because I eneded up refrencing the checked off ckecklist for almost every component. That way I can focus more on following the plan with less jumping back and forth.

# Log Part 2: The Log Continues

After completing this project I challenged myself to...

1. Create a reducer function
   - I decided against a reducer function becuase there isn't a lot of complex state logic. Each state is set by one user interaction and seen by no more than two components. A reducer wouldn't serve much purpose.
1. Use context to pass state/dispatch
   - I decided against a reducer function becuase, as stated above, there isn't a lot of complex state logic, and because I refacroted to avoid unneccessary nesting of components. Context for state seems a bit excessive.
1. Build a backend
   - Sorry but just no. Not right now.
1. Add animations using the animation library
   - maybe...
1. Add dark mode by using useContext.
   - maybe...
1. Some other challenge
